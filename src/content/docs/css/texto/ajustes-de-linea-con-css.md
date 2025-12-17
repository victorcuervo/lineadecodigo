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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652N6DQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENTSqMey2sgrvqFU4rDQDDe0rdBfvTERVRuASZgU%2BJLAiB%2FxaUfYxKgh3WADniGwxwo0qsBBBasyrKUt4yuIWfyFCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMnqlirjD06lt0GYnZKtwDPWpGxyMCG5x6hDXGmHYQycgL%2FkgigggWH7DNGEm21Qm%2BWnfXLU7fXyAzHjxw5RtVVcMfxgbwW0bxZnPgv0Yfy4EOuOZMZmd%2BpFE5EyUnx9S2nsvk9vgtbSExcXv0%2FjIsSNHEV11423%2BTrDZ2XHlettf89wY44Bs8JwNluLcnzM%2FnHKbpMqkktGfcQL6ppSI3gb3hkTqdxMdOH%2FZ%2Bst041yYSh7A6Ows7DkZpRdLHKrwdxhKyb%2FRiJyQyIoTk1bos5QF%2B97YsZdzaflWI56GaMKrP6bC2zVMNXqXpBmdWTsP7mSk8hiZ7rTEiaEG6PgPJTIuGv58fE1P4Xt22nFYAtX27hspugoH8QASfPpx2V3y2SMp0ivzESG2pxB%2B%2FkrOJcsWp0h5r3EdBj8%2BEA2FeQGDTlUUbf953KWFxh6xUuPwNPI2WTuhBnpXZhqW7%2F7vgUhoYonmCgiQQwhHM2Xj70rdHSLvSrzDfAP%2FY8AuUH8p4h%2FsY6TJ2T3v%2BeMnL0Xe1BDy8fC3xobV%2BTT7iDiDfYOOsj6997CopdnJp0ivuGdQiwRD08GwraBrpsXfLGOtHWwBfN0LC%2BT0aw%2FPVQLHFbCZOv5A0zy%2BiXf1YT9t5aKT0EWx%2BXuXGr72EfQowod%2BHygY6pgFf2vNaAwaPlsRglVYPfwV0jX8wSH%2BtDpQKUdUccTeXA2EmND7xe0CJFK%2BMipBavbXYEKO2dRNnGjgXRmq3%2FAv%2BW1ykeeXyz1oID7oHruzOzOE8OP9AeMPWk4MKYnGMShVTkpKqvIqIeqGXzz27D%2FG5IvBFzC15UZYtznJbX0z5VseyW3lrN4ESM1wI77JYgDqSTH6kP1xqpK0N88ix9WLwpVgavN2f&X-Amz-Signature=55816c5ebf88624a4f27b6a66733a39a92d857ab2edc3fea28af7f56c6aaa554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652N6DQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENTSqMey2sgrvqFU4rDQDDe0rdBfvTERVRuASZgU%2BJLAiB%2FxaUfYxKgh3WADniGwxwo0qsBBBasyrKUt4yuIWfyFCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMnqlirjD06lt0GYnZKtwDPWpGxyMCG5x6hDXGmHYQycgL%2FkgigggWH7DNGEm21Qm%2BWnfXLU7fXyAzHjxw5RtVVcMfxgbwW0bxZnPgv0Yfy4EOuOZMZmd%2BpFE5EyUnx9S2nsvk9vgtbSExcXv0%2FjIsSNHEV11423%2BTrDZ2XHlettf89wY44Bs8JwNluLcnzM%2FnHKbpMqkktGfcQL6ppSI3gb3hkTqdxMdOH%2FZ%2Bst041yYSh7A6Ows7DkZpRdLHKrwdxhKyb%2FRiJyQyIoTk1bos5QF%2B97YsZdzaflWI56GaMKrP6bC2zVMNXqXpBmdWTsP7mSk8hiZ7rTEiaEG6PgPJTIuGv58fE1P4Xt22nFYAtX27hspugoH8QASfPpx2V3y2SMp0ivzESG2pxB%2B%2FkrOJcsWp0h5r3EdBj8%2BEA2FeQGDTlUUbf953KWFxh6xUuPwNPI2WTuhBnpXZhqW7%2F7vgUhoYonmCgiQQwhHM2Xj70rdHSLvSrzDfAP%2FY8AuUH8p4h%2FsY6TJ2T3v%2BeMnL0Xe1BDy8fC3xobV%2BTT7iDiDfYOOsj6997CopdnJp0ivuGdQiwRD08GwraBrpsXfLGOtHWwBfN0LC%2BT0aw%2FPVQLHFbCZOv5A0zy%2BiXf1YT9t5aKT0EWx%2BXuXGr72EfQowod%2BHygY6pgFf2vNaAwaPlsRglVYPfwV0jX8wSH%2BtDpQKUdUccTeXA2EmND7xe0CJFK%2BMipBavbXYEKO2dRNnGjgXRmq3%2FAv%2BW1ykeeXyz1oID7oHruzOzOE8OP9AeMPWk4MKYnGMShVTkpKqvIqIeqGXzz27D%2FG5IvBFzC15UZYtznJbX0z5VseyW3lrN4ESM1wI77JYgDqSTH6kP1xqpK0N88ix9WLwpVgavN2f&X-Amz-Signature=1c40e0cca33566c3354f380d441977093761da7972742000319912cb8f1e9d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

