---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYJ3G35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjYSUnCr0EE8vw%2Bf6PtwkmTtBEfMFgwgUx7CTIT6CtcwIhAJlw2J9I3SFmGPXxTDH57VuPiz3AOJoLPmIA%2BdLHouwZKv8DCHIQABoMNjM3NDIzMTgzODA1IgwRMRbcBqqSKeRMGhoq3API%2FoXwT1%2BUdektQVNXIinuXx1a0%2FMyHyQKKyLatmy45tFgYLroE7oUFbXOENclZRC1wE3Z3qCXhDFzqTPvulRzSc1ywiEtp%2BC380PbtOpZ7kgBzWUvws1I%2FSbr%2BF0KRUs1WWHTZrA9T3Zw05lOsy9uzRLPqLdOV343hp4Qtu%2FwlXXeEF0bciSbPjJ3Z67lO1CYqioZ9xzqDJOGDSWNg1ctbiBLHVgFDb4MtE9OsDlyu%2BNTsbnUbpfwBuLuqkQHeKH9%2BNAo6TK%2FpcITa8qNdlY%2BhFgUrV2QFdO2BFRQa6ww71i66c%2BEgg7RD9Jspw8eSjTQqzTPH4UehAWaPkVv1DSD%2FXxcKYKR8nvrW7Zm2qX7RZsb9fvsVm7ISQjsShGv%2BsS0a6nN4PgYofGo9GnOSX1%2Fb0yrmyXIp8AWnceCBGirqqy4NhfC9yIKj5iEfg9yD8TL7BLHiSecrd7F4%2BDa99ePn%2BL0irnm3q9u8AQ82iFkG9DHkEHt9c50AbsXVh9jw7intbDxPJ54qBOHb0e7rrbn%2BL9uQAPojVT4EtHbDl%2F16ubZNppjPUJdRAJgRLhk0xR71y3wQ6%2BzTzrcl5fIQZn7Aruwefq108XmLXt0lCP4dRVhRNbiMzeLaQnh9TCn%2BofKBjqkASuk0Bxmlj5%2BZZamjXxvHAz1XAY2WJo7vI5OPFGC%2Fpqa7axAfGAv2VIa807X%2BXplTp%2FNIjGdNuK7pEwQKFK%2BMzgdUuQ5h%2BybnneEF2wxn%2FSTskWRVbuDfsjcMtDeIN8qXdYfv%2F5hjMN5wEXKgGbdGNR0Nn7R0Wf6quoNAT5DHyNXIMF0NZWSftHffnC4nOZe%2BTq8pgIwVSL5aTNWxXn7NF28sAeV&X-Amz-Signature=54d9e16234f54099eaf087bc6d37c76688e2398bd8282dd44f639cea89690a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYJ3G35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjYSUnCr0EE8vw%2Bf6PtwkmTtBEfMFgwgUx7CTIT6CtcwIhAJlw2J9I3SFmGPXxTDH57VuPiz3AOJoLPmIA%2BdLHouwZKv8DCHIQABoMNjM3NDIzMTgzODA1IgwRMRbcBqqSKeRMGhoq3API%2FoXwT1%2BUdektQVNXIinuXx1a0%2FMyHyQKKyLatmy45tFgYLroE7oUFbXOENclZRC1wE3Z3qCXhDFzqTPvulRzSc1ywiEtp%2BC380PbtOpZ7kgBzWUvws1I%2FSbr%2BF0KRUs1WWHTZrA9T3Zw05lOsy9uzRLPqLdOV343hp4Qtu%2FwlXXeEF0bciSbPjJ3Z67lO1CYqioZ9xzqDJOGDSWNg1ctbiBLHVgFDb4MtE9OsDlyu%2BNTsbnUbpfwBuLuqkQHeKH9%2BNAo6TK%2FpcITa8qNdlY%2BhFgUrV2QFdO2BFRQa6ww71i66c%2BEgg7RD9Jspw8eSjTQqzTPH4UehAWaPkVv1DSD%2FXxcKYKR8nvrW7Zm2qX7RZsb9fvsVm7ISQjsShGv%2BsS0a6nN4PgYofGo9GnOSX1%2Fb0yrmyXIp8AWnceCBGirqqy4NhfC9yIKj5iEfg9yD8TL7BLHiSecrd7F4%2BDa99ePn%2BL0irnm3q9u8AQ82iFkG9DHkEHt9c50AbsXVh9jw7intbDxPJ54qBOHb0e7rrbn%2BL9uQAPojVT4EtHbDl%2F16ubZNppjPUJdRAJgRLhk0xR71y3wQ6%2BzTzrcl5fIQZn7Aruwefq108XmLXt0lCP4dRVhRNbiMzeLaQnh9TCn%2BofKBjqkASuk0Bxmlj5%2BZZamjXxvHAz1XAY2WJo7vI5OPFGC%2Fpqa7axAfGAv2VIa807X%2BXplTp%2FNIjGdNuK7pEwQKFK%2BMzgdUuQ5h%2BybnneEF2wxn%2FSTskWRVbuDfsjcMtDeIN8qXdYfv%2F5hjMN5wEXKgGbdGNR0Nn7R0Wf6quoNAT5DHyNXIMF0NZWSftHffnC4nOZe%2BTq8pgIwVSL5aTNWxXn7NF28sAeV&X-Amz-Signature=3f743a898a5889b408f93ad87d78093fe9b3d0921558b8a99b270de487f5980e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

