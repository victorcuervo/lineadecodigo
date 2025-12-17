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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BL5QGAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWjkUCVw26AgTP1XE%2BDgoaScHKDO4VV%2BIQ5vzEJLxhgIgS7Xktf0HehVOyivT1z61dbr%2BcvLTlrle5ULusKC2Mm8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSqs01RRzRFS1ghuSrcA9x6mXJ5Lmoe51fs2nW0oeb2tPvQkfaBa3y2riJ6EvV621k7Qh0BDJqlhJsdqv2Jxk4iYxx7PVTXikWcPuyq2ozYNG2ojUQ%2Ffl%2FBE1YDozINPKF8xURzVJp4lNqfnchQS3HxRQRSc97YbTZPzhi%2BCUFyYVmH9L5LKyzaQ1NYzjqxqk73iIRm9Cg9qglk2TX9skjZp0a7CgpAfqNQwq7ApzZKkup%2FGKDxaFdqKIHCf5%2BYS%2FLgwbw%2B2PsVSf2MvxLoIduPFjAJVeailUpgxWr4A9sdQdmegOyoSbXzoDDViXDNpVVuhMl0UxRZ%2FrdKkgqvQTpVdfy53buuU1lkLEjQs7seUBzRFMzpIoTnK3HnVP7HJGWYOwqCpRyGHB2uzAMJd22PcjS6BPhqm4ta%2BgLtLBCNUk8KbLKB7Kdm9%2B6h1cPX9at8RkwKmvn5MPW%2FcV3gql6ehtIBoi5hz9LjksRO0uHdGbBXf3HMRs2XHvUSB6671TQ6%2FeBkJRXa9xctV4iTrcT%2F7%2Fha32KgwBhChL3VKUgbTeMxD%2BlLdOmVEuNUGMWOzjfV6VMfY0aCJHWVv37EEc3vaaF9CCjnFBgu%2B33Pr8ah15Xw1U%2FZy1MLxygujRf7Qc7BJwvEJxKbfkW5MJGAi8oGOqUBTFOsd%2BK9hEfgycTzlpvSZdOgZNivW0oR6QUOKH0FpSaKv1mtXOHCx6RUMET7RYgD422rRKOWDO6Y7Y5lDwQxwpc2sX%2FMCJp%2Fluzs35ZIzp7PmS6%2BkgIKoi4TwdN%2FRIhTqZX7e0vuYvKRJZTWhnH36XdVnFMWK4wv4Bs941mD7wkW7Hm1Yy00IaT5VZzPxxVRalHaGuXVvcMFDPMjU4aVmffCdkt3&X-Amz-Signature=e8b32c1f7b7e6bce300b853c707f1ecddad4ffa3f9f175333d8149f7637d34c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BL5QGAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGWjkUCVw26AgTP1XE%2BDgoaScHKDO4VV%2BIQ5vzEJLxhgIgS7Xktf0HehVOyivT1z61dbr%2BcvLTlrle5ULusKC2Mm8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSqs01RRzRFS1ghuSrcA9x6mXJ5Lmoe51fs2nW0oeb2tPvQkfaBa3y2riJ6EvV621k7Qh0BDJqlhJsdqv2Jxk4iYxx7PVTXikWcPuyq2ozYNG2ojUQ%2Ffl%2FBE1YDozINPKF8xURzVJp4lNqfnchQS3HxRQRSc97YbTZPzhi%2BCUFyYVmH9L5LKyzaQ1NYzjqxqk73iIRm9Cg9qglk2TX9skjZp0a7CgpAfqNQwq7ApzZKkup%2FGKDxaFdqKIHCf5%2BYS%2FLgwbw%2B2PsVSf2MvxLoIduPFjAJVeailUpgxWr4A9sdQdmegOyoSbXzoDDViXDNpVVuhMl0UxRZ%2FrdKkgqvQTpVdfy53buuU1lkLEjQs7seUBzRFMzpIoTnK3HnVP7HJGWYOwqCpRyGHB2uzAMJd22PcjS6BPhqm4ta%2BgLtLBCNUk8KbLKB7Kdm9%2B6h1cPX9at8RkwKmvn5MPW%2FcV3gql6ehtIBoi5hz9LjksRO0uHdGbBXf3HMRs2XHvUSB6671TQ6%2FeBkJRXa9xctV4iTrcT%2F7%2Fha32KgwBhChL3VKUgbTeMxD%2BlLdOmVEuNUGMWOzjfV6VMfY0aCJHWVv37EEc3vaaF9CCjnFBgu%2B33Pr8ah15Xw1U%2FZy1MLxygujRf7Qc7BJwvEJxKbfkW5MJGAi8oGOqUBTFOsd%2BK9hEfgycTzlpvSZdOgZNivW0oR6QUOKH0FpSaKv1mtXOHCx6RUMET7RYgD422rRKOWDO6Y7Y5lDwQxwpc2sX%2FMCJp%2Fluzs35ZIzp7PmS6%2BkgIKoi4TwdN%2FRIhTqZX7e0vuYvKRJZTWhnH36XdVnFMWK4wv4Bs941mD7wkW7Hm1Yy00IaT5VZzPxxVRalHaGuXVvcMFDPMjU4aVmffCdkt3&X-Amz-Signature=404e700ecda035fbf89f440e9d785317360c3a8999501df8c6129ae858361027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

