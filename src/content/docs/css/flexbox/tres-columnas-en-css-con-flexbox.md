---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSXSZIS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuDluptCoosK0KmhbdcIHvC%2FuIc0yVRJX%2BfmZ0LPvHQIhAPgPkZbT33CMCYgaok3n%2FG4FnAHS3CXoxIMBz7yGK%2B%2BYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylO4B4vgDYC0Rs%2Fe4q3APywaSu%2F75aVhfTiWaIBXCt5M4WdeFZ9LYDhI5xsWtoq3ODPn%2BryC9hW8Lo0%2B5XoZsdxwrm5a2mA6I2JdYas6DGpLWfJlO%2BvAqR6ASGu4ZQZAOgSSm37D7vt%2Fm%2BSuyPHa0LtvmtDkfreHFlUcE6IDSTyMz8%2BMnLTqqAny2bpMMnW1KoSiodfZf2mYKn2ZLkAxqCFITAY42zrKP%2FRy4SEmYxwb7vmW1wtJPJxmGzI5plBJiZWq7dTk1qEX2aSKLPWO4VkLYDL2B9N0ZErTXNke1MBnz7us6MFggwOvEdJkyrBfTHWDfjPr6IcOr7GhqZtjAJ0VEYT2Mm2gJD2v1X20e%2ByB1%2Bw3JthB79CjtaV2cnmFha%2FDsLIhJcH%2BLb5NeLsxrO01O6Qv0%2B3KEY7lohLGnD6QSnDedXJ5otsovlh8n%2Fh5olLAzRLYYEDgNt6f6D5eaeb2KBMZyEcFpUgHKN%2BP2QvXtbtneXuRPkt5IvcMv9JjglGWtPycZV%2FY5NtWrNJlsbHFzDkDT%2FWtwaY%2Ftb4eWjTOTrF0SM2h3GC3WqP8LtwN3JKnv%2FAfKNyTBqHLfHgZzkCKEn3M9AkfjEDs7W6xV1a1uSWxSSSwap1np8yfmSQQCSCJ9vKmeGw%2FeYvTCu%2FtLJBjqkATkOU9X1SzPrYC9gdGnE7Bxf3ko9iZKPSI9dvX%2FZd1Sl8chiFhJSbVRB1P%2BtfLWBdj9%2FltltBpT1CvsbXqlQSIOzvfCsM7hc1DmkCSoE%2FLG8IwmL%2BzWQIPHgJ47KUiXv%2FxcggceYXJ4Xfnn44X6%2BSSE7TOlp0z%2FkAtdo9hH5oQoDjny23X3fEzj9N3hIlN5TYohZ0TTGx9kotQvVHeHiLBSGiHDy&X-Amz-Signature=7495562ad6be56757a654d04bae1aaa9bf32ef825341cfb77e0dcb745eef9057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSXSZIS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNuDluptCoosK0KmhbdcIHvC%2FuIc0yVRJX%2BfmZ0LPvHQIhAPgPkZbT33CMCYgaok3n%2FG4FnAHS3CXoxIMBz7yGK%2B%2BYKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylO4B4vgDYC0Rs%2Fe4q3APywaSu%2F75aVhfTiWaIBXCt5M4WdeFZ9LYDhI5xsWtoq3ODPn%2BryC9hW8Lo0%2B5XoZsdxwrm5a2mA6I2JdYas6DGpLWfJlO%2BvAqR6ASGu4ZQZAOgSSm37D7vt%2Fm%2BSuyPHa0LtvmtDkfreHFlUcE6IDSTyMz8%2BMnLTqqAny2bpMMnW1KoSiodfZf2mYKn2ZLkAxqCFITAY42zrKP%2FRy4SEmYxwb7vmW1wtJPJxmGzI5plBJiZWq7dTk1qEX2aSKLPWO4VkLYDL2B9N0ZErTXNke1MBnz7us6MFggwOvEdJkyrBfTHWDfjPr6IcOr7GhqZtjAJ0VEYT2Mm2gJD2v1X20e%2ByB1%2Bw3JthB79CjtaV2cnmFha%2FDsLIhJcH%2BLb5NeLsxrO01O6Qv0%2B3KEY7lohLGnD6QSnDedXJ5otsovlh8n%2Fh5olLAzRLYYEDgNt6f6D5eaeb2KBMZyEcFpUgHKN%2BP2QvXtbtneXuRPkt5IvcMv9JjglGWtPycZV%2FY5NtWrNJlsbHFzDkDT%2FWtwaY%2Ftb4eWjTOTrF0SM2h3GC3WqP8LtwN3JKnv%2FAfKNyTBqHLfHgZzkCKEn3M9AkfjEDs7W6xV1a1uSWxSSSwap1np8yfmSQQCSCJ9vKmeGw%2FeYvTCu%2FtLJBjqkATkOU9X1SzPrYC9gdGnE7Bxf3ko9iZKPSI9dvX%2FZd1Sl8chiFhJSbVRB1P%2BtfLWBdj9%2FltltBpT1CvsbXqlQSIOzvfCsM7hc1DmkCSoE%2FLG8IwmL%2BzWQIPHgJ47KUiXv%2FxcggceYXJ4Xfnn44X6%2BSSE7TOlp0z%2FkAtdo9hH5oQoDjny23X3fEzj9N3hIlN5TYohZ0TTGx9kotQvVHeHiLBSGiHDy&X-Amz-Signature=bb984982007c1351a1b97277796c2bca755353c16a5dacf48deb69e9ff18e39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

