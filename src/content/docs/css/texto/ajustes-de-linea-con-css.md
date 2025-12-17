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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=26e38e3ef6bd9ee341e2eb2c3852f0baac4e0ad6d85c87f3221104880381ce0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QHAJWKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi31fRlWqrLZZRbvM8VqxUsykz%2B9oVOCDqTNP7T4tfWAIhANfNUq209H0VcbzEbKHLL2Hayk7sk1xI1dvwPOU1O5D0Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyaEKrBCX8j%2F0%2FvHFMq3AOqdA4VljwYkBjBrxDtdf7TnYYN8yHUMCWDD3j3lqKvxm%2B%2FIt680cNrN3PoIzYnvsKogPsqid1MXFASUOY1E10%2Bx9BsTw7U%2BO%2FkadrRHY1WVhIos85iavvlNC1XF0%2FCfBDfiobH%2FO972WcZjkgQL%2FCZBgyYlnsWk40EQUVKGEUcHqC4yfGaHTHYf18eRhLwdfFuGwJ3N5pLhkKcFGFoC0Atmb3w0hhGFKlTi5D6e3wywXgySjzj7d1ywilezYgixNvqsJChWVoC5LaJe5twf1DVYglv29bWJOFBYeTGF58CPmBy7Lwif3MGSsX5HJT3a2EurQA8JgpwsfYg78bNs9PPD4xBVXEAzF%2BNGDAx8YJmzO65BAUdUgGVEiEhCju8IQKxGZwIOF6Z7QhZuN9EkOE9%2BWLu4MHdGcOMlxCo6uPUtkKlSh%2BStpXxy%2Bn1eFbMcnLxjzLu375mud6lfyYaeCMUPkC1AAhpRRsOF8t%2Bh1ETMrlqy%2FTqTtBXnbs9SwGyoKeOkGZuPL7PbiFW6s0YMvPO9270zzxOd8xph%2FaPc24QCU6c4MiboTGji2k41M5ioYTg6gPJEHOPgfnpl8vayuKjQKUu2qjwAYzXR4dvIDBreJOqqYrJV0GOCR5GujCZ%2B4fKBjqkAdisqgXrxTgcz5Y23kebILMTkhKh8G4TLMxSP1%2Fdbk6KyKFnjvjiLBpygu1T%2BSBScJhLEaRx28NVfYaDlNGy0WSv9bZCc1GOYC3083q%2Fy%2FOKY2YR2CCP3g7YorA8JjYbQOb3qb8fj%2FRElce4QQXj1g4LPb1BL2w191uzsHrXHNwQugkfT2yWm7VHhexO%2FOoyT%2FSRNEpXUNq9oFuNIHHAGhiUWSn4&X-Amz-Signature=137f5af9cb3c60a6e37c3257bba856bff3d800e7c558cf43b671a3350f2f53e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

