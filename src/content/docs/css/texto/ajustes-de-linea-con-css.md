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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOLHJ5UC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwz8sLGrK1j3m%2FY6F18iIs9R%2B08w1%2FJ8MtQQ1RX5ulyAIgX7LMb1d6pyW7rWfx3XPtIIaWYLUvv0cW3%2B%2Be949EcXwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDvz5GxpvA%2BCamy3RyrcA3F69Bo2v607GiTifMFnsQ%2FdvfHHM6%2FrXGGo0mGyyYOfACQvI88YJzbPs%2BDnSa%2FzqczdxNu5Lrenf2%2BwjjwwG4Zkl5Ye1eUulHMseewdkefSW%2B6XLiAM18dwvKyP0OHntrd3DTtgEfGc9B8oJbu8kFhgrzzm0bwDJIG7li4cWlMbM8s0256BbVbIS8KF6jVZdexLdVIA88ixqwW8VYntbB27BehL6U6lwuBn003Gw%2FGgGtMAjK%2FGM0OhFahPh8RV677rvm1SKGlVgSIQsd5gpyZ6up8sdS96APQEzvQoloaas0jCVdxqM1u0oglLNzWGpNIsk79ammrZrM5ZlHdQIOjX2AInqSG6eY6mZdvll2KggGJyqL4hBuxYcbhyDUDEjL9xJXD7rXLsaH40G6db4KVnmGTx0ZiaqHOapyg4gGykD%2BS0GlWXnoqe5j9j24LtGS7SEtwMydLMlLoJU9hnGwKpEADs1liCvwua9Lhm0Jiq9C3XYwWinsprMx4xV4AsxG25yBQWFldqjjAA4Z74rjqkC%2BBZD0p9K%2FQaisWXtuN733yzs4k3fVSKb756d0nhYvnT1fTtHAbCYlRXooDz7bThTn70BXRXp%2BWovhaBP7S9nQkUMXO4AKfccgOKMN3OiMoGOqUBbZnJQ4%2FQZ%2Btxeif%2FfMPG40tuZYMFRarbyyeHbhKW1ikwWb2pEJGHELIHkShIAlKtaFk1p1dLDEl4tNsmZ5PwXvbT5ZvDrNn4srQthdGfwRFWtOL17t391jeuv2S7BHVSmHx3kD4EUNbL0lOjNO9qxh969i8eoAH4PLpujo74bH7FMZOqSPWE5zHHWxqzEb%2B3li9QagPFGODY6RqXYnssZxUbKDhS&X-Amz-Signature=da509c8fb9c425dfa6bebb3ebe1f48cbd5217ec8552d8810913777d61b3bbe0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOLHJ5UC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwz8sLGrK1j3m%2FY6F18iIs9R%2B08w1%2FJ8MtQQ1RX5ulyAIgX7LMb1d6pyW7rWfx3XPtIIaWYLUvv0cW3%2B%2Be949EcXwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDvz5GxpvA%2BCamy3RyrcA3F69Bo2v607GiTifMFnsQ%2FdvfHHM6%2FrXGGo0mGyyYOfACQvI88YJzbPs%2BDnSa%2FzqczdxNu5Lrenf2%2BwjjwwG4Zkl5Ye1eUulHMseewdkefSW%2B6XLiAM18dwvKyP0OHntrd3DTtgEfGc9B8oJbu8kFhgrzzm0bwDJIG7li4cWlMbM8s0256BbVbIS8KF6jVZdexLdVIA88ixqwW8VYntbB27BehL6U6lwuBn003Gw%2FGgGtMAjK%2FGM0OhFahPh8RV677rvm1SKGlVgSIQsd5gpyZ6up8sdS96APQEzvQoloaas0jCVdxqM1u0oglLNzWGpNIsk79ammrZrM5ZlHdQIOjX2AInqSG6eY6mZdvll2KggGJyqL4hBuxYcbhyDUDEjL9xJXD7rXLsaH40G6db4KVnmGTx0ZiaqHOapyg4gGykD%2BS0GlWXnoqe5j9j24LtGS7SEtwMydLMlLoJU9hnGwKpEADs1liCvwua9Lhm0Jiq9C3XYwWinsprMx4xV4AsxG25yBQWFldqjjAA4Z74rjqkC%2BBZD0p9K%2FQaisWXtuN733yzs4k3fVSKb756d0nhYvnT1fTtHAbCYlRXooDz7bThTn70BXRXp%2BWovhaBP7S9nQkUMXO4AKfccgOKMN3OiMoGOqUBbZnJQ4%2FQZ%2Btxeif%2FfMPG40tuZYMFRarbyyeHbhKW1ikwWb2pEJGHELIHkShIAlKtaFk1p1dLDEl4tNsmZ5PwXvbT5ZvDrNn4srQthdGfwRFWtOL17t391jeuv2S7BHVSmHx3kD4EUNbL0lOjNO9qxh969i8eoAH4PLpujo74bH7FMZOqSPWE5zHHWxqzEb%2B3li9QagPFGODY6RqXYnssZxUbKDhS&X-Amz-Signature=0859d66f5b286a54581feea5bf552cee72b11a2efa3122b43375b8d691a9fde3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

