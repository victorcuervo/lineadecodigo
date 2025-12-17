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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLPGBGU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7DojlAhHY1i2FupPAWVKCP8cTBvoLrCF%2BW1DSb6U%2BcAiEAmx5duowBT5x3xyG1qsosH3jzi2jkHWv2Ye%2FD9Kyj9tIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJOgchBjANO52QQYAyrcA6BZLiUKoUGD5A9D0C2QuaxZ95Aof992OJ4Sk6XICGzlL7%2BX89bmeuyeigdwyzu9X9GRMLtL60WqjbAhFyuzxJXvRV2MZ9ADOJ8Otp90YRzjDqojtAddAXmBECQkYLq7rG2cP8SsOgfYLv3IBinLHbEmvSXCTa1%2BW9DK5LEsL7yWSBkr5sB3YYFij0pZHL2JSB9IeYUQ5aT8sHEuUds5QmT2AbNzxSCZhIX%2Fme2VvwXezQP2NKgpoeG3U%2BCkMRH5Hqp8sH7aFnrjVJ%2FnPIoLrAh%2F8uIhsrZ6LZIO1K5HsL1%2FYrcUc9gqAS0FUL5tntyOTgv6Lqtrk0xhSDjjE4V1mr2ABZXEGNYUYKXrZu3TuLVwCJCEkdPzt0ktZmEfLCJLfXj1ebzv7zh3FYwsjnXiHK9KZQ54VZvdaUiKnQZjf7Rr2W4eI5mu71hX%2Fc5EutIfUzd7xjGvhf4VQNba9B2i7VJMVV2tR6fvk671%2BdN4gimyuMzRpjiARC2wQUj1U6H4c2J3stxfwm%2B51gWKvUZEmFOxaSpHJdOcWOiLdq5eYrltfyXRHg6BLjkU55Z82bwikO3Ea6AqZ7MLGMbdvyfysZcqo%2Bu5S2QrTR5SyjDfVGGrGUkxCV9Rs0hjcZ5PMMX7h8oGOqUBYkP%2F%2FYM2Vu1nTVQNR%2FyoKN8EKCEFRH%2F33BfT2QWJjxe4Yc%2BE9A6DaCdwpcWquGTXOIwoo%2BIHn5HGMxwsp7YAWrT7FNLlRMfpWgCc5hxFeHwAkLaJ2BK0kPIVHdn3%2BZKTXNelxSN9dU5UKeITE8OMX%2F%2FXbsGSltyFjK3yaK%2FrmAD2DZeO9xuLAaeo75oNlWD66pEPbWcB9sMgzouXvbohc5WPiTmN&X-Amz-Signature=8c76aefc7a6ac345cc3565ea283a53871cf3c3a7660decdf6466009322d8e5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLPGBGU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7DojlAhHY1i2FupPAWVKCP8cTBvoLrCF%2BW1DSb6U%2BcAiEAmx5duowBT5x3xyG1qsosH3jzi2jkHWv2Ye%2FD9Kyj9tIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJOgchBjANO52QQYAyrcA6BZLiUKoUGD5A9D0C2QuaxZ95Aof992OJ4Sk6XICGzlL7%2BX89bmeuyeigdwyzu9X9GRMLtL60WqjbAhFyuzxJXvRV2MZ9ADOJ8Otp90YRzjDqojtAddAXmBECQkYLq7rG2cP8SsOgfYLv3IBinLHbEmvSXCTa1%2BW9DK5LEsL7yWSBkr5sB3YYFij0pZHL2JSB9IeYUQ5aT8sHEuUds5QmT2AbNzxSCZhIX%2Fme2VvwXezQP2NKgpoeG3U%2BCkMRH5Hqp8sH7aFnrjVJ%2FnPIoLrAh%2F8uIhsrZ6LZIO1K5HsL1%2FYrcUc9gqAS0FUL5tntyOTgv6Lqtrk0xhSDjjE4V1mr2ABZXEGNYUYKXrZu3TuLVwCJCEkdPzt0ktZmEfLCJLfXj1ebzv7zh3FYwsjnXiHK9KZQ54VZvdaUiKnQZjf7Rr2W4eI5mu71hX%2Fc5EutIfUzd7xjGvhf4VQNba9B2i7VJMVV2tR6fvk671%2BdN4gimyuMzRpjiARC2wQUj1U6H4c2J3stxfwm%2B51gWKvUZEmFOxaSpHJdOcWOiLdq5eYrltfyXRHg6BLjkU55Z82bwikO3Ea6AqZ7MLGMbdvyfysZcqo%2Bu5S2QrTR5SyjDfVGGrGUkxCV9Rs0hjcZ5PMMX7h8oGOqUBYkP%2F%2FYM2Vu1nTVQNR%2FyoKN8EKCEFRH%2F33BfT2QWJjxe4Yc%2BE9A6DaCdwpcWquGTXOIwoo%2BIHn5HGMxwsp7YAWrT7FNLlRMfpWgCc5hxFeHwAkLaJ2BK0kPIVHdn3%2BZKTXNelxSN9dU5UKeITE8OMX%2F%2FXbsGSltyFjK3yaK%2FrmAD2DZeO9xuLAaeo75oNlWD66pEPbWcB9sMgzouXvbohc5WPiTmN&X-Amz-Signature=8e19f8ea40d6d15ce9da0022f38d855ba9ba609a7e1f9aa9a81e317f91dc58e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

