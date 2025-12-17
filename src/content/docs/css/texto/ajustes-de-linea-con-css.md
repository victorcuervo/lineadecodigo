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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKIGNKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFAd135PVu6RxZq%2F27z2sXgLJSs%2BmncjumkcVaLaNYAIhAMnWG3tE603MD8I8YRKPhkZShV5m9xtkrCPPE2d6afXAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgqMRWoGJ%2FG49B7A8q3APky2s6OVbOXwwR6S3tXpGMBietYPOhh3X0TwcPfpJYl9Kx5ri8vMVHzeDvCY1%2BreviZnhTeHMcLBcVGnafU7EGd7ObqgUQOa07GsC0TqAwvDh%2FUcnGQUdwuO9%2B4oDR8j8WvTnETDpLnkLFlb8QZrh6p6pt%2BSeZGiiXYEQT0sd479QQJUNhD7xUtmDtqbibVmgGFv3RFlgL1ybZfP5io7gdlihhgftilqmh6L8ecpev6V0qA9O3AJgOi9MKbz4X9rIPpGzw4G7wGFhQ3OI1S6D01gSSekf2YuafRaWEC0kStG4IHRjCMQS41%2FNzfujiV9S6aEJBrZjBL%2BB161P30f7vBDrA7nLnKilbRbkjuTjqDzU%2FmPrwerRWyIH6rd5k6c5xRWl3XY12l7Gp8Amg%2FLSyAHh0UiYd1v5nxF87L2%2BHkj7JBnlQKK8P5PuiYEIL%2BZY6y7UfRZH3Qu%2FN6d9j%2Bh%2BxydQ%2BNrzjGQw3oM1mNtjRmFeo4sUYLylFea%2BtMk0vo5msfcDRhNWF4yFON56DHF72dPtUQHyJjL5VPN9u0BpBjm%2F6szrZN7zgNdL0KNhWp1g406PXFnkqr7JgpUKedZJAwUROwBR6Idfk8lmif8cEdYgtU5IrigLIrZ1n2TDOrYzKBjqkAR3fP8Lr134g%2FAos4BcpEUlUfxdTxhNOLsMCMMtuYQQ70qQ16ijopnhv%2BZJOnPwYn%2Bi1QP%2B32jFo5dBlRifeHsFrryreOoQCNnL%2FaH%2FRJqRQ5uVTNPJIDIxrsvjvuVj1lg4ejGcZ6dxxOYtCWLtI8n0Wh11MKNTouQe0I6ErL4zQg7lV5ZADuQ97uv2Rg2%2Bw0C9h1c%2Fy0H7CD5qYo4FGCSmfOgO8&X-Amz-Signature=ded1addbebb3a2313d89cc66f8c4af9836b6f21eb2f1cbf0869c18755ce235c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKIGNKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIFAd135PVu6RxZq%2F27z2sXgLJSs%2BmncjumkcVaLaNYAIhAMnWG3tE603MD8I8YRKPhkZShV5m9xtkrCPPE2d6afXAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgqMRWoGJ%2FG49B7A8q3APky2s6OVbOXwwR6S3tXpGMBietYPOhh3X0TwcPfpJYl9Kx5ri8vMVHzeDvCY1%2BreviZnhTeHMcLBcVGnafU7EGd7ObqgUQOa07GsC0TqAwvDh%2FUcnGQUdwuO9%2B4oDR8j8WvTnETDpLnkLFlb8QZrh6p6pt%2BSeZGiiXYEQT0sd479QQJUNhD7xUtmDtqbibVmgGFv3RFlgL1ybZfP5io7gdlihhgftilqmh6L8ecpev6V0qA9O3AJgOi9MKbz4X9rIPpGzw4G7wGFhQ3OI1S6D01gSSekf2YuafRaWEC0kStG4IHRjCMQS41%2FNzfujiV9S6aEJBrZjBL%2BB161P30f7vBDrA7nLnKilbRbkjuTjqDzU%2FmPrwerRWyIH6rd5k6c5xRWl3XY12l7Gp8Amg%2FLSyAHh0UiYd1v5nxF87L2%2BHkj7JBnlQKK8P5PuiYEIL%2BZY6y7UfRZH3Qu%2FN6d9j%2Bh%2BxydQ%2BNrzjGQw3oM1mNtjRmFeo4sUYLylFea%2BtMk0vo5msfcDRhNWF4yFON56DHF72dPtUQHyJjL5VPN9u0BpBjm%2F6szrZN7zgNdL0KNhWp1g406PXFnkqr7JgpUKedZJAwUROwBR6Idfk8lmif8cEdYgtU5IrigLIrZ1n2TDOrYzKBjqkAR3fP8Lr134g%2FAos4BcpEUlUfxdTxhNOLsMCMMtuYQQ70qQ16ijopnhv%2BZJOnPwYn%2Bi1QP%2B32jFo5dBlRifeHsFrryreOoQCNnL%2FaH%2FRJqRQ5uVTNPJIDIxrsvjvuVj1lg4ejGcZ6dxxOYtCWLtI8n0Wh11MKNTouQe0I6ErL4zQg7lV5ZADuQ97uv2Rg2%2Bw0C9h1c%2Fy0H7CD5qYo4FGCSmfOgO8&X-Amz-Signature=fec47a4133e97218c083a0f0e8afa1faa2ee0ecfd8f74e7805df40f4086c8fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

