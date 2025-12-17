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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPDCJOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE%2FgVBNMQo6%2BKqP6ad2Cl31O67m4LU%2FNz%2FJGo1fbrQcAiEAhqJr2M6QPLfwIJ1ccEGSaZcFC9ZZ1R1N%2F0lbUtCQoi4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5HPUEZgM%2F1xC5OvyrcA9KDX07YVxwwDP1DbFGwj5uatafs59qC%2BRyh4pXWYa7NebCVkRZtdHbe2xVOlRoytEeNHc6GGZk8XRF2%2B25X2IHNRyueX1f0ZdWv3j4Lg2PZ%2FrwNTU8Sh3hen%2FyLdMGca4%2BRaCKCqKIDiwAydiaQbMr4wnI6kRPnhwFWJGEOpTicu%2B9czJb1UvbqtZ4n1o3KIHyEU%2B2nQcG0jxOgG6cFFADPGtl5kAAMrcr%2BuA8%2BirPEMZKGnSMc7%2FMVjAaHyIPSxxqQqNsSAk9Gq5oQVuVjlGyvFZ7mHwVrMSROPizDrDwlFJIoqbx4Yl55qfNcu0AjDvSwSd1SV7zOlHg6g%2F7nMnEpr91i1yvn86r30RQc2kz1ufaqKXV62wLB0kFRXx3%2FtdDxRPbQA1y9UcgYCgYnYEX%2Buu%2BctVs5i4qoCblXbxUPkfRICci4Mu84IMB1HEuBuC7tysdCLNnIEvphPZjG790889s01sdP%2B07N1lxn3QDIzfVjncOedJOQg1Tk1WmByGpJdmsY1jfqKR4%2FkLzHI2KIVhDBHtOGIXXKK9%2BPkmclF8zcrQ9RSonchZXJ5Ca8VyTWzWYC6WpddrMB6jOiQ%2FDx7eTvFp9bj6mmgt37OirAYCd7RsFVb%2BzarEcJMMuei8oGOqUBqQn0etCuc5Ln3q4yAAKEley13gh0Z8Q3OKLpmsO%2B5i4xqQjzxJkk32cBxb4D6I0p%2Btur%2FVXgWYImMBaO09LsJ3Pa9h3QJoVhSAceXaKmviRM2QWAuuNJgVuNqxWzoluBIT43xrpXtMRAGmisBZ8ncCw6sT%2FVRGQCUE4bShFswMmp%2B5%2F8yLxuWUPIGyhiHHUz7JywwSEGEBDvEQP1h4EM%2FPKS8Fxt&X-Amz-Signature=a99a5ff8650fc00312c17535fef4873a60e9b65876ab58c301463e2a2efd676c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGPDCJOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHE%2FgVBNMQo6%2BKqP6ad2Cl31O67m4LU%2FNz%2FJGo1fbrQcAiEAhqJr2M6QPLfwIJ1ccEGSaZcFC9ZZ1R1N%2F0lbUtCQoi4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5HPUEZgM%2F1xC5OvyrcA9KDX07YVxwwDP1DbFGwj5uatafs59qC%2BRyh4pXWYa7NebCVkRZtdHbe2xVOlRoytEeNHc6GGZk8XRF2%2B25X2IHNRyueX1f0ZdWv3j4Lg2PZ%2FrwNTU8Sh3hen%2FyLdMGca4%2BRaCKCqKIDiwAydiaQbMr4wnI6kRPnhwFWJGEOpTicu%2B9czJb1UvbqtZ4n1o3KIHyEU%2B2nQcG0jxOgG6cFFADPGtl5kAAMrcr%2BuA8%2BirPEMZKGnSMc7%2FMVjAaHyIPSxxqQqNsSAk9Gq5oQVuVjlGyvFZ7mHwVrMSROPizDrDwlFJIoqbx4Yl55qfNcu0AjDvSwSd1SV7zOlHg6g%2F7nMnEpr91i1yvn86r30RQc2kz1ufaqKXV62wLB0kFRXx3%2FtdDxRPbQA1y9UcgYCgYnYEX%2Buu%2BctVs5i4qoCblXbxUPkfRICci4Mu84IMB1HEuBuC7tysdCLNnIEvphPZjG790889s01sdP%2B07N1lxn3QDIzfVjncOedJOQg1Tk1WmByGpJdmsY1jfqKR4%2FkLzHI2KIVhDBHtOGIXXKK9%2BPkmclF8zcrQ9RSonchZXJ5Ca8VyTWzWYC6WpddrMB6jOiQ%2FDx7eTvFp9bj6mmgt37OirAYCd7RsFVb%2BzarEcJMMuei8oGOqUBqQn0etCuc5Ln3q4yAAKEley13gh0Z8Q3OKLpmsO%2B5i4xqQjzxJkk32cBxb4D6I0p%2Btur%2FVXgWYImMBaO09LsJ3Pa9h3QJoVhSAceXaKmviRM2QWAuuNJgVuNqxWzoluBIT43xrpXtMRAGmisBZ8ncCw6sT%2FVRGQCUE4bShFswMmp%2B5%2F8yLxuWUPIGyhiHHUz7JywwSEGEBDvEQP1h4EM%2FPKS8Fxt&X-Amz-Signature=efcd9f195f47765293f2c0c64c062c1cb55785951a073fbf7b1ff8d3c28556cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

