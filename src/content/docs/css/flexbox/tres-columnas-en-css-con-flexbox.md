---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHVNIOR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVQ%2F2XoaoF3%2B96ShblIz3gIewdSfM0POLtCiV7NXv%2BAIhAKPD0xdYQVbn2u7KuPG6bEPpqFGyl5K3DXpSKsCaBXP6KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylqRmBQK1wgZqJcfEq3AOGQWvbwnfW0Qz9Wey9CJ0vpzKvs%2Fs0Epya037AnvGntA2zHRbLy4v6rhvX7O6JWU%2BXoAQJEQ0fxmF8V2pQvfsgIAtG60uIx4dzguQSFLDnf6gq4P1VqLSyNQ3IMQfORvxTRzGX7Rl%2FKYf95BiXo%2FD2YqpF%2Fl33wjf0NLAbNbXrWIwBhVKKd0Iw4cWzWSHCAZLu%2BdhC6pOLzfMpYEUxuKiPdkBeyWqqQKGGNtzxZZRbCp8VwIGS8b88pCIjGmCDQN33ZbxAakmzva00o6HBNtMbMyqkHzHFBgRhwzMxa93b%2FeWh2zAYjuDlqg0o1cNqFhe5eceCGY097bSLnad%2BajWnBfRrN9ZNo3cYjP1mO6IU5qXGSXW9txIa7Y1nYqvi%2F33Z2ag9nlpPuSfG3uwzU70I7zhoH0Eojnn%2Fpz4KdAL0qOgWHqkxJWARZUhs4lV5NOB%2BlfI4YOG%2Fa0wiXTS3soe%2B9HhMSRMPSNfW3x2hvUmRKWWh9VtGKfOwEYNLbgyGkRGfMnWPoI6Uck6B7gekzSJ7NQa9H79u09voR3axJzc1Nwj25VqmQx4l%2FpoCWSgrSheIONX0qS266gfbudwkHTgxqnn1YKr0e4Y6uhW1syX1kfnzaEKRq2ZQOv8PiDDWnNTJBjqkAb0%2BUhX4CAig%2FFmGE4kYKQlvbFVazoroYbUkyAgo9ogpro6LNzFLM%2BZZZWDy7FHnv6%2BbIU636ew6%2FERHzUnME2MJhGxP7snJhpfLs%2BDrX1cg4mNv5Gb1unwWWup6EpdYlfxVNVeT3tIg%2FQSgjEWAMI%2BubL0V60%2Bmp9SK8XkI6Ug4zI5%2F6Qv%2BgwRRpCdXujStxv0e5CZwbyDARq4OHhWGGzsXedhf&X-Amz-Signature=721ef29a0a8507fd41470f094258d61653ccb3cfc3a005d5a896e7c3c7d32cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHVNIOR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T073905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVQ%2F2XoaoF3%2B96ShblIz3gIewdSfM0POLtCiV7NXv%2BAIhAKPD0xdYQVbn2u7KuPG6bEPpqFGyl5K3DXpSKsCaBXP6KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylqRmBQK1wgZqJcfEq3AOGQWvbwnfW0Qz9Wey9CJ0vpzKvs%2Fs0Epya037AnvGntA2zHRbLy4v6rhvX7O6JWU%2BXoAQJEQ0fxmF8V2pQvfsgIAtG60uIx4dzguQSFLDnf6gq4P1VqLSyNQ3IMQfORvxTRzGX7Rl%2FKYf95BiXo%2FD2YqpF%2Fl33wjf0NLAbNbXrWIwBhVKKd0Iw4cWzWSHCAZLu%2BdhC6pOLzfMpYEUxuKiPdkBeyWqqQKGGNtzxZZRbCp8VwIGS8b88pCIjGmCDQN33ZbxAakmzva00o6HBNtMbMyqkHzHFBgRhwzMxa93b%2FeWh2zAYjuDlqg0o1cNqFhe5eceCGY097bSLnad%2BajWnBfRrN9ZNo3cYjP1mO6IU5qXGSXW9txIa7Y1nYqvi%2F33Z2ag9nlpPuSfG3uwzU70I7zhoH0Eojnn%2Fpz4KdAL0qOgWHqkxJWARZUhs4lV5NOB%2BlfI4YOG%2Fa0wiXTS3soe%2B9HhMSRMPSNfW3x2hvUmRKWWh9VtGKfOwEYNLbgyGkRGfMnWPoI6Uck6B7gekzSJ7NQa9H79u09voR3axJzc1Nwj25VqmQx4l%2FpoCWSgrSheIONX0qS266gfbudwkHTgxqnn1YKr0e4Y6uhW1syX1kfnzaEKRq2ZQOv8PiDDWnNTJBjqkAb0%2BUhX4CAig%2FFmGE4kYKQlvbFVazoroYbUkyAgo9ogpro6LNzFLM%2BZZZWDy7FHnv6%2BbIU636ew6%2FERHzUnME2MJhGxP7snJhpfLs%2BDrX1cg4mNv5Gb1unwWWup6EpdYlfxVNVeT3tIg%2FQSgjEWAMI%2BubL0V60%2Bmp9SK8XkI6Ug4zI5%2F6Qv%2BgwRRpCdXujStxv0e5CZwbyDARq4OHhWGGzsXedhf&X-Amz-Signature=6d4ed0e84dadad8e09839b9de2294c0eae4d5d1500d1c332cf91c17f43a470ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

