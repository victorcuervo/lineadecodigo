---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH4GQCGV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrONpW9RX4xFjZin9W6ZZcSFlfL9LE9Mg6ymYesGEVwAiAoB7J47UkZdNPU6%2BTmIHFU6TgfGzc2Q%2BenStMef0c0fSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmWGKilDZC8FxCV%2FKtwDKG0Z3YHONAi1FlHIa4Xi%2FlVqgkY5WqIsAggikXtKVl0kwKE%2FZrPlw3aVWgCEoq49zs84yuy6U0ivvQ198MtpHWVs3cMRFG92Jlxo18egqzRlHX%2BTzzgMGZ7EtxAFeVYXwf%2BQuOvwBXHJZ%2BKW9VFOhNK15TNVViJFQhss%2BtBciEogxxCyRIX1Ty680LOnDOWGV312Uq3n%2BmCMTr4%2Fcr%2B9dZZf%2Fxie25Dy5MkgOwfB0w%2BUoiQ4CTthG7UQkP8kQvYJMjUqBntmILqbZpvB9EicoXtMlH0gsd1%2BwczJHUCWlrHm%2FbMuoNE9OrM9X7wCgz8GLo%2FhTr%2B9dmQzfCKYY%2BoV7gGINnILk1SaUT%2BUJq6tIqHwLKd6fFtRg8p%2Fc0WINob4C%2FHne9rdiQNoBh65958RoyNos52%2FAi6pB8JQZbJ5Oh3HSokj%2F%2BCsM38Cv35b1Rs6LJZrKoxQQQtVpmCZDJZwLG8xGY2%2F0xKx0ItnoPRMemFox%2FiNGbh5ECZTBlaueXw41z7HtluGAiUaa8DQjleAAVRUqVqvH6%2FdaQDkfabxqw8JrWxc5t4ZjyZ57nHH0VPcKl%2B8RvQhA%2B3Qz3pYMBE0eMI7%2BCg%2BikGmAaFrHbdOSoAJXmBy8%2B5cN1HfHgowrZDbyQY6pgEmVbAOW5hl0slfCBuZFPl5DEk4s3cWBTXa%2FDKffbBajC4OqikLjnL6ORmBLeSzcbCokgxTzcMshA6IJVN9CoB3OtFtyVe75Ot1j4PVcTE8hFNhpRoj4t5qXzcMHNUC3%2FC1rtDP8b%2BmsU1AAdkWT2Fnzlgr%2BEry2nzsX%2FSumYG5pixtgZ%2Fe6gPrMBpRhrqCzUUNQGUb00rspBrIHXngc9x9QRDGZkS8&X-Amz-Signature=3d627471fab8a069498572f537a044a3090b07f31e5c91032ee04ee8b6aee10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH4GQCGV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrONpW9RX4xFjZin9W6ZZcSFlfL9LE9Mg6ymYesGEVwAiAoB7J47UkZdNPU6%2BTmIHFU6TgfGzc2Q%2BenStMef0c0fSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmWGKilDZC8FxCV%2FKtwDKG0Z3YHONAi1FlHIa4Xi%2FlVqgkY5WqIsAggikXtKVl0kwKE%2FZrPlw3aVWgCEoq49zs84yuy6U0ivvQ198MtpHWVs3cMRFG92Jlxo18egqzRlHX%2BTzzgMGZ7EtxAFeVYXwf%2BQuOvwBXHJZ%2BKW9VFOhNK15TNVViJFQhss%2BtBciEogxxCyRIX1Ty680LOnDOWGV312Uq3n%2BmCMTr4%2Fcr%2B9dZZf%2Fxie25Dy5MkgOwfB0w%2BUoiQ4CTthG7UQkP8kQvYJMjUqBntmILqbZpvB9EicoXtMlH0gsd1%2BwczJHUCWlrHm%2FbMuoNE9OrM9X7wCgz8GLo%2FhTr%2B9dmQzfCKYY%2BoV7gGINnILk1SaUT%2BUJq6tIqHwLKd6fFtRg8p%2Fc0WINob4C%2FHne9rdiQNoBh65958RoyNos52%2FAi6pB8JQZbJ5Oh3HSokj%2F%2BCsM38Cv35b1Rs6LJZrKoxQQQtVpmCZDJZwLG8xGY2%2F0xKx0ItnoPRMemFox%2FiNGbh5ECZTBlaueXw41z7HtluGAiUaa8DQjleAAVRUqVqvH6%2FdaQDkfabxqw8JrWxc5t4ZjyZ57nHH0VPcKl%2B8RvQhA%2B3Qz3pYMBE0eMI7%2BCg%2BikGmAaFrHbdOSoAJXmBy8%2B5cN1HfHgowrZDbyQY6pgEmVbAOW5hl0slfCBuZFPl5DEk4s3cWBTXa%2FDKffbBajC4OqikLjnL6ORmBLeSzcbCokgxTzcMshA6IJVN9CoB3OtFtyVe75Ot1j4PVcTE8hFNhpRoj4t5qXzcMHNUC3%2FC1rtDP8b%2BmsU1AAdkWT2Fnzlgr%2BEry2nzsX%2FSumYG5pixtgZ%2Fe6gPrMBpRhrqCzUUNQGUb00rspBrIHXngc9x9QRDGZkS8&X-Amz-Signature=3f7d0291631a52a9a8802553dc9f18d6e33750f2fa905cd479a2741027a0592d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

