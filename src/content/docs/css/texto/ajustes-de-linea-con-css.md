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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JRMVHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFNOUxnVCqUrKPMHI1kkC43h%2BLuS%2FApugo12cF1cFcqAiApiUVqoVdpJ2w%2F0b113FFK8%2FyajOp%2BsSUsUXmsz3CdGyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMNMrn6lYmUzU7xw4fKtwDk2u6FVW1LEx5yRWwUW45n1QBd9A4kqfCaP4GOmHhRWlYZXcxQd1RIOEFfD%2BV8KxZwNTp77ZOgwwC%2FSiS%2F2TTLnTa2nCE1o9KXsT6nEvCUk4c1FapGMSWu2gz163D971L7UpoYtAqIgKsBZGmn63fVYpEGuXM7yjRWuqBLCtmW7t5YPUcTS8FCWr9sPmYlpyV4s9QkOrFmWaOwcAY0romU%2FLArYlEExTkPlaHrqyrvpzfI7zaJxkSopje0DHp3j2GSH0eh%2FXXxguEx3ih0IWk2JfbLS2IX6kZK2zisp3%2BERt3v%2FGJ3Ft%2BfThJs856Il7nKlTdGqyQzrXe2G%2FRHkzc%2Fh%2FQxLkqyjQ8A5hTgUPY0ev4r6C8DDu2pQ6KGcecjVPiPDmAk7NyGmQ7Ut0UsXRQ7K4%2Fo0srWrU2jia88wt3eDf8nTMPBDFtEWvDB%2BXPvCa9GaROcnIhgDUDIqu9BZPPHfDYLR59kou8q%2FvSB7KlBWpu1WUzeMDi8pABt146UsdasVKBsYuThWkjQ5CMcPFsWRyNsjxhYW1Xs2us8n88ovq7r3DhM4eeVv%2Fva%2FmgV%2Bkb%2BqOQN5IBwU0KZi3A5zL%2B4jof%2FcQCLEiL9bKc1BdGl3ZZ79l7NiR7DoNLEpcwwvuHygY6pgHTPp1nRHtj30CyaT1e2rcRvJchD3jGcmeStPj5naZlWyzKdHgoGLflxrs4TJ0SIx2QLIRz70YB%2FHWr6VZVG6k5%2FB77hs5vk6eBP4uIOfU8hb2rIaRxnPhYiEj1psKLulF5FP8WorwqIr2kac9yWXUGnncMiSXtzpLce8%2FGOXEYgyHisD5bc5tSf0mkW7FmrcLP%2Bm3ehwn%2B9%2FXb8fc3f%2FvzNgq2uXph&X-Amz-Signature=e042aced3bfbe2b6d64a2aa9eb20b7e1e380974ecd87ef8fa1dd28f1a057a526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JRMVHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFNOUxnVCqUrKPMHI1kkC43h%2BLuS%2FApugo12cF1cFcqAiApiUVqoVdpJ2w%2F0b113FFK8%2FyajOp%2BsSUsUXmsz3CdGyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMNMrn6lYmUzU7xw4fKtwDk2u6FVW1LEx5yRWwUW45n1QBd9A4kqfCaP4GOmHhRWlYZXcxQd1RIOEFfD%2BV8KxZwNTp77ZOgwwC%2FSiS%2F2TTLnTa2nCE1o9KXsT6nEvCUk4c1FapGMSWu2gz163D971L7UpoYtAqIgKsBZGmn63fVYpEGuXM7yjRWuqBLCtmW7t5YPUcTS8FCWr9sPmYlpyV4s9QkOrFmWaOwcAY0romU%2FLArYlEExTkPlaHrqyrvpzfI7zaJxkSopje0DHp3j2GSH0eh%2FXXxguEx3ih0IWk2JfbLS2IX6kZK2zisp3%2BERt3v%2FGJ3Ft%2BfThJs856Il7nKlTdGqyQzrXe2G%2FRHkzc%2Fh%2FQxLkqyjQ8A5hTgUPY0ev4r6C8DDu2pQ6KGcecjVPiPDmAk7NyGmQ7Ut0UsXRQ7K4%2Fo0srWrU2jia88wt3eDf8nTMPBDFtEWvDB%2BXPvCa9GaROcnIhgDUDIqu9BZPPHfDYLR59kou8q%2FvSB7KlBWpu1WUzeMDi8pABt146UsdasVKBsYuThWkjQ5CMcPFsWRyNsjxhYW1Xs2us8n88ovq7r3DhM4eeVv%2Fva%2FmgV%2Bkb%2BqOQN5IBwU0KZi3A5zL%2B4jof%2FcQCLEiL9bKc1BdGl3ZZ79l7NiR7DoNLEpcwwvuHygY6pgHTPp1nRHtj30CyaT1e2rcRvJchD3jGcmeStPj5naZlWyzKdHgoGLflxrs4TJ0SIx2QLIRz70YB%2FHWr6VZVG6k5%2FB77hs5vk6eBP4uIOfU8hb2rIaRxnPhYiEj1psKLulF5FP8WorwqIr2kac9yWXUGnncMiSXtzpLce8%2FGOXEYgyHisD5bc5tSf0mkW7FmrcLP%2Bm3ehwn%2B9%2FXb8fc3f%2FvzNgq2uXph&X-Amz-Signature=0031f58aa33d5accecd549d153291aaf223c3ef11f40c7928ba9734dee6d0ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

