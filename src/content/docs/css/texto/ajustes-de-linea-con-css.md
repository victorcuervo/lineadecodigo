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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVK77F6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSrXVgzu7zzUYxIofYVnP6T9su98lQa8s4mC4t09qkSAiBQlGHSeHDSoKJgn59CqdDK7u8UPR%2F%2B5IL46yLgbeG9HCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BmyOxF2vQ2BQGfA%2FKtwD%2FIwPn%2BzbvRQSD5hxSBZ1aDHExZ9i4n3vglllcBHwOEraymeACKBM7A5HSpprPboMR2kln35M8yOdh5jDIY4s9qFXaYFdK6gBUTzu9I1Apjk58Q0D2b940jE6m7P3VY7NDx3w3YNInDXa26%2BPr1PVAFF1d9S1S3SLMsvXtqVVgwznTk0lXRKwMHCZGF2RnHpXq%2F3GcPk0eIHpCr8Qugu%2F5ZG1QUMxeQvXMLIrfgLgL6voyX2mnqxZVKDJtctv49HjrLSEaOvmdC5eDHU%2FK4g%2FSqCU1DO%2BArQSkKhPLC6oVvBDm3IUyYr%2B9aVLRpLBVHfy%2BLVSwrcr7dQeCDdsl7VKRSkP33k9oH5bShd7qvTeVSn%2FQnwpeZOj5ZlYJ7yBhK%2Bmq5Lg%2BqpMNP6yM88qAR77gzuWMcB35VbsLvAOOrBsZirU0P0xhogf3AJs3MJYU8AAAXyZxkWgzZA7A0EFgUSGhi339UyUbxg58hjs248dwtlKUdmW8kyqbsNCD%2FHiN1vLmES1aT09FqXNcnD9A76xic0YAcDCKnlCQS9I%2BIn9z4hiQYnc9z6kRIhHC%2BYNaTwdQ3fLxgId5bcxVX1hXPCqgW4dsN1fKw7kke%2Fifa7U%2B8HKpcU1VmAiHdjzoH4wnaCLygY6pgHPVz3c6Cr4fxVm97MkOyGruFBP7a33vEZni6Dzn2Xz%2F%2Ftgo4yeQ%2BQdYA6lTNUz%2F3w74ojoeuIGYDyKC35smCLaauG%2Bpcs6sCVno2OsoZwMYa%2FiQJ5OgDKK5AMxNG940Nzcz0SGsrlPRHFlPmhOqW6Y7wPtmP8seTManoUlrlPAnKq6Syk9k9CxvJDnMp08uIBGTWER%2B0ASnci8HCDeOCisWXbRne1p&X-Amz-Signature=b785ff0b36863426bb56387d16babdf66791a9d449cb2bb6ecfef8560e69b37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVK77F6W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSrXVgzu7zzUYxIofYVnP6T9su98lQa8s4mC4t09qkSAiBQlGHSeHDSoKJgn59CqdDK7u8UPR%2F%2B5IL46yLgbeG9HCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BmyOxF2vQ2BQGfA%2FKtwD%2FIwPn%2BzbvRQSD5hxSBZ1aDHExZ9i4n3vglllcBHwOEraymeACKBM7A5HSpprPboMR2kln35M8yOdh5jDIY4s9qFXaYFdK6gBUTzu9I1Apjk58Q0D2b940jE6m7P3VY7NDx3w3YNInDXa26%2BPr1PVAFF1d9S1S3SLMsvXtqVVgwznTk0lXRKwMHCZGF2RnHpXq%2F3GcPk0eIHpCr8Qugu%2F5ZG1QUMxeQvXMLIrfgLgL6voyX2mnqxZVKDJtctv49HjrLSEaOvmdC5eDHU%2FK4g%2FSqCU1DO%2BArQSkKhPLC6oVvBDm3IUyYr%2B9aVLRpLBVHfy%2BLVSwrcr7dQeCDdsl7VKRSkP33k9oH5bShd7qvTeVSn%2FQnwpeZOj5ZlYJ7yBhK%2Bmq5Lg%2BqpMNP6yM88qAR77gzuWMcB35VbsLvAOOrBsZirU0P0xhogf3AJs3MJYU8AAAXyZxkWgzZA7A0EFgUSGhi339UyUbxg58hjs248dwtlKUdmW8kyqbsNCD%2FHiN1vLmES1aT09FqXNcnD9A76xic0YAcDCKnlCQS9I%2BIn9z4hiQYnc9z6kRIhHC%2BYNaTwdQ3fLxgId5bcxVX1hXPCqgW4dsN1fKw7kke%2Fifa7U%2B8HKpcU1VmAiHdjzoH4wnaCLygY6pgHPVz3c6Cr4fxVm97MkOyGruFBP7a33vEZni6Dzn2Xz%2F%2Ftgo4yeQ%2BQdYA6lTNUz%2F3w74ojoeuIGYDyKC35smCLaauG%2Bpcs6sCVno2OsoZwMYa%2FiQJ5OgDKK5AMxNG940Nzcz0SGsrlPRHFlPmhOqW6Y7wPtmP8seTManoUlrlPAnKq6Syk9k9CxvJDnMp08uIBGTWER%2B0ASnci8HCDeOCisWXbRne1p&X-Amz-Signature=f43fc326eb7360ba97f9ccdb344a13021c8d9ba8d93b31de93f40b28b9c8c3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

