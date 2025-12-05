---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4U3KS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcp3HHgmssMtYM1PgjV%2BW8anMXI0oqsISjrpyqYB6b2QIgUwll8pikp8%2Fn81cGcuo0oEXqjsYErdZS1%2FUoBla7mgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJyv7LNS8riXV40W5yrcA603HeDYGZ872ZuHtch8WYEXafcF5AS6cqdIrXD0Wn8FKsojrEHdhTIHW8cVPMTdC3kOj8OsjipRb9IEXq5aiA5SxdxfeC8u9B89nEhzLNfh%2B5%2Feaa1MUzEBN2VnuOQl%2Fyf3YlgOSYrUTuxvg02%2BZLP9fN8P86T2J1aIIezJEoalYf4avTBwpI6R16KVcoYWoOOFgo6Ad2boi6Xvsxmm7Q62jp2r%2B%2FsiSUkOCFZcXYjL70ECvwGMFgojm%2FPkNoLlXyWCNARqW5KMWEMbDudaP8zCEYYyubgDVEdhrwg7nPZkFzs0N8E%2B5gevTJ%2FoDQ3%2FzXE7CBqHmq%2Fx1xVLnyVlhq2mgZbpU9utZ1iH42UhdsXqhVZIG4IE4FlgkmPNVjFvQTxRhdca78W5AFhBTIPgj8UUODne9aVeSn49LMjcEdwLJq0IgHmJu%2BYD%2Fzt9pPhNVZOzS7B46FSYk0Sy%2BoIDtPzXbtbw91oMgZknUEyQa9MHbTbRl8yf1DSPl%2B1C5utRiq0d5MFlGXgq6qkyBRtlDBjah%2FktAZMuOVkKHLSDcbc5ddaOA%2Fhx8qePdh5Qc2S3LeXXhEa4%2FkHJ77byYaYUH09eexzdcYkBnw0aqLQ8mpRcYn9JRO5mwVOlsRWQMI6MyMkGOqUBoB2cen%2BZiuLYSISxZ3TWkemfJN8arWTxJXF0yNABNCdWSB%2BDXC21hNGFYyBu7fl0affC2Tac3LU7HIqfePcXiPb%2FU8xSe4XR9W%2BFDBQyD3yaCnQJpV8xw7hYqwshh9ufxGmM4m3917fY8PEkwh8TXY19zx%2BfridLxqVRvgsAL0PoTVuo%2B9FvmekIyeCtC2toyjFt%2BGklAoaIzltht0DYJFM9E4Hb&X-Amz-Signature=9336d759f96957e39441d845fc1ab21ca3e13725c1af8e57dd09448da9155e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4U3KS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcp3HHgmssMtYM1PgjV%2BW8anMXI0oqsISjrpyqYB6b2QIgUwll8pikp8%2Fn81cGcuo0oEXqjsYErdZS1%2FUoBla7mgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJyv7LNS8riXV40W5yrcA603HeDYGZ872ZuHtch8WYEXafcF5AS6cqdIrXD0Wn8FKsojrEHdhTIHW8cVPMTdC3kOj8OsjipRb9IEXq5aiA5SxdxfeC8u9B89nEhzLNfh%2B5%2Feaa1MUzEBN2VnuOQl%2Fyf3YlgOSYrUTuxvg02%2BZLP9fN8P86T2J1aIIezJEoalYf4avTBwpI6R16KVcoYWoOOFgo6Ad2boi6Xvsxmm7Q62jp2r%2B%2FsiSUkOCFZcXYjL70ECvwGMFgojm%2FPkNoLlXyWCNARqW5KMWEMbDudaP8zCEYYyubgDVEdhrwg7nPZkFzs0N8E%2B5gevTJ%2FoDQ3%2FzXE7CBqHmq%2Fx1xVLnyVlhq2mgZbpU9utZ1iH42UhdsXqhVZIG4IE4FlgkmPNVjFvQTxRhdca78W5AFhBTIPgj8UUODne9aVeSn49LMjcEdwLJq0IgHmJu%2BYD%2Fzt9pPhNVZOzS7B46FSYk0Sy%2BoIDtPzXbtbw91oMgZknUEyQa9MHbTbRl8yf1DSPl%2B1C5utRiq0d5MFlGXgq6qkyBRtlDBjah%2FktAZMuOVkKHLSDcbc5ddaOA%2Fhx8qePdh5Qc2S3LeXXhEa4%2FkHJ77byYaYUH09eexzdcYkBnw0aqLQ8mpRcYn9JRO5mwVOlsRWQMI6MyMkGOqUBoB2cen%2BZiuLYSISxZ3TWkemfJN8arWTxJXF0yNABNCdWSB%2BDXC21hNGFYyBu7fl0affC2Tac3LU7HIqfePcXiPb%2FU8xSe4XR9W%2BFDBQyD3yaCnQJpV8xw7hYqwshh9ufxGmM4m3917fY8PEkwh8TXY19zx%2BfridLxqVRvgsAL0PoTVuo%2B9FvmekIyeCtC2toyjFt%2BGklAoaIzltht0DYJFM9E4Hb&X-Amz-Signature=be3a14fddeedeee1d19676efb881fb7e4d844d7f2d8484c5391bc7a25313452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

