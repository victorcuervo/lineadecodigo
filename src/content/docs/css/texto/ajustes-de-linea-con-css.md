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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTTHZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyr6bGiEmbRRb4fTs4KZmlSXDnNXQVb7dz52Ig5XoZIAIgRaygHKjt86mdoBAWU68v2Q28ZaHOyk9rp%2FyfUeNJLzAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKV7AZsUyFldlD4a2ircA%2F0U0PtH9brzl4HrKC1dnxf%2FKZdKLZnKKoaU%2Fe0%2Fv108P44u88FC97o7iFXH0wtZWpBxhqVGGPcIGCqj7elHNSNS5PO3eVs4XytDSI%2BvT671ik0lEDsNzhdnUFca9Xo1otf3as%2BPnjAo0TCZo9NAw%2FBDcfu4ueU3KXfV1aycVQD%2BamyQarpJTfEufjS6FwqExAj%2FNNu%2B7DhlG2E50MyIiYCoDC8tUGdKYLsfSKDKZTP%2BB29SlmzoI%2FCKHcIrPbCf4CVbN3vnCIbq%2BYuL5ghnwvMaOLM6JWwINB4KWIFK9PX%2FbVVFjBOgzjJ0UQ5Pr%2FJBEfrPLBbwVj4s1eqaH2yjPbZG6Y2jKcKaThbtvnNH8ZYJhBQfHTuyHCmh0aQFunJ5uShaHrMKljQcwY6LwVnRJafrQ0Ag59NlKC5eJVumwnp4oqWWFai9wiKJ%2BNMI%2B0lVmqiKVswM5Aqr5se3y%2B6IqPFJWhhT4qIuX%2Fm578%2FwwSGBhqTyd0xs9WmzZyfVfvREA9X%2F4uWQe0rD0ruHgBlQUNxTtYu%2ForhrR%2FWiixiA9R7mvW0nJzDsOtREirC8wOZHoxPfL%2FuuwZqGf7Z4IHhyjIQY2NPyGk8n2DGgKBRoNsiczdXnhtzT7hMgUlwoMMmCicoGOqUBuqdPcmDPlfyfK%2FfzSKoPQ1vBf6XV9xc%2Fmxs4QMyt79aiGxCj82Vwu63giOAF%2BEI%2FV6cjVoFwQXtv4PKYSdXxTR0e7sVYmulkEDjKvsb6EDO0pNAb1unr0wya0aid3Hgj4QoI%2FGhH%2BwoN6Tcso9AxyFzxytFECOV%2FnKdKIVJSBv2fGXj9YlDAxTH9llhIIZjhH6L2JNDSH0Jyf5feGUUmUk%2B4ovPA&X-Amz-Signature=91d2811c053cf9b3d3da29c0e3fd8d1505acd2e1f1750c32541df2a20fc49345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHTTHZXS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyr6bGiEmbRRb4fTs4KZmlSXDnNXQVb7dz52Ig5XoZIAIgRaygHKjt86mdoBAWU68v2Q28ZaHOyk9rp%2FyfUeNJLzAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKV7AZsUyFldlD4a2ircA%2F0U0PtH9brzl4HrKC1dnxf%2FKZdKLZnKKoaU%2Fe0%2Fv108P44u88FC97o7iFXH0wtZWpBxhqVGGPcIGCqj7elHNSNS5PO3eVs4XytDSI%2BvT671ik0lEDsNzhdnUFca9Xo1otf3as%2BPnjAo0TCZo9NAw%2FBDcfu4ueU3KXfV1aycVQD%2BamyQarpJTfEufjS6FwqExAj%2FNNu%2B7DhlG2E50MyIiYCoDC8tUGdKYLsfSKDKZTP%2BB29SlmzoI%2FCKHcIrPbCf4CVbN3vnCIbq%2BYuL5ghnwvMaOLM6JWwINB4KWIFK9PX%2FbVVFjBOgzjJ0UQ5Pr%2FJBEfrPLBbwVj4s1eqaH2yjPbZG6Y2jKcKaThbtvnNH8ZYJhBQfHTuyHCmh0aQFunJ5uShaHrMKljQcwY6LwVnRJafrQ0Ag59NlKC5eJVumwnp4oqWWFai9wiKJ%2BNMI%2B0lVmqiKVswM5Aqr5se3y%2B6IqPFJWhhT4qIuX%2Fm578%2FwwSGBhqTyd0xs9WmzZyfVfvREA9X%2F4uWQe0rD0ruHgBlQUNxTtYu%2ForhrR%2FWiixiA9R7mvW0nJzDsOtREirC8wOZHoxPfL%2FuuwZqGf7Z4IHhyjIQY2NPyGk8n2DGgKBRoNsiczdXnhtzT7hMgUlwoMMmCicoGOqUBuqdPcmDPlfyfK%2FfzSKoPQ1vBf6XV9xc%2Fmxs4QMyt79aiGxCj82Vwu63giOAF%2BEI%2FV6cjVoFwQXtv4PKYSdXxTR0e7sVYmulkEDjKvsb6EDO0pNAb1unr0wya0aid3Hgj4QoI%2FGhH%2BwoN6Tcso9AxyFzxytFECOV%2FnKdKIVJSBv2fGXj9YlDAxTH9llhIIZjhH6L2JNDSH0Jyf5feGUUmUk%2B4ovPA&X-Amz-Signature=fbd49916754021998be888c669b794eff711cf67235b738c6561b64a1f08a111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

