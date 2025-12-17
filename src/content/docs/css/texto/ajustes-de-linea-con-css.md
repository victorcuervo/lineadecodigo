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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAO4IEGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSno7x9Kr7W2QQlawoa3EQN4R1gVC8Kbbr6c3Mi1FrwIhAPnkUBvMzfUEKdSy5M%2BjV7qwQzirf4j3ybwHWAFGE%2FPvKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkTwm1A4XGykw6MrIq3AMTsQaueuXkOv5VRjS12aGBxJCOftLRXVZw%2FBxxe%2BAaMKjI5E5hoViyba5M6X1BgnvcfmsrRrZAvD32cHraSDVTMGD4j7Bd8FAtGGYf3sRtAg7tW9XTzsFjTeLFBtC5kenoMLxzqzUtBwGBZvsNPooRSXQr7ZERb2%2FEHiukDIE9OqCZ1ReV9FiEI51I4RsmDYoqbR4MdIa4YnyQotvuGj2XgvJJKhhOBrBMxd2yrVBpgeDIQz5dsU%2BhRvxRSwzJFSvMUnJhs7pTaYao6iNU1SJdrPS41a3PKTKRTqDeJMISAwd8hxftyjQ1jXjYYjvGgbi9Lmn8nCLP4UgSwFPNH5ayCpbgEYxZqau%2Fn44YsnTbqRJyuygtzyGBq7DBBaM%2FfURU24jGpmuANVTf3wnotQjl4AsASZPjlFUddJVFwn45TCWygW8hhpQ0D1v%2BOLgx0JwydSaT8rrH75I%2FQIDIWqPr6yEEDYVdabYpXLVIfE1OIWE04jKmYRWUCyHDKkrSAK03sFqCJKVna7J17VF3RYjGyPNjnCVQAMg10vAb3q6PyBx5d1%2BUf%2Bce%2BwWHe50cuXTZdGtygxASjfPVbHC%2Fuk%2B3elb2Yr1FcNBAZDwgX9xeFilBQx4c%2FCyiUGOPtzC%2Bi4zKBjqkAcoew6NYEUEDj%2FBSWj0AustTRVK98jxwECR86jLOQcUeQCBuc2IhE69NcqpcnbYQzdMSxUl1eps3lKs0pbS%2FDEuKzlAY2qWIft%2FMTMupi9ONHu%2BqviBVde3RseZNMB4lIWQmI0I257UX72JVtvt5YhRPC1gMjKvocAijsYoO%2BznVI%2FDrNWm9IpUs11w0pGoMhYelFxUiWqYVOoQkf8CfVrSb8hSB&X-Amz-Signature=9c1524ee1ad6786a8b27b5c37a2da58594bcfe007cc4d1a1c2c1d4f59b06a815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAO4IEGK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsSno7x9Kr7W2QQlawoa3EQN4R1gVC8Kbbr6c3Mi1FrwIhAPnkUBvMzfUEKdSy5M%2BjV7qwQzirf4j3ybwHWAFGE%2FPvKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkTwm1A4XGykw6MrIq3AMTsQaueuXkOv5VRjS12aGBxJCOftLRXVZw%2FBxxe%2BAaMKjI5E5hoViyba5M6X1BgnvcfmsrRrZAvD32cHraSDVTMGD4j7Bd8FAtGGYf3sRtAg7tW9XTzsFjTeLFBtC5kenoMLxzqzUtBwGBZvsNPooRSXQr7ZERb2%2FEHiukDIE9OqCZ1ReV9FiEI51I4RsmDYoqbR4MdIa4YnyQotvuGj2XgvJJKhhOBrBMxd2yrVBpgeDIQz5dsU%2BhRvxRSwzJFSvMUnJhs7pTaYao6iNU1SJdrPS41a3PKTKRTqDeJMISAwd8hxftyjQ1jXjYYjvGgbi9Lmn8nCLP4UgSwFPNH5ayCpbgEYxZqau%2Fn44YsnTbqRJyuygtzyGBq7DBBaM%2FfURU24jGpmuANVTf3wnotQjl4AsASZPjlFUddJVFwn45TCWygW8hhpQ0D1v%2BOLgx0JwydSaT8rrH75I%2FQIDIWqPr6yEEDYVdabYpXLVIfE1OIWE04jKmYRWUCyHDKkrSAK03sFqCJKVna7J17VF3RYjGyPNjnCVQAMg10vAb3q6PyBx5d1%2BUf%2Bce%2BwWHe50cuXTZdGtygxASjfPVbHC%2Fuk%2B3elb2Yr1FcNBAZDwgX9xeFilBQx4c%2FCyiUGOPtzC%2Bi4zKBjqkAcoew6NYEUEDj%2FBSWj0AustTRVK98jxwECR86jLOQcUeQCBuc2IhE69NcqpcnbYQzdMSxUl1eps3lKs0pbS%2FDEuKzlAY2qWIft%2FMTMupi9ONHu%2BqviBVde3RseZNMB4lIWQmI0I257UX72JVtvt5YhRPC1gMjKvocAijsYoO%2BznVI%2FDrNWm9IpUs11w0pGoMhYelFxUiWqYVOoQkf8CfVrSb8hSB&X-Amz-Signature=91813eb38f168290d0c3eb12178fe0d971150133e9fde0d4c7463d7ddea1f9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

