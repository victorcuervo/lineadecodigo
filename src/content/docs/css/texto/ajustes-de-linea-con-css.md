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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJCFEPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqFI3v7sSTY%2Bkmw9Fo5Ih6n3%2BTyydafUTZ0zsfDDe1mAiEA%2Fyp5O%2FbtBD9%2Bk2k4fp8IyKncQTtYzyTD%2FzPgZi36Qlcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCBQUpqIBD0sFyKmOCrcAyn1hJiX1zc8J1BQdlmEKS0djzVmezYi27AOMVfnu1bkY3pOWRTR5XfJL5Gk8HOlbOfykh%2BmC0VKgL1s8AeqpogFduOJrj%2FvP4QEAM6xZv39vwqYKDevynZZrxN3%2BALMVGrsM%2FOD2kfnpeog0ccRLfeoj%2FBRCnSSYn0q530qtbEu4MY7NpbfTXji7uKXF7p8yDIeFO6dCRv%2F5dbFYXgU4uvbWpvoBdpuPUhZtNyOVq%2B3eCiIP1PUmq%2FDMBwpHSYsahJRYSpIBjn4VeCVzr3TAAOP8HQvyrXq0MdesfMJxqrxUhmb16TgfNfcPv0qpAIUG16o9GSiiWgHPJy6yd78fgtz%2FRlbg3TzeW9CdFzbL9UF3pOuj50BLLkdKXTUmnX9zz82EjIkUAz1mDEwl0rmfMOz71UXwBVjbZI8ew2HcizxwOOqU3MNii9fJcfBX5Lwv2DV1Hm3oz9ATO52IShHuSQqXHXPaijBLH6%2B2DEoVkdgBdcyTNiZE0UV0ur%2BxNUgoDSKLWNANzxzGSp5A4mEbAT5mOxjCiytNUZ0L9Unbhel3UN8SitDpsTwz5Hn6ehwt5kPF%2BkVLPk5NUPi8xG5qAp9gjEtxEMKHBaiz9%2Bd0blYv%2FlAklFoOyXE%2B7UdMKz6h8oGOqUBzqgI1qxKY14nBywoH9Z6b03EBQOyV%2FJh2V81BUSBaRN4mfnVwIg3U0JsL8lsNG8BAdMKY%2BS0mTX0pp7jalk5%2Fuce8CsMr0fjglw7ScvnUvqfjqAeOue4LVHoX0gRkX5ZvXp1KvvAB7ZdptL6rHeib1gRvjHzIfSi8SvYJJhRSOLr%2FUCXSpuRXrs1SrWQaG6rmT4vUOtxG4BuGC33jkKWGSl%2FdN7b&X-Amz-Signature=1a77c6f3a075dbee6a5160d4b537c81b386b024d1361820c0e89ddae05452938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJCFEPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqFI3v7sSTY%2Bkmw9Fo5Ih6n3%2BTyydafUTZ0zsfDDe1mAiEA%2Fyp5O%2FbtBD9%2Bk2k4fp8IyKncQTtYzyTD%2FzPgZi36Qlcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCBQUpqIBD0sFyKmOCrcAyn1hJiX1zc8J1BQdlmEKS0djzVmezYi27AOMVfnu1bkY3pOWRTR5XfJL5Gk8HOlbOfykh%2BmC0VKgL1s8AeqpogFduOJrj%2FvP4QEAM6xZv39vwqYKDevynZZrxN3%2BALMVGrsM%2FOD2kfnpeog0ccRLfeoj%2FBRCnSSYn0q530qtbEu4MY7NpbfTXji7uKXF7p8yDIeFO6dCRv%2F5dbFYXgU4uvbWpvoBdpuPUhZtNyOVq%2B3eCiIP1PUmq%2FDMBwpHSYsahJRYSpIBjn4VeCVzr3TAAOP8HQvyrXq0MdesfMJxqrxUhmb16TgfNfcPv0qpAIUG16o9GSiiWgHPJy6yd78fgtz%2FRlbg3TzeW9CdFzbL9UF3pOuj50BLLkdKXTUmnX9zz82EjIkUAz1mDEwl0rmfMOz71UXwBVjbZI8ew2HcizxwOOqU3MNii9fJcfBX5Lwv2DV1Hm3oz9ATO52IShHuSQqXHXPaijBLH6%2B2DEoVkdgBdcyTNiZE0UV0ur%2BxNUgoDSKLWNANzxzGSp5A4mEbAT5mOxjCiytNUZ0L9Unbhel3UN8SitDpsTwz5Hn6ehwt5kPF%2BkVLPk5NUPi8xG5qAp9gjEtxEMKHBaiz9%2Bd0blYv%2FlAklFoOyXE%2B7UdMKz6h8oGOqUBzqgI1qxKY14nBywoH9Z6b03EBQOyV%2FJh2V81BUSBaRN4mfnVwIg3U0JsL8lsNG8BAdMKY%2BS0mTX0pp7jalk5%2Fuce8CsMr0fjglw7ScvnUvqfjqAeOue4LVHoX0gRkX5ZvXp1KvvAB7ZdptL6rHeib1gRvjHzIfSi8SvYJJhRSOLr%2FUCXSpuRXrs1SrWQaG6rmT4vUOtxG4BuGC33jkKWGSl%2FdN7b&X-Amz-Signature=929e4a06099806bad5266474f16b4eb9467d06b96de6d9fd3b1407cedf619e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

