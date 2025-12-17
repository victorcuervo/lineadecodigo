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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVLNNLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3PuV%2FFjKhiiVmfT1oeKCjuXn%2FG0QeK2mxgAhvC62iQIhAMVs4zEfDpOAruDz5yt2jE%2BW74pm9W8ew072TpP20xvQKv8DCHgQABoMNjM3NDIzMTgzODA1IgzVervOC4dBcTJEVsQq3AN%2Bbu4jD5LCo%2BnRZ5elQtBjTEKg0QA7defOmMbkhgSwHcN2JgZv6PEbP%2F5fdHE5tbfhG28HEeOO%2BWrmbzDicLWk%2BmYVOx09Et%2BDFb%2FMcVxg9d6iAjdBnW2ruk9WASs%2FggueRkV7VzKq144I0wltHqJzTJHtoQUsINSrgqun4kG1utocQVq3IgXaVVZ6i6u4jOYs07EMgwhTItRTiLfMFtlE6Qfn6vgLiZzUEVYbPUeoOl4LOkZdocuAbvT6aRqVslHXZHQ3esERgq5TSVnbu0xOlQHK1ic%2BL4GSmqxJVgoym0qr0mjBT8%2BWpFa%2BxvtwWXYxED6K8dUFOdPYmydciz5%2BrSJynPkESeiXcSe%2BOrktXoRbk%2BSn1xOk8qseGw3e%2BVb7E03pAYbeczO%2FnS0sj6daeDIM4LeO%2FETpXwAUgfft8v4KTImc1UZanVIO6xm1s9JSbPC8soDapek2i3PnwzSmU4zMOg2k67TP1CovSHEZiyy0D6ttPQB9A1yUpximn6%2Fz7zpwBGFUDO%2Fe4AwyPkwLh%2B2s5ahmAEPZXEQ2hkKOB56jUQfm46X1Y%2FUIH12nTIjrypH272iXPMBWX5ImBYEl6kT2ma%2FQ%2FCmWEEgaSgB%2BvLpLd0mkMgdQPZl1IDCsnInKBjqkAVcMPBSRDEMk2fAFFgnG5Q2gn9KtfIpcsQcoCvuQhZo7dporrSAsvsY%2FjGl7NI3t93LmYC13Mzsn8S%2BOnqgqvQtFFqTjd9DE%2FKktJi2oGtNBsmmPL32mdsNQKa4pLnjwMbiWYu46KeOZSb5%2BXFtCyOVx%2Bmp3Yn8RXSfUcO7XeVm%2BF0jVD6vpk%2BaAJySfoLlMM5yi3Rn%2BKwgKgjPqRuIhBfyMWLZo&X-Amz-Signature=df422856811a2af1b4663c8c36a1408efbca4115795f6b732a3c5e2a18b93900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVLNNLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi3PuV%2FFjKhiiVmfT1oeKCjuXn%2FG0QeK2mxgAhvC62iQIhAMVs4zEfDpOAruDz5yt2jE%2BW74pm9W8ew072TpP20xvQKv8DCHgQABoMNjM3NDIzMTgzODA1IgzVervOC4dBcTJEVsQq3AN%2Bbu4jD5LCo%2BnRZ5elQtBjTEKg0QA7defOmMbkhgSwHcN2JgZv6PEbP%2F5fdHE5tbfhG28HEeOO%2BWrmbzDicLWk%2BmYVOx09Et%2BDFb%2FMcVxg9d6iAjdBnW2ruk9WASs%2FggueRkV7VzKq144I0wltHqJzTJHtoQUsINSrgqun4kG1utocQVq3IgXaVVZ6i6u4jOYs07EMgwhTItRTiLfMFtlE6Qfn6vgLiZzUEVYbPUeoOl4LOkZdocuAbvT6aRqVslHXZHQ3esERgq5TSVnbu0xOlQHK1ic%2BL4GSmqxJVgoym0qr0mjBT8%2BWpFa%2BxvtwWXYxED6K8dUFOdPYmydciz5%2BrSJynPkESeiXcSe%2BOrktXoRbk%2BSn1xOk8qseGw3e%2BVb7E03pAYbeczO%2FnS0sj6daeDIM4LeO%2FETpXwAUgfft8v4KTImc1UZanVIO6xm1s9JSbPC8soDapek2i3PnwzSmU4zMOg2k67TP1CovSHEZiyy0D6ttPQB9A1yUpximn6%2Fz7zpwBGFUDO%2Fe4AwyPkwLh%2B2s5ahmAEPZXEQ2hkKOB56jUQfm46X1Y%2FUIH12nTIjrypH272iXPMBWX5ImBYEl6kT2ma%2FQ%2FCmWEEgaSgB%2BvLpLd0mkMgdQPZl1IDCsnInKBjqkAVcMPBSRDEMk2fAFFgnG5Q2gn9KtfIpcsQcoCvuQhZo7dporrSAsvsY%2FjGl7NI3t93LmYC13Mzsn8S%2BOnqgqvQtFFqTjd9DE%2FKktJi2oGtNBsmmPL32mdsNQKa4pLnjwMbiWYu46KeOZSb5%2BXFtCyOVx%2Bmp3Yn8RXSfUcO7XeVm%2BF0jVD6vpk%2BaAJySfoLlMM5yi3Rn%2BKwgKgjPqRuIhBfyMWLZo&X-Amz-Signature=7f4641839cf434e9eeaf22da0109a09e1e7251505ecfd341ddebe146caddac8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

