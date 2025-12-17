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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFB3EZSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSADHkNoN4NmwoJ8laD67H1mOTbIf0ETLM5kj7NvSJUAiEA%2B0OWIDvOGHCwlAV7%2FmWjuWVTdcuYCBP6wN%2F5N2KAqaUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHU5fKOSvOm6v%2BKICCrcA9t7%2FrH7IuEZFygA0SEWHTrPpDGsHjgSqWW%2BbxdERZV%2FsNXqyO7wfsS9Rv8GTvLr9lqXMC%2B%2BlVQA4G%2BinTkw6%2FwBNk4fRI9YkKZ7MRQ%2FbCjoZw%2B6OWMOYGlvx6wi7pyu7xt7VTZQ9LEbYBDPKOAcD4DwNBWQYlq5%2B9UwYAoWGADIzgR%2Fou7EvsbJN8qBr7hf8BKT6jm1c4TSNyUGlUsKOn31WuSS%2FFW7P93cynxcuBDeB8Bhby66o%2FywCv6xKO9m%2BrLa5U34zbs8UqN1yITH%2BbjDBv%2Fa2xyhLv%2FDZlR%2BP6JAkU4GZb%2BYZp3jVRXpOgF7%2F%2FkaVQQfnvWfc8Bxj%2Bkz%2FGrmj9yO0JPKNLaTiLckNOGJzKyhY9uaEI4aRaaen0sR4M295hVgGPcf%2BvG5uUBl1u0i75ghN%2FexypqyUTNcYMMpl9K085DeEAyKncivNJseKqmTxM3a6yYtYAKQYwpfkA8fMMVDp%2FPH%2Fss5VAM3nY6H9a8%2B2KGuxNv%2BC69Na%2FPdgPe4l0HvQzf3EjbY9QAnA2%2FsIezmRpTwuGmIGHOZpwAo1H9O4bX9BHEhPeCJoJ4WTL08Pll9pjOKxALAQ5MuKrd%2BWeiCgX%2FyUcAQ%2BWnpTuZMC751zmIbwTN7qKEfMLqrisoGOqUBkfo8lRkqHr%2Fh8l%2FzIPytAlmqqPsRx8FeL9%2BM2yqHFCpmgqQLg%2FXEdt6hKHpdI57TrWrG%2FpEr2Dz2FiiwOOIujEvMOv6zLgPQjRhEht1KNu3Lsvi1TqCSvJGmQpY6Q%2FUuZNEBE4SIv7oG2efiSILrUOQAvPZfM3GsZcmzD30iy9TRc0PqcNIkFuDwm14X6MynxLsX8PFeV%2Bcb%2BXS3Eh85ctT3VMKx&X-Amz-Signature=d3adb4569170aa61b3c17398151fe912b8020703c29b43b85fbc6b8b475c49ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFB3EZSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSADHkNoN4NmwoJ8laD67H1mOTbIf0ETLM5kj7NvSJUAiEA%2B0OWIDvOGHCwlAV7%2FmWjuWVTdcuYCBP6wN%2F5N2KAqaUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHU5fKOSvOm6v%2BKICCrcA9t7%2FrH7IuEZFygA0SEWHTrPpDGsHjgSqWW%2BbxdERZV%2FsNXqyO7wfsS9Rv8GTvLr9lqXMC%2B%2BlVQA4G%2BinTkw6%2FwBNk4fRI9YkKZ7MRQ%2FbCjoZw%2B6OWMOYGlvx6wi7pyu7xt7VTZQ9LEbYBDPKOAcD4DwNBWQYlq5%2B9UwYAoWGADIzgR%2Fou7EvsbJN8qBr7hf8BKT6jm1c4TSNyUGlUsKOn31WuSS%2FFW7P93cynxcuBDeB8Bhby66o%2FywCv6xKO9m%2BrLa5U34zbs8UqN1yITH%2BbjDBv%2Fa2xyhLv%2FDZlR%2BP6JAkU4GZb%2BYZp3jVRXpOgF7%2F%2FkaVQQfnvWfc8Bxj%2Bkz%2FGrmj9yO0JPKNLaTiLckNOGJzKyhY9uaEI4aRaaen0sR4M295hVgGPcf%2BvG5uUBl1u0i75ghN%2FexypqyUTNcYMMpl9K085DeEAyKncivNJseKqmTxM3a6yYtYAKQYwpfkA8fMMVDp%2FPH%2Fss5VAM3nY6H9a8%2B2KGuxNv%2BC69Na%2FPdgPe4l0HvQzf3EjbY9QAnA2%2FsIezmRpTwuGmIGHOZpwAo1H9O4bX9BHEhPeCJoJ4WTL08Pll9pjOKxALAQ5MuKrd%2BWeiCgX%2FyUcAQ%2BWnpTuZMC751zmIbwTN7qKEfMLqrisoGOqUBkfo8lRkqHr%2Fh8l%2FzIPytAlmqqPsRx8FeL9%2BM2yqHFCpmgqQLg%2FXEdt6hKHpdI57TrWrG%2FpEr2Dz2FiiwOOIujEvMOv6zLgPQjRhEht1KNu3Lsvi1TqCSvJGmQpY6Q%2FUuZNEBE4SIv7oG2efiSILrUOQAvPZfM3GsZcmzD30iy9TRc0PqcNIkFuDwm14X6MynxLsX8PFeV%2Bcb%2BXS3Eh85ctT3VMKx&X-Amz-Signature=8e212f01ceb082e8be7af672fa8b894a0bbce1abf9b8566e2bf509efe615293e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

