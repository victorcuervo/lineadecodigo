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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHUTI4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiBacmACMsP7IgDjiTzpSf92z8MHJ7oy%2BJAeVr3hvUqAiAvOaUlYitmvg%2FcXlqqmHK4tHLFwvvcV2BL7ID05Baxeyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMMwXOyzF6ji4tPjYiKtwD4E53HVOjiBicOKDp2Vpx3pniYvL%2FMasP%2F%2BQMdPKWHWKugM%2FTa6ToK0d0%2Fqoqe%2FD9fZR6vU7Unv%2FFQRaGqeyr%2B9xIOJ8POM8qr%2FJM17h5cn9bbmqF46CruleypWznp76Qh4wVuZKNmbbCrENZkKTUfCqQF9UkC3s7zfhMh%2B8gOiFpRJOcLhMObIxFO43xsoJprR4BtxGD36oa3OhlaIUiek%2F0bx0zeFE0v3BCbHZIo8NeVGH1KAYudyUc0dbcO438JQ8bmOBuxaW%2BPT%2FEhpFEdSL04b3%2Fmy9VgRZUP3EEheJFyP2639Pl6%2FKC9fKXHF4M9SUNoz4vAq7seE543cgx6XajtbwKBFx4e9IYlKQGiPWVmtfdDZfQgpQymCsnJxL8KTMCltxT6qXoWO4zzobb8Vu4%2Fy9PjTY%2FbFOWmpP3caJS4NP5rVmIoR%2Bj%2BT9kkczWCLk8jOoxv6Jrs8gQj8GKDYSRp%2FpAOZYcJvGucsWyUfzCsoXW12OqSHxl4tyybP5YSks1W7oJsOIQI%2FsZNordV9pj%2BudIFyxxFN1xwJtSkx8hpO6O119XSP0%2FEKD4zWRwmAmmWTbYUWZubEQ5WlkKgNr8GCcDYcRytl5uo138bIT7yWjMSmtzVZCaZOMwy96HygY6pgHMUsMfep5PN%2FGLMSLEkTLfg4qjEwBsSDstkhu2WykRUwgudweQfDgorhRzLU8OArH%2BPglC5NN131jkkRyqjw1mvWXYYG2ypEnI02ZWhoBNUITKiIvA0itHfjqZhBc5rSjgT6DWrQDk0SATsJMFuC%2F8g4a0mqOY6jRpO10CqJCq9lyAyZN0ZvZL%2BsdicXeI3VhzY3pn5krTO8AiJ8YZ0hMxWxHOEFtI&X-Amz-Signature=cda7f9d1cde58ef312542dfdd8aa70cf6b82e90c122b29b6423643b6099d50a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHUTI4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiBacmACMsP7IgDjiTzpSf92z8MHJ7oy%2BJAeVr3hvUqAiAvOaUlYitmvg%2FcXlqqmHK4tHLFwvvcV2BL7ID05Baxeyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMMwXOyzF6ji4tPjYiKtwD4E53HVOjiBicOKDp2Vpx3pniYvL%2FMasP%2F%2BQMdPKWHWKugM%2FTa6ToK0d0%2Fqoqe%2FD9fZR6vU7Unv%2FFQRaGqeyr%2B9xIOJ8POM8qr%2FJM17h5cn9bbmqF46CruleypWznp76Qh4wVuZKNmbbCrENZkKTUfCqQF9UkC3s7zfhMh%2B8gOiFpRJOcLhMObIxFO43xsoJprR4BtxGD36oa3OhlaIUiek%2F0bx0zeFE0v3BCbHZIo8NeVGH1KAYudyUc0dbcO438JQ8bmOBuxaW%2BPT%2FEhpFEdSL04b3%2Fmy9VgRZUP3EEheJFyP2639Pl6%2FKC9fKXHF4M9SUNoz4vAq7seE543cgx6XajtbwKBFx4e9IYlKQGiPWVmtfdDZfQgpQymCsnJxL8KTMCltxT6qXoWO4zzobb8Vu4%2Fy9PjTY%2FbFOWmpP3caJS4NP5rVmIoR%2Bj%2BT9kkczWCLk8jOoxv6Jrs8gQj8GKDYSRp%2FpAOZYcJvGucsWyUfzCsoXW12OqSHxl4tyybP5YSks1W7oJsOIQI%2FsZNordV9pj%2BudIFyxxFN1xwJtSkx8hpO6O119XSP0%2FEKD4zWRwmAmmWTbYUWZubEQ5WlkKgNr8GCcDYcRytl5uo138bIT7yWjMSmtzVZCaZOMwy96HygY6pgHMUsMfep5PN%2FGLMSLEkTLfg4qjEwBsSDstkhu2WykRUwgudweQfDgorhRzLU8OArH%2BPglC5NN131jkkRyqjw1mvWXYYG2ypEnI02ZWhoBNUITKiIvA0itHfjqZhBc5rSjgT6DWrQDk0SATsJMFuC%2F8g4a0mqOY6jRpO10CqJCq9lyAyZN0ZvZL%2BsdicXeI3VhzY3pn5krTO8AiJ8YZ0hMxWxHOEFtI&X-Amz-Signature=58f7058f2a7bc7659a9a94d312664719da6f0d16dafc8e106813a59ac14e8629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

