---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HHWZ5SL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCID8eNU3h2MKMtjcg6a2bvPf%2BTV1LswGS6PJOVRMiUut0AiBdojgGB7SC5NUNa6%2FwQOdbk5GBVxMdOjpXgWLFo%2F6NOir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMaLD8YMcveuFOI2tLKtwDQjwyi5lO6wHEvNxbD6wvxQJcqCFWLqHlkSIXtVZLO8NvF8uzUOt%2FN9NeB2YG%2BJpxsII2BuKZBEkgc0uGYj3%2BhDj4w7h5OZ6ba1PZKfZG5UYcB5VXXC2jI%2Fs8KvY3%2BLqN5WuUCzMAqUWVanU8zOhkqNQxhQv7Hg1DGMuwPou4k7H6QZwBN9B%2FXZhU%2B2QQ0D469g%2BLQ30TrYveFzZOA48XfWLrnBxkRZ%2FQzWmpFBlfqAAa17e8IC8XOk2AIL%2BKqQSB0HqTWR3wndvCuDR5C%2BpEUNa4yMwqnSZAni%2Fq3fVGCP10aWoaAd5lepb7aP7q4sVutVwwDlcoObCMD3NGAgbZLOSPg%2B7R5xneFOj50nZ9RlYK2UgTFZEWZRr3gmLJcu0pDRtZK%2BCyr3%2FZ57tszUDDk4%2FWDlrER%2FXgiu8K1%2FMtTZNXEkFA3Q06YgGai3DI6QreIaUGY7A1TqQ11vx0ZOc%2BTeB0khzGgQc60xGqrQ2jk1kcv8WeQ1lM0Wcqt12iIq79YsTEHq1gGYeuAA58U%2FUvm7wGbb%2BGGDzzrGNcQpLwLzJtUF2pk3I7gLj1hj4z%2B6pdhkGGZZ2BsBGy2Q7Y20lDthSenLRo0m%2FpcXQq7QaOJMr4Jm58%2FXbV%2F7rzPskwiZLCyQY6pgGwoysInUX0k%2FsaC%2Bf6A8a1g%2Fhm0Vu%2BDm3lohYBjuIO01m5ytBzPtkxoIwH%2Bvjtq9afRdRLY%2BRVFtRUHB5vhH4GkLXQ4cOCuwx9r811S8TayGw9jbF%2B6c1qRcmuhyE%2BtQ9WTofDxTMR%2BmEJgycgS%2BYSBsdFqthxRfZ7666Su56%2BqOEHm68iOFeCQ3LVCasfoTcJbP1kJNuu7k5YxZoYPvQ15hGVOrhX&X-Amz-Signature=a8ea858a4ad4b3da437e24a770c3057fb6f2a6a1ac6067391d29e36deb5bea87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HHWZ5SL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCID8eNU3h2MKMtjcg6a2bvPf%2BTV1LswGS6PJOVRMiUut0AiBdojgGB7SC5NUNa6%2FwQOdbk5GBVxMdOjpXgWLFo%2F6NOir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMaLD8YMcveuFOI2tLKtwDQjwyi5lO6wHEvNxbD6wvxQJcqCFWLqHlkSIXtVZLO8NvF8uzUOt%2FN9NeB2YG%2BJpxsII2BuKZBEkgc0uGYj3%2BhDj4w7h5OZ6ba1PZKfZG5UYcB5VXXC2jI%2Fs8KvY3%2BLqN5WuUCzMAqUWVanU8zOhkqNQxhQv7Hg1DGMuwPou4k7H6QZwBN9B%2FXZhU%2B2QQ0D469g%2BLQ30TrYveFzZOA48XfWLrnBxkRZ%2FQzWmpFBlfqAAa17e8IC8XOk2AIL%2BKqQSB0HqTWR3wndvCuDR5C%2BpEUNa4yMwqnSZAni%2Fq3fVGCP10aWoaAd5lepb7aP7q4sVutVwwDlcoObCMD3NGAgbZLOSPg%2B7R5xneFOj50nZ9RlYK2UgTFZEWZRr3gmLJcu0pDRtZK%2BCyr3%2FZ57tszUDDk4%2FWDlrER%2FXgiu8K1%2FMtTZNXEkFA3Q06YgGai3DI6QreIaUGY7A1TqQ11vx0ZOc%2BTeB0khzGgQc60xGqrQ2jk1kcv8WeQ1lM0Wcqt12iIq79YsTEHq1gGYeuAA58U%2FUvm7wGbb%2BGGDzzrGNcQpLwLzJtUF2pk3I7gLj1hj4z%2B6pdhkGGZZ2BsBGy2Q7Y20lDthSenLRo0m%2FpcXQq7QaOJMr4Jm58%2FXbV%2F7rzPskwiZLCyQY6pgGwoysInUX0k%2FsaC%2Bf6A8a1g%2Fhm0Vu%2BDm3lohYBjuIO01m5ytBzPtkxoIwH%2Bvjtq9afRdRLY%2BRVFtRUHB5vhH4GkLXQ4cOCuwx9r811S8TayGw9jbF%2B6c1qRcmuhyE%2BtQ9WTofDxTMR%2BmEJgycgS%2BYSBsdFqthxRfZ7666Su56%2BqOEHm68iOFeCQ3LVCasfoTcJbP1kJNuu7k5YxZoYPvQ15hGVOrhX&X-Amz-Signature=a58c49c482f0c012a8eb208aa2cc1829f4630a40838313fe3a63113f7c12ee5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

