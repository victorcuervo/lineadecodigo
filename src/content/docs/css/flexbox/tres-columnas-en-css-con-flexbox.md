---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXOAMZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD453BS3BZGyvXtB1tXQvf5UJZ%2FqA0SorTp6lhlQ6fuKwIgcf1SFZX1TcsCbcNjJzSOxt%2BBcT7zGepSG9fm8XyUELsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKY1%2BMAwq5SBX1vSCrcA37QVMk2VdfIISZyNgjXHhhhFxFexopxRYle3o%2BCPr7sxOdqehxZCmYzFFJZcUFAx2OyGSgr2bvUqVP%2F7LlDEElhQsGTKfTjVpAFq6K4AxUAAQhHxJGsr7Qgak4a2NNYwPY1MkDGb3YqKQ6LkWvazb1rXlDXNgmn7dd5rHPFJ94Fm%2Fh9PPSCFmboMY4jVlUTpOg5%2FsoGSOmk8gbr6yCaGp2QJu7IfNWkOYvOcpaaL%2BUveOoBogWY%2BiBkMgv6YqRfxRDeAkVBmYdOljcFH51rUFJxURpC4n%2FG6ZPXF34lW8gM1NnAP2yFD1cX6vRCc9%2FAUwa7sAuovDPn7l%2BlEKM9823HS97G5xwSNRJP3X%2BeTZwNUHpoAYKTV%2BN98HQJrfqbdH5QW84Ha%2Bg1Z8yWhimp1ZBfMPGVO7Cq4Vxnpi26%2FXhPvUf30fiQL9K%2BTdTlIgvKZdq6fHnCCz6gzSEa%2FRCity9UOXPPoRyi4He9w%2FiNyRzIvqL1XUkrwRwnarV3ho8J0OIqB4ZWO%2BNRDG7%2FRx9J6wreDQeMG5UVkpA6w0eSuwdqkS%2FUZLJ%2FnhNCuw6dJSOQWSvmCBL9B6BBUO3%2BnH9AKeEXnFxTLO5o2ZX%2Bu0SsgAo5oWvEsId70Qsx1o5IMI7d3MkGOqUBG7TcDk%2FC5iVRA0JwleAi58VFNLukmv2mYC6Wn5QcRMCci7UiAuxgofa6MS9MO7r367pzEssjGBbD2ByxsNfRiEHbTrI%2FGVqmXBS4ZDqD5FkofurxHZj1JecLmfvdbikiaZ8h97TAQADlAFGyBuAt%2B8nQ%2B5OngEBRVoEMz33pdxF8bhE1LLZ8VsE7Z76Soctbwv1eRSFlz2MvvvlE7ZRq2ssey4mB&X-Amz-Signature=65e283c87921665004b0aaa7270fa606f1b84ae2e4fb6a1566b06afd2a01899f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXOAMZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD453BS3BZGyvXtB1tXQvf5UJZ%2FqA0SorTp6lhlQ6fuKwIgcf1SFZX1TcsCbcNjJzSOxt%2BBcT7zGepSG9fm8XyUELsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKY1%2BMAwq5SBX1vSCrcA37QVMk2VdfIISZyNgjXHhhhFxFexopxRYle3o%2BCPr7sxOdqehxZCmYzFFJZcUFAx2OyGSgr2bvUqVP%2F7LlDEElhQsGTKfTjVpAFq6K4AxUAAQhHxJGsr7Qgak4a2NNYwPY1MkDGb3YqKQ6LkWvazb1rXlDXNgmn7dd5rHPFJ94Fm%2Fh9PPSCFmboMY4jVlUTpOg5%2FsoGSOmk8gbr6yCaGp2QJu7IfNWkOYvOcpaaL%2BUveOoBogWY%2BiBkMgv6YqRfxRDeAkVBmYdOljcFH51rUFJxURpC4n%2FG6ZPXF34lW8gM1NnAP2yFD1cX6vRCc9%2FAUwa7sAuovDPn7l%2BlEKM9823HS97G5xwSNRJP3X%2BeTZwNUHpoAYKTV%2BN98HQJrfqbdH5QW84Ha%2Bg1Z8yWhimp1ZBfMPGVO7Cq4Vxnpi26%2FXhPvUf30fiQL9K%2BTdTlIgvKZdq6fHnCCz6gzSEa%2FRCity9UOXPPoRyi4He9w%2FiNyRzIvqL1XUkrwRwnarV3ho8J0OIqB4ZWO%2BNRDG7%2FRx9J6wreDQeMG5UVkpA6w0eSuwdqkS%2FUZLJ%2FnhNCuw6dJSOQWSvmCBL9B6BBUO3%2BnH9AKeEXnFxTLO5o2ZX%2Bu0SsgAo5oWvEsId70Qsx1o5IMI7d3MkGOqUBG7TcDk%2FC5iVRA0JwleAi58VFNLukmv2mYC6Wn5QcRMCci7UiAuxgofa6MS9MO7r367pzEssjGBbD2ByxsNfRiEHbTrI%2FGVqmXBS4ZDqD5FkofurxHZj1JecLmfvdbikiaZ8h97TAQADlAFGyBuAt%2B8nQ%2B5OngEBRVoEMz33pdxF8bhE1LLZ8VsE7Z76Soctbwv1eRSFlz2MvvvlE7ZRq2ssey4mB&X-Amz-Signature=2d3cf5e451f1ee48f129b5f245dbdd122ff6bc48300cf2110bfbb4001e433e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

