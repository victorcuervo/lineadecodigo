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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465MZZAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZkS2Gc5%2Ft9vgQ10wC2yRt00QxVu1ZcGRwKNDYOjICgIhAN%2FpTbtKrMEJ2mh3ZLh2fKXcM3STJZETpfFsF%2Bi8qE3HKv8DCHsQABoMNjM3NDIzMTgzODA1IgyTiYENfjcaaVcVxYUq3AP2egz2dujA74cyz4SmTNX1NQK6bUeXOLspmREbevSYQYUsxmcXSrv1K2%2BQX%2BxhW%2FkVC2SVXpwwJX4agwpQctDgvYuQiPXGjvDr%2FmbhVKkkFDARpNiKrbuJ5tVeeZ1GX%2BCFXmRXS7jdmJSKoHV4uWZqmjGJLMUPLy1kbyoMh687GQXhrL0lnPAevk%2BGjwCIlqRMKmu3IlakUZeEClBSVYlx%2BddRdxYQgAW%2FkCSpt19%2BSkIfx6htAwcYJqzMqiaWham0qApr7zjIsFVUVDgwjRDUZadsXCbzwKpZr%2B9s1HDrBtatq1mIekes8r%2F408NNU%2BtCRMvvmRF1x03pECnSEbZTDEnEKIdUHGTfvUsWn9oRRwJaK3web2CBaevma3dXuu5%2FTX2Pz2KMClOVvjHgrxI8KFPd23rd9YEzLXHEa%2FZIk6bKgTHf18gfWblnMO37fcWlknctYXuhIzPqy%2BzlQNVWh3CgcLjVkz2s7xpwQyVsxBtt53Ud6xIfdlIdbp%2BjR4g7N82SRYV9dSzpoqX9eTPYofaKdzhXBhfYs1Mt5iKfosBbGp6BSo1UJHfLfDV6Ux6fjDPA%2FGgMicV7%2FG27JvRoBzXEyc7L5%2BQbfOtXAKYHHEKx5gu5GZCzL5X0bjDH8InKBjqkAbZlsV5KDHmhwUh%2FDagoMymGLFXb7oU6Tb2ljaUP2dDFJIEDvBMT4BxppBSeK79VIuDhX%2BVJIjJBPih7Ooq3v0ZAMS4WOds7UUvKb2x%2BiWqlTmNWr1vX3SsiMFSe6U9suU%2BwWdT%2FfbQalVslDDajz%2FJMMxO7qZbYHo%2F2Oi51B%2FNV4ojQBQP5%2BQTrYfqiywLyPqK%2F7%2FioVIhOPm488edQUngIfFb0&X-Amz-Signature=d09da43803808946581d60b4ec7ff58888bf7d387e24879ad88cbef81405d42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465MZZAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZkS2Gc5%2Ft9vgQ10wC2yRt00QxVu1ZcGRwKNDYOjICgIhAN%2FpTbtKrMEJ2mh3ZLh2fKXcM3STJZETpfFsF%2Bi8qE3HKv8DCHsQABoMNjM3NDIzMTgzODA1IgyTiYENfjcaaVcVxYUq3AP2egz2dujA74cyz4SmTNX1NQK6bUeXOLspmREbevSYQYUsxmcXSrv1K2%2BQX%2BxhW%2FkVC2SVXpwwJX4agwpQctDgvYuQiPXGjvDr%2FmbhVKkkFDARpNiKrbuJ5tVeeZ1GX%2BCFXmRXS7jdmJSKoHV4uWZqmjGJLMUPLy1kbyoMh687GQXhrL0lnPAevk%2BGjwCIlqRMKmu3IlakUZeEClBSVYlx%2BddRdxYQgAW%2FkCSpt19%2BSkIfx6htAwcYJqzMqiaWham0qApr7zjIsFVUVDgwjRDUZadsXCbzwKpZr%2B9s1HDrBtatq1mIekes8r%2F408NNU%2BtCRMvvmRF1x03pECnSEbZTDEnEKIdUHGTfvUsWn9oRRwJaK3web2CBaevma3dXuu5%2FTX2Pz2KMClOVvjHgrxI8KFPd23rd9YEzLXHEa%2FZIk6bKgTHf18gfWblnMO37fcWlknctYXuhIzPqy%2BzlQNVWh3CgcLjVkz2s7xpwQyVsxBtt53Ud6xIfdlIdbp%2BjR4g7N82SRYV9dSzpoqX9eTPYofaKdzhXBhfYs1Mt5iKfosBbGp6BSo1UJHfLfDV6Ux6fjDPA%2FGgMicV7%2FG27JvRoBzXEyc7L5%2BQbfOtXAKYHHEKx5gu5GZCzL5X0bjDH8InKBjqkAbZlsV5KDHmhwUh%2FDagoMymGLFXb7oU6Tb2ljaUP2dDFJIEDvBMT4BxppBSeK79VIuDhX%2BVJIjJBPih7Ooq3v0ZAMS4WOds7UUvKb2x%2BiWqlTmNWr1vX3SsiMFSe6U9suU%2BwWdT%2FfbQalVslDDajz%2FJMMxO7qZbYHo%2F2Oi51B%2FNV4ojQBQP5%2BQTrYfqiywLyPqK%2F7%2FioVIhOPm488edQUngIfFb0&X-Amz-Signature=602f7552a72594ba27535a8e2b8802b70e31cf9d731b05b35e73a7d58eb2c729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

