---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUT7WNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFSfxHW5%2FTGo8XRm%2BGP5khww%2FeSynqZ8hQB2QEWiYM0AiAav5ls6wpYMBwIJ1Hd9JKAEQfZg87NKjW4fN1TA3grEyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM0Rk2fmIb0hOpPiwjKtwDeDVYxopPCL2sEbncXUdUiSRTyrbEWNIhOHbTLQlRBk1bXEUdiVtChJdStl0bCASxR7k%2F4ujjoKDh9Kk%2Fs4%2F6pqZ%2B5Zz3TmCwAerJxkN6iHSp6fp9Aoa1w%2B6JXO7Fia15u84EqgEf7TZ9fgwjqWTlp10%2FZfjpuCVED7Dnn15%2FbU4v3fD74gow0fZ6l7AA7g3XGHcTvQlLP%2BU9yi%2FtZV8x8%2BEr4%2FPW6FLdzuF3VluzdHRanOogVUdfCCa8ej06PD0oxtqDxKWtURqyuAlWUJyxwRRPItRctUNFqYw6OEZ1OtG1QH2v9pp3cjJ2f2EdvWBvmZPbCJYholoSFANCIyso7cS%2FJq2YdATyCAua2CCs5ont3fsAJSmSq%2BlCEIr9yedccZo1syfZyliHFtcBBe%2FblzqKLoYbo38ENUJowVDhro6Mypv%2BzE5ATXFw%2F6S6KaAc%2BjtzhL7maimt6UhTu%2FXQBGBJ2%2BWoYqmAgKcSvKVlcR4MUvgI0wjZjIi%2FwsEZnTOXzwsAjo06hIQwLumWGiq5FOT9Nza9rS2o6d0SwDq5hjxNFyGabP48hK9JONRBGdx5LOUkkYdjWL2M72g386rU0rBPUEzpgU2TR9gmfqNh9wIzZEQaML%2B%2BV8qnfyYwwOzLyQY6pgEezrIjAskKHly7g%2B4X1RxWIXPoc3yPugR1fR%2BFyeYYcfw7vKpxP3Nlq302%2Ff9xfVLzF0AkCmZIsIC8fIE0yud%2BCTPpvHxiHzUR39pHe7v%2FLsoYQYtrwfRQrnmERgnUZLaMltQ0pZ9u3Mf4cEBhd39lq%2FKJkjE9ckKSHzmYD9AO3rcxQjkZF1jpo9GpJl6M8Be7SQ2hQz5VTOtdiQV77dVVstNSpibX&X-Amz-Signature=477c41493c78d09d3ae7bdebfbef6cc4300427b30de40240efe94a27a4a77f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTUT7WNG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFSfxHW5%2FTGo8XRm%2BGP5khww%2FeSynqZ8hQB2QEWiYM0AiAav5ls6wpYMBwIJ1Hd9JKAEQfZg87NKjW4fN1TA3grEyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM0Rk2fmIb0hOpPiwjKtwDeDVYxopPCL2sEbncXUdUiSRTyrbEWNIhOHbTLQlRBk1bXEUdiVtChJdStl0bCASxR7k%2F4ujjoKDh9Kk%2Fs4%2F6pqZ%2B5Zz3TmCwAerJxkN6iHSp6fp9Aoa1w%2B6JXO7Fia15u84EqgEf7TZ9fgwjqWTlp10%2FZfjpuCVED7Dnn15%2FbU4v3fD74gow0fZ6l7AA7g3XGHcTvQlLP%2BU9yi%2FtZV8x8%2BEr4%2FPW6FLdzuF3VluzdHRanOogVUdfCCa8ej06PD0oxtqDxKWtURqyuAlWUJyxwRRPItRctUNFqYw6OEZ1OtG1QH2v9pp3cjJ2f2EdvWBvmZPbCJYholoSFANCIyso7cS%2FJq2YdATyCAua2CCs5ont3fsAJSmSq%2BlCEIr9yedccZo1syfZyliHFtcBBe%2FblzqKLoYbo38ENUJowVDhro6Mypv%2BzE5ATXFw%2F6S6KaAc%2BjtzhL7maimt6UhTu%2FXQBGBJ2%2BWoYqmAgKcSvKVlcR4MUvgI0wjZjIi%2FwsEZnTOXzwsAjo06hIQwLumWGiq5FOT9Nza9rS2o6d0SwDq5hjxNFyGabP48hK9JONRBGdx5LOUkkYdjWL2M72g386rU0rBPUEzpgU2TR9gmfqNh9wIzZEQaML%2B%2BV8qnfyYwwOzLyQY6pgEezrIjAskKHly7g%2B4X1RxWIXPoc3yPugR1fR%2BFyeYYcfw7vKpxP3Nlq302%2Ff9xfVLzF0AkCmZIsIC8fIE0yud%2BCTPpvHxiHzUR39pHe7v%2FLsoYQYtrwfRQrnmERgnUZLaMltQ0pZ9u3Mf4cEBhd39lq%2FKJkjE9ckKSHzmYD9AO3rcxQjkZF1jpo9GpJl6M8Be7SQ2hQz5VTOtdiQV77dVVstNSpibX&X-Amz-Signature=458131e15b554f0796753e04db4f435c0a4b1374923fdb1092b284ab15c14c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

