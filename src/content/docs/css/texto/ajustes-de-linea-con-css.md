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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K3GM6I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa8ok3K8ahfokt2vtf9ysreQnjOEy%2F%2F2pVOk0O5%2F3RsAiB%2FJOn1i2LTH75MfxKUmRWFvRroPvBCuWOxBfLtHrtU1SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv1BF2l%2F9B9pAbrlBKtwDOQS13evktinUcgQgXf7RXtSb0A8at4gjykT9G4CB4Z%2Fz6dyRx8OJCE0VbIa6hX8sD2Dz2ZXayx4R1FGrWmaT1PHETWN%2FwBlVA9s%2BPO5AUKmAIRYNAWgrKW1WWEmzJhPCrDo6NhTRZG3mNyx4s%2BLrIkQlwkR5euLiyRoT2hgXmKT5yQlCT8AHB9%2Bvz7s6qRPydbsshdnrCCWEKC8ezr0yr5tjq6v6LXA4JkZgq4sHHGHs2hsjyQUt7bgj1QpRcOGf0mh2fSXVMoEZgp0N6mXf3W46eUJlRPNzaCZFEOmOqXU7V2NPnzfgcSRIEl1s2KDIZrdCsIjv75zFpPmsfsfGFA%2Fg0YnwbeQbrA5YV9Jkzkg6u8AZ%2FgFV7ZUgkuNLh%2FQEkyh7Uxo5d%2F5jnmy2sW2uMnh4t4Yt9d1rqcQZMa6fh7u%2FZ6Pyo%2B3toibvys2K8FYrtvgwpqqWvbtcvON0ljiWLGAPyuResm8b25xIQa7zR5ouXfzDTo27ukwMhkbzuoXVZBv%2FFdqB0z9CIrWCMfnn07boshoLfKwB582vaF9aPdyec58zSAZaD5AHiqyPRlwsKJ1p0IYc86z7TwjsyIn%2BRhmrRKf%2Ba%2FkWV4W61au4Sj1sOWYHzxu4w8xpVXsw9p6LygY6pgGwB%2FuusIdhuimE6yKUFpn5woT1drvNYC0ewo1yESNHAuSEdWHMMvjS2aZ02yjzI4eC%2Fojdr2HJGJ7%2FMabFD%2F42dXvNj%2FGkMs15vjBRU8vCjTp1NsQgSM%2B6T9AHyY6kQcELDnDovRQl0TOIEhjP%2BkaPGwmnzHLFIYq3t4e6r3MoAYVY2uEZ6%2FssUEouBlbPycqCxlR3vAQqdr34S5%2FdiQkzxaNq6bHt&X-Amz-Signature=ceb818fe1f2dcf82515c94854156ce653daf195d5818cddd6d08ec9aaa0f1010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4K3GM6I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa8ok3K8ahfokt2vtf9ysreQnjOEy%2F%2F2pVOk0O5%2F3RsAiB%2FJOn1i2LTH75MfxKUmRWFvRroPvBCuWOxBfLtHrtU1SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv1BF2l%2F9B9pAbrlBKtwDOQS13evktinUcgQgXf7RXtSb0A8at4gjykT9G4CB4Z%2Fz6dyRx8OJCE0VbIa6hX8sD2Dz2ZXayx4R1FGrWmaT1PHETWN%2FwBlVA9s%2BPO5AUKmAIRYNAWgrKW1WWEmzJhPCrDo6NhTRZG3mNyx4s%2BLrIkQlwkR5euLiyRoT2hgXmKT5yQlCT8AHB9%2Bvz7s6qRPydbsshdnrCCWEKC8ezr0yr5tjq6v6LXA4JkZgq4sHHGHs2hsjyQUt7bgj1QpRcOGf0mh2fSXVMoEZgp0N6mXf3W46eUJlRPNzaCZFEOmOqXU7V2NPnzfgcSRIEl1s2KDIZrdCsIjv75zFpPmsfsfGFA%2Fg0YnwbeQbrA5YV9Jkzkg6u8AZ%2FgFV7ZUgkuNLh%2FQEkyh7Uxo5d%2F5jnmy2sW2uMnh4t4Yt9d1rqcQZMa6fh7u%2FZ6Pyo%2B3toibvys2K8FYrtvgwpqqWvbtcvON0ljiWLGAPyuResm8b25xIQa7zR5ouXfzDTo27ukwMhkbzuoXVZBv%2FFdqB0z9CIrWCMfnn07boshoLfKwB582vaF9aPdyec58zSAZaD5AHiqyPRlwsKJ1p0IYc86z7TwjsyIn%2BRhmrRKf%2Ba%2FkWV4W61au4Sj1sOWYHzxu4w8xpVXsw9p6LygY6pgGwB%2FuusIdhuimE6yKUFpn5woT1drvNYC0ewo1yESNHAuSEdWHMMvjS2aZ02yjzI4eC%2Fojdr2HJGJ7%2FMabFD%2F42dXvNj%2FGkMs15vjBRU8vCjTp1NsQgSM%2B6T9AHyY6kQcELDnDovRQl0TOIEhjP%2BkaPGwmnzHLFIYq3t4e6r3MoAYVY2uEZ6%2FssUEouBlbPycqCxlR3vAQqdr34S5%2FdiQkzxaNq6bHt&X-Amz-Signature=3d4fb1ac3ab55a4bd24ed92f0ca0a2a27c50f3b51748905cba01bd8c1b964bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

