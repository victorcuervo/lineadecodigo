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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR4LIES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIyNtI3iZSPv0NevmYdsI9eSs8E7SyKZ7NJxvMAd5NhwIhAJc1HiR0Q5AkpqSg0tx7F5UTG37x%2BFy%2BRucFmglKYRULKv8DCHIQABoMNjM3NDIzMTgzODA1Igwyrc6bZJCUUCUbAekq3APUG0xp9jml8tI%2FquIe6G5iwVkz8fIm%2B2gVkvp3bJtsjoByHSFhfFybHYK9TmE4evbs4vhvyOStPUCM3dLW%2BVxsmMY4fI0oUr%2FcPmoLL0aSZ33iAYElzzRsCfSIN0rODf8LpcDu%2FlkXMRnttPRA9kOjdgo%2B6fjhckinsfNjHxbJIk8wFQEvq3vMkrW6gGHa7lwTVJ%2FCOeEM5C6He8GEt0QOBzbUzZrgki7hrX3fFU%2Bd8KtYn9OZS0BQ22fPgy6mtF2RR4mv8%2FU8D50%2BW9XlCvp%2Fhi%2BnGmHLJnAcAqUQcLNPUflhBu6FwUBlSfCxTb79%2F9CubNRGtl3wzql4NTW5sN2bfh%2F759QGc4WFDH1mkClpNPTH9pzOHhoGAHZmfRHMHPnWVe%2BuofGo%2Fl%2FSpyGkYKqEjN3hXFsD2IFSQu1aub6KcU0glevmaOYjd8pkzEZkrbaP%2Bj3BsMYA4JBlh0%2Fz9lZls69zk9JmoQD8ZW2CzccUcy%2BhbM%2FiECPLRFW7JYcv3StEqIAkrBLcvz5BospAPovne7T2cRf1lUxbTeLOFdiX%2B%2FGut1ZDhOzoSiOWK4WiuymewlMyRxteVOulL3cB%2BDQaBjskizjkUBcatCt5yCeNqA%2BCUUk1P8r8bGsRFDDX%2B4fKBjqkARPf3fuyvUspFHxFaEA9sQTDL6cwjunsh1AfrJ8DfA256za20j%2BD0oixxe6QRTtTMBjDN4W3j3A2bpiAfx40Q7WLqSErSV01khttM4CeBVQ2X9enrJ15WPZZzOyFx4t%2B0AQJ40SkD8kTfowRA9Pgq%2FoYmiKYDxVgEiatckLAA%2B2B8Ca2kdNrA2p82LJV76mmws6gRUHoL5f9Q62cTbIf94kut6gA&X-Amz-Signature=cd16ea50791dc6d694afdd1a99c1164c97d9e0cebc7c0ca0d8133fe413a41308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR4LIES%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIyNtI3iZSPv0NevmYdsI9eSs8E7SyKZ7NJxvMAd5NhwIhAJc1HiR0Q5AkpqSg0tx7F5UTG37x%2BFy%2BRucFmglKYRULKv8DCHIQABoMNjM3NDIzMTgzODA1Igwyrc6bZJCUUCUbAekq3APUG0xp9jml8tI%2FquIe6G5iwVkz8fIm%2B2gVkvp3bJtsjoByHSFhfFybHYK9TmE4evbs4vhvyOStPUCM3dLW%2BVxsmMY4fI0oUr%2FcPmoLL0aSZ33iAYElzzRsCfSIN0rODf8LpcDu%2FlkXMRnttPRA9kOjdgo%2B6fjhckinsfNjHxbJIk8wFQEvq3vMkrW6gGHa7lwTVJ%2FCOeEM5C6He8GEt0QOBzbUzZrgki7hrX3fFU%2Bd8KtYn9OZS0BQ22fPgy6mtF2RR4mv8%2FU8D50%2BW9XlCvp%2Fhi%2BnGmHLJnAcAqUQcLNPUflhBu6FwUBlSfCxTb79%2F9CubNRGtl3wzql4NTW5sN2bfh%2F759QGc4WFDH1mkClpNPTH9pzOHhoGAHZmfRHMHPnWVe%2BuofGo%2Fl%2FSpyGkYKqEjN3hXFsD2IFSQu1aub6KcU0glevmaOYjd8pkzEZkrbaP%2Bj3BsMYA4JBlh0%2Fz9lZls69zk9JmoQD8ZW2CzccUcy%2BhbM%2FiECPLRFW7JYcv3StEqIAkrBLcvz5BospAPovne7T2cRf1lUxbTeLOFdiX%2B%2FGut1ZDhOzoSiOWK4WiuymewlMyRxteVOulL3cB%2BDQaBjskizjkUBcatCt5yCeNqA%2BCUUk1P8r8bGsRFDDX%2B4fKBjqkARPf3fuyvUspFHxFaEA9sQTDL6cwjunsh1AfrJ8DfA256za20j%2BD0oixxe6QRTtTMBjDN4W3j3A2bpiAfx40Q7WLqSErSV01khttM4CeBVQ2X9enrJ15WPZZzOyFx4t%2B0AQJ40SkD8kTfowRA9Pgq%2FoYmiKYDxVgEiatckLAA%2B2B8Ca2kdNrA2p82LJV76mmws6gRUHoL5f9Q62cTbIf94kut6gA&X-Amz-Signature=241e58c7432a00432b64ed83b6cd13b29d76ebff6aa109bc3357944eb74f6848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

