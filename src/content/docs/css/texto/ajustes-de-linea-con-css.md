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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUQCE3W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseFQmcVbP%2FuLbQc5QAdjJdU%2Bt7A5pYMsyojUk9nHpTAiEA66gfEHbxI21ZdUdlCNsMV49S9wOa208DpQXhe9e%2FWAQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDN5VBnZC1812DKL5JyrcAxKf33WEi6KoVifT4KR%2Fc0Wg6YE3Kd9teNGLQO62zJ6cwyqZGUeTz6nUE0u8nSNpZeFI%2FNzeGtLyeH%2BXGGRkYK8Nlz2qn4LwhrMfFp%2FwfzAPAt8DRcTzQH8NFATDuUCJ7nJ6q1d%2FWxTUlnoIntRTiTo7cepNa9k%2BnAc3lnd6kDNthLbvd8S222phT6U72eUlBE8PCjCHUG5rzfwf5wFkAhVQCaM7U1MGOM16j6W0mSX4k06ADJMN2yeDHkuUJk81hYDPSL9%2FtjZ7hi4K3R5Vichtt%2B6SdjcjUW%2F8AJ%2FHJkNJq55Fxj%2FpCSJEeojZwxPYaemrDRN1Vr%2BwFu%2BJ9Ddi04VGPkSD3%2BMJAS78yl7Jt%2BQ%2BTU8zHP0Y7Xg3kWl49K%2F8lvZPFHlEjVEuBI34qRhrTRMgXV5A%2B18MojGujfdiTYMiL%2BK3JMx38bGAenC%2FQSdDcA4eYEdj%2F%2Blvx59uROZ1X%2BBWAHY9H%2BoI3EY1Y%2FpJVw7K08UjK58lvj1%2BInQernmnOQEIbBL9ogrBKw096MVeWPv1XQ9PZyNfB9EKbUCHDTYKndxv9TZf6EmJ2LziPW7oUY9g6RBairJTBrQi1afj569cgPrRkhsbGV2c14krYxcm%2Fz%2BWvVe4dAmtMtzPMODpiMoGOqUB9Ftl0bRT0Ucr8IxvRYHfTApl%2FLLFNVoHjmiJ8rj5RlbKRQ6a7SpFZlkN8fay1XTqpakNd%2BfTIcq92zp8R14xmqCQd%2Bkf%2FdZK8OHrXpYsj2cD5S1A1e5lD4fkN2%2Fqm3DLA%2ByUKaRAQClRlGJi%2B2QGf9H9cJG9z%2FtT1LGs8GarHaSeayil4XE6qip9uCXwJyVA1MUZeRGsaiFtlRPuyiUGshXGhyOg&X-Amz-Signature=ca763ec4ac106ebc0b454f8fef3c386b1b150ae3c964a1360aadfb3adabc7b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNUQCE3W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseFQmcVbP%2FuLbQc5QAdjJdU%2Bt7A5pYMsyojUk9nHpTAiEA66gfEHbxI21ZdUdlCNsMV49S9wOa208DpQXhe9e%2FWAQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDN5VBnZC1812DKL5JyrcAxKf33WEi6KoVifT4KR%2Fc0Wg6YE3Kd9teNGLQO62zJ6cwyqZGUeTz6nUE0u8nSNpZeFI%2FNzeGtLyeH%2BXGGRkYK8Nlz2qn4LwhrMfFp%2FwfzAPAt8DRcTzQH8NFATDuUCJ7nJ6q1d%2FWxTUlnoIntRTiTo7cepNa9k%2BnAc3lnd6kDNthLbvd8S222phT6U72eUlBE8PCjCHUG5rzfwf5wFkAhVQCaM7U1MGOM16j6W0mSX4k06ADJMN2yeDHkuUJk81hYDPSL9%2FtjZ7hi4K3R5Vichtt%2B6SdjcjUW%2F8AJ%2FHJkNJq55Fxj%2FpCSJEeojZwxPYaemrDRN1Vr%2BwFu%2BJ9Ddi04VGPkSD3%2BMJAS78yl7Jt%2BQ%2BTU8zHP0Y7Xg3kWl49K%2F8lvZPFHlEjVEuBI34qRhrTRMgXV5A%2B18MojGujfdiTYMiL%2BK3JMx38bGAenC%2FQSdDcA4eYEdj%2F%2Blvx59uROZ1X%2BBWAHY9H%2BoI3EY1Y%2FpJVw7K08UjK58lvj1%2BInQernmnOQEIbBL9ogrBKw096MVeWPv1XQ9PZyNfB9EKbUCHDTYKndxv9TZf6EmJ2LziPW7oUY9g6RBairJTBrQi1afj569cgPrRkhsbGV2c14krYxcm%2Fz%2BWvVe4dAmtMtzPMODpiMoGOqUB9Ftl0bRT0Ucr8IxvRYHfTApl%2FLLFNVoHjmiJ8rj5RlbKRQ6a7SpFZlkN8fay1XTqpakNd%2BfTIcq92zp8R14xmqCQd%2Bkf%2FdZK8OHrXpYsj2cD5S1A1e5lD4fkN2%2Fqm3DLA%2ByUKaRAQClRlGJi%2B2QGf9H9cJG9z%2FtT1LGs8GarHaSeayil4XE6qip9uCXwJyVA1MUZeRGsaiFtlRPuyiUGshXGhyOg&X-Amz-Signature=2e62b380e6ef120d498853be2bbd56d7b79c8b5b4d99aa55758292e3a294726b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

