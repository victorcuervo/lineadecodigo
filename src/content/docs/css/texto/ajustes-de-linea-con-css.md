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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UUX56J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCpQvv28ccvPsMtrp0s8S6w0Fl%2BGblL%2F9LFIiZkKWAQIhANX50%2FNVKKztbaS4T9VjTav0Pqj02kJaqe951ESMF6TgKv8DCHkQABoMNjM3NDIzMTgzODA1IgxtBODNzoVp0f8mzaIq3AN110vsrXMh56C8O1bV%2Ffw0ccxw9K4JBwZhNuo3eDBNn6M7QXMiA%2BViZkJmzV%2FRMoQW7T68qrQQWFN7M4gTw%2FfUYKnhWt%2B7qL%2FSmzTbRvDXgSj2QKVI18ZH1sXmtQlmDDC3Kiujmkv8VFLL03UcDaa6ZaP%2Fexvainuc4PJECsvmz7o8vy7UB6uoqJYI1wx11uvANo0p3eyQfIdHYw8i%2FVxKe9nhUvqWMlpXk23%2FNNEZ6hx3FYo%2FI48GC02XjnaJ4Bowp0oTJ1yBbVedjJDk%2BjHm4PV7ur%2FI%2BIIFTwg%2BoYHXWkqJxhUmXpP4S5w1oU0eWnm0T%2BAZHWHTn1VGFBWgyHix3vQBEKP1CXeA2muvfOCr2GwWFbrm5UHDgfh6RtNwIVfkKnExEwYgpNQR0751zWTv0dOa7JGJN7W3n8R250FFHclP%2FJrhgXjR3lIU9d0wPfvCowcUVQZsFRMg2RxwGrx5Oznlrcnr5R2cBo%2BvoIViKF0dEGAlxS2ghENzKlhg6bN6awt9AVBdZatC0TxgfEWrqItQnd4BUy3QTf1fhUahYyMP%2BglrBfMxGsAVIm1LJg%2BcYMQCvFoAjCG747BREjIQQaLD7uNtnIqIkCOu0T4ZwQHdUHUWar1Q84j97zDOt4nKBjqkAZTxl8R3QYTSZYnHcvgkgn1FLtBxDj%2FFqwZXfpAkbbWhckWEUbwt2c5z20Fw%2FmuVb6SCRjB4QNULTKm7i7W5XpyGh3R5wOxIPV%2BiRzorAWdArsYPXciwpWyUEWA%2BkNWlf%2FeO9eAHcUYCLJm%2BLFNicc9w%2Bwpwd4FN6cDoE8J8hWL32tHgQ04EtrXvV3kwxNnhD2QT4lBkpbmvFYq8Y0mjcktzOdbe&X-Amz-Signature=213b85e77f36ad3fcde9e838b870d24f42ca72c99793b5cf672ce95831b44a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UUX56J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlCpQvv28ccvPsMtrp0s8S6w0Fl%2BGblL%2F9LFIiZkKWAQIhANX50%2FNVKKztbaS4T9VjTav0Pqj02kJaqe951ESMF6TgKv8DCHkQABoMNjM3NDIzMTgzODA1IgxtBODNzoVp0f8mzaIq3AN110vsrXMh56C8O1bV%2Ffw0ccxw9K4JBwZhNuo3eDBNn6M7QXMiA%2BViZkJmzV%2FRMoQW7T68qrQQWFN7M4gTw%2FfUYKnhWt%2B7qL%2FSmzTbRvDXgSj2QKVI18ZH1sXmtQlmDDC3Kiujmkv8VFLL03UcDaa6ZaP%2Fexvainuc4PJECsvmz7o8vy7UB6uoqJYI1wx11uvANo0p3eyQfIdHYw8i%2FVxKe9nhUvqWMlpXk23%2FNNEZ6hx3FYo%2FI48GC02XjnaJ4Bowp0oTJ1yBbVedjJDk%2BjHm4PV7ur%2FI%2BIIFTwg%2BoYHXWkqJxhUmXpP4S5w1oU0eWnm0T%2BAZHWHTn1VGFBWgyHix3vQBEKP1CXeA2muvfOCr2GwWFbrm5UHDgfh6RtNwIVfkKnExEwYgpNQR0751zWTv0dOa7JGJN7W3n8R250FFHclP%2FJrhgXjR3lIU9d0wPfvCowcUVQZsFRMg2RxwGrx5Oznlrcnr5R2cBo%2BvoIViKF0dEGAlxS2ghENzKlhg6bN6awt9AVBdZatC0TxgfEWrqItQnd4BUy3QTf1fhUahYyMP%2BglrBfMxGsAVIm1LJg%2BcYMQCvFoAjCG747BREjIQQaLD7uNtnIqIkCOu0T4ZwQHdUHUWar1Q84j97zDOt4nKBjqkAZTxl8R3QYTSZYnHcvgkgn1FLtBxDj%2FFqwZXfpAkbbWhckWEUbwt2c5z20Fw%2FmuVb6SCRjB4QNULTKm7i7W5XpyGh3R5wOxIPV%2BiRzorAWdArsYPXciwpWyUEWA%2BkNWlf%2FeO9eAHcUYCLJm%2BLFNicc9w%2Bwpwd4FN6cDoE8J8hWL32tHgQ04EtrXvV3kwxNnhD2QT4lBkpbmvFYq8Y0mjcktzOdbe&X-Amz-Signature=a97bd607fbe3bd7f73090d33ae2259ac3efcd3529b2c0633b7d99b71c85567f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

