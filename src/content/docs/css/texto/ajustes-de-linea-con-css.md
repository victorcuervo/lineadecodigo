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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23XWSPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBq96tapCQxdZTXH2jkCVKg0VGrg%2F412GeZJ8dk6qJQIgDMF3GNoGovoUO5isA0VnKGJdibmw4iKLhXehQg8CbdQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJAHVv71DbWmtmMUACrcAx9Znhc%2FVnW%2B8wQCp3YyzKMNrwbxMGQD%2BeYfgs8bMXArmp979HT%2Beq3xduB%2FwwkbEljfnVeh8%2BHlZdCyKs34dH6sMb2e7y6uV4V1MaunYTYYMl0hJlWywfo7VaOwRnsb9vm6wdwaDS3TWfD%2F4%2BIFr3F4L2my3U0kCrFfuPg4LSzsxW%2BbNMw16nEAYAH5K%2FbRjtTzhy3SDtI6PIFZPMDW9g8HoJiVi8kVapVh1cNY0iIrUZ3pjl%2BWH81zKDO0s%2BBlzjzGajQhdpGVJIwmDFZPTuGY050nuo77Lv%2BwgS2%2FDgT%2F92In48XFTCX0P8O1GCZOxJSuSSQAs7mXpEBqbWa%2BB0o93MVWqNQdVNtrKimH0ahhEMX7xVkHjb2WPaw%2FtVpHpieLT0eQM4KJFD4X0%2FJoVGFQBcv2FxyAEf81fM28tKHR8rx6iOyHgDp%2Bg2ClKU89YuTdUdDc2YA7UBT2MTnHbEMIZ3qDsXnMi%2B7pW1xObuuWP8AYUzJ7%2BEIExXoTl8HVUavJWTlnM%2FpKv%2F1AgX3y3jLdVKMRfiphVex%2FQ%2BA49si%2Fctsanjwkd3%2F7b%2FERdIliX3fJ3Fnram5k99wd%2BD1NO6yi5Dwz9Qx4mJ4VNgGsyYhNGmEz5B5QmVkpiE5fMKXwicoGOqUBaUWKsUMK1qlXwcpHMq2jR6hC7ZpA2yJE5oA2cqotLPPAc8UgkIbLa50yuxkuAy3j5JqL4Sika52xuPIbHbvkr3vQ1V24PVKnD5t4NtzLgvxM8feukKzpi3AS%2FblKYBVui%2BjsQ7ev4a4%2Bg1j673qPyxoLW%2F6zD7vougwsG9jF7K%2BhQtzIvmMW7BXauYqH9slwzytN%2FSDBX3IDi19b0UNtBTJbZLzL&X-Amz-Signature=eec253b6d00335379a4cc86b82cec20f1328bf32b9af7d9fb7a6fa7c13bdcc17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T23XWSPX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrBq96tapCQxdZTXH2jkCVKg0VGrg%2F412GeZJ8dk6qJQIgDMF3GNoGovoUO5isA0VnKGJdibmw4iKLhXehQg8CbdQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJAHVv71DbWmtmMUACrcAx9Znhc%2FVnW%2B8wQCp3YyzKMNrwbxMGQD%2BeYfgs8bMXArmp979HT%2Beq3xduB%2FwwkbEljfnVeh8%2BHlZdCyKs34dH6sMb2e7y6uV4V1MaunYTYYMl0hJlWywfo7VaOwRnsb9vm6wdwaDS3TWfD%2F4%2BIFr3F4L2my3U0kCrFfuPg4LSzsxW%2BbNMw16nEAYAH5K%2FbRjtTzhy3SDtI6PIFZPMDW9g8HoJiVi8kVapVh1cNY0iIrUZ3pjl%2BWH81zKDO0s%2BBlzjzGajQhdpGVJIwmDFZPTuGY050nuo77Lv%2BwgS2%2FDgT%2F92In48XFTCX0P8O1GCZOxJSuSSQAs7mXpEBqbWa%2BB0o93MVWqNQdVNtrKimH0ahhEMX7xVkHjb2WPaw%2FtVpHpieLT0eQM4KJFD4X0%2FJoVGFQBcv2FxyAEf81fM28tKHR8rx6iOyHgDp%2Bg2ClKU89YuTdUdDc2YA7UBT2MTnHbEMIZ3qDsXnMi%2B7pW1xObuuWP8AYUzJ7%2BEIExXoTl8HVUavJWTlnM%2FpKv%2F1AgX3y3jLdVKMRfiphVex%2FQ%2BA49si%2Fctsanjwkd3%2F7b%2FERdIliX3fJ3Fnram5k99wd%2BD1NO6yi5Dwz9Qx4mJ4VNgGsyYhNGmEz5B5QmVkpiE5fMKXwicoGOqUBaUWKsUMK1qlXwcpHMq2jR6hC7ZpA2yJE5oA2cqotLPPAc8UgkIbLa50yuxkuAy3j5JqL4Sika52xuPIbHbvkr3vQ1V24PVKnD5t4NtzLgvxM8feukKzpi3AS%2FblKYBVui%2BjsQ7ev4a4%2Bg1j673qPyxoLW%2F6zD7vougwsG9jF7K%2BhQtzIvmMW7BXauYqH9slwzytN%2FSDBX3IDi19b0UNtBTJbZLzL&X-Amz-Signature=41fb48f598ca5e570c6ba8412dba124dd94222c776210c7bd45ae4cd33455060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

