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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3HLVKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQ9G2JvWVQGf8nNk4iuJTqacBtHSSyVcm%2F15ZJh6R9QIhAMYheFGLxZxuARUE7CZgis6XxiDHkWdjwXnb%2BF3A%2F%2BxCKv8DCH0QABoMNjM3NDIzMTgzODA1Igwf4LAg1he87D%2BYXmUq3APBvC89%2BgAHlXt8MUF6D0YTIa%2Fc6SmF0c5i2bXSahgTATkK%2Be4EM4ruUtm0yNHGc465MM5M7GldFh9y191O52ukpNKuuCgIggmvZu24tpbKOsSG%2BoBJT4aCleUJNo86S%2Bpb40PAC56448dkbQ5Z1BbqdiZbMt0ejj%2BO0852p5IHlEbhjGJONPfpObJiZFJUqXlbxoALs7PSMds%2BxOkN4SlldHe1gBGCHQoqITv3XVP9UowJXvexiZQajjsTZLF9bq3SwKV%2B9KMm9WDADeKY8%2BhXVWSRNThQDjHd5HC34LUKVVTIrKLzO%2Fefe6VsMaO1GCXylmLC7AAoGfRbry0%2FKT4DuqOtxEU%2BfFJ1wO5Rko08rYHfD6QwD0tlpbEC%2Bi6%2BTABZ%2BhcQwc%2BPS9u4bPnj%2FJW8gHttyOlaeGMRXq4ixxVJrbWusiHNOSQ2UM0WrnYMFK1T8MT7kUfIoT7%2BH1yw7o5R%2BFqHLrrp1wXTe68%2B669lljGRv%2BdT8UUaUnSvNMOQTDB1Ts41hDC7ABTT44hdp9cRM5FaxkszoEazz0fr4eF2oR1Ho7BbulLObNFyTcVWI5%2FTCoGAwTLRkY4gwde8bAzW%2FpRsYihspL%2BtCliYSRyFUHA5yBzFQa7tdjvK5TChq4rKBjqkAVP2AFnVYkxsW4RpJLNLQdWHcqXkrYm%2B5OyE%2B24uQgP9kDzZmdjqyGzvLmr9QOi%2BBWeXtxiwVA07H3z%2FVJIx1fDI3G%2BaBMbefJJ4WYtx2BlCQMC91gu57IeFDwnOgvzP%2FwIwHBLLntaKEPHPCKuDRQ3pENen0JKIRIghF0o28jC1xdeX13dh977CSAcQciJkJRjYPfh1vCsxdcOzsbT6h4jxE18P&X-Amz-Signature=8525188ebc4a8552909649ca668e6771aa30f4a6d846e82cf54634e59c528a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X3HLVKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpQ9G2JvWVQGf8nNk4iuJTqacBtHSSyVcm%2F15ZJh6R9QIhAMYheFGLxZxuARUE7CZgis6XxiDHkWdjwXnb%2BF3A%2F%2BxCKv8DCH0QABoMNjM3NDIzMTgzODA1Igwf4LAg1he87D%2BYXmUq3APBvC89%2BgAHlXt8MUF6D0YTIa%2Fc6SmF0c5i2bXSahgTATkK%2Be4EM4ruUtm0yNHGc465MM5M7GldFh9y191O52ukpNKuuCgIggmvZu24tpbKOsSG%2BoBJT4aCleUJNo86S%2Bpb40PAC56448dkbQ5Z1BbqdiZbMt0ejj%2BO0852p5IHlEbhjGJONPfpObJiZFJUqXlbxoALs7PSMds%2BxOkN4SlldHe1gBGCHQoqITv3XVP9UowJXvexiZQajjsTZLF9bq3SwKV%2B9KMm9WDADeKY8%2BhXVWSRNThQDjHd5HC34LUKVVTIrKLzO%2Fefe6VsMaO1GCXylmLC7AAoGfRbry0%2FKT4DuqOtxEU%2BfFJ1wO5Rko08rYHfD6QwD0tlpbEC%2Bi6%2BTABZ%2BhcQwc%2BPS9u4bPnj%2FJW8gHttyOlaeGMRXq4ixxVJrbWusiHNOSQ2UM0WrnYMFK1T8MT7kUfIoT7%2BH1yw7o5R%2BFqHLrrp1wXTe68%2B669lljGRv%2BdT8UUaUnSvNMOQTDB1Ts41hDC7ABTT44hdp9cRM5FaxkszoEazz0fr4eF2oR1Ho7BbulLObNFyTcVWI5%2FTCoGAwTLRkY4gwde8bAzW%2FpRsYihspL%2BtCliYSRyFUHA5yBzFQa7tdjvK5TChq4rKBjqkAVP2AFnVYkxsW4RpJLNLQdWHcqXkrYm%2B5OyE%2B24uQgP9kDzZmdjqyGzvLmr9QOi%2BBWeXtxiwVA07H3z%2FVJIx1fDI3G%2BaBMbefJJ4WYtx2BlCQMC91gu57IeFDwnOgvzP%2FwIwHBLLntaKEPHPCKuDRQ3pENen0JKIRIghF0o28jC1xdeX13dh977CSAcQciJkJRjYPfh1vCsxdcOzsbT6h4jxE18P&X-Amz-Signature=34cc79b0ef0aacbe3c0e73a20c6a9a1b7828d62cd65076c27611fcab47369c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

