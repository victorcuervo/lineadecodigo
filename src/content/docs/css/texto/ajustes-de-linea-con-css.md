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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQXSMJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApwiXINAHzh5ieGy4SXM4vCTUQ5XwlYJTBHOLBKeR0GAiAnw%2BQ7VmLuz9CvpUGPpsn8urVSodOeEuOmuB2Mspfa5Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMEtaW4MZM3vcXDyxOKtwDF7Mp8ymXflluvXyPd8%2FoFWpJ6lOyfLTSDLLKhM7FR037DK%2FGE0IiUxekrY68w8LwTfDD%2F7MhlgWkqc9TY0Bf4jPWONWcZa1vt5W5YaD6qKhegr5JHMJZ06G8VdEzUDgElVy8jQtwgmILUN2oQC1D584%2FVJ1b0qGcif2mAdZT1Xo7yWnodpCAUmOyBJ2u2e3KniAgRU1y2QQkFXxEiSSMjDcC0bV8Mmtq4MizZlRnE1TyfxXxkt81T9OhqAbyl5CLn%2B19KzyHBpy8mgYeSTjEw%2ByClF%2FWhyeUXwH142eSWNOnU8QenvbbPNgff7YAv3NEVqbIldi7kn0ERN%2FCNBf73fbvSFeUbdUJEz%2BP9t%2FfweJf%2ByMGCeHWipdKX%2FPIoL9HRD8XSOW9QS8HCgExw9Dqd4gzESvZ%2FIkv68TDzLL15bxYALN6xEdn7eIBqJrmstCizqG8m3LoNJYh9gJVf2RkbbH9iQedKZCKKC3oAJUba5epA9uMEEpfFFLXfJyl2U84KDoPIr7TGUGXDS%2B7KQ2olv71KjKJxg3PpXEtno%2FzFy9B%2B50bBgobj%2BiqRwS69CN6StZXWHE7V5vtU6FPRVekEi1EZlCB4%2B9fI9rwJxC1pAAga4z6eJbGusdLKicwld%2BHygY6pgFl6JuzkmkuLtp9B%2BalYhRQZGa9nvL0XXXMUdZnrPbo0YOSZZ2pX9k56ORMJpriJek01SE6OruLPmkiI1N1C8Timf5FAkdLk94H2WTqQ7n41hPH39GfNlYdy2zzsaYfyPkHQwZ0AFN4%2FuWO3%2FtJ2kpYFyn42ej17m%2BcXlLOun36WptvsukBmVN6w%2BOz6k8CAUIZW0DzHZuwQFZFG%2BiHpPa8QxB7SDwH&X-Amz-Signature=d2aa2e539913be7d535cc227b900355d2f632af9f9a4205cc528c773da14556a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQXSMJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApwiXINAHzh5ieGy4SXM4vCTUQ5XwlYJTBHOLBKeR0GAiAnw%2BQ7VmLuz9CvpUGPpsn8urVSodOeEuOmuB2Mspfa5Sr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMEtaW4MZM3vcXDyxOKtwDF7Mp8ymXflluvXyPd8%2FoFWpJ6lOyfLTSDLLKhM7FR037DK%2FGE0IiUxekrY68w8LwTfDD%2F7MhlgWkqc9TY0Bf4jPWONWcZa1vt5W5YaD6qKhegr5JHMJZ06G8VdEzUDgElVy8jQtwgmILUN2oQC1D584%2FVJ1b0qGcif2mAdZT1Xo7yWnodpCAUmOyBJ2u2e3KniAgRU1y2QQkFXxEiSSMjDcC0bV8Mmtq4MizZlRnE1TyfxXxkt81T9OhqAbyl5CLn%2B19KzyHBpy8mgYeSTjEw%2ByClF%2FWhyeUXwH142eSWNOnU8QenvbbPNgff7YAv3NEVqbIldi7kn0ERN%2FCNBf73fbvSFeUbdUJEz%2BP9t%2FfweJf%2ByMGCeHWipdKX%2FPIoL9HRD8XSOW9QS8HCgExw9Dqd4gzESvZ%2FIkv68TDzLL15bxYALN6xEdn7eIBqJrmstCizqG8m3LoNJYh9gJVf2RkbbH9iQedKZCKKC3oAJUba5epA9uMEEpfFFLXfJyl2U84KDoPIr7TGUGXDS%2B7KQ2olv71KjKJxg3PpXEtno%2FzFy9B%2B50bBgobj%2BiqRwS69CN6StZXWHE7V5vtU6FPRVekEi1EZlCB4%2B9fI9rwJxC1pAAga4z6eJbGusdLKicwld%2BHygY6pgFl6JuzkmkuLtp9B%2BalYhRQZGa9nvL0XXXMUdZnrPbo0YOSZZ2pX9k56ORMJpriJek01SE6OruLPmkiI1N1C8Timf5FAkdLk94H2WTqQ7n41hPH39GfNlYdy2zzsaYfyPkHQwZ0AFN4%2FuWO3%2FtJ2kpYFyn42ej17m%2BcXlLOun36WptvsukBmVN6w%2BOz6k8CAUIZW0DzHZuwQFZFG%2BiHpPa8QxB7SDwH&X-Amz-Signature=0d8da5d3edaa6c071d2f52f07d01977809c057c5054fcbaa0afe10580b52eb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

