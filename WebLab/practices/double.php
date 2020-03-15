<?php

//values in day 1
$numbers = range(1, 15);

function double365($n)
{
    return $n * 2;
}

//day 1 means today, so value will remain same for 1. test to find value for day 2(tomorrow),3(day after tomorrow)...and so on

function value_in_day($day)
{
    global $numbers;
    $temp = $numbers;
    for ($i = 1; $i < $day; $i++) {
        $temp = array_map('double365', $temp);
    }
    return $temp;
}


//value in day 4

print_r(value_in_day(4));



// echo  "old value:";
// print_r($numbers);

