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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMU7EJA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8jWv7T5TNepjIuwASmD9G8IrFQXe6tqYElzx1MuLIpAiBhLQXI3ol8T40WHmwszEo2eK5gkVY33WT3jKVVFylkDyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMZsJ7EheLaLUaZAFsKtwDx0cCA%2FNH%2BD%2FfJhHxH%2BdKr6EvNiZxxBreXAmd%2FrS6yJNIcyBsIN4Y6NTeF%2FXwpDKiSz9wgqxs5QV9s6mBkYVcZjdB97%2B7tvxqYyFQNbkTpp1sl7xDKyIzHFlZZnqmXWCbsFd6DsxxEyzl7iAet1A31GOE4ASMw4xjFrraD8TJuCxA%2B8KiILfDGEswe%2B44hfVCT0GA8hPQN%2FzSFGArlY3V0PXQ5wfwSWcb7r7WWVJFJfXKygpX%2BGSP1pkhHk0qQtd6XRvwjU%2BmP%2BRgcs5D7TPnvY3%2F0PvnTSvK93WeK6TQoVnvbPdFyKgJTbB35aoirKkU8vbuU9vlKigu6XkFRE%2Be2PSkEwZorJnezFLPmtnltl%2BhVt4tWLzux77zz05p8Ktiq3ILQBKy0OzOh95ixymLn9a86%2BebQTdRAzfhAf%2Fml%2FlmB9oiOXMer%2F0aAVSORbIwuJ8vKNzAUQRsC175KqSqVdNDqZdi4kh1r7KFThOTGjhaUJsrPsOz2%2FgjxdfYPKGc0%2FCMFsKQqyind0I8H2blk3ADrYeGbVbjHPd2JV4lQEcJCOkHuVpPC5VDDY34B3thkSaqA7RqRiIOyj5MXGHmODYvZpdDxrSDSc4aXWt0Y3kBonqdpjimlCYiP6gwvqqKygY6pgGxyKB58lqoivMadWX%2BoD%2BGUwKHSqFILKcOxHLUsgnn5fDlxBxDlngvAmJGctOJupm8U%2FuSFmoHBIX6%2BXpXkBcqAJdolsB3qnQAgNhoXfB4t1vzua7DbEZtK6R47IqVL6nPcY3NntXKFahjIaMEYRy8c0nldH9c9vd769aakdCYCBq%2BqgUUUAym3fJLlzTnRQiQTXGwB7Gj1YtHz85UnilFzAc8RKcd&X-Amz-Signature=66a63c7403c9d35cbdbe1cc68bce7597a2f8768a2a57ed1427de2e75a7bd3a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMU7EJA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8jWv7T5TNepjIuwASmD9G8IrFQXe6tqYElzx1MuLIpAiBhLQXI3ol8T40WHmwszEo2eK5gkVY33WT3jKVVFylkDyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMZsJ7EheLaLUaZAFsKtwDx0cCA%2FNH%2BD%2FfJhHxH%2BdKr6EvNiZxxBreXAmd%2FrS6yJNIcyBsIN4Y6NTeF%2FXwpDKiSz9wgqxs5QV9s6mBkYVcZjdB97%2B7tvxqYyFQNbkTpp1sl7xDKyIzHFlZZnqmXWCbsFd6DsxxEyzl7iAet1A31GOE4ASMw4xjFrraD8TJuCxA%2B8KiILfDGEswe%2B44hfVCT0GA8hPQN%2FzSFGArlY3V0PXQ5wfwSWcb7r7WWVJFJfXKygpX%2BGSP1pkhHk0qQtd6XRvwjU%2BmP%2BRgcs5D7TPnvY3%2F0PvnTSvK93WeK6TQoVnvbPdFyKgJTbB35aoirKkU8vbuU9vlKigu6XkFRE%2Be2PSkEwZorJnezFLPmtnltl%2BhVt4tWLzux77zz05p8Ktiq3ILQBKy0OzOh95ixymLn9a86%2BebQTdRAzfhAf%2Fml%2FlmB9oiOXMer%2F0aAVSORbIwuJ8vKNzAUQRsC175KqSqVdNDqZdi4kh1r7KFThOTGjhaUJsrPsOz2%2FgjxdfYPKGc0%2FCMFsKQqyind0I8H2blk3ADrYeGbVbjHPd2JV4lQEcJCOkHuVpPC5VDDY34B3thkSaqA7RqRiIOyj5MXGHmODYvZpdDxrSDSc4aXWt0Y3kBonqdpjimlCYiP6gwvqqKygY6pgGxyKB58lqoivMadWX%2BoD%2BGUwKHSqFILKcOxHLUsgnn5fDlxBxDlngvAmJGctOJupm8U%2FuSFmoHBIX6%2BXpXkBcqAJdolsB3qnQAgNhoXfB4t1vzua7DbEZtK6R47IqVL6nPcY3NntXKFahjIaMEYRy8c0nldH9c9vd769aakdCYCBq%2BqgUUUAym3fJLlzTnRQiQTXGwB7Gj1YtHz85UnilFzAc8RKcd&X-Amz-Signature=d2f2e8d7f45e0e7efbee3ae00742d18a0c687b02c15345daf9884f760b912415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

