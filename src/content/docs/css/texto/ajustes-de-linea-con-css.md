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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCDMJUG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdcAVwuJF6P64%2FuOt%2FE9l5kkyhjv9%2B9o%2BH2HUA1HyFgIgHAYCQFs2zWQl3TomVnUYKMqy4bfjWO4idG%2Flepp%2FHLMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPFT4C6SfQ%2Ffwq0ohircAx9R9dfiSy3twleLl6kH9i7qyQkaXjmwLeIkwgz80Mr8U3j8StcChcVTazZDXBmxN1E7oXRXtKFYm1h3vj3vLBTvxMT5lUitFuk1aq0AQkO2S4z97rJ5saXZSzvcB72Cq9LfMV7XdWg1%2BzjVc93hhZMHezixV3JrGbXqe3jsuu4mDJWIvIvip72WTavZWUEPsoE7XhTZlSYU1AqfdsP1%2FwlvB%2Fl9iPyUPY7nH%2F7WpTbG401fKdgSEMw8aFyDloONe1KVW5Ulm7gpkC4iDo1VEobsTMJkN0x4zG%2B6kZsXIgY1Phu8ASes3G35WXFMYYd7WPInadPHdQnii7AZNTN6NL8H0qKQmkZYjGjcRZeNsFBpPP2hj546F6gcUI9ZavHSgvEKSEKNtL177OokpAwlF9KwfBRd%2FvjDOTgxyfnWggOyHG6s6ynLQUqTV2JVyHsNN%2Br1Tb6UvvFGFz9g6C5MwS5xV%2BETjdBNCn8O9CG69sNzpD78SW5xRhKnj9YieXqzBysYZT4Ct%2BjaacJbi2Y%2Fw%2Fdy1ccX0s%2FG65pu4Dv2NwFUoFxbdRNL4EhrVmsMPWWOev%2FngH7kyWIp3utksnUvpgd19vK8LZnuwUYHFzgNrcJZ5VVlV6nwd3%2F9aLRoMMDwicoGOqUBglJFedlQRC%2BiEmgP3jlps1tyZVhjXningzLq7M0ennry%2FHiwFvaRKeNU7tJI3PGAHvDwL1oj%2F5nnf8gXKZbRr9oUIdPzS6rl5rAAxhfzcQMX6VQ42X6JsYCFuKQUorXSe020Q1XBt9Fs4rdAesIwykVgAlFgVFFUHlCd%2F42QLbInwECAvrBKe3wJLLhfJGqTiCmw72Pyds01Dp47oRYxvVN7do5h&X-Amz-Signature=98012f45a225d4a3d03a7835b6d6f4ec96d64d23017e51feee6549da8cbf5e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCDMJUG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkdcAVwuJF6P64%2FuOt%2FE9l5kkyhjv9%2B9o%2BH2HUA1HyFgIgHAYCQFs2zWQl3TomVnUYKMqy4bfjWO4idG%2Flepp%2FHLMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPFT4C6SfQ%2Ffwq0ohircAx9R9dfiSy3twleLl6kH9i7qyQkaXjmwLeIkwgz80Mr8U3j8StcChcVTazZDXBmxN1E7oXRXtKFYm1h3vj3vLBTvxMT5lUitFuk1aq0AQkO2S4z97rJ5saXZSzvcB72Cq9LfMV7XdWg1%2BzjVc93hhZMHezixV3JrGbXqe3jsuu4mDJWIvIvip72WTavZWUEPsoE7XhTZlSYU1AqfdsP1%2FwlvB%2Fl9iPyUPY7nH%2F7WpTbG401fKdgSEMw8aFyDloONe1KVW5Ulm7gpkC4iDo1VEobsTMJkN0x4zG%2B6kZsXIgY1Phu8ASes3G35WXFMYYd7WPInadPHdQnii7AZNTN6NL8H0qKQmkZYjGjcRZeNsFBpPP2hj546F6gcUI9ZavHSgvEKSEKNtL177OokpAwlF9KwfBRd%2FvjDOTgxyfnWggOyHG6s6ynLQUqTV2JVyHsNN%2Br1Tb6UvvFGFz9g6C5MwS5xV%2BETjdBNCn8O9CG69sNzpD78SW5xRhKnj9YieXqzBysYZT4Ct%2BjaacJbi2Y%2Fw%2Fdy1ccX0s%2FG65pu4Dv2NwFUoFxbdRNL4EhrVmsMPWWOev%2FngH7kyWIp3utksnUvpgd19vK8LZnuwUYHFzgNrcJZ5VVlV6nwd3%2F9aLRoMMDwicoGOqUBglJFedlQRC%2BiEmgP3jlps1tyZVhjXningzLq7M0ennry%2FHiwFvaRKeNU7tJI3PGAHvDwL1oj%2F5nnf8gXKZbRr9oUIdPzS6rl5rAAxhfzcQMX6VQ42X6JsYCFuKQUorXSe020Q1XBt9Fs4rdAesIwykVgAlFgVFFUHlCd%2F42QLbInwECAvrBKe3wJLLhfJGqTiCmw72Pyds01Dp47oRYxvVN7do5h&X-Amz-Signature=604fde534a276778e361807f198b473c78091aae94bb7cb4ed049dfaa042d30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

