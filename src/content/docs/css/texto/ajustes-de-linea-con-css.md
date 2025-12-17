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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5PQ35R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLvHHC9BfShFrp0w9twmsFB%2FsWyTwx4SovoselGQ5yXwIgTptLk%2FBqcjxs1JRUEjFlPpXSH48jc96rVzVPuAPC2jYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZCoTxZdtu0YuHYkircAzPMv3dCDfcNzaXbuscoycFG0VABPrdIq7xRw9p1ydrBJeRjcOyB4cVgKScgTyXC6yMije088TwpV%2BCfUY%2F439%2BLYtUXcM82vJR7dDVQre0yewyS2ogl7rGTCdqfKI6e7aDPIVXn3DAvq35Ra4fKcKn7eweQ86DdSIow%2BQrvFg7yQ6aaGqPPX9%2B6X7XsVD79XQPffSihsLWt3l5G1YA7LfuIvycHJ0vH4Rzu2uM7QkBJ48K5ik%2FHBAeTPq%2BVNVToM4UF5UcVGNLsIM9X6ohcsc%2BXvz6XaVMXmmrYepRlRgA8EeD7ktY5RU0J0vQ6v5vIQAliD%2FI8FYc9C3pQasreiBg05D0Vjxzl9CM734oNiC6%2FtjlDuStVqGIOwl6vlE5NL5GpOVjNObIRZRtRkuQb0uewj9bse14p24ozWzcV5PdjaxpRjcClFtgM3ZdHBECxMyb0OpqmyJNF1fJaxnlHcQ80DWvvTWddvtGC9XOPlFpuiO4ajPzt2qF%2Fa%2FtF1gYkeI28UP0W6vTtq%2FuNMKCBmhpwIM5HGGDbtldJ3OnKzjDa3Ss1bgjPdxfisVl%2FgBNsfIBkUsfPBXcg3SbKVJXWp6xGrS9zAqph4OR8uEFEua9ujAyVsVSAa%2F8OjBP0ML%2BujMoGOqUBjdHoNiRZNFx7gBV2VI5ED%2BbSKP7FgmlQT4yC6%2BZPfaUW5wpFkm86dQkiLdMHEFoP5IGELCahAbJOGpvzFIIk%2FoowwUyRMFGftuAQ0fg2QcQxC%2B0N6b7Im5KtOYQzCr1re3gz2qLgtquMK6itrRh2ru0k%2Fzh2TUZ0s4DgwMTlCACOpqD%2BCcbVH30VrBqX8qtLKcXQD25QeiZ6QJmF0eR5i1yytxBG&X-Amz-Signature=ceec1c97c1d49651c090ddb624fab38cdf4d6b2cfe431c1d22f14e10386d682c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5PQ35R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLvHHC9BfShFrp0w9twmsFB%2FsWyTwx4SovoselGQ5yXwIgTptLk%2FBqcjxs1JRUEjFlPpXSH48jc96rVzVPuAPC2jYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZCoTxZdtu0YuHYkircAzPMv3dCDfcNzaXbuscoycFG0VABPrdIq7xRw9p1ydrBJeRjcOyB4cVgKScgTyXC6yMije088TwpV%2BCfUY%2F439%2BLYtUXcM82vJR7dDVQre0yewyS2ogl7rGTCdqfKI6e7aDPIVXn3DAvq35Ra4fKcKn7eweQ86DdSIow%2BQrvFg7yQ6aaGqPPX9%2B6X7XsVD79XQPffSihsLWt3l5G1YA7LfuIvycHJ0vH4Rzu2uM7QkBJ48K5ik%2FHBAeTPq%2BVNVToM4UF5UcVGNLsIM9X6ohcsc%2BXvz6XaVMXmmrYepRlRgA8EeD7ktY5RU0J0vQ6v5vIQAliD%2FI8FYc9C3pQasreiBg05D0Vjxzl9CM734oNiC6%2FtjlDuStVqGIOwl6vlE5NL5GpOVjNObIRZRtRkuQb0uewj9bse14p24ozWzcV5PdjaxpRjcClFtgM3ZdHBECxMyb0OpqmyJNF1fJaxnlHcQ80DWvvTWddvtGC9XOPlFpuiO4ajPzt2qF%2Fa%2FtF1gYkeI28UP0W6vTtq%2FuNMKCBmhpwIM5HGGDbtldJ3OnKzjDa3Ss1bgjPdxfisVl%2FgBNsfIBkUsfPBXcg3SbKVJXWp6xGrS9zAqph4OR8uEFEua9ujAyVsVSAa%2F8OjBP0ML%2BujMoGOqUBjdHoNiRZNFx7gBV2VI5ED%2BbSKP7FgmlQT4yC6%2BZPfaUW5wpFkm86dQkiLdMHEFoP5IGELCahAbJOGpvzFIIk%2FoowwUyRMFGftuAQ0fg2QcQxC%2B0N6b7Im5KtOYQzCr1re3gz2qLgtquMK6itrRh2ru0k%2Fzh2TUZ0s4DgwMTlCACOpqD%2BCcbVH30VrBqX8qtLKcXQD25QeiZ6QJmF0eR5i1yytxBG&X-Amz-Signature=786637a4f89013ec2cbaab9204d227c51af2d0a24cf2fa3bad05f3b633cd3a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

