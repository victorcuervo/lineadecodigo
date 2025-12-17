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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643U7B7NI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzcBP0jxBSvx0sKSA0dtb%2FfjSoK7lfglSaSrc%2BJjjxwIga6DsxOl7rS7c3RpB13stuzZIstVNYG2%2FW7Ewv7wAaR8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLR%2BgSeO6DT67zRlCSrcA%2FTpfMvo5auEe%2BtFUJ5ij0snwZAQdYIVeya5qVEmmEZZwyLkJjLvbPIualUWZ4h%2BjEtWZT9BXGO7gqef%2Fi%2BOl9ib3dZfAisqwVnojZMtb0Ar%2Bb6wNlHr84oJrTjupaRH%2FUQxmSlm40dzpP2DgQb7PMI%2FCCL6RIoA2MLKvOUnyt0%2FRUnisWFnsnJSoZJHH1IxdrvtarI3y3PyOb8ZYCtZRj9xTnqrpRipyU%2FHcD0Hwyz%2Bthb5XPZQY737IHzjUyhstmk6WPx%2FXxRVcu9nZf8DkmwMF6LBRYkYmnSeHIFlGx%2F7aS2V8%2BqkuhsUEGeNpgD9pNNP6AMH%2FrwZwpEe3eMxd4oDLsVY7Dwn1%2BlhV3SgvA26uGE7nIwKwrKtAyxz6rBe9k1qo2H4pwnsZIAOOIr%2BW6f4zXwX4zvo%2FVfD3oEoQ2h%2FlC457WS9DGvJXRBRi4R0EmZ96aEqFtVFGUOhTiVgeV1O04EGG4Kz4lSCUT%2Fco2TFN8OXY%2B%2B6gGTU%2B1pg0%2FjL4rK8%2Bcl%2FueKV0jJpKbkfjRpHr7KK0h7aoMgKA2bLULCvZJiRVWL7C5kf28g9htxY4n1BkProk%2Fdka9%2Feht9A8ter9Jz3IxuG5LTWx685aU6yWd3Tu0iu5Yb6RGODMJiYiMoGOqUBvZg9Y6fVXy4f4wV0FInSDWe77LyR6Vjjqgg2ntWbBlk4h3WPTWMZIqjCqT94NQjPZjvSeMkUqoSEa%2FyriNtyBGXMHvKB8lQSuQpXBGXehu7tQfA%2FbZpwxeS6Ss%2FnuiMYznWvBuRsfFQgz1GwVrbaCRJX3%2B6B7T9HBkTOHMoZVYPfFqXhcpqrM4IwzkG%2FABf72iTxXlrMLE4nSyoVthfd%2Fs2GUdzn&X-Amz-Signature=6e668291edd78957ded858011582fca6c80cc9162babd91652ee56139da7535d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643U7B7NI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNzcBP0jxBSvx0sKSA0dtb%2FfjSoK7lfglSaSrc%2BJjjxwIga6DsxOl7rS7c3RpB13stuzZIstVNYG2%2FW7Ewv7wAaR8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLR%2BgSeO6DT67zRlCSrcA%2FTpfMvo5auEe%2BtFUJ5ij0snwZAQdYIVeya5qVEmmEZZwyLkJjLvbPIualUWZ4h%2BjEtWZT9BXGO7gqef%2Fi%2BOl9ib3dZfAisqwVnojZMtb0Ar%2Bb6wNlHr84oJrTjupaRH%2FUQxmSlm40dzpP2DgQb7PMI%2FCCL6RIoA2MLKvOUnyt0%2FRUnisWFnsnJSoZJHH1IxdrvtarI3y3PyOb8ZYCtZRj9xTnqrpRipyU%2FHcD0Hwyz%2Bthb5XPZQY737IHzjUyhstmk6WPx%2FXxRVcu9nZf8DkmwMF6LBRYkYmnSeHIFlGx%2F7aS2V8%2BqkuhsUEGeNpgD9pNNP6AMH%2FrwZwpEe3eMxd4oDLsVY7Dwn1%2BlhV3SgvA26uGE7nIwKwrKtAyxz6rBe9k1qo2H4pwnsZIAOOIr%2BW6f4zXwX4zvo%2FVfD3oEoQ2h%2FlC457WS9DGvJXRBRi4R0EmZ96aEqFtVFGUOhTiVgeV1O04EGG4Kz4lSCUT%2Fco2TFN8OXY%2B%2B6gGTU%2B1pg0%2FjL4rK8%2Bcl%2FueKV0jJpKbkfjRpHr7KK0h7aoMgKA2bLULCvZJiRVWL7C5kf28g9htxY4n1BkProk%2Fdka9%2Feht9A8ter9Jz3IxuG5LTWx685aU6yWd3Tu0iu5Yb6RGODMJiYiMoGOqUBvZg9Y6fVXy4f4wV0FInSDWe77LyR6Vjjqgg2ntWbBlk4h3WPTWMZIqjCqT94NQjPZjvSeMkUqoSEa%2FyriNtyBGXMHvKB8lQSuQpXBGXehu7tQfA%2FbZpwxeS6Ss%2FnuiMYznWvBuRsfFQgz1GwVrbaCRJX3%2B6B7T9HBkTOHMoZVYPfFqXhcpqrM4IwzkG%2FABf72iTxXlrMLE4nSyoVthfd%2Fs2GUdzn&X-Amz-Signature=8e55910cf5da1c44b014e724203dbbe62082a428f555a376244c00735716d109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

