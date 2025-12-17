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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKRPK6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBP7HpPJHhBoTRE0yA6FaPXyUPqn3D2L%2BPCeFfn1wOgIgSwXaQO5CcWPUQXI32%2BEkle%2By0waCRRsgOwe%2BMQfzIKQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAqk%2BSquZjKMuNboSrcA%2BFlGSw24SkLb9ECdv551585n7RZZAetu1wH4nnSTR3nuaqJ6xzogsTuJX80MPqmfz0zL3ZT8PC0XjcMT0eye3jPuhShjYYEKMvDMTlLf8JuF5P8FW6Sk0gkpp1YHpH2jMlreRV%2BEXPSTmHxJMnhqTkuI5u0ahr%2BjINDe1vM%2Fj3XwLxIebCAG1swshq38ZYxTg%2FyRpNcjZ%2BmK6fi9Mv49rhVINQZDTZivZxg04AUiH3DlVQyz%2Bi3jOQ261rIvvMG7YEkjmEIaxepzq1sI0jNwIaICXUo83Ku%2B1jGekqPxrl01rCgB2Y5tpzbPCB7GS6WijsmmGgHWZvGhyGbr4CkbVEA63Ywy7TIsW05Lu0XqW%2BcoiUuQB8jGTuga0kPwaQRKNVczMc83ZhRHYvjxWEIXOUpj5KUa7uGi0wVuYwsVK%2FggEStOu3xln%2B8nz12xqjLS2PNJ5Mu7Ppj3koMsKdJvvGQQMdxJEXeYoEClvy1KeexnlI%2B77bgUY8LGGg0D7p%2BCD2DSok3XbxOG2JIT7nP7ImjrcSrQlZ%2BPOZaSbwB%2FMH7ktSv0nqTihFtqsK%2BI6rIhcJLFfp%2BPa6aSPLsIiZGtXLCab1zfwJpfMt0Wl%2FCnaccRb%2B0nArDRTCyWRYfMNOfi8oGOqUBsSRkbVHg8wJUtujjx9ThJe4sdQVxP17pb4b7noecVzXZLRWjTwvGU2bAmp07TxyuswUggU4Ku6yQm9HNhIGYb%2BDvpwePYKEat%2BBRL%2B6mEyFqbS0Qsw9Of7%2F0OTf5g3bWnMBV8jC5eYtIJccPgt%2F%2B13FCnKONBQsRsuHeWk4ajIO0uRoAMGP62MPphqSRN%2BLdpDHREuTrxqUfSwmAyO7vUD0Oq52U&X-Amz-Signature=e6b1765709916e33450e1231266927d6da25651f276135a2041e9d5e8e9ccbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKRPK6N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGBP7HpPJHhBoTRE0yA6FaPXyUPqn3D2L%2BPCeFfn1wOgIgSwXaQO5CcWPUQXI32%2BEkle%2By0waCRRsgOwe%2BMQfzIKQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAqk%2BSquZjKMuNboSrcA%2BFlGSw24SkLb9ECdv551585n7RZZAetu1wH4nnSTR3nuaqJ6xzogsTuJX80MPqmfz0zL3ZT8PC0XjcMT0eye3jPuhShjYYEKMvDMTlLf8JuF5P8FW6Sk0gkpp1YHpH2jMlreRV%2BEXPSTmHxJMnhqTkuI5u0ahr%2BjINDe1vM%2Fj3XwLxIebCAG1swshq38ZYxTg%2FyRpNcjZ%2BmK6fi9Mv49rhVINQZDTZivZxg04AUiH3DlVQyz%2Bi3jOQ261rIvvMG7YEkjmEIaxepzq1sI0jNwIaICXUo83Ku%2B1jGekqPxrl01rCgB2Y5tpzbPCB7GS6WijsmmGgHWZvGhyGbr4CkbVEA63Ywy7TIsW05Lu0XqW%2BcoiUuQB8jGTuga0kPwaQRKNVczMc83ZhRHYvjxWEIXOUpj5KUa7uGi0wVuYwsVK%2FggEStOu3xln%2B8nz12xqjLS2PNJ5Mu7Ppj3koMsKdJvvGQQMdxJEXeYoEClvy1KeexnlI%2B77bgUY8LGGg0D7p%2BCD2DSok3XbxOG2JIT7nP7ImjrcSrQlZ%2BPOZaSbwB%2FMH7ktSv0nqTihFtqsK%2BI6rIhcJLFfp%2BPa6aSPLsIiZGtXLCab1zfwJpfMt0Wl%2FCnaccRb%2B0nArDRTCyWRYfMNOfi8oGOqUBsSRkbVHg8wJUtujjx9ThJe4sdQVxP17pb4b7noecVzXZLRWjTwvGU2bAmp07TxyuswUggU4Ku6yQm9HNhIGYb%2BDvpwePYKEat%2BBRL%2B6mEyFqbS0Qsw9Of7%2F0OTf5g3bWnMBV8jC5eYtIJccPgt%2F%2B13FCnKONBQsRsuHeWk4ajIO0uRoAMGP62MPphqSRN%2BLdpDHREuTrxqUfSwmAyO7vUD0Oq52U&X-Amz-Signature=e5cc4248299234946ce801de663f99116bee4778235cdb620de13a6eae4e7976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

