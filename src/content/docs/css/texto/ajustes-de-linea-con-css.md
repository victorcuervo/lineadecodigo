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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQB3IWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFDDAqxm%2B%2FteIPhwLCJ%2Bl9CHhKWYJpbT6dxiZp5sKY%2FAiEArdXDlhL9BbRIKeXJ5EYGShXUrsEHCxj%2B5vcbow7zIr4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE3j3lc3P6TVaSfI5CrcA3oJduf%2FDIWWwVJbqdDL3m2NphR7bC4as6VDjQjWW3xC0gqFxU0pSA5cDkzN3cueQ594J6RYevOk3NPk%2FtjYf9yM0VCN7CAv5hqdnaiXiC8RdQYMhEvfWOW5YrWD49V%2FilBqw9RDAW0ACDu1lZ0bFqX4Pak%2FF7WXQLxHKBG4R5PuzIGoyN4bPyQNyWCl%2BtmInviMMPWS3c5EJDw77nOS%2BVE12T4pYfWAlhkWso09DaC0rjBVThXvXHJrZUz2ixSXbYe%2Bn8t3YB7gjUaGAA2Z3jVC%2FmYKcpydwCbbYscEzvS1JnWsKhyDsTo9NsDDwIkbnzB7fDQV%2BJwhGzA24L8j4J2vl7NwQoVD9e0gmAjcFUvfEXdGfOVKKfLChUzKB0rmEb2BFU8suIH0tuAAOudApG9e9HFF3VofuWXaL7sshY6wzj%2BAoB%2F01HtTN9%2FXcHe1mBm0g2a%2BhuGWRfCBAJhEwFsHTr4BxVEIIzsKCqHFnOMCZqdTViDsLSIgdqf9ftq8T6P0q0nzuSopdlR1c3qJIYiPXhrfvE%2FKYzoVHNvEYWUUCtxVN0Oo4COST4M%2F4tk0uGJhnlwdtuvZwqBRP5f1XPkpdeh80PG9BoXKWontkwkY7I%2F2wz8sEfL8WzqQMIqDicoGOqUBrkN26yar5NXPAi1Uwhl30%2FsbYyTxXN5bEcyBIsPXfGMjjSisk5YIVQVk%2F32RIyVzuV31dgdDY0Upp1di9Hmeq7ra8nB3t50fN9GnvwXDNsTBxMzdRr9fQRt74SNpWpthWaSNcun3hjpOVeOmfRKHQXk12Qtm9pjJxofY02GUuQIF1bGjFaFRQys5%2BuvcS8P8dBX3uwv8srAK%2Fq1LOchMT4110R%2Bk&X-Amz-Signature=28862238796ae9d4fbd5c2982f08f3999c9ca1389e38552560f9d5bceb296912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQB3IWF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFDDAqxm%2B%2FteIPhwLCJ%2Bl9CHhKWYJpbT6dxiZp5sKY%2FAiEArdXDlhL9BbRIKeXJ5EYGShXUrsEHCxj%2B5vcbow7zIr4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDE3j3lc3P6TVaSfI5CrcA3oJduf%2FDIWWwVJbqdDL3m2NphR7bC4as6VDjQjWW3xC0gqFxU0pSA5cDkzN3cueQ594J6RYevOk3NPk%2FtjYf9yM0VCN7CAv5hqdnaiXiC8RdQYMhEvfWOW5YrWD49V%2FilBqw9RDAW0ACDu1lZ0bFqX4Pak%2FF7WXQLxHKBG4R5PuzIGoyN4bPyQNyWCl%2BtmInviMMPWS3c5EJDw77nOS%2BVE12T4pYfWAlhkWso09DaC0rjBVThXvXHJrZUz2ixSXbYe%2Bn8t3YB7gjUaGAA2Z3jVC%2FmYKcpydwCbbYscEzvS1JnWsKhyDsTo9NsDDwIkbnzB7fDQV%2BJwhGzA24L8j4J2vl7NwQoVD9e0gmAjcFUvfEXdGfOVKKfLChUzKB0rmEb2BFU8suIH0tuAAOudApG9e9HFF3VofuWXaL7sshY6wzj%2BAoB%2F01HtTN9%2FXcHe1mBm0g2a%2BhuGWRfCBAJhEwFsHTr4BxVEIIzsKCqHFnOMCZqdTViDsLSIgdqf9ftq8T6P0q0nzuSopdlR1c3qJIYiPXhrfvE%2FKYzoVHNvEYWUUCtxVN0Oo4COST4M%2F4tk0uGJhnlwdtuvZwqBRP5f1XPkpdeh80PG9BoXKWontkwkY7I%2F2wz8sEfL8WzqQMIqDicoGOqUBrkN26yar5NXPAi1Uwhl30%2FsbYyTxXN5bEcyBIsPXfGMjjSisk5YIVQVk%2F32RIyVzuV31dgdDY0Upp1di9Hmeq7ra8nB3t50fN9GnvwXDNsTBxMzdRr9fQRt74SNpWpthWaSNcun3hjpOVeOmfRKHQXk12Qtm9pjJxofY02GUuQIF1bGjFaFRQys5%2BuvcS8P8dBX3uwv8srAK%2Fq1LOchMT4110R%2Bk&X-Amz-Signature=94fdc5deea937735150321eefa15384b1b904617a10fae984a9471188aca381b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

