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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOUM7BR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhiKQeMC8NhSjj4oo96HZRzDJFrbBu4dnYtn93jt9E3QIgJlanmCihihwuAntINYC66Y%2F6FEQs6pc%2BtULkQWGLwZMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlWYiAWO6RM8geLjircA4src2ouBp3UMISTlaHg2HFcDprWRv%2BVtZXN3%2BZzDeJJkd5DX3R%2FjH%2B0%2FI4I0Hwhx%2BDj36Jra8gTptPyNFRKhJbOoiSWmYzrzA3sH1jV11eNOCkftdc9vxeuZ1K3r8NE0%2FnL%2BuUFTV43oDdxYWh7xjufh%2BLrwcYvkDBWooMfSfU8rPDIcPH%2BCYUhFhfYqv2XD%2BtgSNr8aBkxqgYIE1hchqm44BvZRjHhzSQJprzixS8vOMTW6KIjInbiDZJQpvTFIiDpdcEtz8zgOE9obLk8IMj1biMBeQ%2FaGsPTfgnA1lKnY72A0Ffo4XGZBHTnC%2Fc1J6B6tVLwowo%2Ff3pFU0MdycX4kjd1VnnJrnBPBnWT%2FIxlnO%2B1lZyfe4e5UsZj23%2F3Nq%2F5MsYifW45kkY6tTtULBJygFi5ynzeiQ9dXQEa9dUR0%2F0F3rgvZJHdb0Xwz%2B6nlX4QDpo3FmtWRMZo8TqnZh2wRb72qlKZ0b3%2F3ZkZpP8XiDIS0BB%2BXWEfcgdh8f7rRfZhhA4AjgF8ZgKwdhqB3ZCj%2BDm3cOwTxq3Bv%2Fo1xFw1CTWr828sRBZLhc%2FymK0kv184IyOUmN8jFamUFx%2F1LEviF2%2BMZCLM%2Bw%2B%2Bf5QsBB9UPcIjVN%2BfQnu5%2Fu9wMLqgi8oGOqUBZvSAXbOo8OeT%2BJPdNC9s8aeAkTmdmctYXfOFEji9jRcm8KZ0ZIajP%2BOj8KdcQ3fKBMQUThfJVDcipozugDC2IY5qkQusABwVsBzQMJtx5Ir9OxvVwcIUFYAg1pyoe5cmJ3VyGD1t2P0NNBQg94Y%2BmbCoIYEBryso9SYe8Y7kSe6nVJBRdx2NkGxLSEIuues%2F0NE%2FA6XNQz5hdH%2FZlxk4EMIkGFTW&X-Amz-Signature=81a69ec51b124c81396e1eec9b157ca38e452ee16b9ef014c2f15779b2ad3243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOUM7BR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhiKQeMC8NhSjj4oo96HZRzDJFrbBu4dnYtn93jt9E3QIgJlanmCihihwuAntINYC66Y%2F6FEQs6pc%2BtULkQWGLwZMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlWYiAWO6RM8geLjircA4src2ouBp3UMISTlaHg2HFcDprWRv%2BVtZXN3%2BZzDeJJkd5DX3R%2FjH%2B0%2FI4I0Hwhx%2BDj36Jra8gTptPyNFRKhJbOoiSWmYzrzA3sH1jV11eNOCkftdc9vxeuZ1K3r8NE0%2FnL%2BuUFTV43oDdxYWh7xjufh%2BLrwcYvkDBWooMfSfU8rPDIcPH%2BCYUhFhfYqv2XD%2BtgSNr8aBkxqgYIE1hchqm44BvZRjHhzSQJprzixS8vOMTW6KIjInbiDZJQpvTFIiDpdcEtz8zgOE9obLk8IMj1biMBeQ%2FaGsPTfgnA1lKnY72A0Ffo4XGZBHTnC%2Fc1J6B6tVLwowo%2Ff3pFU0MdycX4kjd1VnnJrnBPBnWT%2FIxlnO%2B1lZyfe4e5UsZj23%2F3Nq%2F5MsYifW45kkY6tTtULBJygFi5ynzeiQ9dXQEa9dUR0%2F0F3rgvZJHdb0Xwz%2B6nlX4QDpo3FmtWRMZo8TqnZh2wRb72qlKZ0b3%2F3ZkZpP8XiDIS0BB%2BXWEfcgdh8f7rRfZhhA4AjgF8ZgKwdhqB3ZCj%2BDm3cOwTxq3Bv%2Fo1xFw1CTWr828sRBZLhc%2FymK0kv184IyOUmN8jFamUFx%2F1LEviF2%2BMZCLM%2Bw%2B%2Bf5QsBB9UPcIjVN%2BfQnu5%2Fu9wMLqgi8oGOqUBZvSAXbOo8OeT%2BJPdNC9s8aeAkTmdmctYXfOFEji9jRcm8KZ0ZIajP%2BOj8KdcQ3fKBMQUThfJVDcipozugDC2IY5qkQusABwVsBzQMJtx5Ir9OxvVwcIUFYAg1pyoe5cmJ3VyGD1t2P0NNBQg94Y%2BmbCoIYEBryso9SYe8Y7kSe6nVJBRdx2NkGxLSEIuues%2F0NE%2FA6XNQz5hdH%2FZlxk4EMIkGFTW&X-Amz-Signature=285b2579ee2bccf170e1e38f8fc58089226052f7f5acefed468908401a7a456b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

