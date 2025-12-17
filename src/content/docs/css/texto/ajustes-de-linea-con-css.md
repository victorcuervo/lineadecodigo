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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYZDWFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZGuXt5HNu6TiqwYdu7mB85XvC41wsbJs7W1jYWteJAIhANY9xKx3a9%2FS4OssoJW6QYwRckWnJx%2B2UK5Gnl4wmYJMKv8DCHUQABoMNjM3NDIzMTgzODA1IgxHAo%2BDEMEdb6GYzI4q3AO8b4t%2BLGVtR17NEDDoBPaOuOBRglM5BqEsAVGkY3VAoiB7mB%2B6hS4%2BxVzkPjGdhYDQ%2B2u6odz%2BIkRp3XL4UijxuWODiDOiQ2buxoQun23eR7eAvb6Y4utZTKAF1F%2B4ES0BGfwdANo0JEPgU2mQ1772AzvT9Tyi7N2gHLv32xs4ra0MtYXGA01IefbfOXqdrmp08sAaiGSY5YRIwYuRILKCGR9KWbcLOE02sqPcFPvAh1u6AN4UaqirdGMlk7tCx4Uz%2BE6qcpgpMZgNcJNFu80bvcUk5J9NecpRzG%2BpozUiqqGB2SSfLf3%2FCNEUXqvzUuNgrl7FoL4hR1pLPxp2acft8gRjuuX24YybCr0J5bMTNp7aM9EUCVzzYferCVmps4yqBcK%2FPj%2BvzmuwcB9ychkf1kjLHQgErpggbh%2FSxaZBvhiudyfFto3ZuIdjugHO2dXGEwvRsUPon%2F5AwjrpJt7vh4dUsAJ1%2B21THMAW0ZU7gV5yOEO7UtIRSf4YXoyAWJXjKaIBCp0WsE992u4LgiDSXL4SzR2GF2PSZiF0oJZzXEH8K%2FRSR6Pk4EybUZ9lN2DKTU6Ny7sjnH9rzEn5OsHf7hfAtXYhLTd6e9idPncCa%2B20JyQtsk2XHn2X0TD0zYjKBjqkATXLkUkyRJMkPC7%2F8mv8OXtk%2BXHXLOHGs20x%2F57NZK%2Ft8IJXPd3azYTTBE5h8f1dSJprufChkQg91yJddEZmhR8d7S%2FqqyYeklNJXDTJ0o2t6FMEZt3b8pg2lmPHdrWxwMsWVImBRhTuFVDf24tiLMGqYXJ1xdoFeVnIZ4n3srIZS1C6x7VsN8Lp%2BguqprR8WGZSG4LDcUKqeTvvSDWSL5qD5tI0&X-Amz-Signature=46c255efa4487533d0370cb8ccf960ed9e35b34f47b8014dd4420e10407fd914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYZDWFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVZGuXt5HNu6TiqwYdu7mB85XvC41wsbJs7W1jYWteJAIhANY9xKx3a9%2FS4OssoJW6QYwRckWnJx%2B2UK5Gnl4wmYJMKv8DCHUQABoMNjM3NDIzMTgzODA1IgxHAo%2BDEMEdb6GYzI4q3AO8b4t%2BLGVtR17NEDDoBPaOuOBRglM5BqEsAVGkY3VAoiB7mB%2B6hS4%2BxVzkPjGdhYDQ%2B2u6odz%2BIkRp3XL4UijxuWODiDOiQ2buxoQun23eR7eAvb6Y4utZTKAF1F%2B4ES0BGfwdANo0JEPgU2mQ1772AzvT9Tyi7N2gHLv32xs4ra0MtYXGA01IefbfOXqdrmp08sAaiGSY5YRIwYuRILKCGR9KWbcLOE02sqPcFPvAh1u6AN4UaqirdGMlk7tCx4Uz%2BE6qcpgpMZgNcJNFu80bvcUk5J9NecpRzG%2BpozUiqqGB2SSfLf3%2FCNEUXqvzUuNgrl7FoL4hR1pLPxp2acft8gRjuuX24YybCr0J5bMTNp7aM9EUCVzzYferCVmps4yqBcK%2FPj%2BvzmuwcB9ychkf1kjLHQgErpggbh%2FSxaZBvhiudyfFto3ZuIdjugHO2dXGEwvRsUPon%2F5AwjrpJt7vh4dUsAJ1%2B21THMAW0ZU7gV5yOEO7UtIRSf4YXoyAWJXjKaIBCp0WsE992u4LgiDSXL4SzR2GF2PSZiF0oJZzXEH8K%2FRSR6Pk4EybUZ9lN2DKTU6Ny7sjnH9rzEn5OsHf7hfAtXYhLTd6e9idPncCa%2B20JyQtsk2XHn2X0TD0zYjKBjqkATXLkUkyRJMkPC7%2F8mv8OXtk%2BXHXLOHGs20x%2F57NZK%2Ft8IJXPd3azYTTBE5h8f1dSJprufChkQg91yJddEZmhR8d7S%2FqqyYeklNJXDTJ0o2t6FMEZt3b8pg2lmPHdrWxwMsWVImBRhTuFVDf24tiLMGqYXJ1xdoFeVnIZ4n3srIZS1C6x7VsN8Lp%2BguqprR8WGZSG4LDcUKqeTvvSDWSL5qD5tI0&X-Amz-Signature=e7a24b7a3ab1bd1002144ae9cd1280734fbd673ea0651317da24648ea0211cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

