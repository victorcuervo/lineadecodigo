---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUHGISC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7FBJJTI3e4%2Bb3ai%2BayTrc%2FTYDXBYZGblASbHkWO%2FAjgIgO5EGtIWPlNzN%2B0PJZArAcFF0c09I8YsHvGzH5HtuuYcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN6dcl7XPa5uijQgUircA14AjjItrbZVhDwJ%2Bjd2B3qY%2FZx0UhecK4O38ieVP04YSS2ZiIE9Vu7k0l9SOtP9Y9IUlYPNVM9tSufnukqiKVsnKKoRMpsPRHMp4PLRvSwaNIVPN0WFQA2G3UX4p30EKKEg6nm0r6mHerJcqhViBnBFUhj4SPUv%2FgawTeyOYx2jylhy6LGUlU4ojvHHU84xC5nnji7jNUVKpPVsDi1eDOb2j%2BR7hUHZXaeXhaY1zuNLw0Jz7Aoh0tK40cy%2BFwwjbbsAcwSGOs7s5w93SZYM6%2FO0a9YK1P2jMwEp8Ys2EkfMo8Y%2Fuwpc5mPMt2w7x4iBlJrwWukbPnYCV2w5S66s7DOlWdJGofPiUsSigRfX%2F8ZfOxDsslv%2FlBIwCbLUlZ0BsrL222s0n9Yh8ACJCDqz4Dpfl%2B%2F2kEUiTtH1Z2da1uPVZ7gJw6iV5VnGUoGcy3UKAIagdh1VESjCkQo0dN801L%2FXCgILbnszOCFFrSxpP91HIGpD0c%2BFnSPcUaUQLE3VfB54Df3NVwJjuS2sxYOrxJynKutmt31ErQ%2F5LRrqXTlT2Hx5mxj%2FVdd9tKNGQm03J7sKMgsM3WL4J%2Fh6GnjJXFT%2BVR16%2F%2BxDzSQhZHYIVgKLj8DsCjb812oSxVOhMKLRyskGOqUBhgvMPZ6CYpevncqOhAG%2BuFgUATFwZF%2FqnYX6cKpveLttsTejGLsmypSBFd3t0NsEE9m7TdHaGHWwR7su9CtdSf4IigdvW8DhMyMA35eqdknAd5CImQuCWYguJVMihIj6CpIFoKeUQEa%2FZjEwqfX%2FLYdB%2B1DwQW6ktoEyX29tE%2FoaFJD8QiIPPMRuoRVJd8BUGr7SsDByEhLwqZGNp3wdy7%2FmjGvD&X-Amz-Signature=1b56de117849dd9c645da1d176f8a9a0ae1cd94ba25e57db8ed7812ad84343d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUHGISC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7FBJJTI3e4%2Bb3ai%2BayTrc%2FTYDXBYZGblASbHkWO%2FAjgIgO5EGtIWPlNzN%2B0PJZArAcFF0c09I8YsHvGzH5HtuuYcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN6dcl7XPa5uijQgUircA14AjjItrbZVhDwJ%2Bjd2B3qY%2FZx0UhecK4O38ieVP04YSS2ZiIE9Vu7k0l9SOtP9Y9IUlYPNVM9tSufnukqiKVsnKKoRMpsPRHMp4PLRvSwaNIVPN0WFQA2G3UX4p30EKKEg6nm0r6mHerJcqhViBnBFUhj4SPUv%2FgawTeyOYx2jylhy6LGUlU4ojvHHU84xC5nnji7jNUVKpPVsDi1eDOb2j%2BR7hUHZXaeXhaY1zuNLw0Jz7Aoh0tK40cy%2BFwwjbbsAcwSGOs7s5w93SZYM6%2FO0a9YK1P2jMwEp8Ys2EkfMo8Y%2Fuwpc5mPMt2w7x4iBlJrwWukbPnYCV2w5S66s7DOlWdJGofPiUsSigRfX%2F8ZfOxDsslv%2FlBIwCbLUlZ0BsrL222s0n9Yh8ACJCDqz4Dpfl%2B%2F2kEUiTtH1Z2da1uPVZ7gJw6iV5VnGUoGcy3UKAIagdh1VESjCkQo0dN801L%2FXCgILbnszOCFFrSxpP91HIGpD0c%2BFnSPcUaUQLE3VfB54Df3NVwJjuS2sxYOrxJynKutmt31ErQ%2F5LRrqXTlT2Hx5mxj%2FVdd9tKNGQm03J7sKMgsM3WL4J%2Fh6GnjJXFT%2BVR16%2F%2BxDzSQhZHYIVgKLj8DsCjb812oSxVOhMKLRyskGOqUBhgvMPZ6CYpevncqOhAG%2BuFgUATFwZF%2FqnYX6cKpveLttsTejGLsmypSBFd3t0NsEE9m7TdHaGHWwR7su9CtdSf4IigdvW8DhMyMA35eqdknAd5CImQuCWYguJVMihIj6CpIFoKeUQEa%2FZjEwqfX%2FLYdB%2B1DwQW6ktoEyX29tE%2FoaFJD8QiIPPMRuoRVJd8BUGr7SsDByEhLwqZGNp3wdy7%2FmjGvD&X-Amz-Signature=b793e1c3717c5ee019a4cd1b9c5c60b2c115bd26cbf612f77dbe00c258f6b9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

