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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAXKKBB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfEibNbRAkG01ESUxljCEhfbTLKUwusJ1OLrSBzV687QIhAJGiHdwZM5AEMbhNOUQiiG6T9ZgYNS%2BFkPDfo9kS8%2Bt%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgwawEmPt7GGjz8zmxEq3AMNEJVCKwcb16yxZjtrjpBP4q5dRU0sao92dj9A3ZPcxOGVFtpcf4dJ6SXIo3oELCmxrd%2BkBKbe02FVqy7J%2BhX0ljyBCaUEVEygIDkPgMqVdnw4LRVR%2FRm%2B8z4EV7aJIrMf9vp0acPOUyQgWnS6bEuGYOXrdO6B2fVeLpj0pl28ebvM9oIO%2B%2FCiJ8KX3Z%2BNPeiY8KYLn9PrNo5NTyjrWnn8z7xRSW97hfadq0jC%2F8Hm%2FHmcz%2FpLw8FSOFfNqM7zU5%2FYJj8yeKAGAQaVqGBRcQfIuNlqKSPx%2FUDFzR%2BtNla%2BKDSGhTl5P%2FCezoXYHJT7tW9b2a7%2BefWmzrCUc3%2FOo7VIdq4pA4nkoLDJuVK%2B%2Bf77gT8OtukPUJW%2BGHd06aAJ1lHq%2B%2BMX21FxTRpno923dxs7ca%2Bvg549cUYNLuos%2B9QHCApPt2MXOoagNm3oeXyWlxL371%2F7sRm6EliWoDUlt3qvZSSHlHLgm93Z7x7CrzjamSagph%2FfkliuqVM4TAP%2FcGjwYwbZJ2%2FkbrGffdimoDmXuU2bT3oM0QZraiIgS9cghYABhlq0qy9M7tbNI%2B8ZqKPAIAPNI0T0w9N%2BaCVv4R59dEHXnDMF61kdfr7aqeEc9LgEy21MkWLsqA5raDCR8YnKBjqkAQxjU8iwxBsrVMdNjSyoGhCn9e2x0vLCAuQX%2F6pBsmUu31sI41NmM7kkepqEOJv8uZ%2B5zY%2FI2%2BROhNaRV0ZpQ8WezTtAs6jYRyRGAGHHhjoARbhHIFANFSjTsLrIQJazZWD2G1wVqAGQLaAviE5XtS%2FE3%2FBBU7RzKf6A%2Bfy3kbGgtwIqlNihLshhoOo%2BoVohgpTICslQB4cldeHlAPMg0mVz01Bn&X-Amz-Signature=298df0b9accc86316dfd6086a9f7a737c34c2cce3c7151f0b99cf630589b9329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XAXKKBB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfEibNbRAkG01ESUxljCEhfbTLKUwusJ1OLrSBzV687QIhAJGiHdwZM5AEMbhNOUQiiG6T9ZgYNS%2BFkPDfo9kS8%2Bt%2FKv8DCHsQABoMNjM3NDIzMTgzODA1IgwawEmPt7GGjz8zmxEq3AMNEJVCKwcb16yxZjtrjpBP4q5dRU0sao92dj9A3ZPcxOGVFtpcf4dJ6SXIo3oELCmxrd%2BkBKbe02FVqy7J%2BhX0ljyBCaUEVEygIDkPgMqVdnw4LRVR%2FRm%2B8z4EV7aJIrMf9vp0acPOUyQgWnS6bEuGYOXrdO6B2fVeLpj0pl28ebvM9oIO%2B%2FCiJ8KX3Z%2BNPeiY8KYLn9PrNo5NTyjrWnn8z7xRSW97hfadq0jC%2F8Hm%2FHmcz%2FpLw8FSOFfNqM7zU5%2FYJj8yeKAGAQaVqGBRcQfIuNlqKSPx%2FUDFzR%2BtNla%2BKDSGhTl5P%2FCezoXYHJT7tW9b2a7%2BefWmzrCUc3%2FOo7VIdq4pA4nkoLDJuVK%2B%2Bf77gT8OtukPUJW%2BGHd06aAJ1lHq%2B%2BMX21FxTRpno923dxs7ca%2Bvg549cUYNLuos%2B9QHCApPt2MXOoagNm3oeXyWlxL371%2F7sRm6EliWoDUlt3qvZSSHlHLgm93Z7x7CrzjamSagph%2FfkliuqVM4TAP%2FcGjwYwbZJ2%2FkbrGffdimoDmXuU2bT3oM0QZraiIgS9cghYABhlq0qy9M7tbNI%2B8ZqKPAIAPNI0T0w9N%2BaCVv4R59dEHXnDMF61kdfr7aqeEc9LgEy21MkWLsqA5raDCR8YnKBjqkAQxjU8iwxBsrVMdNjSyoGhCn9e2x0vLCAuQX%2F6pBsmUu31sI41NmM7kkepqEOJv8uZ%2B5zY%2FI2%2BROhNaRV0ZpQ8WezTtAs6jYRyRGAGHHhjoARbhHIFANFSjTsLrIQJazZWD2G1wVqAGQLaAviE5XtS%2FE3%2FBBU7RzKf6A%2Bfy3kbGgtwIqlNihLshhoOo%2BoVohgpTICslQB4cldeHlAPMg0mVz01Bn&X-Amz-Signature=66dff9cff01c611e3d21a238fb4d8fa289ee12bb285f6c157bc9699656277247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

