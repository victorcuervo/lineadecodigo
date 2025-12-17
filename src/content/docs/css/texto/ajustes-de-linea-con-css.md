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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBKSNOY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYC%2FsIS5cDBB%2F9VPhmOt5GWtolxMdvkQV2BZztou0GAIhAMtspjni%2F1ENc4a%2Bs9Pf%2F4mUIdrl8REOv5C02Jx68EfVKv8DCHEQABoMNjM3NDIzMTgzODA1IgyK8g8AJTV0P%2BzyE24q3AMQBphrplZu4VrqKf0FV9pifX%2FGgGsvtvdZM%2B1dx9nrWwh4iSgzuJ1G3dbdmOIcOwPHkq25OPJd3Y3U6A5AAkomWLhXKbYn59cV1B8zvZEN9uc99es%2Fel3kAvmVKyMZpKRYDVOtPg%2Bhk%2FF9J4PKOcy1YRhHMBAJU%2BLsKlN0Go0D7tR9gk4NFH2ZlNTN1Bj3YqyCz14FHaLDqd%2BEaNN622sxEv1hEhkf20TzVTI%2Fr9dh7vc5jNAuuoNc%2F4GSX9sz3bRwonlE%2Bsz0fwRER%2FBokRP8CAZfKyfWx4tmXGeqIkIaCOkNvC2vqZYyGLqStj8iByKdva7MsbNE0%2FSeS66W5dprK0thPxvQCO6iRGkJw4lmOxUSx7ongmDOzaQL3VXGRrUTTFQqEdIabQMV%2BvTiAS8f9x4u0SAXwfUz0JRiVyRiyHml720hY0NnpWf%2BK1BteR%2BI%2F8pk8vHqA9BOQe90Tely3xeFDO37Kc%2B7UZUA5tg4Zx%2BZw4%2BSUDiUkVRq8aVDgRQ0fUWZcV6VV%2FUfVsSHwuXm%2BvF%2BAo3jzPVbyswKh6XP1tmoq1k78AszksNy6MiP6a4%2Fm5Vs4NKVeaY%2FeU40GB82uvxID3LZGcKK8%2FzZrBc%2BhmGLOVcYzbFUOOrZWzCi34fKBjqkAZrDQrsgC1bgyEhaEU%2BH6sSpPdYnzGkd3LMf31cs4yRPToxqeadKTkv0lWrK1TtZvdxmHJSFybZC4uHmIIEinc3hd5N11Y%2BT6%2BaFSc0CPWyuytrB%2FPmogro8W00lYfwL4oOkTIZfG8Nxmervl3z8fE7SyZ2CnSVoJpMhmZYVIBNGww6WcglDTV7lZVgrpKVB2Ylp4Lh7M2UWbJtunUNDOGwMKrCT&X-Amz-Signature=b7914676102970652d49458d108d7631923527b2a582d1cb20e5a9abc11dacf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBKSNOY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEYC%2FsIS5cDBB%2F9VPhmOt5GWtolxMdvkQV2BZztou0GAIhAMtspjni%2F1ENc4a%2Bs9Pf%2F4mUIdrl8REOv5C02Jx68EfVKv8DCHEQABoMNjM3NDIzMTgzODA1IgyK8g8AJTV0P%2BzyE24q3AMQBphrplZu4VrqKf0FV9pifX%2FGgGsvtvdZM%2B1dx9nrWwh4iSgzuJ1G3dbdmOIcOwPHkq25OPJd3Y3U6A5AAkomWLhXKbYn59cV1B8zvZEN9uc99es%2Fel3kAvmVKyMZpKRYDVOtPg%2Bhk%2FF9J4PKOcy1YRhHMBAJU%2BLsKlN0Go0D7tR9gk4NFH2ZlNTN1Bj3YqyCz14FHaLDqd%2BEaNN622sxEv1hEhkf20TzVTI%2Fr9dh7vc5jNAuuoNc%2F4GSX9sz3bRwonlE%2Bsz0fwRER%2FBokRP8CAZfKyfWx4tmXGeqIkIaCOkNvC2vqZYyGLqStj8iByKdva7MsbNE0%2FSeS66W5dprK0thPxvQCO6iRGkJw4lmOxUSx7ongmDOzaQL3VXGRrUTTFQqEdIabQMV%2BvTiAS8f9x4u0SAXwfUz0JRiVyRiyHml720hY0NnpWf%2BK1BteR%2BI%2F8pk8vHqA9BOQe90Tely3xeFDO37Kc%2B7UZUA5tg4Zx%2BZw4%2BSUDiUkVRq8aVDgRQ0fUWZcV6VV%2FUfVsSHwuXm%2BvF%2BAo3jzPVbyswKh6XP1tmoq1k78AszksNy6MiP6a4%2Fm5Vs4NKVeaY%2FeU40GB82uvxID3LZGcKK8%2FzZrBc%2BhmGLOVcYzbFUOOrZWzCi34fKBjqkAZrDQrsgC1bgyEhaEU%2BH6sSpPdYnzGkd3LMf31cs4yRPToxqeadKTkv0lWrK1TtZvdxmHJSFybZC4uHmIIEinc3hd5N11Y%2BT6%2BaFSc0CPWyuytrB%2FPmogro8W00lYfwL4oOkTIZfG8Nxmervl3z8fE7SyZ2CnSVoJpMhmZYVIBNGww6WcglDTV7lZVgrpKVB2Ylp4Lh7M2UWbJtunUNDOGwMKrCT&X-Amz-Signature=df2912e98209f245f78b6812ee53bc29839d8b680dcea312f97ea05472aabfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

