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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQEXYRK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGECzoRG6fU9WHAGvQrKh2okMywuoEJy3is6jkoFxtzdAiEA7%2FtcnIKlEnK3XP6jhtH21nwagdlp%2B6JBFvjfAxPABPUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKeIfBchoBLyY3rS%2BSrcAxzwx6uBLZ%2B%2FeaxA0CPNEEarddl4gppfeiJJlz1bEHOWVoBfx5XRtKY%2F2bOyJcx8O5hk%2B7VutnJqBGutxYVrS3h1NZMIM0F3PugZHGxa6vBJGSHDsi4aMPO4zJCKAWLn3vAAJN4tXT2uwGZhUQ1NW6M6DbsRxeYDQEc%2FcY8edvxhhhbzDwbw3XWKlOupUbGBTSKt2AOBBab1%2BNrACRRSbZBTAevypn25g4XvJg0pN3LhlzQ91OxbZ2oYQn7MBrPv04XgGJGO19LOzl9MityOEpjhonRefCgHGzObiHYxb1VAygmXPXqesXSWjHAYLNmTmcmPDEVIBgyrpAnfZxgvdzie%2FaEOxetC%2BABaZS9cxWWwuVVihJNafN%2BENdTLZO0de7RwlSjy%2BQFkW7c6h7kcsQbqEBmI3UXjHFsgbSiRNsCsj3kha27rmE660pqoPhgTkSqtmNUKenT2LuKB2XazFcjGutfUGNVvi%2FjLI4vPcg%2B0BVfS8ciJ2mV%2FzFxffMGKgPGEIZ6N4jFCtsqcnjO3oMph1%2Fv58tMlvxGaFqILliZVKkrXYwGBgROVYShJVXUau%2BntqR9zLNzviDUTUs5IrLbzfC28BPPuCk6ZH6cJ%2BGitUXlhU%2B9bzqwpCKDqMOmdicoGOqUBxTqt8pRGOj%2BaAvzBUFFdaDSe4xrZBJrf7tlWD%2BmTi4izQDUUx%2FX%2FCtNgThqTQ0DwYLC21m%2BVHavaMGKzmwI8wHF%2B3OL%2F767fnjiw8%2FE8zlW0q97kw%2Fv%2BFGeq88mi4mP6WISZfIZxNtZz6FnW%2B7LZRchZGW5uRi%2FAqI0ElHupDXHspdCLchm%2B%2FICnrqBXUDNJ08LEK0oiav%2FgxNR%2BG2CZsoxxH0eO&X-Amz-Signature=7d7a143fe137d78465fb269021ec2660e2a996ace2190ae238249dbe2618d62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNQEXYRK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGECzoRG6fU9WHAGvQrKh2okMywuoEJy3is6jkoFxtzdAiEA7%2FtcnIKlEnK3XP6jhtH21nwagdlp%2B6JBFvjfAxPABPUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKeIfBchoBLyY3rS%2BSrcAxzwx6uBLZ%2B%2FeaxA0CPNEEarddl4gppfeiJJlz1bEHOWVoBfx5XRtKY%2F2bOyJcx8O5hk%2B7VutnJqBGutxYVrS3h1NZMIM0F3PugZHGxa6vBJGSHDsi4aMPO4zJCKAWLn3vAAJN4tXT2uwGZhUQ1NW6M6DbsRxeYDQEc%2FcY8edvxhhhbzDwbw3XWKlOupUbGBTSKt2AOBBab1%2BNrACRRSbZBTAevypn25g4XvJg0pN3LhlzQ91OxbZ2oYQn7MBrPv04XgGJGO19LOzl9MityOEpjhonRefCgHGzObiHYxb1VAygmXPXqesXSWjHAYLNmTmcmPDEVIBgyrpAnfZxgvdzie%2FaEOxetC%2BABaZS9cxWWwuVVihJNafN%2BENdTLZO0de7RwlSjy%2BQFkW7c6h7kcsQbqEBmI3UXjHFsgbSiRNsCsj3kha27rmE660pqoPhgTkSqtmNUKenT2LuKB2XazFcjGutfUGNVvi%2FjLI4vPcg%2B0BVfS8ciJ2mV%2FzFxffMGKgPGEIZ6N4jFCtsqcnjO3oMph1%2Fv58tMlvxGaFqILliZVKkrXYwGBgROVYShJVXUau%2BntqR9zLNzviDUTUs5IrLbzfC28BPPuCk6ZH6cJ%2BGitUXlhU%2B9bzqwpCKDqMOmdicoGOqUBxTqt8pRGOj%2BaAvzBUFFdaDSe4xrZBJrf7tlWD%2BmTi4izQDUUx%2FX%2FCtNgThqTQ0DwYLC21m%2BVHavaMGKzmwI8wHF%2B3OL%2F767fnjiw8%2FE8zlW0q97kw%2Fv%2BFGeq88mi4mP6WISZfIZxNtZz6FnW%2B7LZRchZGW5uRi%2FAqI0ElHupDXHspdCLchm%2B%2FICnrqBXUDNJ08LEK0oiav%2FgxNR%2BG2CZsoxxH0eO&X-Amz-Signature=884146b212ae4c498b1db9e20f9a408ab30a9f2497d88d9d35dcd1b0948c2fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

