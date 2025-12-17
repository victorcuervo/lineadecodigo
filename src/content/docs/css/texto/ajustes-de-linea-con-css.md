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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5KPWVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4XekoYJqagQ%2B5JRfcQlymUXnCnIDN9NUnAwF1WZE%2BgAiA2%2F3bjuTwPQwQz2cRLZ%2BgLg%2FmqJniW9VQgOa62rJA7dyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMNYDUAK0VQvznkgGfKtwDVd0XKn7k%2FWBhUeT6SAzRvdP4iiQnV%2BE7OZ8pm6VmWquqdpSXzWJcJMuFL7V98J81DFD6YAVExL9lRwWHgwpOd6CGk43aglUCJg1zu4cKhrBUuL0R9xMpm94SQCYlhhW2wGcXZILdriD%2BQSfB3gtsk3j1rv1lEOnFkE5SjAEw6RpZ8CpBK2x91QOl99i0LQPIdB4sd0AiUvQwMxaPdjBEsE01dmnOKLH5noo9osfTZwVR9ZLAThDaFzVHIgqDgv3mpKzPxtZ5kNdmCnxA4Ho9KtUWL2jP%2Bb0XZ2nfrFoQwJq7gAVckkHzne%2BXhJC8agjTBBYJMbVesATjfEyUWAX62l4IxSaIDkt78I1jV5dZDXZfly0NxD3I5iMmA9%2BdiR9Lhp8%2FMGTm8qqvaCqVydlx%2BOvd1QOStoyd59MF3ubPXcZ4fHA1v8PT9zMnweo45c4PSXAn0JKicG%2FSgiBJypuRiQD8JnneSK5CI9OR4Zg0B28zjyG0fk%2FcYMbL6DK%2FPgibqSjFmieUuFl6Hry72pEbA8VyElw%2BrMWQIknnQujfgNHX1Rwz9cNNvtDYuizDGH7GPYdIm73l6lf1yAfMg2prrKG3ZMMsIudVTCiGsEbTOwb%2BYK9t4M5WwqlfLu0wgrOIygY6pgHbSnwqEkRhp%2Fy8AfDTqpms10seLdUltASBZ%2FncD4giMh1oRQQ6hw4Zi9zqCl4wD03Rw5glsgVDh%2BmksAr9QIjns5rh%2BMF28LinbGiydpq%2FNjVZ121weIVld8cBZ5rMF3xo0ASTNyMtZWxOhqB%2FdR8b2QM9TgdsP6sVYydMg%2FQSHLIU3ruSJys2N6MMGUo2NqKb3gs%2FwPBMvZnOiOaEawAJf391nWkK&X-Amz-Signature=bfb25bc1f22cdc68429aa64cf8888bde0256e1c7e75c4fafdc4f92edfc72b384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5KPWVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4XekoYJqagQ%2B5JRfcQlymUXnCnIDN9NUnAwF1WZE%2BgAiA2%2F3bjuTwPQwQz2cRLZ%2BgLg%2FmqJniW9VQgOa62rJA7dyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMNYDUAK0VQvznkgGfKtwDVd0XKn7k%2FWBhUeT6SAzRvdP4iiQnV%2BE7OZ8pm6VmWquqdpSXzWJcJMuFL7V98J81DFD6YAVExL9lRwWHgwpOd6CGk43aglUCJg1zu4cKhrBUuL0R9xMpm94SQCYlhhW2wGcXZILdriD%2BQSfB3gtsk3j1rv1lEOnFkE5SjAEw6RpZ8CpBK2x91QOl99i0LQPIdB4sd0AiUvQwMxaPdjBEsE01dmnOKLH5noo9osfTZwVR9ZLAThDaFzVHIgqDgv3mpKzPxtZ5kNdmCnxA4Ho9KtUWL2jP%2Bb0XZ2nfrFoQwJq7gAVckkHzne%2BXhJC8agjTBBYJMbVesATjfEyUWAX62l4IxSaIDkt78I1jV5dZDXZfly0NxD3I5iMmA9%2BdiR9Lhp8%2FMGTm8qqvaCqVydlx%2BOvd1QOStoyd59MF3ubPXcZ4fHA1v8PT9zMnweo45c4PSXAn0JKicG%2FSgiBJypuRiQD8JnneSK5CI9OR4Zg0B28zjyG0fk%2FcYMbL6DK%2FPgibqSjFmieUuFl6Hry72pEbA8VyElw%2BrMWQIknnQujfgNHX1Rwz9cNNvtDYuizDGH7GPYdIm73l6lf1yAfMg2prrKG3ZMMsIudVTCiGsEbTOwb%2BYK9t4M5WwqlfLu0wgrOIygY6pgHbSnwqEkRhp%2Fy8AfDTqpms10seLdUltASBZ%2FncD4giMh1oRQQ6hw4Zi9zqCl4wD03Rw5glsgVDh%2BmksAr9QIjns5rh%2BMF28LinbGiydpq%2FNjVZ121weIVld8cBZ5rMF3xo0ASTNyMtZWxOhqB%2FdR8b2QM9TgdsP6sVYydMg%2FQSHLIU3ruSJys2N6MMGUo2NqKb3gs%2FwPBMvZnOiOaEawAJf391nWkK&X-Amz-Signature=0e157dcfa3b61959a7cdc6aa9e6140f06aa42299fe73a07d5a1f660ba2b392a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

