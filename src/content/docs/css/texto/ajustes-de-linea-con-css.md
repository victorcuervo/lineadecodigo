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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446J3RJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZW96g%2B2ny%2BIW9EVZuYaTtA4KTwAR0w6xjTXDzsSm0AIgBkoe1sIbfRwlh6Wfa9Lx4Pgkl%2BT39sB1rm0jwqVEOukq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI6ava4Yay%2Bo5nOWAyrcA6Rvf%2FZ9RBfVHnWfcgzwj0UQKe7qEnwa1LZveb0mucDgyhWnPyRcp0AZc0zaHSEjdWHkitXCQXcfmyitP%2Fz92Ekh5hd7Po9yTfF6eDLWip1ngPPvm3xrqirT9YVkHCpJU6M%2FhV4gm2PPAbw4UpM%2F5OYcpPlAcVL7lpzJs%2FVXaTfx%2BA3ihvNe9F56z6x%2F2EItKdlYQksedS%2B9eskfKGIZcLUCTZVUlLl%2FeRN5kEWb7uBQr38Y7I9cWYjQPGk5FyROvIDEguQemoC4%2FuYRHcau6WxNLfKp6NJZRiyjWI7emzVHoPMg70Foc%2Fona%2FLPNvvVx31vATXxyc9GA7YuCEVJ17Mv28zMiaOQvqvMROQz8cS7%2BKwu1nCKbn4iAItgk%2Fg2xWDr3WOgPh5nTinJ13FRiEEI2DfNLSGnCyRWaZnaIybt5hKCEjs9g6QjUC%2FEhsgYwD4Pcp2v1v5q0o%2FpIKatPf96ijS3C06jt8EfUgoWoHKe%2FxZnA44goPuFE2VQZiJZFdgOUYdRoKyfu9C6VuB%2B3UE3Jonm9iiyWLCRpv8P6PCj%2BbPm28KBNjBeygQ1BrAMS6WaDokHvV4%2BV%2BDpvlo3bY37ThnAhn9paUY0cA82EJtdvCvgl2r1JHtaozgRMJfjisoGOqUB6K%2FAUGygnGmNOa75Nsg5rPZzNK96t9jhIDArJq0Vk71Hhc9PPH3iibst2D8mTvSV2V1IPrvXNAGdiqbTwlzGcqEh0vyC44m0%2FmC4dJt5RuIdy0pCVNyRYAtTJUfF2TTAO6LjTHFZ2ePEeoHrxONJgJGyyCwDhj1mwMjUhd7yTUZzbcWm7VyaX3uiGmo%2F4cDnDi2zBCWGujemtew4Gt8VCHEAjV0H&X-Amz-Signature=47ec9b48f4a25470a86e9ea5abb27b1ee7239277b69e81ef0ba665fd508705b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446J3RJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlZW96g%2B2ny%2BIW9EVZuYaTtA4KTwAR0w6xjTXDzsSm0AIgBkoe1sIbfRwlh6Wfa9Lx4Pgkl%2BT39sB1rm0jwqVEOukq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI6ava4Yay%2Bo5nOWAyrcA6Rvf%2FZ9RBfVHnWfcgzwj0UQKe7qEnwa1LZveb0mucDgyhWnPyRcp0AZc0zaHSEjdWHkitXCQXcfmyitP%2Fz92Ekh5hd7Po9yTfF6eDLWip1ngPPvm3xrqirT9YVkHCpJU6M%2FhV4gm2PPAbw4UpM%2F5OYcpPlAcVL7lpzJs%2FVXaTfx%2BA3ihvNe9F56z6x%2F2EItKdlYQksedS%2B9eskfKGIZcLUCTZVUlLl%2FeRN5kEWb7uBQr38Y7I9cWYjQPGk5FyROvIDEguQemoC4%2FuYRHcau6WxNLfKp6NJZRiyjWI7emzVHoPMg70Foc%2Fona%2FLPNvvVx31vATXxyc9GA7YuCEVJ17Mv28zMiaOQvqvMROQz8cS7%2BKwu1nCKbn4iAItgk%2Fg2xWDr3WOgPh5nTinJ13FRiEEI2DfNLSGnCyRWaZnaIybt5hKCEjs9g6QjUC%2FEhsgYwD4Pcp2v1v5q0o%2FpIKatPf96ijS3C06jt8EfUgoWoHKe%2FxZnA44goPuFE2VQZiJZFdgOUYdRoKyfu9C6VuB%2B3UE3Jonm9iiyWLCRpv8P6PCj%2BbPm28KBNjBeygQ1BrAMS6WaDokHvV4%2BV%2BDpvlo3bY37ThnAhn9paUY0cA82EJtdvCvgl2r1JHtaozgRMJfjisoGOqUB6K%2FAUGygnGmNOa75Nsg5rPZzNK96t9jhIDArJq0Vk71Hhc9PPH3iibst2D8mTvSV2V1IPrvXNAGdiqbTwlzGcqEh0vyC44m0%2FmC4dJt5RuIdy0pCVNyRYAtTJUfF2TTAO6LjTHFZ2ePEeoHrxONJgJGyyCwDhj1mwMjUhd7yTUZzbcWm7VyaX3uiGmo%2F4cDnDi2zBCWGujemtew4Gt8VCHEAjV0H&X-Amz-Signature=68607a73015cf142ca1d052335bdd10110c486ab17cdfefe0d46685adb11d641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

