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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLB6UKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxqbk7OMIfWNakAXSD2UbBEC4D%2BOj%2BCL7UG%2FQR6q93AiEAxXNy3vFxDJBmZ8HtXiYAFNdF%2F2iIHdolP%2FXtuSKfLEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnpmGwm1yQYWBmNQircAwRYS3D3aFMc3A67vJJDiauN515CyN3hAqfQZwHXMWnkBXq7GLCJJwMTTh6WG8%2Bcp%2F3zMK%2Bebu6VjX8u0uTcZeZxFPl6JQWezO7nLN69kdjZ20xjsrFI1BjADf5rF5j%2BXYSWDEyvDhEcmw1CL%2Fkat1T%2BpXA7N1ZUH02hTTmNDyb1T7QL%2FubwRsUBtGWQ5luTblKUBXRfglLskOE9FUE4Ke%2FOQUugRir%2FZ1SdhLwvyKeAicYYX4YO9zWHjAGv4MG5X87S5VtKx1JSVIP8iDLxo0ZDEP9Vw4kS5h4qBs5j71NzcsuAublBweo5QdOM%2BwL9rSmtZ73NFS8j3Jvn1kYKK%2B7luR%2B7RfIaOehMI3PQf2iDSAhiOWProVh28cspinwsaBFAgRNN15fDZJ34laN51xvZavEVtTlH9aW9sRGJGTwCaqdPUTC1OcyusObXpQ9jhnJ5h2Hx7g8vfsZMyLGJhuAYyAUjU6t2Jdnbcdc0JWzmFncQuMQqcnbpB6o7mgH7qh%2FUKNQfAAG18gogTM8Q3npNy0PGiCf0OSF%2BONDZso11RBeZgQ4z%2BLNRpwGcPMyXXzCNH1A5g9PIvdDaGyAzjlLdeX2kdWir%2FitjhLCsUu4YwNL%2BOhwdB6mUb0TSMM2ei8oGOqUBDe3SS7Fc%2B2QPtB5C6dhP9DjnGU%2BAcBEnRjy35Lf7uElDBltfHuOmO7Oix7LCfDKe5MvvSG0XCtfk1TX%2BkdAeEwIVPcemw%2FClH0aC1a1SswvQ8J%2FW9YhbuXAv9rZM65exYoqt%2FFRFHoN7UMTcVQKtyVP1ldGcH6MZ5bgIBIqMCzjLO8u8K61CQJGtONJLFwhwmpJvDajxfC263EKg8mo6WcFjuUFl&X-Amz-Signature=c5f4e6fec60f03640a47c79c4045490a38154b46732c3a95bc01769e4807ee4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLB6UKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxqbk7OMIfWNakAXSD2UbBEC4D%2BOj%2BCL7UG%2FQR6q93AiEAxXNy3vFxDJBmZ8HtXiYAFNdF%2F2iIHdolP%2FXtuSKfLEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnpmGwm1yQYWBmNQircAwRYS3D3aFMc3A67vJJDiauN515CyN3hAqfQZwHXMWnkBXq7GLCJJwMTTh6WG8%2Bcp%2F3zMK%2Bebu6VjX8u0uTcZeZxFPl6JQWezO7nLN69kdjZ20xjsrFI1BjADf5rF5j%2BXYSWDEyvDhEcmw1CL%2Fkat1T%2BpXA7N1ZUH02hTTmNDyb1T7QL%2FubwRsUBtGWQ5luTblKUBXRfglLskOE9FUE4Ke%2FOQUugRir%2FZ1SdhLwvyKeAicYYX4YO9zWHjAGv4MG5X87S5VtKx1JSVIP8iDLxo0ZDEP9Vw4kS5h4qBs5j71NzcsuAublBweo5QdOM%2BwL9rSmtZ73NFS8j3Jvn1kYKK%2B7luR%2B7RfIaOehMI3PQf2iDSAhiOWProVh28cspinwsaBFAgRNN15fDZJ34laN51xvZavEVtTlH9aW9sRGJGTwCaqdPUTC1OcyusObXpQ9jhnJ5h2Hx7g8vfsZMyLGJhuAYyAUjU6t2Jdnbcdc0JWzmFncQuMQqcnbpB6o7mgH7qh%2FUKNQfAAG18gogTM8Q3npNy0PGiCf0OSF%2BONDZso11RBeZgQ4z%2BLNRpwGcPMyXXzCNH1A5g9PIvdDaGyAzjlLdeX2kdWir%2FitjhLCsUu4YwNL%2BOhwdB6mUb0TSMM2ei8oGOqUBDe3SS7Fc%2B2QPtB5C6dhP9DjnGU%2BAcBEnRjy35Lf7uElDBltfHuOmO7Oix7LCfDKe5MvvSG0XCtfk1TX%2BkdAeEwIVPcemw%2FClH0aC1a1SswvQ8J%2FW9YhbuXAv9rZM65exYoqt%2FFRFHoN7UMTcVQKtyVP1ldGcH6MZ5bgIBIqMCzjLO8u8K61CQJGtONJLFwhwmpJvDajxfC263EKg8mo6WcFjuUFl&X-Amz-Signature=7bcf21e09e60b75576e3deebfc6c96bf12868dce3d23d78ec5ab8f48b3032d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

