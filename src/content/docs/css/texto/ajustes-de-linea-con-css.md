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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHNBP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhsvH7hRfkYY67nt%2F1IgRgcupc1kr769vKaGZc1u7VHAiEA%2Bv88nGGH04b4g2nnvwbmiOpDZnfR3lzNvGL5%2Bc3nhj4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLbekjIUuL%2F%2F2%2F1DXyrcA0BA%2Ff7kyt1MZ%2Byr0LISapR3nDZW3Kri0%2F5VzoIq14H%2FBeG5pBc6KwVp1nKFvfl9CFUPYePaKXAFlHAhk431PIQUNtcjODzz6kvy4Ys5RASIYUU6yhIh4SKfX%2BOTteRF0cHiu3iDUVY57wL1KnbEroQuVk9UviA0ysmtLqo4bBm83JFnz9xeTmFxzFqN4pmqTSt7kQgY0JqXOHZYhM1quwJD0OPVz%2Fn9QZbNjsG7mrofFY3X4PlwywZVSLJ8%2BkpkuXjT57Sbg5A8vqVv9%2BorsDbj%2BkhJNPLzkps2CyHo9BaLcXN0YzdVOo54HwJWjL%2FiCAAISqEofcyx9XPZqrVH0hxL6WWEOp4wYv2GINTOeQuz760h4qlYtOUdMS5J%2FPYOqCuL6J9r3Qd9eEzaOcxJkM%2BYraweZSSL1wrFhWb8dNf4zpAsby3xZbq1joFHYeSgODo1R95vwLGRXfon1KizqeohZvXaEOnG4paVLyLLFxo8gGBzBglJ6kX%2FnRwSfJZE8c9CN%2FkC30k01aD64%2FaMHFwt9dddn4LXZGeElxnrUgoWRdYr70kdbitjorhzLTbxN78WnsvPD1jQTNWWWf6x0jjMnT6QoGmXflVHDnCOAoMCKnE4L8rQm1%2BQebIWMKerisoGOqUBTvN0vNvolbFcbM6TP75tbnAMA%2FZ0UR00Y0IlT6%2BzTaIHnrEdevq56dGJpxv5yWdWcwB16guO46WSvH6d%2BvdA5r6Zulz9GK%2B96N2JwfqeACJXom6YjkSzoIyiA3JM4M2WVpafblMhraeGY5Lc8jUNpXgQ6R87ZGlMfWYeiYnAkw8QiCW5hZOXGfMom%2BAE13Kx5hXOgdd1oLWUKhgvsozGz4kPFfd9&X-Amz-Signature=b70cc6ce4f2354f55e5cd9fee9b2f5e5947ae908861c50f138b62e9e89d4eec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSHNBP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhsvH7hRfkYY67nt%2F1IgRgcupc1kr769vKaGZc1u7VHAiEA%2Bv88nGGH04b4g2nnvwbmiOpDZnfR3lzNvGL5%2Bc3nhj4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDLbekjIUuL%2F%2F2%2F1DXyrcA0BA%2Ff7kyt1MZ%2Byr0LISapR3nDZW3Kri0%2F5VzoIq14H%2FBeG5pBc6KwVp1nKFvfl9CFUPYePaKXAFlHAhk431PIQUNtcjODzz6kvy4Ys5RASIYUU6yhIh4SKfX%2BOTteRF0cHiu3iDUVY57wL1KnbEroQuVk9UviA0ysmtLqo4bBm83JFnz9xeTmFxzFqN4pmqTSt7kQgY0JqXOHZYhM1quwJD0OPVz%2Fn9QZbNjsG7mrofFY3X4PlwywZVSLJ8%2BkpkuXjT57Sbg5A8vqVv9%2BorsDbj%2BkhJNPLzkps2CyHo9BaLcXN0YzdVOo54HwJWjL%2FiCAAISqEofcyx9XPZqrVH0hxL6WWEOp4wYv2GINTOeQuz760h4qlYtOUdMS5J%2FPYOqCuL6J9r3Qd9eEzaOcxJkM%2BYraweZSSL1wrFhWb8dNf4zpAsby3xZbq1joFHYeSgODo1R95vwLGRXfon1KizqeohZvXaEOnG4paVLyLLFxo8gGBzBglJ6kX%2FnRwSfJZE8c9CN%2FkC30k01aD64%2FaMHFwt9dddn4LXZGeElxnrUgoWRdYr70kdbitjorhzLTbxN78WnsvPD1jQTNWWWf6x0jjMnT6QoGmXflVHDnCOAoMCKnE4L8rQm1%2BQebIWMKerisoGOqUBTvN0vNvolbFcbM6TP75tbnAMA%2FZ0UR00Y0IlT6%2BzTaIHnrEdevq56dGJpxv5yWdWcwB16guO46WSvH6d%2BvdA5r6Zulz9GK%2B96N2JwfqeACJXom6YjkSzoIyiA3JM4M2WVpafblMhraeGY5Lc8jUNpXgQ6R87ZGlMfWYeiYnAkw8QiCW5hZOXGfMom%2BAE13Kx5hXOgdd1oLWUKhgvsozGz4kPFfd9&X-Amz-Signature=6c6954d2a40fb5f88505e2105fa20e06cef3260b8f98c7b3a2a3c4eefcc37002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

