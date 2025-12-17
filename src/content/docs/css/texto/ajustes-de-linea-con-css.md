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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPLTPYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpC%2Ftp8wkAPGPSA3gFjwIaPFWcOHTaN5gbPeuIheg91AiBfBJ8LnGnl8a6rUnwxh6NP0Sg2FknwC77fQo4U2LCiASr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMpziJd0s0evRAc0I1KtwDr7q9Mpo8MR%2BlgOUJUIv5drMWWFRi4qa4pEWXyZzooCVqHpbNtSy2imxCr5zoIHCVKBJLehXwwcDVXhsjlNvwIzdWquQDvuhVHqI0U%2B9WOJfoYjzyrAK6e7s3mQ9htoZAbXj2pTf%2BXur7%2BEEh6IXgpjq99dFYlRgpjjtQz98EC6PDKJWrUrwl%2F%2BxtSqGIOFrw2ospqMeA5oG4DXU4xa3WG%2BGzF7yvpSACd0AGQYdm6dclKhpDWzE9hRALBHSUfSIMDhW0Edm88upDWQJk6Pg3XSDauMHcIL%2FBHS5s7Aw89FK6CiCPC5OFCa0pZxk3yEA4IQy3DwhdwoXQJlxVEMifHBmYmpwB8vd4dRUYEArlqKORS1t9TEM9NVfDA8jywgcMDmGJz0PRpqhgWLb4CFsYP%2BhycRUQACYRos%2BzPXeM4ebzFe2X51u%2BWV1uk%2FgmkZe8MwWu9j2ezBkWifLPq6ljDJ8CrQUjl3CHzgINBd8mgYj1UHu2o44AWo7v%2Ba6nqxCE0ccYsY93vSrn9gz%2FjWEaABzm%2F%2BQ6xL3qLxI9BKliyCzn6nRHVze%2BpSmNnkPcILpTY2%2B2eliLxAnYA9BeEOV%2FuW5IIvJZETXgLWqa0T5R%2F0RUNaxT%2FUrhtIepPCIwkbeJygY6pgFJd%2BIr4AiSdDF0n5xBOW1bmG9Upy29DJQgJZS2aRecB%2BECMSf%2F%2BnuM4fEZYtoxbxhat%2BvD2s6U%2B5ZewoIa%2BY8%2BRvTg5mQCaInd880ygKXuvhpZR7QUlP2zt6%2BbwowklZpCbWbyGfIj0OCaog2qmdYCyswbCx%2BORH77r6suGiUe3zlqiFEqPfAEnj0TImLYDhJ1wyKId0r4R15ir6OHa2liF3lmJi7b&X-Amz-Signature=8a3c32f5517d123ec3a0ea9fb669fb3059afe7bdc5606ab37e6d24953319563b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPLTPYG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpC%2Ftp8wkAPGPSA3gFjwIaPFWcOHTaN5gbPeuIheg91AiBfBJ8LnGnl8a6rUnwxh6NP0Sg2FknwC77fQo4U2LCiASr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMpziJd0s0evRAc0I1KtwDr7q9Mpo8MR%2BlgOUJUIv5drMWWFRi4qa4pEWXyZzooCVqHpbNtSy2imxCr5zoIHCVKBJLehXwwcDVXhsjlNvwIzdWquQDvuhVHqI0U%2B9WOJfoYjzyrAK6e7s3mQ9htoZAbXj2pTf%2BXur7%2BEEh6IXgpjq99dFYlRgpjjtQz98EC6PDKJWrUrwl%2F%2BxtSqGIOFrw2ospqMeA5oG4DXU4xa3WG%2BGzF7yvpSACd0AGQYdm6dclKhpDWzE9hRALBHSUfSIMDhW0Edm88upDWQJk6Pg3XSDauMHcIL%2FBHS5s7Aw89FK6CiCPC5OFCa0pZxk3yEA4IQy3DwhdwoXQJlxVEMifHBmYmpwB8vd4dRUYEArlqKORS1t9TEM9NVfDA8jywgcMDmGJz0PRpqhgWLb4CFsYP%2BhycRUQACYRos%2BzPXeM4ebzFe2X51u%2BWV1uk%2FgmkZe8MwWu9j2ezBkWifLPq6ljDJ8CrQUjl3CHzgINBd8mgYj1UHu2o44AWo7v%2Ba6nqxCE0ccYsY93vSrn9gz%2FjWEaABzm%2F%2BQ6xL3qLxI9BKliyCzn6nRHVze%2BpSmNnkPcILpTY2%2B2eliLxAnYA9BeEOV%2FuW5IIvJZETXgLWqa0T5R%2F0RUNaxT%2FUrhtIepPCIwkbeJygY6pgFJd%2BIr4AiSdDF0n5xBOW1bmG9Upy29DJQgJZS2aRecB%2BECMSf%2F%2BnuM4fEZYtoxbxhat%2BvD2s6U%2B5ZewoIa%2BY8%2BRvTg5mQCaInd880ygKXuvhpZR7QUlP2zt6%2BbwowklZpCbWbyGfIj0OCaog2qmdYCyswbCx%2BORH77r6suGiUe3zlqiFEqPfAEnj0TImLYDhJ1wyKId0r4R15ir6OHa2liF3lmJi7b&X-Amz-Signature=d1103fc7d93d7119a99b37dbcb80126ed8b940f67b7de84ee1c2b446f9fbbb72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

