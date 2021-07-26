let paramMC = {
    r:110,
    fill: "#fff",
    stroke: "#000",
    strokeWidth: 8,
    colorText: "#000",
    strokeWidthLine: 4,
    colorLine: "#000",
}

let paramSC = {
    r:80,
    fill: "#fff737",
    stroke: "#000",
    strokeWidth: 5,
    colorText: "#000",
    strokeWidthLine: 2,
    colorLine: "#000",
}

let paramTC = {
    r:50,
    fill: "#000",
    stroke: "#000",
    strokeWidth: 0,
    colorText: "#fff",
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

let $_wrap = '&shy;';

let textMC = [
    [paramMC,'classMCcontainer','circle_main'],
    [`Kommunikation`,'classMC1'],
    [`Kollaboration`,'zero_sub classMC2'],
    [`Überpüfung`,'classMC3'],
    [`Evaluation`,'classMC4'],
]

/////////////////////////////////////////////////////////
let textSC =[
    //Kommunikation
    [
        [paramSC,'circle_sub_item','classMC1'],
        [`synchron`,'classSC1'],
        [`asynchron`,'classSC2'],
    ],
    //kollaboration
    [
        [paramSC,'circle_sub_item','classMC2'],
        [`zero_sub`,'zero_sub'],
    ],
    //Überpüfung
    [
        [paramSC,'circle_sub_item','classMC3'],
        [`formativ`,'classSC1'],
        [`produkt`,'classSC2'],
        [`klausur`,'classSC3'],
        [`summativ`,'classSC4'],
        [`mündliche prüfung`,'classSC6'],
    ],
    //Evaluation
    [
        [paramSC,'circle_sub_item','classMC4'],
        [`Evaluation`,'classSC1'],
        [`Selbst${$_wrap}evaluation`,'classSC2'],
    ],

]

/////////////////////////////////////////////////////////
let textTC =[
    //////Kommunikation
    //synchron
    [
        [paramTC,'circle_target_item','classSC1','classMC1'],
        ...app.getToolNameArrayBySecenario(1)
    ],
    //asynchron
    [
        [paramTC,'circle_target_item','classSC2','classMC1'],
        ...app.getToolNameArrayBySecenario(2)
    ],
    //////kollaboration
    //zero
    [
        [paramTC,'circle_target_item','zero_sub','classMC2'],
        ...app.getToolNameArrayBySecenario(3)
    ],
    //////Überpüfung
    // [`formativ`,'classSC1'],
    [
        [paramTC,'circle_target_item','classSC1','classMC3'],
        ...app.getToolNameArrayBySecenario(5)
    ],
    // [`produkt`,'classSC2'],
    [
        [paramTC,'circle_target_item','classSC2','classMC3'],
        ...app.getToolNameArrayBySecenario(7)
    ],
    // [`klausur`,'classSC3'],
    [
        [paramTC,'circle_target_item','classSC3','classMC3'],
        ...app.getToolNameArrayBySecenario(8)
    ],
    // [`summativ`,'classSC4'],
    [
        [paramTC,'circle_target_item','classSC4','classMC3'],
        ...app.getToolNameArrayBySecenario(6)
    ],
    // [`mündliche prüfung`,'classSC6'],
    [
        [paramTC,'circle_target_item','classSC6','classMC3'],
        ...app.getToolNameArrayBySecenario(9)
    ],
    //////Kommunikation
    //evaluation
    [
        [paramTC,'circle_target_item','classSC1','classMC4'],
        ...app.getToolNameArrayBySecenario(10)
    ],
    //selbstevaluation
    [
        [paramTC,'circle_target_item','classSC2','classMC4'],
        ...app.getToolNameArrayBySecenario(11)
    ],
]