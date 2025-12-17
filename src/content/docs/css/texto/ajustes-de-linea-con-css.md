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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI37JTNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuf%2BtcUC2epg3Pxdn32DzbTA4vtiEOYx%2FKl3QR3ZCIrwIhAPXdAsOj9097dFiqo7DlEpnoYtAz%2BdZuIr2ZdWc%2BuNIeKv8DCH8QABoMNjM3NDIzMTgzODA1IgwMPSlncP%2F02OeKPOgq3ANVq2ynNfJO7eGeINcjI81EIAZ4ney5FGwF1KtKvUNCD0i3S6N%2FHmP%2BaW7OlkARngpL49%2Faus7O4l6Y4LGZ%2Bl9cp%2FsSUGhwkEPnNkuodez%2Ff5rhX1t3ogoz9Ceho1XcwQ%2BXEmDPPUX3TlvNTt9VbYZnYDuH4mpslHOZu5NAk2xtzxA6oaAQssfgG6fs1MVSv9f94Bf1EORqB4JT3sJ0u2k%2BWF26JQ9Pva8RBzo79jjV0pimmHGiSQmxD%2F1e%2FuW%2BHKxpGUCY6cQEDOR%2F5omw%2FZzV%2FHqd8TQcaVv22fhUcrLRg2peXm9XlgpaALRPD7gm3hNfpWe%2BRTY03Dn%2BdST72eoXNCpybqM1jUR4FEPvZI7blqnQ8%2FL0t7%2FgtfiTSU5MjMhXxy%2BCdwY6tqV0O0YS40gCCx1bTTFMVIo596SSqoRNwQ3jTRfuWoDjxfhFLJX8NssbY0EoiFEfgNMVDZzMhPJ1cYJXuaFqk%2BSSDVmLmcBlHZym930HShw8FknJQq1R8g0l4%2FkZC8zArPunWLgNfmTbFfPORJYFyD%2FCtD4FzHVxEAqHM23NNx9KLTXxahQO2a27O8SpDgVEoVIYZspMGQwe9MoAPo10xZlxK9ryGAkPtv8WZ6MZCZICF1zuqjCj44rKBjqkAYk1wu403VolFYbdwaBy4kcp1skSWzk8zvtrY5IVVnYByK9yH%2FoP6fX3a3MOJ43B8fBEvnaGb359gqAB2VwF4RcgJNv8mo87xEYbSyZ2VTgNZXGWojgvTF4ZrTPXUl7rBk6mCc%2FbdjIt%2BilPmoJrOC5%2Fr%2BC%2F83jJVJTPgpOkDiLaaU3XMInsgIyiEVKARbqfYdbDqQgUiw6gqxDa1l3THQODlV3k&X-Amz-Signature=63b54ea2f34633a3b7026f6a608de8c3dd9d8563a7b906580498e15255a68822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI37JTNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuf%2BtcUC2epg3Pxdn32DzbTA4vtiEOYx%2FKl3QR3ZCIrwIhAPXdAsOj9097dFiqo7DlEpnoYtAz%2BdZuIr2ZdWc%2BuNIeKv8DCH8QABoMNjM3NDIzMTgzODA1IgwMPSlncP%2F02OeKPOgq3ANVq2ynNfJO7eGeINcjI81EIAZ4ney5FGwF1KtKvUNCD0i3S6N%2FHmP%2BaW7OlkARngpL49%2Faus7O4l6Y4LGZ%2Bl9cp%2FsSUGhwkEPnNkuodez%2Ff5rhX1t3ogoz9Ceho1XcwQ%2BXEmDPPUX3TlvNTt9VbYZnYDuH4mpslHOZu5NAk2xtzxA6oaAQssfgG6fs1MVSv9f94Bf1EORqB4JT3sJ0u2k%2BWF26JQ9Pva8RBzo79jjV0pimmHGiSQmxD%2F1e%2FuW%2BHKxpGUCY6cQEDOR%2F5omw%2FZzV%2FHqd8TQcaVv22fhUcrLRg2peXm9XlgpaALRPD7gm3hNfpWe%2BRTY03Dn%2BdST72eoXNCpybqM1jUR4FEPvZI7blqnQ8%2FL0t7%2FgtfiTSU5MjMhXxy%2BCdwY6tqV0O0YS40gCCx1bTTFMVIo596SSqoRNwQ3jTRfuWoDjxfhFLJX8NssbY0EoiFEfgNMVDZzMhPJ1cYJXuaFqk%2BSSDVmLmcBlHZym930HShw8FknJQq1R8g0l4%2FkZC8zArPunWLgNfmTbFfPORJYFyD%2FCtD4FzHVxEAqHM23NNx9KLTXxahQO2a27O8SpDgVEoVIYZspMGQwe9MoAPo10xZlxK9ryGAkPtv8WZ6MZCZICF1zuqjCj44rKBjqkAYk1wu403VolFYbdwaBy4kcp1skSWzk8zvtrY5IVVnYByK9yH%2FoP6fX3a3MOJ43B8fBEvnaGb359gqAB2VwF4RcgJNv8mo87xEYbSyZ2VTgNZXGWojgvTF4ZrTPXUl7rBk6mCc%2FbdjIt%2BilPmoJrOC5%2Fr%2BC%2F83jJVJTPgpOkDiLaaU3XMInsgIyiEVKARbqfYdbDqQgUiw6gqxDa1l3THQODlV3k&X-Amz-Signature=eadb01b45f8ecb6680f90a93363325b63852cf912d28b1a7c158ec5f696dce6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

