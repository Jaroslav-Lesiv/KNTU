export default {
    user: {
        isLogin: false,
        profile: {
            name: '',
            firstname: '',
            middlename: '',
            email: '',
            age: '',
            city: '',
            country: '',
            logo: '',
            id: '',
        }
    },
    loading: {
        isLoader: true,
        isRequestLoader: false
    },
    auth: {
        modal: {
            isShowLogInModal: false,
            isShowModal: false,
            isShowSignUpModal: false
        },
        login: {
            errors: []
        },
        sign: {
            errors: []
        },
    },
    home: {
        list: [
            {
                title: 'Спеціальність "Прикладна механіка"',
                description: `Вид діяльності - розвиток сучасних технологій обробки металів, дослідження, розробка і виробництво конкурентоспроможних машин, інструментів і устаткування за допомогою персональних комп'ютерів, менеджмент і маркетинг у машинобудуванні. Навчальні об'єкти: засоби виробництва машин і устаткування. Безперервна 9-семестрова робота на ПОЕМ. Сучасні технології, механізація й автоматизація промисловості машинобудування. Промисловий маркетинг, реклама й інформаційне забезпечення попиту машинобудівної продукції, винахідництво.
                <h3>Навчання надає наступні компетентності:</h3>
                <ul>
                    <li>Навчання надає наступні компетентності:</li>
                    <li>- здатність до пошуку, оброблення та аналізу інформації з удосконалення організації і управління вантажними і пасажирськими перевезеннями на регіональному і міжнародному рівнях різними видами транспорту;</li>
                    <li>- здатність використовувати знання і практичні навички маркетингового ринку в транспортній сфері;</li>
                    <li>- Здатність використовувати знання з організації управління, планування виробничої діяльності, транспортних підприємств та організацій;</li>
                    <li>- Здатність використовувати знання й практичні навички в галузі безпеки дорожнього руху в містах, для удосконалення методів організації та функціонування транспортної мережі міст;</li>
                    <li>- Здатність використовувати знання й уміння для розробки транспортно-технологічних схем доставки і зберігання вантажів, удосконалення методів організації та функціонування логістичних систем.</li>
                </ul>`
            },
            {
                title: 'Спеціальність "Автомобільний транспорт"',
                description: `Підготовка зі спеціальності дозволяє забезпечити підготовку фахівців, які з одного боку, володіють знанням сучасного технологічного устаткування станцій технічного обслуговування та автомобільно-будівних заводів, методиками сучасних інженерних розрахунків, а з другого боку володіють навичками експлуатаційника. Випускники цієї спеціальності отримують навички роботи, як інженера-проектувальника так і навички експлуатаційника-механіка. Ця спеціальність акумулює усі новітні наукові досягнення, тримає руку на пульсі ринкових потреб та стану в енергетиці і сировинних галузях, та і сьогодні, і в майбутньому буде користуватися особливим попитом як у нашій країні, так і в усьому світі.
                `
            },
        ]
        // [
        //     {
        //         title: 'Транспортні технології (на автомобільному транспорті)',
        //         description: [
        //             {
        //                 key: 'text',
        //                 text: 'Спеціальність 275 -Транспортні технології (на автомобільному транспорті)'
        //             },
        //             {
        //                 key: 'list',
        //                 list_title: 'Навчання надає наступні компетентності:',
        //                 items: [
        //                     'Здатність до пошуку, оброблення та аналізу інформації з удосконалення організації і управління вантажними і пасажирськими перевезеннями на регіональному і міжнародному рівнях різними видами транспорту;',
        //                     'Здатність використовувати знання і практичні навички маркетингового ринку в транспортній сфері;',
        //                     'Здатність використовувати знання з організації управління, планування виробничої діяльності, транспортних підприємств та організацій',
        //                     'Здатність використовувати знання й практичні навички в галузі безпеки дорожнього руху в містах, для удосконалення методів організації та функціонування транспортної мережі міст',
        //                     'Здатність використовувати знання й уміння для розробки транспортно-технологічних схем доставки і зберігання вантажів, удосконалення методів організації та функціонування логістичних систем.'
        //                 ]
        //             },
        //             {
        //                 key: 'list',
        //                 list_title: 'Сфера діяльності випускника:',
        //                 items: [
        //                     'Фахівець з відділу Державтоінспекції, підрозділу митної служби;',
        //                     'Фахівець з відділу безпеки руху транспортних підприємств;',
        //                     'Фахівець з відділу проектно – експлуатаційного транспортного підприємства;',
        //                     'Фахівець з експедиційного підприємства по організації автомобільних перевезень (логістичні підрозділи).'
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Автомобільний транспорт',
        //         description: 'Фахівець цієї спеціальності може працювати на підприємствах легкої промисловості (швейних, взуттєвих, текстильних, трикотажних та ін.) та побутового обслуговування (підприємства сервісного технічного обслуговування та ремонту швейних, пральних машин, побутових холодильників, кондиціонерів, енергозберігаючого електропобутового обладнання та ін.). Випускник кафедри може займати посади менеджера сервісного обслуговування, інженера-конструктора, інженера-механіка, головного інженера, начальника ремонтно-механічного цеху та майстерень, головного механіка, начальника технічного відділу та ін.'
        //     },
        // ]
    },
    message: {
    },
    works: {
        list: [
            {
                title: `Моделювання гідродинаміки віброкиплячих шарів`,
                date: `2006.`,
                author: `Русанов С.А., Луняка К.В., Михайлик В.Д.`,
                link: ``,
            },
            {
                title: `Математичне моделювання процесу віброкипіння сипких середовищ`,
                date: `2006`,
                author: `Русанов С.А., Луняка К.В., Карманов В.В.`,
                link: ``,
            },
            {
                title: `Особливості процесу віброкипіння шару сипкого матеріалу на вертикально вібруючих поверхнях `,
                date: `2006`,
                author: `Русанов С.А., Луняка К.В., Чумаков Г.А.`,
                link: ``,
            },
            {
                title: `Перспективи введення вібраційних дій у процес тіпання льону`,
                date: `2006`,
                author: `Лобов О.О., Русанов С.А., Валько М.І. `,
                link: ``,
            },
            {
                title: `Дослідження процесу віброкипіння дисперсних середовищ `,
                date: `2007`,
                author: `Русанов С.А., Луняка К.В., Смагін П.В.`,
                link: ``,
            },
            {
                title: `Некоторые теоретические аспекты процесса виброкипения `,
                date: `2007`,
                author: `Русанов С.А., Луняка К.В., Ардашев В.А. `,
                link: ``,
            },
            {
                title: `Гідродинаміка віброкиплячого шару, поперемінно контактуючого з двома вібруючими поверхнями.`,
                date: `2007`,
                author: `Русанов С.А., Луняка К.В. `,
                link: ``,
            },
            {
                title: `Проблемы исследования процесса смешения сыпучих материалов и пути их решения`,
                date: `2007`,
                author: `Луняка К.В., Литвиненко О.В., Русанов С.А.`,
                link: ``,
            },
            {
                title: `Визначення витрат потужності при змішуванні сипких матеріалів.`,
                date: `2008`,
                author: `Луняка К.В., Литвиненко О.В., Русанов С.А. `,
                link: ``,
            },
            {
                title: `Пат. № 28015 U Україна, МПК F28D7/10. Теплообмінник `,
                date: `2006`,
                author: `С.А.Русанов, К.В.Луняка, О.І.Клюєв`,
                link: ``,
            },
            {
                title: `Особливості процесів вібровпливів на шари гранульованих та волокнистих матеріалів`,
                date: `2006`,
                author: `Луняка К.В., Русанов С.А., Лобов О.О.`,
                link: ``,
            },
            {
                title: `Пат. №56670 Україна, МПК G01M 7/00. ВІБРОСТЕНД`,
                date: `2011`,
                author: `Русанов С.А., Луняка К.В., Клюєв О.І.`,
                link: ``,
            },
            {
                title: `Особливості процесів вібровпливів на шари гранульованих та волокнистих матеріалів`,
                date: `2006`,
                author: `Луняка К.В., Русанов С.А., Лобов О.О.`,
                link: ``,
            },
            {
                title: `Пат. № 49427 Україна, МПК B01F 15/02. АПАРАТ ДЛЯ ПЕРЕМІШУВАННЯ В СИСТЕМАХ РІДИНА-ТВЕРДА РЕЧОВИНА, РІДИНА-РІДИНА, А ТАКОЖ ПРОВЕДЕННЯ ХІМІЧНИХ РЕАКЦІЙ У ВКАЗАНИХ СИСТЕМАХ`,
                date: `2010`,
                author: `Луняка К.В.,Чумаков Г.А., Вус Д.Н., Русанов С.А. `,
                link: ``,
            }
        ]
    },
    teachers: {
        teachers_list: [
            {
                firstname: 'Сєліверстов',
                middlename: 'Ігор',
                lastname: 'Анатолійович',
                image: 'dekan.jpg',
                role: 'Декан',
                short_description: `кандидат технічних наук , доцент, декан факультету Інженерії та транспорту`,
                full_description: '',
                like_count: new Set(),
                id: 1
            },
            {
                firstname: 'Розов',
                middlename: 'Юрій',
                lastname: 'Георгійович',
                image: 'rozov.jpg',
                role: 'Prorektor',
                short_description: `Заслужений діяч науки і техніки, доктор технічних наук, професор, перший проректор ХНТУ`,
                full_description: '',
                like_count: new Set(),
                id: 2
            },
            {
                firstname: 'Мєшков',
                middlename: 'Юрій',
                lastname: 'Євгенійович',
                image: 'meshkov.jpg',
                role: 'teacher',
                short_description: `Канд. техн. наук, доцент, заступник зав. каф. ТС і ТС`,
                full_description: '',
                like_count: new Set(),
                id: 3
            },
            {
                firstname: 'Дмитрієв',
                middlename: 'Дмитро',
                lastname: 'Олексійович',
                image: 'dmitriev.jpg',
                role: 'Декан',
                short_description: `Доктор техн. наук, професор`,
                full_description: '',
                like_count: new Set(),
                id: 4
            },
            {
                firstname: 'Войтович',
                middlename: 'Ольга',
                lastname: 'Андріанівна',
                image: 'voitovich.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 5
            },
            {
                firstname: 'Клюєв',
                middlename: 'Олег',
                lastname: 'Ігорович',
                image: 'kluyev.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 6
            },
            {
                firstname: 'Лобов',
                middlename: 'Олександр',
                lastname: 'Олександрович',
                image: 'lubov.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 7
            },
            {
                firstname: 'Русанов',
                middlename: 'Сергій',
                lastname: 'Аркадійович',
                image: 'rysanov.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 8
            },
            {
                firstname: 'Луб’яний',
                middlename: 'Павел',
                lastname: 'Вікторович',
                image: 'lubyanui.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 9
            },
            {
                firstname: 'Славич',
                middlename: 'В’ячеслав',
                lastname: 'Петрович',
                image: 'slavuch.jpg',
                role: 'Декан',
                short_description: `Канд. техн. наук, доцент`,
                full_description: '',
                like_count: new Set(),
                id: 10
            },
            {
                firstname: 'Ткач',
                middlename: 'Віра',
                lastname: 'Олексіївна',
                image: 'tkach.jpg',
                role: 'Декан',
                short_description: `Старший викладач`,
                full_description: '',
                like_count: new Set(),
                id: 11
            },
            {
                firstname: 'Рачинський',
                middlename: 'Володимир',
                lastname: 'Віталійович',
                image: 'rachunski.jpg',
                role: 'Декан',
                short_description: `Старший викладач`,
                full_description: '',
                like_count: new Set(),
                id: 12
            },
            {
                firstname: 'Єрьоменко',
                middlename: 'Вячеслав',
                lastname: 'Юрійович',
                image: 'ermolenko.jpg',
                role: 'Декан',
                short_description: `Старший викладач`,
                full_description: '',
                like_count: new Set(),
                id: 13
            },
            {
                firstname: 'Музалевська',
                middlename: 'Юлія',
                lastname: 'Юріївна',
                image: 'myzalevska.jpg',
                role: 'Декан',
                short_description: `Асистент`,
                full_description: '',
                like_count: new Set(),
                id: 14
            }
        ],
        sub_teachers_list: [
            {
                firstname: 'Шатохіна',
                middlename: 'Ірина',
                lastname: 'Анатоліївна',
                image: 'shatcyihina.jpg',
                role: 'Декан',
                short_description: `Інженер кафедри ТС і ТС, старший викладач`,
                full_description: '',
                like_count: new Set(),
                id: 15
            },
            {
                firstname: 'Сусорова',
                middlename: 'Олена',
                lastname: 'Анатоліївна',
                image: 'sysorova.jpg',
                role: 'Декан',
                short_description: `Завідуюча навчальною лабораторією кафедри Транспортні системи і технічний сервіс`,
                full_description: '',
                like_count: new Set(),
                id: 16
            },
            {
                firstname: 'Бойко',
                middlename: 'Юрій',
                lastname: 'Петрович',
                image: 'bojko.jpg',
                role: 'Декан',
                short_description: `Технік І категорії`,
                full_description: '',
                like_count: new Set(),
                id: 1
            }
        ]
    }
};
