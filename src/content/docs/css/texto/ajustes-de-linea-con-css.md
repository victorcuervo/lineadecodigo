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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXEZNF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGuHbVcL8yisIvfptIwNJsM2UVfYDpW2mUC8%2FLnZixMgIhAOOI1siy7UkAcdsT4b96YHlcwJe0bP9%2BWb2lqah5Jr3DKv8DCHkQABoMNjM3NDIzMTgzODA1IgwrbddUx6106oYrlPcq3AMQujFoxIivgf%2FF9BARhu0AeBdCuRl17CQIyRjJcuprGoY%2FegQ1pXsNG4ul%2FODBGuRlxZOKmP2nxUwQgdMq9d24k3iHbopXRP8B0JxKiT%2BX8OVl%2BvkG2rZD3a%2Fw1ILf4Kmb8phr9pp2Z3oqtLIQ8lCxCIZu5wxD4SIS2GFxv4ht230wTyQhDCek8SJueO8ppmyUhWjSuDJ3csN7BGOpSXUeGnfYCGxEMdT3TLrGALZkJO4yGcWESq567orBn7e6ZljOVRmLDkfSzkxcN%2Bd28UQGaoILna%2Bdpaz2UgoBwAwi6G9oetzFT8mwWjC%2F7c90xFCEhuOCDyn0zPK8u9clkvfcuLtrtodj3zps%2Bp%2BjFnYEXIezk9ABaDAjIAVgI6CNtSgSQMpszH7eZUMXyl%2Bv%2FvHQ1LOn2LALxe7Uvhrl27ELbowrNHByM0diiWEHqkzARZfkON5vvNwQ9Be6%2B3MC%2BbbptUbKneb4HKono4uDcpYwjKA%2BUDcaoEMQicVqJuXJ9TqrKbQ7LpbAzKHBqKxk%2BugHdLFXqFVKg6kiHCiXd4GyKMc%2FhqK08H5olVtXsSwXiuqzfz8S8OYlIpf5jHCZaeniF%2FQsJQaCt1VGascoWbUFm9Kpa3Ry9WPPaZx%2FRDCL0YnKBjqkAbM%2BjNvgY7QvhAUJWg4s%2FVElWatmmq67p1SlXT0Ks2DzmVfUqLI0d83Kp0scPQ08CY1y1tAxnmwAn6edAfiDakhkNPu5ZHUj0DIjmKGnt7gvhLKo7cgB7Q4nEx0%2FIWYGx1jgR1CQfcxq07PdHlb2Mz7od%2FGtmx%2B2uWX1%2BZhYP5iuolelxm9HlKfXdRQcmK1rxX55Fe6qqoUPz8fpLHRv8djWVDLc&X-Amz-Signature=472e241456775a9111c185aa3b1d77861c80a0a427d87bca03c8656d61120030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMXEZNF2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGuHbVcL8yisIvfptIwNJsM2UVfYDpW2mUC8%2FLnZixMgIhAOOI1siy7UkAcdsT4b96YHlcwJe0bP9%2BWb2lqah5Jr3DKv8DCHkQABoMNjM3NDIzMTgzODA1IgwrbddUx6106oYrlPcq3AMQujFoxIivgf%2FF9BARhu0AeBdCuRl17CQIyRjJcuprGoY%2FegQ1pXsNG4ul%2FODBGuRlxZOKmP2nxUwQgdMq9d24k3iHbopXRP8B0JxKiT%2BX8OVl%2BvkG2rZD3a%2Fw1ILf4Kmb8phr9pp2Z3oqtLIQ8lCxCIZu5wxD4SIS2GFxv4ht230wTyQhDCek8SJueO8ppmyUhWjSuDJ3csN7BGOpSXUeGnfYCGxEMdT3TLrGALZkJO4yGcWESq567orBn7e6ZljOVRmLDkfSzkxcN%2Bd28UQGaoILna%2Bdpaz2UgoBwAwi6G9oetzFT8mwWjC%2F7c90xFCEhuOCDyn0zPK8u9clkvfcuLtrtodj3zps%2Bp%2BjFnYEXIezk9ABaDAjIAVgI6CNtSgSQMpszH7eZUMXyl%2Bv%2FvHQ1LOn2LALxe7Uvhrl27ELbowrNHByM0diiWEHqkzARZfkON5vvNwQ9Be6%2B3MC%2BbbptUbKneb4HKono4uDcpYwjKA%2BUDcaoEMQicVqJuXJ9TqrKbQ7LpbAzKHBqKxk%2BugHdLFXqFVKg6kiHCiXd4GyKMc%2FhqK08H5olVtXsSwXiuqzfz8S8OYlIpf5jHCZaeniF%2FQsJQaCt1VGascoWbUFm9Kpa3Ry9WPPaZx%2FRDCL0YnKBjqkAbM%2BjNvgY7QvhAUJWg4s%2FVElWatmmq67p1SlXT0Ks2DzmVfUqLI0d83Kp0scPQ08CY1y1tAxnmwAn6edAfiDakhkNPu5ZHUj0DIjmKGnt7gvhLKo7cgB7Q4nEx0%2FIWYGx1jgR1CQfcxq07PdHlb2Mz7od%2FGtmx%2B2uWX1%2BZhYP5iuolelxm9HlKfXdRQcmK1rxX55Fe6qqoUPz8fpLHRv8djWVDLc&X-Amz-Signature=0eccca8a620a0caf72d7c6fe90aa9a209b3047adf1328be5856c55c0978a5871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

