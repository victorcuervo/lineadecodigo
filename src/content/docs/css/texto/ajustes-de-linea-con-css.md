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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKQ32LD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJODHuEUHXrWTp%2FfrFCWLHSKHXgFN%2FOPyqs2CDo0se4AiBFvC8ESEBnLDABi5W4yeJYlZsXdrEJ6wkdYZcgvTWeeyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcyBNqUqGpHnL%2Bw9fKtwDVKM8Mb9Xx%2Fr2dxgzA2hAxsma6m2klU72nFwxZCjJOy4WV%2FVbICFSsU5UFBTpBQVg%2BZ91Ow%2FYOzraPqxsS1OSa%2F6EkThGydJSz8zRavCEvq7uzqhDRAVFxy5H2hmIyc0s%2FNJFpcZThtzOxg5TJkLZ619z2i5hjiaZwDBT4uCleYDDNz%2FEsZe96tTKTx4lN04%2BpBueXiQoijIITqf07elAoAasDqW543RtJiZY91pB98miUeFlsAWd7z7zdj1%2BE%2Bx66m68hp5PSK3sIMsh%2Bj5ejYvbGrIPn6JPzxFVOR28oaxK7GHudg9kJPcX2sL5sYqy5PLPswTYPngTrUr3IRPS1MlbPHyYFgTLs51qya5JzDdJhnSqlKMaXu%2BeV%2BmU%2FZGx7t%2BQL8Fe%2BRn%2Fuun5XtuDWwGn06Onae%2BDvo0SqaiCqS%2BJx3O6z4lhsf9htVxUXDNALWAnHkF5v%2FhpY6zk%2BBg%2FT9md69BB34H00UiaQzHWV3OwJxLq08aME23BSNX3RhbjU4NMH3fnuT4UhQElQGM4n904PZ36f4ILOOhqlXlzwYV3netC4GSGfVaovsddj1t90Ba6c3OKaQgJtyAFd7AqFdVBXp6ZFUpvHRBOr6jUu2U695xXZH0BiQMTQY8ws4uMygY6pgFz7FCpOyP5X7Hhn09Ka6Is38deMlIYnFjjJLX1341rFnCmz9IeODgjLPFtQ%2FG3lh2Vi1XKbkfWSs61dl4iIvIMt3mwh1DcHUkPojyJGSST3lbuYr33CsQRgQYJQySVG8NO15bzoe30HSop%2BLW16LrxiU6rw8ffecW1u%2F7rWZBctGaKiaFh2aQZ%2BtXH9mxo73PcYUjAtMP8vsHxWmKSx1pVJq2QpBbl&X-Amz-Signature=00b34bf4a41dd3a7fa59e251cd31a3344b01633f79aedaa7cd91751b519a9324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKQ32LD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJODHuEUHXrWTp%2FfrFCWLHSKHXgFN%2FOPyqs2CDo0se4AiBFvC8ESEBnLDABi5W4yeJYlZsXdrEJ6wkdYZcgvTWeeyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcyBNqUqGpHnL%2Bw9fKtwDVKM8Mb9Xx%2Fr2dxgzA2hAxsma6m2klU72nFwxZCjJOy4WV%2FVbICFSsU5UFBTpBQVg%2BZ91Ow%2FYOzraPqxsS1OSa%2F6EkThGydJSz8zRavCEvq7uzqhDRAVFxy5H2hmIyc0s%2FNJFpcZThtzOxg5TJkLZ619z2i5hjiaZwDBT4uCleYDDNz%2FEsZe96tTKTx4lN04%2BpBueXiQoijIITqf07elAoAasDqW543RtJiZY91pB98miUeFlsAWd7z7zdj1%2BE%2Bx66m68hp5PSK3sIMsh%2Bj5ejYvbGrIPn6JPzxFVOR28oaxK7GHudg9kJPcX2sL5sYqy5PLPswTYPngTrUr3IRPS1MlbPHyYFgTLs51qya5JzDdJhnSqlKMaXu%2BeV%2BmU%2FZGx7t%2BQL8Fe%2BRn%2Fuun5XtuDWwGn06Onae%2BDvo0SqaiCqS%2BJx3O6z4lhsf9htVxUXDNALWAnHkF5v%2FhpY6zk%2BBg%2FT9md69BB34H00UiaQzHWV3OwJxLq08aME23BSNX3RhbjU4NMH3fnuT4UhQElQGM4n904PZ36f4ILOOhqlXlzwYV3netC4GSGfVaovsddj1t90Ba6c3OKaQgJtyAFd7AqFdVBXp6ZFUpvHRBOr6jUu2U695xXZH0BiQMTQY8ws4uMygY6pgFz7FCpOyP5X7Hhn09Ka6Is38deMlIYnFjjJLX1341rFnCmz9IeODgjLPFtQ%2FG3lh2Vi1XKbkfWSs61dl4iIvIMt3mwh1DcHUkPojyJGSST3lbuYr33CsQRgQYJQySVG8NO15bzoe30HSop%2BLW16LrxiU6rw8ffecW1u%2F7rWZBctGaKiaFh2aQZ%2BtXH9mxo73PcYUjAtMP8vsHxWmKSx1pVJq2QpBbl&X-Amz-Signature=a358678aa736e9e711bbf9d58b2b97e8c19ddd2066e0df3ab5d888b2c5f6f155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

