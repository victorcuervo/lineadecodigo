---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5RLRK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUnm4rDUrMERcv1wkjMAvT5YGLrIIbOMNt%2F0lLmO1EQwIgLyA5ZDZwEr4p2kMTxMOiFZBYPjO62XIfW9fitdU2NL4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FFDGv8mFjm9fKLvCrcAyYNuumcrMgQEq3CVopPx6SeW7Vd7MUyna4LZity%2F8FV6FCmWQ0eRehjPaMuf%2BX46j3NtTegBt7V08t9I6p34Wju24Q1vDlmTvuhMy6j%2B1xCzNHrJCTihUt9ZGZUKwD6tWpWOZeqeYaK2yqP8kRsJhQkFjA7ZY%2B5t1WCegjV7Q09AGaZDi1Pqprw4k7quUnUwUVxnsQR99LKM%2Fs398w0ou0NRt0QLTK7YRcfzipCR01le9gZf4c6%2BGgpvu70dpnYczBhGqIf04eoybwpKO0kZxe%2BFfbGCRbbp4eLoWQ2gf8F%2FfE7kVeRsyLLNwdTE8PnKFjqkO2WCD2fyAXGk7wanmRfyTmQm6MsxJN9kaxM0bvHDXcGdii6azFwIP8BBhemcp6PXcNPlULUv51y2sqV0x8s5cLatE0zmifoRfygj3wXxp7NSbIZwnyBkWogiCzGVhHBXwOWJ2T5BEg1byhben6PBYgs%2FpIjxie%2F2Eo9tjDQdDcNJiQbcGEeeV5Rdo54M9LmQ%2B5H8vJYpKjOnCoHvcQ54%2BOfw4hVpTuuNO%2BnagO9qbkxfHqkKMQ98fAgby3nVGz3h7twQUBzq%2FGvSQxkQ1bQ9z77sT3l7KVx%2B0TxrnpSHXTgAdHRgfMJ1hJ%2BMLqb1MkGOqUB5ZjuwMwO9KRIG8HEOjKgpT3fSTqKgU1L%2Brjmd1bOu1zgDErrce5b8lajHox7pi5R4eSSv4tMcybYsrpKiCSQ%2B7G4DheL0YO996pDqN%2FKCovcrO%2FirKNYAYrFCBU2dcXtBgEIyEYkR3tGPt%2FH1ftQnWNalTpavFh2cWxwzOy5SIV4ohNq9o4Z8SCGN5JMkOMXSKlVrjAaPdzm%2Fb9npBQAigWXpP44&X-Amz-Signature=6f3876cf52f9110681c74ba894035bf28f1304643f027e352e0bed55d9e1b376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5RLRK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUnm4rDUrMERcv1wkjMAvT5YGLrIIbOMNt%2F0lLmO1EQwIgLyA5ZDZwEr4p2kMTxMOiFZBYPjO62XIfW9fitdU2NL4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FFDGv8mFjm9fKLvCrcAyYNuumcrMgQEq3CVopPx6SeW7Vd7MUyna4LZity%2F8FV6FCmWQ0eRehjPaMuf%2BX46j3NtTegBt7V08t9I6p34Wju24Q1vDlmTvuhMy6j%2B1xCzNHrJCTihUt9ZGZUKwD6tWpWOZeqeYaK2yqP8kRsJhQkFjA7ZY%2B5t1WCegjV7Q09AGaZDi1Pqprw4k7quUnUwUVxnsQR99LKM%2Fs398w0ou0NRt0QLTK7YRcfzipCR01le9gZf4c6%2BGgpvu70dpnYczBhGqIf04eoybwpKO0kZxe%2BFfbGCRbbp4eLoWQ2gf8F%2FfE7kVeRsyLLNwdTE8PnKFjqkO2WCD2fyAXGk7wanmRfyTmQm6MsxJN9kaxM0bvHDXcGdii6azFwIP8BBhemcp6PXcNPlULUv51y2sqV0x8s5cLatE0zmifoRfygj3wXxp7NSbIZwnyBkWogiCzGVhHBXwOWJ2T5BEg1byhben6PBYgs%2FpIjxie%2F2Eo9tjDQdDcNJiQbcGEeeV5Rdo54M9LmQ%2B5H8vJYpKjOnCoHvcQ54%2BOfw4hVpTuuNO%2BnagO9qbkxfHqkKMQ98fAgby3nVGz3h7twQUBzq%2FGvSQxkQ1bQ9z77sT3l7KVx%2B0TxrnpSHXTgAdHRgfMJ1hJ%2BMLqb1MkGOqUB5ZjuwMwO9KRIG8HEOjKgpT3fSTqKgU1L%2Brjmd1bOu1zgDErrce5b8lajHox7pi5R4eSSv4tMcybYsrpKiCSQ%2B7G4DheL0YO996pDqN%2FKCovcrO%2FirKNYAYrFCBU2dcXtBgEIyEYkR3tGPt%2FH1ftQnWNalTpavFh2cWxwzOy5SIV4ohNq9o4Z8SCGN5JMkOMXSKlVrjAaPdzm%2Fb9npBQAigWXpP44&X-Amz-Signature=8db5e66254c02210bfcd40f0076bf492f0d5be0f2df880a5cee2769aa91a5072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

