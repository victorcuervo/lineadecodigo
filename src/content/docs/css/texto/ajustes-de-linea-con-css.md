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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHZ5E2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8T2OgNE%2FTgcikfofevFRSMfDX70HnUgRm5TdYadMrrAIgQMuD1jkdp6Uov5a9gKU6T2pxXuUYqAvnP2OeXoc8Lzgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMs6153ODPMLL%2BAxuyrcA1WgHJ5p3qVs6QRVZPkNnufALHwRZcUNGHpKQmS7A9aEIPyVzMC2S4zpgr288dmApPoW%2BEGSUHSG18SL%2FntfQoLcoiJO%2FdNfiDpYr72jYP1ggeVxE04PEWS5p%2BbFUAS7Mo0DzREJD9zuy0DYDJxHoQw8tZLxPuejdFZT0d6p8oRo85juviG7zfeCW%2FrO2kQQma0DbuIZteQ3zspWbuVxxDgpqmGb9X0W7SCcWug0io%2BqG0yHpxfpvWFVUf1N93oW9H9sjYSs2epqP5lUHBK6LU9C6PAoTtryWQApDDnOw1Xz2ppZCxFL0X0XZXXJS%2FZy%2FpCc0Bj%2Bwj7Mb7G%2FoucgV8AaWLumn0wKmB4bhXA0NP%2FiZ8roI48gnVFhvPWQIMHe1ivoGgT%2FBYmgRZ9i8aTV5lHbyLbVe%2B7S0t8KJR2aidELgn56qsj35JLZVa8tT8tjBDeXowjGnijlC9b81tKQMzBYhnsYsPRmQnESIZRgwNbW%2Fbt2pVwA%2Bg9y%2FqBk5s4FUeFtKE9Uv3I4Gb%2FcY1C6gkuFD7S3B9jLwL2rqfEXxHO7DCCi5OCbA8kjmUVpFGeYD2BmzHVnrvAraMrygcMBXf4UbNna7qikwY1ZaBfq6X9dyYtV%2BaCkVeciGjHNMMXOiMoGOqUB2PqXghdldr%2BZcFFiAQFoR1GkUGC4wKZc98KCkqJOS5LSVs6kmeIhqVVN6HKirjEhI2k7abyHGIkFj0C1xiu23STrCUk4WcHtexG1e3BP4%2BNHplhWubf9HFYb4rwS%2F1sVNSFVNFuX%2FnZzNVr%2BPD1hxt3HiA6vo9jo2z5VW2XM%2BXfPpUCxVsypYek9MAo0407xBAWDAhvvlx5FbO87P70NhJXTTv7R&X-Amz-Signature=a0adc3269e8250459a23cb1d499f8d1d51448538ae2dab4145300ea4c455840e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHZ5E2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8T2OgNE%2FTgcikfofevFRSMfDX70HnUgRm5TdYadMrrAIgQMuD1jkdp6Uov5a9gKU6T2pxXuUYqAvnP2OeXoc8Lzgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMs6153ODPMLL%2BAxuyrcA1WgHJ5p3qVs6QRVZPkNnufALHwRZcUNGHpKQmS7A9aEIPyVzMC2S4zpgr288dmApPoW%2BEGSUHSG18SL%2FntfQoLcoiJO%2FdNfiDpYr72jYP1ggeVxE04PEWS5p%2BbFUAS7Mo0DzREJD9zuy0DYDJxHoQw8tZLxPuejdFZT0d6p8oRo85juviG7zfeCW%2FrO2kQQma0DbuIZteQ3zspWbuVxxDgpqmGb9X0W7SCcWug0io%2BqG0yHpxfpvWFVUf1N93oW9H9sjYSs2epqP5lUHBK6LU9C6PAoTtryWQApDDnOw1Xz2ppZCxFL0X0XZXXJS%2FZy%2FpCc0Bj%2Bwj7Mb7G%2FoucgV8AaWLumn0wKmB4bhXA0NP%2FiZ8roI48gnVFhvPWQIMHe1ivoGgT%2FBYmgRZ9i8aTV5lHbyLbVe%2B7S0t8KJR2aidELgn56qsj35JLZVa8tT8tjBDeXowjGnijlC9b81tKQMzBYhnsYsPRmQnESIZRgwNbW%2Fbt2pVwA%2Bg9y%2FqBk5s4FUeFtKE9Uv3I4Gb%2FcY1C6gkuFD7S3B9jLwL2rqfEXxHO7DCCi5OCbA8kjmUVpFGeYD2BmzHVnrvAraMrygcMBXf4UbNna7qikwY1ZaBfq6X9dyYtV%2BaCkVeciGjHNMMXOiMoGOqUB2PqXghdldr%2BZcFFiAQFoR1GkUGC4wKZc98KCkqJOS5LSVs6kmeIhqVVN6HKirjEhI2k7abyHGIkFj0C1xiu23STrCUk4WcHtexG1e3BP4%2BNHplhWubf9HFYb4rwS%2F1sVNSFVNFuX%2FnZzNVr%2BPD1hxt3HiA6vo9jo2z5VW2XM%2BXfPpUCxVsypYek9MAo0407xBAWDAhvvlx5FbO87P70NhJXTTv7R&X-Amz-Signature=88ff68e7c50e882c0bfbe8d0333c1c84b195b9362ddaa9aacddeddb2e5d48bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

