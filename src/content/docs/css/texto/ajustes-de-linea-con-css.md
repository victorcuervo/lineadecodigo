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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65W2HXT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwJRieQCb%2Bjg5qH97UXB7p8cKEij2QvZ4NltLHcO4QgIhAJNDya94EC6gj9wjcXtDCQuDE7bZ86VClKZItv%2BuVMMhKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwS6h3a4u6At%2B%2F3iIq3APklxHlGWbHwfMdLjOzie1iXWGD2hU19so%2BB%2F3nWbuH6B6oOgbsDHcnLQrLdQFAhX%2BdSMKKXhG1%2F6O%2BWiEl4Zyy8CTnGpGs70CHkmWFTwx3w0QhnLLQErUFWAZIgPZ%2Bbch8kFLafuBLEn%2BTrsjSPk70rqY0D9TBZh1SWb2vGMUyeOPNMkiJ3cxPgoUxxRNT30MciZcGammg5qkLX%2Blhs%2BqdgkYJj69eIWEZ4l1zAx1gM1zifG3cT5yL5Ow33O8C0zah3tn%2F8cTDxZJocnH5%2Fjb9pLZvunNHhgX52CD8oesjBbeVFVImgjpMEvrQFg59qdj6oeIh7eMnZBkOPu50%2F%2F5DQGgtRhesciNbX0BkeaE%2BFG19j257WawWXf0Jn9rvD8M7uNW0%2FNaEf82YuRhiLEf63Esxlkpzhhd%2B4fR7NExcFCSlrYlyNpbi2Ji00nZUF4fCO47wCzPTN9aQaRtFiXwau%2FFyAlWgYbgxcxgpr3XGMzaU%2Bcd7%2F0zPLf001no1c2xYN%2F0vC0NRaTVEOLiSmllfZ2iCCylbgAr4NjgWU%2FF76%2BGeQZ9ZjoONGzsHPoOD18rh8RfC9q%2FfJ2fe5AnTzA0fYPQgDF8%2B0Gc85SY2xFRQVrxo1Z19qJFTcDLXSjD5gIvKBjqkAQiWL0CfwPcvx0OKPdD8vpqwFRfxYh9fpL1r8Imq0ZgS2CJxpK47YYluj%2FfyB4%2FHMtBrmDIRDYLqCKYb5WYktlKTL18sLaMJJovse0kgn%2BQak%2Fu4XLNK4fBe8yJaYAhJjICSqpfoHwnhROyJzangTu8Dnjd2b4VCurQn8E3VQpMXteS%2BOQqnUeFUwo3H%2BGf5MIceg6vUcCY98h6uRb3Fx7YJqiNH&X-Amz-Signature=24abe75ccdba8a8a87579d9e1386c9093243d4f03aae97058781ec62e1b8baf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U65W2HXT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpwJRieQCb%2Bjg5qH97UXB7p8cKEij2QvZ4NltLHcO4QgIhAJNDya94EC6gj9wjcXtDCQuDE7bZ86VClKZItv%2BuVMMhKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwS6h3a4u6At%2B%2F3iIq3APklxHlGWbHwfMdLjOzie1iXWGD2hU19so%2BB%2F3nWbuH6B6oOgbsDHcnLQrLdQFAhX%2BdSMKKXhG1%2F6O%2BWiEl4Zyy8CTnGpGs70CHkmWFTwx3w0QhnLLQErUFWAZIgPZ%2Bbch8kFLafuBLEn%2BTrsjSPk70rqY0D9TBZh1SWb2vGMUyeOPNMkiJ3cxPgoUxxRNT30MciZcGammg5qkLX%2Blhs%2BqdgkYJj69eIWEZ4l1zAx1gM1zifG3cT5yL5Ow33O8C0zah3tn%2F8cTDxZJocnH5%2Fjb9pLZvunNHhgX52CD8oesjBbeVFVImgjpMEvrQFg59qdj6oeIh7eMnZBkOPu50%2F%2F5DQGgtRhesciNbX0BkeaE%2BFG19j257WawWXf0Jn9rvD8M7uNW0%2FNaEf82YuRhiLEf63Esxlkpzhhd%2B4fR7NExcFCSlrYlyNpbi2Ji00nZUF4fCO47wCzPTN9aQaRtFiXwau%2FFyAlWgYbgxcxgpr3XGMzaU%2Bcd7%2F0zPLf001no1c2xYN%2F0vC0NRaTVEOLiSmllfZ2iCCylbgAr4NjgWU%2FF76%2BGeQZ9ZjoONGzsHPoOD18rh8RfC9q%2FfJ2fe5AnTzA0fYPQgDF8%2B0Gc85SY2xFRQVrxo1Z19qJFTcDLXSjD5gIvKBjqkAQiWL0CfwPcvx0OKPdD8vpqwFRfxYh9fpL1r8Imq0ZgS2CJxpK47YYluj%2FfyB4%2FHMtBrmDIRDYLqCKYb5WYktlKTL18sLaMJJovse0kgn%2BQak%2Fu4XLNK4fBe8yJaYAhJjICSqpfoHwnhROyJzangTu8Dnjd2b4VCurQn8E3VQpMXteS%2BOQqnUeFUwo3H%2BGf5MIceg6vUcCY98h6uRb3Fx7YJqiNH&X-Amz-Signature=1bdf32d51177d0a4400d5c22c8fc377ba82c33e9e16f007e5b918fd04cb5ce47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

