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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODIYOXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG7d0ShAQlsivQ9FNvA8LFB6DkNHQsDy35b8HQwCmAsAiEAoWZegOOoO0KHkOGwsF%2BAXacU4hAcefFWCIxy7%2BtqLoAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVqVrvi7jtPJrBpTyrcA%2FO1N3ctMCXqe%2BN7WPpcRKYlSkBUXMc80ojwWZl5eETOaIHl7BLlBqbzHnfLf9ZaFImkXrufX75bw17kzWPd%2FnOSeG6hwCq8plUGfI1r92Lpvxrk8k0WNy%2FtAmufWMnXvzDNkgdco80lDxwG7KM4X2mv9HhUlOblWs7IfqGquXmgnmtFNOaZXZUJ0evoF8JbmrH0DQAXS6vR4YylvHVE3J9eN%2FoSO21sJqQHLfrdkgZN5Yz29I0r7Ca4UZNGIc7xC18uSZKyxAZF8CW%2Fne%2FJ6kITDJvFkb2kenuzVEugjjft2C1LupDr4Rgr0uyS8HMDK8R%2BEPlOhOZicVzL3V2WWMRfbhA0ns4J%2Brx6%2BVzJNwG11RL%2BGiB2BGG9G1ypw68F1D7UaFMI2fBwXP0VqPzt2CpSiFi6AeYsK6fPo%2F56r%2BxUgpnp0QxzRd2aBslQY0Ip5RSJ1EqbAJMAZ8lp6dt%2BnUtpOOO6RjC3k8eaUlwfM6W%2FMKD5ZNCIIWtr5ZL00w3w1daxaT8Uyo9lRP1y%2FtG8aja1aqMX%2BwoAA4Z%2BvYDWQdQot2L4w%2Fo6F9suuuSHPb4Hm1y2TAIDUHxLrkF%2FjX1qIQ7DRrkr61fysduuo7pqg3tUNUjlipxwJGkfy%2BnwMKDjisoGOqUBDtVbi0YnxzKB29fQpM0xQIFfPFNLupkez3d7k0FCImtGypoWGNDFDNstONQLOvVLj2RI1gVhauhe2xsftiPyBcFk0nt0m5IsOcyxTN9oTg6dn4ROq06UG2QprN86EWIoDN7710Pj3kynNuHtUCYiOHZvHZhCrv73Ezc5bR%2FW0ZhI1rlSkA2jcuhnAtP%2FeG6GLYb3wVYUFOCVhcJRpINNKbB0MpGw&X-Amz-Signature=fc0eee6d27bf7d27d0ff4c108f35cbe09f4a782c2bd7f016b4ce04abb37ee537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODIYOXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFG7d0ShAQlsivQ9FNvA8LFB6DkNHQsDy35b8HQwCmAsAiEAoWZegOOoO0KHkOGwsF%2BAXacU4hAcefFWCIxy7%2BtqLoAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIVqVrvi7jtPJrBpTyrcA%2FO1N3ctMCXqe%2BN7WPpcRKYlSkBUXMc80ojwWZl5eETOaIHl7BLlBqbzHnfLf9ZaFImkXrufX75bw17kzWPd%2FnOSeG6hwCq8plUGfI1r92Lpvxrk8k0WNy%2FtAmufWMnXvzDNkgdco80lDxwG7KM4X2mv9HhUlOblWs7IfqGquXmgnmtFNOaZXZUJ0evoF8JbmrH0DQAXS6vR4YylvHVE3J9eN%2FoSO21sJqQHLfrdkgZN5Yz29I0r7Ca4UZNGIc7xC18uSZKyxAZF8CW%2Fne%2FJ6kITDJvFkb2kenuzVEugjjft2C1LupDr4Rgr0uyS8HMDK8R%2BEPlOhOZicVzL3V2WWMRfbhA0ns4J%2Brx6%2BVzJNwG11RL%2BGiB2BGG9G1ypw68F1D7UaFMI2fBwXP0VqPzt2CpSiFi6AeYsK6fPo%2F56r%2BxUgpnp0QxzRd2aBslQY0Ip5RSJ1EqbAJMAZ8lp6dt%2BnUtpOOO6RjC3k8eaUlwfM6W%2FMKD5ZNCIIWtr5ZL00w3w1daxaT8Uyo9lRP1y%2FtG8aja1aqMX%2BwoAA4Z%2BvYDWQdQot2L4w%2Fo6F9suuuSHPb4Hm1y2TAIDUHxLrkF%2FjX1qIQ7DRrkr61fysduuo7pqg3tUNUjlipxwJGkfy%2BnwMKDjisoGOqUBDtVbi0YnxzKB29fQpM0xQIFfPFNLupkez3d7k0FCImtGypoWGNDFDNstONQLOvVLj2RI1gVhauhe2xsftiPyBcFk0nt0m5IsOcyxTN9oTg6dn4ROq06UG2QprN86EWIoDN7710Pj3kynNuHtUCYiOHZvHZhCrv73Ezc5bR%2FW0ZhI1rlSkA2jcuhnAtP%2FeG6GLYb3wVYUFOCVhcJRpINNKbB0MpGw&X-Amz-Signature=0ebf27906295134656ec47d533caf63247d4b140c433792d3900e682b0623c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

