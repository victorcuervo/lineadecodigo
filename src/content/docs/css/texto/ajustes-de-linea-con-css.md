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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLNKRJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWyPWmiucWr5CQeajNtWA3pPElvWrm6StRLpkfS1mcdQIhAOipJ6laX1LPjqliit7cnqrNZxWShXG4uOOso0o0h0jGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ7VAVMlM09e2xTnEq3ANEG9%2FR%2B48pW8TW2cphZxyy5KVUo9xfOC1EEZovw9HmS8XBjtEjyMP%2F8hSVx16cRLt0a%2FbzwTgZ13XeIFVbxm3YcuVcJxLIgC0vVEEXBDky%2FFxQ05xehFz9dBpPGe3iziC8GPOQ2czGDCXBQ%2F%2B7IvYQGdXWDl9L6ws902gjAAM5ttygaTiRc6EApi3owykkQDgJhk4S3SdQiliUG%2F%2BVu9m32dS0l2EUn4AchvKH%2BFeeotD%2FK6XU%2FN1mPvNW1mSd9qvftIkLe2zejOah9coGHwCxAxYmd45duKWmSTG%2BrcvRwQ1ADS9McMZ%2F1xiIBfja3j5U1eu45eHCuII%2B47hsy%2B0DfXJPckHGIK9QRzbvHeF1puF4dH%2BCgLK54%2B%2BYEI3F9pq8jWfuj11gMDbOvuEDehb%2FWJuX1fWCD3kHiDTPlNKU2kgyjWHDXT4OkAK93zolYr3h0wImWRsNEEkoSp7FgsICHtG4stfN01MIGVbm74IkTT9MnSgOK6eG52Wd4VY5%2B9YYSAsIYoy6zQJocHN8bNZ%2Bk223WCE305J0rI%2FDKNeqA%2BTzH090f0xKLlKDrw3gp3rTFMKaJNytWe2L0gZemmI5TB4RyBqnclZBObBiUdWsLR3wUKwfZjIjAOdSpDDEn4vKBjqkAZPAkrKoHouZobKkmG9AzVcOaGORoSwqmbhzmF4Bif%2BirRkU%2BpkLRFhUT5g969EBBqlUpYlfRMEqgXcVk83ZI7mdu84gpESap1DIHB4w33TjSkV9wWHztIyreFVE%2FjSj%2Bi3OZNbaOX%2FkDJiTmPwVJe9mtsKzlCruv2750xUtwRk%2FvuHA9uvMg9mBl%2F9wzSqwVn997yNFV6i27WWwu6OHsJLoYMQS&X-Amz-Signature=56b40f818b98cfcb27ff666a3e060e047a7f302a1030ae58fa3f4b06acaa3fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLNKRJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWyPWmiucWr5CQeajNtWA3pPElvWrm6StRLpkfS1mcdQIhAOipJ6laX1LPjqliit7cnqrNZxWShXG4uOOso0o0h0jGKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ7VAVMlM09e2xTnEq3ANEG9%2FR%2B48pW8TW2cphZxyy5KVUo9xfOC1EEZovw9HmS8XBjtEjyMP%2F8hSVx16cRLt0a%2FbzwTgZ13XeIFVbxm3YcuVcJxLIgC0vVEEXBDky%2FFxQ05xehFz9dBpPGe3iziC8GPOQ2czGDCXBQ%2F%2B7IvYQGdXWDl9L6ws902gjAAM5ttygaTiRc6EApi3owykkQDgJhk4S3SdQiliUG%2F%2BVu9m32dS0l2EUn4AchvKH%2BFeeotD%2FK6XU%2FN1mPvNW1mSd9qvftIkLe2zejOah9coGHwCxAxYmd45duKWmSTG%2BrcvRwQ1ADS9McMZ%2F1xiIBfja3j5U1eu45eHCuII%2B47hsy%2B0DfXJPckHGIK9QRzbvHeF1puF4dH%2BCgLK54%2B%2BYEI3F9pq8jWfuj11gMDbOvuEDehb%2FWJuX1fWCD3kHiDTPlNKU2kgyjWHDXT4OkAK93zolYr3h0wImWRsNEEkoSp7FgsICHtG4stfN01MIGVbm74IkTT9MnSgOK6eG52Wd4VY5%2B9YYSAsIYoy6zQJocHN8bNZ%2Bk223WCE305J0rI%2FDKNeqA%2BTzH090f0xKLlKDrw3gp3rTFMKaJNytWe2L0gZemmI5TB4RyBqnclZBObBiUdWsLR3wUKwfZjIjAOdSpDDEn4vKBjqkAZPAkrKoHouZobKkmG9AzVcOaGORoSwqmbhzmF4Bif%2BirRkU%2BpkLRFhUT5g969EBBqlUpYlfRMEqgXcVk83ZI7mdu84gpESap1DIHB4w33TjSkV9wWHztIyreFVE%2FjSj%2Bi3OZNbaOX%2FkDJiTmPwVJe9mtsKzlCruv2750xUtwRk%2FvuHA9uvMg9mBl%2F9wzSqwVn997yNFV6i27WWwu6OHsJLoYMQS&X-Amz-Signature=3654b285e81c71cfea5d7f4703dfbbe584d37e89a5be5584896f5a2cc1feb78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

