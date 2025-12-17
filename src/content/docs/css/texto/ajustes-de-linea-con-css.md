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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGMUSYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkHi3JRO0j%2Fl1A3%2B91EWYSMO4eyJczV6KJV41JKQVgfwIhAMgbq18EgEip6PJNGncmsgGavI6Qf0NaP5ooK1V1P%2FcmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BIJ5OZEiLgQjxNZMq3ANzpGur0sQP9zIzyletjlbJ9st%2FGW0NTk4SJ7LDkgCkaqzQBcwWLtRzJzuZUsai%2B2CAeoz8bPRD1D8aOlBpBEC7Qycx%2BiY%2FvpIgNp98Jb0tnqtXc56fYJok7ZEibAeltBAtOaMs%2Fx84uQ9ep4k%2BOp0GEAw%2FX8RQjjtRtJ%2B%2BgOBESjyj%2BZbhuiPR90pyhgenPcO8XDTMFJCiiV2p%2F2EEr%2FvBmeZvRsdE1qEE3G8QVz3uJtVFSA76Xng%2BHjGdgpfzGC1527YKw1SIrAqs783CY75EErOi10VgHKguMxX5I5XXDJzqZs3GE%2FeCFjxRgA8R1fUO2ilen2AjNY5NnSiF6sp%2BbJ6gLwl8mtIWo0bHwJehYgeAMezniCRj6N7IctVWxK4WtMM%2Bx%2BvEq2tY6GIb%2BB2co18IcmimDia3YPoGRJV23tzb%2FggHtuvA2iYb8hzoh7Gi6HawxopNQpIyXn3UroOW9GbuN1aQRvqm4T9GDA3aJweRp8u7Ua97cWe3ewPa7psgEGB9CULyETuJyUFCXb4Z1D7Ug1w7zREmJAvyfuWz3aaX3HlRfYBtFejwDgmJ7Tw27PlEKcXtu5FVhVDvzo%2FpEPgxcxaKEijizgOV8kh%2FUDuGzDmhtjvv%2BYfAiDDIn4vKBjqkAbf57EhS6QUhjkTGEAHUhbLCaph5wU0uY0qAYMAaQRQ3h6D%2FlI8VRWVSTV9r68LseAiMgcU456QeGVuCDPnWhE9YaOkb66Wa0ZGXmzhrQKQVe%2BLXeKaZNy639TG3Zux72Za5dcirSVNmq7RW9WhrHyQTCRvuO%2FkaK0luDBHrnXnGq9R1Tkp6Y4lMUxzx1tyS4HPeP%2BS%2BCOoA%2F0XOAaiJYkcmAJ4P&X-Amz-Signature=effa16c3965adb8e05b8ba7fa6e6a1d4bc00b26f75e89f19ec810fe0a7350c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGMUSYF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkHi3JRO0j%2Fl1A3%2B91EWYSMO4eyJczV6KJV41JKQVgfwIhAMgbq18EgEip6PJNGncmsgGavI6Qf0NaP5ooK1V1P%2FcmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BIJ5OZEiLgQjxNZMq3ANzpGur0sQP9zIzyletjlbJ9st%2FGW0NTk4SJ7LDkgCkaqzQBcwWLtRzJzuZUsai%2B2CAeoz8bPRD1D8aOlBpBEC7Qycx%2BiY%2FvpIgNp98Jb0tnqtXc56fYJok7ZEibAeltBAtOaMs%2Fx84uQ9ep4k%2BOp0GEAw%2FX8RQjjtRtJ%2B%2BgOBESjyj%2BZbhuiPR90pyhgenPcO8XDTMFJCiiV2p%2F2EEr%2FvBmeZvRsdE1qEE3G8QVz3uJtVFSA76Xng%2BHjGdgpfzGC1527YKw1SIrAqs783CY75EErOi10VgHKguMxX5I5XXDJzqZs3GE%2FeCFjxRgA8R1fUO2ilen2AjNY5NnSiF6sp%2BbJ6gLwl8mtIWo0bHwJehYgeAMezniCRj6N7IctVWxK4WtMM%2Bx%2BvEq2tY6GIb%2BB2co18IcmimDia3YPoGRJV23tzb%2FggHtuvA2iYb8hzoh7Gi6HawxopNQpIyXn3UroOW9GbuN1aQRvqm4T9GDA3aJweRp8u7Ua97cWe3ewPa7psgEGB9CULyETuJyUFCXb4Z1D7Ug1w7zREmJAvyfuWz3aaX3HlRfYBtFejwDgmJ7Tw27PlEKcXtu5FVhVDvzo%2FpEPgxcxaKEijizgOV8kh%2FUDuGzDmhtjvv%2BYfAiDDIn4vKBjqkAbf57EhS6QUhjkTGEAHUhbLCaph5wU0uY0qAYMAaQRQ3h6D%2FlI8VRWVSTV9r68LseAiMgcU456QeGVuCDPnWhE9YaOkb66Wa0ZGXmzhrQKQVe%2BLXeKaZNy639TG3Zux72Za5dcirSVNmq7RW9WhrHyQTCRvuO%2FkaK0luDBHrnXnGq9R1Tkp6Y4lMUxzx1tyS4HPeP%2BS%2BCOoA%2F0XOAaiJYkcmAJ4P&X-Amz-Signature=67e21b39b0e6b7ce08e0ebacde30be68f09fb2d700a6db971ad132edcb0be22c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

