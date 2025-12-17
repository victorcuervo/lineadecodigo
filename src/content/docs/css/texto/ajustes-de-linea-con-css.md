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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWW5GOVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpFRv0PH7TR83%2FwYycl35LRaLrnXIFGUHhdEhMpu%2BsxAiEAhFFpoc3B6NfQOO8XTlDcz5hOFYc3vNPQx4t3JTlG5RwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTikp1NeNWd453ftCrcA0Me40mOoLS%2BxSZ5KriRXP8h9eV%2B2RdWxpvAj8woEfmCDLuIDIK%2FJzWvGV%2FmEDId%2Fqxmixy%2BPrbE898NsM7j3%2FA7gZX9r%2F%2B29YM0OfYFMyHv6P8wm4YekAR8ZHxfIDMPrFCb9PG9T1U%2FOfIIY39CLigk0XBKiaJNgVtApQ0styJrIKYeOk4XTdXu3G2oJwPrxPsA8AOFj%2B5XIfZQruySWjiK%2BZ4EMRpD4ZdRfIdiZQGXDh53nQk0xWH%2BWcjQlDPMCO2OqjZwCZX7dVgCez7x%2FtCtJCeYQNcmuobWWORia0bpxNb1ATrkkGh3F9wWxN7TME8vJrKaI1RZXRGxAHJ3uLodboN5LqZiTrwvuqd93HarLFRcWaGnATCMYYSa%2F%2BR%2FwWV1qwkIqRb7v4Bn6ZjfpaS4jcb4VbNYGsCUYq1upZVpqGL9XITt6yo%2BknFKAaIf3l5AWbKMm2H80tI9b%2BxEQVI7V9%2BQ%2BHiRUrGrRy9JadFTF6TZ5coPQ4vz9nCmAghc1ECWIjCrVN5jMEZ%2F6rbc%2Bwl7Q0c3b%2BmBSPfpR677cpQdmGS7yTvxUx4pc0OoKNh6qLwBiMSZaUagnmI52uItGkrN7ykGgbHmpXTyZXLmba7ME0D20B07Y7t%2Bu66qMOSei8oGOqUBCmyVelCBzC1RT2cSaDk3scDfmrOseCGdf%2FmFP4Zfjt38hdv9OgaEcYXN8BpfuKCSm7LU3I1FSadKFyML8cHdNB7ULjNV8kxHl06OU3PlWH0e6wViQJpMoMjS2arG20Hr8y%2BKvcOV2aps57vPQ4X%2BewOjO4YSRaz6ZtX7jNn3N4acYYOBhvrUQucE%2Fa2Blofb23L2z8qfRogHpDJePam4gEbjtHUi&X-Amz-Signature=5f02974380547d1a37e19f2ca01c228114eff31e77882b829e007edc364e23f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWW5GOVV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpFRv0PH7TR83%2FwYycl35LRaLrnXIFGUHhdEhMpu%2BsxAiEAhFFpoc3B6NfQOO8XTlDcz5hOFYc3vNPQx4t3JTlG5RwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFTikp1NeNWd453ftCrcA0Me40mOoLS%2BxSZ5KriRXP8h9eV%2B2RdWxpvAj8woEfmCDLuIDIK%2FJzWvGV%2FmEDId%2Fqxmixy%2BPrbE898NsM7j3%2FA7gZX9r%2F%2B29YM0OfYFMyHv6P8wm4YekAR8ZHxfIDMPrFCb9PG9T1U%2FOfIIY39CLigk0XBKiaJNgVtApQ0styJrIKYeOk4XTdXu3G2oJwPrxPsA8AOFj%2B5XIfZQruySWjiK%2BZ4EMRpD4ZdRfIdiZQGXDh53nQk0xWH%2BWcjQlDPMCO2OqjZwCZX7dVgCez7x%2FtCtJCeYQNcmuobWWORia0bpxNb1ATrkkGh3F9wWxN7TME8vJrKaI1RZXRGxAHJ3uLodboN5LqZiTrwvuqd93HarLFRcWaGnATCMYYSa%2F%2BR%2FwWV1qwkIqRb7v4Bn6ZjfpaS4jcb4VbNYGsCUYq1upZVpqGL9XITt6yo%2BknFKAaIf3l5AWbKMm2H80tI9b%2BxEQVI7V9%2BQ%2BHiRUrGrRy9JadFTF6TZ5coPQ4vz9nCmAghc1ECWIjCrVN5jMEZ%2F6rbc%2Bwl7Q0c3b%2BmBSPfpR677cpQdmGS7yTvxUx4pc0OoKNh6qLwBiMSZaUagnmI52uItGkrN7ykGgbHmpXTyZXLmba7ME0D20B07Y7t%2Bu66qMOSei8oGOqUBCmyVelCBzC1RT2cSaDk3scDfmrOseCGdf%2FmFP4Zfjt38hdv9OgaEcYXN8BpfuKCSm7LU3I1FSadKFyML8cHdNB7ULjNV8kxHl06OU3PlWH0e6wViQJpMoMjS2arG20Hr8y%2BKvcOV2aps57vPQ4X%2BewOjO4YSRaz6ZtX7jNn3N4acYYOBhvrUQucE%2Fa2Blofb23L2z8qfRogHpDJePam4gEbjtHUi&X-Amz-Signature=4903dbb3293b19370d2c473eb4430fba9bab6b961789f4166b626d26e8e7b31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

