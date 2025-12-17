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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ76UENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqKHkB2iqJV1jpaVHa4VsjgcDSBYcm55NKhaMF1Uej7AiEA0oAFptvBHoD3%2FSmM%2F65OAOk8cQqBdaw%2FiuCMupacjcoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJcU7lc6ijnM3oFW%2FCrcA8yroCcWR90R7Xfui43KaB9CMPGIIoHD7OMUM0Mhpy2MUJUrmcMv6ajiFEJAFaPSjuZpXPRw%2F4X%2B23I%2BM1GxxWvax5PlrN35T8DGDRrNRJjBneUINRhkUCCPkl97aBVqBIkR5SZ3UVIiyd9KAOtt5dav9qbyPP6OY%2BfwCZ38JZ7PPQ7XK8qwecFNVJcF8wgLSeoHxD8AK5Ef7whT8z63DQFKUNaVjD7LKh5ajw5qqBwwK99GZZeJfzCdZIJocp6xaVntURSG5oorssvsfIq4wAeTNhLnehAJ0JEH7Zxr%2Bn4MP5KT8FSRJ9TbwAFTVeiauMRn5KpmLC6qZx8yZJ%2BTwnaTNOBbBibWY5WzvsEqhDCcDfmweD9FjSKKl1gcWuGv1rTJVFyH1IkrgvwhxcEWRRlLyHHmbAsq51ZXgj%2B4lZrX2vLOveWaGQVqmVGHaT4FnXkhcm2mPQKrfpg47Bjah5NI0Fdt5L4tQVHHIwzD1w%2Fd6XpwljPcUWQrqTgiMjwmux3Nc2N9RvQ8z5GklNej8iBwl%2BabSaKZzFdFN%2FoTvfUcg4MB2eINoBjCDcwmIzZGrHyAVIgghjXy2JoQBbCHq5OhyybhU1UlQ2kxp1s0ZZcHYkUMzoZY6wYgorbFMOCdicoGOqUBhDDLTTYzgtpJN6PoJlPX535RqXkAvs0lolQE95NQkDo9N6XqpHPTB%2BkpjV9EfWPze1Y1%2B93qr8dlzez7FhZWE1vMdOPlnGCBrZozUdV5S3DFSPjPS0lkbS6uX3VeCN1tQguZi5JCEAWQlaUIAk2mJkGnrDzb9wha7X5englooeWawMnEeidAiuAv3rGAy%2BNPAL88oABhB1yyzpcMDPh2X7O3PjoV&X-Amz-Signature=b234807c6f79f18859108c25da1497b07266b11dec6227801af51151e1bae9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ76UENJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqKHkB2iqJV1jpaVHa4VsjgcDSBYcm55NKhaMF1Uej7AiEA0oAFptvBHoD3%2FSmM%2F65OAOk8cQqBdaw%2FiuCMupacjcoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJcU7lc6ijnM3oFW%2FCrcA8yroCcWR90R7Xfui43KaB9CMPGIIoHD7OMUM0Mhpy2MUJUrmcMv6ajiFEJAFaPSjuZpXPRw%2F4X%2B23I%2BM1GxxWvax5PlrN35T8DGDRrNRJjBneUINRhkUCCPkl97aBVqBIkR5SZ3UVIiyd9KAOtt5dav9qbyPP6OY%2BfwCZ38JZ7PPQ7XK8qwecFNVJcF8wgLSeoHxD8AK5Ef7whT8z63DQFKUNaVjD7LKh5ajw5qqBwwK99GZZeJfzCdZIJocp6xaVntURSG5oorssvsfIq4wAeTNhLnehAJ0JEH7Zxr%2Bn4MP5KT8FSRJ9TbwAFTVeiauMRn5KpmLC6qZx8yZJ%2BTwnaTNOBbBibWY5WzvsEqhDCcDfmweD9FjSKKl1gcWuGv1rTJVFyH1IkrgvwhxcEWRRlLyHHmbAsq51ZXgj%2B4lZrX2vLOveWaGQVqmVGHaT4FnXkhcm2mPQKrfpg47Bjah5NI0Fdt5L4tQVHHIwzD1w%2Fd6XpwljPcUWQrqTgiMjwmux3Nc2N9RvQ8z5GklNej8iBwl%2BabSaKZzFdFN%2FoTvfUcg4MB2eINoBjCDcwmIzZGrHyAVIgghjXy2JoQBbCHq5OhyybhU1UlQ2kxp1s0ZZcHYkUMzoZY6wYgorbFMOCdicoGOqUBhDDLTTYzgtpJN6PoJlPX535RqXkAvs0lolQE95NQkDo9N6XqpHPTB%2BkpjV9EfWPze1Y1%2B93qr8dlzez7FhZWE1vMdOPlnGCBrZozUdV5S3DFSPjPS0lkbS6uX3VeCN1tQguZi5JCEAWQlaUIAk2mJkGnrDzb9wha7X5englooeWawMnEeidAiuAv3rGAy%2BNPAL88oABhB1yyzpcMDPh2X7O3PjoV&X-Amz-Signature=5f5b14958ede80e4d134cc8e8efbb2b3f0dd278483cf2b0122e10fa9e3e0fdf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

