---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSE3E4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLm8NFoe2MVaVZw3kB1CKjzbCm6AgczG3UrQU6%2BxRGxQIgUhtWZfSI6Bu08d8Lh7ygzZVBZsoldlVR5zHEgvfzFC4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGrK9DNWeEh4Mv%2BtaSrcA2%2BM8rRBy%2F0pjCSaxLWaefwjzGWCjgQ%2BeFL2Sz3zpntkfriujRnttq9qUSm07sanKDPSqbYh3RjsjJ1xfg1wcLxie4RD1i8qsqWJF5Vp7F4cBIKZHG7LcJzRHBkI7AiQBlxdMD%2BQkX0Wm1AAmwr6wG%2BWd22LmOIdxkDDd4HJ7z1I65%2B0W4wZIH%2Bqm1MeT50cGu9i7%2F0RJBNA9HZ8qBFneFU4oBDTRH0BYo8P97ZkQ9o4bJTy5Uz3pqVPsR7N%2F6gRv9SvVLcXmdfxqCQJ9gkOf35ZEVafqGCU1TCYeszR%2B2nbBz1yLI156GOKMxPCxYlpdduFxutsnIjcoWccmr4y%2BHZSBUSx%2BhLaTs%2B3J%2B9u8GCRX9TCNINiVuz7moHi8sR0hsKjbtc0XCL6voI9K7n7Hm%2FnL7pmqsGNdz0YJhIgKzbm8IKUrnXL5VP6cmPfWeuqX1OCAP6flc5o56GY7UTZAjeO3P6YO75JjknxBUhipz%2BVJ9xwsybA8LOvFYx4oqOYIIYxUzDn%2BdKLmqfHfUBAJqf19rLYBjPRXfGHSnHRqhecz6eJNxA3wzNsw9daOozVR6SLFKmiTAADD9Ybq9aA95u2U5sQG5sfRRMy%2BHpy4ZA3ZTWdn4cs4H0PgO%2FeMM%2FK0ckGOqUB3ms0FXidZFBa6W1hPUTSxTP%2B0eMCqrh1APDeKGeL6MYM4hnNJFbhPuH2ElrLgVu%2BnDQKi6YVdURQp6KDieFxc4URUaqFjJ6yegzhP1Xskl0wO7jJYMydyFvBOpVi4WuuLmdFkqnMKRpp8um6UO%2F4GhE61cIIcSOABJAotmvTW9At05%2F6eA12EDw5I%2BCuzvu4rnvNh%2BEsgZjkQ9Cr6VSyxvMxGvX5&X-Amz-Signature=4ecd74766832f93093f8bfc323e7a55b41c21c50ef1e057f44ab4e18f60259ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYSE3E4K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLm8NFoe2MVaVZw3kB1CKjzbCm6AgczG3UrQU6%2BxRGxQIgUhtWZfSI6Bu08d8Lh7ygzZVBZsoldlVR5zHEgvfzFC4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGrK9DNWeEh4Mv%2BtaSrcA2%2BM8rRBy%2F0pjCSaxLWaefwjzGWCjgQ%2BeFL2Sz3zpntkfriujRnttq9qUSm07sanKDPSqbYh3RjsjJ1xfg1wcLxie4RD1i8qsqWJF5Vp7F4cBIKZHG7LcJzRHBkI7AiQBlxdMD%2BQkX0Wm1AAmwr6wG%2BWd22LmOIdxkDDd4HJ7z1I65%2B0W4wZIH%2Bqm1MeT50cGu9i7%2F0RJBNA9HZ8qBFneFU4oBDTRH0BYo8P97ZkQ9o4bJTy5Uz3pqVPsR7N%2F6gRv9SvVLcXmdfxqCQJ9gkOf35ZEVafqGCU1TCYeszR%2B2nbBz1yLI156GOKMxPCxYlpdduFxutsnIjcoWccmr4y%2BHZSBUSx%2BhLaTs%2B3J%2B9u8GCRX9TCNINiVuz7moHi8sR0hsKjbtc0XCL6voI9K7n7Hm%2FnL7pmqsGNdz0YJhIgKzbm8IKUrnXL5VP6cmPfWeuqX1OCAP6flc5o56GY7UTZAjeO3P6YO75JjknxBUhipz%2BVJ9xwsybA8LOvFYx4oqOYIIYxUzDn%2BdKLmqfHfUBAJqf19rLYBjPRXfGHSnHRqhecz6eJNxA3wzNsw9daOozVR6SLFKmiTAADD9Ybq9aA95u2U5sQG5sfRRMy%2BHpy4ZA3ZTWdn4cs4H0PgO%2FeMM%2FK0ckGOqUB3ms0FXidZFBa6W1hPUTSxTP%2B0eMCqrh1APDeKGeL6MYM4hnNJFbhPuH2ElrLgVu%2BnDQKi6YVdURQp6KDieFxc4URUaqFjJ6yegzhP1Xskl0wO7jJYMydyFvBOpVi4WuuLmdFkqnMKRpp8um6UO%2F4GhE61cIIcSOABJAotmvTW9At05%2F6eA12EDw5I%2BCuzvu4rnvNh%2BEsgZjkQ9Cr6VSyxvMxGvX5&X-Amz-Signature=129a7a5e9c1bb8ec9ef3b4dbb8fddcc3f18c04aec6e1fe0e008a3a73dbf4e491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

