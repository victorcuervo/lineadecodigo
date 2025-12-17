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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLMHNVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxGiJdnEySyJyawos2AC0z%2BeqGNVbPwSvx%2F1sDgNB2XAiBDZXXSt1aimYz5QIfQ2AqwVienMsp1OYzjYzN8cGeu1ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM08CR%2FBFyQP3NXk1wKtwDqhjFtTtkbYFKy%2Ft3Z%2B45hg%2BA1tKZDfHgxi%2BpV7fCHiGKzVHKgt609uJg9SZkUouvyToCs7SGXsl0AWzf6C4WBVpZX9olHt1QItUCCW%2BzfPTTxGgKfytCOhbBiMJfm3Qt0NsPIkfuLjXRNDQneK%2Fv8pOj%2BJf7D2E8z7EskhGkz60ZphuKPeyDdfOIlNfLLo%2F65NWtvZByzzVTt4O1sIBhXa2uSEecuvz2mwuxzHbFTtWSbe2ZGXXEjqRl99kU0jCBm4DhRwf4jg9dtGDwIrlk6y8FypA0P0flD8%2BAuapouMLznuvxkcuK83MPaNEQET8blSNpnhFKGFh7GVNAqjOxnhSaRosUpXswA0JC4QvuegnXgIPiSeGj2tqGJzmp34Bv2Y43PlT1X8LDl6oYAH2OD8TaLnB4yiFlGT70LDV8AyzvtTCBIhqEf%2B8O%2BnctN4dQYisuxxlSPmOjRpqlgrB5LBmUZljCFZ6M1WhOR16C3Vjx9T%2BDa9g6d6p8OYKLWA26Cl6euRjAmboTt3IwvSW8w7YNVbxVjJGUBMAsXAKCL7bq12wG0wtUmxDKSpwC1AuJ7mAYhlPbAduHZTW%2B0jdQcBlnFaryNBbZUUmTXG2CtNxQ3gwakkgmx35U2Jgwn7iJygY6pgHGnwjmU66dwDA%2F99cqwd8lgUjIFDjixJTBgCbn0NLOySC8lm%2B3317s5wplNsCvkbmseT4QFNVsqYNDBS9PlIJkK5V9nBxVtNCqFB48iCGdYR175HneHT4lgsqFIpav7vCgECfJE5XwCHaicFJ0qBSIruSRVKOBojUwidPKuf0KQfxZ8OcLKIT055KDOI1jJu%2FP744WxDLt7CFqENAkhjeZVLU70wr0&X-Amz-Signature=dc0c4b3dcacc08de47ceb37b3a740efdb519b1df5f2cf4baff5365340cf95a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJLMHNVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxGiJdnEySyJyawos2AC0z%2BeqGNVbPwSvx%2F1sDgNB2XAiBDZXXSt1aimYz5QIfQ2AqwVienMsp1OYzjYzN8cGeu1ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM08CR%2FBFyQP3NXk1wKtwDqhjFtTtkbYFKy%2Ft3Z%2B45hg%2BA1tKZDfHgxi%2BpV7fCHiGKzVHKgt609uJg9SZkUouvyToCs7SGXsl0AWzf6C4WBVpZX9olHt1QItUCCW%2BzfPTTxGgKfytCOhbBiMJfm3Qt0NsPIkfuLjXRNDQneK%2Fv8pOj%2BJf7D2E8z7EskhGkz60ZphuKPeyDdfOIlNfLLo%2F65NWtvZByzzVTt4O1sIBhXa2uSEecuvz2mwuxzHbFTtWSbe2ZGXXEjqRl99kU0jCBm4DhRwf4jg9dtGDwIrlk6y8FypA0P0flD8%2BAuapouMLznuvxkcuK83MPaNEQET8blSNpnhFKGFh7GVNAqjOxnhSaRosUpXswA0JC4QvuegnXgIPiSeGj2tqGJzmp34Bv2Y43PlT1X8LDl6oYAH2OD8TaLnB4yiFlGT70LDV8AyzvtTCBIhqEf%2B8O%2BnctN4dQYisuxxlSPmOjRpqlgrB5LBmUZljCFZ6M1WhOR16C3Vjx9T%2BDa9g6d6p8OYKLWA26Cl6euRjAmboTt3IwvSW8w7YNVbxVjJGUBMAsXAKCL7bq12wG0wtUmxDKSpwC1AuJ7mAYhlPbAduHZTW%2B0jdQcBlnFaryNBbZUUmTXG2CtNxQ3gwakkgmx35U2Jgwn7iJygY6pgHGnwjmU66dwDA%2F99cqwd8lgUjIFDjixJTBgCbn0NLOySC8lm%2B3317s5wplNsCvkbmseT4QFNVsqYNDBS9PlIJkK5V9nBxVtNCqFB48iCGdYR175HneHT4lgsqFIpav7vCgECfJE5XwCHaicFJ0qBSIruSRVKOBojUwidPKuf0KQfxZ8OcLKIT055KDOI1jJu%2FP744WxDLt7CFqENAkhjeZVLU70wr0&X-Amz-Signature=2e85e50ac2cf094b25055f18127eae2d24ed1ce1bc0678bbde9e50be6f785e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

