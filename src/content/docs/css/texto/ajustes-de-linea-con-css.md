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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XZW545%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FJDi097zTXiKRNfTSX3emT5x3MTBCdcph3yv3nYN1aAiEAoGZ%2FXTYgxP84DPAO4Eq9N%2FfF5bnVVnRWFsTrNsRT5yMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC1FXcxw1p8BzHiiLyrcAzWsjY1wCeglSGpoK9wiR97mInL8poqo5YsVSnPVQ6FtfnUdS0i6VxfOor1piJDzN8nx5YVwiVjDIX4pdrPaIAwLwcxqb7rQuUyne0CLC6F%2BTC5W7%2BWOqy4vhduwVdADFBHsXVPJA7mRVloGis7pt5y0rkRzLgL7K84r6tq8tJy35lDamvxj41Ze2o8azdrK6hdfgzFNJFTXeW01d35nRwbhHYCw4z7eB3JpHiYwHystS774KepewlPhdPPbM0VhOf5m1nog6OmsYNNJZjwpzM5BVawT393QlFCD5xEPBmLsgtDkdY%2FePf9vTbiBU3%2FQC3KSZAL17ZuKOiLG4JTFBhZyyvligQGqnroup%2ByXNljXCbEYAaiLS9llYl5NT7ZmxDEt6fIYSuAiJqDEGRdF8XxIgv%2FiKOSHrY64DGTnEmiIRkv1h%2Bi73zfDtrKeHFCIvtq9IvFcpUXBWSlmLlhBrSkBnTffXeBY249g3DYozIglRe%2F49oD6qPcyjjkWCk3V41z%2BS5%2FHwEqhLCpbZyQxgHXKDweH34MFPlfxujaqOhUCdtSJREfjw0lGCv6feWNtum3g%2FshxsUqaQHKT1d%2Fc%2BC%2BqFU6fY0cYhGtWFhkO3rlkTGZvO5fbj%2Fn3QZymMN7hisoGOqUBPTB1iOrDRD8xVB2ryRWWgD2R%2FIHTYZrwITnRCFH2ycpCej%2BqRpuGEWietIt8s%2FVIGNhohZtJhXvhV0%2FbdSKz31xwDxDbIZ5BSavd8kxFVCxonUfM0ARLEaR3CnJFmr2VLmxW6r%2FTQIfwNfQI1ZrBrxB1S%2BRfzu0tG2l%2BkvQ3SjaFptfBxAAlwxTqoE0q0S1lAaqiXH5LJdZuJ3PcK7L%2Bg6RL%2BXCZ&X-Amz-Signature=225ffe944e55b70ea77b800eef96fd2f0f94d14610c2ce71ae63544be40d550a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XZW545%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FJDi097zTXiKRNfTSX3emT5x3MTBCdcph3yv3nYN1aAiEAoGZ%2FXTYgxP84DPAO4Eq9N%2FfF5bnVVnRWFsTrNsRT5yMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDC1FXcxw1p8BzHiiLyrcAzWsjY1wCeglSGpoK9wiR97mInL8poqo5YsVSnPVQ6FtfnUdS0i6VxfOor1piJDzN8nx5YVwiVjDIX4pdrPaIAwLwcxqb7rQuUyne0CLC6F%2BTC5W7%2BWOqy4vhduwVdADFBHsXVPJA7mRVloGis7pt5y0rkRzLgL7K84r6tq8tJy35lDamvxj41Ze2o8azdrK6hdfgzFNJFTXeW01d35nRwbhHYCw4z7eB3JpHiYwHystS774KepewlPhdPPbM0VhOf5m1nog6OmsYNNJZjwpzM5BVawT393QlFCD5xEPBmLsgtDkdY%2FePf9vTbiBU3%2FQC3KSZAL17ZuKOiLG4JTFBhZyyvligQGqnroup%2ByXNljXCbEYAaiLS9llYl5NT7ZmxDEt6fIYSuAiJqDEGRdF8XxIgv%2FiKOSHrY64DGTnEmiIRkv1h%2Bi73zfDtrKeHFCIvtq9IvFcpUXBWSlmLlhBrSkBnTffXeBY249g3DYozIglRe%2F49oD6qPcyjjkWCk3V41z%2BS5%2FHwEqhLCpbZyQxgHXKDweH34MFPlfxujaqOhUCdtSJREfjw0lGCv6feWNtum3g%2FshxsUqaQHKT1d%2Fc%2BC%2BqFU6fY0cYhGtWFhkO3rlkTGZvO5fbj%2Fn3QZymMN7hisoGOqUBPTB1iOrDRD8xVB2ryRWWgD2R%2FIHTYZrwITnRCFH2ycpCej%2BqRpuGEWietIt8s%2FVIGNhohZtJhXvhV0%2FbdSKz31xwDxDbIZ5BSavd8kxFVCxonUfM0ARLEaR3CnJFmr2VLmxW6r%2FTQIfwNfQI1ZrBrxB1S%2BRfzu0tG2l%2BkvQ3SjaFptfBxAAlwxTqoE0q0S1lAaqiXH5LJdZuJ3PcK7L%2Bg6RL%2BXCZ&X-Amz-Signature=a49075bf8cf607ef849cfb24ccba59b95e2082c6124685eb2777b8719cf1e4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

