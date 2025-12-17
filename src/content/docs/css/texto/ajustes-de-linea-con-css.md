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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GN2RAPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdEI%2FJyvw0R2VS2f5hqADx%2FXjrkIz7clUHTp4LtK0ImAIgCmHbLcurIKhEOpWkH9w7IJBeARh5x%2BfAVEiMZHBY8r8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJAK%2FR1411izQCIDtSrcA62yU%2F7av99cakLEgHwUapq4WSABmBMdF2vcmwQWJgUJa2i5sJBO%2F%2FW%2FRv9po%2BUu7%2FNsr9BS1LsonRj8ImiAOF5T6xj5b%2Bv4Y9V%2FET9sWriiX1daNjsRaKx0%2BJWA5ukcJpcuAmHgQr5Wq7BUM4i3q4DHOOvn4jp6XXF%2FFZxYFBLezz82zhnujxxKgkJJHNlZF7jiBLVwsI6R7ThqSzwWCqu97wjmxd5Z7r1kLnn3kber2bxhM%2BRrRgEVIMRCSKPfm%2BsaenrnVXeo4vMp%2BNlcOr1EUKGQcgCrOqnisNqSnJ65aidYbvS0DjbuUQFVq%2FNiWyUPRlUu%2BRuIzJ%2FDz5G11EMXgmfQv9Lpeuxw10ZAOdpaHVacDRlr2uwyZmwN6QfO%2ByrNt1C4LfWdasIP4vfgd248gyIZYpt%2FJmZrqklyYKmM9oUNxx%2FrJSbr9bkyb77j2Y6JsuHVdj8gTuoTBr9Qg0GW%2BfMGVC1cMqdQWoaO2ZjH2T0GnZLw8L773g0XLHACGpxeYfDKD0YteHaXctiqrAJ9I%2BID5x%2BQV%2Fodv6l59BUPmEndarYlLcZj70dgT9XatojIFx5XLmB%2BKKTqJsGel99E9P%2B7WutUGc0UpcRa8PPzqflGdTR9Nh5xCgGqMOXFisoGOqUBIj%2BxFKpsozHyTexhUSXF5woiva0NwGR%2Fdc2Wq5t6yp4OLVw87%2BQCqgeUREnBTSkReOCHDPRfvzfn2EUW%2B5hIJV5N8PzR4BiKBUvAG5rhs8YUwyqU4cn%2F04ZDcDQxiPa7Xnolfy5AKPC%2B6a89Bq759R8KagV1iM8D3rArdIZGvoXNUDxIh%2BF9rO%2F%2BI0BL0efa16cC6IpvnnRAwGiRBvGXeMxlWXWo&X-Amz-Signature=d0eb881536c3cc8168754e70e9e0a5779d0e9afce0a6956ac3fcd05a114cb5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GN2RAPF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdEI%2FJyvw0R2VS2f5hqADx%2FXjrkIz7clUHTp4LtK0ImAIgCmHbLcurIKhEOpWkH9w7IJBeARh5x%2BfAVEiMZHBY8r8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJAK%2FR1411izQCIDtSrcA62yU%2F7av99cakLEgHwUapq4WSABmBMdF2vcmwQWJgUJa2i5sJBO%2F%2FW%2FRv9po%2BUu7%2FNsr9BS1LsonRj8ImiAOF5T6xj5b%2Bv4Y9V%2FET9sWriiX1daNjsRaKx0%2BJWA5ukcJpcuAmHgQr5Wq7BUM4i3q4DHOOvn4jp6XXF%2FFZxYFBLezz82zhnujxxKgkJJHNlZF7jiBLVwsI6R7ThqSzwWCqu97wjmxd5Z7r1kLnn3kber2bxhM%2BRrRgEVIMRCSKPfm%2BsaenrnVXeo4vMp%2BNlcOr1EUKGQcgCrOqnisNqSnJ65aidYbvS0DjbuUQFVq%2FNiWyUPRlUu%2BRuIzJ%2FDz5G11EMXgmfQv9Lpeuxw10ZAOdpaHVacDRlr2uwyZmwN6QfO%2ByrNt1C4LfWdasIP4vfgd248gyIZYpt%2FJmZrqklyYKmM9oUNxx%2FrJSbr9bkyb77j2Y6JsuHVdj8gTuoTBr9Qg0GW%2BfMGVC1cMqdQWoaO2ZjH2T0GnZLw8L773g0XLHACGpxeYfDKD0YteHaXctiqrAJ9I%2BID5x%2BQV%2Fodv6l59BUPmEndarYlLcZj70dgT9XatojIFx5XLmB%2BKKTqJsGel99E9P%2B7WutUGc0UpcRa8PPzqflGdTR9Nh5xCgGqMOXFisoGOqUBIj%2BxFKpsozHyTexhUSXF5woiva0NwGR%2Fdc2Wq5t6yp4OLVw87%2BQCqgeUREnBTSkReOCHDPRfvzfn2EUW%2B5hIJV5N8PzR4BiKBUvAG5rhs8YUwyqU4cn%2F04ZDcDQxiPa7Xnolfy5AKPC%2B6a89Bq759R8KagV1iM8D3rArdIZGvoXNUDxIh%2BF9rO%2F%2BI0BL0efa16cC6IpvnnRAwGiRBvGXeMxlWXWo&X-Amz-Signature=18081101b22b1625d81a35e0f299921bb2824eec878685024b620798c43d0ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

