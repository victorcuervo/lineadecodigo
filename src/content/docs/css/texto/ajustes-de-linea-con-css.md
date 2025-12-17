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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKY5XHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5mOYnRVsB%2BV38juFNC5Z6MyHxmNWOgj0Cli%2F9xAD%2B5AiAehEL9pFX2%2FPCpM5dYRrnAd6vwcwFNr9gjXsSHzcE0dyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKQiVCKCgoi%2BTKwBhKtwD%2FlAFZT1or%2ByAjtxGy35XrcH6adMqXW55Y%2F2bD59%2FQ%2B7ZGGV7XJ6geqRosT9j3N85pXo4Raj%2FvMAYAqPpVu%2FgF08LQreg5kHCDy8GcbBkIExgxzTxUWGuHcvMvCSeyvJziTh5JGY8m4sv9fNtFRPLOdkPagEGSztFD4dMhFDnbTTDcPMwHCfYPqzgRLXV%2FAB11wjoPmAUcXwUI1dbUMh7VtRUM0xnJUqDoOb0pFfiRxTL18sgqh5xxhgRHrFva2%2BMJO2wKy%2F4NUz8k6xquYcbAdagCpPVWE%2F7LHP9AadlgdB5%2FgzMjXDQKQjddsBK3A8LmDz31m46%2FD%2F58b5aR%2BnOxPVqNt3NElYZvK1cFac%2FB39V88Wn6niUavMOEpIzqDkhw5gUd5ljtxsPUsuf0N5EOWXEp%2FyClDnGgwAiwNauw%2FsDmnCJon9naEeByTeP4MXuZ0z3YLr1CMaL%2FFyTwxPvi9HRc9mKM3fav5bOpqFrwUAHBGfatjNwVT6JkQL7sE66veHJ7ERzmL8ahIHZq%2FuFcEnwnyuS71Uo28BO%2Be0jScJYqhi1O0Ld8QWAVWM33LHfGTGXMwcgiOi6%2FqUU09FZYHGnFFpaZbI3V3up9yBjVn113Y8MPvf0XSvJYQMwsJ2JygY6pgE%2Fdq2om9PrEIQNGhwKwIRQ1U1l4PYIeNrvGH5u6xIwbmZ8Tfd%2FKiWf2vO9qfS6PwA8lK2Y7TjV2S5hVxKGroa8f3RmyYQtFRBP32%2F7LZaGpTJKID4GLCEVs3MFLZzDdf5Hr3Fd9nKC2GxGVTX%2F8cWlGNt21xkM1QuE9g8cDqBCboCTJBTmLGX0ya3AN7zv9c8OZf0OJ7iMEdWbeKD91sv3NimeGZ1w&X-Amz-Signature=b32c24ebc978acd57c3df203a2f6835de6b85c7a1f999da9cdae08c9a0b2d64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKY5XHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5mOYnRVsB%2BV38juFNC5Z6MyHxmNWOgj0Cli%2F9xAD%2B5AiAehEL9pFX2%2FPCpM5dYRrnAd6vwcwFNr9gjXsSHzcE0dyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMKQiVCKCgoi%2BTKwBhKtwD%2FlAFZT1or%2ByAjtxGy35XrcH6adMqXW55Y%2F2bD59%2FQ%2B7ZGGV7XJ6geqRosT9j3N85pXo4Raj%2FvMAYAqPpVu%2FgF08LQreg5kHCDy8GcbBkIExgxzTxUWGuHcvMvCSeyvJziTh5JGY8m4sv9fNtFRPLOdkPagEGSztFD4dMhFDnbTTDcPMwHCfYPqzgRLXV%2FAB11wjoPmAUcXwUI1dbUMh7VtRUM0xnJUqDoOb0pFfiRxTL18sgqh5xxhgRHrFva2%2BMJO2wKy%2F4NUz8k6xquYcbAdagCpPVWE%2F7LHP9AadlgdB5%2FgzMjXDQKQjddsBK3A8LmDz31m46%2FD%2F58b5aR%2BnOxPVqNt3NElYZvK1cFac%2FB39V88Wn6niUavMOEpIzqDkhw5gUd5ljtxsPUsuf0N5EOWXEp%2FyClDnGgwAiwNauw%2FsDmnCJon9naEeByTeP4MXuZ0z3YLr1CMaL%2FFyTwxPvi9HRc9mKM3fav5bOpqFrwUAHBGfatjNwVT6JkQL7sE66veHJ7ERzmL8ahIHZq%2FuFcEnwnyuS71Uo28BO%2Be0jScJYqhi1O0Ld8QWAVWM33LHfGTGXMwcgiOi6%2FqUU09FZYHGnFFpaZbI3V3up9yBjVn113Y8MPvf0XSvJYQMwsJ2JygY6pgE%2Fdq2om9PrEIQNGhwKwIRQ1U1l4PYIeNrvGH5u6xIwbmZ8Tfd%2FKiWf2vO9qfS6PwA8lK2Y7TjV2S5hVxKGroa8f3RmyYQtFRBP32%2F7LZaGpTJKID4GLCEVs3MFLZzDdf5Hr3Fd9nKC2GxGVTX%2F8cWlGNt21xkM1QuE9g8cDqBCboCTJBTmLGX0ya3AN7zv9c8OZf0OJ7iMEdWbeKD91sv3NimeGZ1w&X-Amz-Signature=7b4cbc16bbd0748d0ba16e975bda9d9679b16500262d2dc71200b821dc1f7629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

