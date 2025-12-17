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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFCX53O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo9tcpGS8eAM%2FjOJlqYpRA8qzDnIsgxfzquh3LXMANrAiA%2FxiMFlnRCuANc%2B7E9ukuANHTuchNyNF7cjDaltmg8CiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HyRDLAJxSiAeqAKtwDJ68cQxwSlXSgOAESOQpD3CwWfK3Y%2FVQKmFZnkSovaE8jTEYfdGv1QeD4uMMIkK1KhYbF4lmw3QYxqgW87NGyZQkvXshJSX5W637Yo5boow0MJlesmf4j0Op7OZPnuUU3nIbocFF5BUGdJJdqxEzFUA1CaQ1Sj3gLqVuKt32%2FSuaaZ1JFrkHNp0Crf6Te305lk1GYZ3rExTW8MByUQI43vy808z16k7FbJIGfCVTacp6UGwWK%2FqdqWRgjH5aQ7kesqhH06LpT1s4Kh7jzhAaEJd4%2FLHxbAckZG9%2FVqCXByIrOtKjXKpXUCzFlnCbRYi6wU%2BYR1FY0eFET931Yge6MhZgI8zsq8BerUtqWHwwMkIbVIvXM81hisb1WL%2BzoZmW0zXWNahmeu8UhzW57EYH37Y35IUZcB59vm64zU%2BpnuWdBY0eEkSmP5U6%2FWcJjgeObPifpfqnRo11ECJF8C5L3fBrmFe9PwB9LNyhH13g7f7wfWpXKM6A%2Fxdmqx%2F%2FOJCEjYUr%2FW6nVh1iyGx0vxlhh3xAjXU0r5QHJDEg6sD6pNIqxV2nq%2BRYi0ir%2BtY%2BMEI6pZckJooQHw9A45E2SxtRyvFshpkUDoCUviPgwYdtjsH8iN9T8Xkj8ScIdtnUw8v%2BKygY6pgECHaynKU5FHI3ktQeceCTsJfmNHlUX09QGbPSbvPs6uzjyO1mHWX5lwjD5dy4NMibRc0U3hxQNuNREQfub6yf8LAxLi2d0Erve2aSS2IX8GQy9RmuPR00iLOhuPXlHj7M90MK6NSsyiElHALRc3bqIf49zdx79ZdeQcNfG%2FOITKb%2Bv1RbxoTgweztvabZwSAFgTj9s3bOTe4AR4dm2blAycyYvfcqu&X-Amz-Signature=9a4a037c17c48d59581306e507e27f0de00ffb93cf9400ab758c4c3b3f8afd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFCX53O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo9tcpGS8eAM%2FjOJlqYpRA8qzDnIsgxfzquh3LXMANrAiA%2FxiMFlnRCuANc%2B7E9ukuANHTuchNyNF7cjDaltmg8CiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr8HyRDLAJxSiAeqAKtwDJ68cQxwSlXSgOAESOQpD3CwWfK3Y%2FVQKmFZnkSovaE8jTEYfdGv1QeD4uMMIkK1KhYbF4lmw3QYxqgW87NGyZQkvXshJSX5W637Yo5boow0MJlesmf4j0Op7OZPnuUU3nIbocFF5BUGdJJdqxEzFUA1CaQ1Sj3gLqVuKt32%2FSuaaZ1JFrkHNp0Crf6Te305lk1GYZ3rExTW8MByUQI43vy808z16k7FbJIGfCVTacp6UGwWK%2FqdqWRgjH5aQ7kesqhH06LpT1s4Kh7jzhAaEJd4%2FLHxbAckZG9%2FVqCXByIrOtKjXKpXUCzFlnCbRYi6wU%2BYR1FY0eFET931Yge6MhZgI8zsq8BerUtqWHwwMkIbVIvXM81hisb1WL%2BzoZmW0zXWNahmeu8UhzW57EYH37Y35IUZcB59vm64zU%2BpnuWdBY0eEkSmP5U6%2FWcJjgeObPifpfqnRo11ECJF8C5L3fBrmFe9PwB9LNyhH13g7f7wfWpXKM6A%2Fxdmqx%2F%2FOJCEjYUr%2FW6nVh1iyGx0vxlhh3xAjXU0r5QHJDEg6sD6pNIqxV2nq%2BRYi0ir%2BtY%2BMEI6pZckJooQHw9A45E2SxtRyvFshpkUDoCUviPgwYdtjsH8iN9T8Xkj8ScIdtnUw8v%2BKygY6pgECHaynKU5FHI3ktQeceCTsJfmNHlUX09QGbPSbvPs6uzjyO1mHWX5lwjD5dy4NMibRc0U3hxQNuNREQfub6yf8LAxLi2d0Erve2aSS2IX8GQy9RmuPR00iLOhuPXlHj7M90MK6NSsyiElHALRc3bqIf49zdx79ZdeQcNfG%2FOITKb%2Bv1RbxoTgweztvabZwSAFgTj9s3bOTe4AR4dm2blAycyYvfcqu&X-Amz-Signature=6c739aa030d24f6f388ae8a7993cc568244de84df277cc3731b015bbe8c2d9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

