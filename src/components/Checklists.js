const checklists = {
    'attendance': {
        name : 'Atendimento',
        checks: {
            fiber: {
                name: ['Fibra','fiber'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
            building: {
                name: ['Prédio/Condomínio', 'building'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
            radio: {
                name: ['Radio', 'radio'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
            smart: {
                name: ['Smartzap', 'smart'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
        }
    },
    'maintenance': {
        name : 'Manutenção',
        checks: {
            huawei: {
                name: ['Huawei','huawei'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
            zte: {
                name: ['ZTE','zte'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
            fiberhome_cdata: {
                name: ['Fiberhome/C-DATA', 'fiberhome_cdata'],
                q1: 'Responsável pela realização dos procedimentos (Cliente):'
            },
        }
    },
}

// const [typeOfCheclists, setTypeOfChecklists] = useState([
//     {value: 'attendance', label: 'Attendance'},
//     {value: 'maintenance', label: 'Maintenance'},
//     {value: 'activation', label: 'Activation'},
//     {value: 'ns_migration', label: 'NS Migration'},
//     {value: 'corp_emp', label: 'Corporate and Business'},
//     {value: 'retention', label: 'Retention'},
//     {value: 'Smartzap', label: 'Smartzap'},
//     {value: 'out_point', label: 'Out Point'},
// ]);


export default checklists