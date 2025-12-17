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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624V6WLHM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3r%2B97gHhXxSLH5Qx2GWx2coiuplztrr6Pj9PxPSYigAiEA%2BE8yx8RkBMC6uk4kIhx20q9M5b%2FZw3yHEd62cvVDdiAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKUHbWVvaMkldL8xIyrcA2UCk%2B5yGAx%2Fezph45Jr0NKSL0LgUp5TmI9pIPBBwCzoH839Sj0p30qF6kwOUiy9hEM%2BPX6KOOdQPqzujDWXFMWY1nxUZKSOS7QWxgMUP1YU7PXi6iQj6iwXHLvw0Bmh2i6EPjeRMIo1gQce%2Fq%2BPEVEq8kP5%2B8yIz5%2F4081YA6Vd3Sv3S%2Bdcmm2im5WbGiDEkF72BgAgVqb6pdbLJ44ZGFKwUg5%2B%2BxXLHv03PacHPDfIvpZYy0%2FJt41g2gLCKIfhRGWk3n7dorWPZUpRTpTNH5aH2X57vc5MG9OizzNCPus1Gv%2BjS0HNwvtGHIS5fdQ%2FrHK1RqI9wZgvAXFF1ZAZ5TIt8Yy3HWDuWfqd0C2l2mi%2FygEBEGADTQj2%2FdCSbzG6vqsTriIHNJKUAqU23jIg7sqqplcZYJDhbL5nSEZ%2BaLn9pjsQOllZFjLeG2gQfuwc8IULYHvI7rgHC3c62H30yIwwcpi59Xvm3yW%2F7iugq4Qn5It%2FEDeTmwTvrm3Y%2BaadgzbyeAWSZUOqWQK8QEqkEKi9Sv2V8qJah9hBfHpmOOIsA67aajJ0NbMS9nLvW3fwyEdccZF9roiIdiZSFWML7Nq3ZbTGzbMMtXj7erZSIVdgO3R3b1%2BP7pRCtZ1BMM3hisoGOqUBNej2Bnw5kWupKswa0I00c53DVvSx0SUIuKUBGXy3U80ojUEWT46m%2BBKOh%2F%2BAVlTp3OsvBr3OoF6rTPtmFP9uIbldyLvzP0aeubG%2BXggF9egCydn8HpHHa5ykFwyTYvt2Oi1%2FvAkfFhIF0UZTGoAAvB0FtWcc8eGgX0ENEvkS4GkqZTCQ0D5eJ6ByTGZLvFgRg97EW55dnbDKXrA5PEYPD5nffCCO&X-Amz-Signature=7f9d5bf8bdd358208b4127cb853a8f8a10cb1efebf729093953669455b6297a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624V6WLHM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3r%2B97gHhXxSLH5Qx2GWx2coiuplztrr6Pj9PxPSYigAiEA%2BE8yx8RkBMC6uk4kIhx20q9M5b%2FZw3yHEd62cvVDdiAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKUHbWVvaMkldL8xIyrcA2UCk%2B5yGAx%2Fezph45Jr0NKSL0LgUp5TmI9pIPBBwCzoH839Sj0p30qF6kwOUiy9hEM%2BPX6KOOdQPqzujDWXFMWY1nxUZKSOS7QWxgMUP1YU7PXi6iQj6iwXHLvw0Bmh2i6EPjeRMIo1gQce%2Fq%2BPEVEq8kP5%2B8yIz5%2F4081YA6Vd3Sv3S%2Bdcmm2im5WbGiDEkF72BgAgVqb6pdbLJ44ZGFKwUg5%2B%2BxXLHv03PacHPDfIvpZYy0%2FJt41g2gLCKIfhRGWk3n7dorWPZUpRTpTNH5aH2X57vc5MG9OizzNCPus1Gv%2BjS0HNwvtGHIS5fdQ%2FrHK1RqI9wZgvAXFF1ZAZ5TIt8Yy3HWDuWfqd0C2l2mi%2FygEBEGADTQj2%2FdCSbzG6vqsTriIHNJKUAqU23jIg7sqqplcZYJDhbL5nSEZ%2BaLn9pjsQOllZFjLeG2gQfuwc8IULYHvI7rgHC3c62H30yIwwcpi59Xvm3yW%2F7iugq4Qn5It%2FEDeTmwTvrm3Y%2BaadgzbyeAWSZUOqWQK8QEqkEKi9Sv2V8qJah9hBfHpmOOIsA67aajJ0NbMS9nLvW3fwyEdccZF9roiIdiZSFWML7Nq3ZbTGzbMMtXj7erZSIVdgO3R3b1%2BP7pRCtZ1BMM3hisoGOqUBNej2Bnw5kWupKswa0I00c53DVvSx0SUIuKUBGXy3U80ojUEWT46m%2BBKOh%2F%2BAVlTp3OsvBr3OoF6rTPtmFP9uIbldyLvzP0aeubG%2BXggF9egCydn8HpHHa5ykFwyTYvt2Oi1%2FvAkfFhIF0UZTGoAAvB0FtWcc8eGgX0ENEvkS4GkqZTCQ0D5eJ6ByTGZLvFgRg97EW55dnbDKXrA5PEYPD5nffCCO&X-Amz-Signature=684445433793962abfa7b68c2bb116d0934624fc7ae6039fd80f105de626b018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

