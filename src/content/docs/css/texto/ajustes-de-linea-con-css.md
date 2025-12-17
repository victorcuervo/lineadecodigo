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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQZKELK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyK7H2uylNW3%2Fe9xiWcuzeSCjlKji1Vq17K7nwDS1McwIgKrDkMIYhIBD8tVsS85%2FAg%2BAobXVnseqM4IUa4gSpfooq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHHJnWzDH9ysnsI0KSrcA9Fw42Imqly3bQksAhZFADR3Z29uyapkOkf2QTlSCN2mxPwlow9HB3gbA4rK%2Bpx%2B%2FCkKNDfTWCFxqydYcQjMiDoNRtnnHeoPnM1WSuCfO1A8FcGjPhVJhltpbusbMto11IQo6bDiptFuJn8t38l7lMHnpINGtMkXzUDRDKiMGfOWFqYXMXFpeluXp7oB4VHtYoYz50jT9CUIQ30RgSRcWqtrkr3M08i6CkbqLLatnhKeiPfX%2FgYIE8SPF1h5iOLMcA1uTzLHyaXR9pm14extdzlbXqBE9h1cLiyWJoGoXv9bOy9SmojOohw8EIS9H4O%2FThyIdKWc%2FK%2Bro3m45YxUtmboh5wcWiqnZUMRViTDUomnJmbTyD98ueB32FMITUcieCYzEmY4bx%2BUiQiJsfSpf9JadljdCYrvaJyuFkXspybRqoAWl58Qai%2B3UGtTn%2BZAxx5XB0oG6291COPr1sg3es3A6n4Xx6eysNqkyoyQQLWmqdRuHC3ZltqZkkoUO4VaMJmP0DtixAORnPN1gRP8rseJ1%2F3IRp9Eb%2BKhR7R%2Fpu9Z5E27py5duw4vUbXA3m12%2F95WT8SsWU4%2F0ZlL24gUZZGAJqqNocS8GGSiAyKBRrsMXCgmyUSedRLbBamTMPSOisoGOqUBgdFcReli%2BIsIFjv8qNt0vB900yBU0hPUwsoPE81%2FUC62eCmgJHmaLLlzZDtsNOz0JOtrwgDrMajWjTI%2Bl9h6uxesgrRlE7Q1WHTD1nNDKJeph%2BZi6XtgUmojBfczrfHvFdYRsj6UiQLOv57YokIS9%2Bl0aNe%2FOpcr%2FahWbfm67ai5wMNy0wPrRaP9ZkAZw2brN9A9Yljyq6EGyOcxH8sOGcBHi2jm&X-Amz-Signature=e402012694dffb8a5b694dad40e797a0133ea859c376624f76bdf9ae7227bd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQZKELK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyK7H2uylNW3%2Fe9xiWcuzeSCjlKji1Vq17K7nwDS1McwIgKrDkMIYhIBD8tVsS85%2FAg%2BAobXVnseqM4IUa4gSpfooq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHHJnWzDH9ysnsI0KSrcA9Fw42Imqly3bQksAhZFADR3Z29uyapkOkf2QTlSCN2mxPwlow9HB3gbA4rK%2Bpx%2B%2FCkKNDfTWCFxqydYcQjMiDoNRtnnHeoPnM1WSuCfO1A8FcGjPhVJhltpbusbMto11IQo6bDiptFuJn8t38l7lMHnpINGtMkXzUDRDKiMGfOWFqYXMXFpeluXp7oB4VHtYoYz50jT9CUIQ30RgSRcWqtrkr3M08i6CkbqLLatnhKeiPfX%2FgYIE8SPF1h5iOLMcA1uTzLHyaXR9pm14extdzlbXqBE9h1cLiyWJoGoXv9bOy9SmojOohw8EIS9H4O%2FThyIdKWc%2FK%2Bro3m45YxUtmboh5wcWiqnZUMRViTDUomnJmbTyD98ueB32FMITUcieCYzEmY4bx%2BUiQiJsfSpf9JadljdCYrvaJyuFkXspybRqoAWl58Qai%2B3UGtTn%2BZAxx5XB0oG6291COPr1sg3es3A6n4Xx6eysNqkyoyQQLWmqdRuHC3ZltqZkkoUO4VaMJmP0DtixAORnPN1gRP8rseJ1%2F3IRp9Eb%2BKhR7R%2Fpu9Z5E27py5duw4vUbXA3m12%2F95WT8SsWU4%2F0ZlL24gUZZGAJqqNocS8GGSiAyKBRrsMXCgmyUSedRLbBamTMPSOisoGOqUBgdFcReli%2BIsIFjv8qNt0vB900yBU0hPUwsoPE81%2FUC62eCmgJHmaLLlzZDtsNOz0JOtrwgDrMajWjTI%2Bl9h6uxesgrRlE7Q1WHTD1nNDKJeph%2BZi6XtgUmojBfczrfHvFdYRsj6UiQLOv57YokIS9%2Bl0aNe%2FOpcr%2FahWbfm67ai5wMNy0wPrRaP9ZkAZw2brN9A9Yljyq6EGyOcxH8sOGcBHi2jm&X-Amz-Signature=018fdd5b935297bd48cadbbaeb70a0f486a25ea08ffc8adbd7954437c4026d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

