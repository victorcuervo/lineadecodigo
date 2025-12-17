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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRKBUXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX82YjxU46CsDwiy1kchyR4GE4A%2F%2BDa2MAcAxCN0PefAiBc6f5q3dhAoL4ueP39DL9%2BmcPbJLU2MAfckdcXchXgqyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeLNkBvJigpaZNZEyKtwDhOsZeRHO0ilajukFXBgWzS3IQQP53CQgCXqqM7b1gbg4Jtv5lhz9gBKINP8%2FLeMJvcWPQX6Hap8XzgL4cmYE%2FgHZmefyH6uNfPdqh%2FVvuIIhfz1DKGY9DA6YSFRUIClGFZIjBmHzKVTZZSNqh9WsnDDrdylJRVOQMT8XP5xILoAB%2FKaL4hrLV4NBFFhjCoBgqptOXnwhISM4wxWsAPqoqoutuJDf8kzJr4ea0sdERkXmrcOUBqcyv8%2F1lSNnMLQiehEoKQAzyul2K2tNWu0nXPwtuGFW%2FPJGAEIWlzB0WXBR%2BRWrfWm9xmo9MCQ3EtRf6toIpZk6YiwmEF60NMSRGkxbTIBEM4YqFP2tG55%2FrZUeLCmWOSsLz%2Bpn9rhjWH1Yn6Eb3pQuJhAte23XQqV%2BI91RYrjCLaJk6kv%2BqKs6qoeic7pUuKfWjUvo%2FX3oI5IIrbA%2B4n3x%2BizlCBu4cmI3RITs5257SoYYcg%2FN1JusY%2FSh7Kz1YRR%2Bek3IfmFt8HeT6hFtaWBuhybcfZ2KWqMnuY86uEhIKDl4JRXQTWb5fwP9pwLdfKupSbJdWgIs9Yx6rOK63sRPknBFrsmz3KTWh7nyN751N3NZofYuOzPmaCmwtFVYvwKbKV16%2BHowk5%2BLygY6pgEfkJ3PMlyw0ngxBxw%2FSSVpIPGvyQzRmGAcG8Z3LYEDIT7U7KxAog%2B4uQWNZfdwPscPjujxmlIpYS1p9EryOqeys40yU%2FclEk%2BI32CinqUUNhhYU%2F4jFM6NUwjnWZzL3yv73lwZKG4pPRsqQIlw2Z65aDNM46n6ioJRQ%2FUgTwoxMevYE8xMQhuPrjb2oxpfd1MhmePQfTnYZ4ABDZ07Ts4Req6iKgY%2B&X-Amz-Signature=69b5fc920822cea07aef00d8c87dcc5aa611ad328a19fd1ff82fb84334ef91b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRKBUXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX82YjxU46CsDwiy1kchyR4GE4A%2F%2BDa2MAcAxCN0PefAiBc6f5q3dhAoL4ueP39DL9%2BmcPbJLU2MAfckdcXchXgqyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeLNkBvJigpaZNZEyKtwDhOsZeRHO0ilajukFXBgWzS3IQQP53CQgCXqqM7b1gbg4Jtv5lhz9gBKINP8%2FLeMJvcWPQX6Hap8XzgL4cmYE%2FgHZmefyH6uNfPdqh%2FVvuIIhfz1DKGY9DA6YSFRUIClGFZIjBmHzKVTZZSNqh9WsnDDrdylJRVOQMT8XP5xILoAB%2FKaL4hrLV4NBFFhjCoBgqptOXnwhISM4wxWsAPqoqoutuJDf8kzJr4ea0sdERkXmrcOUBqcyv8%2F1lSNnMLQiehEoKQAzyul2K2tNWu0nXPwtuGFW%2FPJGAEIWlzB0WXBR%2BRWrfWm9xmo9MCQ3EtRf6toIpZk6YiwmEF60NMSRGkxbTIBEM4YqFP2tG55%2FrZUeLCmWOSsLz%2Bpn9rhjWH1Yn6Eb3pQuJhAte23XQqV%2BI91RYrjCLaJk6kv%2BqKs6qoeic7pUuKfWjUvo%2FX3oI5IIrbA%2B4n3x%2BizlCBu4cmI3RITs5257SoYYcg%2FN1JusY%2FSh7Kz1YRR%2Bek3IfmFt8HeT6hFtaWBuhybcfZ2KWqMnuY86uEhIKDl4JRXQTWb5fwP9pwLdfKupSbJdWgIs9Yx6rOK63sRPknBFrsmz3KTWh7nyN751N3NZofYuOzPmaCmwtFVYvwKbKV16%2BHowk5%2BLygY6pgEfkJ3PMlyw0ngxBxw%2FSSVpIPGvyQzRmGAcG8Z3LYEDIT7U7KxAog%2B4uQWNZfdwPscPjujxmlIpYS1p9EryOqeys40yU%2FclEk%2BI32CinqUUNhhYU%2F4jFM6NUwjnWZzL3yv73lwZKG4pPRsqQIlw2Z65aDNM46n6ioJRQ%2FUgTwoxMevYE8xMQhuPrjb2oxpfd1MhmePQfTnYZ4ABDZ07Ts4Req6iKgY%2B&X-Amz-Signature=4724edb0ef4771f710df224a37bfe6259a456ccbaee75a7450c74e8acac6aef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

