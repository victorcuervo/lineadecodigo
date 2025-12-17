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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZU4EAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEP385sXZxY0l4mVKbo%2F9S%2FuhsNz%2FID8FOcpiDYN%2F5gIhAMiNXQdCf2D6Q9m%2Bd8qqyePjQbPMmqtQx96ZqfJC47DPKv8DCHgQABoMNjM3NDIzMTgzODA1IgxUaLQ7qLdI8GSgsmgq3AMIdGx0nLBKhnNVMdMRxpj205EDFlj37Y0rIrJCaO2HStUVi9jDDQXrfhz5KO7RNVeEwN3lBCBp95zgw93SOEz4qYcuuBCY3bPVqWYb1DhKJPvijMMVH6ELKl9jJP8EZq4oOF6F%2BbrDuXAn8T8w77nPfdr0bpjMAVHrKL1qRNWsoD7T0sA5WwsQ7sN0oOcwIJVReDuovnKuyXngn7SDM6Vn1%2B6Qry%2FalqBmOWroSztSJlRsFJ%2BnFKWnZDUT9AYPZXMvxQOmZ%2BWyEBw671JMEPB3mChRSs8GJ1qvaatv%2BEVUP0XCKC4RZ09aPO24Z4QfCn02YzPCenBC5ifWc5heG95ynhrJXglCYH5wAfX%2BVegyNsV17DZXKDTlgC71XABvS2DbNMBs4322l1FSz1p37eN%2FbH7%2BbKrdE5jTRhhjdAUd3y168u7%2Frkhdzo%2Bt%2FxvzwH4k4m5socPccqDBD4Tcun5M%2FrcNGEBfjpHSD3OGW8DDJzAcIoo7AAFJxhfq6LC7QW0umRn4zsMZcSBheknG1ixBX5iFlpTl3%2BdBNbf6SbS3Xl3JE42f9EsgCuk2mE8E4jggo0cPdcWjGXSG11cwQfs8cc19wQZbNso9zvTSWHnhJyswQZuWR9x3M9EdlzDgnYnKBjqkAYIj88ngY%2F8hcsyK3KHvY7WTYbVYbp27yXMCdRfLR%2F%2FtYWQJWBYUaO5IraIHHWYXtdVqR9Oc3ylUvmrmUvD9v7HAYkBWE68pDAwYwKrEwVauUkvoiipEAKzNFt%2FJvLJ45w2iy0qczjxTDy%2FhXttSA03VRg0lNrQ1bWoZhQMEjEFTmdylDNpPGABDAk5hiH6CJv4ALP7LdhrVOtprfDcQifmT0W%2Fq&X-Amz-Signature=619a7edb7ac13ee795752a59ad34e328648e5070c5f85a805fe0b0a928096ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZU4EAM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEP385sXZxY0l4mVKbo%2F9S%2FuhsNz%2FID8FOcpiDYN%2F5gIhAMiNXQdCf2D6Q9m%2Bd8qqyePjQbPMmqtQx96ZqfJC47DPKv8DCHgQABoMNjM3NDIzMTgzODA1IgxUaLQ7qLdI8GSgsmgq3AMIdGx0nLBKhnNVMdMRxpj205EDFlj37Y0rIrJCaO2HStUVi9jDDQXrfhz5KO7RNVeEwN3lBCBp95zgw93SOEz4qYcuuBCY3bPVqWYb1DhKJPvijMMVH6ELKl9jJP8EZq4oOF6F%2BbrDuXAn8T8w77nPfdr0bpjMAVHrKL1qRNWsoD7T0sA5WwsQ7sN0oOcwIJVReDuovnKuyXngn7SDM6Vn1%2B6Qry%2FalqBmOWroSztSJlRsFJ%2BnFKWnZDUT9AYPZXMvxQOmZ%2BWyEBw671JMEPB3mChRSs8GJ1qvaatv%2BEVUP0XCKC4RZ09aPO24Z4QfCn02YzPCenBC5ifWc5heG95ynhrJXglCYH5wAfX%2BVegyNsV17DZXKDTlgC71XABvS2DbNMBs4322l1FSz1p37eN%2FbH7%2BbKrdE5jTRhhjdAUd3y168u7%2Frkhdzo%2Bt%2FxvzwH4k4m5socPccqDBD4Tcun5M%2FrcNGEBfjpHSD3OGW8DDJzAcIoo7AAFJxhfq6LC7QW0umRn4zsMZcSBheknG1ixBX5iFlpTl3%2BdBNbf6SbS3Xl3JE42f9EsgCuk2mE8E4jggo0cPdcWjGXSG11cwQfs8cc19wQZbNso9zvTSWHnhJyswQZuWR9x3M9EdlzDgnYnKBjqkAYIj88ngY%2F8hcsyK3KHvY7WTYbVYbp27yXMCdRfLR%2F%2FtYWQJWBYUaO5IraIHHWYXtdVqR9Oc3ylUvmrmUvD9v7HAYkBWE68pDAwYwKrEwVauUkvoiipEAKzNFt%2FJvLJ45w2iy0qczjxTDy%2FhXttSA03VRg0lNrQ1bWoZhQMEjEFTmdylDNpPGABDAk5hiH6CJv4ALP7LdhrVOtprfDcQifmT0W%2Fq&X-Amz-Signature=855a6f912ad8112a3f9cbe29773655b9e78f3ff8814b5e6c327847656fab8bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

