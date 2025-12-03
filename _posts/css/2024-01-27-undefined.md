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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZNCUGB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICntOWI2x7%2F%2BYkO0%2Fx5GxFERw5GUPPmUS2Rq4rARxTb3AiEAwxoZSUAA1hmtzU8qoafMc8WH9wjoXj6JZY9T56xB9U4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBWCsBBWTmBxS8bFzircA5Ng4kc8OleF5ufU3DML4JL1n6ghQgDdbkuflZvp8v7I0HHU81ftatvSNHA%2BsJtVWRdp2lW8FkXpYrMy6DHZMAhX6e59fsN3z5A3FaqLQYsksbM3q7kXCPjHyZG2GVa84Hh2ypjyF2YzmqnfG7EohMYEEC1p2KM2KLFoYKXKwzc%2BqZ%2BD%2FNSe7UM9UlFvM29PitEXh6WW1xu0gegNCT0%2FXL3XjHAjI4WqNxTShEDntAs8ZSbqbFCdpHFDCyogZIYSvY3Ov%2B9wJD6EGHckeQBmJo3HDtUyiNUzvZXHcF5Nu4G2toAUC6Z%2FBohipu8dIK%2FopZg0zDC3o7W6IvcXFH7XiNNxsBmxcKKuS0pKHItapwwbYlYCgxvLIeImngFQkV%2B1Qs5ltEP1zUshi9NHsKFPeGvZkRN3I9TYgiq8qnvvSnPTyE0%2FbJ1a8rFxwc1WeEzHrBD%2BnQuyuHC7w1kljZraeqsbRT7QVsuasMofdCaMDqybevtT%2F4TcyPoWkZXKXnHxwj%2FdXCGmrdMPwjFwmFG4ahCZHDYaRdWIUqhMp5gNm3vjNN%2BOifNwJ41m053VWpAoUI4ijhk5MvIF9WXmtdGDDJYdJqiygTV8gua7pCYpDTM6BVePYfz8BVRhx5NgMNrVv8kGOqUBw89MtBuEoxwPJEm%2F46pHPp4LCIv6NCPXddNI70VHSSW%2BwTWV48dwVFOmZd9L9rQq9TUXaxY%2BcHHgv%2FBnFTiMsKmjvkjf7r1vO6BLt9ugi8uAfgL6bpSfdn45icp%2BS0I4rpEFxC5cF3F5G2UgWey0YLs9tj0dKV3nsydGl7TY%2Bc8G4GlIEtOd3zJ1ik0oRzVOZL%2Bz7kRQfMXKJ3RoZ9VqonmmPR2C&X-Amz-Signature=6ed9fa8314ba22584d20563fd33790abcbf8a0ad36e887ae9fcd52b4eb371ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZNCUGB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICntOWI2x7%2F%2BYkO0%2Fx5GxFERw5GUPPmUS2Rq4rARxTb3AiEAwxoZSUAA1hmtzU8qoafMc8WH9wjoXj6JZY9T56xB9U4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBWCsBBWTmBxS8bFzircA5Ng4kc8OleF5ufU3DML4JL1n6ghQgDdbkuflZvp8v7I0HHU81ftatvSNHA%2BsJtVWRdp2lW8FkXpYrMy6DHZMAhX6e59fsN3z5A3FaqLQYsksbM3q7kXCPjHyZG2GVa84Hh2ypjyF2YzmqnfG7EohMYEEC1p2KM2KLFoYKXKwzc%2BqZ%2BD%2FNSe7UM9UlFvM29PitEXh6WW1xu0gegNCT0%2FXL3XjHAjI4WqNxTShEDntAs8ZSbqbFCdpHFDCyogZIYSvY3Ov%2B9wJD6EGHckeQBmJo3HDtUyiNUzvZXHcF5Nu4G2toAUC6Z%2FBohipu8dIK%2FopZg0zDC3o7W6IvcXFH7XiNNxsBmxcKKuS0pKHItapwwbYlYCgxvLIeImngFQkV%2B1Qs5ltEP1zUshi9NHsKFPeGvZkRN3I9TYgiq8qnvvSnPTyE0%2FbJ1a8rFxwc1WeEzHrBD%2BnQuyuHC7w1kljZraeqsbRT7QVsuasMofdCaMDqybevtT%2F4TcyPoWkZXKXnHxwj%2FdXCGmrdMPwjFwmFG4ahCZHDYaRdWIUqhMp5gNm3vjNN%2BOifNwJ41m053VWpAoUI4ijhk5MvIF9WXmtdGDDJYdJqiygTV8gua7pCYpDTM6BVePYfz8BVRhx5NgMNrVv8kGOqUBw89MtBuEoxwPJEm%2F46pHPp4LCIv6NCPXddNI70VHSSW%2BwTWV48dwVFOmZd9L9rQq9TUXaxY%2BcHHgv%2FBnFTiMsKmjvkjf7r1vO6BLt9ugi8uAfgL6bpSfdn45icp%2BS0I4rpEFxC5cF3F5G2UgWey0YLs9tj0dKV3nsydGl7TY%2Bc8G4GlIEtOd3zJ1ik0oRzVOZL%2Bz7kRQfMXKJ3RoZ9VqonmmPR2C&X-Amz-Signature=f7490cef27bdeb954c353da17229814ab34ca3e03b849c80b910e74fafc8955c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

