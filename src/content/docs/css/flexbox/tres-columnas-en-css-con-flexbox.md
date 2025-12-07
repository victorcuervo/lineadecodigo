---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAFSHXC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FgzTbsZXBKGYGHK8lI6FzbTw%2BXkpci4TfzpyREJYAIhAPDUkr5etKCRvZbwovEeQ38rYxo%2B%2Be5OOJkeE1uolvGAKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF3a1b31o6dW5CDVEq3APpuMoi4lcdAjRAQ3KzqyxwxtfvEG%2FibCp5uTKKyB9zYgVZa7%2BUkoITQb79kDpv3W1ulkUKUuvq8F535XnZKZAVEK7awSZeyvAi%2BGb3cxHsOaGDlvPR6e%2BPtlVzU580JYsNY1Ox39a0yp5LuCQB%2FKdyQ8sMaBLNkSvLWn2deUGZFbE0fiZSFTXWcjV%2BPNzqfyV5nCYKqzSnWoB3Um%2FEyQUAWWVNvL3LPbbRVLrYHQyXAL3xl%2ByDupUdySeL7%2FNPIW%2Ba2Y5I4EPombZD%2BQ4It29TRgje77kjhqqdyRTx2lf8KuWWu3yXxG030hqtcSGnKzDtviPvE2FdIemybcqb%2Fe8O7L4Tw1Zm4uihXxYB%2Fa%2B7xvzy0d2ZiLHVkOwIDi21F2FgVPbteqRtqsMWbODkIt1QwOppL3dAu64OZjdhAlsuf0EojwA9ampeml%2Fnq8E6o%2FIxALPYeEIeJTogLcWmRA3NzOI1I137FJWuAsSeAvI%2FVefRywDrgK0Sp0Xf2ept93IqgSsray8Q%2FVX3JR1C7%2FYGepnSU0FoNcmzFOJiCz1LJkeHr2Dbbhz%2BLV5E746cLEoQVJhVqAz%2BsxNgQ%2FAAD72TGyGd1GJ60D2OmCdiJKUrZl6nPbz66R%2F0H2lE1zD7mdXJBjqkAdMBykm3Z2FFooIlDCFItoSFHAn1DEAXyAmCigj2hGt9JclEGgDX6%2BKfCVq4CjouqkToYzz65dfq0jnA7sfxCVh%2BgTdlL4nQ0r48oIdTHIoiReCEE5xKXwTc9hzUg7J%2FOZgtpdUjMsmL0jK8cnfRuG9CI9gGgAE8%2FwsL2mnfb68AOs9tBsUNqF%2FOmPKPfqxA5kra6YkeZl76EZL3e%2FllXhuEAf%2Fy&X-Amz-Signature=66e25fc108d85a8594625219fa455c7b8882d3f190ad89070f0c839f6ed11d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAFSHXC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM%2FgzTbsZXBKGYGHK8lI6FzbTw%2BXkpci4TfzpyREJYAIhAPDUkr5etKCRvZbwovEeQ38rYxo%2B%2Be5OOJkeE1uolvGAKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF3a1b31o6dW5CDVEq3APpuMoi4lcdAjRAQ3KzqyxwxtfvEG%2FibCp5uTKKyB9zYgVZa7%2BUkoITQb79kDpv3W1ulkUKUuvq8F535XnZKZAVEK7awSZeyvAi%2BGb3cxHsOaGDlvPR6e%2BPtlVzU580JYsNY1Ox39a0yp5LuCQB%2FKdyQ8sMaBLNkSvLWn2deUGZFbE0fiZSFTXWcjV%2BPNzqfyV5nCYKqzSnWoB3Um%2FEyQUAWWVNvL3LPbbRVLrYHQyXAL3xl%2ByDupUdySeL7%2FNPIW%2Ba2Y5I4EPombZD%2BQ4It29TRgje77kjhqqdyRTx2lf8KuWWu3yXxG030hqtcSGnKzDtviPvE2FdIemybcqb%2Fe8O7L4Tw1Zm4uihXxYB%2Fa%2B7xvzy0d2ZiLHVkOwIDi21F2FgVPbteqRtqsMWbODkIt1QwOppL3dAu64OZjdhAlsuf0EojwA9ampeml%2Fnq8E6o%2FIxALPYeEIeJTogLcWmRA3NzOI1I137FJWuAsSeAvI%2FVefRywDrgK0Sp0Xf2ept93IqgSsray8Q%2FVX3JR1C7%2FYGepnSU0FoNcmzFOJiCz1LJkeHr2Dbbhz%2BLV5E746cLEoQVJhVqAz%2BsxNgQ%2FAAD72TGyGd1GJ60D2OmCdiJKUrZl6nPbz66R%2F0H2lE1zD7mdXJBjqkAdMBykm3Z2FFooIlDCFItoSFHAn1DEAXyAmCigj2hGt9JclEGgDX6%2BKfCVq4CjouqkToYzz65dfq0jnA7sfxCVh%2BgTdlL4nQ0r48oIdTHIoiReCEE5xKXwTc9hzUg7J%2FOZgtpdUjMsmL0jK8cnfRuG9CI9gGgAE8%2FwsL2mnfb68AOs9tBsUNqF%2FOmPKPfqxA5kra6YkeZl76EZL3e%2FllXhuEAf%2Fy&X-Amz-Signature=775c46d321a84d4dc44417eb0fe295af5372e9ab1e3a6ce2445edde04aa295d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

