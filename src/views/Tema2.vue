<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normativa
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/img1.svg', style="width: 200px").m-auto
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p El cumplimiento de las leyes requeridas para crear una empresa se debe considerar como primera instancia. Al respecto, la Constitución Política de Colombia al amparo del Título XII del régimen económico y Hacienda pública EL Artículo 333 establece “La empresa, como base del desarrollo, tiene una función social que implica obligaciones”. Las siguientes son unas de las leyes importantes en las empresas:
    .row
      .col-1
      .col-lg-5.bg-color4
        h3.text-center.txt-deco1.mt-5 Leyes requeridas para empresas
      .col-12
        LineaTiempoE.color-acento-contenido.my-5
          .row(titulo="Ley Mipyme" subtitulo="")
            .col-9
              .row.align-items-start
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width: 100px").m-auto
                .col
                  p.mb-4 Se trata de la Ley N ° 590 de julio de 2000, que fue creada para incentivar la creación de empresas en Colombia y así tener un entorno empresarial en las mejores condiciones. Esta norma se aplica a las micro, pequeñas y medianas empresas, mientras que la estrategia de promoción incluye la eliminación de las restricciones al acceso a financiamiento de bajo costo y la creación de herramientas de apoyo global.
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=12672" target="_blank" type="application/pdf")
                    span Enlace de consulta
                    i.fas.fa-angle-right
          .row(titulo="Ley de fomento a la cultura del  emprendimiento" subtitulo="")
            .col-9
              .row.align-items-start
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 100px").m-auto
                .col
                  p Se trata de la Ley N ° 1014 de 2006, que tiene como objetivo “promover el emprendimiento en todas las instituciones educativas del país”, es decir, destaca la dinámica de vincular el sistema educativo con el sistema productivo para el desarrollo de la economía estatal.
                  p.mb-4 Para asegurar el cumplimiento de esta ley en el exterior, existirá una red regional de emprendedores conformada por diversas organizaciones.
                  a.boton.color-acento-contenido.texto-blanco(href="https://minciencias.gov.co/sites/default/files/upload/reglamentacion/ley-1014-2006.pdf" target="_blank" type="application/pdf")
                    span Enlace de consulta
                    i.fas.fa-angle-right
          .row(titulo="Ley de ciencia y tecnología" subtitulo="")
            .col-9
              .row.align-items-start
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img4.svg', style="width: 100px").m-auto
                .col
                  p.mb-4 Se trata de la Ley 29 de 1990, que otorga incentivos a la investigación científica, si su negocio se basa en la innovación y el desarrollo tecnológico. Además, constituyen el marco dentro del cual el Estado puede participar en proyectos específicos de investigación científica y tecnológica. Esta ley fue redactada por el Decreto 393 de Procedimientos laborales.
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=254" target="_blank" type="application/pdf")
                    span Enlace de consulta
                    i.fas.fa-angle-right
          .row(titulo="Ley de racionalización del gasto público" subtitulo="")
            .col-9
              .row.align-items-start
                .col-auto.mx-4
                  figure
                    img(src='@/assets/curso/tema2/img5.svg', style="width: 100px").m-auto
                .col
                  p.mb-4 Se trata de la Ley 344 de 1996, que establece estándares para las empresas en la simplificación del gasto público. Asimismo, constituye un incentivo para iniciar un negocio e incluye el Artículo 36 que permite la formación de un Fondo Emprender.
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=345" target="_blank" type="application/pdf")
                    span Enlace de consulta
                    i.fas.fa-angle-right
    #t_2_1.mt-5
    .titulo-segundo.color-secundario
      h2 2.1 Normatividad vigente
    p.mb-5 A diferencia de las leyes anteriormente mencionadas, las siguientes leyes, decretos, resoluciones y decisiones son la normatividad vigente aplicada a las micro, pequeñas y medianas empresas:
    .row.justify-content-center
      .col-lg-8.mt-5.bg-color5
        .px-3.pb-5
          figure.img-position1
            img(src='@/assets/curso/tema2/img6.svg', style="width: 350px").m-auto
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Leyes
                i.fas.fa-file-download(style="color: #EF9F14 !important")
            .col-auto.mb-4.mb-lg-0
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Resoluciones
                i.fas.fa-file-download(style="color: #EF9F14 !important")
            .col-auto.mb-4.mb-lg-0
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Decretos
                i.fas.fa-file-download(style="color: #EF9F14 !important")
            .col-auto.mb-4.mb-lg-0
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Decisiones
                i.fas.fa-file-download(style="color: #EF9F14 !important")
    separador
    #t_2_2.mt-5
    .titulo-segundo.color-secundario
      h2 2.2 Requisitos tributarios
    p.mb-5 Iniciar un negocio en Colombia requiere de una amplia gama de requisitos comerciales, sociales, financieros y operativos, a continuación, se mostrarán con detalles los requisitos tributarios que deben cumplirse para iniciar y mantener una organización.
    .row.justify-content-center
      .col-lg-8
        p.text-center.mb-5 A continuación, encontrará cuáles son los requisitos tributarios que se deben cumplir y ante qué entidad debe gestionarse y su periodicidad de cumplimiento.
    .row.justify-content-center
      .col-lg-8.mt-5.bg-color6
        .px-3.pb-5
          figure.img-position1
            img(src='@/assets/curso/tema2/img7.svg', style="width: 350px").m-auto
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download(style="color: #EF9F14 !important")
    separador
    #t_2_3.mt-5
    .titulo-segundo.color-secundario
      h2 2.3 Tipos de sociedades
    p.mb-5 En Colombia las sociedades se clasifican según la forma de asociación:
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.mb-5
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img8.svg', style="width: 100px").m-auto
          .col
            h3 Sociedades de personas
            p.mb-0 Esta sociedad la conforma la mayoría de las veces los grupos familiares y personas cerca a ellos, las cuales son:
        .row
          .col-12
            TabsA.color-acento-botones.mb-5
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad colectiva")
                p.txt-deco2 Es un tipo de sociedad comercial multipersonal, cerrada, con responsabilidades conjuntas, limitadas e irrestrictas, con derechos especiales de gestión con todos los socios, la cual es regida por el código de comercio. Esta empresa debe estar formada por al menos dos socios generales sin restricciones, es decir el número de socios no puede ser inferior a 2, y no hay límite para el número de socios.
                p.txt-deco2 La constitución de la sociedad colectiva se realiza mediante un contrato notariado, que posteriormente deberá inscribirse en el registro mercantil de la cámara de comercio.
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad en comandita")
                p.txt-deco2 Se caracteriza por tener dos tipos de socios generales para el cumplimiento; Algunas personas hacen un compromiso general y no hay límite y algunas alcanzan su nivel de contribución.
                p.txt-deco2 #[b Esta sociedad a su vez se divide en dos tipos:]
                p.txt-deco2 #[b Sociedad en comandita simple:] la cual es caracterizada porque la ley no les exige un límite de socios, ni una cantidad de capital. La dirección de esta sociedad es desempeñada por los socios gestores y las tareas de inspección y vigilancia por los comanditarios.
                p.txt-deco2 #[b Sociedad en comandita por acciones:] distribuye su capital en acciones y no en cuotas de interés social, esta sociedad no puede ser creada si hay menos de 5 socios.
                p.txt-deco2 El artículo 345 del Código de Comercio establece que al constituir una empresa se debe registrar al menos el 50% del capital social de la empresa y aportar al menos un tercio del capital social, las mismas reglas se aplican a la empresa.
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad de responsabilidad limitada")
                p.txt-deco2 Una sociedad de responsabilidad limitada es una sociedad que se caracteriza por ser una sociedad de personas, y como su nombre lo indica, la responsabilidad de los miembros se limita al alcance de sus aportaciones, por lo que no responden colectiva e individualmente a su patrimonio.
                p.txt-deco2 Esta sociedad está regulada por el código de comercio desde el artículo 353 hasta el artículo 372, esta sociedad también se caracteriza porque va acompañada de la sigla “Ltda.” Ya que esta si no aparece en los estatutos la responsabilidad de los socios deja de ser limitada a solidaria e ilimitada.
              .tarjeta.color-acento-botones.p-4(titulo="Empresa unipersonal")
                p.txt-deco2 Como su nombre lo indica, se trata de una empresa conformada por una única persona y única dueña de la empresa.
                p.txt-deco2 Una empresa unipersonal es aquella que forma una persona jurídica distinta al dueño, de manera que el patrimonio de la empresa queda separado del patrimonio de su dueño, lo que no sucede con un establecimiento de comercio común y corriente.
        .row.align-items-center.mb-5
          .col-auto
            figure
              img(src='@/assets/curso/tema2/img9.svg', style="width: 100px").m-auto
          .col
            h3 Sociedades de capital
            p.mb-0 En estas sociedades lo más importante suele ser los aportes económicos, porque cada socio o accionista es valorado por su aporte al capital social y el objetivo de la sociedad es la generación de rendimientos (Grupo Bancolombia, 2020).
        .row
          .col-12
            TabsA.color-acento-botones.mb-5
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad anónima")
                p.txt-deco2 Una sociedad anónima se caracteriza por ser abierta, como una sociedad de capital, en esencia, permite que sus acciones se negocien en la bolsa.
                p.txt-deco2 La razón social de esta de esta sociedad es la sigla “S.A” y está regulada por el código de comercio en el artículo 373.
                p.txt-deco2 En esta sociedad de capital se divide en acciones de igual valor, que pueden cotizar en la bolsa de valores con notas limitadas de los socios generales, la cantidad de capital que aportan a la empresa.
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad en comandita por acciones")
                p.txt-deco2 La sociedad en comandita se caracteriza por tener dos tipos de socios generales para el cumplimiento: uno de los socios hace un compromiso general donde no hay límite, y el otro hasta que alcance su nivel de contribución.
                p.txt-deco2 En la sociedad en comandita hay un grupo de miembros para administrar y otro grupo de miembros para aportar capital sin incurrir en responsabilidad más allá de su contribución.
              .tarjeta.color-acento-botones.p-4(titulo="Sociedad por acciones simplificada")
                p.txt-deco2 Esta es una sociedad de capital, su naturaleza es comercial y se forma por una o varias personas ya sean naturales o jurídicas. Una característica de la sociedad por acciones simplificada es que su constitución, como su nombre indica, se simplifica en la medida en que puede ser creada por contrato privado, a menos que su constitución disponga que los bienes deben estar sujetos a “escritura pública, en cuyo caso deben ser formado por escritura pública ".
                p.txt-deco2 “La Sociedad por acciones simplificada podrá constituirse por una o varias personas naturales o jurídicas, quienes sólo serán responsables hasta el monto de sus respectivos aportes”.
              .tarjeta.color-acento-botones.p-4(titulo="Sociedades de economía mixta")
                p.txt-deco2 Las empresas de economía mixta, clasificadas como un tipo de empresa que se distingue por su capital constituido por aportes públicos y privados; Esto significa que incluye la participación del Estado y no solo del sector privado.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
