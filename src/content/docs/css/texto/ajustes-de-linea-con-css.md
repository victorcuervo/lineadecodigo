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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PI5YML%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF80E9M9fQ2NWB13BMKkuaGH1Q9A41XlrPBNshygfn7QIgKamc4uePAsuuiVzbGAvy9tTLI%2FpGmUMOETLREsPyeLAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd4pixG3JftTIBZVCrcA%2FOw7noNmmMLuZy1fQ%2FR4xYN8HA%2FVpG6dCaDW30dMGFYI6yMn8bAx%2FkVRAchLYWSvkf95Tds11zQNeDgMZVJgxnx3JkmXrfDbc1nQ%2F4g463%2FR4MSIk%2FXvp95gFnZ%2BFbkUwp%2BvemSGvLMNGhdy9xaCQxDuQE%2BP4%2BcSES79vE9DOGpwMaX1ZFOveX97Vy8LNu8i%2Bwwhkm15W5OiEeAJFYiRpBYbAzZJE7b6sHaQujq29e23BNgaK8ZlOUYFKVHWYLgyiySNdICs8PTKjurj4n%2FO7tMzXOyMf7AdPlBaWMPzDmDX85He4Hf8XPOi8O%2Buw20Jn1sDW5EhSgV21hIxfTym75sRhikm%2FUVEfypEgFJkOk42sTwZj0fcFdS99GfPxfSLbeC1Ryp%2FQVhxbWPXqH5Cus0XKNCJ%2BGR7pRDjqp9tzA3jvtpk79n2%2B8bupLVhA9FgopI9XoJUqG%2BqXSzWiL8UwYPQHM4Un44OEdkbI5j03WX3yPWLGytTPzHCcFDCoqyhw3KGMz4qvf8nJoZqBcdOQkhHMQm43%2B0VmuMigxlNs2chYqeFp2gMFS3JgVPE4v0yWYZX2LXLs1nS6amWX5jdo9%2B7stSNc2O5C6EN64MBDQdO2XULr30B9L55jcHMLyfi8oGOqUBcrSR26kXZGblGh7KNZfoc0zPldgS3wcCbwPUP84fwAi%2FxTMkobwAPrH%2FMyX7viCXl%2Bh0PhokBdRuQYwTvYo7QZJpXbrRwG1lJ%2B6K%2Fv%2FnGwwxds3RizK2sKgbLaDHi3cdyAG4IjBd1e7q8kcCQ5JZHWH69T%2BfP%2Fx2UcdJutR9MJoPUobKZjN9hiDk2i287oaXcWILKFKscUeWae2qPvKGqVxAg7T7&X-Amz-Signature=3e11427197da082dedb78b79717dc36532e54f8ca08a360996b610f3728e82a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642PI5YML%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF80E9M9fQ2NWB13BMKkuaGH1Q9A41XlrPBNshygfn7QIgKamc4uePAsuuiVzbGAvy9tTLI%2FpGmUMOETLREsPyeLAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd4pixG3JftTIBZVCrcA%2FOw7noNmmMLuZy1fQ%2FR4xYN8HA%2FVpG6dCaDW30dMGFYI6yMn8bAx%2FkVRAchLYWSvkf95Tds11zQNeDgMZVJgxnx3JkmXrfDbc1nQ%2F4g463%2FR4MSIk%2FXvp95gFnZ%2BFbkUwp%2BvemSGvLMNGhdy9xaCQxDuQE%2BP4%2BcSES79vE9DOGpwMaX1ZFOveX97Vy8LNu8i%2Bwwhkm15W5OiEeAJFYiRpBYbAzZJE7b6sHaQujq29e23BNgaK8ZlOUYFKVHWYLgyiySNdICs8PTKjurj4n%2FO7tMzXOyMf7AdPlBaWMPzDmDX85He4Hf8XPOi8O%2Buw20Jn1sDW5EhSgV21hIxfTym75sRhikm%2FUVEfypEgFJkOk42sTwZj0fcFdS99GfPxfSLbeC1Ryp%2FQVhxbWPXqH5Cus0XKNCJ%2BGR7pRDjqp9tzA3jvtpk79n2%2B8bupLVhA9FgopI9XoJUqG%2BqXSzWiL8UwYPQHM4Un44OEdkbI5j03WX3yPWLGytTPzHCcFDCoqyhw3KGMz4qvf8nJoZqBcdOQkhHMQm43%2B0VmuMigxlNs2chYqeFp2gMFS3JgVPE4v0yWYZX2LXLs1nS6amWX5jdo9%2B7stSNc2O5C6EN64MBDQdO2XULr30B9L55jcHMLyfi8oGOqUBcrSR26kXZGblGh7KNZfoc0zPldgS3wcCbwPUP84fwAi%2FxTMkobwAPrH%2FMyX7viCXl%2Bh0PhokBdRuQYwTvYo7QZJpXbrRwG1lJ%2B6K%2Fv%2FnGwwxds3RizK2sKgbLaDHi3cdyAG4IjBd1e7q8kcCQ5JZHWH69T%2BfP%2Fx2UcdJutR9MJoPUobKZjN9hiDk2i287oaXcWILKFKscUeWae2qPvKGqVxAg7T7&X-Amz-Signature=81b99659a0a0a32c9c1af10d2b0aca5f3fd51797cfb1e8e2ec32c8ec4e4eaa94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

