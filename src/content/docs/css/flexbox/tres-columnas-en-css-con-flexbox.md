---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WTSJQSC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbGE%2F4zuGzSggd6bWdG5bha2DqKL40%2BZdTeX04TS%2BsSAiA8Tblv482ZwAvxgorpYIEnaXknMPO6ymb4JsS%2BBP4rfSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMN0hbHxF%2BDWM8kDCqKtwDjv%2Fh9UHCcfRTNmG6bQwVBGiH5h1HdljDiJruuZVKXHJwKk3t76fld%2FlUF2567vq%2B31Wc5Etboy8zYVT2BU12kJAwW5XrSM7BD9IpMThoqorkD5n8uKyG4F2FdFmEKsJh1dhsTVzGElaOPl7cKceej9BNFPstmxaXQWir1QcAQ20LKInNqkLCzQYzu48ivnbeevJmW8teR8qBv3A%2BWSOo%2BcSTCppjw7sQkYkv%2B6ma4%2FfZdKgDqFJDbzbzLcIZ%2FvXAZnAPW0m8VAXHtBgW1yd7C6nXtg2%2By71ipPagZZ0BoYxr4IX3ZmH3kbY2hn0e7hL74awSPqXfhDl7ocmV1jLD5C8tuTi0uTLqpr0G1z1uZpyUVk1%2Bm1zD1Ew6EvJ3lqFgmm9b2deqAL8XM27zqgU5HyDuwYw5rXrW9IXp%2F4%2F0XassB6kxogdhNmz6ZZzndZVYYJ6mygx3RXKLXRW77z29T3A2yyLRCZAvSnxTkJRa4t4xtDnnzyjWL6GqSDtBA48dDZSUjyXzeYvK16CgxFF71vh9qrH7Lyt%2B6jyw5NXVAuRGETORJ%2BkwU6KxvAQg9r0EOJmiL6DZ9VEDZWGySrdTGvj%2FjlzVyz7uomO7q5qOxIgxRZirHPdEAscS6DUwt83RyQY6pgHdlVo9B0JCL5bmLtnAQ%2BAm6ZAFvmNTm%2FlpT4SnRQe%2FhreutUO8OI1DVi8eG1Qym30bzh92xQZxsi1vNwyenR1szVFFF3O9Pncea2TeBAThcUZPvuRDazqmDu6A40%2BfT6Pyx%2FbAqzWaNPQ%2BuarXv%2FSwd1lZl%2FhJnOyXjgWUuayun%2B6PC9Q2neYwpCHjWUnStA9YxAtvIOt3Sr4Z45PpCBQvtnE4YRJF&X-Amz-Signature=9ebe1be14e237a6ae8b5c210b3c3b83804e4137dcbd5f3dacd5dab3093e48af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WTSJQSC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbGE%2F4zuGzSggd6bWdG5bha2DqKL40%2BZdTeX04TS%2BsSAiA8Tblv482ZwAvxgorpYIEnaXknMPO6ymb4JsS%2BBP4rfSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMN0hbHxF%2BDWM8kDCqKtwDjv%2Fh9UHCcfRTNmG6bQwVBGiH5h1HdljDiJruuZVKXHJwKk3t76fld%2FlUF2567vq%2B31Wc5Etboy8zYVT2BU12kJAwW5XrSM7BD9IpMThoqorkD5n8uKyG4F2FdFmEKsJh1dhsTVzGElaOPl7cKceej9BNFPstmxaXQWir1QcAQ20LKInNqkLCzQYzu48ivnbeevJmW8teR8qBv3A%2BWSOo%2BcSTCppjw7sQkYkv%2B6ma4%2FfZdKgDqFJDbzbzLcIZ%2FvXAZnAPW0m8VAXHtBgW1yd7C6nXtg2%2By71ipPagZZ0BoYxr4IX3ZmH3kbY2hn0e7hL74awSPqXfhDl7ocmV1jLD5C8tuTi0uTLqpr0G1z1uZpyUVk1%2Bm1zD1Ew6EvJ3lqFgmm9b2deqAL8XM27zqgU5HyDuwYw5rXrW9IXp%2F4%2F0XassB6kxogdhNmz6ZZzndZVYYJ6mygx3RXKLXRW77z29T3A2yyLRCZAvSnxTkJRa4t4xtDnnzyjWL6GqSDtBA48dDZSUjyXzeYvK16CgxFF71vh9qrH7Lyt%2B6jyw5NXVAuRGETORJ%2BkwU6KxvAQg9r0EOJmiL6DZ9VEDZWGySrdTGvj%2FjlzVyz7uomO7q5qOxIgxRZirHPdEAscS6DUwt83RyQY6pgHdlVo9B0JCL5bmLtnAQ%2BAm6ZAFvmNTm%2FlpT4SnRQe%2FhreutUO8OI1DVi8eG1Qym30bzh92xQZxsi1vNwyenR1szVFFF3O9Pncea2TeBAThcUZPvuRDazqmDu6A40%2BfT6Pyx%2FbAqzWaNPQ%2BuarXv%2FSwd1lZl%2FhJnOyXjgWUuayun%2B6PC9Q2neYwpCHjWUnStA9YxAtvIOt3Sr4Z45PpCBQvtnE4YRJF&X-Amz-Signature=a1b7bd3089d553d9bffcea753da65aefe7aad30c8b1d29b8f8107ee4f4eb9934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

