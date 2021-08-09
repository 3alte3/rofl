import React, { Component }  from 'react';
import Chart from "react-google-charts";
import Statistics from "./Statistics";

function PieChart() {
    return (
<Chart
    width={'500px'}
    height={'300px'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
        ['Причина', 'Количество закрытых объявлений'],
        ['Объявление не обновлялось более 7 дней', 3],
        ['Нашли мертвым', 2],
        ['Вернулось само', 3],
        ['Найден', 2],
    ]}
    options={{
        title: 'Причина закрытия объявления',
    }}
    rootProps={{ 'data-testid': '1' }}
/>
    )
}
export  default PieChart;