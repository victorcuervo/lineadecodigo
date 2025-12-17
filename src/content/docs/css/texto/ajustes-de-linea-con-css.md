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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALK3U3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi%2Bh7kji9Br1iw3MLZLcTvnfL4rUWrJUyFYN38s%2FOckAiEAwYWMc5M1X4VB4AeLl0H8nf%2ByytwGVKoUoVQZ%2B7stVSwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMohLjLM79yzshWSrSrcA7a7dUJmTf5HqxnAygp1XSpdHP9qIyyT2cYpF6eeSU7PRzSrgRghkNRz7x0mD5aF2QlOJaNtk4%2Fv11kxmxr5JsSyvHeOsGxakXOH1ELNEWf3NftWLBbJtbCKZmmWdfHY2munphdFa0vfHgxwAFA2TDqRDrN4HEbHeUR3Sxgo6c%2FFj82Y59JBgEfbuYX4AyrSqOagIjh%2BxthL3vdtv0CuE66F7dSn%2FUN0c%2FiFeEmIlKRuwOb4jlEUddC2pDR%2BD7FbV9zCYx5DsORrOgBmb3TNO%2BY48KHBbalv%2B%2BzDvy%2FVCLgLomt080eBEpRjAskr0LLt4ppoqrchrjWXn4t4vzZgIAjwPjSyDNPGRxnfP62Een8%2FeL8TryyZ7mgxm7kPFkfucBQarrX2FxWifEV6e7omsklXXrjQaqZfKE9MriFy6oWHWsri8JB06faUC8jdZMo7KrFYNI3GO93Urv3fFXbax75G8G7gOVkvSHML3q8384oib1CPcDgdLWRzdkAOH8UQ3%2ByWCe1hjKunttQlgYOJvmXgzZS5536Fecn66%2BQEsJUWYEaXpyWS5NnAgP9mWSL8p0mElp7gtd5iyq631nL0es6cXlulj7WrJH3SwQICCNNrILwY7fV4UwOcxI86MIOgi8oGOqUBZwDu3fjwonDF1M8ZV2JTuXOXJAAhSsZPCADIJ9IO1qKYKkABkcu4O0XTuxSgmNLv1%2F2%2BY2sigmfmH8ARTA1oJemLuAa3wFHPAjB4i%2FP9obDBUorYBDQSCCOEpii7wjYDF4scth6V9LOUQG5zOvwTXLHbsGuFiIzvhSdTZ27tRz4o7J%2FA16wXrjIF5iicksjPS8OnexAEXbK13QoPN2iSaU%2BTLkSq&X-Amz-Signature=c04a976a4492b77d7baf4cec957b75de84750b61103f1407e27bb0319da3a4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALK3U3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi%2Bh7kji9Br1iw3MLZLcTvnfL4rUWrJUyFYN38s%2FOckAiEAwYWMc5M1X4VB4AeLl0H8nf%2ByytwGVKoUoVQZ%2B7stVSwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMohLjLM79yzshWSrSrcA7a7dUJmTf5HqxnAygp1XSpdHP9qIyyT2cYpF6eeSU7PRzSrgRghkNRz7x0mD5aF2QlOJaNtk4%2Fv11kxmxr5JsSyvHeOsGxakXOH1ELNEWf3NftWLBbJtbCKZmmWdfHY2munphdFa0vfHgxwAFA2TDqRDrN4HEbHeUR3Sxgo6c%2FFj82Y59JBgEfbuYX4AyrSqOagIjh%2BxthL3vdtv0CuE66F7dSn%2FUN0c%2FiFeEmIlKRuwOb4jlEUddC2pDR%2BD7FbV9zCYx5DsORrOgBmb3TNO%2BY48KHBbalv%2B%2BzDvy%2FVCLgLomt080eBEpRjAskr0LLt4ppoqrchrjWXn4t4vzZgIAjwPjSyDNPGRxnfP62Een8%2FeL8TryyZ7mgxm7kPFkfucBQarrX2FxWifEV6e7omsklXXrjQaqZfKE9MriFy6oWHWsri8JB06faUC8jdZMo7KrFYNI3GO93Urv3fFXbax75G8G7gOVkvSHML3q8384oib1CPcDgdLWRzdkAOH8UQ3%2ByWCe1hjKunttQlgYOJvmXgzZS5536Fecn66%2BQEsJUWYEaXpyWS5NnAgP9mWSL8p0mElp7gtd5iyq631nL0es6cXlulj7WrJH3SwQICCNNrILwY7fV4UwOcxI86MIOgi8oGOqUBZwDu3fjwonDF1M8ZV2JTuXOXJAAhSsZPCADIJ9IO1qKYKkABkcu4O0XTuxSgmNLv1%2F2%2BY2sigmfmH8ARTA1oJemLuAa3wFHPAjB4i%2FP9obDBUorYBDQSCCOEpii7wjYDF4scth6V9LOUQG5zOvwTXLHbsGuFiIzvhSdTZ27tRz4o7J%2FA16wXrjIF5iicksjPS8OnexAEXbK13QoPN2iSaU%2BTLkSq&X-Amz-Signature=6ab62cfa179b7fab72183831e0c785b8eb51cb62e390c22a2b866e6fd538caf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

