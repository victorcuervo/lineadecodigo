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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P75DKCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvi%2FTEiSMxkcP3N4Sd6TdmTu1DdfVT9AeJEEQv4QrlfAiEA81PkgjmQdqAawRBpyqarl9cWZXPfwcysalGV6BmgH2oq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEZla3xv96HSM8hHYSrcA%2BxeRm6MuDAeFAxqnGkhl1WKumzyxvKhnuf2h2LAryeLBgokWf0v12V85JYyQIi6hxUI9HO9oX8D8qNz39fqjpurZitCedUytPPXwmVZ%2F917BruW2EiIyzmWIDFqMHCe4t4NgyXoJmVL%2Fv6n3sJFNB8Hxj6Oy%2Fmlm%2FqEmImXIE0yQsGPW7D9liw2GxVQHthDJOd4%2FCsOaPKNOhNW1CQQ64vbOSfU9o88fGaCqemgVkoGevcZmt0a59Y2Px%2Bn9Ik7GjUtzJxcsMN03oYvleQEXo189wM1EtZpuC6XDKz6LAzYJZcgyKCUqQTgoOU7OizZydPky2%2Bo%2BlnSMTfSXzqwObl5np1xaxORKiilyjAXpzoB6vcviNEAP8%2F%2F0jda0bptexF05Uivp1aCl7I4pUyUl5kJKm6%2BAi1rKN%2FVdfuBKXXTuxx7rUkT4iJbGVkgPF9hnkr8Ez7%2BHajAbby0ryFdu1NIKGwCpWXD3UUVTWid5qCC7CBVGNmlMDiTRJEY%2BjLszbQluZ5ERvRdC9TXuBnomAaIyv9cUJilJOI0G6ZRfEkXcOXLYO5ptIwcKTJucuTApU7sGbyk9Eg4f1rAYHQCYK0B6qOOxvjAL%2FDedXEqJfv9%2F6ixo8eeaoxTLI2XMJ%2BPisoGOqUBHIqlpL%2FoAofIP4G8dmPW1BucszjqIngBEbN50XF7I2awvHH5NpboESVTJF9uH2fR70Wip2p5%2Bof1aUFhE2kuOyNMOX9qSweBfY%2BkxTJyqH7MxCQWe6fSchTjWsA3OkexO2Ok%2FvODVd7JUpzcemk%2Fc%2BtW7GoXcp0mG3c03vbzw4IajJZzwTGoXNdPm2CJpADYIZffnnGPoYAZWUlR9tMKHPsXL7qk&X-Amz-Signature=d16fb236aa2b61cd298153e7f8ac9b152d78236ab1e429c68d5f165c7930d71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P75DKCH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvi%2FTEiSMxkcP3N4Sd6TdmTu1DdfVT9AeJEEQv4QrlfAiEA81PkgjmQdqAawRBpyqarl9cWZXPfwcysalGV6BmgH2oq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEZla3xv96HSM8hHYSrcA%2BxeRm6MuDAeFAxqnGkhl1WKumzyxvKhnuf2h2LAryeLBgokWf0v12V85JYyQIi6hxUI9HO9oX8D8qNz39fqjpurZitCedUytPPXwmVZ%2F917BruW2EiIyzmWIDFqMHCe4t4NgyXoJmVL%2Fv6n3sJFNB8Hxj6Oy%2Fmlm%2FqEmImXIE0yQsGPW7D9liw2GxVQHthDJOd4%2FCsOaPKNOhNW1CQQ64vbOSfU9o88fGaCqemgVkoGevcZmt0a59Y2Px%2Bn9Ik7GjUtzJxcsMN03oYvleQEXo189wM1EtZpuC6XDKz6LAzYJZcgyKCUqQTgoOU7OizZydPky2%2Bo%2BlnSMTfSXzqwObl5np1xaxORKiilyjAXpzoB6vcviNEAP8%2F%2F0jda0bptexF05Uivp1aCl7I4pUyUl5kJKm6%2BAi1rKN%2FVdfuBKXXTuxx7rUkT4iJbGVkgPF9hnkr8Ez7%2BHajAbby0ryFdu1NIKGwCpWXD3UUVTWid5qCC7CBVGNmlMDiTRJEY%2BjLszbQluZ5ERvRdC9TXuBnomAaIyv9cUJilJOI0G6ZRfEkXcOXLYO5ptIwcKTJucuTApU7sGbyk9Eg4f1rAYHQCYK0B6qOOxvjAL%2FDedXEqJfv9%2F6ixo8eeaoxTLI2XMJ%2BPisoGOqUBHIqlpL%2FoAofIP4G8dmPW1BucszjqIngBEbN50XF7I2awvHH5NpboESVTJF9uH2fR70Wip2p5%2Bof1aUFhE2kuOyNMOX9qSweBfY%2BkxTJyqH7MxCQWe6fSchTjWsA3OkexO2Ok%2FvODVd7JUpzcemk%2Fc%2BtW7GoXcp0mG3c03vbzw4IajJZzwTGoXNdPm2CJpADYIZffnnGPoYAZWUlR9tMKHPsXL7qk&X-Amz-Signature=e36c2c0ab7fe0f55426657312cf8a25edf7fcbdb7069768247da90266fcad153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

