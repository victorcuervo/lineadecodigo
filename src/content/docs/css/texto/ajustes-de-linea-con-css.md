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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMO7SXSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKUnKljUnOYBltD7NOyHbwrmZ2DLbgsLq54OfO84KLAIhAODpN5DTpJYFlpWbEjnKng1%2FclOQ3p9jrKbWtNZ4OanOKv8DCHUQABoMNjM3NDIzMTgzODA1Igx5M76IL5qC1QBN2XQq3ANmBHrJJ3K5BXgq264YcClPxmOf9MhC5rCBWSdt2mtokoB139XDcyGgI3bhosVeXFpD%2FV%2B%2BK3jfmRyj5LmbvKuV%2Bdx6jIAt4JLUQf8UXza5E6BwLH%2FdTloCRa6YqiOe0FGS1u0wZqKq6H8maI3hkr%2BIi%2F5qJ9TCzeT4fULIWZAfN3ulthB4Cs5YkqpHn74c8pQDzls2HM8IVyroo1IxH36pGRG6SFvQYiZRuzYbie%2Bsod6yt51pSrizVmyIroLVmAmcTOdEB7JIJoIjnv94eVWvo%2BjAOOVXt%2Fyx%2BeqENjZJMQlRD4KuVKf7%2FlsNzX%2Fb%2Fe0n2wBpo80hwMuqdNYF2yGn4iu3zoMGPupypufDBJG7XfrpiaI8UCTUhw6ldriw3mDooY4DDXqPvJPf8mQ2mV87DHqWSrWe0rZq9dH6Z8ZlH6EHIARdC5a1humzxL0PS7uwn9CFQHwpXXAlip8lxwfVywCnTwfA5W%2FLkdydS62vvsEgn1TC19alTO2EBZ3z5OqvcNWjZwkh5bKJKP%2FGRfRt0RrYLjaf9VXOP0JZJ3U8Pdvv6JX1UJ7%2FIH7BeVxPTBz7Gxj4S5XTaZ0glYAyeYWOm9JwnYhjgG1POlZdYZBuN5ZuRHvmXRIH92ngbjDfzojKBjqkAST0vYqAPpagZ7kj7dA6ieG1QGyIr4dNaUsGMh8%2FSr%2Bveyd%2FGgu1bfAgVVDlhtRRSgMCeEFoDK5XoutFtj%2F4m8GoheX1G61dc%2FVVJjJLTT66goBy88w8e32%2FKI85mrY6SM4VwQ938pRs0Eh1eOhAn6qvtcKocBAWvHBUcbyhyI5IXkLHuWJX5hUULGp7mbVnKy%2BCxq3FWeq0%2FGw8ewIBUpN%2FNP7J&X-Amz-Signature=981b9d1945cadecf244385403555732bf680d0ec163efbd11c967c4303cba95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMO7SXSK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClKUnKljUnOYBltD7NOyHbwrmZ2DLbgsLq54OfO84KLAIhAODpN5DTpJYFlpWbEjnKng1%2FclOQ3p9jrKbWtNZ4OanOKv8DCHUQABoMNjM3NDIzMTgzODA1Igx5M76IL5qC1QBN2XQq3ANmBHrJJ3K5BXgq264YcClPxmOf9MhC5rCBWSdt2mtokoB139XDcyGgI3bhosVeXFpD%2FV%2B%2BK3jfmRyj5LmbvKuV%2Bdx6jIAt4JLUQf8UXza5E6BwLH%2FdTloCRa6YqiOe0FGS1u0wZqKq6H8maI3hkr%2BIi%2F5qJ9TCzeT4fULIWZAfN3ulthB4Cs5YkqpHn74c8pQDzls2HM8IVyroo1IxH36pGRG6SFvQYiZRuzYbie%2Bsod6yt51pSrizVmyIroLVmAmcTOdEB7JIJoIjnv94eVWvo%2BjAOOVXt%2Fyx%2BeqENjZJMQlRD4KuVKf7%2FlsNzX%2Fb%2Fe0n2wBpo80hwMuqdNYF2yGn4iu3zoMGPupypufDBJG7XfrpiaI8UCTUhw6ldriw3mDooY4DDXqPvJPf8mQ2mV87DHqWSrWe0rZq9dH6Z8ZlH6EHIARdC5a1humzxL0PS7uwn9CFQHwpXXAlip8lxwfVywCnTwfA5W%2FLkdydS62vvsEgn1TC19alTO2EBZ3z5OqvcNWjZwkh5bKJKP%2FGRfRt0RrYLjaf9VXOP0JZJ3U8Pdvv6JX1UJ7%2FIH7BeVxPTBz7Gxj4S5XTaZ0glYAyeYWOm9JwnYhjgG1POlZdYZBuN5ZuRHvmXRIH92ngbjDfzojKBjqkAST0vYqAPpagZ7kj7dA6ieG1QGyIr4dNaUsGMh8%2FSr%2Bveyd%2FGgu1bfAgVVDlhtRRSgMCeEFoDK5XoutFtj%2F4m8GoheX1G61dc%2FVVJjJLTT66goBy88w8e32%2FKI85mrY6SM4VwQ938pRs0Eh1eOhAn6qvtcKocBAWvHBUcbyhyI5IXkLHuWJX5hUULGp7mbVnKy%2BCxq3FWeq0%2FGw8ewIBUpN%2FNP7J&X-Amz-Signature=cd9ca4e2a01ce7d6e1e35048d8ef7fa83e480414b0ee1828a1cdc80b2b79352d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

