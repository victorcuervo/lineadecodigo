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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJI2VTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmqpJpkoQEqwzOLdpeKMGaFpxqPgrKhWe6z9LhLjyXnAiB9nKxmCgzaoZB6cOnEeqL4l5dKBkS2Tnv0JIpApRwi6iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4z1v3SJo5ix4ZQ1uKtwDVC%2FZJlRRJn5Qtpo6fdryLvWNV2iMYnUXHAuwVs6Frhwa9u%2BC9%2Bvn12bbQPNWxK%2Fig4nXdDJJX8gJ9yg%2Fjflmn07D6EWg1PAa3tHVlNR%2FTYGYSjAuceNUBaTkdW3Ri%2F2s1FwTxGuXg5ZLKXpIC%2Bp4Jg3H55XX1GUqD5R9kN9%2FPGaRHzQYpeQ5BxpzCqFlwVdhW0ftIhEsSxPDe3OiTvcKVSFfwrjLodtwToCzrEj%2B59r9Nr%2BYDrYla9oJtRlOCB0mXbi8rLv3u%2BEPOHVvlV7CdramlxmfEvw6g8TinI2lKomHzgwcqv14y%2FPPbNLXtoA5oRDoPXFBGZYL0Df37c2CGp%2BxqxeZjz14CRgXQn4DdMFvO3rLeApdZ5jpE7D01R%2FKOLzNNPzlLWvXschoU4Ft%2BwZepMH45UamShsgjlitBu%2FhVKl4XVAchcHA%2FBQk4Gg%2FKDoGlsC8PXZNQ5BNJktIuiqpzm7DK01eAB%2Fx47zN8bRGFqDdMq7xU5rY4Lw379cQgNoaUmisOLQ8ryPtPLuCXT47KGZwe47rzCsCp7DWz9BYvuaM3wlWX%2F%2FMkPpfeaFhmZWmQR%2BDQRm4sacUWG9rTnZsIDtHzIQ6LHrB0KRtI8lroi6qoloIIJQIZfIw3aCLygY6pgE5JtavUE%2Btf9PvNdk89UA0Wvaz5dGDTP9klu%2B95hIyz00VRueAtwD%2Fb0kj56V2Zx5atrzcbSIqtSobGqlrpvmL1lFYs0seZ%2FnaEJBR5WBdt9qP6jLtESA8PmPV8jP8wsZWr675ygJtkFZExYVY%2B4JJHUSWk2FFeik0EuuvLzPSPQQyXpXp7qYa7Lq29XglU54Op8YkFW5g%2Ba1GJLtgHgGl3kegKWcc&X-Amz-Signature=1725b90e312c0088e702a620a8c11c2d0c7451f8b17542b21b328c630c2a05ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJI2VTY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmqpJpkoQEqwzOLdpeKMGaFpxqPgrKhWe6z9LhLjyXnAiB9nKxmCgzaoZB6cOnEeqL4l5dKBkS2Tnv0JIpApRwi6iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4z1v3SJo5ix4ZQ1uKtwDVC%2FZJlRRJn5Qtpo6fdryLvWNV2iMYnUXHAuwVs6Frhwa9u%2BC9%2Bvn12bbQPNWxK%2Fig4nXdDJJX8gJ9yg%2Fjflmn07D6EWg1PAa3tHVlNR%2FTYGYSjAuceNUBaTkdW3Ri%2F2s1FwTxGuXg5ZLKXpIC%2Bp4Jg3H55XX1GUqD5R9kN9%2FPGaRHzQYpeQ5BxpzCqFlwVdhW0ftIhEsSxPDe3OiTvcKVSFfwrjLodtwToCzrEj%2B59r9Nr%2BYDrYla9oJtRlOCB0mXbi8rLv3u%2BEPOHVvlV7CdramlxmfEvw6g8TinI2lKomHzgwcqv14y%2FPPbNLXtoA5oRDoPXFBGZYL0Df37c2CGp%2BxqxeZjz14CRgXQn4DdMFvO3rLeApdZ5jpE7D01R%2FKOLzNNPzlLWvXschoU4Ft%2BwZepMH45UamShsgjlitBu%2FhVKl4XVAchcHA%2FBQk4Gg%2FKDoGlsC8PXZNQ5BNJktIuiqpzm7DK01eAB%2Fx47zN8bRGFqDdMq7xU5rY4Lw379cQgNoaUmisOLQ8ryPtPLuCXT47KGZwe47rzCsCp7DWz9BYvuaM3wlWX%2F%2FMkPpfeaFhmZWmQR%2BDQRm4sacUWG9rTnZsIDtHzIQ6LHrB0KRtI8lroi6qoloIIJQIZfIw3aCLygY6pgE5JtavUE%2Btf9PvNdk89UA0Wvaz5dGDTP9klu%2B95hIyz00VRueAtwD%2Fb0kj56V2Zx5atrzcbSIqtSobGqlrpvmL1lFYs0seZ%2FnaEJBR5WBdt9qP6jLtESA8PmPV8jP8wsZWr675ygJtkFZExYVY%2B4JJHUSWk2FFeik0EuuvLzPSPQQyXpXp7qYa7Lq29XglU54Op8YkFW5g%2Ba1GJLtgHgGl3kegKWcc&X-Amz-Signature=0dca8831ab3784f25e840b672367a8d901a1ef680466eef5ef77bf02f441b0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

