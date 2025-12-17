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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KNFDQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZiTRmVbiwTZidJ1WkGDTM2%2BPOzPvW3DK6FDcXXA8QwgIhALMrF3SVs3f%2FYgf3t47peSuGmIjEUWsUGRB3%2BJOZ3EijKv8DCHMQABoMNjM3NDIzMTgzODA1Igx54HnAJ%2BecI5EVLJsq3AOmqFibnnmu6q3i9zWGhHqZ%2BJdMzHfbn1QHcSOIWchf7SjK6PZCpeazE6zs%2FTJDOj4qU%2Fz8Ohw24gdHaEZfmaZwJjAiQfNb3qLp378UVTlzX4AFLwY8p%2Bax5MARXdm2ptQ0vX657fdUdwDphPYy22Pbgv6T8XmbISsWvFO6IYyrz2XD4OPWxtbq2AQC3Oj5En8sAE%2B8xfClrtjL%2BdV%2BGu04VI9aAhXh%2FCHA6ynEwi6NWKWqWFs0Lo7a%2FcmxDQghw0gfmhDMr2Bz2sY%2Bq8OsG%2FbbJaWlkuay9QwO%2FsgG50%2FeFpviZsH7xqZJ%2BP%2ByMbKC9lRqzcGPOBPJdrtPtiy1cbbTT7ImUqkKieUzRNefI2YHw1HwnA6b9GCU0KjGmkBSBAOwkssILC4sM9hJNYN1cTdLhZHEMev5ctoFZNY%2FhRTu6ks0RYTYCAQti%2F2FJ54iBy8a%2BFlcJZ2rQOWo1YdQFroAHmuH5It%2B0Q62F4FpF%2BUoYjgiBaBAo7q6kaVW7BOI9leMkRoCXrICADiNHLXJs%2Fm80XB8%2F0DJzDt1%2B2598ziiIwp1Cdr%2B5hsdAmNblrnHlaoThuSiPD%2BWsjILpU8PABJroBzr8x62ZIEL3AwkNPvm%2BM3lBlfW6xSoFweaKTDVl4jKBjqkAdE%2BlBgHXoo5XxiUKcqXtYU9PS8OquU7eW9vaTioc6v%2Fs8Qh4uvrpnv5Lx2FN9aedOgXL%2BczadoDVUanCktAYOszuC6Oy42fITv9DaqrHfkqP8KMVPciEsFayeekrxaFcg7xhxtILh5XsWrR8A7mkzrkHGc02yk%2BvO5F%2BOG6DmvUO0%2BeLxDjQua0D%2F7pUPecFFuezuuY80qA6BTHXJ23fZ9oY%2B2i&X-Amz-Signature=26cc7511135775d986450a438e6e109e49940af9ef604ff171f64537fa240950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625KNFDQM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZiTRmVbiwTZidJ1WkGDTM2%2BPOzPvW3DK6FDcXXA8QwgIhALMrF3SVs3f%2FYgf3t47peSuGmIjEUWsUGRB3%2BJOZ3EijKv8DCHMQABoMNjM3NDIzMTgzODA1Igx54HnAJ%2BecI5EVLJsq3AOmqFibnnmu6q3i9zWGhHqZ%2BJdMzHfbn1QHcSOIWchf7SjK6PZCpeazE6zs%2FTJDOj4qU%2Fz8Ohw24gdHaEZfmaZwJjAiQfNb3qLp378UVTlzX4AFLwY8p%2Bax5MARXdm2ptQ0vX657fdUdwDphPYy22Pbgv6T8XmbISsWvFO6IYyrz2XD4OPWxtbq2AQC3Oj5En8sAE%2B8xfClrtjL%2BdV%2BGu04VI9aAhXh%2FCHA6ynEwi6NWKWqWFs0Lo7a%2FcmxDQghw0gfmhDMr2Bz2sY%2Bq8OsG%2FbbJaWlkuay9QwO%2FsgG50%2FeFpviZsH7xqZJ%2BP%2ByMbKC9lRqzcGPOBPJdrtPtiy1cbbTT7ImUqkKieUzRNefI2YHw1HwnA6b9GCU0KjGmkBSBAOwkssILC4sM9hJNYN1cTdLhZHEMev5ctoFZNY%2FhRTu6ks0RYTYCAQti%2F2FJ54iBy8a%2BFlcJZ2rQOWo1YdQFroAHmuH5It%2B0Q62F4FpF%2BUoYjgiBaBAo7q6kaVW7BOI9leMkRoCXrICADiNHLXJs%2Fm80XB8%2F0DJzDt1%2B2598ziiIwp1Cdr%2B5hsdAmNblrnHlaoThuSiPD%2BWsjILpU8PABJroBzr8x62ZIEL3AwkNPvm%2BM3lBlfW6xSoFweaKTDVl4jKBjqkAdE%2BlBgHXoo5XxiUKcqXtYU9PS8OquU7eW9vaTioc6v%2Fs8Qh4uvrpnv5Lx2FN9aedOgXL%2BczadoDVUanCktAYOszuC6Oy42fITv9DaqrHfkqP8KMVPciEsFayeekrxaFcg7xhxtILh5XsWrR8A7mkzrkHGc02yk%2BvO5F%2BOG6DmvUO0%2BeLxDjQua0D%2F7pUPecFFuezuuY80qA6BTHXJ23fZ9oY%2B2i&X-Amz-Signature=09c4d464b0bb8a40498650d4c3649cbdb8b73e138d1f8294c29db97622761174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

