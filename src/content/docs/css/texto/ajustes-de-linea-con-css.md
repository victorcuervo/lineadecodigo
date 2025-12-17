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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743HP7L7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6DId7Y6MlpUzyqWi8Yqh37oafAw62YZ9asil1cPOZugIgbEy4%2FQDYc8GfXUagc%2FTmHSrPvvOwDGD%2BHuSspEYko0gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFV%2BhdBH9MpqoujgXCrcAzcnooMgZ9Wc8KZYmtu2xe3jYvyoc15QA11ITgclf9NnJNTdPzVkw9Cf1SIFColMJBGQ3MYS6%2FQEcEsda%2FFTtU126xrWsA5hN1vidZNzDAZxeYPuBqN7BwU%2FKVxliOq%2FluK3PdcIpwGgyYVE%2BDYQT0VRdhpZ6R0si7EU%2FmiGQxgrdq%2BlzS%2FyCKWJl271Afct%2BjCRmfH%2BkFQUp5fFrweMDe9Lis%2BsT%2B%2FNdPZKTgFUZxrIdELl14j64nlq9vh8tkldDo%2FPnWaXWpPB0NiHssHSgk4pJF9HvcKgJLXpM1hXKOPPGNmp1CgVBUJoFhKCs9ZzT7AWpXjecWFzjlSeYW%2BrKlSN15jjLv8DMjCCEJxeTiCz8pp%2BiWJ3di1AY5K0BFpg5GufCMSj28V8KsLxR7gxK7QLfRgQeZB7MDEd9b3YCNR1PQ03ZfXIfKugRfKW6Si4PcvNdK4ZqZYnnbhiYcQmkidZ9VDwnjgpkQrreyJ7MoTYM5mkHvI16IWyw7AbYlwpFGwb9ZGl%2FYqMd2L11Z8KSyDHE8Ubh6D%2Fww6lr%2BclrTSWq6ECMkHMau5fgTXs2ZPvHzgwYu2hhs%2BoFOEL0lGMbOLW2Gp%2FPF9DM94sqFFiuFKcXXiWrKNdXDO0PupJMMfGisoGOqUBOVMFj5SovetX6gxp0Y3mbxq0%2FWWiMTuwKJecNvN2QYSz0%2BaXZ4ATPma75mgqMVEQE1MMQLoshVyC3AHWQBuAsezmIxU%2BZR69H15jzU3vReS0sQNkAJBmXV%2BKilcu4Z80RUN6%2FyDVaT7LsMS%2FL9pcwJxjczJ5ZLC5ykfZghp8K8GJhvbfBNDEf6BIDPY6ayykOAK4M%2BhdVpZLkRt5ibGZ8tBBExbP&X-Amz-Signature=59320ffb20e556b56e7e2e09019a789d0006e3e15c63298b30c27f8875c5a375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743HP7L7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6DId7Y6MlpUzyqWi8Yqh37oafAw62YZ9asil1cPOZugIgbEy4%2FQDYc8GfXUagc%2FTmHSrPvvOwDGD%2BHuSspEYko0gq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFV%2BhdBH9MpqoujgXCrcAzcnooMgZ9Wc8KZYmtu2xe3jYvyoc15QA11ITgclf9NnJNTdPzVkw9Cf1SIFColMJBGQ3MYS6%2FQEcEsda%2FFTtU126xrWsA5hN1vidZNzDAZxeYPuBqN7BwU%2FKVxliOq%2FluK3PdcIpwGgyYVE%2BDYQT0VRdhpZ6R0si7EU%2FmiGQxgrdq%2BlzS%2FyCKWJl271Afct%2BjCRmfH%2BkFQUp5fFrweMDe9Lis%2BsT%2B%2FNdPZKTgFUZxrIdELl14j64nlq9vh8tkldDo%2FPnWaXWpPB0NiHssHSgk4pJF9HvcKgJLXpM1hXKOPPGNmp1CgVBUJoFhKCs9ZzT7AWpXjecWFzjlSeYW%2BrKlSN15jjLv8DMjCCEJxeTiCz8pp%2BiWJ3di1AY5K0BFpg5GufCMSj28V8KsLxR7gxK7QLfRgQeZB7MDEd9b3YCNR1PQ03ZfXIfKugRfKW6Si4PcvNdK4ZqZYnnbhiYcQmkidZ9VDwnjgpkQrreyJ7MoTYM5mkHvI16IWyw7AbYlwpFGwb9ZGl%2FYqMd2L11Z8KSyDHE8Ubh6D%2Fww6lr%2BclrTSWq6ECMkHMau5fgTXs2ZPvHzgwYu2hhs%2BoFOEL0lGMbOLW2Gp%2FPF9DM94sqFFiuFKcXXiWrKNdXDO0PupJMMfGisoGOqUBOVMFj5SovetX6gxp0Y3mbxq0%2FWWiMTuwKJecNvN2QYSz0%2BaXZ4ATPma75mgqMVEQE1MMQLoshVyC3AHWQBuAsezmIxU%2BZR69H15jzU3vReS0sQNkAJBmXV%2BKilcu4Z80RUN6%2FyDVaT7LsMS%2FL9pcwJxjczJ5ZLC5ykfZghp8K8GJhvbfBNDEf6BIDPY6ayykOAK4M%2BhdVpZLkRt5ibGZ8tBBExbP&X-Amz-Signature=d5dea68a1cbbcdb56fdb2408df8f0323dcc03d9e25cf3b5dcd7c339d9ce442a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

