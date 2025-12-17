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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5D6MCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpba7UxsnxVCzSfYM%2BLugVOifdizZWv%2BywXTaRBg%2BeLwIgfTykHKwa1MquKXClyJG%2FD%2FkfjtMS9kOmt7gisZMIT5Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKH74uwc%2F1lSR0J0dCrcA91Fgd%2BuyNT4eSnYBcAYa9G5hSw8RprvdG6HO9WbLrkEks8XbhHsFiELzNByoQz9TXOSW8ICWqLKEg35nDBzEgjuOehCDZsHoLfQeyAGrON7xfhyP8fpn2Na7hkU1%2BFX31U7VAhFMYIKIhFcDuXPeF014owt0S%2FFMNf9Xm9KANxM%2FIhTCQistY8o5e9UTIaUJEJDOaUztEtHf2PqD4g2DvP8M0AkSH4YyZGoIcLtJORhLnAjkxcJlGMNqBwPeEVRrfKVVlKHVk5hy3SNQqidEQq76DBSNz%2B5vdmO3pumW0yaWX7FEKZ4rRjoDpKiFqnJXdSf7hX%2BNbzJFkcr17eBhj6ZZZ3cnNh%2BlRpy%2BqxMrWhWak5WFDOPgjC26OuZg6SpGYw0t0JrJ57vS8VyFwdpXdgtYIr8ZZgIaYyw%2BOTgB4KxYrJNBYIwIs5wCPl5Fppm0CnKm3TDGZ0YM%2BzAtvxvw1am9y9P1T1Fc4cPoQTKWeVp%2BNVSYA%2Bmyh83ji4NzKgWmT9UwnaZ3I1ggWXDdZwmuI1dCu2lPNFl%2BGAzr4H3MGJcnNRQLluKr40gfrTYWbzLP5EM4xRbQk77Wb9%2Bx6gbab8oezUDc0mtjSZn9X4tLa3nUt3mrL4yfrzYh83uML3GisoGOqUB8vFm%2F3kkUf2zJL1QAItpae5QgrU09BGXYbrsoqtRzqyXVx3U0BCKryW%2FH7X%2BpMUOoR8XLZ%2F3Swb3TDWae8D3mGxqkasN%2BwKamdqe1lDRJ8S0ZR%2BM8eTxnkwiVEmr9JvkwuQDbZYiLCuGt65ZZNw0qe2iNdPHrUi286K7W%2B3Gafoq0KXEYfoLkR0CdMAq%2FrPcSRulpkXAZTlav0WdxTph%2F1%2BBuA7W&X-Amz-Signature=9c41e8a05448f29f9692aa0ef69bc277caeaef2e24899971185eea9f908ffe2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5D6MCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpba7UxsnxVCzSfYM%2BLugVOifdizZWv%2BywXTaRBg%2BeLwIgfTykHKwa1MquKXClyJG%2FD%2FkfjtMS9kOmt7gisZMIT5Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKH74uwc%2F1lSR0J0dCrcA91Fgd%2BuyNT4eSnYBcAYa9G5hSw8RprvdG6HO9WbLrkEks8XbhHsFiELzNByoQz9TXOSW8ICWqLKEg35nDBzEgjuOehCDZsHoLfQeyAGrON7xfhyP8fpn2Na7hkU1%2BFX31U7VAhFMYIKIhFcDuXPeF014owt0S%2FFMNf9Xm9KANxM%2FIhTCQistY8o5e9UTIaUJEJDOaUztEtHf2PqD4g2DvP8M0AkSH4YyZGoIcLtJORhLnAjkxcJlGMNqBwPeEVRrfKVVlKHVk5hy3SNQqidEQq76DBSNz%2B5vdmO3pumW0yaWX7FEKZ4rRjoDpKiFqnJXdSf7hX%2BNbzJFkcr17eBhj6ZZZ3cnNh%2BlRpy%2BqxMrWhWak5WFDOPgjC26OuZg6SpGYw0t0JrJ57vS8VyFwdpXdgtYIr8ZZgIaYyw%2BOTgB4KxYrJNBYIwIs5wCPl5Fppm0CnKm3TDGZ0YM%2BzAtvxvw1am9y9P1T1Fc4cPoQTKWeVp%2BNVSYA%2Bmyh83ji4NzKgWmT9UwnaZ3I1ggWXDdZwmuI1dCu2lPNFl%2BGAzr4H3MGJcnNRQLluKr40gfrTYWbzLP5EM4xRbQk77Wb9%2Bx6gbab8oezUDc0mtjSZn9X4tLa3nUt3mrL4yfrzYh83uML3GisoGOqUB8vFm%2F3kkUf2zJL1QAItpae5QgrU09BGXYbrsoqtRzqyXVx3U0BCKryW%2FH7X%2BpMUOoR8XLZ%2F3Swb3TDWae8D3mGxqkasN%2BwKamdqe1lDRJ8S0ZR%2BM8eTxnkwiVEmr9JvkwuQDbZYiLCuGt65ZZNw0qe2iNdPHrUi286K7W%2B3Gafoq0KXEYfoLkR0CdMAq%2FrPcSRulpkXAZTlav0WdxTph%2F1%2BBuA7W&X-Amz-Signature=2f765d629d8198f0284d3734c95f8dbffdec3a35de627060341c2d7f74012919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

