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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVJTTD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj5PAs2EGBy%2F19VQeT9%2BCiib0H4kHCiJn0%2FZ1597kVxAIhAMZxevKeCIxP13TCiGW%2BM4OIsxUEM7Zwqx6QhhUx5yj2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1MqOlR25rduKfsv8q3AM8GxZHtBk1Ia%2BYCSX1fHs8w27iPc5gGMhMQtexgSZiEKZ5llUAHXE3h%2B7ycHg%2B7fqWBYNdDMV8LJyN4E%2BtkG7xE4B8I9pLaPwZTV1I1t3xtJw8k8Lt1dWhaA%2FSbs7ykRwDVVtJNz5wlPYnEFB2DAJ8AndMueHKvWJWkeBTc09xWrrRORi%2B%2FuBkUB%2FsXojCLLYBJATJWXUryEODrcu85O716wlgzpwe5wRluG3sG%2FDk5iTMQ7TNJYW%2FPbFgK8D8odBVDK3CP0KVKj%2FqH%2BokxOnPmbcWtiaUeabBkOlIZ5vroCXiTkh9xlfKX1E6VIG4caKdmnhMwf4yq%2F07Urbvdq%2Fo4sSzNcNcpwmFci6eXOjUUSME7tFFxGXe6Ylzmm5xZbWlR5MVFKSN0Xzw%2BcWPU0GhjB7l6UGzfZkUAcjodhKA4up2JWf3VvneWBWQC%2FwYppmVURZ6Cs7ASGywOwa7xBd3GbnFYoKjh5n8a8fxchdsbOPGjI728mHYhWrUrhIZwAf26jIKozFioI8vIuK2v2oVNPoIt3FxRsjb8l%2FXzQt78uaMeXeR7lS%2BqHriyNOamZHkLtaqj%2BiHrKntJ74BT17b1QTPxs6EL4GgZbflD284y2QarrmdrV90QiLNADDtoIvKBjqkARalTWRNaxVKYhvMWy0hBFGh0%2FUWzcZSF9Ze%2B0sjboGBVVDx%2FOprcXCDlsG2jB%2B9OaUF9xjBHv0EYUcw5ZNMVh305lU%2BJ4gp%2FydAIXFxGOaWYq%2BY3ZKfy73Mk5TmajgCqeTyVCfxYjJu3jyx5%2FAGeNsL3KSlq7Os2JFtLaJ8aiSU3NXuJ6JKp7UzqffFPifh8goXduzjuNXkeXC5p9Q0LGeNw630&X-Amz-Signature=0cb2a884dc2d5deae5e91d9aa26e9b9e07d52a5a74646a46db665c1a9011f2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVJTTD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj5PAs2EGBy%2F19VQeT9%2BCiib0H4kHCiJn0%2FZ1597kVxAIhAMZxevKeCIxP13TCiGW%2BM4OIsxUEM7Zwqx6QhhUx5yj2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1MqOlR25rduKfsv8q3AM8GxZHtBk1Ia%2BYCSX1fHs8w27iPc5gGMhMQtexgSZiEKZ5llUAHXE3h%2B7ycHg%2B7fqWBYNdDMV8LJyN4E%2BtkG7xE4B8I9pLaPwZTV1I1t3xtJw8k8Lt1dWhaA%2FSbs7ykRwDVVtJNz5wlPYnEFB2DAJ8AndMueHKvWJWkeBTc09xWrrRORi%2B%2FuBkUB%2FsXojCLLYBJATJWXUryEODrcu85O716wlgzpwe5wRluG3sG%2FDk5iTMQ7TNJYW%2FPbFgK8D8odBVDK3CP0KVKj%2FqH%2BokxOnPmbcWtiaUeabBkOlIZ5vroCXiTkh9xlfKX1E6VIG4caKdmnhMwf4yq%2F07Urbvdq%2Fo4sSzNcNcpwmFci6eXOjUUSME7tFFxGXe6Ylzmm5xZbWlR5MVFKSN0Xzw%2BcWPU0GhjB7l6UGzfZkUAcjodhKA4up2JWf3VvneWBWQC%2FwYppmVURZ6Cs7ASGywOwa7xBd3GbnFYoKjh5n8a8fxchdsbOPGjI728mHYhWrUrhIZwAf26jIKozFioI8vIuK2v2oVNPoIt3FxRsjb8l%2FXzQt78uaMeXeR7lS%2BqHriyNOamZHkLtaqj%2BiHrKntJ74BT17b1QTPxs6EL4GgZbflD284y2QarrmdrV90QiLNADDtoIvKBjqkARalTWRNaxVKYhvMWy0hBFGh0%2FUWzcZSF9Ze%2B0sjboGBVVDx%2FOprcXCDlsG2jB%2B9OaUF9xjBHv0EYUcw5ZNMVh305lU%2BJ4gp%2FydAIXFxGOaWYq%2BY3ZKfy73Mk5TmajgCqeTyVCfxYjJu3jyx5%2FAGeNsL3KSlq7Os2JFtLaJ8aiSU3NXuJ6JKp7UzqffFPifh8goXduzjuNXkeXC5p9Q0LGeNw630&X-Amz-Signature=c4bf74db089f4845074441264c352f70d7262436fe219acf0fdb05d5db7f2994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

