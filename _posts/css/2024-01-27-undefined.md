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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ45EPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICJunOmecs2n%2BuA1dcdaGtFZ5PbSOcj7wlXE6gEU%2FnifAiBN0Sk6dbfUz6i0cHXCp7vJPgLMG0mxNlHo30cotP5uWyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCpJPTJSVdegeMK0rKtwD1VHmVToJCpZhL0PfxxqpCzmIfdHlIjxwfTNG6rCThWdeTOT5DoTtEPMVMZilIv4BRiAu7qkU4q0dl40xNWTIZUYWljkS7h9B2TN1CVtroGxXMCWeHBU4WGos%2B7Kj%2FUQiskpAlsQ8SUnqM9Yc0c5UYM71U%2BXnm9djx%2Bg3MU9CeX45VsRkDjDaZe5fZJ5XcLOHQMF7gjh80F40YkQLk%2Fgv3OhQ4SInt6nav9DeQYAiNDg3qnCdyHDOum5Np4UMyvPDcebr3uZ0cjqPLZo3XK9RdJIlSJb8hU6ESxYWBKq8LDU%2FX3Zf50X7IYm2qg%2BtsXl6SYeW%2ByNvfjmMpZze1vo2wQgrNjBsYI2UA7kbhoKbvbZqxzbbqz5gNxj%2FtQOydxy%2Ba5%2FxbLplIJDkgHpvooligBQCSmZhPxz%2FxOlu05K9lULzuKa0g32N8ZbV57ZGjnvis3BezhM7ox%2BA1BnKrQpMjMVnxrejvtnuFcCUIUWoFS8Vf54fU%2BsW5h1JwEW8%2BuBkqKfpbEM5Ca%2FkbIhUwLSB1KLxLgh7ANnN1Dcy1sFJrhfX%2FA4RtbHJN9z7szls0%2BE906WISJH7nHzg1iPTH4B4wFMHlgXLvoEbeM0HyQ1%2FGNQhM7ml3bEhuM44CSgwsNrByQY6pgGXTJv0cGPcQof3uYVVvqUancAWD3YyWfLgXAac8uWaqdyMznp%2B4K3wdAneIV9aM%2FupZQMnvMg4%2BZDjhNV4HYOje6%2BtnwQ71OgzYGJam%2Bg15i6b81whDmMzOiKMZi%2FrGmu0sTF9o7R%2Bjkc3E6fy7plQEe8DQT7N8ovXXz1nwSOhCvzx8zAom6jn0Y358v9n4xsuQ9cvhnOp5aGPMprUEa9TQ44elmmm&X-Amz-Signature=c54e58a65097f85281a8a22d6f578e582e08daf3aa21008536299bd1cce81dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJ45EPF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICJunOmecs2n%2BuA1dcdaGtFZ5PbSOcj7wlXE6gEU%2FnifAiBN0Sk6dbfUz6i0cHXCp7vJPgLMG0mxNlHo30cotP5uWyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMCpJPTJSVdegeMK0rKtwD1VHmVToJCpZhL0PfxxqpCzmIfdHlIjxwfTNG6rCThWdeTOT5DoTtEPMVMZilIv4BRiAu7qkU4q0dl40xNWTIZUYWljkS7h9B2TN1CVtroGxXMCWeHBU4WGos%2B7Kj%2FUQiskpAlsQ8SUnqM9Yc0c5UYM71U%2BXnm9djx%2Bg3MU9CeX45VsRkDjDaZe5fZJ5XcLOHQMF7gjh80F40YkQLk%2Fgv3OhQ4SInt6nav9DeQYAiNDg3qnCdyHDOum5Np4UMyvPDcebr3uZ0cjqPLZo3XK9RdJIlSJb8hU6ESxYWBKq8LDU%2FX3Zf50X7IYm2qg%2BtsXl6SYeW%2ByNvfjmMpZze1vo2wQgrNjBsYI2UA7kbhoKbvbZqxzbbqz5gNxj%2FtQOydxy%2Ba5%2FxbLplIJDkgHpvooligBQCSmZhPxz%2FxOlu05K9lULzuKa0g32N8ZbV57ZGjnvis3BezhM7ox%2BA1BnKrQpMjMVnxrejvtnuFcCUIUWoFS8Vf54fU%2BsW5h1JwEW8%2BuBkqKfpbEM5Ca%2FkbIhUwLSB1KLxLgh7ANnN1Dcy1sFJrhfX%2FA4RtbHJN9z7szls0%2BE906WISJH7nHzg1iPTH4B4wFMHlgXLvoEbeM0HyQ1%2FGNQhM7ml3bEhuM44CSgwsNrByQY6pgGXTJv0cGPcQof3uYVVvqUancAWD3YyWfLgXAac8uWaqdyMznp%2B4K3wdAneIV9aM%2FupZQMnvMg4%2BZDjhNV4HYOje6%2BtnwQ71OgzYGJam%2Bg15i6b81whDmMzOiKMZi%2FrGmu0sTF9o7R%2Bjkc3E6fy7plQEe8DQT7N8ovXXz1nwSOhCvzx8zAom6jn0Y358v9n4xsuQ9cvhnOp5aGPMprUEa9TQ44elmmm&X-Amz-Signature=08bf05540f5fb4fca68ed84c5f60941ff81d8055147bdbd1544eff41ccbf4490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

