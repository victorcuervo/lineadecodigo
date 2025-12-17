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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PT2V3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IKUermIboFsUBWR1iCGs441I%2BanO%2BEZkr8YtXGGktAIhAKB3e3VIWvSAeX8i3H1BTh3BKkKmm1yNx0z439CJ%2BwnrKv8DCHgQABoMNjM3NDIzMTgzODA1IgyFmaFiI9rWf2t9RS0q3APYxupoq5EBg0UTxznXIqoaBnPLnivpp1NOu2Bsgges163cxJQp35eTjUIn8Xc2v4vfFpsDMgd12rgPeGsJrZebOlITmjJycuX3%2BjCxwBIMogvCRWdokE3i1ekVON3DchnJv3IZsihnhqNgxzILY3h09jP6oOYTXPPlvJYfhxIm9wH1tNH35IErPslBXPz9p6MhLmPmVIUHyIrRFUiZgwyjFxPTiKtP%2BvwORyiHPppTAFZ56KffHcT9y3ifEEQmzmo8LaHbPvyMM%2BSqoM38er5fp5wyRtM%2B7j%2BksGpcTJL%2FjKpY%2BFdcTD1JaLT3o7HH70%2BRMaXHcpn4rTt%2B34GJdrxJS4Ua1Kvfsx7aRH%2F50E67sJDTsY66vmd9d3f5MiuLWfxG%2By%2FJgbudmfeptwwwgYQXY%2BwZvfir%2FSgEhPWm4mz0b9dUgsN9l%2BxQn3BTYb%2Fb4XCht07aJ6D92M3crz%2FZlokPx5bPCKpaBgUP8rHq3waNDUG6ja29lM7is08qOz1n9C8UD4eSZGnggNy%2B2JHJSHIGygDp6L3ifJ7QbCgE4D%2B0fESZfENn%2Fvhfxq3vRTV6ky9DI8KXHJCZtUJqJQYm68NKfrRlAieb1zScSSaMozYNJqf6CMm7NA7cIZ8JRTDlnYnKBjqkAZqfFeHAYtvwgbuQPbZ40xIQ5z3DL4NI0LPSTsQhrkY5kZAB%2FNKWR%2BpludKX6PsXnLNL1Fa3bEHY6MPCzTT%2FIhETW3WsHurquDY%2Bm9yPiA2RnmC3xvgwJ6x%2BIzS4a6ZDOcT5tfkRap4lodWz47SZunMl9KLuvVnMOVQ282CFLbGallxBXJ8ldhLygwgJPkxd5us9AeuwQxLLky4STEn9paeknI41&X-Amz-Signature=160a04bd9c474d80a5595169a667055b74a8a3155a37cab5bda8b6d18cc346dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PT2V3H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IKUermIboFsUBWR1iCGs441I%2BanO%2BEZkr8YtXGGktAIhAKB3e3VIWvSAeX8i3H1BTh3BKkKmm1yNx0z439CJ%2BwnrKv8DCHgQABoMNjM3NDIzMTgzODA1IgyFmaFiI9rWf2t9RS0q3APYxupoq5EBg0UTxznXIqoaBnPLnivpp1NOu2Bsgges163cxJQp35eTjUIn8Xc2v4vfFpsDMgd12rgPeGsJrZebOlITmjJycuX3%2BjCxwBIMogvCRWdokE3i1ekVON3DchnJv3IZsihnhqNgxzILY3h09jP6oOYTXPPlvJYfhxIm9wH1tNH35IErPslBXPz9p6MhLmPmVIUHyIrRFUiZgwyjFxPTiKtP%2BvwORyiHPppTAFZ56KffHcT9y3ifEEQmzmo8LaHbPvyMM%2BSqoM38er5fp5wyRtM%2B7j%2BksGpcTJL%2FjKpY%2BFdcTD1JaLT3o7HH70%2BRMaXHcpn4rTt%2B34GJdrxJS4Ua1Kvfsx7aRH%2F50E67sJDTsY66vmd9d3f5MiuLWfxG%2By%2FJgbudmfeptwwwgYQXY%2BwZvfir%2FSgEhPWm4mz0b9dUgsN9l%2BxQn3BTYb%2Fb4XCht07aJ6D92M3crz%2FZlokPx5bPCKpaBgUP8rHq3waNDUG6ja29lM7is08qOz1n9C8UD4eSZGnggNy%2B2JHJSHIGygDp6L3ifJ7QbCgE4D%2B0fESZfENn%2Fvhfxq3vRTV6ky9DI8KXHJCZtUJqJQYm68NKfrRlAieb1zScSSaMozYNJqf6CMm7NA7cIZ8JRTDlnYnKBjqkAZqfFeHAYtvwgbuQPbZ40xIQ5z3DL4NI0LPSTsQhrkY5kZAB%2FNKWR%2BpludKX6PsXnLNL1Fa3bEHY6MPCzTT%2FIhETW3WsHurquDY%2Bm9yPiA2RnmC3xvgwJ6x%2BIzS4a6ZDOcT5tfkRap4lodWz47SZunMl9KLuvVnMOVQ282CFLbGallxBXJ8ldhLygwgJPkxd5us9AeuwQxLLky4STEn9paeknI41&X-Amz-Signature=84b214deb136813ab9dc83a49ed717cc4b20b8bcc50571dc07a94d61106c4c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

