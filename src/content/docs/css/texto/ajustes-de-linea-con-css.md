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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOUPGWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BC7sWpX6Ah%2FdGeJlR1V0mxarXMNOUBSCSFDm8WCA%2F6AiAZo1KusW3hK1FwlLg%2BprwEPIKWmJe40oR259zUCrkrzCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMB1ZKh3llPCBEn50CKtwD6Wbnle8Wal2cl9k3wg2Jz9vsI%2BW%2FBUbdE9ia4fmIEe26DaRD0KwNN2KJhLCTgsGUnnVrGZJUiU6rOgXgkibRxinbLvZapCU%2FtdPFUPE3y%2BHj03ZLzncgyZOOHKvbT76yG0DoO%2BPt7Ax%2FJywnXKElKiMdQD5Y0519O40qxtPEeKmc7YLgc9mRsg7r0N1GL3DJVbV7sjX%2BYAhq9Yg7JzPKn5bCJc7%2B9KiYZzJfw8z4lP%2FJDGJuvpK4nDshUdEJ3ID0dEd%2FU%2FY1cIFFV%2FWCcsYKC2W6iKluT1Mo7rdZu6KIS8nJ22TX46cuKpYtIG0gkSw3cM0s6%2FoCsrPbz9MAfnHB6Hgjkg5gEAagEoWf1eOQwgmxpftjrp6YAXSF8InMcW2I3fGJ4M98OHRlSG%2BLx5AkKFe%2BUl4y%2B1cih0KariaY8kHdb6XB2kQEOVDisXeERSTZ47EXxoLtQkruNShh2bIu%2B7tPZmDfAbpUkT7n2keS6HRTxb%2FEB7jRBvivIYZxzlUHmW%2B1gZCH7WKh0Mg3Lhxs%2FWCsqQZilCM1eB03bcdJqr2rA7U74stnhhM8fjMmL1Wein8H0DiCz5YJFbMwGcDTTxy3b5Oc96sTOZ7hy2UC7s%2Bpa7Wxxqh%2FxN1PzrQwld%2BHygY6pgGfRtUXKzdvNZiznAfJqvggaaBuqYGvCqnAJ5GIomwbBWira1cCErxG9EM9xUSRK6138zEwKl4dXtW6hq4M1KcdQjrDwpTaqQFr1d0P683XaEYxN8WUftHUSZacHPfnA1MRWQJTv4bCVbCqouRxubi7fOA7T97i4wVHnsZRYpxzQ616rdoes7frWWBMQQNCtDxhX5dJ6lYZ9TKWbs2tArGsfjdzoIWl&X-Amz-Signature=6f10872509706272db80e1ab7d322e100219df0e3032ad7269cbc1674699cb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOUPGWH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BC7sWpX6Ah%2FdGeJlR1V0mxarXMNOUBSCSFDm8WCA%2F6AiAZo1KusW3hK1FwlLg%2BprwEPIKWmJe40oR259zUCrkrzCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMB1ZKh3llPCBEn50CKtwD6Wbnle8Wal2cl9k3wg2Jz9vsI%2BW%2FBUbdE9ia4fmIEe26DaRD0KwNN2KJhLCTgsGUnnVrGZJUiU6rOgXgkibRxinbLvZapCU%2FtdPFUPE3y%2BHj03ZLzncgyZOOHKvbT76yG0DoO%2BPt7Ax%2FJywnXKElKiMdQD5Y0519O40qxtPEeKmc7YLgc9mRsg7r0N1GL3DJVbV7sjX%2BYAhq9Yg7JzPKn5bCJc7%2B9KiYZzJfw8z4lP%2FJDGJuvpK4nDshUdEJ3ID0dEd%2FU%2FY1cIFFV%2FWCcsYKC2W6iKluT1Mo7rdZu6KIS8nJ22TX46cuKpYtIG0gkSw3cM0s6%2FoCsrPbz9MAfnHB6Hgjkg5gEAagEoWf1eOQwgmxpftjrp6YAXSF8InMcW2I3fGJ4M98OHRlSG%2BLx5AkKFe%2BUl4y%2B1cih0KariaY8kHdb6XB2kQEOVDisXeERSTZ47EXxoLtQkruNShh2bIu%2B7tPZmDfAbpUkT7n2keS6HRTxb%2FEB7jRBvivIYZxzlUHmW%2B1gZCH7WKh0Mg3Lhxs%2FWCsqQZilCM1eB03bcdJqr2rA7U74stnhhM8fjMmL1Wein8H0DiCz5YJFbMwGcDTTxy3b5Oc96sTOZ7hy2UC7s%2Bpa7Wxxqh%2FxN1PzrQwld%2BHygY6pgGfRtUXKzdvNZiznAfJqvggaaBuqYGvCqnAJ5GIomwbBWira1cCErxG9EM9xUSRK6138zEwKl4dXtW6hq4M1KcdQjrDwpTaqQFr1d0P683XaEYxN8WUftHUSZacHPfnA1MRWQJTv4bCVbCqouRxubi7fOA7T97i4wVHnsZRYpxzQ616rdoes7frWWBMQQNCtDxhX5dJ6lYZ9TKWbs2tArGsfjdzoIWl&X-Amz-Signature=2cee816b1318377a83cf8e3e632a5bc483794886044e37bd94a9c5284ebf058b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

