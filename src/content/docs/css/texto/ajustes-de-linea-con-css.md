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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVALUCT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJA4Lf3T0gxWPg3i4sKvKbOfZhQxlHRcCqmVDFfAczvQIhAM2pewJ0%2FEuxlOpji9%2Fc3rpI7FhcL7y9A2RYxP2Z7kijKv8DCH0QABoMNjM3NDIzMTgzODA1Igzc1Hx3JIFm%2FyYiAMYq3APhGqO5e%2B1RHUcKI5JvL9WBmOxTnyAM4vQwaSfNtOfpT4bl%2BydeJiaTtgY9RiuePVyh6D4RedsH7Ys%2F%2BjbLjH%2FKkzMJQYnp77jFIRmk3ofE1q0BTLezpBWiC2qT9kaJaW1AbehSuT0URgqR0BniTdIgCJR4Ys%2FP4q5Q79h%2FnP%2BRec6wvk6xS6kcITctz3dhqjnSFM1sb8xskAH4SuP%2BWPj7qI2ebbzuhgPD7WgS40oMwNg7KFhE29XUb6K5BHOy621KjWNDvx9bIxFZgwI1Se4RyQB0cyA7uiSIf7E5g8JIa3L633Gb3tQUC29ngX16uPUiRILBVOGiwG9Kk1yKSJCxAlrZV%2ByacITMkWWN5Jt1N22isrKKc1UXS0loSyoiYkogVBsJPmPTIQpaKt%2B32tOOFSRUgJRiE34JIV56i%2FZgVinLXO8nxUvhg6C034r7hjKq2id3pliJqpDvWvTks4MJLgxXTXUPkl4a5uui9uS7B0lbWIsU55zLRehokHwWVh3HTZ55sIBAEcTxNcRTnV%2FQCU4VuzE5dcFL45LD2F%2Fj7oWYaQRmAu1CSeKH7DWx0B%2BCw2JS3yX7Yf24LLtKLuPozNM4EdjLICidNd22%2Bn1k26ev5%2F8iKxTD%2FDjV2TCOq4rKBjqkAd6Z%2BebYu8QkviSKVuGeS8%2F2yKnWe7Mu38VjCZeoOtAD7Bi0cI3iDA6bLc8COgZeSEzTTpN%2BSuk4q9zaXPYBLzTIKUuTi5DCJMYklSMVKMp%2Fbl8OVKEHHff14vPT0sCPZaKtQqrhr%2FQ94uHMf3NprgMGcJevAtHKypHJ%2FDheRdozOpPxL8xRuC8ao1YDbmIpapvLJE39NHOqZe3Yx6IdREBmD2Zd&X-Amz-Signature=870602ad273f428de438f8dac315febd7e5ef57308f7306f9aba6ae96b981477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVALUCT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJA4Lf3T0gxWPg3i4sKvKbOfZhQxlHRcCqmVDFfAczvQIhAM2pewJ0%2FEuxlOpji9%2Fc3rpI7FhcL7y9A2RYxP2Z7kijKv8DCH0QABoMNjM3NDIzMTgzODA1Igzc1Hx3JIFm%2FyYiAMYq3APhGqO5e%2B1RHUcKI5JvL9WBmOxTnyAM4vQwaSfNtOfpT4bl%2BydeJiaTtgY9RiuePVyh6D4RedsH7Ys%2F%2BjbLjH%2FKkzMJQYnp77jFIRmk3ofE1q0BTLezpBWiC2qT9kaJaW1AbehSuT0URgqR0BniTdIgCJR4Ys%2FP4q5Q79h%2FnP%2BRec6wvk6xS6kcITctz3dhqjnSFM1sb8xskAH4SuP%2BWPj7qI2ebbzuhgPD7WgS40oMwNg7KFhE29XUb6K5BHOy621KjWNDvx9bIxFZgwI1Se4RyQB0cyA7uiSIf7E5g8JIa3L633Gb3tQUC29ngX16uPUiRILBVOGiwG9Kk1yKSJCxAlrZV%2ByacITMkWWN5Jt1N22isrKKc1UXS0loSyoiYkogVBsJPmPTIQpaKt%2B32tOOFSRUgJRiE34JIV56i%2FZgVinLXO8nxUvhg6C034r7hjKq2id3pliJqpDvWvTks4MJLgxXTXUPkl4a5uui9uS7B0lbWIsU55zLRehokHwWVh3HTZ55sIBAEcTxNcRTnV%2FQCU4VuzE5dcFL45LD2F%2Fj7oWYaQRmAu1CSeKH7DWx0B%2BCw2JS3yX7Yf24LLtKLuPozNM4EdjLICidNd22%2Bn1k26ev5%2F8iKxTD%2FDjV2TCOq4rKBjqkAd6Z%2BebYu8QkviSKVuGeS8%2F2yKnWe7Mu38VjCZeoOtAD7Bi0cI3iDA6bLc8COgZeSEzTTpN%2BSuk4q9zaXPYBLzTIKUuTi5DCJMYklSMVKMp%2Fbl8OVKEHHff14vPT0sCPZaKtQqrhr%2FQ94uHMf3NprgMGcJevAtHKypHJ%2FDheRdozOpPxL8xRuC8ao1YDbmIpapvLJE39NHOqZe3Yx6IdREBmD2Zd&X-Amz-Signature=3acd4b850e1425e4944184dad7f2e190478faf2d3c4aa418fc4918e205342013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

