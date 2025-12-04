---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BY2CKIG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiCZm2opWPOloZP5GGNQLQ79b4V3udtncU9Zh4V2G5CAIgRSPqH%2BfG%2B6RIlqT0MILyb%2B7swtDK69gngkGHVULLVXIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEoqpjF4i%2FFPITRpDCrcA6z8bfez%2FbPcIVF%2B2eTNf%2BMI3YGhTuUjIY5STK35i2MTFYPF5LIDYRDRhVSyeUoeCwYgdeBgkIZ0W0taBZR5%2B19yyr42%2B84Yfz33XibNnQYSAp1Ah%2FqagAnvYtIkqkIGmF1RdZWBUJBoa4OjgKrObV1EAX8AIA7YjTpbvj8KKOyy2RA9OOKERkbLllhk6lU80sqY3vWctgdJicKbV2CAVdX0iFTItvbODVpzonR5TseWP9RqEI6RXlxhQkPJyBskujLBpxpsOpD5LPGF62kYRkv7t3eDBRNg70F6lNkqgbhCzkzjI87k7NX2%2FCLKjYLoabg%2FDl3eczZI4oEOncWiGrN7zsrP8C0i6VoljKfI9O4GOpiqt%2BgXlrjkSLF95Q%2F8Fo%2F0oZhU4BhQH08UcquJsK9Fx0FU1jkxVblNnxCMfKJwMbjp7o8qak8ilkluvRYbgRVAs%2BYNN7KJBPun3fcVy3SL5MOKr4Dk5xJyyS4pPcaszm9fUOkwHGo8ltx9QTlufQRCZNU80iEhnZ7z8RVQcVwXkHq5VKiLZALcFFi6kH%2FYc2VpOOl2%2FXNnK0S0vB2akamGkHaZQZEW2fXJNLPe%2B0VHSovnvyKMYT629NGZSrm4ukegs3J1RDVdDuY5MMWQxMkGOqUBRS%2FbG9I3frq26jm9NWPUGjp9HeJPKI9REKOEYV8GZ0d5l%2FFztYOE8YvAg0A3p27DPwL%2FxmT6DBI7xnY5oSH8OLWzvNa2wYqw%2F%2Fir9WPR7EfsX1wIaAkFjGklQYTUfDNFSDJaoRVCIN3w3eyFTW%2B9Bs1EghYnzZkBpjDcSoTqdmVo5ORktG2jl7Je7stW9O1Qlf1Ky44axrC9CbV9lF9aAozANqN6&X-Amz-Signature=4b64502f8ca9b71f5b5a095d81f5d79e5d84dc0c42f4b136d823c9c6077d89de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BY2CKIG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDiCZm2opWPOloZP5GGNQLQ79b4V3udtncU9Zh4V2G5CAIgRSPqH%2BfG%2B6RIlqT0MILyb%2B7swtDK69gngkGHVULLVXIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEoqpjF4i%2FFPITRpDCrcA6z8bfez%2FbPcIVF%2B2eTNf%2BMI3YGhTuUjIY5STK35i2MTFYPF5LIDYRDRhVSyeUoeCwYgdeBgkIZ0W0taBZR5%2B19yyr42%2B84Yfz33XibNnQYSAp1Ah%2FqagAnvYtIkqkIGmF1RdZWBUJBoa4OjgKrObV1EAX8AIA7YjTpbvj8KKOyy2RA9OOKERkbLllhk6lU80sqY3vWctgdJicKbV2CAVdX0iFTItvbODVpzonR5TseWP9RqEI6RXlxhQkPJyBskujLBpxpsOpD5LPGF62kYRkv7t3eDBRNg70F6lNkqgbhCzkzjI87k7NX2%2FCLKjYLoabg%2FDl3eczZI4oEOncWiGrN7zsrP8C0i6VoljKfI9O4GOpiqt%2BgXlrjkSLF95Q%2F8Fo%2F0oZhU4BhQH08UcquJsK9Fx0FU1jkxVblNnxCMfKJwMbjp7o8qak8ilkluvRYbgRVAs%2BYNN7KJBPun3fcVy3SL5MOKr4Dk5xJyyS4pPcaszm9fUOkwHGo8ltx9QTlufQRCZNU80iEhnZ7z8RVQcVwXkHq5VKiLZALcFFi6kH%2FYc2VpOOl2%2FXNnK0S0vB2akamGkHaZQZEW2fXJNLPe%2B0VHSovnvyKMYT629NGZSrm4ukegs3J1RDVdDuY5MMWQxMkGOqUBRS%2FbG9I3frq26jm9NWPUGjp9HeJPKI9REKOEYV8GZ0d5l%2FFztYOE8YvAg0A3p27DPwL%2FxmT6DBI7xnY5oSH8OLWzvNa2wYqw%2F%2Fir9WPR7EfsX1wIaAkFjGklQYTUfDNFSDJaoRVCIN3w3eyFTW%2B9Bs1EghYnzZkBpjDcSoTqdmVo5ORktG2jl7Je7stW9O1Qlf1Ky44axrC9CbV9lF9aAozANqN6&X-Amz-Signature=bd944a40501307e437e0bbd7b1ffd947411291bbc283ec8a1f2343361e44dcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

