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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3JNMAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXM5J%2FTF80UsXH8nv4vZyaX32Jvp4UI9qrYIJd5Q2kLAIgfuYQjgkzQa6ds1RrX7jt2vZTlsIEcxvbDK4Yv3tLzgIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEVMQ6V22XrxAdVJ%2FSrcA6XhzPYg39Cra94XGbIAw3UmdrdKaypWde7fphbN3T4e8fm5CqmViLk1euU77jzKWrbblSqia1zHYjtmo0tWfmH357KF1ukmNMgo%2FLjufDAHUbJ22R3hZ43Jba18ZPA4KOUxEpRkENARZuYwBzCisVIJY9eIpffHnJGl5x6I7uEi6xid3FL3ymdhulOr0hY2klaFoV3Gas85rP85jOA3pxiSOo18H97V6LnhPq2X0AXuxlHDy0fV5aq47opTUqd09smrHtuTCJgAARKgJRxd9hWfUwZUnB71heMB89oxPA4I6%2B%2FXh0ePowBJNpOFLAs3un3%2BsHVBPimvygpDQY2SqTHDjl3MOQsZFmrOQeikqejuobQn%2FUaRoj1AtCLB7j6nyjX%2BeGiBgRkINuJ4R%2B97n%2F%2FeVswFFPQ3pEu%2ByY4SL8NKXI3DIPKIhDWOVNXICZtnLP3JW7EOiXmmPKskmIHnKFre4O9wXaMjcL15K25j%2F4fKst0wy7h7van%2FOPTcQxk%2B0GrO7HhZZm4FrOxO155iIMkKjBh5OarxwdVyt1Av7JIrsyA5HiTlzV3jkunyHCSnEca6yrKadMKkdF9VHEfgoFyNbnb%2FgLYTjy8c6BW2Oo4ObNzcTO%2BnskdXCBqEMO%2BWiMoGOqUBwIu9rTetiVBtEKotByVRZ6vXLKNG2v8uLXW5YvUkYaIVuTw5lr9z1rw0jDBiJ5KirwxetJrBncASUHURVGr5jevy4a7SVw5CCtuXh49F3rNv%2FcAfffpKvddLPWFUCRbyeduGh9QeMgzCW4x1VSj%2B9fDf%2FvorlcgwzRL9i7pEm6qnOUCg0NLUV2BTfCW4%2BUhBqhCxtveQ7zViLvauPxG5cYnxxRft&X-Amz-Signature=9c42e728ee4cc4ac71da15b15c9be2ec5a4810ad545ad49ac353614b5be3dad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV3JNMAL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXM5J%2FTF80UsXH8nv4vZyaX32Jvp4UI9qrYIJd5Q2kLAIgfuYQjgkzQa6ds1RrX7jt2vZTlsIEcxvbDK4Yv3tLzgIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEVMQ6V22XrxAdVJ%2FSrcA6XhzPYg39Cra94XGbIAw3UmdrdKaypWde7fphbN3T4e8fm5CqmViLk1euU77jzKWrbblSqia1zHYjtmo0tWfmH357KF1ukmNMgo%2FLjufDAHUbJ22R3hZ43Jba18ZPA4KOUxEpRkENARZuYwBzCisVIJY9eIpffHnJGl5x6I7uEi6xid3FL3ymdhulOr0hY2klaFoV3Gas85rP85jOA3pxiSOo18H97V6LnhPq2X0AXuxlHDy0fV5aq47opTUqd09smrHtuTCJgAARKgJRxd9hWfUwZUnB71heMB89oxPA4I6%2B%2FXh0ePowBJNpOFLAs3un3%2BsHVBPimvygpDQY2SqTHDjl3MOQsZFmrOQeikqejuobQn%2FUaRoj1AtCLB7j6nyjX%2BeGiBgRkINuJ4R%2B97n%2F%2FeVswFFPQ3pEu%2ByY4SL8NKXI3DIPKIhDWOVNXICZtnLP3JW7EOiXmmPKskmIHnKFre4O9wXaMjcL15K25j%2F4fKst0wy7h7van%2FOPTcQxk%2B0GrO7HhZZm4FrOxO155iIMkKjBh5OarxwdVyt1Av7JIrsyA5HiTlzV3jkunyHCSnEca6yrKadMKkdF9VHEfgoFyNbnb%2FgLYTjy8c6BW2Oo4ObNzcTO%2BnskdXCBqEMO%2BWiMoGOqUBwIu9rTetiVBtEKotByVRZ6vXLKNG2v8uLXW5YvUkYaIVuTw5lr9z1rw0jDBiJ5KirwxetJrBncASUHURVGr5jevy4a7SVw5CCtuXh49F3rNv%2FcAfffpKvddLPWFUCRbyeduGh9QeMgzCW4x1VSj%2B9fDf%2FvorlcgwzRL9i7pEm6qnOUCg0NLUV2BTfCW4%2BUhBqhCxtveQ7zViLvauPxG5cYnxxRft&X-Amz-Signature=a80add5206f7e538c7a5cbf0ab8b313294909e8e05228f008ee0ff3e67a55346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

