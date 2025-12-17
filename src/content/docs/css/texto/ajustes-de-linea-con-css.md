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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3OOKB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2vIC%2BTOaJAgQSsdMildIe7M%2B0EzH57nJKjYgjSnmMwIhAN9BWuClYS6fKSi2C8iYr1nh6iebT3PjwOJpdnfeZzczKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjeWaXrcMjWTfgvQIq3AN3uH3uHP8YpjCF1MWY3PZ%2Bqkr5faDeHvJ8NjleWP5V6xfAZYdki5dplFYISBWxBzTuhdcwMBYI2TSdU2ZAQHlydsRnn%2BK2N7GJjjHn0GIeriEl0thxwBCm7APsM1t3swU5fX1fliwwWv7VZFTj5Szj4z%2FRVZLJxVCYYAHImOp7Qx2B4G9mMH0LIR38dC9N3stLSQYRHzlwhYFRUKo7KLDUEBMwG%2Fta1o5YFUy3CGVQkKCzED2P5uX9a6MS%2B%2Fn9dIsR9Aag19LzsLZiowWCAa3TatsLmpFxiODVRucDHKNs5Gk9RabRPPShveTgwF%2FQiWcqLW6apkmXA8H0XLxnEUD7uwZ2%2FWxeuB%2BekYeue71hTFnuUm0pZ%2BuxzO1j8%2FxSUfclY%2BBn28yib%2Fqb1GO7ebTR3%2BQW%2FTXmTELaamuaMfDyYA7kaKEhG5c4TP3ClB%2BMZ18FxggZefPAdxwyikEuVshpZFAIK70MO4%2FWkiPoPKu4LwQWcs%2FQRzNKUDgRmiyiuhO4GKVDW8VuvekbHnVch9krAX47MJaWmDSb8%2FcFkfazupOGJ2%2Fi471Y48kChdJZoL42DvNwuRAWeqfJFQ18XP9uLL%2FLmsZtOXP6oiTpJ9fva5Kdg3o3SoM9krIpsTCeg4nKBjqkAV%2B3lIC%2FtTr52dy1dKe%2B1Caex4kzPGuVDnEqJkEarO%2Bc%2FRT26h0o8lnP68vPkO6No5rR3vyqe40R5tFwpjqimIi9RF9nQzn46UJHipBuR7MfrIZbHfGgEDB%2FtBt%2Fu8DkqO7sZ1bfLURV6BEAFh%2BlxJo6yha%2F55pq0QW59QpE8TRfgZ%2BVtAt5D%2B2nSGU9B0ryH6lF64kDMYSvEP9dD3QTc43Qg%2Fep&X-Amz-Signature=fa08386d567205753a2feed56ea0501df0ab1e70fff640efc86a3998d3673765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3OOKB3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA2vIC%2BTOaJAgQSsdMildIe7M%2B0EzH57nJKjYgjSnmMwIhAN9BWuClYS6fKSi2C8iYr1nh6iebT3PjwOJpdnfeZzczKv8DCHcQABoMNjM3NDIzMTgzODA1IgyjeWaXrcMjWTfgvQIq3AN3uH3uHP8YpjCF1MWY3PZ%2Bqkr5faDeHvJ8NjleWP5V6xfAZYdki5dplFYISBWxBzTuhdcwMBYI2TSdU2ZAQHlydsRnn%2BK2N7GJjjHn0GIeriEl0thxwBCm7APsM1t3swU5fX1fliwwWv7VZFTj5Szj4z%2FRVZLJxVCYYAHImOp7Qx2B4G9mMH0LIR38dC9N3stLSQYRHzlwhYFRUKo7KLDUEBMwG%2Fta1o5YFUy3CGVQkKCzED2P5uX9a6MS%2B%2Fn9dIsR9Aag19LzsLZiowWCAa3TatsLmpFxiODVRucDHKNs5Gk9RabRPPShveTgwF%2FQiWcqLW6apkmXA8H0XLxnEUD7uwZ2%2FWxeuB%2BekYeue71hTFnuUm0pZ%2BuxzO1j8%2FxSUfclY%2BBn28yib%2Fqb1GO7ebTR3%2BQW%2FTXmTELaamuaMfDyYA7kaKEhG5c4TP3ClB%2BMZ18FxggZefPAdxwyikEuVshpZFAIK70MO4%2FWkiPoPKu4LwQWcs%2FQRzNKUDgRmiyiuhO4GKVDW8VuvekbHnVch9krAX47MJaWmDSb8%2FcFkfazupOGJ2%2Fi471Y48kChdJZoL42DvNwuRAWeqfJFQ18XP9uLL%2FLmsZtOXP6oiTpJ9fva5Kdg3o3SoM9krIpsTCeg4nKBjqkAV%2B3lIC%2FtTr52dy1dKe%2B1Caex4kzPGuVDnEqJkEarO%2Bc%2FRT26h0o8lnP68vPkO6No5rR3vyqe40R5tFwpjqimIi9RF9nQzn46UJHipBuR7MfrIZbHfGgEDB%2FtBt%2Fu8DkqO7sZ1bfLURV6BEAFh%2BlxJo6yha%2F55pq0QW59QpE8TRfgZ%2BVtAt5D%2B2nSGU9B0ryH6lF64kDMYSvEP9dD3QTc43Qg%2Fep&X-Amz-Signature=c086c1daffb389dc136bb2924f777d90641d6c54ffb1bc208d7078353fc89bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

