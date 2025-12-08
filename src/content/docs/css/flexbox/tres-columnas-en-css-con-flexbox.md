---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWJCQBE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFB%2FG57VRn6j4bwxEI656c5lxFKa5gGvOy7cAkwdAdjYAiEA%2BXK2kD7f2U6afHuvhKp8fFa12BpdulpIO9%2B2tGNbm5EqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpke13Vbx6VJhgoircA%2FQdDg7S0vcKMNBMziAOrLh3O%2FbHlrXOhKz%2BaBX36Y70vEsI7Dyorygfg50OGYZMBYggUpQUcXZe1Ol1ygtrXOVbPTcTJdFZLrM7LNAbZ6BJgcY6R3SLyGl7tWRE4M8mI1ZrHKf%2Bm1nKeySo0DQbJciJHoONt3NcJFSe8JLybTrUuXO82aeWOmv8YcO7MPMUAfJ19%2FMqpq3hmjdoj7hxEdRhC3lmGg0TX%2FEGyEECzwlPMPCDkmxENunf%2Bg1bl%2FxFAqVyv5IRLDpTxH8XGmq1jGZTYP5H%2Br1hrfJmMldemZjz6aMNhxvyhLG5U45dIQHCU1WNNNMA%2BJHIrSlt1VxsB%2BVcLE%2BNJ7gS6b7UzpqnDp1nSYAIYp16%2FYcWQnwzHsTMtt8z%2FE9WPctFfrmKTKLiyFh5OLSDAIQrBm0dX5JDyo6igPZXJN6ScF7a%2F1CTRtzjy32ORULli6USAU2q41m0QlmCBzv2FMMuZ0JekEghuVxJB%2BBft31n%2BKvEG5bVj2cmK8HX%2BGvVRZY2ZZes6N5xymEvPQiG5Cu6LO0ODmXWRuPYP6yrMZddDFySPMwxJY0aB3rAXQT47T%2B2XLYIRF7%2Fx45FvrLZfBLfsjtcLphDqTDLBrfIEG71y4AFMSpZMM2z3MkGOqUB8qEoUJpLV8VMX%2BbT4XQP%2FGku4kP5YMXdGfNcRL%2BJ7GbB7vqK6sUDnU4u2mM2eUbrQbLE6zZY1fl5JXTKDAtOTgYlfEXnQa49OBnErjWZot61NNXpOigWCzqpGBpY%2BBfRJ0GUjp%2Fa2wta5uOykjfcd6RG6csHDEGHjHZVKzbr%2F7JGGIOffxONNKdLM73lwu9oaGBksikhY%2FGOvT3muYfu5RscUVzv&X-Amz-Signature=38f961ba235075a07636ecb2a9c30a6ae678073235ecf269315e81f179f29935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JWJCQBE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFB%2FG57VRn6j4bwxEI656c5lxFKa5gGvOy7cAkwdAdjYAiEA%2BXK2kD7f2U6afHuvhKp8fFa12BpdulpIO9%2B2tGNbm5EqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYpke13Vbx6VJhgoircA%2FQdDg7S0vcKMNBMziAOrLh3O%2FbHlrXOhKz%2BaBX36Y70vEsI7Dyorygfg50OGYZMBYggUpQUcXZe1Ol1ygtrXOVbPTcTJdFZLrM7LNAbZ6BJgcY6R3SLyGl7tWRE4M8mI1ZrHKf%2Bm1nKeySo0DQbJciJHoONt3NcJFSe8JLybTrUuXO82aeWOmv8YcO7MPMUAfJ19%2FMqpq3hmjdoj7hxEdRhC3lmGg0TX%2FEGyEECzwlPMPCDkmxENunf%2Bg1bl%2FxFAqVyv5IRLDpTxH8XGmq1jGZTYP5H%2Br1hrfJmMldemZjz6aMNhxvyhLG5U45dIQHCU1WNNNMA%2BJHIrSlt1VxsB%2BVcLE%2BNJ7gS6b7UzpqnDp1nSYAIYp16%2FYcWQnwzHsTMtt8z%2FE9WPctFfrmKTKLiyFh5OLSDAIQrBm0dX5JDyo6igPZXJN6ScF7a%2F1CTRtzjy32ORULli6USAU2q41m0QlmCBzv2FMMuZ0JekEghuVxJB%2BBft31n%2BKvEG5bVj2cmK8HX%2BGvVRZY2ZZes6N5xymEvPQiG5Cu6LO0ODmXWRuPYP6yrMZddDFySPMwxJY0aB3rAXQT47T%2B2XLYIRF7%2Fx45FvrLZfBLfsjtcLphDqTDLBrfIEG71y4AFMSpZMM2z3MkGOqUB8qEoUJpLV8VMX%2BbT4XQP%2FGku4kP5YMXdGfNcRL%2BJ7GbB7vqK6sUDnU4u2mM2eUbrQbLE6zZY1fl5JXTKDAtOTgYlfEXnQa49OBnErjWZot61NNXpOigWCzqpGBpY%2BBfRJ0GUjp%2Fa2wta5uOykjfcd6RG6csHDEGHjHZVKzbr%2F7JGGIOffxONNKdLM73lwu9oaGBksikhY%2FGOvT3muYfu5RscUVzv&X-Amz-Signature=898251d1e4f46c7b891150ad7ac9286dd51d6acaeefe68a262ac9e27eeaa2ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

