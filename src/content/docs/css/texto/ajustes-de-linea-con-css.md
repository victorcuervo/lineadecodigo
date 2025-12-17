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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVT6OTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUL5%2BZAHWSP5yAfodcSEMoux%2FnOZjTXrpHr%2FE63AJ7WAiAKOs57eorI5nb24HcFqY7mAcPHCI674bVWnSuuF8%2FaHSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjZwFmjB6LyDqxN3wKtwD%2BZSoG6uvVyAu%2F4JXDIgp0CkA4HAPOkQ6qJiEIPeSicThXegJ1%2FhtTnrGtFnbzjwXhsuUeNSzf3n1Y0XNL91vMGbOCd84Yy9VApWH70CqGJEmoA5X%2F6%2B9VxIilv93Qr6596PODJsCMmm9FxyWq1bdPLgf7Nwga2wedrzXr5K8QmPmcJEGrsF63S3pWBo%2BRLPnrnPQMQwGqWzW%2BLZ03boZOB8QlzbNjrL0YynqYB3drapdK5tQo72B%2FonVf%2BxM2o2EYy6bDbwLLDgZ0esHStzwgW6rMIIWZ2xeQ0kY0zdWJYEoCcFPB7abqlnSPHzTfkcfa86PgRFG7933jH5iDDHt%2BL%2FhzcXy2f00kV1pw%2FEQ0XVpSA5p8X9q1aXjy9258KtTiAB6Rze4u%2BWs8kLAJaFZwGmLOARpVOIXmI8NCs86RAv5eboeERC9xqaXmOAB9EWzQoJhhcTPs3lR39uqaCStV%2BFZ2DAyMlUY%2BlYMHf0XrC98JdjARdsdQmPXIJasTcuuMbuHz1XCfwq1%2FVX5Av3zcVUvs62cj9PwpTIAUjdumIbrV91kjz0zBey%2FiHH4LCRw2sZPfc5Qbme0t6NVMY5tCfJKWrkxgEyR8U0i0O3GrrsL9xBIuQenlYMdh9owy8WKygY6pgHss2aCQPV5KygKXrVvvs5A1fQGhw8IAfdNOjpiiXG29Eu53IoRHYwAthnpzzX60Y2ssU0v3jCLGvE9G7iZscgqIBT6fmRlTv8HuYMgl4RDCJ0PyALCo%2BsDav2li%2BRPlwP6Wnxfa4oTtYkwLO2XfnQOXGojnXgP%2FJCQAiK35asxDIXGLnV8zP46e%2BA1TcT9Kb7DxZKObZBfHKV0Adzf1kZ74fWxdl8v&X-Amz-Signature=93109ea7ae60c1e818aa32e7a493d62fe6288e54f2b2ee8d8c3d700136e8aae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVT6OTM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUL5%2BZAHWSP5yAfodcSEMoux%2FnOZjTXrpHr%2FE63AJ7WAiAKOs57eorI5nb24HcFqY7mAcPHCI674bVWnSuuF8%2FaHSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjZwFmjB6LyDqxN3wKtwD%2BZSoG6uvVyAu%2F4JXDIgp0CkA4HAPOkQ6qJiEIPeSicThXegJ1%2FhtTnrGtFnbzjwXhsuUeNSzf3n1Y0XNL91vMGbOCd84Yy9VApWH70CqGJEmoA5X%2F6%2B9VxIilv93Qr6596PODJsCMmm9FxyWq1bdPLgf7Nwga2wedrzXr5K8QmPmcJEGrsF63S3pWBo%2BRLPnrnPQMQwGqWzW%2BLZ03boZOB8QlzbNjrL0YynqYB3drapdK5tQo72B%2FonVf%2BxM2o2EYy6bDbwLLDgZ0esHStzwgW6rMIIWZ2xeQ0kY0zdWJYEoCcFPB7abqlnSPHzTfkcfa86PgRFG7933jH5iDDHt%2BL%2FhzcXy2f00kV1pw%2FEQ0XVpSA5p8X9q1aXjy9258KtTiAB6Rze4u%2BWs8kLAJaFZwGmLOARpVOIXmI8NCs86RAv5eboeERC9xqaXmOAB9EWzQoJhhcTPs3lR39uqaCStV%2BFZ2DAyMlUY%2BlYMHf0XrC98JdjARdsdQmPXIJasTcuuMbuHz1XCfwq1%2FVX5Av3zcVUvs62cj9PwpTIAUjdumIbrV91kjz0zBey%2FiHH4LCRw2sZPfc5Qbme0t6NVMY5tCfJKWrkxgEyR8U0i0O3GrrsL9xBIuQenlYMdh9owy8WKygY6pgHss2aCQPV5KygKXrVvvs5A1fQGhw8IAfdNOjpiiXG29Eu53IoRHYwAthnpzzX60Y2ssU0v3jCLGvE9G7iZscgqIBT6fmRlTv8HuYMgl4RDCJ0PyALCo%2BsDav2li%2BRPlwP6Wnxfa4oTtYkwLO2XfnQOXGojnXgP%2FJCQAiK35asxDIXGLnV8zP46e%2BA1TcT9Kb7DxZKObZBfHKV0Adzf1kZ74fWxdl8v&X-Amz-Signature=37736a9073750ec4ce46b179ab7620de3aee3b73d5eeb112e95ed45bc66fab82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

