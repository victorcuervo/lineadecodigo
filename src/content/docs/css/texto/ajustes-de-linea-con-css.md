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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EIVDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg%2BRmQOFyL%2F7TOQnGPEzISPcfvAF7CmtHNkRxpIWUW8AiEAg9R6Mn45e7XOd1IM13nVyqvIK2hupDde1TJqYs28srMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3EjaDP%2Fu2QczWGLCrcAzx39rbiik27o42CAT3i75UtXF6WVoJG19aeAn1wL4Lcx6rnbgoaPWzum0GixWDxmW%2BaIAAR3nSm7tfC3pFcS8E0R%2FWyetghBkhELpgD9LE58bCp4cgvFpplEsNcjjrHLNbVtfT%2BDAS7uwJDiFrJGAyO0hYAlQt3j7PTI02gB%2BPWsg7p%2BzE%2Blm%2Frg0QsYG0DaUQNbk%2BP1iWUsEA88VXtSfsiQo3TBlkfM%2Fc1vMrcDO8Eqxn6Fyx0JTgTZ8vEbWrg8kVZRsqTJWUFkztaw40kd%2BqTjidLwUYMbA7uQ5TqgEXPoGbDMji0cGGqvyTkH9h7PxIovExV0d0Ly7ymSdTtx%2Bvpd9eI6vwTGx%2BYo2Qgp%2Fur0tpybhJXkNdwonZmilOrhR8XKgvuRmM%2FSqltMLqNzcdYLBUD4Hm%2FYcShdkIExB%2BAqMk5ksdH2Vp2gx6EcCZ9AVblwErWsFZV66GpXa5%2FCk88u7tK8l0oAbgNiL1XVWLheivD1tHU1iUydkEh1UANezchaONQ6DIcR6jOqIJE%2FpCaJxcdT91iRokVgetkU8HAiPoDeVbgfQ45GigZM5zsSlA2z4Lc1JUf%2FguOrndTKItOf%2FpJijtM%2Bzcf1bgk5K8aBFf1CxhEYCj%2FmY8bMNGfi8oGOqUBKvcA4Nj7LgAFCabwscrMpqCLggkLJk53XRGo%2Bf4X9wNr5nFjKxHpGnBIfJfMTifAor49viUw%2BqWbyKiLj3k%2BhSZLLB6Zg3%2B8x49DAno3dWuV7C3EhR3TbyIyD7EeDyEMsoUBOBqE0aVQxjaEIXEH1IKxqwFuQpvulUl8aeGar37mUUsDV6kC5jHCRdIV0drbNh4FaHkicxNUP4lSzcjzASyB2yX0&X-Amz-Signature=e1711a2ccef78f9e47a2a617584a0ade4da121eea6364be7f537627617cbf2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EIVDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg%2BRmQOFyL%2F7TOQnGPEzISPcfvAF7CmtHNkRxpIWUW8AiEAg9R6Mn45e7XOd1IM13nVyqvIK2hupDde1TJqYs28srMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3EjaDP%2Fu2QczWGLCrcAzx39rbiik27o42CAT3i75UtXF6WVoJG19aeAn1wL4Lcx6rnbgoaPWzum0GixWDxmW%2BaIAAR3nSm7tfC3pFcS8E0R%2FWyetghBkhELpgD9LE58bCp4cgvFpplEsNcjjrHLNbVtfT%2BDAS7uwJDiFrJGAyO0hYAlQt3j7PTI02gB%2BPWsg7p%2BzE%2Blm%2Frg0QsYG0DaUQNbk%2BP1iWUsEA88VXtSfsiQo3TBlkfM%2Fc1vMrcDO8Eqxn6Fyx0JTgTZ8vEbWrg8kVZRsqTJWUFkztaw40kd%2BqTjidLwUYMbA7uQ5TqgEXPoGbDMji0cGGqvyTkH9h7PxIovExV0d0Ly7ymSdTtx%2Bvpd9eI6vwTGx%2BYo2Qgp%2Fur0tpybhJXkNdwonZmilOrhR8XKgvuRmM%2FSqltMLqNzcdYLBUD4Hm%2FYcShdkIExB%2BAqMk5ksdH2Vp2gx6EcCZ9AVblwErWsFZV66GpXa5%2FCk88u7tK8l0oAbgNiL1XVWLheivD1tHU1iUydkEh1UANezchaONQ6DIcR6jOqIJE%2FpCaJxcdT91iRokVgetkU8HAiPoDeVbgfQ45GigZM5zsSlA2z4Lc1JUf%2FguOrndTKItOf%2FpJijtM%2Bzcf1bgk5K8aBFf1CxhEYCj%2FmY8bMNGfi8oGOqUBKvcA4Nj7LgAFCabwscrMpqCLggkLJk53XRGo%2Bf4X9wNr5nFjKxHpGnBIfJfMTifAor49viUw%2BqWbyKiLj3k%2BhSZLLB6Zg3%2B8x49DAno3dWuV7C3EhR3TbyIyD7EeDyEMsoUBOBqE0aVQxjaEIXEH1IKxqwFuQpvulUl8aeGar37mUUsDV6kC5jHCRdIV0drbNh4FaHkicxNUP4lSzcjzASyB2yX0&X-Amz-Signature=97f35b8cc4b143c54a9d2aa2f7e903d0ad08359b256e6ed44428beee282ef76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

