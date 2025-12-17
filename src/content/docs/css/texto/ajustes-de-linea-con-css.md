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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD35MC2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFApV4NqQWXRVjwcO3KcemRNvsq75zQQIfVNA3tncqIFAiAwCf0j950ojfBGuhFm2CHq0I7AwZ8h1KGEbygNmaU0RCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMikLQEjrt97o4J6jkKtwDgYGmJmwjg1s6AaViyUFHHDV560ixCg1bRyi%2BkYDdAxz88BBJDssu2WoArJrFPuddHPG0F80sVtTtEkpb68FoMMEMLSIta13i6ukpYabiQyBQLoJooUXI%2F%2FPKzUe8rXZztljdOv1AYwsU9BQ3EIvbpkWNWn%2FP8NZcWDpgwIqczquM%2Fg7Dpq1CKUnNOZMEqS1BMTWvA2TdZjR%2B6iFfT%2FzIs8bzsM9HSGkPAHzbUpOhZdz0oArJ2%2FU3%2FE1xkEhrXVNUPTtCl27ZTheOBCleYKcGE0vT5pwX7n1TgnzXWApBpvUfrAnARNq2qGDz4AOWlxo58E9S%2FxLin8TpR7SzOOveA4BdQIcRtyWc%2BaztWOQC9NpZRtDX7JjHYt%2BHemhf6yubnWgPcg9mlbcSNHpyEiV74LAvZ005fBhu18SjDHbhXN6N2BBBMTIwUxRpDv0HC9pNKOsnKdHDjgT%2Bv0rVepZJjZklVB9Swg23HfFNEWSkWUY%2BTcdPdAn9ODBEDyrQTX6Ifmqqa6t3AIKtA0gNyeVWu%2BK49ytTm4U%2BZ2H49QhCYYg5T2wYkUX2gwCHO8qa3OLtRohmAqSwqffKLdlfe9dUHSxGv%2F5JRRQ9ozMTAzeioke00LzVT2UwLlZVZEgwhc6IygY6pgEzOPB%2B1HyAN%2FdIt3xvin8MgFeKHodishi%2Bxpj5UNBI44PCoFd3%2FQLTrEmaPPW7gp3ptbliDpoAxymTUBgO7G5fdHLNTc5im17RVcmZuBnnkCyMjVMJPIpBiPXmR9rHTytom32qbyGTYDFVKg%2Bttu6Od%2BAFqvkolQtxsYYzZjH3zMWwvSACYmHKYPW7pyl5vYF5ulRWycgr%2FS8sNJvtrGFYt04e%2F%2FKG&X-Amz-Signature=aa3e79e7ccd58f80ab7fe6c65146d992380945d882091fbe34c4bdcbb8d770af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD35MC2G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFApV4NqQWXRVjwcO3KcemRNvsq75zQQIfVNA3tncqIFAiAwCf0j950ojfBGuhFm2CHq0I7AwZ8h1KGEbygNmaU0RCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMikLQEjrt97o4J6jkKtwDgYGmJmwjg1s6AaViyUFHHDV560ixCg1bRyi%2BkYDdAxz88BBJDssu2WoArJrFPuddHPG0F80sVtTtEkpb68FoMMEMLSIta13i6ukpYabiQyBQLoJooUXI%2F%2FPKzUe8rXZztljdOv1AYwsU9BQ3EIvbpkWNWn%2FP8NZcWDpgwIqczquM%2Fg7Dpq1CKUnNOZMEqS1BMTWvA2TdZjR%2B6iFfT%2FzIs8bzsM9HSGkPAHzbUpOhZdz0oArJ2%2FU3%2FE1xkEhrXVNUPTtCl27ZTheOBCleYKcGE0vT5pwX7n1TgnzXWApBpvUfrAnARNq2qGDz4AOWlxo58E9S%2FxLin8TpR7SzOOveA4BdQIcRtyWc%2BaztWOQC9NpZRtDX7JjHYt%2BHemhf6yubnWgPcg9mlbcSNHpyEiV74LAvZ005fBhu18SjDHbhXN6N2BBBMTIwUxRpDv0HC9pNKOsnKdHDjgT%2Bv0rVepZJjZklVB9Swg23HfFNEWSkWUY%2BTcdPdAn9ODBEDyrQTX6Ifmqqa6t3AIKtA0gNyeVWu%2BK49ytTm4U%2BZ2H49QhCYYg5T2wYkUX2gwCHO8qa3OLtRohmAqSwqffKLdlfe9dUHSxGv%2F5JRRQ9ozMTAzeioke00LzVT2UwLlZVZEgwhc6IygY6pgEzOPB%2B1HyAN%2FdIt3xvin8MgFeKHodishi%2Bxpj5UNBI44PCoFd3%2FQLTrEmaPPW7gp3ptbliDpoAxymTUBgO7G5fdHLNTc5im17RVcmZuBnnkCyMjVMJPIpBiPXmR9rHTytom32qbyGTYDFVKg%2Bttu6Od%2BAFqvkolQtxsYYzZjH3zMWwvSACYmHKYPW7pyl5vYF5ulRWycgr%2FS8sNJvtrGFYt04e%2F%2FKG&X-Amz-Signature=102d59c3dd2ecf565fe7f4649ad17c4374679f4de0e15a6ce866e08ec198505a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

