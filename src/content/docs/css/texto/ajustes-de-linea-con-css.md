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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIKIM4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKkULxz5NepKrdzfOK4qz2odw%2Bh1z4GqA0tvg2YudhxAiEA7JvZAaJYh%2BNDnaX%2BlxSS5Onz8vo4RBbud0ZOb98UFd8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIlwawFt%2FidCnNkXVyrcA0H5E4sSfqzYb8qOGrt8oSnCmeyzu0kIZWp5mqoCJbtw9hCkH1P9Zs%2FnJoNkni8YfXM2VWIyEok2k0kp4%2BGa7%2FvmouM26ZwBHKBo690xP%2BoThGvsqu0EO9yzoII%2BPALzzODo8ikFEoJokH1Gp4MrqlLadYjiLqCqfotqdecoBEIvSHe3BjHooasY7JThAvhhiF7St6K%2B3QP%2ByfLcZxnpU7nzqksGS5atLf3RwrVMy0ZRUwdnlkpInN8HPbKfudDXrNFBAZ1DVn8ELy6xsRMNgB8B5pRoiGwDUAbgcmS3OS%2FGjg7Av%2BBIbNv9q7FB%2B2EMPK%2FzGIq6Pp9RPrBvh54WnA8c695r3p%2BwsvOKmXhUDSRsXbqcopP%2FzWp9%2BXbyRBDg0CAnManKVnF2dkjEEk8ka7UhMSpig%2B9fwvRocIBSO%2Br9dZmxRmAjpIyZWHTaKQt8GsnsePFdj4NZzZT7H60FhXDS4scnhhpDnOMOCcFbBD07brnfcsQjGu%2FA07cpx65TvtkXnDpYX6GI9kV869Y7sct0vNgeNI2G9Au555SVBQRD6%2FQp4LLqZ3cOWnW0VImhfZtvXCuLLLyTZuDlKI5AT0avlkaO6PRzwBdCB8GOTlg3eVX4dCN2oBfXQSYfMO6WiMoGOqUBV5H6VT32gMp6CXXojU3KlW7FW2zDIAFe%2Fo3yCCKudX8nV%2B%2FSnoku1S8Y1PRW1KmuE0DXzuriOkMQ2hCwiLUSUd6%2BQ%2BmJG4%2FzlNM0v5G9wIrJvfOc139%2F5UE6fpj1TQItKA1%2Bk%2FKl8pdws3U5EHKPeY1cSkz4JMz%2BI3AmdPBxtSuY4EdeS7DC8w4NilyJIkapmWZlEtzYppVJ9PmFBHdmTDbNxxMA&X-Amz-Signature=f79640589a95a130b4dc27cc27dd282fbffcdb7447d1fce78c3c507c66998961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FIKIM4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKkULxz5NepKrdzfOK4qz2odw%2Bh1z4GqA0tvg2YudhxAiEA7JvZAaJYh%2BNDnaX%2BlxSS5Onz8vo4RBbud0ZOb98UFd8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIlwawFt%2FidCnNkXVyrcA0H5E4sSfqzYb8qOGrt8oSnCmeyzu0kIZWp5mqoCJbtw9hCkH1P9Zs%2FnJoNkni8YfXM2VWIyEok2k0kp4%2BGa7%2FvmouM26ZwBHKBo690xP%2BoThGvsqu0EO9yzoII%2BPALzzODo8ikFEoJokH1Gp4MrqlLadYjiLqCqfotqdecoBEIvSHe3BjHooasY7JThAvhhiF7St6K%2B3QP%2ByfLcZxnpU7nzqksGS5atLf3RwrVMy0ZRUwdnlkpInN8HPbKfudDXrNFBAZ1DVn8ELy6xsRMNgB8B5pRoiGwDUAbgcmS3OS%2FGjg7Av%2BBIbNv9q7FB%2B2EMPK%2FzGIq6Pp9RPrBvh54WnA8c695r3p%2BwsvOKmXhUDSRsXbqcopP%2FzWp9%2BXbyRBDg0CAnManKVnF2dkjEEk8ka7UhMSpig%2B9fwvRocIBSO%2Br9dZmxRmAjpIyZWHTaKQt8GsnsePFdj4NZzZT7H60FhXDS4scnhhpDnOMOCcFbBD07brnfcsQjGu%2FA07cpx65TvtkXnDpYX6GI9kV869Y7sct0vNgeNI2G9Au555SVBQRD6%2FQp4LLqZ3cOWnW0VImhfZtvXCuLLLyTZuDlKI5AT0avlkaO6PRzwBdCB8GOTlg3eVX4dCN2oBfXQSYfMO6WiMoGOqUBV5H6VT32gMp6CXXojU3KlW7FW2zDIAFe%2Fo3yCCKudX8nV%2B%2FSnoku1S8Y1PRW1KmuE0DXzuriOkMQ2hCwiLUSUd6%2BQ%2BmJG4%2FzlNM0v5G9wIrJvfOc139%2F5UE6fpj1TQItKA1%2Bk%2FKl8pdws3U5EHKPeY1cSkz4JMz%2BI3AmdPBxtSuY4EdeS7DC8w4NilyJIkapmWZlEtzYppVJ9PmFBHdmTDbNxxMA&X-Amz-Signature=641ca16e03ca3797493fb59e76627ea9ce69af3c7cb7d8e9a7705f30c0d5b2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

