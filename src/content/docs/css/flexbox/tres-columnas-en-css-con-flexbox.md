---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADU7RTX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS05N%2B%2BJqdiQLYO6izSsRR2wBWMEze0JWhw01MrworuwIhAIHbkyvvNeb%2BYVBpyDtQJ31PUmVfggfJkBHG8vtjo74LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwhTwrI2Q45qP6Gw2wq3APO14RNNvc%2F73lQuOfGywknddXP9PgmXtms73cEysbCeRbueNlZaBIRHeKMy32UW22BkAkktfGgpiNRTMwdmLumSot1Q6i9OXF1mtjkC7gb60F7%2B8V70B9Me%2B5OuMhn9sdrwxKfbIDvbt%2FIo2UEb40KHVq0rl%2FSSH3ltyeHP0UqA00%2Bt2%2BvtDzPUZcCj%2FVjTMW9OA7t666CT2vmX1SYhsfXe0ZQOMesTOlroXnAQR4KfHJ%2BUFpeRnZ9decHj4AcntZqJBsfONZYdon%2FAGkr4CrAn30E%2FQyxT20TfgK%2BWzw%2FrWFYUhEWPjV4H9SDqpETycu2oOC6J8X8jd88BiERXRa6ZEilA732YZJYnTuKase9ctB6MuCvdmz7QImhYzfzXIml7mXMporgFLkw%2FzVW7RT%2BFFtGWqVqR7ogdLRMRppYFZK%2BHh1NFC%2BqAh2nZ4F0UFg7%2F9kVR2LorNG9j%2BouCYyzHQnRCRITnOq23jCa65I5jR2QUkkyRE5JG%2BXujeed4zg6De3aTb8OkR8CVDUhlzst4BQsBTzexn0MM%2BkJd8FkUa8pIE%2FIGCqguPjZxIq794o%2BRl97bbNdiDKdBf4SUz7Lz48nqGcQrRQAQkihpBM3zTJSL7z%2FCwLN4YqGGzDJws7JBjqkAbAp2xaDmRM59ErR6MtID8k4j3SzlgDEgYCe6hvPZrZf8lPAPjgpzp1j4tkMBFYNoeMegYR1CWuDCboNHFc8DnULSTDREud8hntB8HQd74qSQqp03UNOZv08HE5IAot443aMU%2ByV9S66bPujOdKHC%2BLXklBcGVMRSQ9VNFwlTKcWQsnmc6VCAJ7AAK1xtHPQzhCFlwyARgwCzlV%2BbQGgje5nKLbL&X-Amz-Signature=0433a26d94393d51b1d61eac16cfb36508335f8a1ccb541851682741183089fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADU7RTX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS05N%2B%2BJqdiQLYO6izSsRR2wBWMEze0JWhw01MrworuwIhAIHbkyvvNeb%2BYVBpyDtQJ31PUmVfggfJkBHG8vtjo74LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwhTwrI2Q45qP6Gw2wq3APO14RNNvc%2F73lQuOfGywknddXP9PgmXtms73cEysbCeRbueNlZaBIRHeKMy32UW22BkAkktfGgpiNRTMwdmLumSot1Q6i9OXF1mtjkC7gb60F7%2B8V70B9Me%2B5OuMhn9sdrwxKfbIDvbt%2FIo2UEb40KHVq0rl%2FSSH3ltyeHP0UqA00%2Bt2%2BvtDzPUZcCj%2FVjTMW9OA7t666CT2vmX1SYhsfXe0ZQOMesTOlroXnAQR4KfHJ%2BUFpeRnZ9decHj4AcntZqJBsfONZYdon%2FAGkr4CrAn30E%2FQyxT20TfgK%2BWzw%2FrWFYUhEWPjV4H9SDqpETycu2oOC6J8X8jd88BiERXRa6ZEilA732YZJYnTuKase9ctB6MuCvdmz7QImhYzfzXIml7mXMporgFLkw%2FzVW7RT%2BFFtGWqVqR7ogdLRMRppYFZK%2BHh1NFC%2BqAh2nZ4F0UFg7%2F9kVR2LorNG9j%2BouCYyzHQnRCRITnOq23jCa65I5jR2QUkkyRE5JG%2BXujeed4zg6De3aTb8OkR8CVDUhlzst4BQsBTzexn0MM%2BkJd8FkUa8pIE%2FIGCqguPjZxIq794o%2BRl97bbNdiDKdBf4SUz7Lz48nqGcQrRQAQkihpBM3zTJSL7z%2FCwLN4YqGGzDJws7JBjqkAbAp2xaDmRM59ErR6MtID8k4j3SzlgDEgYCe6hvPZrZf8lPAPjgpzp1j4tkMBFYNoeMegYR1CWuDCboNHFc8DnULSTDREud8hntB8HQd74qSQqp03UNOZv08HE5IAot443aMU%2ByV9S66bPujOdKHC%2BLXklBcGVMRSQ9VNFwlTKcWQsnmc6VCAJ7AAK1xtHPQzhCFlwyARgwCzlV%2BbQGgje5nKLbL&X-Amz-Signature=6503457204fdab4e35f7415868426aa741d05593ca01c31ebc2e71e6914e191e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

