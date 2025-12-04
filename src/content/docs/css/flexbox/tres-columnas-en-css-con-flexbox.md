---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22E7DM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIF5URbRj%2F%2FJ3QKytq9QI38El1cB%2FMwFVIJwFvBlJJK1SAiEA29tj%2BvXOlR6VM1pEBSE5RTWvaLWvUviSDKk2sivf7wIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNcdgM3bee7J0TrZOyrcA1ioZFG4ApgGY7i9dHIPclJPcil47H1hI4QW9Qj12bfZQjoyNNCGVE2jI0RniyvpslNpR5ROVeSP1hpqmPMaN4pi3rklWcDWcDHudZb%2BB8X%2Fysb%2FVpBjZVD7l0GCzT025Tg1CyaGUnbVW89QZ%2BVydkqxEEqz2sVbFguE78PSwwj4rZNiWRifcv22BmoOlwQx4EYk7fP77kd6wSHfKraZOWG%2FnMja8dz45fq39xylE42KLjPGu8hfLs503kZD4LEJSFPw51sOT7Z4FJT1feCGVTJtCUmev5Oexgm3yK0HZF0R8Bi1AVXPud4QJsD0kkkabDjj3502bhz0XBn%2BMtcfpeLgOfV%2FUYStkKULY%2BqVucmr3UAElMMmnVg1G0z2EACp6FDtdFTvX9K%2Bn8KqC3k%2FDGIm6kJ3kvGXs89s4tblAAWvn%2BzmEsmpKNNJhIhjKTblx%2BgMWzGFgWUmPur9pVU9YrWHSzUCPl8cN%2Bq%2B3ZG1BB8rzHtVwEh%2FgRypbbQiKw0lnDiDFKtB9LrVjnTVfVg%2BvVB8odZpTCU0kQV5pkc9%2F8M1U9%2BxevNfEK4I4xZUnBNwgGXkexLmkrtfOkNNQV%2BX5Glwczwq0tKiouxFaiycHxn2vwA4XH37bY%2FcdB4ZMMuDxskGOqUBawGzXzBK0aIWNH%2BWRS8062LU7LV4tByZjhuPNetIxpB%2Bhm5PohLvfFXxJQJaJWDAjUsdvjGsMci6lFQkmvQDGED9X%2BVUnx5gd806jHr5M0Lqt0kQ6RVnhwAllSehx5hjpyySYZ1TNx9PVOOQuf%2Fldf6cUfZaPl3pwZl%2BREkEk40w4bEPaam2O10TATE8czX6j5yeXaTjRQN4CvOscBBs9HFMl7Ap&X-Amz-Signature=2daac19fdfb222001ed07ef14b44018dd46fc6868b4d1b097547dc7ecf2a5e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ22E7DM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIF5URbRj%2F%2FJ3QKytq9QI38El1cB%2FMwFVIJwFvBlJJK1SAiEA29tj%2BvXOlR6VM1pEBSE5RTWvaLWvUviSDKk2sivf7wIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNcdgM3bee7J0TrZOyrcA1ioZFG4ApgGY7i9dHIPclJPcil47H1hI4QW9Qj12bfZQjoyNNCGVE2jI0RniyvpslNpR5ROVeSP1hpqmPMaN4pi3rklWcDWcDHudZb%2BB8X%2Fysb%2FVpBjZVD7l0GCzT025Tg1CyaGUnbVW89QZ%2BVydkqxEEqz2sVbFguE78PSwwj4rZNiWRifcv22BmoOlwQx4EYk7fP77kd6wSHfKraZOWG%2FnMja8dz45fq39xylE42KLjPGu8hfLs503kZD4LEJSFPw51sOT7Z4FJT1feCGVTJtCUmev5Oexgm3yK0HZF0R8Bi1AVXPud4QJsD0kkkabDjj3502bhz0XBn%2BMtcfpeLgOfV%2FUYStkKULY%2BqVucmr3UAElMMmnVg1G0z2EACp6FDtdFTvX9K%2Bn8KqC3k%2FDGIm6kJ3kvGXs89s4tblAAWvn%2BzmEsmpKNNJhIhjKTblx%2BgMWzGFgWUmPur9pVU9YrWHSzUCPl8cN%2Bq%2B3ZG1BB8rzHtVwEh%2FgRypbbQiKw0lnDiDFKtB9LrVjnTVfVg%2BvVB8odZpTCU0kQV5pkc9%2F8M1U9%2BxevNfEK4I4xZUnBNwgGXkexLmkrtfOkNNQV%2BX5Glwczwq0tKiouxFaiycHxn2vwA4XH37bY%2FcdB4ZMMuDxskGOqUBawGzXzBK0aIWNH%2BWRS8062LU7LV4tByZjhuPNetIxpB%2Bhm5PohLvfFXxJQJaJWDAjUsdvjGsMci6lFQkmvQDGED9X%2BVUnx5gd806jHr5M0Lqt0kQ6RVnhwAllSehx5hjpyySYZ1TNx9PVOOQuf%2Fldf6cUfZaPl3pwZl%2BREkEk40w4bEPaam2O10TATE8czX6j5yeXaTjRQN4CvOscBBs9HFMl7Ap&X-Amz-Signature=da2d399a806840aa389786cb7493b23c47edb2eff8a7758f586af10131077c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

