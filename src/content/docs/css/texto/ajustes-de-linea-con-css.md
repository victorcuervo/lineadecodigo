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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSMGMWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqkD287P8MZyXmGtZXSsJdU%2BVUjJxQk9peUW8KxFxk5AiBTpWfE8yPvHp75lmhiVPpTOhXW7z6botw0Ji9aaDyxgSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqXsiUjOQcE3np5JKtwDquvEx%2BgvX9%2BCGgl5tsEuO7tmsuNzc4Y84qcSXc%2BEat7nP%2FJI535h%2BYnxF3W72N3yjVJ7a1xyMWeuwyo9kE1elpunIlXw24Z053Q3VfkKpnjFXtzVGE4X%2FZNVQI1wzu2SGLZg2qz4n%2FRzYgr6ZVeX%2Foj7bgRBOtBfGbgdMkcX7rj9VBHj725t%2Bw%2FfG3096diynBaIl1PzfikHPdWzTCVxgHwrqLmMG5CQGxSyVt196GSZcHkHMdkiXdggzzSDH7WXdqr%2FX%2FmzmveqEurrBgkb3aajrQowdtKHtA8vTR8xww%2BboCRpaug6INPvERiVni199hkZUWiuqffIzKwGSwnBkleLgvp3HZGlrJ7PLO4zDg5mipQlIKfVsUtXjJ9grgR7Tof65ftPbR1TXBQe49hjS7HfXBLISSZ5Sy8IKO9E0De7etWcMuYPVcLbGo6ghm%2FxscTS8vZ5t0P5lTQ9uF9Bg3ugSh7Oy7nZ9V4s6v7afM7Clv8tvacYCPQyjuSLaOeXPUJUQihMoRUCljQjYd0Ct4qduXE85U%2Bf6jdFmScB3lWQfiqCsAZyDqjh8awGU98vd0HtwoCkYjVNbDPNPsHRMjkI%2BwOr0%2B5K%2Bdq1Pu16F3ZTjkTtJF%2BVsbof6p4wrZ%2BLygY6pgFr7FZkvCTGey%2BZyIOPo5gZwntkEQ%2FjHOzasgJLd6sonbGuLGhSF2jFuGlt3l8DX%2FI2lS1Gx%2BYmGB0%2BfMUgUK2aBOnuBzaw2iVDTVTN95mcQS6Z%2FAHqfXjZs2KU8FVuDwxdAAidbV27wrUJ3H%2BryPZYSKwxrmYVC%2BGjfgPvQoPrElaYoHBNaH25kyrnoPsw4i4urnJhqBJ10GHPdgQByjnT1ri6Jn%2FH&X-Amz-Signature=f8a59d7cc9a8ad1d816f13fcb0710bac89925ad2a0a9aee647ffb96ba045d9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBSMGMWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqkD287P8MZyXmGtZXSsJdU%2BVUjJxQk9peUW8KxFxk5AiBTpWfE8yPvHp75lmhiVPpTOhXW7z6botw0Ji9aaDyxgSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqXsiUjOQcE3np5JKtwDquvEx%2BgvX9%2BCGgl5tsEuO7tmsuNzc4Y84qcSXc%2BEat7nP%2FJI535h%2BYnxF3W72N3yjVJ7a1xyMWeuwyo9kE1elpunIlXw24Z053Q3VfkKpnjFXtzVGE4X%2FZNVQI1wzu2SGLZg2qz4n%2FRzYgr6ZVeX%2Foj7bgRBOtBfGbgdMkcX7rj9VBHj725t%2Bw%2FfG3096diynBaIl1PzfikHPdWzTCVxgHwrqLmMG5CQGxSyVt196GSZcHkHMdkiXdggzzSDH7WXdqr%2FX%2FmzmveqEurrBgkb3aajrQowdtKHtA8vTR8xww%2BboCRpaug6INPvERiVni199hkZUWiuqffIzKwGSwnBkleLgvp3HZGlrJ7PLO4zDg5mipQlIKfVsUtXjJ9grgR7Tof65ftPbR1TXBQe49hjS7HfXBLISSZ5Sy8IKO9E0De7etWcMuYPVcLbGo6ghm%2FxscTS8vZ5t0P5lTQ9uF9Bg3ugSh7Oy7nZ9V4s6v7afM7Clv8tvacYCPQyjuSLaOeXPUJUQihMoRUCljQjYd0Ct4qduXE85U%2Bf6jdFmScB3lWQfiqCsAZyDqjh8awGU98vd0HtwoCkYjVNbDPNPsHRMjkI%2BwOr0%2B5K%2Bdq1Pu16F3ZTjkTtJF%2BVsbof6p4wrZ%2BLygY6pgFr7FZkvCTGey%2BZyIOPo5gZwntkEQ%2FjHOzasgJLd6sonbGuLGhSF2jFuGlt3l8DX%2FI2lS1Gx%2BYmGB0%2BfMUgUK2aBOnuBzaw2iVDTVTN95mcQS6Z%2FAHqfXjZs2KU8FVuDwxdAAidbV27wrUJ3H%2BryPZYSKwxrmYVC%2BGjfgPvQoPrElaYoHBNaH25kyrnoPsw4i4urnJhqBJ10GHPdgQByjnT1ri6Jn%2FH&X-Amz-Signature=0d4d0637c72228db4cc01de0b36f9aed7ec7d88b26a830c082938981f2d2d881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

