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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KVNJA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwlnMj63LCZXYnS8ww%2B1MxUG2BXBmuVJkC0eL4yZ4SYQIhAOJQoD6MJQ%2F%2BcDroRj1%2FoIs2uIB6MnQvYg8CyxvNb4TBKv8DCHYQABoMNjM3NDIzMTgzODA1IgzoxcbuSZYIRKA9K1gq3APFlUWvHnnRuk%2BCqC8p1N1Z%2FddDyGnBdxQGyrhKRT%2BnUey2puVPEKTAfrVyktTZqb5Y%2BAf2cInYay6Yp9S2r03LmTj3JRZ2wxx5o913%2BaBXdS9aQvdsyyCQPwn9inz1WohlfJoSLLOP36bvioWNZ5wMIk3NfFLqfzGIkl4tTbNOAEhuNSt1hxJM2WOTCxs%2BNHNRLtkwm%2FRYTTWPHlpICMkdNWj8iF%2BGrICGuNhrzaFndjqhhqJfsI8V4qfDz5CBUft2jywULPf2ttaTam%2BQyD0ROoFHFqmtlMrJjki9hSvT6j%2B75zRRzq1bOSt%2BJrPQ8trpzw6sLxdEK17nRPmach5zTfzy76zpfqqfNI0itAvJA9cMkbuABGL3ZHM3hYi0AeApU%2Bmqsfq0tTtgKC0s%2FyKI0Jr8PUIn%2BJD2Bh4R34fAyAgKx03qt1QbCqY1ax5btEpG8hc%2BcUwc7QuSYba3j0uHq0Ijl3MWpUY%2BW%2FR9zswvp7bn2Ipcn%2F%2Bvbywd8OdVeqEyh3TRKUPrwRYf4zw02K%2F%2Bau58GmaxvXFX09RXiwwgSQvEFJOz4Nlb27Kiu9C%2F1QD%2FHWq8t%2FZE7Z5i7ZkbWZtWqRQTx2XdMIb0LRB0D%2FAGrVpeC98ixBx6iLcS0DCM6YjKBjqkAdGmhFYPUHnnDw8NyXrMbH3fNsa%2FMBVnN1tnpA8iierG9gFpaoSnhUuxsi%2BO3mP%2BepEK7Sf3c2Ky7tCL6oomvDEXHRKjnZJfVHQZxhtgNhZQfNlDsYIM9yVlSOPdnejpy1ufPLdUf9EwJ4LgnasOMSbJc21UtgGN7SbddGQB5kdGIsip548o%2Boq7KSNgHyqhshYdX7%2FVQANHQH4et0vJAJAGaQlI&X-Amz-Signature=4d8d1af486fb3bdbe04ac5e2bd58a6e5ab914129da43e3675fd7a80407737c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KVNJA2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwlnMj63LCZXYnS8ww%2B1MxUG2BXBmuVJkC0eL4yZ4SYQIhAOJQoD6MJQ%2F%2BcDroRj1%2FoIs2uIB6MnQvYg8CyxvNb4TBKv8DCHYQABoMNjM3NDIzMTgzODA1IgzoxcbuSZYIRKA9K1gq3APFlUWvHnnRuk%2BCqC8p1N1Z%2FddDyGnBdxQGyrhKRT%2BnUey2puVPEKTAfrVyktTZqb5Y%2BAf2cInYay6Yp9S2r03LmTj3JRZ2wxx5o913%2BaBXdS9aQvdsyyCQPwn9inz1WohlfJoSLLOP36bvioWNZ5wMIk3NfFLqfzGIkl4tTbNOAEhuNSt1hxJM2WOTCxs%2BNHNRLtkwm%2FRYTTWPHlpICMkdNWj8iF%2BGrICGuNhrzaFndjqhhqJfsI8V4qfDz5CBUft2jywULPf2ttaTam%2BQyD0ROoFHFqmtlMrJjki9hSvT6j%2B75zRRzq1bOSt%2BJrPQ8trpzw6sLxdEK17nRPmach5zTfzy76zpfqqfNI0itAvJA9cMkbuABGL3ZHM3hYi0AeApU%2Bmqsfq0tTtgKC0s%2FyKI0Jr8PUIn%2BJD2Bh4R34fAyAgKx03qt1QbCqY1ax5btEpG8hc%2BcUwc7QuSYba3j0uHq0Ijl3MWpUY%2BW%2FR9zswvp7bn2Ipcn%2F%2Bvbywd8OdVeqEyh3TRKUPrwRYf4zw02K%2F%2Bau58GmaxvXFX09RXiwwgSQvEFJOz4Nlb27Kiu9C%2F1QD%2FHWq8t%2FZE7Z5i7ZkbWZtWqRQTx2XdMIb0LRB0D%2FAGrVpeC98ixBx6iLcS0DCM6YjKBjqkAdGmhFYPUHnnDw8NyXrMbH3fNsa%2FMBVnN1tnpA8iierG9gFpaoSnhUuxsi%2BO3mP%2BepEK7Sf3c2Ky7tCL6oomvDEXHRKjnZJfVHQZxhtgNhZQfNlDsYIM9yVlSOPdnejpy1ufPLdUf9EwJ4LgnasOMSbJc21UtgGN7SbddGQB5kdGIsip548o%2Boq7KSNgHyqhshYdX7%2FVQANHQH4et0vJAJAGaQlI&X-Amz-Signature=f314f43d42cdf323dfe4c812f0b8bfc1ce8bddfea6e0158fb6be45cdb50cd768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

