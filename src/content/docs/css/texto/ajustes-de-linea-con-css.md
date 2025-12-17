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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMXDJGM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI0MshrphpU4N2Jg94XjDuuQ%2FSSWaQ2qeXEvDs%2BmcEKAIhAIh3D2kNltYbYJnXoqZxi4aRrgzarM2yJqc%2FDn0Kngg2Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyWTXug6nu2Kw7tjOgq3APCCRU%2Bf7q%2FLBfXKOZ3QvlOpCjuL35GBFhpo%2FNkv%2BHnQDmC6E0dGIklKObwxIY7fcbLfgKRCxha7zTr6v%2B8PVwmre7bg4rYYTIrl30JeEcisvy56B8oNe%2FRnhX4YTy4wkBQ%2BM%2Bpzpw4p0qIMBWSuXLYPlWCxzw3KHrOUIJIDLcpp5D4vZHDljl8pqG4beluwcX3tQFPxdFyVupk0Ynp%2BbWpOVV3jmWp7H4WQeygZoWjVrxLGq6%2B1JAe00cAk7cEyLynnFZDG5CLogDJjQMrzMyhXtp9n3FgaSJ7UuhQ2w52LqiCnKHUJ5KwnvwcnLgXwZzM1PrTIhcpLvkuxpMhz1hMtJDxTlkZWc8gk2ZoBCGvRAWRL7C0VH2yEZA359Yw1fRiUyrDJHYP4F0nGVC3hL9kKRBXIRC9SfrCXxAAGv24iu4ahV5VLaq0cwAmaWDMxv3QTxlDFPfdlS670vsZgMG8oGpMzUgr9iDHnXqkgE9TK%2BefnOZKU78sFETTJFDEQzEE%2BMYt154%2B7344ubfniw9XYI%2BCRRCrTUf6eesqqoSTJcz6y8puz3q3YXbsy5Eok%2Fn0CC5yRAomPKBHgfp1zmOX%2B24n58KZmUeJLEGL%2F1fAjoH%2BDZXRkaPVVUu24DC8sYjKBjqkASqQCjJP%2FHnP0qoENKQYK%2BB5pkpI2CW2qB3JLgQjiVyNyVWNth29Vn0THLbHPyWyKk8yp%2FaYeU9euPYk0NyDehGwi4dIpcce7tMe80pIYg7KlUu6A3PKhPtOoKjl4nlCNS9GnX8lTuVFRqyeh2i5H42g0cTE2U7fpfK8opDjFb%2B02DbnUZBcauB7lXzwfWadjjMTCpb%2B5VY7UQ%2Fp173bGfchB2YO&X-Amz-Signature=2badd97fe246ad3ff12fa888948acd5acc9d1befc511233a149ef05ccff022f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMXDJGM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCI0MshrphpU4N2Jg94XjDuuQ%2FSSWaQ2qeXEvDs%2BmcEKAIhAIh3D2kNltYbYJnXoqZxi4aRrgzarM2yJqc%2FDn0Kngg2Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyWTXug6nu2Kw7tjOgq3APCCRU%2Bf7q%2FLBfXKOZ3QvlOpCjuL35GBFhpo%2FNkv%2BHnQDmC6E0dGIklKObwxIY7fcbLfgKRCxha7zTr6v%2B8PVwmre7bg4rYYTIrl30JeEcisvy56B8oNe%2FRnhX4YTy4wkBQ%2BM%2Bpzpw4p0qIMBWSuXLYPlWCxzw3KHrOUIJIDLcpp5D4vZHDljl8pqG4beluwcX3tQFPxdFyVupk0Ynp%2BbWpOVV3jmWp7H4WQeygZoWjVrxLGq6%2B1JAe00cAk7cEyLynnFZDG5CLogDJjQMrzMyhXtp9n3FgaSJ7UuhQ2w52LqiCnKHUJ5KwnvwcnLgXwZzM1PrTIhcpLvkuxpMhz1hMtJDxTlkZWc8gk2ZoBCGvRAWRL7C0VH2yEZA359Yw1fRiUyrDJHYP4F0nGVC3hL9kKRBXIRC9SfrCXxAAGv24iu4ahV5VLaq0cwAmaWDMxv3QTxlDFPfdlS670vsZgMG8oGpMzUgr9iDHnXqkgE9TK%2BefnOZKU78sFETTJFDEQzEE%2BMYt154%2B7344ubfniw9XYI%2BCRRCrTUf6eesqqoSTJcz6y8puz3q3YXbsy5Eok%2Fn0CC5yRAomPKBHgfp1zmOX%2B24n58KZmUeJLEGL%2F1fAjoH%2BDZXRkaPVVUu24DC8sYjKBjqkASqQCjJP%2FHnP0qoENKQYK%2BB5pkpI2CW2qB3JLgQjiVyNyVWNth29Vn0THLbHPyWyKk8yp%2FaYeU9euPYk0NyDehGwi4dIpcce7tMe80pIYg7KlUu6A3PKhPtOoKjl4nlCNS9GnX8lTuVFRqyeh2i5H42g0cTE2U7fpfK8opDjFb%2B02DbnUZBcauB7lXzwfWadjjMTCpb%2B5VY7UQ%2Fp173bGfchB2YO&X-Amz-Signature=37fb4bbe85a424b6f0fd4c46ab86f3fcb134ce9300df07f56394c7f6d3cb2577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

