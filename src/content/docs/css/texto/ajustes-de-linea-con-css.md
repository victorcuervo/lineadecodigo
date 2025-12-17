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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEWLC4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGag2BK6qxH7N1cZChJGnLOaGK1BDwWN959pf8ujPQnGAiA9oHWRDEFRQHrnYRQBDoee4bhwcAODz%2FNj%2BkvKhzB2PyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAp8H3DHVSoP8uWnGKtwD%2BB5kW2Or%2BQfgNxgyLVfObnlDHQJaNFYDY2gETBSVddSoMb%2FZxi4B8vn%2F5jn4VPiNwYqlRreeMyXc8nTIRDCUtzngxoEPg%2F5GKTDsM9VG9ithjzwP0nJBrhZEJYwLZ%2B0ud12LGUsFKI%2FkY8o%2F8w0OTqwl1HIhSSEdCWkssP0YQfngeqyGkMIh1LsrU5wLBKRAXjN6d5%2Bui74dCdWpp0J%2B%2B3evRUElb14B4SA7lVP5tDUfIDHtuEpHEe7nvfl%2FIUpFxhh4XWPnDbQwmjGl8n%2FVojp%2FtPzkFA9Qa95nXnhSjq3NdaepreIjYYFQgA%2FvUbgiyscGlYoy%2FgH%2FUBM4Dc3ULQHHqRzlYax6Q7RKRIYFh6KSOCwnkSXs6OgvcjScSp6dfhTAX7zTjYxcdwzLjCio7AT8NyTZSVfNrjEoplL7k7cdg2CIwN8xhgncrqoWsM1p64twEKWxH56s3ZjhLowyqFRvlbIgfIe6ZO1C59BTxjjqmtdR4zixoU%2BfMuO7UANq9rA%2BOvgZq9%2BGA2RZFkeOViDrtDVlf0CG6vHdttgeiI7mr1mb%2Bh4bvNcDZTmdOf0%2BwnQVq4RciZ1WkP%2BnTjW1E3GgQGfKEvQKT6%2BDhQiEYK5VDEX1HfSmVXuuso8wqK6MygY6pgFFlQqRq5sJVRjcKyRgTHqVRnM5Szy5nferOKsUcfpd3vYhkX7zQXdFRPQp1hRscSJRqZDyfYDpcwB2R75wpIXA63s%2F0MkCs7ILLNNdbpxBMMhr88BokINsWqFt4TFWuNjST%2Fegj4I7RyS2EYuNaJQrJHlRoFlrvTctT9DhJbtHSuhf2y7rndhjJcRFRUPlJott8%2F6t1AkWqPq6KABz7lMOCAR8UUUf&X-Amz-Signature=56c994e8f90654eb28a05a297403ab32d89209b5e147cf7cbd2cbbb17e973629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEWLC4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGag2BK6qxH7N1cZChJGnLOaGK1BDwWN959pf8ujPQnGAiA9oHWRDEFRQHrnYRQBDoee4bhwcAODz%2FNj%2BkvKhzB2PyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAp8H3DHVSoP8uWnGKtwD%2BB5kW2Or%2BQfgNxgyLVfObnlDHQJaNFYDY2gETBSVddSoMb%2FZxi4B8vn%2F5jn4VPiNwYqlRreeMyXc8nTIRDCUtzngxoEPg%2F5GKTDsM9VG9ithjzwP0nJBrhZEJYwLZ%2B0ud12LGUsFKI%2FkY8o%2F8w0OTqwl1HIhSSEdCWkssP0YQfngeqyGkMIh1LsrU5wLBKRAXjN6d5%2Bui74dCdWpp0J%2B%2B3evRUElb14B4SA7lVP5tDUfIDHtuEpHEe7nvfl%2FIUpFxhh4XWPnDbQwmjGl8n%2FVojp%2FtPzkFA9Qa95nXnhSjq3NdaepreIjYYFQgA%2FvUbgiyscGlYoy%2FgH%2FUBM4Dc3ULQHHqRzlYax6Q7RKRIYFh6KSOCwnkSXs6OgvcjScSp6dfhTAX7zTjYxcdwzLjCio7AT8NyTZSVfNrjEoplL7k7cdg2CIwN8xhgncrqoWsM1p64twEKWxH56s3ZjhLowyqFRvlbIgfIe6ZO1C59BTxjjqmtdR4zixoU%2BfMuO7UANq9rA%2BOvgZq9%2BGA2RZFkeOViDrtDVlf0CG6vHdttgeiI7mr1mb%2Bh4bvNcDZTmdOf0%2BwnQVq4RciZ1WkP%2BnTjW1E3GgQGfKEvQKT6%2BDhQiEYK5VDEX1HfSmVXuuso8wqK6MygY6pgFFlQqRq5sJVRjcKyRgTHqVRnM5Szy5nferOKsUcfpd3vYhkX7zQXdFRPQp1hRscSJRqZDyfYDpcwB2R75wpIXA63s%2F0MkCs7ILLNNdbpxBMMhr88BokINsWqFt4TFWuNjST%2Fegj4I7RyS2EYuNaJQrJHlRoFlrvTctT9DhJbtHSuhf2y7rndhjJcRFRUPlJott8%2F6t1AkWqPq6KABz7lMOCAR8UUUf&X-Amz-Signature=2e4861984ed87ed30e49f2c3b706acb37d34e60af3a729f67b3a5f9869eacc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

