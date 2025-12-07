---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDG2ZJQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3uudQ91RGxZOqid8Z4Rbk2t3UT2ZwdMxZvvXbAKdTCAiAkCz%2F3wtM%2F7wK5wy6JGfP7tDGkCchcjtgvao%2FrhVT6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2BwCuQ7yyWV%2BG9huKtwDqqJ3I36QzqI%2FIbfrdJpLx473SUm6YqfO7uyXmO3Out39WKtoTWcT2q0HGT9rKg8AMeFBwfpSamhUq4GCBCMHigIlv8ScVZVS1eUq9Fqc3%2Bjoukq8xr4kElvHY20dkkIKv0kkq4JpMks2vGgJuFqORA1VWSJ9RPparme1q3%2Fqdrxl7o4RBc9ZjyP2%2BSIknxW%2FvUJFGjfP1zA8Xs3olg%2BtODTHiwLiwbBcV%2BoCNklk3aXOeTY%2BqcPEcaYmerCUTaVVyZX9QQeXfKMf8PTl%2BEnAGLkrkiJWHb1SuZLqel1IgcsoaAQZaI44ti5JNI5ZLeXZv5LuRUy2YgjZygM4e16hEd5j0blvzbFCnkhP%2FS9jc3hRuz%2BB%2FyqTsyaw9LqY8y0qGYzsbQ6j3K4O7LX9FuaGQat6vcNRrykZQ6waHSsIUXMWaifDtlz0xjqtPVVf4yeJHxV7EmbAX6%2BsGPpTriV1UDxFqF41ezDC2pfhvdBuVLhxHywwVelv%2FDVhndbHhp%2FowcbKYs683Y18gdacAVYooPkP%2Bz5dgtqJlxkymNZD7IfhfJgtaEXOpjy07b8XHBnCiThYOJUO022kIK%2BTf7b6QNE%2BY1G8MZxPj3UgdN0qnWxHsnCVvjCkcdhFevIw%2FMfXyQY6pgGotkpVdhUo5uPE8ekGWYGK9V%2BFsEk%2BsTfEReT9VG%2FrA6IHcOumBxU4HoVu9F8C5Aei7%2Ffh%2FCtJqJ%2FgzDJnGxTofSubj4FOsIDUZz9v25Fuv7SrCJmJ32eEUhOCkWNU74IjFeuFNNnMXVztqPoS96I7Qx0Z99oZg4sR%2BnqHLBL5gWVxNKqgHs6mXEAIfg6JfodCQfrgv6E356MGBxACGHs%2F0URNVzqD&X-Amz-Signature=255e6e40d9772137f5121c5f9271a204ee662e2f3a5e9e8c4fe8f11a14e9e938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDG2ZJQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3uudQ91RGxZOqid8Z4Rbk2t3UT2ZwdMxZvvXbAKdTCAiAkCz%2F3wtM%2F7wK5wy6JGfP7tDGkCchcjtgvao%2FrhVT6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2BwCuQ7yyWV%2BG9huKtwDqqJ3I36QzqI%2FIbfrdJpLx473SUm6YqfO7uyXmO3Out39WKtoTWcT2q0HGT9rKg8AMeFBwfpSamhUq4GCBCMHigIlv8ScVZVS1eUq9Fqc3%2Bjoukq8xr4kElvHY20dkkIKv0kkq4JpMks2vGgJuFqORA1VWSJ9RPparme1q3%2Fqdrxl7o4RBc9ZjyP2%2BSIknxW%2FvUJFGjfP1zA8Xs3olg%2BtODTHiwLiwbBcV%2BoCNklk3aXOeTY%2BqcPEcaYmerCUTaVVyZX9QQeXfKMf8PTl%2BEnAGLkrkiJWHb1SuZLqel1IgcsoaAQZaI44ti5JNI5ZLeXZv5LuRUy2YgjZygM4e16hEd5j0blvzbFCnkhP%2FS9jc3hRuz%2BB%2FyqTsyaw9LqY8y0qGYzsbQ6j3K4O7LX9FuaGQat6vcNRrykZQ6waHSsIUXMWaifDtlz0xjqtPVVf4yeJHxV7EmbAX6%2BsGPpTriV1UDxFqF41ezDC2pfhvdBuVLhxHywwVelv%2FDVhndbHhp%2FowcbKYs683Y18gdacAVYooPkP%2Bz5dgtqJlxkymNZD7IfhfJgtaEXOpjy07b8XHBnCiThYOJUO022kIK%2BTf7b6QNE%2BY1G8MZxPj3UgdN0qnWxHsnCVvjCkcdhFevIw%2FMfXyQY6pgGotkpVdhUo5uPE8ekGWYGK9V%2BFsEk%2BsTfEReT9VG%2FrA6IHcOumBxU4HoVu9F8C5Aei7%2Ffh%2FCtJqJ%2FgzDJnGxTofSubj4FOsIDUZz9v25Fuv7SrCJmJ32eEUhOCkWNU74IjFeuFNNnMXVztqPoS96I7Qx0Z99oZg4sR%2BnqHLBL5gWVxNKqgHs6mXEAIfg6JfodCQfrgv6E356MGBxACGHs%2F0URNVzqD&X-Amz-Signature=4624a91f279aae0971b324dcc40615453cd30258e51fe157184383e6287bc4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

