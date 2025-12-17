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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VUEZTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi%2B78sTKTnPHYhaguA%2BBECdn0YhI0N%2FGoJFEyPxA5jSAiBI4IrY7t%2Fq2%2BKDnA4Dn68ZSrpQTNsOWJrpUbgRtotmmyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQjLyG%2FVlwOvygr2vKtwDkd5N2EGQ6DKttJzm%2B1lBuQ9x7KbUpC%2FGspzoKVOLNZAkBFCrW3qkPO0EyrE5IiMYXa6BvUTLBAq3yVFs6el%2Bw31kBsBhorC6gW4EzXCjoJyNzm%2FFVNyujx4A6pQk1Mv8qmV1kR4t14OKRIpwOcRSA70eqRboXOtGxfUbuix8Os5x0cXE7CUIsa2B60UE0%2FRc9jmrl9czTyn91lEfh9pR%2Bx01WyspWT3Nyu6j8%2Bwg9na5vR71vZANTACCLBrJYJ54JKFduLh0pswBa4dlLgIqXgxmfWKirO6Na60LslsK71n9dgLlw9BXnkOI3OwEOnFdJ6NZx99wvALiBS0C3yXsLMoajqRLxUb95fz2StBBCcJnPoUdJmyR3gmu%2FcHi7X3z3j9wjR5ehRZ%2Fo%2FIWYZJ%2BfSkzXH5jV6AKkp3%2FCIaGHdZrpsnIg%2BCkP7tBRJCnWBecOlyrKke1lbiShE5LbJ7dW6QCmgIUsI0IUsUBujVCRaYFPj80yFv3OlT8AbpDFNVMuP2%2BtLlaPIZlXpisTdZVgFDISqz9scq%2BHqPlf2dvmT0LvJn3g0K9NsNqA53IJrODh2l5szf47v5UKUjA70fqDeEOIJt17x9q300zjp67NPoObyY10K5pz%2FExoAgwgtGJygY6pgH2wPDew25jUb4jk7ltXo29RNEY2n%2Bv1MB1Y%2FwMk4f4sNG0uaKNhS1ddL0GgNP62YXCQOGUqEg7kvhJyFcoVtvhiNs%2BUMaGXoQ51fbpief5jevugmjJLcZ7jmU%2Bc%2BqtLaqTxwKagAJ1u%2Fa9CRgIYT1D0obdNCq9%2FMXQQN6rIAp7C3aTGb4wPqynKBfTT7li6E9JQeQudrvEENc4or51dm%2Fy8DIV5Rf9&X-Amz-Signature=5a33a03922fe9af3650389e72a2bbef340868727b3aac5b4bac81114e5e53a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VUEZTH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi%2B78sTKTnPHYhaguA%2BBECdn0YhI0N%2FGoJFEyPxA5jSAiBI4IrY7t%2Fq2%2BKDnA4Dn68ZSrpQTNsOWJrpUbgRtotmmyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMQjLyG%2FVlwOvygr2vKtwDkd5N2EGQ6DKttJzm%2B1lBuQ9x7KbUpC%2FGspzoKVOLNZAkBFCrW3qkPO0EyrE5IiMYXa6BvUTLBAq3yVFs6el%2Bw31kBsBhorC6gW4EzXCjoJyNzm%2FFVNyujx4A6pQk1Mv8qmV1kR4t14OKRIpwOcRSA70eqRboXOtGxfUbuix8Os5x0cXE7CUIsa2B60UE0%2FRc9jmrl9czTyn91lEfh9pR%2Bx01WyspWT3Nyu6j8%2Bwg9na5vR71vZANTACCLBrJYJ54JKFduLh0pswBa4dlLgIqXgxmfWKirO6Na60LslsK71n9dgLlw9BXnkOI3OwEOnFdJ6NZx99wvALiBS0C3yXsLMoajqRLxUb95fz2StBBCcJnPoUdJmyR3gmu%2FcHi7X3z3j9wjR5ehRZ%2Fo%2FIWYZJ%2BfSkzXH5jV6AKkp3%2FCIaGHdZrpsnIg%2BCkP7tBRJCnWBecOlyrKke1lbiShE5LbJ7dW6QCmgIUsI0IUsUBujVCRaYFPj80yFv3OlT8AbpDFNVMuP2%2BtLlaPIZlXpisTdZVgFDISqz9scq%2BHqPlf2dvmT0LvJn3g0K9NsNqA53IJrODh2l5szf47v5UKUjA70fqDeEOIJt17x9q300zjp67NPoObyY10K5pz%2FExoAgwgtGJygY6pgH2wPDew25jUb4jk7ltXo29RNEY2n%2Bv1MB1Y%2FwMk4f4sNG0uaKNhS1ddL0GgNP62YXCQOGUqEg7kvhJyFcoVtvhiNs%2BUMaGXoQ51fbpief5jevugmjJLcZ7jmU%2Bc%2BqtLaqTxwKagAJ1u%2Fa9CRgIYT1D0obdNCq9%2FMXQQN6rIAp7C3aTGb4wPqynKBfTT7li6E9JQeQudrvEENc4or51dm%2Fy8DIV5Rf9&X-Amz-Signature=c8efaf4d039a60e4805c64919ff1ec38450bd32d5f1f9f958798dcfe133dab57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

