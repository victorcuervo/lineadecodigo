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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZXBJOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6I49QDN90g5Vj8LTJ5se65DRWKNoT02aNHXzQzSnAxgIhAP8%2FtiBT2pTpqkESWOjbsEB3wYChUrShqqb5FVI0U7VdKv8DCH0QABoMNjM3NDIzMTgzODA1Igw%2BVKg6T7zjjyRLhKgq3AOXwC13pCuYZU22M7KApqaNCBzkWxwzkCaTTsWUVCqaFCY8xxQGmQzd41hUFc71U1n6EnsevP2T73zCdj0TUA73CBaPd%2BKhIeGkOxGnWdTlg9hnDbdNSPuyn2nnlbmBMSDwWDh6eVabkrypVEPvwPMQxWv5KjQqCYTBFVuKlwkr39jWsUxHO1ErDVjoIRwGmfmc%2FdVGumWFBWSA%2FRbZHzUhlAy9F96oYPOLGkH%2BXDaIb1mMV0Me322xZSrbOcQF8qRpNRplwer66lA2EQOr0ApZ%2FX7FRpnhCkQNvjDhEtvIUd8g7jwknxLUUEJ9JvifMvt0LIQOoQOa%2F2QZKUQpXZTTr91TD2SbPjzbcYGC1ajBh4Ijcj3JXr65p41w%2BNY6bEu4yuRJ0M5N1KzhkUq4nu%2FCjwBwH%2FfWLR5z1ncoS390lDiXz3hGy5%2FBgCzlf27LUn6Njqh4juB9VOIenV4WQVDCacvDBP1lMgBy2XKXTlBISl2soNHVoppmJXWP23jjBsJUfrUmljKER7uUmXeUWTytxPwJBrW96yq1afFt2wImOEnADOxpV4O0Y5e26u41giiOfdzDq5vmR8YTXPEbjrCVwS8s26gzq%2FIHz0BMIWGwqthpxvCSz9QWmlSn6DCdqorKBjqkAQNMmcugTSi3cR78PIMpDbH2hnAhGk89B%2F1EGOISvJX1Fvhak%2BZz%2FZBc5wvJK9Y2oSB%2FFHk6uJlaE7TBfTLIvnqT%2B%2F2XLQJ3JDcP9IPN1uIHvWWF%2FujvK%2FlntBvuOIJ4p4F9XNMIFjFg1xvDcktceQM401NDufANTsi2a6Juxhs0jdNtbUIB46g%2F5MAy0JSgdg5RHiEMXp5Czlzjz0Xeld4Kjd3X&X-Amz-Signature=f3c49d739d6932d69f54b981f1ff364690b12d2371a2b9a9917ef0f5da4536e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZXBJOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6I49QDN90g5Vj8LTJ5se65DRWKNoT02aNHXzQzSnAxgIhAP8%2FtiBT2pTpqkESWOjbsEB3wYChUrShqqb5FVI0U7VdKv8DCH0QABoMNjM3NDIzMTgzODA1Igw%2BVKg6T7zjjyRLhKgq3AOXwC13pCuYZU22M7KApqaNCBzkWxwzkCaTTsWUVCqaFCY8xxQGmQzd41hUFc71U1n6EnsevP2T73zCdj0TUA73CBaPd%2BKhIeGkOxGnWdTlg9hnDbdNSPuyn2nnlbmBMSDwWDh6eVabkrypVEPvwPMQxWv5KjQqCYTBFVuKlwkr39jWsUxHO1ErDVjoIRwGmfmc%2FdVGumWFBWSA%2FRbZHzUhlAy9F96oYPOLGkH%2BXDaIb1mMV0Me322xZSrbOcQF8qRpNRplwer66lA2EQOr0ApZ%2FX7FRpnhCkQNvjDhEtvIUd8g7jwknxLUUEJ9JvifMvt0LIQOoQOa%2F2QZKUQpXZTTr91TD2SbPjzbcYGC1ajBh4Ijcj3JXr65p41w%2BNY6bEu4yuRJ0M5N1KzhkUq4nu%2FCjwBwH%2FfWLR5z1ncoS390lDiXz3hGy5%2FBgCzlf27LUn6Njqh4juB9VOIenV4WQVDCacvDBP1lMgBy2XKXTlBISl2soNHVoppmJXWP23jjBsJUfrUmljKER7uUmXeUWTytxPwJBrW96yq1afFt2wImOEnADOxpV4O0Y5e26u41giiOfdzDq5vmR8YTXPEbjrCVwS8s26gzq%2FIHz0BMIWGwqthpxvCSz9QWmlSn6DCdqorKBjqkAQNMmcugTSi3cR78PIMpDbH2hnAhGk89B%2F1EGOISvJX1Fvhak%2BZz%2FZBc5wvJK9Y2oSB%2FFHk6uJlaE7TBfTLIvnqT%2B%2F2XLQJ3JDcP9IPN1uIHvWWF%2FujvK%2FlntBvuOIJ4p4F9XNMIFjFg1xvDcktceQM401NDufANTsi2a6Juxhs0jdNtbUIB46g%2F5MAy0JSgdg5RHiEMXp5Czlzjz0Xeld4Kjd3X&X-Amz-Signature=5f2de45b8835f33158562040a84ff15d4d7e9b1ea1bd3a83a84daa85da8511c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

