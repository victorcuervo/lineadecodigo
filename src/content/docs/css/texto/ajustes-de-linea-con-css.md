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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFHQVPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsin0LmFuYZMOSFJ1s2Cz8sXRKe7rpBZUQZ%2Fx1OeDnwIhAIvVB5mRaACaMRfaaX7fWsD88eDjl%2BG5tUAMTNSKabFVKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FG6SHOCiaLC3X1Dkq3AOfYj5ELlCoDMLVDlFIy%2FX1R2CKvvQno36vtpXpTKo8Pul0b8rWJAL7oLvhQFW%2F77KLWhlPwlMneAhr4uPqq%2FTz9875WmgId%2BQ8jWRFFNYNI62r5aZijd9vGPh39jeDpEYXKNm1DuA05Zbk%2FuWnK5hkfEGv8zQO87jseNC03dsOplUXzR2oDHp3o3oWjtDkZOd%2FGfMnkS2W4%2BT0iCfd0PUeL4ORqb5Qk4K12Z8FM0Dt23w0dbjMrv%2FobzqJ4KZfZH8rry%2FbkR%2FGa6ihpKRlxuIJ2itHLSx7KREWHfV0lJsdQwxcr%2BvvmBJVy4XyrHNeqIXKlatRhzQMc%2Fu2cUnv0k1EqeZjQw9oaNdYp5TLOlrjBFJugPh51sd5YJ%2B%2BwfARAeP9ScnnE3jtjjAwok8r3zDBEecX01VZDoo4C7d13ihXxvPSHZ5lIHS9KCnC4RVsbRi8jU6ZQ5XVVgIDhE8dQX3Sb54GaUOakZUj32RM6DJ98qSUr1uX3CAJzXQVYoKx%2BBI2c4suYO6VoiqGTbdKzVjZ0%2BTv6jlzzIKnZi%2B%2FyB%2Fd1WSHBkDcHodqszkYnbjATM5te6FSr%2BkZwnbhBr%2Bhw%2BLv0VC0oUQs8hllqoAVf%2B%2Fp8%2B8iFW0Exe%2BI1xiUWjC0xorKBjqkAUcG6Zc6WgP%2BfEAgCpL06dKqxve8Fivcohl0BntHmIKcjXcRoVBNuXdZn0KufBce5IddimH7m20ULhdzhe%2Fsvy0BJuGpS3yqFCuXVm72nROPo%2FPcWaSGB5RKn83TfjsR7%2BEKwMdswiiVIfdUjovzhwshoGMpMJ9wqs5yXUfr5rLEzQbQI9SDohm2sJPBHtKmmr%2Fx5k%2FfWW5IHUFJbpOWjlxYTZwG&X-Amz-Signature=6092016dffc23f0d7ec614c776f457cee34c93e4cd6739751269d9ed99e7ce26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFHQVPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTsin0LmFuYZMOSFJ1s2Cz8sXRKe7rpBZUQZ%2Fx1OeDnwIhAIvVB5mRaACaMRfaaX7fWsD88eDjl%2BG5tUAMTNSKabFVKv8DCH4QABoMNjM3NDIzMTgzODA1Igz%2FG6SHOCiaLC3X1Dkq3AOfYj5ELlCoDMLVDlFIy%2FX1R2CKvvQno36vtpXpTKo8Pul0b8rWJAL7oLvhQFW%2F77KLWhlPwlMneAhr4uPqq%2FTz9875WmgId%2BQ8jWRFFNYNI62r5aZijd9vGPh39jeDpEYXKNm1DuA05Zbk%2FuWnK5hkfEGv8zQO87jseNC03dsOplUXzR2oDHp3o3oWjtDkZOd%2FGfMnkS2W4%2BT0iCfd0PUeL4ORqb5Qk4K12Z8FM0Dt23w0dbjMrv%2FobzqJ4KZfZH8rry%2FbkR%2FGa6ihpKRlxuIJ2itHLSx7KREWHfV0lJsdQwxcr%2BvvmBJVy4XyrHNeqIXKlatRhzQMc%2Fu2cUnv0k1EqeZjQw9oaNdYp5TLOlrjBFJugPh51sd5YJ%2B%2BwfARAeP9ScnnE3jtjjAwok8r3zDBEecX01VZDoo4C7d13ihXxvPSHZ5lIHS9KCnC4RVsbRi8jU6ZQ5XVVgIDhE8dQX3Sb54GaUOakZUj32RM6DJ98qSUr1uX3CAJzXQVYoKx%2BBI2c4suYO6VoiqGTbdKzVjZ0%2BTv6jlzzIKnZi%2B%2FyB%2Fd1WSHBkDcHodqszkYnbjATM5te6FSr%2BkZwnbhBr%2Bhw%2BLv0VC0oUQs8hllqoAVf%2B%2Fp8%2B8iFW0Exe%2BI1xiUWjC0xorKBjqkAUcG6Zc6WgP%2BfEAgCpL06dKqxve8Fivcohl0BntHmIKcjXcRoVBNuXdZn0KufBce5IddimH7m20ULhdzhe%2Fsvy0BJuGpS3yqFCuXVm72nROPo%2FPcWaSGB5RKn83TfjsR7%2BEKwMdswiiVIfdUjovzhwshoGMpMJ9wqs5yXUfr5rLEzQbQI9SDohm2sJPBHtKmmr%2Fx5k%2FfWW5IHUFJbpOWjlxYTZwG&X-Amz-Signature=8a0f7fd6f770c5b76dbafa4186827e06dd64a29421bc7375f7844570799402fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

