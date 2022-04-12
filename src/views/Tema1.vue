<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptualización
    p.mb-5 Para comprender el funcionamiento y constitución de las PYME en Colombia es importante comprender algunos términos fundamentales para entender la importancia de la participación de este sector empresarial en la economía de nuestro país.
    #t_1_1.pt-5
    .titulo-segundo.color-secundario
      h2 1.1. Clasificación de las micro y pequeñas empresas
    p Es importante mencionar que el Gobierno Nacional expidió el Decreto 957 de 2019, mediante el cual establece una nueva clasificación del tamaño empresarial basada en el criterio único de ingresos por actividades ordinarias.
    p.mb-5 #[b A continuación, se presenta una conceptualización de la clasificación de empresas determinada para nuestro país.]
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = true")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}")
            .tarjeta-flip__contenido.bg-color1.p-4.p-xl-5
              h1 Microempresa
              p (1) y (10) trabajadores
              p Son aquellas empresas que poseen entre uno (1) y (10) trabajadores que se dedican a una actividad comercial específica, como industriales, comerciales o de servicios. La mayoría de las microempresas nacen de la necesidad del propietario o varios socios, que asumen el riesgo del mercado y ejecutan una idea de negocio que posteriormente se cristaliza en la empresa. Para fomentar este tipo de prácticas, las personas que asumen estos riesgos también se conocen como “emprendedores”.
      .col-lg-5.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-seterciario(@mouseover="indicadorTarjetaFlip = true")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}")
            .tarjeta-flip__contenido.bg-color2.p-4.p-xl-5
              h1 Pequeñas empresas
              p  (11) y (50) trabajadores
              p Son aquellas empresas que poseen entre  (11) y (50) trabajadores. Son entidades independientes, creadas con fines de lucro, cuyo objetivo es dedicarse íntegramente a la producción, procesamiento y/o prestación de servicios para satisfacer las necesidades y deseos actuales de la comunidad. Muchas pequeñas empresas, iniciaron como microempresa y fueron creciendo a través del tiempo, es más muchas medianas y grandes empresas, fueron pequeñas empresas en Colombia.
    .row.bg-color3.mb-5
      .col-12.px-5.pt-5
        .row.align-items-center
          .col-lg-5
            p.mb-5 #[b Dentro de las características principales de las pequeñas empresas se encuentra:]
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img1.svg', style="width: 70px").m-auto
              .col
                p.mb-0 Por lo general el ritmo de crecimiento es superior al de la microempresa y puede ser aún mayor que el de la grande o mediana empresa.
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img2.svg', style="width: 70px").m-auto
              .col
                p.mb-0 Mayor división del trabajo resultante de la multifuncionalidad, además, de resolver problemas emergentes que requieren una distribución completa de funciones y descentralización.
            .row.align-items-center.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img3.svg', style="width: 70px").m-auto
              .col
                p.mb-0 La capacidad de cubrir los mercados locales, regionales y nacionales, con las comodidades que brinda Internet, ya que este puede cruzar fronteras con sus productos.
          .col-lg-7
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img3.png', style="width: 500px").m-auto
    .separador.mb-5
    #t_1_2
    .titulo-segundo.color-secundario
      h2 1.2. Constitución y legalización de empresas en Colombia
    .row.align-items-center
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img4.png', style="width: 450px").m-auto
      .col-lg-8
        p.mb-4 En Colombia la constitución y registro de empresas es un proceso que requiere de mucha atención y regulación, lo cual permite determinar la aprobación de las actividades económicas ante las distintas entidades nacionales.
        p.mb-5 #[b A continuación, se mencionan los pasos requeridos para la creación de una empresa:]
        .tarjeta.tarjeta--azul.p-4
          SlyderA
            .row
              .col-12
                .px-5.py-2
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img4.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Elegir la razón social de la empresa.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img5.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Registrarse como persona natural o jurídica.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img6.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Clasificar la actividad económica.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img7.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Crear los estatutos de la empresa.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img8.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Diligenciar el pre – RUT.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img9.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Inscribir el registro.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img10.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Una vez realizado el registro del RUT ante la DIAN se debe abrir una cuenta a nombre de la empresa.
                  .row.align-items-center
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img11.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Presentar el RUT ante la Cámara de  Comercio.
            .row
              .col-12
                .px-5.py-2
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img12.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Realizar la inscripción de los libros en la Cámara de Comercio.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img13.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Realizar el registro en el sistema de seguridad social.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img14.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Inscribir compañía ante la Caja de Compensación familiar, SENA e ICBF.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img15.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Inscribir la compañía ante una administradora de riesgos profesionales.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img16.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Inscribir empleados al sistema de pensiones.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img17.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Inscribir empleados al sistema de pensiones.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img18.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Obtener certificado de higiene y sanidad de la Secretaría Distrital de Salud.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img19.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Obtener certificados de bomberos.
                  .row.align-items-center.mb-2
                    .col-auto
                        figure
                        img(src='@/assets/curso/tema1/img20.svg', style="width: 30px").m-auto
                    .col
                      p.mb-0 Notificar de la apertura del establecimiento comercial a planeación distrital sy/o municipal.
  
</template>

<script>
export default {
  name: 'Tema1',
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
