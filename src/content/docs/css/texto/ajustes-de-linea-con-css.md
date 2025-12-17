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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQR46EYN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKrhMslO5vt5uMV%2B%2BJrZydrTTMy9geBLJSKYkYkCqHzAiEApgOhBx7aG6wQEoeePso5e75AT%2Fm1lJHmjR3ndOA%2FA9UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICquoTVPcOVEp6S0ircA9deJcfe1QDDfvpM35Q3pZt%2FweSHldNNGTeqnn1k3mIpWdz3%2BpxadNP2zNHo4zw4uCtyfSOEFAl2laYxUiJivv3P1qutiTu7zVwntb7JsLpW%2F%2FNGEK0lVsICtdmV0kMVeCi7SqJIExzESlBci0IccuO2HEXntR%2B37gnwC%2BRDfRkondqsu%2BsyBNjwJhigmUGqP%2BLvmfY4PDaSpLLNTubUgscQv43tGg7SbiXTJtDgUutvpcxP7jQX00VkOGmTlxe9P5DOrQUgFFmQkfkuzTEcxMhRYAh6G9g5BkdoaZT4n0h0XLnZN%2BB2Muoc%2Bma4wAICr67Aq3%2Fo0cjw%2F74iRwDPeB66t%2FUUTyvZCXL9FacMhC%2BO4ZxJsfz6gJaVFa1gXIOUc28339A47hH8hC0ThJCzdrXzGAOz3LseJzC%2BrT1any4Jsz4enWDk0pncJYsly9OUPJIEfHoYcC5lrjtVjMe8l57VX%2Bql4oCEyW6VcEF0t91uv%2F%2Bpdup6L6EAaqEG8JLG0ZESNjvPckf8m3yM1KHg6pNOS%2FYsTawdBC%2FUAGj7cN8g%2FzZ8lknzDINq%2FdFl3IDS0MonhUWRlK%2BREDsWjEgc37QbhwiY3By2IA7msLManG3YWCTCQzu7o3n3HfMbMJCujMoGOqUBEOr9KrmN8Wx0W1AFCxXL1EQnmk9LPf%2FTfnLJdusn07g0c%2B6mFzjurnP7pVCXRUFxjvWRRNtYMIDUJhxB7Un32ZCcdw43a8HE58IZ22iwe%2BneLcjc1vf9zF7%2F6ug1FGakDqoG0fjG774TnX0NrMVxvbXgMnps2bAX4g9mkkVkwnlcJKfuSQ3DyRkq5HIn47KEz08CWdwv1mZYCX%2F6p%2FODbCnJ7%2BnP&X-Amz-Signature=ee531546a3e707b78e27996516954f5d06aa526a995120538ecd4486b022b4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQR46EYN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKrhMslO5vt5uMV%2B%2BJrZydrTTMy9geBLJSKYkYkCqHzAiEApgOhBx7aG6wQEoeePso5e75AT%2Fm1lJHmjR3ndOA%2FA9UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICquoTVPcOVEp6S0ircA9deJcfe1QDDfvpM35Q3pZt%2FweSHldNNGTeqnn1k3mIpWdz3%2BpxadNP2zNHo4zw4uCtyfSOEFAl2laYxUiJivv3P1qutiTu7zVwntb7JsLpW%2F%2FNGEK0lVsICtdmV0kMVeCi7SqJIExzESlBci0IccuO2HEXntR%2B37gnwC%2BRDfRkondqsu%2BsyBNjwJhigmUGqP%2BLvmfY4PDaSpLLNTubUgscQv43tGg7SbiXTJtDgUutvpcxP7jQX00VkOGmTlxe9P5DOrQUgFFmQkfkuzTEcxMhRYAh6G9g5BkdoaZT4n0h0XLnZN%2BB2Muoc%2Bma4wAICr67Aq3%2Fo0cjw%2F74iRwDPeB66t%2FUUTyvZCXL9FacMhC%2BO4ZxJsfz6gJaVFa1gXIOUc28339A47hH8hC0ThJCzdrXzGAOz3LseJzC%2BrT1any4Jsz4enWDk0pncJYsly9OUPJIEfHoYcC5lrjtVjMe8l57VX%2Bql4oCEyW6VcEF0t91uv%2F%2Bpdup6L6EAaqEG8JLG0ZESNjvPckf8m3yM1KHg6pNOS%2FYsTawdBC%2FUAGj7cN8g%2FzZ8lknzDINq%2FdFl3IDS0MonhUWRlK%2BREDsWjEgc37QbhwiY3By2IA7msLManG3YWCTCQzu7o3n3HfMbMJCujMoGOqUBEOr9KrmN8Wx0W1AFCxXL1EQnmk9LPf%2FTfnLJdusn07g0c%2B6mFzjurnP7pVCXRUFxjvWRRNtYMIDUJhxB7Un32ZCcdw43a8HE58IZ22iwe%2BneLcjc1vf9zF7%2F6ug1FGakDqoG0fjG774TnX0NrMVxvbXgMnps2bAX4g9mkkVkwnlcJKfuSQ3DyRkq5HIn47KEz08CWdwv1mZYCX%2F6p%2FODbCnJ7%2BnP&X-Amz-Signature=cd60c31a225be365ce7ba476acb53d8950b2f9eb136122554bb6e186324a1663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

