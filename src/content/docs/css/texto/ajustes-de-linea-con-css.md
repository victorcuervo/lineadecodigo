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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655C5UGP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFnbHLiGY3ivw2KhDDhK0MebIP3wGYhUYRA%2FVyPqzt9AiEAvJltOaIbdKsuseXaSEac1aBZ7P%2FlaNP01Yo9N8gpM%2F0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE3WzvdQZ5iVVfxHzCrcA46%2B8Qwirq2yEfWIegtgNiX3YRnNNYAE%2BFgApSu3Xp5lbsHcFkGmzmlvg%2BMf8T3Vr2APSufLpbxvnBKDkctn2nyIIHuowbX35hYA%2FNoXdL34hajYz3apBPf4RTF1z1l3%2FqGQbr2i9eBmP25RQrFBmOu%2B0xQdm33FpLhxNt5eA2f4lTMe9n6VIwN%2B%2BNUvBbpjzV0my8oEmRXgv2xYp%2FlczmO1z4FhOIsDrYMF7PpcMNhF6%2BgTAEQzK5YtlFrh2ajmP9PeArjnTeEykc4f1HifLIBJTuhtByG9Jm4nz0sBc1oE1wGvUeS0ct8FDqANGutu04bNTwbhXQ3XPLcbk5R6lTQUQgM6CHbigbxusVlN5V3n0xwhi1I6g6enetM5BIlWOIAB2YZPGwJZpU5Wu58rEpIYgY5ncRyGMKr9XyhkPHUJtT3DBJI67JZzw3mCcwQsbEE1RLy5%2FpsUZ9iCe7JnV8L9P5Sv3amEVEXNP9xwregUig%2FmcJqGezX7wXVvToyFX4lKWr09aqjqUoR0mRv%2FO1CSzQIo%2BGuZYA6K7P7cK29EYgCEtc3lNhT8dDU%2FYuk3XUDhX1%2BxkDEMe4rQe636%2FEOn4l%2BmvDQJBzo%2BuBCbsBPy8m%2Brqze%2Bxmop3DxVMNOXiMoGOqUBCAJu1vDV2ZAckP8hwMxvzUXV6Nu78xhyIXGbgeQZPIcVa9UgAfgWGoazfQRCxdwkVyHDzAbfaFvbTt%2BHUGJ5MbIWhiPn64HAL7Oa3PMdosYG5%2BvIpjZGuNbj5ZEjvtQFLJT27zFW9FKI%2BqpgmEhIJYMNGU1%2F1DPfLQ7RG81KTJve6fwSQLHhXRKCPHQujFYMBR8vrBrtSR5yxp4n6XM5rzlkbf0E&X-Amz-Signature=446eae8b26bd35085fbed56350e393497ee0a248aa2a5c48ea22c73086e27863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655C5UGP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFnbHLiGY3ivw2KhDDhK0MebIP3wGYhUYRA%2FVyPqzt9AiEAvJltOaIbdKsuseXaSEac1aBZ7P%2FlaNP01Yo9N8gpM%2F0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDE3WzvdQZ5iVVfxHzCrcA46%2B8Qwirq2yEfWIegtgNiX3YRnNNYAE%2BFgApSu3Xp5lbsHcFkGmzmlvg%2BMf8T3Vr2APSufLpbxvnBKDkctn2nyIIHuowbX35hYA%2FNoXdL34hajYz3apBPf4RTF1z1l3%2FqGQbr2i9eBmP25RQrFBmOu%2B0xQdm33FpLhxNt5eA2f4lTMe9n6VIwN%2B%2BNUvBbpjzV0my8oEmRXgv2xYp%2FlczmO1z4FhOIsDrYMF7PpcMNhF6%2BgTAEQzK5YtlFrh2ajmP9PeArjnTeEykc4f1HifLIBJTuhtByG9Jm4nz0sBc1oE1wGvUeS0ct8FDqANGutu04bNTwbhXQ3XPLcbk5R6lTQUQgM6CHbigbxusVlN5V3n0xwhi1I6g6enetM5BIlWOIAB2YZPGwJZpU5Wu58rEpIYgY5ncRyGMKr9XyhkPHUJtT3DBJI67JZzw3mCcwQsbEE1RLy5%2FpsUZ9iCe7JnV8L9P5Sv3amEVEXNP9xwregUig%2FmcJqGezX7wXVvToyFX4lKWr09aqjqUoR0mRv%2FO1CSzQIo%2BGuZYA6K7P7cK29EYgCEtc3lNhT8dDU%2FYuk3XUDhX1%2BxkDEMe4rQe636%2FEOn4l%2BmvDQJBzo%2BuBCbsBPy8m%2Brqze%2Bxmop3DxVMNOXiMoGOqUBCAJu1vDV2ZAckP8hwMxvzUXV6Nu78xhyIXGbgeQZPIcVa9UgAfgWGoazfQRCxdwkVyHDzAbfaFvbTt%2BHUGJ5MbIWhiPn64HAL7Oa3PMdosYG5%2BvIpjZGuNbj5ZEjvtQFLJT27zFW9FKI%2BqpgmEhIJYMNGU1%2F1DPfLQ7RG81KTJve6fwSQLHhXRKCPHQujFYMBR8vrBrtSR5yxp4n6XM5rzlkbf0E&X-Amz-Signature=96182d0a9b45117f450f53250ad15e8df7b84104e88e009496120e2105afe881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

