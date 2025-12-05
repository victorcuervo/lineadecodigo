---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJW6RWAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpEUQoPLHhuTtHbJNGr6Y7ye6F6EkyMY6gH07mRqzfXgIgZARvGka1ULYdLGuvZgBU7pCAP2tamGRBokz9LaLjpRwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHmb%2BEc3e6tPFlQGtircA%2FYDuoX%2BkhVw1%2FX%2B%2F%2Bi83oPX%2FP0PUd33MhSMBlXio3Vf2NpZPGSZ9T1xqU7d7xORDL2K6LzPnTXKE6zrZY0HjE8POe%2BkKHBM0%2FAvG%2F29a5QzOeKH3DnEHf6o2IhEEgeU8GgJYpcz%2BAAAGuvSVs6TlZTcnl2RgUezMEAAIuazFJ2bDPyzlt4tq1totln9mww1B3m8tXlj%2BWi1ViCeFdauMoYKYxp3m0acXB3iOAvTMjHQzTaV0JRTEWRWhepQ4t3VdBYjXyCPi%2BmrW5dKk7%2F8kunE1FSNvGveJ7ASv4YQDmFc44lyp3Xey9NeXzcOV3NyezddktWVFS1RU0L7dJjVYicMjI0b3NHjbRoicDSLKXGy7ECXIn%2FpQ5eG7%2FIfTiC5VVABVLbtyxIBPPcMQwB%2F%2BOySo5dq2rkhv9xJpz9hSCfBuak5d8mKXzEHLi0k%2BTsWxL5uL1496MSjeT3doLFPR31yT2g38YjSJ1OfoIkN1OK1uXpc8M28sAWGKt5PsxWKNgi%2BI26ccw5ZkrZBS%2BBXtwCMl1g0nP8x0QymI5Wu78cHGwdKeJoWEJZuyjd5eVtTe%2BM8IfY%2Bf7i3vtKoDgn0OpsIBy2Elz5Xx6S3YXRej%2BcsKdwtzxbz0l9663XyMOXqy8kGOqUBjnjjgtUU7l4AVeIczYHZB4ja4QlHqpxl6wI1Rvk3vFvDjt1tNKdSnXZPjXU4LiI5IxRXS1BgYNVWvQqQcYRd%2BxiUDK4eech%2FRJlLZN%2BNzg7y%2FHsBiP%2FWOg1w6xuy4rUjHrsMLjBnZsk5R%2FVcmwk96AJWnwzA4G9LoWzRUZSnRTzoSf3doPoVfU9HE7VbJHqbUXag22h%2FNGOfcX1kKe4QYQsGLyD%2F&X-Amz-Signature=408e490b414cfd4ad5efd84b9f8e6a261b05cd941396eaf09a8bd7fd7345485e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJW6RWAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpEUQoPLHhuTtHbJNGr6Y7ye6F6EkyMY6gH07mRqzfXgIgZARvGka1ULYdLGuvZgBU7pCAP2tamGRBokz9LaLjpRwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDHmb%2BEc3e6tPFlQGtircA%2FYDuoX%2BkhVw1%2FX%2B%2F%2Bi83oPX%2FP0PUd33MhSMBlXio3Vf2NpZPGSZ9T1xqU7d7xORDL2K6LzPnTXKE6zrZY0HjE8POe%2BkKHBM0%2FAvG%2F29a5QzOeKH3DnEHf6o2IhEEgeU8GgJYpcz%2BAAAGuvSVs6TlZTcnl2RgUezMEAAIuazFJ2bDPyzlt4tq1totln9mww1B3m8tXlj%2BWi1ViCeFdauMoYKYxp3m0acXB3iOAvTMjHQzTaV0JRTEWRWhepQ4t3VdBYjXyCPi%2BmrW5dKk7%2F8kunE1FSNvGveJ7ASv4YQDmFc44lyp3Xey9NeXzcOV3NyezddktWVFS1RU0L7dJjVYicMjI0b3NHjbRoicDSLKXGy7ECXIn%2FpQ5eG7%2FIfTiC5VVABVLbtyxIBPPcMQwB%2F%2BOySo5dq2rkhv9xJpz9hSCfBuak5d8mKXzEHLi0k%2BTsWxL5uL1496MSjeT3doLFPR31yT2g38YjSJ1OfoIkN1OK1uXpc8M28sAWGKt5PsxWKNgi%2BI26ccw5ZkrZBS%2BBXtwCMl1g0nP8x0QymI5Wu78cHGwdKeJoWEJZuyjd5eVtTe%2BM8IfY%2Bf7i3vtKoDgn0OpsIBy2Elz5Xx6S3YXRej%2BcsKdwtzxbz0l9663XyMOXqy8kGOqUBjnjjgtUU7l4AVeIczYHZB4ja4QlHqpxl6wI1Rvk3vFvDjt1tNKdSnXZPjXU4LiI5IxRXS1BgYNVWvQqQcYRd%2BxiUDK4eech%2FRJlLZN%2BNzg7y%2FHsBiP%2FWOg1w6xuy4rUjHrsMLjBnZsk5R%2FVcmwk96AJWnwzA4G9LoWzRUZSnRTzoSf3doPoVfU9HE7VbJHqbUXag22h%2FNGOfcX1kKe4QYQsGLyD%2F&X-Amz-Signature=c3238c6aa39116e00ae81277a64e55c9d4109088dac793b8f13eb75aa67027b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

