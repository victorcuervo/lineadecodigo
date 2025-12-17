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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2A2MRC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiM6rW3wYTe7r22VSg2kikFDdaLYS5FaMpEbergmAuGwIhALaAyalnKEH%2ByLhyu5kNsfOeJyeTaZBOwrtWTlFYSWBlKv8DCHQQABoMNjM3NDIzMTgzODA1IgyF5314Z33uYwT8MT4q3AOHvLiXLuc27lTKqun1LjUKqDhtzlx3U8SIoTlL24NjEnWz3Zaw42%2Fcj8YWggR3xgunrWpRVYhQwRxQA%2FuIGX9AXEzfgd3sCHcWsYC5MmMiuKsRj0IVO2gA0LTvsr9Jis6mauMj8hkz3yRphnm0y0Akp6u43SQ8BYriUWMZBjUeVsoPA7yAFi1xS0nlm2K2r9r9oMPGY7KOxiX7JqWSLHC6cYbF3tGhvmCjMQ2NOAReYnWSjZZUMifhpVgmmI6mDoPD34V6yzca8ebfTva9tnD0uJsx%2FYFZUt7fzDDksxJ%2Bo9U3Y8fK%2B8mC2ETiwgf8OLxiJub9qxUxA%2BaUFfMT7M7t4LiFp8zCnxWzcArnAgJ%2B7RxWs%2BR%2BKF91G4QXQXiMChgaCNKKgpqJ7fUwhE2o39k0ILol65kIx%2FD1KJGl4%2FQCWQcO3joWCLf%2FF9nLwmAGzoF9jNH7ZmlKZitazpafT%2BmtAvLLdIQ%2BCU6rUJj7PdlSbb2X41CEvkFEWUWkd8D5UgG0O%2FtuzW3qiAaTPfBpQlTR7P4WwKQGDwyYa0vjbFqMpSYiXx8NCM%2FIg0HQq3zElxYAV2bIaWQusSUk3icCpj8nf1ycK%2FCMv5yUAxpRgjWM7AY3fCICSl7ZQU5JOTDrsojKBjqkAZbWIUPdklA39G83h%2B9MZtAvhf9iDjw560IFQ9%2BkWTso1RG8op7p41LMu%2B%2FhWK8Yo5Vu%2FQUURhALdK3Zi8hCm74Rf60qZq2Zve1e7Tf%2FOD8U4Dm%2FISfNGB0ZJQkiZdYIGWs%2Fj%2Ba2uY%2F3PcExuUtM64uAlho4R0eLoSGmll9qAI49QUHSdkSb0U60wAXWQ6bbscMu81PgBlqRT%2FsSiSneV3Rf1LrS&X-Amz-Signature=c5db5caf70716ebaf7a538bfa7e45581c32fa58dc2ed563c8f63c5f7fd03464a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU2A2MRC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiM6rW3wYTe7r22VSg2kikFDdaLYS5FaMpEbergmAuGwIhALaAyalnKEH%2ByLhyu5kNsfOeJyeTaZBOwrtWTlFYSWBlKv8DCHQQABoMNjM3NDIzMTgzODA1IgyF5314Z33uYwT8MT4q3AOHvLiXLuc27lTKqun1LjUKqDhtzlx3U8SIoTlL24NjEnWz3Zaw42%2Fcj8YWggR3xgunrWpRVYhQwRxQA%2FuIGX9AXEzfgd3sCHcWsYC5MmMiuKsRj0IVO2gA0LTvsr9Jis6mauMj8hkz3yRphnm0y0Akp6u43SQ8BYriUWMZBjUeVsoPA7yAFi1xS0nlm2K2r9r9oMPGY7KOxiX7JqWSLHC6cYbF3tGhvmCjMQ2NOAReYnWSjZZUMifhpVgmmI6mDoPD34V6yzca8ebfTva9tnD0uJsx%2FYFZUt7fzDDksxJ%2Bo9U3Y8fK%2B8mC2ETiwgf8OLxiJub9qxUxA%2BaUFfMT7M7t4LiFp8zCnxWzcArnAgJ%2B7RxWs%2BR%2BKF91G4QXQXiMChgaCNKKgpqJ7fUwhE2o39k0ILol65kIx%2FD1KJGl4%2FQCWQcO3joWCLf%2FF9nLwmAGzoF9jNH7ZmlKZitazpafT%2BmtAvLLdIQ%2BCU6rUJj7PdlSbb2X41CEvkFEWUWkd8D5UgG0O%2FtuzW3qiAaTPfBpQlTR7P4WwKQGDwyYa0vjbFqMpSYiXx8NCM%2FIg0HQq3zElxYAV2bIaWQusSUk3icCpj8nf1ycK%2FCMv5yUAxpRgjWM7AY3fCICSl7ZQU5JOTDrsojKBjqkAZbWIUPdklA39G83h%2B9MZtAvhf9iDjw560IFQ9%2BkWTso1RG8op7p41LMu%2B%2FhWK8Yo5Vu%2FQUURhALdK3Zi8hCm74Rf60qZq2Zve1e7Tf%2FOD8U4Dm%2FISfNGB0ZJQkiZdYIGWs%2Fj%2Ba2uY%2F3PcExuUtM64uAlho4R0eLoSGmll9qAI49QUHSdkSb0U60wAXWQ6bbscMu81PgBlqRT%2FsSiSneV3Rf1LrS&X-Amz-Signature=f74ae56ef1b2ceca261326a73c9925ad28f19788402b8e7b372ce03cea97b9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

