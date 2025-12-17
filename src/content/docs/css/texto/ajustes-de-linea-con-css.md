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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O64D5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx1Xz94KjOfqzhv1nWIl2L1zQ8Q7li%2BKmVNTixacFzkwIhAM9ZieIbo7KHoAVPJemSac%2BnThEZMGCdPdQgd%2BbYhbCpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFpgRv2R74WOIoTzIq3AOMEgfclfO6wmhd6yY1LtrL1qfV8BL1FOpf5xLjHLc1iVmpns0AjGyAvw40ZgfVKuw6jQ2A4BqJ95ZkIC3J9CFCdn4H9JnR4RpIsUNWN1xTeMPbrBvrn2TvUCUvcDjK7S2U2fdOyiETOg94QAvnr%2BnvzArpB6f3rq3HpzTfICV02M7NUQEvzOQeoNcL2L6GCB6DO%2BYSnR0OvFcf4XrNicmWRLmBQlITdenrtUWAwtI5HKrMaWkSfWjvu31UMjP%2FB8JEA4Jdsrq1nYqky4ALSLhEyBBmEnVAkIlTrF3nBahplXbWRnTALO2h4rcdwZbHOTcI7UmSWg23uxJkpjTiaonkUXuQ5vrWWPdYM4e2DrVGqHePN6J7P8vJoCa6XCGK6hFGaJuY%2BJFv4hyBasdw4sC%2FXRSRCaCyIrNd6%2FImzf7YTey99rIFPaPkcNqLL6DSMMwH1woWBv7Vt%2FOb4qvvRYpqQ0%2B7jW3DZxxkgVRgurnF2PwlRiRQd5QnyQiW3dnGy1ZQ2VLBKr20pu28qAxAqtDAcrnkshatycsksEn6wsmsGkF2DrdgGXIhN3UkfwOeNit6YDfsraKPLAi7YtdMc6yIrPsZaA3EE2zI5iqthpiFKGpOPEomv0pfwYnvHjDdrYzKBjqkAWKo%2Bny8k%2Bsmg1H6ovrF76K%2FqAUeJWFGL%2FuzEgEjHLl4gesozBvq2YSeYlOYyCJ70IY427uMO3K4HDjKeOe15a0xUAPJ%2FsUSRVGwEz58ukVetTOzrjs93RoVaGuL9vi8QKDLr1oEQI64WC6TxkAZhsQFfZHKSwGgGqUua2rwJFnHFeRjqggk4MNoeZGVtKOiTO01UhTnsitbP4BO5MixJWWRSUul&X-Amz-Signature=674e2edaf888183293d18736bcd9bdc970f321d5b828efd2c89f2e006127a3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2O64D5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx1Xz94KjOfqzhv1nWIl2L1zQ8Q7li%2BKmVNTixacFzkwIhAM9ZieIbo7KHoAVPJemSac%2BnThEZMGCdPdQgd%2BbYhbCpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFpgRv2R74WOIoTzIq3AOMEgfclfO6wmhd6yY1LtrL1qfV8BL1FOpf5xLjHLc1iVmpns0AjGyAvw40ZgfVKuw6jQ2A4BqJ95ZkIC3J9CFCdn4H9JnR4RpIsUNWN1xTeMPbrBvrn2TvUCUvcDjK7S2U2fdOyiETOg94QAvnr%2BnvzArpB6f3rq3HpzTfICV02M7NUQEvzOQeoNcL2L6GCB6DO%2BYSnR0OvFcf4XrNicmWRLmBQlITdenrtUWAwtI5HKrMaWkSfWjvu31UMjP%2FB8JEA4Jdsrq1nYqky4ALSLhEyBBmEnVAkIlTrF3nBahplXbWRnTALO2h4rcdwZbHOTcI7UmSWg23uxJkpjTiaonkUXuQ5vrWWPdYM4e2DrVGqHePN6J7P8vJoCa6XCGK6hFGaJuY%2BJFv4hyBasdw4sC%2FXRSRCaCyIrNd6%2FImzf7YTey99rIFPaPkcNqLL6DSMMwH1woWBv7Vt%2FOb4qvvRYpqQ0%2B7jW3DZxxkgVRgurnF2PwlRiRQd5QnyQiW3dnGy1ZQ2VLBKr20pu28qAxAqtDAcrnkshatycsksEn6wsmsGkF2DrdgGXIhN3UkfwOeNit6YDfsraKPLAi7YtdMc6yIrPsZaA3EE2zI5iqthpiFKGpOPEomv0pfwYnvHjDdrYzKBjqkAWKo%2Bny8k%2Bsmg1H6ovrF76K%2FqAUeJWFGL%2FuzEgEjHLl4gesozBvq2YSeYlOYyCJ70IY427uMO3K4HDjKeOe15a0xUAPJ%2FsUSRVGwEz58ukVetTOzrjs93RoVaGuL9vi8QKDLr1oEQI64WC6TxkAZhsQFfZHKSwGgGqUua2rwJFnHFeRjqggk4MNoeZGVtKOiTO01UhTnsitbP4BO5MixJWWRSUul&X-Amz-Signature=18179df3ea6db6114eb5aaa5974c6fc793637533bf9e023d55822b19498c265b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

