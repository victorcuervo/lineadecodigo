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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQ4HH75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6iCkf0ovBHt0YQHrH7NTRVEPfHgYzJBWkV3%2Fk7eI8dAiEA2amyVhjqi9UmcXBuPPYcZP%2FI3Z66t7ST7Tco1IPmkV8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMRgXsudZLFFQw3aBircA82lcUlkH5Lzcy%2B5P%2B%2BUaz6BgTpHgc5FB%2FczxieFgBPfSeZ9V5t%2FFpS5XHtJA2T%2BQbovz%2FJAdRceYCnjVPlTHZn7IvmL%2F8%2B9a%2Fq5lp6lniwyMgTdcstDUcgWN2yoPwslALGCMm1ISQVrfQDSau595GJSkcaZE68l5aLaYhDscdXQ5tNnRLdOIfNX93P5pr5tShgrDJqHm9wLkmoZkKpyN%2FDinws54bVDLmMqpDH6o1%2FJGtU6ZiQjhEBINGekzYXQmo0gk1jj4Scv2k0S1s8ABOhLd16c7LwJVUBsPTBbtl0Cljw7W2lrFOu%2FSWzBoXSlMmZY7tWNNlmYrREDQXJ0mcthd3BiJ1K3%2FGcV88rnjDUav2sNg5%2Fp6LqPUO6wM6wlyvBstNd3XhfaTTnLHnRFq%2BPyw8noM9N4w%2FTim1B6X79W9tlnVasfPELvAaTr2mB369DD7UPE1P5hLBW9JJR8WIisSGjxNlzNUeFG23UkQqkZf4C8AlJoaBiRVkIP9sHau2VP4KV%2F6%2B9maH9f2db9WeqZSdS4heFi6G0pGS4VuXMP20LF5UcL6YeVWDwBqgSQDF0ywrRBEbcVMai2redZBt4M4zrBTRtFdpvU%2BZ7oVRsUm21CyvftdpTleK8CMO7piMoGOqUBFXJ8GHWrwYf2XjFxTeY8Df3hyMAH9vPZiSn046%2FJY5HvEFMa2MPKZkXuxOpykT4mlPkYFBfeZxe%2Ban7wcFy%2BYvMm5LvtsgnCbw3qjIGuo5LLeU1uTsvF%2B2PtpDoDTnOewtrqz2hVHevoJ4pUTRKERtjNXqjj8crOlS01Tw9RL9fCk%2BE%2BD6UtqBoAErJ3pMyodAOdghoQOzLWgMoVfHLD7KmqvbtW&X-Amz-Signature=b76e606658c30c68805014e289a2b21ca613d4128b8e50e9f5b24e984103163a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQ4HH75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6iCkf0ovBHt0YQHrH7NTRVEPfHgYzJBWkV3%2Fk7eI8dAiEA2amyVhjqi9UmcXBuPPYcZP%2FI3Z66t7ST7Tco1IPmkV8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMRgXsudZLFFQw3aBircA82lcUlkH5Lzcy%2B5P%2B%2BUaz6BgTpHgc5FB%2FczxieFgBPfSeZ9V5t%2FFpS5XHtJA2T%2BQbovz%2FJAdRceYCnjVPlTHZn7IvmL%2F8%2B9a%2Fq5lp6lniwyMgTdcstDUcgWN2yoPwslALGCMm1ISQVrfQDSau595GJSkcaZE68l5aLaYhDscdXQ5tNnRLdOIfNX93P5pr5tShgrDJqHm9wLkmoZkKpyN%2FDinws54bVDLmMqpDH6o1%2FJGtU6ZiQjhEBINGekzYXQmo0gk1jj4Scv2k0S1s8ABOhLd16c7LwJVUBsPTBbtl0Cljw7W2lrFOu%2FSWzBoXSlMmZY7tWNNlmYrREDQXJ0mcthd3BiJ1K3%2FGcV88rnjDUav2sNg5%2Fp6LqPUO6wM6wlyvBstNd3XhfaTTnLHnRFq%2BPyw8noM9N4w%2FTim1B6X79W9tlnVasfPELvAaTr2mB369DD7UPE1P5hLBW9JJR8WIisSGjxNlzNUeFG23UkQqkZf4C8AlJoaBiRVkIP9sHau2VP4KV%2F6%2B9maH9f2db9WeqZSdS4heFi6G0pGS4VuXMP20LF5UcL6YeVWDwBqgSQDF0ywrRBEbcVMai2redZBt4M4zrBTRtFdpvU%2BZ7oVRsUm21CyvftdpTleK8CMO7piMoGOqUBFXJ8GHWrwYf2XjFxTeY8Df3hyMAH9vPZiSn046%2FJY5HvEFMa2MPKZkXuxOpykT4mlPkYFBfeZxe%2Ban7wcFy%2BYvMm5LvtsgnCbw3qjIGuo5LLeU1uTsvF%2B2PtpDoDTnOewtrqz2hVHevoJ4pUTRKERtjNXqjj8crOlS01Tw9RL9fCk%2BE%2BD6UtqBoAErJ3pMyodAOdghoQOzLWgMoVfHLD7KmqvbtW&X-Amz-Signature=258ec72dd7ced5a391e596ecba970dbb25ae4bbad2d43129870467039d441808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

