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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSXQZKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgv%2FW%2BJlpPACwIY1Y%2FVAF55%2FErrS7tAsUQJn5zaRX7YgIhAOVSg6wXdbEscDdsPcKkEp%2BO1FgKZQ%2BXB2imkVYiAJ8oKv8DCHMQABoMNjM3NDIzMTgzODA1Igw6SKQXuqZkEObZDDoq3APS4vJbKJ%2B7ZVSHFGdmQCdpOFFUZlA1I%2Fk39NQvz4tUjSOkGvqrLIjh8n%2FCuae4GFNJ83fQOLcJzUSWIy9yHKGTjL0tSSgZmptuIkODHSCbveTcdSQ0m1i9ayfAXYY1irOvnMhhTtqsmL9lD4sDp6tUa6Uma4N2hXqTexg9z2SEYIZPBDnGshnJit3AgvNjWqTPmsBTaBSxaY1WQDo9x1DuKHakF8HDQ6xfXmh5R%2F3xJ128Aop00w0i6J3eZvP938YfLx2jR5pnAILFOriHWyDvxpvK8ePJ6PU2hesomC%2F8ow7Ii39%2FAUqcEIvV4ygeNdBU6zwAt9UdHEgKCCqOqghdh6MzN0QbSfaCoXjuNWv5n2%2BQ4g3DqxO4G0hwvz5OJx39UKkTsDhallkKnVuib%2FFoWcskrz54K8gN2krCdeEC6Gt06gkFpRvu7Ly2wlUMnV3jou7wpvW2crmvhUwQB6wIPHi11k4uy%2FgGXtoIrJsphqCOdnAmxPFVEEnuaGaDM8AlqFSd56FySDmGv3bgHbnhY6ImItvHGZDoc%2FbkcnIExzvX6VK2h8lyxvOjA0%2BGXfpWLc8Ai3lcgcwJO5I0hAk%2Fb%2FpJpsD7LbkPSBiwkQndN9EZkk8KH%2FvLZFRHizDulojKBjqkAc50dnDCPc%2F4n5kPVdS2q6aCQiNFsEuWPM0slY66znYgSYTr%2BLiVqYho4K5R%2FQGM555rBDcIXfZIf21OlNE3428ovoJtWUZEh59n1DAr9cLXYipbqqFl5z6%2BY1izGbkK1EndvuFULiAOUSDeBxglO3HQYW4ZlCxVVZtbxpRI5cjR7ekse4Sb5kmMYZHiV45ADYqTK6jGJ%2BZd5ATBHYu6mbK00Eh3&X-Amz-Signature=ab2e5a763e9fdc7c139668a5f1aa3318ea4e7c8ae1ce89ecd007c05fc50cdac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSXQZKU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgv%2FW%2BJlpPACwIY1Y%2FVAF55%2FErrS7tAsUQJn5zaRX7YgIhAOVSg6wXdbEscDdsPcKkEp%2BO1FgKZQ%2BXB2imkVYiAJ8oKv8DCHMQABoMNjM3NDIzMTgzODA1Igw6SKQXuqZkEObZDDoq3APS4vJbKJ%2B7ZVSHFGdmQCdpOFFUZlA1I%2Fk39NQvz4tUjSOkGvqrLIjh8n%2FCuae4GFNJ83fQOLcJzUSWIy9yHKGTjL0tSSgZmptuIkODHSCbveTcdSQ0m1i9ayfAXYY1irOvnMhhTtqsmL9lD4sDp6tUa6Uma4N2hXqTexg9z2SEYIZPBDnGshnJit3AgvNjWqTPmsBTaBSxaY1WQDo9x1DuKHakF8HDQ6xfXmh5R%2F3xJ128Aop00w0i6J3eZvP938YfLx2jR5pnAILFOriHWyDvxpvK8ePJ6PU2hesomC%2F8ow7Ii39%2FAUqcEIvV4ygeNdBU6zwAt9UdHEgKCCqOqghdh6MzN0QbSfaCoXjuNWv5n2%2BQ4g3DqxO4G0hwvz5OJx39UKkTsDhallkKnVuib%2FFoWcskrz54K8gN2krCdeEC6Gt06gkFpRvu7Ly2wlUMnV3jou7wpvW2crmvhUwQB6wIPHi11k4uy%2FgGXtoIrJsphqCOdnAmxPFVEEnuaGaDM8AlqFSd56FySDmGv3bgHbnhY6ImItvHGZDoc%2FbkcnIExzvX6VK2h8lyxvOjA0%2BGXfpWLc8Ai3lcgcwJO5I0hAk%2Fb%2FpJpsD7LbkPSBiwkQndN9EZkk8KH%2FvLZFRHizDulojKBjqkAc50dnDCPc%2F4n5kPVdS2q6aCQiNFsEuWPM0slY66znYgSYTr%2BLiVqYho4K5R%2FQGM555rBDcIXfZIf21OlNE3428ovoJtWUZEh59n1DAr9cLXYipbqqFl5z6%2BY1izGbkK1EndvuFULiAOUSDeBxglO3HQYW4ZlCxVVZtbxpRI5cjR7ekse4Sb5kmMYZHiV45ADYqTK6jGJ%2BZd5ATBHYu6mbK00Eh3&X-Amz-Signature=ac12afc05bd05ae4b9057c7f1a294773f15510df4f923f13514b2794959e3dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

