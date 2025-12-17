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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSSFMIK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4Mi9GYNg79iPn3hdb6XR2MjO4UJ16a344QJqij7jVAiBQbYtTvExDpcPKj9biKovvMW9%2ByafKXnUmQuSgabH40iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqJnK6PraNbqa4fSKtwDcki5RAl%2BpfORFZ%2Fgs4VA1ayY2oRNewSy52pFh3lFYpEHAF1a57EtI56Hm%2FX6gBNv4Oksz6PL7TICug%2BEWqc1VmYEaZkcJtOakMg5FN1Rgg%2BnR5ZvAWHlzpswqRPz6vvwZWPLdzU7Dp3zKV2ip%2BpHr%2BxU7nGNOE2NQv3u5frtQNORiGxTJTpDx9H%2F1FibIMEVpxtEd6y3iTmDuJlDl4sRMS1VvykdK8qX%2Foozt2krItUg7LYIxBHC5DSUYKqHXP8wuVAcCJ90RyxXWHzf0oC5j3tPEBJb4SkvCAGaf0zGgmKMMmq0cuPIIGh%2FE74LKmRBb9PLcYY235ljxdBRu1OveXQJYtoxA6xmyop1T1JSbgFYPN6nmwsASwC5HFo81xxndq1j4izUp59Xxb%2FP249W1H0cP7k7Uh5I%2Bj4d7ua6KB7eKOUJ5nPLlAcL1IOpAvxrE%2BUwCWO%2FevVfTYGsEIeh42SezbyE4kzSJ%2BdEIilrniv2OuecoBcURqmPQ4CEp3RVhuxbK4X5ekHP%2BBd%2F3lZ9t5LD7LU%2BIat9oyPCW9IV6y2ABnS93f8OtZXRAKf%2FkC3%2B2SuWL6btg5SjOkVm0y01DP5Hed4vNHeRhOAXoAk76%2BpMpGQ%2BAZE9%2FNom2I4wmIuMygY6pgGxqHkDds0t86qn94ZjLFijtHw4TlrLNkza6jmYdBpuDmA55BnBws2hMlU%2B%2FrfQQVcxLBnJgsLyqa7D0kRolrluavRbm%2FYnMXlss01SY5CKhrf85UgxAtnpmEttCL0fT8bL6KT%2BoCQYVZG2qTtLvgEmNLrDHnvrIpDltVmLFRmpVMwlcFT9YbIZEL5K1TmiYKNkNJnHh1sQ%2B0jyxi%2Fmr%2F%2Bv12t6TZYz&X-Amz-Signature=8d382aae2d27bb87744d59f1b2288c4c39763f10e1d11e3ebff86d35e3d59ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSSFMIK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4Mi9GYNg79iPn3hdb6XR2MjO4UJ16a344QJqij7jVAiBQbYtTvExDpcPKj9biKovvMW9%2ByafKXnUmQuSgabH40iqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqJnK6PraNbqa4fSKtwDcki5RAl%2BpfORFZ%2Fgs4VA1ayY2oRNewSy52pFh3lFYpEHAF1a57EtI56Hm%2FX6gBNv4Oksz6PL7TICug%2BEWqc1VmYEaZkcJtOakMg5FN1Rgg%2BnR5ZvAWHlzpswqRPz6vvwZWPLdzU7Dp3zKV2ip%2BpHr%2BxU7nGNOE2NQv3u5frtQNORiGxTJTpDx9H%2F1FibIMEVpxtEd6y3iTmDuJlDl4sRMS1VvykdK8qX%2Foozt2krItUg7LYIxBHC5DSUYKqHXP8wuVAcCJ90RyxXWHzf0oC5j3tPEBJb4SkvCAGaf0zGgmKMMmq0cuPIIGh%2FE74LKmRBb9PLcYY235ljxdBRu1OveXQJYtoxA6xmyop1T1JSbgFYPN6nmwsASwC5HFo81xxndq1j4izUp59Xxb%2FP249W1H0cP7k7Uh5I%2Bj4d7ua6KB7eKOUJ5nPLlAcL1IOpAvxrE%2BUwCWO%2FevVfTYGsEIeh42SezbyE4kzSJ%2BdEIilrniv2OuecoBcURqmPQ4CEp3RVhuxbK4X5ekHP%2BBd%2F3lZ9t5LD7LU%2BIat9oyPCW9IV6y2ABnS93f8OtZXRAKf%2FkC3%2B2SuWL6btg5SjOkVm0y01DP5Hed4vNHeRhOAXoAk76%2BpMpGQ%2BAZE9%2FNom2I4wmIuMygY6pgGxqHkDds0t86qn94ZjLFijtHw4TlrLNkza6jmYdBpuDmA55BnBws2hMlU%2B%2FrfQQVcxLBnJgsLyqa7D0kRolrluavRbm%2FYnMXlss01SY5CKhrf85UgxAtnpmEttCL0fT8bL6KT%2BoCQYVZG2qTtLvgEmNLrDHnvrIpDltVmLFRmpVMwlcFT9YbIZEL5K1TmiYKNkNJnHh1sQ%2B0jyxi%2Fmr%2F%2Bv12t6TZYz&X-Amz-Signature=4e0889604b3df86ec1fdfecb1c238c94dde34b4a24c35e898d8275e3ecc64c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

