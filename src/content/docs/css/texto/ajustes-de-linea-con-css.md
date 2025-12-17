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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6G6MVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyZnOqFb4PYE76u%2FRYliZCanWvcLU1dfOGigRnHGdE4AiEA287g%2FY4ENUaMeGAwisKSOjk9O%2Fa%2Bz1ixp2wcuR8%2BzXwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP%2FZ11KW4JvsstD8dircAwK8nbuHmXkWPC7mCSORLROyZ8P%2FeVtcQh5XlF0tjtKjogygxCJ%2FHL6SpoXmS16Yy0cTjlOdknQRdr3jQXbrLomp0IZUlaz3PUxFImUEd%2FsRciYALyKjxqWuYWgwjVWI3q4Xmwnwho8XuQchFDDtcjhWABeipGh8tKTLNqrBNwkqnnVe5PTMeQT84%2Bd7nSOdhtfDoBKSVcea58Y6O606XBfeAWMKdPCCd0LzoUs9rI3mjjXFuk0DYjqw%2FPMqTntSaKQ%2FuFglN3Up00iMfZ0t5MZDNq%2FT6zFLPP%2FLbsS%2FfxbIjY5AjvDo3qaccoBDKajmLMG7nGThSaF7CfCAaiYz7QDplAjEfyz1%2BzHGrOgNxSW4Ceu6eyViFk7iSt6I561QtDaxsdLOy%2BWyvkIcoWtwsUpfQJj2n9FqFUBKGl9aeS%2Fn0s8TBFvmLiKpJpVqFi2e%2BbCnw5yiYD5s%2FPZxDUER6c6tM%2BJjF%2FfwCrBgEPsgFAe3R%2BthT%2BXp2kUQueYAYK7RLhvpO7otaZpTESBrv1kUJWLssQBx4pdKTx%2Fb4traCb60%2BZ4k84HzznU05cgxOSkbOE6pBjUaw4tDqtgdjI6BdZOVnNURHdMlyJ7yOFGl2DiEKlufROgjuYriReQuMI%2BrisoGOqUBEgfvNc4t0s%2B0aKmsW24CKxglCtEtePF3tmuWu7SILGboeUwsXwPP9Uehoxw6PkZnFns3UnEF57veusHoqmWzNWbUSoudNAutf2%2FRztOUw5dcGRtiQc6liWCw84e69miUQEsbQtAwXEoy6I1oakUIwTl3ydlyZOMVdvo5xNPRq7OYYRZzdTLzXY2anrlQHozO70pPGHD7%2F3i%2FuUF5wTuRAdfNJkpw&X-Amz-Signature=60c6a09e461bb5cbddc98f4aa574cefd87a6468897d974ee2e705da7fbd8fe29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY6G6MVP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyZnOqFb4PYE76u%2FRYliZCanWvcLU1dfOGigRnHGdE4AiEA287g%2FY4ENUaMeGAwisKSOjk9O%2Fa%2Bz1ixp2wcuR8%2BzXwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP%2FZ11KW4JvsstD8dircAwK8nbuHmXkWPC7mCSORLROyZ8P%2FeVtcQh5XlF0tjtKjogygxCJ%2FHL6SpoXmS16Yy0cTjlOdknQRdr3jQXbrLomp0IZUlaz3PUxFImUEd%2FsRciYALyKjxqWuYWgwjVWI3q4Xmwnwho8XuQchFDDtcjhWABeipGh8tKTLNqrBNwkqnnVe5PTMeQT84%2Bd7nSOdhtfDoBKSVcea58Y6O606XBfeAWMKdPCCd0LzoUs9rI3mjjXFuk0DYjqw%2FPMqTntSaKQ%2FuFglN3Up00iMfZ0t5MZDNq%2FT6zFLPP%2FLbsS%2FfxbIjY5AjvDo3qaccoBDKajmLMG7nGThSaF7CfCAaiYz7QDplAjEfyz1%2BzHGrOgNxSW4Ceu6eyViFk7iSt6I561QtDaxsdLOy%2BWyvkIcoWtwsUpfQJj2n9FqFUBKGl9aeS%2Fn0s8TBFvmLiKpJpVqFi2e%2BbCnw5yiYD5s%2FPZxDUER6c6tM%2BJjF%2FfwCrBgEPsgFAe3R%2BthT%2BXp2kUQueYAYK7RLhvpO7otaZpTESBrv1kUJWLssQBx4pdKTx%2Fb4traCb60%2BZ4k84HzznU05cgxOSkbOE6pBjUaw4tDqtgdjI6BdZOVnNURHdMlyJ7yOFGl2DiEKlufROgjuYriReQuMI%2BrisoGOqUBEgfvNc4t0s%2B0aKmsW24CKxglCtEtePF3tmuWu7SILGboeUwsXwPP9Uehoxw6PkZnFns3UnEF57veusHoqmWzNWbUSoudNAutf2%2FRztOUw5dcGRtiQc6liWCw84e69miUQEsbQtAwXEoy6I1oakUIwTl3ydlyZOMVdvo5xNPRq7OYYRZzdTLzXY2anrlQHozO70pPGHD7%2F3i%2FuUF5wTuRAdfNJkpw&X-Amz-Signature=3421e7e2e50a6ef4a87384150bb56c461a4f7c33bdf356c778f6bcd0151ab063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

