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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKQYZRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVRwVN00p%2BIlhNfjapyH1U9UJxrfNLWIIkpejfpntYYgIhANC0kMy%2FIXCO1u5pnMdc14anb9ua9R0Ni%2BW8pPJyTCvMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIWY0dRIxjXjuM%2B9sq3AMcp3y%2BZCIQF99F8DyKinOs0ObcG2bXXi3JQkY3Fn%2FzZ66Z6fGdY93cf8q9FUsMS3JZnhJkFcoIoWUgAcYI2dAPVDATxZZxqOlJvgy9EAJOcKtOl6ngPon5fXyUuei1xZwx211zl2kZaU84pbiVpo0UTeVU%2F6nrYoSk7Ph%2BdowDHhglMyn4MOvqxHwJXYc6L5OsB0xHw%2F6D05k5weErR8625OyPnj%2BqYabe%2BdB2LqmfjY2erRIHk5fcdy6YfKtUfyUx91RmnVIL3qfeOVGW%2BpMcHl4EsVxxk3DgE6yy1VTKYHjQx7BSqWTZB3US%2B5vPOO3vOrkNZNLsOw%2FKc2CfGXoiZK%2F1kGh8NaSp1O16UW74mLYF9G3Eq1zftXFMDpfh8ImRF8W6T9AAclZlAUpyQFBK90op1OCx1ux7j96krV83b8dkh%2FxPkJkcXHmOV%2FKs3ruvVi1UHae9Euqq44HStQwHyDKXF4%2FYkCt76LfrirAwmFu1p82LmqVd%2FezDy8lkRG8XN5dHakuY1HNqfalGesH8CNXkEYWU2AKRYC4TzNAHVTgyLe3rsh44U1UnBSKbI7j6OwV7RQf13fDevQNw%2BuRh9Y1%2Bv4qVub9ASnid9qPDnZ%2BtVaZu6E3gCIyoqTCon4vKBjqkAT7OwYCwV0K4fOs28LUX1WWt3JyyrxWe%2FHW%2F%2FfFGF0LNcSBXOTwhV2WjybIcFWZOdAJgqvwB6LxOCzzPn74MZb%2FsRpV52YEyBo9Ab1lg5a2rOZro6GdzE7LUuMjU%2FrXUHXLb2pfoXOg5O6WVeIyTq3IxSDbDFB23UUjIxIyCPLXUTH5ErZgMuaTf%2Fvh8SD5rxiCn%2FRkr%2BRehUSfMo8ertDMT0VaN&X-Amz-Signature=309302de7b82dab871eb08492f5a56ebb3bd959a28fd0101ed8c6640f5d5ec0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKQYZRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVRwVN00p%2BIlhNfjapyH1U9UJxrfNLWIIkpejfpntYYgIhANC0kMy%2FIXCO1u5pnMdc14anb9ua9R0Ni%2BW8pPJyTCvMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIWY0dRIxjXjuM%2B9sq3AMcp3y%2BZCIQF99F8DyKinOs0ObcG2bXXi3JQkY3Fn%2FzZ66Z6fGdY93cf8q9FUsMS3JZnhJkFcoIoWUgAcYI2dAPVDATxZZxqOlJvgy9EAJOcKtOl6ngPon5fXyUuei1xZwx211zl2kZaU84pbiVpo0UTeVU%2F6nrYoSk7Ph%2BdowDHhglMyn4MOvqxHwJXYc6L5OsB0xHw%2F6D05k5weErR8625OyPnj%2BqYabe%2BdB2LqmfjY2erRIHk5fcdy6YfKtUfyUx91RmnVIL3qfeOVGW%2BpMcHl4EsVxxk3DgE6yy1VTKYHjQx7BSqWTZB3US%2B5vPOO3vOrkNZNLsOw%2FKc2CfGXoiZK%2F1kGh8NaSp1O16UW74mLYF9G3Eq1zftXFMDpfh8ImRF8W6T9AAclZlAUpyQFBK90op1OCx1ux7j96krV83b8dkh%2FxPkJkcXHmOV%2FKs3ruvVi1UHae9Euqq44HStQwHyDKXF4%2FYkCt76LfrirAwmFu1p82LmqVd%2FezDy8lkRG8XN5dHakuY1HNqfalGesH8CNXkEYWU2AKRYC4TzNAHVTgyLe3rsh44U1UnBSKbI7j6OwV7RQf13fDevQNw%2BuRh9Y1%2Bv4qVub9ASnid9qPDnZ%2BtVaZu6E3gCIyoqTCon4vKBjqkAT7OwYCwV0K4fOs28LUX1WWt3JyyrxWe%2FHW%2F%2FfFGF0LNcSBXOTwhV2WjybIcFWZOdAJgqvwB6LxOCzzPn74MZb%2FsRpV52YEyBo9Ab1lg5a2rOZro6GdzE7LUuMjU%2FrXUHXLb2pfoXOg5O6WVeIyTq3IxSDbDFB23UUjIxIyCPLXUTH5ErZgMuaTf%2Fvh8SD5rxiCn%2FRkr%2BRehUSfMo8ertDMT0VaN&X-Amz-Signature=738f3178b6616dbfd7c634baf57263c406a86d3dd92a79991295668046dce577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

