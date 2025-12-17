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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESMSPJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx84IUe6Nh9owTaMHZgfKLNqzSn155qgnWfXeMMmOVmAiAImyk0UbFJeXMHabcAs4SScCE%2Fkn0cHGm5BHKh%2B6ykayr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMyO%2BbEjl0nxEteUb7KtwDpeRcHpTA%2BH%2FHLd4ci66Q%2FiKf7qgxK69RtTQguHSsDfop9wNKlR5ArA%2BNCzq6hjKjU4BVblO28Yw07b85dMt4R9Zers1wtKJxoKkSKtI34Ufz1QWmw1CHZZf92kYJB%2Ff4FwmsE1G7hvr8twZWkrDzlhFtt8MYtrROWWTD%2FUAYy5S%2FR4o9osumRHJZbaJkvG02oODxcO5U61wgYwegdl21pj1g815YK0YznR6VitEH8H9mEOS98QFchaucHN%2FX2dh%2BWPaRCS7Mr6bWSD0sTI5UO45fwnw1pAChGaAoQyYDcuNz37secT2%2B1g%2F9u9HULuaFcZn%2B%2Bnqj5e2z68B7C3ntemY%2BeEN8pdMWBQKTEuJCc2FwXjU%2F2yQbKKN96WPtBPz%2FAf%2FpcrI87s0leTK7YSi6s9SjFscwMQRee0k3vmUzoGeXG7RGrprSOPeyMCvaBUjJ2bULisi8%2BksDOQluvw9py0hdmzBIh2EE9bk9ON%2BCrOvMu9Clis2Q3C5oC4mEJWWFxKeS7suigAEEimUjP7UmWohIVleAnx%2FHy%2BYUbRuPePSTA0ydZlXER0m7NIGKM8881etJr0OIZEJCUUnY7w%2FRMkngXEUZuw8Xr9%2B2uYYgVetXzdkM6Bes%2BgQ0Wi4wpfCJygY6pgGn13TV6v8SU6m83D%2Ftlz5XsrntH%2B%2Fv6usmhzoKlXtgrgcl0JNjkIIF0FjtJQBfnypbErrXGZoOdcARBHaaeKpGaB4cfd13m5AxYU8scOTUAiTwHvgFDRwJXtxqooDVYgSxK8zLmW76YP74q3dwFHcVLTIgy7VlGPmY0I7TRz2jO2jSM3hy2p0wr2DsXez1dfgmhe%2BUeVJqOxnVT0bL6s%2FxAPWLFb7q&X-Amz-Signature=460c55fa0b05076c9511a72a06eee9bcc4cd9efb6ad8a5838dcb6238ea65cf16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TESMSPJI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx84IUe6Nh9owTaMHZgfKLNqzSn155qgnWfXeMMmOVmAiAImyk0UbFJeXMHabcAs4SScCE%2Fkn0cHGm5BHKh%2B6ykayr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMyO%2BbEjl0nxEteUb7KtwDpeRcHpTA%2BH%2FHLd4ci66Q%2FiKf7qgxK69RtTQguHSsDfop9wNKlR5ArA%2BNCzq6hjKjU4BVblO28Yw07b85dMt4R9Zers1wtKJxoKkSKtI34Ufz1QWmw1CHZZf92kYJB%2Ff4FwmsE1G7hvr8twZWkrDzlhFtt8MYtrROWWTD%2FUAYy5S%2FR4o9osumRHJZbaJkvG02oODxcO5U61wgYwegdl21pj1g815YK0YznR6VitEH8H9mEOS98QFchaucHN%2FX2dh%2BWPaRCS7Mr6bWSD0sTI5UO45fwnw1pAChGaAoQyYDcuNz37secT2%2B1g%2F9u9HULuaFcZn%2B%2Bnqj5e2z68B7C3ntemY%2BeEN8pdMWBQKTEuJCc2FwXjU%2F2yQbKKN96WPtBPz%2FAf%2FpcrI87s0leTK7YSi6s9SjFscwMQRee0k3vmUzoGeXG7RGrprSOPeyMCvaBUjJ2bULisi8%2BksDOQluvw9py0hdmzBIh2EE9bk9ON%2BCrOvMu9Clis2Q3C5oC4mEJWWFxKeS7suigAEEimUjP7UmWohIVleAnx%2FHy%2BYUbRuPePSTA0ydZlXER0m7NIGKM8881etJr0OIZEJCUUnY7w%2FRMkngXEUZuw8Xr9%2B2uYYgVetXzdkM6Bes%2BgQ0Wi4wpfCJygY6pgGn13TV6v8SU6m83D%2Ftlz5XsrntH%2B%2Fv6usmhzoKlXtgrgcl0JNjkIIF0FjtJQBfnypbErrXGZoOdcARBHaaeKpGaB4cfd13m5AxYU8scOTUAiTwHvgFDRwJXtxqooDVYgSxK8zLmW76YP74q3dwFHcVLTIgy7VlGPmY0I7TRz2jO2jSM3hy2p0wr2DsXez1dfgmhe%2BUeVJqOxnVT0bL6s%2FxAPWLFb7q&X-Amz-Signature=d8a79c44501ce9e081e39e10c05cd67ec79ac02f250248230f9980176573e2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

