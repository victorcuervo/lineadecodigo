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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2OJV77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf6v6RvfIwHpmJbUvf%2F%2F85o3vT0e0I%2B6bKAjdyD3Ww6gIgBDS7WNIzuim4BnJVfskm5imwsOsxwcUGHyk4HLUCEQ0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD71OElsKS73%2B2HaUSrcA6oHNdM37NofYlifp7HwXK7SoOZmLWuLylOYWUPRj2MjCuGDl5%2FxKDQQuGXVjwan5hUWC6SRHT1NJWPceB2bRWC6ibnt8%2FSfFvf7Cw671ure%2BCw5qG%2BLvEtC7WvZvV0QzGuD7XvOcwIg1llrdbUOI3SKz7NiYv95IadkWEHmxrTiXP2668zt2xMm1V%2Bt%2FdQWF9wYLe6khzA51%2FYnDf%2FI5l8BDkRB7fsiDloiARmQKmkwUhYyxki%2FpscxTF%2BNNGWcTeDv24C69gxvm8pM5Nr3ZIrD0GJG8IVzXcwbimAiz%2FkexcbhgWSqAgXx7VugwmkzAiPaZLmHFd3Nq7H0gr8OPuOkOQf3C2SrhktnF2OBrTAOKzs1uoYNDLbMJ2TqY8E1UusvW9nQBl35XLfeA1M%2FVtGwP6VmlxiUftV%2BahFHt4iCJE5ROnjyvcp815lw6m0QLKU7IedfiwFYJEF3YKh80Q0F8tlh97K%2B8EaHhaBtaMvxHpsWTEx7Kx03dVODIVeCWpW%2FoGCVv4iJANGt55c83Mo7wePuUkTrvYQhnpH6fA9kcKlzeYlYYZmcLBbYTskYDzh6w2RCq0PxCP5hl4t0gCw7Qhzfz29IX5w8cSLtiKs0neyYpl7uRZdHXIMwMJKPisoGOqUB7oiUskAkCS4H%2FLLqiWC%2BchPYaw0AD%2F4kn8nnoOUq6w2Ozc3rf4x1nUnbnrrgTZKM%2B9xWnXXW%2FGG9b7ZX9ikCcj1BC8ui4YWsPLYMhd3kHtqTnwraa8UDfqeVKRMvNVf2N9QYtuq%2BA1AumNtlrysd1h%2F4iTAZo3yE45hYLMqevG05y9XEKjw14lGnVjBT5VfVKwN6bVfkqq%2F0fkijZR363tYwWJBk&X-Amz-Signature=256d9809dd5025034df5bfdf2e3d2a8ce10e30b4dd28a9d594b79f36338f5a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2OJV77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf6v6RvfIwHpmJbUvf%2F%2F85o3vT0e0I%2B6bKAjdyD3Ww6gIgBDS7WNIzuim4BnJVfskm5imwsOsxwcUGHyk4HLUCEQ0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD71OElsKS73%2B2HaUSrcA6oHNdM37NofYlifp7HwXK7SoOZmLWuLylOYWUPRj2MjCuGDl5%2FxKDQQuGXVjwan5hUWC6SRHT1NJWPceB2bRWC6ibnt8%2FSfFvf7Cw671ure%2BCw5qG%2BLvEtC7WvZvV0QzGuD7XvOcwIg1llrdbUOI3SKz7NiYv95IadkWEHmxrTiXP2668zt2xMm1V%2Bt%2FdQWF9wYLe6khzA51%2FYnDf%2FI5l8BDkRB7fsiDloiARmQKmkwUhYyxki%2FpscxTF%2BNNGWcTeDv24C69gxvm8pM5Nr3ZIrD0GJG8IVzXcwbimAiz%2FkexcbhgWSqAgXx7VugwmkzAiPaZLmHFd3Nq7H0gr8OPuOkOQf3C2SrhktnF2OBrTAOKzs1uoYNDLbMJ2TqY8E1UusvW9nQBl35XLfeA1M%2FVtGwP6VmlxiUftV%2BahFHt4iCJE5ROnjyvcp815lw6m0QLKU7IedfiwFYJEF3YKh80Q0F8tlh97K%2B8EaHhaBtaMvxHpsWTEx7Kx03dVODIVeCWpW%2FoGCVv4iJANGt55c83Mo7wePuUkTrvYQhnpH6fA9kcKlzeYlYYZmcLBbYTskYDzh6w2RCq0PxCP5hl4t0gCw7Qhzfz29IX5w8cSLtiKs0neyYpl7uRZdHXIMwMJKPisoGOqUB7oiUskAkCS4H%2FLLqiWC%2BchPYaw0AD%2F4kn8nnoOUq6w2Ozc3rf4x1nUnbnrrgTZKM%2B9xWnXXW%2FGG9b7ZX9ikCcj1BC8ui4YWsPLYMhd3kHtqTnwraa8UDfqeVKRMvNVf2N9QYtuq%2BA1AumNtlrysd1h%2F4iTAZo3yE45hYLMqevG05y9XEKjw14lGnVjBT5VfVKwN6bVfkqq%2F0fkijZR363tYwWJBk&X-Amz-Signature=c4b22098bcd134350ec0bf67cab2b3851f49bbbb435530c773d83c2615759411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

