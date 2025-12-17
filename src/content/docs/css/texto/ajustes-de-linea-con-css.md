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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UII3AY76%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMFUqgpdOMYEmAQS7VZrQCDquMYggXxHpoDmQSfRJMUwIhAP7l7BsmCdPz5Pq2nkZtrvUBA3nGsEyDzUgf2uAsaXhlKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwcqvYMSuhuhOVzpUq3AMC0r8K9BooQuQx0TWL4xnTG%2Fi1bFMrcr1rXFrlNh4a68EaBYDoOE266a7ROWafa2kuvkRIuCYv0hHaKtT8MniTBt50WiZuQVZ3IbyThT%2BK57SXV%2FK0N0nHLCha03FO983CO9VJkeZFVVHuwtBMXU34gbq0EtbGvKK3Jxwb7lZlc1ikN%2B2m5SvOuju6dOhnKRIr1SChQl1CNO70%2FRI0EVouPamnVPy0zW90lVqsJs98%2Fy4fWYLhqWpvZK2zeTV8siJrv4m%2FS1LJIYOKJKus7Cw9FbBbl6B4HBb9ap8ZM%2FwTbkOU2K6kdlWHzuF8vmS36tW%2FxVZJ9P32SWfDPmIOESsZOK60H6etnwVsEyc13LGrPS%2FF3nSubA89r%2BSkWRxeNxJhTzk41Kdk6M8J0PIXaF1VW7GHSQQmZ5d6I%2BBsOKcIsdax4hQS3aaCu0WA%2Btp5a0Afd8%2Ft9vny1ObCNhTxUX0KkzplZRBKb5qM%2Bk5qMN0prZSNJYI1RIL57qItmytfiEv9K7ThUmWdwmg%2Bwu8gVb42Dul9teXOpHyfxN8c7n5DGWi88z3FBfcVTp8nVKB92IUpMo2pg6H0UfHjrrmRngtlPwVKNG04MK5GtUOB3sHL6h70qotVim0kDeLLITD8novKBjqkAWNYTD8LMAjA6SD5wdo87ddjYSkEVx%2Bz8hI9yTswgtjNI4hcF5EfDf22XpGiTVmBEiGdtXOAXs3RlhxkgDdP2HIK3Sj2LPZSNq%2FO6t2%2F94Q7wrltSiJGySvDQnbjW7opUyzZw1bUVWqP%2B4Hi2FDg0LoPyjAWBXuM7YRh74%2Faf9x%2FvENhUWSnQG1mS79e2Z24xbHpVRnmNglHOjSi1sWydQ6eW7NA&X-Amz-Signature=7045f4475918c3db62e725c1821989db50506cf155f97e2706a2f2fbba3e6d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UII3AY76%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMFUqgpdOMYEmAQS7VZrQCDquMYggXxHpoDmQSfRJMUwIhAP7l7BsmCdPz5Pq2nkZtrvUBA3nGsEyDzUgf2uAsaXhlKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwcqvYMSuhuhOVzpUq3AMC0r8K9BooQuQx0TWL4xnTG%2Fi1bFMrcr1rXFrlNh4a68EaBYDoOE266a7ROWafa2kuvkRIuCYv0hHaKtT8MniTBt50WiZuQVZ3IbyThT%2BK57SXV%2FK0N0nHLCha03FO983CO9VJkeZFVVHuwtBMXU34gbq0EtbGvKK3Jxwb7lZlc1ikN%2B2m5SvOuju6dOhnKRIr1SChQl1CNO70%2FRI0EVouPamnVPy0zW90lVqsJs98%2Fy4fWYLhqWpvZK2zeTV8siJrv4m%2FS1LJIYOKJKus7Cw9FbBbl6B4HBb9ap8ZM%2FwTbkOU2K6kdlWHzuF8vmS36tW%2FxVZJ9P32SWfDPmIOESsZOK60H6etnwVsEyc13LGrPS%2FF3nSubA89r%2BSkWRxeNxJhTzk41Kdk6M8J0PIXaF1VW7GHSQQmZ5d6I%2BBsOKcIsdax4hQS3aaCu0WA%2Btp5a0Afd8%2Ft9vny1ObCNhTxUX0KkzplZRBKb5qM%2Bk5qMN0prZSNJYI1RIL57qItmytfiEv9K7ThUmWdwmg%2Bwu8gVb42Dul9teXOpHyfxN8c7n5DGWi88z3FBfcVTp8nVKB92IUpMo2pg6H0UfHjrrmRngtlPwVKNG04MK5GtUOB3sHL6h70qotVim0kDeLLITD8novKBjqkAWNYTD8LMAjA6SD5wdo87ddjYSkEVx%2Bz8hI9yTswgtjNI4hcF5EfDf22XpGiTVmBEiGdtXOAXs3RlhxkgDdP2HIK3Sj2LPZSNq%2FO6t2%2F94Q7wrltSiJGySvDQnbjW7opUyzZw1bUVWqP%2B4Hi2FDg0LoPyjAWBXuM7YRh74%2Faf9x%2FvENhUWSnQG1mS79e2Z24xbHpVRnmNglHOjSi1sWydQ6eW7NA&X-Amz-Signature=ebdd616d037eb156a26ae5f73058bd6c9ab59bcad2e70021f72fec39b73368ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

