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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6SJ3TV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7fdNFzewLjYHWZd21ac8M9yRvOQEstjd9TzX5L6QhJAiBRiLSGbdUrFbmJOR1pAtz4n5UxQV8ts1vvSSHsjAqBeyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7X%2B1zZTxLYI9wuSKtwDFhjZrORISVNFxTmMEl54%2FYrkCq5gD6n1Et7HgkZEKINsvxIZfkQbN898RijAYGHGSdDxmW1dasrvxmM%2BcQFfx3Al%2FNBYH%2ByyGH1SIfuQALw3TayhEJZs1yrl%2BZStH36ZdChMespnf8cmGcfOD2XQrSXx4k4Y9uEmKiFDbfcgZOwYaGCrsGmJzdp%2FNgBYaSQZnPA%2BIYDenXlLbRiBjpEYSbyl8Mw%2B711I3cs4JL7VdavPyNSJaYR4fyolsiBWnD7qnI0xgszLMxVRK8KwfsdG%2FGeX%2B8LVRtCRGP0zA8b4QG1rDutTdIQNgK1pG9tvTS5naws%2BGDnO%2B5GN1M%2BA%2BQ1XV7YhsjoatQnQereCEUH5KuwfihlrLD3RxNez4nEHDQ3%2FYljEIbF7Upmxj8CDXKD1D7%2BOIAwBHoVpnWU2Xa6PYRvDCyqk4ADgGRMzuC5dJhEBwaLFOp4ow%2FqbUXE15DnuFOT9FhXUuJ%2B17Ibl0kaA9vObg6QqX2O9Dq7MWBaUY10VxvLeQCgAg%2Byvpu%2FArhjsw3%2Br0Q3xiybJ837WolpEQb4UmYJ3C9MdkvZckf1EyoAIISGaSRcUMrXVBnWgKa8HWQYZed%2BOT3AJ%2BRSDaP6cSFaZyio4n4ZTy3aSdFYw0p6LygY6pgE5PW3acscHtqEh6HDAYaADSnHnCJEoupgJRLAeZflEsZQQ5FLEDyQdhhoQLglm1PZpbH1HqNLkFOzgjhYFgN436Ip1QIQpfT4YscTNkLonAMtNOwk0axRu9zoi4u99ZD4adCoetMA3lnhTVcsEYHLl4zc5yrPMeOG9wMdRlSFZ5XJSCL2O3YOJxrmIxZCkbuVravoirWZO%2FkyDXCFjohqCnmTx7R1v&X-Amz-Signature=47d6cfe8a513c8438185ae95c7258b1c45340836571e27320e8b271700f9bd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6SJ3TV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7fdNFzewLjYHWZd21ac8M9yRvOQEstjd9TzX5L6QhJAiBRiLSGbdUrFbmJOR1pAtz4n5UxQV8ts1vvSSHsjAqBeyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7X%2B1zZTxLYI9wuSKtwDFhjZrORISVNFxTmMEl54%2FYrkCq5gD6n1Et7HgkZEKINsvxIZfkQbN898RijAYGHGSdDxmW1dasrvxmM%2BcQFfx3Al%2FNBYH%2ByyGH1SIfuQALw3TayhEJZs1yrl%2BZStH36ZdChMespnf8cmGcfOD2XQrSXx4k4Y9uEmKiFDbfcgZOwYaGCrsGmJzdp%2FNgBYaSQZnPA%2BIYDenXlLbRiBjpEYSbyl8Mw%2B711I3cs4JL7VdavPyNSJaYR4fyolsiBWnD7qnI0xgszLMxVRK8KwfsdG%2FGeX%2B8LVRtCRGP0zA8b4QG1rDutTdIQNgK1pG9tvTS5naws%2BGDnO%2B5GN1M%2BA%2BQ1XV7YhsjoatQnQereCEUH5KuwfihlrLD3RxNez4nEHDQ3%2FYljEIbF7Upmxj8CDXKD1D7%2BOIAwBHoVpnWU2Xa6PYRvDCyqk4ADgGRMzuC5dJhEBwaLFOp4ow%2FqbUXE15DnuFOT9FhXUuJ%2B17Ibl0kaA9vObg6QqX2O9Dq7MWBaUY10VxvLeQCgAg%2Byvpu%2FArhjsw3%2Br0Q3xiybJ837WolpEQb4UmYJ3C9MdkvZckf1EyoAIISGaSRcUMrXVBnWgKa8HWQYZed%2BOT3AJ%2BRSDaP6cSFaZyio4n4ZTy3aSdFYw0p6LygY6pgE5PW3acscHtqEh6HDAYaADSnHnCJEoupgJRLAeZflEsZQQ5FLEDyQdhhoQLglm1PZpbH1HqNLkFOzgjhYFgN436Ip1QIQpfT4YscTNkLonAMtNOwk0axRu9zoi4u99ZD4adCoetMA3lnhTVcsEYHLl4zc5yrPMeOG9wMdRlSFZ5XJSCL2O3YOJxrmIxZCkbuVravoirWZO%2FkyDXCFjohqCnmTx7R1v&X-Amz-Signature=2f3f93d2ff48fc9d0891cec8a8bcfa5de9b26b320b455f2bf31d132795486946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

