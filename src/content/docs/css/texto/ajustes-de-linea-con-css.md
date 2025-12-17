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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSURUF6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkK4MT2N0FHqOoTSwr2FESH2iIRw2sL9KTrJBeu8O%2BLAiEA8Xc6D%2FAcWTYudJu4UOo7RbEv3vXA7syiBx0%2F1L6BO%2B0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJ7T0NBBM58O18O0ircA5MQRC%2FpTTeKZ4qwFjX5EdwZSi9lDUhnWE0suEqPPhc06mKs%2FXaEF80EpTHg4VAnbovVz1dcjCHsnbuEetJYoXrGucQG1fylRVVxiLdHIHNeZLonuMjtOfsvyws7JEzoY7jTXtwy4lshHJskHl7o0wQfd5pHZtOuckbn4nfgzivjzxp%2FeYyzryyhhLZyMfVSvOftG4QtzjjJCd0iR4fERK7E9uB26QGAVEImv4QhVQKxO%2FnRQOZfq6efe7iU6U8yjZ%2BN6hFk8m2%2FVC2zNiWUKw83XaJc8FkU%2BSPM90B%2BRlxl%2FNirEtMGNrcp6Pu0fktb9DtNVQdGp%2B4hnJqAB7ry%2B4hQ0uNPs5fOgoWxj44K%2FLDTO%2Fvhwkqe%2BX69UBXlkO3aP7Gv11yAwKhDleXx4OB%2BtvWLL%2F8yeZG0hXGZ4HnDAR8Dbgn7d7J01DFE%2Fhdkj7dLUziU3%2BprxKW8PpXR4Cwdn4074nC6I%2F4u6bBUHREajNaxvA%2F0Ra3No5UWYxzPu7jjXH8CBSfThUSpFWxkLRLZsDi0dyBEs4T%2FypU1s%2F76vwf3xI2HSorWQKEINbgvBUVXduVQ%2FSqGbUpIlclqmgqwgDhqWKBlJXG5TyTt9iEk9n7YZl8e5SHClnokG1%2FeMPv%2FisoGOqUB6tDnLXtCiKtyxhEji6L%2Bdvcxvxbdndj1WiZx658eQsHMoFIgcO%2FRRc6q8J0%2F9TmXNys4raNOU8twX6KhueDLyuzgZAWKjh4%2F8UoFaxStRmLxAdRAR7tnbsoEFx5WfZks0ojoTh5P6UFXZTA9oIRqJ1vD4F4K6QZKzcc64M61HFGpgElogQzKV89hWZNaBj1WkHGx4DEMf7o5beDH%2BaKUSHqaPlV%2F&X-Amz-Signature=ffe789149ba452c9e86a6f34311373bb588aad9754b4865598e17d50acfa99bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSURUF6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkK4MT2N0FHqOoTSwr2FESH2iIRw2sL9KTrJBeu8O%2BLAiEA8Xc6D%2FAcWTYudJu4UOo7RbEv3vXA7syiBx0%2F1L6BO%2B0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJ7T0NBBM58O18O0ircA5MQRC%2FpTTeKZ4qwFjX5EdwZSi9lDUhnWE0suEqPPhc06mKs%2FXaEF80EpTHg4VAnbovVz1dcjCHsnbuEetJYoXrGucQG1fylRVVxiLdHIHNeZLonuMjtOfsvyws7JEzoY7jTXtwy4lshHJskHl7o0wQfd5pHZtOuckbn4nfgzivjzxp%2FeYyzryyhhLZyMfVSvOftG4QtzjjJCd0iR4fERK7E9uB26QGAVEImv4QhVQKxO%2FnRQOZfq6efe7iU6U8yjZ%2BN6hFk8m2%2FVC2zNiWUKw83XaJc8FkU%2BSPM90B%2BRlxl%2FNirEtMGNrcp6Pu0fktb9DtNVQdGp%2B4hnJqAB7ry%2B4hQ0uNPs5fOgoWxj44K%2FLDTO%2Fvhwkqe%2BX69UBXlkO3aP7Gv11yAwKhDleXx4OB%2BtvWLL%2F8yeZG0hXGZ4HnDAR8Dbgn7d7J01DFE%2Fhdkj7dLUziU3%2BprxKW8PpXR4Cwdn4074nC6I%2F4u6bBUHREajNaxvA%2F0Ra3No5UWYxzPu7jjXH8CBSfThUSpFWxkLRLZsDi0dyBEs4T%2FypU1s%2F76vwf3xI2HSorWQKEINbgvBUVXduVQ%2FSqGbUpIlclqmgqwgDhqWKBlJXG5TyTt9iEk9n7YZl8e5SHClnokG1%2FeMPv%2FisoGOqUB6tDnLXtCiKtyxhEji6L%2Bdvcxvxbdndj1WiZx658eQsHMoFIgcO%2FRRc6q8J0%2F9TmXNys4raNOU8twX6KhueDLyuzgZAWKjh4%2F8UoFaxStRmLxAdRAR7tnbsoEFx5WfZks0ojoTh5P6UFXZTA9oIRqJ1vD4F4K6QZKzcc64M61HFGpgElogQzKV89hWZNaBj1WkHGx4DEMf7o5beDH%2BaKUSHqaPlV%2F&X-Amz-Signature=e52de1d1dfad2748880f48f85fafc4d67701af11e4047e6db5b96bdf670f3e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

