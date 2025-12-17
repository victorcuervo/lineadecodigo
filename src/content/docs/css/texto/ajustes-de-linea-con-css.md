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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YBT774%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx2%2BgkgSqwp82BXB8JKFYVrAIq%2BKanIoBBaNGptfiEkgIhAKsxUPKw4ptkZYH3tgVK3e02kJ4iVTjXX69fL2hXBmt6Kv8DCHQQABoMNjM3NDIzMTgzODA1Igy1BESVvbWDAbyURcoq3APTkKe%2Fx0JAtKWq%2FtIY%2FDEyGDDAnOo%2BwHTmvETZ1EFrC9yA55Di1OPQJHOEkYx8Q6drIfQbln6MoBvfQuPMWCIjdhKkKTYFOR3tjYY3iOz5rbXgF6Rwmiag2SE7e%2FFVc5vRLg50Ri21gCXtwC7v2nIbhGsvdK1TpegERc5NTkzcblcM%2BqEH7pWdAxemZz8k%2B54AGFYJsS1et3GrcjbcFqh%2BxMc3nkcWiY%2BYR4PQdtK7gTMBQ1jjPvd17eZ2n0r8cRchep2%2Bmn%2Bg%2BkWwd0QqvqY0j6GCpo7PvPkK3y8IvOWP84Mvn0hBLkoNb2E%2FrL1%2Fu7dfJ2CaMTqbElu3vLnSmn%2FRB4Ld46PLbWWAiXAq5DQbwgYkDCZWmxnfg7Pp2bENPgTuWu5aA1f23VvGb7meyyLxacgZqa5G3e%2BAxvbJaiBofbIiZ3gvVXnSzC6YVESeA1LuET3VYp8qhiutmK%2B0HCpY0j6vl%2BGrW%2BK0KeED%2FQObx06HSePRZlNQqF%2F0HnRiwJy7M%2FJ7atvXoPyqSsIcozP7AhjoQAi0ZJZkG5lTJSu71gJ0avpPxc6Rzgc2%2BV5CWILWedHRHrbVhIXEDWGhjiNmeHvjatc2qQxGiJn5KvhyXE%2FL769H40zP1bDpojD%2FsojKBjqkAfGyGtTDqmN6XKe8PPc4sm7aJNCgOkQeErh5Yv13vcpr0uoNYNNK2LRnbwf88%2FIN6XGek20t8hL%2BO6mbsA%2FTMrfx3EkQx3UllPkpbybo1GgVw5Y1iIWFhuOkoz1XuIZf0yR%2FMzZmJeuR1SetUhWrRq63L37cpDQ55My%2BZSW8JU1Baz%2B%2Fxnq2N7H7NqAcF4pCKnFAaZAQL%2BV%2F7e5bbTVSrw0GU2RG&X-Amz-Signature=5f2205f5e5738c2d23ff56500abed13cee12116827122c5c3f976daf968193a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YBT774%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx2%2BgkgSqwp82BXB8JKFYVrAIq%2BKanIoBBaNGptfiEkgIhAKsxUPKw4ptkZYH3tgVK3e02kJ4iVTjXX69fL2hXBmt6Kv8DCHQQABoMNjM3NDIzMTgzODA1Igy1BESVvbWDAbyURcoq3APTkKe%2Fx0JAtKWq%2FtIY%2FDEyGDDAnOo%2BwHTmvETZ1EFrC9yA55Di1OPQJHOEkYx8Q6drIfQbln6MoBvfQuPMWCIjdhKkKTYFOR3tjYY3iOz5rbXgF6Rwmiag2SE7e%2FFVc5vRLg50Ri21gCXtwC7v2nIbhGsvdK1TpegERc5NTkzcblcM%2BqEH7pWdAxemZz8k%2B54AGFYJsS1et3GrcjbcFqh%2BxMc3nkcWiY%2BYR4PQdtK7gTMBQ1jjPvd17eZ2n0r8cRchep2%2Bmn%2Bg%2BkWwd0QqvqY0j6GCpo7PvPkK3y8IvOWP84Mvn0hBLkoNb2E%2FrL1%2Fu7dfJ2CaMTqbElu3vLnSmn%2FRB4Ld46PLbWWAiXAq5DQbwgYkDCZWmxnfg7Pp2bENPgTuWu5aA1f23VvGb7meyyLxacgZqa5G3e%2BAxvbJaiBofbIiZ3gvVXnSzC6YVESeA1LuET3VYp8qhiutmK%2B0HCpY0j6vl%2BGrW%2BK0KeED%2FQObx06HSePRZlNQqF%2F0HnRiwJy7M%2FJ7atvXoPyqSsIcozP7AhjoQAi0ZJZkG5lTJSu71gJ0avpPxc6Rzgc2%2BV5CWILWedHRHrbVhIXEDWGhjiNmeHvjatc2qQxGiJn5KvhyXE%2FL769H40zP1bDpojD%2FsojKBjqkAfGyGtTDqmN6XKe8PPc4sm7aJNCgOkQeErh5Yv13vcpr0uoNYNNK2LRnbwf88%2FIN6XGek20t8hL%2BO6mbsA%2FTMrfx3EkQx3UllPkpbybo1GgVw5Y1iIWFhuOkoz1XuIZf0yR%2FMzZmJeuR1SetUhWrRq63L37cpDQ55My%2BZSW8JU1Baz%2B%2Fxnq2N7H7NqAcF4pCKnFAaZAQL%2BV%2F7e5bbTVSrw0GU2RG&X-Amz-Signature=d6cd22cb479831036eda2a59bf8ee4bc8fc7726a934a797efb9ae034405b1daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

