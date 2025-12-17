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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONMEBNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuS5SLmjzSL%2BlSXEwEs2phS6PIk4vqTbKuFjykyge6NQIhAOaZ4uNWMzEQYKmrGczMDCtmvg15hjSi0UC0E1bsujTOKv8DCH8QABoMNjM3NDIzMTgzODA1IgzcUevzBQJDzT6G26Eq3AOvuRUSO7imYWy4fagmi1AdHNK%2Bvzgc0H%2BR5IhhrB8H30yD0JKNHo%2BAsdulyZ1T5zo541HTlGNdAdLylT1oBPxmEL66UJsW%2FDJjfsgmq0IpzbK4Ra9%2BL2HvgcHN%2BbuWdxK48PCaLjDGifBKJK2cgsbCsq8dohCynju8wdO9eupwMuvpLHvZBYzs3hzzkhLe1ZoMP3gPSv%2ByJx6h%2FLGnXG6JMPBv67AaQdd%2F%2Fr2ohRwEJ3h4j19hjXIoosQnTBVa05in%2BlIzc1D1%2BkeHXpZWikkYSMem0eVe8DChtmCg3TKYK8SNv1sjy9YYP2Ftsb72dftikGMzwLZYYKKb0aBXkQo9L0DGBDt8TYKIx0i3Mn4xF1vAGiNYKdBgYl%2Bk1%2FvCbbcUofBfV6e7IIhCWnryt8dwgZ07lf4vk17w0gGOV%2F4h0ES3swPRhMw1cBrWduGnMH%2Bt2MCwxLaKbBDJMA68B9rv89BGjQ7kEbA1xMd53I8%2FUaDDNQ%2B2m43VH9Xp2Tt8fragw421NzoBhkhYbFxXT8NqOPfnYmqt%2BJRTVS4g22k2aGAsc5W4uhSRC%2F0JQQI603bmWBgMwBS%2BDiLDV%2BbziPodncVkxptrHTrb8N%2FGmlZSfRl4G3%2BXI6DSnyMdzzDn4YrKBjqkAXRy0N0mIE5QKrFp9rW3Ke6wJqJc2aHxWvpJAlkcsjRFhZsXhGThaOC0Wmy3G3UsYsamcobIUHzsbz%2BOIlOdBfGFZmZJ06uijxUql76l%2FtOBLvgi%2FbMzUUSDxX4DWAVoymlaPO03rfEU0QYBFavR4TJ2YbZzeRdEApXH58knlKXg392ftFsWpwWQ%2Fx%2B9qO%2Be5YA%2FE7wC9zav8dT5LS2%2Fs%2F2moa%2Fq&X-Amz-Signature=787cebaac31f22a2892c2a27657bc6ae6277e35cfe6dbff1039b537c5223a62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONMEBNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuS5SLmjzSL%2BlSXEwEs2phS6PIk4vqTbKuFjykyge6NQIhAOaZ4uNWMzEQYKmrGczMDCtmvg15hjSi0UC0E1bsujTOKv8DCH8QABoMNjM3NDIzMTgzODA1IgzcUevzBQJDzT6G26Eq3AOvuRUSO7imYWy4fagmi1AdHNK%2Bvzgc0H%2BR5IhhrB8H30yD0JKNHo%2BAsdulyZ1T5zo541HTlGNdAdLylT1oBPxmEL66UJsW%2FDJjfsgmq0IpzbK4Ra9%2BL2HvgcHN%2BbuWdxK48PCaLjDGifBKJK2cgsbCsq8dohCynju8wdO9eupwMuvpLHvZBYzs3hzzkhLe1ZoMP3gPSv%2ByJx6h%2FLGnXG6JMPBv67AaQdd%2F%2Fr2ohRwEJ3h4j19hjXIoosQnTBVa05in%2BlIzc1D1%2BkeHXpZWikkYSMem0eVe8DChtmCg3TKYK8SNv1sjy9YYP2Ftsb72dftikGMzwLZYYKKb0aBXkQo9L0DGBDt8TYKIx0i3Mn4xF1vAGiNYKdBgYl%2Bk1%2FvCbbcUofBfV6e7IIhCWnryt8dwgZ07lf4vk17w0gGOV%2F4h0ES3swPRhMw1cBrWduGnMH%2Bt2MCwxLaKbBDJMA68B9rv89BGjQ7kEbA1xMd53I8%2FUaDDNQ%2B2m43VH9Xp2Tt8fragw421NzoBhkhYbFxXT8NqOPfnYmqt%2BJRTVS4g22k2aGAsc5W4uhSRC%2F0JQQI603bmWBgMwBS%2BDiLDV%2BbziPodncVkxptrHTrb8N%2FGmlZSfRl4G3%2BXI6DSnyMdzzDn4YrKBjqkAXRy0N0mIE5QKrFp9rW3Ke6wJqJc2aHxWvpJAlkcsjRFhZsXhGThaOC0Wmy3G3UsYsamcobIUHzsbz%2BOIlOdBfGFZmZJ06uijxUql76l%2FtOBLvgi%2FbMzUUSDxX4DWAVoymlaPO03rfEU0QYBFavR4TJ2YbZzeRdEApXH58knlKXg392ftFsWpwWQ%2Fx%2B9qO%2Be5YA%2FE7wC9zav8dT5LS2%2Fs%2F2moa%2Fq&X-Amz-Signature=f57e79553800abb0423686d9b28a71d96df2c66526fdee377213f208aab7e908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

