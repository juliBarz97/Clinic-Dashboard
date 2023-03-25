import { ResponsiveLine } from "@nivo/line";
import { balance } from "../data/data";
const LineChart = () => {
 
  return (
    <ResponsiveLine
    data={balance}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisBottom={{
        orient: 'bottom',
        color: 'white',
        tickSize: 5,
        tickPadding: 5,
        itemTextColor: 'white',
        tickRotation: 0,
        legend: 'Month',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 3,
        itemTextColor: 'white',
        tickRotation: 0,
        legend: 'Incomes and Outcomes ($USD)',
        legendOffset: -50,
        legendPosition: 'middle'
    }}
    pointSize={10}
    
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    curve= "cardinal"
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemTextColor: 'black',
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, 1)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: '#003e51',
                        itemOpacity: 1,
                        itemTextColor: 'white'
                    }
                }
            ]
        }
    ]}
/>
  );
};

export default LineChart;