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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXSX3WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84KkTlMlm1nWB2EtPOTL1cOC53bE9JiXntt%2BrKAXtiwIgKN2U6iX0HrQUZ0f4Opphkk9tj2mYO2H7%2BG3UwGnyDJkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBlPTdslUNBPDgenCrcA0yncjb6Oqptlubw74rusSfD17PXyfiOLOPJsZUOQig6enuFuka9PDoKNTI4FbL6Cis%2F3ObfbNw7kbKJYgwr4%2BKHvcerAAcdvqDbFqbqE7X1rXT8Mc3xVtjOO1watHwPfyUTq7Z4Sn1bUr4Tm%2BHQql9VpBoJsNB1hzu%2Fjs6o%2FJqg5hr0VnYCSz%2BZXx%2FVroelpX6ZdOIea9CaPwaJUEt%2ByRAQMTiKdyG1C4T%2F6iB4SwyQxZ%2BsVIVVZa7Y8rxq08ssRMQwIkmMZLJNIHLT6cmOtrwCAS7Ofrf%2BmhRb38R4idipHDjWs2j50FCmqztqKoxaB3JYI13xSWnUVaJNuywejFrjoarzjyoamzCQLP7J57TfnkXiwCMGVtqquvfpjoDOd%2F1ouiLhM4fyg%2FkMhQowNhhrYezXImTp4ERQL95u6FW603GHN7Af41bBlksu6s%2B7ByclU%2Fua9B5goCGcaZbsuGGYD7RoHXVr9Avzz4h%2BPes7e0JD3vAE4CuAoV9KQbR4nsPdQo0SgK4nf3mkLqNU%2FeImY61R7VW%2B%2FjOk0h265DA1kQRtNEy1P%2Bl2NpleHQNM15A4HPKdp0saiYRHPfxY%2BNcjBhpIlVZSJ2nVo8vzr54kD0q8kzESertjnfn%2FMLmfi8oGOqUBXRFHs1S3ZwiXZjtDPmvIXomQrkZBQ0bidlY3Q6FLzFgmSw5YARDIKpolO3J8IdsCNf7xxJUHc21OvE6xQ7pNMdbCEoCzvVGo9Os0jqq8FlNfbw3huc%2BobGhTYrZEUfn4UHIHVt0nQzzjNxjlvLzTubOlFMa46DlmYcILsr2IJ1g8ZVQQgmkqArS0UwUPC5OhdZ6Pt3Uy9rnmatbR7dcYmmc02byy&X-Amz-Signature=2aae1d97cbf4112d7de618ce8f6f9c3198129a2743506024038da3f381b7bdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXSX3WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC84KkTlMlm1nWB2EtPOTL1cOC53bE9JiXntt%2BrKAXtiwIgKN2U6iX0HrQUZ0f4Opphkk9tj2mYO2H7%2BG3UwGnyDJkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBlPTdslUNBPDgenCrcA0yncjb6Oqptlubw74rusSfD17PXyfiOLOPJsZUOQig6enuFuka9PDoKNTI4FbL6Cis%2F3ObfbNw7kbKJYgwr4%2BKHvcerAAcdvqDbFqbqE7X1rXT8Mc3xVtjOO1watHwPfyUTq7Z4Sn1bUr4Tm%2BHQql9VpBoJsNB1hzu%2Fjs6o%2FJqg5hr0VnYCSz%2BZXx%2FVroelpX6ZdOIea9CaPwaJUEt%2ByRAQMTiKdyG1C4T%2F6iB4SwyQxZ%2BsVIVVZa7Y8rxq08ssRMQwIkmMZLJNIHLT6cmOtrwCAS7Ofrf%2BmhRb38R4idipHDjWs2j50FCmqztqKoxaB3JYI13xSWnUVaJNuywejFrjoarzjyoamzCQLP7J57TfnkXiwCMGVtqquvfpjoDOd%2F1ouiLhM4fyg%2FkMhQowNhhrYezXImTp4ERQL95u6FW603GHN7Af41bBlksu6s%2B7ByclU%2Fua9B5goCGcaZbsuGGYD7RoHXVr9Avzz4h%2BPes7e0JD3vAE4CuAoV9KQbR4nsPdQo0SgK4nf3mkLqNU%2FeImY61R7VW%2B%2FjOk0h265DA1kQRtNEy1P%2Bl2NpleHQNM15A4HPKdp0saiYRHPfxY%2BNcjBhpIlVZSJ2nVo8vzr54kD0q8kzESertjnfn%2FMLmfi8oGOqUBXRFHs1S3ZwiXZjtDPmvIXomQrkZBQ0bidlY3Q6FLzFgmSw5YARDIKpolO3J8IdsCNf7xxJUHc21OvE6xQ7pNMdbCEoCzvVGo9Os0jqq8FlNfbw3huc%2BobGhTYrZEUfn4UHIHVt0nQzzjNxjlvLzTubOlFMa46DlmYcILsr2IJ1g8ZVQQgmkqArS0UwUPC5OhdZ6Pt3Uy9rnmatbR7dcYmmc02byy&X-Amz-Signature=62f9f0b7bf2dc584291a054ffafe7311cd97275bfe9c44a4abef1df9632b49c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

