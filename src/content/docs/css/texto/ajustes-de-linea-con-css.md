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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI3SQTG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH16Djnej6dsiGRKPbkdY5dq5admYPkcAMgdTgsNGi84AiBslU0r6c9oNzMm%2FHsUlYCriBef7wYzOtYcuEsKxqIEICr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMsjX8uH0nn%2FhWvMy%2BKtwDHRnbBQ57rlD7PqodYEO9VgmuYB0KsQIqs3UOH3SYSv7gaO4kFxbO3EaWTn2NA56Ss%2Ftk3RW8gXXEqdenmtUyx8dM0YU6AbHVCkqTD68D%2BxQrz3%2FrM7NcwiVAiMIiprC1Gs57JtWdIoi8J1pn%2FlchSVD0muFbVlhqP36Z85nYim8cvs2WSh7zhmglAwdArEoB2wt7LsGPuxt2FW9f3beU8uuqhPektFdFZlbbLO0RS7eCFPdjmAAkdlMZ4XuHFvtrBHFYU4ossHQwcXilGl%2BJriNKcFSLAdLD7eu%2Bh2sI1lVaA1LI2SmTGG2%2FM7g%2BwmeCmZLdn5pzgKbILXoFKMLK5Uh0fpTFRoIjdrmp4wMB2hDKTiQGopExQEWuy78%2B8WDLBLdGkUTFAjLyZjVOqTkbSavbodKsx%2F5RRG9jIR9cdPainby%2Bg37aUPg43qXSldvyVUBaFBKxob3tcx2A2BCvvRqJqLb7%2FOsTnSFnyDH%2B%2BrIy%2BcsTpuUplzcArJhp2b%2FK0B7HSZhMaFLYavUwYcFr%2BObHJqwwkyZUY%2BfmubPgAC%2FQDo8I5O5Q3EFsmf1%2BPNvO%2BpjqJdSg8PPqrkYjHtY7k%2BpGrb%2BrWmJHiIPQUs4t2z2%2F4hUd%2FjcAItJpRfwwy52JygY6pgFsIaRyc%2Bj3ba%2FqPjobYhTnOBX9li2yCibSKZSq5hEO53ou2YWMeS3wjv9lADPYhBF80HjtglH2WO5c%2BdKHgtgVrHSJvxtFY327d9xlOxv6ajT6HYuFFJcDBncZ6%2BhbCns9228N8QCrrk44we0Wdt0q0EYO4tYtPzZSFzFWkhC9EboMwZsHAXPYviCUQPaJ51jfXH4XA3CIeGDVFYxOZ2sQEdIbJTY0&X-Amz-Signature=e74709a9e3d93f5dc183e0165ff9d7b8ff6cff4938f7ccc4f51be1770d84d697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI3SQTG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH16Djnej6dsiGRKPbkdY5dq5admYPkcAMgdTgsNGi84AiBslU0r6c9oNzMm%2FHsUlYCriBef7wYzOtYcuEsKxqIEICr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMsjX8uH0nn%2FhWvMy%2BKtwDHRnbBQ57rlD7PqodYEO9VgmuYB0KsQIqs3UOH3SYSv7gaO4kFxbO3EaWTn2NA56Ss%2Ftk3RW8gXXEqdenmtUyx8dM0YU6AbHVCkqTD68D%2BxQrz3%2FrM7NcwiVAiMIiprC1Gs57JtWdIoi8J1pn%2FlchSVD0muFbVlhqP36Z85nYim8cvs2WSh7zhmglAwdArEoB2wt7LsGPuxt2FW9f3beU8uuqhPektFdFZlbbLO0RS7eCFPdjmAAkdlMZ4XuHFvtrBHFYU4ossHQwcXilGl%2BJriNKcFSLAdLD7eu%2Bh2sI1lVaA1LI2SmTGG2%2FM7g%2BwmeCmZLdn5pzgKbILXoFKMLK5Uh0fpTFRoIjdrmp4wMB2hDKTiQGopExQEWuy78%2B8WDLBLdGkUTFAjLyZjVOqTkbSavbodKsx%2F5RRG9jIR9cdPainby%2Bg37aUPg43qXSldvyVUBaFBKxob3tcx2A2BCvvRqJqLb7%2FOsTnSFnyDH%2B%2BrIy%2BcsTpuUplzcArJhp2b%2FK0B7HSZhMaFLYavUwYcFr%2BObHJqwwkyZUY%2BfmubPgAC%2FQDo8I5O5Q3EFsmf1%2BPNvO%2BpjqJdSg8PPqrkYjHtY7k%2BpGrb%2BrWmJHiIPQUs4t2z2%2F4hUd%2FjcAItJpRfwwy52JygY6pgFsIaRyc%2Bj3ba%2FqPjobYhTnOBX9li2yCibSKZSq5hEO53ou2YWMeS3wjv9lADPYhBF80HjtglH2WO5c%2BdKHgtgVrHSJvxtFY327d9xlOxv6ajT6HYuFFJcDBncZ6%2BhbCns9228N8QCrrk44we0Wdt0q0EYO4tYtPzZSFzFWkhC9EboMwZsHAXPYviCUQPaJ51jfXH4XA3CIeGDVFYxOZ2sQEdIbJTY0&X-Amz-Signature=9f551330eaab5ebb514359bfe245531c76a64f719f10d4fd8257588ca18b9133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

