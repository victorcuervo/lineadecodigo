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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWRNWW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYjepqJZMUPB7anvh9bFw658SGtJqAJFmjBY8ys0Vc9AiEAqCgYzvmmqVWc6mapwBasmbgs0CYhJLkGvWIiZISHV0Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEsZ6Awo1HtAxrcVYircA%2BkMDAK8X8PxKLvr2MdTQLDGMCGwe2jQMjzSvSr3ocBLtb4sdW3njEWwx9AYyRsJ%2F37y0GNw55r1dak7fwnmjDJ9BZ%2B8rpoqzqakGG7tMQyC9Fw718fEkA5XngQWXC2aukEiuKaqfaPR5W3ldeutUvWD9O52v606A1atuZSTXZJx7s%2Bcoflbnu9%2Fa404ueSQty6IpbNxYh42Q6SekGkFOlFTD4lu5erc%2BBViyECEPRFB3BtLz7sPlOLOb0KWPnplqVWcQCYywKPeHK2BehKZldXtvuWpWco8YDEl3m7ILzfwYZxbxrGhi0AD4jP5XPYYTcQ%2Bi%2BE1ZzUu20WnhUDLUI95O4lejbQF9cRrRgCg1TH%2Fh%2BWTaLnEG0kylo%2FqUDJGNOmZxS%2B68pKelp62O%2BgsbmCSvqzEyKD%2B7AKUglBov1NLBH4bq2MO7wfXHQ7tz3G%2BIQUvKhfkuSOXOGp0hw3VrdQylCn%2Bf1dXyiaeQgymWSIk%2Fg5GYthZigG8fa2raHDTfg9IaU2BQihlUbUvFaqjssZVQwqsdYrfXR7w0jS6GvG8q2ykgdO1Frqz0n8Sn6MUiitYnF9KXlRNzuPVwKIjnUlBz9lIQq9U%2FNBOVfI2FUrNQfBrgBSzZiWr9pDjMKWDicoGOqUB6Hardl9Is0ky1k47cxC3KhZM%2FN5pHXSfcE88fNV5F6ik65xgP3V%2BaPEgnt8FG3vSXNlC%2FTrexIhxv9AujJ2JEYGJDpKyN0mQnjXcZR7vZJK8yto0Md0pg7G%2FWn48zpibXa7q7HuQHmq8BwM7ieIkyew6UF1VD3CjlZsThnDe6zPeDwWwkG5lTG59EtH3kPn8yxaActv7N7TOsuxw8e%2BW4UCYuKoS&X-Amz-Signature=2e129100e8efb28ec03c4ccb671052f3280afbf677fc7cc4c66f7091a6ddabbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWRNWW5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYjepqJZMUPB7anvh9bFw658SGtJqAJFmjBY8ys0Vc9AiEAqCgYzvmmqVWc6mapwBasmbgs0CYhJLkGvWIiZISHV0Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEsZ6Awo1HtAxrcVYircA%2BkMDAK8X8PxKLvr2MdTQLDGMCGwe2jQMjzSvSr3ocBLtb4sdW3njEWwx9AYyRsJ%2F37y0GNw55r1dak7fwnmjDJ9BZ%2B8rpoqzqakGG7tMQyC9Fw718fEkA5XngQWXC2aukEiuKaqfaPR5W3ldeutUvWD9O52v606A1atuZSTXZJx7s%2Bcoflbnu9%2Fa404ueSQty6IpbNxYh42Q6SekGkFOlFTD4lu5erc%2BBViyECEPRFB3BtLz7sPlOLOb0KWPnplqVWcQCYywKPeHK2BehKZldXtvuWpWco8YDEl3m7ILzfwYZxbxrGhi0AD4jP5XPYYTcQ%2Bi%2BE1ZzUu20WnhUDLUI95O4lejbQF9cRrRgCg1TH%2Fh%2BWTaLnEG0kylo%2FqUDJGNOmZxS%2B68pKelp62O%2BgsbmCSvqzEyKD%2B7AKUglBov1NLBH4bq2MO7wfXHQ7tz3G%2BIQUvKhfkuSOXOGp0hw3VrdQylCn%2Bf1dXyiaeQgymWSIk%2Fg5GYthZigG8fa2raHDTfg9IaU2BQihlUbUvFaqjssZVQwqsdYrfXR7w0jS6GvG8q2ykgdO1Frqz0n8Sn6MUiitYnF9KXlRNzuPVwKIjnUlBz9lIQq9U%2FNBOVfI2FUrNQfBrgBSzZiWr9pDjMKWDicoGOqUB6Hardl9Is0ky1k47cxC3KhZM%2FN5pHXSfcE88fNV5F6ik65xgP3V%2BaPEgnt8FG3vSXNlC%2FTrexIhxv9AujJ2JEYGJDpKyN0mQnjXcZR7vZJK8yto0Md0pg7G%2FWn48zpibXa7q7HuQHmq8BwM7ieIkyew6UF1VD3CjlZsThnDe6zPeDwWwkG5lTG59EtH3kPn8yxaActv7N7TOsuxw8e%2BW4UCYuKoS&X-Amz-Signature=0b1e7b22332f96ae7036262266b6949a94b3f1a74bc6545c210fedff338eef48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

