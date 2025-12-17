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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQZQ23S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ%2Bu939ViJhq2MwpucGkl1OvZ1C4jVc%2F7PKKIch7F5TAiA5rfrH6jDEaMdZqUovZz%2FKUDeQNH6faBHMbxxqPp7LECr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMg45f0k5irpp%2Bh0P7KtwD5jDamLFZ29vDOwQgP%2FB4%2FBm0p6XHaY5aJIKD%2BrhwEhZQlyUc4O1W%2FK5jNzYEPkMRYrz68exeakLCBDeFGW5wcVToYbq44ZyYhhh0vsQoo3bGQQapDsNO6ZEKRGdqiNSQ3KgcqjH07oFY6b%2FqDh28MaDn3O5HRlFJOZUftKJ1zrK69lCOaLwV7%2FwI10kFCIDQ2fOkzbRxpBLz9As%2B54IeA0jd9Nn6X3%2BZEq7PBeckudIGiEM56OWVC73YFcUTCgzibkc2VtSsHnfhQKf98SrK2pDAw0eHeym9k1Lg9ZmHkCMFGjdIWKEm3yn4FtU%2BAsln%2B7Jfae05b0WGoUPaKERhU4nkW77nB57CCGEG6YmdYrBkjMcAAhu6D1P1mdjnOUEVxWcCAFi3Hg8bIR3TiQjXhIo5Anx1zVlxwHftjy7pK%2Fisq78nHw4OKYGRqWRwN0l%2FDJYquabYRy7ypk19EpdEGOsM9bLaIbZqWCRcD4427S0lGT0Yl9pyt15D6M54JquKXeAlT5fWqaLlTH6DKXPtrg%2FZRTEiy1hS4MuaLHemAg7F8JqYcaWQIdi4gFNtGEzN6wZfqvocKeB6GDJVqR3CEB28t%2FhvrECy4FPdfRLp6RtI9E5NVzxPAmyjme8w0ZWIygY6pgGLMOFSLanwAn4aKWVHvU%2Fjbk8w4RCJ220IuJJT%2BfQFlYTMIdcZ9fFNZKUAnWto493r82ZTUyfgeCKrYgseCJSY7WRz0OrralNljobTH7F336JEFEWtRQLpYl%2F1lbHDF9mOmYN%2FDw2%2F6QPhTyoXAGHSD9EbOPN2etB0mUxBhE6h7QxWrqRCk5tIcXeixmgI7NM11ylDno3si1F3MQjM1xGJqQ4bGOia&X-Amz-Signature=13e58580f4b44b2d6e40cfe2f6c79d6d34f487a8fee87073dc5edcb885882f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQZQ23S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQ%2Bu939ViJhq2MwpucGkl1OvZ1C4jVc%2F7PKKIch7F5TAiA5rfrH6jDEaMdZqUovZz%2FKUDeQNH6faBHMbxxqPp7LECr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMg45f0k5irpp%2Bh0P7KtwD5jDamLFZ29vDOwQgP%2FB4%2FBm0p6XHaY5aJIKD%2BrhwEhZQlyUc4O1W%2FK5jNzYEPkMRYrz68exeakLCBDeFGW5wcVToYbq44ZyYhhh0vsQoo3bGQQapDsNO6ZEKRGdqiNSQ3KgcqjH07oFY6b%2FqDh28MaDn3O5HRlFJOZUftKJ1zrK69lCOaLwV7%2FwI10kFCIDQ2fOkzbRxpBLz9As%2B54IeA0jd9Nn6X3%2BZEq7PBeckudIGiEM56OWVC73YFcUTCgzibkc2VtSsHnfhQKf98SrK2pDAw0eHeym9k1Lg9ZmHkCMFGjdIWKEm3yn4FtU%2BAsln%2B7Jfae05b0WGoUPaKERhU4nkW77nB57CCGEG6YmdYrBkjMcAAhu6D1P1mdjnOUEVxWcCAFi3Hg8bIR3TiQjXhIo5Anx1zVlxwHftjy7pK%2Fisq78nHw4OKYGRqWRwN0l%2FDJYquabYRy7ypk19EpdEGOsM9bLaIbZqWCRcD4427S0lGT0Yl9pyt15D6M54JquKXeAlT5fWqaLlTH6DKXPtrg%2FZRTEiy1hS4MuaLHemAg7F8JqYcaWQIdi4gFNtGEzN6wZfqvocKeB6GDJVqR3CEB28t%2FhvrECy4FPdfRLp6RtI9E5NVzxPAmyjme8w0ZWIygY6pgGLMOFSLanwAn4aKWVHvU%2Fjbk8w4RCJ220IuJJT%2BfQFlYTMIdcZ9fFNZKUAnWto493r82ZTUyfgeCKrYgseCJSY7WRz0OrralNljobTH7F336JEFEWtRQLpYl%2F1lbHDF9mOmYN%2FDw2%2F6QPhTyoXAGHSD9EbOPN2etB0mUxBhE6h7QxWrqRCk5tIcXeixmgI7NM11ylDno3si1F3MQjM1xGJqQ4bGOia&X-Amz-Signature=3240e2a628b6d66c7031eb95a76baccdf5580a84d451e25f2a41fbb13561e2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

