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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHWY2WG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2C%2BnvCL9Q3obpUu5SY9oNeUqnM%2FtnWitxg45DybEFEAiBLXGX7EyquREYX5P9z68JChjc9tdaov9alSCOzOdmcCir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM1y3kA0Cs6bEp2MrKKtwD3Hw2FV3MTA%2B370gDmlBjfVjKQIq4C4N2R8ML30Ue4Kr1Qq4Oug2DUjA9xUt3thlxUyDhhPn9dXvAvNaeDIsXPlnBmH0JUYJdDjMhaMfQLQq0HHi8xdosfJvXYO6o%2BMn8JoqddCVC3F4NzLPEkVJ3g0rpvqZLxNJHAnQYPbSwvjYQo64SaXEoRyoaKQWXC5K5Og8YOh3Gb1f5xQM26l02hlFrm4a3DuQjNQCHnHcnU81ExRhpK3MhWVhUINLjkri50SycneK8rmFAw6%2B31e7Wjw82zI4Dv5RICC3JGooTelnyGLMzKBHBY4GgbwCWvN0Q5qciF%2BjQdwPBLqJ1Y07GsuNFkzjqxwPj0rN32RW8JTMPJZ7BGmlNmOdaDFngjZUX0ec2xLH4I%2FqlGd8vf7f1gZRVMVEHx3A%2Fy9nqQk77rx4nXDfn4%2F%2BgNizE%2Fmjcl3tKZNd0RTxe%2FPsOhYp6evO1M9hlEoozWIzoKUOsJLnfn6hIGlElUVhC4ZFmF2v4lMD1uSmfJRvUqzFnWc8UjuLZPRAj%2FPbvd5C%2B4AI8UHLDPe5H8FEs%2FfQ4HZ4QvO28uYEzAnDkq1KQrIBcrvKOLTFu6pFiLfI5llIGMkut7OiSn0qjvjtqcz6C5zeMvO0w6IKJygY6pgEQy6pFMgbSxYKkSHRSWyuHSRFQLsddKP79%2FiSryjM4%2BEwYQg%2F2pGB2j4yU%2FxeHwGRIHgdGRJ3PqcBpGEKJp%2BNDyAWgI102UAtiqmUtISBnKjEMqlmXQzwCj47HN9zYS2OouNk9Wn93GywH4TEUl2WsLdEuEjfmSEWtHi8D%2F0uQNznYsEqYi1TfKuJX24RZQkizYokhTX%2BPUJXFX2XDdLQqmtq1v%2FqR&X-Amz-Signature=aebdd5652affc4bc2d90ef705d29addc6d1c8ed935929ed84ee1df5892744b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHWY2WG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2C%2BnvCL9Q3obpUu5SY9oNeUqnM%2FtnWitxg45DybEFEAiBLXGX7EyquREYX5P9z68JChjc9tdaov9alSCOzOdmcCir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM1y3kA0Cs6bEp2MrKKtwD3Hw2FV3MTA%2B370gDmlBjfVjKQIq4C4N2R8ML30Ue4Kr1Qq4Oug2DUjA9xUt3thlxUyDhhPn9dXvAvNaeDIsXPlnBmH0JUYJdDjMhaMfQLQq0HHi8xdosfJvXYO6o%2BMn8JoqddCVC3F4NzLPEkVJ3g0rpvqZLxNJHAnQYPbSwvjYQo64SaXEoRyoaKQWXC5K5Og8YOh3Gb1f5xQM26l02hlFrm4a3DuQjNQCHnHcnU81ExRhpK3MhWVhUINLjkri50SycneK8rmFAw6%2B31e7Wjw82zI4Dv5RICC3JGooTelnyGLMzKBHBY4GgbwCWvN0Q5qciF%2BjQdwPBLqJ1Y07GsuNFkzjqxwPj0rN32RW8JTMPJZ7BGmlNmOdaDFngjZUX0ec2xLH4I%2FqlGd8vf7f1gZRVMVEHx3A%2Fy9nqQk77rx4nXDfn4%2F%2BgNizE%2Fmjcl3tKZNd0RTxe%2FPsOhYp6evO1M9hlEoozWIzoKUOsJLnfn6hIGlElUVhC4ZFmF2v4lMD1uSmfJRvUqzFnWc8UjuLZPRAj%2FPbvd5C%2B4AI8UHLDPe5H8FEs%2FfQ4HZ4QvO28uYEzAnDkq1KQrIBcrvKOLTFu6pFiLfI5llIGMkut7OiSn0qjvjtqcz6C5zeMvO0w6IKJygY6pgEQy6pFMgbSxYKkSHRSWyuHSRFQLsddKP79%2FiSryjM4%2BEwYQg%2F2pGB2j4yU%2FxeHwGRIHgdGRJ3PqcBpGEKJp%2BNDyAWgI102UAtiqmUtISBnKjEMqlmXQzwCj47HN9zYS2OouNk9Wn93GywH4TEUl2WsLdEuEjfmSEWtHi8D%2F0uQNznYsEqYi1TfKuJX24RZQkizYokhTX%2BPUJXFX2XDdLQqmtq1v%2FqR&X-Amz-Signature=94b9be17707531e192b1e9b656faa12b9c96945bee38cfdd3a91fd58b266956c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

