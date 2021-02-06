(arrays => {
    const LARGE_COLOR_PALETTE = [
        '#1f77b4',
        '#aec7e8',
        '#ff7f0e',
        '#ffbb78',
        '#2ca02c',
        '#98df8a',
        '#d62728',
        '#ff9896',
        '#9467bd',
        '#c5b0d5',
        '#8c564b',
        '#c49c94',
        '#e377c2',
        '#f7b6d2',
        '#7f7f7f',
        '#c7c7c7',
        '#bcbd22',
        '#dbdb8d',
        '#17becf',
        '#9edae5',
        '#525c72',
        '#21ce03',
        '#fe3302',
        '#fa46ff',
        '#876d0d',
        '#a24568',
        '#159bfc',
        '#14926d',
        '#9149f8',
        '#fd5a93',
        '#85706a',
        '#ad4d1e',
        '#4a8b00',
        '#a96bb1',
        '#04859b',
        '#4d6643',
        '#e2770f',
        '#4567c6',
        '#d517a9',
        '#76527b',
        '#c310f3',
        '#d5324b',
        '#7c78a9',
        '#657b79',
        '#7d80fd',
        '#949401',
        '#b46965',
        '#017065',
        '#6f864d',
        '#805432',
        '#12ad4b',
        '#b86dfd',
        '#b0743b',
        '#c66495',
        '#eb6555',
        '#5c5c59',
        '#0e7b3a',
        '#7b5057',
        '#5785b7',
        '#a14297',
        '#986782',
        '#884eaf',
        '#ff3fc6',
        '#296b97',
        '#5e700c',
        '#e6147f',
        '#635b98',
        '#746b7b',
        '#6fa914',
        '#756c44',
        '#af830a',
        '#d85311',
        '#d25ac2',
        '#994d45',
        '#62768b',
        '#476263',
        '#7369ce',
        '#ff3d60',
        '#985b0b',
        '#2e7cfe',
        '#13938d',
        '#966ec9',
        '#d85d73',
        '#537f60',
        '#45934d',
        '#fe6001',
        '#166d7a',
        '#886996',
        '#c55345',
        '#cd5aeb',
        '#db07dc',
        '#9a674c',
        '#c1387f',
        '#719433',
        '#cd6c42',
        '#666f60',
        '#586d9d',
        '#067bca',
        '#bb6005',
        '#675665',
        '#aa4cbe',
        '#2b6f4d',
        '#5e66fb',
        '#a341e1',
        '#927941',
        '#1295ca',
        '#996efb',
        '#675942',
        '#b24250',
        '#dd3a2a',
        '#894b70',
        '#7c8011',
        '#407d7e',
        '#946064',
        '#df4aa2',
        '#7182cd',
        '#635879',
        '#60642a',
        '#4e763b',
        '#21b10b',
        '#a85587',
        '#b65c74',
        '#7a5d20',
        '#606971',
    ];

    const CHART_DEFAULT_COLORS = [
        '#FEAA00',
        '#FEBC12',
        '#FECC4B',
        '#FFDE82',
        '#008E8C',
        '#26A4A2',
        '#53BAB8',
        '#87D0D0',
        '#0036FF',
        '#235EFF',
        '#5284FF',
        '#86ACFF',
        '#6500F8',
        '#8200FB',
        '#9E3FFD',
        '#BE7DFD',
        '#FE00FF',
        '#FE33FF',
        '#FE66FF',
        '#FE99FF',
        '#FA2A00',
        '#FB5533',
    ];

    const VIEW_TYPES = [
        'gallery',
        'pie-chart',
        'map',
        'timeline',
        'word-cloud',
        'scatterplot',
        'area-chart',
        'line-graph',
        'pie-set',
        'bar-chart',
        'globe',
        'table',
        'regional-map',
        'bubble-chart',
        'treemap',
    ];

    const MAP_STYLES = {
        COUNTRY: 'country',
        PIN: 'pin',
        BUBBLE: 'bubble',
        HEATMAP: 'heatmap',
    };

    const MAP_SCALE_TYPES = {
        LINEAR: 'linear',
        SQRT: 'sqrt',
    };

    const CUSTOM_COLUMN_DISABLED = 'None';
    const CUSTOM_COLUMN_NUMBER_OF_ITEMS = 'Number of Items';

    const ICONS_GROUPS = {
        TOPICS: 'Topics',
        SYMBOLS: 'Symbols',
        FLAGS: 'Flags',
        CUSTOMS: 'Custom Icons',
    };

    const ICONS_NAME_PREFIX = {
        [ICONS_GROUPS.TOPICS]: 'Topic ',
        [ICONS_GROUPS.SYMBOLS]: 'Symbol ',
        [ICONS_GROUPS.FLAGS]: 'Flag ',
        [ICONS_GROUPS.CUSTOMS]: '',
    };

    const ICONS_SETS = {
        [ICONS_GROUPS.TOPICS]: [
            'Agricultural',
            'Animals',
            'Art',
            'Charity',
            'Community',
            'Culture',
            'Education',
            'Entertainment',
            'Environment',
            'Film',
            'Finance',
            'Garages',
            'Government',
            'Health',
            'History',
            'Hospitals',
            'Hotels',
            'Industry',
            'International',
            'Justice',
            'Laboratory',
            'Libraries',
            'Military',
            'Misc Business',
            'Money',
            'Music',
            'Neighborhood',
            'Offices',
            'Parks',
            'Police',
            'Politics',
            'Recreation',
            'Religion',
            'Research',
            'Residential',
            'Restaurants',
            'Retail',
            'Safety',
            'Schools',
            'Science',
            'Services Business',
            'Services',
            'Sports',
            'Stadiums',
            'Technology',
            'Transit Station',
            'Transportation',
            'TV',
            'Warehouses',
            'Work',
        ],
        [ICONS_GROUPS.SYMBOLS]: ['Up', 'Down', 'Male', 'Female', 'None', 'Plus', 'Minus'],
        [ICONS_GROUPS.FLAGS]: [
            'Afghanistan',
            'Albania',
            'Algeria',
            'Angola',
            'Argentina',
            'Armenia',
            'Australia',
            'Austria',
            'Azerbaijan',
            'Bahrain',
            'Bangladesh',
            'Belarus',
            'Belgium',
            'Benin',
            'Bermuda',
            'Bolivia',
            'Bosnia and Herzegovina',
            'Botswana',
            'Brazil',
            'Bulgaria',
            'Burkina Faso',
            'Burundi',
            'Cameroon',
            'Canada',
            'Cape Verde',
            'Chad',
            'Chile',
            'China',
            'Colombia',
            'Combodia',
            'Costa Rica',
            "Cote d'Ivoire",
            'Croatia',
            'Cuba',
            'Cyprus',
            'Czech Republic',
            'Denmark',
            'Dominican Republic',
            'East Timor',
            'Ecuador',
            'Egypt',
            'El Salvador',
            'Eritrea',
            'Estonia',
            'Ethiopia',
            'European Union',
            'Finland',
            'France',
            'Gabon',
            'Georgia',
            'Germany',
            'Ghana',
            'Greece',
            'Guatemala',
            'Guinea',
            'Haiti',
            'Honduras',
            'Hong Kong',
            'Hungary',
            'Iceland',
            'India',
            'Indonesia',
            'Iran',
            'Iraq',
            'Ireland',
            'Israel',
            'Italy',
            'Jamaica',
            'Japan',
            'Jordan',
            'Kazakhstan',
            'Kenya',
            'Korea',
            'Kosovo',
            'Kuwait',
            'Kyrgyzstan',
            'Laos',
            'Latvia',
            'Lebanon',
            'Liberia',
            'Libya',
            'Liechtenstein',
            'Lithuania',
            'Luxembourg',
            'Malaysia',
            'Mali',
            'Malta',
            'Mauritius',
            'Mexico',
            'Moldova',
            'Monaco',
            'Mongolia',
            'Montenegro',
            'Morocco',
            'Mozambique',
            'Myanmar',
            'Namibia',
            'Nepal',
            'Netherlands',
            'New Zealand',
            'Nicaragua',
            'Niger',
            'Nigeria',
            'North Korea',
            'North Macedonia',
            'Norway',
            'Oman',
            'Pakistan',
            'Palestine',
            'Panama',
            'Papua New Guinea',
            'Paraguay',
            'Peru',
            'Philippines',
            'Poland',
            'Portugal',
            'Puerto Rico',
            'Qatar',
            'Romania',
            'Russia',
            'Rwanda',
            'San Marino',
            'Saudi Arabia',
            'Senegal',
            'Serbia',
            'Sierra Leone',
            'Singapore',
            'Sirilanka',
            'Slovakia',
            'Slovenia',
            'Somalia',
            'South Africa',
            'South Sudan',
            'Spain',
            'Suriname',
            'Sweden',
            'Switzerland',
            'Syria',
            'Taiwan',
            'Tanzania',
            'Thailand',
            'The Democratic Republic of the Congo',
            'Togo',
            'Trinidad and Tobago',
            'Tunisia',
            'Turkey',
            'Uganda',
            'Ukraine',
            'United Arab Emirates',
            'United Kingdom',
            'United States',
            'Uruguay',
            'Vatican City',
            'Venezuela',
            'Vietnam',
            'Virgin Islands (US)',
            'Zambia',
            'Zimbabwe',
        ],
    };

    const ICONS = {
        SETS: ICONS_SETS,
        GROUPS: ICONS_GROUPS,
        PREFIX: ICONS_NAME_PREFIX,
        ORDER: [ICONS_GROUPS.SYMBOLS, ICONS_GROUPS.TOPICS, ICONS_GROUPS.FLAGS, ICONS_GROUPS.CUSTOMS],
    };

    const SORT_BY = {
        TITLE: 'title',
        CREATED_AT: 'createdAt',
    };

    const MIN_CHART_HEIGHT = 400;
    const MIN_CHART_HEIGHT_EXTENDED = 460;

    const CUSTOM_SM_BREAKPOINT = 768;

    const EMBEDDED_HEIGHT_RATIO = 0.6;
    const EMBEDDED_NAVIGATION_BAR_HEIGHT = 40;

    const NOT_SPECIFIED = 'not-specified-value';

    const DOT_REPLACEMENT = '——DOT——';

    arrays.constants = {
        LARGE_COLOR_PALETTE,
        CHART_DEFAULT_COLORS,
        VIEW_TYPES,
        MAP_STYLES,
        MAP_SCALE_TYPES,
        CUSTOM_COLUMN_DISABLED,
        CUSTOM_COLUMN_NUMBER_OF_ITEMS,
        ICONS,
        SORT_BY,
        MIN_CHART_HEIGHT,
        MIN_CHART_HEIGHT_EXTENDED,
        CUSTOM_SM_BREAKPOINT,
        EMBEDDED_HEIGHT_RATIO,
        EMBEDDED_NAVIGATION_BAR_HEIGHT,
        NOT_SPECIFIED,
        DOT_REPLACEMENT,
    };
})(window.arrays);