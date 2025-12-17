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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGR32JH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BzH7Ani%2FHX4v%2FOnE4MTIgZrnwW85hQWTt8R6G%2BdhEoQIhALAcCYeUogWq1eKyYzVGhI3Wf%2BynNXpEG9l7ZLu1Q6%2FpKv8DCHsQABoMNjM3NDIzMTgzODA1IgwOvobQnXKGx3%2BKxqEq3AMrMVIzPhigHo40qIlvgahRVhP0UKiIBObOntzTJdPbX3Ec5kfA%2BevtB%2FzjqF265PAC9Ct4YqrSEDkb62jFtvFSAHk8xRHHbB8mkEzSoKzq32WfYRRpP2NPGawTNnyrBv1%2BcJHYkX15JdblidSSGf6SfrCyW7riLT3Si5COA%2B%2F9BV5mJ5TBpPaX9A0NlJLB%2F63XZ62ei35fzeEDvuPtW82qRi22J1U413F5m7FXAQD7uAEIHTzsSbGtqIUGM1PBXxcoHMRpiOK1iD2F1PxOa9rhI86QtbBIPrstSHQGprAb1JkcD7lX5NZPOstZ7yExiPv05GybaceQdT42fZ73Rboet4EGUIh%2Fys7ymfEh%2Fjc7nqeR7G0RQmLKQFgSVJNaeaUc9k0OHwDFWTzAnZ40tFF5BAJkkTDQa0m627mhbfn%2F43sU94UQD7nP0ot4cOWBRsXxBzdpmT1phOcJBX7%2B6Q%2FSBA3VMMYFkbc3PFk%2F88qpYpiOQbnGWiSygYuhKTxG85Ai7A%2FUWzT3GefQL4ZVtwdt4U0WnGvEECb4iwTsQxgb0W3awtn8F263fkXJ7oV32iHGzXzhK5JkLJ%2BnWpi3B8zdxGHKY1Tq3bcMVJ9RIlXFFPcPqZ5M8o0dZ%2FEF%2BzDr8InKBjqkAcbriBVgLmzkvJ00lpthm42iVksMkCpL0%2FCpVmkv%2FHH%2FR%2BllQML9H76xmJP3qErLdlMiJErE75d3WMu1ox%2BIlfFMwDs62zh0u%2FcXoDxnPWucGVIwuoMl2hELAOlHHO%2F2zjgPSlxGvvAxTAgoewuuBOlAjbNeESbk6zvrbcO4L0w%2FFkaI4e%2FJcwJBBQ4IJvtm%2FM%2FVg8hp9kl8V3pkaZPSGWIJn48d&X-Amz-Signature=300319188e009a1c803c72b19cf985e9b586743a6d19486ff916bb80555064f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGR32JH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BzH7Ani%2FHX4v%2FOnE4MTIgZrnwW85hQWTt8R6G%2BdhEoQIhALAcCYeUogWq1eKyYzVGhI3Wf%2BynNXpEG9l7ZLu1Q6%2FpKv8DCHsQABoMNjM3NDIzMTgzODA1IgwOvobQnXKGx3%2BKxqEq3AMrMVIzPhigHo40qIlvgahRVhP0UKiIBObOntzTJdPbX3Ec5kfA%2BevtB%2FzjqF265PAC9Ct4YqrSEDkb62jFtvFSAHk8xRHHbB8mkEzSoKzq32WfYRRpP2NPGawTNnyrBv1%2BcJHYkX15JdblidSSGf6SfrCyW7riLT3Si5COA%2B%2F9BV5mJ5TBpPaX9A0NlJLB%2F63XZ62ei35fzeEDvuPtW82qRi22J1U413F5m7FXAQD7uAEIHTzsSbGtqIUGM1PBXxcoHMRpiOK1iD2F1PxOa9rhI86QtbBIPrstSHQGprAb1JkcD7lX5NZPOstZ7yExiPv05GybaceQdT42fZ73Rboet4EGUIh%2Fys7ymfEh%2Fjc7nqeR7G0RQmLKQFgSVJNaeaUc9k0OHwDFWTzAnZ40tFF5BAJkkTDQa0m627mhbfn%2F43sU94UQD7nP0ot4cOWBRsXxBzdpmT1phOcJBX7%2B6Q%2FSBA3VMMYFkbc3PFk%2F88qpYpiOQbnGWiSygYuhKTxG85Ai7A%2FUWzT3GefQL4ZVtwdt4U0WnGvEECb4iwTsQxgb0W3awtn8F263fkXJ7oV32iHGzXzhK5JkLJ%2BnWpi3B8zdxGHKY1Tq3bcMVJ9RIlXFFPcPqZ5M8o0dZ%2FEF%2BzDr8InKBjqkAcbriBVgLmzkvJ00lpthm42iVksMkCpL0%2FCpVmkv%2FHH%2FR%2BllQML9H76xmJP3qErLdlMiJErE75d3WMu1ox%2BIlfFMwDs62zh0u%2FcXoDxnPWucGVIwuoMl2hELAOlHHO%2F2zjgPSlxGvvAxTAgoewuuBOlAjbNeESbk6zvrbcO4L0w%2FFkaI4e%2FJcwJBBQ4IJvtm%2FM%2FVg8hp9kl8V3pkaZPSGWIJn48d&X-Amz-Signature=d35019ea6bb0825eae81bc518e24a8b75dfb0a59449dc431029c4d5579d6d5ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

