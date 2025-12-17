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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQKMECGA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQo7f1Iup5haJ5CLhvC%2BfJV7x7azjcbcZwrDRxus58YAiA2iPy2UpAT9rUdgWqyIJ%2BL7Ac5NWeC%2FagdAeYuR8lpKyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf0ROWnIx1PYNuxrhKtwDYl54WIvNVsFiqIU20j8JjXLM76F%2BWtQX479VfJCXQ9d8tWXYmH16Y0nI%2BezSfQROAiWC2Su5njDbXxvuB%2FBZO1ODWov6M8z9Hy1%2BYOSOjKuzp3O8TcjoaNgi2mFIZ9HZojyC%2B2uPrp3x1iDAuJJCyVJqyAKcefG1zOy8ApXleyhRIrd9AUskFoxHrU56moep%2BM0F6gVE9jsSCzEautw7SvcPYuW52W%2Fs%2BGR%2BrrizrZjBQQM4XkToZicQQy5SZ%2FHDBRN6XFbsf%2FFvsfUgqv4eP9yAL83jMHgSB1n%2B3ONYWYYdEO4vdbP6NvqsKKTeEnYWgMlTAVFbn1kZyzeKE%2FgF3PkGSC%2BKCmUgEfySuTSkeKMIM9TEAQ7zA9G6hXBREqj8Gd1nGyEd3fwshUw5TlGoLbVNIqjdMkg%2FRyOl5UYTIN4lgl8zvEqJRyyjXUZUu5jzFqgYOCpS1hIkU59G5JNEgxl5bk8D8%2F4tDXVIxRVbxZVNx0hWtCtA5Hd3QPBD%2B1OPCwUyugT3wjSuAiBpx1vOcdGCdmC4PRNdb3efiK674PfEtZH8nw3c0SzgPpnxC1UQOhHVZHEYJEm89rZ7rjJhHzdOIXFk0P2eMZGA0u3WEh%2BPI7GRYul7vwdqFAUwup2JygY6pgEuLiOk9LxzAKBWWD%2F9cj%2BrG1HcKy%2Bv%2Bo6Z4XZmVFIDXP5akvaJrloT7dA8LOeKYEg5XERqt%2B3WO4xtyhoBy4L9UZphBFGpRHsF8JfLRjHqlf9AgS8OF5A4VEbQ7yfTcGBvYjdTAQv5T%2BAWh6oSfV0b7kJziT2y8pZD1JAGIYBzEU5qKhrUcT7M0JM657i9OZ%2B4I8TCSMbaCbv0FCy5v8A%2FInw5A39A&X-Amz-Signature=18587f324ebef9ec0ccb8d422085235a935a9500b95fbe3dc725bcb4a5cf1716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQKMECGA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQo7f1Iup5haJ5CLhvC%2BfJV7x7azjcbcZwrDRxus58YAiA2iPy2UpAT9rUdgWqyIJ%2BL7Ac5NWeC%2FagdAeYuR8lpKyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf0ROWnIx1PYNuxrhKtwDYl54WIvNVsFiqIU20j8JjXLM76F%2BWtQX479VfJCXQ9d8tWXYmH16Y0nI%2BezSfQROAiWC2Su5njDbXxvuB%2FBZO1ODWov6M8z9Hy1%2BYOSOjKuzp3O8TcjoaNgi2mFIZ9HZojyC%2B2uPrp3x1iDAuJJCyVJqyAKcefG1zOy8ApXleyhRIrd9AUskFoxHrU56moep%2BM0F6gVE9jsSCzEautw7SvcPYuW52W%2Fs%2BGR%2BrrizrZjBQQM4XkToZicQQy5SZ%2FHDBRN6XFbsf%2FFvsfUgqv4eP9yAL83jMHgSB1n%2B3ONYWYYdEO4vdbP6NvqsKKTeEnYWgMlTAVFbn1kZyzeKE%2FgF3PkGSC%2BKCmUgEfySuTSkeKMIM9TEAQ7zA9G6hXBREqj8Gd1nGyEd3fwshUw5TlGoLbVNIqjdMkg%2FRyOl5UYTIN4lgl8zvEqJRyyjXUZUu5jzFqgYOCpS1hIkU59G5JNEgxl5bk8D8%2F4tDXVIxRVbxZVNx0hWtCtA5Hd3QPBD%2B1OPCwUyugT3wjSuAiBpx1vOcdGCdmC4PRNdb3efiK674PfEtZH8nw3c0SzgPpnxC1UQOhHVZHEYJEm89rZ7rjJhHzdOIXFk0P2eMZGA0u3WEh%2BPI7GRYul7vwdqFAUwup2JygY6pgEuLiOk9LxzAKBWWD%2F9cj%2BrG1HcKy%2Bv%2Bo6Z4XZmVFIDXP5akvaJrloT7dA8LOeKYEg5XERqt%2B3WO4xtyhoBy4L9UZphBFGpRHsF8JfLRjHqlf9AgS8OF5A4VEbQ7yfTcGBvYjdTAQv5T%2BAWh6oSfV0b7kJziT2y8pZD1JAGIYBzEU5qKhrUcT7M0JM657i9OZ%2B4I8TCSMbaCbv0FCy5v8A%2FInw5A39A&X-Amz-Signature=468e2a31c387ce50ec8502df7b219e065d25d483d0f501ad63fe6143a3e54ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

