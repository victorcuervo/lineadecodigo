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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBK2SZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgR2C%2BvmE8jIxvUUWiBvU8lXSFiLHhdSiLcmop6M%2BvLAiBwegMutmfNWnPiVLQAWmQcsaQu1cMvpdFmuPklmK7dlir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2FwXCP9ioRdV%2FAKOSKtwD%2B2xXnRpdsORg7mJTK73vuUmRj5ogxgUbaulMoJ6aEa%2B6eV4BSvLD3261SRqVvKkvUWRgfJJmhbk5qAmk5LeV5oEogHUHImPRCjG6tR8YoD%2FQdG1Rgs9n1oraXoanAt0BRSHdlEuPjOZHtyF%2FKjixMfcUzHj25PDm3aMfNDks77ZjK5NULVoX9NWEk4k7QPN8eg%2BxlAdwZO7qUUh%2BKrnU%2F7MvPFvmOx8y5IoZRBOP%2FZtmtrP4BR%2BBxW5HzlLAr29j8UmxSoCN%2FesPTr4jpG27ULWdOTIbbJaHovs1XUKBula%2F7HfrKRWKJSM6qSp%2BKg6eRWNC4yptyfVshY085t7DnOWhV9FJhek%2F%2FZYY3ZM3yzWYo7wOq5qAXP49rQh9FRzbX1bvRN9b2P%2FU2kaUY9GZe4PxZkxITgPxQ8soiRlYw%2BnX9H74sY5S3TopPb8dt2welm3zebchQ0SYRpNfxd3IJJlYXyCw78JilAJY9rmOlNA3sHoYRK4mWEzwJ%2FBExtp8j8KZ8AoNnu454Z8qK7j%2BPGmtaqxXZXkoHQuyHp4B0zyaKx1fiKa2GgKjq3Sl%2F3%2B7GYx2SCKpzM6uBpvpnhtywMcTsl%2Fx35hcrrXRGt9If5h0rBtHHSuuNPxDYqow26qKygY6pgEnUEg60jYE7y0WfXyQccaZZjqXw4wTscPIdKxmYQM58ah9V7QMQfcPP7scjKd1Vb42TlFmdUl1qo0UVltueOIji8HZXqKFGA0Xb%2B5ZRE31B2krOpNCl%2FCxp7s5o61qHOXRmNtbnha9SbdED9jRZR8V2TR%2BVm9CsFWPGHOmw9VRNnwZF7zXk9HSKApS8wihwo6J%2F01mB1tW2H29DTDNnxQ7xTmx%2F1TI&X-Amz-Signature=0522af1bdbc3dd861d4348ff4ddb662aa27e57c984533b564bc5fbe3dbf571db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QBK2SZZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgR2C%2BvmE8jIxvUUWiBvU8lXSFiLHhdSiLcmop6M%2BvLAiBwegMutmfNWnPiVLQAWmQcsaQu1cMvpdFmuPklmK7dlir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2FwXCP9ioRdV%2FAKOSKtwD%2B2xXnRpdsORg7mJTK73vuUmRj5ogxgUbaulMoJ6aEa%2B6eV4BSvLD3261SRqVvKkvUWRgfJJmhbk5qAmk5LeV5oEogHUHImPRCjG6tR8YoD%2FQdG1Rgs9n1oraXoanAt0BRSHdlEuPjOZHtyF%2FKjixMfcUzHj25PDm3aMfNDks77ZjK5NULVoX9NWEk4k7QPN8eg%2BxlAdwZO7qUUh%2BKrnU%2F7MvPFvmOx8y5IoZRBOP%2FZtmtrP4BR%2BBxW5HzlLAr29j8UmxSoCN%2FesPTr4jpG27ULWdOTIbbJaHovs1XUKBula%2F7HfrKRWKJSM6qSp%2BKg6eRWNC4yptyfVshY085t7DnOWhV9FJhek%2F%2FZYY3ZM3yzWYo7wOq5qAXP49rQh9FRzbX1bvRN9b2P%2FU2kaUY9GZe4PxZkxITgPxQ8soiRlYw%2BnX9H74sY5S3TopPb8dt2welm3zebchQ0SYRpNfxd3IJJlYXyCw78JilAJY9rmOlNA3sHoYRK4mWEzwJ%2FBExtp8j8KZ8AoNnu454Z8qK7j%2BPGmtaqxXZXkoHQuyHp4B0zyaKx1fiKa2GgKjq3Sl%2F3%2B7GYx2SCKpzM6uBpvpnhtywMcTsl%2Fx35hcrrXRGt9If5h0rBtHHSuuNPxDYqow26qKygY6pgEnUEg60jYE7y0WfXyQccaZZjqXw4wTscPIdKxmYQM58ah9V7QMQfcPP7scjKd1Vb42TlFmdUl1qo0UVltueOIji8HZXqKFGA0Xb%2B5ZRE31B2krOpNCl%2FCxp7s5o61qHOXRmNtbnha9SbdED9jRZR8V2TR%2BVm9CsFWPGHOmw9VRNnwZF7zXk9HSKApS8wihwo6J%2F01mB1tW2H29DTDNnxQ7xTmx%2F1TI&X-Amz-Signature=b3b96817a53041064e06f45c4529bce6de930878f41200f962580184bd749856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

