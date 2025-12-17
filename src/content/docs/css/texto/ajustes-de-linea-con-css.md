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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZWAABQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3v5i9iddlVlkpuQkXEoF1Hh2EYSAqq%2FxGrjQr4XlvCAiAledvBXdW%2Bt5QO5IaY0oN2ssow7Vuj9DkK%2FabWOoFRyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEVS78iBqGTVjzrHNKtwDhemyoS%2BA8BFXF%2BRJ2%2Bk%2BvOB1yqJwZ1W%2BUdI0Z2cVa2LLRcCsrUX5Z%2BFJf6yBfuoKoI5%2FLDsaNIFOfC8la%2F11uJUCyWpiQ6Bymr7%2BJkjywjXwEz2F9V3guod2TPByJ0tRT2nxjfzo4h2ghWn%2FS4%2F6oHQDtwpCCJrMEhS3Vq5A%2Fqm1rqGAXlhJmuxL%2BRFvivgWawagI9dITY2KQKEjFwBV5hCTtALEFvk0f3f5lFTggWyDF9KuAaAyO7tNw1pSEi90s8IxsrULEwzT7UrNePxvkvWWUgEt5mFWNTQs0kDfbnIL9%2BasXOB5fIWxv%2B1kcFMmlTTA1qfZhzy0SjLh3qw03PMhAP6x5stEml2DMwZbWGC%2BMjCZcnz71HGjcfJTEepyXOzcmbltGZnC22Aw4nnqsdfK4yje3%2Fre071yGH7qt47qL8wzFXItc5AICg3ZNdPle7%2B%2Bq1CDEI6UQadpj9IGNjBNUZnz4eKkoPeRhEXODl7UVxhvcu2Mp9Hc8uyCHPJ1HOdzY06N%2BcC54BXU0K6EFBMacGt1gPPqVHgsYB2J6DB3FCASoS88BSX72%2FzhwgNY6u0NEtWBFLpugw3Xb4mkXr1j3LOq2bAt3tJH1j4kctOWl7OnYm7P1wi6w60w4vuHygY6pgGSueZLOP9WH95A2WLWWU7tn4l06Af3GKGtmXEHDePYqufnsGaak1lsflEBhVY14rWOwLigV0kVKAu6bafbjeZHxvtb3prOw%2FmYuh5frJQmMKXZwCWv7HM0XrAqjAPpWsV5FqmJKVgEr6y9WcUSbiazb0E5Y9yEA7P33pb0%2BoczpiP7JPIWLF69RKwGlPS6vopV6TuNkdOjv4BJ1xp55aUJRMZze3Ty&X-Amz-Signature=388f56897df95598e12a528e6b6a81ad5b1ddb0dda6790d2b82f13e0bd513d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674ZWAABQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3v5i9iddlVlkpuQkXEoF1Hh2EYSAqq%2FxGrjQr4XlvCAiAledvBXdW%2Bt5QO5IaY0oN2ssow7Vuj9DkK%2FabWOoFRyyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMEVS78iBqGTVjzrHNKtwDhemyoS%2BA8BFXF%2BRJ2%2Bk%2BvOB1yqJwZ1W%2BUdI0Z2cVa2LLRcCsrUX5Z%2BFJf6yBfuoKoI5%2FLDsaNIFOfC8la%2F11uJUCyWpiQ6Bymr7%2BJkjywjXwEz2F9V3guod2TPByJ0tRT2nxjfzo4h2ghWn%2FS4%2F6oHQDtwpCCJrMEhS3Vq5A%2Fqm1rqGAXlhJmuxL%2BRFvivgWawagI9dITY2KQKEjFwBV5hCTtALEFvk0f3f5lFTggWyDF9KuAaAyO7tNw1pSEi90s8IxsrULEwzT7UrNePxvkvWWUgEt5mFWNTQs0kDfbnIL9%2BasXOB5fIWxv%2B1kcFMmlTTA1qfZhzy0SjLh3qw03PMhAP6x5stEml2DMwZbWGC%2BMjCZcnz71HGjcfJTEepyXOzcmbltGZnC22Aw4nnqsdfK4yje3%2Fre071yGH7qt47qL8wzFXItc5AICg3ZNdPle7%2B%2Bq1CDEI6UQadpj9IGNjBNUZnz4eKkoPeRhEXODl7UVxhvcu2Mp9Hc8uyCHPJ1HOdzY06N%2BcC54BXU0K6EFBMacGt1gPPqVHgsYB2J6DB3FCASoS88BSX72%2FzhwgNY6u0NEtWBFLpugw3Xb4mkXr1j3LOq2bAt3tJH1j4kctOWl7OnYm7P1wi6w60w4vuHygY6pgGSueZLOP9WH95A2WLWWU7tn4l06Af3GKGtmXEHDePYqufnsGaak1lsflEBhVY14rWOwLigV0kVKAu6bafbjeZHxvtb3prOw%2FmYuh5frJQmMKXZwCWv7HM0XrAqjAPpWsV5FqmJKVgEr6y9WcUSbiazb0E5Y9yEA7P33pb0%2BoczpiP7JPIWLF69RKwGlPS6vopV6TuNkdOjv4BJ1xp55aUJRMZze3Ty&X-Amz-Signature=60c39610a11f7175e579f5963a14af4a347d53f5e08662b9f218e06916818320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

