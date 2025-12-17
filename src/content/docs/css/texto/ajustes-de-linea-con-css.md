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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOLLSJCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBkW6R%2F9KoxLF%2FayPZuzJ1Os7rDFFj8ygosHZM00JXjAiBc%2BNQC8G%2FF2QInyQsPg0N14QU4Hofu%2F5ttKr7Nt%2B%2B%2B3Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMOrsFjAl8tWpCXIyeKtwDbiHNo3N4c3XpYwIFbRvoKS2ZBJp42UIGzhyR3Ml1tnVDmUzF4Zeb%2BTX1KW8P82V7updgSar%2FPlnQ356TYxq2OTnq8G073%2FwFizRERW4hROVQYhNW0P2C5a1rfjTdka4kPu6Mwy1ZijcQtKapYyuaw8RtgSNSw9VraHJJbCgoYnctyvEI9nqHmVOGwXTK2mkUpjieGAXNF6lenpACLLVPFNGdywvcG%2Bo6bZrlobwow9sR4DXINDOWJrRIT3sN6eCIexeXZdqlAyUL%2B7UEphUPfbm9sWy%2FWDYutbeeYNmy%2BrtfofbW%2BV1qfCC3OdooXlQDklNV1GfS7L6lEW%2F3DAsnFRCxhu0R4AZx455JEEXxpzqIXqlh%2Byspfj3H%2FUchUrXR%2B%2BT0xGWm8O%2BHFxE1ZVTHftfdlV39x%2FFge5GSdr%2Flq1paeXz3fXxIbctWhyjOYK9UueaUE8kKHKz4w%2FGJCKVqyimfk%2BkWIl4VF2WSpy1CcLJXACJyOzXqYG3SlV7pKqTmJQm7dnH9o0oDmpYrG5QEI8HH%2BUdcbSKF85MydEyg90bjfBBVoftSup6boRqbbJG%2B7AMTTpZ16MZxdzVJf8mfjGu7%2FN9j7CHlOXzMZSaz4o%2FylmKfZJMVjexz4Hkw0%2BGKygY6pgHzgGSDpgJd%2Fhu3HhPr%2FaN5I0iE9BNfpgfzqn%2FFHddW%2B%2Ft9j%2FxfT6r4ulrzw6TOlMiKzt6g2KwmJrl4hlr0vcP0jQ18miK6n%2BB9cTT9XRVh%2FbCSKwX5Le5LtfxTmxQZBzORxm0muQ36vIi2CE%2BNrQCG8V3Mf5Eh6NnngveK0j5b9n0jzlFcty2tQwjQ5q3fcUPmzzEHKGhHLhhh0d1r70KVTE2mWzfl&X-Amz-Signature=5212b1bc648c6cfc98169663b5fb549284e0d746498cefcea1c6d4a1db2036c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOLLSJCL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBkW6R%2F9KoxLF%2FayPZuzJ1Os7rDFFj8ygosHZM00JXjAiBc%2BNQC8G%2FF2QInyQsPg0N14QU4Hofu%2F5ttKr7Nt%2B%2B%2B3Sr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMOrsFjAl8tWpCXIyeKtwDbiHNo3N4c3XpYwIFbRvoKS2ZBJp42UIGzhyR3Ml1tnVDmUzF4Zeb%2BTX1KW8P82V7updgSar%2FPlnQ356TYxq2OTnq8G073%2FwFizRERW4hROVQYhNW0P2C5a1rfjTdka4kPu6Mwy1ZijcQtKapYyuaw8RtgSNSw9VraHJJbCgoYnctyvEI9nqHmVOGwXTK2mkUpjieGAXNF6lenpACLLVPFNGdywvcG%2Bo6bZrlobwow9sR4DXINDOWJrRIT3sN6eCIexeXZdqlAyUL%2B7UEphUPfbm9sWy%2FWDYutbeeYNmy%2BrtfofbW%2BV1qfCC3OdooXlQDklNV1GfS7L6lEW%2F3DAsnFRCxhu0R4AZx455JEEXxpzqIXqlh%2Byspfj3H%2FUchUrXR%2B%2BT0xGWm8O%2BHFxE1ZVTHftfdlV39x%2FFge5GSdr%2Flq1paeXz3fXxIbctWhyjOYK9UueaUE8kKHKz4w%2FGJCKVqyimfk%2BkWIl4VF2WSpy1CcLJXACJyOzXqYG3SlV7pKqTmJQm7dnH9o0oDmpYrG5QEI8HH%2BUdcbSKF85MydEyg90bjfBBVoftSup6boRqbbJG%2B7AMTTpZ16MZxdzVJf8mfjGu7%2FN9j7CHlOXzMZSaz4o%2FylmKfZJMVjexz4Hkw0%2BGKygY6pgHzgGSDpgJd%2Fhu3HhPr%2FaN5I0iE9BNfpgfzqn%2FFHddW%2B%2Ft9j%2FxfT6r4ulrzw6TOlMiKzt6g2KwmJrl4hlr0vcP0jQ18miK6n%2BB9cTT9XRVh%2FbCSKwX5Le5LtfxTmxQZBzORxm0muQ36vIi2CE%2BNrQCG8V3Mf5Eh6NnngveK0j5b9n0jzlFcty2tQwjQ5q3fcUPmzzEHKGhHLhhh0d1r70KVTE2mWzfl&X-Amz-Signature=3a2bc5031dc89067f2ce924107022406db658963fe7de0fa73ff1bb1fbda73a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

