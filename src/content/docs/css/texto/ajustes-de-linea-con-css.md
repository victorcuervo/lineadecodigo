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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HOTYQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYhpcsdLjSYhrQA2lZHKFHCRvwTMHWmlIw7PP42Jio4wIhAPvzExT5HcSXGJ6PbxWKNtISqmYz%2FaXmhBLJdZLAMmpFKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNGWk1%2BUJlwbIakMAq3ANBXnNofJy%2BVlxQ53zyfnGIHPjDxOywohzdsF%2FN2eFg6G7%2Fq7kNY6pm7Ws%2BLlGJaNWc9ynDLLf2wwCfjLSQgIh7FIJVm%2FkJ1sacxhRw%2Fp5FxgLrWvZPpicxxV7JrcftjKCVxBLMWf7ZKwj1BrDDD%2BE89JwLSkrVvlgSuuXELFy8ktEQITPG%2Fetsgv%2FN6j9HRTED1SwuGsWuoBwqCK2dVJSexd6Kc1Qd15zACLLfedRmzTplp1d1eZJbOc8D75dvR2w6EZ3UOtLakHIMaxeUaCsLXVid5ce9NbuLTd5urZ36YO2puv5SxsoErkc3eNhQ9muLVStAeWwGEEd8vZbPB6RCFDqmQQML6qWjVj1ELLJaYh1FY8fayU9MneWv9kSYdrFe31BeFXIwOXz2iSPhZReglu3JkQtVHGe7t5tl7FQrf1tVN74zrPTcaKnQ%2BbMENiyFnSh9Jw4L8ogH%2FVwiE10LB8N74QBO%2BmcCSCh4hFlwt5jwgBhKHYQvD17pa2wpfm%2FHcOVWgfCGmQQQpbhg7IDDGg096CX6fZ%2BVlXfw%2FWBRTJyXuk6GywS8GgChxgAUY4iwLdi1jntKQrFmzOpFUUKuoIJXY74OJNyE28%2BJ%2FHJGJ5WGKnEbjGcPW09GWDDUn4vKBjqkAbaADUIN1pGZqDljD8t4h1agpjDA%2Fl1tSEKKoYXWqBI8Hevi%2BLGKo0QBjmtzXyUPBafr7%2FQkDekVZLo24ZoxFXoxChtZdnbwLYOQZkdzByz9W%2BXjH8w4uUQ%2BGRdpwUVHXXvCzcScDieHPdNtiyFtTxVp4Pd4sOcpii9%2BeEcFq4HRG5yx6iEEX3kxPuGBTo7om5fjSH4MZIwMg2RtBIO%2B9AxJBv%2Bj&X-Amz-Signature=73b409837f094f918df363d1901bedbff964acace4131774199a5abdd60b9697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HOTYQQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYhpcsdLjSYhrQA2lZHKFHCRvwTMHWmlIw7PP42Jio4wIhAPvzExT5HcSXGJ6PbxWKNtISqmYz%2FaXmhBLJdZLAMmpFKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNGWk1%2BUJlwbIakMAq3ANBXnNofJy%2BVlxQ53zyfnGIHPjDxOywohzdsF%2FN2eFg6G7%2Fq7kNY6pm7Ws%2BLlGJaNWc9ynDLLf2wwCfjLSQgIh7FIJVm%2FkJ1sacxhRw%2Fp5FxgLrWvZPpicxxV7JrcftjKCVxBLMWf7ZKwj1BrDDD%2BE89JwLSkrVvlgSuuXELFy8ktEQITPG%2Fetsgv%2FN6j9HRTED1SwuGsWuoBwqCK2dVJSexd6Kc1Qd15zACLLfedRmzTplp1d1eZJbOc8D75dvR2w6EZ3UOtLakHIMaxeUaCsLXVid5ce9NbuLTd5urZ36YO2puv5SxsoErkc3eNhQ9muLVStAeWwGEEd8vZbPB6RCFDqmQQML6qWjVj1ELLJaYh1FY8fayU9MneWv9kSYdrFe31BeFXIwOXz2iSPhZReglu3JkQtVHGe7t5tl7FQrf1tVN74zrPTcaKnQ%2BbMENiyFnSh9Jw4L8ogH%2FVwiE10LB8N74QBO%2BmcCSCh4hFlwt5jwgBhKHYQvD17pa2wpfm%2FHcOVWgfCGmQQQpbhg7IDDGg096CX6fZ%2BVlXfw%2FWBRTJyXuk6GywS8GgChxgAUY4iwLdi1jntKQrFmzOpFUUKuoIJXY74OJNyE28%2BJ%2FHJGJ5WGKnEbjGcPW09GWDDUn4vKBjqkAbaADUIN1pGZqDljD8t4h1agpjDA%2Fl1tSEKKoYXWqBI8Hevi%2BLGKo0QBjmtzXyUPBafr7%2FQkDekVZLo24ZoxFXoxChtZdnbwLYOQZkdzByz9W%2BXjH8w4uUQ%2BGRdpwUVHXXvCzcScDieHPdNtiyFtTxVp4Pd4sOcpii9%2BeEcFq4HRG5yx6iEEX3kxPuGBTo7om5fjSH4MZIwMg2RtBIO%2B9AxJBv%2Bj&X-Amz-Signature=7c6a75818fd345874a16954c41fe63f33e23b9bc6ff6fd9eac2f144b61559d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

