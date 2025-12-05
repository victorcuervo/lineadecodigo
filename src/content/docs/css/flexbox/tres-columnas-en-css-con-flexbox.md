---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KFO5F2Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL4FBdLWiqzc%2FYsOl6%2BVCWvZeQEsxEKEFEEn7hgXMCHgIhAKd5wjRg9f%2Blz5Yw3phGxNqmhghqKB7gN7V4OXTnGALqKv8DCGEQABoMNjM3NDIzMTgzODA1IgxXXY3DjURPcafxwq0q3APEQGsaYu40%2FOMyOGMVQ3av94B9mBg%2Fv9yYqfsAkRzDD9gE0KlIc87TdMuRPBzyaEm8TTRC9eVj0734qOmlkwYc8iVbj5ROdC9DspvCUHMDHH0cr6W8sf%2FEKGC9u9pm33Ux1s0l1bgps8S3LYdy%2FLnKd%2FMzN8DFd6JJqM5Ua7HeqFwqv%2BOvbBo0w7VK%2FTJkHZEyfXpC%2BOAuLb2HQFFbuIhz2ojp2U9tVntV0%2FDE4Bz3KuKVNLj%2FVlzZYO%2F6dRy3RcCQeZKEiLVkrPIoiEqDKBzS6pAR6iHiLyCq%2BfJVT5nyZbtUL4HQKqD2A%2BroCiWmiDv85KJ2BjO1fI7BF%2BusA4ajihQH%2FUXuMyLzdW85mqDn3VuIXExQStmvwQIlTRsCkq8N68OGpz0hSat%2FtZZG%2FvnZQ71eDCH4CA9633nZ%2BcBmXO6kaRL39ggBrI4qCFRJc1Xm9gPUkVcKx3DwixPGTtnj3irfG8f%2BiKycZLCpss1%2FdCk7LK5UJsxljJ9qpaNtm%2B1Xits3Ke2rhsfRqYXJ%2Ba8SMbceQkPjThIaKfJz8pjxBTRReTltOHC0%2BjYNMbp8Is%2B5F4aeLEfLZR26GPyNYpRN0xtw8sH%2F9dg4lSuYamWGo7vfh9Iw6Pp1c6Y90zDx%2FcvJBjqkAYPevCteC7PWQgCsyqwiNcaUoBchp0f2UEg92H9bn4gTSEvppPLvIKLn3cZ5lW4MNkmx1aOXGxp%2FdRT27SYedXwHnuKyWIs%2BfKOWWC28XLgueIOa280Xx9ANpDs2lon5gEl97x%2BdYWkIQNrwcfpBD2DDzRU2kmZRCwQb3kBsfPkLw6IVbQZ7iVzyr6mq982FLrXMjmci3hZdXYjXr6BSLcUP8qOn&X-Amz-Signature=f28d3e8beddb540dcb65a8a8d5ec1c2ecc48a36e0111ae5467b485cfd2d0078a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KFO5F2Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL4FBdLWiqzc%2FYsOl6%2BVCWvZeQEsxEKEFEEn7hgXMCHgIhAKd5wjRg9f%2Blz5Yw3phGxNqmhghqKB7gN7V4OXTnGALqKv8DCGEQABoMNjM3NDIzMTgzODA1IgxXXY3DjURPcafxwq0q3APEQGsaYu40%2FOMyOGMVQ3av94B9mBg%2Fv9yYqfsAkRzDD9gE0KlIc87TdMuRPBzyaEm8TTRC9eVj0734qOmlkwYc8iVbj5ROdC9DspvCUHMDHH0cr6W8sf%2FEKGC9u9pm33Ux1s0l1bgps8S3LYdy%2FLnKd%2FMzN8DFd6JJqM5Ua7HeqFwqv%2BOvbBo0w7VK%2FTJkHZEyfXpC%2BOAuLb2HQFFbuIhz2ojp2U9tVntV0%2FDE4Bz3KuKVNLj%2FVlzZYO%2F6dRy3RcCQeZKEiLVkrPIoiEqDKBzS6pAR6iHiLyCq%2BfJVT5nyZbtUL4HQKqD2A%2BroCiWmiDv85KJ2BjO1fI7BF%2BusA4ajihQH%2FUXuMyLzdW85mqDn3VuIXExQStmvwQIlTRsCkq8N68OGpz0hSat%2FtZZG%2FvnZQ71eDCH4CA9633nZ%2BcBmXO6kaRL39ggBrI4qCFRJc1Xm9gPUkVcKx3DwixPGTtnj3irfG8f%2BiKycZLCpss1%2FdCk7LK5UJsxljJ9qpaNtm%2B1Xits3Ke2rhsfRqYXJ%2Ba8SMbceQkPjThIaKfJz8pjxBTRReTltOHC0%2BjYNMbp8Is%2B5F4aeLEfLZR26GPyNYpRN0xtw8sH%2F9dg4lSuYamWGo7vfh9Iw6Pp1c6Y90zDx%2FcvJBjqkAYPevCteC7PWQgCsyqwiNcaUoBchp0f2UEg92H9bn4gTSEvppPLvIKLn3cZ5lW4MNkmx1aOXGxp%2FdRT27SYedXwHnuKyWIs%2BfKOWWC28XLgueIOa280Xx9ANpDs2lon5gEl97x%2BdYWkIQNrwcfpBD2DDzRU2kmZRCwQb3kBsfPkLw6IVbQZ7iVzyr6mq982FLrXMjmci3hZdXYjXr6BSLcUP8qOn&X-Amz-Signature=429511ec873e0a17830f090eaf057c2325c22a57a543504825eb5fd9ecf62025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

