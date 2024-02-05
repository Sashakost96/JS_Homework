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
    
    if (company.name === companyName) {
        return company;
    }

    
    if (company.clients) {
        for (const client of company.clients) {
            if (client.name === companyName) {
                return client;
            }

            
            if (client.partners) {
                const subCompany = findValueByKey(companyName, { clients: client.partners });
                if (subCompany) {
                    return subCompany;
                }
            }
        }
    }

    
    return null;
}


const companyNameToFind = 'Клієнт 1.2.3';
const subCompanyInfo = findValueByKey(companyNameToFind, company);

if (subCompanyInfo) {
    console.log(`Інформація про компанію "${companyNameToFind}":`, subCompanyInfo);
} else {
    console.log(`Компанія "${companyNameToFind}" не знайдена.`);
}
