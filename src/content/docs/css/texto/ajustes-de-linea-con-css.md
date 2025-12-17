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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6YGXGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhs9AbQ9HjI3jZfZPSz3KZqPVrQkL%2FfFPuxRMkVp8URAiBpGzoGIiSMEMDTHXA3iXa26m43Wk9PtvtkIgaPcZLphyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2BLLexT8td1G8qpAKtwDbbw%2BtIRSmRn2ufhU7dkRNlf8aD91tu%2FOqsKr3XptGtZawPPw14VJ%2FWH1ZbyiFyEfL53SOI%2BI6QAStatWpkEm21PBYmw4qnZQfUvB8zbEnGWqf0%2FWKwei4aWUfp214D9tRwONcolVi%2BuM5LH4tBgUcdajnXuvEH1a9cvuRFtkQiWaKlwVVfi3YSuLEWwt7wSEgkspwEu4i6SDO7%2BlJsV%2Bs97GLT7E5Cuo%2Bi4KEGgtqS%2BcbYKmWO2meVC0aGR84NjFVsxSvbgLBbQYlATeeoMEUvmLs7OQuThb81bcSc02dKQ333ZauDFlhOpmufMc3YzeLOYkUtVEOmZB4eVkBwZ1m589mw84LfvlF8eP5J9LKZGP9hBkk9rTAwx3nGawvllyQqDbu%2Btpq1Z1I6nFE5fJs%2BsELqarU8a1ZhA4lh2EwfC1fxP%2F6hrJL6yxXobPKG8ZYZdBjviQIv%2BUMGzxvKK4Xablg558HZ7XGpJo8OnAJVLji8lRbdHB%2FmK6iLEdM4JjSNioyCIxZrvl61tWn5OqjWbHndSm7NqhFvU3%2BvfR2%2BkhWeGPC3fcZVV3ctBbtgDd3HdgNYQunB1I7MUtWgY9i3Q1E5Pu8dmtc7YDcvJ26UGTw6gEjUZahjhCoeYwybeJygY6pgHsdZSJjmuIwi4UgNY1rt2Q7W1DttkWAaUSxSpDiTqXBqQQabwUXkseRZ28KaP39OVDDd8VVPlX8lb0o%2FVi0b45PuLx6YG9wu7gHjVeTJUVBlJjsAgV2V7JIqrL%2FY6yShtnEjpVN6UMvgIblF1%2FcTCYuKlnTqxwXvQh%2FGa8zQcCfduIzqMGaFDZKWn5PVONiDhNBKjjHIFuxq1GvsqloukjallCe%2F1d&X-Amz-Signature=55b7accffee6cb1bc95ffc5eb484b2a7fb1e379444a243d4e7d9ed9488dc70a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6YGXGY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhs9AbQ9HjI3jZfZPSz3KZqPVrQkL%2FfFPuxRMkVp8URAiBpGzoGIiSMEMDTHXA3iXa26m43Wk9PtvtkIgaPcZLphyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2BLLexT8td1G8qpAKtwDbbw%2BtIRSmRn2ufhU7dkRNlf8aD91tu%2FOqsKr3XptGtZawPPw14VJ%2FWH1ZbyiFyEfL53SOI%2BI6QAStatWpkEm21PBYmw4qnZQfUvB8zbEnGWqf0%2FWKwei4aWUfp214D9tRwONcolVi%2BuM5LH4tBgUcdajnXuvEH1a9cvuRFtkQiWaKlwVVfi3YSuLEWwt7wSEgkspwEu4i6SDO7%2BlJsV%2Bs97GLT7E5Cuo%2Bi4KEGgtqS%2BcbYKmWO2meVC0aGR84NjFVsxSvbgLBbQYlATeeoMEUvmLs7OQuThb81bcSc02dKQ333ZauDFlhOpmufMc3YzeLOYkUtVEOmZB4eVkBwZ1m589mw84LfvlF8eP5J9LKZGP9hBkk9rTAwx3nGawvllyQqDbu%2Btpq1Z1I6nFE5fJs%2BsELqarU8a1ZhA4lh2EwfC1fxP%2F6hrJL6yxXobPKG8ZYZdBjviQIv%2BUMGzxvKK4Xablg558HZ7XGpJo8OnAJVLji8lRbdHB%2FmK6iLEdM4JjSNioyCIxZrvl61tWn5OqjWbHndSm7NqhFvU3%2BvfR2%2BkhWeGPC3fcZVV3ctBbtgDd3HdgNYQunB1I7MUtWgY9i3Q1E5Pu8dmtc7YDcvJ26UGTw6gEjUZahjhCoeYwybeJygY6pgHsdZSJjmuIwi4UgNY1rt2Q7W1DttkWAaUSxSpDiTqXBqQQabwUXkseRZ28KaP39OVDDd8VVPlX8lb0o%2FVi0b45PuLx6YG9wu7gHjVeTJUVBlJjsAgV2V7JIqrL%2FY6yShtnEjpVN6UMvgIblF1%2FcTCYuKlnTqxwXvQh%2FGa8zQcCfduIzqMGaFDZKWn5PVONiDhNBKjjHIFuxq1GvsqloukjallCe%2F1d&X-Amz-Signature=48be9ba91d01e51e9c6ef497d242b465abf21945605396d51e46fb767efbd2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

