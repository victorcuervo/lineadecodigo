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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDURNIS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSp5YtfDBeSYv6TVBnq9dd3IQ2Koa39Q%2ByknNl3JspDQIge0pvMSCUmuHZrF6dCpe8E5W4BBNASt4hmJFBTyjNpCQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDL04WMOCweNlVBZw5CrcA6JM9DwuuMcbAbIw7%2Bd%2BPBllFUye%2FYCWQn0fCQi4kaH1c8jhEiy007Cb%2FRIoyTR3HiZGPpDyMi9NOOBvZKV2VEkN%2FMMUvpWTORVAI6obmSBDWvP111apOeeDhC%2FMqSQpC4PoWxyyPY0oZfg%2B4zg9xSnEu3iKBXdoQPXTUM4fOE5jZOkPTd5UEnN6eUBqqJKBIBX%2Bp97bLJRK0lb3U3u%2FvVjqSPsTyhUoc0%2FBLhrBeSuvlfbuqsiYp8a%2BCZSJjDDcX2%2Fdgui8n9%2BBc4pRpWVigKe0r0YH3eBz6kzEVGM%2BtsHeIfNuyQ2GIkoW%2FepwzGgFKGqrzcjXxXZdZJsi1wWOT5eoTd4rW%2B2OwL7zWilNPE0cZ%2FmDEqrBvB5SKi3a5OO4AAkiGMgTXa0Kk989EUAaGK6MmEJ0DKOj9Iq46nPOiZGb3A0XwQIuD4zDXEXo52KI0%2By7r6w2LwHkEwdaLlxgvQIyXixTloxdhaVm5Nm32lcif3sccvurP%2Bj07xMAxvqTa2VbcZ5qthDj%2B%2BzDnsLWDZjAbTg%2FJ91qoVhB0kK0%2BjNGQHT5T4nYTTQSjbOOV6DjFv9FTSd1PTN4V3VqxX52LZKG5dYcj44VQkmYhJVHhoUOhLBQTTdpeEy9H3csMLfhisoGOqUBvUFd%2FKHyNhk7%2B4xHwekTX5ft7EtKsif9teW0XdmSe1G4oKQPzWsXxz26jQYK8Ygzwc4TlvTGTgy%2BScPLOcWjIKWYm3QZwTJ%2BOVr7kNPLjOzLGrORvjNNVYGnX9ZT2hgy5Q1fvcpAHoWAIFC8gmfb8%2F%2BsmrNCs5s3%2BrexgmVh5xW9PLTR%2FgPJO%2B1w0eSMlFNBuD84IsnZus8cEUgg6eVpf7FA3FzG&X-Amz-Signature=332c7fa5026f1165f9d56ef0dbfff7ba0e349516ea2fce6b97090f4b764a2c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDURNIS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSp5YtfDBeSYv6TVBnq9dd3IQ2Koa39Q%2ByknNl3JspDQIge0pvMSCUmuHZrF6dCpe8E5W4BBNASt4hmJFBTyjNpCQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDL04WMOCweNlVBZw5CrcA6JM9DwuuMcbAbIw7%2Bd%2BPBllFUye%2FYCWQn0fCQi4kaH1c8jhEiy007Cb%2FRIoyTR3HiZGPpDyMi9NOOBvZKV2VEkN%2FMMUvpWTORVAI6obmSBDWvP111apOeeDhC%2FMqSQpC4PoWxyyPY0oZfg%2B4zg9xSnEu3iKBXdoQPXTUM4fOE5jZOkPTd5UEnN6eUBqqJKBIBX%2Bp97bLJRK0lb3U3u%2FvVjqSPsTyhUoc0%2FBLhrBeSuvlfbuqsiYp8a%2BCZSJjDDcX2%2Fdgui8n9%2BBc4pRpWVigKe0r0YH3eBz6kzEVGM%2BtsHeIfNuyQ2GIkoW%2FepwzGgFKGqrzcjXxXZdZJsi1wWOT5eoTd4rW%2B2OwL7zWilNPE0cZ%2FmDEqrBvB5SKi3a5OO4AAkiGMgTXa0Kk989EUAaGK6MmEJ0DKOj9Iq46nPOiZGb3A0XwQIuD4zDXEXo52KI0%2By7r6w2LwHkEwdaLlxgvQIyXixTloxdhaVm5Nm32lcif3sccvurP%2Bj07xMAxvqTa2VbcZ5qthDj%2B%2BzDnsLWDZjAbTg%2FJ91qoVhB0kK0%2BjNGQHT5T4nYTTQSjbOOV6DjFv9FTSd1PTN4V3VqxX52LZKG5dYcj44VQkmYhJVHhoUOhLBQTTdpeEy9H3csMLfhisoGOqUBvUFd%2FKHyNhk7%2B4xHwekTX5ft7EtKsif9teW0XdmSe1G4oKQPzWsXxz26jQYK8Ygzwc4TlvTGTgy%2BScPLOcWjIKWYm3QZwTJ%2BOVr7kNPLjOzLGrORvjNNVYGnX9ZT2hgy5Q1fvcpAHoWAIFC8gmfb8%2F%2BsmrNCs5s3%2BrexgmVh5xW9PLTR%2FgPJO%2B1w0eSMlFNBuD84IsnZus8cEUgg6eVpf7FA3FzG&X-Amz-Signature=a95877d96d18a57a79f23bcd07098ca7c96e01dd5c538328d87555da549c3a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

