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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSSEOI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxJNdl9PPUcJgSltbrrtZieMruKZStzm2%2FFuH5SuKH2QIhAP7xOY0IGYqEj0ceW1vL8ifcd12nsfTiPPQMjWTChYm3Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxD2198etAJ8zRxuNAq3AN1LGv%2F1eEeNh9dIv3EEBBAvY1rW1uvi1fCsElhBoj%2FYE4r9k0tnAlUCh6uGqCl%2FUfYp4CH7k6k%2FG%2FSoKZBtuFKiq%2Fk4ZW1zx5IfpbaD2%2Fc4M0QZ3kwHKnkzsO%2BFrU7WSqR9%2FCR19OcV7TdPwCZca3OpU3bypPnItjsTh8uTy59eSfPWRW5ElmQGuTgRklKRwLsj6ylFfMEaQ8ioWj0UDf%2B1%2B4xTjkD5N1eXD7Q%2FiTRelFy3xrnW%2F%2Fmy%2BoUwc%2Btvx6TFD7oiVtXlJPaEkt2NawAuMmrJbKLLxjrMD0RGzH%2BX4Od%2BvVfovL4PfEGyfF8RNp9wWCBUbf5CFxWLxBcicI46W5ul%2B%2B5Meq81eIIbB9cwkN0eTCwrby%2FUqkdyTouqvfzAwqs5UiMawR6Wcng8HBuuydqXS0mWd5AYvGC4OtryOq1sSf6BKEEs0nUlbe0fpGpRAY%2B6ElTujDBz9TwZcLmzSHaOK2MC9K0qyXnkgHO%2FF3GKnNNUJ4WCWamQaXoKEzHaQ%2Fz19XkwgqS6A38kM4H2ODeMuZWPRlgR%2BrEZ2cGLPThMH4Dn36GHaIkRUBtJdxwI%2FfH6Cl2ZVJ0QnAGrMMfSRVBJe1W33L75bzUU4Qo6CDHIdNRnZTnhpUYsTCt74nKBjqkAex%2Bq8h8HQe8Q%2BK1j8mk%2Fr3YrLyXtm2o0pd0dSZ9DBVJQg0aF2ASDuwhSYLIZ5rVTqQk3Bpl5wBOiAhuSI5uN0YAuoEmeAEzB1RbFAsC3Z%2FsqS5Es02InU8WmOpWYE9XtBoCdTIEoeow3v1Dmz1Q06imRbwzjEyy0CcLpwnpKDQoRQEjunbH5gaaubJ3I1F%2FQc95EKInAfS4oUzhRgSffuSvIHqd&X-Amz-Signature=3746a9f1e1dad4b9c984546e4ac36d4bbc4b943b181e9781ce0fa76c3057b090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XSSEOI4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxJNdl9PPUcJgSltbrrtZieMruKZStzm2%2FFuH5SuKH2QIhAP7xOY0IGYqEj0ceW1vL8ifcd12nsfTiPPQMjWTChYm3Kv8DCHsQABoMNjM3NDIzMTgzODA1IgxD2198etAJ8zRxuNAq3AN1LGv%2F1eEeNh9dIv3EEBBAvY1rW1uvi1fCsElhBoj%2FYE4r9k0tnAlUCh6uGqCl%2FUfYp4CH7k6k%2FG%2FSoKZBtuFKiq%2Fk4ZW1zx5IfpbaD2%2Fc4M0QZ3kwHKnkzsO%2BFrU7WSqR9%2FCR19OcV7TdPwCZca3OpU3bypPnItjsTh8uTy59eSfPWRW5ElmQGuTgRklKRwLsj6ylFfMEaQ8ioWj0UDf%2B1%2B4xTjkD5N1eXD7Q%2FiTRelFy3xrnW%2F%2Fmy%2BoUwc%2Btvx6TFD7oiVtXlJPaEkt2NawAuMmrJbKLLxjrMD0RGzH%2BX4Od%2BvVfovL4PfEGyfF8RNp9wWCBUbf5CFxWLxBcicI46W5ul%2B%2B5Meq81eIIbB9cwkN0eTCwrby%2FUqkdyTouqvfzAwqs5UiMawR6Wcng8HBuuydqXS0mWd5AYvGC4OtryOq1sSf6BKEEs0nUlbe0fpGpRAY%2B6ElTujDBz9TwZcLmzSHaOK2MC9K0qyXnkgHO%2FF3GKnNNUJ4WCWamQaXoKEzHaQ%2Fz19XkwgqS6A38kM4H2ODeMuZWPRlgR%2BrEZ2cGLPThMH4Dn36GHaIkRUBtJdxwI%2FfH6Cl2ZVJ0QnAGrMMfSRVBJe1W33L75bzUU4Qo6CDHIdNRnZTnhpUYsTCt74nKBjqkAex%2Bq8h8HQe8Q%2BK1j8mk%2Fr3YrLyXtm2o0pd0dSZ9DBVJQg0aF2ASDuwhSYLIZ5rVTqQk3Bpl5wBOiAhuSI5uN0YAuoEmeAEzB1RbFAsC3Z%2FsqS5Es02InU8WmOpWYE9XtBoCdTIEoeow3v1Dmz1Q06imRbwzjEyy0CcLpwnpKDQoRQEjunbH5gaaubJ3I1F%2FQc95EKInAfS4oUzhRgSffuSvIHqd&X-Amz-Signature=5fce37deec3d200264878a618a953f69e4b4700d1fcfa0c470eb78895197f60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

