function search(){
    let ENG  = [
        'antifungal',
        'antifungals',
        'bifunctional',
        'cofunction',
        'cofunctions',
        // …and many more
    ];
    let VIE =   [
        'kháng nấm',
        'thuốc chống nấm',
        'lưỡng chức',
        'đồng chức năng',
        'đồng chức năng',
        // …và nhiều thứ khác nữa
    ];

    let word = document.getElementById('dictionary').value;

    let position = ENG.indexOf(word);
    if(position !== -1){
        document.getElementById('display').innerText = "Result: " + VIE[position];
    }else{
        document.getElementById('display').innerText = "The word you enter is not valid!";
    }


}