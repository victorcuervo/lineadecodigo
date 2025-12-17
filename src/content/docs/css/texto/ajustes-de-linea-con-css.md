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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAVT46V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDGjhk7fYrPvlynSDqZnGRAhni3Ilg6bQqvYI8kmcYAIhAJifYHT%2BvGPLy7q7gmWzDm1uvGkEpQhUIMAtQjcZNK7%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgyTspMOZCE9UDI1IO4q3AMLw1%2BZmJh5nmm1xdbGJtVPkkMxGGL9xLTzoJff8QPwSplGhLjQUV18dOWf08wiNoREAm3EEpga1RZSFfFzFREVBfewQMgYsQedw%2BddhysNgjRaB%2FfmV2LomI1fI7NFS0iabubih9vpzcJWSRW7NtmSyK9WRD489Ok%2FS2oBdlXpzY0M0nYaSP1bgJEN2XXLSS45%2F3jPdsCm1T3o862QuWVDxiQk4160RoTMv7S5xzDyrYiuAZ1HugX8c%2Futb%2F97cyF8hx9Uzmtx9ZD2b0kFfMMZH5SSGaTJ5AarwUfWj%2FGa8VPwIz4K0Eqs7T3aCAKL9QZfe7j%2BEb93mrbzsRmdYfNo9YYFRIs7QId39X9mb5NjJ7J0VLi0g7wpy21qWH1dJw8r5exmTNl9%2BU3k0qw4w5IkoWCmiDkX%2FFBxC1VZx76f3Bfuq0bHYOGf9bL%2ByLs0h%2Fxx2OJjdR3RKSR4UpwsTtQBopF3ZaVSNimspMqweYNyytj%2FNNScggpf%2FvlViLcV76VHify9GTyXqms1QXcJhE2aTMpoAE5lQCTAby0YNwQCcOt6vLmClfDCXYUBW2OIn7Yiw%2BO7eQOFS35T1JHuV0e1Mt20LX%2FtpOVj5klD3HwrjZcKqjhQDLL%2FLfO17DDPg4jKBjqkAfcxPzqpeANVPBX8UGFkEKdirxtjIDaURlN3IiM0D7JJ1ZXMD6nKlF8krS%2BDbxKvMrtJhLAyWkSx2%2FBCOyJsJHDizyNgWKKMRZYeVqgHzHY1m7ryxZZl%2BWkUavn9HuyLLUSnODcjCR1bkn9ubaSCLGgNsSRrqG%2BJe9gbpDlcNb3WBW30KiOE71B0VC499%2Bx%2BH11MkEL7mj76HzWhgRRM0TnxpTuT&X-Amz-Signature=497ae9a62b3a704884267b3c5a871c75870c7ecdff799709d5ab644dbd902d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFAVT46V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRDGjhk7fYrPvlynSDqZnGRAhni3Ilg6bQqvYI8kmcYAIhAJifYHT%2BvGPLy7q7gmWzDm1uvGkEpQhUIMAtQjcZNK7%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgyTspMOZCE9UDI1IO4q3AMLw1%2BZmJh5nmm1xdbGJtVPkkMxGGL9xLTzoJff8QPwSplGhLjQUV18dOWf08wiNoREAm3EEpga1RZSFfFzFREVBfewQMgYsQedw%2BddhysNgjRaB%2FfmV2LomI1fI7NFS0iabubih9vpzcJWSRW7NtmSyK9WRD489Ok%2FS2oBdlXpzY0M0nYaSP1bgJEN2XXLSS45%2F3jPdsCm1T3o862QuWVDxiQk4160RoTMv7S5xzDyrYiuAZ1HugX8c%2Futb%2F97cyF8hx9Uzmtx9ZD2b0kFfMMZH5SSGaTJ5AarwUfWj%2FGa8VPwIz4K0Eqs7T3aCAKL9QZfe7j%2BEb93mrbzsRmdYfNo9YYFRIs7QId39X9mb5NjJ7J0VLi0g7wpy21qWH1dJw8r5exmTNl9%2BU3k0qw4w5IkoWCmiDkX%2FFBxC1VZx76f3Bfuq0bHYOGf9bL%2ByLs0h%2Fxx2OJjdR3RKSR4UpwsTtQBopF3ZaVSNimspMqweYNyytj%2FNNScggpf%2FvlViLcV76VHify9GTyXqms1QXcJhE2aTMpoAE5lQCTAby0YNwQCcOt6vLmClfDCXYUBW2OIn7Yiw%2BO7eQOFS35T1JHuV0e1Mt20LX%2FtpOVj5klD3HwrjZcKqjhQDLL%2FLfO17DDPg4jKBjqkAfcxPzqpeANVPBX8UGFkEKdirxtjIDaURlN3IiM0D7JJ1ZXMD6nKlF8krS%2BDbxKvMrtJhLAyWkSx2%2FBCOyJsJHDizyNgWKKMRZYeVqgHzHY1m7ryxZZl%2BWkUavn9HuyLLUSnODcjCR1bkn9ubaSCLGgNsSRrqG%2BJe9gbpDlcNb3WBW30KiOE71B0VC499%2Bx%2BH11MkEL7mj76HzWhgRRM0TnxpTuT&X-Amz-Signature=e4e85208e30a00b455fb9cc7083d99553c605e82e76f20a65d725e184588262f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

