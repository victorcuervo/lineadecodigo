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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLJMTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPNaX7Hefs4vlos5DH4DbcWjNNuKDu49S4%2F6ZdCcOcoAiAQHJ54lE%2BuP1WZut5PjnhrBDu%2FdQXR5j5uJuwtCKkD%2FSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVZ0s%2BURJASBzSPfUKtwDczFwhnnHevtcYgOCNyFnd2TyDP4GutBz%2FmJ0fLExzFQ6CruO08IHSHi1s%2B4%2FtiqyQmxDyGsm4VkurxJcLZeDQ8RDqDrgIq%2BD33u%2FTCLnukH3mNRuBUi1b3kaKaBQQxPohCh7aN9Ud0pqwplUCe2xpsWMFZpObefuJHmCubGgkZiVI7LIsMYY%2BzQSIvUjLSd%2FIQhslPouODE7FAkc0WJQP6gRrwzI7PI4WEwMYRvM%2BN4TGXpvBluA4dJHVH%2BIobaAHdcrXwvj%2FkKWRENYz5eJjNDNYvR4rXdD8B11pd0hqd5FshWt0inTIOJzQAjhTlJPzErzIjLnlDgUzNTQ0xpJeB9s9AJNWtNyFzTNuctpFxqFphkYZbpVqZWW3ufX9FInIdEpWEh3Ler9%2F24IrFFzIm9tXz%2FAMKvGpNelgwB8bfm4LDero45Ui60bEbj2fNOrpMfjrEVm56nvPzIocPegIfZS5dSaNIGW%2FABiUxA062WuABgG%2B%2Bb37vN%2FFTIfIniiUCK%2BrJkdxXp1OSqTpiqA6cKcETEOrN%2FST5WbvFXPd6zAWRCu2igcwT9xtcpDryJtN8e%2FSbgkfNTGmlW5z1X4MUvSOIq%2FlMrHa5U%2FxXB%2FNE6vVSDqZgfwkTal5Xcw75eIygY6pgFzOgwfRSCJhpyUOFIKfNPi9etb8jIMB4bc2DyoOJQFfPUbIDuZuTjAA4HZdEPsm5pAO3KVB0qxuPXaBtfcGeBPDnyoh0q88D2whYhwvQnUuckfd18aMn4EqD709%2FYKATWAIg1MiAEyMigz2TlW%2Bx%2BhVSdsmR%2BLrhQTw9QPIjqq%2Bkcx6TjeVJDsnEFJuqEoHmgNvf6YdbG8CUoq1Z8nlJdmbXVD1vgg&X-Amz-Signature=bfc4199e3ca1c4357790438382becaa193548ea471708cf8584353652ac9faa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLJMTKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPNaX7Hefs4vlos5DH4DbcWjNNuKDu49S4%2F6ZdCcOcoAiAQHJ54lE%2BuP1WZut5PjnhrBDu%2FdQXR5j5uJuwtCKkD%2FSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMVZ0s%2BURJASBzSPfUKtwDczFwhnnHevtcYgOCNyFnd2TyDP4GutBz%2FmJ0fLExzFQ6CruO08IHSHi1s%2B4%2FtiqyQmxDyGsm4VkurxJcLZeDQ8RDqDrgIq%2BD33u%2FTCLnukH3mNRuBUi1b3kaKaBQQxPohCh7aN9Ud0pqwplUCe2xpsWMFZpObefuJHmCubGgkZiVI7LIsMYY%2BzQSIvUjLSd%2FIQhslPouODE7FAkc0WJQP6gRrwzI7PI4WEwMYRvM%2BN4TGXpvBluA4dJHVH%2BIobaAHdcrXwvj%2FkKWRENYz5eJjNDNYvR4rXdD8B11pd0hqd5FshWt0inTIOJzQAjhTlJPzErzIjLnlDgUzNTQ0xpJeB9s9AJNWtNyFzTNuctpFxqFphkYZbpVqZWW3ufX9FInIdEpWEh3Ler9%2F24IrFFzIm9tXz%2FAMKvGpNelgwB8bfm4LDero45Ui60bEbj2fNOrpMfjrEVm56nvPzIocPegIfZS5dSaNIGW%2FABiUxA062WuABgG%2B%2Bb37vN%2FFTIfIniiUCK%2BrJkdxXp1OSqTpiqA6cKcETEOrN%2FST5WbvFXPd6zAWRCu2igcwT9xtcpDryJtN8e%2FSbgkfNTGmlW5z1X4MUvSOIq%2FlMrHa5U%2FxXB%2FNE6vVSDqZgfwkTal5Xcw75eIygY6pgFzOgwfRSCJhpyUOFIKfNPi9etb8jIMB4bc2DyoOJQFfPUbIDuZuTjAA4HZdEPsm5pAO3KVB0qxuPXaBtfcGeBPDnyoh0q88D2whYhwvQnUuckfd18aMn4EqD709%2FYKATWAIg1MiAEyMigz2TlW%2Bx%2BhVSdsmR%2BLrhQTw9QPIjqq%2Bkcx6TjeVJDsnEFJuqEoHmgNvf6YdbG8CUoq1Z8nlJdmbXVD1vgg&X-Amz-Signature=d0f0bbe3e05c90937e2e7c6df8a6ff3f0c0896f79d51f7673c50c630b9507150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

