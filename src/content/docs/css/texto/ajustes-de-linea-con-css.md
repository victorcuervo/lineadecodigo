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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGRAAKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWV0mjdd%2FTF5uS77xlZUZovF7NNvT9v8%2B%2BKWkCtuPV9wIgAxRQvJ9HqqfVLsg8kdtCRyGD9NO1M6NnXopGXLdKfkIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo3lkeTG0LUJYGFYCrcA8627ake1fqWSiuMbiQUN9roYmIfjfbDTTEhEWYBYUzQ7CCbqtH3GAJB4J4NlvcZAJJ2UZonJ9hh%2Fpd1SXjfIO7%2FZmK4YOOXfK9ODF8jLXm1eWDKiobj5M2D9G%2BhqbHaSKODflmqYXDxRmz%2BuRpZ6Sq2cmFS0rGjtc9jqBtXDcZ9qUc5I0hWv0zuZdnm8tIO6vD8Nfp%2BfUAAoERqr0NGNkxiW9IVrnQxkewN%2FjKQhEvtk2XKJ4RfU2GTOdh61%2F36PHmC0qcTTldHYCjER4BXUYpC5tnwlI0o6Lstz2KN5owq3pDLAxt72WfqLStPi5uAvcT0L4Y19aETjWjeWTv6zBLsnk9Cs3%2BFhK1c%2BkdL2eY055AQKFc7gROnuEjMYgBIiYMsUZ1CSzl0G7vkcv8LrM1E0ImVwzdYb9a2IJPtgYyRHJHOQqSicdvLD8TNUt8aBziXvHhAdH84SNO4AnbXRjG7fR3BOYt8F8zeRFhpufCO9RibVuYMopbH4fAQZk0sCZ4wjFZ90lLuG0Gz0QlXyttrzvk%2F9%2BPikOQ%2F7zNVyGEN%2FnIai0FLy355owxMN2mp3s7de0xsUj7Z%2FBLdRTbpYU38QOOnR6JVY%2F19ZJ1HFbjh5Nuay9rElK5OW0qGMLugi8oGOqUBcScXlxy8Utm0UrFH0YxwtzqWD%2B109DsP67G1h8PBRW%2FXz61V9XXzPAMUIztnXaK5L%2F0wdtLb4q9P6gcZH06CslieFfftD%2FmP8paTZKuUKS7LZ8w9tANVJVKNrbM2wpMy42GuCvQw8Tf5EtBrvg5d9lxuYdi%2B84j3GO9jIbmCwsXkWjs9nDu3NAwoJrgkKTcMOyMVdboO0IN4BqCx8TVioc8zSejD&X-Amz-Signature=029bba5d6da5ecbd8c22a0de358fe15aa1ab0058f45eaabac69510a8aecad06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGRAAKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWV0mjdd%2FTF5uS77xlZUZovF7NNvT9v8%2B%2BKWkCtuPV9wIgAxRQvJ9HqqfVLsg8kdtCRyGD9NO1M6NnXopGXLdKfkIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCo3lkeTG0LUJYGFYCrcA8627ake1fqWSiuMbiQUN9roYmIfjfbDTTEhEWYBYUzQ7CCbqtH3GAJB4J4NlvcZAJJ2UZonJ9hh%2Fpd1SXjfIO7%2FZmK4YOOXfK9ODF8jLXm1eWDKiobj5M2D9G%2BhqbHaSKODflmqYXDxRmz%2BuRpZ6Sq2cmFS0rGjtc9jqBtXDcZ9qUc5I0hWv0zuZdnm8tIO6vD8Nfp%2BfUAAoERqr0NGNkxiW9IVrnQxkewN%2FjKQhEvtk2XKJ4RfU2GTOdh61%2F36PHmC0qcTTldHYCjER4BXUYpC5tnwlI0o6Lstz2KN5owq3pDLAxt72WfqLStPi5uAvcT0L4Y19aETjWjeWTv6zBLsnk9Cs3%2BFhK1c%2BkdL2eY055AQKFc7gROnuEjMYgBIiYMsUZ1CSzl0G7vkcv8LrM1E0ImVwzdYb9a2IJPtgYyRHJHOQqSicdvLD8TNUt8aBziXvHhAdH84SNO4AnbXRjG7fR3BOYt8F8zeRFhpufCO9RibVuYMopbH4fAQZk0sCZ4wjFZ90lLuG0Gz0QlXyttrzvk%2F9%2BPikOQ%2F7zNVyGEN%2FnIai0FLy355owxMN2mp3s7de0xsUj7Z%2FBLdRTbpYU38QOOnR6JVY%2F19ZJ1HFbjh5Nuay9rElK5OW0qGMLugi8oGOqUBcScXlxy8Utm0UrFH0YxwtzqWD%2B109DsP67G1h8PBRW%2FXz61V9XXzPAMUIztnXaK5L%2F0wdtLb4q9P6gcZH06CslieFfftD%2FmP8paTZKuUKS7LZ8w9tANVJVKNrbM2wpMy42GuCvQw8Tf5EtBrvg5d9lxuYdi%2B84j3GO9jIbmCwsXkWjs9nDu3NAwoJrgkKTcMOyMVdboO0IN4BqCx8TVioc8zSejD&X-Amz-Signature=00bf00f50d4855d7a8a555fff1ebdfa241c2d0d578db143d5cde2494f347d3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

