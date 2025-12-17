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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQO4V6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEzAaNjvKM9VBSHIF8m8GhV3CJU7yjqoVq6VIhBe4dOAiApOix2LtlLNGTi9klLHrQIOXdZKqsACepIAWX2mDBZMCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2FXBhpKHGc6e5YqtKtwDnVh0710BMFciGjKBolv3a7chc75yx9wOwTMRrkJls92RJ2Kj8v03Q5Qa5WgWxxSi1WaTTI9TEaU%2BORVJlT8pjunPr%2BHHsJsLjeV1VNfZUkLfCHJvoYIGAUfd4Tw6V%2B2shvDnYSCAujxBklcqlNxPq1I2XjWwgEx8EDd%2F1BXxLF4u%2BzNbERv293j9CLuyM4X7z52%2BtjlvkDdHMhPYFMTk8dgGfTJP4QaoGfPT%2FxNUtp5peoe5B50PAR3TQ7Qmt2BLcymmR3ymRUXo0Q5m8IIblF%2B0pcKiDOyU3RXAI3MAtcnFHVocUr3tWqnYPq47F%2FPi8oJDZLU2rKX6AtUf%2FIEAD81ljHRH7vWdamUFmClrvWfe%2FAzfnfiMXXJzvfVAwi5vCKVvkK9w%2Bt9zESJ4oC6v462cA5dreAhmXfeVJiv9kRV5KxYbSLU4%2B64jUgsTx6BuMitICdk7RIJl%2B%2FVwZ08JBKh%2Bmv78%2BFg5BlPHMYH%2FRii15XBlPkQXz1t6%2BNoxAL1fe9DES9reW5M24onk94%2BMbxNOxVHleJV9JhscOo32fRTthZKt8O9XiQ6HqEw%2FeEUX%2FBDJ5WleJ0C1%2BoLBy0jq88aEVPQTxNYwml9SKdpxGWxVsH4lzGlaXEWEoJQwnq6MygY6pgHZJmjWsG8yLKvn6pPbdr7wXquWXjweKExFQzRUPfEuZ4bTcK2Q02Q2ssUHYiC2sbHz%2BR9bGjCTyi0ZlQXdCSYaeAWJ8dmmoE0tNHgBEdFOX5wk%2Fdi64ywXtfHtG77Fjbr5lObwBI0jzyjYtDh3dyqLm1SK0pGiMxiVEHiS1nEGSUd85VAD79J5zw%2FrzwV%2FbEWA91rCtO%2Ban7I4hLCePwpK0%2BNevsLQ&X-Amz-Signature=402e8123c5544021964734e8cfb96b04c9970f08a54968737504fcb076454860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQO4V6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEzAaNjvKM9VBSHIF8m8GhV3CJU7yjqoVq6VIhBe4dOAiApOix2LtlLNGTi9klLHrQIOXdZKqsACepIAWX2mDBZMCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2FXBhpKHGc6e5YqtKtwDnVh0710BMFciGjKBolv3a7chc75yx9wOwTMRrkJls92RJ2Kj8v03Q5Qa5WgWxxSi1WaTTI9TEaU%2BORVJlT8pjunPr%2BHHsJsLjeV1VNfZUkLfCHJvoYIGAUfd4Tw6V%2B2shvDnYSCAujxBklcqlNxPq1I2XjWwgEx8EDd%2F1BXxLF4u%2BzNbERv293j9CLuyM4X7z52%2BtjlvkDdHMhPYFMTk8dgGfTJP4QaoGfPT%2FxNUtp5peoe5B50PAR3TQ7Qmt2BLcymmR3ymRUXo0Q5m8IIblF%2B0pcKiDOyU3RXAI3MAtcnFHVocUr3tWqnYPq47F%2FPi8oJDZLU2rKX6AtUf%2FIEAD81ljHRH7vWdamUFmClrvWfe%2FAzfnfiMXXJzvfVAwi5vCKVvkK9w%2Bt9zESJ4oC6v462cA5dreAhmXfeVJiv9kRV5KxYbSLU4%2B64jUgsTx6BuMitICdk7RIJl%2B%2FVwZ08JBKh%2Bmv78%2BFg5BlPHMYH%2FRii15XBlPkQXz1t6%2BNoxAL1fe9DES9reW5M24onk94%2BMbxNOxVHleJV9JhscOo32fRTthZKt8O9XiQ6HqEw%2FeEUX%2FBDJ5WleJ0C1%2BoLBy0jq88aEVPQTxNYwml9SKdpxGWxVsH4lzGlaXEWEoJQwnq6MygY6pgHZJmjWsG8yLKvn6pPbdr7wXquWXjweKExFQzRUPfEuZ4bTcK2Q02Q2ssUHYiC2sbHz%2BR9bGjCTyi0ZlQXdCSYaeAWJ8dmmoE0tNHgBEdFOX5wk%2Fdi64ywXtfHtG77Fjbr5lObwBI0jzyjYtDh3dyqLm1SK0pGiMxiVEHiS1nEGSUd85VAD79J5zw%2FrzwV%2FbEWA91rCtO%2Ban7I4hLCePwpK0%2BNevsLQ&X-Amz-Signature=eb20489433b3b9a0c54bf968b1df11c6ba9821cda3dbc5efb86c92c70c504a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

