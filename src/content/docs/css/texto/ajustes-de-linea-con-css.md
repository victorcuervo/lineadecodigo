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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU6IIRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZTPlqN02J7N%2BYZv6F%2BdBKOJdOhMFHdLv69YeWcnFUAiEAqmZlI7BvLS%2BinASUfWurJAEDpv2tU%2Fl5ZQcGK%2BjvWuMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLyBwB1sghk5BA4Z4SrcA90cpIrIWnEP2Hh5C25wD0BgoGzb4BJ21QtYxecO4uj0p2Rh21n2ZR1HplpSFlvAkJUU%2Fka8xZeuOweZ6wQH5rj8l4CA6JNzpgyq46P8ZjQKDclNecBzCnBCgN0x45jCLeysBN0GlhBS6pSyeWaolc6Wnkhp7bJNWsiCpr7JUhwHE%2FGGgUgvtE6Ot8G4D3bPehBRhlXra%2B3eUKOsgjFy%2BLsvwq2pSmyTdzlRI5aDSSA4giL%2FLMR3HMuTmSBTMPplh%2B6Ql8OE0oC8cilJgNzKGiikNQ30tE2%2FYedIdLdjUzCRJejARzSbNUfrRJqgFpBjJ6duqTMqPbVM5s%2BvB9h3%2FkiWfPeltiD7D4A8VQMhck9xH35pvCwTbi4%2FXD%2FbDNudXcBHSPauvRFdWGQMr3YGidwuuMKuzohdF%2FSeGbJaGHs1MZ%2F2zygXbBgPhG0PIAF7FcGr6UGm4Xd97eHOQJOggjJXiLJuZckMSO0e8Us2DSLJzjHx0k4dpdbWMqM3r13z1jTR%2Fq60bSsw19I%2BqnkCMgSLmypZNfHvTQJ7Dc2yoZH6lPaw3mjyPbUb%2FM00qmkYTuKe9XwvENZGvNk9OcVXb%2F8nT4z51nTjmiMf6k74xk1sarFxYIyiTWDjXnTkMMDGisoGOqUBCR6B6sSKK7TGDoadjeu4kukWyja8v9O8GL0fVAdKZJFFKiNavCSwZTGTwNBdp66o%2FJj%2FSSWaZV%2BcrOlAoED%2BIgQHdnRgNR0jOagToaXfQ%2Fhjfdjc1MsSd71aiiYM%2BceD21xxIzKJem%2BvKOvvhpC2bludbgL32Vw35uWKI8z7fPZT8yVtaiJVdcL4jY9VDJE8yMFuTcmu75Ss9IskoSJxu0DcTsF6&X-Amz-Signature=774b141a674e9600537c9cac54fdb26e46738724441112b3d6fcdf114130432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZU6IIRN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZTPlqN02J7N%2BYZv6F%2BdBKOJdOhMFHdLv69YeWcnFUAiEAqmZlI7BvLS%2BinASUfWurJAEDpv2tU%2Fl5ZQcGK%2BjvWuMq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLyBwB1sghk5BA4Z4SrcA90cpIrIWnEP2Hh5C25wD0BgoGzb4BJ21QtYxecO4uj0p2Rh21n2ZR1HplpSFlvAkJUU%2Fka8xZeuOweZ6wQH5rj8l4CA6JNzpgyq46P8ZjQKDclNecBzCnBCgN0x45jCLeysBN0GlhBS6pSyeWaolc6Wnkhp7bJNWsiCpr7JUhwHE%2FGGgUgvtE6Ot8G4D3bPehBRhlXra%2B3eUKOsgjFy%2BLsvwq2pSmyTdzlRI5aDSSA4giL%2FLMR3HMuTmSBTMPplh%2B6Ql8OE0oC8cilJgNzKGiikNQ30tE2%2FYedIdLdjUzCRJejARzSbNUfrRJqgFpBjJ6duqTMqPbVM5s%2BvB9h3%2FkiWfPeltiD7D4A8VQMhck9xH35pvCwTbi4%2FXD%2FbDNudXcBHSPauvRFdWGQMr3YGidwuuMKuzohdF%2FSeGbJaGHs1MZ%2F2zygXbBgPhG0PIAF7FcGr6UGm4Xd97eHOQJOggjJXiLJuZckMSO0e8Us2DSLJzjHx0k4dpdbWMqM3r13z1jTR%2Fq60bSsw19I%2BqnkCMgSLmypZNfHvTQJ7Dc2yoZH6lPaw3mjyPbUb%2FM00qmkYTuKe9XwvENZGvNk9OcVXb%2F8nT4z51nTjmiMf6k74xk1sarFxYIyiTWDjXnTkMMDGisoGOqUBCR6B6sSKK7TGDoadjeu4kukWyja8v9O8GL0fVAdKZJFFKiNavCSwZTGTwNBdp66o%2FJj%2FSSWaZV%2BcrOlAoED%2BIgQHdnRgNR0jOagToaXfQ%2Fhjfdjc1MsSd71aiiYM%2BceD21xxIzKJem%2BvKOvvhpC2bludbgL32Vw35uWKI8z7fPZT8yVtaiJVdcL4jY9VDJE8yMFuTcmu75Ss9IskoSJxu0DcTsF6&X-Amz-Signature=4307bc63fc94ff4a2fa17983a063e547d72c24b7c61f49a3efecc9543e757523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

