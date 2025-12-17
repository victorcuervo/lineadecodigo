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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKMLDAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2djvka769mdtQaIOi%2Fv0f4aS75DdI5UTGc5zykiZ2gIhAMnDst4twaKIr7hriB3xtFJ3DzgII5lEfki%2Fe0%2F3m%2FPmKv8DCHUQABoMNjM3NDIzMTgzODA1IgwxZVtApcdMAbw5rgcq3AP2Yyr%2BOMN7zjmC1lBEG8Pvzh7a0KTn1qBcKwYupMPWE9LBpNCRhHyRGP3ZsbEZ2rHihFupDS3KXLtjSyBZa18yh13ulkT3%2FNDhjZi56RyluO5%2BZcvL7GevrqmXdii7ZXs806l6uOmowZYljXCsstODjAtpzPYWm4pOptOp7Qw6ot6j6j01Q8dml2MF7T5OJ0inql1brJGr8uVZSwzUg9gpDT%2FrDcZRznDX6TNHqn1XPpFFJGRHhAu8ikpwQlHTX5OeerK9rT6QK%2BxiOybVVdehXhMK6vcXumGyavmvYLnFbml0dJ6vZgouCHCENYVDfJGHQECjTgMSmpP9oFKZBIB%2F7Z5ZQcU%2BYqvMk8Qe78adzXbLrgx6UxLxPLr5SdZRSWwqSFgZWL7rYa0P%2FFYY768SDATuiLli1BFyO4IWwr%2B9MFF%2FY9OOwBzuJU2i563o6wwq5lUHHcjBYX%2Btjlwjg1GEGKu32PwCXJgGXABYjwqJawRd47iwKOlLX671fhZB28kHRI3C2V3SEMSuV%2F7zzZVb%2BlgqNP6BFljEQSIlr7thYGx7d7zDJ8Rll4bB47VOcm0WBhXACz1itakRAWHrOX915p1rsg6Erg3ieVq8BfWtnQSkwKL3sB9v4Vh2ezC0zojKBjqkAdeHMBOmI5OEgmNPNhD9AFdC8m9FV90OrYBBt%2BxynMWyN%2BP414xL9Xltn690WL81sA85ohxbaUrlR2B3k%2FReT0m%2Bf%2FTfT8K7QM8uFaLVdEIozn8RBVa8Drm8ktaxhpA%2FcCl%2Fr2a%2F97%2BGr6CIjp3EIif%2BxzujnYSs80q0kVYqmyYkw638exSkhIYdNxiWMaNcRbo2teGa%2BQMv%2Bfy%2BQ3dkmJcajnrS&X-Amz-Signature=31f00e611664091b553974579872b10f38a7cfd6f02292b8bbff0a5496fc4808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKMLDAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz2djvka769mdtQaIOi%2Fv0f4aS75DdI5UTGc5zykiZ2gIhAMnDst4twaKIr7hriB3xtFJ3DzgII5lEfki%2Fe0%2F3m%2FPmKv8DCHUQABoMNjM3NDIzMTgzODA1IgwxZVtApcdMAbw5rgcq3AP2Yyr%2BOMN7zjmC1lBEG8Pvzh7a0KTn1qBcKwYupMPWE9LBpNCRhHyRGP3ZsbEZ2rHihFupDS3KXLtjSyBZa18yh13ulkT3%2FNDhjZi56RyluO5%2BZcvL7GevrqmXdii7ZXs806l6uOmowZYljXCsstODjAtpzPYWm4pOptOp7Qw6ot6j6j01Q8dml2MF7T5OJ0inql1brJGr8uVZSwzUg9gpDT%2FrDcZRznDX6TNHqn1XPpFFJGRHhAu8ikpwQlHTX5OeerK9rT6QK%2BxiOybVVdehXhMK6vcXumGyavmvYLnFbml0dJ6vZgouCHCENYVDfJGHQECjTgMSmpP9oFKZBIB%2F7Z5ZQcU%2BYqvMk8Qe78adzXbLrgx6UxLxPLr5SdZRSWwqSFgZWL7rYa0P%2FFYY768SDATuiLli1BFyO4IWwr%2B9MFF%2FY9OOwBzuJU2i563o6wwq5lUHHcjBYX%2Btjlwjg1GEGKu32PwCXJgGXABYjwqJawRd47iwKOlLX671fhZB28kHRI3C2V3SEMSuV%2F7zzZVb%2BlgqNP6BFljEQSIlr7thYGx7d7zDJ8Rll4bB47VOcm0WBhXACz1itakRAWHrOX915p1rsg6Erg3ieVq8BfWtnQSkwKL3sB9v4Vh2ezC0zojKBjqkAdeHMBOmI5OEgmNPNhD9AFdC8m9FV90OrYBBt%2BxynMWyN%2BP414xL9Xltn690WL81sA85ohxbaUrlR2B3k%2FReT0m%2Bf%2FTfT8K7QM8uFaLVdEIozn8RBVa8Drm8ktaxhpA%2FcCl%2Fr2a%2F97%2BGr6CIjp3EIif%2BxzujnYSs80q0kVYqmyYkw638exSkhIYdNxiWMaNcRbo2teGa%2BQMv%2Bfy%2BQ3dkmJcajnrS&X-Amz-Signature=c87385d23cc3a59c7369910d95b79c2a580f01b17a6f13304a962e3fd8a0486d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

