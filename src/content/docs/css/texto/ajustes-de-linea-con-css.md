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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2OF6N6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPsuK1JpTo5wy%2B4X7swjEE2je8O6rJ7UwzCRCE%2FC5D1AiAuBf0i82EcDULw7ve78kCjmFJdQRRrlummY%2BRb7Keypir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2FBsQx%2B9ZqjJMfgM7KtwDOdHNuCLJAuPP6LKJzO%2Fbl1JMhE0tvMnUDAowkDTd9sWoa6tty9G3iboBqgHfk6DMCBgrdj208Tb7DAz2%2FUJyTTDrNflazCaHZ3pCNvAXMOo7nQLhrImBseLozSSirlLx3i1DumHx9cgr%2FehFR2auFONUuzaQQS8Ac707POT3uzeLGbQTFnxzoHXj8lhelvhKCiDGgsW2MG3LwgIJd21FA1%2FMQHwwEqaFWMzsNJY%2FAX9LDLIXWL277SO%2BcMj50yMjSI%2FbbR8l9OmRhYAq2gLYc5hEQCcMssYjcSCfevRBqNFJmn55mWoAbR0MbgxdAGpNSe%2FONmzsSWfJNdaZZyG1ha0T9bwMtb0AUbhVq5aXGzv5VkHGSfQlOxrJIyFtqsEvmDChdrZfV%2FMxmNiEiI8v13GzorzkIxeyl0tweVYlUL6YYUa70fkWppXaF4CQST8q0Y6JG0uyPlSQwttODumrwAXSbaos5JGOh9NVskrqTgVZmWwQFAsUUZyt7VrtkweyjhXLwcyLUiE4j5qTfl9hwW6yls%2F4q7o0PAqPaclvzyKrPLp3ij%2Fx5iIuSzMEKYeaodrKz3R2ku87k4tMAZNGeG6L2V02%2Fi8C8aRxCnuqjnKO32ZrCIedTZKiC%2BQwl8%2BIygY6pgHM54o3NronvORi6Ipz0xiHqWCUUyDcCEqDn63IoGWeCbQwVpTIUbE6cYg67NIyRYdir%2B4gVboFEmzJeO4RTIDOMnN4nc8Ij0neQwftazWDSbyM6b8qPO0tnLLV4PudVkzGtNoasmvUAF485DUf61AkrLoQjRxZ0C%2FzdTZwFkeGC3jFgtbbtx4vdnnAQWAixOis1Kr4R90bXptBmeayZHZSrzVWwl6h&X-Amz-Signature=257984f1340c83960a661208a073d5a98c7fcb4f136f303be7b7145fe7b10cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK2OF6N6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPsuK1JpTo5wy%2B4X7swjEE2je8O6rJ7UwzCRCE%2FC5D1AiAuBf0i82EcDULw7ve78kCjmFJdQRRrlummY%2BRb7Keypir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2FBsQx%2B9ZqjJMfgM7KtwDOdHNuCLJAuPP6LKJzO%2Fbl1JMhE0tvMnUDAowkDTd9sWoa6tty9G3iboBqgHfk6DMCBgrdj208Tb7DAz2%2FUJyTTDrNflazCaHZ3pCNvAXMOo7nQLhrImBseLozSSirlLx3i1DumHx9cgr%2FehFR2auFONUuzaQQS8Ac707POT3uzeLGbQTFnxzoHXj8lhelvhKCiDGgsW2MG3LwgIJd21FA1%2FMQHwwEqaFWMzsNJY%2FAX9LDLIXWL277SO%2BcMj50yMjSI%2FbbR8l9OmRhYAq2gLYc5hEQCcMssYjcSCfevRBqNFJmn55mWoAbR0MbgxdAGpNSe%2FONmzsSWfJNdaZZyG1ha0T9bwMtb0AUbhVq5aXGzv5VkHGSfQlOxrJIyFtqsEvmDChdrZfV%2FMxmNiEiI8v13GzorzkIxeyl0tweVYlUL6YYUa70fkWppXaF4CQST8q0Y6JG0uyPlSQwttODumrwAXSbaos5JGOh9NVskrqTgVZmWwQFAsUUZyt7VrtkweyjhXLwcyLUiE4j5qTfl9hwW6yls%2F4q7o0PAqPaclvzyKrPLp3ij%2Fx5iIuSzMEKYeaodrKz3R2ku87k4tMAZNGeG6L2V02%2Fi8C8aRxCnuqjnKO32ZrCIedTZKiC%2BQwl8%2BIygY6pgHM54o3NronvORi6Ipz0xiHqWCUUyDcCEqDn63IoGWeCbQwVpTIUbE6cYg67NIyRYdir%2B4gVboFEmzJeO4RTIDOMnN4nc8Ij0neQwftazWDSbyM6b8qPO0tnLLV4PudVkzGtNoasmvUAF485DUf61AkrLoQjRxZ0C%2FzdTZwFkeGC3jFgtbbtx4vdnnAQWAixOis1Kr4R90bXptBmeayZHZSrzVWwl6h&X-Amz-Signature=49fe1b5ea2208a7a8911df64d746f2e3bafcd481d6558666c27e1354d936c1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

