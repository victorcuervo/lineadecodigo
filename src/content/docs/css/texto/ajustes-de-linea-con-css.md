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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW6AF7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7c8aWxoUm43b9mTnvuVtkDeaCqx2W02qgVq9df3yaNgIgbzyAj%2FV4ojW3pfUGE3ffHsuJiDQl8lz8bnnv%2FPAyGswq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBwoMbucMXuDC8k%2BnircA5spQB6xr7jEOZo%2BhGZPwAgfyQ1BKSXR2FzwPTKwUbB3FTnOL2M2aJi6e2OpKTQFpMwUX6JAuwncSn%2BgRotDOrcKSa5bRP0emshdvZxdVFqLvL6n1c9aZqGIftns62sOB61SIHX%2ByEw7FT%2BT3QMOx9p8MXsEVdXo8IFf5UasTXhjo%2Bl3bOte0qu%2BRvJqbqntU%2FhyO3M4A54%2BJCt3JergsSDqvB5ykYC%2FnSAJ8ucXgK%2BovIW6RTvS9saRnSLqLCT3SV6IKV3epF9AoIV%2FOrHTF2Kz2CaUGdrbktFHA28gmwjTtOtwtfY1YAcuuAcClbppCK1M8rhoH1HLcwUE1uszuwKPZHpFOluctKjm7rlmtFWHcQQ7k3Z%2B4R%2FIFYeorZ%2BihZx0clHtP%2BkmcGQOK9MZdzQBWSrOuRGCl2XbU%2F4EU%2F%2FxOFn2CPpbjvXWe%2BW9lIv6Jamr6JVQATijM59NJU0W2OZcdcM01xqFIe7NvXdbWLO9fLuZq426796alFVbHrrm99qHaYWWg5oAgdQzZnrWN5Mku%2Be%2B8zjxPW7WzIkGXASVcGq65L2uONIkZBFa1CVZIKgA9OyO51wuxUM0aKzGn7tpPaX%2BUH2w3KKVh3aZR1IT44Gk45Lfjltc1WDFMNLeh8oGOqUBVKGgV1i1ekWl22rZUePRv6iZxfYBhHmXPQPrlFGAkifT7ylsAyYpN6klN5T4tCYFpR%2Ba6qARgZKNVXurhhwV1c8%2FM3VI4KLUDgHMqvAX7u3iW3dydBezeqYzZ0V45Z6J%2FhQe0ECEPN5VtXkuLuyd%2F%2FaGU%2BMORsIK2XK%2BX3PSO2ACKZPMCkzwVYYgHP560xMuwRnxkugyYRyNzHxaNat283JYi97j&X-Amz-Signature=e94a58adeb2b2a2ce88ea2c893f8c6724e6802e02c78d4f92357bd1f9700c1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW6AF7T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7c8aWxoUm43b9mTnvuVtkDeaCqx2W02qgVq9df3yaNgIgbzyAj%2FV4ojW3pfUGE3ffHsuJiDQl8lz8bnnv%2FPAyGswq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBwoMbucMXuDC8k%2BnircA5spQB6xr7jEOZo%2BhGZPwAgfyQ1BKSXR2FzwPTKwUbB3FTnOL2M2aJi6e2OpKTQFpMwUX6JAuwncSn%2BgRotDOrcKSa5bRP0emshdvZxdVFqLvL6n1c9aZqGIftns62sOB61SIHX%2ByEw7FT%2BT3QMOx9p8MXsEVdXo8IFf5UasTXhjo%2Bl3bOte0qu%2BRvJqbqntU%2FhyO3M4A54%2BJCt3JergsSDqvB5ykYC%2FnSAJ8ucXgK%2BovIW6RTvS9saRnSLqLCT3SV6IKV3epF9AoIV%2FOrHTF2Kz2CaUGdrbktFHA28gmwjTtOtwtfY1YAcuuAcClbppCK1M8rhoH1HLcwUE1uszuwKPZHpFOluctKjm7rlmtFWHcQQ7k3Z%2B4R%2FIFYeorZ%2BihZx0clHtP%2BkmcGQOK9MZdzQBWSrOuRGCl2XbU%2F4EU%2F%2FxOFn2CPpbjvXWe%2BW9lIv6Jamr6JVQATijM59NJU0W2OZcdcM01xqFIe7NvXdbWLO9fLuZq426796alFVbHrrm99qHaYWWg5oAgdQzZnrWN5Mku%2Be%2B8zjxPW7WzIkGXASVcGq65L2uONIkZBFa1CVZIKgA9OyO51wuxUM0aKzGn7tpPaX%2BUH2w3KKVh3aZR1IT44Gk45Lfjltc1WDFMNLeh8oGOqUBVKGgV1i1ekWl22rZUePRv6iZxfYBhHmXPQPrlFGAkifT7ylsAyYpN6klN5T4tCYFpR%2Ba6qARgZKNVXurhhwV1c8%2FM3VI4KLUDgHMqvAX7u3iW3dydBezeqYzZ0V45Z6J%2FhQe0ECEPN5VtXkuLuyd%2F%2FaGU%2BMORsIK2XK%2BX3PSO2ACKZPMCkzwVYYgHP560xMuwRnxkugyYRyNzHxaNat283JYi97j&X-Amz-Signature=6c7dbf288f154fe4d734e38f4c0851deb395cba0d07264e4486b0275ce332b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

