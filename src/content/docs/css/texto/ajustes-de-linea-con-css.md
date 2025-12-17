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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GN5A3CA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDFLFWoyU7ZJ3RxJQP5A8gbPoXV6BdIB%2BvaFkh84X7gIgCRvRjv3mUBm9Yax%2FzHIhLZDd%2Fdhlo7crlGT2eDFtwN0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCFFgCL6xlapCMLWEyrcA2SQTo8CP4cERczBidYZjoPWCPRDzm60Mfvx8JJACTPAge9sLjwQ5dhdLrPqawGQgydGeGWQFOF8ZlOTr2Cq8dn8yqJZBZYTRWE5kOn%2FJ64cXXqsJGPrQjGVMp8j7dVZBqR%2FulBtUJ1g7WQgo6jQH7Rjg3INDlZPdrVJiZ6W0jMevr5JZCjJp43aA3WlYE7XzeG%2Bt9qMdEcmlC2ttrkRzF6q7NP%2FiRiTlpd%2Bn9fIDa4Hv600JXfMsM7jokNJCVAgrVQPhkCMsWxA151gXQghe6ATZtT3qfEHx8k2Mx%2BI2FUPonyEI4ROGwzVxlZxZwmhi1z4N%2FMcSINw4FuP0SYUcTpVO7dxd%2Fg0C%2B86gheKZ%2Fn32Z0RGYmex6HbugLcMsv%2BaLh223mRxgNBqo8l1X5hF7g0P%2B90G490NpGMiUbZWRj6OA4CMuOWfURJ8LobY7TbUu2ZbCHoHoEuoZx5d9GeBEfsaPNXLFGaXvW4%2BMOy0xYAoi5AQF6lu9039gsxnp6W%2Bg6NTr%2FMIwu0jK7N3cA0gdh74S7iaoXUdHkeH5Qzn54k2nO6gSfTkS%2FHBQ5sDlziqDre4zq%2Fxc8WFVZkDdLvtC0W7vIIcQj3xJYrmO%2B1Z85DWNI1us5RLOE9SChtMJbhisoGOqUBholpDBoeEy92SKmJJ7v1CiGyihhmOBVHL5NH86dOEYurAAZeD7pXa0rIBSSmWPkfN6zlkOAITH%2F5Semvsd2vyRs4WuN0poIMfLV%2BhI8YAvxnmMl3flbp%2BFWxtMxYG1Mn7FrtLP4jOZy9OwnL7%2FqET6kk9IxLUP%2FaVdT9buoFuixLvCxeLRSJrIAR9G1mAlk3LBNLrjjIe8hpuIbXmHl1RxNAq69a&X-Amz-Signature=f422ba30bf60b24868e0fd8a58433793f371330cbab59464f72e2f6a65d42a31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GN5A3CA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCDFLFWoyU7ZJ3RxJQP5A8gbPoXV6BdIB%2BvaFkh84X7gIgCRvRjv3mUBm9Yax%2FzHIhLZDd%2Fdhlo7crlGT2eDFtwN0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCFFgCL6xlapCMLWEyrcA2SQTo8CP4cERczBidYZjoPWCPRDzm60Mfvx8JJACTPAge9sLjwQ5dhdLrPqawGQgydGeGWQFOF8ZlOTr2Cq8dn8yqJZBZYTRWE5kOn%2FJ64cXXqsJGPrQjGVMp8j7dVZBqR%2FulBtUJ1g7WQgo6jQH7Rjg3INDlZPdrVJiZ6W0jMevr5JZCjJp43aA3WlYE7XzeG%2Bt9qMdEcmlC2ttrkRzF6q7NP%2FiRiTlpd%2Bn9fIDa4Hv600JXfMsM7jokNJCVAgrVQPhkCMsWxA151gXQghe6ATZtT3qfEHx8k2Mx%2BI2FUPonyEI4ROGwzVxlZxZwmhi1z4N%2FMcSINw4FuP0SYUcTpVO7dxd%2Fg0C%2B86gheKZ%2Fn32Z0RGYmex6HbugLcMsv%2BaLh223mRxgNBqo8l1X5hF7g0P%2B90G490NpGMiUbZWRj6OA4CMuOWfURJ8LobY7TbUu2ZbCHoHoEuoZx5d9GeBEfsaPNXLFGaXvW4%2BMOy0xYAoi5AQF6lu9039gsxnp6W%2Bg6NTr%2FMIwu0jK7N3cA0gdh74S7iaoXUdHkeH5Qzn54k2nO6gSfTkS%2FHBQ5sDlziqDre4zq%2Fxc8WFVZkDdLvtC0W7vIIcQj3xJYrmO%2B1Z85DWNI1us5RLOE9SChtMJbhisoGOqUBholpDBoeEy92SKmJJ7v1CiGyihhmOBVHL5NH86dOEYurAAZeD7pXa0rIBSSmWPkfN6zlkOAITH%2F5Semvsd2vyRs4WuN0poIMfLV%2BhI8YAvxnmMl3flbp%2BFWxtMxYG1Mn7FrtLP4jOZy9OwnL7%2FqET6kk9IxLUP%2FaVdT9buoFuixLvCxeLRSJrIAR9G1mAlk3LBNLrjjIe8hpuIbXmHl1RxNAq69a&X-Amz-Signature=9a404c4d0f7015d0163349d789ccc89aa45a3fe58e31431300ebdf9109561224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

