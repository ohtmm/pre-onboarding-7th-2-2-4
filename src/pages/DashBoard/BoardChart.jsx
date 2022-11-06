import React from "react";
import SelectButton from "../../component/SelectButton";
import Chart from "react-apexcharts";
import styled from "styled-components";

export default function BoardChart() {
  return (
    <BoardChartContainer>
      <SelectButton />
      <SelectButton />
      <Chart
        type="line"
        height="100%"
        series={[
          {
            name: "hello",
            data: [1, 2, 3, 4, 5]
          },
          {
            name: "sale",
            data: [15, 18, 20, 22, 28]
          }
        ]}
        options={{
          yaxis: {
            min: 0
          },
          chart: {
            toolbar: {
              show: false
            }
          }
        }}
      />
    </BoardChartContainer>
  );
}

const BoardChartContainer = styled.div`
  width: 1000px;
  height: 280px;
  margin: 40px auto;
`;
