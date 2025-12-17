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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBJRO5X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5hiBUFo2SGUyta0fx4%2FsMmO3kBaUaEQwtq8GGTRnOaAiEA4LkVjcY%2FysiGleCp02YwRo9jQOBEw5Uncsap4KbGXUgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ3E0l2o%2B36nB6Mc%2FCrcAzDhruHka4l9jQWIkfRV6NISN6lT8wDVBHlfAh%2F2Nu7I5tCq3NxBZf6XAOcu8VolmRMNF7GNyXChMQHLt%2FjiZHVv%2B5YgeTm9JkFd82E9DurPWtYotYZKClWoItTrY6qgiNNMjaKO01%2F7QBw9RlufPjx2Jwxbzn52IkSgDHZIL70nigfD6Q4r0TFYs0MRr7aDoNGQUKdIwhLZecpdma%2FoXD5IPddTRZ4DHY17lB8Po5ejD5XmQhblUq387Y9RW6DI5t%2BCMS7nfN1DrHoYXFJa%2Fe3Izj4LsuriC17ohyq%2F%2F7z7dVbTSf5OXy%2B1vzek6%2BByaJHqniUJBmn8oqqkRR0io99Axej5ga%2BtLe4Ks5ckP80i2OPtprJwdXZgq%2FkaAAQtD6I7Xhbydw9VwuRPiwjYpOy2jzRE31pWlvueCQERbhQzX32cdrFKWxfOrXnGOlBNc%2Bc%2B41HwcggHCj0n7EyE%2FSZCudVzMVs8HApyB33isYGQYL3Cs%2Bj6G29OLvgSyHruTtSlOOgyuucstAPMzqrRbEXPNIvm5WGz8EhnlN%2FrvdK4jR9cqHpdsr5DTsVr53Kz0xsumD8sVS2nA1YYJcacjq9cQlVBRcS5JydfWqeq0fmioP0AHxGLeSS%2FHqSYMIDTicoGOqUBoL5oro5Vdo2O8b1IvPn%2FracwDmkDOKoUEKFOJCI2p7Z9rVmcO8LFNNS%2Bq%2FsrnjzSzHqqvh5%2B%2Bg6ln83N2mVuBfbt4qfZ9%2FgoEYhdlcZl7ZxhUU8UzpJdowshc7T03S8JsGIma6%2FDpgGk2Tcd78Nz7b01y4t9pe0SW9%2BAcYQuy6LnZcsvfPRuerUG3JzwbXe%2FoW4atbteTYV5sqejubkxiAxaJCud&X-Amz-Signature=3a84c4353c01ae817b07a5ab36d4576e74a9dd6d66705d727df5a52e4bd7ffbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRBJRO5X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5hiBUFo2SGUyta0fx4%2FsMmO3kBaUaEQwtq8GGTRnOaAiEA4LkVjcY%2FysiGleCp02YwRo9jQOBEw5Uncsap4KbGXUgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ3E0l2o%2B36nB6Mc%2FCrcAzDhruHka4l9jQWIkfRV6NISN6lT8wDVBHlfAh%2F2Nu7I5tCq3NxBZf6XAOcu8VolmRMNF7GNyXChMQHLt%2FjiZHVv%2B5YgeTm9JkFd82E9DurPWtYotYZKClWoItTrY6qgiNNMjaKO01%2F7QBw9RlufPjx2Jwxbzn52IkSgDHZIL70nigfD6Q4r0TFYs0MRr7aDoNGQUKdIwhLZecpdma%2FoXD5IPddTRZ4DHY17lB8Po5ejD5XmQhblUq387Y9RW6DI5t%2BCMS7nfN1DrHoYXFJa%2Fe3Izj4LsuriC17ohyq%2F%2F7z7dVbTSf5OXy%2B1vzek6%2BByaJHqniUJBmn8oqqkRR0io99Axej5ga%2BtLe4Ks5ckP80i2OPtprJwdXZgq%2FkaAAQtD6I7Xhbydw9VwuRPiwjYpOy2jzRE31pWlvueCQERbhQzX32cdrFKWxfOrXnGOlBNc%2Bc%2B41HwcggHCj0n7EyE%2FSZCudVzMVs8HApyB33isYGQYL3Cs%2Bj6G29OLvgSyHruTtSlOOgyuucstAPMzqrRbEXPNIvm5WGz8EhnlN%2FrvdK4jR9cqHpdsr5DTsVr53Kz0xsumD8sVS2nA1YYJcacjq9cQlVBRcS5JydfWqeq0fmioP0AHxGLeSS%2FHqSYMIDTicoGOqUBoL5oro5Vdo2O8b1IvPn%2FracwDmkDOKoUEKFOJCI2p7Z9rVmcO8LFNNS%2Bq%2FsrnjzSzHqqvh5%2B%2Bg6ln83N2mVuBfbt4qfZ9%2FgoEYhdlcZl7ZxhUU8UzpJdowshc7T03S8JsGIma6%2FDpgGk2Tcd78Nz7b01y4t9pe0SW9%2BAcYQuy6LnZcsvfPRuerUG3JzwbXe%2FoW4atbteTYV5sqejubkxiAxaJCud&X-Amz-Signature=5552452b9a4350acab04cbafdcfa9b3daefb4c3fa0512b9e75b1d4b36b05c8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

