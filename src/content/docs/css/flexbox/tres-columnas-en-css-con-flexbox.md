---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLCSWR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCfsMKnnk3JocrO01q1%2FLMhqlWLCQlO6yBKgAglibUQIhAIysxOh48sUtGZU71xUTurcbza2fQr%2FYG38fj%2B%2BEoxtAKv8DCGAQABoMNjM3NDIzMTgzODA1IgzIAqAfIVFSqFIC508q3AN8Ica9cvnS5zqXP5h9A%2FuT%2Fl%2FdCkwHIIMMxqmz9xl9mGQGzhu6zPlzUX8ALoT5DkLFrADi1gSh2rAacaph2Fd%2FLRYjzH7Nx05Cu3BEc7SmCqw3Z2ZJvWk%2FPDq6uVXOJetkpDuX67Zv2bPJPkdR19VMwiCmNN8pkiuGAr9S3s8J%2F3jd%2FQ7vZCh%2FwiMLr%2BUnWLSNsk5%2FiCQ5q9Y3fGbzVmCN6l4ODXHOFQKBWNa%2Br1LbjNcO2cx%2Fa1B9mT64zs1gH0vizX6zgQE17P12VE02GgBd6YQBWx96Hy4xapuZCqXv2sKRjaf2u4j2kqTCCpJMkI%2Fn2xWJfOVCxTJV7GHMhpqYX4CcG9NTx4oUcWw97CIPnEG6Ui%2B7%2FiJMvNzvm0USjf406vaFuVi2zXu2J7fa9KSJYhsH4Ht3K8PZ43G7ZbRI1%2FDJP0H%2BlmXKT6L55wrctJuDV9EdVzXL9ZLrfysQNtEHb6LCK%2Fv75j8oHIek4LpbNdvKhv1ucIsUwAjpO4oqQMw3o2Kf1Ahv5dWB4et0dG8pNcH9gwtoEchlguU46uTWCNXZwn4CjmKT%2FfCyG%2ByQjLVgR4dCBej91bolCAnfq3bAe15lT%2B70KWqEZTIPxkDcCo%2BUSUD3wtxCh%2Bb%2FIDCf48vJBjqkAW5LCMRcEjy2%2F9%2Bvf7zpQWmomxqgI6qDqqZ8sVhuc3CJTmBi2NXLxjCkhR489l39a956wQF8LFQH1sZuEzAW%2F0uZstF823ghQy5nKwpTzvfouNRGKgP4isuNKoh5cUAbEnA1LIkH%2FCxyPjOQLLWAB1hpNv0QzrP1tiCrpb69LJvaicCtVga%2F1iBhEwODye9aVNsAGcN93X%2Bkb2cIHRnBba6Jj52w&X-Amz-Signature=c743735de7939b5bf1926d632a41d9c3a0f9aa03574921e0b41cbdc65d0acd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SLCSWR4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyCfsMKnnk3JocrO01q1%2FLMhqlWLCQlO6yBKgAglibUQIhAIysxOh48sUtGZU71xUTurcbza2fQr%2FYG38fj%2B%2BEoxtAKv8DCGAQABoMNjM3NDIzMTgzODA1IgzIAqAfIVFSqFIC508q3AN8Ica9cvnS5zqXP5h9A%2FuT%2Fl%2FdCkwHIIMMxqmz9xl9mGQGzhu6zPlzUX8ALoT5DkLFrADi1gSh2rAacaph2Fd%2FLRYjzH7Nx05Cu3BEc7SmCqw3Z2ZJvWk%2FPDq6uVXOJetkpDuX67Zv2bPJPkdR19VMwiCmNN8pkiuGAr9S3s8J%2F3jd%2FQ7vZCh%2FwiMLr%2BUnWLSNsk5%2FiCQ5q9Y3fGbzVmCN6l4ODXHOFQKBWNa%2Br1LbjNcO2cx%2Fa1B9mT64zs1gH0vizX6zgQE17P12VE02GgBd6YQBWx96Hy4xapuZCqXv2sKRjaf2u4j2kqTCCpJMkI%2Fn2xWJfOVCxTJV7GHMhpqYX4CcG9NTx4oUcWw97CIPnEG6Ui%2B7%2FiJMvNzvm0USjf406vaFuVi2zXu2J7fa9KSJYhsH4Ht3K8PZ43G7ZbRI1%2FDJP0H%2BlmXKT6L55wrctJuDV9EdVzXL9ZLrfysQNtEHb6LCK%2Fv75j8oHIek4LpbNdvKhv1ucIsUwAjpO4oqQMw3o2Kf1Ahv5dWB4et0dG8pNcH9gwtoEchlguU46uTWCNXZwn4CjmKT%2FfCyG%2ByQjLVgR4dCBej91bolCAnfq3bAe15lT%2B70KWqEZTIPxkDcCo%2BUSUD3wtxCh%2Bb%2FIDCf48vJBjqkAW5LCMRcEjy2%2F9%2Bvf7zpQWmomxqgI6qDqqZ8sVhuc3CJTmBi2NXLxjCkhR489l39a956wQF8LFQH1sZuEzAW%2F0uZstF823ghQy5nKwpTzvfouNRGKgP4isuNKoh5cUAbEnA1LIkH%2FCxyPjOQLLWAB1hpNv0QzrP1tiCrpb69LJvaicCtVga%2F1iBhEwODye9aVNsAGcN93X%2Bkb2cIHRnBba6Jj52w&X-Amz-Signature=f47602cd05ef381a35bd6bbf9b8a25b281d93257f48f8ae9ca7ec6dd726f93a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

