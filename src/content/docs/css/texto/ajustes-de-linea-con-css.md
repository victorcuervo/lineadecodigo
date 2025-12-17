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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMJKJIK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqEXQrHEkBA5POrkv48B38DGvsjNO7pm5zCYYLKCZ4pwIhAMSl%2FSofuNEA5oQjyWoqEmyDfunTcLBDPOyz0NzQdHP0Kv8DCHIQABoMNjM3NDIzMTgzODA1Igz%2FuCAQZMzTq5bfRv0q3AMpdRF1jE0embvREcCBdXlYDHn86V5STJ%2Fhg%2BFGl4g8Bi4rNZ8w2fKwLS29pEN4a4p5Eugi2FxTAaHxIpIO6N4PIsl48OiW%2ByYJQMKvsBZVc5hdUZqkMsCD9MGcrqAeyKcfRV2VzH2vJp4qAFvaBsAqw8W8qCTiHA8bsO4c9kinDwP4iZXEEzfiRnvmR%2Be70MQbSCIgYEU5%2FVeeRel1tQFCOnjzClKSrN12fe6wyTdUSLQxR8D4c1NSn87d7QyolL3V43hJbffG1DHZdqzRyiV0ZCTXYYN6e9rNmwR9TFbGDH%2BxdeK7Gl89UA3AOM5r%2BD73sIhLcprdCr%2FnDgED6LPoVU15d244nmMOe4QOr%2FYd7L2JhV4hkKZCmwKQX0mbrYT%2FJGglQ827%2FO9tPlZ%2BwdPbn%2FZ7h2SYbjW66DBeOhCsgUWZ3YSGgByFsse6EDJByLOwK7FZuc4JlMKr5d7hr%2B0uPye03FZVdSEy%2FzYI6NwFyNYD3%2FELQzSTApjKoaCNZcYhcM2DHgtLnlVsid4Vu8cfEVCrx4viubNzusfSpwprTsrMqy7ZyrCrQfoRGyom3BiJ55RBFLOxN72xfoGsUztyXYZsoSPz6H8sW592rvnmGaYdW3lX2hiR3G5GFDCN%2B4fKBjqkAf6hSf1DWqIvVRGVAc8C8hYOVXYy%2FBI6ry2C%2Bhr7bpp7VRmuEU7EFfa7UoBM2%2BQZO8PaI3A42kbkrRR%2FGE3xdUxMmYCNLzuUswp2qzGziZ6Ghqx06TZfLyjS0cWd0LCIC24sAoOI7DzBSWxWU6j8hrH5lGIZ1%2F%2FbraYAPYAJ95cg8zbnQGJZv2DisNfg05917nB6UWfRmZWOFXNUr26AhdPR%2BA2f&X-Amz-Signature=c366adc7cf48ff5e902d4ac2f21cd6bf3caf2050076806c9cc0becee62883f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YMJKJIK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqEXQrHEkBA5POrkv48B38DGvsjNO7pm5zCYYLKCZ4pwIhAMSl%2FSofuNEA5oQjyWoqEmyDfunTcLBDPOyz0NzQdHP0Kv8DCHIQABoMNjM3NDIzMTgzODA1Igz%2FuCAQZMzTq5bfRv0q3AMpdRF1jE0embvREcCBdXlYDHn86V5STJ%2Fhg%2BFGl4g8Bi4rNZ8w2fKwLS29pEN4a4p5Eugi2FxTAaHxIpIO6N4PIsl48OiW%2ByYJQMKvsBZVc5hdUZqkMsCD9MGcrqAeyKcfRV2VzH2vJp4qAFvaBsAqw8W8qCTiHA8bsO4c9kinDwP4iZXEEzfiRnvmR%2Be70MQbSCIgYEU5%2FVeeRel1tQFCOnjzClKSrN12fe6wyTdUSLQxR8D4c1NSn87d7QyolL3V43hJbffG1DHZdqzRyiV0ZCTXYYN6e9rNmwR9TFbGDH%2BxdeK7Gl89UA3AOM5r%2BD73sIhLcprdCr%2FnDgED6LPoVU15d244nmMOe4QOr%2FYd7L2JhV4hkKZCmwKQX0mbrYT%2FJGglQ827%2FO9tPlZ%2BwdPbn%2FZ7h2SYbjW66DBeOhCsgUWZ3YSGgByFsse6EDJByLOwK7FZuc4JlMKr5d7hr%2B0uPye03FZVdSEy%2FzYI6NwFyNYD3%2FELQzSTApjKoaCNZcYhcM2DHgtLnlVsid4Vu8cfEVCrx4viubNzusfSpwprTsrMqy7ZyrCrQfoRGyom3BiJ55RBFLOxN72xfoGsUztyXYZsoSPz6H8sW592rvnmGaYdW3lX2hiR3G5GFDCN%2B4fKBjqkAf6hSf1DWqIvVRGVAc8C8hYOVXYy%2FBI6ry2C%2Bhr7bpp7VRmuEU7EFfa7UoBM2%2BQZO8PaI3A42kbkrRR%2FGE3xdUxMmYCNLzuUswp2qzGziZ6Ghqx06TZfLyjS0cWd0LCIC24sAoOI7DzBSWxWU6j8hrH5lGIZ1%2F%2FbraYAPYAJ95cg8zbnQGJZv2DisNfg05917nB6UWfRmZWOFXNUr26AhdPR%2BA2f&X-Amz-Signature=a0529b6648e9edcc2cbabe7d1f24d6796a9bd4c984e6ef65298bda5341c97f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

