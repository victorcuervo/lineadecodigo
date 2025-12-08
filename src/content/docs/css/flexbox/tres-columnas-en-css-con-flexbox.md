---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZKFGFV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGCmOIZHBENOQQzO7eKSQMih2izkbpVl5649gWmdbqaAiEAqNoWPJE1MFUUC1to7SpGT83mEM3ezYAz4SPlLD%2BFh5gqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYzEgKkXJ%2BeM5R%2F%2FSrcAxvoSiaz0ICP%2B1fARIHlVDPETwcwLl%2BtHXfHC%2B80HXQsXE2kf9Lma9TLFL%2BDBpFzs1jwij3%2FTVA1D4THuE5R0D2LHOIRaoymUH8z03QKqd4e30JhpMp778%2BhauWsAdT0xoD58R%2FGoic%2BpW1O92YCWhmrzZQk9CSjEDjr%2B2zGUZCplxiIyubrQtni9MBzbP9HTRA%2BlgYeCNDqgZQ47EC3Oxc6pMXV4T4IhAMpMSTggrFPEvxhYJxMB9FCPLmtipx%2F%2FRgULpACBUUR8g9kdfwHZq2PBST8jn389s1maqfvCJ8rlYyepNSFFxFeChz7oXM2MFkVcEcFB8aH%2BmMzU5vacgfu0CKszQleOlXX6EtzUKitHD0epH4s%2BJrxcng%2BtH1NWsvd%2Fcg8KNa%2FXnnRNFJ8YMVwiBaSHQcj6IPiPOCxvH9qLewMPUQ%2BJPMZfKE70lQIY3X9N4MX116jGKsPRYhXhsoBXmz9NPwbp%2BPlvBGMa9p0CekL88QGOD9jHMufPT1M9srynndxpqcF1BjRvhxblR%2B5Vw2SVfBgBSB2NzqR6xvXSCu9zS2H7XQDHlwW3ndUBC2GCwPL%2B8tqPsXURa65Pbf8jnkudGlUEhJvmoEclcxDI6r3RpLw5QuJhp0tMIKH3MkGOqUBBhd%2F07aYXzMRg%2BTOFCVD90McfwBvY0CoQaGmdrU23l94%2FaAYr5GPhT%2B2sbm085RajLNb3oAZuauzAuJsUbYSMDOOS1qFLwvyfXCQiPBVxGSEVD8jTI8oKKRRM1KQ5wQRe%2FCIdHPBYgUHLBP9zRXO5wijDdAoQiOImH8mt0ebjyQ5RizdQPesXAGaJX8P3n4XqZz0KjqPKts7AQH1fr0cjLBDsjLC&X-Amz-Signature=c6c975ec41e68c5ff60d42bdb8db75ff72e421a8213a3b5f3c55e0b4ba77d951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZKFGFV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGCmOIZHBENOQQzO7eKSQMih2izkbpVl5649gWmdbqaAiEAqNoWPJE1MFUUC1to7SpGT83mEM3ezYAz4SPlLD%2BFh5gqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYzEgKkXJ%2BeM5R%2F%2FSrcAxvoSiaz0ICP%2B1fARIHlVDPETwcwLl%2BtHXfHC%2B80HXQsXE2kf9Lma9TLFL%2BDBpFzs1jwij3%2FTVA1D4THuE5R0D2LHOIRaoymUH8z03QKqd4e30JhpMp778%2BhauWsAdT0xoD58R%2FGoic%2BpW1O92YCWhmrzZQk9CSjEDjr%2B2zGUZCplxiIyubrQtni9MBzbP9HTRA%2BlgYeCNDqgZQ47EC3Oxc6pMXV4T4IhAMpMSTggrFPEvxhYJxMB9FCPLmtipx%2F%2FRgULpACBUUR8g9kdfwHZq2PBST8jn389s1maqfvCJ8rlYyepNSFFxFeChz7oXM2MFkVcEcFB8aH%2BmMzU5vacgfu0CKszQleOlXX6EtzUKitHD0epH4s%2BJrxcng%2BtH1NWsvd%2Fcg8KNa%2FXnnRNFJ8YMVwiBaSHQcj6IPiPOCxvH9qLewMPUQ%2BJPMZfKE70lQIY3X9N4MX116jGKsPRYhXhsoBXmz9NPwbp%2BPlvBGMa9p0CekL88QGOD9jHMufPT1M9srynndxpqcF1BjRvhxblR%2B5Vw2SVfBgBSB2NzqR6xvXSCu9zS2H7XQDHlwW3ndUBC2GCwPL%2B8tqPsXURa65Pbf8jnkudGlUEhJvmoEclcxDI6r3RpLw5QuJhp0tMIKH3MkGOqUBBhd%2F07aYXzMRg%2BTOFCVD90McfwBvY0CoQaGmdrU23l94%2FaAYr5GPhT%2B2sbm085RajLNb3oAZuauzAuJsUbYSMDOOS1qFLwvyfXCQiPBVxGSEVD8jTI8oKKRRM1KQ5wQRe%2FCIdHPBYgUHLBP9zRXO5wijDdAoQiOImH8mt0ebjyQ5RizdQPesXAGaJX8P3n4XqZz0KjqPKts7AQH1fr0cjLBDsjLC&X-Amz-Signature=074245933f0c9ada35de4f9612d62ec8e582faaa967da29ba343a1c3964b9508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

