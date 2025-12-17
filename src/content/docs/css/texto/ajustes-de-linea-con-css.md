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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY5CV5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHoVvfIDMky0JMz140cQJ0Ile3NrsrF3c3HDF3e1i7QIhALORnbyzowkI7o%2FNOJk036wISKETdbDQ3ulRWdzm%2BpMgKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4tW%2Fj6lBdOFzRXScq3AO2DaDkF8b%2F%2FrhvWjvNh5vf0Ue3hO1aqePmRhBUuqjyi2D081HpywjOpDh4HDNbceRJx0t2mLipZyW91R8eRgCMzP5hxhKAzy6FZ5ZUrg1A5ZIHMSMvJtqZ9HYcFL0iC5PUKlQ5asDa3xxKggoT3aqzz1QgIQfdFzGbBFCd0FV7EDC1nInLBcwB5CIuybKx4Kvh2OWDF4%2BxaxkOkGzlxCa77Bt%2BM7NjnlANrxHfybRUffH%2BvMWXb7dqMY5maY2XPpaqQJyyxEUs2oPIG%2BJtyKkyt8Pm8%2BuRar9g5lp8lS3dp2GXyjOk4gweBHvoz2HCyusVOXt%2Fsim6%2Fx03OGEyNd%2F%2B4SHN0Y7DdDU9qn8Gsm1ohDcryj1zaZi7YyCoS%2BltPUxQAqBBeuBvLtYm%2FCPHdYb36tZtqGHTFpqxy3T%2FLPinPk1ej4ImzO892K6Ilu94Ib7Qk2BBZIiBD%2Bmn6sDtZy7TnolJyDEpIksH3aA59XIQpFnGy%2B0zNyHdcoszWeYNAN8Ko%2Bx3tptmstz0l91DulA2ETroeR3g%2FlnvDwPG%2FTbvz%2FbQ50IL6MOqAKXKTjn83aOGMnFoQ8vJtEkRJISxzDI5kBiILhtjvH8vIZ3bBNkZDscP3n4iXtBdiiQOcjCUnYnKBjqkAUl5dyGYB5z9FZ8OtcHiTU%2FsJWsX7Oyyoa25JkI7IYiJySHRpHUntmV5%2FrwHwx5QrNLKjn78d920If%2Fa9itNiUeqag%2BM4M3TuklKroG1pA9CBC6w8mwNiyAMSaVwNpfpmNiAp4DYBHSLPw%2B7wcsYaBBANnEKCcXxtvmqdXvKIXrKozTY84uigern6DDO3BcadjWLY20bnWyQp93Qw5%2FH%2BpcTNxN%2B&X-Amz-Signature=975bb1322a956cef18fe77b2f235a3223123469d5db73ee8ebfb959929d3f392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJY5CV5Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeHoVvfIDMky0JMz140cQJ0Ile3NrsrF3c3HDF3e1i7QIhALORnbyzowkI7o%2FNOJk036wISKETdbDQ3ulRWdzm%2BpMgKv8DCHgQABoMNjM3NDIzMTgzODA1Igw4tW%2Fj6lBdOFzRXScq3AO2DaDkF8b%2F%2FrhvWjvNh5vf0Ue3hO1aqePmRhBUuqjyi2D081HpywjOpDh4HDNbceRJx0t2mLipZyW91R8eRgCMzP5hxhKAzy6FZ5ZUrg1A5ZIHMSMvJtqZ9HYcFL0iC5PUKlQ5asDa3xxKggoT3aqzz1QgIQfdFzGbBFCd0FV7EDC1nInLBcwB5CIuybKx4Kvh2OWDF4%2BxaxkOkGzlxCa77Bt%2BM7NjnlANrxHfybRUffH%2BvMWXb7dqMY5maY2XPpaqQJyyxEUs2oPIG%2BJtyKkyt8Pm8%2BuRar9g5lp8lS3dp2GXyjOk4gweBHvoz2HCyusVOXt%2Fsim6%2Fx03OGEyNd%2F%2B4SHN0Y7DdDU9qn8Gsm1ohDcryj1zaZi7YyCoS%2BltPUxQAqBBeuBvLtYm%2FCPHdYb36tZtqGHTFpqxy3T%2FLPinPk1ej4ImzO892K6Ilu94Ib7Qk2BBZIiBD%2Bmn6sDtZy7TnolJyDEpIksH3aA59XIQpFnGy%2B0zNyHdcoszWeYNAN8Ko%2Bx3tptmstz0l91DulA2ETroeR3g%2FlnvDwPG%2FTbvz%2FbQ50IL6MOqAKXKTjn83aOGMnFoQ8vJtEkRJISxzDI5kBiILhtjvH8vIZ3bBNkZDscP3n4iXtBdiiQOcjCUnYnKBjqkAUl5dyGYB5z9FZ8OtcHiTU%2FsJWsX7Oyyoa25JkI7IYiJySHRpHUntmV5%2FrwHwx5QrNLKjn78d920If%2Fa9itNiUeqag%2BM4M3TuklKroG1pA9CBC6w8mwNiyAMSaVwNpfpmNiAp4DYBHSLPw%2B7wcsYaBBANnEKCcXxtvmqdXvKIXrKozTY84uigern6DDO3BcadjWLY20bnWyQp93Qw5%2FH%2BpcTNxN%2B&X-Amz-Signature=c60bbac3426c7f131914d075ba9fda7efa75024cd63862fd14c8437f217e352a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

