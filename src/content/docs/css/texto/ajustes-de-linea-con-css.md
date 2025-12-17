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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3URPY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqUohj0tJe5YUk1Ei7E1BiVALhAKsoSvmRiedHwKc2YwIhANskDk7lcWH9JUWcnKIR1NOaD3xsd%2FkBJzX3rwM%2FfnuZKv8DCHEQABoMNjM3NDIzMTgzODA1IgwdABYrEuEI6QnAJzYq3APEfaSB9AaCS%2BMr%2B4nmc7Gm0K4HUD1BSH5nCDfOytXPfEL8W%2FAX%2FC9AgK1n%2B%2B%2FLtzDyp6pER8gZbrss8%2BhSY2IQXDhBXeS0CpWJfnxN8IKGOAVHxgG1fFbwqd3ys0rARACq23CPrgMmNXkJPa9WlOJ3MASFP8ob2LoIuBuXwAofA8ZuVRkB%2FMDAWg%2BWfoOan1cwpycCR3HdZc%2FoJf981htYGZGY%2B4S%2F051AgQuj8IC%2FytwFZPttjhrEkqG8FwQesk8cPRV9yl6vRz9WqR5O1tIksPJrEeKr246hwH8n60x9%2FRTOLDKrkImedYOvbByDByrTgAaJRm5aGJAwdp0x0fWOvUJab8d41qkvWEWrjrMq91psLSmdyP3cGoK5DpDnN%2BwDwqPUcepbg07%2FgCmHqsNuirah7f5RBhDPXK7q61h6een7G%2FadtXTtmnOQzsnW1x5KEiuGlnTavgMAeMTtVTtrD9EcU35hVtFlcYCnZTGThUFqbk2pfyAxhigtHyQ7V%2BsZDmO4bjjYArv8yx4blr747pooH7dGnTu0kRd5Tn3M79CKkG6JNfxl4n7271vC%2BIDmh8BJOiYs6A73qOf7oDFLzJUiuIeqi4MSzYGxShT8Yd1oglbjtmbae5WZ%2FjD03ofKBjqkAewYcSp3t768kjRmE0IVX3ffoYFBOSK6HOqCE47qOc5W9zrP0DB2Oxz5BGbS5SZAk%2BcBEB3yy0fBWMreGpZ83GkqID4SQ%2BEL9Q6nin7bCP%2BUnK18gFCxRwNhSmALdkS4Myj%2FuWXXZPyYh3qWyk69c2mQ%2BMQmyXgSEmJEz%2BJ7G%2F7Th8zsHciClwdiZ%2BC3OfaB%2FGOTLE1anZPAaUHfqnScKCLnFbZp&X-Amz-Signature=bbfe6341df2e3847c0c31f1e2951641936b60981ebb2622e6eae440ad75bac03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3URPY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqUohj0tJe5YUk1Ei7E1BiVALhAKsoSvmRiedHwKc2YwIhANskDk7lcWH9JUWcnKIR1NOaD3xsd%2FkBJzX3rwM%2FfnuZKv8DCHEQABoMNjM3NDIzMTgzODA1IgwdABYrEuEI6QnAJzYq3APEfaSB9AaCS%2BMr%2B4nmc7Gm0K4HUD1BSH5nCDfOytXPfEL8W%2FAX%2FC9AgK1n%2B%2B%2FLtzDyp6pER8gZbrss8%2BhSY2IQXDhBXeS0CpWJfnxN8IKGOAVHxgG1fFbwqd3ys0rARACq23CPrgMmNXkJPa9WlOJ3MASFP8ob2LoIuBuXwAofA8ZuVRkB%2FMDAWg%2BWfoOan1cwpycCR3HdZc%2FoJf981htYGZGY%2B4S%2F051AgQuj8IC%2FytwFZPttjhrEkqG8FwQesk8cPRV9yl6vRz9WqR5O1tIksPJrEeKr246hwH8n60x9%2FRTOLDKrkImedYOvbByDByrTgAaJRm5aGJAwdp0x0fWOvUJab8d41qkvWEWrjrMq91psLSmdyP3cGoK5DpDnN%2BwDwqPUcepbg07%2FgCmHqsNuirah7f5RBhDPXK7q61h6een7G%2FadtXTtmnOQzsnW1x5KEiuGlnTavgMAeMTtVTtrD9EcU35hVtFlcYCnZTGThUFqbk2pfyAxhigtHyQ7V%2BsZDmO4bjjYArv8yx4blr747pooH7dGnTu0kRd5Tn3M79CKkG6JNfxl4n7271vC%2BIDmh8BJOiYs6A73qOf7oDFLzJUiuIeqi4MSzYGxShT8Yd1oglbjtmbae5WZ%2FjD03ofKBjqkAewYcSp3t768kjRmE0IVX3ffoYFBOSK6HOqCE47qOc5W9zrP0DB2Oxz5BGbS5SZAk%2BcBEB3yy0fBWMreGpZ83GkqID4SQ%2BEL9Q6nin7bCP%2BUnK18gFCxRwNhSmALdkS4Myj%2FuWXXZPyYh3qWyk69c2mQ%2BMQmyXgSEmJEz%2BJ7G%2F7Th8zsHciClwdiZ%2BC3OfaB%2FGOTLE1anZPAaUHfqnScKCLnFbZp&X-Amz-Signature=0b634b7fb14e9cc8f70bc643cfd46e08b479f2cdf3088841214a2669d4239284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

