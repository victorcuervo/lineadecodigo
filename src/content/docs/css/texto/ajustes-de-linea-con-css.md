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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGE3WXGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6o%2FhYP9hTIf8ifmYNkKa9sjiEE6Z8yeq3tZ1SD9AM0AiEAnOb2OH%2FGjK9Yi172M2iOdWUh%2FqwhHHQPoRC4NvO4cvgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBCApE8wWl%2BNEfquvircA9IWi8ppVkAzOz5IVLU0a%2FBvUwws3ySt1oIzio%2BP5wN9nutzuBCQ%2BJ7nPe1p4arK9BCoEEhMinhlcamzOhufqb2CcuiD8nQgVF1xv3o6%2BGj4lvLnCI1Zx7D9Slx2pAUtas1pIu3Z6u%2FGX00lj9pfrURwnJdR9l5e2LiuBKvNfDBAjjWfO%2BHaILKa0j64hxWYGO9WOOW7joT5hDGc3t0QC83%2B3X6LYrK5Lp6yK1%2BRB4RLcAXch4jLMzXFAfPLp7%2FN0PkN835In%2F10NnW61KR8ebnhgpgwxZeHmkc%2BfJxsBw46JL88CFZCCjzM5l2it9fZyp4h1IfEo7bd0Et9frmmb3R%2Be4QsyTubi2RRBDRKxbe%2BFQQoHrNlM8y%2FGAMPFplVCSBkfP1AnSMQSMxdCqHX%2BM%2FUGmlqcNTfnLyJ%2BPDD5ueJ%2BBe0lTx7%2FO14rfbKmyAfbk5HL%2B2g%2BIah%2FNp21HbDQgfS9Ui1Sspv5Zfq%2FyDAucV0Y0Ta3n1tVhWEF38LcM4%2B5OSnD3VBdheoVyacMtxR8Abl6hzx24hQjMXIibP0bhRGRkX3MdqCpk1B8IqI4dlYBzBxHgJghiJAoGLFIm%2Ba23rpml0BxBBqxxVhwJQpe2AGodGxOWHTqltj6eF9MOHGisoGOqUBjEj79pm%2FPHBrvadZA8DCeNuucS1BedaVk9q4vAJo1g9y8O5JW4vaOtC3xTrj8Sm9kflGSXLba8EFe7QXmI%2FFNqj0oF%2B1zcMymnPeSRqevMxWSFMfCMQMDabT6GcXHdjbnOuABL2Io%2BAUyGSCynI5i%2BZKLRgtmHM4VTk0RVyJkgUnhj%2FFoGP7ndXsa6mcuXWPxANaPa0RKsuezPa8yNt3NGGEaxce&X-Amz-Signature=9203fdf788b9592b04ae10af4aa429fd686c1aed4b1b36ad4b8656d49def0b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGE3WXGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6o%2FhYP9hTIf8ifmYNkKa9sjiEE6Z8yeq3tZ1SD9AM0AiEAnOb2OH%2FGjK9Yi172M2iOdWUh%2FqwhHHQPoRC4NvO4cvgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBCApE8wWl%2BNEfquvircA9IWi8ppVkAzOz5IVLU0a%2FBvUwws3ySt1oIzio%2BP5wN9nutzuBCQ%2BJ7nPe1p4arK9BCoEEhMinhlcamzOhufqb2CcuiD8nQgVF1xv3o6%2BGj4lvLnCI1Zx7D9Slx2pAUtas1pIu3Z6u%2FGX00lj9pfrURwnJdR9l5e2LiuBKvNfDBAjjWfO%2BHaILKa0j64hxWYGO9WOOW7joT5hDGc3t0QC83%2B3X6LYrK5Lp6yK1%2BRB4RLcAXch4jLMzXFAfPLp7%2FN0PkN835In%2F10NnW61KR8ebnhgpgwxZeHmkc%2BfJxsBw46JL88CFZCCjzM5l2it9fZyp4h1IfEo7bd0Et9frmmb3R%2Be4QsyTubi2RRBDRKxbe%2BFQQoHrNlM8y%2FGAMPFplVCSBkfP1AnSMQSMxdCqHX%2BM%2FUGmlqcNTfnLyJ%2BPDD5ueJ%2BBe0lTx7%2FO14rfbKmyAfbk5HL%2B2g%2BIah%2FNp21HbDQgfS9Ui1Sspv5Zfq%2FyDAucV0Y0Ta3n1tVhWEF38LcM4%2B5OSnD3VBdheoVyacMtxR8Abl6hzx24hQjMXIibP0bhRGRkX3MdqCpk1B8IqI4dlYBzBxHgJghiJAoGLFIm%2Ba23rpml0BxBBqxxVhwJQpe2AGodGxOWHTqltj6eF9MOHGisoGOqUBjEj79pm%2FPHBrvadZA8DCeNuucS1BedaVk9q4vAJo1g9y8O5JW4vaOtC3xTrj8Sm9kflGSXLba8EFe7QXmI%2FFNqj0oF%2B1zcMymnPeSRqevMxWSFMfCMQMDabT6GcXHdjbnOuABL2Io%2BAUyGSCynI5i%2BZKLRgtmHM4VTk0RVyJkgUnhj%2FFoGP7ndXsa6mcuXWPxANaPa0RKsuezPa8yNt3NGGEaxce&X-Amz-Signature=9fc5fbb47e21bf558fc5af03b153e2b36e4cf4451179580a43dbe8b5f38092e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

