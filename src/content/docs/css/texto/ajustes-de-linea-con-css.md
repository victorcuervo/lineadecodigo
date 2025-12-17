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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB7GYVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzyrksdog9GSaTtO8dghfRHdb5rdQdX8%2BnYQrpdMW3iwIhALx1JKS0vCdTNUIY01BP%2FDN7YP7%2BLm2X9uvBJYJwNvOlKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5BNVRUjpDIJqarZ0q3AP7SazYSB%2BaV5ZNkWPSqpcMj38GNxE4n2Maa6ksx38riPzr%2FoNMC6HSVdS7ruGC96FdBLEpyTUvUDAmbZMmL7QwdZRUZMCf0zyqAQaT29lv3YSrbRFHX7PJ%2FfycuKXfoomePi7923GMvJ1ZjB1CzascPasie5X7QsGhwK2Ljp6ltRi5Jum3ZG%2B%2BNeCw8ZlX8uXBu9kkPwhCLHVtxDeynBygmvlsPirl05axXb1LHTmqD9S%2FZx6TMoRZvNmJtREv6CiN1F30%2F1WRhR4PNQHmrAql9%2BWLPcl2c%2FYK3YPu0G1i80exvKwLWDMkavCQfIT%2FoUdCWTZTlQMxtDuQW3YldMJPOUYfxcunbT%2FSpWFSsNtXyQ4Jx29cQfcy7fmNEQdlPwpvEXhXYyZqSxKdXZTyG2IcKO9ZeDFc1F7d80Ikye52r9cdev%2F6hywSeLd6jlaV3D3VrM2u5zbjt2NuJLY3%2B%2B4YaUUbjf58XUH8O1bBDYryc21iaIhPaX2OktdZEBZZYFhupBVyFcMKQh4cPzWdaZJLT3oSDqyrpYklKfBrAAWT0oq7uY5hoNMTpeH0eaU0ycKxWZzRl0QdojFcDkGtqPd0pUms%2BpOCGJNFmnAYRwlfVMSwcVVOJqx1XN22rDDMoIvKBjqkAd57aI%2FE%2B7r0sn0cZhV8bCKZG7GNZBVOB35YoqDeEwD6yVTYfUsc1WnD6fQm5PfLlSEzZmhclNuoTBzwzZEOHifmy4Ul9pBxWwrViqwSboZ%2BE9PYeDrUlHdLzyqV1tUcqN7qRe4jsk6FLRue3LeisZHdkvs0U21Bidc9WE7kTgDjvrC%2F2U6BaNfQCyM2%2FyB9Zw%2BsM%2FUwbZHXpFAoyp4xQ7h9rXkr&X-Amz-Signature=6adb2c217e828ad61861eee6f864303f7db78cde8503762cdfc21b61e37afdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMB7GYVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzyrksdog9GSaTtO8dghfRHdb5rdQdX8%2BnYQrpdMW3iwIhALx1JKS0vCdTNUIY01BP%2FDN7YP7%2BLm2X9uvBJYJwNvOlKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5BNVRUjpDIJqarZ0q3AP7SazYSB%2BaV5ZNkWPSqpcMj38GNxE4n2Maa6ksx38riPzr%2FoNMC6HSVdS7ruGC96FdBLEpyTUvUDAmbZMmL7QwdZRUZMCf0zyqAQaT29lv3YSrbRFHX7PJ%2FfycuKXfoomePi7923GMvJ1ZjB1CzascPasie5X7QsGhwK2Ljp6ltRi5Jum3ZG%2B%2BNeCw8ZlX8uXBu9kkPwhCLHVtxDeynBygmvlsPirl05axXb1LHTmqD9S%2FZx6TMoRZvNmJtREv6CiN1F30%2F1WRhR4PNQHmrAql9%2BWLPcl2c%2FYK3YPu0G1i80exvKwLWDMkavCQfIT%2FoUdCWTZTlQMxtDuQW3YldMJPOUYfxcunbT%2FSpWFSsNtXyQ4Jx29cQfcy7fmNEQdlPwpvEXhXYyZqSxKdXZTyG2IcKO9ZeDFc1F7d80Ikye52r9cdev%2F6hywSeLd6jlaV3D3VrM2u5zbjt2NuJLY3%2B%2B4YaUUbjf58XUH8O1bBDYryc21iaIhPaX2OktdZEBZZYFhupBVyFcMKQh4cPzWdaZJLT3oSDqyrpYklKfBrAAWT0oq7uY5hoNMTpeH0eaU0ycKxWZzRl0QdojFcDkGtqPd0pUms%2BpOCGJNFmnAYRwlfVMSwcVVOJqx1XN22rDDMoIvKBjqkAd57aI%2FE%2B7r0sn0cZhV8bCKZG7GNZBVOB35YoqDeEwD6yVTYfUsc1WnD6fQm5PfLlSEzZmhclNuoTBzwzZEOHifmy4Ul9pBxWwrViqwSboZ%2BE9PYeDrUlHdLzyqV1tUcqN7qRe4jsk6FLRue3LeisZHdkvs0U21Bidc9WE7kTgDjvrC%2F2U6BaNfQCyM2%2FyB9Zw%2BsM%2FUwbZHXpFAoyp4xQ7h9rXkr&X-Amz-Signature=6777a5353c38911d01a486c65ea002fbf652b74462fc6f8142a06dc671a924d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

