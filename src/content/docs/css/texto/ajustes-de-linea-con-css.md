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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGY6O7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2Fmx0IwsTcsY0OsqXZS1GfBNtS5QAapl8wBbQaepsxwIgTkoxN1ae4TU72B2Dw3pTdExXji8XOzZfWKNRdhl8g8sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIpUPqBV%2B5yZGa8GpircA4qPMntzsc4ccdKv%2FHCBb4rpYWK3G6%2BvpoF6r4M%2BbjWSXR9rgbkS3jQB8xLY9rbeIuBg0yOP%2FiaevPQaQnCa77iWWZCK6WDcbwa4iIswoeNRzRNGaxr2gf5YMvHpYymmhcCTCvQaTajRC9laiXgFLZomAmv064hO8hb5hE99SfZPib1setaXNZpWkYjp9ef3MD14CMRPwnPYJDgFv9elwoDlNaldPV5aeqruZpZwKXf%2BwYGZq3IEgG8VozLekXbdsXRZp28Fv%2BoPppZSASFmJtQA%2BLwkLLg2qQXr9KeXKkS3swdEj%2FbWHWq8j8GO%2BLJ2LzrrG4NUvsmJiJh6HZBVfvnJG3lf2sn1%2FlfUyloApe7M0MZ%2B%2F%2FT0z%2F8XcwcKoavvyN2gnMPuZIIbnKAImqP74RqK4pi8yXh8H0KGs1tXZ3rU3Sj%2FzSoSYhiIUkaeGduXQsBLl0uQygZIMH8C03M0lMgi38j9FSq49LrEzkYVPDspeniL7DuAaNJCiRrcXYhE0tTfHa14sHlEzhph9b%2FwoB1fgnuDCWmBFgi3OwU0G14jrCCmvYM2YKX1rA0zZaFvVBqzB7w6HrCzVKjW3NJplIn7Wd56bBEsdVvg45PRtlm%2Fnwd52mBhMySyYcp6MN7OiMoGOqUBOibsw%2Fsb31j3seRRonS7pmIzI1eh%2F8l%2FtkRe7maSAMzy3Heja9GuTtJTuK0GHpkIxku0wwJ47CfiLWqEkmxXAwXcy5NTzgyEvu0dnkHYiGRdt2m7Kep8Uta23IW%2B0X4ctH%2FPm9jbEwxToye90XMhExYs9urqQOc9n2DgpBUPuihx8wyzWbxazTMuKYvzFZ6h09i7NKiZqs23kfETr5xT%2B96qknBV&X-Amz-Signature=1323515a4ce13197a0fa053813ab8a51a72d40b3f48d1d56a1800e278e6d232e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGY6O7P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR%2Fmx0IwsTcsY0OsqXZS1GfBNtS5QAapl8wBbQaepsxwIgTkoxN1ae4TU72B2Dw3pTdExXji8XOzZfWKNRdhl8g8sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIpUPqBV%2B5yZGa8GpircA4qPMntzsc4ccdKv%2FHCBb4rpYWK3G6%2BvpoF6r4M%2BbjWSXR9rgbkS3jQB8xLY9rbeIuBg0yOP%2FiaevPQaQnCa77iWWZCK6WDcbwa4iIswoeNRzRNGaxr2gf5YMvHpYymmhcCTCvQaTajRC9laiXgFLZomAmv064hO8hb5hE99SfZPib1setaXNZpWkYjp9ef3MD14CMRPwnPYJDgFv9elwoDlNaldPV5aeqruZpZwKXf%2BwYGZq3IEgG8VozLekXbdsXRZp28Fv%2BoPppZSASFmJtQA%2BLwkLLg2qQXr9KeXKkS3swdEj%2FbWHWq8j8GO%2BLJ2LzrrG4NUvsmJiJh6HZBVfvnJG3lf2sn1%2FlfUyloApe7M0MZ%2B%2F%2FT0z%2F8XcwcKoavvyN2gnMPuZIIbnKAImqP74RqK4pi8yXh8H0KGs1tXZ3rU3Sj%2FzSoSYhiIUkaeGduXQsBLl0uQygZIMH8C03M0lMgi38j9FSq49LrEzkYVPDspeniL7DuAaNJCiRrcXYhE0tTfHa14sHlEzhph9b%2FwoB1fgnuDCWmBFgi3OwU0G14jrCCmvYM2YKX1rA0zZaFvVBqzB7w6HrCzVKjW3NJplIn7Wd56bBEsdVvg45PRtlm%2Fnwd52mBhMySyYcp6MN7OiMoGOqUBOibsw%2Fsb31j3seRRonS7pmIzI1eh%2F8l%2FtkRe7maSAMzy3Heja9GuTtJTuK0GHpkIxku0wwJ47CfiLWqEkmxXAwXcy5NTzgyEvu0dnkHYiGRdt2m7Kep8Uta23IW%2B0X4ctH%2FPm9jbEwxToye90XMhExYs9urqQOc9n2DgpBUPuihx8wyzWbxazTMuKYvzFZ6h09i7NKiZqs23kfETr5xT%2B96qknBV&X-Amz-Signature=b46e1e5105f4868360b272816093d2c02add735be79eb59ac5f9b9c69f7c96f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

