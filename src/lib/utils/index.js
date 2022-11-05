const findDataIndex = (dataType, dataValue, dataset) => {
  return dataset.findIndex((date) => date[dataType] === dataValue);
};

const makeAverage = (number, length) => Math.round(number / length);

export const calculateAverageData = (startDate, endDate, dataset) => {
  const startIndex = findDataIndex("date", startDate, dataset);
  const endIndex = findDataIndex("date", endDate, dataset);
  const selectedDataset = dataset.slice(startIndex, endIndex + 1);
  const dataLength = selectedDataset.length;
  let resultData = {
    roas: 0,
    cost: 0,
    imp: 0,
    click: 0,
    conv: 0,
    convValue: 0
  };

  selectedDataset.forEach(({ roas, cost, imp, click, conv, convValue }) => {
    resultData.roas += roas;
    resultData.cost += cost;
    resultData.imp += imp;
    resultData.click += click;
    resultData.conv += conv;
    resultData.convValue += convValue;
  });

  const { roas, cost, imp, click, conv, convValue } = resultData;

  return {
    startDate,
    endDate,
    roas: makeAverage(roas, dataLength),
    cost: makeAverage(cost, dataLength),
    imp: makeAverage(imp, dataLength),
    click: makeAverage(click, dataLength),
    conv: makeAverage(conv, dataLength),
    convValue: makeAverage(convValue, dataLength)
  };
};
