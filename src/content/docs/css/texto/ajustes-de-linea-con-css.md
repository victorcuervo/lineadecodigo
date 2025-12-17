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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2PUMWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVhidcaRe8FJhWNAsRSqQF040gmhbz96FCA4RMjmgitgIgSZ6ptTKwnJQnahx7riEgYXuq2QniJdFC2YLTAYiQOT0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMtrkXBcmHLYdkaaBSrcA2dFPfBtWmMrfgUV3kTDmtMvjZ1vmCgRWtn8RtpMCOr%2B5A0qJ6WddjU3pMHOM4MWD1seZsIIlHVPG6nu7NXAMLXi4I8jdzu6%2FE7vQMIFXhJ4P18zqybE3IuS7LnR4C95gAMa9FbJaAbH%2Bh7uiJBFAQItDOT5nB%2Fxf%2FOcRWL2Ky9COz%2B2goBQLjDIkrhOlF5%2BRuN0fQKy%2BzBxYSyscoEkhrlJT6CzGm9dy0yf1UJPS0Ruaqu9vMfC2FHITF3hFQt9AS1qUrlu1C8rMkC5nT1N%2FnKCDi%2B7h%2FYUpQ2JT6npWYg8FruNbFU1WBBWk%2Bk3fVco7ZvNuvYKv8dW3ZgSgtDTl3%2BxprqQEx9NDl8h9VX5A9OSUwO6olMjZ2xQpPANGfoZGnIYL6vGRtnO%2FNPObfUlNdI0EVQmOu0tBOpe8BwZG27okvpPj%2ByqfuUc4DW6nG1PbY3XKHp%2BTYuiuSMikAKSDXgZoAmzxLcrxzQ3ib6QoDi1hU6iHSeKEwycbZWjtaSIS7CkkhN%2BE%2F19FAHiB16Ox1DA4kqONdN4u%2FHftBD2ULLy4%2BmXwXaxLnyDpLELNfb8L3bPv6jgb6rQmh4whRlvx5aUzPDVi0VEQG9TwSzOc3O2ZonccXGTis%2BHp7AgMI%2FqiMoGOqUBoIc%2FLr7RRZfIE874R%2Bj763iUUvutL4bpAy96Pq1vHxCCZe0qo03Rb2hm2zmsI2Vjy3JrQhyWeioW18g6vZ9lvSWu2ZKJo4M%2F%2F8pS9JzCgQUzP7tUVS%2BNDIJKWyqQ9VNLAXxyS4sfmdkhfe44SEc0akIVfiAgRrnbuaPZU%2BxDSKUYkK3bJJTBbSDxDiuPi3805vUikcKeq9NgdhJwuQaFA2UE2P06&X-Amz-Signature=060ee0315897513ed0acfb3fc489c1b83cd01f0ec296ff6635d60bc8d5744359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW2PUMWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVhidcaRe8FJhWNAsRSqQF040gmhbz96FCA4RMjmgitgIgSZ6ptTKwnJQnahx7riEgYXuq2QniJdFC2YLTAYiQOT0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMtrkXBcmHLYdkaaBSrcA2dFPfBtWmMrfgUV3kTDmtMvjZ1vmCgRWtn8RtpMCOr%2B5A0qJ6WddjU3pMHOM4MWD1seZsIIlHVPG6nu7NXAMLXi4I8jdzu6%2FE7vQMIFXhJ4P18zqybE3IuS7LnR4C95gAMa9FbJaAbH%2Bh7uiJBFAQItDOT5nB%2Fxf%2FOcRWL2Ky9COz%2B2goBQLjDIkrhOlF5%2BRuN0fQKy%2BzBxYSyscoEkhrlJT6CzGm9dy0yf1UJPS0Ruaqu9vMfC2FHITF3hFQt9AS1qUrlu1C8rMkC5nT1N%2FnKCDi%2B7h%2FYUpQ2JT6npWYg8FruNbFU1WBBWk%2Bk3fVco7ZvNuvYKv8dW3ZgSgtDTl3%2BxprqQEx9NDl8h9VX5A9OSUwO6olMjZ2xQpPANGfoZGnIYL6vGRtnO%2FNPObfUlNdI0EVQmOu0tBOpe8BwZG27okvpPj%2ByqfuUc4DW6nG1PbY3XKHp%2BTYuiuSMikAKSDXgZoAmzxLcrxzQ3ib6QoDi1hU6iHSeKEwycbZWjtaSIS7CkkhN%2BE%2F19FAHiB16Ox1DA4kqONdN4u%2FHftBD2ULLy4%2BmXwXaxLnyDpLELNfb8L3bPv6jgb6rQmh4whRlvx5aUzPDVi0VEQG9TwSzOc3O2ZonccXGTis%2BHp7AgMI%2FqiMoGOqUBoIc%2FLr7RRZfIE874R%2Bj763iUUvutL4bpAy96Pq1vHxCCZe0qo03Rb2hm2zmsI2Vjy3JrQhyWeioW18g6vZ9lvSWu2ZKJo4M%2F%2F8pS9JzCgQUzP7tUVS%2BNDIJKWyqQ9VNLAXxyS4sfmdkhfe44SEc0akIVfiAgRrnbuaPZU%2BxDSKUYkK3bJJTBbSDxDiuPi3805vUikcKeq9NgdhJwuQaFA2UE2P06&X-Amz-Signature=c22858d23770ffd5ca76ed399bce0b267745612d5a14fb3c473ba0a4983da945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

