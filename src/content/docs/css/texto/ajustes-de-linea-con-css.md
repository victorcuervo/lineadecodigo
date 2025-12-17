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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWGP4T5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWkYj7rgn1wD6j0U1n9VDMv3azfLSa7j2F4kp6sJHsfAiBvCkvzlXOAGk5LGl7%2B5ZSd%2Fn1Ivr9hxX6YVz7jeeQJ7Cr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMp%2BBIWbpchaMshWx0KtwDUjiPfvbt2W6DsovIGA8%2BtjMSKJTtOP9forG%2FNWAp71MQB9bAT0BGn8Af8nAxzsrWcGfKPH1VuwsXdQ4KEbSHaiAdtwFWQyZlkKAjUThixwPRJC3pwUSnd1Xk3uNe9MnJYvK40UUhWDPHq1zpDSss%2FvF4xc2jEIoapJy7M%2BeORzOGsVSbXnEaRWvAeifD3FyVcIqJLxKKNz%2BABTnjSNJsKgpngHntDTNXptmWTT%2Bdivn4MWyls3K6ieoMibQhr1hOyoQn%2FbSeswq5WC%2BWMQIGRLp%2BaVMCDCSKb4vtFbbbTgZUL4xgMfVEOPU3g5rt%2B05NyqsIZ6TBFHkA0vr%2BP8x31Cq%2BLvKkPSdOYUjQOZwbi1LHRONsQXABlQioLGrrLC3BI8d9x%2F80cI2ZB7JX6MsSKPU%2BdFjCZ5XojoJ3Gr%2BjLTlOFzseywOIRft2Pa39Zb7zTOFTZmcoyX3Tvf0LkzIsBvvZUJYbsRwh1oZcWLawKrLTEtaFRTi2gh5a7H2jltHCZsvVeDmbEZC4gB%2B3fNQPQHMgKdPaL41U2l5p0VM1tppThFuT720G%2F9zDMSdNt0xdZhN1YUXvWcmxoc5t3z0qMRhd%2BkQkopQ1pBnI7EYpjpvU3fXRVep83WfOeV4wweGKygY6pgGnid8njitabG3PoRFUfcRK2BaK1enWUWOwjUgnk%2Fvk3MlawVxqhJ6iHX5dYt8ssH5oHd3Cj49GRw3Pk1DCvZk2UBbhm8EJMJx2ngRdUW6hZIfFk5FYS2MDFV7WPWrKDQjP64u0Qxn5lY2Z69GsLAcd83FtgzDLk9DuNeTrTWi2YF2kexdU2jynsLnq0inyx65HTE%2FIsiWWSLedJju7XtyGDsFC1lq8&X-Amz-Signature=8e18dbc63ad836734fa92dbd2a921b227f51840b3667e9e3cf58597f7ea747ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWGP4T5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWkYj7rgn1wD6j0U1n9VDMv3azfLSa7j2F4kp6sJHsfAiBvCkvzlXOAGk5LGl7%2B5ZSd%2Fn1Ivr9hxX6YVz7jeeQJ7Cr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMp%2BBIWbpchaMshWx0KtwDUjiPfvbt2W6DsovIGA8%2BtjMSKJTtOP9forG%2FNWAp71MQB9bAT0BGn8Af8nAxzsrWcGfKPH1VuwsXdQ4KEbSHaiAdtwFWQyZlkKAjUThixwPRJC3pwUSnd1Xk3uNe9MnJYvK40UUhWDPHq1zpDSss%2FvF4xc2jEIoapJy7M%2BeORzOGsVSbXnEaRWvAeifD3FyVcIqJLxKKNz%2BABTnjSNJsKgpngHntDTNXptmWTT%2Bdivn4MWyls3K6ieoMibQhr1hOyoQn%2FbSeswq5WC%2BWMQIGRLp%2BaVMCDCSKb4vtFbbbTgZUL4xgMfVEOPU3g5rt%2B05NyqsIZ6TBFHkA0vr%2BP8x31Cq%2BLvKkPSdOYUjQOZwbi1LHRONsQXABlQioLGrrLC3BI8d9x%2F80cI2ZB7JX6MsSKPU%2BdFjCZ5XojoJ3Gr%2BjLTlOFzseywOIRft2Pa39Zb7zTOFTZmcoyX3Tvf0LkzIsBvvZUJYbsRwh1oZcWLawKrLTEtaFRTi2gh5a7H2jltHCZsvVeDmbEZC4gB%2B3fNQPQHMgKdPaL41U2l5p0VM1tppThFuT720G%2F9zDMSdNt0xdZhN1YUXvWcmxoc5t3z0qMRhd%2BkQkopQ1pBnI7EYpjpvU3fXRVep83WfOeV4wweGKygY6pgGnid8njitabG3PoRFUfcRK2BaK1enWUWOwjUgnk%2Fvk3MlawVxqhJ6iHX5dYt8ssH5oHd3Cj49GRw3Pk1DCvZk2UBbhm8EJMJx2ngRdUW6hZIfFk5FYS2MDFV7WPWrKDQjP64u0Qxn5lY2Z69GsLAcd83FtgzDLk9DuNeTrTWi2YF2kexdU2jynsLnq0inyx65HTE%2FIsiWWSLedJju7XtyGDsFC1lq8&X-Amz-Signature=d8d202e73bbe018aa2b59cd5e27b780ef6cca51a2ada483efeef8b51a2774c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

