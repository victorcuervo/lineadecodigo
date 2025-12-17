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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMXFWDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnY7rGuTxPNWJfEsvD4M9U3kBBrxQSKCxiSOHDOQ0blAiBxyS%2Fmt1aUjMv1UtElFf81xCZSVS5uuP8ITp8yP%2BI0%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMXPk%2BO6MCVc2%2BRu3dKtwDk3cJYFJ9k90XAvf0b9ofHQpQP7tUuRzdknO%2FGHf9m1Ir%2FY7K4ysKt9r1fSTJTMhMMmZ%2ByQ9SMtZUn4bwnwB53YUjGIRbji85DJNq8Pu%2F6QmIz9gXS2oU25QHIbqP%2BMfzRk%2F6jBoYT741sBxOKqsekiIl6CjfiTG43AgoMaXrOPws3TQBmMsXLvNkSCbtlEoLxeEbdCFj%2Bm5t0FHP4kdzhmXsHpk2SPLdswt8%2B3EujLesyfnuyQMBOAGT%2BqBjSIiWC8WvZEt%2FvMcpnVRku6V3XbIahxGeAtrgZ%2BkritpitxwYgDoNHgCX55L9f1kaKmEemgL2luozqTHLwzHu6MsV0oxD6hedSgmRfxUyR6ItVuNBmuAhHOHB%2F0W9c5H%2FXpV%2FMiHrrWanjHlCRdinexp4eXeuwJva9MdJD8lfypO1bVZ%2FQhs%2BPX9HMNiBHbUNFoI2wYi6AQLBvr39Wts9oOp4kBZQXNXbbZUdWdz%2BLIoLNaWRDlPSSU%2F3HqgQvDo0exqo%2BhPj%2F%2FUc4kGZk21FM2Gml3IfBCtaiLjrVvcjI8wOOxfqttbvTPjK1fs6sq6%2Fz3WGepqxT5cV3yWKlTMq5GIPI0EuO8S2BcbzNv%2F4YgU99Y7YjeD6hRBXR3aa3bQwqtKJygY6pgEiFckXJvFBsIfreixfPmV3pYIRByfu7MMFcHBM%2B8pDd5%2Bk41p4z4UyKPmBfy2fuXYhJO3ijl4hx%2BQnrNbnsbgrXwCyevEwNI2Px8pX8CoF73smvAOcswHaZbjr6vExJ0JPebCrowclpbqy0tyXGIR0XYzWh6APS6Hih1ogA9Qb6EpB5%2FixMnOc71MoI8SgzHnhA4VAengLpDNWSqQzETS5RJ3LcDCw&X-Amz-Signature=08dd0c6b7b9a21ff58773ddfb78dcf53353c54553131546ddc1f86b89ac71483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CMXFWDR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnY7rGuTxPNWJfEsvD4M9U3kBBrxQSKCxiSOHDOQ0blAiBxyS%2Fmt1aUjMv1UtElFf81xCZSVS5uuP8ITp8yP%2BI0%2BCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMXPk%2BO6MCVc2%2BRu3dKtwDk3cJYFJ9k90XAvf0b9ofHQpQP7tUuRzdknO%2FGHf9m1Ir%2FY7K4ysKt9r1fSTJTMhMMmZ%2ByQ9SMtZUn4bwnwB53YUjGIRbji85DJNq8Pu%2F6QmIz9gXS2oU25QHIbqP%2BMfzRk%2F6jBoYT741sBxOKqsekiIl6CjfiTG43AgoMaXrOPws3TQBmMsXLvNkSCbtlEoLxeEbdCFj%2Bm5t0FHP4kdzhmXsHpk2SPLdswt8%2B3EujLesyfnuyQMBOAGT%2BqBjSIiWC8WvZEt%2FvMcpnVRku6V3XbIahxGeAtrgZ%2BkritpitxwYgDoNHgCX55L9f1kaKmEemgL2luozqTHLwzHu6MsV0oxD6hedSgmRfxUyR6ItVuNBmuAhHOHB%2F0W9c5H%2FXpV%2FMiHrrWanjHlCRdinexp4eXeuwJva9MdJD8lfypO1bVZ%2FQhs%2BPX9HMNiBHbUNFoI2wYi6AQLBvr39Wts9oOp4kBZQXNXbbZUdWdz%2BLIoLNaWRDlPSSU%2F3HqgQvDo0exqo%2BhPj%2F%2FUc4kGZk21FM2Gml3IfBCtaiLjrVvcjI8wOOxfqttbvTPjK1fs6sq6%2Fz3WGepqxT5cV3yWKlTMq5GIPI0EuO8S2BcbzNv%2F4YgU99Y7YjeD6hRBXR3aa3bQwqtKJygY6pgEiFckXJvFBsIfreixfPmV3pYIRByfu7MMFcHBM%2B8pDd5%2Bk41p4z4UyKPmBfy2fuXYhJO3ijl4hx%2BQnrNbnsbgrXwCyevEwNI2Px8pX8CoF73smvAOcswHaZbjr6vExJ0JPebCrowclpbqy0tyXGIR0XYzWh6APS6Hih1ogA9Qb6EpB5%2FixMnOc71MoI8SgzHnhA4VAengLpDNWSqQzETS5RJ3LcDCw&X-Amz-Signature=7f7f49f49dd79744a84c5e4d90d490c50138a8e7d5a08c8ff3e73ce52e42f9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

