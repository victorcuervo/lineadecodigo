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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEAZ3Z4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2VFnsUitxuABaFnEXr0Y0C9ojlTkpG5rX4OcHBxs9gIhALxA1GgO5R10YoWn%2Bbi2AnNwks8y38AodmNZ%2FYMRqvoRKv8DCHMQABoMNjM3NDIzMTgzODA1IgybblIEzLtmMI5t0wkq3APGnJ2rRbGbT8IqY1YFh6kwmxH2WODVoZRrnd1ROcU0XrrnPBJrpPSsD4wu8X3kcByb2X5immQHkhLiSKT2VlxX3k7Gg4rQ7%2BremmwRVhTKJjdcwtvtlFj7tyI4nLqMOib%2BYdfeq6C%2FogS1QSMU6GirEBPDjKmbQYNBSU66e5WMXbiDIOLv4EPu5oygNVeTPylKXCBmphO4cWIFm1tsPH2qPIs%2BIXOw4mx9XqjlYF%2FWQLBHbMY0ObgqSMQsfl1hK6w4%2F%2F5QBMBseZ2p0K2ZHEBVMc8wqMKPjPDNZWP6c7SBcY7MuJq3R8QpwEK3i04mh%2Flll5htR%2B2ZTk7Cs0Kxw2Lsinc3oPPiHy6z5M%2BiIHbAE2Ko%2BdxEc5mI82tCGHOpZ2H5f8kGY9h15lILa6TkUPpOiTiWSDita6pLETOlwf3HbdQQrBRzrTbIvF0xj0YZABPm63vEitKyhstm7hqbyGMF3XuMvTvUT2z9gt7069ueYJGZfNuvWUP9KecEQKZ%2FGicr075BBH7K7NWQF1C8gI2ZkqiSo3oEJug3xfDFpCKy6GroWJnRxsvAoQIj6FF7voAVTicOnnVUVRsRFG1%2Bo0a6x58C6CpQli6cVUYpvYx0peSCKV1jebnGv%2FJVNjC0l4jKBjqkAZrkSmzkkFdUUE1MDLRtRQ3F9aKMv%2BmrmjqyRldbMXNX9YgH0JxclZuvv8%2BhX7cZKWtordIBM4fiab%2F%2BtGvzTrDyvWZEBDTiNaule5pzf1t8TOHNrKYrr67xAbWyjt2n0XLfU6hB0uecT7BWxVF88bW2tICba9H3ciSv25uuCO%2BrIi3eLCeWFSnD0KnTT2MsKMEb1JYIYV1E79YNUt1Bx1YbftAh&X-Amz-Signature=ec8324567869aff583a8bcdac74bcd5d1f9e9ffd68fb3589519408ac84cba11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEAZ3Z4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2VFnsUitxuABaFnEXr0Y0C9ojlTkpG5rX4OcHBxs9gIhALxA1GgO5R10YoWn%2Bbi2AnNwks8y38AodmNZ%2FYMRqvoRKv8DCHMQABoMNjM3NDIzMTgzODA1IgybblIEzLtmMI5t0wkq3APGnJ2rRbGbT8IqY1YFh6kwmxH2WODVoZRrnd1ROcU0XrrnPBJrpPSsD4wu8X3kcByb2X5immQHkhLiSKT2VlxX3k7Gg4rQ7%2BremmwRVhTKJjdcwtvtlFj7tyI4nLqMOib%2BYdfeq6C%2FogS1QSMU6GirEBPDjKmbQYNBSU66e5WMXbiDIOLv4EPu5oygNVeTPylKXCBmphO4cWIFm1tsPH2qPIs%2BIXOw4mx9XqjlYF%2FWQLBHbMY0ObgqSMQsfl1hK6w4%2F%2F5QBMBseZ2p0K2ZHEBVMc8wqMKPjPDNZWP6c7SBcY7MuJq3R8QpwEK3i04mh%2Flll5htR%2B2ZTk7Cs0Kxw2Lsinc3oPPiHy6z5M%2BiIHbAE2Ko%2BdxEc5mI82tCGHOpZ2H5f8kGY9h15lILa6TkUPpOiTiWSDita6pLETOlwf3HbdQQrBRzrTbIvF0xj0YZABPm63vEitKyhstm7hqbyGMF3XuMvTvUT2z9gt7069ueYJGZfNuvWUP9KecEQKZ%2FGicr075BBH7K7NWQF1C8gI2ZkqiSo3oEJug3xfDFpCKy6GroWJnRxsvAoQIj6FF7voAVTicOnnVUVRsRFG1%2Bo0a6x58C6CpQli6cVUYpvYx0peSCKV1jebnGv%2FJVNjC0l4jKBjqkAZrkSmzkkFdUUE1MDLRtRQ3F9aKMv%2BmrmjqyRldbMXNX9YgH0JxclZuvv8%2BhX7cZKWtordIBM4fiab%2F%2BtGvzTrDyvWZEBDTiNaule5pzf1t8TOHNrKYrr67xAbWyjt2n0XLfU6hB0uecT7BWxVF88bW2tICba9H3ciSv25uuCO%2BrIi3eLCeWFSnD0KnTT2MsKMEb1JYIYV1E79YNUt1Bx1YbftAh&X-Amz-Signature=59b57238b48cea975d9119e3caca71b6dc20f72b6e2fbec628bbb19a28144e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

