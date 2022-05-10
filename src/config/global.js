export default {
  global: {
    componenteFormativo:
      'La micro y pequeña empresa y<br>su normativa tributaria',
    descripcionCurso:
      'Las pequeñas y medianas empresas (PYMES) han albergado un sin  número de puestos de trabajo, principalmente por su gran capacidad generadora de empleo, así como por su papel como eslabón fundamental de nuestra economía nacional.  En este componente conocerá sobre su naturaleza, su clasificación, su forma jurídica, su tamaño y su ámbito operacional, teniendo en cuenta la normativa tributaria que aplica para este sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de las micro y pequeñas empresas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Constitución y legalización de empresas en Colombia',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normatividad vigente',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requisitos tributarios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de sociedades',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marco tributario para la Pyme',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Obligaciones tributarias de una Pyme',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Clasificación de las empresas',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  icono: 'fas fa-sitemap',
      //  titulo: 'Sintesis',
      //  nombreRuta: 'sintesis',
      //},
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Actualicese. (2021). <em>Requisitos de carácter tributario para crear y mantener una empresa</em>.',
      link:
        'https://actualicese.com/requisitos-de-caracter-tributario-para-crear-y-mantener-una-empresa/',
    },
    {
      referencia: 'DIAN. (2020). <em>Que es la facturación electrónica</em>.',
      link:
        'https://www.dian.gov.co/impuestos/factura-electronica/factura-electronica/Paginas/que-es-la-factura-electronica.aspx',
    },
    {
      referencia:
        'Grupo Bancolombia. (2020). <em>Clasificación de las sociedades comerciales en Colombia</em>.',
      link:
        'https://www.grupobancolombia.com/wps/portal/negocios/actualizate/emprendimiento/tipos-de-sociedades-comerciales-en-colombia',
    },
    {
      referencia:
        'Jelpit. (2021). <em>Pymes: importancia y datos que debe saber</em>.',
      link:
        'https://www.jelpit.com/blog/empresas/emprendimiento/pymes-en-colombia-todo-lo-que-debes-conocer/',
    },
    {
      referencia:
        'JLC Auditors & Advisors. (2021). <em>Cómo crear una empresa en Colombia</em>.',
      link: 'https://jlcauditors.com/constitucion-empresas-colombia/',
    },
    {
      referencia: 'MINCIT. (2019). <em>Decreto 957 del 05 de junio</em>.',
      link:
        'https://www.mincit.gov.co/normatividad/decretos/2019/decreto-957-por-el-cual-se-adiciona-el-capitulo-13',
    },
    {
      referencia: 'Mipymes. (2021). <em>Normatividad</em>.',
      link: 'https://www.mipymes.gov.co/normatividad',
    },
    {
      referencia:
        'Universidad de los Andes. (2009). <em>Tributación de la micro, pequeña y mediana empresa</em>.',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/47468/tributacion_mipymes.pdf?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Estatutos',
      significado:
        'Los estatutos sociales es el pacto donde se agrupan todas los derechos y obligaciones de los socios, así como las normas que rigen la sociedad.',
    },
    {
      termino: 'ICA',
      significado:
        'También conocido como Impuesto de Industria y Comercio, es una obligación municipal que se genera a partir de la ejecución de labores de industria, comercio o servicios generados en Bogotá o cualquier ciudad del país donde aplique, en las que directa o indirectamente se desarrollan de manera continua o eventual, con o sin establecimiento comercial.',
    },
    {
      termino: 'Persona natural',
      significado:
        'Se puede entender como aquel ser humano que desea desempeñar y ejercer obligaciones a título personal, tomando en cuenta la manera como se constituye la empresa. Así, asume todas y cada una de las obligaciones que a futuro se le vayan a presentar.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Es una organización o grupo de personas naturales a la que la ley reconoce personalidad independiente y diferenciada de la de cada uno de sus miembros o componentes, capaz de ejercer derechos y contraer obligaciones, y de ser representada judicial y extrajudicialmente.',
    },
  ],
  complementario: [
    {
      texto:
        'Evolución empresarial. (2016). <em>Documentos legales para constituir una empresa en Colombia</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2DgD7yHpbNc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios, CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizara',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
