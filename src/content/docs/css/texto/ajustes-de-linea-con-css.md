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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWH2AEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsGrevfqE%2F0muPGKnbn2ZmFnlA2bKYM5%2Fz9nyfv2jZgIhAO3yWpAR6orvFhq2N2X7MuO0S%2BGM%2FKHnEIJqWzVqgKvrKv8DCH0QABoMNjM3NDIzMTgzODA1Igz8B4Om4cuJ48DpMvYq3AO1zyjgg08G8hao0%2FbdjMWZB71swt8DLwla3M0ONe%2BGoA1XdbqStxJKktR%2Be9Ox%2BdDdQN9odcebK2IhJhUxe7zNURPIlEjO0GQoFOXsl7Vc4zibQaP%2FeqMgdINR9JPrjibEj7nbM1IOrLCei7BaKHYTRxVjlT8%2FEq7q4WjF8OUgdanObijSTUN5BaXtVNyA0gdT60n%2FB8RwuI21Ehn2KLt9h0bDQyk0T%2BdSQkgpB5jZKCPeKD6lpHKiFofC8ZFmXcmXqkO%2BkDBHNEAVrRftICbyfSGcxT0Hskeoo1oR7xeeYlnQn5DPDYBVPATVkr%2BQgBQba2xzkm7pYmWOM60Djnk7ZKhjdHlTAucL%2FmlwAVfw8049Wa6sadaRUZWRZGCl2PhB8oTsxg69aayIIIVfSPH7BiE4V19w%2BtTmw7e8rm3MRho89VF82RlfhedujSPvmvoLDyyM3gwPAVCYSWXxMSd3a%2FlZRkg2NqE0RRS%2F2anoshN6GUEkahuhlsf6Hl4nb9erpnu15bxC5bBvIfS6IRbWBouZrsA5DmMBPkHidOuuUpAmo5Qqi1cXsU%2FMOUclHmuey16t%2B5JjGp9HAVUeSDnUfZqW6jUfMm%2F5t0zA%2FL0e5d59DS8Fq5sISbMd3zCIq4rKBjqkAcqik51oruTsYb%2FHKM%2BdtnkHRFeTs6%2FP8fXmpXWZNrNTLTrmDS0wa8Hh0GMbW9sMOwrkImprWVdXiKjmGmy4CIQwHK%2FPigbl9Lu0RkTI8yoF3HL4Fou%2FYCQq3QNRCiv39b6orFR6xL9VzoiuB9dRMgvqFPKWP33o4HuDU2OrsCh8YOMooMdJOqO9hhwXzZsXXj%2BIWbHRhFbNjgT0OwRfU4e7fjQq&X-Amz-Signature=ba8c9637e5ac53ff82d397f4fbaad7ae0cf5613514cad0d64197fa234bcd88af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWH2AEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPsGrevfqE%2F0muPGKnbn2ZmFnlA2bKYM5%2Fz9nyfv2jZgIhAO3yWpAR6orvFhq2N2X7MuO0S%2BGM%2FKHnEIJqWzVqgKvrKv8DCH0QABoMNjM3NDIzMTgzODA1Igz8B4Om4cuJ48DpMvYq3AO1zyjgg08G8hao0%2FbdjMWZB71swt8DLwla3M0ONe%2BGoA1XdbqStxJKktR%2Be9Ox%2BdDdQN9odcebK2IhJhUxe7zNURPIlEjO0GQoFOXsl7Vc4zibQaP%2FeqMgdINR9JPrjibEj7nbM1IOrLCei7BaKHYTRxVjlT8%2FEq7q4WjF8OUgdanObijSTUN5BaXtVNyA0gdT60n%2FB8RwuI21Ehn2KLt9h0bDQyk0T%2BdSQkgpB5jZKCPeKD6lpHKiFofC8ZFmXcmXqkO%2BkDBHNEAVrRftICbyfSGcxT0Hskeoo1oR7xeeYlnQn5DPDYBVPATVkr%2BQgBQba2xzkm7pYmWOM60Djnk7ZKhjdHlTAucL%2FmlwAVfw8049Wa6sadaRUZWRZGCl2PhB8oTsxg69aayIIIVfSPH7BiE4V19w%2BtTmw7e8rm3MRho89VF82RlfhedujSPvmvoLDyyM3gwPAVCYSWXxMSd3a%2FlZRkg2NqE0RRS%2F2anoshN6GUEkahuhlsf6Hl4nb9erpnu15bxC5bBvIfS6IRbWBouZrsA5DmMBPkHidOuuUpAmo5Qqi1cXsU%2FMOUclHmuey16t%2B5JjGp9HAVUeSDnUfZqW6jUfMm%2F5t0zA%2FL0e5d59DS8Fq5sISbMd3zCIq4rKBjqkAcqik51oruTsYb%2FHKM%2BdtnkHRFeTs6%2FP8fXmpXWZNrNTLTrmDS0wa8Hh0GMbW9sMOwrkImprWVdXiKjmGmy4CIQwHK%2FPigbl9Lu0RkTI8yoF3HL4Fou%2FYCQq3QNRCiv39b6orFR6xL9VzoiuB9dRMgvqFPKWP33o4HuDU2OrsCh8YOMooMdJOqO9hhwXzZsXXj%2BIWbHRhFbNjgT0OwRfU4e7fjQq&X-Amz-Signature=8e108de8fb75f43e5d4244b79bd4ce7806aa24db2f4d751500d8678fd86f838b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

