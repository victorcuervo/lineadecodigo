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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6PR4LQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9%2Bt3RTy%2BqJCci4XpfaXALOybqofD6RxDMy7yAEEh8bAiAqkjGGkPHvmCkRiKCGPUGrpI76IhUS%2BuKbpeDlgPxPcSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneGz1AWErgf2sc3fKtwDpvnCk%2F%2FSj0vmvs1bnHdcY7qPgzVOBzC%2F98MjOcgbHQU3WWdd3ke6XGJsQZKmLBkFfpmiuma5N2GkRa61yzzrn6F8X3Bmo39wa4yuesk2YUjy9exWYf%2BwM9iZjh7Nl8FBvSDMnUyiHU0yMJ9xW%2Fmdad5mQXpOWtcBOWrBio6tdotK3j%2BqdmWH3eSPFVaFWJRhnyQZjaqfQ7ZVDRw0xbYPNbgWeSQiqoaaIGwo1LsaumIRNlts27G2uuBj5MlqcU4p2BpeJrq4TkqxCMl6msJJUKzQmmWGLbOi1VC68KrH4RZl9rZ6LVxUvUEHQQAIeSUAIHbSLHQQtyup5IvIGI7a3C1YCt9vcph%2F01quxJc9iPT9N%2BMIGUvg6axztUElYDURwvOedzPYT8249%2BBHPdHyFHfdF0DeYGXOWsQ2CKFhB6Tiyehda3en%2Bgumpj9%2Bxbuh760PoYf%2FsUD9rBwk2VqrrD4ilKBK5s4BZF3Dh68lgCdA%2F8e2Gv1HILj2WDm6zgTIey%2BmaFw1YUs3XExCJfo8a5Wm%2FJndnJSr%2Be7q7MDIAH5nKXG93Gf6F6Js2sUYsP18jEjEmjJQLep3wpxk0KMIBnSpL9sNcIKRGuFA%2BzlrCWXjFRnuO0vilOckIPwwo6CLygY6pgEB%2B%2BncKWr0mCNSIhlKNiIAPatEHxqtwlz%2B68buIbcqWh%2B9hZVlCUrpQVomgZTT5bpeWsQGCQuzZgLlX669lmgeZvV1j5fOzyH6%2F%2FkKUd0qtbSgePi4W0iN7ULt8aKDFbhPH%2BRJxcjQyoDrrT7VSjc%2FkcZPxDVwGvSUuWixKC%2BAJM0cP9Xvp3G%2BEmcsVPa96eBSzSf9pEDv8T9UUsveAgNIpkVFHSFj&X-Amz-Signature=39e49d6f271a8546905338f5fb650ca4dba23360ebdf362a0d5f17af5664a521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6PR4LQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9%2Bt3RTy%2BqJCci4XpfaXALOybqofD6RxDMy7yAEEh8bAiAqkjGGkPHvmCkRiKCGPUGrpI76IhUS%2BuKbpeDlgPxPcSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneGz1AWErgf2sc3fKtwDpvnCk%2F%2FSj0vmvs1bnHdcY7qPgzVOBzC%2F98MjOcgbHQU3WWdd3ke6XGJsQZKmLBkFfpmiuma5N2GkRa61yzzrn6F8X3Bmo39wa4yuesk2YUjy9exWYf%2BwM9iZjh7Nl8FBvSDMnUyiHU0yMJ9xW%2Fmdad5mQXpOWtcBOWrBio6tdotK3j%2BqdmWH3eSPFVaFWJRhnyQZjaqfQ7ZVDRw0xbYPNbgWeSQiqoaaIGwo1LsaumIRNlts27G2uuBj5MlqcU4p2BpeJrq4TkqxCMl6msJJUKzQmmWGLbOi1VC68KrH4RZl9rZ6LVxUvUEHQQAIeSUAIHbSLHQQtyup5IvIGI7a3C1YCt9vcph%2F01quxJc9iPT9N%2BMIGUvg6axztUElYDURwvOedzPYT8249%2BBHPdHyFHfdF0DeYGXOWsQ2CKFhB6Tiyehda3en%2Bgumpj9%2Bxbuh760PoYf%2FsUD9rBwk2VqrrD4ilKBK5s4BZF3Dh68lgCdA%2F8e2Gv1HILj2WDm6zgTIey%2BmaFw1YUs3XExCJfo8a5Wm%2FJndnJSr%2Be7q7MDIAH5nKXG93Gf6F6Js2sUYsP18jEjEmjJQLep3wpxk0KMIBnSpL9sNcIKRGuFA%2BzlrCWXjFRnuO0vilOckIPwwo6CLygY6pgEB%2B%2BncKWr0mCNSIhlKNiIAPatEHxqtwlz%2B68buIbcqWh%2B9hZVlCUrpQVomgZTT5bpeWsQGCQuzZgLlX669lmgeZvV1j5fOzyH6%2F%2FkKUd0qtbSgePi4W0iN7ULt8aKDFbhPH%2BRJxcjQyoDrrT7VSjc%2FkcZPxDVwGvSUuWixKC%2BAJM0cP9Xvp3G%2BEmcsVPa96eBSzSf9pEDv8T9UUsveAgNIpkVFHSFj&X-Amz-Signature=908da6979ec00cc430c25e0892fdc16cd55fa12255dbf902330080967e748869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

