---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLO4ARY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaf44Q45LO%2FSfrkm%2FSN%2BqJrOmezbWFHU93xY4D2gL89gIgDKH90R5Le7qPLeJ7azwFt339trCNXfQwvFPF573rIzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJDcSiqdtIJSF2goyyrcA06wEnXM%2FHnXZfH2S5TMQaQdbHRLc7nV%2B04BgtPdpzQ9F%2BGy7EvTcs936rGa%2Bpzlm02qZxBptMiaue8diI99fuTGzPP6bxwffeprJZIrDKdWeomYmSTeoLaPH74Gvzyr0VjSG6TleHjuCzCnbQL8%2Bt6SVjXjiEo1KCCE89sBotz0we9LPmm0vCZoNX8MMJ%2Fcm1ZKU%2FNlWrh%2BeFvuTnaAyQ%2BM2vX4dSd9fJ%2BIIbgetnwfywoRfORLmLaxYEBArKa1hoYtbrUKdeFSzHlZ8JwVX6LFVG47HmQgzIwwcZ3IWgSz2u2OCtm1HuK645mvQSUXaALfx6MdysMDYGsUgWku8tniZ3Vo0Ab2RtXfW7ENPWP%2F3WmCxqNowYQv0KeyV6oIV2WZTIrtPLtAGHe3ov%2BsezbLIosBS%2FFpLC8V4FUk9IIcflYKUxG2VE7WLhaqlsYMY96OQDQKgaR8CeoXuXPBiEkw3hDVkk5aNAmGl3tw555eW9S0EYAPDBSToA85D63dOuu%2FbshIkOys9PFc1doEjSngBvobH5KCNF9O42RRQOBh12b%2FJyGnCWt3AO9f4Q%2Flv1se9Itq53S%2FOKnnmeKL4gdK7YvhmMFHdUhgQQi8C79r38R1dk54ZsJT%2FXyuMLqm0MkGOqUBsqjo7EsJuf4ZfAnHF2HGoADaPWUbym7Sc1GNcQyuuk%2FWA%2Ff2lO6awoeeo4yZwySDDtntKrrgqaGY6bD%2FXNYPVn56Hy2EcG0PncrD5GnUCcJoS5GjriAL7p%2B5P9OHZvnc%2BFFOoyxeuUq%2F1xUOR%2BzL0dbP5ZsHa83MnKxBwftDzoyY6naqg7sqKH6g80NMavInltc9y%2Bx45pciiqQK4fc472pZPII%2F&X-Amz-Signature=b2da59d0c3f9327e4ada40d944a68a35d7e228d348c627c0c91eefb8406a58b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJLO4ARY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaf44Q45LO%2FSfrkm%2FSN%2BqJrOmezbWFHU93xY4D2gL89gIgDKH90R5Le7qPLeJ7azwFt339trCNXfQwvFPF573rIzcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJDcSiqdtIJSF2goyyrcA06wEnXM%2FHnXZfH2S5TMQaQdbHRLc7nV%2B04BgtPdpzQ9F%2BGy7EvTcs936rGa%2Bpzlm02qZxBptMiaue8diI99fuTGzPP6bxwffeprJZIrDKdWeomYmSTeoLaPH74Gvzyr0VjSG6TleHjuCzCnbQL8%2Bt6SVjXjiEo1KCCE89sBotz0we9LPmm0vCZoNX8MMJ%2Fcm1ZKU%2FNlWrh%2BeFvuTnaAyQ%2BM2vX4dSd9fJ%2BIIbgetnwfywoRfORLmLaxYEBArKa1hoYtbrUKdeFSzHlZ8JwVX6LFVG47HmQgzIwwcZ3IWgSz2u2OCtm1HuK645mvQSUXaALfx6MdysMDYGsUgWku8tniZ3Vo0Ab2RtXfW7ENPWP%2F3WmCxqNowYQv0KeyV6oIV2WZTIrtPLtAGHe3ov%2BsezbLIosBS%2FFpLC8V4FUk9IIcflYKUxG2VE7WLhaqlsYMY96OQDQKgaR8CeoXuXPBiEkw3hDVkk5aNAmGl3tw555eW9S0EYAPDBSToA85D63dOuu%2FbshIkOys9PFc1doEjSngBvobH5KCNF9O42RRQOBh12b%2FJyGnCWt3AO9f4Q%2Flv1se9Itq53S%2FOKnnmeKL4gdK7YvhmMFHdUhgQQi8C79r38R1dk54ZsJT%2FXyuMLqm0MkGOqUBsqjo7EsJuf4ZfAnHF2HGoADaPWUbym7Sc1GNcQyuuk%2FWA%2Ff2lO6awoeeo4yZwySDDtntKrrgqaGY6bD%2FXNYPVn56Hy2EcG0PncrD5GnUCcJoS5GjriAL7p%2B5P9OHZvnc%2BFFOoyxeuUq%2F1xUOR%2BzL0dbP5ZsHa83MnKxBwftDzoyY6naqg7sqKH6g80NMavInltc9y%2Bx45pciiqQK4fc472pZPII%2F&X-Amz-Signature=f3a176a56d8a9161b543e8d682a715c1efad170c0ddb89cbfadee09ce55df99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

