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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVVFGCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUfikrwvgcA5wwIvdi7zyi3zJ5q2TtLrC4ygdthVvXiAiEA5XBMbRw7qb4HGrGj6vmop9mO7wiK6KJFV7zBJd8iIhsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDO%2BQX7b%2FZ8KeWBQKASrcA6k1U0unurYFSEQYlTXeBqtzfIEH2XlkQsYkKrz1jiXemFqUgxRA1aL9K1M3Jtp1n5byprDUsaYHPL6dzBOJuCNNdAJf9qFUnZLILkY7x9oxAWdqcB5AnBZRrsxXTUOQbhB5WwRXDtFYPoGd%2FrSU2wgwVgQ1clunuuH2UjhOwITm5lPfmVi8gSRK3f6J1e9vSNptuPS4%2BcvPr3MvpMPQo2JVAip723gqQ8wdC6c8TIge%2FOXStHYi1xjRz2CJfCrwrLd12Htu%2BAR9KRTvmtuewzWzIClLzNfIdI3Yt%2FIIP03gojK5sy7n23ar%2BK06KjnX54ABEIc28EHos19pLL6JoM1iVCOgRWycn1cf%2FFOudXVYN5ExutzY%2BpkE4HaobBY7UxqKA8jhMjvBJHAEpuxEFddkfTDFcU6Wkeija9ulXMNYwnyVxp6uFRBOB8VGd06hqepKPQP%2FD69P5xGl%2B9yhz9f8x9gAIrHtHI2ZRGniLtXY05IpPNDUZvcxiBleZ7NCwarX1nSoZ1qAWto9B38Vi3e3q6qDP08Ad%2FyZ5Ei7PDU3baWqROOm5oBTIs%2FjjM%2F%2FdigJBySeJuqjHkMoUDKfiOhkQ4EsBfLGI5mDSk0%2FZ6Maj59Lg5EIZt0Jua55MOTSicoGOqUB1ZN4m%2F71%2BrOgT7GXWmbpAs0I7Il9cNUQYIXBDsIpsMDZaWhu6bhSwGXeKUpFD0%2BrJtUeE6yiAEjbN3Yjd42j%2BA9fRxArUHyPKMIL19SDiF1aqiDt%2BEvh1PHytwDhWyRwzjsVUTjHTm1z%2FVzIekfxIBUyrnKDzOiLSqdqh2kDWSyKc8WhxTDa3eflzK4yeHe0GqrDB%2BCl1%2F8EG2j2Tv%2Fi%2FkpTUD7z&X-Amz-Signature=b5c20a21c44657277806d7ccbe6804a654d4e8ca3d7d5d17748815d859f9ac79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVVFGCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUfikrwvgcA5wwIvdi7zyi3zJ5q2TtLrC4ygdthVvXiAiEA5XBMbRw7qb4HGrGj6vmop9mO7wiK6KJFV7zBJd8iIhsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDO%2BQX7b%2FZ8KeWBQKASrcA6k1U0unurYFSEQYlTXeBqtzfIEH2XlkQsYkKrz1jiXemFqUgxRA1aL9K1M3Jtp1n5byprDUsaYHPL6dzBOJuCNNdAJf9qFUnZLILkY7x9oxAWdqcB5AnBZRrsxXTUOQbhB5WwRXDtFYPoGd%2FrSU2wgwVgQ1clunuuH2UjhOwITm5lPfmVi8gSRK3f6J1e9vSNptuPS4%2BcvPr3MvpMPQo2JVAip723gqQ8wdC6c8TIge%2FOXStHYi1xjRz2CJfCrwrLd12Htu%2BAR9KRTvmtuewzWzIClLzNfIdI3Yt%2FIIP03gojK5sy7n23ar%2BK06KjnX54ABEIc28EHos19pLL6JoM1iVCOgRWycn1cf%2FFOudXVYN5ExutzY%2BpkE4HaobBY7UxqKA8jhMjvBJHAEpuxEFddkfTDFcU6Wkeija9ulXMNYwnyVxp6uFRBOB8VGd06hqepKPQP%2FD69P5xGl%2B9yhz9f8x9gAIrHtHI2ZRGniLtXY05IpPNDUZvcxiBleZ7NCwarX1nSoZ1qAWto9B38Vi3e3q6qDP08Ad%2FyZ5Ei7PDU3baWqROOm5oBTIs%2FjjM%2F%2FdigJBySeJuqjHkMoUDKfiOhkQ4EsBfLGI5mDSk0%2FZ6Maj59Lg5EIZt0Jua55MOTSicoGOqUB1ZN4m%2F71%2BrOgT7GXWmbpAs0I7Il9cNUQYIXBDsIpsMDZaWhu6bhSwGXeKUpFD0%2BrJtUeE6yiAEjbN3Yjd42j%2BA9fRxArUHyPKMIL19SDiF1aqiDt%2BEvh1PHytwDhWyRwzjsVUTjHTm1z%2FVzIekfxIBUyrnKDzOiLSqdqh2kDWSyKc8WhxTDa3eflzK4yeHe0GqrDB%2BCl1%2F8EG2j2Tv%2Fi%2FkpTUD7z&X-Amz-Signature=c2b6454e0b6dd0db0ee366c7e2c4877e2800bb24f8e390ead67ddefbf8eea0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

