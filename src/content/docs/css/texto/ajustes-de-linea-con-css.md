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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WED3TCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwopsx%2FP4aKSItE0iyHmXoouYcMKCWHM6hNjTES4bxvAiA0c9ZlcGbyV3IqpM%2FFP8kDBqU9rlELfFszxHw7oz0gACr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5BFk1gAndoQGj%2FGNKtwDfcRDaWmQ9bR2YWxaTkwJt%2F9oMDGJ7StQpwTliQiZJERlgZ3SgfMNGj%2B8Ot8eIXYYVJQ3gYeon%2Bmec3U%2Fr5vtvjIDM%2FA4VOHZgHmQRcCL4PuRO5lh5MSdKo9O1Mc3DqO%2Fx1MM%2FgO%2BHYSWg2fM8lfn3oVefhTiMkLRQeePzpa005U0Dx1KjRJcEZglQtU3NsYqJwGjXGzeZ%2FOrso3qsf6yZ7Nrh%2FyWE%2BpDS3VtTGRPWPElvrxuYCQelvOSsfqm5VFdXQTuh1Bn4i7tFvYdZKN%2F8aWMDHCFDZdQeFWwnxrMLWiIHvwzzTn8dxZKbTorugfT%2FKaltdTrRuGH8lTHb%2FwNbnLOwbfMp93CwsaSu%2BIyQySV4I6%2FSDmwBuZt9aPx7gseLzwxL8OEI48dCGQWecjvRVbhLEY20pnu6hEdKT%2FfB2AXwjOBF2QcxrOC5rf8UjTiEmeGBrDcS6iaLNM3FdgTFjrIbJsiwBwEp8ibi%2BkAmfq5ZnrG5Wa3pBY9ygRz%2B7DPMkhPaVJRXB8%2FKOTO2%2F9Ed9xt8vqzM%2Bvij5VJEGjRNh9Cuvh7xlaxOv0MVtE1Ys5hl%2Fw1lDlymJDn1UuMEP8GcU2lhiAEr4dcG2yrsrYCs9GqmFVFDvlk%2B1WhupEw%2FbKIygY6pgE7AijyqajoIr%2BpQHIqSSwzQYcK2e%2BK%2FTcvVNP5AWa96UUZ2XiOphjCvfTYKUKhPKEQgIM1ud4eB8cmYYokXGe%2B%2Bo04%2BUuo7jIxdnTAnT7n2CJv6VV8COyLlQunNQGvZZ45ZSRZsGEE57BKALrwI39BlGYeOvtGq77axRqZpUt94H%2FInSHiAPU3RdzKi2niymr7UTcasw8zuVs4oM8k4FOLsn8K7NtP&X-Amz-Signature=789ca8dc27c48e4356ba10dcb2001a4c66da810e45b912b72e57437a2723ad22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WED3TCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwopsx%2FP4aKSItE0iyHmXoouYcMKCWHM6hNjTES4bxvAiA0c9ZlcGbyV3IqpM%2FFP8kDBqU9rlELfFszxHw7oz0gACr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5BFk1gAndoQGj%2FGNKtwDfcRDaWmQ9bR2YWxaTkwJt%2F9oMDGJ7StQpwTliQiZJERlgZ3SgfMNGj%2B8Ot8eIXYYVJQ3gYeon%2Bmec3U%2Fr5vtvjIDM%2FA4VOHZgHmQRcCL4PuRO5lh5MSdKo9O1Mc3DqO%2Fx1MM%2FgO%2BHYSWg2fM8lfn3oVefhTiMkLRQeePzpa005U0Dx1KjRJcEZglQtU3NsYqJwGjXGzeZ%2FOrso3qsf6yZ7Nrh%2FyWE%2BpDS3VtTGRPWPElvrxuYCQelvOSsfqm5VFdXQTuh1Bn4i7tFvYdZKN%2F8aWMDHCFDZdQeFWwnxrMLWiIHvwzzTn8dxZKbTorugfT%2FKaltdTrRuGH8lTHb%2FwNbnLOwbfMp93CwsaSu%2BIyQySV4I6%2FSDmwBuZt9aPx7gseLzwxL8OEI48dCGQWecjvRVbhLEY20pnu6hEdKT%2FfB2AXwjOBF2QcxrOC5rf8UjTiEmeGBrDcS6iaLNM3FdgTFjrIbJsiwBwEp8ibi%2BkAmfq5ZnrG5Wa3pBY9ygRz%2B7DPMkhPaVJRXB8%2FKOTO2%2F9Ed9xt8vqzM%2Bvij5VJEGjRNh9Cuvh7xlaxOv0MVtE1Ys5hl%2Fw1lDlymJDn1UuMEP8GcU2lhiAEr4dcG2yrsrYCs9GqmFVFDvlk%2B1WhupEw%2FbKIygY6pgE7AijyqajoIr%2BpQHIqSSwzQYcK2e%2BK%2FTcvVNP5AWa96UUZ2XiOphjCvfTYKUKhPKEQgIM1ud4eB8cmYYokXGe%2B%2Bo04%2BUuo7jIxdnTAnT7n2CJv6VV8COyLlQunNQGvZZ45ZSRZsGEE57BKALrwI39BlGYeOvtGq77axRqZpUt94H%2FInSHiAPU3RdzKi2niymr7UTcasw8zuVs4oM8k4FOLsn8K7NtP&X-Amz-Signature=462deb756bc50f5e3d104efdfeefae602735188b61417728a4010942262cf3d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

