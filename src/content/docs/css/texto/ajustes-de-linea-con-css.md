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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCMJ37E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BKcSC0hysZxtrthS7OMBbrMSvbWri1uTUfk1ynME8XAiEAnvNVRMlTTjDyFHK8GMgUmG0mzNREnDZBg5K5AuCHRqsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPK7WOJBuKDPNInOZCrcA7piOA1AjN2fXw4TjE6CsxbqnlLp6ZyoOTXlQz2kXgoI5xEwjSYTj%2BzeAW8kTifrr3MV2iKlkHvvEWiTxzpHlN%2FldbmU3muzE7j7vcJxAWqwij1yzwtbhIOjt2mLnPMgEZfcMC%2FH8JW5XVDLpzqcQLfrsSfxaHDB7Rrwmvb9sfGYKb8WTEKZm9eTduV8VB1NsQB8rCCP%2FlUm6jkcEo9EldSQCLBjjX59G0DYnHfnkLCmqMS9%2Bb2XMDkLVxRXtYwiUe4QuEpf3UJ4CxDuEd3OS4pBEesjOpEjZZfPAPeVHyEfUo6kywSD71K5MWdCnZgHi9pOGuFcc3VxbdP5ILiNEH0oHHncs3IJZSkbRVo7zOcMqdnbtAG8vfZu5KXBne3dYjQwH3tRrWKAcr8q%2FtyFAx3I6kosS7jDVsFqLXSrDt%2FTEEdtAS%2FcTteQJO3Xs%2FoMQQAZnET9x4iV%2BEuoB2NN9MDqXn8iL6GvKCNWFQCiQ%2B5s0uMP7oJbpjjliWiHWtfb%2FR4vEiwW0Kca0c2IAsRrfuu03uXXJIy4wKAjbOZqBh9Y7kxxGv%2FGoXJ1Ykix7543UJA3WtvDTp4Cmc3gmTdl57swalDSNuNNf0GdbJrUa2j%2BwAxSETVyRSInVvDgMJyDicoGOqUB3srQYvEQ3B%2BSRzJub73RwVtAKYd0wzSuefmeW4w0xgSjcTainYV46lC5SiwS%2F5i4ygk7tkoiikA7e8h8p%2B%2BpJiU7UXw4GauFXEKUzwjC%2FWVhyEYC61lWk%2BvTup8e%2B%2BOmZpdB%2FPMDi%2B1gieoXoKsjYmg5lYTlHM0w4mj10%2BKwPy%2BF%2BpZ2l%2BV5Wphj%2B2p944SmAzN5DorMnfoT9jkyIlTD6uAr4tLH&X-Amz-Signature=41fc5873e62be558a0415974ab09eb210b2e86061823632f8855c4eb94f7d287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCMJ37E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BKcSC0hysZxtrthS7OMBbrMSvbWri1uTUfk1ynME8XAiEAnvNVRMlTTjDyFHK8GMgUmG0mzNREnDZBg5K5AuCHRqsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPK7WOJBuKDPNInOZCrcA7piOA1AjN2fXw4TjE6CsxbqnlLp6ZyoOTXlQz2kXgoI5xEwjSYTj%2BzeAW8kTifrr3MV2iKlkHvvEWiTxzpHlN%2FldbmU3muzE7j7vcJxAWqwij1yzwtbhIOjt2mLnPMgEZfcMC%2FH8JW5XVDLpzqcQLfrsSfxaHDB7Rrwmvb9sfGYKb8WTEKZm9eTduV8VB1NsQB8rCCP%2FlUm6jkcEo9EldSQCLBjjX59G0DYnHfnkLCmqMS9%2Bb2XMDkLVxRXtYwiUe4QuEpf3UJ4CxDuEd3OS4pBEesjOpEjZZfPAPeVHyEfUo6kywSD71K5MWdCnZgHi9pOGuFcc3VxbdP5ILiNEH0oHHncs3IJZSkbRVo7zOcMqdnbtAG8vfZu5KXBne3dYjQwH3tRrWKAcr8q%2FtyFAx3I6kosS7jDVsFqLXSrDt%2FTEEdtAS%2FcTteQJO3Xs%2FoMQQAZnET9x4iV%2BEuoB2NN9MDqXn8iL6GvKCNWFQCiQ%2B5s0uMP7oJbpjjliWiHWtfb%2FR4vEiwW0Kca0c2IAsRrfuu03uXXJIy4wKAjbOZqBh9Y7kxxGv%2FGoXJ1Ykix7543UJA3WtvDTp4Cmc3gmTdl57swalDSNuNNf0GdbJrUa2j%2BwAxSETVyRSInVvDgMJyDicoGOqUB3srQYvEQ3B%2BSRzJub73RwVtAKYd0wzSuefmeW4w0xgSjcTainYV46lC5SiwS%2F5i4ygk7tkoiikA7e8h8p%2B%2BpJiU7UXw4GauFXEKUzwjC%2FWVhyEYC61lWk%2BvTup8e%2B%2BOmZpdB%2FPMDi%2B1gieoXoKsjYmg5lYTlHM0w4mj10%2BKwPy%2BF%2BpZ2l%2BV5Wphj%2B2p944SmAzN5DorMnfoT9jkyIlTD6uAr4tLH&X-Amz-Signature=9846040832366c7915b730dabd203accb51c325f63939a499d97b273dcfe4191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

