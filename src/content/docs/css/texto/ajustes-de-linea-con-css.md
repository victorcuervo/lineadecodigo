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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV46MCB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHpBmYwjkS1qTHhijuURVXyWZ1UA%2BbI1S83fCy5Tw8gwIgZHMuHkl%2FEmWt12TpLuJyQom%2F5bmoNaG%2Bwo3PVuguMuQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDaglK2uq5nyN2PirCrcA4bdaErsooZuhGwEnB4KpoN0qJ6UoR9aLGNNcnn5WjeiQK5uaPh6wFqGOOFR5Yn%2BtGZlU9YzHQ47c4DpOEVnTKuI0ueF8Nzl3RpsjnTZTWmUXZ2RG4nPEfoO3IG%2BeheqeB11MfFlfiviwdiNzsC1DYDFFhhuajTpZTEQjEcsWusfeyKS9HQt0cQTfGs4h0pTO%2FdpgaL0Qr5H%2FUDW2RybLNA2w3GaNhQLn3owm2mf1MB5VwE3gBBgwTg6e%2BDGKb%2BMbZoHhRE%2Fj0MLcPc10NtUOopOuQCtn0r5KLfX%2B72X%2BoftDjkED1G38JO9to8cQ%2Bgr4o2txjhkZhgEmikGkfFnlweLUkmayuVdmaaUYo7EQfuosmUvMAGgvGTNcPbfPuw%2BjmwdB5UNfDupWqrXLMow7PSTG%2FoHLu802K57y9iagSeSLPX0ZR45gUojm2p30ASeJowYHzDvOVVnozwwP6%2FT3tdxYUQWMkyexU0%2FfZwDIRod7joFz%2BKPoszUhE1L58j0Q%2B4cRjkavJO3FsxRa5JxikPDH6efDgoLZR%2FKD73P6JAQ22eRxntrVEDPZHLpAuF0QSN%2BUKr1mNas9vZ56wO5jwrpBIdpdkIh5K71j1wIN8fIhc8uhZXOBW2QKS%2FcMOXwicoGOqUBOz%2FKfnICPAE7xwcs1mAxfFJMS8QZTzB4tWu8YPEjTmtZR3i1srf3EDaW01wBOQ%2FXBY1DPJHEJpKz%2FAFh%2BysmHf5OE73X%2Be%2Bi3GWB5GYFG%2BeOT30ND3oJR7Tby4sp%2BKM7seEfPOZeB64znfd7KvXvq4hSOwZzNL1%2BRnlAQKIFQGCU%2B1RUV0H%2BstbIJxsf%2FmPI0VqTLNR0uQRb7MBavwwQJnFjS%2Fti&X-Amz-Signature=881478da3faf969d5f6bbb68c90a5c9403c542e4b44e3ec18fee6e718c03191c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV46MCB4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHpBmYwjkS1qTHhijuURVXyWZ1UA%2BbI1S83fCy5Tw8gwIgZHMuHkl%2FEmWt12TpLuJyQom%2F5bmoNaG%2Bwo3PVuguMuQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDaglK2uq5nyN2PirCrcA4bdaErsooZuhGwEnB4KpoN0qJ6UoR9aLGNNcnn5WjeiQK5uaPh6wFqGOOFR5Yn%2BtGZlU9YzHQ47c4DpOEVnTKuI0ueF8Nzl3RpsjnTZTWmUXZ2RG4nPEfoO3IG%2BeheqeB11MfFlfiviwdiNzsC1DYDFFhhuajTpZTEQjEcsWusfeyKS9HQt0cQTfGs4h0pTO%2FdpgaL0Qr5H%2FUDW2RybLNA2w3GaNhQLn3owm2mf1MB5VwE3gBBgwTg6e%2BDGKb%2BMbZoHhRE%2Fj0MLcPc10NtUOopOuQCtn0r5KLfX%2B72X%2BoftDjkED1G38JO9to8cQ%2Bgr4o2txjhkZhgEmikGkfFnlweLUkmayuVdmaaUYo7EQfuosmUvMAGgvGTNcPbfPuw%2BjmwdB5UNfDupWqrXLMow7PSTG%2FoHLu802K57y9iagSeSLPX0ZR45gUojm2p30ASeJowYHzDvOVVnozwwP6%2FT3tdxYUQWMkyexU0%2FfZwDIRod7joFz%2BKPoszUhE1L58j0Q%2B4cRjkavJO3FsxRa5JxikPDH6efDgoLZR%2FKD73P6JAQ22eRxntrVEDPZHLpAuF0QSN%2BUKr1mNas9vZ56wO5jwrpBIdpdkIh5K71j1wIN8fIhc8uhZXOBW2QKS%2FcMOXwicoGOqUBOz%2FKfnICPAE7xwcs1mAxfFJMS8QZTzB4tWu8YPEjTmtZR3i1srf3EDaW01wBOQ%2FXBY1DPJHEJpKz%2FAFh%2BysmHf5OE73X%2Be%2Bi3GWB5GYFG%2BeOT30ND3oJR7Tby4sp%2BKM7seEfPOZeB64znfd7KvXvq4hSOwZzNL1%2BRnlAQKIFQGCU%2B1RUV0H%2BstbIJxsf%2FmPI0VqTLNR0uQRb7MBavwwQJnFjS%2Fti&X-Amz-Signature=f0e7942f6a61f5089bd5c6c39fea71799cc65f1ac5aa1a867dd7e6076b06e479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

