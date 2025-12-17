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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFI6XWC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRe1ny%2FB0ZPI0dfFZWV5FZ7t%2BHSKOUNb1v%2Bo2um4tFkAiBt48Gj3XxxRN5fVzCwVF1YnicBP%2FEc%2BY5EZ1T1%2FlqiIyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4YLD9dZdc2M26L4KtwDsrUc%2Bq77fg9zBvqO7voDdPTDOMnreCmsHdvfuiwfVsYmxfp5V3H9y4tRLfE5djxQaBz515mk5aNnKqjbwp62xid2lLFwsDZWzWakIrkWwFxRHC5c%2FvezJ6Gqyv7PdrV%2Fq6qzFIZrRoADCkt7EjxfxB%2Fz3GFPGZludc%2B2EdJsIk5ChEDFrhjxsIp7ok4lEL0LY6hZY%2FZmTl0Fi%2FH2UUQGc5La2EjAMTNrhZiw3U7rP59yhWPk97FXJ4Vog2h8fQ8IOYM8N%2BnBgWDiHLIIYo58xrLz5W46MK9LNh92DfsFcgLqthvLlhW5qmBInxkIUEdrUSp9gGlI8L7k74DsHwavguOqEk1jL9Du6QCMHaNzm%2Fk%2Fp%2FN2xGJezpzXZmQbdcV75IyScazG1tmHukcXDJ15x96RRR27RP49gqRRgkMYzVBVB6GCTpMZVZp%2FH9oGeIxwdtJglRH5kG%2Fq%2BOYlskvrmIhEKIzZEoG4EVfIGJwL2NOygkgrYbrvUP2F6BeT%2FPoLM25QsHpLppl7Hzc%2Brk%2FRn6bg6ouJ1h5wCdZ2TI1jjlvJxLnfu889G%2BvA5jmdnTTCCIGjvAbBhFwvG8q11Xu3dAAuSk04IbbMEGZB%2FD9X37EoRsg0f3Ud9ijM2DcwtKCLygY6pgErjLiGcFGqXHpyrMJYfj2uL%2BC%2BuVISReznqWiBrFsHjhc%2FAW2Vo0HaoNEyIRdOCfAMebh3Buq%2BAzFY%2Bi%2BxXAbDmpvSqilqxafUiLnVQfyokp8OgDWNoYzPALamTazkOB3Cc1o2m89wCRKRTygdZgBTx2yxN1wzy6Hbp%2FCnCf65oBzBS6Y243qo7QD%2BF%2FfBg5ER6qqFuFneHxRfhaY4VDPJby0yfS9e&X-Amz-Signature=b67c491c05e91fdc7906011c429bc9f2f9785c9298bfddfbc8515da38253f8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFI6XWC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRe1ny%2FB0ZPI0dfFZWV5FZ7t%2BHSKOUNb1v%2Bo2um4tFkAiBt48Gj3XxxRN5fVzCwVF1YnicBP%2FEc%2BY5EZ1T1%2FlqiIyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi4YLD9dZdc2M26L4KtwDsrUc%2Bq77fg9zBvqO7voDdPTDOMnreCmsHdvfuiwfVsYmxfp5V3H9y4tRLfE5djxQaBz515mk5aNnKqjbwp62xid2lLFwsDZWzWakIrkWwFxRHC5c%2FvezJ6Gqyv7PdrV%2Fq6qzFIZrRoADCkt7EjxfxB%2Fz3GFPGZludc%2B2EdJsIk5ChEDFrhjxsIp7ok4lEL0LY6hZY%2FZmTl0Fi%2FH2UUQGc5La2EjAMTNrhZiw3U7rP59yhWPk97FXJ4Vog2h8fQ8IOYM8N%2BnBgWDiHLIIYo58xrLz5W46MK9LNh92DfsFcgLqthvLlhW5qmBInxkIUEdrUSp9gGlI8L7k74DsHwavguOqEk1jL9Du6QCMHaNzm%2Fk%2Fp%2FN2xGJezpzXZmQbdcV75IyScazG1tmHukcXDJ15x96RRR27RP49gqRRgkMYzVBVB6GCTpMZVZp%2FH9oGeIxwdtJglRH5kG%2Fq%2BOYlskvrmIhEKIzZEoG4EVfIGJwL2NOygkgrYbrvUP2F6BeT%2FPoLM25QsHpLppl7Hzc%2Brk%2FRn6bg6ouJ1h5wCdZ2TI1jjlvJxLnfu889G%2BvA5jmdnTTCCIGjvAbBhFwvG8q11Xu3dAAuSk04IbbMEGZB%2FD9X37EoRsg0f3Ud9ijM2DcwtKCLygY6pgErjLiGcFGqXHpyrMJYfj2uL%2BC%2BuVISReznqWiBrFsHjhc%2FAW2Vo0HaoNEyIRdOCfAMebh3Buq%2BAzFY%2Bi%2BxXAbDmpvSqilqxafUiLnVQfyokp8OgDWNoYzPALamTazkOB3Cc1o2m89wCRKRTygdZgBTx2yxN1wzy6Hbp%2FCnCf65oBzBS6Y243qo7QD%2BF%2FfBg5ER6qqFuFneHxRfhaY4VDPJby0yfS9e&X-Amz-Signature=7cc3d82532d759386329fd6566a2d2f23c5521a52067065557149e941138a1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

