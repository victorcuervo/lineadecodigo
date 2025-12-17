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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCPJWRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLeVKSwiQTeLtq6BR3SUgkRSQSO%2FIVbYkbW05RR1mZZAIhALi6qTbayks4gsnrSRLrH75u1kSdZHts68WN0tlMJPXqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTGb5NKpx9%2Bx6Uz%2Fcq3AOWAQjq8Rurpvy6A9F55ZZl%2FlNkPQCqj0tgq8Fa1f5WhJe0wkslm8KyaI9LIj9m%2Bqud2eyZIOGQPjsK81N9VpfbI4JYrVSm%2FOPiiCdlg1UR%2B%2FQdRGAoP0v7Y6WJtRaKZzt4Ku%2BpWQiVGXcIcaPKVhb9OuYpyYR9MvJpaD0iJ8EuIJEcVC86bnZC%2FpXlf0AWIb1gvZxyobjCoHocgEztyAgrT5Cy6wnGYyjTPsnMh%2F%2FRtrhVuCXhFfR15GH3mtHp2IccP8ta4BuQpCFZfvzozRNltwU%2FbETchELpkE%2BgWKREW8apsDzR%2Fm1Ngzwr9Z2q80AUQBN%2Bevq8UbHcZiBFTCYf3A%2FuPjsWar1OPzEZGkI3reL2fdabhTCPYmrkWLPy66dY2VbvPwuewZzZMHEsYSlJ5InMsKGDDTu7eMlENFeXCc7tc5%2BA4xkf6cvHlCFQ0YCAvceMpapMg3vdcj3gfl5Xwq8F%2FmFMqhpEreTLO1ZxvJI1TeA47J%2FMe%2BdKOoGWcVVk5vgMqv4byuCpGaDdHDOyTBcbE5usjMD7KkH%2FhDl2pD7EY9hRwcqEFYCHUTDpls4Eu1R05hZsuUEJ00f5x3E4Vaf%2BiRao4Istry0tENdqjiufiFa23GmNpg0W%2BTDcoIvKBjqkAavnATUWCk7Vks0T6ePEHVltXtVN123OQCg2xfpPDJewQFecGe1cdDAy2CJmD30cc1WkIChclJjvd2xLQYaupW%2BzjXizpp0agOvR9xs0r6NCT0RT7QbYtnJ1hNMQtzUFQBGCoVaysC1fvyYDhc663be13RV26DlYd88FDBvjRz%2BSlDW5XFAkZkiDDmy6nZJkLjCn%2FibGLy3e9N2Ey0Z%2BjmkGyAW%2B&X-Amz-Signature=b713e10d3c272bb73419acc448a440f2689e32d12baaeeb0acf6e27a509089bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWCPJWRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLeVKSwiQTeLtq6BR3SUgkRSQSO%2FIVbYkbW05RR1mZZAIhALi6qTbayks4gsnrSRLrH75u1kSdZHts68WN0tlMJPXqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTGb5NKpx9%2Bx6Uz%2Fcq3AOWAQjq8Rurpvy6A9F55ZZl%2FlNkPQCqj0tgq8Fa1f5WhJe0wkslm8KyaI9LIj9m%2Bqud2eyZIOGQPjsK81N9VpfbI4JYrVSm%2FOPiiCdlg1UR%2B%2FQdRGAoP0v7Y6WJtRaKZzt4Ku%2BpWQiVGXcIcaPKVhb9OuYpyYR9MvJpaD0iJ8EuIJEcVC86bnZC%2FpXlf0AWIb1gvZxyobjCoHocgEztyAgrT5Cy6wnGYyjTPsnMh%2F%2FRtrhVuCXhFfR15GH3mtHp2IccP8ta4BuQpCFZfvzozRNltwU%2FbETchELpkE%2BgWKREW8apsDzR%2Fm1Ngzwr9Z2q80AUQBN%2Bevq8UbHcZiBFTCYf3A%2FuPjsWar1OPzEZGkI3reL2fdabhTCPYmrkWLPy66dY2VbvPwuewZzZMHEsYSlJ5InMsKGDDTu7eMlENFeXCc7tc5%2BA4xkf6cvHlCFQ0YCAvceMpapMg3vdcj3gfl5Xwq8F%2FmFMqhpEreTLO1ZxvJI1TeA47J%2FMe%2BdKOoGWcVVk5vgMqv4byuCpGaDdHDOyTBcbE5usjMD7KkH%2FhDl2pD7EY9hRwcqEFYCHUTDpls4Eu1R05hZsuUEJ00f5x3E4Vaf%2BiRao4Istry0tENdqjiufiFa23GmNpg0W%2BTDcoIvKBjqkAavnATUWCk7Vks0T6ePEHVltXtVN123OQCg2xfpPDJewQFecGe1cdDAy2CJmD30cc1WkIChclJjvd2xLQYaupW%2BzjXizpp0agOvR9xs0r6NCT0RT7QbYtnJ1hNMQtzUFQBGCoVaysC1fvyYDhc663be13RV26DlYd88FDBvjRz%2BSlDW5XFAkZkiDDmy6nZJkLjCn%2FibGLy3e9N2Ey0Z%2BjmkGyAW%2B&X-Amz-Signature=b7fd033ad0270a9e28e1111faf17c6f3ee60ac43f25d6292133a14f3b5cb9db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

