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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673D6O77A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjq1gqKHjHiNX3QXNo8JmVjTVXBDQ0iLLKgX9Tse92wAiAUVTy6orMX7UibtEDiu661YLd4S8aQ%2B%2FRa0c%2FcuqmrryqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdn6roroY4MwTjPxGKtwDJI87ZzYSdtWuOIN%2BShFWv1b1x%2F6tuxe4zHC2QBZWXOxii1Qlw804nWAQxz%2FaFefJp1e%2F68cMTZOxH8GGlfaf%2FglSWY9pUpPdPfpjyiZLm1kd85YH6eYsFyHcguhl%2BDm%2B%2B99XRmlLi1iRQuPtxclh5%2Fe7Pyz70uNGzWwxRb4pgEvgHVnclhGcgoTyZG%2Bbj2mZEwFQld4ghZSGGOFexst4t3ou2h%2BN5X1GBmsEmuJAWfrRoiv%2BUxrNGr1yyslb1Qu5NIhoaMmwzDsMTICNxmTmpkrfrFoI%2FE3Ssk%2BHPH0fkYRrMdn6uDGi4mVWPBBXxDc1ZbzEyNgi9nEoe1QeEPf0HmpJgovcBosdhGiPdwY3%2BSqvYPPRPyiKp33QwbefVOiEB3UVGheDqL8ma%2By3M8Yp1vIGYYSQMUYkHjcZtRCrWc0kFYb9yd837BWW0pb40ESQV0q%2BbdsfQ5T5FG63YHuRI97bF4OJpAx%2F6qUSrHrEtXNBb7L%2BVYRUDFrDe8LNc5n1CqQX34fg7ASPfYI63iPgQOxtoxj4QsuX2aAev7kyHgDLwB%2BC4XBJR9%2BrBOQxZ0SLBY6LOfGcoAnE4EDP0JQ6ZKKXsaaVfv1jyF0b9hyamhamT7QGPBQWPAdr%2B30wuoqMygY6pgEdCr%2BmBcCTu2Qt5iAYTbzlFgGt4FdbAfH5j10t60vqIzUO2JH0Vn0XyGD%2Bnn4IRRJxpWyMzQialU2d%2FXUs7053hUxChg4tKvjMeY4%2Fsn5%2BqjVvp4HxBSChg7dgYDouQcWWK7nDib7ozGd0qFLomRAtjq2zuD09IRfGlOEvErOcWSlyZzzbkeqBhV0gKTMmytaVT4G9i8B6abw9JGULCRX5TLaJfv7s&X-Amz-Signature=ff97fba670be76d072529a053d1d38922d068eabb2cb12f3e73b8fb30d2e6551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673D6O77A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjq1gqKHjHiNX3QXNo8JmVjTVXBDQ0iLLKgX9Tse92wAiAUVTy6orMX7UibtEDiu661YLd4S8aQ%2B%2FRa0c%2FcuqmrryqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdn6roroY4MwTjPxGKtwDJI87ZzYSdtWuOIN%2BShFWv1b1x%2F6tuxe4zHC2QBZWXOxii1Qlw804nWAQxz%2FaFefJp1e%2F68cMTZOxH8GGlfaf%2FglSWY9pUpPdPfpjyiZLm1kd85YH6eYsFyHcguhl%2BDm%2B%2B99XRmlLi1iRQuPtxclh5%2Fe7Pyz70uNGzWwxRb4pgEvgHVnclhGcgoTyZG%2Bbj2mZEwFQld4ghZSGGOFexst4t3ou2h%2BN5X1GBmsEmuJAWfrRoiv%2BUxrNGr1yyslb1Qu5NIhoaMmwzDsMTICNxmTmpkrfrFoI%2FE3Ssk%2BHPH0fkYRrMdn6uDGi4mVWPBBXxDc1ZbzEyNgi9nEoe1QeEPf0HmpJgovcBosdhGiPdwY3%2BSqvYPPRPyiKp33QwbefVOiEB3UVGheDqL8ma%2By3M8Yp1vIGYYSQMUYkHjcZtRCrWc0kFYb9yd837BWW0pb40ESQV0q%2BbdsfQ5T5FG63YHuRI97bF4OJpAx%2F6qUSrHrEtXNBb7L%2BVYRUDFrDe8LNc5n1CqQX34fg7ASPfYI63iPgQOxtoxj4QsuX2aAev7kyHgDLwB%2BC4XBJR9%2BrBOQxZ0SLBY6LOfGcoAnE4EDP0JQ6ZKKXsaaVfv1jyF0b9hyamhamT7QGPBQWPAdr%2B30wuoqMygY6pgEdCr%2BmBcCTu2Qt5iAYTbzlFgGt4FdbAfH5j10t60vqIzUO2JH0Vn0XyGD%2Bnn4IRRJxpWyMzQialU2d%2FXUs7053hUxChg4tKvjMeY4%2Fsn5%2BqjVvp4HxBSChg7dgYDouQcWWK7nDib7ozGd0qFLomRAtjq2zuD09IRfGlOEvErOcWSlyZzzbkeqBhV0gKTMmytaVT4G9i8B6abw9JGULCRX5TLaJfv7s&X-Amz-Signature=d3af28419371fcf503da1ccb31e2fb4b8ceb02f947a82b1fa3b22c85817618f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

