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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSM7DWT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FxGM0%2FbdHs71adkWXSZ06K7GV6qxl9fnxFCsJa9ocAIgcCEqX6MjtM%2Bezm4GIIPyyH9bJnh7rXyKVSz8iRTk00gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGmfQdLNJrUmIe8xBSrcA6G2F3V%2B%2FLMAo1Se%2ByQKxz8TVmmFcEtJ8DnbYl%2FXns06MhkUIlxPGgXHPXE8FKgxfP5%2BEZ%2FdZPp2%2Fm0oswmsOhdVLh0Ylt1f1hFu%2FIeywLNOLwvX0W2epZcHEFJv0RMDuJlCKLy5qs7bIoJf7OXzo81sLiwZ%2BQUJKHi8BjjwkvBGcgrHbg5yJWSnq7reKshJ91%2FdmpnAwgKXA%2BSc6qoEHuvWlfOHjE4%2F%2B8gBTY82ckM8yVa00KNxt1r5Iu5X9yr0hzfliRw5qDNIXq4GDWbS%2BM%2FCeWy6m5COKCWlQd9YOPHhEqdQdp5Qtp2goXbI2%2FSEDlRKm%2FShQ1tuZNhiOH%2BmjGrkMTSnmm%2ByJDY%2B4%2Bwv6p4bu%2BjT%2B61FjPdRWhSp8EZ87C3W02l290sq047k0r6pq44Ag8cmWRNCADoO23UtZw2RVM%2FFopEC%2B5pnVSo7oUDfgpEDTQh7RrSRwJfq9R3bdFiduCX7rgSZ12fOREk2gopwAE90oNsO7Mg05ecS1fQmtbyU8d3Odg0zvX3zOb4RpbbEXEzXwLYQGwNZwD9Ql7fa3PuJIzUZIqdQNbdO%2BhLZ46KQi5fy1oi4lxuMARF27RokiGMOYPp8Ek7cmu5tbesEkTCdGUcfuAVQtCAEMM6dicoGOqUBSc3QLo93csPib6RXl7o5uTMMm%2Fz%2FC30w2oMh0P1FaOmWK%2FvMzbxq3p4SFnrQDDxbyq5QTD5ls7IIigJuDGS9al9ZZ1c7z6sZm6hYqfwvBgVRnXmr9M%2Fp660sVsGT3Vn9zDEwBJbDxXQx8h3%2B38fwweQrBx%2FolVC9NEpqRNr4bjXCbZ9WvOIOlfcDMei4VdCanUW%2Fsv49%2FRz%2Bd0tEHq8ADaS9uDtp&X-Amz-Signature=8b6f3a66006e269d4bb0c6e046afd6289147d750d256a1fbd125870f0501ac6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSM7DWT3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FxGM0%2FbdHs71adkWXSZ06K7GV6qxl9fnxFCsJa9ocAIgcCEqX6MjtM%2Bezm4GIIPyyH9bJnh7rXyKVSz8iRTk00gq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGmfQdLNJrUmIe8xBSrcA6G2F3V%2B%2FLMAo1Se%2ByQKxz8TVmmFcEtJ8DnbYl%2FXns06MhkUIlxPGgXHPXE8FKgxfP5%2BEZ%2FdZPp2%2Fm0oswmsOhdVLh0Ylt1f1hFu%2FIeywLNOLwvX0W2epZcHEFJv0RMDuJlCKLy5qs7bIoJf7OXzo81sLiwZ%2BQUJKHi8BjjwkvBGcgrHbg5yJWSnq7reKshJ91%2FdmpnAwgKXA%2BSc6qoEHuvWlfOHjE4%2F%2B8gBTY82ckM8yVa00KNxt1r5Iu5X9yr0hzfliRw5qDNIXq4GDWbS%2BM%2FCeWy6m5COKCWlQd9YOPHhEqdQdp5Qtp2goXbI2%2FSEDlRKm%2FShQ1tuZNhiOH%2BmjGrkMTSnmm%2ByJDY%2B4%2Bwv6p4bu%2BjT%2B61FjPdRWhSp8EZ87C3W02l290sq047k0r6pq44Ag8cmWRNCADoO23UtZw2RVM%2FFopEC%2B5pnVSo7oUDfgpEDTQh7RrSRwJfq9R3bdFiduCX7rgSZ12fOREk2gopwAE90oNsO7Mg05ecS1fQmtbyU8d3Odg0zvX3zOb4RpbbEXEzXwLYQGwNZwD9Ql7fa3PuJIzUZIqdQNbdO%2BhLZ46KQi5fy1oi4lxuMARF27RokiGMOYPp8Ek7cmu5tbesEkTCdGUcfuAVQtCAEMM6dicoGOqUBSc3QLo93csPib6RXl7o5uTMMm%2Fz%2FC30w2oMh0P1FaOmWK%2FvMzbxq3p4SFnrQDDxbyq5QTD5ls7IIigJuDGS9al9ZZ1c7z6sZm6hYqfwvBgVRnXmr9M%2Fp660sVsGT3Vn9zDEwBJbDxXQx8h3%2B38fwweQrBx%2FolVC9NEpqRNr4bjXCbZ9WvOIOlfcDMei4VdCanUW%2Fsv49%2FRz%2Bd0tEHq8ADaS9uDtp&X-Amz-Signature=ce8c2e96c584454ded6328314cb60dff909b2c014f56793c983926f87e7fc3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

