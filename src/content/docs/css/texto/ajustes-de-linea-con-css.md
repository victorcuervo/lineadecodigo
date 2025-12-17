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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LGVUIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfroD5qCeaToGbvPYdTd5P%2FzFutok0Zu%2BoTlx%2BRexDSAiB6%2FimqleEmAC%2FvzB9A1JG9jjRm%2BISraA%2BIf48blQJ9jyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM0a8ATIdF30yfvol3KtwD2lCYyQak7EEkQMgcrpGeA5hfJ%2Fro9w6zf3EgdfP3BKbbelNWNdgMVjFYEQycgUOSF867tGs4fQkK5Vm9nA%2BBhfTvaTvvHFshPl6Lc5X36IrQMmwn97GzcMJblYiEPT7H1R1sC3DnrXafHIOq6fOKf4k2fz7%2Bmn7LCGP1d00XdmJEDz6tk61gZVfF5o9aUCypPqOtEFL8RI1fB2OkxUAffaQ91NiBMBSr3%2F%2BXaZCuEQR0YzKteqAGvWY7rCtoigMhD3E4tr95nC2fI%2B1P%2F0V104EukaQJ5M9v%2BUut3GIT0aSro9KQzJKujH837vYlo%2BbThVB%2B6haAH7JHKcNUfRdlrfuGqFAH7sWD1g18YJSYaabvaa%2BftaKwkORJklipJmq9mVz6dwgQDCJXb82h4lAfAe%2FpgEveeLBmwtDqQsRlQmI1tAPkkBRbNzWxTvTPVrQkwu8uzVWBnqCsl%2BJx%2FG9XZ7wVXOFq27wxvm51SuLb0pLG9ALMC6TtxCUcfV8MLOdYbTd7yJZJJUUxOa9l1%2BlUOta%2BKXw2yb1IbX5I2FKSdGJBVCUbvmotA38kYsKYrQYrqKXR9ZfYz7aCzR5%2Bk4FfvP8VyaVNxA6dydAEKOQi05YGW60AKQYzFEIfuZYwrfuHygY6pgG%2BaDNjvLlRkCQ01NTb88GQAw4zGHqQ8LlF6YktOYLuO%2B%2BNfckPoJ7ymwx3QCYuu70riBDJb9E3geextWwbNui2QeD4KzqSK%2FVqzMpxmaHSKVish7Fgl7aSXs7ONzDfhvO0RoxCLv1Q5M9RIxpLcUCkB8N%2FCduI18DagjKUdlttqCnwCgF0QKoi0N%2B6WoU5Q4to3U3HJlOGgm%2FauiBCcARoTRgNTloy&X-Amz-Signature=ec2db7acd08446ec0182e0bcff153fca3480eda13e25a371a0021e9ce4a207e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634LGVUIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfroD5qCeaToGbvPYdTd5P%2FzFutok0Zu%2BoTlx%2BRexDSAiB6%2FimqleEmAC%2FvzB9A1JG9jjRm%2BISraA%2BIf48blQJ9jyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM0a8ATIdF30yfvol3KtwD2lCYyQak7EEkQMgcrpGeA5hfJ%2Fro9w6zf3EgdfP3BKbbelNWNdgMVjFYEQycgUOSF867tGs4fQkK5Vm9nA%2BBhfTvaTvvHFshPl6Lc5X36IrQMmwn97GzcMJblYiEPT7H1R1sC3DnrXafHIOq6fOKf4k2fz7%2Bmn7LCGP1d00XdmJEDz6tk61gZVfF5o9aUCypPqOtEFL8RI1fB2OkxUAffaQ91NiBMBSr3%2F%2BXaZCuEQR0YzKteqAGvWY7rCtoigMhD3E4tr95nC2fI%2B1P%2F0V104EukaQJ5M9v%2BUut3GIT0aSro9KQzJKujH837vYlo%2BbThVB%2B6haAH7JHKcNUfRdlrfuGqFAH7sWD1g18YJSYaabvaa%2BftaKwkORJklipJmq9mVz6dwgQDCJXb82h4lAfAe%2FpgEveeLBmwtDqQsRlQmI1tAPkkBRbNzWxTvTPVrQkwu8uzVWBnqCsl%2BJx%2FG9XZ7wVXOFq27wxvm51SuLb0pLG9ALMC6TtxCUcfV8MLOdYbTd7yJZJJUUxOa9l1%2BlUOta%2BKXw2yb1IbX5I2FKSdGJBVCUbvmotA38kYsKYrQYrqKXR9ZfYz7aCzR5%2Bk4FfvP8VyaVNxA6dydAEKOQi05YGW60AKQYzFEIfuZYwrfuHygY6pgG%2BaDNjvLlRkCQ01NTb88GQAw4zGHqQ8LlF6YktOYLuO%2B%2BNfckPoJ7ymwx3QCYuu70riBDJb9E3geextWwbNui2QeD4KzqSK%2FVqzMpxmaHSKVish7Fgl7aSXs7ONzDfhvO0RoxCLv1Q5M9RIxpLcUCkB8N%2FCduI18DagjKUdlttqCnwCgF0QKoi0N%2B6WoU5Q4to3U3HJlOGgm%2FauiBCcARoTRgNTloy&X-Amz-Signature=a30e9d995d8b0ac268a8c24c560dde1fb72bea7c71b03e76f494a1799de85eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

