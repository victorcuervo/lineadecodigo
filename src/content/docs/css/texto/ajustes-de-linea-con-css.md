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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5GTYSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOqfXskwRgdba%2FeEoCM5yA2qLOiSmkGfapPzQ7b7mzqwIhAJeHx9rVJ97dxKEiz6W%2BNQRhfF78jygyZpuJwF9gCMmgKv8DCHwQABoMNjM3NDIzMTgzODA1Igy0HfiXklUQ3RmVJuUq3APXJKxzNheF2VhBgvPuv6dNoQOxIjkwlLQSrJNwveyxLLlW%2BR6oQMihJh%2FbYakmKQ%2Bin7J8J5A2XsPwdA4QwxwoBU9yVV0O%2FtqJfYgMP%2BmgTm94dfwsclxPdNmCmE2FffgehE6k5ozXKFjpTu%2Bt4BFOyvU9k2T6CjDIBg6HlH3wWJYnRTqa3uF4BH0GVpMUzL7Uk%2F8M5zfDg5EOxOOdDlSR8USInbONY5OLrhe32ecGgR3xNaa90a0YtjQAmGB%2FnlkVM0FkQ1XNT42FujI6RlC%2FJquvfx1oZ3fneyGjmvgNj3FlnHtRZLag%2BCDc1HOuqI%2F10HsEuP5n8FEn5ntYKN8t0F1VAaN5Tk%2FgaXr93QvDnOynlPXKvfI0dvncYfQgHddDOZGtePGCbpujMTNXv17%2FYxImZ4RWxyD3ugwVqUx9u9LgyFsNupRNVxUdGx%2BkGUL3xnzOsRwOhI6SjoUiFYxZEv9QI3%2BbhOkbbKFB9%2BmTcueaYqas2JLcDXhev9d9%2BzhLy8GW83j40PQNEejoNUsTXJlzvlf%2B%2FT5DTJDDalM3UtA47LCapE7bnW0wPF%2FO6jl10kq2LSES5y3did%2BfdNn09cFhzd2FaTxJ%2FP8mb1tu3AEREHvBogk6METPwTC0qorKBjqkAU4XsBvl%2BX38jAl6UjFg73oBeU2RfC1MOMFG1utYAQvQ940JktTTPdpuW9udJSRu0ovskcoZMm7omCHd360vpi0gpFg%2BTgzX5uly4tzrXhLA4gm6b4K%2BKpbQgtkdwVWYkOa4Qs4UlmTacYdsUtQAEQd7WXEplUBhJqo9VFpSrJ%2BgAIkVf%2B6wuduhMzwNdGclO6ft3htKojkpj5lrkHqfrfyqrdw0&X-Amz-Signature=73440a1c534de1a8b84a3c26ae86316612835a486ad5933c78fd371635b67bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5GTYSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOqfXskwRgdba%2FeEoCM5yA2qLOiSmkGfapPzQ7b7mzqwIhAJeHx9rVJ97dxKEiz6W%2BNQRhfF78jygyZpuJwF9gCMmgKv8DCHwQABoMNjM3NDIzMTgzODA1Igy0HfiXklUQ3RmVJuUq3APXJKxzNheF2VhBgvPuv6dNoQOxIjkwlLQSrJNwveyxLLlW%2BR6oQMihJh%2FbYakmKQ%2Bin7J8J5A2XsPwdA4QwxwoBU9yVV0O%2FtqJfYgMP%2BmgTm94dfwsclxPdNmCmE2FffgehE6k5ozXKFjpTu%2Bt4BFOyvU9k2T6CjDIBg6HlH3wWJYnRTqa3uF4BH0GVpMUzL7Uk%2F8M5zfDg5EOxOOdDlSR8USInbONY5OLrhe32ecGgR3xNaa90a0YtjQAmGB%2FnlkVM0FkQ1XNT42FujI6RlC%2FJquvfx1oZ3fneyGjmvgNj3FlnHtRZLag%2BCDc1HOuqI%2F10HsEuP5n8FEn5ntYKN8t0F1VAaN5Tk%2FgaXr93QvDnOynlPXKvfI0dvncYfQgHddDOZGtePGCbpujMTNXv17%2FYxImZ4RWxyD3ugwVqUx9u9LgyFsNupRNVxUdGx%2BkGUL3xnzOsRwOhI6SjoUiFYxZEv9QI3%2BbhOkbbKFB9%2BmTcueaYqas2JLcDXhev9d9%2BzhLy8GW83j40PQNEejoNUsTXJlzvlf%2B%2FT5DTJDDalM3UtA47LCapE7bnW0wPF%2FO6jl10kq2LSES5y3did%2BfdNn09cFhzd2FaTxJ%2FP8mb1tu3AEREHvBogk6METPwTC0qorKBjqkAU4XsBvl%2BX38jAl6UjFg73oBeU2RfC1MOMFG1utYAQvQ940JktTTPdpuW9udJSRu0ovskcoZMm7omCHd360vpi0gpFg%2BTgzX5uly4tzrXhLA4gm6b4K%2BKpbQgtkdwVWYkOa4Qs4UlmTacYdsUtQAEQd7WXEplUBhJqo9VFpSrJ%2BgAIkVf%2B6wuduhMzwNdGclO6ft3htKojkpj5lrkHqfrfyqrdw0&X-Amz-Signature=c0e61d116ce7e138b64a94b01cad161af9c40b5a47704e9480eea5eaf6d039e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

