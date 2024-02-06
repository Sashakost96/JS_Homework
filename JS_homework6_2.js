const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
}

function findValueByKey(companyName, company) {
    const stack = [company];

    while (stack.length > 0) {
        const currentCompany = stack.pop();

        if (currentCompany.name === companyName) {
            return currentCompany;
        }
        if (currentCompany.clients)  {
            stack.push(...currentCompany.clients); //to the end
        }
        if (currentCompany.partners) {
            stack.push(...currentCompany.partners);
        }
        
    }
    
    return null;
}

const myCompanyIs = 'Клієнт 1';
const subCompanyInfo = findValueByKey(myCompanyIs, company);

if (subCompanyInfo) {
    console.log(`Інформація про компанію "${myCompanyIs}":`, subCompanyInfo);
} else {
    console.log(`Компанія "${myCompanyIs}" не знайдена.`);
}
