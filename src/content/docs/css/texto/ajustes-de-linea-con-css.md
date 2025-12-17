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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYKLXKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUYA0TNhXZITNhzmlKwqyPvjTgXHvIj9h9dt8BkzC0AiAnSesi5Mt3v14Fx2BT1UP3YMrMOrOeD%2FZQAxsVXUvY1Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKSVIvoR9%2FsMPNTKHKtwDRND0Mf816jCxCtyCg91cSQjiJzxNdn%2Fh9Q5ylxFg%2ByTVqbXfckl%2Bc2dtqiVm7NaWOmMU4P9hKx5E548PuSfdjGN1Hzk5AeHqAYW73Jt3nR1TdOBP1ulLP7KT2xqS4qwGFxYbdlt7k4GJbJZekwl1PTnEItZPHy%2BhIBPqOvIMb3Q8pglzeuvV47my9PW2fIrpNyQ2zNFbrR7eVhpDC1lPoLfvBsNsOyBAfS3VYkhV4Pfpu2kd%2BIERcXKU3jUXDv73yC3PzDu5o%2Fvni3Ob8IQOHaMlk33edjZjK6BnnP10OvmfIkkWOSx86ncQOX0wx91h5pckmMQUTilGnFJlp6qfs6TFH4n%2BmlGgQrx%2FaQ2Ndkoxalj14cqaW1a4oJYGcGgATCegDQ3PQXtSaT8X%2B8C2oHD39lGKOsG%2BTnZIy91MhRmilXXgF1zhDpg2d8IGqh3MZjxg0Rblwo0i%2Fl7aqtepWyXilSBwncaaKN4FdAmLQ9PF49WF%2BNFgBXr1%2B96nwRRPlrzLaQZ2I3bfJpszQ4bUf6dz4%2BrKRRTdqMDvaRsYM2J3HScFmRKyMM0TjHxXph8fkAqcSeW4TcA7XpmoGXdrGoR27eHZ2KvjwX5vq6LFcaTDkqgNRDDHdedCWB8w6umIygY6pgHHD0dil7Ed4rd02WwEaOxMaJepV8sSYEdpraHIr6kbxeyTyfQ3dBbypFyqpizQcfBlTQewj%2FHCwR5YBWlKGRpicWFpwijiPncYsNqT87PGK71v2VW4PVMRaMRjSWNayFoFW15qWs6bEUi2nOBvOnW751EDV60uiUQDD86JpdZ2GwtxnBkwxu%2BEi2B5xVDLM9uiktgYhj6FcwSwYxbZ6EelhdHtSsKd&X-Amz-Signature=a22a1696e9b5a185cd13ce6eab23d54ffdbf4e043bcf6a91372aafaa130de813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYKLXKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpUYA0TNhXZITNhzmlKwqyPvjTgXHvIj9h9dt8BkzC0AiAnSesi5Mt3v14Fx2BT1UP3YMrMOrOeD%2FZQAxsVXUvY1Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMKSVIvoR9%2FsMPNTKHKtwDRND0Mf816jCxCtyCg91cSQjiJzxNdn%2Fh9Q5ylxFg%2ByTVqbXfckl%2Bc2dtqiVm7NaWOmMU4P9hKx5E548PuSfdjGN1Hzk5AeHqAYW73Jt3nR1TdOBP1ulLP7KT2xqS4qwGFxYbdlt7k4GJbJZekwl1PTnEItZPHy%2BhIBPqOvIMb3Q8pglzeuvV47my9PW2fIrpNyQ2zNFbrR7eVhpDC1lPoLfvBsNsOyBAfS3VYkhV4Pfpu2kd%2BIERcXKU3jUXDv73yC3PzDu5o%2Fvni3Ob8IQOHaMlk33edjZjK6BnnP10OvmfIkkWOSx86ncQOX0wx91h5pckmMQUTilGnFJlp6qfs6TFH4n%2BmlGgQrx%2FaQ2Ndkoxalj14cqaW1a4oJYGcGgATCegDQ3PQXtSaT8X%2B8C2oHD39lGKOsG%2BTnZIy91MhRmilXXgF1zhDpg2d8IGqh3MZjxg0Rblwo0i%2Fl7aqtepWyXilSBwncaaKN4FdAmLQ9PF49WF%2BNFgBXr1%2B96nwRRPlrzLaQZ2I3bfJpszQ4bUf6dz4%2BrKRRTdqMDvaRsYM2J3HScFmRKyMM0TjHxXph8fkAqcSeW4TcA7XpmoGXdrGoR27eHZ2KvjwX5vq6LFcaTDkqgNRDDHdedCWB8w6umIygY6pgHHD0dil7Ed4rd02WwEaOxMaJepV8sSYEdpraHIr6kbxeyTyfQ3dBbypFyqpizQcfBlTQewj%2FHCwR5YBWlKGRpicWFpwijiPncYsNqT87PGK71v2VW4PVMRaMRjSWNayFoFW15qWs6bEUi2nOBvOnW751EDV60uiUQDD86JpdZ2GwtxnBkwxu%2BEi2B5xVDLM9uiktgYhj6FcwSwYxbZ6EelhdHtSsKd&X-Amz-Signature=016c152b9d06ca704237691c8f8b10c176b23f0ff8183ddf2d99bed36c4c7998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

