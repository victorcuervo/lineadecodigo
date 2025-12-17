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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGN5T6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiIfuOnx7%2Fb5EJPKBJUBGJ9M9qUix3BzZZLSpS%2FXJYtAiBcqiO2U6i5bebSTR8xqdE1IgFj%2BQmqbEEt65%2FO3v7vQCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRW1Rnx8tsL2LTI4%2FKtwDdRps9h4Oryv2RhSHDWUcSRPlVbdK0FrB4rZ48mb6ETQNwlQeZny0%2F3roycatr%2BtvNGvayuDY2bKsZ3%2FlDONH4kK9MdnIQgBWzHococIL9AB47hSaLWsiL6J8AEXf8Npx6U7xQQa%2FKvscXx7jGsl140fn%2Fv08fHgK7ICdKknPhfqW0ej7pr6jCv5j95HBavDhF%2BrN450L1nm%2BzAdHOewWtMTnzZWGKwJrEdQPrgYx2cscbeFTrXVQjWBo4o7J1JWiF%2FMZiaDtNevj3DTzFvioGbIJp6MnpOu3i16C5exgsCmrlh7Sutsfs9fDVgAmTEXvdUa7HFEs93pKAfL7shDApIE0CmglN1MaKnr9nanqUtm2J9Fi7Id9%2BQTi5q2B2yqgjpdL3TW67rIOhMY7L03jTqBxYoMWfP0qXTat1FFWFM2ciaUQ22w9c7NH%2BKN%2B5oiiZheK%2BJeTPI1GY3VvGMPrP2pv1bblnrm1rWx3ffAPBuhzANRuAgOdjdsAPCZ4tqB0EUkV9MwEAuIlfVvCC30jyJldoIAxVeG0PUjUf3ODhEDF%2FOvwjER6PaFfqSYjHfVxTV4PS4OkcNYJEGrr6Y5%2BSPo3AmqFYm1EoPKE5ga6CLgXoykwvMo%2Fxbt%2FIZ4wtoGLygY6pgFB8DkZUEUL7K5Rw%2BZRRVtJpmhneXGG1bOlK5RnPhRIj7s8HMm6YDNnWUSzTjKQF1iAl7EHZGgHexIXp2GmHsNg5wEWnUEfqpScBlgQbZoSMrFL0tYs0q5M2qZUDdHjp%2Bi%2Fh2IP1RajHObzevr2tWc6TQXueEDbKB5M4oDo5BC61YZZZSyZ1VCHmTOdcJt0cIIfG1tLr4H5EKeVT%2FFLfFwPedq746QO&X-Amz-Signature=b0fa4379ad7b03b5cdde231e23cd6821108636df28d3f5cf4c8041d2fe376dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGN5T6U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiIfuOnx7%2Fb5EJPKBJUBGJ9M9qUix3BzZZLSpS%2FXJYtAiBcqiO2U6i5bebSTR8xqdE1IgFj%2BQmqbEEt65%2FO3v7vQCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRW1Rnx8tsL2LTI4%2FKtwDdRps9h4Oryv2RhSHDWUcSRPlVbdK0FrB4rZ48mb6ETQNwlQeZny0%2F3roycatr%2BtvNGvayuDY2bKsZ3%2FlDONH4kK9MdnIQgBWzHococIL9AB47hSaLWsiL6J8AEXf8Npx6U7xQQa%2FKvscXx7jGsl140fn%2Fv08fHgK7ICdKknPhfqW0ej7pr6jCv5j95HBavDhF%2BrN450L1nm%2BzAdHOewWtMTnzZWGKwJrEdQPrgYx2cscbeFTrXVQjWBo4o7J1JWiF%2FMZiaDtNevj3DTzFvioGbIJp6MnpOu3i16C5exgsCmrlh7Sutsfs9fDVgAmTEXvdUa7HFEs93pKAfL7shDApIE0CmglN1MaKnr9nanqUtm2J9Fi7Id9%2BQTi5q2B2yqgjpdL3TW67rIOhMY7L03jTqBxYoMWfP0qXTat1FFWFM2ciaUQ22w9c7NH%2BKN%2B5oiiZheK%2BJeTPI1GY3VvGMPrP2pv1bblnrm1rWx3ffAPBuhzANRuAgOdjdsAPCZ4tqB0EUkV9MwEAuIlfVvCC30jyJldoIAxVeG0PUjUf3ODhEDF%2FOvwjER6PaFfqSYjHfVxTV4PS4OkcNYJEGrr6Y5%2BSPo3AmqFYm1EoPKE5ga6CLgXoykwvMo%2Fxbt%2FIZ4wtoGLygY6pgFB8DkZUEUL7K5Rw%2BZRRVtJpmhneXGG1bOlK5RnPhRIj7s8HMm6YDNnWUSzTjKQF1iAl7EHZGgHexIXp2GmHsNg5wEWnUEfqpScBlgQbZoSMrFL0tYs0q5M2qZUDdHjp%2Bi%2Fh2IP1RajHObzevr2tWc6TQXueEDbKB5M4oDo5BC61YZZZSyZ1VCHmTOdcJt0cIIfG1tLr4H5EKeVT%2FFLfFwPedq746QO&X-Amz-Signature=f6b53d0f5d73abc455050b9d14ff9d76c9aad83cd94aff388e12f23ced9fe900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

