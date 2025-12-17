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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQN2Z2GB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb4rpT9FFyCygAgs9%2Flj4MmttNcY0OZ1ceAkLtvo4jvAiEA3kmrI%2B%2BkWZ3UIYJpwKSIccnHkuK%2FygJqVIr98T5D2IYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFgnuTgzpQeg0GpQHircA4M4kqxz6of35TP0FO47Cr8szEPmTqAcWxA4tbQUvknGAs3%2BNUtSIIX%2F67EVGfb2fap7SF%2BXZVFvUPZ%2F6zYu16AEKOD8mGK%2BM8S%2Blm%2Fyk4cDWtlFjYHjEnkP0ZZmLbG23PPdghamdiKeGBRRturOwFfWi5l0buycSkdey5dykMyU3bq3F61vikKtNOXdLfgnJUCcVzH7e15xCOtUTY%2FXBfsCvwgne5Shm7%2FGpzrx%2BOF61lJs1vNJFkbzv%2BGh1CDQQNfULlzEI5XcVfqkprcSASK2mgh65JcFJ%2FKWGAoPrswqRs%2B9zMRezA3IjaqxrE5ow2yVpOfJSxwyBj5qvETeiW2YWju%2Fxf7ZK%2FiaCDxjx8HnHCKz3zVt%2BHb7cFAA3s07eTp5wQuJg2S3SY%2FFV680rzNmAQtBIQTz%2Fxqa0ee5JFc7bBmrE%2BeZic3hRvLqV6bgv75QnCN7J93GSWfMcrk2SKOSJufpgUN9l2YEBGjSqqziGEeVK%2BImE6q5Zyix4v1OP%2BncjDl9PWoIhMGZQGNs33%2BvAGEohQhadb%2FG%2FF0dtNm4OiEx5i%2BIooK41dIRhAK3%2FxmsQwO7Kzs4aj4f15kLzZknJN%2BCk821TZld7Sr8AispkDcn8OypDqMgmbqHMOfGisoGOqUBPjiyL5MVCOGnY03cBPzzyGJYlmyM3n%2FNgUWaCm22a786rFaQyGv3ABFenB0WOIwPioO4HXUpkuhaVbDQzcaTw1hd4%2Blyac8NhOexzuHsF1XP3Z4sBtnDRX6o4EUuC7eAAWYdDEwOBnsD5zn6kj49p7juFmMJgDqevnjlT72TRcP3HYeGODbPMZPcwgwyaZ49GS0YOzL6ftKAeoOWP8aeNbfxqDTR&X-Amz-Signature=9e22205deb814a20c70d50c99cde145631f84617c644ce040163010528713934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQN2Z2GB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb4rpT9FFyCygAgs9%2Flj4MmttNcY0OZ1ceAkLtvo4jvAiEA3kmrI%2B%2BkWZ3UIYJpwKSIccnHkuK%2FygJqVIr98T5D2IYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFgnuTgzpQeg0GpQHircA4M4kqxz6of35TP0FO47Cr8szEPmTqAcWxA4tbQUvknGAs3%2BNUtSIIX%2F67EVGfb2fap7SF%2BXZVFvUPZ%2F6zYu16AEKOD8mGK%2BM8S%2Blm%2Fyk4cDWtlFjYHjEnkP0ZZmLbG23PPdghamdiKeGBRRturOwFfWi5l0buycSkdey5dykMyU3bq3F61vikKtNOXdLfgnJUCcVzH7e15xCOtUTY%2FXBfsCvwgne5Shm7%2FGpzrx%2BOF61lJs1vNJFkbzv%2BGh1CDQQNfULlzEI5XcVfqkprcSASK2mgh65JcFJ%2FKWGAoPrswqRs%2B9zMRezA3IjaqxrE5ow2yVpOfJSxwyBj5qvETeiW2YWju%2Fxf7ZK%2FiaCDxjx8HnHCKz3zVt%2BHb7cFAA3s07eTp5wQuJg2S3SY%2FFV680rzNmAQtBIQTz%2Fxqa0ee5JFc7bBmrE%2BeZic3hRvLqV6bgv75QnCN7J93GSWfMcrk2SKOSJufpgUN9l2YEBGjSqqziGEeVK%2BImE6q5Zyix4v1OP%2BncjDl9PWoIhMGZQGNs33%2BvAGEohQhadb%2FG%2FF0dtNm4OiEx5i%2BIooK41dIRhAK3%2FxmsQwO7Kzs4aj4f15kLzZknJN%2BCk821TZld7Sr8AispkDcn8OypDqMgmbqHMOfGisoGOqUBPjiyL5MVCOGnY03cBPzzyGJYlmyM3n%2FNgUWaCm22a786rFaQyGv3ABFenB0WOIwPioO4HXUpkuhaVbDQzcaTw1hd4%2Blyac8NhOexzuHsF1XP3Z4sBtnDRX6o4EUuC7eAAWYdDEwOBnsD5zn6kj49p7juFmMJgDqevnjlT72TRcP3HYeGODbPMZPcwgwyaZ49GS0YOzL6ftKAeoOWP8aeNbfxqDTR&X-Amz-Signature=89d15bf1b81fc3e5c913c8a33f4a23f7655829bd713d2d55fca36fd9a8886f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

