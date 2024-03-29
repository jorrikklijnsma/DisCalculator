export const hourConvert = {
    0:'twaalf',
    1:'één',
    2:'twee',
    3:'drie',
    4:'vier',
    5:'vijf',
    6:'zes',
    7:'zeven',
    8:'acht',
    9:'negen',
    10:'tien',
    11:'elf',
    12:'twaalf',
    13:'één',
    14:'twee',
    15:'drie',
    16:'vier',
    17:'vijf',
    18:'zes',
    19:'zeven',
    20:'acht',
    21:'negen',
    22:'tien',
    23:'elf',
    24:'twaalf',
}
export const minuteConvert = {
    0:'nul',
    1:'één',
    2:'twee',
    3:'drie',
    4:'vier',
    5:'vijf',
    6:'zes',
    7:'zeven',
    8:'acht',
    9:'negen',
    10:'tien',
    11:'elf',
    12:'twaalf',
    13:'dertien',
    14:'veertien',
    15:'vijftien',
    16:'zestien',
    17:'zeventien',
    18:'achttien',
    19:'negentien',
    20:'twintig',
    21:'eenentwintig',
    22:'tweeëntwintig',
    23:'drieëntwintig',
    24:'vierentwintig',
    25:'vijfentwintig',
    26:'zesentwintig',
    27:'zevenentwintig',
    28:'achtentwintig',
    29:'negenentwintig',
    30:'dertig',
    31:'eenendertig',
    32:'tweeëndertig',
    33:'drieëndertig',
    34:'vierendertig',
    35:'vijfendertig',
    36:'zesendertig',
    37:'zevenendertig',
    38:'achtendertig',
    39:'negenendertig',
    40:'veertig',
    41:'eenenveertig',
    42:'tweeënveertig',
    43:'drieënveertig',
    44:'vierenveertig',
    45:'vijfenveertig',
    46:'zesenveertig',
    47:'zevenenveertig',
    48:'achtenveertig',
    49:'negenenveertig',
    50:'vijftig',
    51:'eenenvijftig',
    52:'tweeënvijftig',
    53:'drieënvijftig',
    54:'vierenvijftig',
    55:'vijfenvijftig',
    56:'zesenvijftig',
    57:'zevenenvijftig',
    58:'achtenvijftig',
    59:'negenenvijftig'
}

export const quarters = [
    { text: 'heel uur', value: 0 },
    { text: 'kwart over', value: 15 },
    { text: 'half', value: 30 },
    { text: 'kwart voor', value: 45 }
]
export const interval5Minutes = [
    { text: '5 over', value: 5 },
    { text: '10 over', value: 10 },
    { text: '15 over', value: 15 },
    { text: '20 over', value: 20 },
    { text: '25 over', value: 25 },
    { text: '30 over', value: 30 },
    { text: '25 voor', value: 35 },
    { text: '20 voor', value: 40 },
    { text: '15 voor', value: 45 },
    { text: '10 voor', value: 50 },
    { text: '5 voor', value: 55 },
]


export const intervalCombined = [
    { text: 'heel uur', value: 0 },
    { text: '5 over', value: 5 },
    { text: '10 over', value: 10 },
    { text: 'kwart over', value: 15 },
    { text: '15 over', value: 15 },
    { text: '10 voor half', value: 20, nextHour: true},
    { text: '20 over', value: 20 },
    { text: '5 voor half', value: 25, nextHour: true},
    { text: '25 over', value: 25 },
    { text: 'half', value: 30, nextHour: true},
    { text: '30 over', value: 30 },
    { text: '30 voor', value: 30, nextHour: true},
    { text: '5 over half', value: 35, nextHour: true},
    { text: '25 voor', value: 35, nextHour: true },
    { text: '10 over half', value: 40, nextHour: true},
    { text: '20 voor', value: 40, nextHour: true },
    { text: 'kwart voor', value: 45, nextHour: true },
    { text: '15 voor', value: 45, nextHour: true },
    { text: '10 voor', value: 50, nextHour: true },
    { text: '5 voor', value: 55, nextHour: true },
]


export const hours = [
    {text: 'één', value: 1},
    {text: 'twee', value: 2},
    {text: 'drie', value: 3},
    {text: 'vier', value: 4},
    {text: 'vijf', value: 5},
    {text: 'zes', value: 6},
    {text: 'zeven', value: 7},
    {text: 'acht', value: 8},
    {text: 'negen', value: 9},
    {text: 'tien', value: 10},
    {text: 'elf', value: 11},
    {text: 'twaalf', value: 12}
]