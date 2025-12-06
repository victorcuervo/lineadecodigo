---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDF5OUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4BDNWJaioQ%2Ftqo87FDCo3mHu8uYxChyU%2F%2BPEt52sXdwIgUO18fDCkw43%2FyVhDi58B%2BFvHXJjwtSDUFgHXM24kn5gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHA8cHRzwxEhWN%2BHUSrcA2LUdrSTONSM5NSfmsNuGOIgydw4YVVGwDprKe1JF9iMbmQBCwU4yQToFcs762mk%2F%2BkzKgRGhNJ9Uvy7mmHN0Kpur%2FFnN69v6RZq6w7z2BCu%2B4ZD2j95wEv9PDrrKfH%2BiRBgWTBrfQxw6j7TBEKFWbtnL%2FnJgM6ePNqGHbeauAjKC9mNDprAV8t6OCwaMJLwj2sdqTjxi9HiDGRmejI98P7vWqWirdN3V2iuy93UGKlTHtcKhEt0oerp7TztNdBqUHig%2BBQCfs0iBkB4wjXhi5Lnsth9XKlUxdR5oBnq5tMNkafeB%2FMmk8NZCD7ODRxP5HpgRMUW5YrT2eJtA9jWSqq7uDqp8MyCvZvVO%2FMdZRIOXy%2BrQ2QTInj%2F7mrXZUmHQ2KtLzf7wy66DlJb16wwoyGC0foiQcG00x4fgxbGJ8BcaZoKuYC1EuoSuKSsE%2BcGbzB8fyH757tNjA%2BWK7igyEJn8QrutshmpYInkrSg1MGH8B%2BLEYP73Xli3ZvO74dT85ITgy1EKZ8oszxNDwv71NsORztdQ7v%2BFVIEwICgudh3SgjTuFgejd9I1CziqcHoAgO%2BHsNbzXx%2B7wiX5T2l7fhG13yRzUdeW5yO%2F2Y2kGZsWAAYG%2BASv2HCxlVFMOXrz8kGOqUB0h%2BThIx5jU4RLOQWenp8a7cCQeXlra4U%2B3KbVcL2Y5hacJLhnpdxa6P0xNhdoN3oogpCuNfzF4aFCRyHPCjvyjo34k4CLBfNNeCxgcNF5L6PSQqXqQi%2Bm%2BKREgQyJ0o2q6ktPJ4YHtMlx6wrpE3%2F4EUhiMV%2FFIBaTH0sDixaasTdo3T4Abz4u2qxE9uQrOh8mZgF1DfWlx5q62xHVkwLAf8xpMYt&X-Amz-Signature=5b9735385b23f2aa7f46eaf9abd5af8341000f006f5b3d9ec93ad9aba122d2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDF5OUL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4BDNWJaioQ%2Ftqo87FDCo3mHu8uYxChyU%2F%2BPEt52sXdwIgUO18fDCkw43%2FyVhDi58B%2BFvHXJjwtSDUFgHXM24kn5gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHA8cHRzwxEhWN%2BHUSrcA2LUdrSTONSM5NSfmsNuGOIgydw4YVVGwDprKe1JF9iMbmQBCwU4yQToFcs762mk%2F%2BkzKgRGhNJ9Uvy7mmHN0Kpur%2FFnN69v6RZq6w7z2BCu%2B4ZD2j95wEv9PDrrKfH%2BiRBgWTBrfQxw6j7TBEKFWbtnL%2FnJgM6ePNqGHbeauAjKC9mNDprAV8t6OCwaMJLwj2sdqTjxi9HiDGRmejI98P7vWqWirdN3V2iuy93UGKlTHtcKhEt0oerp7TztNdBqUHig%2BBQCfs0iBkB4wjXhi5Lnsth9XKlUxdR5oBnq5tMNkafeB%2FMmk8NZCD7ODRxP5HpgRMUW5YrT2eJtA9jWSqq7uDqp8MyCvZvVO%2FMdZRIOXy%2BrQ2QTInj%2F7mrXZUmHQ2KtLzf7wy66DlJb16wwoyGC0foiQcG00x4fgxbGJ8BcaZoKuYC1EuoSuKSsE%2BcGbzB8fyH757tNjA%2BWK7igyEJn8QrutshmpYInkrSg1MGH8B%2BLEYP73Xli3ZvO74dT85ITgy1EKZ8oszxNDwv71NsORztdQ7v%2BFVIEwICgudh3SgjTuFgejd9I1CziqcHoAgO%2BHsNbzXx%2B7wiX5T2l7fhG13yRzUdeW5yO%2F2Y2kGZsWAAYG%2BASv2HCxlVFMOXrz8kGOqUB0h%2BThIx5jU4RLOQWenp8a7cCQeXlra4U%2B3KbVcL2Y5hacJLhnpdxa6P0xNhdoN3oogpCuNfzF4aFCRyHPCjvyjo34k4CLBfNNeCxgcNF5L6PSQqXqQi%2Bm%2BKREgQyJ0o2q6ktPJ4YHtMlx6wrpE3%2F4EUhiMV%2FFIBaTH0sDixaasTdo3T4Abz4u2qxE9uQrOh8mZgF1DfWlx5q62xHVkwLAf8xpMYt&X-Amz-Signature=b7eed1ae68969a5d40d9c4e010ceaaf2ab60ed7e4d5bd3d3362658dd91609835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

