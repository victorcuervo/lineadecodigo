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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WDHJTQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjmgLm1bj%2F7TzOfJyjST%2Fog9rVAnnEV%2FWtYOMZTOP13AiB07HdsI0aNGP2CuAQGNZhX50vBulxWhWbj6LjlA%2BNQsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkqnh0GRTU21TDSIbKtwDo7V1t8j5UM4XBQs4fr%2FetGm8TJhznpDP6k%2FVx7eEBJL5pha%2Fx8fw7hJeexmepS7mhV1SZ%2BdHmJTRb%2FpMg7qz7KRdKYgXXscZwCXyBj7iFlggxeWjTNizeyFVFSyJwxS%2F8QsCUU0J3S6g%2Bf7R20jWCnQAqUue7%2F39huVarGkbt1tvhKjuKmu5ApTEpQ2di4B8fl7QzYadcA1n5LXO4deNtnHAF%2BBxs81dko1j00W3pvz%2BUoJnoNw48FyG7ffNB%2BxWQMsJzRl%2BcBbg3i6rn4XQtWiLMlOuhGW47ajdpjqIC%2BaIXRNZ1XoZCajuLRN%2B%2FGzFAlFB8UaQd%2B9E%2FBdAEK9y%2BvywgQZckkz9%2BkDqgQ03HCCGGNtJIkvrl9ql4ckx3LRqplURooQySl3B21mcicZbY87d0HpMXVR27LbZimQyylzOSG8AjPw70ca2OXMsW9CjRHv1AkHv1%2Fxn4KVwV%2FW7SQV0GR0O7nWMKQYvM754sBFnfPx4%2Fz33qG8XeO%2BiSHkI%2BHiNToIEcDvAliFoMkKaY2J56W2ikaP1YWhDOGaFZpoWsn0bzLflCaQiG0%2BATHc1KJHf1GJL4ucMhqF2zyuiOv0vom2RoX1ubBK47APVFwaVUo9AJDGcLfg%2FH3gwitGJygY6pgEFXWRsc%2FD0LhYd5Y4vLSouY62pbKbUcG0REn4%2F5GuxnBM2hDMw8VAYpJK56iEFIxEMHr6953ZOsxIfDyxXuFaDKsfW2NRZ%2BVHKZK72DS54PwJpxAjwa4KEgGQeuX%2Bj4RFskVB3vX0zaySm1voUPjuSQB4kIXJ7zLM3qodDbc%2B1dxGt%2Fw6rCHsgi9REuG6dtnVT6aFH8qu9C7bLhwL4%2B3W3VReosml9&X-Amz-Signature=217e46998828f6b8ab6bb737d1d6e9adca8a81088186eaed50ae58e6d9533fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4WDHJTQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjmgLm1bj%2F7TzOfJyjST%2Fog9rVAnnEV%2FWtYOMZTOP13AiB07HdsI0aNGP2CuAQGNZhX50vBulxWhWbj6LjlA%2BNQsir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkqnh0GRTU21TDSIbKtwDo7V1t8j5UM4XBQs4fr%2FetGm8TJhznpDP6k%2FVx7eEBJL5pha%2Fx8fw7hJeexmepS7mhV1SZ%2BdHmJTRb%2FpMg7qz7KRdKYgXXscZwCXyBj7iFlggxeWjTNizeyFVFSyJwxS%2F8QsCUU0J3S6g%2Bf7R20jWCnQAqUue7%2F39huVarGkbt1tvhKjuKmu5ApTEpQ2di4B8fl7QzYadcA1n5LXO4deNtnHAF%2BBxs81dko1j00W3pvz%2BUoJnoNw48FyG7ffNB%2BxWQMsJzRl%2BcBbg3i6rn4XQtWiLMlOuhGW47ajdpjqIC%2BaIXRNZ1XoZCajuLRN%2B%2FGzFAlFB8UaQd%2B9E%2FBdAEK9y%2BvywgQZckkz9%2BkDqgQ03HCCGGNtJIkvrl9ql4ckx3LRqplURooQySl3B21mcicZbY87d0HpMXVR27LbZimQyylzOSG8AjPw70ca2OXMsW9CjRHv1AkHv1%2Fxn4KVwV%2FW7SQV0GR0O7nWMKQYvM754sBFnfPx4%2Fz33qG8XeO%2BiSHkI%2BHiNToIEcDvAliFoMkKaY2J56W2ikaP1YWhDOGaFZpoWsn0bzLflCaQiG0%2BATHc1KJHf1GJL4ucMhqF2zyuiOv0vom2RoX1ubBK47APVFwaVUo9AJDGcLfg%2FH3gwitGJygY6pgEFXWRsc%2FD0LhYd5Y4vLSouY62pbKbUcG0REn4%2F5GuxnBM2hDMw8VAYpJK56iEFIxEMHr6953ZOsxIfDyxXuFaDKsfW2NRZ%2BVHKZK72DS54PwJpxAjwa4KEgGQeuX%2Bj4RFskVB3vX0zaySm1voUPjuSQB4kIXJ7zLM3qodDbc%2B1dxGt%2Fw6rCHsgi9REuG6dtnVT6aFH8qu9C7bLhwL4%2B3W3VReosml9&X-Amz-Signature=c14ca4abc0542e6ecc6f248488323a5da1c4c732e94c81e856e6895cce2fb956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

