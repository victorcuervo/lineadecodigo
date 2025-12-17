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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVSWUTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDivRQ4xckYUfb1irzGNymMzl8J1s241jLw9pwcmqH9zAiBaGHqc5EbkCNvduzsgliik41woPk5Wx9z%2F1YJz8j37CiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3DSoCH5APLIwDzQ%2BKtwDmjYgHPgDMru9oDd23CCDBlmsMKCvrhaX7jObjXFI0xDR9X48Luj1HOjS7I7nzYNbYYhxAleLByb9tOCL8DR0OPNBPKkFQpyKaNRoov4r%2FxFmiST5ee9QxhToHAbzOMyTsHoEjMEH8jdUXbWQZlDhGbO686Pn3s1g%2F8LylCmUdfGP8m7L4YlOJbsn%2FORpC%2FDzf9h3QOrvd38fqFYRbnUMKk8fPlJsL6vDybTGLDnJxjlCXPeCGgZwhJjQEFk4uhQaHgLbZbPJSrHfppG78ITu1Z%2FGgBn2iltkq1IXhQnDV5jq%2FSfgH2QZy%2BdsgSx0Avp21VaBvEEnk9mB58GScRoZ6NHfIfxJXgjby%2BH6jJ9F1ukXzd9ofzhVCirBnRFXB1AAussSfJw%2F6E7ZErd9VxGDBNokcLxibWM58kBtJ2TQsAJqR8oKbUKY94KbDVSiZ7J7Xbs%2FHYD%2FirAR5803rO28i78G0CK%2Br1uZfYpXf1hx2EwN%2BwwK1MSClzQrOmTApR%2B8GH%2BF2HZGPKnejFagXNVYzrOQngDmiUpLtt9UitCkWC9ERsDDqaSm9Wyfnxh7SbzPCVbUkB4Bvs%2BKBk%2BGH7IIgrcHvVMl4KcAE1ZBKHpxPADDeqUdHxyVeUt8URgwiICLygY6pgHkFKYBDMUaV7q0f%2BQUsveZmkb6eqB7gbwqK0kyA8%2F%2Bt4ZFC4Y%2FMDKbVU8av%2Fr254mOjYL3cUrOSF20MuFsS11pktXj7%2FYRmBomvRnGBkgQaAfgQty7FHrxkpvEpikrkDVjmhuC%2BhvB2lMikRAl81iFivday29GduGKLXuyzUtYNTnF%2FpcGtg898wR5yshBZpw%2FnGkByTsLJxAlVwuBqyL9YCDtwFVB&X-Amz-Signature=b10f4ea9e7282bab1a2f36b6c9a70690a9d8d0b9f737986973c5b00346df402d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVSWUTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDivRQ4xckYUfb1irzGNymMzl8J1s241jLw9pwcmqH9zAiBaGHqc5EbkCNvduzsgliik41woPk5Wx9z%2F1YJz8j37CiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3DSoCH5APLIwDzQ%2BKtwDmjYgHPgDMru9oDd23CCDBlmsMKCvrhaX7jObjXFI0xDR9X48Luj1HOjS7I7nzYNbYYhxAleLByb9tOCL8DR0OPNBPKkFQpyKaNRoov4r%2FxFmiST5ee9QxhToHAbzOMyTsHoEjMEH8jdUXbWQZlDhGbO686Pn3s1g%2F8LylCmUdfGP8m7L4YlOJbsn%2FORpC%2FDzf9h3QOrvd38fqFYRbnUMKk8fPlJsL6vDybTGLDnJxjlCXPeCGgZwhJjQEFk4uhQaHgLbZbPJSrHfppG78ITu1Z%2FGgBn2iltkq1IXhQnDV5jq%2FSfgH2QZy%2BdsgSx0Avp21VaBvEEnk9mB58GScRoZ6NHfIfxJXgjby%2BH6jJ9F1ukXzd9ofzhVCirBnRFXB1AAussSfJw%2F6E7ZErd9VxGDBNokcLxibWM58kBtJ2TQsAJqR8oKbUKY94KbDVSiZ7J7Xbs%2FHYD%2FirAR5803rO28i78G0CK%2Br1uZfYpXf1hx2EwN%2BwwK1MSClzQrOmTApR%2B8GH%2BF2HZGPKnejFagXNVYzrOQngDmiUpLtt9UitCkWC9ERsDDqaSm9Wyfnxh7SbzPCVbUkB4Bvs%2BKBk%2BGH7IIgrcHvVMl4KcAE1ZBKHpxPADDeqUdHxyVeUt8URgwiICLygY6pgHkFKYBDMUaV7q0f%2BQUsveZmkb6eqB7gbwqK0kyA8%2F%2Bt4ZFC4Y%2FMDKbVU8av%2Fr254mOjYL3cUrOSF20MuFsS11pktXj7%2FYRmBomvRnGBkgQaAfgQty7FHrxkpvEpikrkDVjmhuC%2BhvB2lMikRAl81iFivday29GduGKLXuyzUtYNTnF%2FpcGtg898wR5yshBZpw%2FnGkByTsLJxAlVwuBqyL9YCDtwFVB&X-Amz-Signature=5e549df501da46ac57e501dc608866f0191b57d30a167f20c4d239aa54dffa18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

