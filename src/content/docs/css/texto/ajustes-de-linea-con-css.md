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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6R3NWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwYSHW8AynyfT0sAV33HbcmHqKxY%2BpssL3tZ7W9hr%2FQIhAJHaU2ZkYiiiykATLqN2N3PAFQ0JCOMfWpGxE7OixrC3Kv8DCHkQABoMNjM3NDIzMTgzODA1Igyt3xjMtew%2FIkirFiwq3APpbThqyeZNsBt9Itr%2FOJ8P2kFLiApSXRRVUh9ky7%2BLz0dgzy8Noelfd8UAsDOjkucMGcHmVM3XxSUTN%2BnOIevhDxB5xUN0a%2FBK8efXEM%2BuZyvxaqGusw4R0hDpdHd5gArKK26EX%2BB8DE2%2FYJ0dCoeCn7JbU7bEc%2FzDfPh%2BsXm68YinFI0CV0pRBTcInmlmX3pqBtDpXKT5vf162RTmjCFvGqT6lceyJn1ejNh6lHFJGeP%2FWhGjdfRhyNIxemMexUMQgE%2ByqyVdy5pe4owc5aOibJnUaNlyitD4KDViEpUCGQA78YM8Awj%2BLN2D2KJboApy3UmJMkxENRXGHqbSWhd1qUFo5c8g2xZKs7FaPlK1Tu820Kli28RH2X0v7%2BTDl4mE7PctyxmdF7f9JrYMpqcqD%2B1fnf5fY1vtWr99VUlrY7QnSSjg5RFPOAeiCQPkUowtZHknG3BNdC%2FpQEVZBNKHUgoDFRUHP%2ForrTLSqff41JyU3a2Gj8A1VMFUP%2Bj1E7%2BnP0wv2WabL1%2Bjw5zynan4LbO5Vcxz87BcwFZRm602mXLpzMCIajvwoQb%2BsVsKAHx%2Bo6TcSJZ6kZMI53ObSv%2FpKdFpXtkRgyuMUqQVqtkU%2BOsuHsXwa9ijtswQOjCRuInKBjqkAROye98SQewtuia%2FS%2BZKQdekJaKbwF2aCI5W1MD4cHFMcJliSlx739h5odqxETOQA%2FM4XGTZFz8JqcQlWsJQJn70X1zqRBPodHPZGX5jdS54RrMEeOmd7XFgSg9HDUpfo9caUtFwCIY0T1NeJpQIbWZPiGDGp3v%2F%2BMvk%2FdAYdaJ55aRmEHaMCWwLUQYjWXWyFN488ov9hC%2F1wH592BARysHJz0Ek&X-Amz-Signature=ae940dadae9e060b463019100eef9e4c5d6be0b81740b2f3659ae664f6968d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM6R3NWQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCwYSHW8AynyfT0sAV33HbcmHqKxY%2BpssL3tZ7W9hr%2FQIhAJHaU2ZkYiiiykATLqN2N3PAFQ0JCOMfWpGxE7OixrC3Kv8DCHkQABoMNjM3NDIzMTgzODA1Igyt3xjMtew%2FIkirFiwq3APpbThqyeZNsBt9Itr%2FOJ8P2kFLiApSXRRVUh9ky7%2BLz0dgzy8Noelfd8UAsDOjkucMGcHmVM3XxSUTN%2BnOIevhDxB5xUN0a%2FBK8efXEM%2BuZyvxaqGusw4R0hDpdHd5gArKK26EX%2BB8DE2%2FYJ0dCoeCn7JbU7bEc%2FzDfPh%2BsXm68YinFI0CV0pRBTcInmlmX3pqBtDpXKT5vf162RTmjCFvGqT6lceyJn1ejNh6lHFJGeP%2FWhGjdfRhyNIxemMexUMQgE%2ByqyVdy5pe4owc5aOibJnUaNlyitD4KDViEpUCGQA78YM8Awj%2BLN2D2KJboApy3UmJMkxENRXGHqbSWhd1qUFo5c8g2xZKs7FaPlK1Tu820Kli28RH2X0v7%2BTDl4mE7PctyxmdF7f9JrYMpqcqD%2B1fnf5fY1vtWr99VUlrY7QnSSjg5RFPOAeiCQPkUowtZHknG3BNdC%2FpQEVZBNKHUgoDFRUHP%2ForrTLSqff41JyU3a2Gj8A1VMFUP%2Bj1E7%2BnP0wv2WabL1%2Bjw5zynan4LbO5Vcxz87BcwFZRm602mXLpzMCIajvwoQb%2BsVsKAHx%2Bo6TcSJZ6kZMI53ObSv%2FpKdFpXtkRgyuMUqQVqtkU%2BOsuHsXwa9ijtswQOjCRuInKBjqkAROye98SQewtuia%2FS%2BZKQdekJaKbwF2aCI5W1MD4cHFMcJliSlx739h5odqxETOQA%2FM4XGTZFz8JqcQlWsJQJn70X1zqRBPodHPZGX5jdS54RrMEeOmd7XFgSg9HDUpfo9caUtFwCIY0T1NeJpQIbWZPiGDGp3v%2F%2BMvk%2FdAYdaJ55aRmEHaMCWwLUQYjWXWyFN488ov9hC%2F1wH592BARysHJz0Ek&X-Amz-Signature=dc6fc0e57f9c0b6027115e039bd57a83c2c65376f3830dd9bf7378d6ffe5d27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

