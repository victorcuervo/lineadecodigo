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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HI26Z2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rzEMqyrt2l6OBI5qnL%2BnNd6g%2BbXgp%2Bnd2RM3JT4kNQIgcdVv1vCrIXMT7XDekZWkESW8ZQ67L%2BGszdaq8m6IFz4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLMPdMFj3tF%2Bwlxw5ircA06WE%2FVtJtN5WLeesgZdqPocOVWJqbNpddKbKJa55cY8WZT0IAMHT34f0wVpEwBz%2BLV2tMK1D%2BGsV7TZ9EEzOHEGenGuVNB3jPFhV33xTmLh1Is7lMOPRXw7Io7zrBrIQ%2BVwUMGjLYt7AnlCpB8jHeC6IfO1of58aLqCQJIgBuS3aWuPrIdxPWL451Kda5YYslZZToomTuhf7vU7aBkXF79q%2F8uczsH%2FES5JQ8OKtbMVl4oJnUzTWEnv6EsZlv66qzf%2BXhGtEPUCGGluGRQ1sN9CKWcujwvLkywaOcQRooa4ESFVZ67JPfe9yU0A6p4w4QBbC1waJ3v42ESsuClYxlmvZ5IFC2UadVBAwLnWbmKpkcEERGVPrQheEzdukL9dzg4hQtmR9p%2FpvHa9fOnVXuxMZBuewr2gfJOuZuScKhLUnp%2FlZMggd5Y9JKNfNFh2wJmjLpzJHR8awswO8EtkB25hSQZoJftzbzeombPd%2BcY763Fm01T9yoeLhAxWOtxx90z3VvJpIr3MjAnLQ%2Fx4R6C4gJZyFXwEFMD2%2BFJI1Hdp4N3WbdsU0HWs28lm4DmVH%2FjNvq67aKWWShWi%2Fo3FfKj%2BbE89ElQl4BKyV6heaTquh4O7ZQTVFKxIya70MLedicoGOqUB16PydUBQ%2BaEBBLQeui3xdHjRMCtKMeGRP2UYc2%2Bkh3OAA0VfTIsS1CSPxaW62Y0xPVCP%2FZ3MrWb%2BwUYSJAV%2BJyF8EC1igCjoL2eq1304MAoI3lC7%2FpOpniPCrbwQzzz3f1bcQMETzCkn%2BgKLpm1trr5pg52One7VlOBKjVBLl4s8cAyl%2ByzN5Np1Wotg8PAU91mjU7EeZpMiMDaR0RJHy5PuNfTC&X-Amz-Signature=5420cde28d475abd07076f12238dc3f7a50e17b5e44bedebeac1590bfbff30a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HI26Z2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8rzEMqyrt2l6OBI5qnL%2BnNd6g%2BbXgp%2Bnd2RM3JT4kNQIgcdVv1vCrIXMT7XDekZWkESW8ZQ67L%2BGszdaq8m6IFz4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLMPdMFj3tF%2Bwlxw5ircA06WE%2FVtJtN5WLeesgZdqPocOVWJqbNpddKbKJa55cY8WZT0IAMHT34f0wVpEwBz%2BLV2tMK1D%2BGsV7TZ9EEzOHEGenGuVNB3jPFhV33xTmLh1Is7lMOPRXw7Io7zrBrIQ%2BVwUMGjLYt7AnlCpB8jHeC6IfO1of58aLqCQJIgBuS3aWuPrIdxPWL451Kda5YYslZZToomTuhf7vU7aBkXF79q%2F8uczsH%2FES5JQ8OKtbMVl4oJnUzTWEnv6EsZlv66qzf%2BXhGtEPUCGGluGRQ1sN9CKWcujwvLkywaOcQRooa4ESFVZ67JPfe9yU0A6p4w4QBbC1waJ3v42ESsuClYxlmvZ5IFC2UadVBAwLnWbmKpkcEERGVPrQheEzdukL9dzg4hQtmR9p%2FpvHa9fOnVXuxMZBuewr2gfJOuZuScKhLUnp%2FlZMggd5Y9JKNfNFh2wJmjLpzJHR8awswO8EtkB25hSQZoJftzbzeombPd%2BcY763Fm01T9yoeLhAxWOtxx90z3VvJpIr3MjAnLQ%2Fx4R6C4gJZyFXwEFMD2%2BFJI1Hdp4N3WbdsU0HWs28lm4DmVH%2FjNvq67aKWWShWi%2Fo3FfKj%2BbE89ElQl4BKyV6heaTquh4O7ZQTVFKxIya70MLedicoGOqUB16PydUBQ%2BaEBBLQeui3xdHjRMCtKMeGRP2UYc2%2Bkh3OAA0VfTIsS1CSPxaW62Y0xPVCP%2FZ3MrWb%2BwUYSJAV%2BJyF8EC1igCjoL2eq1304MAoI3lC7%2FpOpniPCrbwQzzz3f1bcQMETzCkn%2BgKLpm1trr5pg52One7VlOBKjVBLl4s8cAyl%2ByzN5Np1Wotg8PAU91mjU7EeZpMiMDaR0RJHy5PuNfTC&X-Amz-Signature=58808729889850fc0013550f266dc64e89a5f88888058cdbfb7aff582e0b30f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

