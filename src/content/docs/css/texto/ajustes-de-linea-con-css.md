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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQIBGKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZdEn0crnI81EEO1LbhOIMUXnltPlGblbZNAmLvI84QIhALfjpYfyA0IAUMoaBJ%2BZQLLS8E1gxiT7WHwrzp%2BUVtLAKv8DCHQQABoMNjM3NDIzMTgzODA1IgyLbG%2Fyjrti655nbO0q3AMq2j8%2Bo4nmMgtEIBaDNOCpG0dDGjJqPOBHbA9PQO2vvA1rVOT0LmP8wlDH6E9SK79FCN236AT%2FpOyosJ5EXdkSn0K%2FQ3NVLVd%2FyjJILZu0YWi8KTodBKrjP34YIOkKxA740uIB94oEIclJB9TiPJdyh5jRyLtNAXR8eDQ8BXloGNnjZ2RwTzMHVXG1PyiXPCDzAu48SpuF7SHihUh%2BCnr1oFz8fRawIvrK5o8gZqkOINMV5ApUHqJ5qA71jIgMllwKM6mYQFjto6HlkldOr0lb5X0BO%2BkPFZIFYEwID3jR7Miml%2F08itFlH3mJSP1iFSDS8fWa3GWpKBbo8EirA8AHZLGEZJlVNnQeTRA%2FbvLa8m5tBtfIr5XHgwSRRFMKDZQ8YoOhPAaNKt7esbYLsc8xsDQOJ1l1Y41fHE%2BmzaWkrXPUfzLxh1AcB00W4Bzt2dd0zcQNFd5Jp6adWViqpDdLArTlSJ5gv2VXQZmH3CpzZiyTOVRUAmf7m4fxQSyt8iifcOgcANtrEI9ygJtw124iYdH8d9XK3tDzkq5Ryr8jIxyRIppE3uw3CXN5w1w66ylQmcRCdi3J%2BmW%2BuF74ZUK%2B4nP8L5cSuDxEa6CQlRfxk06XLWzJTz3OVCyX9jCZs4jKBjqkATiXm3QVn0MiltJMjZSltqNOvvSoGXkxFf0RcHnrvzjH3Mf7W6NkD%2BmPx6yKtQOH16snVR4FxjYC4VcBIJCL1iIyVyPNtFciRkHsnaJd1uKHhlQw161iQx7PPi58CTtMUQVVF3fEdA9ZETEUHBiyRkBiNp94E%2BLR9spc4dosvejet9haxh%2F%2Bj6HAWhRHjagYl88DFqGy1bMkCiKp7aXPWNPcQG55&X-Amz-Signature=de0c6b13a77362f8dd30141b243b1e9be023d0e26519e04b591513ecf9ac0b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BQIBGKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZdEn0crnI81EEO1LbhOIMUXnltPlGblbZNAmLvI84QIhALfjpYfyA0IAUMoaBJ%2BZQLLS8E1gxiT7WHwrzp%2BUVtLAKv8DCHQQABoMNjM3NDIzMTgzODA1IgyLbG%2Fyjrti655nbO0q3AMq2j8%2Bo4nmMgtEIBaDNOCpG0dDGjJqPOBHbA9PQO2vvA1rVOT0LmP8wlDH6E9SK79FCN236AT%2FpOyosJ5EXdkSn0K%2FQ3NVLVd%2FyjJILZu0YWi8KTodBKrjP34YIOkKxA740uIB94oEIclJB9TiPJdyh5jRyLtNAXR8eDQ8BXloGNnjZ2RwTzMHVXG1PyiXPCDzAu48SpuF7SHihUh%2BCnr1oFz8fRawIvrK5o8gZqkOINMV5ApUHqJ5qA71jIgMllwKM6mYQFjto6HlkldOr0lb5X0BO%2BkPFZIFYEwID3jR7Miml%2F08itFlH3mJSP1iFSDS8fWa3GWpKBbo8EirA8AHZLGEZJlVNnQeTRA%2FbvLa8m5tBtfIr5XHgwSRRFMKDZQ8YoOhPAaNKt7esbYLsc8xsDQOJ1l1Y41fHE%2BmzaWkrXPUfzLxh1AcB00W4Bzt2dd0zcQNFd5Jp6adWViqpDdLArTlSJ5gv2VXQZmH3CpzZiyTOVRUAmf7m4fxQSyt8iifcOgcANtrEI9ygJtw124iYdH8d9XK3tDzkq5Ryr8jIxyRIppE3uw3CXN5w1w66ylQmcRCdi3J%2BmW%2BuF74ZUK%2B4nP8L5cSuDxEa6CQlRfxk06XLWzJTz3OVCyX9jCZs4jKBjqkATiXm3QVn0MiltJMjZSltqNOvvSoGXkxFf0RcHnrvzjH3Mf7W6NkD%2BmPx6yKtQOH16snVR4FxjYC4VcBIJCL1iIyVyPNtFciRkHsnaJd1uKHhlQw161iQx7PPi58CTtMUQVVF3fEdA9ZETEUHBiyRkBiNp94E%2BLR9spc4dosvejet9haxh%2F%2Bj6HAWhRHjagYl88DFqGy1bMkCiKp7aXPWNPcQG55&X-Amz-Signature=1d769e0d24de8fdb95f646dfcbd3be7e106c6cd130f7da72f3dcc1c7d85fb568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

