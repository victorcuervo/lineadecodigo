---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXCNG53T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfJzRO0oWxInnREB47kUNqWh%2B9Jq0Zn%2BD%2By4rHf5sfAIhAKE4ov7vGONTcBTKgLe57VfW3vM6yVEK9fN3ejDs5cf5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySy%2FZYSCC71S0E9R0q3AN0XCy8k%2BQJONRovx49SWBhHzxMrGgjmQBLsPhQuDnXc7rPJOIKEjvoQRtA2eIYx%2BlIwU%2BiSE9IucgRS1L5dp156TuVxy1U%2FKwNww4yWFzqXTRlF%2BgRg%2FtDrna0Ri%2Bd1DP1RkrpLBG8jlV7JURorm4bxLgpnR81sRCeHpqcbETZzJUTJIJJDedNk6lYNyzbH0uH3MtkRavijpR3e95kfIYYjG%2B%2FEWHhBZ%2BADFgo%2Bw8auUL0Ymm0STB7EtXsNJbp1koem01JOZkMVYI6nzZp5TaFLg6PlFNDoEan0U75Y1oOLaeUw7QXkT2KpvC%2Fy8n9OE48yFBhlH%2FL7O%2Bz9K%2B%2B%2F0kTjok8O1zByWUj4kUqZf38vvZ1Diu93M3W1HOgVL6TLtZuP32Wtf73KPP62SCp%2B660vX3jS%2BtpdpCbNiEpmMe5gGlWXiHhi26vl3OAHWO3RcmF1uTJ%2BOp5Xx0zJfV51gPisSWrrvhJVbuvECwkPpFSx33vNvzTB0vibLKrWwHXXSB%2FugSjjpiTT1QKTfuCw%2Brj2Fs2fM6wLfLa3gHAIT%2Fjm8oUlzEDop16doCMiGTPkpxnaWXGBlvDHCJuiKsTQN8MTsYYtzhwY5HOIw%2BYvoQs7IYDGIQlX7Noj%2FTncTDTj9vJBjqkAdtcU7bh4GkisKr4K%2BgUHxa5cN7OiNP1Dh2%2F5CvwZaz4VeDXCrURKjOMGuBR1Jpa1PhEPGJVZT6g%2BNWF3ERgFhlOlE0nDbrsdlSdAcUsyZFOFItPbN1N4WAkqmtlL%2BXBuNHuFqG83rQrheUm9iacnCi64n3XQoHJLXMfCkWaqjWXNcot9WDMso59b08Qn1Z1hXNy9Z6l5vLfFynAGZq%2FQ7mnah0f&X-Amz-Signature=eae0b5bc1776dcff9c063a722abf4954339e0518160482306760de5b1f1c0ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXCNG53T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMfJzRO0oWxInnREB47kUNqWh%2B9Jq0Zn%2BD%2By4rHf5sfAIhAKE4ov7vGONTcBTKgLe57VfW3vM6yVEK9fN3ejDs5cf5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySy%2FZYSCC71S0E9R0q3AN0XCy8k%2BQJONRovx49SWBhHzxMrGgjmQBLsPhQuDnXc7rPJOIKEjvoQRtA2eIYx%2BlIwU%2BiSE9IucgRS1L5dp156TuVxy1U%2FKwNww4yWFzqXTRlF%2BgRg%2FtDrna0Ri%2Bd1DP1RkrpLBG8jlV7JURorm4bxLgpnR81sRCeHpqcbETZzJUTJIJJDedNk6lYNyzbH0uH3MtkRavijpR3e95kfIYYjG%2B%2FEWHhBZ%2BADFgo%2Bw8auUL0Ymm0STB7EtXsNJbp1koem01JOZkMVYI6nzZp5TaFLg6PlFNDoEan0U75Y1oOLaeUw7QXkT2KpvC%2Fy8n9OE48yFBhlH%2FL7O%2Bz9K%2B%2B%2F0kTjok8O1zByWUj4kUqZf38vvZ1Diu93M3W1HOgVL6TLtZuP32Wtf73KPP62SCp%2B660vX3jS%2BtpdpCbNiEpmMe5gGlWXiHhi26vl3OAHWO3RcmF1uTJ%2BOp5Xx0zJfV51gPisSWrrvhJVbuvECwkPpFSx33vNvzTB0vibLKrWwHXXSB%2FugSjjpiTT1QKTfuCw%2Brj2Fs2fM6wLfLa3gHAIT%2Fjm8oUlzEDop16doCMiGTPkpxnaWXGBlvDHCJuiKsTQN8MTsYYtzhwY5HOIw%2BYvoQs7IYDGIQlX7Noj%2FTncTDTj9vJBjqkAdtcU7bh4GkisKr4K%2BgUHxa5cN7OiNP1Dh2%2F5CvwZaz4VeDXCrURKjOMGuBR1Jpa1PhEPGJVZT6g%2BNWF3ERgFhlOlE0nDbrsdlSdAcUsyZFOFItPbN1N4WAkqmtlL%2BXBuNHuFqG83rQrheUm9iacnCi64n3XQoHJLXMfCkWaqjWXNcot9WDMso59b08Qn1Z1hXNy9Z6l5vLfFynAGZq%2FQ7mnah0f&X-Amz-Signature=4ba9c996ff7631b801cc4f2841835182397c340533dd8a126eb0f81e07e16a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

