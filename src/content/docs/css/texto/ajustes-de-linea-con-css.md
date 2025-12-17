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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QSSQCSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT7kCBBGeicPc7OPp%2BKDjVLDtS9oRa75dcwVr%2FiLAgVgIhAKRIAtYwtMHcT4prGjKpsoDM3PABkbhTzt3GQrx0RPMjKv8DCH8QABoMNjM3NDIzMTgzODA1Igxtxr%2FsqDKnqtdl9VQq3AOl%2FK9Tm5%2FzkWpdkRyAluwUq0SRl0Cocrm2trwMJI71WPiKff2o5Hiw44K5E1DdiLRz%2F4wlitpiQb1MDgxopvZwkHOgOB5fmAUQ%2F2w3m7cmXeK7p8%2BhRnsOauBIxfxmb%2FIWPyt%2Fo%2BdM44r5DkmmOFoaZtB6yp6UOYqOD6XEDRat8XJvIXjXQUBM8FCDdptph9TEaFssMnOGoGZ4aLDxvXYy%2BBD%2B1OHmOtd4xeFcsLrmQLmOPqM2pc2m%2FK7SVsfd%2FBmp7XnSomX7T0eFbDE9SPC5aVV%2BhtU0Y2GXlM182i7Bq39q5ePfyVvBRThDDlGcOWKI61yHcKHUwz%2BgAWjAXgCzgCIbRgEE775f7t9Leasf9JSY1OhElTG23Nar8T9JORMbcDQ%2FKaxWD1t3igfaIF%2FD3RH52T3y296isUdnly8asApwGU3HMdHiCH4QPPdLoP5GvgkiVXirBr0wFzvJveLXZ%2FmXE2IQrpY5fZ4Y0VzdE9KyYOn56oej1UDkNZpf45DwSHQVXoovHVwKVZiyrc%2FCww78AQ0BjlNUZ%2BZ8MBCaBfMT776%2Ff9gZv8y1jyUw4YKJUSi0VJ02BjIwK4%2Bo86lMPmtM68VLIgpfwKtmdbi231uYXNGqW9xP0xOTHDDC4YrKBjqkAf%2FS%2BinTE3yElaQcQ%2BhGpzHDFh4lMCffTjZ6lFKZ2AyUFWJD3AZ52f68fRNl0L%2FK8bZiRb%2BLWpfgQSNe6%2Bq47pHZonHpUZ8jcSEHpkK0giI1K13A5BD9mnJM3IsRLhtzCovYLLDLQ7Fcjw%2F712BOlHXCSGs%2BU8aMoQJiTrdarz1tYXPrXmV8L%2BhtsX5nUEV%2FFb7CiNpbe3Q6%2FbYBenpnedMcRT4z&X-Amz-Signature=e015a71f22464d4755d590245c181f5c21129ea153f45d92b09f15771a42af8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QSSQCSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT7kCBBGeicPc7OPp%2BKDjVLDtS9oRa75dcwVr%2FiLAgVgIhAKRIAtYwtMHcT4prGjKpsoDM3PABkbhTzt3GQrx0RPMjKv8DCH8QABoMNjM3NDIzMTgzODA1Igxtxr%2FsqDKnqtdl9VQq3AOl%2FK9Tm5%2FzkWpdkRyAluwUq0SRl0Cocrm2trwMJI71WPiKff2o5Hiw44K5E1DdiLRz%2F4wlitpiQb1MDgxopvZwkHOgOB5fmAUQ%2F2w3m7cmXeK7p8%2BhRnsOauBIxfxmb%2FIWPyt%2Fo%2BdM44r5DkmmOFoaZtB6yp6UOYqOD6XEDRat8XJvIXjXQUBM8FCDdptph9TEaFssMnOGoGZ4aLDxvXYy%2BBD%2B1OHmOtd4xeFcsLrmQLmOPqM2pc2m%2FK7SVsfd%2FBmp7XnSomX7T0eFbDE9SPC5aVV%2BhtU0Y2GXlM182i7Bq39q5ePfyVvBRThDDlGcOWKI61yHcKHUwz%2BgAWjAXgCzgCIbRgEE775f7t9Leasf9JSY1OhElTG23Nar8T9JORMbcDQ%2FKaxWD1t3igfaIF%2FD3RH52T3y296isUdnly8asApwGU3HMdHiCH4QPPdLoP5GvgkiVXirBr0wFzvJveLXZ%2FmXE2IQrpY5fZ4Y0VzdE9KyYOn56oej1UDkNZpf45DwSHQVXoovHVwKVZiyrc%2FCww78AQ0BjlNUZ%2BZ8MBCaBfMT776%2Ff9gZv8y1jyUw4YKJUSi0VJ02BjIwK4%2Bo86lMPmtM68VLIgpfwKtmdbi231uYXNGqW9xP0xOTHDDC4YrKBjqkAf%2FS%2BinTE3yElaQcQ%2BhGpzHDFh4lMCffTjZ6lFKZ2AyUFWJD3AZ52f68fRNl0L%2FK8bZiRb%2BLWpfgQSNe6%2Bq47pHZonHpUZ8jcSEHpkK0giI1K13A5BD9mnJM3IsRLhtzCovYLLDLQ7Fcjw%2F712BOlHXCSGs%2BU8aMoQJiTrdarz1tYXPrXmV8L%2BhtsX5nUEV%2FFb7CiNpbe3Q6%2FbYBenpnedMcRT4z&X-Amz-Signature=dbaa459086911bad4e24ac7a54ffe6daa38c07fbdb6f914b5e3d9c7dbcc3d33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

