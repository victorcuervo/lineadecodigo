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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BS7BBK5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSw89b%2FEsdtHCwqNNkLJlyq3Smz6wdOicoRemJNAHygIhAMIOcXqFd25Qk2a3pxx6pgSW5rPpiepbIbiHaXjpuyu1Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyybZrtB8vNPyTQTskq3AMiHE1yqVofj0uQu%2B%2BYHwMmOp4oJaccvoA9%2B08eDLOJZqeb7kLe0xmRPGIs5oiHqx4Jb7dpgtGK6Hcv4ua6yCuhhnW1ZBUu%2BWBJ9sSe%2Bq9VqvqzcgQ0VQvMb%2Fl%2F%2BWqhcXKtMDuUd61XM7fyC2LJUDsDIuOeJm%2BjRFYQtzWqWeRTqG%2BnXVRdU4yKh2sL6QtM0icjbeZjSriVwH1lstS0TYYJbLcUHObO84XPaOaCFwi9GNC%2BlaawhHcOPcKKIZBTDlx5PKiogSKd1PAnklbhf5ynI3Jo03fJMz8yGhccmlbsAb76XAqCNWIq31envEnnwZZlRz9zx8fBaLCXRI1rV6k09e96PNaWYDnKQxF7fgoUhj4jxDjFXWoJGp3xrONHttn4H7zvz38Xd67ozxJanU4JLWcybWIgkJdwq01J8ps0v4eV5%2FvOPjMuGwtwlBEmkgt%2B0hS%2BRb1a1uEq233RO%2BeSOzqr0mHs3Q0tf4vaqzTw3ELwa%2FyVFckqTumFIoUyvIpOcxgDFaBhEG%2FPfVJRwAPpYFHGQZ%2FKNV4MSNemdLkRZCpIqSiQhH%2F19afBrdAKKt1QZyp7YgyuVzNCU8JWJoFMy2sd7rRxspgYmQmiwFG1Aq8QU%2F%2BwYzC6kS%2B9WDCrsojKBjqkAWxgCI4M0e1F3nw9iLGQCAVQJ%2B4d9YgjM74wt8ee9ujExgrTqd%2F%2FjdisVntqEmAABd3QlS3NngJlFgdZWc9mkv4nrrwnGPV131tOpoIgitGAQRF2Trdco%2B86wCL2zb0xpDrjaRVs8TEopcALaRHH5CKPI55UXCgmEuGo%2F76NoYeY7pwMm8vueQAsidHt5EHaMw7MMx3wh1O6WnFzLui7y5N5oI0v&X-Amz-Signature=0d4431a5c8c7c3ce8442f6d3354a4eb7725afe17a664c82f5d80010189e30f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BS7BBK5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSw89b%2FEsdtHCwqNNkLJlyq3Smz6wdOicoRemJNAHygIhAMIOcXqFd25Qk2a3pxx6pgSW5rPpiepbIbiHaXjpuyu1Kv8DCHQQABoMNjM3NDIzMTgzODA1IgyybZrtB8vNPyTQTskq3AMiHE1yqVofj0uQu%2B%2BYHwMmOp4oJaccvoA9%2B08eDLOJZqeb7kLe0xmRPGIs5oiHqx4Jb7dpgtGK6Hcv4ua6yCuhhnW1ZBUu%2BWBJ9sSe%2Bq9VqvqzcgQ0VQvMb%2Fl%2F%2BWqhcXKtMDuUd61XM7fyC2LJUDsDIuOeJm%2BjRFYQtzWqWeRTqG%2BnXVRdU4yKh2sL6QtM0icjbeZjSriVwH1lstS0TYYJbLcUHObO84XPaOaCFwi9GNC%2BlaawhHcOPcKKIZBTDlx5PKiogSKd1PAnklbhf5ynI3Jo03fJMz8yGhccmlbsAb76XAqCNWIq31envEnnwZZlRz9zx8fBaLCXRI1rV6k09e96PNaWYDnKQxF7fgoUhj4jxDjFXWoJGp3xrONHttn4H7zvz38Xd67ozxJanU4JLWcybWIgkJdwq01J8ps0v4eV5%2FvOPjMuGwtwlBEmkgt%2B0hS%2BRb1a1uEq233RO%2BeSOzqr0mHs3Q0tf4vaqzTw3ELwa%2FyVFckqTumFIoUyvIpOcxgDFaBhEG%2FPfVJRwAPpYFHGQZ%2FKNV4MSNemdLkRZCpIqSiQhH%2F19afBrdAKKt1QZyp7YgyuVzNCU8JWJoFMy2sd7rRxspgYmQmiwFG1Aq8QU%2F%2BwYzC6kS%2B9WDCrsojKBjqkAWxgCI4M0e1F3nw9iLGQCAVQJ%2B4d9YgjM74wt8ee9ujExgrTqd%2F%2FjdisVntqEmAABd3QlS3NngJlFgdZWc9mkv4nrrwnGPV131tOpoIgitGAQRF2Trdco%2B86wCL2zb0xpDrjaRVs8TEopcALaRHH5CKPI55UXCgmEuGo%2F76NoYeY7pwMm8vueQAsidHt5EHaMw7MMx3wh1O6WnFzLui7y5N5oI0v&X-Amz-Signature=53cc5b139cd9676dfa3766755f22b5dbe776e26872772f1ebeff93a94c0cbf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

