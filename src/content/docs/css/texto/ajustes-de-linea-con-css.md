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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKUXGJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6v6Ulw1KsU9RyKbUpEm8TaZK2S0aqLLumY2TcwJV34AiBEuIXHCE5OMglWiSUDFAve36%2BY4HA3YW9RoPAgS%2Faw2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAhqik1QIIqH6KoxKtwDmHTitSYh5zI11DamWan49jKnISl0WnJYcPVI6t60LP%2F98LLQV1b54WKHHSN15jrcsh5pYQtaFZpIsUBdjbmiZahyJJaR%2BmEz%2Fa7aonhQwbKUZZ9CiAVU0klHFniGVrU%2Bd2LzbfLn8Zhn8TMpxLj9aef3Sy8o0OLxBQiAPrmf%2FK8cDabH6%2FZXXGy%2BUzXr9%2FVllwRDXxYNTHHRghOiKt0A9rak8w7px8A9k2cJGeeoJkmDHdSr82CnBaJZBo9fuQmXnJ6t9aaDuP5c6%2Bp5CcB8O7AO8CuK1hdYClNoPOKlt9Oe0nhHifPntmIo43ziJVbCRm2oXfBZ8wv3nb5pPvRVXw3a8vR%2FU0l6IlakTi%2Bczht7dq6sXR8%2BPIrYIIr2dD3Dotoov5bvYUHopuz%2FLGB%2FchypawMYQo1yCOXxCXB3m1WbpfZWZmZoVvS10odYdA5QpA7U0I11a1Ig5jMMwtvrvtYTv1%2Bbk1m3zdSIxe2Zo6xaYqQAxxXEai2lvUYg2AK7fg9%2FJg5maxxhIF2sA59%2Bau%2BofSguRLtU%2Fd8afVyKA4lD%2BC032thWaZ69RiZZxxBU%2F23d7sR%2BCl5zEhjookea%2FHKi1YAjM2SFBpHz2SnEBC5neYz7DBXw24gUP18w0K6MygY6pgGG3X8hO92MVIj2rzBa7MdJAUaRtW%2B89CHQYU3QGM5Zu83ZPadJoEo44hHUrf3wPrGzptiFKzwnci0ixEGlt76zLmy9Cs%2BmwEtBgEZkqmkl6uYrhWghM1TNVCwP7bRGzCfK1C7Ny4o6TdAVnZK9zvvKEGu4O5Vdd8Vu0Y4lDUyVBa2QVz7phHt7NxaMjHvWEdPb%2F6zBe1oQWBeR2ySrZZ1ugMoawtFu&X-Amz-Signature=3a3f769f1a8d52119c5895daffd716c3ef6e43bfc578f4cb79668e2c5512e940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKUXGJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6v6Ulw1KsU9RyKbUpEm8TaZK2S0aqLLumY2TcwJV34AiBEuIXHCE5OMglWiSUDFAve36%2BY4HA3YW9RoPAgS%2Faw2iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXAhqik1QIIqH6KoxKtwDmHTitSYh5zI11DamWan49jKnISl0WnJYcPVI6t60LP%2F98LLQV1b54WKHHSN15jrcsh5pYQtaFZpIsUBdjbmiZahyJJaR%2BmEz%2Fa7aonhQwbKUZZ9CiAVU0klHFniGVrU%2Bd2LzbfLn8Zhn8TMpxLj9aef3Sy8o0OLxBQiAPrmf%2FK8cDabH6%2FZXXGy%2BUzXr9%2FVllwRDXxYNTHHRghOiKt0A9rak8w7px8A9k2cJGeeoJkmDHdSr82CnBaJZBo9fuQmXnJ6t9aaDuP5c6%2Bp5CcB8O7AO8CuK1hdYClNoPOKlt9Oe0nhHifPntmIo43ziJVbCRm2oXfBZ8wv3nb5pPvRVXw3a8vR%2FU0l6IlakTi%2Bczht7dq6sXR8%2BPIrYIIr2dD3Dotoov5bvYUHopuz%2FLGB%2FchypawMYQo1yCOXxCXB3m1WbpfZWZmZoVvS10odYdA5QpA7U0I11a1Ig5jMMwtvrvtYTv1%2Bbk1m3zdSIxe2Zo6xaYqQAxxXEai2lvUYg2AK7fg9%2FJg5maxxhIF2sA59%2Bau%2BofSguRLtU%2Fd8afVyKA4lD%2BC032thWaZ69RiZZxxBU%2F23d7sR%2BCl5zEhjookea%2FHKi1YAjM2SFBpHz2SnEBC5neYz7DBXw24gUP18w0K6MygY6pgGG3X8hO92MVIj2rzBa7MdJAUaRtW%2B89CHQYU3QGM5Zu83ZPadJoEo44hHUrf3wPrGzptiFKzwnci0ixEGlt76zLmy9Cs%2BmwEtBgEZkqmkl6uYrhWghM1TNVCwP7bRGzCfK1C7Ny4o6TdAVnZK9zvvKEGu4O5Vdd8Vu0Y4lDUyVBa2QVz7phHt7NxaMjHvWEdPb%2F6zBe1oQWBeR2ySrZZ1ugMoawtFu&X-Amz-Signature=2b87151809a2c10ed9b56366204a243c3f0e363f0f962086c8b880f419164d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

