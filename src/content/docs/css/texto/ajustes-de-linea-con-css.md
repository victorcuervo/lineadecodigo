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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJZTAHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FGm9tCKvlTF8irK%2BZ1MFMtwSMuRRaeM5m1eL8KF16PAiBc3xQM8DRKE1l8ZUOQtlqAcCqidUJLE%2F97BGlN3fWySyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMRc4Ehjg5I5%2FmcfnKtwDVQtzDrf6WQar7wHh6Y2WFpNFeTPoPYXviszjakKslnX87WZa5x3TNjOvI6VbO3a0m%2BjwLCV%2BM7%2BaVQ5QGOlvDaQ3jJWuh9skqOTpJN2GiRVhCH%2BfRWIJHJSLKpxuvDVQ0fmPhFCL5TXNHoIqR2IL3u1SBVjifXViRErcnEFsilYKg%2BbzKaOGjupaR9bR5her2Wxa%2F01wrHAsDq0dzBN0sElgwBfKKMhVUVS9inl1P0u10I4luMBb%2FdDWf9IzplxfBjEgOaGQ082fjoxIWB3ClYDSVluKKeM101ZsMFuu0amVwCA%2BDu31erZ7CKrTZHjKch16%2ByBpldaItzbKk8miBHETOcYjwiwlIFXz1DYMWM3iy0f%2FLBPNE9yupGphZbHM3bqydWnQs1dXj67fpdNyNEDNNFeDiv9bNv4x9ey28FzQ8Rv44l%2B1PHL4ZfnURqJUPsKuHcsjds%2F6Dgv%2BANrky4PVORB2VKrK8cNudLq6lSTQtuoUjo8qQVdpHwW%2F9FCM4%2FQ1VjBrVs%2FfMwAkz%2BRb%2B8cIxzqscWuQtenY1atpxgr0U%2FxYrBN8nhByR%2FhrHPMIaaceN8GcccdBNw1GyX3N8J6VoMvt3vTIPYr8ZtBoCN67j9vLnSDFlcWBv2wwu7KIygY6pgHJ2u%2BvPxo2lh83zOrlsAmCcb5DmxcOeHlxCzSLLA7D3qXk1rxvtSXVjP8Ne%2FRSw7cU%2FZPgG3LqrALAfpb2AMWZv1gRgeVo%2FbaBcc2GGrpPlc5hv6qty3g%2BG0XoBjVm0w7ldYu8vd7asYmoGq%2BsiMRTKyxF3Fwj185x%2Fprmi5tGnHRzvBbM3uNfaybU0K6qm%2B1azcrBXwn7CQHizR%2BU%2F7XZoQsezeni&X-Amz-Signature=75c55c17f379000431aa9a7a96e392c4a45700bc8e0402cd484c1789ed378933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJZTAHW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FGm9tCKvlTF8irK%2BZ1MFMtwSMuRRaeM5m1eL8KF16PAiBc3xQM8DRKE1l8ZUOQtlqAcCqidUJLE%2F97BGlN3fWySyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMMRc4Ehjg5I5%2FmcfnKtwDVQtzDrf6WQar7wHh6Y2WFpNFeTPoPYXviszjakKslnX87WZa5x3TNjOvI6VbO3a0m%2BjwLCV%2BM7%2BaVQ5QGOlvDaQ3jJWuh9skqOTpJN2GiRVhCH%2BfRWIJHJSLKpxuvDVQ0fmPhFCL5TXNHoIqR2IL3u1SBVjifXViRErcnEFsilYKg%2BbzKaOGjupaR9bR5her2Wxa%2F01wrHAsDq0dzBN0sElgwBfKKMhVUVS9inl1P0u10I4luMBb%2FdDWf9IzplxfBjEgOaGQ082fjoxIWB3ClYDSVluKKeM101ZsMFuu0amVwCA%2BDu31erZ7CKrTZHjKch16%2ByBpldaItzbKk8miBHETOcYjwiwlIFXz1DYMWM3iy0f%2FLBPNE9yupGphZbHM3bqydWnQs1dXj67fpdNyNEDNNFeDiv9bNv4x9ey28FzQ8Rv44l%2B1PHL4ZfnURqJUPsKuHcsjds%2F6Dgv%2BANrky4PVORB2VKrK8cNudLq6lSTQtuoUjo8qQVdpHwW%2F9FCM4%2FQ1VjBrVs%2FfMwAkz%2BRb%2B8cIxzqscWuQtenY1atpxgr0U%2FxYrBN8nhByR%2FhrHPMIaaceN8GcccdBNw1GyX3N8J6VoMvt3vTIPYr8ZtBoCN67j9vLnSDFlcWBv2wwu7KIygY6pgHJ2u%2BvPxo2lh83zOrlsAmCcb5DmxcOeHlxCzSLLA7D3qXk1rxvtSXVjP8Ne%2FRSw7cU%2FZPgG3LqrALAfpb2AMWZv1gRgeVo%2FbaBcc2GGrpPlc5hv6qty3g%2BG0XoBjVm0w7ldYu8vd7asYmoGq%2BsiMRTKyxF3Fwj185x%2Fprmi5tGnHRzvBbM3uNfaybU0K6qm%2B1azcrBXwn7CQHizR%2BU%2F7XZoQsezeni&X-Amz-Signature=f0bc0ae2978041b95fc43e7e27683b2c4c68cd44ec7a83f87fddbca32f09e777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

