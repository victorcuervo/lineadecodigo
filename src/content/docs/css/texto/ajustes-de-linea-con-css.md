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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXKSGHCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7sRS3%2Bsc9r3iqn%2FhtXjL0uA7TWn0BouZvVrrmz7dMAIhAP8OY6B8q7UfVWCnZDIrdck6eEw%2Bq%2FtKOqQQQdE9Lx0MKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8241Pt5G%2FZebP6zAq3AMEVcq5OvCIZqRFkMHENLy0KcML8NVoMSpgU%2FOzRrv7vLE9Nanep7%2FJ5s4i%2B45CKnR7BKxXlpJSqGwvHSluG%2FTgcTu7nhL%2Btcd9bUCZ0E10udMDbu9cl3Cxt6W7WKxT5UGxfzk3CHCBtg0YvSHCTykjZnTMp%2B%2B9LZj5zfQoEYrI5OVqY1lCumxGTq55wLkRMuFyxy7kzom%2Bx10douZdHrj71c5iGJrtDee%2FwiYrAdYcDS7k0C6Vet5JcNFG1OIksibpSqO376lXn%2FoQKmu8fTob2I4SLUdQITx1tPUURiwNhxJ49eQVZUZ7cCjYfLNrIN5XWeK%2BwXd9GOat66XasuNrsqzelPxh2q6QXHqkguzKO3d6FWCYK%2FjzuQsWCM8a5n%2Bt03IqKGhW4Q2v8cOlhpI0WlvVW%2FhvFpsxCgHshM3VKc2O0oXiqL4OBwl2ulwGRyq1mJhm7RHpDEVgVVV1gz1Pysm2Evb0VeWJDd4LAt9F71lJtdgakwA1Xp18Il3NShVyanvjGEgQ480JJ1ZQ0Qx5%2BGg99VOom%2F4DccEyouPoSRw9AeaOdHqdG8sfIzAXm46ECimYG0hEGMsANWnYNczuIXnFpuqJMnK6Wq9dhC2dFtlUwb9kV7zevrnSyzDIn4vKBjqkAWbigcYAsxar23D2mv2WbtE0z%2BqPp07j2zQa9PTKHSFPlJQUVHXu0Kq5rcMuTZ6Rw2EXDoyxP6QYSgNpngCI57fDaGr2WgxPbYzALWyno58eJSKc%2FzJBmMb8bKHuU0%2BjmBQI8Bj0fEMdLu5qiXA2il71X48jKfd1htC%2FcPC%2F9Gb5PNpBu1pRiGWg6Modc5tgYBTZv8HRSgV%2FW2dTPQwlM7FxUZa2&X-Amz-Signature=1f5b3b6ea8a2cede49190fd528c33c932feb53fbba771cb8b75966d2c335336a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXKSGHCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL7sRS3%2Bsc9r3iqn%2FhtXjL0uA7TWn0BouZvVrrmz7dMAIhAP8OY6B8q7UfVWCnZDIrdck6eEw%2Bq%2FtKOqQQQdE9Lx0MKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8241Pt5G%2FZebP6zAq3AMEVcq5OvCIZqRFkMHENLy0KcML8NVoMSpgU%2FOzRrv7vLE9Nanep7%2FJ5s4i%2B45CKnR7BKxXlpJSqGwvHSluG%2FTgcTu7nhL%2Btcd9bUCZ0E10udMDbu9cl3Cxt6W7WKxT5UGxfzk3CHCBtg0YvSHCTykjZnTMp%2B%2B9LZj5zfQoEYrI5OVqY1lCumxGTq55wLkRMuFyxy7kzom%2Bx10douZdHrj71c5iGJrtDee%2FwiYrAdYcDS7k0C6Vet5JcNFG1OIksibpSqO376lXn%2FoQKmu8fTob2I4SLUdQITx1tPUURiwNhxJ49eQVZUZ7cCjYfLNrIN5XWeK%2BwXd9GOat66XasuNrsqzelPxh2q6QXHqkguzKO3d6FWCYK%2FjzuQsWCM8a5n%2Bt03IqKGhW4Q2v8cOlhpI0WlvVW%2FhvFpsxCgHshM3VKc2O0oXiqL4OBwl2ulwGRyq1mJhm7RHpDEVgVVV1gz1Pysm2Evb0VeWJDd4LAt9F71lJtdgakwA1Xp18Il3NShVyanvjGEgQ480JJ1ZQ0Qx5%2BGg99VOom%2F4DccEyouPoSRw9AeaOdHqdG8sfIzAXm46ECimYG0hEGMsANWnYNczuIXnFpuqJMnK6Wq9dhC2dFtlUwb9kV7zevrnSyzDIn4vKBjqkAWbigcYAsxar23D2mv2WbtE0z%2BqPp07j2zQa9PTKHSFPlJQUVHXu0Kq5rcMuTZ6Rw2EXDoyxP6QYSgNpngCI57fDaGr2WgxPbYzALWyno58eJSKc%2FzJBmMb8bKHuU0%2BjmBQI8Bj0fEMdLu5qiXA2il71X48jKfd1htC%2FcPC%2F9Gb5PNpBu1pRiGWg6Modc5tgYBTZv8HRSgV%2FW2dTPQwlM7FxUZa2&X-Amz-Signature=2babd44ba122bd7398f10294b3fd4057863b8dcc6c33b2ed9187a8f4e4bb9e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

