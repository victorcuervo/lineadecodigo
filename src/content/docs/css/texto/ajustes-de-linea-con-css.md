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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFD6US4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDV2rKxDuDWNG7l5nru8%2Fi0u8APXvdlRrvKmY3bpl%2FvgIhAPs47rEuOaflpA6Df86ashSiBn%2Br5qMqx9gI65%2FuqEFhKv8DCHcQABoMNjM3NDIzMTgzODA1IgzfsKfnXGbofPYlXp4q3APIWS8%2F4fitvzuAbYbIIfFWXLlxVFbUlgTm4sln%2BV7YsJm5a9nBaHyjYOIVK2KVrzLjzTs4PuMKlCMVyX9%2BXYpBWgwTPpO%2BcQMr%2FSuuRtHCZlwnh0ZRKggaz2iclzLhtfKysqc906AYG5g3H%2BE2pd2uy5Bt9HR59lE5bWBbyJzdRO1nT1cyIOxCM7jnzNg4ksd7Kz6Rh5iB7sVNAzKsi8DqOcL00%2BUJL%2B2CM6RUqwr5Rzu2Cf6G3PU5r17X0rCtF6YDPjpk4K4YTHbP51w5NeH2wlpYuFjAJueQUmrU%2FaVq02RxqrZ94KS0hKfMwuYPxioGQbuKOvECyfXWBn1dbhwW9gLGYjKQVLOcBTitKWyYas4lBB5nJ8U75f%2FfqIi4BSAgXDJIw2aMEIs5z8x6qh5ZqGCDpS6N%2BBBg4zDSo4LAjC2JYAPvaiIOE1lfQhmMheFzhcfa6%2BCKM30ZWhbYYyfcgWtiQGGVEXMIKBPXxiyqf6nnH8cBJKWXm0Ygksg4LN3%2BfwKaYw%2BwRE7Z9mSZyTjAh%2BqLMazx1t%2Bf88%2FZAzK%2BYDugmq17ZD%2BkaSsbE9npUEAVLvctqigFbzX%2Fw6B0pUqQi8vM2W9KeDpClY%2Bxh8e93gsk3rPbj%2FqqwfYiRjDwgonKBjqkATuBRztkxhY6AnWPgmMUQux7kSc7zoqmaOcKQS3DgV8pw%2BWTZiyg8m1suynbUR9ok6joZ8zmGuapq497%2Fuvo6iuHhIsmcLQ0JrGGeqQirjv%2FkCRlP0DKXcWVMa5TPYIzHJy7TaHU1T9xAyJh%2F5gZovrTLAcf0Qmd8ysM1FMGS9uFmeqlKs7ZnXlzq%2FXLz9CfxBbHh6AxM8DYTKfBgu1mcQdvj7Tt&X-Amz-Signature=67ee1be086367348ee14819682ece5b7273fcf552ddfee9090c21c756f5a13cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFD6US4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDV2rKxDuDWNG7l5nru8%2Fi0u8APXvdlRrvKmY3bpl%2FvgIhAPs47rEuOaflpA6Df86ashSiBn%2Br5qMqx9gI65%2FuqEFhKv8DCHcQABoMNjM3NDIzMTgzODA1IgzfsKfnXGbofPYlXp4q3APIWS8%2F4fitvzuAbYbIIfFWXLlxVFbUlgTm4sln%2BV7YsJm5a9nBaHyjYOIVK2KVrzLjzTs4PuMKlCMVyX9%2BXYpBWgwTPpO%2BcQMr%2FSuuRtHCZlwnh0ZRKggaz2iclzLhtfKysqc906AYG5g3H%2BE2pd2uy5Bt9HR59lE5bWBbyJzdRO1nT1cyIOxCM7jnzNg4ksd7Kz6Rh5iB7sVNAzKsi8DqOcL00%2BUJL%2B2CM6RUqwr5Rzu2Cf6G3PU5r17X0rCtF6YDPjpk4K4YTHbP51w5NeH2wlpYuFjAJueQUmrU%2FaVq02RxqrZ94KS0hKfMwuYPxioGQbuKOvECyfXWBn1dbhwW9gLGYjKQVLOcBTitKWyYas4lBB5nJ8U75f%2FfqIi4BSAgXDJIw2aMEIs5z8x6qh5ZqGCDpS6N%2BBBg4zDSo4LAjC2JYAPvaiIOE1lfQhmMheFzhcfa6%2BCKM30ZWhbYYyfcgWtiQGGVEXMIKBPXxiyqf6nnH8cBJKWXm0Ygksg4LN3%2BfwKaYw%2BwRE7Z9mSZyTjAh%2BqLMazx1t%2Bf88%2FZAzK%2BYDugmq17ZD%2BkaSsbE9npUEAVLvctqigFbzX%2Fw6B0pUqQi8vM2W9KeDpClY%2Bxh8e93gsk3rPbj%2FqqwfYiRjDwgonKBjqkATuBRztkxhY6AnWPgmMUQux7kSc7zoqmaOcKQS3DgV8pw%2BWTZiyg8m1suynbUR9ok6joZ8zmGuapq497%2Fuvo6iuHhIsmcLQ0JrGGeqQirjv%2FkCRlP0DKXcWVMa5TPYIzHJy7TaHU1T9xAyJh%2F5gZovrTLAcf0Qmd8ysM1FMGS9uFmeqlKs7ZnXlzq%2FXLz9CfxBbHh6AxM8DYTKfBgu1mcQdvj7Tt&X-Amz-Signature=bf4057f8295dda9ac9134b5e268d283857cc91b25d54b0a9d2fb99999a493ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

