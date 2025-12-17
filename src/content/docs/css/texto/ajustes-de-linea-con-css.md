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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UPZVZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPu0Bi5Iqmamyk72%2FG2HtQecqKrmz25rBSbgGuByeB1AIgE5ho4vFCraVC%2FwsppBu2qtn6zLDnPyKwV0mVNrp4u9gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLpYLor3OCjxNcoW%2FSrcA62c5uVOaxXxScKNehWMfVmDPCl%2B8rHzEY%2FTxT%2BEL3XvdVU%2BQjIaoC%2BGHPR8YqgcjaWIFnic0s%2B4omZY5E7BZeei8HDJXwu9i8MtBhWXyAjDtKTKT4EmJaKMyWQLZJoZI15EVbFDcmG4kVJbhbsdxqX%2BwsvVdZvJBoD4QbDwZCiSbTywZwvvPlx1TMFxbz0I8385AA8u1Xo%2BCkcNMCT59%2BXvzjAFTZ3Ux0eutqvx52oYsvn%2Fta3kRBJJauVxE8ziH3HGRoBi5iYYjwQZMqUrxKhO9qkw2B0cUy3WOsrh5SzPf30JpZcIOTt%2BdEl2H1rsF0G3bqOnXTcRSgNaqnzzzpVmlz8B1iYoxbT2L3SU2Mf6y4DTM2vkR%2Bo8gIpb%2FrZ2CqWyWoneW0uevrbxwv0qwUH3IwQSyIAFwJdXzfcjZC2zL51bZZKBbQDlN62L7sub3pA%2F9IHid1F0AyDDeYgdmf3QTu5t7xgLUqzCbPI83Y%2BnMMPfDkmBxh%2FI8R9ol3skrZ6XvaKRpIgZkmkAnKWCwPYkPqhjHE5k66lYQx9fdXY2%2BDALabSNgKPauBxKLI6kjJUL4tNKy%2BfuR4NmYm%2BGq82Tvy4ySCzv1Y2MKgTHMYHacwlW6evD%2FjIR2xmRMPvpiMoGOqUBXmhaWqFHMS7uUYiD4OM7yC5ifBEU0qXtmOcazSrUEqOf1qxP4QtCwbXWtXRQKxJdeaU2kijKUyT1nTcDWqXGDqVhiJRBE0WOEgrgZ5w1MUrj5GIpidsoPj9LcMspsREquTlrgGxc7QUjQ6BIpWDrRWpmIBkiYXIjr88pT2VIMPGPlwcyxoy4ofe5vOlBqxXz3bov7OeamdjtgUcj2vjS3BY1neE3&X-Amz-Signature=9a0b65876606961f52739ffad3c65fcd78057852eb800be7c83ffb98eebcde39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UPZVZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPu0Bi5Iqmamyk72%2FG2HtQecqKrmz25rBSbgGuByeB1AIgE5ho4vFCraVC%2FwsppBu2qtn6zLDnPyKwV0mVNrp4u9gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLpYLor3OCjxNcoW%2FSrcA62c5uVOaxXxScKNehWMfVmDPCl%2B8rHzEY%2FTxT%2BEL3XvdVU%2BQjIaoC%2BGHPR8YqgcjaWIFnic0s%2B4omZY5E7BZeei8HDJXwu9i8MtBhWXyAjDtKTKT4EmJaKMyWQLZJoZI15EVbFDcmG4kVJbhbsdxqX%2BwsvVdZvJBoD4QbDwZCiSbTywZwvvPlx1TMFxbz0I8385AA8u1Xo%2BCkcNMCT59%2BXvzjAFTZ3Ux0eutqvx52oYsvn%2Fta3kRBJJauVxE8ziH3HGRoBi5iYYjwQZMqUrxKhO9qkw2B0cUy3WOsrh5SzPf30JpZcIOTt%2BdEl2H1rsF0G3bqOnXTcRSgNaqnzzzpVmlz8B1iYoxbT2L3SU2Mf6y4DTM2vkR%2Bo8gIpb%2FrZ2CqWyWoneW0uevrbxwv0qwUH3IwQSyIAFwJdXzfcjZC2zL51bZZKBbQDlN62L7sub3pA%2F9IHid1F0AyDDeYgdmf3QTu5t7xgLUqzCbPI83Y%2BnMMPfDkmBxh%2FI8R9ol3skrZ6XvaKRpIgZkmkAnKWCwPYkPqhjHE5k66lYQx9fdXY2%2BDALabSNgKPauBxKLI6kjJUL4tNKy%2BfuR4NmYm%2BGq82Tvy4ySCzv1Y2MKgTHMYHacwlW6evD%2FjIR2xmRMPvpiMoGOqUBXmhaWqFHMS7uUYiD4OM7yC5ifBEU0qXtmOcazSrUEqOf1qxP4QtCwbXWtXRQKxJdeaU2kijKUyT1nTcDWqXGDqVhiJRBE0WOEgrgZ5w1MUrj5GIpidsoPj9LcMspsREquTlrgGxc7QUjQ6BIpWDrRWpmIBkiYXIjr88pT2VIMPGPlwcyxoy4ofe5vOlBqxXz3bov7OeamdjtgUcj2vjS3BY1neE3&X-Amz-Signature=17fc70c561ef5143dfb7918bd50214aaef89febb4ab93b32839c59362598b8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

