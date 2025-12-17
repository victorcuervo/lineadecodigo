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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H46PRDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfn4AcSjmaZ5f8Z%2BFegkwEH8O9O%2BvEMVBMOAHx73%2BngIgMjMASogI3kspD7KSHGtHKNOj4Q61KoO3URisHUxchBsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC26oyD0gViP4D8WBircA3v266wg5N5ei6cf8vYzAaQZ91QOeInB8hhHBlw5MXZu83SQR9zCkbTUZ9zUGyLUwPy8dd2jc3LmUVZdOlkttbvQRJ2%2FBsf4ojVi0t4XpO8Ovdh9MU84QZFeDnL0pnKwFSz9nJa0TKcFcTZfpJe%2FYnavLvicVgUjeK6ZY89M45cjfBIfQMgnr%2BT9HAdindfmLE9vRHvVHKWK7YwkTIj2eFXfrxnq2fLmnnZ7bRKgV2H1U4J2k8KS1NRjhqW8IF6MC7wBj94mgvjfpcvx5y8j3LxQhfUxgqWXMUCq%2Bf1%2F7r8pZURG7nly6B7wLQDBUqwCmJZiDpkdHzJujcehcwYKYZOTBvMjGP96QaKniR1hZnJ%2FUq01QRP8xKYtGTwmJiJW8Oe0Mm6fLJeUzjuQe4RxQNe6zQkdJHPyVn69gcedgYbLe78hRUlPWywntdlXwMb1G0fhLcJQN9zZAK%2BiI6SHh%2BIQmQ8HsMfvO0nBTASwLr71qw55yAJiUuH8EQNFPYOKnC6UCxJEro6tZzroUyIAAvqWONkUheFuBYHoswkh0ql%2FykHZYZfxnfrHbdtExfhJZo8tgWQvHoi3E64XSa2jRHlZzFzJtvaZlhVSlyTX6uULm32nulFBHeTufAuLMNzvicoGOqUB64Kvv546V%2B22FHBGpHaxYsva%2BxOp3FOMaxTkZZtIq7vibr%2BGLqEVzBFkGuFWMlWaOPqW0EVSCLCc5G1kId0kSUIaFVdPVK%2FuEAcE1v9OX7aMAknCXGSLL1Glyaf6zh0%2FJ9OmRM02UOzWybbLQDGUVObG6HEAQz06KHepU7WLF0E0MBP7sAFDgrizLRp3wsqiVwtY9kFHh1gVvqqOUoLfcl3lijC%2F&X-Amz-Signature=e9ca4ba8f28e9e39aa2cbf70d4515ded6778944cb19c28485e08e8c8217d8756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H46PRDE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQfn4AcSjmaZ5f8Z%2BFegkwEH8O9O%2BvEMVBMOAHx73%2BngIgMjMASogI3kspD7KSHGtHKNOj4Q61KoO3URisHUxchBsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC26oyD0gViP4D8WBircA3v266wg5N5ei6cf8vYzAaQZ91QOeInB8hhHBlw5MXZu83SQR9zCkbTUZ9zUGyLUwPy8dd2jc3LmUVZdOlkttbvQRJ2%2FBsf4ojVi0t4XpO8Ovdh9MU84QZFeDnL0pnKwFSz9nJa0TKcFcTZfpJe%2FYnavLvicVgUjeK6ZY89M45cjfBIfQMgnr%2BT9HAdindfmLE9vRHvVHKWK7YwkTIj2eFXfrxnq2fLmnnZ7bRKgV2H1U4J2k8KS1NRjhqW8IF6MC7wBj94mgvjfpcvx5y8j3LxQhfUxgqWXMUCq%2Bf1%2F7r8pZURG7nly6B7wLQDBUqwCmJZiDpkdHzJujcehcwYKYZOTBvMjGP96QaKniR1hZnJ%2FUq01QRP8xKYtGTwmJiJW8Oe0Mm6fLJeUzjuQe4RxQNe6zQkdJHPyVn69gcedgYbLe78hRUlPWywntdlXwMb1G0fhLcJQN9zZAK%2BiI6SHh%2BIQmQ8HsMfvO0nBTASwLr71qw55yAJiUuH8EQNFPYOKnC6UCxJEro6tZzroUyIAAvqWONkUheFuBYHoswkh0ql%2FykHZYZfxnfrHbdtExfhJZo8tgWQvHoi3E64XSa2jRHlZzFzJtvaZlhVSlyTX6uULm32nulFBHeTufAuLMNzvicoGOqUB64Kvv546V%2B22FHBGpHaxYsva%2BxOp3FOMaxTkZZtIq7vibr%2BGLqEVzBFkGuFWMlWaOPqW0EVSCLCc5G1kId0kSUIaFVdPVK%2FuEAcE1v9OX7aMAknCXGSLL1Glyaf6zh0%2FJ9OmRM02UOzWybbLQDGUVObG6HEAQz06KHepU7WLF0E0MBP7sAFDgrizLRp3wsqiVwtY9kFHh1gVvqqOUoLfcl3lijC%2F&X-Amz-Signature=d127502ad308a8e7eb4e20faedc26ab1130c9b3b8fef4675c31271da10b3f22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

