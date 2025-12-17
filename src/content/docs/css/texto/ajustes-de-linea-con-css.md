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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPD7SLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPHvvNvkTcLRTbsy48Z9Cv93WSuqDKf6Ho1cBMU%2FfamAIhAKsab29PP2mFI1JiGWH1TW7Jo0s93BW5wM%2B6TfCsGpUZKv8DCHYQABoMNjM3NDIzMTgzODA1IgxRknh2V2pjfIZyiskq3AM7WVR%2FNPEHyOEPlwalkyFTwsJFGC40lb8aNd%2BL8rfwHHUAAZKmiJhmOdgbXnK2yG6wIjL8PRSuSwaH9WwRLFVgGtyswc6cxTSpVK1qFb066q4Hu9Ulxj5z2g00P8mqLbYwmTTt6Rm3pKdLyohcmHHE4oNWD8DxQjcsc7keJjPFB%2FUQWKUrLGxVaw0fkPvVESPiW92830DJu%2Bp%2BXUWTLVjZ4BA%2BJm0KETyfQOzns4AhK%2BdOsWZzwdsmffNX6fWX3YR0T%2BfAR3yRP9xM3Vot2T5n7LhQaikK8RQntDbosejZeNEbRz1MJhzOvlYq2NqdV%2B4%2B8XGtbVtojwVm2w549tqJR7i34aA%2BBPGPxewENdTezkGftXThLaeg4%2FPKTv9CFIN3PUsCosvlDHabkjpLE6VanF6ETy2gpCAXT65%2B6Nz6dXkcb1b6H5MogdUGpS54nVuWwQLCQrKyv8h4cb88ayz%2F5vYed8wYgbkcXzl7djHUHL9PBIAy0BJtOwJ0AM7yD9L%2BTfix30LVTG6EO2un5erqB0Cxg4AsaoYOc40yYfzi1BRLRoB5LcnWkiceEs4HvfWlbhvJU1p1ng6i97nuiMCM%2B8ZoGPfNrnwBNNil2yP1nUWHVOk5GxuKj19F5TCh6YjKBjqkASeWSG6D1N1EXk2wH46txhIPE0Ch5JBtfCJtyR2Y946dVTZ9b5PQw%2B6G248cxx2dX0pYmzlyBRzGfUJLUyPGZKf5coVwIHXUBawMDsmF7xn59j6oHtSVyhzIKxTmE%2FCL7QmRfa5%2Bh8sFeSCkOP%2FQuRpuu%2FIoyi6ZjKQjeGVSB%2F1A%2FXpKuuprBBpoLAaYRCX3S%2Fnx%2FH1N8wcEB5Mf9pDhikCJ1OIX&X-Amz-Signature=983db2677aa6ee20e39d1f3df743ec9f4a03f6fc0c2b8642db88bd712df06ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPD7SLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPHvvNvkTcLRTbsy48Z9Cv93WSuqDKf6Ho1cBMU%2FfamAIhAKsab29PP2mFI1JiGWH1TW7Jo0s93BW5wM%2B6TfCsGpUZKv8DCHYQABoMNjM3NDIzMTgzODA1IgxRknh2V2pjfIZyiskq3AM7WVR%2FNPEHyOEPlwalkyFTwsJFGC40lb8aNd%2BL8rfwHHUAAZKmiJhmOdgbXnK2yG6wIjL8PRSuSwaH9WwRLFVgGtyswc6cxTSpVK1qFb066q4Hu9Ulxj5z2g00P8mqLbYwmTTt6Rm3pKdLyohcmHHE4oNWD8DxQjcsc7keJjPFB%2FUQWKUrLGxVaw0fkPvVESPiW92830DJu%2Bp%2BXUWTLVjZ4BA%2BJm0KETyfQOzns4AhK%2BdOsWZzwdsmffNX6fWX3YR0T%2BfAR3yRP9xM3Vot2T5n7LhQaikK8RQntDbosejZeNEbRz1MJhzOvlYq2NqdV%2B4%2B8XGtbVtojwVm2w549tqJR7i34aA%2BBPGPxewENdTezkGftXThLaeg4%2FPKTv9CFIN3PUsCosvlDHabkjpLE6VanF6ETy2gpCAXT65%2B6Nz6dXkcb1b6H5MogdUGpS54nVuWwQLCQrKyv8h4cb88ayz%2F5vYed8wYgbkcXzl7djHUHL9PBIAy0BJtOwJ0AM7yD9L%2BTfix30LVTG6EO2un5erqB0Cxg4AsaoYOc40yYfzi1BRLRoB5LcnWkiceEs4HvfWlbhvJU1p1ng6i97nuiMCM%2B8ZoGPfNrnwBNNil2yP1nUWHVOk5GxuKj19F5TCh6YjKBjqkASeWSG6D1N1EXk2wH46txhIPE0Ch5JBtfCJtyR2Y946dVTZ9b5PQw%2B6G248cxx2dX0pYmzlyBRzGfUJLUyPGZKf5coVwIHXUBawMDsmF7xn59j6oHtSVyhzIKxTmE%2FCL7QmRfa5%2Bh8sFeSCkOP%2FQuRpuu%2FIoyi6ZjKQjeGVSB%2F1A%2FXpKuuprBBpoLAaYRCX3S%2Fnx%2FH1N8wcEB5Mf9pDhikCJ1OIX&X-Amz-Signature=d1fc7c21f1e9574545800291de80329ccaae9a929807b8c8cdb24e39428bf527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

