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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEI53RER%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSrsq85VEqQkTGI%2FDLl53RWrsw%2B%2FhLoZPEC69qj1fRqAiA3Ogj5R%2Bi4DI8mnfZlxpR26SITUP79L4KVny3JhMxSXyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FNReb3%2FsHYND%2FI%2BNKtwDiblgDcssoEKTNs4%2B%2FhN58gwFZItHHLdZEvucJjhnXHmUxfynD4xDbxKh03MINZMjkROidj6WhjnWs5Vlibs7B7qdlLfYHe2lBbRVmbhdQfk7i2wEYVOnrAhfa%2BD1e5QevB1FqH1oU8wzihKAsYRBSVzVP6IB7IywYBA5k6zlzIr6KPwXK%2B3rywlWeksuHsug67b7rEhdR04qA%2FJAiwz16PLzp%2Biq6%2B71PKvNTjil0zJOhf%2B8OiFq7L1re6DWsXHTz0EeV8YxQdOzOCssQBJw7vlyn6Yh%2ByjtqOzcK%2B2vmTzgiTPwoKN%2F8BLRo0HvIS8FJfUBxksSKRl5SR7dcVY21O589Q6mx8Ct%2FjkYrXCQn2AbcHkPrE2wkEx33hNHtB%2BFCWVYpybjCblU8%2BpFDX1%2FvneZRS4dY4YfiMicMaH5d8c%2BoIjbTjXfx3wURCZPuDmbj6DkxxqDRw7%2Fu%2BEiPsGSzRe9jPgBps%2FWgdpxaz%2BQawlNLSs0CkpLhdx3Py1FodF9K04OsuO9HDPS7yAvV2zLDgFmYRpLbHj9%2FZU4CZBbQzr4VCEJsshI4nTZrH8B07quxOpn0Y3OWSP9tP2GPOdHlKQ9%2FNnS1P2yrDWoIiPrzpfAKWfmPdKUGB00kW8w6%2B%2BJygY6pgEWuekGMRHWXn5XjOvOw3wauNxYm%2BAoVcz9dAiDuytohSQfaG37KggI5wB3OHXRSMLVoCZkZrF4Y43QLnBMP6RjtkA95OoguEw8dMyti%2BF0uGidzxGknCWr23%2F3Sf7yG0HmqmyUIp6g0Fbt6mVzz5zUrG0dZNCNSe2qvKkfZ%2F4vYjCklarjmC9O%2Bw6N6WVeL8OfSXRb%2BhI0tOU6WHaVakeSEHr5TeeZ&X-Amz-Signature=8db242f0a1912c6fb46bc623c0dd8a25eeb295a0503b09d12b21c3852e7e8819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEI53RER%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSrsq85VEqQkTGI%2FDLl53RWrsw%2B%2FhLoZPEC69qj1fRqAiA3Ogj5R%2Bi4DI8mnfZlxpR26SITUP79L4KVny3JhMxSXyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2FNReb3%2FsHYND%2FI%2BNKtwDiblgDcssoEKTNs4%2B%2FhN58gwFZItHHLdZEvucJjhnXHmUxfynD4xDbxKh03MINZMjkROidj6WhjnWs5Vlibs7B7qdlLfYHe2lBbRVmbhdQfk7i2wEYVOnrAhfa%2BD1e5QevB1FqH1oU8wzihKAsYRBSVzVP6IB7IywYBA5k6zlzIr6KPwXK%2B3rywlWeksuHsug67b7rEhdR04qA%2FJAiwz16PLzp%2Biq6%2B71PKvNTjil0zJOhf%2B8OiFq7L1re6DWsXHTz0EeV8YxQdOzOCssQBJw7vlyn6Yh%2ByjtqOzcK%2B2vmTzgiTPwoKN%2F8BLRo0HvIS8FJfUBxksSKRl5SR7dcVY21O589Q6mx8Ct%2FjkYrXCQn2AbcHkPrE2wkEx33hNHtB%2BFCWVYpybjCblU8%2BpFDX1%2FvneZRS4dY4YfiMicMaH5d8c%2BoIjbTjXfx3wURCZPuDmbj6DkxxqDRw7%2Fu%2BEiPsGSzRe9jPgBps%2FWgdpxaz%2BQawlNLSs0CkpLhdx3Py1FodF9K04OsuO9HDPS7yAvV2zLDgFmYRpLbHj9%2FZU4CZBbQzr4VCEJsshI4nTZrH8B07quxOpn0Y3OWSP9tP2GPOdHlKQ9%2FNnS1P2yrDWoIiPrzpfAKWfmPdKUGB00kW8w6%2B%2BJygY6pgEWuekGMRHWXn5XjOvOw3wauNxYm%2BAoVcz9dAiDuytohSQfaG37KggI5wB3OHXRSMLVoCZkZrF4Y43QLnBMP6RjtkA95OoguEw8dMyti%2BF0uGidzxGknCWr23%2F3Sf7yG0HmqmyUIp6g0Fbt6mVzz5zUrG0dZNCNSe2qvKkfZ%2F4vYjCklarjmC9O%2Bw6N6WVeL8OfSXRb%2BhI0tOU6WHaVakeSEHr5TeeZ&X-Amz-Signature=4bc47ee31f2b5b464b484088cf425b667d8f05c58dc7377404d286901dbcdceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

