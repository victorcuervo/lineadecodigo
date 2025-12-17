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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3L3YB57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxzOLhC6q0uUSDK8nh1qBwugj%2BIuXVwFtTrSUvBlj7CQIgLETsHhlO%2BFIWEz72s%2FWPK9ow6lZ36u4Z1stI9cf9Hf4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN0EIg%2FyFgIsUpp%2F%2FCrcAyvsIc5AUrSOfLfwLgoiicos2P74jdGm2N8yYSvp8vCbA%2BLHoYowwC0RQ6fwJKHdbY8gFqEsYWUCoQsd0PpuX08FLr2ETjrpXcxh9UjDhbML2IN%2FmJoqHB%2BsAw8WpEenKQ4Znkgnw6ie%2BkieceBrHYqd39BgT4cIlF3Kv8XTdUwAxDz3SYlpljAdoZzijroERNl2da8w%2Bs2BWGucbIDgIQaveew8VkwGLWCxLZZHSxZOq2m6Dmz91qZRlutCRYtLptpxI2XN0xsvcVEQJZrZL73ffYU%2F7gdZZiQRlufcrjsqFg0tJzdG%2FlECRE3GniEGB3s28IFe9V3906toTQUlOtEy%2Bnatt0mp5If9xOk7LAEKRD9ENW6IzAJvXVAYU92u2Djbg7T6xlgxzhGowxh%2FpRMkYt8%2F46yX%2FouG73gXb4oi3VfUz%2BnaZGO32QZWTp87bduCPjZXoEn9r1iwJz%2FMNpvEIGKHcskZcfxDEk%2FWLZHGfnBv%2BtOvhcUa4%2FgKk%2FFyot2617vII%2BJ%2FIfFNhmVnrpKyBDQH4SRoUHy4LRWADFEanZ2wY6zLANv3Xj3BZNboK5ZgmHxXmVPM%2BqMKCBYey5sdg3eO5eV%2BH9bAUERUcvQ5bC%2F5TIa321Lrb09xMNX6h8oGOqUBxnpS0id%2Bqa9CEn4pAERLKftremGLZqryLkOjHZQmofmkVXnZWCFsUgmwaqgDtsqQkzReWqovKBhhk2UkogtXChVBLjFuFWjXuQ9A7m%2B2tdk72lGGlgGtzdYSUeXg5qoR0LOdbg5QXM1D7OcyrIthKCKansf%2Fd0gFnCPxD22UZCNsI1F00Ial%2FzPkrolBzhNhPUDU2OdWqNSol1CyHv3t6QHQkuHy&X-Amz-Signature=ac2156d72fbac3f75976ea74d06a72f9e1eed98d85fe9860045926ab3473286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3L3YB57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxzOLhC6q0uUSDK8nh1qBwugj%2BIuXVwFtTrSUvBlj7CQIgLETsHhlO%2BFIWEz72s%2FWPK9ow6lZ36u4Z1stI9cf9Hf4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN0EIg%2FyFgIsUpp%2F%2FCrcAyvsIc5AUrSOfLfwLgoiicos2P74jdGm2N8yYSvp8vCbA%2BLHoYowwC0RQ6fwJKHdbY8gFqEsYWUCoQsd0PpuX08FLr2ETjrpXcxh9UjDhbML2IN%2FmJoqHB%2BsAw8WpEenKQ4Znkgnw6ie%2BkieceBrHYqd39BgT4cIlF3Kv8XTdUwAxDz3SYlpljAdoZzijroERNl2da8w%2Bs2BWGucbIDgIQaveew8VkwGLWCxLZZHSxZOq2m6Dmz91qZRlutCRYtLptpxI2XN0xsvcVEQJZrZL73ffYU%2F7gdZZiQRlufcrjsqFg0tJzdG%2FlECRE3GniEGB3s28IFe9V3906toTQUlOtEy%2Bnatt0mp5If9xOk7LAEKRD9ENW6IzAJvXVAYU92u2Djbg7T6xlgxzhGowxh%2FpRMkYt8%2F46yX%2FouG73gXb4oi3VfUz%2BnaZGO32QZWTp87bduCPjZXoEn9r1iwJz%2FMNpvEIGKHcskZcfxDEk%2FWLZHGfnBv%2BtOvhcUa4%2FgKk%2FFyot2617vII%2BJ%2FIfFNhmVnrpKyBDQH4SRoUHy4LRWADFEanZ2wY6zLANv3Xj3BZNboK5ZgmHxXmVPM%2BqMKCBYey5sdg3eO5eV%2BH9bAUERUcvQ5bC%2F5TIa321Lrb09xMNX6h8oGOqUBxnpS0id%2Bqa9CEn4pAERLKftremGLZqryLkOjHZQmofmkVXnZWCFsUgmwaqgDtsqQkzReWqovKBhhk2UkogtXChVBLjFuFWjXuQ9A7m%2B2tdk72lGGlgGtzdYSUeXg5qoR0LOdbg5QXM1D7OcyrIthKCKansf%2Fd0gFnCPxD22UZCNsI1F00Ial%2FzPkrolBzhNhPUDU2OdWqNSol1CyHv3t6QHQkuHy&X-Amz-Signature=c7e85b1a8419f613d775ece5c16ba9d7e4d88089f6d33552f5cc5ea0d5327f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

