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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6OJHM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8ICfFZHtUIByePo6nOwAlgbu0Bh3fv5hMjJBagbZduAiAr%2B2F9GsBjo4AErVkocD%2BtaM3TN%2FVytNMhW9VlYCdgLCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgXqIcJ9ouM3Kcyd0KtwDysXwIkg%2BVt2aeKg14S6O6%2FTPvngr3jEzYR71%2FNhbdftcS%2F9GnDzjaMAxrAGfFWDGhGBD2YNacDdYk%2BJXlTKLCdOZLnlnIb1DaifWSES%2BEaIWAU5XsPgSBRTVMx7asrBG5lQMoubTdVAoXTO9hZQ8%2F5FT0MQ%2FuCZCWJYAveD8rofS5TiYU17ChdV8MhtOjkQXQKQYwSarQHVl1OCbwlbrrzPEHLZiXRg43QZ3C48%2FKwuaCdg2jRWSDvng3qE%2BRjnBJ0uKtbA8113FHfPr9wnkb90dCuHRzjuaePvhvYeEtwmCdArSZxJUQXU3IUwN90KJn7GlG13PDGxjzQqDoX25TDPcyBTEFGyJfW4XZRF%2FZKhUCUKkn1Cl6DExhtrsrJZeWa9N5BdUh1fj7mz0SUm8PGCNmIrKN1fH8oscuVAaarAMdXW21JI3yIFvIqwKnauijXBaC82zV6z04Oc3ATdIwISDQakbAiy8XBmDkRHYTktBEtpEX6bq82H8Jzp7Pdf2c7EE4G6TC4DGNcqyeOuCMZpPLkLBQNeMhuvTuaPDMcZufOsTRFGTfq5fN1g%2Bhq%2FBOhIgpSX7ZnVbiWJkf5pitagXh0LJEVO98RC%2F43TRMsDYcZmtaXNAxkOQIIwwvM6IygY6pgH%2BlhsF1V3UfLQos8%2FojvfyGI3bCPZ7JDQyarVsGxTO%2BkRRyPFUdUzauokihsH2fJbhq7V8Kw7C64CvVrtFucVfkLuIjQPib%2FIouvYmlpJ3bCA772eQXuIUParjFdcCsUluRhqnkk6%2BKlNoYr5IvitHCMCbm46wt4ZgbcN1dIBpj%2Bqqtims1Z1yvSXjIO%2FyJ%2FqmIdjpHtrpzgmty2xLQ0PF4bgziWgc&X-Amz-Signature=e40f8c5dbcb188766aeb8fcea376952f20cd1e4790bd36792ffd40213e398eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6OJHM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8ICfFZHtUIByePo6nOwAlgbu0Bh3fv5hMjJBagbZduAiAr%2B2F9GsBjo4AErVkocD%2BtaM3TN%2FVytNMhW9VlYCdgLCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgXqIcJ9ouM3Kcyd0KtwDysXwIkg%2BVt2aeKg14S6O6%2FTPvngr3jEzYR71%2FNhbdftcS%2F9GnDzjaMAxrAGfFWDGhGBD2YNacDdYk%2BJXlTKLCdOZLnlnIb1DaifWSES%2BEaIWAU5XsPgSBRTVMx7asrBG5lQMoubTdVAoXTO9hZQ8%2F5FT0MQ%2FuCZCWJYAveD8rofS5TiYU17ChdV8MhtOjkQXQKQYwSarQHVl1OCbwlbrrzPEHLZiXRg43QZ3C48%2FKwuaCdg2jRWSDvng3qE%2BRjnBJ0uKtbA8113FHfPr9wnkb90dCuHRzjuaePvhvYeEtwmCdArSZxJUQXU3IUwN90KJn7GlG13PDGxjzQqDoX25TDPcyBTEFGyJfW4XZRF%2FZKhUCUKkn1Cl6DExhtrsrJZeWa9N5BdUh1fj7mz0SUm8PGCNmIrKN1fH8oscuVAaarAMdXW21JI3yIFvIqwKnauijXBaC82zV6z04Oc3ATdIwISDQakbAiy8XBmDkRHYTktBEtpEX6bq82H8Jzp7Pdf2c7EE4G6TC4DGNcqyeOuCMZpPLkLBQNeMhuvTuaPDMcZufOsTRFGTfq5fN1g%2Bhq%2FBOhIgpSX7ZnVbiWJkf5pitagXh0LJEVO98RC%2F43TRMsDYcZmtaXNAxkOQIIwwvM6IygY6pgH%2BlhsF1V3UfLQos8%2FojvfyGI3bCPZ7JDQyarVsGxTO%2BkRRyPFUdUzauokihsH2fJbhq7V8Kw7C64CvVrtFucVfkLuIjQPib%2FIouvYmlpJ3bCA772eQXuIUParjFdcCsUluRhqnkk6%2BKlNoYr5IvitHCMCbm46wt4ZgbcN1dIBpj%2Bqqtims1Z1yvSXjIO%2FyJ%2FqmIdjpHtrpzgmty2xLQ0PF4bgziWgc&X-Amz-Signature=2900e50b7863ab9d25f0c816fb99129422e208b7f61c1f74cdcb79854f6db04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

