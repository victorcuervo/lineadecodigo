---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFOIF7L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwUtPgL6%2BfLN11vuKnCW6zEto9lzVzpUYD5dZJy%2FI4BAIgDHPiYPYowrLjW0TsJ5JGFgSKomjiWzBMCYfDDj%2BmLB0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGKHdLfjncI1Xh3zyrcA81hpVB2ad7ZtPuEgYac2fSmIy99dWojkXrYgJruktBDA4gFQyxa7m5miRxKpqhQFjPCl7ukXIhoRjgbOsHdEXNqV1jGM2peN6zuuGRr41fEfRyXa4RtnBBVQn047J8ERvOFxV5Ao8htThtSkpqqouxbIszs3D4R3uwOuSO7N9gSivmmycqpeetd3RShEm1wf9gHtL5z2GMHYMR3rth7tx2F0HWKTjBki6i2q2vL3kVnLSJEnpaJ58VlIMjKHMljK1KU6CkXED6axmxLUaZ%2FYKkUVxKfOBfBveeSrruJP4yGaxesddaRLKIelHrBGXLNVUiZwdzCEHJa26XLy4xPLmfqH2GGm3H1NncudSJO8ny5JGOls%2BAQWTVOmXWgJxO5sa0sNOkTvuPtjqq3XwzqJOdjqmVShZT31nkGJJ%2FFPDus1vGvfaT%2F2nRW%2Fn7UQCGPM0cx3BciW4AYrxuj3DZI6Z1muRmFE2N0FD6L4PrsS3Y6PNEgpxSrG9Zd3FsT0bWjtOChR57iiRCFLzPW53MfLUj5%2Bg5Qdshq4s9z8pwcTq5sZHl1zrkLdWWq%2BMrNJleghHQ1dvIJO%2FDK660tUnYndmee%2BPGzHRqTY5Gv1%2BLqNRtsBB%2Fue75kzXZGDgBFMJHE38kGOqUBNlkOWltFigQMRn4gzE9A7pkM4I3uk%2BGIxN1X%2BRo7iY1aaICNIlpU7va3VFXJLEY1jcrmIwrcqwonjF8wxZ%2FGlz1%2Buii4UmWkGejyPQ6AbkvDGISSXc%2FtQ9IIU1PraElD9TcpnLK3Ap2St7kW%2BLDn3VRzm5rYd1xaHvNI%2Fb83%2BA0DDqzWoQn94nNBlDVb3nQAM%2BLPWg%2FCqIy5VlWG089ZI48gNtZg&X-Amz-Signature=92df776a0b06754209fe98ad701355b1e6cf59bf447d7773d0b73404d787b62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFOIF7L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwUtPgL6%2BfLN11vuKnCW6zEto9lzVzpUYD5dZJy%2FI4BAIgDHPiYPYowrLjW0TsJ5JGFgSKomjiWzBMCYfDDj%2BmLB0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGKHdLfjncI1Xh3zyrcA81hpVB2ad7ZtPuEgYac2fSmIy99dWojkXrYgJruktBDA4gFQyxa7m5miRxKpqhQFjPCl7ukXIhoRjgbOsHdEXNqV1jGM2peN6zuuGRr41fEfRyXa4RtnBBVQn047J8ERvOFxV5Ao8htThtSkpqqouxbIszs3D4R3uwOuSO7N9gSivmmycqpeetd3RShEm1wf9gHtL5z2GMHYMR3rth7tx2F0HWKTjBki6i2q2vL3kVnLSJEnpaJ58VlIMjKHMljK1KU6CkXED6axmxLUaZ%2FYKkUVxKfOBfBveeSrruJP4yGaxesddaRLKIelHrBGXLNVUiZwdzCEHJa26XLy4xPLmfqH2GGm3H1NncudSJO8ny5JGOls%2BAQWTVOmXWgJxO5sa0sNOkTvuPtjqq3XwzqJOdjqmVShZT31nkGJJ%2FFPDus1vGvfaT%2F2nRW%2Fn7UQCGPM0cx3BciW4AYrxuj3DZI6Z1muRmFE2N0FD6L4PrsS3Y6PNEgpxSrG9Zd3FsT0bWjtOChR57iiRCFLzPW53MfLUj5%2Bg5Qdshq4s9z8pwcTq5sZHl1zrkLdWWq%2BMrNJleghHQ1dvIJO%2FDK660tUnYndmee%2BPGzHRqTY5Gv1%2BLqNRtsBB%2Fue75kzXZGDgBFMJHE38kGOqUBNlkOWltFigQMRn4gzE9A7pkM4I3uk%2BGIxN1X%2BRo7iY1aaICNIlpU7va3VFXJLEY1jcrmIwrcqwonjF8wxZ%2FGlz1%2Buii4UmWkGejyPQ6AbkvDGISSXc%2FtQ9IIU1PraElD9TcpnLK3Ap2St7kW%2BLDn3VRzm5rYd1xaHvNI%2Fb83%2BA0DDqzWoQn94nNBlDVb3nQAM%2BLPWg%2FCqIy5VlWG089ZI48gNtZg&X-Amz-Signature=84b3b3c530467af90e3d7c8b0ad1d50e6aeda851643744a0259b1f12b25e428e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

