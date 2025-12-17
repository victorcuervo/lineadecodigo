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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H22NQOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoAbLOW1W96btyhchd38Qtgq8e4BOWKreSq8yytWsL8gIgYNHXXoMufFcxRO8QEUWkaUXF8mTRNQpxPN6Qsu%2FN8k4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFc5B%2FnJh%2F1FnFW4%2BCrcA%2FknLj%2Bf%2FxZr1cPxS9w9ldHQdyjPKuNvzUNfUjxDGQYxvoqHvapW6sh0nmoYIKzPvIVUQbGP5DeANxfoylO4xSuOeV3IrLif0qwgUavqZ6w1LLJnL9O9cABIfMr9lDBHReYywkS44uu71m7%2BX32LyF5DSevMMZDwcFqWBjfYsCT8uAP8C0Vmv%2FxrENt%2BZvEto5Plab1egtTXUpMjTYZU%2B%2Fd1CS6DSnVm42DAooNRh%2F%2Fl3K2xBxC02vwf8ufV1OwF%2FjIPO80ZPgITxguVdrBggOvcVaEFI1lht%2FeSBKL%2FKVqRi%2BEIng3OjtcXSjN9uVrACuKIF1Ho%2B7UoTKNcLEagZSDM6nEFynGlB7foEyuor7cUCkrTTNRXjW1trxDWIwwACSjUxI5XbJ4iX%2B9XBjcDKkyb8cWcViu%2FgC%2BRQg0T2VH3r8f8X47pXM6dwgB5cRMt82RWJM6tArZo3xrf5SEpczVsfCNqJ7cXxtLKxKAk20Dl%2F09TYLvya%2FUjfyG39HckVmhQXmUdmXMfjDj9xJqpgzyIaR25ivr67C7RaOQCP%2Fq9yqqBqZuxBycd1QuLl%2BERzVUsMDVxikaoCYkVKfVeoB0oBnEh1GFpdpXDDsaMVYk6wiJjQO8zYgm%2BmzoKMPHSicoGOqUBmmUP85Ac1tTXoLZWuvN%2BcfYs7c2JbWdhyU8sKtEmjuEw3Ifm9FbpMSfXCBRBxcijkpTiB%2FEVZKFh22K2odJPUMSxrsj545IqnWPfWWvp5qOGPsV%2F3KVXjbkl7DAlZBIfh0wk9cBKoPCkQSjbwWaCWroJl8%2FQn%2F3yLf4HUJTJo3Rt2lywsEiUNQ64TNeDuVyvLglc0bnrTeKLLRIB0qiQMn4gxNCM&X-Amz-Signature=3ad0de77f85b820a41a09575b9a37735215aa8214cb4989a7ec21231f165ea1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H22NQOP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoAbLOW1W96btyhchd38Qtgq8e4BOWKreSq8yytWsL8gIgYNHXXoMufFcxRO8QEUWkaUXF8mTRNQpxPN6Qsu%2FN8k4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFc5B%2FnJh%2F1FnFW4%2BCrcA%2FknLj%2Bf%2FxZr1cPxS9w9ldHQdyjPKuNvzUNfUjxDGQYxvoqHvapW6sh0nmoYIKzPvIVUQbGP5DeANxfoylO4xSuOeV3IrLif0qwgUavqZ6w1LLJnL9O9cABIfMr9lDBHReYywkS44uu71m7%2BX32LyF5DSevMMZDwcFqWBjfYsCT8uAP8C0Vmv%2FxrENt%2BZvEto5Plab1egtTXUpMjTYZU%2B%2Fd1CS6DSnVm42DAooNRh%2F%2Fl3K2xBxC02vwf8ufV1OwF%2FjIPO80ZPgITxguVdrBggOvcVaEFI1lht%2FeSBKL%2FKVqRi%2BEIng3OjtcXSjN9uVrACuKIF1Ho%2B7UoTKNcLEagZSDM6nEFynGlB7foEyuor7cUCkrTTNRXjW1trxDWIwwACSjUxI5XbJ4iX%2B9XBjcDKkyb8cWcViu%2FgC%2BRQg0T2VH3r8f8X47pXM6dwgB5cRMt82RWJM6tArZo3xrf5SEpczVsfCNqJ7cXxtLKxKAk20Dl%2F09TYLvya%2FUjfyG39HckVmhQXmUdmXMfjDj9xJqpgzyIaR25ivr67C7RaOQCP%2Fq9yqqBqZuxBycd1QuLl%2BERzVUsMDVxikaoCYkVKfVeoB0oBnEh1GFpdpXDDsaMVYk6wiJjQO8zYgm%2BmzoKMPHSicoGOqUBmmUP85Ac1tTXoLZWuvN%2BcfYs7c2JbWdhyU8sKtEmjuEw3Ifm9FbpMSfXCBRBxcijkpTiB%2FEVZKFh22K2odJPUMSxrsj545IqnWPfWWvp5qOGPsV%2F3KVXjbkl7DAlZBIfh0wk9cBKoPCkQSjbwWaCWroJl8%2FQn%2F3yLf4HUJTJo3Rt2lywsEiUNQ64TNeDuVyvLglc0bnrTeKLLRIB0qiQMn4gxNCM&X-Amz-Signature=f149e9eb72f05a9cb7c3de0b43fbf6532efd48313bf437aa3b06a8059526f70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

