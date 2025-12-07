---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3DYIZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP7%2BCDUeqMasINErrC5TAHsXNycfqriuT9DJp7hU0kOAiAsoR7GTwmgG2xwewY6Rjek%2BHi7O%2FrGnkCwO08S2A%2FPOCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1daQOEJGHuZk5Ye4KtwD3VawtgkVtmqDC8XwR0c0vNBYj9ywIh5l%2F7uUqpAhA0xDjxj1NA3Wk8pb%2FqRrGIgsMjiOTcwsU%2FYHXIY1OxOflBtRJsKmzyEFweCY2OcIDkz%2B2wuEb2v9pLEjoBhJyGg%2BRbP9ITFS4TbLXosfr6sg2SMVAhZ3qlzRW7GcCmQm1zELriCUVPj5Rnm5mpQv6LTlkQbXr4smYkOtVQj3Uva9gpr984G2ULVvUux21mwDS%2F13IA5Q7p9wA3l98zGlmUKW3AiBH7tqTK8hnNiutvTUxECKVd9RXq0ytGe6EXRX7CE8h8q9dRbt1jQiiJ9jiKp1idkc9juaCUbCXViCaBMhq4KS%2BU4T2JG3UT%2F3RDavAtqA3tcoa5FQt5o16mImMO1tx9G7A40ZliLmUciov4iWK98rgiPgSIxP9utWr4s1tvad9VqXDLexqh9%2BeiZmN2vN2Kjd87wSJ7zRdnZp%2FDiYX8JZuCvvOwyr5QkbntlQro0WzBZhG5SOVBVPsP%2FSDx0mlxXhYpjHm62dASTzKfuK4Qj5PvwvtF%2Byi648tLQCKDO4egHOaJVz5hIvUfV48NYh0RiENBQ4DiDuC0m7KTCU0QT37vtdhiyNFlmQ9MVutwSDFfQmluTOLdGiRtgwgaTUyQY6pgHD8AlfJbnq0zFWV7c8oCQual98hDBZaepF%2BBuNRN0RvQ3hT5da%2BdP9xtxqZrlmPR5pMcRdikQHGGJ6Xzfz7IUO%2FjLypfQQrHE0VZXDZu0TexIkLGEVmY5USf90QuyHXka6KymqM7vgxXDc%2BPWz5hQfhk4Obhtz2Fi6VJ%2BSrp7i%2B6VrlBQEW5OLMQ38X3twTAsX%2Bxi%2BYHWyANtfVBhoKYRw5MEhqg3y&X-Amz-Signature=ce8b5d82e33dfec98a2107ce52f8252ab79fdf729e13a97d0949a56ff076c1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3DYIZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP7%2BCDUeqMasINErrC5TAHsXNycfqriuT9DJp7hU0kOAiAsoR7GTwmgG2xwewY6Rjek%2BHi7O%2FrGnkCwO08S2A%2FPOCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1daQOEJGHuZk5Ye4KtwD3VawtgkVtmqDC8XwR0c0vNBYj9ywIh5l%2F7uUqpAhA0xDjxj1NA3Wk8pb%2FqRrGIgsMjiOTcwsU%2FYHXIY1OxOflBtRJsKmzyEFweCY2OcIDkz%2B2wuEb2v9pLEjoBhJyGg%2BRbP9ITFS4TbLXosfr6sg2SMVAhZ3qlzRW7GcCmQm1zELriCUVPj5Rnm5mpQv6LTlkQbXr4smYkOtVQj3Uva9gpr984G2ULVvUux21mwDS%2F13IA5Q7p9wA3l98zGlmUKW3AiBH7tqTK8hnNiutvTUxECKVd9RXq0ytGe6EXRX7CE8h8q9dRbt1jQiiJ9jiKp1idkc9juaCUbCXViCaBMhq4KS%2BU4T2JG3UT%2F3RDavAtqA3tcoa5FQt5o16mImMO1tx9G7A40ZliLmUciov4iWK98rgiPgSIxP9utWr4s1tvad9VqXDLexqh9%2BeiZmN2vN2Kjd87wSJ7zRdnZp%2FDiYX8JZuCvvOwyr5QkbntlQro0WzBZhG5SOVBVPsP%2FSDx0mlxXhYpjHm62dASTzKfuK4Qj5PvwvtF%2Byi648tLQCKDO4egHOaJVz5hIvUfV48NYh0RiENBQ4DiDuC0m7KTCU0QT37vtdhiyNFlmQ9MVutwSDFfQmluTOLdGiRtgwgaTUyQY6pgHD8AlfJbnq0zFWV7c8oCQual98hDBZaepF%2BBuNRN0RvQ3hT5da%2BdP9xtxqZrlmPR5pMcRdikQHGGJ6Xzfz7IUO%2FjLypfQQrHE0VZXDZu0TexIkLGEVmY5USf90QuyHXka6KymqM7vgxXDc%2BPWz5hQfhk4Obhtz2Fi6VJ%2BSrp7i%2B6VrlBQEW5OLMQ38X3twTAsX%2Bxi%2BYHWyANtfVBhoKYRw5MEhqg3y&X-Amz-Signature=77eab599e77a5c4c9b9979756f2b3a8e91ab9a6ad79e146137b4bfc4486eaa82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

