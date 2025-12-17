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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672L6PTCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQqmUNOQdBCZ26G7JpZF1rjXEknv1pG5mOJIzoQCL3LwIhALH6eiItLn2p0f7QSnJ2pFoR3dCyz2bsVbB98GNq7KvbKv8DCHIQABoMNjM3NDIzMTgzODA1Igy5kA9hUT3NibgZ%2FE8q3ANMM85gy6MfE0EQlRDRq2rKfpsqryqclVbxf3WHPQp5e5B12vbzTR7E4BSRpE0OfSk0W0ypC9X4DElOfeCoO9mYf%2FPgSJfS42EA5HjokdPgYcKi%2BqyudGNAttE5P0qxkk9VZvk9B1Po81UjMLXKXrXiP9rs%2FoxuM6iCmPhkr6G5sY4FKERHQJgzV8VK0Ut6E4im%2BOv3iZp1Vx%2BbapIb85PCSlPOblUhcMlANs0Sj5wEUwTlnyeNwNMqp7g01acB%2BqIUCy6IVBTej%2F%2FYG6qJ5lZB65DlDjOot1aUw%2BlSiEI0u23fwTFV%2BVcocG2LPkEqObzlCbcMpqKlJ5aHKtLWjaH61hz2Do1cKjQV0rN%2B4daWj0J3%2F4alNrCqEFuHYfg607byKR1jwp%2Fr0tbkYkRhQ2U21gZf7JS59xqGFyKWR30LLW0Ky0ez8kP0yUrGE%2BHCnSFuA2kJrVnOzpanHBNsLTd7q1Vju0ix5%2B8nd4MXixvL%2BY6b1IUpAqSR5RRZwD66ZXWsPs3CiJOZFO2HnU5xKkynfedsufFsMKf2TbUUqXFWXpboCa3KYSrfRr1OBxL51hgl7nRbbynLh%2B1aspnOIjLmh4NlTcDHDFYgFbCxbdatFRhWrbOwJJyLiJtTHTCf%2B4fKBjqkAQGb0%2BfdNjF9X6funhkCnUhI7tf%2FHoF8MM6S%2BXV2VcG5f6Be6EyQmwEBqLkfzlBdTX1zKchSMae5TrFbj9do9bYCrzuPe0OlhmLmzkROVsZ4Efx2AKOa7nMsE12xtWd465C6jzbuZjLBsFa%2BmKkVmJjC7g1FdFsJKEFvNtSl7GhA3Wh2gyWpX3ryS6Kra3XdDAusBfz24jzutLA3frHxQPzTIeOI&X-Amz-Signature=10ae4c5c60d9666852fe6eaf590adb4b20827f5cf1339364a3bc79bc7bdc5217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672L6PTCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQqmUNOQdBCZ26G7JpZF1rjXEknv1pG5mOJIzoQCL3LwIhALH6eiItLn2p0f7QSnJ2pFoR3dCyz2bsVbB98GNq7KvbKv8DCHIQABoMNjM3NDIzMTgzODA1Igy5kA9hUT3NibgZ%2FE8q3ANMM85gy6MfE0EQlRDRq2rKfpsqryqclVbxf3WHPQp5e5B12vbzTR7E4BSRpE0OfSk0W0ypC9X4DElOfeCoO9mYf%2FPgSJfS42EA5HjokdPgYcKi%2BqyudGNAttE5P0qxkk9VZvk9B1Po81UjMLXKXrXiP9rs%2FoxuM6iCmPhkr6G5sY4FKERHQJgzV8VK0Ut6E4im%2BOv3iZp1Vx%2BbapIb85PCSlPOblUhcMlANs0Sj5wEUwTlnyeNwNMqp7g01acB%2BqIUCy6IVBTej%2F%2FYG6qJ5lZB65DlDjOot1aUw%2BlSiEI0u23fwTFV%2BVcocG2LPkEqObzlCbcMpqKlJ5aHKtLWjaH61hz2Do1cKjQV0rN%2B4daWj0J3%2F4alNrCqEFuHYfg607byKR1jwp%2Fr0tbkYkRhQ2U21gZf7JS59xqGFyKWR30LLW0Ky0ez8kP0yUrGE%2BHCnSFuA2kJrVnOzpanHBNsLTd7q1Vju0ix5%2B8nd4MXixvL%2BY6b1IUpAqSR5RRZwD66ZXWsPs3CiJOZFO2HnU5xKkynfedsufFsMKf2TbUUqXFWXpboCa3KYSrfRr1OBxL51hgl7nRbbynLh%2B1aspnOIjLmh4NlTcDHDFYgFbCxbdatFRhWrbOwJJyLiJtTHTCf%2B4fKBjqkAQGb0%2BfdNjF9X6funhkCnUhI7tf%2FHoF8MM6S%2BXV2VcG5f6Be6EyQmwEBqLkfzlBdTX1zKchSMae5TrFbj9do9bYCrzuPe0OlhmLmzkROVsZ4Efx2AKOa7nMsE12xtWd465C6jzbuZjLBsFa%2BmKkVmJjC7g1FdFsJKEFvNtSl7GhA3Wh2gyWpX3ryS6Kra3XdDAusBfz24jzutLA3frHxQPzTIeOI&X-Amz-Signature=efc659034483d960726b86ba44af74ddf3f0741a4eeb72c797de9b7d8da710f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

