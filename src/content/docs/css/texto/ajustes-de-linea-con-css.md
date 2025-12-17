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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANT2QYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdN3k9Hj%2F%2FSj%2F5wVpJyU6LZvlN63v6eG1JU2f4W0%2B%2FqAIgJmfnjf3SqwKoVsf2zyfVVTsXIBsrBxyfbJH6UiMXPOwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPrEnKvucl0RLeRgRCrcA24fa9eMd54OkZyEeZsZjocrWUjwjccsQdjtk7iIguOjYr14kyEI7DS1x5zv89koobVytMreyFy9s9Mesypqy6XooylmnlClUOjh3aRDI1Rijs9kJuLY37cPIq3bXyYF%2FRSCAtMNq15bEgxGWEoiDMxO8zGg10RBgMhEKFTLc%2FCQHNJEaIXw6jtgC%2FjUg6cMP16KZtcv0cNny8QUWFGcE9ON%2Bw%2BGQjKjOtkYC4KYuS%2F0KPXkusA9ZqXUqbiwl53f2WrtQv1CNGNbHS4CrR51ANLjgxDmZblldzPA2ASFPRiEpiS4A1dodiTR73%2BVtnX9QUvbLYbxoaAUZ2F5A0djeMlw1nfAwQN12TFWHV7Z88Oq%2B7EUBfK%2FIkuDPhyjUiC8nC9giskuiiQxnuImFnIvn4pSavKmDijjwrnCFok8tlCCMfTsDVNLQeGbDjVoU%2FkCDzl7eO5AOQM8VOLGz57nexUlg%2B%2FIeE0cVWgZ55ssUfk13Lpm%2BvKBKlewqMg8l7pHwoSVGqVOMARlhgvuUY6U4tXt%2Fm5cSPyrkmbSJBYwK%2B1n1KTt%2BLpssW9YvzT0UNynlXrH54MJ93C47J%2FKiQpYZ%2BRZ0i60PjwoYMOMnKEAPkh6EDeCqYbuPtxQ7hxPMM%2BViMoGOqUBSt1fu%2FRrMx5ENsta7ozSGyDrxg2UiqelDgLCCP0bdn32nLOraCmC8HwXs9iQe1m2ot8psZHOJixXgczCjUWf5gjHCyPtvxF978yWgEpmKKfSzJEFmJa7VUpL3NuIFDP91WD5I251tBwud8bRaKfpslsy3GRqqr6w21T1m%2F0%2FMyK5GyyuA0HcbcAPZ%2BtwX3EqXeI6yxqfJ7j1rxgJEQvgvMFrg7q1&X-Amz-Signature=1bb8ff3fc9c66a26664ce92a5a3e898e45a5fc3429c97d8d72c378c8e155f068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANT2QYU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdN3k9Hj%2F%2FSj%2F5wVpJyU6LZvlN63v6eG1JU2f4W0%2B%2FqAIgJmfnjf3SqwKoVsf2zyfVVTsXIBsrBxyfbJH6UiMXPOwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPrEnKvucl0RLeRgRCrcA24fa9eMd54OkZyEeZsZjocrWUjwjccsQdjtk7iIguOjYr14kyEI7DS1x5zv89koobVytMreyFy9s9Mesypqy6XooylmnlClUOjh3aRDI1Rijs9kJuLY37cPIq3bXyYF%2FRSCAtMNq15bEgxGWEoiDMxO8zGg10RBgMhEKFTLc%2FCQHNJEaIXw6jtgC%2FjUg6cMP16KZtcv0cNny8QUWFGcE9ON%2Bw%2BGQjKjOtkYC4KYuS%2F0KPXkusA9ZqXUqbiwl53f2WrtQv1CNGNbHS4CrR51ANLjgxDmZblldzPA2ASFPRiEpiS4A1dodiTR73%2BVtnX9QUvbLYbxoaAUZ2F5A0djeMlw1nfAwQN12TFWHV7Z88Oq%2B7EUBfK%2FIkuDPhyjUiC8nC9giskuiiQxnuImFnIvn4pSavKmDijjwrnCFok8tlCCMfTsDVNLQeGbDjVoU%2FkCDzl7eO5AOQM8VOLGz57nexUlg%2B%2FIeE0cVWgZ55ssUfk13Lpm%2BvKBKlewqMg8l7pHwoSVGqVOMARlhgvuUY6U4tXt%2Fm5cSPyrkmbSJBYwK%2B1n1KTt%2BLpssW9YvzT0UNynlXrH54MJ93C47J%2FKiQpYZ%2BRZ0i60PjwoYMOMnKEAPkh6EDeCqYbuPtxQ7hxPMM%2BViMoGOqUBSt1fu%2FRrMx5ENsta7ozSGyDrxg2UiqelDgLCCP0bdn32nLOraCmC8HwXs9iQe1m2ot8psZHOJixXgczCjUWf5gjHCyPtvxF978yWgEpmKKfSzJEFmJa7VUpL3NuIFDP91WD5I251tBwud8bRaKfpslsy3GRqqr6w21T1m%2F0%2FMyK5GyyuA0HcbcAPZ%2BtwX3EqXeI6yxqfJ7j1rxgJEQvgvMFrg7q1&X-Amz-Signature=5f2795b7524b7aba1040f39ed843d4dfdfaf486f8ca37d047880e99cbd60b633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

