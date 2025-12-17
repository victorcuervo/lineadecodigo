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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOJSRTJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtgBcbHBQj5V487gsX3QItM4wrBY4UWqfaTkgHp6TKwwIgNSeRTtIYL0nrtACDJ71jMqDDVA4yn0nwI%2BIpW6ZRdHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGw0GaoWvasnSRLj8CrcA0C4JD3U8YJHzhKKUqDlfLbLuhzhb0eXDrqJVERETSAZGus%2Fvvgjm1GfkNLRz0b9xfENFwiSOODaSZrOkRrBCHjdi%2ByumZ3Y35j9VyMqNpD2674AYfH%2FPtO7vk2siki%2FCb1UGzO0wfwHtJMZnoiA3UAezyOqb9U44L3rt%2FTSEHiemTVA4qXxfuSSan9ebbeSy%2FDGR7qSuZRWyQ5sKiTTmkk97D1dXMlRs8ZFqDwvSK7oHWY55rqv7rZdv8pmRJN%2BHzP2OVf02EoPL4D7ou82SyVdaCUVlWyEoyCcBAXWI2IQnUOOmuwTTXBVsPpzXpak72xFlVZSIxcV5vxOJO1D6dRvQU31IoYoIoQMMAIA9WdFymMya9P4Ch5lwTQiHvEWyGRBYQgclhrqm0%2FJDyjnp%2BBUdoMHkiZ0l2xazPbRRgfP45jAmp4YugDb9TF8mKhju0dhZotnydEkKm4H6sAB%2Bta5anAxO3Sl5qxlaY%2FGU3TSdgdmpnujLgQAVf5rPk1cahFICfnBgG8%2BJK6ZmMHXxxxXry2T1bju4W5%2BAr6lg%2BbCej%2FaMw1Go1uoN6%2FiPWv8lNdQCqj%2BzpSJXE%2BdTptooWVrHfT5856gzhNu2MLkh3iGIu%2FAewa7LxPv3xBMMJ7vicoGOqUBif3QcEQ7J3DX0MkEngealEifTGBOFpFZwtgea9I4I1KixgAaW3345rgzCxwLcaxFZjj9uGtO%2BLIyMWzzM%2FIA%2BEeqM4g43p7rbSkU6aUwwjdaQXKlVvEdiZrua6pW45Is00XZsTP8xVv9IfJhcumlz%2FS2CMhq7zbOBYNurL29Kw07ZJlo5mp0T9PMRov8UInUBjYxNLGWUSMR5Bn5yfrpvIXSEq76&X-Amz-Signature=15b33a56447e13d8f2f9f2ce51717595a7288c67ffea63087c011c54ef79df0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOJSRTJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtgBcbHBQj5V487gsX3QItM4wrBY4UWqfaTkgHp6TKwwIgNSeRTtIYL0nrtACDJ71jMqDDVA4yn0nwI%2BIpW6ZRdHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGw0GaoWvasnSRLj8CrcA0C4JD3U8YJHzhKKUqDlfLbLuhzhb0eXDrqJVERETSAZGus%2Fvvgjm1GfkNLRz0b9xfENFwiSOODaSZrOkRrBCHjdi%2ByumZ3Y35j9VyMqNpD2674AYfH%2FPtO7vk2siki%2FCb1UGzO0wfwHtJMZnoiA3UAezyOqb9U44L3rt%2FTSEHiemTVA4qXxfuSSan9ebbeSy%2FDGR7qSuZRWyQ5sKiTTmkk97D1dXMlRs8ZFqDwvSK7oHWY55rqv7rZdv8pmRJN%2BHzP2OVf02EoPL4D7ou82SyVdaCUVlWyEoyCcBAXWI2IQnUOOmuwTTXBVsPpzXpak72xFlVZSIxcV5vxOJO1D6dRvQU31IoYoIoQMMAIA9WdFymMya9P4Ch5lwTQiHvEWyGRBYQgclhrqm0%2FJDyjnp%2BBUdoMHkiZ0l2xazPbRRgfP45jAmp4YugDb9TF8mKhju0dhZotnydEkKm4H6sAB%2Bta5anAxO3Sl5qxlaY%2FGU3TSdgdmpnujLgQAVf5rPk1cahFICfnBgG8%2BJK6ZmMHXxxxXry2T1bju4W5%2BAr6lg%2BbCej%2FaMw1Go1uoN6%2FiPWv8lNdQCqj%2BzpSJXE%2BdTptooWVrHfT5856gzhNu2MLkh3iGIu%2FAewa7LxPv3xBMMJ7vicoGOqUBif3QcEQ7J3DX0MkEngealEifTGBOFpFZwtgea9I4I1KixgAaW3345rgzCxwLcaxFZjj9uGtO%2BLIyMWzzM%2FIA%2BEeqM4g43p7rbSkU6aUwwjdaQXKlVvEdiZrua6pW45Is00XZsTP8xVv9IfJhcumlz%2FS2CMhq7zbOBYNurL29Kw07ZJlo5mp0T9PMRov8UInUBjYxNLGWUSMR5Bn5yfrpvIXSEq76&X-Amz-Signature=86f0f83d011822d809b995cf3e4c4449a66e6370cfc6eccbafaf780122a7ecde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

