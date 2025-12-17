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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2YY5FZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsIf8OFLleiqxF4rbcihzeWQiMwGEx%2BXSZjTUNO5UXjAiAb%2BeNo0Ue9ujTVBvYD%2Fu%2B4vIwY7axTMiRlvi36%2FewMiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7oX73H4%2Fu8oquRh9KtwD7KGnEtdt8ME%2FelCehXNOxJGo1JiR%2BQR5013zR33HcSXWw64omeffyltTKJq4BbhJsMYymWfalepZb%2FZfrsRgYPba59P89pryWmp50HrpEH7U3mBqRfetGW4l5mC6kYsbvsjC%2BevXz8XMWMVjavCy6oqZV3CPvDvOTHX546tlP5tXQWem0Pbwk96OEgKWeEcGcvxnOyfDFACE%2By75HxuThzQwsIivHZJb7tSKcgja8Z1JZLvvQFDSGavg%2FC2wygv1FA8%2FTEeYNcUW3aa4uhF9lCwFdNYts9rYm9C1S6BZ7lgtlBuexIF5Wt3LlWdRSDVz0ooYLf%2FxleGs7t2CFh4xHV30mW0HVI8HEznOm%2B%2B5%2FQ8sfneNhQueIKvxPW12e7d1jGRO5WLblPi3QWcNPR%2BEzd2RiDso9I%2F5klBG5ly1V5WlhK097zpfZiGwaThKjLCbsBHpM2Gp7OIXXAs2JWIaKBQcTZn%2Bp0WDUsDg%2B5GXj5OLc36Zv9CKGQ1dr%2B9mprx2C3Ry07rZoJMAGiy5ylYBHt3zR9mHzNDp7U8M9vdReyW82GmPQKHf23GlnxNk7Q8OP0m0KqLPkjzTW1EJ0legH7IZPf%2FYlSoOfieK%2Bp80BXoT9o5%2BHNFGzsNaI1Ew5peIygY6pgGL0xRi9n5dYHlx27PYvWLGmcCNB2PLVCfbQP3alPOnVnmVLqiLVMoZ%2FFtQ9LNd0LTNFUr%2FnasD0JLMIMYFKl2C0J4HYrq1xylgvxhgawfvCX%2BJpJyrjiBgKG3QU7Iuv7JdyyZKJ50UWem2kwEwH93Ry4QwKlwwAL0OlAGugU85py%2BeqjagO%2BNs%2FpUCEMVV%2BjYf2hstmqHsnxIQ3A0HmHGUVz9CFaVq&X-Amz-Signature=34fa067379916f46a9e4ee1c1fbb3b67b92f23ea6c4bf99db2ce018d284598cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2YY5FZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsIf8OFLleiqxF4rbcihzeWQiMwGEx%2BXSZjTUNO5UXjAiAb%2BeNo0Ue9ujTVBvYD%2Fu%2B4vIwY7axTMiRlvi36%2FewMiCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM7oX73H4%2Fu8oquRh9KtwD7KGnEtdt8ME%2FelCehXNOxJGo1JiR%2BQR5013zR33HcSXWw64omeffyltTKJq4BbhJsMYymWfalepZb%2FZfrsRgYPba59P89pryWmp50HrpEH7U3mBqRfetGW4l5mC6kYsbvsjC%2BevXz8XMWMVjavCy6oqZV3CPvDvOTHX546tlP5tXQWem0Pbwk96OEgKWeEcGcvxnOyfDFACE%2By75HxuThzQwsIivHZJb7tSKcgja8Z1JZLvvQFDSGavg%2FC2wygv1FA8%2FTEeYNcUW3aa4uhF9lCwFdNYts9rYm9C1S6BZ7lgtlBuexIF5Wt3LlWdRSDVz0ooYLf%2FxleGs7t2CFh4xHV30mW0HVI8HEznOm%2B%2B5%2FQ8sfneNhQueIKvxPW12e7d1jGRO5WLblPi3QWcNPR%2BEzd2RiDso9I%2F5klBG5ly1V5WlhK097zpfZiGwaThKjLCbsBHpM2Gp7OIXXAs2JWIaKBQcTZn%2Bp0WDUsDg%2B5GXj5OLc36Zv9CKGQ1dr%2B9mprx2C3Ry07rZoJMAGiy5ylYBHt3zR9mHzNDp7U8M9vdReyW82GmPQKHf23GlnxNk7Q8OP0m0KqLPkjzTW1EJ0legH7IZPf%2FYlSoOfieK%2Bp80BXoT9o5%2BHNFGzsNaI1Ew5peIygY6pgGL0xRi9n5dYHlx27PYvWLGmcCNB2PLVCfbQP3alPOnVnmVLqiLVMoZ%2FFtQ9LNd0LTNFUr%2FnasD0JLMIMYFKl2C0J4HYrq1xylgvxhgawfvCX%2BJpJyrjiBgKG3QU7Iuv7JdyyZKJ50UWem2kwEwH93Ry4QwKlwwAL0OlAGugU85py%2BeqjagO%2BNs%2FpUCEMVV%2BjYf2hstmqHsnxIQ3A0HmHGUVz9CFaVq&X-Amz-Signature=7d2f42e1a011c6e01d10a8db241a6ff54188b7cab0699b1c4976e9a1378e3f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

