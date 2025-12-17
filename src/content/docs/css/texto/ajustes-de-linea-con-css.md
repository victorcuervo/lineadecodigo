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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSW3CCJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BAW%2FMAp3xxIZlUYPleduqiHeBgKD12tpYUamVJuUALAiEAmimXiulcEiNZgiYOQ1PjXmDdWDhQtKWeEvsfa431JhQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPQ23kQmppbOOrCgxyrcAxH648%2FeRc2y5BXmwpjXYeQ7bhMhtit7qu7BjxJzB9CFt9VRLRZwnyyRW%2B7Tyv9VBz%2BIuaGlguDXiV6hSweTiiZrHSZhhGfL%2FOsrcwGYccvcP%2BKSsiAYTJlHY6qUH670eJZNEADbHHvp7ijScsB7RPh6%2BnVwqxx7HWpKOux378eus7yvqFfvky44SQJMaicSfVKizfixAaFfRysaJtNDuUcHuodQ9USKUJ%2Fe3FmXzQQG8435Kjj24nlSpZpwhZDUGyTeXEzKXYUiMKQuv3xC71BXxubjlpCxK4tOwk9d87U1DOLPAmIKJtkyfVNOQGqsb6D9RA6jzFzcBsEIvIYfb43AhR7pSfYRg8vJeWiMqg5XhReaEs8zhnZ%2Fut9rz%2BfjKBVNzG3JBYvlZYRd0GDzeKVlW5uEjtG7caZA2Hc1ibj%2Fnhx7ZE%2FUEi858tcf7jceSLsBaJHFS9CYTEQTsNLeZcsMwmsQYwohGv6mF%2BcHT6oZPDfnuDaVX56Imd6IFwcQt0b0wQhQ97GSHQzya48vNc6IwlQzSfxjrUJpfBmM785n6ZIKZ7nGqEPPb2%2FFQ7pCzAsEdDYbbedpXvHLS9u3qBXlMa8HEUYmwzED%2BbYbNwCcFoTC%2BWwK%2FYoQF16%2FMMP7h8oGOqUBqlft2U1grnUZoCehzvUcirnrYXl30wxnazoozJtkZmor4M1kS2rFzGDuCVQHFtGnCv6ARdh%2FO%2BTW7Lp4XcKT4BupmfiZBurPHRHb2pYQEloskfzXuBbA0kUhd%2B8WodniO3VqiMPVV7lyTCtprs%2BSflkwvtGw3iaqecjNzdR1rgbrjyXLjy2E9VcnhY9mJZgdim79YjTIU6kefpbySvrJSZDsoDnM&X-Amz-Signature=53895077f67a21c82d0954bd8ff48c7bebffa6f4e1ec11899a8fe9a50080ee31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSW3CCJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BAW%2FMAp3xxIZlUYPleduqiHeBgKD12tpYUamVJuUALAiEAmimXiulcEiNZgiYOQ1PjXmDdWDhQtKWeEvsfa431JhQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPQ23kQmppbOOrCgxyrcAxH648%2FeRc2y5BXmwpjXYeQ7bhMhtit7qu7BjxJzB9CFt9VRLRZwnyyRW%2B7Tyv9VBz%2BIuaGlguDXiV6hSweTiiZrHSZhhGfL%2FOsrcwGYccvcP%2BKSsiAYTJlHY6qUH670eJZNEADbHHvp7ijScsB7RPh6%2BnVwqxx7HWpKOux378eus7yvqFfvky44SQJMaicSfVKizfixAaFfRysaJtNDuUcHuodQ9USKUJ%2Fe3FmXzQQG8435Kjj24nlSpZpwhZDUGyTeXEzKXYUiMKQuv3xC71BXxubjlpCxK4tOwk9d87U1DOLPAmIKJtkyfVNOQGqsb6D9RA6jzFzcBsEIvIYfb43AhR7pSfYRg8vJeWiMqg5XhReaEs8zhnZ%2Fut9rz%2BfjKBVNzG3JBYvlZYRd0GDzeKVlW5uEjtG7caZA2Hc1ibj%2Fnhx7ZE%2FUEi858tcf7jceSLsBaJHFS9CYTEQTsNLeZcsMwmsQYwohGv6mF%2BcHT6oZPDfnuDaVX56Imd6IFwcQt0b0wQhQ97GSHQzya48vNc6IwlQzSfxjrUJpfBmM785n6ZIKZ7nGqEPPb2%2FFQ7pCzAsEdDYbbedpXvHLS9u3qBXlMa8HEUYmwzED%2BbYbNwCcFoTC%2BWwK%2FYoQF16%2FMMP7h8oGOqUBqlft2U1grnUZoCehzvUcirnrYXl30wxnazoozJtkZmor4M1kS2rFzGDuCVQHFtGnCv6ARdh%2FO%2BTW7Lp4XcKT4BupmfiZBurPHRHb2pYQEloskfzXuBbA0kUhd%2B8WodniO3VqiMPVV7lyTCtprs%2BSflkwvtGw3iaqecjNzdR1rgbrjyXLjy2E9VcnhY9mJZgdim79YjTIU6kefpbySvrJSZDsoDnM&X-Amz-Signature=0686312cbd368ff736e998c7a8f6d67a91dec42bb79aecb5d131120299127f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

