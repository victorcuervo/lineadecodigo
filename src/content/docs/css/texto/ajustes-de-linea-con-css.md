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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNECOIY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADOLdanYiwhJplmmpkvBFCAFRCm8P6il0jfYJC5LHouAiEAoRygszQYwwXgdQ9teVlUJVvDt8HW0Env%2BUZLGd0zwTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF62CL348X0%2F7unr4ircAyl8%2FyWL76S0IZnKk5nnbZzCIqGjGx3DjslONztaYrYFUUWVWzrp0JIJogmPt2zgWMFaxvtd0%2B%2Ff2o7cdmDTcfSBelcYDiSnbBzMQEpSH7ZnooEp4psmxanqRlFanSPSO5%2FYyt229GOLuB5pPJJtAYOLypyadBpvY9F95mOQ5DNdgC8S0x0Du2nWHM1r3EH14iYKyt%2Bz3x%2BZLGkPjVkhiLYoPyZ5QZtOIpDF5y5Q7m0HGpgGcRmfHlAbzwp1EGLh3SoovdoT6KAU6o%2Fh57KITCzU2QqpzDDMpA70pHakFAUFGRYmpFXj7DpaDJBSwcgRL911Rc94U127QFtHRPcXslt%2B94Poj0vnx9V452Dkzjpm5CZb0Rlr2eWbp49y%2FX%2BkGHxoxLoaDH8w%2BczhkGK3Eu2szvi05NgAtujkzUfFsnrGn1L7GGNet25fn4%2FbJr6tx2I5LYGsQgqyvtbfXoXpYuS9exCRMjcN94Lzi7qqA1RbqyG5NI4dAQD8IsYugpS2%2F4ft6dCdfmEfpmniRCQsfyeMauHn9yiuQiJp4qYbNTvzG%2Bf6%2BrHTllkelOIKwYiHJQMs3dPW1Qu5kUWPbylxviqVkg743pVNWrYajVFFf%2FWgvAJUmnZSt5JgqQlXMLSWiMoGOqUBhzqoLOiHY4ar6fhlQmwiCMf91VIflbWXUQHlTlvAnhk8ez40AYQeln5CxdFRsE9rjZVqYqBqdQYE4R5rA8WD%2Fmg1T9nOW69HUJM6HZrNGkB8Xd3%2BVyGtIWuQ9NnvJpoaLfNSPKLGj2UZyZZZ5OLlc6xgTrEDdrUp%2BqJgQwCDMk%2FxuJKvtjvfpiSAunglFkw%2B4XotX6yRpJFVfH7PgvPJ2aNWWQzV&X-Amz-Signature=8d9525bb1dd89656ad5ee8286fa8e39112d8667d593ff41392a002fc353c6704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNECOIY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADOLdanYiwhJplmmpkvBFCAFRCm8P6il0jfYJC5LHouAiEAoRygszQYwwXgdQ9teVlUJVvDt8HW0Env%2BUZLGd0zwTQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDF62CL348X0%2F7unr4ircAyl8%2FyWL76S0IZnKk5nnbZzCIqGjGx3DjslONztaYrYFUUWVWzrp0JIJogmPt2zgWMFaxvtd0%2B%2Ff2o7cdmDTcfSBelcYDiSnbBzMQEpSH7ZnooEp4psmxanqRlFanSPSO5%2FYyt229GOLuB5pPJJtAYOLypyadBpvY9F95mOQ5DNdgC8S0x0Du2nWHM1r3EH14iYKyt%2Bz3x%2BZLGkPjVkhiLYoPyZ5QZtOIpDF5y5Q7m0HGpgGcRmfHlAbzwp1EGLh3SoovdoT6KAU6o%2Fh57KITCzU2QqpzDDMpA70pHakFAUFGRYmpFXj7DpaDJBSwcgRL911Rc94U127QFtHRPcXslt%2B94Poj0vnx9V452Dkzjpm5CZb0Rlr2eWbp49y%2FX%2BkGHxoxLoaDH8w%2BczhkGK3Eu2szvi05NgAtujkzUfFsnrGn1L7GGNet25fn4%2FbJr6tx2I5LYGsQgqyvtbfXoXpYuS9exCRMjcN94Lzi7qqA1RbqyG5NI4dAQD8IsYugpS2%2F4ft6dCdfmEfpmniRCQsfyeMauHn9yiuQiJp4qYbNTvzG%2Bf6%2BrHTllkelOIKwYiHJQMs3dPW1Qu5kUWPbylxviqVkg743pVNWrYajVFFf%2FWgvAJUmnZSt5JgqQlXMLSWiMoGOqUBhzqoLOiHY4ar6fhlQmwiCMf91VIflbWXUQHlTlvAnhk8ez40AYQeln5CxdFRsE9rjZVqYqBqdQYE4R5rA8WD%2Fmg1T9nOW69HUJM6HZrNGkB8Xd3%2BVyGtIWuQ9NnvJpoaLfNSPKLGj2UZyZZZ5OLlc6xgTrEDdrUp%2BqJgQwCDMk%2FxuJKvtjvfpiSAunglFkw%2B4XotX6yRpJFVfH7PgvPJ2aNWWQzV&X-Amz-Signature=c92a17f0f2e6e5dc74594422f4a717cc7e80b48e555517875c4aec71bbe980d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

