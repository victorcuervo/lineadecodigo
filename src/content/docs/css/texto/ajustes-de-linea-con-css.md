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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKL5OAX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExtk8Bda%2BYPp61VkZD4PnGOdyK1pBB46uRgwZA0dXBiAiEApDpiGlVuSWk5xIVwI0R7YH2XOPsrmU0EUULgTM1%2BR8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL2d4RgcptjraYJUbSrcA1hVi6RH9IuldF24nTogTJCn9guGsi2j9PRznmm42M4nsti%2BOBAQXj4JnIsquFowiZGI9BNv5JBjMiuY8X0w9l53GfAPMvucweytw030H7OIqnZdW56Iv%2FdiGoLqS6rxpIy9NiF0Ft44AtnkxmnxsTaOZeHSTHJym8SBfjmaQCSba2UsgFBHY0GXrXBP2F4MOLZXXj4xO%2FwZkwVLLxjmuy8F%2FExYKvklMdxL28v8g8A94CsTWDgQQyqynpDJSbSYT0xE4GloUWcLJXdBAf7L6sUM77rkxIibpF80i1UyIBuN%2Fbcy2eRy5VsTzdAZwwpQQ2kT2DQEsGVXhU5x3PDnM2G29QZrfB1TfFo9aRkZ1vB4kuWIZCAKQO1bjC8z0%2FdmG%2BvmTDB7V9AofhCFhB616b1z94TQvKkiqX%2Ba4SV6hGOTJsmsuaV4Xy4seBWe%2BTecog2bUzIS%2B93Qmiwi8jIQ3G7wRBqxtFT%2FbLGxaxOOyvE6jI1nySU1SiS3RtcJIAxtsdX2jtnKLdaqFrCY7md5B3kK6KUrMHrIRAmTC5um%2FuCC9sX1I3QKPV%2FE6LwE3OxjiS2Sntd8HeYHtH3m9AZos%2BEbZau3GToUnoHpelFFn3NNblzEoKZbqKF7isMXMP2BicoGOqUBLU7kuPy4ZF40FdnOZLNd%2BzpewbB%2BdZTCpYFt05tKEodHeTy8ruh5VnxCvS3Xk7rXtoMImwGhf6%2FMDnfJfi5mynSR5b%2FOXHuXnV5MzeAukvGdcCGomVKIGSOrRcr81tgRNpo88aqhnSXw37WN33zJMtGQzEK7pwchUYNp8EfBsDi1Sx%2BKKmSCokV8KiDJrYlbUOZC6QvaaPuEI5667%2FC1YfrXPtUC&X-Amz-Signature=1d25e5d9bad561481a20056ce1e96bbbe2b47f99e1a78029a087416762c110f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKL5OAX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExtk8Bda%2BYPp61VkZD4PnGOdyK1pBB46uRgwZA0dXBiAiEApDpiGlVuSWk5xIVwI0R7YH2XOPsrmU0EUULgTM1%2BR8Uq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDL2d4RgcptjraYJUbSrcA1hVi6RH9IuldF24nTogTJCn9guGsi2j9PRznmm42M4nsti%2BOBAQXj4JnIsquFowiZGI9BNv5JBjMiuY8X0w9l53GfAPMvucweytw030H7OIqnZdW56Iv%2FdiGoLqS6rxpIy9NiF0Ft44AtnkxmnxsTaOZeHSTHJym8SBfjmaQCSba2UsgFBHY0GXrXBP2F4MOLZXXj4xO%2FwZkwVLLxjmuy8F%2FExYKvklMdxL28v8g8A94CsTWDgQQyqynpDJSbSYT0xE4GloUWcLJXdBAf7L6sUM77rkxIibpF80i1UyIBuN%2Fbcy2eRy5VsTzdAZwwpQQ2kT2DQEsGVXhU5x3PDnM2G29QZrfB1TfFo9aRkZ1vB4kuWIZCAKQO1bjC8z0%2FdmG%2BvmTDB7V9AofhCFhB616b1z94TQvKkiqX%2Ba4SV6hGOTJsmsuaV4Xy4seBWe%2BTecog2bUzIS%2B93Qmiwi8jIQ3G7wRBqxtFT%2FbLGxaxOOyvE6jI1nySU1SiS3RtcJIAxtsdX2jtnKLdaqFrCY7md5B3kK6KUrMHrIRAmTC5um%2FuCC9sX1I3QKPV%2FE6LwE3OxjiS2Sntd8HeYHtH3m9AZos%2BEbZau3GToUnoHpelFFn3NNblzEoKZbqKF7isMXMP2BicoGOqUBLU7kuPy4ZF40FdnOZLNd%2BzpewbB%2BdZTCpYFt05tKEodHeTy8ruh5VnxCvS3Xk7rXtoMImwGhf6%2FMDnfJfi5mynSR5b%2FOXHuXnV5MzeAukvGdcCGomVKIGSOrRcr81tgRNpo88aqhnSXw37WN33zJMtGQzEK7pwchUYNp8EfBsDi1Sx%2BKKmSCokV8KiDJrYlbUOZC6QvaaPuEI5667%2FC1YfrXPtUC&X-Amz-Signature=8c5c748d192295fccfbf71bf54aef746305105fac9b212761dfcfaeb027188c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

