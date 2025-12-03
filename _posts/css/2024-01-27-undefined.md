---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNR5FDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCUvTdzhzwJNCXmWpK50VkWvZYI3XsII5LHd5YxcksKaQIgL0jqahCxCXzD%2F7op8jG1%2FcsHTO3DQW7YCkN2g56Qcvgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEXaB9Lsyg6FxeO%2FpircA7D38WBDMSsjg2Ub7y4FeweBCCJNQrf6Qhf%2BqTUNd%2BQUux680a68AN62ApHucmZw4kjZJqLeSrxPhRqqamFL6M0g1mhJnlgq1xyOojc%2FeUo1gLUOocHmuBhuPtJTYzr%2FgFaBQ7RuNr4tQzJNsJZTs9pdkLXQmJZlZ4VZNgQ3qOWcPmwBhD3rC6zkUG%2BuhGwznn2mJFSGuLr1ASho10WVGwanx7RbvwIYIgY6iQC6aA1FYtY%2BXId2erJmL9fh3HmaCdVYx5b%2BhjUwK2ZQ0n3EKeYmUcCKCsF58xiDsukfvF4qpdhb6KD%2FPf6Hve6jmiNVVqqOwGYIyLh8W3BK6sV7mLBSR8fMdlyqcOgDGh5PJFkYSr6k1EGSPD71%2Fq9jGC5htwGAwmUQ4IImZ2rZiubSYlG0rgL6tKlpDv3oAMbk%2Fpmk%2BKNRXOfAS8k4FtpAi2DuIUI%2FHnf3Szx6%2Bs5zCuO1OmDtyVUXw1NLsSJh2ZSZ7KnkpO9uZmRMg6mlzMlaKwrI2a0fLE8rUgYc%2FPT0NwNGASHjjyw7nXxxqo%2F0yK4d38xsbcTSQB%2BWY3jmcwnd9o0L0Zm8IU3xf0numTDcUHi2%2BUMGSPNGJnr7x7lnFkj6AErmq%2FT0Bi4OCNy96tDoMOnMwMkGOqUBVaXDKDBSdCgFl7SaBmA81%2BuubZv4EpSSxAVJFW4ftbeOCYgZ6jaJCP0nbzbUhzrlXq9n35LsYX0mJmNqlkjUrcjT1NnhTdTQsxSxIFTu676S4OluuBKNLxnb2pNJLKTcxl8Zau08%2Faz3ey664Qx%2FBP6VwciH0P2S75jGJXcvSdMa3dEk%2BGcdwmi9ZOZ38I5xIBTudLbWhI8amqJ8iYUr58qNAta2&X-Amz-Signature=5d5bd32155dc9b13dc53e931403bf00ebf80b6f41714d22c30fb7810fd32d9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNR5FDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCUvTdzhzwJNCXmWpK50VkWvZYI3XsII5LHd5YxcksKaQIgL0jqahCxCXzD%2F7op8jG1%2FcsHTO3DQW7YCkN2g56Qcvgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEXaB9Lsyg6FxeO%2FpircA7D38WBDMSsjg2Ub7y4FeweBCCJNQrf6Qhf%2BqTUNd%2BQUux680a68AN62ApHucmZw4kjZJqLeSrxPhRqqamFL6M0g1mhJnlgq1xyOojc%2FeUo1gLUOocHmuBhuPtJTYzr%2FgFaBQ7RuNr4tQzJNsJZTs9pdkLXQmJZlZ4VZNgQ3qOWcPmwBhD3rC6zkUG%2BuhGwznn2mJFSGuLr1ASho10WVGwanx7RbvwIYIgY6iQC6aA1FYtY%2BXId2erJmL9fh3HmaCdVYx5b%2BhjUwK2ZQ0n3EKeYmUcCKCsF58xiDsukfvF4qpdhb6KD%2FPf6Hve6jmiNVVqqOwGYIyLh8W3BK6sV7mLBSR8fMdlyqcOgDGh5PJFkYSr6k1EGSPD71%2Fq9jGC5htwGAwmUQ4IImZ2rZiubSYlG0rgL6tKlpDv3oAMbk%2Fpmk%2BKNRXOfAS8k4FtpAi2DuIUI%2FHnf3Szx6%2Bs5zCuO1OmDtyVUXw1NLsSJh2ZSZ7KnkpO9uZmRMg6mlzMlaKwrI2a0fLE8rUgYc%2FPT0NwNGASHjjyw7nXxxqo%2F0yK4d38xsbcTSQB%2BWY3jmcwnd9o0L0Zm8IU3xf0numTDcUHi2%2BUMGSPNGJnr7x7lnFkj6AErmq%2FT0Bi4OCNy96tDoMOnMwMkGOqUBVaXDKDBSdCgFl7SaBmA81%2BuubZv4EpSSxAVJFW4ftbeOCYgZ6jaJCP0nbzbUhzrlXq9n35LsYX0mJmNqlkjUrcjT1NnhTdTQsxSxIFTu676S4OluuBKNLxnb2pNJLKTcxl8Zau08%2Faz3ey664Qx%2FBP6VwciH0P2S75jGJXcvSdMa3dEk%2BGcdwmi9ZOZ38I5xIBTudLbWhI8amqJ8iYUr58qNAta2&X-Amz-Signature=62f098baadf26d0de2aca49aa34187836973f067d4b90daf13c84475495ce782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

