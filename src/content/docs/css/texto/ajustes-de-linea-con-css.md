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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBLJEBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqrtSSe%2FdkJBQID4luM3SriVyB%2BAY3k7Iwa6OHv7z9CAIhAPdnH18Exv%2BeBSD9kyFPVZoPOfrfRrs0lS6mDXQ6eAGKKv8DCHUQABoMNjM3NDIzMTgzODA1IgwVKR3BrjnZE9lszG0q3AOp%2BrPRRDIuOB1rCmC3wbWrYvXenw58rBKt1UJ8%2FdZHO3Xw81CsWn2aNHXcrXyFEFznu7imjgfZyvc0tpgKRYpHtBU9hHMpEQ7BmiwflT3Bb5FTs5D%2FBAkeVZbVQH9Tr4MFcHkUeBrkfZyVpvbEtyc0CX8YAvNdLzh9VOggM2449al2nlHSe6VbUllphL3BPY3eN%2FJK24vKeycvZqOjQqZhIfMpMFsPn51qY4Se9g4bTE%2FikkML3lxMmUVXUsrl2oo%2Bvd6dlEh8gZIoVo7or5bGDR3FpNEFm2f8LAJ1AiqPqHDa39E2pwffuaR5TdFzTZoC4PUNImH34X3g7cy8HzKRIgqDlhvJEnvhZQKg5RGEQVDTRteRmR9hkpyEZuCgHZev0%2Fi90IJmJZNpaRr2OMtjJ2oTWQ270xVx%2FIiMlhg4SgzMAlTl%2BbAfh2e0BmIYAiOv%2BBAxY8dU2o5aXsiyBguH4aZ0Y67A307ZBRrjBYgAjsMusANBKOW2dcNPOFmYG3el12Rz21oMXEukp9CW7I1jJJj%2BT48Nuo%2F%2BdQ0xLKl%2BEY1NJSH0jMk%2F9zO0BFCU4UKgUSuS1i3%2FUsKaGwgEIW0PV9HlPFU9CcOJqREeHrHruNRNSFbcXvjHLsP5EjDwzojKBjqkAfX88ZPBr%2Bm68VC2TtP%2FaKoURYlNdvpzqojw3vfUMukdHuDTMufFzOvhBFwwhTZU%2FD9FqIpAAcrCwqaGn1yPyOn1BTxTZ2PCVYAoBeWtitCZknJf5tVmrMqQCQWwbWBNNVntfAvbFmYdFS2F6PmkvN8iSU9TpU44i6Zilvq2PQw0JIThMvvZk0MAaye5CCi5oWsDzIwoLOQwuR5lCLQK27Dz%2FiQH&X-Amz-Signature=cb648605676b112318192dd6a31d16e34c7c5c20eb164c6907af994bf833c400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLBLJEBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqrtSSe%2FdkJBQID4luM3SriVyB%2BAY3k7Iwa6OHv7z9CAIhAPdnH18Exv%2BeBSD9kyFPVZoPOfrfRrs0lS6mDXQ6eAGKKv8DCHUQABoMNjM3NDIzMTgzODA1IgwVKR3BrjnZE9lszG0q3AOp%2BrPRRDIuOB1rCmC3wbWrYvXenw58rBKt1UJ8%2FdZHO3Xw81CsWn2aNHXcrXyFEFznu7imjgfZyvc0tpgKRYpHtBU9hHMpEQ7BmiwflT3Bb5FTs5D%2FBAkeVZbVQH9Tr4MFcHkUeBrkfZyVpvbEtyc0CX8YAvNdLzh9VOggM2449al2nlHSe6VbUllphL3BPY3eN%2FJK24vKeycvZqOjQqZhIfMpMFsPn51qY4Se9g4bTE%2FikkML3lxMmUVXUsrl2oo%2Bvd6dlEh8gZIoVo7or5bGDR3FpNEFm2f8LAJ1AiqPqHDa39E2pwffuaR5TdFzTZoC4PUNImH34X3g7cy8HzKRIgqDlhvJEnvhZQKg5RGEQVDTRteRmR9hkpyEZuCgHZev0%2Fi90IJmJZNpaRr2OMtjJ2oTWQ270xVx%2FIiMlhg4SgzMAlTl%2BbAfh2e0BmIYAiOv%2BBAxY8dU2o5aXsiyBguH4aZ0Y67A307ZBRrjBYgAjsMusANBKOW2dcNPOFmYG3el12Rz21oMXEukp9CW7I1jJJj%2BT48Nuo%2F%2BdQ0xLKl%2BEY1NJSH0jMk%2F9zO0BFCU4UKgUSuS1i3%2FUsKaGwgEIW0PV9HlPFU9CcOJqREeHrHruNRNSFbcXvjHLsP5EjDwzojKBjqkAfX88ZPBr%2Bm68VC2TtP%2FaKoURYlNdvpzqojw3vfUMukdHuDTMufFzOvhBFwwhTZU%2FD9FqIpAAcrCwqaGn1yPyOn1BTxTZ2PCVYAoBeWtitCZknJf5tVmrMqQCQWwbWBNNVntfAvbFmYdFS2F6PmkvN8iSU9TpU44i6Zilvq2PQw0JIThMvvZk0MAaye5CCi5oWsDzIwoLOQwuR5lCLQK27Dz%2FiQH&X-Amz-Signature=dbcb56b7065e513858ec7dd17231bc87a6cd2ef373f4d0eac45f4537c9b7b2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

