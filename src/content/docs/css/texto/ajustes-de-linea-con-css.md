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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEERESGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxI90FOW4bTChqa%2FbUK36pUJ5BTRyddnPj3366SHgw4AIgbqEWTwyJLd9a0CRZGwICXZmEjakLda%2BCG7fBP7Us%2BfIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG8xzLeSVN0ZQuCw%2FSrcA%2BFGRFAzxeWweTQaN%2BjzY%2Fmfa4HDNfnhm18tIekskh5KK2ZqKnmDz%2BNFB0uN4DTZKTqZEsRIA7%2FCKOClFdPHDATOTiFxIuU%2BIeGEjkCgv%2F41ceAaXhXdOgSYQSO5zbeKPggV5gVvN%2F%2FGjLxg1lPADIehGCFGHpD90fnrdJrr%2BgKMQQkGI34MGH3e8lKRwa6WODuyZTN%2FS0MI%2FuNNrSW4gD4efD53Q3%2F2oke9ouIdb7HfIQ5KC%2BT7zhHYLcuYfd%2BSYAUF6Ea%2B8D80KRwIVymIK4wc5gYOpE0NO0ghKROyqKtrKTXeCtYzU1hUxIzjyy8QJXN5oxWnsWTCUE%2BWmoaINsrzElAbLlwHqEhfEmy0nhMZr7Gmg5V3YUYRERqCWsTK4XvizaXuEqsJsvfEmb1q%2FO2myi7oG%2BIxJC6MDlD%2BVAr0Vx%2F1lsYfDetmzv5SWyqlIngoVxIROACM6syJI%2B7l4mQ9xbq2%2BWE5PxbxtE%2BSvDTIwUPRBPin%2BTERvayH9TqT4qM55CiBfSHrt%2FZMkcA%2BkdGz1RU3%2Ft35j6Fd9nIOYFZX%2Bod7Dn%2FelqY1NNC0wJmgYqRy3CygWqY%2Fnd8Evvu5tjEFygadhDAEJ0I2kn8afiTVOw%2FC3KKs611T%2FpmLMLC4icoGOqUB9iODVoQ7NCbpk5hWXDi8RGZpLaLt7bhV%2FZiPuvEWGm9xW5RjElZgkf8aRqff0Sx4UlsSN3hW3jA43nz6MkuywyBlKSeMgl5MgvzgP8%2FU5rm9AFV0bGEvmd44IfOwMiJr2pEQFZb6XxHUvUdjQpZJy7OM3FUIrTL%2Bs3V5UOve6u8u1Drv%2BRg6NcNy6kmuH%2FyWuEa0ScoQA1D1%2BsysTY1Q1MCkGfsd&X-Amz-Signature=d21c191cdb75689434046bfb629158f57f947aa75e434167d33d1db51d677c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEERESGS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxI90FOW4bTChqa%2FbUK36pUJ5BTRyddnPj3366SHgw4AIgbqEWTwyJLd9a0CRZGwICXZmEjakLda%2BCG7fBP7Us%2BfIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG8xzLeSVN0ZQuCw%2FSrcA%2BFGRFAzxeWweTQaN%2BjzY%2Fmfa4HDNfnhm18tIekskh5KK2ZqKnmDz%2BNFB0uN4DTZKTqZEsRIA7%2FCKOClFdPHDATOTiFxIuU%2BIeGEjkCgv%2F41ceAaXhXdOgSYQSO5zbeKPggV5gVvN%2F%2FGjLxg1lPADIehGCFGHpD90fnrdJrr%2BgKMQQkGI34MGH3e8lKRwa6WODuyZTN%2FS0MI%2FuNNrSW4gD4efD53Q3%2F2oke9ouIdb7HfIQ5KC%2BT7zhHYLcuYfd%2BSYAUF6Ea%2B8D80KRwIVymIK4wc5gYOpE0NO0ghKROyqKtrKTXeCtYzU1hUxIzjyy8QJXN5oxWnsWTCUE%2BWmoaINsrzElAbLlwHqEhfEmy0nhMZr7Gmg5V3YUYRERqCWsTK4XvizaXuEqsJsvfEmb1q%2FO2myi7oG%2BIxJC6MDlD%2BVAr0Vx%2F1lsYfDetmzv5SWyqlIngoVxIROACM6syJI%2B7l4mQ9xbq2%2BWE5PxbxtE%2BSvDTIwUPRBPin%2BTERvayH9TqT4qM55CiBfSHrt%2FZMkcA%2BkdGz1RU3%2Ft35j6Fd9nIOYFZX%2Bod7Dn%2FelqY1NNC0wJmgYqRy3CygWqY%2Fnd8Evvu5tjEFygadhDAEJ0I2kn8afiTVOw%2FC3KKs611T%2FpmLMLC4icoGOqUB9iODVoQ7NCbpk5hWXDi8RGZpLaLt7bhV%2FZiPuvEWGm9xW5RjElZgkf8aRqff0Sx4UlsSN3hW3jA43nz6MkuywyBlKSeMgl5MgvzgP8%2FU5rm9AFV0bGEvmd44IfOwMiJr2pEQFZb6XxHUvUdjQpZJy7OM3FUIrTL%2Bs3V5UOve6u8u1Drv%2BRg6NcNy6kmuH%2FyWuEa0ScoQA1D1%2BsysTY1Q1MCkGfsd&X-Amz-Signature=b6129f559b48b8b22a1e0740e4edf9068fc0ecd09b77124855ac171bfd91410d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

