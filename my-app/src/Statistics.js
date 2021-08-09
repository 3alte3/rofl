import React, { Component }  from 'react';
import Chart from "react-google-charts";

function Statistics() {
    return (
        <Chart
            width={'900px'}
            height={'350px'}
            chartType="Table"
            char
            loader={<div>Loading Chart</div>}
            data={[
                ['Описание', 'Причина закрытия объявления', 'Дата закрытия'],
                [
                    'Пропала бенгальская кошка',
                    'Объявление не обновлялось более 7 дней ',
                    new Date(2021, 8, 2),
                ],
                [
                    'Потерян черный кот',
                    'Нашли мертвым. Причина: попал под машину',
                    new Date(2021, 8, 3),
                ],
                [
                    'Потерялся кот британец',
                    'Вернулось само',
                    new Date(2021, 5, 13),
                ],
                ['Потерялся белый кот',
                    'Найден',
                    new Date(2021, 7, 6)],
                [
                    'Пропала немецкая овчарка',
                    'Найден',
                    new Date(2021, 3, 12),
                ],
                [
                    'Пропала кошка , кличка лаки',
                    'Найдено мертвым.Причина: неизвестна',
                    new Date(2021, 5, 12),
                ],
                [
                    'Пропал пекинес',
                    'Вернулось само',
                    new Date(2021, 5, 23),
                ],
                [
                    'Пропал бультерьер',
                    'Найдено мертвым.Причина: попало под машину',
                    new Date(2020, 10, 5),
                ],
                [
                    'Пропала собака породы хаски',
                    'Объявление не обновлялось более 7 дней',
                    new Date(2021, 5, 12),
                ],
                [
                    'Пропал французский бульдог',
                    'Вернулось само',
                    new Date(2021, 8, 2),
                ],
                [
                    'Пропала черная кошка по кличке Рима',
                    'Объявление не обновлялось более 7 дней',
                    new Date(2021, 6, 22),
                ]
            ]}
            rootProps={{ 'data-testid': '1' }}
            chartPackages={['corechart', 'controls']}
            controls={[
                {
                    controlType: 'DateRangeFilter',
                    options: {
                        filterColumnLabel: 'Дата закрытия',
                        ui: { format: { pattern: 'dd/mm/yyyy' } },
                    },
                },
            ]}
            />
    );
}

 export  default Statistics;