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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ5LPHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FuCEsf3E5t9ceYWIO140yUdyzuKWFJ4q%2BznuhmHgs0AiArQiRFLNGplRcBe8cTql5Gwoa7o8BD%2Fb5mpnRKK4LBEyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwwwEdgCVkhHyT%2FMDKtwD5Y8ZrkqJ15kn4CpQ1810bGWmSlSL%2Fdpa03GLNKmEXe6CJj%2FhLY1zSA5vl7cocgUQidi9O4qB2TnC1skk2mfcu9udkc6NTR2WroJ%2B0TrYUFd7CzZUjJj9cW2C2nPDsYzFMQRLf4upX2nWwhr2WQc6BynoFsNoAtcvCYuBW7RKfnxZzpcM4MbSC2VFoYHHLrdOh3Qv08js0PRzdjCh5mW5vjH5WrSkY1VNmABrQxktpRxG%2BrY353iByv3ndnmx3YRfSrypGKSE6P64WM%2FyQeMwU1V7IvZuZki2iZ4DPO%2FO7ES31WxOHqhZNC8hhB3z6nyPbv4%2BeUi%2BYx9xNuFVYuzcUfGwbStFId1P93KJZwucZmAWwLABd5TZvTbkW950DrWQPhiuVCzrXBbMJpTDsFhDIF%2F5ANixucYPO2wxNZrBk5d7EvUN6nmDmI6LVIbhgLAA%2FpyZdIt5ZQpmHR575WqL%2BBNehJZ0w3gSIUt9HG566KNSQg3B%2BTcIQlbBWtUCCTGGSq19BxcysXiZ5zBJGgb%2FHBboEthMnc2Y3I0r4HAEyV7Lq1QdYiig1%2FRsBh9ef9ArOAqTA3To6g9EWZkjF%2B8j1t173mUbXYhOK0xTNDgRk%2FQ%2BaC87xD8coJeQ2sww56qKygY6pgFzzxV5iPE83BoaM0IowIdCWTslFjkpreDBGnaIveA7NIqz5mORwqpW9jDrBvOzgV8rHlo6qfgm4XdpnZBvc3lX2%2FEo8TsKu4FtXcDLnfUMcfjK%2FyDxvsWI0yDM9Kct9c4DUEhWu9%2F%2B4t2qaOCDwjT8Ip5EfwS1cnSx6IN9h7QUKmR2aLrHzHD708ettn7z0TJJ58FSNeYBmTr88H5ossUSVhlv9RMm&X-Amz-Signature=abe264b8496956a765ac63b3d501c657473f27d2dc01628f3dc9b1c436f08d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ5LPHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2FuCEsf3E5t9ceYWIO140yUdyzuKWFJ4q%2BznuhmHgs0AiArQiRFLNGplRcBe8cTql5Gwoa7o8BD%2Fb5mpnRKK4LBEyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMwwwEdgCVkhHyT%2FMDKtwD5Y8ZrkqJ15kn4CpQ1810bGWmSlSL%2Fdpa03GLNKmEXe6CJj%2FhLY1zSA5vl7cocgUQidi9O4qB2TnC1skk2mfcu9udkc6NTR2WroJ%2B0TrYUFd7CzZUjJj9cW2C2nPDsYzFMQRLf4upX2nWwhr2WQc6BynoFsNoAtcvCYuBW7RKfnxZzpcM4MbSC2VFoYHHLrdOh3Qv08js0PRzdjCh5mW5vjH5WrSkY1VNmABrQxktpRxG%2BrY353iByv3ndnmx3YRfSrypGKSE6P64WM%2FyQeMwU1V7IvZuZki2iZ4DPO%2FO7ES31WxOHqhZNC8hhB3z6nyPbv4%2BeUi%2BYx9xNuFVYuzcUfGwbStFId1P93KJZwucZmAWwLABd5TZvTbkW950DrWQPhiuVCzrXBbMJpTDsFhDIF%2F5ANixucYPO2wxNZrBk5d7EvUN6nmDmI6LVIbhgLAA%2FpyZdIt5ZQpmHR575WqL%2BBNehJZ0w3gSIUt9HG566KNSQg3B%2BTcIQlbBWtUCCTGGSq19BxcysXiZ5zBJGgb%2FHBboEthMnc2Y3I0r4HAEyV7Lq1QdYiig1%2FRsBh9ef9ArOAqTA3To6g9EWZkjF%2B8j1t173mUbXYhOK0xTNDgRk%2FQ%2BaC87xD8coJeQ2sww56qKygY6pgFzzxV5iPE83BoaM0IowIdCWTslFjkpreDBGnaIveA7NIqz5mORwqpW9jDrBvOzgV8rHlo6qfgm4XdpnZBvc3lX2%2FEo8TsKu4FtXcDLnfUMcfjK%2FyDxvsWI0yDM9Kct9c4DUEhWu9%2F%2B4t2qaOCDwjT8Ip5EfwS1cnSx6IN9h7QUKmR2aLrHzHD708ettn7z0TJJ58FSNeYBmTr88H5ossUSVhlv9RMm&X-Amz-Signature=14a20ca79ae190fc765bb92efbecb299c00741a398b1656ca0051bdd120adb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

