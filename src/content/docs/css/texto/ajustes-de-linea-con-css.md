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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7A7ZJ45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Mk3Qywo5u1gZi5mOMHcn3VyrBspRejbl%2BCWXHGD8AwIgDyTIAczcuFqJRNXSTUwsyVydHNoj4hdUcZJtI7qyOQIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOtLZCiPA%2F2SnlIsCrcAydiPlwijde1KTE85jhGx6m2%2Fs1TaBPnYlnmhhXmiMbUkNsTGWAq6hHoziLFYqZPHuryZyJUSUTHJ%2BhVGTGsjp%2FOiE2MP0egSGm2RQLD1BqPfOTPq8Azh0zihn%2Bsi8cE62GPR4THX1t3gH%2F6S7xL88BVAcQyUWJwKjLdhbhwGIne8C1jsGMQZDpR%2BopyMCIEicY17ixYMFegsPCkwcZNzv1%2FNTp8J2de41Ax4mwNAaXyFMbC5pJ6Ccnx90p8mh4bk2iByY0brwp9K1lvGG5YT7Q3VSRiMwcjMKezYxq289Pyc39yB8b38YfUxT2iTq1lJj7RRqjv9TsdZXZdNHmxSww3QaqzXhYTGvnwCZjdSFXsGSEaYHZe7O9cBfdWzxfNFpfkpRY9wlMW2qNjNI4cAOA2KesxMgfH1zVmkrgbra5bGno2%2ByiLgTT9s99d3TX47oLnqYx2SOfYUQZM%2BSOPndzGFZ%2Bt2d9PQjtcIaPWCxDBzRX%2FLCQS77HkxTzWchfPcaMYkAA4pxz9bVfHf9LmmCanmEYxXEiB4eOw4ngoUyIllzEspWz5yiFLdcMv3H%2BILuGvY0BB1J%2BKHTZBOz94yMfKPQ31WGTsHfdhoDd56wTKwAmKDMvKP%2BIaNOhwMOetjMoGOqUBwDCaiGLyL%2BewlJAT%2BoXICOTjzaUEJwW9ZQ5DH2pVyOulaaWcntnjrwI7aOI1KX50Is1f5yno35yxwODMVp8W5u2voxyC1CHFIZamOBAqf8NIsbMSl0wEULkVsRUxoWoZJ3pmNwvRTKUKcZj4%2BAkml1ou8j9BBbIBzHGEtd2dhaDOQNMwYVFFFwAYqUjzBEM9jCLoVIN%2BGvJa9zY8iHvPm2t2rPlR&X-Amz-Signature=9d3640d6877e0cd2cbb5f594268f4fc1d085d88b25a24a51004a6245bd000bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7A7ZJ45%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Mk3Qywo5u1gZi5mOMHcn3VyrBspRejbl%2BCWXHGD8AwIgDyTIAczcuFqJRNXSTUwsyVydHNoj4hdUcZJtI7qyOQIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOtLZCiPA%2F2SnlIsCrcAydiPlwijde1KTE85jhGx6m2%2Fs1TaBPnYlnmhhXmiMbUkNsTGWAq6hHoziLFYqZPHuryZyJUSUTHJ%2BhVGTGsjp%2FOiE2MP0egSGm2RQLD1BqPfOTPq8Azh0zihn%2Bsi8cE62GPR4THX1t3gH%2F6S7xL88BVAcQyUWJwKjLdhbhwGIne8C1jsGMQZDpR%2BopyMCIEicY17ixYMFegsPCkwcZNzv1%2FNTp8J2de41Ax4mwNAaXyFMbC5pJ6Ccnx90p8mh4bk2iByY0brwp9K1lvGG5YT7Q3VSRiMwcjMKezYxq289Pyc39yB8b38YfUxT2iTq1lJj7RRqjv9TsdZXZdNHmxSww3QaqzXhYTGvnwCZjdSFXsGSEaYHZe7O9cBfdWzxfNFpfkpRY9wlMW2qNjNI4cAOA2KesxMgfH1zVmkrgbra5bGno2%2ByiLgTT9s99d3TX47oLnqYx2SOfYUQZM%2BSOPndzGFZ%2Bt2d9PQjtcIaPWCxDBzRX%2FLCQS77HkxTzWchfPcaMYkAA4pxz9bVfHf9LmmCanmEYxXEiB4eOw4ngoUyIllzEspWz5yiFLdcMv3H%2BILuGvY0BB1J%2BKHTZBOz94yMfKPQ31WGTsHfdhoDd56wTKwAmKDMvKP%2BIaNOhwMOetjMoGOqUBwDCaiGLyL%2BewlJAT%2BoXICOTjzaUEJwW9ZQ5DH2pVyOulaaWcntnjrwI7aOI1KX50Is1f5yno35yxwODMVp8W5u2voxyC1CHFIZamOBAqf8NIsbMSl0wEULkVsRUxoWoZJ3pmNwvRTKUKcZj4%2BAkml1ou8j9BBbIBzHGEtd2dhaDOQNMwYVFFFwAYqUjzBEM9jCLoVIN%2BGvJa9zY8iHvPm2t2rPlR&X-Amz-Signature=e0e5edffb190c1f1593543142645507a1ab087b13618572e83d1f2204ed96623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

