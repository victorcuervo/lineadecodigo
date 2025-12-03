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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF5ON4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEL%2Fm2SKLFc6Ht2NOM2VE0%2FodJ3ycD71fCk4FW6flMbnAiAd%2FLlKGXTp%2F%2Bu3XfhM7F%2BT3RPiRC4m%2FaZozonNxRNnxir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMFrfUjUNdwgwXUmCMKtwDygZ8rYm3wbjR24GtdwP%2BrRzlo9A2KuFZJhypyRt4hjH7%2FgiCGUwRjqot68RbKhjZJ8nFoNKh2Y6FjOQzz2rq7jTp2Ap4KhZ%2FUT9HYdLwoKZu5Bc13OsZLyaOm8ZogOAGGsNyGQt5XqMadLSCoIz0IIj%2F3%2B6W%2BzZGnRsXVA2hpHyXdTYhSs8WznQHN%2Fd%2FnhRomHs6VXXKM3jRx0l3svkXpMqCX3lAaxeNaqa1e9Spgayx4jXyZ2zmHQarUcKN3y2VTNKTOxq1wpR7kNAquD7%2BceZTmjd2MObsKlrQ1AUMfYE227LJ9tkBIXg4gwKsUItMPpJm1tO4oGbnNKRdFl4A7CXD%2B29gix%2Fizy3UaCeAvktybOeMx5p%2BpWmwoj0BHV7SgQwj86UEFzat49Am0g8JwoZ2JJWkfiujCDpffq%2FM3WY5VtPtH28ImHn3VIEPHe64HHN2VpxtIaH2xXRjKbuRu3g1I4zOkRCAiLEvifYItYzq1iF%2B469GrgxO7zBuBXiB9025d3gfq3I7qMDA9JXy2u5n35xvOeXo7c2LiGPudYvafMd%2FZvS0IuN2yzDoG2YYvN%2B2kiqU4DY8ZUIhnOoRx%2BnEEj2%2FNBqdwEilnwiasFb6RdL6v3aI%2FfNca34wjda%2FyQY6pgHfMwX6EgXZRCvTB2fqe0wrvd3pZHFccYb5FmMZpqN5bVeOeFSr9aetCBAoF%2FEGC0bg7YzSRNSTi82b9gAoTnWwFB0Yb21ObSVuKnBMsuWX4fms02XPRi317ous593ikbkTPzaW2%2BhqOeBKaw4knD2gCWXZf8B6TgDH5Z4AFH7JBN92rowRjo3PXOPQu2%2FZtKXmn2wf7Bi1haF9NOlaqvkOxNkcZQHd&X-Amz-Signature=be1fc18f20378518a44805f3259f797eec678de0c59fae92da7454e3cf01df2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF5ON4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEL%2Fm2SKLFc6Ht2NOM2VE0%2FodJ3ycD71fCk4FW6flMbnAiAd%2FLlKGXTp%2F%2Bu3XfhM7F%2BT3RPiRC4m%2FaZozonNxRNnxir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMFrfUjUNdwgwXUmCMKtwDygZ8rYm3wbjR24GtdwP%2BrRzlo9A2KuFZJhypyRt4hjH7%2FgiCGUwRjqot68RbKhjZJ8nFoNKh2Y6FjOQzz2rq7jTp2Ap4KhZ%2FUT9HYdLwoKZu5Bc13OsZLyaOm8ZogOAGGsNyGQt5XqMadLSCoIz0IIj%2F3%2B6W%2BzZGnRsXVA2hpHyXdTYhSs8WznQHN%2Fd%2FnhRomHs6VXXKM3jRx0l3svkXpMqCX3lAaxeNaqa1e9Spgayx4jXyZ2zmHQarUcKN3y2VTNKTOxq1wpR7kNAquD7%2BceZTmjd2MObsKlrQ1AUMfYE227LJ9tkBIXg4gwKsUItMPpJm1tO4oGbnNKRdFl4A7CXD%2B29gix%2Fizy3UaCeAvktybOeMx5p%2BpWmwoj0BHV7SgQwj86UEFzat49Am0g8JwoZ2JJWkfiujCDpffq%2FM3WY5VtPtH28ImHn3VIEPHe64HHN2VpxtIaH2xXRjKbuRu3g1I4zOkRCAiLEvifYItYzq1iF%2B469GrgxO7zBuBXiB9025d3gfq3I7qMDA9JXy2u5n35xvOeXo7c2LiGPudYvafMd%2FZvS0IuN2yzDoG2YYvN%2B2kiqU4DY8ZUIhnOoRx%2BnEEj2%2FNBqdwEilnwiasFb6RdL6v3aI%2FfNca34wjda%2FyQY6pgHfMwX6EgXZRCvTB2fqe0wrvd3pZHFccYb5FmMZpqN5bVeOeFSr9aetCBAoF%2FEGC0bg7YzSRNSTi82b9gAoTnWwFB0Yb21ObSVuKnBMsuWX4fms02XPRi317ous593ikbkTPzaW2%2BhqOeBKaw4knD2gCWXZf8B6TgDH5Z4AFH7JBN92rowRjo3PXOPQu2%2FZtKXmn2wf7Bi1haF9NOlaqvkOxNkcZQHd&X-Amz-Signature=4f7b5af9502b9cf17c22d15bbb6f7c8d22eb997712754c5f38866613be17e411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

