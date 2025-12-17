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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAZO53O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfBC7zhSbq5K2V0OB6HnN05d%2BPujE95dzZdgo5D5SOWwIhAKz%2Bc6V%2FfyU21zDwPtOnKzGlmi61R0z9IF6sTs3NhBhyKv8DCHMQABoMNjM3NDIzMTgzODA1IgyNVDoobj0zL0ElcrQq3APQJF91hkpZ5D4joQ3YVE5egEdfUjffFbjUPZ0w4QfQHRG1l73b%2BKU%2FDzNnUGvsAfhb2GmRsRC6TQorzY9JYDK%2BPV96MMMJ2%2B%2FkbvXiUEWI5aCB072pn0eBOjvPHpXPHLKDjtD4PiII1SXfnIPVETRzX7BJL7E6vudzHGAWXzTwSW3t2FumCF%2BXw8kXH2Q5OuXzI0%2FFvd7v3WzYQsQxmptXD95SMchS1%2BQsalXEJXWSlhDjnM%2FL%2FxykD7A1Y27FXhJAoN3joJ1cQ4WBaCY7Oxw1vp89S8Qz6Tfpq%2BlMXSpD7Neo%2Ba83a5bXLm4m6rqjRuLOe1EJz%2Bq0g%2FrItNf3PTnn9BLnwcUVU%2BFJQdbATvSJdbwjYmAuSHsg68pXp9FrG%2FcJMvMPUPq2jrPuVqSSMpLyqvLlCCh64Shw8o0rZmstKJqHfxNlWQz6%2FX0wk19kNaBZsYg%2BSCBTzOFhukDf1HFQwslrmmjJq6Gwb6cdlMH8L9BB7097J6aGRS3RTREss3BbL%2BJVQpahUGTBux%2BJ3E8T45ptyCt2BJiTaEG7dF1XNrZeFjkRUjaJrwGpRZzvVcugZ%2BWJ%2FZp2p0XUu4zHJ1vFdhxWmPNY%2FdmhhwdSsrV%2B6sTpfqrLGVTTpUunAzDblojKBjqkAT9P0nsE4e4tVIx4HjhPJnaCsUoByxvvSWw%2FmGbfG%2FgtWo4rPLxo81M7YYgv81ErKU0W7P9GVLWCDIhHf4OA%2BaArwmfdi7z3777WN%2FSzKC4m6GuCgZwjeZPhie3jxC48SV05SW82C6%2FrwDPtB63lcsGrmdmKOMPV64g0TA9eLONL4Ghpv7fIw1ugO1LfEKAWrnn4TCixTTX%2FV9Wxy59SNE1DmXOV&X-Amz-Signature=e6b61ab7dbb57a7cd575c343508253728779dc12e4ae3f48408db6eeedfd2510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZAZO53O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfBC7zhSbq5K2V0OB6HnN05d%2BPujE95dzZdgo5D5SOWwIhAKz%2Bc6V%2FfyU21zDwPtOnKzGlmi61R0z9IF6sTs3NhBhyKv8DCHMQABoMNjM3NDIzMTgzODA1IgyNVDoobj0zL0ElcrQq3APQJF91hkpZ5D4joQ3YVE5egEdfUjffFbjUPZ0w4QfQHRG1l73b%2BKU%2FDzNnUGvsAfhb2GmRsRC6TQorzY9JYDK%2BPV96MMMJ2%2B%2FkbvXiUEWI5aCB072pn0eBOjvPHpXPHLKDjtD4PiII1SXfnIPVETRzX7BJL7E6vudzHGAWXzTwSW3t2FumCF%2BXw8kXH2Q5OuXzI0%2FFvd7v3WzYQsQxmptXD95SMchS1%2BQsalXEJXWSlhDjnM%2FL%2FxykD7A1Y27FXhJAoN3joJ1cQ4WBaCY7Oxw1vp89S8Qz6Tfpq%2BlMXSpD7Neo%2Ba83a5bXLm4m6rqjRuLOe1EJz%2Bq0g%2FrItNf3PTnn9BLnwcUVU%2BFJQdbATvSJdbwjYmAuSHsg68pXp9FrG%2FcJMvMPUPq2jrPuVqSSMpLyqvLlCCh64Shw8o0rZmstKJqHfxNlWQz6%2FX0wk19kNaBZsYg%2BSCBTzOFhukDf1HFQwslrmmjJq6Gwb6cdlMH8L9BB7097J6aGRS3RTREss3BbL%2BJVQpahUGTBux%2BJ3E8T45ptyCt2BJiTaEG7dF1XNrZeFjkRUjaJrwGpRZzvVcugZ%2BWJ%2FZp2p0XUu4zHJ1vFdhxWmPNY%2FdmhhwdSsrV%2B6sTpfqrLGVTTpUunAzDblojKBjqkAT9P0nsE4e4tVIx4HjhPJnaCsUoByxvvSWw%2FmGbfG%2FgtWo4rPLxo81M7YYgv81ErKU0W7P9GVLWCDIhHf4OA%2BaArwmfdi7z3777WN%2FSzKC4m6GuCgZwjeZPhie3jxC48SV05SW82C6%2FrwDPtB63lcsGrmdmKOMPV64g0TA9eLONL4Ghpv7fIw1ugO1LfEKAWrnn4TCixTTX%2FV9Wxy59SNE1DmXOV&X-Amz-Signature=321508c96a79f9be5edaef8ed611a33ad2d531e8118524b4468964376795ac0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

