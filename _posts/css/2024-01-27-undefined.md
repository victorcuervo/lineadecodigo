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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USG2LE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYHUnEeURhCkHJ2pV9lwRlHBMsJBEZXtU8s6B9jNesYAIgMXKbSbmqJlawGxDLgM4E3ek6JHrxygDKpBwhIC%2BEZSUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHiYlykS7tAOyE4vxSrcA4ehpSFFqVmgyBltnJ3EjZ3LE7JsbwdSmzWBpm5nAjNd0EcJDQc9FuBH%2FMWf0qxunRoZEmjZSY1FOwGvVtAPbxkw9UDr1p18QA1vUYgx0fSf%2Fvy5h%2FSGlGuTlGs7XPD1QVZJrn0%2FtUZYjQIWNTUQRp9qtQhWdstl%2FOmDtTIZyq8i34zAZ1S6Tk78rzZMOWzBHdGNRb4bKM8czt9XhJc3U6pVr6xAExJpSIaws6wcWU6wFt%2FkszAvER%2FZpHzfXykGJNHG3ax20itmB4Nw2L0WqXPTg3kWIHFPGgkg0QrUA6sxBx8Ym27RZXGEhDJLaiIZvTelFfcTQqmkFLGHdI1HdJcY7kqkFF9oZ8eATQabloPTETS0SM5RRJDjIXaTswnjWkQEPq%2B19pdPjlSnY0FtlKadDj06BM1rquWOi%2BaCmUcCTi%2BZ2BOh50VFMbMbmO2nxCTy6WCobyUfis9%2Bp7%2FkJK%2F5gxprExmsLJsZQWwXYsalDQA2%2BzO7eYZ4B8Ykv5%2Bg2a%2FKHTB8iP4E5TJ9joSL%2FNG6Iem%2FqzYu9k7JeB0OjqnuqUoWyfm80CSm2L2jWVDWV3mNo5XXAii9%2BaDc%2FQ9%2BqUf%2B56EEFsuaLZTwUuzG5A3XCMDcTgj17r0HMlzeMKOHwckGOqUBlnsIByWwLVVmFle015nBLaijJmTPEQjdBwLGRnlfzVu6H5r%2FTcUM58sa9pBoO4ow77AmUm6mUR3%2B7I7Ef5hMM0vM5J1xAATGvBYx0wnqjy4urnHPyELUO1YsnBJ9l8bHR1bc%2F5AdBf0G9XjbmcHINBGqdn0WH7Ulcy0L4jwLQVQl9XvWHTcTPJcvrrSknVuJfWOE90lScln1DQn0knM9RMVUqDqO&X-Amz-Signature=bb2fef2ee11442993b741f58a02d5cfb515758001fd72b6f03dd424bf5c5f1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6USG2LE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDYHUnEeURhCkHJ2pV9lwRlHBMsJBEZXtU8s6B9jNesYAIgMXKbSbmqJlawGxDLgM4E3ek6JHrxygDKpBwhIC%2BEZSUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDHiYlykS7tAOyE4vxSrcA4ehpSFFqVmgyBltnJ3EjZ3LE7JsbwdSmzWBpm5nAjNd0EcJDQc9FuBH%2FMWf0qxunRoZEmjZSY1FOwGvVtAPbxkw9UDr1p18QA1vUYgx0fSf%2Fvy5h%2FSGlGuTlGs7XPD1QVZJrn0%2FtUZYjQIWNTUQRp9qtQhWdstl%2FOmDtTIZyq8i34zAZ1S6Tk78rzZMOWzBHdGNRb4bKM8czt9XhJc3U6pVr6xAExJpSIaws6wcWU6wFt%2FkszAvER%2FZpHzfXykGJNHG3ax20itmB4Nw2L0WqXPTg3kWIHFPGgkg0QrUA6sxBx8Ym27RZXGEhDJLaiIZvTelFfcTQqmkFLGHdI1HdJcY7kqkFF9oZ8eATQabloPTETS0SM5RRJDjIXaTswnjWkQEPq%2B19pdPjlSnY0FtlKadDj06BM1rquWOi%2BaCmUcCTi%2BZ2BOh50VFMbMbmO2nxCTy6WCobyUfis9%2Bp7%2FkJK%2F5gxprExmsLJsZQWwXYsalDQA2%2BzO7eYZ4B8Ykv5%2Bg2a%2FKHTB8iP4E5TJ9joSL%2FNG6Iem%2FqzYu9k7JeB0OjqnuqUoWyfm80CSm2L2jWVDWV3mNo5XXAii9%2BaDc%2FQ9%2BqUf%2B56EEFsuaLZTwUuzG5A3XCMDcTgj17r0HMlzeMKOHwckGOqUBlnsIByWwLVVmFle015nBLaijJmTPEQjdBwLGRnlfzVu6H5r%2FTcUM58sa9pBoO4ow77AmUm6mUR3%2B7I7Ef5hMM0vM5J1xAATGvBYx0wnqjy4urnHPyELUO1YsnBJ9l8bHR1bc%2F5AdBf0G9XjbmcHINBGqdn0WH7Ulcy0L4jwLQVQl9XvWHTcTPJcvrrSknVuJfWOE90lScln1DQn0knM9RMVUqDqO&X-Amz-Signature=8c6380f106e0c09b4a6b8fc55bebf1f9195e5311ea33dc9350fa4cbbc03e44bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

