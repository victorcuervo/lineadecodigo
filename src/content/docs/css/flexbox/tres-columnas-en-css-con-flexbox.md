---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVHZHSZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Es2%2FTSB73FKdcHcVpgEhiC7ppWQ2kcgyIHTbRcIRyAIhAKk6HutchgB8mS%2BbPIj%2BV2DfHoKEmWerB6ONFdfBOovxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiyCnx1CFmb1anUEkq3APNVinJdENn%2BwBAywL2QKs%2FAgOw0f9thO5nSezQYYmSbDd5cJggGKp%2BB0FaITMMpPJIK8vee7hzmvtqNdVRqGMFmFWdmH9lWvSq%2F6YJgfD8J%2B3uGANWCskmLB0EaXhYRC5C6eVKSkWcaBmQE3dFbA77MptNV%2Fn1hCrT8zNv9dd9YEEOrd%2FiXRlZN4x4RSQ93pRrO6Fbw926LA2MingTyrhhsiEtMt%2FrrAOTb5bvTFyHqsJ0xabQgp9K%2FIl9lZIzD%2BjiPltJc0Sol9L9lpZ5ojrcVhMlwCmk6TeRobl3c1GgMmTI67lgF1X0owDjDS2%2BvCnfoHUobIo2rtv7uj30%2BvJPnF%2F59BWhK1YOuJnoOTzfktNVsCF6RdDT8Ja3DyOO6LJDeWglfoMNDiWpTrZ4o116p2CDtPsSrIBfSU1Xta%2FKcWPF9Em2XYQI%2BGMhXPq%2Fy3U6G3gGjCndt%2BpCJZiEdH3IFyv2n%2F8d4HqexgZPL7oiQQaJtRowlirJ5P1CtVKHsw3xefmPXhSKRC9%2FlFIVSOCUBRoZwYtLawEoszJwA6p2z2qP0oYO4mMe6V%2FLZOpjc4oxYgB8%2Bklcg18nURf5rPSJJ7yNpPShmwnYS2vk87Tb61NMv9uLwci7tfCOXjCkyt7JBjqkAa3bgV5M%2FNDxpS%2F%2BYbbcpprWxFywnW%2Fhrt6RFTfoG6QPV3cotT1phSwzSb5l2cu4L%2BotqOg4I7pDRpe%2BwPp5XREDNcw1jRn4VRG98Jp73kpjVeg9O%2FB0KyONaxojMH4BpZLiSiKWl7kso3GHcru1NtTN8j82rnTCIazyOHyKOoIVkLRHBRGPt0BulsXvVRUw3Nex%2FFpOAop3N6T2RT9Urm4P6trv&X-Amz-Signature=ee24488984503a1eddd52c4f642d09aaec15109b54e9802682eacfff1cb9624e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVHZHSZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Es2%2FTSB73FKdcHcVpgEhiC7ppWQ2kcgyIHTbRcIRyAIhAKk6HutchgB8mS%2BbPIj%2BV2DfHoKEmWerB6ONFdfBOovxKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiyCnx1CFmb1anUEkq3APNVinJdENn%2BwBAywL2QKs%2FAgOw0f9thO5nSezQYYmSbDd5cJggGKp%2BB0FaITMMpPJIK8vee7hzmvtqNdVRqGMFmFWdmH9lWvSq%2F6YJgfD8J%2B3uGANWCskmLB0EaXhYRC5C6eVKSkWcaBmQE3dFbA77MptNV%2Fn1hCrT8zNv9dd9YEEOrd%2FiXRlZN4x4RSQ93pRrO6Fbw926LA2MingTyrhhsiEtMt%2FrrAOTb5bvTFyHqsJ0xabQgp9K%2FIl9lZIzD%2BjiPltJc0Sol9L9lpZ5ojrcVhMlwCmk6TeRobl3c1GgMmTI67lgF1X0owDjDS2%2BvCnfoHUobIo2rtv7uj30%2BvJPnF%2F59BWhK1YOuJnoOTzfktNVsCF6RdDT8Ja3DyOO6LJDeWglfoMNDiWpTrZ4o116p2CDtPsSrIBfSU1Xta%2FKcWPF9Em2XYQI%2BGMhXPq%2Fy3U6G3gGjCndt%2BpCJZiEdH3IFyv2n%2F8d4HqexgZPL7oiQQaJtRowlirJ5P1CtVKHsw3xefmPXhSKRC9%2FlFIVSOCUBRoZwYtLawEoszJwA6p2z2qP0oYO4mMe6V%2FLZOpjc4oxYgB8%2Bklcg18nURf5rPSJJ7yNpPShmwnYS2vk87Tb61NMv9uLwci7tfCOXjCkyt7JBjqkAa3bgV5M%2FNDxpS%2F%2BYbbcpprWxFywnW%2Fhrt6RFTfoG6QPV3cotT1phSwzSb5l2cu4L%2BotqOg4I7pDRpe%2BwPp5XREDNcw1jRn4VRG98Jp73kpjVeg9O%2FB0KyONaxojMH4BpZLiSiKWl7kso3GHcru1NtTN8j82rnTCIazyOHyKOoIVkLRHBRGPt0BulsXvVRUw3Nex%2FFpOAop3N6T2RT9Urm4P6trv&X-Amz-Signature=34a381327896fef05473785e966f1c9f2d353bd70d764fe534cc5dbe7ee30999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

