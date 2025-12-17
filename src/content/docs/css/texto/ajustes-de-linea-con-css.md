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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WOSUA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0jDHDIOFaINyiFAXklkhEE%2BrpiZyM2qnb6ewQSvdasAiBsa5MqzpjNM6JwkTG6X4%2ByFpSczhTHh12hA9U3Y8g9YCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMy2tNBDbxDeItstfyKtwD1%2FI3jSymp65QZWwrmE5dbPmu5KehYE39CY7%2FRUaxxF8lM5Ip1vMbIvi9hL2xlKjw0u2JXmJzzdcrB53WJv78gjNIHKsTn%2BZ75WUws8XI3LRwqqKNVd03F1p6dRXRGrKRA7kxvFUDUolJT5ibEex0jRZ%2FGaz%2B%2BZYZvuRciipLIkd5HY67BfWt9UIg0uvGDVEnRtpfBCJGIynhTcDhgMpRrH%2BhuPCYfZ8ip9%2F1XgbHiWsy6w0ijX4ZiXqwzdXZyTewqfB6i9vIBsfLIhXoxB9ROC6xzTEGEyvgLVIlpDG9wPkcgrxPMzWKYof6xJpv2AibLD9cbDf0%2FInj%2B6CJODflgpJYb0Q4pCb6m%2BAG9d6EaVuNA4gNN0tfwgMWca4YcHHs70XVrwO75grBLuNtudIj12MY%2FzFr%2BQWB7LCRwOeeTvL4KQx9GIX%2Bk%2BkLuAuaId5nUfq2fu%2FbVN5hPP10VzsQXcuyOVJ2LQNpNaFSIhBheqfRmUgFhbhXED94xskCpQWMe8oSqTF3NjubS4tPrnswX4i6bUY67HJMAy4lD%2F2UogaD76fMgp6eONrMYuKwDKUIDkUdZ7WUemiyMU3hTlbZL0rIch9fg6oY4clrtGKD2Mg9YO%2FGuQ69ggjdwgww%2BaqKygY6pgFUC6jQO4dI8TF%2BXki3ianLrN1LA1NLHZRLVXTsbzGyhlBQADf1W3sFdYISWZ71PvNkOrwZMZAGYAJSUF9FblTdpmXIuer6MlybCjIVu%2FXJ2%2FcU9akE0VU7LmcKhDc3aDSZy8riIztrDUFxnPqV%2BZhA7lzmHNQoo1xvTK3MrqoXXcN996yAlkZ2GVDfmmNJ%2Fv7mB9PQp%2FhHJhvX4H3LYizkggZVdFiV&X-Amz-Signature=467812c10d3d5f70c542fc736fa005b5c85353f04b0971f8d25c910e8629a9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WOSUA7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0jDHDIOFaINyiFAXklkhEE%2BrpiZyM2qnb6ewQSvdasAiBsa5MqzpjNM6JwkTG6X4%2ByFpSczhTHh12hA9U3Y8g9YCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMy2tNBDbxDeItstfyKtwD1%2FI3jSymp65QZWwrmE5dbPmu5KehYE39CY7%2FRUaxxF8lM5Ip1vMbIvi9hL2xlKjw0u2JXmJzzdcrB53WJv78gjNIHKsTn%2BZ75WUws8XI3LRwqqKNVd03F1p6dRXRGrKRA7kxvFUDUolJT5ibEex0jRZ%2FGaz%2B%2BZYZvuRciipLIkd5HY67BfWt9UIg0uvGDVEnRtpfBCJGIynhTcDhgMpRrH%2BhuPCYfZ8ip9%2F1XgbHiWsy6w0ijX4ZiXqwzdXZyTewqfB6i9vIBsfLIhXoxB9ROC6xzTEGEyvgLVIlpDG9wPkcgrxPMzWKYof6xJpv2AibLD9cbDf0%2FInj%2B6CJODflgpJYb0Q4pCb6m%2BAG9d6EaVuNA4gNN0tfwgMWca4YcHHs70XVrwO75grBLuNtudIj12MY%2FzFr%2BQWB7LCRwOeeTvL4KQx9GIX%2Bk%2BkLuAuaId5nUfq2fu%2FbVN5hPP10VzsQXcuyOVJ2LQNpNaFSIhBheqfRmUgFhbhXED94xskCpQWMe8oSqTF3NjubS4tPrnswX4i6bUY67HJMAy4lD%2F2UogaD76fMgp6eONrMYuKwDKUIDkUdZ7WUemiyMU3hTlbZL0rIch9fg6oY4clrtGKD2Mg9YO%2FGuQ69ggjdwgww%2BaqKygY6pgFUC6jQO4dI8TF%2BXki3ianLrN1LA1NLHZRLVXTsbzGyhlBQADf1W3sFdYISWZ71PvNkOrwZMZAGYAJSUF9FblTdpmXIuer6MlybCjIVu%2FXJ2%2FcU9akE0VU7LmcKhDc3aDSZy8riIztrDUFxnPqV%2BZhA7lzmHNQoo1xvTK3MrqoXXcN996yAlkZ2GVDfmmNJ%2Fv7mB9PQp%2FhHJhvX4H3LYizkggZVdFiV&X-Amz-Signature=936932478efec45cca85831716df33c999eb24b2e8d5b7da9da0ac802d788a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

