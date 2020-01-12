import React, { useCallback } from 'react';

let hazards = {};

const initObject = {
  questions: [
    {
      controls: [
        {
          text: 'control 1'
        }
      ],
      title: 'question 1',
      children: [
        {
          title: 'question 1-1',
          children: []
        },
        {
          title: 'question 1-2',
          children: [
            {
              title: 'question 1-2-1',
              children: []
            },
            {
              title: 'question 1-2-2',
              children: []
            }
          ]
        }
      ]
    },
    {
      title: 'question 2',
      children: []
    }
  ]
};

const normalizeData = (dataArr, childProperty) => {
  const result = [];
  const callback = parentKey => (entries, cur) => {
    //define index key of the current entity
    const key = result.length;
    //get array children array
    let children = cur[childProperty];
    //push a new entity
    let entity = {
      ...cur,
      key,
      children,
      parentKey
    };
    //push parent to result array
    result.push(entity);
    //push parent key to entries array
    entries.push(key);
    //recursively map the child if condition met
    if (children && children.length > 0) {
      entity.children = children.reduce(callback(key), []);
    }
    //return entries
    return entries;
  };

  return {
    result,
    entries: dataArr.reduce(callback(-1), [])
  };
};

const getDenormalizeMapper = (data, leafCB, nodeCB) => {
  //construct mapper
  const mapper = i => {
    const entity = data[i];
    if (entity.children && entity.children.length > 0) {
      return nodeCB(entity, mapper);
    }
    return leafCB(entity);
  };
  //return mapper
  return mapper;
};

const { result, entries } = normalizeData(initObject.questions, 'children');
hazards = {
  questions: result,
  entries
};
console.log(hazards);

console.log(
  entries.map(
    getDenormalizeMapper(
      result,
      question => question,
      (question, mapper) => ({
        ...question,
        children: question.children.map(mapper)
      })
    )
  )
);

export default () => {
  const { questions, entries } = hazards;

  const mapperCallback = useCallback(
    getDenormalizeMapper(
      questions,
      question => <li key={question.key}>{question.title}</li>,
      (question, mapper) => (
        <li key={question.key}>
          {question.title}
          <ol>{question.children.map(mapper)}</ol>
        </li>
      )
    ),
    hazards
  );

  return <ol>{entries.map(mapperCallback)}</ol>;
};
