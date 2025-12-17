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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5JYT7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC0%2B36Ni7P6k7MxoHfztZNCCbl0JBMRA34J2A%2FvlVYfAIgYgGzm%2FWJmuv7obkrg3XeNA0rI%2BMzh8p7NyaXQgF6D8IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABU16EMMZAebVfyQyrcA%2FcpKP3mumF62kJR0X4zwxy1077goWl1Wxe1whpuYgO5sO45jUzn6jYSGeDum%2FsMrhlHTJHc1jS%2Bk9Dxk0JvpcOOLKSzc8r%2F8CVRcClNXbc8hgZh7tLKxeuNDL%2F7oK15Xs1hPdZl9J4Q8OMt1JI0XAWPG3hh29pB0rwpLG%2BglN53bDnFRdstLztbArjVga7GrO%2B1aWXDRWrtynA4Yn1piW4eLtGe%2FqEhbcXG852DiDOGfCcx3ZrhjXbeHIEJ9EG2cuGqk4JvzkBWpgg%2FTnWxPM427Cdt%2F1TLuGu0N7BthmYmikmkwPS0CFQXJQea9MGZZJnj4LySkuAyFxgicze5QTyPC1jqiGBIGqe%2BHzOwqyNUHThRG%2BmQR0WDdGxJQ2dEcwtxEBByzpdGYsOl2JFntwvWj2hYLbTFvDj2YlJQ12362rX%2BkTxC3T6KEtprdW4B%2FQqDRRMY8DcFt4pQWbCOgkHTWdrGwiCZ73deduSJVs2ZQDl4GCGENI3C73iPE6p9PEcvl1dd%2FAfesNxlRBCvkX7zLT%2BHSYQkoLGoZfhKeEQegrq1kXfVNG2nuJ7J46ycUkc2bPDslOlVClDeX61PKPLWUEaVj0Um6nv3jKyT7%2BB2Mc1voEnQ%2BXJDQHQMMNmLjMoGOqUBKT7a68owG8lfPqTq%2BBGqIPXBsC5TqVk41ndpXnsi80iD6hDJwaoLUADFKM0vMVqrLFO%2BELAbLcMQu9C0jItS83%2Fr1B9c%2BsYo2NW3bg098kjRZExaaSbX7Wu2aFHEjoZBozHL4Wp3KSlEATPMezOLTe0bW7x2F9flsM%2BPCWI6bYt9p%2FdGsqu97D3c8FclFGdO4fgu1W22FV3tO81ZVYqWgbv2Hs6c&X-Amz-Signature=07493557280fb41c457ead78d02e1692cbf000898cc75a98d82020846bd2e197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5JYT7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC0%2B36Ni7P6k7MxoHfztZNCCbl0JBMRA34J2A%2FvlVYfAIgYgGzm%2FWJmuv7obkrg3XeNA0rI%2BMzh8p7NyaXQgF6D8IqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABU16EMMZAebVfyQyrcA%2FcpKP3mumF62kJR0X4zwxy1077goWl1Wxe1whpuYgO5sO45jUzn6jYSGeDum%2FsMrhlHTJHc1jS%2Bk9Dxk0JvpcOOLKSzc8r%2F8CVRcClNXbc8hgZh7tLKxeuNDL%2F7oK15Xs1hPdZl9J4Q8OMt1JI0XAWPG3hh29pB0rwpLG%2BglN53bDnFRdstLztbArjVga7GrO%2B1aWXDRWrtynA4Yn1piW4eLtGe%2FqEhbcXG852DiDOGfCcx3ZrhjXbeHIEJ9EG2cuGqk4JvzkBWpgg%2FTnWxPM427Cdt%2F1TLuGu0N7BthmYmikmkwPS0CFQXJQea9MGZZJnj4LySkuAyFxgicze5QTyPC1jqiGBIGqe%2BHzOwqyNUHThRG%2BmQR0WDdGxJQ2dEcwtxEBByzpdGYsOl2JFntwvWj2hYLbTFvDj2YlJQ12362rX%2BkTxC3T6KEtprdW4B%2FQqDRRMY8DcFt4pQWbCOgkHTWdrGwiCZ73deduSJVs2ZQDl4GCGENI3C73iPE6p9PEcvl1dd%2FAfesNxlRBCvkX7zLT%2BHSYQkoLGoZfhKeEQegrq1kXfVNG2nuJ7J46ycUkc2bPDslOlVClDeX61PKPLWUEaVj0Um6nv3jKyT7%2BB2Mc1voEnQ%2BXJDQHQMMNmLjMoGOqUBKT7a68owG8lfPqTq%2BBGqIPXBsC5TqVk41ndpXnsi80iD6hDJwaoLUADFKM0vMVqrLFO%2BELAbLcMQu9C0jItS83%2Fr1B9c%2BsYo2NW3bg098kjRZExaaSbX7Wu2aFHEjoZBozHL4Wp3KSlEATPMezOLTe0bW7x2F9flsM%2BPCWI6bYt9p%2FdGsqu97D3c8FclFGdO4fgu1W22FV3tO81ZVYqWgbv2Hs6c&X-Amz-Signature=03d0b0ab7c4e609b5187cd057491992def4e1c7686aba9eb169ee0e6ae758e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

