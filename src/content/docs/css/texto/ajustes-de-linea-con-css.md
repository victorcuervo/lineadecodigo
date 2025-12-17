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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOEHKQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOI42jM%2ByQHQfmLwVi2viBu2bNpKIcD24C1ZDmFTEBVAiEAmLWYWgEd7RSaVtP6qK9Kqg6c0LiBRGdp8Rq50J2bXIAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBoiISLSlqexoKjJMSrcA%2FrLlhHWEZPfa7krixowzupc%2FeleGSyAESahxt4ibPis9cU0JZl3OJ1ysmG%2FdGhkkqhKXihu9BCTBPdoZt1CKciFMETJHNzq%2FnKi99Rpq4hSuB4Nvpl7txrELG%2FnKMd7kFCOZ1XYgBHbazpjVzi5N2muZomvIJ6f8poQVGoPNsPxCiryeWKzlqzcdCDcM4q2PJyiJwgQDKj2MhGMLzabKOs%2Fvpqvc0sqxi7UYcYKE7uOW41LnWI5%2FvsrSR4nK%2B%2FbCf6EpJ6fMp3WkwbhUQwRsKXiJhr1py0g17Rd2zWuW7Aws7kweAeeqzgHPXXZDIRRGCE3pNlsANa6xEAOyfXbdEZeT%2BRAG2e8nqMnIY1Xx2l4cVOWcAk6wZeWxGV0Gp1K6uMvwVU3J4POlGc5JbTj64MLWANNGN8ZTMa%2F5KToc7Q0v%2BY2uzQl7s3n%2FowUkkD%2Bkwbfode4NNccIpLfS8CRJWILt57yx%2BSpKaLCximLIScsq4jWRq1jwyZZq8LqdAQNJdthMdk7bXaYun9aoQ7NWaVlB6DcpTEgf5t2LvH837CDqAfon6QjlBoSx8ewaQS7mT8dhI9MchwxhUn0T8m%2BHrDkYjyjdhPLzVZl3hKLSqndgCEuDd7S8c5VekxwMJmqisoGOqUB%2BCPMEGAwBm7bTKO9TeXcEc31O4UMCkKdXr6S78vPfJd8xNXPcZJdGq7hsJ8r58AgkNzyJoMVB3y%2BWuHy%2F3Pnssiiqb3YtWLEWxD9Hx3%2FMzl6IJIboapKjgx1gG5426wGq6oJJPKwDyUkGH0QjkcI2CrtdYn0ti7Z9f%2BugmS8UtUUVurxiY%2BeL2%2BY034hPdW2BJtGkiF0lct8mLwKOIgUuMV2VxmD&X-Amz-Signature=5985180081e4a1838203c656b6f3066c6d5652943c4bb138ccfc516f5565d974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOEHKQG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOI42jM%2ByQHQfmLwVi2viBu2bNpKIcD24C1ZDmFTEBVAiEAmLWYWgEd7RSaVtP6qK9Kqg6c0LiBRGdp8Rq50J2bXIAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBoiISLSlqexoKjJMSrcA%2FrLlhHWEZPfa7krixowzupc%2FeleGSyAESahxt4ibPis9cU0JZl3OJ1ysmG%2FdGhkkqhKXihu9BCTBPdoZt1CKciFMETJHNzq%2FnKi99Rpq4hSuB4Nvpl7txrELG%2FnKMd7kFCOZ1XYgBHbazpjVzi5N2muZomvIJ6f8poQVGoPNsPxCiryeWKzlqzcdCDcM4q2PJyiJwgQDKj2MhGMLzabKOs%2Fvpqvc0sqxi7UYcYKE7uOW41LnWI5%2FvsrSR4nK%2B%2FbCf6EpJ6fMp3WkwbhUQwRsKXiJhr1py0g17Rd2zWuW7Aws7kweAeeqzgHPXXZDIRRGCE3pNlsANa6xEAOyfXbdEZeT%2BRAG2e8nqMnIY1Xx2l4cVOWcAk6wZeWxGV0Gp1K6uMvwVU3J4POlGc5JbTj64MLWANNGN8ZTMa%2F5KToc7Q0v%2BY2uzQl7s3n%2FowUkkD%2Bkwbfode4NNccIpLfS8CRJWILt57yx%2BSpKaLCximLIScsq4jWRq1jwyZZq8LqdAQNJdthMdk7bXaYun9aoQ7NWaVlB6DcpTEgf5t2LvH837CDqAfon6QjlBoSx8ewaQS7mT8dhI9MchwxhUn0T8m%2BHrDkYjyjdhPLzVZl3hKLSqndgCEuDd7S8c5VekxwMJmqisoGOqUB%2BCPMEGAwBm7bTKO9TeXcEc31O4UMCkKdXr6S78vPfJd8xNXPcZJdGq7hsJ8r58AgkNzyJoMVB3y%2BWuHy%2F3Pnssiiqb3YtWLEWxD9Hx3%2FMzl6IJIboapKjgx1gG5426wGq6oJJPKwDyUkGH0QjkcI2CrtdYn0ti7Z9f%2BugmS8UtUUVurxiY%2BeL2%2BY034hPdW2BJtGkiF0lct8mLwKOIgUuMV2VxmD&X-Amz-Signature=dd01ec25008e31c954e52d301e02fb7f9f4470abb484c846f5ea6be8fe848870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

