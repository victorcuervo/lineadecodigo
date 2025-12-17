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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIFYJTGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqUzUWxCKumL%2FEgoZ5QTi8AdplMYGhsalsI7xzY55sQIgAZ5c308faKoPxRYLKh1SL7mRJMsx5vVV9mt9E62DbeQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIqRMp0SU9Myf2MbvyrcA8Fp1L%2BnLKQtGJVkx2vwSlLm8gkPnMPlqfFWMKvE6rxA6cAdfSN4tvQS25lsQNiG0Q2JKGGUu5UEMCozp1fJRk9tKllLxIgyv%2FoaziDfsd1BsAVLHnaCcMG%2FaQGAwLThBKCbBMMNPMIsedDWjsDt3RbaE%2BEEzf9h1AeRsXRELJL%2BUp5RLedvYZ0AVtMyas6RomGbgTjTtRUfU%2B3wzWqHMkxCKCA6NY41uo587yEktEm6PTifcDqUW78mlUABvlA2oWSCVkoOqHmYMBNDuq%2FqYmPpk0xRnaFdm623AuNO6JTQJINeoPYHAepDOxQsFRbMmOr%2F%2BqGocAnFlwf%2FW5e93LNT3%2Fqi5q6jYdSy9HZsiYHeo6IRj5WSxHpMXSUVvNni0TEa9IijhZZx3ZfIHOcvYNYuXF018tD15zDjimUj191pvwcYxhDh3jrcul1w1yTkWYnrKHQ8xwQLtOz4onamo8MkOGshREV7hAXH2GpVTzvFnreMRwCwH65PytXsHN5uidLQO1lJntVhC1AY0zTHSVx1wu9NNHdgFmX0OmCTrlt%2FqpneZJsfYWZ0rV24ggi1ViwowLGo9SC1%2B6VReEcQCSbu%2BHloyUI5qosaCIqAYAt1VJEzvgT%2FXurFmYQNMKa4icoGOqUBhuJj1BAsZnmARW%2FqCfzaceOimuFlV0%2F4wNlIe%2FN1S55FLlNk68tc505D0EvWkz2fH1qyLfXdOrO9NdJ4tQ6Jw%2BL62EyIG3X9lVq79xf%2BeRBiVGZ6ii0saWJZYCbMQStYbOzoYytN0EY5lMBXMf2%2FZ2PsqH8uR70BkU15PuLYk0jov1gWFWSAA9cBLKAa3Qe0Xy0L8xIWBszc5bqcoJ12XMzvbD2v&X-Amz-Signature=a7541763a9be175e5cbf0fad9f931b678e39f526fa0a9ad42772dfb466f6deb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIFYJTGX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqUzUWxCKumL%2FEgoZ5QTi8AdplMYGhsalsI7xzY55sQIgAZ5c308faKoPxRYLKh1SL7mRJMsx5vVV9mt9E62DbeQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIqRMp0SU9Myf2MbvyrcA8Fp1L%2BnLKQtGJVkx2vwSlLm8gkPnMPlqfFWMKvE6rxA6cAdfSN4tvQS25lsQNiG0Q2JKGGUu5UEMCozp1fJRk9tKllLxIgyv%2FoaziDfsd1BsAVLHnaCcMG%2FaQGAwLThBKCbBMMNPMIsedDWjsDt3RbaE%2BEEzf9h1AeRsXRELJL%2BUp5RLedvYZ0AVtMyas6RomGbgTjTtRUfU%2B3wzWqHMkxCKCA6NY41uo587yEktEm6PTifcDqUW78mlUABvlA2oWSCVkoOqHmYMBNDuq%2FqYmPpk0xRnaFdm623AuNO6JTQJINeoPYHAepDOxQsFRbMmOr%2F%2BqGocAnFlwf%2FW5e93LNT3%2Fqi5q6jYdSy9HZsiYHeo6IRj5WSxHpMXSUVvNni0TEa9IijhZZx3ZfIHOcvYNYuXF018tD15zDjimUj191pvwcYxhDh3jrcul1w1yTkWYnrKHQ8xwQLtOz4onamo8MkOGshREV7hAXH2GpVTzvFnreMRwCwH65PytXsHN5uidLQO1lJntVhC1AY0zTHSVx1wu9NNHdgFmX0OmCTrlt%2FqpneZJsfYWZ0rV24ggi1ViwowLGo9SC1%2B6VReEcQCSbu%2BHloyUI5qosaCIqAYAt1VJEzvgT%2FXurFmYQNMKa4icoGOqUBhuJj1BAsZnmARW%2FqCfzaceOimuFlV0%2F4wNlIe%2FN1S55FLlNk68tc505D0EvWkz2fH1qyLfXdOrO9NdJ4tQ6Jw%2BL62EyIG3X9lVq79xf%2BeRBiVGZ6ii0saWJZYCbMQStYbOzoYytN0EY5lMBXMf2%2FZ2PsqH8uR70BkU15PuLYk0jov1gWFWSAA9cBLKAa3Qe0Xy0L8xIWBszc5bqcoJ12XMzvbD2v&X-Amz-Signature=68ab576b32dba65fe910a40f41d0992f764b25ec5054c5bb5131bee3127490a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

