---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSKVY2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF7%2FILTM71KwfNBxzfwszgY3qKr8dx8Z8QOcgXHcS%2BGtAiAunpmfRj0BZAIzYJfZmPnnl7QTmtY2adYwRxMnjAZniyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdjlWuWTDyMdmAC6bKtwDq3Os2DfI%2Bx6AHWVhPl4SfnoSBG2hE3ZXGgQQBIdELqR1i7sFZGEBHRzxTRXExfJ79kSyHrod4KSFU2C3g8t2kpAqfHDzZHy1VW%2Bxx2pTIzSQCJ%2FdyNIAn6NpK4P5YKdNX5PRS5miMau5FB1T7sFkFY8HbXbLRleBCxj23kRSByjvfi8PnMlJAslzn3sq95J9a%2B5pXODe810xMmo3yo7Zo8Xq42zH6D6DX4ui51YcxFrnRsFdr%2FZhvN6S4q1rscUmGwQDIqV61MYonlMXDo%2FbrMvwyOz4UKCBn9DZfHBkmRPrSxJwsuIEghVsKllJF8Lxou9PEJJeWUNEUyDa7AFLof4n7ZWidqI68egNo8lYfEcWyWJEhL2erwgl5d6wRu6cddVebqHsfKb76ElegD7AKjiRGn2Lv3A5%2Fr9OBTVEKM5GCCQ19wCHMofkXcOGiH9%2FUbk2z%2F0%2B7TYPtQj9%2Bvfyl6EKTrJw8eGbFGZ9Xpi%2FhYiQa8CCGqDXrHC6kVEjKE07G1MRA5AeDS3C050FjXTod6h1vKEg%2BXLV%2F3gMGlEe6JEz0uoaDBIil31f%2F8F2hrDPQOYh65NG9QhcaF950rCEe6q0EjQ5fdi9zMPPun4w9TAy%2FYFvxJIauhhiHlowwKHGyQY6pgGKN8OGPPlw10LDLdka3%2B3v2UeUctjKQSsNfx7HFOXXtwdqyZyzkkEJZRyEcJABh31kCR3qT2UDLund5nPX1Db2kJk6nLAyVyJVbNmX%2FZn91Q96t07IAJHrwtDF335sAddwZR9%2FSyyiQbtabRr6WPH9PRdJwwJak%2BYoqGr7xrGvIk%2FOZYOEmFblPCHwpuFUf09pxdGXhQNF2FioGIZALX5iHeSwccXU&X-Amz-Signature=a456911f7f5b91543e663de49c7e3940bbbbe337ef55e6b07df40ce4a9ae08f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSKVY2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIF7%2FILTM71KwfNBxzfwszgY3qKr8dx8Z8QOcgXHcS%2BGtAiAunpmfRj0BZAIzYJfZmPnnl7QTmtY2adYwRxMnjAZniyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMdjlWuWTDyMdmAC6bKtwDq3Os2DfI%2Bx6AHWVhPl4SfnoSBG2hE3ZXGgQQBIdELqR1i7sFZGEBHRzxTRXExfJ79kSyHrod4KSFU2C3g8t2kpAqfHDzZHy1VW%2Bxx2pTIzSQCJ%2FdyNIAn6NpK4P5YKdNX5PRS5miMau5FB1T7sFkFY8HbXbLRleBCxj23kRSByjvfi8PnMlJAslzn3sq95J9a%2B5pXODe810xMmo3yo7Zo8Xq42zH6D6DX4ui51YcxFrnRsFdr%2FZhvN6S4q1rscUmGwQDIqV61MYonlMXDo%2FbrMvwyOz4UKCBn9DZfHBkmRPrSxJwsuIEghVsKllJF8Lxou9PEJJeWUNEUyDa7AFLof4n7ZWidqI68egNo8lYfEcWyWJEhL2erwgl5d6wRu6cddVebqHsfKb76ElegD7AKjiRGn2Lv3A5%2Fr9OBTVEKM5GCCQ19wCHMofkXcOGiH9%2FUbk2z%2F0%2B7TYPtQj9%2Bvfyl6EKTrJw8eGbFGZ9Xpi%2FhYiQa8CCGqDXrHC6kVEjKE07G1MRA5AeDS3C050FjXTod6h1vKEg%2BXLV%2F3gMGlEe6JEz0uoaDBIil31f%2F8F2hrDPQOYh65NG9QhcaF950rCEe6q0EjQ5fdi9zMPPun4w9TAy%2FYFvxJIauhhiHlowwKHGyQY6pgGKN8OGPPlw10LDLdka3%2B3v2UeUctjKQSsNfx7HFOXXtwdqyZyzkkEJZRyEcJABh31kCR3qT2UDLund5nPX1Db2kJk6nLAyVyJVbNmX%2FZn91Q96t07IAJHrwtDF335sAddwZR9%2FSyyiQbtabRr6WPH9PRdJwwJak%2BYoqGr7xrGvIk%2FOZYOEmFblPCHwpuFUf09pxdGXhQNF2FioGIZALX5iHeSwccXU&X-Amz-Signature=347190c406299cbc88f65d1c56eced0303cd6a27289accfc298735eee3c4ffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

