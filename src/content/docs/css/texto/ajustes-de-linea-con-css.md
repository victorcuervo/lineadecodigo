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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3QS4V5V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnVXSGhvK4ry3ZI%2FrROvmrTSuUXRVI%2B6XDCsfNsh1ojAIhAMAbMaVIdvQOYmNfT3rYhMwfWp%2BRMe8X35xMOy4oW6gRKv8DCHUQABoMNjM3NDIzMTgzODA1Igx6bpftD1KOCpCdPS4q3AMBou0ae1AH%2B%2Frl2PmChN751aJLODxqQ2QEMpw7VrxfgcVkL17l95Fqe6pOQAxgA5dAmUNc8V1MxnKU5BbsYqzlWLpDf%2BBEzzsvGTGk1iDh0ljeIwU%2FjJTR0aOitu5pdmEjyb%2FFJG7ohlW4gTdXuS8cerzmvZ1WPfdZmSk6e6oqUaR1i0%2BWg9slsXjXODZHasDAtZuRb4uZkUHCqhqtnYIit0V%2F%2FlryiayGRQrJS8t7U2sjtp9qw3ZqP39T%2Fy9rFdedGwIvtC33kY%2BlAJl%2BC6gCLddiEOc28nDGdoB4YmZ4eaJjWBU2UTov%2FhMyrZzk7nzUNCNkQg7V84f%2BgqNZDC5ILEaL%2FqmOroPr6jkz%2BxxNaMkAQhK%2BR7swToyuIUwE6HgcFlV0ze96B5%2F1UR3a9Hl1N9iH3IYA%2F1R1uwaoIp%2B0LoP35IFhOSnElHM0UruvGXfmTP%2FA5lDJOb90%2F2dzwcYV3ixy2HlOH496nVZcQ597Ayl8KOJG%2FBDPnh3zg4j%2FUo5yHzHw%2BXxkBzc5OnHRm4rxkD%2FgJKCUNPxRQQjIfppLecaNEeswnSTLnZyVfVQo8ZsQAS9ub290TZadWr9bmCraKWTqxwiXLNbp6%2BIVX0CjY9HLjyr6TTSHXQhd%2BjCYzojKBjqkAUDg07qCDyS9KsaIhICwMfJDR1jbARhMEO2bDy6KAjTCJX%2FWBkbFcblYtLxPlAUZbGmqWlP1QDeyyulIj727lbXi4w6R8EItLqIHrC9Lay7mFGPElDZE2Uxe%2B1bIiUgEgdCiK0pt66E8hbwBfnua7eKewkf6KahgasIpnm904hPePeqm0uVykRsCRYy8XIR3WnuXnRKyIW6brXDQQPtutsuP5Owm&X-Amz-Signature=1c85f187c53a3d5fd08278fe790889d9c9d9e10f06bb76d5a7b8ab0ba45f2670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3QS4V5V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnVXSGhvK4ry3ZI%2FrROvmrTSuUXRVI%2B6XDCsfNsh1ojAIhAMAbMaVIdvQOYmNfT3rYhMwfWp%2BRMe8X35xMOy4oW6gRKv8DCHUQABoMNjM3NDIzMTgzODA1Igx6bpftD1KOCpCdPS4q3AMBou0ae1AH%2B%2Frl2PmChN751aJLODxqQ2QEMpw7VrxfgcVkL17l95Fqe6pOQAxgA5dAmUNc8V1MxnKU5BbsYqzlWLpDf%2BBEzzsvGTGk1iDh0ljeIwU%2FjJTR0aOitu5pdmEjyb%2FFJG7ohlW4gTdXuS8cerzmvZ1WPfdZmSk6e6oqUaR1i0%2BWg9slsXjXODZHasDAtZuRb4uZkUHCqhqtnYIit0V%2F%2FlryiayGRQrJS8t7U2sjtp9qw3ZqP39T%2Fy9rFdedGwIvtC33kY%2BlAJl%2BC6gCLddiEOc28nDGdoB4YmZ4eaJjWBU2UTov%2FhMyrZzk7nzUNCNkQg7V84f%2BgqNZDC5ILEaL%2FqmOroPr6jkz%2BxxNaMkAQhK%2BR7swToyuIUwE6HgcFlV0ze96B5%2F1UR3a9Hl1N9iH3IYA%2F1R1uwaoIp%2B0LoP35IFhOSnElHM0UruvGXfmTP%2FA5lDJOb90%2F2dzwcYV3ixy2HlOH496nVZcQ597Ayl8KOJG%2FBDPnh3zg4j%2FUo5yHzHw%2BXxkBzc5OnHRm4rxkD%2FgJKCUNPxRQQjIfppLecaNEeswnSTLnZyVfVQo8ZsQAS9ub290TZadWr9bmCraKWTqxwiXLNbp6%2BIVX0CjY9HLjyr6TTSHXQhd%2BjCYzojKBjqkAUDg07qCDyS9KsaIhICwMfJDR1jbARhMEO2bDy6KAjTCJX%2FWBkbFcblYtLxPlAUZbGmqWlP1QDeyyulIj727lbXi4w6R8EItLqIHrC9Lay7mFGPElDZE2Uxe%2B1bIiUgEgdCiK0pt66E8hbwBfnua7eKewkf6KahgasIpnm904hPePeqm0uVykRsCRYy8XIR3WnuXnRKyIW6brXDQQPtutsuP5Owm&X-Amz-Signature=0106609d999d8fe9796464cb037615bc21b73db0782153d3899c77e4efd0abac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

