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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZSHO6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAaRQjORobHaF9v0rGiCd3q46Y6EF15GFDIHUwDEqsgIgRTM5Nozzrd%2B1PXB9ApnIxHLEYbUxpOWdoZDCwdz7JpIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpGKzkgyP25Tv4liSrcA4nxh0V16kFncY0MHjqyQ3FOmdj8burOVBBamn0ESBI%2Fo3ItwsXvX7AtxzsxpiSWFYZO5CI2%2BpLAkxlxu5%2Bl6RNyVRDgUve22Hd53kmwi%2B37boDTo6KCzDPp3VDso4ucw2xomRcJAqU3THMfY8PbKHR6fFxWQkhO3qR1KYv7Hj5%2Bx%2BC1%2BlEtC2hbat18IYeomZffQ74AJDWx5PZDxnjQnLqsJiBhCAaH%2BGHimcinBhz1wPPWHCOYCeScGw5hDQSC8bcwt2y9MByTJmEfjPQc0fbOqjSRnN639GNBq%2BDksNvjz7v82yRK7EQs7dVy8tQ6iBofL9BMBOBKJ9GMPY9CeEwlpeUCYIsiRMW6GBiGTeE1Dtu8hCh%2Fqhw9%2Fr2fdvOWDBHgajX%2BFarM8C2gaWQ3I0CiH174GYRx%2BMrOcMQ%2B%2BzoBdiQrzkhhpGTL1gGTNCXnYA9HTDQnqe%2BG6h82k7SXNU5Zawqh7QoMwEIxN4nYx3a0ndDMZ9oavOXNK6i61CR7EWhsOY%2FcI24kiY23fksGiebVSu0Aa4TMyHDdj1OU%2FPTZYqGGr40B53IrGb061GSQpEqeXRX8gqGhmOiodVPSfhU7GYjhqPdl80SuMLO3DDzwpYWgoaEsnATfzhlbMN6gi8oGOqUBbs4AeisclxysTGcwiA6p9f5vgnRpBn9oR%2Bk8a25EFkDKxjsxNhhm0lvRC%2BkXgNAMflhq78B2fcFjwMw1CyyqWJ5RwFKABkR6rEWaXGqwt5Ic5UCGTcrxp%2FMQK%2BcNmlIGh%2FwwSeLuyN5I4T3z4iozcc0fwVRiHugRhVIyQVPaNTHUE5FLByQXlZa5shSRDCB1YkoO4Bp6oCUAhTU2%2FOj%2F3jz0TNeu&X-Amz-Signature=cf9aa23d4e00f256299b29cc581f02432d790097f60dc98aa4a76571d2e144c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZSHO6A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLAaRQjORobHaF9v0rGiCd3q46Y6EF15GFDIHUwDEqsgIgRTM5Nozzrd%2B1PXB9ApnIxHLEYbUxpOWdoZDCwdz7JpIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpGKzkgyP25Tv4liSrcA4nxh0V16kFncY0MHjqyQ3FOmdj8burOVBBamn0ESBI%2Fo3ItwsXvX7AtxzsxpiSWFYZO5CI2%2BpLAkxlxu5%2Bl6RNyVRDgUve22Hd53kmwi%2B37boDTo6KCzDPp3VDso4ucw2xomRcJAqU3THMfY8PbKHR6fFxWQkhO3qR1KYv7Hj5%2Bx%2BC1%2BlEtC2hbat18IYeomZffQ74AJDWx5PZDxnjQnLqsJiBhCAaH%2BGHimcinBhz1wPPWHCOYCeScGw5hDQSC8bcwt2y9MByTJmEfjPQc0fbOqjSRnN639GNBq%2BDksNvjz7v82yRK7EQs7dVy8tQ6iBofL9BMBOBKJ9GMPY9CeEwlpeUCYIsiRMW6GBiGTeE1Dtu8hCh%2Fqhw9%2Fr2fdvOWDBHgajX%2BFarM8C2gaWQ3I0CiH174GYRx%2BMrOcMQ%2B%2BzoBdiQrzkhhpGTL1gGTNCXnYA9HTDQnqe%2BG6h82k7SXNU5Zawqh7QoMwEIxN4nYx3a0ndDMZ9oavOXNK6i61CR7EWhsOY%2FcI24kiY23fksGiebVSu0Aa4TMyHDdj1OU%2FPTZYqGGr40B53IrGb061GSQpEqeXRX8gqGhmOiodVPSfhU7GYjhqPdl80SuMLO3DDzwpYWgoaEsnATfzhlbMN6gi8oGOqUBbs4AeisclxysTGcwiA6p9f5vgnRpBn9oR%2Bk8a25EFkDKxjsxNhhm0lvRC%2BkXgNAMflhq78B2fcFjwMw1CyyqWJ5RwFKABkR6rEWaXGqwt5Ic5UCGTcrxp%2FMQK%2BcNmlIGh%2FwwSeLuyN5I4T3z4iozcc0fwVRiHugRhVIyQVPaNTHUE5FLByQXlZa5shSRDCB1YkoO4Bp6oCUAhTU2%2FOj%2F3jz0TNeu&X-Amz-Signature=f60c5ead34902dd17078315b64a6db563497f682523918c29a6fb8909f6ebcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

