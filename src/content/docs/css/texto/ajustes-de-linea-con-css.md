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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJZY2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPdDictuN8cKne7J7Bq%2BQdRUE2WtssexU8nvSff%2Bj%2BRgIgKc2T6apazDMOdxjaQ0hSNo2F0lUZUwAowPUAaNgHqcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1jreBIAHHK8N26xSrcAwdfayWbR%2B9quvhM9eov6NcK2ZcEIFuBESOvmsOxm3MsJXbJCttW%2Fg4wLP4%2FhZ1TDhLfijejD1v8JVFSHyO1i%2BroNYWzNniiM6cQA8xwM03UZfzYqFhVCBlKnKeoPaZ%2FWZgIh7EHWYKpDq5Tf7q2E1CDitkasqtF4KcPdHKni1tWanmHps7yeoAkGXXvEi1fFlTXkKqHaSPvcrNZGVGrbOfalmQnAwDu05rpgo7oCPchxg2vlnMbNDRLhYHn4MNlitKFwbwcK%2Fz29Jhb2W0FItVhVDJBrcAcbgb1%2BFJrFID8PLvotvf6AZW9yB%2BqiP2JgI9M6UChaGJBD77viOV9PsUbb630JDNlh0CuzUkP6md9HGpg6EjDiO04gyfC6%2FiX%2FEhWRzpYymoEQ2tiG1Pe%2BkWeNmAH2UlejV%2BMSnYx0ULQg6Cdvs8vhLhMaJncc7UfMFmWCKSPqFQnbgMq%2F0Fy88WH4t2h9IeesxGDu1pYCOqVllKX%2Bwa7pLKSEUZFUGcpbBWfpYn5IQorHJ5BNDyAhcutfbOKofdDKYvqzhbv875gOqM3dviNhwiB02yLYgM4bCc3XXfZmiOaxGP9egT8wEXljuBlBfP596sb0RgulRn59eOtw4aUBS6DrU57MJafi8oGOqUBMF2L6dDt0U6c%2Bs0ap5VgIlbBKwT7%2FXoOqsW5OBtduu40FzMlKi%2FhR%2Fz9%2BXN0FyHd6mfrwZsWe79jm%2FNpHdkUFNE8YZ3v4GJFP7zDfyukDmcdd1ZyafbxxxKV12e%2FcLXMs2218t1e6rwT8nPHodGEJBg6LXsUSFF6XNKxDErjad3Vk3K52okoGnjFbmAc9yRxVHfF%2FrlS4srLTZwgPyyRZJ8XiZWg&X-Amz-Signature=7ee5b14a80f971961d476a5aefcf1acdab40af95efb161bbdd7d8d38370912ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHJZY2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPdDictuN8cKne7J7Bq%2BQdRUE2WtssexU8nvSff%2Bj%2BRgIgKc2T6apazDMOdxjaQ0hSNo2F0lUZUwAowPUAaNgHqcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1jreBIAHHK8N26xSrcAwdfayWbR%2B9quvhM9eov6NcK2ZcEIFuBESOvmsOxm3MsJXbJCttW%2Fg4wLP4%2FhZ1TDhLfijejD1v8JVFSHyO1i%2BroNYWzNniiM6cQA8xwM03UZfzYqFhVCBlKnKeoPaZ%2FWZgIh7EHWYKpDq5Tf7q2E1CDitkasqtF4KcPdHKni1tWanmHps7yeoAkGXXvEi1fFlTXkKqHaSPvcrNZGVGrbOfalmQnAwDu05rpgo7oCPchxg2vlnMbNDRLhYHn4MNlitKFwbwcK%2Fz29Jhb2W0FItVhVDJBrcAcbgb1%2BFJrFID8PLvotvf6AZW9yB%2BqiP2JgI9M6UChaGJBD77viOV9PsUbb630JDNlh0CuzUkP6md9HGpg6EjDiO04gyfC6%2FiX%2FEhWRzpYymoEQ2tiG1Pe%2BkWeNmAH2UlejV%2BMSnYx0ULQg6Cdvs8vhLhMaJncc7UfMFmWCKSPqFQnbgMq%2F0Fy88WH4t2h9IeesxGDu1pYCOqVllKX%2Bwa7pLKSEUZFUGcpbBWfpYn5IQorHJ5BNDyAhcutfbOKofdDKYvqzhbv875gOqM3dviNhwiB02yLYgM4bCc3XXfZmiOaxGP9egT8wEXljuBlBfP596sb0RgulRn59eOtw4aUBS6DrU57MJafi8oGOqUBMF2L6dDt0U6c%2Bs0ap5VgIlbBKwT7%2FXoOqsW5OBtduu40FzMlKi%2FhR%2Fz9%2BXN0FyHd6mfrwZsWe79jm%2FNpHdkUFNE8YZ3v4GJFP7zDfyukDmcdd1ZyafbxxxKV12e%2FcLXMs2218t1e6rwT8nPHodGEJBg6LXsUSFF6XNKxDErjad3Vk3K52okoGnjFbmAc9yRxVHfF%2FrlS4srLTZwgPyyRZJ8XiZWg&X-Amz-Signature=02af3eec0bb1b5752e0c6b58f2d3640dc453f745f81475c08c5d8a04f20caf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

