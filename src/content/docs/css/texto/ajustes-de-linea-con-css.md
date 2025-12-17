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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVLHHQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfegzVmft6CzbdYwEZy9xqyzi%2BvBPeG0G2dmsqaLyrQIhAJ6Iihr5ZoU9zlRYcN4ZakFIK3Yn47He6ANbVsIHNpWYKv8DCHcQABoMNjM3NDIzMTgzODA1IgwK%2BvvCDQwrQx%2B2ESEq3ANBcv97ZrjNg5QidpMbHNNZ%2FBtQ%2BVMTe%2BO%2FkTjYJy%2FmeHcuBL7wqlsmzmNpOf9n3Zqn%2FLRvwlvggPm1geLT3yBJ02vYCSJJ9ixZfa7BZj8ngTlQllDjtLz2TMvCYiywVRZyW9%2FX1KEylIUPOFvIiPWwS%2FDQyJskN0J1sj5Oo8cvo0PBRVkKyFDTp75Uz6dT9PA7016zo1HL8AMKQOOvwI3F9baJLekql67YwJkMjMZpLoooAUiNWCXDVyi8dTPvqS9F55TbxbWtzIn9ABC0a8IYsQD6lqHLsK%2FrHm%2FVpbrpx%2FbnWY8h%2FrwnjhQgcl36rwQw1xl%2FAqLEyPB5%2Bp5%2Bq%2FyekB8qfX%2F0iZPRNgN3Th4Y0e0Ro4nG7yVP2RCqBm9Lz0uFzhqM0oDB01O2eF9Jb5r9PFlz6H5Yti8xWVHqYSZE9rBJ5DWND7mR2qZzIYgvpn3g%2B4kc8GQjGV1YWPwcUvQDp96nlMybI1f0MoLGqbsiHPueWqoFA1Luk%2F%2BMbZyyG6OGKViju%2BP3dNE7ET%2FLhKACm9ZcO7s4A2xdQRSf%2BjIGz9WFeEWy4oYjmONNsj%2Fg4OhzM2d%2FRFrgCdGCNXzdUPGAXUOnYfXcF3GSUhyFkQ3MZgxHa7LzRP%2FuA2AZVjCdg4nKBjqkAWMmhMcronuoK4uMUiBfEIepXJd4ogFwEbGRUQkWV2broDNGfoBglOnt8uacbaOC%2B9I2yrXNZb7iqRg6BVXcudANd%2FzeN9hMmXh9ClMONZ8Gf8Dj6sz1LMVsZlTvxahh5m8bosXitOmDnT%2FWyoAo09mI4tm%2BO9KwTEngRi2R4wDhZxP3i%2BKitaQcVK6TBUAy%2FYkioENTu1gjfiTDiVuNbh4Ga0GY&X-Amz-Signature=b59e781025c7f54e3af315a7f660d0d0d7b6c69c7e1fcff3524818f648310316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYVLHHQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhfegzVmft6CzbdYwEZy9xqyzi%2BvBPeG0G2dmsqaLyrQIhAJ6Iihr5ZoU9zlRYcN4ZakFIK3Yn47He6ANbVsIHNpWYKv8DCHcQABoMNjM3NDIzMTgzODA1IgwK%2BvvCDQwrQx%2B2ESEq3ANBcv97ZrjNg5QidpMbHNNZ%2FBtQ%2BVMTe%2BO%2FkTjYJy%2FmeHcuBL7wqlsmzmNpOf9n3Zqn%2FLRvwlvggPm1geLT3yBJ02vYCSJJ9ixZfa7BZj8ngTlQllDjtLz2TMvCYiywVRZyW9%2FX1KEylIUPOFvIiPWwS%2FDQyJskN0J1sj5Oo8cvo0PBRVkKyFDTp75Uz6dT9PA7016zo1HL8AMKQOOvwI3F9baJLekql67YwJkMjMZpLoooAUiNWCXDVyi8dTPvqS9F55TbxbWtzIn9ABC0a8IYsQD6lqHLsK%2FrHm%2FVpbrpx%2FbnWY8h%2FrwnjhQgcl36rwQw1xl%2FAqLEyPB5%2Bp5%2Bq%2FyekB8qfX%2F0iZPRNgN3Th4Y0e0Ro4nG7yVP2RCqBm9Lz0uFzhqM0oDB01O2eF9Jb5r9PFlz6H5Yti8xWVHqYSZE9rBJ5DWND7mR2qZzIYgvpn3g%2B4kc8GQjGV1YWPwcUvQDp96nlMybI1f0MoLGqbsiHPueWqoFA1Luk%2F%2BMbZyyG6OGKViju%2BP3dNE7ET%2FLhKACm9ZcO7s4A2xdQRSf%2BjIGz9WFeEWy4oYjmONNsj%2Fg4OhzM2d%2FRFrgCdGCNXzdUPGAXUOnYfXcF3GSUhyFkQ3MZgxHa7LzRP%2FuA2AZVjCdg4nKBjqkAWMmhMcronuoK4uMUiBfEIepXJd4ogFwEbGRUQkWV2broDNGfoBglOnt8uacbaOC%2B9I2yrXNZb7iqRg6BVXcudANd%2FzeN9hMmXh9ClMONZ8Gf8Dj6sz1LMVsZlTvxahh5m8bosXitOmDnT%2FWyoAo09mI4tm%2BO9KwTEngRi2R4wDhZxP3i%2BKitaQcVK6TBUAy%2FYkioENTu1gjfiTDiVuNbh4Ga0GY&X-Amz-Signature=a21b7b95b0fdfb2b0605c59897551c1f8b679821f79d08bccf1d718dfc2fe16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

