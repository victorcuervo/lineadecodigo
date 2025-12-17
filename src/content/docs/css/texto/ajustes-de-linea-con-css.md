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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO2FTIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVH%2BwsX2Xk56pXmdvSfjFv9hms5zj8kPw16TFKRxp%2FTAiAMD1eQ8DdfnZKMua7ObHBnv8HzYjqtCu8JqjKYsekhOSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fkmbeq5q5ds9II3oKtwDhLP6LMF9SbHnMrSnt9aouP%2FRRUkAu43VBRRR0DTqRnXDO6VlXT3%2BmYNI5IquGmsx8rL5EsK1JUdE6fJsKB97gC6UMQJSVUejo5csmxwffAOeaX1j2QOv7wNJUOzAIdueyJrKpDWPhDCsVInAnpldMvZ8pc3KrHzTu%2BWegoDo0uTf5Xt5x8HLAY8KfhIqarFaio2Hd3IfjQqEz%2F8ChIcW9jx69N9qU7NbokoAtZgl5rCMpTZF5V0NhvLjtDL1wZb55r0buv%2BycCrfjn%2BUuCRSy0o%2FRsLQ%2FB3M%2FxA8jFodae7VxLHnDfRvkGKqbKdhgkPMcaJYF0VZeAXd548Hbpm77yokRlSVpDIcIcbRSWMpIlEAcZAFgs9f8KHKl63N6Nev66cg7Hz28JJxqShhAnre4B2eEMQrAbdIUnMYKFgdY1AVkFprgv5bAZcBUSx4LgI4KDHFdjSSfhVUZxNfsIOWuPFQsidxNhJHJOJITwrs3oE7URv4ujensm0Uqm%2FtfU9Sv3ev4oTzt3PWp%2BHYWLTpevzzdGRH92TWONCEIJxYfoDwILvU5VpteXmlwyoJHjLSzsQRVuT%2B4NCWT8xOvOxO95igyST8QtV0u81AC79LD0LVj71P39xJlxZfP9kwoKCLygY6pgGbjTkHmzWvgd2v3R9QdIKC23%2FIZIp%2B6itfwkk0z3iHctMPD8z3V9OkW5j2VpR252ZaqT9Nzd1g5kM3hmfHFP2AZiNUpzFrtKAPV3c0TeqZ6V3UmRHqLdY6qp%2BX96fP4%2FcjE951ntXFabLgd%2BoJS4wkZp2sfF%2BXiFjagHxZUjEb6IjD8Ln87hHOvKV%2FFsGBRkQ%2FDkf37fmk5Q9YENC5J%2BathkCNjUF4&X-Amz-Signature=c7daa43b3e14413712fcc3292bb17a3cd40c2aeddbe87a5b1dfbb2e16dcd2f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAO2FTIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVH%2BwsX2Xk56pXmdvSfjFv9hms5zj8kPw16TFKRxp%2FTAiAMD1eQ8DdfnZKMua7ObHBnv8HzYjqtCu8JqjKYsekhOSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fkmbeq5q5ds9II3oKtwDhLP6LMF9SbHnMrSnt9aouP%2FRRUkAu43VBRRR0DTqRnXDO6VlXT3%2BmYNI5IquGmsx8rL5EsK1JUdE6fJsKB97gC6UMQJSVUejo5csmxwffAOeaX1j2QOv7wNJUOzAIdueyJrKpDWPhDCsVInAnpldMvZ8pc3KrHzTu%2BWegoDo0uTf5Xt5x8HLAY8KfhIqarFaio2Hd3IfjQqEz%2F8ChIcW9jx69N9qU7NbokoAtZgl5rCMpTZF5V0NhvLjtDL1wZb55r0buv%2BycCrfjn%2BUuCRSy0o%2FRsLQ%2FB3M%2FxA8jFodae7VxLHnDfRvkGKqbKdhgkPMcaJYF0VZeAXd548Hbpm77yokRlSVpDIcIcbRSWMpIlEAcZAFgs9f8KHKl63N6Nev66cg7Hz28JJxqShhAnre4B2eEMQrAbdIUnMYKFgdY1AVkFprgv5bAZcBUSx4LgI4KDHFdjSSfhVUZxNfsIOWuPFQsidxNhJHJOJITwrs3oE7URv4ujensm0Uqm%2FtfU9Sv3ev4oTzt3PWp%2BHYWLTpevzzdGRH92TWONCEIJxYfoDwILvU5VpteXmlwyoJHjLSzsQRVuT%2B4NCWT8xOvOxO95igyST8QtV0u81AC79LD0LVj71P39xJlxZfP9kwoKCLygY6pgGbjTkHmzWvgd2v3R9QdIKC23%2FIZIp%2B6itfwkk0z3iHctMPD8z3V9OkW5j2VpR252ZaqT9Nzd1g5kM3hmfHFP2AZiNUpzFrtKAPV3c0TeqZ6V3UmRHqLdY6qp%2BX96fP4%2FcjE951ntXFabLgd%2BoJS4wkZp2sfF%2BXiFjagHxZUjEb6IjD8Ln87hHOvKV%2FFsGBRkQ%2FDkf37fmk5Q9YENC5J%2BathkCNjUF4&X-Amz-Signature=b594e622c86d841e547f59cf05d6574970e8ddda37ddb07b0f0e921085b20582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

