---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZTS6OW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEB4sICVWxbJyMEnxRBbQFRSwgtSvtedJBDMpooPyyItAiEApdxwANdDRdZX3OxPQtBzdkYR%2Fh%2BkJNFGblJofcdAN1Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFoSM3IvcaC2RQkwYSrcAzXB3dnCgwV4rB6VZn%2FCEmOtM0c%2BMgQDj8y8ghSeKisZkDmHBo1GhvNeiWFNt0G7Xx3ifVfEAYp8Yev4M6e3LVDYhs41PLGdP16%2BVVu93J2vjYJBPhaJ%2B880y3%2B9fuiM2yVgNCqyiwjsCAXu%2Bv2RmbrpweNlA3%2FhoSCiAFGX14nkQR8%2BN0Ve2vIDBn84ArXF%2F4OmXCF09%2FkrcAsFs8Vc6I%2FUlIw%2Fp%2FO4pHkmNLg9214ZtcgJP2FqLJyWdMqytupm60P6BCwa1RRV7BwO3grFkiAw55MIzUy8X6ll%2BzOvi8xxEUccLMWAlkOTCNmKMMlceE14%2Fjy%2FJgH0vbGwoUP31orBkI2L2%2BjpcWK5vw%2FlN%2FuSnZMs9Uh%2F7562grPQmF%2FjrwQr7amI76pMzj7Zhg%2FYyenOlty%2FXsLvkWRz%2BOCu%2F6AazEDmmV1B6FoJleMbr2n3%2FmNjiGGB5De%2FjeGPd3iwirAzH8L94XqQkBMGjymTct5gwoY%2BVZn%2Fwwqy2qf5PbPpHap%2FcxrzcuROhSyj4%2BczCE5ad1nI7EwqHs0gKxXlA7cDRSFJ67aak3HhO1CnQBn2bdkedWbzWtDtAF4YpArE3Q0tIuyJETjgun5cb7EYI8mYpMuxonC3BmrbFG6FMNKmwckGOqUBWhL0iFxOrXfCPnQueqLqMi3RIzZzwHQP1OhMtt4Wdnw6bMs%2BsBG155D0GAU0s%2BZ2R6jEPsYD7g9qvt3SAoTsgxkAhImAebwAQ7OFEp5b3EnLH6jb1eInmm4attEPdHxojYrj6Gbz5QnlNUOPsY7QUaFXLJrpg%2FYfnwRtaDaQ6a8ijOY%2F3BnSEJW0nlZZSkpG02It%2BU1KwqaF67p%2FJJB2zG9%2BtimL&X-Amz-Signature=89cc756546fe2a2c2d40358c26433d4611d5460bf2ec681a33b88326c9b9a293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZTS6OW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEB4sICVWxbJyMEnxRBbQFRSwgtSvtedJBDMpooPyyItAiEApdxwANdDRdZX3OxPQtBzdkYR%2Fh%2BkJNFGblJofcdAN1Mq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFoSM3IvcaC2RQkwYSrcAzXB3dnCgwV4rB6VZn%2FCEmOtM0c%2BMgQDj8y8ghSeKisZkDmHBo1GhvNeiWFNt0G7Xx3ifVfEAYp8Yev4M6e3LVDYhs41PLGdP16%2BVVu93J2vjYJBPhaJ%2B880y3%2B9fuiM2yVgNCqyiwjsCAXu%2Bv2RmbrpweNlA3%2FhoSCiAFGX14nkQR8%2BN0Ve2vIDBn84ArXF%2F4OmXCF09%2FkrcAsFs8Vc6I%2FUlIw%2Fp%2FO4pHkmNLg9214ZtcgJP2FqLJyWdMqytupm60P6BCwa1RRV7BwO3grFkiAw55MIzUy8X6ll%2BzOvi8xxEUccLMWAlkOTCNmKMMlceE14%2Fjy%2FJgH0vbGwoUP31orBkI2L2%2BjpcWK5vw%2FlN%2FuSnZMs9Uh%2F7562grPQmF%2FjrwQr7amI76pMzj7Zhg%2FYyenOlty%2FXsLvkWRz%2BOCu%2F6AazEDmmV1B6FoJleMbr2n3%2FmNjiGGB5De%2FjeGPd3iwirAzH8L94XqQkBMGjymTct5gwoY%2BVZn%2Fwwqy2qf5PbPpHap%2FcxrzcuROhSyj4%2BczCE5ad1nI7EwqHs0gKxXlA7cDRSFJ67aak3HhO1CnQBn2bdkedWbzWtDtAF4YpArE3Q0tIuyJETjgun5cb7EYI8mYpMuxonC3BmrbFG6FMNKmwckGOqUBWhL0iFxOrXfCPnQueqLqMi3RIzZzwHQP1OhMtt4Wdnw6bMs%2BsBG155D0GAU0s%2BZ2R6jEPsYD7g9qvt3SAoTsgxkAhImAebwAQ7OFEp5b3EnLH6jb1eInmm4attEPdHxojYrj6Gbz5QnlNUOPsY7QUaFXLJrpg%2FYfnwRtaDaQ6a8ijOY%2F3BnSEJW0nlZZSkpG02It%2BU1KwqaF67p%2FJJB2zG9%2BtimL&X-Amz-Signature=b4b2d8ec7ddc18006ca7feb091e1c5d2857953971e8829163102ba9147aa04a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

