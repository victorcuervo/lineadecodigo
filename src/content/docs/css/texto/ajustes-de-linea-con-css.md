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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GADIZYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDplrKwf1X7S8cYJSOyMIGDCKJIJ29efZ97nkeNW78pCgIhANUfhYgVSzFvPlrC4Conta8n7B1QeeyJ%2F00RankrPS7IKv8DCHEQABoMNjM3NDIzMTgzODA1Igwr%2B5wr5DDilZxr78Uq3AONaHZUYA%2F9x9kPCK%2BX8z5AcWQu%2FwR%2FDfmT5ffBpS4j%2BXTU5%2F7nmadQecwo02J2%2FAlK1pHhBClt03g%2ByXY%2BP9SiQnuv%2FzK03gzfJwP9ov5AJSrIdvbm%2FMlKABl%2FiHbQW%2F4DsrAtUgfrVc8TPl0FCwtL%2FAh9nWZZOQ6a5lQDHW3GFYgtT04Gyeew72QWGO8bEpCjG8rJBYpt14WF%2B0vgcVdAcAlJY0Mb55jsARfcX9c%2Ftw2UGzUidKD%2BcMLuVrnE0x1aA45pDoHnXk1mXWiB8hOZDrnrh9BsHEZvgMqKYaUmdr1B6q52a8R7raG%2BsPRWk6RrGOVYcX47QOqQdlvVWHpBlVUYS7dZgLB73vtPUOY8NyqAlc7BkDCfsmiwKTdI0L63J95qvdM2Mi6kXH3l0YzVnu0MYCEFtIFgcQlANHTvuTdzYaZGn2Q0pFkIdE7vD3b01ZEPulMHkURj0Aly4oaBpnNbPqBOrWcBaOHJYoT3Aw4H974ZrgOcyXxpsmFZ1hwpWnQRa7BB338oJ1A8JOgWb%2B8EM7XsNP1%2FVyCPJLOsj%2FdzOANQik9uKSR%2BB1vYEnS1MGdVpOZrk6bBqXcvtCX6vJwpTp5Kuh1RB6yIzQSoB6IVZVoP5d959aCNuDCi34fKBjqkAcOGsDW0MILvnneFuL3kLQawGp1UpY%2FjlEy9hDUHq4lG2N9WTcMZ2pJXJ8bIKsRyDlSc%2BRFk%2F%2FVkziQ4C%2FlQIdD4ATwuHWFikj86LSVlV1bw%2FyO9qcsYJjM2jSeF9FMSBJITA7hh7BzUa%2BweBf%2Fwm7%2BTLiHh0WL0ZpeKtldlqlG%2BM3ePcwxBJXgWgVLI2oja%2F0Cf1c%2F36A7JL6kOd2a6N2wpzd4U&X-Amz-Signature=13453871aadc56eea32779cddf7ce155dced79ab1b1c66ba701d3bd8f9e0ad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GADIZYC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDplrKwf1X7S8cYJSOyMIGDCKJIJ29efZ97nkeNW78pCgIhANUfhYgVSzFvPlrC4Conta8n7B1QeeyJ%2F00RankrPS7IKv8DCHEQABoMNjM3NDIzMTgzODA1Igwr%2B5wr5DDilZxr78Uq3AONaHZUYA%2F9x9kPCK%2BX8z5AcWQu%2FwR%2FDfmT5ffBpS4j%2BXTU5%2F7nmadQecwo02J2%2FAlK1pHhBClt03g%2ByXY%2BP9SiQnuv%2FzK03gzfJwP9ov5AJSrIdvbm%2FMlKABl%2FiHbQW%2F4DsrAtUgfrVc8TPl0FCwtL%2FAh9nWZZOQ6a5lQDHW3GFYgtT04Gyeew72QWGO8bEpCjG8rJBYpt14WF%2B0vgcVdAcAlJY0Mb55jsARfcX9c%2Ftw2UGzUidKD%2BcMLuVrnE0x1aA45pDoHnXk1mXWiB8hOZDrnrh9BsHEZvgMqKYaUmdr1B6q52a8R7raG%2BsPRWk6RrGOVYcX47QOqQdlvVWHpBlVUYS7dZgLB73vtPUOY8NyqAlc7BkDCfsmiwKTdI0L63J95qvdM2Mi6kXH3l0YzVnu0MYCEFtIFgcQlANHTvuTdzYaZGn2Q0pFkIdE7vD3b01ZEPulMHkURj0Aly4oaBpnNbPqBOrWcBaOHJYoT3Aw4H974ZrgOcyXxpsmFZ1hwpWnQRa7BB338oJ1A8JOgWb%2B8EM7XsNP1%2FVyCPJLOsj%2FdzOANQik9uKSR%2BB1vYEnS1MGdVpOZrk6bBqXcvtCX6vJwpTp5Kuh1RB6yIzQSoB6IVZVoP5d959aCNuDCi34fKBjqkAcOGsDW0MILvnneFuL3kLQawGp1UpY%2FjlEy9hDUHq4lG2N9WTcMZ2pJXJ8bIKsRyDlSc%2BRFk%2F%2FVkziQ4C%2FlQIdD4ATwuHWFikj86LSVlV1bw%2FyO9qcsYJjM2jSeF9FMSBJITA7hh7BzUa%2BweBf%2Fwm7%2BTLiHh0WL0ZpeKtldlqlG%2BM3ePcwxBJXgWgVLI2oja%2F0Cf1c%2F36A7JL6kOd2a6N2wpzd4U&X-Amz-Signature=15ec36fe7d38f4f91a31c5817f656a79f90c6cdc026dba8d03baa053398d49a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

