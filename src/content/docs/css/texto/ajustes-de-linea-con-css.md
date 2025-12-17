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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNOFUMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1AOd6VXyCtZ1Bi24mk%2F4S867qUkkJYr%2FL39fFU0BMPAiA8nrV9NdE6K7P%2BmytIeP0SYhj38gFtvQ1n0ZxHxyuWsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM8m%2BeE7sNaltuk4DtKtwD6SSUWd2jGDZetNaz41%2BczO4azoQ3Xa5JL4cP40%2FZmCUMhtNCo7kL1e75WxBca7jQs50z7xTceBFumF5jQocIPxSuyeOSzLlfHVS60nbkAgo6CtM9wQbBcgAioHdrEcr5jazvI1NsAZEBGNa7WlHPmZ5SrRYV18U6%2FGQ0SnpdQeJa%2BGrypzzX4ZmbX4DiobpeeLInelErp%2BA0DL8xf83y%2BLk8d1x8yfgF6%2BY6igS4%2BV8iHr4vLDQh6112ZzW0ZeqRa6lV1IdULozLh2I5ccXKj8EcyXNboElfwAhVBZ4nFz0AFb%2FDbF0%2B9m67NZWHGF%2FxzcHT4DusmK4P9turReMtvBmNdN%2BOGHKtCsgSoZILYR8lAZGLwkWR0%2BoGGiUpb70TJQeoYgZNmniNnkyCNuNfW0p0PLJ4KXMMu%2FUkhQ0E7p%2BMCkNc9Y2MJ7HIvtyaSDKlLOX%2F3oVPOB3OUGzSZN7DYxWgd9vZpRB%2FRcoGa4jKdaeUcopaTOgGdG2z%2B69w8TGeGKEBP7mXfhg9C10FGxAm4ucGwTVvQsXj3bWYkbaBmZVm6HmcZMbjwm%2F5Xzc1CdsjRAHhvrPF5HKfnJXLsbZm9u1ydnbMIXU1%2B5ZyE7pbTYdTwd8dqDs4aGUuuQ4w1vCJygY6pgFZ%2FVl2qdKEkT32QEh0IOr5%2B6cQQqy9DHawE%2BDEiE%2Famy5XZIUQzHHXUoLe1s7iiCO8r6m5vsgsu9YvBDrS1cwdQCpurOEsEaxZkXcgNXqirZLIUSvAidVa%2FTQYbb8jJmBS0V1VcO6MO93xgPIZJxWRQwyGDCQMZTA6GF43URsiIMnYxNRTCHMuo4elV2lWjZLLAKm55SCl4IJG%2B%2FIo8Zv48nQJN23z&X-Amz-Signature=45b02231cf05e05e9de16e0dca73faae4cb97b89bdf5dc8b8ab25ca066f42e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNOFUMK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1AOd6VXyCtZ1Bi24mk%2F4S867qUkkJYr%2FL39fFU0BMPAiA8nrV9NdE6K7P%2BmytIeP0SYhj38gFtvQ1n0ZxHxyuWsSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM8m%2BeE7sNaltuk4DtKtwD6SSUWd2jGDZetNaz41%2BczO4azoQ3Xa5JL4cP40%2FZmCUMhtNCo7kL1e75WxBca7jQs50z7xTceBFumF5jQocIPxSuyeOSzLlfHVS60nbkAgo6CtM9wQbBcgAioHdrEcr5jazvI1NsAZEBGNa7WlHPmZ5SrRYV18U6%2FGQ0SnpdQeJa%2BGrypzzX4ZmbX4DiobpeeLInelErp%2BA0DL8xf83y%2BLk8d1x8yfgF6%2BY6igS4%2BV8iHr4vLDQh6112ZzW0ZeqRa6lV1IdULozLh2I5ccXKj8EcyXNboElfwAhVBZ4nFz0AFb%2FDbF0%2B9m67NZWHGF%2FxzcHT4DusmK4P9turReMtvBmNdN%2BOGHKtCsgSoZILYR8lAZGLwkWR0%2BoGGiUpb70TJQeoYgZNmniNnkyCNuNfW0p0PLJ4KXMMu%2FUkhQ0E7p%2BMCkNc9Y2MJ7HIvtyaSDKlLOX%2F3oVPOB3OUGzSZN7DYxWgd9vZpRB%2FRcoGa4jKdaeUcopaTOgGdG2z%2B69w8TGeGKEBP7mXfhg9C10FGxAm4ucGwTVvQsXj3bWYkbaBmZVm6HmcZMbjwm%2F5Xzc1CdsjRAHhvrPF5HKfnJXLsbZm9u1ydnbMIXU1%2B5ZyE7pbTYdTwd8dqDs4aGUuuQ4w1vCJygY6pgFZ%2FVl2qdKEkT32QEh0IOr5%2B6cQQqy9DHawE%2BDEiE%2Famy5XZIUQzHHXUoLe1s7iiCO8r6m5vsgsu9YvBDrS1cwdQCpurOEsEaxZkXcgNXqirZLIUSvAidVa%2FTQYbb8jJmBS0V1VcO6MO93xgPIZJxWRQwyGDCQMZTA6GF43URsiIMnYxNRTCHMuo4elV2lWjZLLAKm55SCl4IJG%2B%2FIo8Zv48nQJN23z&X-Amz-Signature=5b32b42281d1bb3521bee40dd0b06df933223dd185fd0f4a7de20988e800530e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

