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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY36CH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvbQJpDFs%2BXyZrSVs%2BtFUG7JgyIBM0yyy%2BpYtWZ5YhfgIgRdF54cxt9tfuq7IKCpZZro8tqS3mjbarZmvzKkVIv%2Bcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKwha%2F1zuvvopJlFQyrcA9jkVcdMQ6VZHJyPvWIdnIe31UCwfsOb1MLJ5%2FQkTDP0ZErVMQmDqb0pglQM3mosIiyHujtdkvkbLNkLXcbHMdiJLSMnspHnxoK%2BmfMIYLZJlO1%2B3QMqY4%2FHpDKG1r7sn%2B6TiDS5JljGG%2F43s2D2NLa3383EL4E1FATbopPB4UA8j5uxx2U3V2c1qJgA3D1uNohUCrqeirVxT9CaaVs%2FghhhOXAXQ8k%2BWC2%2FeB4iLRt2xKVhchsBpwdOQcFaLyxrcGXdGBZye%2FNCz8u2vPY5ueO%2Bcpni2hobtLk%2Bdu4qVerIXdFb4WdR5p1tJf4LU9WE75x7G1A5g46g3GmE%2Fo8kH3sGA691SlZc%2Bgz%2BYC8%2BNSfU7Ja%2BRiSnYoamIwk44DEF8R0NuObauz0W94jaagWF8uH0av30%2FePV536%2BF7%2FJasmERu7aO3TkNmGLmLz%2FYtLh8u62yX7blwr7ivLmaFwvR9OrWoNi6Y86NsowCUZkiP6x8%2F6yoSE2hU5563liMMcSsDesnd6w3hTGgzeyLR9MgnZAXZeFi4cvdxcMc7mit2Y4iaG%2B7U%2FEh1EpmdTvquzXzX7haGOKT1Vn55M25R1%2B41A%2Beaqm65f2n5jymz8t2Zpmhn9kJMiOcG3eHxYyMO7piMoGOqUBDceZnjSB%2BdjoLJPQJbR6xSuOF4hWjFY%2BHfjx%2FN0baxsl2UiAcEQmEewwLHnBQvWqgaMHGtmUsM6LX%2FxKn4fUN0AiRZihnQCh1mBCxDKIxESRHFAs30%2FyBvL7HxwNvh%2BZXybx5CY6oL8IrkqKgzRYq2p%2BrP0i7Bs5mmNxAJSqNdaZn5xt2bKeWMDByO8gDw%2BBV6IeH%2FaLFQ%2Fh18DyHnPVVmtTBiJS&X-Amz-Signature=b08f6592c74d4fa4ba000470db7c96020a285d09b9fe450fadfd5d9695afd932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY36CH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvbQJpDFs%2BXyZrSVs%2BtFUG7JgyIBM0yyy%2BpYtWZ5YhfgIgRdF54cxt9tfuq7IKCpZZro8tqS3mjbarZmvzKkVIv%2Bcq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDKwha%2F1zuvvopJlFQyrcA9jkVcdMQ6VZHJyPvWIdnIe31UCwfsOb1MLJ5%2FQkTDP0ZErVMQmDqb0pglQM3mosIiyHujtdkvkbLNkLXcbHMdiJLSMnspHnxoK%2BmfMIYLZJlO1%2B3QMqY4%2FHpDKG1r7sn%2B6TiDS5JljGG%2F43s2D2NLa3383EL4E1FATbopPB4UA8j5uxx2U3V2c1qJgA3D1uNohUCrqeirVxT9CaaVs%2FghhhOXAXQ8k%2BWC2%2FeB4iLRt2xKVhchsBpwdOQcFaLyxrcGXdGBZye%2FNCz8u2vPY5ueO%2Bcpni2hobtLk%2Bdu4qVerIXdFb4WdR5p1tJf4LU9WE75x7G1A5g46g3GmE%2Fo8kH3sGA691SlZc%2Bgz%2BYC8%2BNSfU7Ja%2BRiSnYoamIwk44DEF8R0NuObauz0W94jaagWF8uH0av30%2FePV536%2BF7%2FJasmERu7aO3TkNmGLmLz%2FYtLh8u62yX7blwr7ivLmaFwvR9OrWoNi6Y86NsowCUZkiP6x8%2F6yoSE2hU5563liMMcSsDesnd6w3hTGgzeyLR9MgnZAXZeFi4cvdxcMc7mit2Y4iaG%2B7U%2FEh1EpmdTvquzXzX7haGOKT1Vn55M25R1%2B41A%2Beaqm65f2n5jymz8t2Zpmhn9kJMiOcG3eHxYyMO7piMoGOqUBDceZnjSB%2BdjoLJPQJbR6xSuOF4hWjFY%2BHfjx%2FN0baxsl2UiAcEQmEewwLHnBQvWqgaMHGtmUsM6LX%2FxKn4fUN0AiRZihnQCh1mBCxDKIxESRHFAs30%2FyBvL7HxwNvh%2BZXybx5CY6oL8IrkqKgzRYq2p%2BrP0i7Bs5mmNxAJSqNdaZn5xt2bKeWMDByO8gDw%2BBV6IeH%2FaLFQ%2Fh18DyHnPVVmtTBiJS&X-Amz-Signature=deeef3f208235f6124a5f20503a76907ae7b95d0fa62e7e8f5f3d4d7d9640a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

