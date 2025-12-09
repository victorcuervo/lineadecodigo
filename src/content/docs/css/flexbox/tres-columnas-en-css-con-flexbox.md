---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBJJ73U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3ecGlrj%2B8xv8IwhEyg2kBCFGipgz34wmfIrPC0%2BU4AIgJvBIfX66CRz2xJyJvsT%2FLsd6KM%2FDUZHzesk%2Bj1YIJ0EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO82k0RUYrfRp%2BuQSrcAwil6%2FvVG23STPSxqGhQ8%2BqEzzxQw2Otf9Yv5FiaGEVVOwBbqo%2Bp71h%2FVegMPEGaQbf4Y8p1zRf3NIAa%2FfsU0QK4D4ImLjPSwjHjerDIc9zWZdtOnP%2BZOxkb%2BWZw%2BnU2N4obwQEEXgNsK6oOkhuwtj50175EPNsArH67Do3UhnIKSakyTJ9LZ8YCFmzmHcynwJWQqJ3Rg3uQI0oX%2FRu3lzckCYkphUKz2ZPe9afKXSWcSuS0zVNXmD7mLQyaItmanCjRbJ33CwgAwL4MMLzcoeZnyn%2B%2BmkHclk9FytQ0xEuGMJ6%2FtxyZVr1WOyMYT12jwBecSS6kOUYibyN5chltngAyk6eDfhDfC9iOf%2BX3U81%2FwJU2%2B3bPgRBzzZ25Fwkn7%2FgcXfVOoG90EOI6xq2z6ta22s%2FwatW21VcqDqxc7LhZvc3HrEwitKxq09vFBKOTyPXV%2BZGXVYsJAIi7vQNBWb5%2FjSfj7ljh8pIEghZbxo7fETRS2klx2JUjIiXrrtx0D%2BW7ouRqvnb58Y3psW2U9BOsS9ex58teFB20y4OkEpUbex9L9PcrAwqnL74W2WxN0Loi6gEk3bHmquIEdR0U7N8kNSOhZBRhj9kR98qeqJXx5LYulQm7S4%2BFDSTkML%2Fl3skGOqUBcdduKi1FEimWKV6CNRpuQaqcKLjxUdR%2FJcoa3Ak5MZri2JKOOkapeLwagTgnb3Xe%2F1dUqFx7edtK%2BXE9Y2Wnz2vdfgHRG6xftsFpJDe5VOT2KYRHiMnLbYn%2FTq4N9nobdvo1qao9cobKcIGE5SRzOUHj3YXqpAYK9DlXH09jKVH3mkpkgJu0m6Ar%2F0lEFzFauupEr7tqaYDJoLt1FTLWSYrMuLWm&X-Amz-Signature=1ef571a2c631f32a9fd186a3977d13dd2d4bcded561256364fa2416fa9612553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBJJ73U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3ecGlrj%2B8xv8IwhEyg2kBCFGipgz34wmfIrPC0%2BU4AIgJvBIfX66CRz2xJyJvsT%2FLsd6KM%2FDUZHzesk%2Bj1YIJ0EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJO82k0RUYrfRp%2BuQSrcAwil6%2FvVG23STPSxqGhQ8%2BqEzzxQw2Otf9Yv5FiaGEVVOwBbqo%2Bp71h%2FVegMPEGaQbf4Y8p1zRf3NIAa%2FfsU0QK4D4ImLjPSwjHjerDIc9zWZdtOnP%2BZOxkb%2BWZw%2BnU2N4obwQEEXgNsK6oOkhuwtj50175EPNsArH67Do3UhnIKSakyTJ9LZ8YCFmzmHcynwJWQqJ3Rg3uQI0oX%2FRu3lzckCYkphUKz2ZPe9afKXSWcSuS0zVNXmD7mLQyaItmanCjRbJ33CwgAwL4MMLzcoeZnyn%2B%2BmkHclk9FytQ0xEuGMJ6%2FtxyZVr1WOyMYT12jwBecSS6kOUYibyN5chltngAyk6eDfhDfC9iOf%2BX3U81%2FwJU2%2B3bPgRBzzZ25Fwkn7%2FgcXfVOoG90EOI6xq2z6ta22s%2FwatW21VcqDqxc7LhZvc3HrEwitKxq09vFBKOTyPXV%2BZGXVYsJAIi7vQNBWb5%2FjSfj7ljh8pIEghZbxo7fETRS2klx2JUjIiXrrtx0D%2BW7ouRqvnb58Y3psW2U9BOsS9ex58teFB20y4OkEpUbex9L9PcrAwqnL74W2WxN0Loi6gEk3bHmquIEdR0U7N8kNSOhZBRhj9kR98qeqJXx5LYulQm7S4%2BFDSTkML%2Fl3skGOqUBcdduKi1FEimWKV6CNRpuQaqcKLjxUdR%2FJcoa3Ak5MZri2JKOOkapeLwagTgnb3Xe%2F1dUqFx7edtK%2BXE9Y2Wnz2vdfgHRG6xftsFpJDe5VOT2KYRHiMnLbYn%2FTq4N9nobdvo1qao9cobKcIGE5SRzOUHj3YXqpAYK9DlXH09jKVH3mkpkgJu0m6Ar%2F0lEFzFauupEr7tqaYDJoLt1FTLWSYrMuLWm&X-Amz-Signature=de95cb0423eb18fad1ea6cc0d6a94d113e41adcbe24204938d938c4e7021b0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

