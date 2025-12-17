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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC6PXDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYuclAYiC2fA4urZcl0F046xysKs5a2aMQdX%2BWggzoKQIhAK4FRgSKgvO6rdM4uVDQHYdG1n8yGpy%2BL%2BH%2F71dKXN73KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp8ve2WquYpADIR0Iq3AOPdb%2B0Bp5wgQ9oeBwPahIRyekcsnK3FX8l45FBLfnpw5kFJ7hYMMuuIDMve2RpP9IpYF2OkCxhOTFqJ3rmWwB7pxIQPj4KB4qFg%2BukAtlpq7g12cFYUoNIcrJA54xLPdWpKTJm6X7RumPYVla9i1%2FHaQsiOgRjCdFPZq1Ka52P9OvXPq5%2BPZpCpP47RZ12VEIs4FlRfouxhh%2FZ0uH9cVK9vHRCf0w413RocbDOfjZ4TTIZOP5CZXbVDLGVnrN%2FlQv40bo6Wc7ft51WHgvwRIRIW9n1HwWKxffTFmTUOm2E%2FNNkCZXHWFyfP4t6pX458aXrvQuIUpit7pYJ0XaPHjgMdK7WQYqIDL0WGy5bRYfBBczXCU1jjG%2Bh9GTAmUGZgIydpG5n4%2BNbsT0dClJxb7flg2Zs%2FhpWU%2FTD62unWCGiXOOJN1N4xLFoEayuPvctbjC1rE7OJOZL8ouprVrgqiLmaaEr15KSJFfRFk7mCiKWzAo4%2F5iyiU6QX1ZO%2BSu5pkFf8aixQIO0jT7%2BwkSydtFuyCKY0RRcZiFXLasNLG1XHszpbGx1E2aMQOOgjvMayE1QwI5kcWwqhFjoU2LxGSBqqjkBLxkLCswZh64YimqPxP7GGllxnDX2N2p8NjCdoIvKBjqkAclmFaGLsSEGyRdrDDen9q5d%2FMCuDm41DgBDIFRpfleMQd8J2MkUHATdWe1yFa2gEcRT5nH5bIx0ToNLQXZy3dx5gx%2FYDsIit1ZFI0043rLhvKdrJIIA3IV30n4dDWj2Glx7SntMiQLS2JmXBiWXt0%2B6n%2B2DtrfZqr1M1f40e2Xo7a9VGnD8i3XlAbjOA4utx%2FNAjqTZVGwY2IdGS09UgKDgCF4Z&X-Amz-Signature=176c11a734641f307f5beab605b2fb2061010ce652b700bd049c43dd5ca62e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNC6PXDJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYuclAYiC2fA4urZcl0F046xysKs5a2aMQdX%2BWggzoKQIhAK4FRgSKgvO6rdM4uVDQHYdG1n8yGpy%2BL%2BH%2F71dKXN73KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwp8ve2WquYpADIR0Iq3AOPdb%2B0Bp5wgQ9oeBwPahIRyekcsnK3FX8l45FBLfnpw5kFJ7hYMMuuIDMve2RpP9IpYF2OkCxhOTFqJ3rmWwB7pxIQPj4KB4qFg%2BukAtlpq7g12cFYUoNIcrJA54xLPdWpKTJm6X7RumPYVla9i1%2FHaQsiOgRjCdFPZq1Ka52P9OvXPq5%2BPZpCpP47RZ12VEIs4FlRfouxhh%2FZ0uH9cVK9vHRCf0w413RocbDOfjZ4TTIZOP5CZXbVDLGVnrN%2FlQv40bo6Wc7ft51WHgvwRIRIW9n1HwWKxffTFmTUOm2E%2FNNkCZXHWFyfP4t6pX458aXrvQuIUpit7pYJ0XaPHjgMdK7WQYqIDL0WGy5bRYfBBczXCU1jjG%2Bh9GTAmUGZgIydpG5n4%2BNbsT0dClJxb7flg2Zs%2FhpWU%2FTD62unWCGiXOOJN1N4xLFoEayuPvctbjC1rE7OJOZL8ouprVrgqiLmaaEr15KSJFfRFk7mCiKWzAo4%2F5iyiU6QX1ZO%2BSu5pkFf8aixQIO0jT7%2BwkSydtFuyCKY0RRcZiFXLasNLG1XHszpbGx1E2aMQOOgjvMayE1QwI5kcWwqhFjoU2LxGSBqqjkBLxkLCswZh64YimqPxP7GGllxnDX2N2p8NjCdoIvKBjqkAclmFaGLsSEGyRdrDDen9q5d%2FMCuDm41DgBDIFRpfleMQd8J2MkUHATdWe1yFa2gEcRT5nH5bIx0ToNLQXZy3dx5gx%2FYDsIit1ZFI0043rLhvKdrJIIA3IV30n4dDWj2Glx7SntMiQLS2JmXBiWXt0%2B6n%2B2DtrfZqr1M1f40e2Xo7a9VGnD8i3XlAbjOA4utx%2FNAjqTZVGwY2IdGS09UgKDgCF4Z&X-Amz-Signature=15face57c44be65beb63a7118119832fa5df7f206099e59de21203e7d9f1aaab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

