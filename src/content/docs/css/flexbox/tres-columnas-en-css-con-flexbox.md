---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRWTZZP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFL1oQBTCDrBpG%2F9KXkwpfralCH4mlRMtuh4Ik1oj3U%2FAiEA0bRL09omqwnpIs6qCuUc6GK4j83cEzsULQXr4uybO60q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJuYQuq%2FMl%2BxYh%2FXRyrcA0QywxA%2F8O3PRLzm90UL3EHrOAL%2F1M9BbOBqGIUN%2BLQ3urcifuOhQHA%2BV%2BoX11DxjFjTipN8IwPHLBKO9DUuGPm711A4dwRkNUZIgy2%2FeHYMtbCuus1uMAVw%2BbpSWPmReZG9l%2F6MLIKt2q6g%2BJbOWBHAyKPL6fF22K8fCM0Q%2BCFgyMLjxY0z7RUFNrNoNldCgT419jZ%2B8AQeG3IgdZIF5wWoqZe9at6kRnrdfVAnAmvfvn%2BVPWniWWf5P2S0AzG6Pi0dD3RANTmMO4ytT4al4n2GijX9Wxgy4rlJR%2FnBkvUi%2B6x3RhV4cVhSc%2B5hfuUzvGVZZgD11CXRgOWXkoIbNhKw8Vv73hjnNIknifoqIKn9SFvsvxay87zNCPGUEc%2FZqBf4Gb25Lb00tUGHpBFtrEDg2%2B8b0IhPxgR0ATekKu%2BW9DMco%2Be%2FJbgZY2SZLlBXWmkZozDoWvb7xppTuI%2BNRqL88hBP0wbUilJlh9i%2FKKag%2BGbaoduY7oKKUxhlEBd7ObP%2FZ8htctY1IYbt5g2Agl3eWu5SXYbHnDeNhFZEAdTNPeWy0UuUFqYFTNj4Kqt9MYqfxHtfGmT%2Fnwg7VyvRC2nKtavLSXH%2FluwkFcmfM7WL8RcnE7c%2FTL0TJZ19MIOuxMkGOqUB6Ra2NXRhCWLSQg6HA1qUMGPT7yKoRzrf%2BE35W9HTxjDCtLnVnZ9BNBg7m2s%2FW5swJYAAsNp6jdGjU9gwED8zMpTQxthqXDxPrWVWtF4IlgOh%2Bgryc8ulNnOi3%2BIAoVx8lVIOu7O%2Fitn%2FV8yu1%2BLKoxDTX17t0j2Tp0mPs9n9pvDRfi3b4aKms%2FmPe%2Bz7dp0PsGwIIU5XwMpXGcLjxtFWoHeSIApT&X-Amz-Signature=2f82fd25d66a27779764e28eda57819e33b060dd40919fc0f60ee26d7aa4e338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFRWTZZP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFL1oQBTCDrBpG%2F9KXkwpfralCH4mlRMtuh4Ik1oj3U%2FAiEA0bRL09omqwnpIs6qCuUc6GK4j83cEzsULQXr4uybO60q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJuYQuq%2FMl%2BxYh%2FXRyrcA0QywxA%2F8O3PRLzm90UL3EHrOAL%2F1M9BbOBqGIUN%2BLQ3urcifuOhQHA%2BV%2BoX11DxjFjTipN8IwPHLBKO9DUuGPm711A4dwRkNUZIgy2%2FeHYMtbCuus1uMAVw%2BbpSWPmReZG9l%2F6MLIKt2q6g%2BJbOWBHAyKPL6fF22K8fCM0Q%2BCFgyMLjxY0z7RUFNrNoNldCgT419jZ%2B8AQeG3IgdZIF5wWoqZe9at6kRnrdfVAnAmvfvn%2BVPWniWWf5P2S0AzG6Pi0dD3RANTmMO4ytT4al4n2GijX9Wxgy4rlJR%2FnBkvUi%2B6x3RhV4cVhSc%2B5hfuUzvGVZZgD11CXRgOWXkoIbNhKw8Vv73hjnNIknifoqIKn9SFvsvxay87zNCPGUEc%2FZqBf4Gb25Lb00tUGHpBFtrEDg2%2B8b0IhPxgR0ATekKu%2BW9DMco%2Be%2FJbgZY2SZLlBXWmkZozDoWvb7xppTuI%2BNRqL88hBP0wbUilJlh9i%2FKKag%2BGbaoduY7oKKUxhlEBd7ObP%2FZ8htctY1IYbt5g2Agl3eWu5SXYbHnDeNhFZEAdTNPeWy0UuUFqYFTNj4Kqt9MYqfxHtfGmT%2Fnwg7VyvRC2nKtavLSXH%2FluwkFcmfM7WL8RcnE7c%2FTL0TJZ19MIOuxMkGOqUB6Ra2NXRhCWLSQg6HA1qUMGPT7yKoRzrf%2BE35W9HTxjDCtLnVnZ9BNBg7m2s%2FW5swJYAAsNp6jdGjU9gwED8zMpTQxthqXDxPrWVWtF4IlgOh%2Bgryc8ulNnOi3%2BIAoVx8lVIOu7O%2Fitn%2FV8yu1%2BLKoxDTX17t0j2Tp0mPs9n9pvDRfi3b4aKms%2FmPe%2Bz7dp0PsGwIIU5XwMpXGcLjxtFWoHeSIApT&X-Amz-Signature=77e5f483601f742a9ace33b1fd2dad7e8b303114949dd650ff3b165a128642fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

