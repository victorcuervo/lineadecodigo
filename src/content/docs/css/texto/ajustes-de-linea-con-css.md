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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSCBQ26%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUp12hkSMEskdnxobw6pL%2B3FfkCzz8HDjJ2waHkKVvyAiEAn968gwhj7TybadiilE%2BjBM2yN6KxoJpHnBFFU7T5%2BQMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtbffrR%2Bi3ybdwAfyrcAxdrMk3AtIqmWvOqt1Buxa3%2BRsruXaB9xOe4DVargdNh69251f%2BIppDLXy2JHFsPx%2FHwYKHB%2FC1igk8IrJlQ%2F0cq%2B1%2FBJxV9WMevwHWTmNvO7o%2BQ7kPvTiF3ZZSG4eyzPTwcKSiNSX1Wq3yRgrI4zDcRUxYBkWDbLoKDHV3U6NyMQ05vt8Kkjfco%2BDFxnaGRSztfyeqowki3U833XF4qDjTMUfPx8%2Fe42p85HMEuuva06WwW6hQzbS7pCv5vgyHzTD25cYEUU4E%2FSvN63RvCJjtPnuJDPcjhxSwpIQrVtRmPbhTRfo73RZ43lmKkJowS1%2B4Ang1Fyj1R23RNqK44MC%2B8qTp3trwmFg4I0cgwOc1H2JPnjBOF2U%2BgQaHmG6B1s6nQ1S56yvUlIspY3UEzatZmaWZrPDtCe1GVSGxEkXPEwv1rccqGCPwyIhJPcKvmkcjSRKA%2BhbIaZNB%2BIdemySM1MspYe1KZ039WCAmXMUMA3Pt8Ajv97Kn3pai17xnqEEQACCr%2FVlnxN%2BkfOhOm6IMbdV995ltR8sr9SxCfX%2BjAS2wceqJHr6%2BVxCUsB0ea68geSNKK4xvBdHG9%2BkZOua3r6laSIBKJ6uEf03z%2FkAcCW3gM7c8rYdmj%2FF6vMM2tjMoGOqUBi99gli4%2FPVMzD2AyuC8lQZjVFVS9CwxN0dxzJNZReo7Inbe9Zbt8G2jVWeCcanS3MkwNF%2BedIG4lcDibSIZC5OIKrpmRi2XVkK%2FuooEuuC9u1%2B2o7M1JzHrXIfZ2gm5wi7TS08GaXdaOm7A%2FYbcfMBNT%2FBQdu7DxDkM6TdFZl3w5EI%2FbJP%2FIvE95eh1NCYxxuqehJ57vYLeMG9vnHbMt8DaHLvlu&X-Amz-Signature=b9b77277ae4fb36f47d99c39c782fcc4f21c8cb273ee0f2784a485cdd4b2510f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRSCBQ26%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUp12hkSMEskdnxobw6pL%2B3FfkCzz8HDjJ2waHkKVvyAiEAn968gwhj7TybadiilE%2BjBM2yN6KxoJpHnBFFU7T5%2BQMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtbffrR%2Bi3ybdwAfyrcAxdrMk3AtIqmWvOqt1Buxa3%2BRsruXaB9xOe4DVargdNh69251f%2BIppDLXy2JHFsPx%2FHwYKHB%2FC1igk8IrJlQ%2F0cq%2B1%2FBJxV9WMevwHWTmNvO7o%2BQ7kPvTiF3ZZSG4eyzPTwcKSiNSX1Wq3yRgrI4zDcRUxYBkWDbLoKDHV3U6NyMQ05vt8Kkjfco%2BDFxnaGRSztfyeqowki3U833XF4qDjTMUfPx8%2Fe42p85HMEuuva06WwW6hQzbS7pCv5vgyHzTD25cYEUU4E%2FSvN63RvCJjtPnuJDPcjhxSwpIQrVtRmPbhTRfo73RZ43lmKkJowS1%2B4Ang1Fyj1R23RNqK44MC%2B8qTp3trwmFg4I0cgwOc1H2JPnjBOF2U%2BgQaHmG6B1s6nQ1S56yvUlIspY3UEzatZmaWZrPDtCe1GVSGxEkXPEwv1rccqGCPwyIhJPcKvmkcjSRKA%2BhbIaZNB%2BIdemySM1MspYe1KZ039WCAmXMUMA3Pt8Ajv97Kn3pai17xnqEEQACCr%2FVlnxN%2BkfOhOm6IMbdV995ltR8sr9SxCfX%2BjAS2wceqJHr6%2BVxCUsB0ea68geSNKK4xvBdHG9%2BkZOua3r6laSIBKJ6uEf03z%2FkAcCW3gM7c8rYdmj%2FF6vMM2tjMoGOqUBi99gli4%2FPVMzD2AyuC8lQZjVFVS9CwxN0dxzJNZReo7Inbe9Zbt8G2jVWeCcanS3MkwNF%2BedIG4lcDibSIZC5OIKrpmRi2XVkK%2FuooEuuC9u1%2B2o7M1JzHrXIfZ2gm5wi7TS08GaXdaOm7A%2FYbcfMBNT%2FBQdu7DxDkM6TdFZl3w5EI%2FbJP%2FIvE95eh1NCYxxuqehJ57vYLeMG9vnHbMt8DaHLvlu&X-Amz-Signature=37eefa3da659155ce54cfda6701d11f72799a8454b53e5988e364ea60f09d6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

