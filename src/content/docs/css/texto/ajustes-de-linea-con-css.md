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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWL6CIC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6h%2BYaoK1U5LxZefH83o7DcGwHIeJXMkNsyTE1fOoaQIgXtaao3QHD1DfnXtoqkB%2BQuubnNT%2FNYol4auszo0t4pUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDC43F4%2FfGJ7dEzQpNSrcA5fxjqV7EFoQ1teKnri7Fas2uhipNkqqtI2A7EZypcGLZeUjdmq3edqBzZ7vVLD0Wja%2F1m378F%2FLua6KzlHQBb5zqBICaQNE%2FKpVlG8za3196uMPhTc3cqHna0EvLTgNSpcKujfKRL%2F8vtsHhkGHtaxr62JXR3vR8JDuMdnpkwpl0CtCPzo9s2S58qDr2it%2FL%2BMGde%2BuW3NB8OpihChcDe17pLff%2BTatUtE5A%2FEKE5WW0tukIO7XhizTJruNzL3NyD1W%2B1KvrxLf7pW5coww8vxeaeg6DqnSHXfNXOc%2FQX2q0xeiAGm%2FLOgyTyPU7bZqrrkiXF3dN%2FPWqqb9cHdWEte%2BGUJZJmU%2B658kFWfb6ouGAPwzrAgtK1s3%2Bh%2FDuIjA9WFZVGXhtKqwPUj2NRe1vMxrX5Y%2FcVIsn1nT7JEVWJ64oyhayhrkfLH6amvFuu%2BspBH3q7CJeF9kXpZdk6F16KeD%2FiNW40QyH8zQUwmE90D442a4X5vikgwbDFLas8R%2Fd%2FlQdbDpTmU6eVsv1dFemIE0czWOsgeJhbGgqdmV%2FZ3N0Gh2wAVpdL1RIfuutPfE1eDidVN6zogvCAaExMjpXuFCrA6wSCXI7rwdJ8Kkx6v%2FOxBTBJNV4vDoY1qgMPCWiMoGOqUBR%2F73%2F%2FKS7qZZmBjti10bFwxP8fhifoaai4OfOYtdPn4jYk%2BeHwR6qzTi5CZwr0D0Aq4Hbl4WEeATX5%2BABOPYF09RaGEnN6bG8W50axz2trYWhBdpyfqtTHqKeSeCBv0XvD%2BUSNLZ6%2BcINvxHF1COwrSGLVQFpUpBOTj5u0vNEt9EiYofJTgNHGIwSXXWizJQAEHUq%2FOZiO1CxJAPo8fAAw0sIr0R&X-Amz-Signature=9ed762a610e336663d5c0e4c3b9322ae3a081eb4aac8e80e1065074e360bfc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWL6CIC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F6h%2BYaoK1U5LxZefH83o7DcGwHIeJXMkNsyTE1fOoaQIgXtaao3QHD1DfnXtoqkB%2BQuubnNT%2FNYol4auszo0t4pUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDC43F4%2FfGJ7dEzQpNSrcA5fxjqV7EFoQ1teKnri7Fas2uhipNkqqtI2A7EZypcGLZeUjdmq3edqBzZ7vVLD0Wja%2F1m378F%2FLua6KzlHQBb5zqBICaQNE%2FKpVlG8za3196uMPhTc3cqHna0EvLTgNSpcKujfKRL%2F8vtsHhkGHtaxr62JXR3vR8JDuMdnpkwpl0CtCPzo9s2S58qDr2it%2FL%2BMGde%2BuW3NB8OpihChcDe17pLff%2BTatUtE5A%2FEKE5WW0tukIO7XhizTJruNzL3NyD1W%2B1KvrxLf7pW5coww8vxeaeg6DqnSHXfNXOc%2FQX2q0xeiAGm%2FLOgyTyPU7bZqrrkiXF3dN%2FPWqqb9cHdWEte%2BGUJZJmU%2B658kFWfb6ouGAPwzrAgtK1s3%2Bh%2FDuIjA9WFZVGXhtKqwPUj2NRe1vMxrX5Y%2FcVIsn1nT7JEVWJ64oyhayhrkfLH6amvFuu%2BspBH3q7CJeF9kXpZdk6F16KeD%2FiNW40QyH8zQUwmE90D442a4X5vikgwbDFLas8R%2Fd%2FlQdbDpTmU6eVsv1dFemIE0czWOsgeJhbGgqdmV%2FZ3N0Gh2wAVpdL1RIfuutPfE1eDidVN6zogvCAaExMjpXuFCrA6wSCXI7rwdJ8Kkx6v%2FOxBTBJNV4vDoY1qgMPCWiMoGOqUBR%2F73%2F%2FKS7qZZmBjti10bFwxP8fhifoaai4OfOYtdPn4jYk%2BeHwR6qzTi5CZwr0D0Aq4Hbl4WEeATX5%2BABOPYF09RaGEnN6bG8W50axz2trYWhBdpyfqtTHqKeSeCBv0XvD%2BUSNLZ6%2BcINvxHF1COwrSGLVQFpUpBOTj5u0vNEt9EiYofJTgNHGIwSXXWizJQAEHUq%2FOZiO1CxJAPo8fAAw0sIr0R&X-Amz-Signature=73ad8c001d9dc6f14b8142e3c801d9842b155c1c0321f7ead41989ede0c9729e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

