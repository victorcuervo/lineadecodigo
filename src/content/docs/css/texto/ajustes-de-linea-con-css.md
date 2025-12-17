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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJIC5SI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrvVK95LjgcB7C3GMl85KBmvh7UT8VB1vZbQ8w%2F%2FQ3SAiBVz5sU26XyrfUNhmx%2BDnb1%2FV26YaEz5eTiIMqXlhfEbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8qCwn8dhJ4S8qWIHKtwDaACEHIEJHKiipznj0SJwUW50TDunbotbM%2Fzwal%2BOva4v9spAWCLJ2x1%2BwGeO5DnWtaOE%2FfozFMMxaIEkTt1Uq3vMFWhsuMwheKN27NuP5Bal6d5R17ZDwnUG6OgB7c9mv1h83ZQHvOT5890n39SawhMJ7%2BAXJS619vGcQwpInpfQ5j1zOUKq%2FteU5eNAKzmt3H9fq6ZnRBfhZ2ViJcEQasEMv%2BgV9WnrR0mTOgzfMMjA9cFrBEg6ZBUCTfQrlT7drw6uq5YLo8vjGh4351J8DFPAP%2Bd%2B9YhURLwj2W7uCA%2BrxHC8VHTSXsv7ebN%2Fu77OhieB0ZPzbtyx6s%2BN%2Byg6GBwjVIgK44Jo6NrOHkUb1sN0T67MlJhyLtrd2bwih8wYB9P0AmwlsDdheqNU0U1b1ICmGCkfs65zAMbCpV0mXIQYejR2Kfmq%2FUhbgvIv1NWphcTMFXtpMb9ywi7csN4A5%2BZzvDDzYwb2cuwdnW0dd0oJdV6tsH38c39lwoIDLfWcoxj99c6HDGgoGPMhOcy5mrBz4UnXpdhnPzQLhtfm8IAz44%2B%2BBaxrV9Ym2cHvHZVdGtJ5%2FfXx9pkpof%2Bcr5S7ecf1VGmgQCgNs5nmqFoR%2FzMouWSLe8%2Bk6ld6lVgwrLKIygY6pgHWAacqTfcdH4FU7gBeHI%2BCiuKR8rVUii2lmF31w%2FS5WbKJZudIv7UW0e7uNHLyGipNdN3M4wrYbsllouPwwgNPEFBR7%2Br5rxSuV6HZY4te4eGNUWaUU4XQ1arTNnsKWNemI7AFTz8d9LQ6Fq6SXZmW4IjCes0ZYWlmYwwklHJIYdNAefCgHxy0lkhn6KrP9H2booi5sft1UbSH01Fdfl%2BOZYFNZ3Bs&X-Amz-Signature=4606018ed12fa91b8376790db2bb69def27bc4b3c80d3491647675333136b50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJIC5SI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrvVK95LjgcB7C3GMl85KBmvh7UT8VB1vZbQ8w%2F%2FQ3SAiBVz5sU26XyrfUNhmx%2BDnb1%2FV26YaEz5eTiIMqXlhfEbyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8qCwn8dhJ4S8qWIHKtwDaACEHIEJHKiipznj0SJwUW50TDunbotbM%2Fzwal%2BOva4v9spAWCLJ2x1%2BwGeO5DnWtaOE%2FfozFMMxaIEkTt1Uq3vMFWhsuMwheKN27NuP5Bal6d5R17ZDwnUG6OgB7c9mv1h83ZQHvOT5890n39SawhMJ7%2BAXJS619vGcQwpInpfQ5j1zOUKq%2FteU5eNAKzmt3H9fq6ZnRBfhZ2ViJcEQasEMv%2BgV9WnrR0mTOgzfMMjA9cFrBEg6ZBUCTfQrlT7drw6uq5YLo8vjGh4351J8DFPAP%2Bd%2B9YhURLwj2W7uCA%2BrxHC8VHTSXsv7ebN%2Fu77OhieB0ZPzbtyx6s%2BN%2Byg6GBwjVIgK44Jo6NrOHkUb1sN0T67MlJhyLtrd2bwih8wYB9P0AmwlsDdheqNU0U1b1ICmGCkfs65zAMbCpV0mXIQYejR2Kfmq%2FUhbgvIv1NWphcTMFXtpMb9ywi7csN4A5%2BZzvDDzYwb2cuwdnW0dd0oJdV6tsH38c39lwoIDLfWcoxj99c6HDGgoGPMhOcy5mrBz4UnXpdhnPzQLhtfm8IAz44%2B%2BBaxrV9Ym2cHvHZVdGtJ5%2FfXx9pkpof%2Bcr5S7ecf1VGmgQCgNs5nmqFoR%2FzMouWSLe8%2Bk6ld6lVgwrLKIygY6pgHWAacqTfcdH4FU7gBeHI%2BCiuKR8rVUii2lmF31w%2FS5WbKJZudIv7UW0e7uNHLyGipNdN3M4wrYbsllouPwwgNPEFBR7%2Br5rxSuV6HZY4te4eGNUWaUU4XQ1arTNnsKWNemI7AFTz8d9LQ6Fq6SXZmW4IjCes0ZYWlmYwwklHJIYdNAefCgHxy0lkhn6KrP9H2booi5sft1UbSH01Fdfl%2BOZYFNZ3Bs&X-Amz-Signature=7ffada93d6572ff4703d39110113c92f1e511e0573d959ddb311f9e9141f7167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

