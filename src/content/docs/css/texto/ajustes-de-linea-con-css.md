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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5ORGPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBi6GYDfUrtH2HUjE3WIZ8FcQKSHL3iF76Pk3LbHdUXAiEAmRIZcS0hwbPsmBGv4Ai2yf%2F2z%2B1YKVnSpu35wVWmqnkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbb3DCL3aXzjVB9ircAyfaqg7XtSLP9Que98YPAazB2DhrpuyQpIPGvM4Mwig8Zf49WvOkBeb5XUD6qrtiZZ7C8aEGW3c1xRuJVeTIRgYL0pklbznRhTaknCOIOPNW%2FQ3axbypIHQnS2im%2FcynLuJpwx0ua5TRXI%2BNm%2FFi6AHj5jw35QqUzVDF2UOBxIn3TwqqutsHR0GzeCV6C1pPriEzVY7lDzCObyQz3iC7ktw9Ce8JB3qcIZovmUozR%2B4NGqvhoHticBk9fGWQJogmuMujv05zGwMSx9DjU5fHJbPKYTCazrTP%2B2XX09FO8AcP4or4WNuWnAk7IaubWa905PXuHFkfOyyJllGxFdO76IakZEoZcASlzJYHIxggLSabZdhhD5QDIgcrn6qBNi7qJfx3zjDjmPtReBAKho7KBAZrE%2Fy1vcCBxnxrYbp3a62NboauQRGf1wsoyUlCMq3im%2BLBL5%2B1Vb%2FTI5AvcFARbsZZ%2BbPt6M5mFAfjo1rsQ5%2FQA0l5U5D52tuHBmSg49ggHNsVqsvnCmuri%2B1XDcCPohifAPXh6GAhglIRxfPwWUbv1S%2BA1IBIDKxjHc9qIzHS%2BY59IiFB6kMz671n8%2F3Ue%2BzwfskwsFT2rm3lVmoLFA3t0WaIy0ftFS%2FndM5IMMOfi8oGOqUBsomW1MLW1MzJ5s9AU%2F3XJTfoIsj1KwwLwFiBw33hb34wYLPK0RbJzT%2BrMi%2BA5iYyEHIqplL2I%2Bmv0xQRnPdZMpWD4ALyDaHOxqXlco2Nhbwy1IFREuhEV0F9TaClVyJndtcMyjVGTKDHTEEyqFhWdMIMft7mki26xGTrR%2FHuXr%2F42t4z6cXKakPzRERE09zG%2FTli%2FD02dLGfoEl%2BvO1BAyq1vBiw&X-Amz-Signature=87f4afbd499b20dd67bc3a46df4269c55d1c3ffec6e8240e83f896cbdc027d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M5ORGPE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBi6GYDfUrtH2HUjE3WIZ8FcQKSHL3iF76Pk3LbHdUXAiEAmRIZcS0hwbPsmBGv4Ai2yf%2F2z%2B1YKVnSpu35wVWmqnkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXbb3DCL3aXzjVB9ircAyfaqg7XtSLP9Que98YPAazB2DhrpuyQpIPGvM4Mwig8Zf49WvOkBeb5XUD6qrtiZZ7C8aEGW3c1xRuJVeTIRgYL0pklbznRhTaknCOIOPNW%2FQ3axbypIHQnS2im%2FcynLuJpwx0ua5TRXI%2BNm%2FFi6AHj5jw35QqUzVDF2UOBxIn3TwqqutsHR0GzeCV6C1pPriEzVY7lDzCObyQz3iC7ktw9Ce8JB3qcIZovmUozR%2B4NGqvhoHticBk9fGWQJogmuMujv05zGwMSx9DjU5fHJbPKYTCazrTP%2B2XX09FO8AcP4or4WNuWnAk7IaubWa905PXuHFkfOyyJllGxFdO76IakZEoZcASlzJYHIxggLSabZdhhD5QDIgcrn6qBNi7qJfx3zjDjmPtReBAKho7KBAZrE%2Fy1vcCBxnxrYbp3a62NboauQRGf1wsoyUlCMq3im%2BLBL5%2B1Vb%2FTI5AvcFARbsZZ%2BbPt6M5mFAfjo1rsQ5%2FQA0l5U5D52tuHBmSg49ggHNsVqsvnCmuri%2B1XDcCPohifAPXh6GAhglIRxfPwWUbv1S%2BA1IBIDKxjHc9qIzHS%2BY59IiFB6kMz671n8%2F3Ue%2BzwfskwsFT2rm3lVmoLFA3t0WaIy0ftFS%2FndM5IMMOfi8oGOqUBsomW1MLW1MzJ5s9AU%2F3XJTfoIsj1KwwLwFiBw33hb34wYLPK0RbJzT%2BrMi%2BA5iYyEHIqplL2I%2Bmv0xQRnPdZMpWD4ALyDaHOxqXlco2Nhbwy1IFREuhEV0F9TaClVyJndtcMyjVGTKDHTEEyqFhWdMIMft7mki26xGTrR%2FHuXr%2F42t4z6cXKakPzRERE09zG%2FTli%2FD02dLGfoEl%2BvO1BAyq1vBiw&X-Amz-Signature=f9a9366ad0ef83100d45171c93cc825253d2f846ee85dda4fd353836a88eb77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

