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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4JRBFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGa%2BzMqvN29lQMrAKxV%2BTjBe%2B6%2BfWw4UfzgdyBaCQZ%2BAiEA4ye5Ev1AOGZ9f0N%2FTPQsBZvvZUqAAKmT0seIG4P9OvUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOk9LSeIrTAOgedTircA%2B2Bz6iWN9M8TtSyVDA4L1FhY6wb7ZBebJSWgVl1p405V0VI8Nsx9wY8SMa0iLmJ4YaTmPCliXI1AVuXXUl5s2YC8haLnxfStMRiEzgASm69dufuCCpRJ%2B3wiSnxHSKX6mSuOGjbvhvXdk8S%2FArhP1eoOBhEN5Jty1A6N6oVGEBv5twB%2BJC84D5JzSmb3rA8w1WIUdVMPqdnkErO13u9BLvjO9fauxwSyk9NUboU7QYNKcNwVdTistWrJp%2FMo1MEA8HxpqrnMJAPxKiB6zCnQVSZkn%2F8ZoA7d0lwagwxjBqmJYhWeM7MZcFpwQqhCmBbg%2FmYsJrGucQSSf5UtRcKregGaoH81ekV7bch8SGJ6hwocQG2sujJDoZ62CollNjRrPtQ4ep2btFzWha2k3QGgrgdNCZxeQKLkmi0HAx9crhl4MQiYsSQQAK0vQCGt7MviY%2BAnMAvHATGtTkCCSB4JgOlcI9SJn2NyCyYw2sU8YYDBEc%2B5beJw5twnNwZfmy6moSCSW9ipp%2Fg%2F0%2F0yKO5AP9i%2FlAjE8B56IoTK8GuuH9dE7cKsuBJyGoVKY11QyRFuKQCCIJMIg050Zg%2B8ZzbjWFu3cZpz%2Ba8EpJLaQd1q9sVt5xg6DxM77YVdHFKMOSei8oGOqUBN8KJ6pKvzb4heUq9vwvmS9YPzNz%2BzdUMkEzsA4nP3j9cWNmpkrav2r%2FWn0bc9GxuPLSYAIZj6M3CMvMhoOT9n247llIXuzRl7wD0RkpcSqSy8ofm%2FtkvzxYOyT6K5wpo3Idbn4fznx6U7IVVo06GaCrXCF%2BFbrkCOPFBPFduV5Iza6Wx%2FbkFokJ4rwpT2X38V9aD8iyA1WQDaF7sH5ijdcSkpUoU&X-Amz-Signature=1ba8c7a71a7c70bfa3e2c1a79f1fb7bdf64dc7f2c66a84617a23fd0bd291afc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4JRBFF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGa%2BzMqvN29lQMrAKxV%2BTjBe%2B6%2BfWw4UfzgdyBaCQZ%2BAiEA4ye5Ev1AOGZ9f0N%2FTPQsBZvvZUqAAKmT0seIG4P9OvUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOk9LSeIrTAOgedTircA%2B2Bz6iWN9M8TtSyVDA4L1FhY6wb7ZBebJSWgVl1p405V0VI8Nsx9wY8SMa0iLmJ4YaTmPCliXI1AVuXXUl5s2YC8haLnxfStMRiEzgASm69dufuCCpRJ%2B3wiSnxHSKX6mSuOGjbvhvXdk8S%2FArhP1eoOBhEN5Jty1A6N6oVGEBv5twB%2BJC84D5JzSmb3rA8w1WIUdVMPqdnkErO13u9BLvjO9fauxwSyk9NUboU7QYNKcNwVdTistWrJp%2FMo1MEA8HxpqrnMJAPxKiB6zCnQVSZkn%2F8ZoA7d0lwagwxjBqmJYhWeM7MZcFpwQqhCmBbg%2FmYsJrGucQSSf5UtRcKregGaoH81ekV7bch8SGJ6hwocQG2sujJDoZ62CollNjRrPtQ4ep2btFzWha2k3QGgrgdNCZxeQKLkmi0HAx9crhl4MQiYsSQQAK0vQCGt7MviY%2BAnMAvHATGtTkCCSB4JgOlcI9SJn2NyCyYw2sU8YYDBEc%2B5beJw5twnNwZfmy6moSCSW9ipp%2Fg%2F0%2F0yKO5AP9i%2FlAjE8B56IoTK8GuuH9dE7cKsuBJyGoVKY11QyRFuKQCCIJMIg050Zg%2B8ZzbjWFu3cZpz%2Ba8EpJLaQd1q9sVt5xg6DxM77YVdHFKMOSei8oGOqUBN8KJ6pKvzb4heUq9vwvmS9YPzNz%2BzdUMkEzsA4nP3j9cWNmpkrav2r%2FWn0bc9GxuPLSYAIZj6M3CMvMhoOT9n247llIXuzRl7wD0RkpcSqSy8ofm%2FtkvzxYOyT6K5wpo3Idbn4fznx6U7IVVo06GaCrXCF%2BFbrkCOPFBPFduV5Iza6Wx%2FbkFokJ4rwpT2X38V9aD8iyA1WQDaF7sH5ijdcSkpUoU&X-Amz-Signature=6f2b9ba870ba56682efb4d107cb9fef6db16f8d6ef28d20ffac219bb531d0675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

