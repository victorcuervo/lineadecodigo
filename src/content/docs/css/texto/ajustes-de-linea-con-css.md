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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QCORBAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXqr4Y4NfxWPLK9r1tuoH%2BFZu2QYW6KQL8rRCLQKllyQIgUDVgOZOVPdMo8vWczZ0Jz5Ypj9wuSK4v3w0esvkpayEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFp6M57iOW9hhX29jircA2q6PTxS%2BEAa3ULe4v7Yqb%2FIkWkMPrJsJ%2FQG9fPQkKPxubiLelUSwpEthS0N%2FldYMD9ILezG0TvtZxpQCdMc8Z4JANEzhPsvUSrzAmT6kh%2BVbjg94uus70d89lIDftvLbzm8To4YZoGqRcQQdDzsO8y3M27W689RjGvRizvXRGyM4RpZy%2FLMkg%2BTolMzyQmkgdhwz6zZJe7Y5jzKqQR4UnjZx8RRnzTTeZpAldSvkv%2FFKdpDveB8VY54bPxkjeME5Cm9HE99N9wOwHvL4WwCoBYHrGLtkP7P5KIwyY6fSCOJgwObvAWyQIpctY%2BQOGxTFgxY9XhPiZTdsEDqlBuk5nqKfJU2Z5yQYI%2BoWPfxzLMUfNRBdUEGHikwtMVdh533W5VxfiqR4GmhXK%2BJOrL%2Ffwi0sd6iDqQK0WwK1FerIf0mXdhnADmzevlQQFBt4AqddyxIu7UetSA9rjajLfZyu2YaOzTeImJEh9pO%2BuSk4S7%2FLTYJbL9GGd%2Bda1VYphtD8eKpXrGKDDFlvFurEjs%2FwnHcpwq6udQ6qbVUkMnM3Vl6nY7BatihQY2%2FQ4QO9Fz1C4WISWZX0FWiw61ktkdbwkMTg7fPKkUOzi692mbE%2B5En0V3MvtlwOPt90HEmMMHhisoGOqUBmtfxju%2F2JjTee0uz0TVnaONhPblZD0eKh6pMDnUF48789UChXtNLKyGs7idI8IVH2bC5zXxu51pOoUGug917aRBqyfcyUBqZM%2FV3wbmfBnwwNogA3WEUFAF8OlSS%2BjwKvyh4Ai7ppLg0PYCoV6P%2BLJiBlG2mRAMRMDmXGBuYJZ6bSibQi2LKpEgo%2BMWEqpbyW1BHqMDbIYz5exDZ0BBFGM5JJ37d&X-Amz-Signature=f632af0f0fe223dbad0c7e5b198137878b1eb4e9e57fbb43cf8d2601e1cac7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QCORBAA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXqr4Y4NfxWPLK9r1tuoH%2BFZu2QYW6KQL8rRCLQKllyQIgUDVgOZOVPdMo8vWczZ0Jz5Ypj9wuSK4v3w0esvkpayEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFp6M57iOW9hhX29jircA2q6PTxS%2BEAa3ULe4v7Yqb%2FIkWkMPrJsJ%2FQG9fPQkKPxubiLelUSwpEthS0N%2FldYMD9ILezG0TvtZxpQCdMc8Z4JANEzhPsvUSrzAmT6kh%2BVbjg94uus70d89lIDftvLbzm8To4YZoGqRcQQdDzsO8y3M27W689RjGvRizvXRGyM4RpZy%2FLMkg%2BTolMzyQmkgdhwz6zZJe7Y5jzKqQR4UnjZx8RRnzTTeZpAldSvkv%2FFKdpDveB8VY54bPxkjeME5Cm9HE99N9wOwHvL4WwCoBYHrGLtkP7P5KIwyY6fSCOJgwObvAWyQIpctY%2BQOGxTFgxY9XhPiZTdsEDqlBuk5nqKfJU2Z5yQYI%2BoWPfxzLMUfNRBdUEGHikwtMVdh533W5VxfiqR4GmhXK%2BJOrL%2Ffwi0sd6iDqQK0WwK1FerIf0mXdhnADmzevlQQFBt4AqddyxIu7UetSA9rjajLfZyu2YaOzTeImJEh9pO%2BuSk4S7%2FLTYJbL9GGd%2Bda1VYphtD8eKpXrGKDDFlvFurEjs%2FwnHcpwq6udQ6qbVUkMnM3Vl6nY7BatihQY2%2FQ4QO9Fz1C4WISWZX0FWiw61ktkdbwkMTg7fPKkUOzi692mbE%2B5En0V3MvtlwOPt90HEmMMHhisoGOqUBmtfxju%2F2JjTee0uz0TVnaONhPblZD0eKh6pMDnUF48789UChXtNLKyGs7idI8IVH2bC5zXxu51pOoUGug917aRBqyfcyUBqZM%2FV3wbmfBnwwNogA3WEUFAF8OlSS%2BjwKvyh4Ai7ppLg0PYCoV6P%2BLJiBlG2mRAMRMDmXGBuYJZ6bSibQi2LKpEgo%2BMWEqpbyW1BHqMDbIYz5exDZ0BBFGM5JJ37d&X-Amz-Signature=3284d6763577fec2685682b00f972f95427a2307d2a629a80c191905feb3b8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

