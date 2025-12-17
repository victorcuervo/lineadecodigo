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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEXPMGG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiaMDF797lJDeLSOrDdqfyxNYRz5%2BrjdAzR%2FiTzz6RWAiBF67aV1HINhSzepf8PbZ5%2B%2BCiUewRx3Qe7VDDDXbHwtyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMIHWeUHeGM1mLeAGBKtwDbjjAu0gO3wAIlPjlnqJ4lw9vkPhud52HJ6C%2FvYyU00Zy3pB84ykYvHbWnDznmM1mrV%2F2z1kqcHhD2EmRw1s0V%2B7po4SjrQmeKfPhkQKapivEkoUTKUqk5YooXbFEIubKkF4o68z%2BoXvOCfdHvjihsutAY4el5jbM47NXCcS7TdPnvYNSR3benlJAAx%2BQWP2oprv%2FcQy6Ei%2FW%2BHZCmWx8CiA59tlaDaglg4jKkRNXhkf1gIjD1MRtdyVWqcUyAl4j6Ct2WTud0k8D0D%2FWRFb7gjFnwWRvV99YgeTXeyxJklQEL8BTVAAQB7tv%2B5E%2Be4%2FjZeuIW1ULgKS2%2FA7mz98hqs7Haw31oRSSND34Q1qwUjoMqfgQ84cgBb3CmGi5OGUUAtovg2E9KhaXT2WE5dAsZ8COpCFfLQP48Wz%2BEAs%2FG8%2F5RKoDslSyd1EZyB2n4SJSfA%2BfWroRjinXMgJEL4SVpIc01MzSNCfY8V106xNSqjIxNEPAPk2m5oEyVuMlvOck52aI%2BKqUVifTNNdWDYDHWJaZ0p6rhIYWmYp6KxZ%2FbXNXvI5mowVyGYBn%2FiQAZ6ddV9hf5q%2BQOqs4OOascFqCb9CgkzIF74YAN4EjZ7r4eMhtwdVpe1dov8JCCX4wirKIygY6pgFwU5lvHrRcGiPWxl5XwnXMw2o3ozYuA1gDBceCl5e43pi14y8Le8Jw%2FlyghD5KceQzXn0gHrQHJtwViL1%2BPKqC%2Fghctt%2Fp959JQLA6cxDnR1FqjTIz8RCSOvTY3l2FVOFNXFl%2BaCswT3kOnZhEWWFWZItUvoL3ouvTikvOkAQO2al7iEWOcw%2BkoG1QTBH%2BqOq4pQFV9Ng8iZkgd0a6VefdmAacqiAQ&X-Amz-Signature=0bd51d11da1e7a07b487b38c3c8d5000015f327c7481a14d3dda1cdb1c3610be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEXPMGG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiaMDF797lJDeLSOrDdqfyxNYRz5%2BrjdAzR%2FiTzz6RWAiBF67aV1HINhSzepf8PbZ5%2B%2BCiUewRx3Qe7VDDDXbHwtyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMIHWeUHeGM1mLeAGBKtwDbjjAu0gO3wAIlPjlnqJ4lw9vkPhud52HJ6C%2FvYyU00Zy3pB84ykYvHbWnDznmM1mrV%2F2z1kqcHhD2EmRw1s0V%2B7po4SjrQmeKfPhkQKapivEkoUTKUqk5YooXbFEIubKkF4o68z%2BoXvOCfdHvjihsutAY4el5jbM47NXCcS7TdPnvYNSR3benlJAAx%2BQWP2oprv%2FcQy6Ei%2FW%2BHZCmWx8CiA59tlaDaglg4jKkRNXhkf1gIjD1MRtdyVWqcUyAl4j6Ct2WTud0k8D0D%2FWRFb7gjFnwWRvV99YgeTXeyxJklQEL8BTVAAQB7tv%2B5E%2Be4%2FjZeuIW1ULgKS2%2FA7mz98hqs7Haw31oRSSND34Q1qwUjoMqfgQ84cgBb3CmGi5OGUUAtovg2E9KhaXT2WE5dAsZ8COpCFfLQP48Wz%2BEAs%2FG8%2F5RKoDslSyd1EZyB2n4SJSfA%2BfWroRjinXMgJEL4SVpIc01MzSNCfY8V106xNSqjIxNEPAPk2m5oEyVuMlvOck52aI%2BKqUVifTNNdWDYDHWJaZ0p6rhIYWmYp6KxZ%2FbXNXvI5mowVyGYBn%2FiQAZ6ddV9hf5q%2BQOqs4OOascFqCb9CgkzIF74YAN4EjZ7r4eMhtwdVpe1dov8JCCX4wirKIygY6pgFwU5lvHrRcGiPWxl5XwnXMw2o3ozYuA1gDBceCl5e43pi14y8Le8Jw%2FlyghD5KceQzXn0gHrQHJtwViL1%2BPKqC%2Fghctt%2Fp959JQLA6cxDnR1FqjTIz8RCSOvTY3l2FVOFNXFl%2BaCswT3kOnZhEWWFWZItUvoL3ouvTikvOkAQO2al7iEWOcw%2BkoG1QTBH%2BqOq4pQFV9Ng8iZkgd0a6VefdmAacqiAQ&X-Amz-Signature=a5a4d904d8648f9c3411c8ed685d370d9b804a49c3beaa9aa3ba856b33ddef1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

