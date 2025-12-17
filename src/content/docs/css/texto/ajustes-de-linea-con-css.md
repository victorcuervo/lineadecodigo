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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRFN5J4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSoszBUwAyL1v433Mjm3pCRxBHNUUgcLGL5UaZWojAiAiEAiniu9KKQr0Ww4ABXpvJFhbSmy4z03KFo%2BUKte1VfnPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjIJpX796F0DugyqSrcA6uBkFQWZ1y0cx1U1lbBtfbzg3%2Bn4%2F8Rieo7og9cIjUHA6SKj69Gy49Kw0FIv19fQhHi4NA3tTLZx9DfL8RB1B0uhsdMsQpJgZyj9wSDsajAJUb5IA%2FxAWqy86KvU7samVgEVhnqG%2FPVjO3X2di0CJLxk7WPQPQIppaKefBA%2BD7R7Np8gp0Aj86E8M9DoQbA%2BpNXChciUoVRbejcD8A%2F2uxnFH8jQsOieE2Lmc06lx0wejj54L3TJSC6AiFdXF79tXTLnGPd59wj%2FVIjJV8Tih5qP3Ivmgo3Cv3Sw8Xac9bknXFBou%2F8HnfNicXHGYzMrchlm28kdsZzW3sb%2Bx8JgFnHuYQYrlEjvePEx1DYY0ygX8axNmWzKawll7EobxgUuPnicUOKdamm6o2SeyKJgOK8sFr68H5ILYfKROw5g70U5RKb98vSbTmlY%2B3d2VufWhR4%2BDXM8E6uS72qODiVR0KzXHPCoVRKcnH86ACdLoiamu2LSof39AGHZDP5Pu1JYn7Ql8ffOLXpPL%2Ff1k%2BlnwHfJBoAH5YQQCekY58XdH7JQLDZzHYr9r0ODf6Q5tRT%2BuHqbT%2Fp%2Ffrq%2F4fMBLRqtEdXVc9AxETCw1boz44llvk5xDRhhJGFzH8j1bcNMNOei8oGOqUBWUWSRgTbPBQsNIXI4MVMJWpIgRCFRx%2BD8yuA4o%2FhKUgUVzq8GGvTkQdjFu2eOJmUn8O9Thbh%2B0Lh3GkNpRZK7mDk%2BQ4xm62D8MCKrt3%2BBf0h%2BSMRK6yX5NAPSPU5ZWQG%2F3DgxTCJIZMytYQ%2BrleGFnhpyx2Ini6H3mZeguCbC3Yj4ZLJP9vg4mfnkGIBSfghVWIaX1xrGK9H2jPrKsAZvX0q%2BdbX&X-Amz-Signature=d466b9de8e8434f54a1835864b09f9ac765e3b641ac0659b57c9eaffc0a1bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRFN5J4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSoszBUwAyL1v433Mjm3pCRxBHNUUgcLGL5UaZWojAiAiEAiniu9KKQr0Ww4ABXpvJFhbSmy4z03KFo%2BUKte1VfnPkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjIJpX796F0DugyqSrcA6uBkFQWZ1y0cx1U1lbBtfbzg3%2Bn4%2F8Rieo7og9cIjUHA6SKj69Gy49Kw0FIv19fQhHi4NA3tTLZx9DfL8RB1B0uhsdMsQpJgZyj9wSDsajAJUb5IA%2FxAWqy86KvU7samVgEVhnqG%2FPVjO3X2di0CJLxk7WPQPQIppaKefBA%2BD7R7Np8gp0Aj86E8M9DoQbA%2BpNXChciUoVRbejcD8A%2F2uxnFH8jQsOieE2Lmc06lx0wejj54L3TJSC6AiFdXF79tXTLnGPd59wj%2FVIjJV8Tih5qP3Ivmgo3Cv3Sw8Xac9bknXFBou%2F8HnfNicXHGYzMrchlm28kdsZzW3sb%2Bx8JgFnHuYQYrlEjvePEx1DYY0ygX8axNmWzKawll7EobxgUuPnicUOKdamm6o2SeyKJgOK8sFr68H5ILYfKROw5g70U5RKb98vSbTmlY%2B3d2VufWhR4%2BDXM8E6uS72qODiVR0KzXHPCoVRKcnH86ACdLoiamu2LSof39AGHZDP5Pu1JYn7Ql8ffOLXpPL%2Ff1k%2BlnwHfJBoAH5YQQCekY58XdH7JQLDZzHYr9r0ODf6Q5tRT%2BuHqbT%2Fp%2Ffrq%2F4fMBLRqtEdXVc9AxETCw1boz44llvk5xDRhhJGFzH8j1bcNMNOei8oGOqUBWUWSRgTbPBQsNIXI4MVMJWpIgRCFRx%2BD8yuA4o%2FhKUgUVzq8GGvTkQdjFu2eOJmUn8O9Thbh%2B0Lh3GkNpRZK7mDk%2BQ4xm62D8MCKrt3%2BBf0h%2BSMRK6yX5NAPSPU5ZWQG%2F3DgxTCJIZMytYQ%2BrleGFnhpyx2Ini6H3mZeguCbC3Yj4ZLJP9vg4mfnkGIBSfghVWIaX1xrGK9H2jPrKsAZvX0q%2BdbX&X-Amz-Signature=8bf1ec93daf4f9bc8dbf96bdaadd7a381df262ef976f61f7e1b3c99303013e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

