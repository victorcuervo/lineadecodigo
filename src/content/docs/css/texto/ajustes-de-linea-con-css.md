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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDMP5MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xYQGWUNfnw6PqORT%2BRb6zyCFgY3ItHzx3p25HA9y8gIgTAzHPARRcogrndixfJV6h%2BLdOCL1g28TK49eA2uz0g8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEVDgLgkl1gagTjWrSrcA2eCUEE%2Fw8C9y%2FgJkU9lBGJv4iMwO%2FeJ3YDofomLYbLY5zDdEmHklLHT%2F9boPVdLAkXVF3lMKUB6Dc%2BVmdtf%2FWp5JR%2FKGkVBImTolLLih%2Fxh6qgFYMPpYepq6KqOWRyZbw7qu0hzX3NlDAYcT1hGK5hfZToN1DjdLXaRltXsiUenPN62JJD8%2FqAxnYzaOSZJubQpoa7%2BxfOoqlpqma83TsCwGjJhogo%2B68QWtHpLVZUbdd%2FuLVPSOL8X3SLFuDnxAwnd09iAO%2FxCOu%2BDhdezzw90m5qPvjZoAmGLYyiPqX0ERzNDMAqW2KD0s5Gqdr1ZNJDNz9D5u5gVMnAy5PzQKnxS4wSO56HvOu2%2F57XXOb3Y5R6pGkizlwoqL5NDIg0vukn7hRh0YclXORKFzn%2FUpEB09bf1m2wiURBFD0HsRA5ymyp9gfW2hSX2n0hA9V5qCejEGk0pUatGxl3hSGZJslnabydt2bcLBrFYI4s0AfS26XI2OlAoRcXVPYoC7GrNf6pz5%2FaIA0MM2%2F3LiDhGvkBiJ3X4YK8LwakXlRAT3z09cw1OK3Rry8GUJUw7S3k1re82nMqnBnx1XAgiS1jmLm85tqQ%2FXV6jYUzpeiuIQVoGXChrvO0srqYSCp%2BRMOqyiMoGOqUBcqtEtgS1FnQDoHmcf1Q2KO8HeYGIh8GsY4FtMYHrDTTbu9gmtuhLGS76S%2F1wr3pkxnk1WpxwHjIxo9DgY3VPL7g%2FkQwGDzMsp4uq2dwc58eXoKvosU0LBa3crjzc7Alpb0icQL%2F4W8yIV4%2B9tWgpCCyqMpn1tEKoTAXxgC08h9Ic4SZbJogg0fiUE8bi9a1qVFQ1dGPc50pqBrpv7bCt4kdzyerD&X-Amz-Signature=2f1004c6ac95fffedae32ed8707cd164331abab0688421bd5cad51f0d4afb5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDMP5MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3xYQGWUNfnw6PqORT%2BRb6zyCFgY3ItHzx3p25HA9y8gIgTAzHPARRcogrndixfJV6h%2BLdOCL1g28TK49eA2uz0g8q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEVDgLgkl1gagTjWrSrcA2eCUEE%2Fw8C9y%2FgJkU9lBGJv4iMwO%2FeJ3YDofomLYbLY5zDdEmHklLHT%2F9boPVdLAkXVF3lMKUB6Dc%2BVmdtf%2FWp5JR%2FKGkVBImTolLLih%2Fxh6qgFYMPpYepq6KqOWRyZbw7qu0hzX3NlDAYcT1hGK5hfZToN1DjdLXaRltXsiUenPN62JJD8%2FqAxnYzaOSZJubQpoa7%2BxfOoqlpqma83TsCwGjJhogo%2B68QWtHpLVZUbdd%2FuLVPSOL8X3SLFuDnxAwnd09iAO%2FxCOu%2BDhdezzw90m5qPvjZoAmGLYyiPqX0ERzNDMAqW2KD0s5Gqdr1ZNJDNz9D5u5gVMnAy5PzQKnxS4wSO56HvOu2%2F57XXOb3Y5R6pGkizlwoqL5NDIg0vukn7hRh0YclXORKFzn%2FUpEB09bf1m2wiURBFD0HsRA5ymyp9gfW2hSX2n0hA9V5qCejEGk0pUatGxl3hSGZJslnabydt2bcLBrFYI4s0AfS26XI2OlAoRcXVPYoC7GrNf6pz5%2FaIA0MM2%2F3LiDhGvkBiJ3X4YK8LwakXlRAT3z09cw1OK3Rry8GUJUw7S3k1re82nMqnBnx1XAgiS1jmLm85tqQ%2FXV6jYUzpeiuIQVoGXChrvO0srqYSCp%2BRMOqyiMoGOqUBcqtEtgS1FnQDoHmcf1Q2KO8HeYGIh8GsY4FtMYHrDTTbu9gmtuhLGS76S%2F1wr3pkxnk1WpxwHjIxo9DgY3VPL7g%2FkQwGDzMsp4uq2dwc58eXoKvosU0LBa3crjzc7Alpb0icQL%2F4W8yIV4%2B9tWgpCCyqMpn1tEKoTAXxgC08h9Ic4SZbJogg0fiUE8bi9a1qVFQ1dGPc50pqBrpv7bCt4kdzyerD&X-Amz-Signature=94874cc9097ac00038b7f132c46d0501f291810754e52b396808c9923b990347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

