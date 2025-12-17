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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAMXHH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArR8GFfKZ1v9iP67YuKWZxI9xnYSVWcyHi68M6SeTQmAiEAsZv86mM4ckyZuaJhbY4tyd1pf6i%2B7cV%2FMJfvvZlgcQsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsgiG%2FC0fdzr%2FibRCrcA6pEJ5%2BudbvQicYRDm2Yvr67cSDxe3mrwBUouXxxmx%2FsSDo2VKRCST8sH7RZ3RVr%2BErWaD86YMvMOG8E2nKxI2UsnMctzlL09OTV7nuJ%2F%2B%2FdfhQ0SftsKk4FslOS0iyshnFEvuyRHAO1rkI5apAABGOWPlgPAMLYhLTmqFOFf7CE8XM71ZJARFn8uqwi%2BX60gTK189lpq0S3cqkmZpfy4Ua4t35%2BAbbWARQjWLomcIUczik41ruWAv9YaM2%2FDchp0H1V0zXbKDU2dx44w8MZ%2BlyvHnCBW%2F41fHmiqGp9jynwuxPMdJkt87DZsu550%2Blt1zxWvYYef1XnxV41lpARoHSWnU2gq7ERewbmE7ef5hLMVp2PuHVXGpfcKIEwLDNiomvfLp%2BevKuzq7bGgrPJNsOdurFwWNNTT5UABmSi3rEuI%2FlIA1AqNIaVVKyaXwbORiKikGgIMYrUHOSBqzssxdF0DL8DTlgT1Nf3tlOjLg60guwblEay0ZdyGEzwWDywT%2F5opa4MzpCifLYWgZTn%2B1BUhwa4jIMvw4x5oItGcvAbhIl0pujLZTwv5GDBxZ8BhxBZGS4wZripESLshqcbsXFUhATVA1KxKaREkPqPYiziF1BrSSlSOaDZy%2B9uMICgi8oGOqUBijbgvw21tAyad%2BkgTC%2FgHJErhNlpR%2FVdXvB%2Blw3%2FWHDVH8HsbTP0AT3fjQDz2o9qW%2Bx4Td0XmLKa3NThAtsnxw8h9E6FwNevszbzvCXXLYHuXEWE4sE1kTlcasXz9U93S2A6rTzN40g1wX2wK1RQYYF8Dxf%2FCY%2BtirY%2BlskCImEm2n8i6NgxZ2dNSfwxvZ4IxelplaC9APJqN81l8RLzKLE9J9aK&X-Amz-Signature=d7c05e8225a6d7aeaa6eb7ce2d14e6ffacb787fe35a83428d01653d3e73c770a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAMXHH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArR8GFfKZ1v9iP67YuKWZxI9xnYSVWcyHi68M6SeTQmAiEAsZv86mM4ckyZuaJhbY4tyd1pf6i%2B7cV%2FMJfvvZlgcQsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsgiG%2FC0fdzr%2FibRCrcA6pEJ5%2BudbvQicYRDm2Yvr67cSDxe3mrwBUouXxxmx%2FsSDo2VKRCST8sH7RZ3RVr%2BErWaD86YMvMOG8E2nKxI2UsnMctzlL09OTV7nuJ%2F%2B%2FdfhQ0SftsKk4FslOS0iyshnFEvuyRHAO1rkI5apAABGOWPlgPAMLYhLTmqFOFf7CE8XM71ZJARFn8uqwi%2BX60gTK189lpq0S3cqkmZpfy4Ua4t35%2BAbbWARQjWLomcIUczik41ruWAv9YaM2%2FDchp0H1V0zXbKDU2dx44w8MZ%2BlyvHnCBW%2F41fHmiqGp9jynwuxPMdJkt87DZsu550%2Blt1zxWvYYef1XnxV41lpARoHSWnU2gq7ERewbmE7ef5hLMVp2PuHVXGpfcKIEwLDNiomvfLp%2BevKuzq7bGgrPJNsOdurFwWNNTT5UABmSi3rEuI%2FlIA1AqNIaVVKyaXwbORiKikGgIMYrUHOSBqzssxdF0DL8DTlgT1Nf3tlOjLg60guwblEay0ZdyGEzwWDywT%2F5opa4MzpCifLYWgZTn%2B1BUhwa4jIMvw4x5oItGcvAbhIl0pujLZTwv5GDBxZ8BhxBZGS4wZripESLshqcbsXFUhATVA1KxKaREkPqPYiziF1BrSSlSOaDZy%2B9uMICgi8oGOqUBijbgvw21tAyad%2BkgTC%2FgHJErhNlpR%2FVdXvB%2Blw3%2FWHDVH8HsbTP0AT3fjQDz2o9qW%2Bx4Td0XmLKa3NThAtsnxw8h9E6FwNevszbzvCXXLYHuXEWE4sE1kTlcasXz9U93S2A6rTzN40g1wX2wK1RQYYF8Dxf%2FCY%2BtirY%2BlskCImEm2n8i6NgxZ2dNSfwxvZ4IxelplaC9APJqN81l8RLzKLE9J9aK&X-Amz-Signature=f28fc92addcca4675e63c1676bc497b7ecd1577d670ef1d70763c3491f0c3fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

