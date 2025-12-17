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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EECDG5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoYFgwldiqKBvVTRAAFLSvMnA4ghEPPHooJ6u%2BN%2F0ofAiBlSW%2F3wZ%2Bob%2BIKXWAM4k8IKfS1Zs89hxX6CgZVu65UeCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMFjjqjrzPHphuO%2Fs5KtwDYExy1MThjxKbeR38jiOPuozQbqvStuHlTMZ61b%2F7UxNAzAbhrUV6q9FLEEwPa%2BGAbdj%2BaUJdr6hjk74Po8eVyHxVnEmgSa0F%2BK8LTi9Y%2FTc0nrRKDNCwMfH4JPsejRKvWrtsCUSbiP%2FeDge7QYofFwwG2Z3zsHDqcq1WnCrYyBbb0mHz6dNXdHvoilV4JQ4DE9ExgfC5TqPOZyQKUCJZvk7e1QHP8vwzj2m6O3heaY9fWGaZNMbX%2FTXJLTLDYdGOIDlgiEgfRQB8x1SayICy9Fu3ZrdGFcppcaDxfrlb8gH7bGrPrvNb3%2BOGFGhjrCWlVwlRiI1%2B8omWuVgVdR7ISMsDtd5nv8UUcA84PLx0q8NB%2BGnhaWVYc7boeuqJiz36yXipfrNRfZqoi6bmx2HDM0pcB8WPMzSVEI8dvcGNQKpMnZwa7sfEuJrNydsiWiCwMBz8ro9gxzQUhoM8TsptdCQh4b3lbSXMfbgYenfUn49%2FMO57TAVw%2FzLaJYI%2BRceeYp8BlaaVe5zzhdupi3seavaUcklAccowTE%2BVuOQllYyr8YwK%2BM%2BMHlpke7q%2BPrrR5wEtzyZxqJzHVrZcpNX26LjHaBPbIlAJlB%2BC%2BLpDFp6%2BsgN%2F9o0chIO4YT4wmPuHygY6pgEgIklE7sUOlFDXf18EbIyutyeTjpm36gUdjXeMWJC4WJvSq38NdhfQeog%2FWiUrWUNJKNO%2BuECRUfLsfn7r8DCitEGookUvkUY4S1ifNg8j3LnZGr%2F1Bh7BdiX9FO94e%2BP8L8BdLGFtsCWXtLtq2pkZQ7Um30x%2FldN5qvKwPa3xvHmBApHLgCiv901JVjKVxux1xPI9RwSZq57se0eot7g6oGXTxkKZ&X-Amz-Signature=40ea4bc6ddbd837a893d5d07f7d25d89e31bbb1b70191338328a65504c3cd1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EECDG5J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoYFgwldiqKBvVTRAAFLSvMnA4ghEPPHooJ6u%2BN%2F0ofAiBlSW%2F3wZ%2Bob%2BIKXWAM4k8IKfS1Zs89hxX6CgZVu65UeCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMFjjqjrzPHphuO%2Fs5KtwDYExy1MThjxKbeR38jiOPuozQbqvStuHlTMZ61b%2F7UxNAzAbhrUV6q9FLEEwPa%2BGAbdj%2BaUJdr6hjk74Po8eVyHxVnEmgSa0F%2BK8LTi9Y%2FTc0nrRKDNCwMfH4JPsejRKvWrtsCUSbiP%2FeDge7QYofFwwG2Z3zsHDqcq1WnCrYyBbb0mHz6dNXdHvoilV4JQ4DE9ExgfC5TqPOZyQKUCJZvk7e1QHP8vwzj2m6O3heaY9fWGaZNMbX%2FTXJLTLDYdGOIDlgiEgfRQB8x1SayICy9Fu3ZrdGFcppcaDxfrlb8gH7bGrPrvNb3%2BOGFGhjrCWlVwlRiI1%2B8omWuVgVdR7ISMsDtd5nv8UUcA84PLx0q8NB%2BGnhaWVYc7boeuqJiz36yXipfrNRfZqoi6bmx2HDM0pcB8WPMzSVEI8dvcGNQKpMnZwa7sfEuJrNydsiWiCwMBz8ro9gxzQUhoM8TsptdCQh4b3lbSXMfbgYenfUn49%2FMO57TAVw%2FzLaJYI%2BRceeYp8BlaaVe5zzhdupi3seavaUcklAccowTE%2BVuOQllYyr8YwK%2BM%2BMHlpke7q%2BPrrR5wEtzyZxqJzHVrZcpNX26LjHaBPbIlAJlB%2BC%2BLpDFp6%2BsgN%2F9o0chIO4YT4wmPuHygY6pgEgIklE7sUOlFDXf18EbIyutyeTjpm36gUdjXeMWJC4WJvSq38NdhfQeog%2FWiUrWUNJKNO%2BuECRUfLsfn7r8DCitEGookUvkUY4S1ifNg8j3LnZGr%2F1Bh7BdiX9FO94e%2BP8L8BdLGFtsCWXtLtq2pkZQ7Um30x%2FldN5qvKwPa3xvHmBApHLgCiv901JVjKVxux1xPI9RwSZq57se0eot7g6oGXTxkKZ&X-Amz-Signature=c88b44660f4fd211b37238153aeb860afed964c8d9424e4fd6cfa55da444f143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

