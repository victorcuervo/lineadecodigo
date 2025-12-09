---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLY72CE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUJ4t%2BjrNV3ivK%2Fdt%2B40Bemd%2Bw8rCquJF6kyezAFFPQIgFLA%2FCCvJOiYuy2hxN8myzaKtifvBdpCWt%2FSqQT2Lf%2FEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmx6k%2FF6aiKSisjpyrcA09iItFPE024kR4weJhVsv%2BTyWdsRo7LpEipgdg6w4R1CThIi%2BQS0rOeOonkojlyy%2FZmUHlFy%2FVNBCAtFW6sGk0bmxL5mtlWFOVHxfHlc0pIxES9zhgUW8V9x9naxO6p91yg7iMmQcFlzSuI6Qokpd%2Fws0TkhxXsgTMatk1%2FY2USsmLwiDJuhuci4LlNaPf292Gos3a67YJdYToEJ3K6wa3keXOONUQo%2BBksT5Tw0nDeK5ASOkwjCnNSQs3MgODOs54Z9hG1OO%2Bt09ktF0p91sBHdsvz6aYUg%2FpCi0Wj%2FJO2V2Z9Ruw0E4yFljc%2Fk4g7%2FvdoPELar2zT5Wv0Jmw654O5iKNHycksZCqEeH0Yn%2B5hnSNVV85jIKZO1J%2Bw%2BFM6CrmCEhXDDL2QzqZxZ6mwpavKznEiQ0CBmsRLSWuoLgx%2FckoaD6LhHaZWHCJm8y6IXi0trMYNZ3wW%2FJcrVHrP3rHaFQTauAzx6gzM%2FAw%2BMr6ulXtrrF1FdeJH56eob6MfHyGCRi%2FSeWnaphaKu4F06hUER2OAAJsnoRVSyBAubOM4XHaoU4eBW192flnjgWbFudcFNb1yRbHUsTjrBwSZhP%2B6daM4APNfcQQ8bExJ35YJOxojf%2FsNHvn8apNmMJSH38kGOqUBVgLPpLdKx1pxVuFJ69DOhP2DeyuUAPfZG35qTkcIVN5EhyhdNT90DLPM88CfSYhOdrYEwxh1A3IBfnocyJ9QH0ar8IdoO%2FFYQLN2U9yYGlePABL8d38HNjYLmDi17eaGww7KNdVIi5GctQEuYpJRhDQ5KWptIc0UwGuj8WuNsByue9Hpm%2F9ql%2F1OYhMjyXB2%2FXR2b0FIfhne8GNIVoCIrtok6nY3&X-Amz-Signature=7086e25591ae8871e171fc7358edbe3916b40411c183d53f87b543953cddc728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLY72CE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCUJ4t%2BjrNV3ivK%2Fdt%2B40Bemd%2Bw8rCquJF6kyezAFFPQIgFLA%2FCCvJOiYuy2hxN8myzaKtifvBdpCWt%2FSqQT2Lf%2FEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmx6k%2FF6aiKSisjpyrcA09iItFPE024kR4weJhVsv%2BTyWdsRo7LpEipgdg6w4R1CThIi%2BQS0rOeOonkojlyy%2FZmUHlFy%2FVNBCAtFW6sGk0bmxL5mtlWFOVHxfHlc0pIxES9zhgUW8V9x9naxO6p91yg7iMmQcFlzSuI6Qokpd%2Fws0TkhxXsgTMatk1%2FY2USsmLwiDJuhuci4LlNaPf292Gos3a67YJdYToEJ3K6wa3keXOONUQo%2BBksT5Tw0nDeK5ASOkwjCnNSQs3MgODOs54Z9hG1OO%2Bt09ktF0p91sBHdsvz6aYUg%2FpCi0Wj%2FJO2V2Z9Ruw0E4yFljc%2Fk4g7%2FvdoPELar2zT5Wv0Jmw654O5iKNHycksZCqEeH0Yn%2B5hnSNVV85jIKZO1J%2Bw%2BFM6CrmCEhXDDL2QzqZxZ6mwpavKznEiQ0CBmsRLSWuoLgx%2FckoaD6LhHaZWHCJm8y6IXi0trMYNZ3wW%2FJcrVHrP3rHaFQTauAzx6gzM%2FAw%2BMr6ulXtrrF1FdeJH56eob6MfHyGCRi%2FSeWnaphaKu4F06hUER2OAAJsnoRVSyBAubOM4XHaoU4eBW192flnjgWbFudcFNb1yRbHUsTjrBwSZhP%2B6daM4APNfcQQ8bExJ35YJOxojf%2FsNHvn8apNmMJSH38kGOqUBVgLPpLdKx1pxVuFJ69DOhP2DeyuUAPfZG35qTkcIVN5EhyhdNT90DLPM88CfSYhOdrYEwxh1A3IBfnocyJ9QH0ar8IdoO%2FFYQLN2U9yYGlePABL8d38HNjYLmDi17eaGww7KNdVIi5GctQEuYpJRhDQ5KWptIc0UwGuj8WuNsByue9Hpm%2F9ql%2F1OYhMjyXB2%2FXR2b0FIfhne8GNIVoCIrtok6nY3&X-Amz-Signature=faa741b1538efdc36a29a6f9c8f87ac683474cef706338cdfa5e0daae304432d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

