---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57R6OBB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRDjoq9JwYjJhnYZgO6mpWtOiStrhFLSJrtX4KtoRiLAiBRbwj%2BecjfRm54FcTFlBFtueEnzTnEaQq9NAiljfn0eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMB73Arrm67uYjzPMaKtwDhTGChNME3DJcYvorGMkWOCEq26UaNeYjZadsnfDv%2FFaYxQNas4Zeu%2Bu7SrfwBJ8Vjs8rEPRjthiK2iDAA2s%2FDACfcXvpChd8XBVi1DPEO42RtDZKulzEh%2Bdwkk%2BaduukojFXgJQbowTjqwpkJP6cSCsiYy%2BGzRwXrYrCYn390KvZMypJHhKuEpTyYrr387nk2OyzyzONu5RDBNA1vEmdBeKN1wFn8Nx5VCFDRo0Ggzx7AuD0SIJ%2FHqo3m86m1zGEuom8BjTXGdHmzZ0LC%2BdzIihloQYsLfaNrTml64WKKySD4dDBLho40DepGWRXM0ZzUOoOueDIvX1VBqMKCgfMLD8%2FJu2%2B4ZE9KDhi6KqCxiFusPKPzECjcmwm3czGGz%2BkpfhhtjXC940ybJi7P5E9NIDy4lnEdzW%2FmwGkneZ9Qgtb%2FKvhR9CuOB5TvLIzdfNBQO5IiGF7VrNDQHO8wXxwfS2%2Fxfs%2B07nuROIimDnkJSL7GNsKZMyEfb6KR8QxztGlDwkbSNNqmMwx8ADc4oGuW2XongfCPM02aqWq7Nku2hFziBGEIaUayJawD1wKbHkn7D19TOE0xFQCsNVKlSZHvb1Q5xVD%2BQBHtp9%2BdfJsQhHVodoPv%2FzUQEvVjw0w66bQyQY6pgGOwcXuAm83J%2BXatUlJPTbylW3ZVcoyXB%2FELGEgTVtXpc0fJfXUyc9xmOFj4%2Bluacgg2VQKJL2whIUxNv90FfGYxCta3V1RcPmkBfG%2BFdE3%2FnPt2puhYc7b5kmU1crGffWUWOohK52pjd6AvX1XruhoQboLDxMKqd0WfjrdMryEYsGw4qNhbeGA8nz8WGBDz3OFgZUna0np9umVCpzVZv53zgAvuWZ6&X-Amz-Signature=7f23de8d9d848a951d215aa1bd90fae788c1b12e3551cda1950816023f0479fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57R6OBB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRDjoq9JwYjJhnYZgO6mpWtOiStrhFLSJrtX4KtoRiLAiBRbwj%2BecjfRm54FcTFlBFtueEnzTnEaQq9NAiljfn0eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMB73Arrm67uYjzPMaKtwDhTGChNME3DJcYvorGMkWOCEq26UaNeYjZadsnfDv%2FFaYxQNas4Zeu%2Bu7SrfwBJ8Vjs8rEPRjthiK2iDAA2s%2FDACfcXvpChd8XBVi1DPEO42RtDZKulzEh%2Bdwkk%2BaduukojFXgJQbowTjqwpkJP6cSCsiYy%2BGzRwXrYrCYn390KvZMypJHhKuEpTyYrr387nk2OyzyzONu5RDBNA1vEmdBeKN1wFn8Nx5VCFDRo0Ggzx7AuD0SIJ%2FHqo3m86m1zGEuom8BjTXGdHmzZ0LC%2BdzIihloQYsLfaNrTml64WKKySD4dDBLho40DepGWRXM0ZzUOoOueDIvX1VBqMKCgfMLD8%2FJu2%2B4ZE9KDhi6KqCxiFusPKPzECjcmwm3czGGz%2BkpfhhtjXC940ybJi7P5E9NIDy4lnEdzW%2FmwGkneZ9Qgtb%2FKvhR9CuOB5TvLIzdfNBQO5IiGF7VrNDQHO8wXxwfS2%2Fxfs%2B07nuROIimDnkJSL7GNsKZMyEfb6KR8QxztGlDwkbSNNqmMwx8ADc4oGuW2XongfCPM02aqWq7Nku2hFziBGEIaUayJawD1wKbHkn7D19TOE0xFQCsNVKlSZHvb1Q5xVD%2BQBHtp9%2BdfJsQhHVodoPv%2FzUQEvVjw0w66bQyQY6pgGOwcXuAm83J%2BXatUlJPTbylW3ZVcoyXB%2FELGEgTVtXpc0fJfXUyc9xmOFj4%2Bluacgg2VQKJL2whIUxNv90FfGYxCta3V1RcPmkBfG%2BFdE3%2FnPt2puhYc7b5kmU1crGffWUWOohK52pjd6AvX1XruhoQboLDxMKqd0WfjrdMryEYsGw4qNhbeGA8nz8WGBDz3OFgZUna0np9umVCpzVZv53zgAvuWZ6&X-Amz-Signature=2d9ecd50cd726edfdc3288ace089d37564e0c5fcb32a4b10c198e3170460712c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

