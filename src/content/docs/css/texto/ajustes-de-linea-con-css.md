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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GIQ2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLVtI3ZFwvdQOxf26rKSWNPcq4LQrDvlPGSCBJQWlVzAiBNQlgZvaQQTvXJAO4ttY0fyRdNUEKrfMBckSH6YxN3kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRelyuKR2BU1cHjfPKtwD8Rxdg%2BUWFnqHI8jsOYDgEzmC32RDfrXcE6S%2Bdq4Ck68uL%2FSDzn%2FvYsR6MNFcQMMbw5lK9wQEdllKS26g9QUV09aIgwqVRwZw2cEdU3VLBVlniLx1AZnj%2FI2W%2FJK7R7X6QjNJMR9SDrQYXgMMBpqhVIWXg0OBRqTbS9enDXzRABiDTCXPJEwOF6qqemEi3lpIONiKCMa0ccxXx%2B28enU%2Bqon2jXbTOea4QiSTm%2FletIMwHPnQYHhLw1u6xtCMhJ66mDDje4T6GQSXlu%2BPh9UgvzPY56oae4DsKdrRLkbPBO1kRW69xK5qSRrryj6fAZr%2BkNDGqu6LKlJsXcN9s9KjS5lR4TN%2FjPbHFpHU2pvjlrKB8wfCccGF1srGhEVx2xOmMnNIQ63ji%2FIOmYmWflmgXfaNGuNffpJ6uBWMnXutBt9VCGLkgjNRhb%2FXGkpeLO8Z7qLQceQH1%2F8jVrgxCPcy94KFX6t5XgpZ%2FzEfKhzB6pnBuwOOcR7ICDLuy4hJs2xkbuQW0rGdggDfhe8n0PCUzCqbcVWyJpSrjuKonsl33eXAPhrekZuIa9H2ph5%2BW2DzraWZdoqOz4Ff3ABd2kUnR30aqbuhyYevTGVx08FfidyQH5WhtBFRcrpFT%2FkwnKCLygY6pgG9XNvSi29Kuats2LzCSwLfFFKNFfxl8QlH7NyBD%2BHhvo4X4sHEkUetpLaYwoyNbYhAYgqPsY2uHXfRofDLM6b0rd5UYMJ5VmVDirCeT%2FLj1RaEHqFgsMQbu5BprxIwSJnRlzKKVfFOKdIq5JfB%2F5wF%2BvM%2BozReT3ELVDCgZZ4RnWbEpEL9a%2BwEK2hlVY4f6imWq9Qeec6PIWqbm4qm7N3pytfxQmHU&X-Amz-Signature=2d8e21a249d6c34a3e5a280bde296662ef30c55c6861ff9214d4412d490a9756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GIQ2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLVtI3ZFwvdQOxf26rKSWNPcq4LQrDvlPGSCBJQWlVzAiBNQlgZvaQQTvXJAO4ttY0fyRdNUEKrfMBckSH6YxN3kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRelyuKR2BU1cHjfPKtwD8Rxdg%2BUWFnqHI8jsOYDgEzmC32RDfrXcE6S%2Bdq4Ck68uL%2FSDzn%2FvYsR6MNFcQMMbw5lK9wQEdllKS26g9QUV09aIgwqVRwZw2cEdU3VLBVlniLx1AZnj%2FI2W%2FJK7R7X6QjNJMR9SDrQYXgMMBpqhVIWXg0OBRqTbS9enDXzRABiDTCXPJEwOF6qqemEi3lpIONiKCMa0ccxXx%2B28enU%2Bqon2jXbTOea4QiSTm%2FletIMwHPnQYHhLw1u6xtCMhJ66mDDje4T6GQSXlu%2BPh9UgvzPY56oae4DsKdrRLkbPBO1kRW69xK5qSRrryj6fAZr%2BkNDGqu6LKlJsXcN9s9KjS5lR4TN%2FjPbHFpHU2pvjlrKB8wfCccGF1srGhEVx2xOmMnNIQ63ji%2FIOmYmWflmgXfaNGuNffpJ6uBWMnXutBt9VCGLkgjNRhb%2FXGkpeLO8Z7qLQceQH1%2F8jVrgxCPcy94KFX6t5XgpZ%2FzEfKhzB6pnBuwOOcR7ICDLuy4hJs2xkbuQW0rGdggDfhe8n0PCUzCqbcVWyJpSrjuKonsl33eXAPhrekZuIa9H2ph5%2BW2DzraWZdoqOz4Ff3ABd2kUnR30aqbuhyYevTGVx08FfidyQH5WhtBFRcrpFT%2FkwnKCLygY6pgG9XNvSi29Kuats2LzCSwLfFFKNFfxl8QlH7NyBD%2BHhvo4X4sHEkUetpLaYwoyNbYhAYgqPsY2uHXfRofDLM6b0rd5UYMJ5VmVDirCeT%2FLj1RaEHqFgsMQbu5BprxIwSJnRlzKKVfFOKdIq5JfB%2F5wF%2BvM%2BozReT3ELVDCgZZ4RnWbEpEL9a%2BwEK2hlVY4f6imWq9Qeec6PIWqbm4qm7N3pytfxQmHU&X-Amz-Signature=ab7c09e878ef8bc7f6b03bea045a017f27ac6f7411001e5800c89259d48e6f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

