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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMUXAUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4KANCJvzjYcgQEDlRqgJmQ86wnWlTWId6gAbkEvEBBAiEAg7%2BBRn%2BAAQAhYxoKMZ0Isd3gN8D220mnV6%2BK2mVBF7AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzUCThqg9IQNAJAjCrcA5sFhPvA%2BvinB7h96V4bq7hUwYSnPLJQTfE3t5RNgDKB2MyCqhLfFVAhX0H62giXFzcvdF2WsxHyahOMDx5BPlLUvXpJ7lSFEN57lSKQkC17wRpPoUaaAm%2Fq0UbK1kz%2FOVuDyKE0bH7%2BtN7s1cuCEeN%2FJZ38ZT7KmxiPoyuP9ndPrI2xCizui%2F3xmA3BGNO2hHPd9E7ZAbGwyyJfqwyokQnHxUKDmOKHcHb95gyPqeasjQEyh8xUjjLFfxMBq4hK1yo3pWY26NMYwHNYDI%2BSowJuzwRweOzPN2%2BznGcBaGJFx44ZI2HeQwLiS0Ux8i154CLHQ4sfkNhm3R4mEeGaEo9dXc8yj0X%2Ftq7aR8feCOd%2BEmw5%2BXhfoyxhck%2BuTowTIQ15TMc3Xf5YZeUf%2B7qDeLkJtP8uSFxCZFMi2hSp2rqzhMj5sjiWLVmPmXW7jVl2vrxWcTw1sJM7g%2B0u2iIYOddjkB3gHkcQ1TdzI8M6khl4Fonc5pcFLi7A5%2FATuZPMYVLoQfGijX1Ji5ylViGQfnPNfdT9f6V8vq8p2lOk0viCa9SdnNic1jvu%2BeyivfQI9Xrho0Q5e5yYQcW4RTUalsOI9O4p2liz6%2BHblKH5XOljP3vt2wRDAAC0QZ3FMKegi8oGOqUBg5qL3juYdSXrdF5qsv9IiWLa6i09qFu5s5wHevNpylC0C5gB7ZBd1jVFVTl1Qdda1Rg3KafM26cV36b4Yb%2F7uXTanBP93RjBHRYESJx8C9xq%2BdpNBqgj4ZbWbG%2BIBldl9q8TKwWr3QdZ1hw7tBwn1s5AOdIs9333IsRJPSNGINVN30N0UkFE7rVc3UYTpWADCM6cx11KTpBznHMFcVSKcnIvjo%2BD&X-Amz-Signature=5b13c4b37682b90d8cee3e4e9c5da0fb826c6ad66652dd435a70da2e711d4ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMUXAUS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4KANCJvzjYcgQEDlRqgJmQ86wnWlTWId6gAbkEvEBBAiEAg7%2BBRn%2BAAQAhYxoKMZ0Isd3gN8D220mnV6%2BK2mVBF7AqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzUCThqg9IQNAJAjCrcA5sFhPvA%2BvinB7h96V4bq7hUwYSnPLJQTfE3t5RNgDKB2MyCqhLfFVAhX0H62giXFzcvdF2WsxHyahOMDx5BPlLUvXpJ7lSFEN57lSKQkC17wRpPoUaaAm%2Fq0UbK1kz%2FOVuDyKE0bH7%2BtN7s1cuCEeN%2FJZ38ZT7KmxiPoyuP9ndPrI2xCizui%2F3xmA3BGNO2hHPd9E7ZAbGwyyJfqwyokQnHxUKDmOKHcHb95gyPqeasjQEyh8xUjjLFfxMBq4hK1yo3pWY26NMYwHNYDI%2BSowJuzwRweOzPN2%2BznGcBaGJFx44ZI2HeQwLiS0Ux8i154CLHQ4sfkNhm3R4mEeGaEo9dXc8yj0X%2Ftq7aR8feCOd%2BEmw5%2BXhfoyxhck%2BuTowTIQ15TMc3Xf5YZeUf%2B7qDeLkJtP8uSFxCZFMi2hSp2rqzhMj5sjiWLVmPmXW7jVl2vrxWcTw1sJM7g%2B0u2iIYOddjkB3gHkcQ1TdzI8M6khl4Fonc5pcFLi7A5%2FATuZPMYVLoQfGijX1Ji5ylViGQfnPNfdT9f6V8vq8p2lOk0viCa9SdnNic1jvu%2BeyivfQI9Xrho0Q5e5yYQcW4RTUalsOI9O4p2liz6%2BHblKH5XOljP3vt2wRDAAC0QZ3FMKegi8oGOqUBg5qL3juYdSXrdF5qsv9IiWLa6i09qFu5s5wHevNpylC0C5gB7ZBd1jVFVTl1Qdda1Rg3KafM26cV36b4Yb%2F7uXTanBP93RjBHRYESJx8C9xq%2BdpNBqgj4ZbWbG%2BIBldl9q8TKwWr3QdZ1hw7tBwn1s5AOdIs9333IsRJPSNGINVN30N0UkFE7rVc3UYTpWADCM6cx11KTpBznHMFcVSKcnIvjo%2BD&X-Amz-Signature=913ea6a2435cc5d28c534212067348eb5019ff1737797766ba6248da1ac09834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

