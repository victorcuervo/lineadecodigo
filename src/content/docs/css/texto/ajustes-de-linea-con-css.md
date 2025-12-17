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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMGHVXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNaoUItVFXhegh2m534ADFRPoisF1Tpc%2BuMXaRsOOMFAIgWcvsc2slqBnzBVHcAMm8nD6SztEF79pWlcFltPEmw9sq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKyh1Jb8cJ9rS%2BEVFCrcAyZ0g4s1c28uWaDzyI6QARo8qkDssH2ge2rMvYXG%2Bugp3I3OYOsm0LJOTEwz77O%2BBdcWU6Bsa7Qj%2F0VMuNzWUfVJPmHD6ZXo0VevjNvYJ2zhq0ZPBSrrQkfpHHOeBNWJMhMpniKY%2FGteSgC%2BmqwKEuh0kQpI%2F1kShlwZQEYWVddHlGqE2gd2%2FNOM32vNcH1e3nlXGL31vB0UFQha30Fgsx9aHP75aG3avnlBYvXQeJ6Hq6K%2FSmQGEO4Inpis0RmQ9kf1EosnI9HOp4WbZK14ACKpEGI%2BYEp00C5ilaR64RNVKzkr7xuG0PkIq2kPiWX8fdJDYHv96a%2BB9hm6bXvXR8kUXGvhgx5CeKgNQw9Menb5V7hR%2B9%2BltsClJKS7WvaqcxJHRzRZJT%2FN4ZVlVN1QHMBBrgIBGOQtcHjjG5uHjQoSSJ1eJoZubWgrf6PHZKhW8w%2B92FS9Yxh41PQsKo%2BkjJ11fTUh1zGNO6U9TKo4BnnTLShQuWhyy7ympyFaedp8H6FEQkrgQUYJxa9uK6RZNsGSlt4bZBAKlE69x0wDkO0oGpz1OvFTFUHPzWscINC2dbUfK4QTmfjwlhugXTHvP78stH0vCjVsR1Ju9bexWY%2BKzNpXAsNm0sRdlfUCMLDwicoGOqUBW67HgeS9qDPz7XfEmAP29%2FJr0TKE70teFUNTxUCYRhxjySwNrLQfDnM2lvTJybClHygKUTcyCjbjhvAYTwEi2fRtCzggWNWPoeEW1e%2BmgG6zIPeNhTx%2FytvTbKlv2FcMEfBbcf60sYertlzDCQ8RaGWGQuTR3VPgwaj%2FcA%2BvilDtdhtofZIcE28Z1h0M3MRoRx6BdanBejQSOgm4Kjs6FX0BxyqC&X-Amz-Signature=46bb43dda564c60020c24ae808cc089952251093ac2ab57a06c892157111060c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMGHVXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNaoUItVFXhegh2m534ADFRPoisF1Tpc%2BuMXaRsOOMFAIgWcvsc2slqBnzBVHcAMm8nD6SztEF79pWlcFltPEmw9sq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKyh1Jb8cJ9rS%2BEVFCrcAyZ0g4s1c28uWaDzyI6QARo8qkDssH2ge2rMvYXG%2Bugp3I3OYOsm0LJOTEwz77O%2BBdcWU6Bsa7Qj%2F0VMuNzWUfVJPmHD6ZXo0VevjNvYJ2zhq0ZPBSrrQkfpHHOeBNWJMhMpniKY%2FGteSgC%2BmqwKEuh0kQpI%2F1kShlwZQEYWVddHlGqE2gd2%2FNOM32vNcH1e3nlXGL31vB0UFQha30Fgsx9aHP75aG3avnlBYvXQeJ6Hq6K%2FSmQGEO4Inpis0RmQ9kf1EosnI9HOp4WbZK14ACKpEGI%2BYEp00C5ilaR64RNVKzkr7xuG0PkIq2kPiWX8fdJDYHv96a%2BB9hm6bXvXR8kUXGvhgx5CeKgNQw9Menb5V7hR%2B9%2BltsClJKS7WvaqcxJHRzRZJT%2FN4ZVlVN1QHMBBrgIBGOQtcHjjG5uHjQoSSJ1eJoZubWgrf6PHZKhW8w%2B92FS9Yxh41PQsKo%2BkjJ11fTUh1zGNO6U9TKo4BnnTLShQuWhyy7ympyFaedp8H6FEQkrgQUYJxa9uK6RZNsGSlt4bZBAKlE69x0wDkO0oGpz1OvFTFUHPzWscINC2dbUfK4QTmfjwlhugXTHvP78stH0vCjVsR1Ju9bexWY%2BKzNpXAsNm0sRdlfUCMLDwicoGOqUBW67HgeS9qDPz7XfEmAP29%2FJr0TKE70teFUNTxUCYRhxjySwNrLQfDnM2lvTJybClHygKUTcyCjbjhvAYTwEi2fRtCzggWNWPoeEW1e%2BmgG6zIPeNhTx%2FytvTbKlv2FcMEfBbcf60sYertlzDCQ8RaGWGQuTR3VPgwaj%2FcA%2BvilDtdhtofZIcE28Z1h0M3MRoRx6BdanBejQSOgm4Kjs6FX0BxyqC&X-Amz-Signature=245c0ee5d76042d24881490f9e8876c709ce8818300e45057d6b747396c35a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

