---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJ33XSY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd5tlxqZgSfVwoTzDqQNucZ%2BVePaMEW2uRqgqTR5LawAiBkn3%2FHrVSA3W9bgMdk5MJ110CMR3Ut0zGH%2FdpjMzaMyiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Rs9GBgbCc5rtpxBKtwD7k15Lq618qH9sC1Vl3M1w%2BbsZs87czdnVGwT3SyIO3CqcaRyqRz5jePNMNZcL3MYtzpIlEYU1hRXrE5clVQN3IeGi5Pt4dXOlvtmuZB0zqbHaWQcTdyJ1HTY1RVHJQrBsRZP5l2d%2BNqw%2FLpBwq7XyR2DQbvSYydGfXKgiTEyE%2F9xCKoEzOBdqSBXflAv0d4Ds7rU0lO4z6gwTBFCk%2BSiQBGfBIfyxFmqkW%2FmvlO3dl5SE9kemuwkuwRHAwVVKNNoFi58UNKbferd0vYUUH34So2rlFYXx656uXMi9yfIeBcc8KlH8GJM3rWNsjGyetCpQXTteTh32wovPgytrtbxNQluBfTLcy7cgTIx7Er0HHFiYdIICis3R2jqtpu2dvG%2F7hXb8k06I5rez20oYk4R0AUjyPVsMuSl3F88KaOkSNvzwxV%2BrI6j0136PnNOx%2BUgCKnQ2e1OWfwNPTW7yd2gKxM877mTyqkG%2FkgS%2FBlwd9I2QrbhYB%2BVo6sQ3kvO9gIoh%2FjmpDTb%2B1h7l126SlYLo0XHIl7RSddF%2F4rRi%2BfSo1Gn3ZfKAvEnwpDwtvdhEjlaB1X5GjrPZtaplxjZTsgOWfamkAiMJO5z7Lsw4e6WBvB3gkuyCaZQ8NaVEWIwzJrVyQY6pgHGk3VRrBnhncksUVnQx6KNvhuBMkAvyQzGfcMqCKG1xdO0yXHSCuyZxIqQFKQMxswJqmMv%2F9bWcj%2B3SctNpKZxfV6asam03L%2BGBO%2BSKaiJ4VGLZxb4Qq5iej7rKknfwu0d1Kc2kpout5c842aFAVfOLneMbunuFvl5lHTCrT3T52PYB3NE9Hy3fJdGDeorNLgxFpwEPhM9AgQ2rRv7cE2wrmNTK1%2Fg&X-Amz-Signature=9c436b8c7ae03e3f7c87a4312da4eb1cb87b5d1547f073448c487242df8bfe1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJ33XSY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd5tlxqZgSfVwoTzDqQNucZ%2BVePaMEW2uRqgqTR5LawAiBkn3%2FHrVSA3W9bgMdk5MJ110CMR3Ut0zGH%2FdpjMzaMyiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Rs9GBgbCc5rtpxBKtwD7k15Lq618qH9sC1Vl3M1w%2BbsZs87czdnVGwT3SyIO3CqcaRyqRz5jePNMNZcL3MYtzpIlEYU1hRXrE5clVQN3IeGi5Pt4dXOlvtmuZB0zqbHaWQcTdyJ1HTY1RVHJQrBsRZP5l2d%2BNqw%2FLpBwq7XyR2DQbvSYydGfXKgiTEyE%2F9xCKoEzOBdqSBXflAv0d4Ds7rU0lO4z6gwTBFCk%2BSiQBGfBIfyxFmqkW%2FmvlO3dl5SE9kemuwkuwRHAwVVKNNoFi58UNKbferd0vYUUH34So2rlFYXx656uXMi9yfIeBcc8KlH8GJM3rWNsjGyetCpQXTteTh32wovPgytrtbxNQluBfTLcy7cgTIx7Er0HHFiYdIICis3R2jqtpu2dvG%2F7hXb8k06I5rez20oYk4R0AUjyPVsMuSl3F88KaOkSNvzwxV%2BrI6j0136PnNOx%2BUgCKnQ2e1OWfwNPTW7yd2gKxM877mTyqkG%2FkgS%2FBlwd9I2QrbhYB%2BVo6sQ3kvO9gIoh%2FjmpDTb%2B1h7l126SlYLo0XHIl7RSddF%2F4rRi%2BfSo1Gn3ZfKAvEnwpDwtvdhEjlaB1X5GjrPZtaplxjZTsgOWfamkAiMJO5z7Lsw4e6WBvB3gkuyCaZQ8NaVEWIwzJrVyQY6pgHGk3VRrBnhncksUVnQx6KNvhuBMkAvyQzGfcMqCKG1xdO0yXHSCuyZxIqQFKQMxswJqmMv%2F9bWcj%2B3SctNpKZxfV6asam03L%2BGBO%2BSKaiJ4VGLZxb4Qq5iej7rKknfwu0d1Kc2kpout5c842aFAVfOLneMbunuFvl5lHTCrT3T52PYB3NE9Hy3fJdGDeorNLgxFpwEPhM9AgQ2rRv7cE2wrmNTK1%2Fg&X-Amz-Signature=88d928499bb88f05b64a100e9e451db52b19b5cf903c4473fc1d3da55c1c6fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

