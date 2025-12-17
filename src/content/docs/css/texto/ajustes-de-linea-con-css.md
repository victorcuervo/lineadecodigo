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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WF333Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7wIZT8SstGPcI1z1%2FszhF2oZcJp%2BzHUSiMqecObycbAiEAhZLlD05PCLYPik7b02z6N6jemoD7YOUflhc695T5IcUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVd2UfHJBnGCkq%2F1SrcA6T1mxw4xlgrtkOGtb%2FImK%2F2u2WBzTDeva1llxc2N8PV4R5ybbctwjmygCrW1Ca2HkHUMvgGvX2F%2FTqcLiumjZx%2BSPRRvd1bXvUm7ZhnoSEJIg1eozCWAHaHHXrBjgKRt9vy5bUgbwA5RUeajxwobhUPv42d92YyPbZ%2Bymj6I%2F3WfPT9hmzAabOVkMBsm58K6gFyr8ET5me5r6YJlGuwc7v07pe3vaN58wCo4KAc6hgMfMZSZfr92LM7RkBPkddFLNxiEAcgF1fBCIY64K9WNcm%2F3Z%2BsNm8uoqKuOdnoOlVUVnDqGHurW6m7QIJbfRTqJ2blDKLvaYRMtOwRx9cPip8PGi2BehmPv4oQIGj51pK4SZM0uXpQVhnIyy1cmZ30aBQw6dvL1dRVlBtekV01SSEtlrpFUenfbE5QUqPeFN1sG3yRd%2FRpzNHfB5b4YdSWk36QR%2BhNbBbXrMqUoyJQEoO4qgy2ADb55eOlOjabceO050JKCbRMo57EEkWwtRq8do7oYCk1UBW3%2F79umEdLdVBSTNZeiefq2OdZTIgmJsANGIvB8sDb0HIgqnqkVc08ODHgmBef1Fo4rz%2BgF90%2BOzNDi3Zhsbi7lqoU4N5TF4pjllIRC97Jrz73l%2BaVMK2Bi8oGOqUBfP8TM3noHJiCuYL95gqF0aqV4C66kq5vdLhJ9c6bz2XSZNdy4sMm5eNYz59e4ig8XNsWxXHHQS02HVSOx%2FzIU9giqaU3gB%2BKPSirnA752taS88QzTzd3XYExGE%2Fc7SIigJB0bpjJE%2BZ6008j2mlvJFi7DnYQCCkb71haQc6yj%2B07dxxDN9wYAqJKGlMOogZrMyOcgGRRBj%2BAI56cvfG9wy9JYhuf&X-Amz-Signature=f6c5989c6b680e380849546f52d446f20de39a2592f26ac25c2d43bfef12006f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WF333Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7wIZT8SstGPcI1z1%2FszhF2oZcJp%2BzHUSiMqecObycbAiEAhZLlD05PCLYPik7b02z6N6jemoD7YOUflhc695T5IcUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVd2UfHJBnGCkq%2F1SrcA6T1mxw4xlgrtkOGtb%2FImK%2F2u2WBzTDeva1llxc2N8PV4R5ybbctwjmygCrW1Ca2HkHUMvgGvX2F%2FTqcLiumjZx%2BSPRRvd1bXvUm7ZhnoSEJIg1eozCWAHaHHXrBjgKRt9vy5bUgbwA5RUeajxwobhUPv42d92YyPbZ%2Bymj6I%2F3WfPT9hmzAabOVkMBsm58K6gFyr8ET5me5r6YJlGuwc7v07pe3vaN58wCo4KAc6hgMfMZSZfr92LM7RkBPkddFLNxiEAcgF1fBCIY64K9WNcm%2F3Z%2BsNm8uoqKuOdnoOlVUVnDqGHurW6m7QIJbfRTqJ2blDKLvaYRMtOwRx9cPip8PGi2BehmPv4oQIGj51pK4SZM0uXpQVhnIyy1cmZ30aBQw6dvL1dRVlBtekV01SSEtlrpFUenfbE5QUqPeFN1sG3yRd%2FRpzNHfB5b4YdSWk36QR%2BhNbBbXrMqUoyJQEoO4qgy2ADb55eOlOjabceO050JKCbRMo57EEkWwtRq8do7oYCk1UBW3%2F79umEdLdVBSTNZeiefq2OdZTIgmJsANGIvB8sDb0HIgqnqkVc08ODHgmBef1Fo4rz%2BgF90%2BOzNDi3Zhsbi7lqoU4N5TF4pjllIRC97Jrz73l%2BaVMK2Bi8oGOqUBfP8TM3noHJiCuYL95gqF0aqV4C66kq5vdLhJ9c6bz2XSZNdy4sMm5eNYz59e4ig8XNsWxXHHQS02HVSOx%2FzIU9giqaU3gB%2BKPSirnA752taS88QzTzd3XYExGE%2Fc7SIigJB0bpjJE%2BZ6008j2mlvJFi7DnYQCCkb71haQc6yj%2B07dxxDN9wYAqJKGlMOogZrMyOcgGRRBj%2BAI56cvfG9wy9JYhuf&X-Amz-Signature=56a44ecf5882672e207725cab112b2283dd063454c9a23c5eaf9ad64718a41f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

