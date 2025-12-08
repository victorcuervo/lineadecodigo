---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23NWWTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmg46d804a21E9W%2BYOvrDXs%2BTmoK8%2FPgQwVAx7UHlIdAiB%2BUn9e35masc%2FZUbzALHRxJZjJsXfUfmvZ5V4EHYAAeyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg1AKrYuMPGnzIjdKtwD91Tgj8s8SgsBWN7mqEuDyj8xU2jlorzDSUEpmlCzlvlpzrMc7xdZuZ%2FakO2kB7V1DP%2FM%2FXQnM8OLnYGkTZ28nEN0DAH50NUdxJhiy3lbwYZkq6656s8pXvrXRWt%2BsBBVdZ3gVqiXyNpNID%2BxUOTmQuumkB0Ow88tlrpUYko0VMxfJMjpUwZ3zBIBKunWtoubdJl6K5L%2FN9FeWIPpD3WklS5PyyHknStHi%2FNOUKWRPATGj2zYDiQdJSURBmUTVK1K371ZbeYM6xAjWPm4rPMdLiZbtq8TnLzrEcZUqclTPH2zkYjbg39xExsiB%2BRgA8J19%2FeaRS9cdnlH0Ykz8YXd13XOpDnYR8vsywZD2epRnCHu%2FTftABeuMGfHHx%2BPfZko3iydTWCQ5y0IPr1arSZj%2FoT3aZjC8xZcd0w6G52ffBZQDYFW0BTmEWdvYS8tR0J0kOVLCaSeoZl9%2BV%2BHxOFmCz%2FsOfun8cd9KM3LOiW%2BtUiW7Rw%2BAppVZs7pkAfv6OQmKXkn9oQ4VwVhIyrO0YC1ymDl45j%2FpwysdjfuaSiRDg9LOQZ1T64DU2XsbrH29qARcEm%2BsMJ7RqQbhVYJDuCeubIBcIacGb5lI2WfghVbmsFN%2FRUapqTXpYxAuXQwrqLdyQY6pgE8kvWrQr3SZRMLlHF3%2BP66jhJl0myII%2F0EkjphVLVB7mvtcfRpcJBFqbo91AIN262UEG3XBUSRt%2B6pAKTCEH3oMtmOplwx%2F3i%2Bo6%2BNoD2XnfC9UdZBJ4XdxIDbRyFmNYvdn474Z1VQhzKKbnegMvS1mOnozrR%2BorAzb%2BlxKbW6cAhPcdbVBXSNjOytAQO3Llo%2Fi6jZI%2FrwiWoJr1dGPFsUmIsGOzpI&X-Amz-Signature=f15ec23fc6b99cab01753c090eea255cdc73fc15d08b332ab675334e7e15e3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23NWWTR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmg46d804a21E9W%2BYOvrDXs%2BTmoK8%2FPgQwVAx7UHlIdAiB%2BUn9e35masc%2FZUbzALHRxJZjJsXfUfmvZ5V4EHYAAeyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrg1AKrYuMPGnzIjdKtwD91Tgj8s8SgsBWN7mqEuDyj8xU2jlorzDSUEpmlCzlvlpzrMc7xdZuZ%2FakO2kB7V1DP%2FM%2FXQnM8OLnYGkTZ28nEN0DAH50NUdxJhiy3lbwYZkq6656s8pXvrXRWt%2BsBBVdZ3gVqiXyNpNID%2BxUOTmQuumkB0Ow88tlrpUYko0VMxfJMjpUwZ3zBIBKunWtoubdJl6K5L%2FN9FeWIPpD3WklS5PyyHknStHi%2FNOUKWRPATGj2zYDiQdJSURBmUTVK1K371ZbeYM6xAjWPm4rPMdLiZbtq8TnLzrEcZUqclTPH2zkYjbg39xExsiB%2BRgA8J19%2FeaRS9cdnlH0Ykz8YXd13XOpDnYR8vsywZD2epRnCHu%2FTftABeuMGfHHx%2BPfZko3iydTWCQ5y0IPr1arSZj%2FoT3aZjC8xZcd0w6G52ffBZQDYFW0BTmEWdvYS8tR0J0kOVLCaSeoZl9%2BV%2BHxOFmCz%2FsOfun8cd9KM3LOiW%2BtUiW7Rw%2BAppVZs7pkAfv6OQmKXkn9oQ4VwVhIyrO0YC1ymDl45j%2FpwysdjfuaSiRDg9LOQZ1T64DU2XsbrH29qARcEm%2BsMJ7RqQbhVYJDuCeubIBcIacGb5lI2WfghVbmsFN%2FRUapqTXpYxAuXQwrqLdyQY6pgE8kvWrQr3SZRMLlHF3%2BP66jhJl0myII%2F0EkjphVLVB7mvtcfRpcJBFqbo91AIN262UEG3XBUSRt%2B6pAKTCEH3oMtmOplwx%2F3i%2Bo6%2BNoD2XnfC9UdZBJ4XdxIDbRyFmNYvdn474Z1VQhzKKbnegMvS1mOnozrR%2BorAzb%2BlxKbW6cAhPcdbVBXSNjOytAQO3Llo%2Fi6jZI%2FrwiWoJr1dGPFsUmIsGOzpI&X-Amz-Signature=e6916d4dc9727e8a3c057950b53f4fbc3cb5f55f4f610f50e4cd3395e2210112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

