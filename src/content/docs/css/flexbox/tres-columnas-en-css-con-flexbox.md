---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXD4Z6C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERkh8mrpJ0lc%2F5a%2BRi86xaZnvfbMABt6jenapC0QK1xAiBsRCXUP7aIpY7tfJ%2BSoaojGxLVSC2zRp1b6NzprV%2FsgyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSoqW%2FDFyPFNzfXrBKtwD0E2FbwfCZZzl6wdmQvuXIWaK36GS0FwFR3iS5Y4jb%2Bj9VwxcnB7HWUs9eCeh1Cg%2BtSu3j9yqidAwU0y%2B0wTJUInLOjfOyTejp4S8aG8Z%2FxgtUqTWy%2FXA7aw9lNMHAxoFQxWnyuNRNgEctigasRtxCpRoMqBB4T08ekl%2Fb%2BzSIrw1Gw2HPAJLL1BM4yPW1SKD1gyJNWd8Lo4YEGEYkohHHeQGRdOSjOWwRefvagDdGa%2BwivE2PlplkRveM3feUe3cdCfLu6GhCj4MdsCvFkox2yh1aPXY8niKaDgSmugSx9eXm36My9213IGwY1%2F2U2Kq9OKpix7pUcrODCZ3m1pGoXGzkm9%2BQHJrD7RN3%2FvenPtibsJjUDRCOsz%2FG3WqeT2z6xc8Jqlxku2Iq1%2FIGWsRkzo5NZuRuvk2FN04VEohjki%2Br61NAZooFaXqUnXwlS%2B4sbqglo8JVa2hxMaTT4GzBYu%2FuxselIoPMUBz0JTJrT12cz15fGv7ZNxt%2FxWdGNNf2RRlhlFcqpiM9eQ4c9eS5JRJvBR8XfNOClH0w6VxpsvdGu6aSKxtpG28nMrjZyMrwnA%2BGzSWRRXcMTE3W79KnAMlrB2sd5kjakf1ywqwhfFTwQWd5vI%2F9brOIeIw%2FKPUyQY6pgEU5q21bLUI1rplzfiYxUyGdlPxEG%2FGWsqOj%2Fbx8r9CfXtEe%2BOQoC7m48Fem7FXyO7fLXMmCfmVrF8IQKZZ%2BwDlZejBQbQ0UOT1H6mVxf8mNeqRYZ2xT6NH4aW7wFUJzkjJ1ahQrgUQ0GUK3tOCZoFDV2cVe2LOqHFSFgAP9ydEBpvXu%2BNyb2ZT8hMHti0WvsbattgCaMDHlNXy5r7Wpq5rfI47Ndou&X-Amz-Signature=7f12bb9e9b79b1ff4774566085678eb072015574a99bc5d5ef9448674fd2e13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXD4Z6C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERkh8mrpJ0lc%2F5a%2BRi86xaZnvfbMABt6jenapC0QK1xAiBsRCXUP7aIpY7tfJ%2BSoaojGxLVSC2zRp1b6NzprV%2FsgyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSoqW%2FDFyPFNzfXrBKtwD0E2FbwfCZZzl6wdmQvuXIWaK36GS0FwFR3iS5Y4jb%2Bj9VwxcnB7HWUs9eCeh1Cg%2BtSu3j9yqidAwU0y%2B0wTJUInLOjfOyTejp4S8aG8Z%2FxgtUqTWy%2FXA7aw9lNMHAxoFQxWnyuNRNgEctigasRtxCpRoMqBB4T08ekl%2Fb%2BzSIrw1Gw2HPAJLL1BM4yPW1SKD1gyJNWd8Lo4YEGEYkohHHeQGRdOSjOWwRefvagDdGa%2BwivE2PlplkRveM3feUe3cdCfLu6GhCj4MdsCvFkox2yh1aPXY8niKaDgSmugSx9eXm36My9213IGwY1%2F2U2Kq9OKpix7pUcrODCZ3m1pGoXGzkm9%2BQHJrD7RN3%2FvenPtibsJjUDRCOsz%2FG3WqeT2z6xc8Jqlxku2Iq1%2FIGWsRkzo5NZuRuvk2FN04VEohjki%2Br61NAZooFaXqUnXwlS%2B4sbqglo8JVa2hxMaTT4GzBYu%2FuxselIoPMUBz0JTJrT12cz15fGv7ZNxt%2FxWdGNNf2RRlhlFcqpiM9eQ4c9eS5JRJvBR8XfNOClH0w6VxpsvdGu6aSKxtpG28nMrjZyMrwnA%2BGzSWRRXcMTE3W79KnAMlrB2sd5kjakf1ywqwhfFTwQWd5vI%2F9brOIeIw%2FKPUyQY6pgEU5q21bLUI1rplzfiYxUyGdlPxEG%2FGWsqOj%2Fbx8r9CfXtEe%2BOQoC7m48Fem7FXyO7fLXMmCfmVrF8IQKZZ%2BwDlZejBQbQ0UOT1H6mVxf8mNeqRYZ2xT6NH4aW7wFUJzkjJ1ahQrgUQ0GUK3tOCZoFDV2cVe2LOqHFSFgAP9ydEBpvXu%2BNyb2ZT8hMHti0WvsbattgCaMDHlNXy5r7Wpq5rfI47Ndou&X-Amz-Signature=59a9a6088fe08145c5d023c9e834fb99237dc7f5f0e04bb3b2212a7b2215deeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

