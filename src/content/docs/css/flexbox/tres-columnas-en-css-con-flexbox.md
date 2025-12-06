---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5LMHWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb7Uyq337uqwmrfaUmGwF9lNpobqzeF6PKLoCb9FVYkwIgL%2BsY6197A%2FnataUVYpNzmILVWjI13xLlXXjd%2BNC3Z%2BMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLUV5QFUoXQbsBG41CrcAyXB5Afk%2BKNkMtCTVvhQNsB29DBFFZBH1ScKqi6xKmKMVoIu7bvX3aEF8A0k941uZgViFpx4poLAgADCYqGGFIBmAYwOlrUiu53v3LNCZKIW3%2BpNuKuVDBwq8SWEKoRqGbDvA%2FlD7kX%2FY11GUwZA4W36umiTMM0S9Y8H260Kb%2FeVU3o8Npd1G3%2Bu4ZoGz8SkVAX20ntblB7e3Mo4JUACpvxb67GwKBQ5fDgbqbN%2Bk0yCI2s9PrgeI205oca0Df1lhmaz34jrD99y2XkHeW1dagTXuJHXrCeCnLniLLp88VyZOFC0%2Bo%2BMYmTXbDOGRIfqb3RX6alhmg5XTcZVwhujpOcQJT8mFq5SLzbVtcYKglYORFlYW8NmJCzs1UeJjql5%2BG1Kjw5wzEDQMN2lnGq0xV197qFcf6vkgctEUmBsvYGaMhAcBnIZ6fSLvvkgLlYH%2Bo0wxSTubZNsj43RDrNihMKNe06G6ifMxhGC%2BYwJK0EDk0c2eXgwnTczOR0nF0H%2F979N2%2BOqC2HqCx4DHzCOoVSc%2BkadSiUPmWS2VoHFUNQA9a9z2ItC7qZ%2FD1pXQKL7zcKf6d2wLlr9wPhGuPnFh1KyDfjhBjHieuuf8%2F5PKVqiMj%2FsTiAUlZDuGVBhMNPU0skGOqUB2DngRLwLvKCwEuL9wEZ8f6FUm%2BIpExnj0V6cHE0XSVt6Od%2F6L3ErqwhOvrhd%2FAJjAtXHeX56w%2BcAnFQwy1DFmLy%2BeCtnMOeSGhHgV5bzJuUBPOLgE920qiW9VGOGOVG2HHY9HmA1fTOHe1KMLpdjeG9vvcJ1cf6cLvRCwh6O0H%2BHhaTfrNd1Ps9smG%2F5QX8y6gz7yriWt%2Bk48CnRtbeE0MqugjFZ&X-Amz-Signature=0a6ac7bfb66a663f46a073724be6626520d840dcf4ff9b8faa968d7cca066536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5LMHWD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb7Uyq337uqwmrfaUmGwF9lNpobqzeF6PKLoCb9FVYkwIgL%2BsY6197A%2FnataUVYpNzmILVWjI13xLlXXjd%2BNC3Z%2BMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLUV5QFUoXQbsBG41CrcAyXB5Afk%2BKNkMtCTVvhQNsB29DBFFZBH1ScKqi6xKmKMVoIu7bvX3aEF8A0k941uZgViFpx4poLAgADCYqGGFIBmAYwOlrUiu53v3LNCZKIW3%2BpNuKuVDBwq8SWEKoRqGbDvA%2FlD7kX%2FY11GUwZA4W36umiTMM0S9Y8H260Kb%2FeVU3o8Npd1G3%2Bu4ZoGz8SkVAX20ntblB7e3Mo4JUACpvxb67GwKBQ5fDgbqbN%2Bk0yCI2s9PrgeI205oca0Df1lhmaz34jrD99y2XkHeW1dagTXuJHXrCeCnLniLLp88VyZOFC0%2Bo%2BMYmTXbDOGRIfqb3RX6alhmg5XTcZVwhujpOcQJT8mFq5SLzbVtcYKglYORFlYW8NmJCzs1UeJjql5%2BG1Kjw5wzEDQMN2lnGq0xV197qFcf6vkgctEUmBsvYGaMhAcBnIZ6fSLvvkgLlYH%2Bo0wxSTubZNsj43RDrNihMKNe06G6ifMxhGC%2BYwJK0EDk0c2eXgwnTczOR0nF0H%2F979N2%2BOqC2HqCx4DHzCOoVSc%2BkadSiUPmWS2VoHFUNQA9a9z2ItC7qZ%2FD1pXQKL7zcKf6d2wLlr9wPhGuPnFh1KyDfjhBjHieuuf8%2F5PKVqiMj%2FsTiAUlZDuGVBhMNPU0skGOqUB2DngRLwLvKCwEuL9wEZ8f6FUm%2BIpExnj0V6cHE0XSVt6Od%2F6L3ErqwhOvrhd%2FAJjAtXHeX56w%2BcAnFQwy1DFmLy%2BeCtnMOeSGhHgV5bzJuUBPOLgE920qiW9VGOGOVG2HHY9HmA1fTOHe1KMLpdjeG9vvcJ1cf6cLvRCwh6O0H%2BHhaTfrNd1Ps9smG%2F5QX8y6gz7yriWt%2Bk48CnRtbeE0MqugjFZ&X-Amz-Signature=7f7512521aa9015dbf417c86ccb5b40eed4718ab02a014ee1fa0ddca5e417a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

