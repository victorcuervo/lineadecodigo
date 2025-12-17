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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQA3GVEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrAqd425VaNCipBUTEYG8xdECkPy2FlQq1LSAX%2FUo3RAiA%2FuQgTpN%2BJiN1AawqS22c93OtvPbYjD5fGGW0BcJ0RRSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt53l9BJWGxW31B3fKtwDwyMdSN4G9TpbjRzrymUT%2FfJhtNxaJhkVoLXKemN9VJzs7kYF0jNswyoPiwtrZsMnpQsSWR18rUAteXHf0p9CLnF5YtIpJIhK1oGwz1GY522i%2FVO73%2BNiklGd1f5kdrJNdRarSJEK526zNFU%2FBJldwhAlghHcdhUwWpUpQ17FJt91yKJpAlSL5QQQRTgmKKCJJn69cMqGqfkIwn6f6tCC4v4EhQsOtAuqZ2Ffn7mRXGPxHxX%2FkJW0PUPLUAxbOb4OY0jZMhzoYOQjlELxXL8UTk7ByyOqK1%2BwDuk%2FyeRJIe4GkmU2yy769nuJou5WZrPt%2BFdl94J%2B6kv9dxaKZ%2Fz8I5wrJDHgbwHjNBQQEyxX2ZRuQ0xK7jQCYBdqa8t2jdpT2IgJ8K6YMRGDPGUGQB9jeIHGoj0N9YT0cvtw7gnK82h2DQZpB8MShk%2F94tyH5hzxxL9PXa6lFTB3eCz1NKB62Griwx4i4OyNoeSxXxH3S0o2ymMD4QMsBVK2mvzf%2Bp6DPP8gkV3uBFuYYX9OnX4NdjFgCxBPE4X7F2KXOoeJC1vtL%2F95rgGVqA0P%2BgnDVWDrtN3%2FJPjZ8gRSrkwRcGpvnIwXwg2Ny%2Blov8XZgoAthIUXseTRlLmzNYQ%2BzR8wnI%2BKygY6pgHOqvqpnn6s67CEQYk%2Bq4ksuj26Mkdxk9OdEYRoeqensgyLAvcA%2BP66AfIFqDkWKr3Ra%2FEppygXf2MqtAoeDHlwc1aJADHNrjUfB8Pnoa%2BHFFGjAtkBS79nu0hcHT8eCMwjbR0oAGUfrBO4erFEYiHz7PHDhz3Q5coc%2BHv9n8V0e8DrXt8T0Xl6bx%2BDwt1Se6e0366eNrNAs1PbddLEclHsCUGzfAX0&X-Amz-Signature=4fe4ef6f0197df49a17f68a93820a8a666d23f674a08fac77505d060aede9327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQA3GVEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrAqd425VaNCipBUTEYG8xdECkPy2FlQq1LSAX%2FUo3RAiA%2FuQgTpN%2BJiN1AawqS22c93OtvPbYjD5fGGW0BcJ0RRSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMt53l9BJWGxW31B3fKtwDwyMdSN4G9TpbjRzrymUT%2FfJhtNxaJhkVoLXKemN9VJzs7kYF0jNswyoPiwtrZsMnpQsSWR18rUAteXHf0p9CLnF5YtIpJIhK1oGwz1GY522i%2FVO73%2BNiklGd1f5kdrJNdRarSJEK526zNFU%2FBJldwhAlghHcdhUwWpUpQ17FJt91yKJpAlSL5QQQRTgmKKCJJn69cMqGqfkIwn6f6tCC4v4EhQsOtAuqZ2Ffn7mRXGPxHxX%2FkJW0PUPLUAxbOb4OY0jZMhzoYOQjlELxXL8UTk7ByyOqK1%2BwDuk%2FyeRJIe4GkmU2yy769nuJou5WZrPt%2BFdl94J%2B6kv9dxaKZ%2Fz8I5wrJDHgbwHjNBQQEyxX2ZRuQ0xK7jQCYBdqa8t2jdpT2IgJ8K6YMRGDPGUGQB9jeIHGoj0N9YT0cvtw7gnK82h2DQZpB8MShk%2F94tyH5hzxxL9PXa6lFTB3eCz1NKB62Griwx4i4OyNoeSxXxH3S0o2ymMD4QMsBVK2mvzf%2Bp6DPP8gkV3uBFuYYX9OnX4NdjFgCxBPE4X7F2KXOoeJC1vtL%2F95rgGVqA0P%2BgnDVWDrtN3%2FJPjZ8gRSrkwRcGpvnIwXwg2Ny%2Blov8XZgoAthIUXseTRlLmzNYQ%2BzR8wnI%2BKygY6pgHOqvqpnn6s67CEQYk%2Bq4ksuj26Mkdxk9OdEYRoeqensgyLAvcA%2BP66AfIFqDkWKr3Ra%2FEppygXf2MqtAoeDHlwc1aJADHNrjUfB8Pnoa%2BHFFGjAtkBS79nu0hcHT8eCMwjbR0oAGUfrBO4erFEYiHz7PHDhz3Q5coc%2BHv9n8V0e8DrXt8T0Xl6bx%2BDwt1Se6e0366eNrNAs1PbddLEclHsCUGzfAX0&X-Amz-Signature=e68c8db58b9ddfeb78c03ef7a05380bc7652aa6f3365576e3091c2d6be37a730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

