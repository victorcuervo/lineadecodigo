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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKZC6Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQGOWIjQUXGVbBLOLyOrwRVMn%2Bo6TGDiR3Vjt80cOPAIhAPloqgvk42VJT2NyvcDnJ0GLgxNsfYknJdM%2FMIxQg%2Bi%2FKv8DCHwQABoMNjM3NDIzMTgzODA1IgxkUVC5EMC9%2ByquHvgq3AM2WQoGsQqi6iGrqZIvPOdmGfeF3qFjWcsz8XNCWw8OYWdM09rg%2Bi7h10zwhDJvZjB%2BMqdCkp7gnFRpQkd3p1regs6SwGeOUcxd6w2ecI816mWFn%2FDVo7b4iy1Du2EFq0dZPWsRjOY4pP%2Bk6CtEmeeCFHUBwtEpL48zuREbxaDKMVfhhD11TjbyHRq4VK2bHufUXLCxrcnXzmJnTNiq%2B7dapHvtIw5CrtPtUrcp7NuNUDoDwuGbHcOYMxDpwoRI2k2rCzHwhgdl4O3OyPu4oLFmy1XHnTHbmUXpdm4T6fVwrtDCb4IkKR7VkdOqNV15y29sAOYcddw9XMZqlS3z2OMrMEEIWOy7AoRLjRwkQ7POQx4j%2FroNIGWeHBiQgMS3kNpvtTpRwMH61M%2FY3YjXLY6KuxWs9%2B8WOBbKjIbTTmlqByK7y6zGSn4T9WszMT0VwusTqdtwNsOvHPEUBD91fDPjWc4VafII2Ltdh6vMJkxO2%2BsvUNIavFYpi349IY14DF3o4AxKJjSeIP%2B8kxmOqS8zADKdvigz1Sg%2FLmNdXOoTGaMHomaAW%2BI8Em%2FFbRAU7B78n1MM5ZpRz45JV0mil47S%2FHRvqgYNBlAcqM2HDDzw1Xl17VLfhaAmpoJliDD0jorKBjqkASt0W9tghiNYoDKia6HLxsw9DB61fbsq2poEO4hh7QksuBx548iSonQJctkROOw%2F2jIGmeWSkppS3Zj87IITpAJ7Tta8ueCw1nwduM3IsdPyBkzQk1iqhD1c3T5iHQLfn%2Ff%2BOtNYE07x57AEyT9NKlTmv%2FXJ1xUkKVyjO948MKsarJm0yB6hnExnBBwCMhZUM7RNxCdRpsMfDaqNc%2FAYN%2FfEn9P9&X-Amz-Signature=15c8ebaa3e3f80c240958e2ca9e1936af30979d8a341168e17ae206136c012a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKZC6Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQGOWIjQUXGVbBLOLyOrwRVMn%2Bo6TGDiR3Vjt80cOPAIhAPloqgvk42VJT2NyvcDnJ0GLgxNsfYknJdM%2FMIxQg%2Bi%2FKv8DCHwQABoMNjM3NDIzMTgzODA1IgxkUVC5EMC9%2ByquHvgq3AM2WQoGsQqi6iGrqZIvPOdmGfeF3qFjWcsz8XNCWw8OYWdM09rg%2Bi7h10zwhDJvZjB%2BMqdCkp7gnFRpQkd3p1regs6SwGeOUcxd6w2ecI816mWFn%2FDVo7b4iy1Du2EFq0dZPWsRjOY4pP%2Bk6CtEmeeCFHUBwtEpL48zuREbxaDKMVfhhD11TjbyHRq4VK2bHufUXLCxrcnXzmJnTNiq%2B7dapHvtIw5CrtPtUrcp7NuNUDoDwuGbHcOYMxDpwoRI2k2rCzHwhgdl4O3OyPu4oLFmy1XHnTHbmUXpdm4T6fVwrtDCb4IkKR7VkdOqNV15y29sAOYcddw9XMZqlS3z2OMrMEEIWOy7AoRLjRwkQ7POQx4j%2FroNIGWeHBiQgMS3kNpvtTpRwMH61M%2FY3YjXLY6KuxWs9%2B8WOBbKjIbTTmlqByK7y6zGSn4T9WszMT0VwusTqdtwNsOvHPEUBD91fDPjWc4VafII2Ltdh6vMJkxO2%2BsvUNIavFYpi349IY14DF3o4AxKJjSeIP%2B8kxmOqS8zADKdvigz1Sg%2FLmNdXOoTGaMHomaAW%2BI8Em%2FFbRAU7B78n1MM5ZpRz45JV0mil47S%2FHRvqgYNBlAcqM2HDDzw1Xl17VLfhaAmpoJliDD0jorKBjqkASt0W9tghiNYoDKia6HLxsw9DB61fbsq2poEO4hh7QksuBx548iSonQJctkROOw%2F2jIGmeWSkppS3Zj87IITpAJ7Tta8ueCw1nwduM3IsdPyBkzQk1iqhD1c3T5iHQLfn%2Ff%2BOtNYE07x57AEyT9NKlTmv%2FXJ1xUkKVyjO948MKsarJm0yB6hnExnBBwCMhZUM7RNxCdRpsMfDaqNc%2FAYN%2FfEn9P9&X-Amz-Signature=004e16534144fa302c3c4e9fd10b0c9b61141e835912bd77042311eba767b3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

