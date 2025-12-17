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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633WAV4OX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdA3%2FvIzMRLGFOkJpVgOzHZ9onPZRBYL27zZbQtbc4jAiEAuK3yIc4ima8PQEOZcp5F2RCAIWUdZpGeL9yZtsQrYp4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP3GjMjMDbNK6NTRIyrcAybJ31WgUt646Cue7kIeXDv3X6%2BQpQC3AenMm8w%2BEKQMcUo23SeOxEFu2ijjSIU5uJV%2BOqI6lkubxNi4rOZbFd3nnOiqlHsJKBK3Ik4KnSa1irgHRYOTBVUI6KGKO6PLUAXXg26dXIZD7F8MO76o4Pu7dvq37LTlNOkRJXNneJjVJqE3172hOfbMyZ4u7R8XfHix5IISMx%2FIZS9mlOn9E1OutlWYr9BChqLN0q0jo0ZC%2F5GiX3FgR0StJBnyB0jC9IoFvwoB6rCUVxks%2B95vPKsmgs1P3Qzx22b1%2FREV9NHZuLbnZrAToFPU3EyryvBrpNXACC6Nsx%2B6BSKSEAvBuw%2BR5JfVi1QIhd%2BdtiA6YA7uC0P3wJsSslqO3681WhWKIv%2BJeTqxy30T%2FLcC1oqs3KEgoomipwnkLU4bdRK0BPhrfX5cB6TrRxHb0UqMyxUXN%2FPYwbRm8BsVIZyKREfZbe3nHZv5LOXQ8XQGvXg68Y0YGc%2BGOZL%2BiulbhTxuk2a5jkdWnoRpOC4GfsfcZPEEqj6uTOVXyphYQxfL2aR7tnfloZGsXPFUgxSuSEa4ch9LfKQe%2FrFMhlriO%2BD1pN40GlVxuG4etfwya%2BA10%2Bz4JQbbJK%2BbjDn7eP20EGfoMOrSicoGOqUBezrerH6T8NhkQzvAL6NX%2BB%2Ftavobbtjlzun18CDbAbQHPFhhlMzKsRMDb4Fdvsoxnk7j9IpwieCm54BH41Cdrw569XQlgnkFYOAtjnYhITBjNtboaYNPTx2MHvHoMTUn0BR%2BCwD1Mf6yXhQxTOTQMqLj7E2b4DYxoMn32yg9%2BdFOUcri%2BT82EVWDqdwI68CULrSSHIftqa0ZX8snqSpBbsDj7Z5w&X-Amz-Signature=bcf86a0fa41d42a64537a8cb0529fec489746b36639750598b91815e896a988f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633WAV4OX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdA3%2FvIzMRLGFOkJpVgOzHZ9onPZRBYL27zZbQtbc4jAiEAuK3yIc4ima8PQEOZcp5F2RCAIWUdZpGeL9yZtsQrYp4q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP3GjMjMDbNK6NTRIyrcAybJ31WgUt646Cue7kIeXDv3X6%2BQpQC3AenMm8w%2BEKQMcUo23SeOxEFu2ijjSIU5uJV%2BOqI6lkubxNi4rOZbFd3nnOiqlHsJKBK3Ik4KnSa1irgHRYOTBVUI6KGKO6PLUAXXg26dXIZD7F8MO76o4Pu7dvq37LTlNOkRJXNneJjVJqE3172hOfbMyZ4u7R8XfHix5IISMx%2FIZS9mlOn9E1OutlWYr9BChqLN0q0jo0ZC%2F5GiX3FgR0StJBnyB0jC9IoFvwoB6rCUVxks%2B95vPKsmgs1P3Qzx22b1%2FREV9NHZuLbnZrAToFPU3EyryvBrpNXACC6Nsx%2B6BSKSEAvBuw%2BR5JfVi1QIhd%2BdtiA6YA7uC0P3wJsSslqO3681WhWKIv%2BJeTqxy30T%2FLcC1oqs3KEgoomipwnkLU4bdRK0BPhrfX5cB6TrRxHb0UqMyxUXN%2FPYwbRm8BsVIZyKREfZbe3nHZv5LOXQ8XQGvXg68Y0YGc%2BGOZL%2BiulbhTxuk2a5jkdWnoRpOC4GfsfcZPEEqj6uTOVXyphYQxfL2aR7tnfloZGsXPFUgxSuSEa4ch9LfKQe%2FrFMhlriO%2BD1pN40GlVxuG4etfwya%2BA10%2Bz4JQbbJK%2BbjDn7eP20EGfoMOrSicoGOqUBezrerH6T8NhkQzvAL6NX%2BB%2Ftavobbtjlzun18CDbAbQHPFhhlMzKsRMDb4Fdvsoxnk7j9IpwieCm54BH41Cdrw569XQlgnkFYOAtjnYhITBjNtboaYNPTx2MHvHoMTUn0BR%2BCwD1Mf6yXhQxTOTQMqLj7E2b4DYxoMn32yg9%2BdFOUcri%2BT82EVWDqdwI68CULrSSHIftqa0ZX8snqSpBbsDj7Z5w&X-Amz-Signature=18a190ec69f456402decc72e77047efb381d65f422c0ca585232709d4f2f8926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

