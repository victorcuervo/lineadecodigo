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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYCDJHXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaruNXOquVUSpbfEJyPSktOvSTyyxlH8VQMOElWbJjcwIhALlbi6YGmq27%2B%2BWJb4IwE3K4ijAiKWLUy3yWVeceo%2BiiKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxve3cdEmbt7UEhdrkq3APXhQ3qORNeY6BSOUn48DlhaBiopQanTlpf%2Ftx3ztVqq7ziP4rTWviglR5SNi79ObVdHd2V2ETDCZVBAJ4ozJ70YIkgFIo5tqyqmAnkSv64ChmPNTPtd4EbJcD5%2FaVRM8PQYVl7Iy2uAcsjgQ4%2BgYlD7h2dIVtVruX45x%2BFn7ODm8dSHA00pvtSFyLye9GSIuZZsccSZfsHBri4HDittLo%2B7opFxBhSkvJMntWoCGMDPMxQVeSI8B2bBx9yospQKcShNzwxW6tY2hGYbyQey71tciBaQwqIYVgB1R3isfI1dolA50%2BQBOREtsO5vppRBBTHdtzgkP0EdZ3%2B8q%2Bhga9%2BFMHxuJ76FrpQWSVWi9xQepPODBR1K948XW7Ljj3ivl2AQ4tDhKY3S047687EQ2644jeCZ8z8nmcs%2Fbe7otTbu7hu71uvIthah4p9tQ8UuC%2BOcl6yIQTjC%2BXunBwbYjZ%2FQxIQHFlnVJR6pozYdl75S3eGkYvJyqhX94ve69FAMq1%2BpMAIfZ5BxEfU5kgPfcsgZKiexPz%2F4ZO030ei%2FAZOtWMNt4lS91hGFy7Ac5XMbF2o8ld70FJvYcsg5lJa9Xf6zCIklMJaI0gWdtotPCXP%2FPlVIvBwPUhZaGHicTDtoIvKBjqkAZAJ%2BVFpP2TR46bZM5kzQx%2BKU9oDuibWXMEj6pHSFLKzRbgGarpL0B7xTrCmY35hLEMcFl2hjnlULv2wepadXvID%2F4zOqztUrWHd9qQYfyp7zC2J5Hw6JMMD5FyMJisjZCQw2I0nXGq0%2Bm%2Fc78cJ1ve5wVsMrYYlRLyxV%2Fj4sXlGfcSwUFa8I%2FoWg6pJF9YQRJPPBuLeU59WSIoPciBNgDBzPyRk&X-Amz-Signature=63fbe3a940df6ae8351299b1fbf399a29b07d56e05258bee66bdd3dcb1997eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYCDJHXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaruNXOquVUSpbfEJyPSktOvSTyyxlH8VQMOElWbJjcwIhALlbi6YGmq27%2B%2BWJb4IwE3K4ijAiKWLUy3yWVeceo%2BiiKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxve3cdEmbt7UEhdrkq3APXhQ3qORNeY6BSOUn48DlhaBiopQanTlpf%2Ftx3ztVqq7ziP4rTWviglR5SNi79ObVdHd2V2ETDCZVBAJ4ozJ70YIkgFIo5tqyqmAnkSv64ChmPNTPtd4EbJcD5%2FaVRM8PQYVl7Iy2uAcsjgQ4%2BgYlD7h2dIVtVruX45x%2BFn7ODm8dSHA00pvtSFyLye9GSIuZZsccSZfsHBri4HDittLo%2B7opFxBhSkvJMntWoCGMDPMxQVeSI8B2bBx9yospQKcShNzwxW6tY2hGYbyQey71tciBaQwqIYVgB1R3isfI1dolA50%2BQBOREtsO5vppRBBTHdtzgkP0EdZ3%2B8q%2Bhga9%2BFMHxuJ76FrpQWSVWi9xQepPODBR1K948XW7Ljj3ivl2AQ4tDhKY3S047687EQ2644jeCZ8z8nmcs%2Fbe7otTbu7hu71uvIthah4p9tQ8UuC%2BOcl6yIQTjC%2BXunBwbYjZ%2FQxIQHFlnVJR6pozYdl75S3eGkYvJyqhX94ve69FAMq1%2BpMAIfZ5BxEfU5kgPfcsgZKiexPz%2F4ZO030ei%2FAZOtWMNt4lS91hGFy7Ac5XMbF2o8ld70FJvYcsg5lJa9Xf6zCIklMJaI0gWdtotPCXP%2FPlVIvBwPUhZaGHicTDtoIvKBjqkAZAJ%2BVFpP2TR46bZM5kzQx%2BKU9oDuibWXMEj6pHSFLKzRbgGarpL0B7xTrCmY35hLEMcFl2hjnlULv2wepadXvID%2F4zOqztUrWHd9qQYfyp7zC2J5Hw6JMMD5FyMJisjZCQw2I0nXGq0%2Bm%2Fc78cJ1ve5wVsMrYYlRLyxV%2Fj4sXlGfcSwUFa8I%2FoWg6pJF9YQRJPPBuLeU59WSIoPciBNgDBzPyRk&X-Amz-Signature=e175194a96f3d27d2e461f796add660f074d24dadb578982a4848cb95988abe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

