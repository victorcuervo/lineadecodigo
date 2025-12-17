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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6YENVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9T%2F40Adijk29J5ZolFo6nDu9ZfMsm%2Bfgy0DvpUORJzAiAjxs0fH9Aukgfx%2B3BIlAICDqv%2FY%2FCaaJHDakLH79OxQSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJmUx0lrv7w5ChfqeKtwDfG9%2BtKgyTXkBnhf%2BVi%2Bd2NaHy8w04slJXep7YcXJuMa%2FZ1HMbfVwQVUdd8a5vXvfr9TVDNpHpwU4Irjeft7CBuGf25njPzst%2FgXA%2FbFx3tuS%2BIXiqijbIyNzK1CAv5tVAw3TiWfGt7SWh1T%2B0GosmUYiksv8sVU0XnYwhIyJlsQyd6OBwSqfu58QPdop2bdirl9bob0DLgsFKdma%2FipT37wqJhNqGmFYks6vKYF6Y6a4YQUQW4ixVfuh5vEJyCltq85F3%2FMoHxH8xTU2Ew8YnsxfwqZPrp46hn4fHduVLIJtNpODs%2B5O%2FCrSK5ux7E8KY3%2BnX%2FeSTguTs9Fa62XIdoM7Hy%2FL2JVTQvbGyy1izdcqjVfzv3hwOl71gH4UrzCkYeL0%2Fh9Loks92GW0onZ1ry2v0IUxYnMQai8BbAiu7M0pVZ17ORGjGsxz1PemdW0rTV237m%2BPs3j9W8GXs81rfpWxypGCyfMoRKBmi9T5fsau%2F%2BbrfvKROMEfOlzaS%2FtLSoRm9BWSe9IyXfqcYDwzHxSJWUb6ANOVm19%2BUmfyLSB%2Fig0APw4xt5nLJnMlVj%2FQ6jf%2FCSBH2eWVj%2BStMEPLbGEGzgsY2bGRL27ME%2FYlLdUdnzY8eyIpqiuqffkwh7eJygY6pgHxRryJZbzQGAtl5maHTfgbcZkpFLF%2FGIWaYgxtOhBbl%2FQ0kDdcJqpZpllnJQBW%2FZX1IMc0boBXgVZlC50%2BP8qtolzZqSGI1Y8dJ4T3IChlQojOoMduTnZrAgBbUfmoqZgC5mkfCNoq9Wudn10%2BhoTVvUNU%2BrAxqZ1VMl8GwIcAswFuag1bXb8pDfQxpRklJwbk5VYsK%2BSVAFRg7Y6ZtKLwNBjKklHS&X-Amz-Signature=3f944430ac96b655f06b7ff5a6cd1dc6cca035a32c749b205e51d3b4a395ac1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6YENVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9T%2F40Adijk29J5ZolFo6nDu9ZfMsm%2Bfgy0DvpUORJzAiAjxs0fH9Aukgfx%2B3BIlAICDqv%2FY%2FCaaJHDakLH79OxQSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMJmUx0lrv7w5ChfqeKtwDfG9%2BtKgyTXkBnhf%2BVi%2Bd2NaHy8w04slJXep7YcXJuMa%2FZ1HMbfVwQVUdd8a5vXvfr9TVDNpHpwU4Irjeft7CBuGf25njPzst%2FgXA%2FbFx3tuS%2BIXiqijbIyNzK1CAv5tVAw3TiWfGt7SWh1T%2B0GosmUYiksv8sVU0XnYwhIyJlsQyd6OBwSqfu58QPdop2bdirl9bob0DLgsFKdma%2FipT37wqJhNqGmFYks6vKYF6Y6a4YQUQW4ixVfuh5vEJyCltq85F3%2FMoHxH8xTU2Ew8YnsxfwqZPrp46hn4fHduVLIJtNpODs%2B5O%2FCrSK5ux7E8KY3%2BnX%2FeSTguTs9Fa62XIdoM7Hy%2FL2JVTQvbGyy1izdcqjVfzv3hwOl71gH4UrzCkYeL0%2Fh9Loks92GW0onZ1ry2v0IUxYnMQai8BbAiu7M0pVZ17ORGjGsxz1PemdW0rTV237m%2BPs3j9W8GXs81rfpWxypGCyfMoRKBmi9T5fsau%2F%2BbrfvKROMEfOlzaS%2FtLSoRm9BWSe9IyXfqcYDwzHxSJWUb6ANOVm19%2BUmfyLSB%2Fig0APw4xt5nLJnMlVj%2FQ6jf%2FCSBH2eWVj%2BStMEPLbGEGzgsY2bGRL27ME%2FYlLdUdnzY8eyIpqiuqffkwh7eJygY6pgHxRryJZbzQGAtl5maHTfgbcZkpFLF%2FGIWaYgxtOhBbl%2FQ0kDdcJqpZpllnJQBW%2FZX1IMc0boBXgVZlC50%2BP8qtolzZqSGI1Y8dJ4T3IChlQojOoMduTnZrAgBbUfmoqZgC5mkfCNoq9Wudn10%2BhoTVvUNU%2BrAxqZ1VMl8GwIcAswFuag1bXb8pDfQxpRklJwbk5VYsK%2BSVAFRg7Y6ZtKLwNBjKklHS&X-Amz-Signature=d0e1ca63dc576d661004ed7366519c8502909b7d4c0d0485faef59e85695b98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

