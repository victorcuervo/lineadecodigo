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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLJBVWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCMSFWwk8J5CR5Xq7wQpX9oT4y2zssqhGPelhra6INL9wIhALz6VFg2FkMII8GuNnbhgtG%2Fy0voXehyLyrAEXbhlCDbKv8DCCwQABoMNjM3NDIzMTgzODA1IgwNsAXH3pGU6PKLPx0q3APcaBUjH3vux2TK31PaenjuddIBspZ1TghdvB9DzYkInWIP%2FpLiJ4GGyT5%2FBEyYY%2F6VOw5487iM%2FzQnbxOnwNkHOO2g1EzYpzBMd228CgUSe5BNUTTa3Jr0J1l7dD2kc%2Fnod5uBKgcr4RLBsLJ6BV3oZwkMuAADfD%2FUXdHpJGPnWzpnNesfVNxzFASrWUYSU0yudK8IuV6zaewHEFwjtSceUsC9vbGdvkw6Z0w1QNKwjKWK9wLkgB%2FEeHJdF5hXwYs6L3qeg96TpWyzcC3%2B6qWQhwI2Ny8ArsgQ8pa4g4X862VU2QgzWR9iIWpIFvjm3CGLcr0H1%2B72zT5JAwxC79SwoDHTE7T6qoUI4iLMSpaG%2B1izKpdw1RMqDtV6JZCNWhTd21AjEioS71wAQS919GhY5PTEOBPSBUkzn9QPIUo2sXZAWw4PgWhLrLXBfoSYpbE%2BU6uUo2hOj8RLqR0uN92htfPARO1%2Fp7iBFgJ95pRI8Kyh%2FRQyXu58aDlc3Hl6KZQo5h3l8XEe5NP4Y3k6YgPu11iIhtiICPGXyap1G%2BrTs7tD6RMzHUmcLvBH6j6hJonw7Z%2BdOHCVVPbfQUG0ImfSPVx1eg%2Fv%2Fo%2Bs3zWbuP%2FYle%2Bd4zOzkGwi2QRJzjC8rsDJBjqkAQEZPmiJ%2FOgW6%2FifxgE%2BMhbOqds%2FBvrvLyGe0Zw9G1nOcDLWqaStPj1mLDlw7uZWemQFUHr4L8ukkid28nnE9K%2BCymwFQIlDAbnTNbpkJsG4VaBMzuRUfWP0Pt%2BX1xQt3NUlBdcOioExhDv5vwawMKTGuFvxaHcwd%2FK1pA92Kg1UYhGIWSXoEHNotMxnydHy3amizhiRH2sEhuCCs7ktJbsKSXZN&X-Amz-Signature=8e43f72aea2d47a0920efe0274f48a99be731bea61da94292fc2b2217a4ee6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLJBVWD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCMSFWwk8J5CR5Xq7wQpX9oT4y2zssqhGPelhra6INL9wIhALz6VFg2FkMII8GuNnbhgtG%2Fy0voXehyLyrAEXbhlCDbKv8DCCwQABoMNjM3NDIzMTgzODA1IgwNsAXH3pGU6PKLPx0q3APcaBUjH3vux2TK31PaenjuddIBspZ1TghdvB9DzYkInWIP%2FpLiJ4GGyT5%2FBEyYY%2F6VOw5487iM%2FzQnbxOnwNkHOO2g1EzYpzBMd228CgUSe5BNUTTa3Jr0J1l7dD2kc%2Fnod5uBKgcr4RLBsLJ6BV3oZwkMuAADfD%2FUXdHpJGPnWzpnNesfVNxzFASrWUYSU0yudK8IuV6zaewHEFwjtSceUsC9vbGdvkw6Z0w1QNKwjKWK9wLkgB%2FEeHJdF5hXwYs6L3qeg96TpWyzcC3%2B6qWQhwI2Ny8ArsgQ8pa4g4X862VU2QgzWR9iIWpIFvjm3CGLcr0H1%2B72zT5JAwxC79SwoDHTE7T6qoUI4iLMSpaG%2B1izKpdw1RMqDtV6JZCNWhTd21AjEioS71wAQS919GhY5PTEOBPSBUkzn9QPIUo2sXZAWw4PgWhLrLXBfoSYpbE%2BU6uUo2hOj8RLqR0uN92htfPARO1%2Fp7iBFgJ95pRI8Kyh%2FRQyXu58aDlc3Hl6KZQo5h3l8XEe5NP4Y3k6YgPu11iIhtiICPGXyap1G%2BrTs7tD6RMzHUmcLvBH6j6hJonw7Z%2BdOHCVVPbfQUG0ImfSPVx1eg%2Fv%2Fo%2Bs3zWbuP%2FYle%2Bd4zOzkGwi2QRJzjC8rsDJBjqkAQEZPmiJ%2FOgW6%2FifxgE%2BMhbOqds%2FBvrvLyGe0Zw9G1nOcDLWqaStPj1mLDlw7uZWemQFUHr4L8ukkid28nnE9K%2BCymwFQIlDAbnTNbpkJsG4VaBMzuRUfWP0Pt%2BX1xQt3NUlBdcOioExhDv5vwawMKTGuFvxaHcwd%2FK1pA92Kg1UYhGIWSXoEHNotMxnydHy3amizhiRH2sEhuCCs7ktJbsKSXZN&X-Amz-Signature=1f502bfb1dff07013695aff1fe2b74ac8b04545af17fc880457b42598d86d67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

