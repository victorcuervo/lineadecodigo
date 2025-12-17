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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCVZMJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYbJ%2FpgEztm89yZVMcWe67sXgKRmY5MR9BxBQ8UAW4fgIhAPMHKiIU%2FDbeJvMA04zKz%2Bal1kogCkFjjVxRmnGwezZ8Kv8DCHkQABoMNjM3NDIzMTgzODA1IgypPKwoZ3ZQL19%2BD2wq3ANP%2BFzNCJiO6IG1e2Mr8eZF05kPLo6q%2F%2F%2FpcWEx1D2tDwC46AbBEmvopUKp5FhYFSrXqSII4u4phpHBRPsQVn5mZnG3sArBHRxuu6TJ0gfjr2gA1HDYUFRsvqJacAHDJCF1VgnENze5RJ%2FQike%2FUguRm6Ep0S%2BgPUGPLTa5d%2FuuKTdoC32KnFWcMpNw35k%2B%2B%2BlXkueltk%2B9FCagK7AeuC3uQ2OtgaeyF2khXpZlfW2Yifq4r0uUr7vnNYspnYd6R4G54EohIzyKQjvWZY9GYZnAsdVqkkpDWIn7HnqML1cI5WRiXe46XlKrZiKzCvrA%2B2UQ%2FJqEjtluL5PsC8RmhRQzIhdi9LDWCtzcsqXe%2BIBYMcO94IX9aALQJNwEZRdt8wNNLOZVy%2BaepIkjFP8kbsrBmVNeveP1DoPkbwtDTWC9xA%2Bf3P5hbU3BVyB%2Bx8AkfQFaaDl2aEwzwjSm0h9oourZm5RqaJVQsxwzgofcV7zHVe3IwxjHO0Sal781fgnAdYr7CIWTaJivoIndJIA4uZtj8gdsabw29Q7xvT%2BBFpqIDLdHE22W8xtFyFeEVl8aG1k5GyHyev7PEHCdwqy49wSggDE6%2F99Jmy8ObZGZn9EcsF4xc2m8rSGaERENUTCN0YnKBjqkAbnuxUxdsJ9kOAkAuZlh7WiuImYWswq1IbLT%2B%2BJy3IuaLOuW%2FV0kKC6x%2FIiSL%2FH7BnEKcwvztPxztidgufdF6LPMsupA0IJPVoW63wn8CibfMax1ruLN0mh6AUxPzWb%2B6h%2F1EiDAccuhKDZmBSp8h%2FyFJg%2BBaUVVdes2v55O5pmILsxy34qRFpBMmMfoaiEt2VQpMRxfZ6%2BL7iidUy8gYZLVHyIq&X-Amz-Signature=e2be1dd671130e31be22fe050920b58e0ffaa5ea91162424072c6e2f2ece1391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDCVZMJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYbJ%2FpgEztm89yZVMcWe67sXgKRmY5MR9BxBQ8UAW4fgIhAPMHKiIU%2FDbeJvMA04zKz%2Bal1kogCkFjjVxRmnGwezZ8Kv8DCHkQABoMNjM3NDIzMTgzODA1IgypPKwoZ3ZQL19%2BD2wq3ANP%2BFzNCJiO6IG1e2Mr8eZF05kPLo6q%2F%2F%2FpcWEx1D2tDwC46AbBEmvopUKp5FhYFSrXqSII4u4phpHBRPsQVn5mZnG3sArBHRxuu6TJ0gfjr2gA1HDYUFRsvqJacAHDJCF1VgnENze5RJ%2FQike%2FUguRm6Ep0S%2BgPUGPLTa5d%2FuuKTdoC32KnFWcMpNw35k%2B%2B%2BlXkueltk%2B9FCagK7AeuC3uQ2OtgaeyF2khXpZlfW2Yifq4r0uUr7vnNYspnYd6R4G54EohIzyKQjvWZY9GYZnAsdVqkkpDWIn7HnqML1cI5WRiXe46XlKrZiKzCvrA%2B2UQ%2FJqEjtluL5PsC8RmhRQzIhdi9LDWCtzcsqXe%2BIBYMcO94IX9aALQJNwEZRdt8wNNLOZVy%2BaepIkjFP8kbsrBmVNeveP1DoPkbwtDTWC9xA%2Bf3P5hbU3BVyB%2Bx8AkfQFaaDl2aEwzwjSm0h9oourZm5RqaJVQsxwzgofcV7zHVe3IwxjHO0Sal781fgnAdYr7CIWTaJivoIndJIA4uZtj8gdsabw29Q7xvT%2BBFpqIDLdHE22W8xtFyFeEVl8aG1k5GyHyev7PEHCdwqy49wSggDE6%2F99Jmy8ObZGZn9EcsF4xc2m8rSGaERENUTCN0YnKBjqkAbnuxUxdsJ9kOAkAuZlh7WiuImYWswq1IbLT%2B%2BJy3IuaLOuW%2FV0kKC6x%2FIiSL%2FH7BnEKcwvztPxztidgufdF6LPMsupA0IJPVoW63wn8CibfMax1ruLN0mh6AUxPzWb%2B6h%2F1EiDAccuhKDZmBSp8h%2FyFJg%2BBaUVVdes2v55O5pmILsxy34qRFpBMmMfoaiEt2VQpMRxfZ6%2BL7iidUy8gYZLVHyIq&X-Amz-Signature=6ec9a3593083db0538afd37ddcdd5bafccbb5a650b662206fe4d359f79ee41c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

