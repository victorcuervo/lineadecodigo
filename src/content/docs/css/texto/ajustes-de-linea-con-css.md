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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HEM7U6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFLF5Ut9kzjfaez%2BHEakbTFD4VSD%2FDTomcrDgYgZikAiEA%2FnYeKP4ww1i%2BJnVJU7G1B1T72GiVH1IPuDZqQx2kd3gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNkelqUCQJl43NrhyrcA1EZQR2LpWhe%2FJEoLw6uCdeGu6SXr2Kt9VWzKdRoFjMPigIZgsTb5GZt4rePZWpGTnDENwtUcLqQA13EW3h8L4Ar0p4zt%2Bc4gTkUioov0ThXbzKzUs3DZg%2FDWH1Jb%2BWQbS78ZzZLeqaldPJnGP6fLDhuxxZ6QOSAA8kbDjGtMoyhiHSCD9jMnZRMl2rngZYaJMrQxr1aWdjYwXv7gxJm2xib%2BV9KTKMJV04Rr3Q67ykfGFh7WOvLfrlWATjOY4A7VQ2yv%2FYqioprpeZLmMU3nLV9Akqhaxv77pUznMmm5REaFXZ0FGVo9LHJbRR2fq4wjftw%2BSIPFe3VffePZorRyrAlKKJb8zz5Nu0hah%2BUd8ntvfL6pcEclSm0CDUQDvfCo4np611I5a%2BdjRqvJqGjYQ2o84qx%2BatmU9zqG0Z75tV7grDtXdvseD2Bb7ZGXy89ITOXHk0vd9u%2FSfv2PJBnEvipeikNC%2BcA3rf7ShOYUtJf3GTPXte%2BWfm03aHZcwyEsC58PUBZNYvsXTSZ3I5Fj92wbeaAUiTKi0YtDOisxpx%2Fb4JPuNFo1kdByu0H0PUTRYriTnlJ%2Fm17vCgNtmPzIQMnbVO4injzwbbPU7cXBs1IIIO8z6bI%2BINFeKGgMKGfi8oGOqUBPkjW3AThH29YeITyolll3g%2BtUnsh11bAN1oxN8on2pU5eZoaAOjuFZD6hk7IPmy7ua9JplkyLlaHvk8D6RXIalUw5kQKYumr3n4UlDDjBwfeDeiK6PzwpP%2BlLBdnC5fOuckF7SC7f6vkCffWRs0hPwtf7%2BWzbVBYgh7GXs5fLsQ7sQOT2zQ52yAvHlVMSiZDw%2BdLEXWc2uwI%2B5H%2Fc6q3u3ElJ4Yu&X-Amz-Signature=06cf8e2673a42f57d2502c13ab444dfe4aaad7a5649558984574bc7d1a03a14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HEM7U6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvFLF5Ut9kzjfaez%2BHEakbTFD4VSD%2FDTomcrDgYgZikAiEA%2FnYeKP4ww1i%2BJnVJU7G1B1T72GiVH1IPuDZqQx2kd3gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNkelqUCQJl43NrhyrcA1EZQR2LpWhe%2FJEoLw6uCdeGu6SXr2Kt9VWzKdRoFjMPigIZgsTb5GZt4rePZWpGTnDENwtUcLqQA13EW3h8L4Ar0p4zt%2Bc4gTkUioov0ThXbzKzUs3DZg%2FDWH1Jb%2BWQbS78ZzZLeqaldPJnGP6fLDhuxxZ6QOSAA8kbDjGtMoyhiHSCD9jMnZRMl2rngZYaJMrQxr1aWdjYwXv7gxJm2xib%2BV9KTKMJV04Rr3Q67ykfGFh7WOvLfrlWATjOY4A7VQ2yv%2FYqioprpeZLmMU3nLV9Akqhaxv77pUznMmm5REaFXZ0FGVo9LHJbRR2fq4wjftw%2BSIPFe3VffePZorRyrAlKKJb8zz5Nu0hah%2BUd8ntvfL6pcEclSm0CDUQDvfCo4np611I5a%2BdjRqvJqGjYQ2o84qx%2BatmU9zqG0Z75tV7grDtXdvseD2Bb7ZGXy89ITOXHk0vd9u%2FSfv2PJBnEvipeikNC%2BcA3rf7ShOYUtJf3GTPXte%2BWfm03aHZcwyEsC58PUBZNYvsXTSZ3I5Fj92wbeaAUiTKi0YtDOisxpx%2Fb4JPuNFo1kdByu0H0PUTRYriTnlJ%2Fm17vCgNtmPzIQMnbVO4injzwbbPU7cXBs1IIIO8z6bI%2BINFeKGgMKGfi8oGOqUBPkjW3AThH29YeITyolll3g%2BtUnsh11bAN1oxN8on2pU5eZoaAOjuFZD6hk7IPmy7ua9JplkyLlaHvk8D6RXIalUw5kQKYumr3n4UlDDjBwfeDeiK6PzwpP%2BlLBdnC5fOuckF7SC7f6vkCffWRs0hPwtf7%2BWzbVBYgh7GXs5fLsQ7sQOT2zQ52yAvHlVMSiZDw%2BdLEXWc2uwI%2B5H%2Fc6q3u3ElJ4Yu&X-Amz-Signature=4d410e6b52751959e1aa7090776e6630223ea282722c46c233e03ecf81219fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

