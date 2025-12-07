---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBFYUGB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc1RsSI0E42GWckj4jK1JAeUKQZGbr9SGo7Pd3gpCTbAiBpt5WFnyDymENLKc%2Fxfi0hojhT00jrHzmVJdJkKlxFZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomqpGZBfwj43hPnIKtwDr33dt0StTAW0hicx3gLh1e3pgv0VGcKkir93XfLzOOkt5W4L9jspirqATY8ICluOoWAaG%2B4LDJ9SBAPiUbex9sCZZFsDoi4yyLnr3zbd4fAiDQVsqlGOXI0lk7E%2BmZ49CVXTrm2s4roVD46uODo5mwPChMnZVP9wcftrEEr1ItSzJY1u%2BmvkhmNlIrNBsfF112AgYatalzkJ2DaQ3K4x%2Fdch0LmTq%2FQ050GpOUUcaU9kGYpXNAv6dsmf4Z0%2FiHVYcBWvw8fl%2Fh6FOzAHl4%2BHJf3VPZr93h%2BiDyHO7U2V35VbnxaN4wJLI7DdhWsSBnHXE8hyjJu5n3307v31bDVhViyPlfgxvfDEMudtceW2rUucq2H9vMAv0%2B32DdDMe8DGJw5UCvoqiXqb7qSOoujsl5XrfFWk5SK39K9jwtGgOnDyxaD2DcYgUwCn06CNrT%2BS95gEyuW7XlDjfVav1iU4nXKtI44bnvwaJ8Eoq5jK%2BNQKXUNpIqa6Wjifwuaie2lQtGAOLEoJaTZISHE9qiABAsobaBI%2FU4wlGujC3YGE%2FJGUS%2FvGHSoZBLSUARz409gdrJYNE9%2BFIsFeQ3EQU6LnZR3zboLJQq8Oq%2FzbI01e02lNlm5QPm9N0d6QXIgw0%2F3SyQY6pgHnED8U3ChhOaEUBBZxd4fDq1IQiRsV5CaEodQ6nsnTL9ZlZNZ25dhvjqEiyAaJj%2BR4zv2FSPi1QB%2FpUFOOHEPFbl4%2FqhApg%2BAfB4Cjnw8zMguu1Vk5sRygzX988WdTcDVe1qqgNsvRTbssjyk5VmN4YXJ3MtiA6rtxQ9RZj%2B46wl23ZcACdr5wUFnaPKZ7fi3kTOpj6JrO5TVVQhA7dV0AdafBpQ4C&X-Amz-Signature=74b19d434f6d0eccb0f7d7f0e75df27663770756fdd8ea5195f9b546c70df8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOBFYUGB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDc1RsSI0E42GWckj4jK1JAeUKQZGbr9SGo7Pd3gpCTbAiBpt5WFnyDymENLKc%2Fxfi0hojhT00jrHzmVJdJkKlxFZCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMomqpGZBfwj43hPnIKtwDr33dt0StTAW0hicx3gLh1e3pgv0VGcKkir93XfLzOOkt5W4L9jspirqATY8ICluOoWAaG%2B4LDJ9SBAPiUbex9sCZZFsDoi4yyLnr3zbd4fAiDQVsqlGOXI0lk7E%2BmZ49CVXTrm2s4roVD46uODo5mwPChMnZVP9wcftrEEr1ItSzJY1u%2BmvkhmNlIrNBsfF112AgYatalzkJ2DaQ3K4x%2Fdch0LmTq%2FQ050GpOUUcaU9kGYpXNAv6dsmf4Z0%2FiHVYcBWvw8fl%2Fh6FOzAHl4%2BHJf3VPZr93h%2BiDyHO7U2V35VbnxaN4wJLI7DdhWsSBnHXE8hyjJu5n3307v31bDVhViyPlfgxvfDEMudtceW2rUucq2H9vMAv0%2B32DdDMe8DGJw5UCvoqiXqb7qSOoujsl5XrfFWk5SK39K9jwtGgOnDyxaD2DcYgUwCn06CNrT%2BS95gEyuW7XlDjfVav1iU4nXKtI44bnvwaJ8Eoq5jK%2BNQKXUNpIqa6Wjifwuaie2lQtGAOLEoJaTZISHE9qiABAsobaBI%2FU4wlGujC3YGE%2FJGUS%2FvGHSoZBLSUARz409gdrJYNE9%2BFIsFeQ3EQU6LnZR3zboLJQq8Oq%2FzbI01e02lNlm5QPm9N0d6QXIgw0%2F3SyQY6pgHnED8U3ChhOaEUBBZxd4fDq1IQiRsV5CaEodQ6nsnTL9ZlZNZ25dhvjqEiyAaJj%2BR4zv2FSPi1QB%2FpUFOOHEPFbl4%2FqhApg%2BAfB4Cjnw8zMguu1Vk5sRygzX988WdTcDVe1qqgNsvRTbssjyk5VmN4YXJ3MtiA6rtxQ9RZj%2B46wl23ZcACdr5wUFnaPKZ7fi3kTOpj6JrO5TVVQhA7dV0AdafBpQ4C&X-Amz-Signature=61ecbdf143dd51b948de61fb5c6116238a7ccfb61d12d10ebc99691feefea1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

