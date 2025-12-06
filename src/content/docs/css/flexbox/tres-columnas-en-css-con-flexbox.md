---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYXOZDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvr8AecXdI4HO2xoODxxZEVuYUUoBdBWwWe%2F%2BLy2uklAiEAjDM7urZLHsoxmgHm%2Bjb1m7CatwDv8L1vEUUtdnTeAQUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMpcS7%2BWeU50cn9FlircA8LiRmsOnScbX0U55KX2O0Lt0H5YgWLHv994V68wkTmo2riV2AiEeiHw5rOPS%2BRTZnlS23pAEBg6km1aro8dZgzIs7O%2FXF9YXC2tJO72Tn8ZylzctjArZyC5HgCyypJE0P4WhhvLFizgHrLNfq1xrULUOuenV77dbHlMzyM%2Fo%2FMVwgo1XLmbjjjyqod7fmUhNwdiwkcKNOFsJ%2Bw4TIr0fSdt%2BTMFtDNMpxiLfg2yAEM2Jp6gtmgStox9d6bcQvGzhES2rEJVoMOE3u0ETwNsl5dYB0aPBF%2BhrQoAR4eVbKLcPsw90TUzAvDMPeb02y1ZeP4YeMfa1RC%2FZ8U6%2BiBd3mXSzPLsu36rOk1UsbYTs1HoIVpOQlWWBHYbiSvM%2FSUx9p1Gl2RzwTNRoDsnsJ3Vh131toC%2F5wQbQP1OpcxzwQzh32Wo9dS%2Fm7Ed1enznpGqBXUWx8RkHXfHavFxPZVuCh8muJCNDeCYj6cndIVpoLLNojGIiMv23BYGiYBzx5QbZQ7xgIL1wDvvjXk%2BJ8e3NrKl6ONZW2S%2FLjBX67kbLh2QYDv5UCxZhMTEsX0DVvnAmcefTB%2FIV%2BUw%2BLawh%2B7%2FjpneOywEDpdcry4p%2BVUzOStAYqJEyonGCUj0N4O4MLnezskGOqUBvkBakUTvW1dOSxIVowdcc9j6z79IGUpuY6bzH4TBUq%2BaRuYHHax69mKQevzzfuOrY7cc4enU7Yirb9hajF7usOrfefK%2Ft6TXaZQlVi7A69nA7gIaucMDqB2K%2F9%2Fvq%2B09SW%2FUCVgTRbd7a%2F3EDDZDprtimIq6i%2Fpma884%2Bq%2F7rI%2BDwmTwq8hMUyfpbP9v%2BNxr9gLkGr5ymL5HMMBQNDZMcBSgmUkG&X-Amz-Signature=489dddcc4dba5e0c3c885d1bbd507f46a435304b7496475e59574a17ee8e8de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYXOZDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvr8AecXdI4HO2xoODxxZEVuYUUoBdBWwWe%2F%2BLy2uklAiEAjDM7urZLHsoxmgHm%2Bjb1m7CatwDv8L1vEUUtdnTeAQUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMpcS7%2BWeU50cn9FlircA8LiRmsOnScbX0U55KX2O0Lt0H5YgWLHv994V68wkTmo2riV2AiEeiHw5rOPS%2BRTZnlS23pAEBg6km1aro8dZgzIs7O%2FXF9YXC2tJO72Tn8ZylzctjArZyC5HgCyypJE0P4WhhvLFizgHrLNfq1xrULUOuenV77dbHlMzyM%2Fo%2FMVwgo1XLmbjjjyqod7fmUhNwdiwkcKNOFsJ%2Bw4TIr0fSdt%2BTMFtDNMpxiLfg2yAEM2Jp6gtmgStox9d6bcQvGzhES2rEJVoMOE3u0ETwNsl5dYB0aPBF%2BhrQoAR4eVbKLcPsw90TUzAvDMPeb02y1ZeP4YeMfa1RC%2FZ8U6%2BiBd3mXSzPLsu36rOk1UsbYTs1HoIVpOQlWWBHYbiSvM%2FSUx9p1Gl2RzwTNRoDsnsJ3Vh131toC%2F5wQbQP1OpcxzwQzh32Wo9dS%2Fm7Ed1enznpGqBXUWx8RkHXfHavFxPZVuCh8muJCNDeCYj6cndIVpoLLNojGIiMv23BYGiYBzx5QbZQ7xgIL1wDvvjXk%2BJ8e3NrKl6ONZW2S%2FLjBX67kbLh2QYDv5UCxZhMTEsX0DVvnAmcefTB%2FIV%2BUw%2BLawh%2B7%2FjpneOywEDpdcry4p%2BVUzOStAYqJEyonGCUj0N4O4MLnezskGOqUBvkBakUTvW1dOSxIVowdcc9j6z79IGUpuY6bzH4TBUq%2BaRuYHHax69mKQevzzfuOrY7cc4enU7Yirb9hajF7usOrfefK%2Ft6TXaZQlVi7A69nA7gIaucMDqB2K%2F9%2Fvq%2B09SW%2FUCVgTRbd7a%2F3EDDZDprtimIq6i%2Fpma884%2Bq%2F7rI%2BDwmTwq8hMUyfpbP9v%2BNxr9gLkGr5ymL5HMMBQNDZMcBSgmUkG&X-Amz-Signature=7d5e22215d57877c0d37fd51edbcecb9d63462408c89a9b62953e1750ac650be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

