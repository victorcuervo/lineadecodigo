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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6RIWYD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAetaW5hjvWxgn2foIGUxu6w%2BcXdOS3IWQbtOfo91F8YAiAv5bTlx5GHOKAofi9KGKmSaxEgKjCYpPSkKGORbZLu8Cr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMXkr1jTe88jfeTyrIKtwD9C0nknxt2ToGNK499448oZP0J8J4st2%2ByUEZgE2fanvw8uEZ%2F5N4QZyrHh9JVKAclxydJGFqF6HoY0UXaxbsULZSh5bMj%2FNVbDgMct2JhOmImOjNHpRSJ1bdB3g4JWkrnvovR0Eqx00XGSBZcRHIDe1igvpNb2SkpczufLJ7KWi9eaRs1dHOa%2Be%2FdVTdKrmsDSgGdCBKBdjxEzWR49y%2FxFJKJQkISLLjcy%2FuK6Nyq6YcqD1WQCtQVdnXq2JezVPZ0PYsSAi5t96dyL5yqS1jF1whxxpGmszqMUvyr4lwZ6%2B4QsWaHLuDVaxdJVc6GVx2n9Bc1KiD3jIJBK9%2Ff5DxF9mWCqC6Im%2BoRxB6Jj%2BOU18Dx8D3L7v0lzb2L5bwi7qsN44duIHlVnjj5AirCgCZtqsTkukLTdGtIGyQs1o7jHKt1pBIRpd0%2FYpysUTvqm6%2B7Agv3Q1D750yzr4IJXMYKIsW48m1EYXa9pAvUMcD8YZsOvPA0lbqDOQBQp2vQRFQIRiA2ItlI9KMZ8P1WrRi7FEIVVuFXrwcsPkk23xZcA5T7cqzI6M9EZmRkEdXVOxS1RcFduDBrettsXJiZudzxYTvIZavG4IJTr2Kunq3zsyNpBBmbpoAh8ceXBQwpOGKygY6pgHlNkFMeaLdmzR6mjZduOSGWJUySZm3GBHvRNJcsekHP%2B4VVuvHgIylUHaCafMM04opE3DdRjAn0%2Fq3OaLR2um8Qy%2BzRtz9aBnGOubtj2mTM9zJ6bLemPWUROBnnYTWj%2F9%2BEV8Co%2BW6JvA7kijAdgCqYulJB9mmC%2FJM9kYER80EE8JrM6f8j9kG5cuaM9ladKZ4k0hLkx0si8vhcRpPCxZhi9krNZrv&X-Amz-Signature=cf5a2643cb9a102042991c8b399cc781efa260c982ec65e6a0e6be7d8580a487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6RIWYD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAetaW5hjvWxgn2foIGUxu6w%2BcXdOS3IWQbtOfo91F8YAiAv5bTlx5GHOKAofi9KGKmSaxEgKjCYpPSkKGORbZLu8Cr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMXkr1jTe88jfeTyrIKtwD9C0nknxt2ToGNK499448oZP0J8J4st2%2ByUEZgE2fanvw8uEZ%2F5N4QZyrHh9JVKAclxydJGFqF6HoY0UXaxbsULZSh5bMj%2FNVbDgMct2JhOmImOjNHpRSJ1bdB3g4JWkrnvovR0Eqx00XGSBZcRHIDe1igvpNb2SkpczufLJ7KWi9eaRs1dHOa%2Be%2FdVTdKrmsDSgGdCBKBdjxEzWR49y%2FxFJKJQkISLLjcy%2FuK6Nyq6YcqD1WQCtQVdnXq2JezVPZ0PYsSAi5t96dyL5yqS1jF1whxxpGmszqMUvyr4lwZ6%2B4QsWaHLuDVaxdJVc6GVx2n9Bc1KiD3jIJBK9%2Ff5DxF9mWCqC6Im%2BoRxB6Jj%2BOU18Dx8D3L7v0lzb2L5bwi7qsN44duIHlVnjj5AirCgCZtqsTkukLTdGtIGyQs1o7jHKt1pBIRpd0%2FYpysUTvqm6%2B7Agv3Q1D750yzr4IJXMYKIsW48m1EYXa9pAvUMcD8YZsOvPA0lbqDOQBQp2vQRFQIRiA2ItlI9KMZ8P1WrRi7FEIVVuFXrwcsPkk23xZcA5T7cqzI6M9EZmRkEdXVOxS1RcFduDBrettsXJiZudzxYTvIZavG4IJTr2Kunq3zsyNpBBmbpoAh8ceXBQwpOGKygY6pgHlNkFMeaLdmzR6mjZduOSGWJUySZm3GBHvRNJcsekHP%2B4VVuvHgIylUHaCafMM04opE3DdRjAn0%2Fq3OaLR2um8Qy%2BzRtz9aBnGOubtj2mTM9zJ6bLemPWUROBnnYTWj%2F9%2BEV8Co%2BW6JvA7kijAdgCqYulJB9mmC%2FJM9kYER80EE8JrM6f8j9kG5cuaM9ladKZ4k0hLkx0si8vhcRpPCxZhi9krNZrv&X-Amz-Signature=715a5a8679152e138f54500f77cec98d91626c54b10e310ca3187853f8f478ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

