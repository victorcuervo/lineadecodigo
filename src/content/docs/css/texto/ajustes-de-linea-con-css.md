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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKRRVFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwZMsNeWaltd30szTTKqyc%2B4DswRTCwxYpR3GxeOs7dAiEApmfQW3ezkhdBSejEpwepYSGLMmcHv5k1IDQ7KHwSrKsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe4enKp%2FkwhbM7s9ircAx7WW5clGwpdZkdadxDDUyt54VJ6ataWR817mQ0f8qduclKANYHGB8j7r5WjRP%2FudHAYr28p5WrEF%2FmRLIB1g7ov7X7oTrtQB6PshJQQUfvwNKAHEaxs1S6NDqIVMkLzURub37ULCbmRF3Uu3T10tWfFrD5XRVIPlnqHGVCzoM4eH8U9yQyNCU5k56J6Yq1uP9RRGReulN7pO3xPDUax0TytFtQLu%2Fo84eJ%2FAhsirmSmXLPH3g4SNw06LZwI8OUrcVEnJyIp6gcMx2wKVjVlcESjRI0pkmEQHenj5nmG0BciI52VzIQ3i2Zb5e%2BagXgRPSB16p%2Fray4DopNb3hUWEh247WoIVYj4%2BJ%2FwQBCZ2hBoSAUca%2FXQft5W5LRlznKVGxR2G04LM40keltNtJMFP4GDI3UDU%2BAwLG6Cyi8cqKGhOyvnLjBsVVvR5Fot%2FLkxCzymiHOot5vlka88sbMFUsZtA3i5eGOd3pbMc%2BUujvQ%2FGu2N7w0VG3s3N350mGeLJ5NWxmYs0icu1bygKM%2B3NyDlGzqRrR57LaS5Dyx3v475opc%2Bv6Jn%2BBm3nEDRSvnxy1MWUlNqM0%2FE10wEbZ%2BVA9PAacX7PH6HJo%2BnHDYQtKuNu6oFidZIFFtmjCXBMJ2qisoGOqUB1ippCf%2BhS0Zwq8z7lZNvXSgHBOSKPMJLOh1HcxQKvR%2Bwu%2FFmCllkzSUKvAFkorMxEBEFE8%2ByCQBzhvdAcyhPLDkrnb8D7HLQe102n2Kg%2BV5FuZb8EbTEESUfrduqYVFes%2BDxU2X2NCLQ5iFhUzYXwsIWuT0JvdngYpcFbUCaWrqB8xFpQzhjeZ11%2FWRs8NvQ0jQS5hYef%2BipVXAAqLJVtS9VCb6i&X-Amz-Signature=d300351062ff2092f103a03e03b2071b49a2ba088e1ec1d91011b80259f0adc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKRRVFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwZMsNeWaltd30szTTKqyc%2B4DswRTCwxYpR3GxeOs7dAiEApmfQW3ezkhdBSejEpwepYSGLMmcHv5k1IDQ7KHwSrKsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe4enKp%2FkwhbM7s9ircAx7WW5clGwpdZkdadxDDUyt54VJ6ataWR817mQ0f8qduclKANYHGB8j7r5WjRP%2FudHAYr28p5WrEF%2FmRLIB1g7ov7X7oTrtQB6PshJQQUfvwNKAHEaxs1S6NDqIVMkLzURub37ULCbmRF3Uu3T10tWfFrD5XRVIPlnqHGVCzoM4eH8U9yQyNCU5k56J6Yq1uP9RRGReulN7pO3xPDUax0TytFtQLu%2Fo84eJ%2FAhsirmSmXLPH3g4SNw06LZwI8OUrcVEnJyIp6gcMx2wKVjVlcESjRI0pkmEQHenj5nmG0BciI52VzIQ3i2Zb5e%2BagXgRPSB16p%2Fray4DopNb3hUWEh247WoIVYj4%2BJ%2FwQBCZ2hBoSAUca%2FXQft5W5LRlznKVGxR2G04LM40keltNtJMFP4GDI3UDU%2BAwLG6Cyi8cqKGhOyvnLjBsVVvR5Fot%2FLkxCzymiHOot5vlka88sbMFUsZtA3i5eGOd3pbMc%2BUujvQ%2FGu2N7w0VG3s3N350mGeLJ5NWxmYs0icu1bygKM%2B3NyDlGzqRrR57LaS5Dyx3v475opc%2Bv6Jn%2BBm3nEDRSvnxy1MWUlNqM0%2FE10wEbZ%2BVA9PAacX7PH6HJo%2BnHDYQtKuNu6oFidZIFFtmjCXBMJ2qisoGOqUB1ippCf%2BhS0Zwq8z7lZNvXSgHBOSKPMJLOh1HcxQKvR%2Bwu%2FFmCllkzSUKvAFkorMxEBEFE8%2ByCQBzhvdAcyhPLDkrnb8D7HLQe102n2Kg%2BV5FuZb8EbTEESUfrduqYVFes%2BDxU2X2NCLQ5iFhUzYXwsIWuT0JvdngYpcFbUCaWrqB8xFpQzhjeZ11%2FWRs8NvQ0jQS5hYef%2BipVXAAqLJVtS9VCb6i&X-Amz-Signature=ec1bacf42ccff1f454ced7ba285981aa16d85ae73086d260f9554495feaef9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

