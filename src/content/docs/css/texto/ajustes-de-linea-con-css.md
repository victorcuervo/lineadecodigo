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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEKRQBJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGREYFC0%2BrziHg5BbQHNZiuzGtiJqukI47Lum0V0y0FFAiEAxTB5YuUk6XL6qBbISDBJrWFIggf4mibsf899CKm9neAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI60N0Vs3cITHFx4FCrcA0OsLykQkky6oJJ7KayTdw0sMUqQBtGe%2FZwU80xnBRfkKbgSZaIyXJfHwzYB6B2BdGuyHMAauF2bl5IuBq6uwk8dOU3meSGuPoeMfuVeCCCBeHQ5lHu70sgKQunav4JRYCTWenyD7jXULDspD0aXUmHJwluzGFZnFE7shhxLH%2BCDwsXSeb7n9OpGVkWYGNUD6ZeFwXRnB%2Bn8xfo5ZxChKRF9%2FrXbye4L%2FWRu%2Ff%2FLNZX2gKzIKa2Vi1QJR3%2BkqW%2BeXwNnNSXnD35WNfS03eRNMkZR6IXif09RTZ85ELHeoUa%2FK5N94N81wQlRqMtSZGf6GqnZ2kcEMj3koFIdsyoasiVbxd8sH248rJKIp9y3l2BLGqb54tp%2FuNSw6aLYnXRFytKC0un%2FWudjaa7gsY%2BrVFXU%2BbAZDrzf%2Bqfg3mEjqyKM7%2BZLTOtsiVtsvOzGtVhv%2FGvAOnxdjtUSWC9BU%2F27LY%2FvY2yU7mrPKJrHsfJOh4GaLXrDu%2FMG5W290MbRARQ4qbVWLhtxd992bu6aiNLgpzP7ozDv7Z2kHGxD4dQRWje2WekAKfgS2XcSEeRmDsTWvEXe4Rs2%2FAll83wW7NFc3nDk1n%2FJLUjc%2FdDSVhn%2FmYSewXS9BobTwO0xxfBeMIjiisoGOqUByRI%2FwQr4lK4TA0bfi2sOA5kWo65BoopMbVBtYdl9lex%2B%2Fg4dPIA%2F4rYZB2iCQflkJSxjZrHNi0FQlr2zn4qAFA5KytuEg2Y2QkKe%2FRmqCmV0%2Br4ZnHArmsfGCUtvExNHKlxAE1MfN%2FzkMwxdaBft%2FtN71Wf8eBKGGGkFgVYv9LPBlmDPsNsHkVfqoL8Bpx2wRhqXwCVHRfvTrXqC%2BwAbVsmKPAf%2B&X-Amz-Signature=38142bf37dd838c3d2ef7157baf8aca164d6ea96ebe76a82ec0c12fc4b1d241b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEKRQBJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGREYFC0%2BrziHg5BbQHNZiuzGtiJqukI47Lum0V0y0FFAiEAxTB5YuUk6XL6qBbISDBJrWFIggf4mibsf899CKm9neAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI60N0Vs3cITHFx4FCrcA0OsLykQkky6oJJ7KayTdw0sMUqQBtGe%2FZwU80xnBRfkKbgSZaIyXJfHwzYB6B2BdGuyHMAauF2bl5IuBq6uwk8dOU3meSGuPoeMfuVeCCCBeHQ5lHu70sgKQunav4JRYCTWenyD7jXULDspD0aXUmHJwluzGFZnFE7shhxLH%2BCDwsXSeb7n9OpGVkWYGNUD6ZeFwXRnB%2Bn8xfo5ZxChKRF9%2FrXbye4L%2FWRu%2Ff%2FLNZX2gKzIKa2Vi1QJR3%2BkqW%2BeXwNnNSXnD35WNfS03eRNMkZR6IXif09RTZ85ELHeoUa%2FK5N94N81wQlRqMtSZGf6GqnZ2kcEMj3koFIdsyoasiVbxd8sH248rJKIp9y3l2BLGqb54tp%2FuNSw6aLYnXRFytKC0un%2FWudjaa7gsY%2BrVFXU%2BbAZDrzf%2Bqfg3mEjqyKM7%2BZLTOtsiVtsvOzGtVhv%2FGvAOnxdjtUSWC9BU%2F27LY%2FvY2yU7mrPKJrHsfJOh4GaLXrDu%2FMG5W290MbRARQ4qbVWLhtxd992bu6aiNLgpzP7ozDv7Z2kHGxD4dQRWje2WekAKfgS2XcSEeRmDsTWvEXe4Rs2%2FAll83wW7NFc3nDk1n%2FJLUjc%2FdDSVhn%2FmYSewXS9BobTwO0xxfBeMIjiisoGOqUByRI%2FwQr4lK4TA0bfi2sOA5kWo65BoopMbVBtYdl9lex%2B%2Fg4dPIA%2F4rYZB2iCQflkJSxjZrHNi0FQlr2zn4qAFA5KytuEg2Y2QkKe%2FRmqCmV0%2Br4ZnHArmsfGCUtvExNHKlxAE1MfN%2FzkMwxdaBft%2FtN71Wf8eBKGGGkFgVYv9LPBlmDPsNsHkVfqoL8Bpx2wRhqXwCVHRfvTrXqC%2BwAbVsmKPAf%2B&X-Amz-Signature=795b7a74559be30d287701124abe1dc73a36f4ed93d13d5b6ce27a3bc4266abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

