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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4X3WHJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmEz8Js2pj5YO0z47vIDG5CevbBkSNydHjlfvUci4QNAIgXYZcfXe5BJUPZBIqgONhdAVbPMye8UfWMSSG39PhK0wq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKLSsKB6g25OEW9QHircAzK5cgz0gC4f9KGASWHvWbm2MuFdOmciVN5idfo4%2B79RLgFIuyvI%2BYOuNQmhy7kblFEnUgFK1fJZhct0f7ZyTxb6U5%2F1gmC1Fw9R0Wq62heqpW72%2B5Ru%2FoKhLw1cXpTDQtYSXUvUNahjQKc2x26Ozh7Uy1Q8HDK24xk5hbpU56v807IR88MpEgR1fwo13SW1YMkemwOehiMM0EQbeyWQ23Uld3WqokbkXjuZUyeYuvSUrO3wuMFpj%2FLlE2XNqooarb8nvdNhQSD8Me7uU%2Fb11%2BajSFklATpPLVK5e%2F3quc9M0BFf%2BhUg%2F%2Bzm%2BcW3rbMGKkJogRdm%2BbsQ25HtCTIVpWo85ZaDsQBTgXlptLi6kCJ0gFvXgxJY3hUjXn0QT%2FxJU3PTuxf9Q1fT6HXfWvHLEhqKjQqkJqdMC7uWnBeNx6YS6%2BBR2BgWe%2F1AqqsTe6VRHBFqaPTufsFhF65TBzpy9H8%2FYV8ukKTc64B9gaxZbzbPkNedV5nuM0fc5OiEcHaUsisCYHoOMxvMb%2FrKfGHcqc5lPhIamOnaY4oN%2BYoc6k%2BVzqz3cdZA4bdqqfocQk%2FcO38cxBbEnIbzqA1Pm9P5r1lu6ga4dm3W395bm5DzcxbFUJ%2Bkg1vbafTXnPjVMK7vicoGOqUBZEOr4Ex07zbg9PscTXjLv%2FB6ecpFXyHS8fubBofwTBEYGMawwH8IswG1GP%2Bo%2FVfS2KIKroAXV3SkA1LfVBLEq1goMBFM49i81qCevfM7qWwgkm8HM65%2Bnz33xxhk%2Bjy8KKzRheV5%2F%2B9As5eHdrTUAJsNFzBwRyCh7F29yWRQ%2B07Jmap4RXptLabN0jhkS%2FvCnia5OwJFO4KuJ%2FUeYtE21QOHDC3R&X-Amz-Signature=e3b7166706d062bfa761a2cab7d2b2ad4701555970c8716d612eddf25ea63678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4X3WHJU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmEz8Js2pj5YO0z47vIDG5CevbBkSNydHjlfvUci4QNAIgXYZcfXe5BJUPZBIqgONhdAVbPMye8UfWMSSG39PhK0wq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKLSsKB6g25OEW9QHircAzK5cgz0gC4f9KGASWHvWbm2MuFdOmciVN5idfo4%2B79RLgFIuyvI%2BYOuNQmhy7kblFEnUgFK1fJZhct0f7ZyTxb6U5%2F1gmC1Fw9R0Wq62heqpW72%2B5Ru%2FoKhLw1cXpTDQtYSXUvUNahjQKc2x26Ozh7Uy1Q8HDK24xk5hbpU56v807IR88MpEgR1fwo13SW1YMkemwOehiMM0EQbeyWQ23Uld3WqokbkXjuZUyeYuvSUrO3wuMFpj%2FLlE2XNqooarb8nvdNhQSD8Me7uU%2Fb11%2BajSFklATpPLVK5e%2F3quc9M0BFf%2BhUg%2F%2Bzm%2BcW3rbMGKkJogRdm%2BbsQ25HtCTIVpWo85ZaDsQBTgXlptLi6kCJ0gFvXgxJY3hUjXn0QT%2FxJU3PTuxf9Q1fT6HXfWvHLEhqKjQqkJqdMC7uWnBeNx6YS6%2BBR2BgWe%2F1AqqsTe6VRHBFqaPTufsFhF65TBzpy9H8%2FYV8ukKTc64B9gaxZbzbPkNedV5nuM0fc5OiEcHaUsisCYHoOMxvMb%2FrKfGHcqc5lPhIamOnaY4oN%2BYoc6k%2BVzqz3cdZA4bdqqfocQk%2FcO38cxBbEnIbzqA1Pm9P5r1lu6ga4dm3W395bm5DzcxbFUJ%2Bkg1vbafTXnPjVMK7vicoGOqUBZEOr4Ex07zbg9PscTXjLv%2FB6ecpFXyHS8fubBofwTBEYGMawwH8IswG1GP%2Bo%2FVfS2KIKroAXV3SkA1LfVBLEq1goMBFM49i81qCevfM7qWwgkm8HM65%2Bnz33xxhk%2Bjy8KKzRheV5%2F%2B9As5eHdrTUAJsNFzBwRyCh7F29yWRQ%2B07Jmap4RXptLabN0jhkS%2FvCnia5OwJFO4KuJ%2FUeYtE21QOHDC3R&X-Amz-Signature=60716f6e4b8929e2d90a07c04d6a09504017c79cb5defab3b1774c97292d9e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

