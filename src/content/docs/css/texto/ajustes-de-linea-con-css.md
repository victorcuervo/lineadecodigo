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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAJ7O46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDv9yspjxZ7Iw4kBS9jgi7rvSEGZGw9X8ETbVVhEBQLAIgL%2BYXI3lLl4jUzBf3e9rU23vmuyat6Q19lYx8h%2B%2BmzEYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEsISw%2FOvO%2BNke5elSrcA7dKOReqQXDlh5b8VWzNRpaNk8gvt09vLabYkEjPrz4qMuldxFM5Kh%2BJ6Hxb7Y2jzoPxd3MCfXpYOC%2FSX0iiirokJmEv8vJp%2Bvyq9MMvcfoGkwOwE1UUDtm4Z%2Bz6Oz%2B5VVTsaYuRjDbEkk2aXrzuJ2Xr89bFgXpcjNSG5PwK7NlDpbllbRSvb3dCGVVrOEODNIqnOngS2S8z9zMoHK2tiUqCbECGJY%2BnNJe7tsWn4kpIp2zmCFyRBtddkASFtxyPD%2BChtNmYEECulfd8ILEM1RuMfafuYKAvvkKRRX%2FpxcqAiMyVoltPfeJd6Cfl0r3CBvnx2Wqg%2BtJOMCCctRKH0rAcb%2B1MTOKB4XK5cJC2p36s5H5pG0xYqVuw0DWbHOh9fNfoA8oRWDNRaevkdEf0%2Fb914ydZMcvZYY0wRUq1cYtRLwz0i4A7Rm18FHNwzynb1vDIiWTDS0IFFH5JYskHm6fCSVRSwKeSdCv8vxBfbp7QZXPtl3UWdn7jmE%2FDxwNSRPheu92lwpW67gCmLYlyGRu4OxYnVLbiH5fQkqvTgjJzWZc7sPlqf7HptTqZRnN0lePSMTIF5JTehj6W9p4%2Bn5LJ77puAOClN%2F1%2B%2Fs8BY3FR9BPyBgEOK4JG2FGAMOWPisoGOqUBTMM8AAFfvDIjXKgV7QXU%2Fqr5RIvSAkzFsUyI3pEskRWhsxlLoRskUXDNlNHtCd9MCnb1kIGNsjvj5pH8kkq8iFWVvN%2Bz%2FKM7KjuTPdwd%2FZ1Q1df%2BymxpnzmwT4%2BK1Pjtw6Gi0M%2BEO8%2BVh4XQS7071Uy%2FV7c07MLn5kdrCua%2BFtk%2Bql439cKE1Oq%2BXOWYGiEJg0IDCplNXewnVeFIAsg15NsfMSs5&X-Amz-Signature=3e7c5fcc17a018ef1f68efe24c7410c214c4c2ed70567e93bb1f6e0081dbe60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXAJ7O46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDv9yspjxZ7Iw4kBS9jgi7rvSEGZGw9X8ETbVVhEBQLAIgL%2BYXI3lLl4jUzBf3e9rU23vmuyat6Q19lYx8h%2B%2BmzEYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEsISw%2FOvO%2BNke5elSrcA7dKOReqQXDlh5b8VWzNRpaNk8gvt09vLabYkEjPrz4qMuldxFM5Kh%2BJ6Hxb7Y2jzoPxd3MCfXpYOC%2FSX0iiirokJmEv8vJp%2Bvyq9MMvcfoGkwOwE1UUDtm4Z%2Bz6Oz%2B5VVTsaYuRjDbEkk2aXrzuJ2Xr89bFgXpcjNSG5PwK7NlDpbllbRSvb3dCGVVrOEODNIqnOngS2S8z9zMoHK2tiUqCbECGJY%2BnNJe7tsWn4kpIp2zmCFyRBtddkASFtxyPD%2BChtNmYEECulfd8ILEM1RuMfafuYKAvvkKRRX%2FpxcqAiMyVoltPfeJd6Cfl0r3CBvnx2Wqg%2BtJOMCCctRKH0rAcb%2B1MTOKB4XK5cJC2p36s5H5pG0xYqVuw0DWbHOh9fNfoA8oRWDNRaevkdEf0%2Fb914ydZMcvZYY0wRUq1cYtRLwz0i4A7Rm18FHNwzynb1vDIiWTDS0IFFH5JYskHm6fCSVRSwKeSdCv8vxBfbp7QZXPtl3UWdn7jmE%2FDxwNSRPheu92lwpW67gCmLYlyGRu4OxYnVLbiH5fQkqvTgjJzWZc7sPlqf7HptTqZRnN0lePSMTIF5JTehj6W9p4%2Bn5LJ77puAOClN%2F1%2B%2Fs8BY3FR9BPyBgEOK4JG2FGAMOWPisoGOqUBTMM8AAFfvDIjXKgV7QXU%2Fqr5RIvSAkzFsUyI3pEskRWhsxlLoRskUXDNlNHtCd9MCnb1kIGNsjvj5pH8kkq8iFWVvN%2Bz%2FKM7KjuTPdwd%2FZ1Q1df%2BymxpnzmwT4%2BK1Pjtw6Gi0M%2BEO8%2BVh4XQS7071Uy%2FV7c07MLn5kdrCua%2BFtk%2Bql439cKE1Oq%2BXOWYGiEJg0IDCplNXewnVeFIAsg15NsfMSs5&X-Amz-Signature=2069ace41a02f93f6f5e9636f108438b35e28f8b82b369eba2ec329990017fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

