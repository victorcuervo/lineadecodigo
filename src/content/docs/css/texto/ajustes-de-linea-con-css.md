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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDYER46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoZ75uelAjuAcsF4wXjmOlJK7f1GS%2Bh52RzhKxUt2rYAiB9dBoT%2Baj%2Ftfb23Y%2BoD0UB9Hq0o4Ob0Lw1rnzrtl6zJCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQfTBiM2mMOGgTRuvKtwDfTc%2BFHZWcW2O1Sz6E8Tm0bzmApUVNCJunlsV0OtRHhYuz7iXpqeqRsNnlpoIqQdLuyFsYDUz6Nwp7K6Ff9XRWew4xJwAfhGoaSYKgukWcnFBnUGRF%2FoJG55mDydXbOYJN9VXn6UWAM%2Fki0%2FmO0NQD5%2B4elH%2BWs6XkqiXmNFYb65sY6AfpPuab3pDOXEiCJ59QjpkBnZD1W5WMfvWDbgZ4hFiW658l3x5BXtd0WNG68%2FKR%2FZyMjrz9F52Yd0LPTGYAkHnxDeynhX%2FQFtjODaMBeYBACn5URxTHJ4FcZhTqpcw7zuBNtuNZjyhaQC4t1KHgsW%2BrVKiBfi3A8%2BmF10XYM6un2DKaS41vi5VqJ3MUZzraF13hGDHhWrABGWWM7hRcLqS%2BKLWsEeL%2B2%2FyrSBqTEHLFQC0lqyZ3DnRc1LoSzDKHUWTbC56vnuw9t2udYMyg7y7wuUFvHrkDU2fA%2BR13TcNcv%2F5JGjEg5x7jH34PfX1t4jgroxmu0b1xuyq0rumxw%2F%2B4nST3QOKLNL7%2BXjD6kfxWJzX9nmGYbaRp58AY%2BOxGFJzcY%2B%2FgnMAAumzbBA9EYq1sl4zd6tfT6PWL7woRx2ULS561DwKS1hk04Rq3u4%2FcC5ioG%2FAOryIJvAw%2F7KIygY6pgF%2BwFnAHmEFj3GvAkJHC%2BK7wE15OiRENiLjml7m8WR4KOJIZJaq6HRoQ65cOJbmkJ4We02COX9Rit7VkKjTxHsKzk1suABmCI7zI0Pm9YY%2FLbjnqYbRiJ1CB0SKWL2R9izH%2F8mTYhzo4oGtGvKUuYrim8IQZki5mL2LyGORJ5dAuJMREMYNmbIDfi4zc5rnGgY%2BJZtY3eKlloYndUwYEY6k4%2FlRm%2FnW&X-Amz-Signature=4ff7bf4d5155ba4260dc683ad40b945763364686e4b26782d33d82d0543b9430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDYER46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoZ75uelAjuAcsF4wXjmOlJK7f1GS%2Bh52RzhKxUt2rYAiB9dBoT%2Baj%2Ftfb23Y%2BoD0UB9Hq0o4Ob0Lw1rnzrtl6zJCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQfTBiM2mMOGgTRuvKtwDfTc%2BFHZWcW2O1Sz6E8Tm0bzmApUVNCJunlsV0OtRHhYuz7iXpqeqRsNnlpoIqQdLuyFsYDUz6Nwp7K6Ff9XRWew4xJwAfhGoaSYKgukWcnFBnUGRF%2FoJG55mDydXbOYJN9VXn6UWAM%2Fki0%2FmO0NQD5%2B4elH%2BWs6XkqiXmNFYb65sY6AfpPuab3pDOXEiCJ59QjpkBnZD1W5WMfvWDbgZ4hFiW658l3x5BXtd0WNG68%2FKR%2FZyMjrz9F52Yd0LPTGYAkHnxDeynhX%2FQFtjODaMBeYBACn5URxTHJ4FcZhTqpcw7zuBNtuNZjyhaQC4t1KHgsW%2BrVKiBfi3A8%2BmF10XYM6un2DKaS41vi5VqJ3MUZzraF13hGDHhWrABGWWM7hRcLqS%2BKLWsEeL%2B2%2FyrSBqTEHLFQC0lqyZ3DnRc1LoSzDKHUWTbC56vnuw9t2udYMyg7y7wuUFvHrkDU2fA%2BR13TcNcv%2F5JGjEg5x7jH34PfX1t4jgroxmu0b1xuyq0rumxw%2F%2B4nST3QOKLNL7%2BXjD6kfxWJzX9nmGYbaRp58AY%2BOxGFJzcY%2B%2FgnMAAumzbBA9EYq1sl4zd6tfT6PWL7woRx2ULS561DwKS1hk04Rq3u4%2FcC5ioG%2FAOryIJvAw%2F7KIygY6pgF%2BwFnAHmEFj3GvAkJHC%2BK7wE15OiRENiLjml7m8WR4KOJIZJaq6HRoQ65cOJbmkJ4We02COX9Rit7VkKjTxHsKzk1suABmCI7zI0Pm9YY%2FLbjnqYbRiJ1CB0SKWL2R9izH%2F8mTYhzo4oGtGvKUuYrim8IQZki5mL2LyGORJ5dAuJMREMYNmbIDfi4zc5rnGgY%2BJZtY3eKlloYndUwYEY6k4%2FlRm%2FnW&X-Amz-Signature=251cb18a5ead91e3afabe638da316bf3e53b6c7b1ee6fe1a3c3d372e0fc2b3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

