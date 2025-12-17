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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554CYAXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCKJAGK3%2FIv6Wf9sjFBNeHLPKxwncWlk%2B60SkGklT54gIgQFeceHp9jj21OEcvmBL12tyvHvUHObiEcq7P1reVmb8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG09WplHJ2Y3eZqbCircAy9RTW94JjJKGuV4fqk79fWGeV7whnbucQeo3QvfLDczuemh0sk%2B5RW2C7zEwKwQrJKGI7m21dbhSb8KsRe9MMw6yJE%2FZpEB7aS9%2Bo1zQ6P23GsKZGuQubqyAjfE281ngPJ6Fkj%2FT2GViYM6l4SoBKSGeZQdJsEdYEyj5b%2FfZYTIKu9UQBupe5IuHbtOCZawxXzvXNSmGTqzUCS%2BKewxaR5CX%2B%2Bi9C3%2Fkra7mA6H5xxUVQkyBdB2YGWHjSsmAAQknJohqkuH1EsV3mOlz354AFHw1gY3BFM4w2gfONzfJUSUDZAoF%2BpIoCWYO7Pff1XDUd2IeBet1nvdm7RlvM5zs3fdkeH0Y86ZIq8jhLSRURi%2FJzn7GKnx2lu9iZbRhLIXEseRv7LPmtziuA5bg4g4yEdnuXGCJeXv1wbY2J9Vyz1nAYNmd1vqi7Hyv2Czn1QwTKStJhVmUB1Qaf7F4hts2BYexUrl5aJCtq6qU0WITw3PjOdZ0U2BskmZegeGjuaM6yxBQ9S85zTpMmGH450l%2BJeErPiIVKyqEUP5acyiwe68g%2FrPCDxQcnk71%2B2nlcYGAKTZbY3t%2Fyl5IzS7%2B6dsWw21CVMfKRqfNHovlmHjPi%2FM1pKA4c14Oby5IDRIMKGqisoGOqUBMym1WMdGlgz7M1bc2BNeF5MMG98GEoLJQ0gmEqk5RbiIlzjq1c7JrttKg8C0BZH4gVYrpTuGgcGvxpkYkJsgVFUzVm4Ehitm7p%2BymFZ5SbhnTxIUTch7A%2BZ0EbOFMSWXK0yFV7OIYTcvy4Os74YHilLN1ov6wgrLk6dHEU4uDgmH%2F3jXjn6jWMGzX21uue%2FTUlc6d7g98qleGDPG%2FqoV2shUySx3&X-Amz-Signature=0b56252f709e135d6006a8b966c04f81d8e223ce81a82f1108c3237dd0d9e429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554CYAXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCKJAGK3%2FIv6Wf9sjFBNeHLPKxwncWlk%2B60SkGklT54gIgQFeceHp9jj21OEcvmBL12tyvHvUHObiEcq7P1reVmb8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG09WplHJ2Y3eZqbCircAy9RTW94JjJKGuV4fqk79fWGeV7whnbucQeo3QvfLDczuemh0sk%2B5RW2C7zEwKwQrJKGI7m21dbhSb8KsRe9MMw6yJE%2FZpEB7aS9%2Bo1zQ6P23GsKZGuQubqyAjfE281ngPJ6Fkj%2FT2GViYM6l4SoBKSGeZQdJsEdYEyj5b%2FfZYTIKu9UQBupe5IuHbtOCZawxXzvXNSmGTqzUCS%2BKewxaR5CX%2B%2Bi9C3%2Fkra7mA6H5xxUVQkyBdB2YGWHjSsmAAQknJohqkuH1EsV3mOlz354AFHw1gY3BFM4w2gfONzfJUSUDZAoF%2BpIoCWYO7Pff1XDUd2IeBet1nvdm7RlvM5zs3fdkeH0Y86ZIq8jhLSRURi%2FJzn7GKnx2lu9iZbRhLIXEseRv7LPmtziuA5bg4g4yEdnuXGCJeXv1wbY2J9Vyz1nAYNmd1vqi7Hyv2Czn1QwTKStJhVmUB1Qaf7F4hts2BYexUrl5aJCtq6qU0WITw3PjOdZ0U2BskmZegeGjuaM6yxBQ9S85zTpMmGH450l%2BJeErPiIVKyqEUP5acyiwe68g%2FrPCDxQcnk71%2B2nlcYGAKTZbY3t%2Fyl5IzS7%2B6dsWw21CVMfKRqfNHovlmHjPi%2FM1pKA4c14Oby5IDRIMKGqisoGOqUBMym1WMdGlgz7M1bc2BNeF5MMG98GEoLJQ0gmEqk5RbiIlzjq1c7JrttKg8C0BZH4gVYrpTuGgcGvxpkYkJsgVFUzVm4Ehitm7p%2BymFZ5SbhnTxIUTch7A%2BZ0EbOFMSWXK0yFV7OIYTcvy4Os74YHilLN1ov6wgrLk6dHEU4uDgmH%2F3jXjn6jWMGzX21uue%2FTUlc6d7g98qleGDPG%2FqoV2shUySx3&X-Amz-Signature=786b284a3d50ef8174b25a46040a7e09148402be0c0913ff43656fa7952fcbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

