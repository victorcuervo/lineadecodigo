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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCJ2TUR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9sJTqLg4SbDMCehnR1hXG%2Fyj7mPchBhn5AmCQPsRJQIhAMUDmSEiQEVAwaQiEXl0NYtRVq3zMYal6Qkb7jzpuJDbKv8DCHoQABoMNjM3NDIzMTgzODA1IgyPTRA%2BTud%2BO4vuwLIq3AP2iInofN8xGL%2BPNtdVoJ0CfQFspFs%2FLlzxWsxTrzM%2Baz0KhwYAKcB5xtW93sJBVLZTJEyMqYwcJZ60r4zl0B4VKSbHNOwh6PhKc8M80Mqg%2FbT92h3H0WBakWK%2F7i%2Ba83EjYL8qyb2OJOc0rPX3793NwMNn%2FDDAP5Tu3sq7mTaicrzJ%2FZsNWteSF%2FdqxmXjEyKVA6UnkdHIiOLcE047MmVtJjTbqBPihMQ8Skb0kLs4FOWStJggxrXguqAyUmi6OHmbpgUNB7mlGBzZ7awSXNnUGtGqgB0lF9P78gxlwOzi45%2Bu5UlLeRY8x5rMynpZ6c1lCURdKr2uUcnB6pa55b1bOmePS3kMPjDszp4r3Q00WNUD2HjGWU62HtEmnGjuh0tFjb16tur4SwHq0FUvQS39amWMQFrjcGIZFiMWyHQxI37Z2nRfjFiHuLFB5ubOS745bWrZIUCu%2F9e7YMErzDFiCSZVoh1SKYZA23LwBBbw3F0%2FqMrstL36LMYS2qB4rlyYClHfopKEybhgsx1XNf1uJbCwdp59whF6njYVbkzINpHrse%2FqvgjxxYBA6V05ubrxaIRi4yoEvkFy9df914Cj5i1TmkL4FpWjWPeOGxzrDYEiDC2vhCHM0y1HzzDh0onKBjqkAc90OSRJz72CD5JT9FIT2ttxVpDtnvcZ7ykwFgiRy%2FRp9D6Inq7lBaNGPJan%2Ffcfg7Wq1KPEdUpqWfvJm8GEnc7nid2H3E1wQMgNqKUNHPYzQhk%2BO2XY1WqKe9LxVueIcHK%2BFcLoamXVldd1jYXbrPwBqejofeYgb1UlCpKmfZ3x%2F6T6dSA%2FdIOV9OQem%2BnPx1CY87EdXn9CPpi4L1e6ox5CfwwF&X-Amz-Signature=92c67ef0d281366f5530151ae2a0a61874ccdf45c7e61dd7f1bd1706fe11eb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZCJ2TUR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9sJTqLg4SbDMCehnR1hXG%2Fyj7mPchBhn5AmCQPsRJQIhAMUDmSEiQEVAwaQiEXl0NYtRVq3zMYal6Qkb7jzpuJDbKv8DCHoQABoMNjM3NDIzMTgzODA1IgyPTRA%2BTud%2BO4vuwLIq3AP2iInofN8xGL%2BPNtdVoJ0CfQFspFs%2FLlzxWsxTrzM%2Baz0KhwYAKcB5xtW93sJBVLZTJEyMqYwcJZ60r4zl0B4VKSbHNOwh6PhKc8M80Mqg%2FbT92h3H0WBakWK%2F7i%2Ba83EjYL8qyb2OJOc0rPX3793NwMNn%2FDDAP5Tu3sq7mTaicrzJ%2FZsNWteSF%2FdqxmXjEyKVA6UnkdHIiOLcE047MmVtJjTbqBPihMQ8Skb0kLs4FOWStJggxrXguqAyUmi6OHmbpgUNB7mlGBzZ7awSXNnUGtGqgB0lF9P78gxlwOzi45%2Bu5UlLeRY8x5rMynpZ6c1lCURdKr2uUcnB6pa55b1bOmePS3kMPjDszp4r3Q00WNUD2HjGWU62HtEmnGjuh0tFjb16tur4SwHq0FUvQS39amWMQFrjcGIZFiMWyHQxI37Z2nRfjFiHuLFB5ubOS745bWrZIUCu%2F9e7YMErzDFiCSZVoh1SKYZA23LwBBbw3F0%2FqMrstL36LMYS2qB4rlyYClHfopKEybhgsx1XNf1uJbCwdp59whF6njYVbkzINpHrse%2FqvgjxxYBA6V05ubrxaIRi4yoEvkFy9df914Cj5i1TmkL4FpWjWPeOGxzrDYEiDC2vhCHM0y1HzzDh0onKBjqkAc90OSRJz72CD5JT9FIT2ttxVpDtnvcZ7ykwFgiRy%2FRp9D6Inq7lBaNGPJan%2Ffcfg7Wq1KPEdUpqWfvJm8GEnc7nid2H3E1wQMgNqKUNHPYzQhk%2BO2XY1WqKe9LxVueIcHK%2BFcLoamXVldd1jYXbrPwBqejofeYgb1UlCpKmfZ3x%2F6T6dSA%2FdIOV9OQem%2BnPx1CY87EdXn9CPpi4L1e6ox5CfwwF&X-Amz-Signature=541b06f644125f21c8e47b8dbab1c19cb092a656b59b44e8c6ea5cf92f632646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

