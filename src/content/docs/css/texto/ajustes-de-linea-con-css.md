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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVUPRBL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDml8DH8Mxx%2FyH0q2of80hhIqT6tM0A3wdJTscvOFcLEwIgTUZMeT%2BsRjMn1QEnZRXcbejvO7Fcgzb0QZth56ycs1Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNx%2F6yEtXNj7nml%2FNSrcA1XOybfx6h%2BZeZ%2BWdwQkOWoKNWtUguwk5KR0UzcpfsqFFUwKqd3OIp3KEF6g0P03EFD8AJO9WTuyQRE9KYcckabgt%2B%2F7G6DBQgXNYkI2Hz3NH9CmFI9xpBjgQDI2xqFpmLxy0AIe1VdaaHYsLB1q3FKhq0mDBhYagcJGW7vQASm5k0A%2BG%2FTpknGRWnC%2BV8PLFzLyOoLuC1QhVIIuRY2ugWnywM8yjClwTwd%2BN%2Fgu9zHzbdf%2Bn857FsJtKqJ%2BUDJVMM147MjQQtWfESRtH0upGbnrRnlr2%2FUTy2t5LYstZJPwSzbGdekWLJcqBjThjWXacVDf7c9xOh6o9O7oISEUsSoBLJxRpB4bX0BIlWhV1bMzUEeuKs%2BBIex8aUQD%2BwudRwvY9aag4przDY2CiSxUmhqWBOHbOvjhNZ6xZ7ggT%2FspXqAzdjOW0Iuyt2X4Lj1yH7R7LqdIm%2F%2BE2jN9zJDDCpA0fhWcWwQkq9rHnwjrKl%2FgB62iEWzqDTODCskiA9%2Bu1qlaoQ8ma%2BYPFWXzCodRPfPFCq6q3nk8pqhI9sp4Vaqo8xUktkHmOfnvzt0CtIDycZEZokyh%2B7viIwDf6otMsqSwT2KjArbK45KsmxBKydTYHeZNTq1WFmS2apn1MOfeh8oGOqUBW%2FFVYOU4pZOYfPhDWfok9CSiDKz8kFjILHu3n%2B6ZF6PxnuYIDQJJDwXvKTJS8JixsV1uG7eLifvFhXsiju86bMDQAyV084ntkMiTxfIfdnZs9Rny0Sj6ehV1iN8wajOuUHh84ZUVS7iy3ldd2jKqcjJUuv4RiNFwcck0%2BZGhyMDYgt6QXN%2B3%2FJAVQB9JssEuVDMk%2FwyH6w3815bo2Y916jFaoJS%2B&X-Amz-Signature=ba9dc34c243ffe568cf2668227ad3606d096aeac887cf107702ed7bdcc1ac2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVUPRBL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDml8DH8Mxx%2FyH0q2of80hhIqT6tM0A3wdJTscvOFcLEwIgTUZMeT%2BsRjMn1QEnZRXcbejvO7Fcgzb0QZth56ycs1Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNx%2F6yEtXNj7nml%2FNSrcA1XOybfx6h%2BZeZ%2BWdwQkOWoKNWtUguwk5KR0UzcpfsqFFUwKqd3OIp3KEF6g0P03EFD8AJO9WTuyQRE9KYcckabgt%2B%2F7G6DBQgXNYkI2Hz3NH9CmFI9xpBjgQDI2xqFpmLxy0AIe1VdaaHYsLB1q3FKhq0mDBhYagcJGW7vQASm5k0A%2BG%2FTpknGRWnC%2BV8PLFzLyOoLuC1QhVIIuRY2ugWnywM8yjClwTwd%2BN%2Fgu9zHzbdf%2Bn857FsJtKqJ%2BUDJVMM147MjQQtWfESRtH0upGbnrRnlr2%2FUTy2t5LYstZJPwSzbGdekWLJcqBjThjWXacVDf7c9xOh6o9O7oISEUsSoBLJxRpB4bX0BIlWhV1bMzUEeuKs%2BBIex8aUQD%2BwudRwvY9aag4przDY2CiSxUmhqWBOHbOvjhNZ6xZ7ggT%2FspXqAzdjOW0Iuyt2X4Lj1yH7R7LqdIm%2F%2BE2jN9zJDDCpA0fhWcWwQkq9rHnwjrKl%2FgB62iEWzqDTODCskiA9%2Bu1qlaoQ8ma%2BYPFWXzCodRPfPFCq6q3nk8pqhI9sp4Vaqo8xUktkHmOfnvzt0CtIDycZEZokyh%2B7viIwDf6otMsqSwT2KjArbK45KsmxBKydTYHeZNTq1WFmS2apn1MOfeh8oGOqUBW%2FFVYOU4pZOYfPhDWfok9CSiDKz8kFjILHu3n%2B6ZF6PxnuYIDQJJDwXvKTJS8JixsV1uG7eLifvFhXsiju86bMDQAyV084ntkMiTxfIfdnZs9Rny0Sj6ehV1iN8wajOuUHh84ZUVS7iy3ldd2jKqcjJUuv4RiNFwcck0%2BZGhyMDYgt6QXN%2B3%2FJAVQB9JssEuVDMk%2FwyH6w3815bo2Y916jFaoJS%2B&X-Amz-Signature=43d2abbce8becc2cd19c44d23bdbe31f3df54ea78ab4085db84e1cf8a43355a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

