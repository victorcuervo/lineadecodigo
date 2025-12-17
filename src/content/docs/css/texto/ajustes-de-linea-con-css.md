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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XCTVQE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcVGPIvGyLiTKWWKMy3%2BLoPpglsO3sz0dBlpcVKaflwAiEAvOisRt1o%2Bn776fE2mUFZUOS7%2Fpft1qZrKlT3eqo%2FnuIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDED8It0MYoA2kv2QNircA9vk3gzNJR0rrw9kHXEGWIt6VdgTsXV%2FwluPHRQncFeuIDrsxKLqhhPth6cxvJeK0jIM6DnBpOcmLSJrPR%2B2aC6ucolCnScYDsZnScaR8VqocuXrtiPvF333JrumQMx1mAa%2BnVRxfFRHPxda3CsjPLeDnjOpbKXoQC0WpnD0EG0tjge2Ku1EdQ0eWMdiN2BymCT2t32QhiHWemiDmsGXTgiPw1zg7LzbRHKHAhrug9MwT5jJIQWyg2op2RJnmfzeYd68%2F9iIE3ErpiqRg0Jwc56yNgBOVq3ggrRzTnrubTR9ZFbHljiUK4FdBBgxVpKXUcDQ%2BIf95c%2FDi1EF7icbLn1WWOji1IEXSK%2F%2F6KgBhv6fSsfYiUFxijicb%2FzmLnOcYO4Nb%2BFuGtahP%2BZanmFcbcTzNn7qS2zKGKOh5QGg46T3oD3dOuHBRDDN4kCtC%2Bxuo1CAOEUrBSdggIKABDbtioujQexvY8AyCCeu7hUfgxPIntPTLwdif%2B0gZXaye6I66BXeyTisbnmclD7o79LpCaHEZX3WpUMWdQXY9SR2bowQHSMTLxLw1gyDcCEr3uoBBbrqTxoAkEVjatYGQWDVMHTURZAG9nW0f6LUrcFnnsSJeFgdbMI1Dtrm6%2FauMPiqisoGOqUB2o%2FuNTHCs11q7Orpg4pqrw2Az87upgXCOjyv6aRMuqEKx7msLlPbfO5DhCddz3ngJpu%2FS5KDf8Dw%2Fna55EuEsUm1zTPdNsKq4rxmANwJ7oQyb3QiZ0EJUSIFLZfuCDm5GdnJJT7tCdtd8zzPDh4vnrJQzVlcrk5vWw%2FHsL5u%2BFO7m%2BB0sBWa4qKYhql4G0dBHxsIptQIVXmgH9bhllASUeMcLZ80&X-Amz-Signature=c43e27efdfc654cd0ac081406b3bd761b8dd586b0482d7d44872b549803d767b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XCTVQE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcVGPIvGyLiTKWWKMy3%2BLoPpglsO3sz0dBlpcVKaflwAiEAvOisRt1o%2Bn776fE2mUFZUOS7%2Fpft1qZrKlT3eqo%2FnuIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDED8It0MYoA2kv2QNircA9vk3gzNJR0rrw9kHXEGWIt6VdgTsXV%2FwluPHRQncFeuIDrsxKLqhhPth6cxvJeK0jIM6DnBpOcmLSJrPR%2B2aC6ucolCnScYDsZnScaR8VqocuXrtiPvF333JrumQMx1mAa%2BnVRxfFRHPxda3CsjPLeDnjOpbKXoQC0WpnD0EG0tjge2Ku1EdQ0eWMdiN2BymCT2t32QhiHWemiDmsGXTgiPw1zg7LzbRHKHAhrug9MwT5jJIQWyg2op2RJnmfzeYd68%2F9iIE3ErpiqRg0Jwc56yNgBOVq3ggrRzTnrubTR9ZFbHljiUK4FdBBgxVpKXUcDQ%2BIf95c%2FDi1EF7icbLn1WWOji1IEXSK%2F%2F6KgBhv6fSsfYiUFxijicb%2FzmLnOcYO4Nb%2BFuGtahP%2BZanmFcbcTzNn7qS2zKGKOh5QGg46T3oD3dOuHBRDDN4kCtC%2Bxuo1CAOEUrBSdggIKABDbtioujQexvY8AyCCeu7hUfgxPIntPTLwdif%2B0gZXaye6I66BXeyTisbnmclD7o79LpCaHEZX3WpUMWdQXY9SR2bowQHSMTLxLw1gyDcCEr3uoBBbrqTxoAkEVjatYGQWDVMHTURZAG9nW0f6LUrcFnnsSJeFgdbMI1Dtrm6%2FauMPiqisoGOqUB2o%2FuNTHCs11q7Orpg4pqrw2Az87upgXCOjyv6aRMuqEKx7msLlPbfO5DhCddz3ngJpu%2FS5KDf8Dw%2Fna55EuEsUm1zTPdNsKq4rxmANwJ7oQyb3QiZ0EJUSIFLZfuCDm5GdnJJT7tCdtd8zzPDh4vnrJQzVlcrk5vWw%2FHsL5u%2BFO7m%2BB0sBWa4qKYhql4G0dBHxsIptQIVXmgH9bhllASUeMcLZ80&X-Amz-Signature=925d57c79055525cf1b951d50b4d368a37f7747574dc3f99933bb40aff7888c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

