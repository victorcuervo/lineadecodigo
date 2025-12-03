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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5Y7OGS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID8TOZ5YLjKVQX4Ef3Y2ALHd%2BeesxbIRIxIqzTQyFf58AiEAzLfOoOj48eYhYvb2Amfhs9OMLaPnd7gQklsgn8gG%2FJwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK9En9dKGgL53A0GjSrcA6TYK5eV0Fx%2F3YdO%2FEyl43rz3AUoAoJj%2FSbdEGbnN%2Bxd9o8%2FtfF698tz37AFd9y5NZVRaxD%2BEs9DoE1va8KZOl555vme1KKyWrL0uYr8pIwlU2golCjHSBAo4DN1xzgk%2FVBM7JcrUwS4cTIx6ZpQtmdVl81aH1kY3KaVezyKh0vqQNf714FyomwZzIQRsCcNsW5Ee4VVSmRlleeqCcJImOCKIM3nM25Z0o4CwM5Z9N%2FjnTtgfL9EeE%2FV6flAzO7D9T5dLMMhYMPrNfyzAtNPXNLg9zQ6GYdFu8d%2Bzlvlsre0OxwFDbvFGhaejW3DBn9YS95rD0dEH7%2FNo2OOEJw3Ltey0eciUsiZiDGpZnqt4262yqqia3tb9ymed06wHw2ld9X3Cf4%2BBGGa0RGGYGuUsK2Vnxqd%2BGJcom%2FzDeCBRLq%2FLafkcLEMD5PKlw6F56nsf0u6sDtvxiQ%2F9XfbHho47h6J9Cl0%2BG7G%2Fdv4RAb%2FgrJyfSzzPU8xgNK0irZc%2BYs1aQnJU2IVX9fS%2FaseMkjjhRig06qap1agd9RGKIJeGAZ7BDdUb2JWz7ExAGbG1A09gzqfTeWBqTUD1yHEcz%2BvTLV%2FK%2BA%2BFo7xAqvT5zCmIJWN05SInGHCUTZGfcnSMJGXvskGOqUBCZKTw1vWgRkVuTytu9FroIau%2BEsfmgjrhILS7hEXM3y34tXXD07xVmTt664z3CHZTiqbloTRmsev2MoKApLfMcMAJSqQhTmlMFGZmafYU9wRrQiz8SEfksbayOSvFE1n5QiywHiS8Sd5o%2BmX%2FDg%2Flt1j8opDafYSSSvd4w5qxolF9cGW2F0hOpC%2BzyznQesv7qHTqkanvA8sGot3eNyfuj7PhOlT&X-Amz-Signature=3a07bd851de29347940b82cc16e7c00d6423e302dc5fcd8676577eded4918174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5Y7OGS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID8TOZ5YLjKVQX4Ef3Y2ALHd%2BeesxbIRIxIqzTQyFf58AiEAzLfOoOj48eYhYvb2Amfhs9OMLaPnd7gQklsgn8gG%2FJwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDK9En9dKGgL53A0GjSrcA6TYK5eV0Fx%2F3YdO%2FEyl43rz3AUoAoJj%2FSbdEGbnN%2Bxd9o8%2FtfF698tz37AFd9y5NZVRaxD%2BEs9DoE1va8KZOl555vme1KKyWrL0uYr8pIwlU2golCjHSBAo4DN1xzgk%2FVBM7JcrUwS4cTIx6ZpQtmdVl81aH1kY3KaVezyKh0vqQNf714FyomwZzIQRsCcNsW5Ee4VVSmRlleeqCcJImOCKIM3nM25Z0o4CwM5Z9N%2FjnTtgfL9EeE%2FV6flAzO7D9T5dLMMhYMPrNfyzAtNPXNLg9zQ6GYdFu8d%2Bzlvlsre0OxwFDbvFGhaejW3DBn9YS95rD0dEH7%2FNo2OOEJw3Ltey0eciUsiZiDGpZnqt4262yqqia3tb9ymed06wHw2ld9X3Cf4%2BBGGa0RGGYGuUsK2Vnxqd%2BGJcom%2FzDeCBRLq%2FLafkcLEMD5PKlw6F56nsf0u6sDtvxiQ%2F9XfbHho47h6J9Cl0%2BG7G%2Fdv4RAb%2FgrJyfSzzPU8xgNK0irZc%2BYs1aQnJU2IVX9fS%2FaseMkjjhRig06qap1agd9RGKIJeGAZ7BDdUb2JWz7ExAGbG1A09gzqfTeWBqTUD1yHEcz%2BvTLV%2FK%2BA%2BFo7xAqvT5zCmIJWN05SInGHCUTZGfcnSMJGXvskGOqUBCZKTw1vWgRkVuTytu9FroIau%2BEsfmgjrhILS7hEXM3y34tXXD07xVmTt664z3CHZTiqbloTRmsev2MoKApLfMcMAJSqQhTmlMFGZmafYU9wRrQiz8SEfksbayOSvFE1n5QiywHiS8Sd5o%2BmX%2FDg%2Flt1j8opDafYSSSvd4w5qxolF9cGW2F0hOpC%2BzyznQesv7qHTqkanvA8sGot3eNyfuj7PhOlT&X-Amz-Signature=e90c2c9be7cba75352809fec7b418f618bd1ae8b70630e2a664c108391a5aeb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

