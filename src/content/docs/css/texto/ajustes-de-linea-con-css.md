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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=f3e4fe24dfe235f45a8bf236d6877626cbd6ec4e5aa04fe2210851f60dfc6abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UUPNG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATHk1L0WqLDZh2XyL5Z7Ti7vU70moFgIHhitVOmJLulAiEA%2Foqpqg0HrDBNSs6Qu%2BJqCXemtY1IegkWysslDHHo37Aq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEVzdm%2FQvcIG0N1mCCrcA2hculeMMDuWnYwDl2t5CK9sezdb%2B%2Fr0HxwsxOTgSDJPGhuBHECP6zpWn%2BOgGqHLdKFkZp8lOxepZQox8qxVGymn3l4yKZUXHxwDcW%2BMq3uzZ6DqYPTjgsWeRtFBaABQgnmuTDbZe6%2BCrFd4erIfe9Tn5myJPvn4AuhnRm7jpPfpD55b%2BstOPBBvplAsD3clvphW3as68zVLWKexT4MsgdtLq3tksq343ySN0yawQpyurF3ZHu3IQWzIoGzMCPbM4pox%2Bhbyd9ZR5MYk0VZ3h%2F%2BLZGj1HkrQcvZZtx8TsuTfoZZrIfsOLtoyWlPzvxM9LY2p9oMHoJoeiPe%2F24T7s0fHsNk8ST%2FMGDf5CJhizXxG9BL220z0s2BcwQ%2FtxcS53sNz1RgOHKjvRaoDbme9ibpTwreVsnClGnKYbfb6OG6sIZO09aksdCLce8GMW9ciXDlmlVZ5FbkQmFFusHeBrS%2BwSGaJ9YxadCWxTJ%2BpnKAwyOeVrixFS6ywG99EOkYhDsqLiTIwmhNc0%2Bw2YRjpwOIFQfvIbOaXoellsNmwWC%2FSBHDiTE7tWm5%2BpNojCEQ4PCVe90s5Ou1qSzv3AkCUAkYABeUU3ISvp8gF4RfcONvlAtMqMAhmu1iV7QRBMJz7h8oGOqUBiAgvyZxrwTMveEoVHLDjhvtcek78zhdmwAoM9K19AbLUoDPcPopu7cHeJRKBiiCVUy0ofBLaTbkA6Lf6CQFUCfAeDhH%2BD%2FrNWs7lQsTo%2BYfRmP0PqpUBtjTOdqzwKMOYbAtkByegSVjvfmuko%2FsYxI%2F5pOY7aqD9znqNZfdkT4RozihMN8qB2bvoR6t%2FAXnHDbLJvVE844CBHIhW1ivtFzlfNtER&X-Amz-Signature=d5b5662dc87ff2269c94543e526030b1d0cd58a45fa8bed3d835934492b85e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

