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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY53LUWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYg7aCL8Ax0nHHz8QlQgdpBstZQp%2BvWLjPUVRko%2FucPAiEAy27msQ8ltoILQIgCDhCUWNdRf3M%2Bh6Nah6CjVIXE3Pwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGysE8mc2131r8yGMyrcA6XTzeIVLO9QPk9UPbw1ecCZ4MJyhNaAD7wsXuQx6kHOVC357v2AM3wim00V2Pk9SKHHK0k%2F84qWlJn9I6Lxxe2X%2BGspOenOlhCYWhuJbXBP7AjumedGq61GcliIKkFgQ3GtcuS2ZWmtcPyM0D5lrcKrhZifiYYKSPxVngZgX9REiU8Mr%2FCedSsar8A9R75QpTGe%2F%2B7HDF1B6xL9%2BYtoFTRCGCqSYfSQcBsvNyRy896uqqyUPZy1bDnuLNIgF3pFIpHpdrjuggSiXPEoC%2B1C2HZwPxdO799IbKaG7xzJkTQiqGwAlr3A4ruteUz3R5GNPSa%2FufN7FGqroMVn3wWRoMVR1eIAn%2FNju96wiD953SGOUFwNplKvGBH8X6lFILuRTSoHafH4fOXb3hBsxZC72IkcWrq1%2BIrjk1BHlX3Fm4MtMhLGIYh%2BYjJgvkcP1AFi%2FOWN9dPzK6IfSHdNxcQlBhmqipND%2F9rCDiYJig7NMvDa4e8U8T8yV0yLZMCbA4mvVRoC4sODs%2Ba1LTuxmsueZQX6yAsuCoX0XhkiLVOgPWXtlm5JOKyTdXVIHOZ0LIPf2y3SVQgW6zk7mGkzNruHtR2T%2F2UpjKzAgb%2BVf7qRu0o49kl5XYWXb68T3mKTMIW4icoGOqUB1X5EEX9Pybo8pthSsPGGQXLl9IyEyqAhaXD30kG%2FciE7aIUYqxuigbfgzfCUZu1VnD2dCPt%2FrkGB52aaO2NiysRDR3OjH1fagSkGBK3TYbordQVJX2LbI3p13WxYFel%2BOOPyB%2BjHtSir36tRZ8Teeo7wC3xcr5oCdiaa0CQ4Lu%2Fzur3ztoTTn0jS3T%2BIURJEiK3vnkHqbDtd7eDsH01LHgCRt4GB&X-Amz-Signature=5e45644a24026cdb785e75d1f81e00d9dc08204d3b0fdfe66c6c644e0630a28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY53LUWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYg7aCL8Ax0nHHz8QlQgdpBstZQp%2BvWLjPUVRko%2FucPAiEAy27msQ8ltoILQIgCDhCUWNdRf3M%2Bh6Nah6CjVIXE3Pwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGysE8mc2131r8yGMyrcA6XTzeIVLO9QPk9UPbw1ecCZ4MJyhNaAD7wsXuQx6kHOVC357v2AM3wim00V2Pk9SKHHK0k%2F84qWlJn9I6Lxxe2X%2BGspOenOlhCYWhuJbXBP7AjumedGq61GcliIKkFgQ3GtcuS2ZWmtcPyM0D5lrcKrhZifiYYKSPxVngZgX9REiU8Mr%2FCedSsar8A9R75QpTGe%2F%2B7HDF1B6xL9%2BYtoFTRCGCqSYfSQcBsvNyRy896uqqyUPZy1bDnuLNIgF3pFIpHpdrjuggSiXPEoC%2B1C2HZwPxdO799IbKaG7xzJkTQiqGwAlr3A4ruteUz3R5GNPSa%2FufN7FGqroMVn3wWRoMVR1eIAn%2FNju96wiD953SGOUFwNplKvGBH8X6lFILuRTSoHafH4fOXb3hBsxZC72IkcWrq1%2BIrjk1BHlX3Fm4MtMhLGIYh%2BYjJgvkcP1AFi%2FOWN9dPzK6IfSHdNxcQlBhmqipND%2F9rCDiYJig7NMvDa4e8U8T8yV0yLZMCbA4mvVRoC4sODs%2Ba1LTuxmsueZQX6yAsuCoX0XhkiLVOgPWXtlm5JOKyTdXVIHOZ0LIPf2y3SVQgW6zk7mGkzNruHtR2T%2F2UpjKzAgb%2BVf7qRu0o49kl5XYWXb68T3mKTMIW4icoGOqUB1X5EEX9Pybo8pthSsPGGQXLl9IyEyqAhaXD30kG%2FciE7aIUYqxuigbfgzfCUZu1VnD2dCPt%2FrkGB52aaO2NiysRDR3OjH1fagSkGBK3TYbordQVJX2LbI3p13WxYFel%2BOOPyB%2BjHtSir36tRZ8Teeo7wC3xcr5oCdiaa0CQ4Lu%2Fzur3ztoTTn0jS3T%2BIURJEiK3vnkHqbDtd7eDsH01LHgCRt4GB&X-Amz-Signature=7dcfdac780ec0e16cd4c2075f81dcdee37153fd5fa6ea144f4a32b64a8bf7afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

