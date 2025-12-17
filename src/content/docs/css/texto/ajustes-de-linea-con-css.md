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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNN45JN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZyejm%2FqmkV9pD%2FelsBjRT0ja6M%2FNyi1PtgQjx4uwxnQIgDIn02C1nX%2F3gYg2JDhNgp%2BuaNZM4f90KcYsxwAATZ4wq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJA4ubqF3ZHlbSB7gircA%2FQwL5W%2BLY3xL5W3ZF3T8qqcYTvUitbYCrcKU%2F0hSMPPrJRzuikun30nvi2kkQJ6K3TcwY%2FfLakk%2FfWZE5U%2FWC5m5n8wQejLdBZsTU%2BH7KLp%2F4hMg%2FHG3Z56T9oB4dWopIrx5QdI90mEgk4dFfYDW794OPbH1Q0bdGbjgolQjhkXQuWUJ5YRyQim3WbpYmCsecuPQjq5LdrXvymRrSMkfiEm9k5uMQenmsrK5Nd0TYKlnC3LSMx6SyoooqzFtubhVIiEb6nrigk%2FPM6eokOSLKH3vXKdLogNVVTUPrmYFJlNkvDj8aBUia0LwQjN3PLOkaciqEvGJz3qgvPkM4LO%2FZqDr0iRvZ2p8NtihJvOj%2FXnAUR9GxwFbv2Tz8FRtC%2Flha1I%2F1q1x2P1ME4Qq5gZoH8vdByRHBFsh%2FVjyBTqCAVg5hEhUeCaR%2FTh8X%2FHLK%2FA%2FuKPi8Ny57xq3JypAc3ynYkfvOe7L8QKxwTK1%2B3C17xI%2BZB6Us55yKBLp%2BVe%2FFhmRDqfyaXiFhjnjmIqleIPY3oRp4Chy29KpYbbhnldQqak2qicJT6%2FV6oE4YqNx1BcQOv19NogZ95rdy8mEOA5Id9iSl%2F9Wav2qrhdBB56sv%2F9sDxsTwGEKkPIlRjlMLz7h8oGOqUB4csIgjxaMuAm0BK7WSzA4gBXPIDOOQAyUxfQm7u9260duoF%2Bc%2F9Rc%2BllsoywyaZSX9PG7eAmfo62QTFIczztUZTXggYSwl1fLzOa6TSsyJk%2BNf1G9YcsEPmVUP3Ehvy8fbhgtIUdXMkdFy8Dk%2BF6PDseBv5c9MNBPJogorkrQ2PPavpJCtitmEnd%2F92eqzZnRgZRpY8fF7bxR%2FJRfm4KaRjnaya3&X-Amz-Signature=bd018d102e9684e1b8ad46fffc30dc5695bcce122ea61a2f27b5d9946f21aa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNN45JN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZyejm%2FqmkV9pD%2FelsBjRT0ja6M%2FNyi1PtgQjx4uwxnQIgDIn02C1nX%2F3gYg2JDhNgp%2BuaNZM4f90KcYsxwAATZ4wq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJA4ubqF3ZHlbSB7gircA%2FQwL5W%2BLY3xL5W3ZF3T8qqcYTvUitbYCrcKU%2F0hSMPPrJRzuikun30nvi2kkQJ6K3TcwY%2FfLakk%2FfWZE5U%2FWC5m5n8wQejLdBZsTU%2BH7KLp%2F4hMg%2FHG3Z56T9oB4dWopIrx5QdI90mEgk4dFfYDW794OPbH1Q0bdGbjgolQjhkXQuWUJ5YRyQim3WbpYmCsecuPQjq5LdrXvymRrSMkfiEm9k5uMQenmsrK5Nd0TYKlnC3LSMx6SyoooqzFtubhVIiEb6nrigk%2FPM6eokOSLKH3vXKdLogNVVTUPrmYFJlNkvDj8aBUia0LwQjN3PLOkaciqEvGJz3qgvPkM4LO%2FZqDr0iRvZ2p8NtihJvOj%2FXnAUR9GxwFbv2Tz8FRtC%2Flha1I%2F1q1x2P1ME4Qq5gZoH8vdByRHBFsh%2FVjyBTqCAVg5hEhUeCaR%2FTh8X%2FHLK%2FA%2FuKPi8Ny57xq3JypAc3ynYkfvOe7L8QKxwTK1%2B3C17xI%2BZB6Us55yKBLp%2BVe%2FFhmRDqfyaXiFhjnjmIqleIPY3oRp4Chy29KpYbbhnldQqak2qicJT6%2FV6oE4YqNx1BcQOv19NogZ95rdy8mEOA5Id9iSl%2F9Wav2qrhdBB56sv%2F9sDxsTwGEKkPIlRjlMLz7h8oGOqUB4csIgjxaMuAm0BK7WSzA4gBXPIDOOQAyUxfQm7u9260duoF%2Bc%2F9Rc%2BllsoywyaZSX9PG7eAmfo62QTFIczztUZTXggYSwl1fLzOa6TSsyJk%2BNf1G9YcsEPmVUP3Ehvy8fbhgtIUdXMkdFy8Dk%2BF6PDseBv5c9MNBPJogorkrQ2PPavpJCtitmEnd%2F92eqzZnRgZRpY8fF7bxR%2FJRfm4KaRjnaya3&X-Amz-Signature=8a3bce87e41da8e5a9c8d13f1a62e37d0d8a232ff1e0e32748ded89e88008941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

