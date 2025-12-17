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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSNW4JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9Z9SAyWD1CB7I4XFgdnu2JvWilmyaSubzeUiSusi8wIhAIgt3dqgbxq3iP65HPLy6fIEWeI9X1JOdjRLS2B58%2FTVKv8DCHgQABoMNjM3NDIzMTgzODA1IgxpGypnsZsWETSO60cq3APvh9clZIrsgJaPXsSvE%2F95JeahvSU5fdExfWYd0z2iYAd9GkzSp4%2B0JlJUfGtxuuvLUc7q5ZXoGEZF4Jes26pxfSi0WGKDPttC02ARG4VoPck1eCa%2BPCDYXYDL0lxCbVA%2BSEtRjuR67nzR1ZQGpJASSoza6PXg4JLEtNA70AhoCEz2YRvzFC%2FerUabMIvEVZbsTmqJajog%2FZ1tVRdLvKzDDilPZQ7XACB2fpGETKfEDX4%2FMEOAwj7OAQgtk3RO%2FEe7VsB9vtHddm40M1WIuLXGE4GUv1p6QUsUbcGMwbixmRLmDlwrXrWJFAjqR1bg1azL%2B5DL6QxZe2HTzyol8zfR59FV1NBJoGrLhV03RGSEPHQ7r2Umbk%2FmSlgM1bCqxVleaIG2RJSrOiYGtc09Pm36vdThVGj5uklTTW%2BQNttbZwUc5IitKJtv%2F7fwN73B6Ui2MlzpnEfzEiXc%2F%2F3%2Bo0aoZvJvR5K0%2FE9apbMjM7V3IA6rfTz3%2FnKS1K0l5%2Bt1Rz%2FaxAiTN%2Fg9RChZENrLYqTLzmp7nZ8cCUEq%2BvWFZTv0rzY1ULeNDNAWxAGl3u4yostVw1Rigb1wAynN3b3eq5bECHHZWK3JC%2BS0SnYyOqUACsZucjxl0zm%2BJzGWRzDJnYnKBjqkAYLoP5bsvKmKgZ2Kj4ut1BQDNGC7sjfoKm5fvOW7VPsBMlwxt%2BjlZPdSSASzQ0z865fVwEMiI%2FrglpqIQyoYTClTY2rOk5xD%2FkZzP%2FPnQ2p8CfRNavr%2BdgfkqpV3BGUmWPIm1a%2FZpnHoq59AbLMIvFGsdBECCYN927gJ52oQVpkw8Wmuz3OmyPZdphBciS0DX64d5MTAkF5z88Q%2B5pElKXIgoKVU&X-Amz-Signature=b353031cffd68abd3134f0ce843a1d74e2f1b8d6d52a1874c35004512b480953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSNW4JK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9Z9SAyWD1CB7I4XFgdnu2JvWilmyaSubzeUiSusi8wIhAIgt3dqgbxq3iP65HPLy6fIEWeI9X1JOdjRLS2B58%2FTVKv8DCHgQABoMNjM3NDIzMTgzODA1IgxpGypnsZsWETSO60cq3APvh9clZIrsgJaPXsSvE%2F95JeahvSU5fdExfWYd0z2iYAd9GkzSp4%2B0JlJUfGtxuuvLUc7q5ZXoGEZF4Jes26pxfSi0WGKDPttC02ARG4VoPck1eCa%2BPCDYXYDL0lxCbVA%2BSEtRjuR67nzR1ZQGpJASSoza6PXg4JLEtNA70AhoCEz2YRvzFC%2FerUabMIvEVZbsTmqJajog%2FZ1tVRdLvKzDDilPZQ7XACB2fpGETKfEDX4%2FMEOAwj7OAQgtk3RO%2FEe7VsB9vtHddm40M1WIuLXGE4GUv1p6QUsUbcGMwbixmRLmDlwrXrWJFAjqR1bg1azL%2B5DL6QxZe2HTzyol8zfR59FV1NBJoGrLhV03RGSEPHQ7r2Umbk%2FmSlgM1bCqxVleaIG2RJSrOiYGtc09Pm36vdThVGj5uklTTW%2BQNttbZwUc5IitKJtv%2F7fwN73B6Ui2MlzpnEfzEiXc%2F%2F3%2Bo0aoZvJvR5K0%2FE9apbMjM7V3IA6rfTz3%2FnKS1K0l5%2Bt1Rz%2FaxAiTN%2Fg9RChZENrLYqTLzmp7nZ8cCUEq%2BvWFZTv0rzY1ULeNDNAWxAGl3u4yostVw1Rigb1wAynN3b3eq5bECHHZWK3JC%2BS0SnYyOqUACsZucjxl0zm%2BJzGWRzDJnYnKBjqkAYLoP5bsvKmKgZ2Kj4ut1BQDNGC7sjfoKm5fvOW7VPsBMlwxt%2BjlZPdSSASzQ0z865fVwEMiI%2FrglpqIQyoYTClTY2rOk5xD%2FkZzP%2FPnQ2p8CfRNavr%2BdgfkqpV3BGUmWPIm1a%2FZpnHoq59AbLMIvFGsdBECCYN927gJ52oQVpkw8Wmuz3OmyPZdphBciS0DX64d5MTAkF5z88Q%2B5pElKXIgoKVU&X-Amz-Signature=138842a23945cd628459b90950017d12acd5b9d3341f27bdcb6ac07e77021b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

