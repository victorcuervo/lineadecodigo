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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBSABEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFGbR4ISRSIeV5m7PdGu%2FaSWwkUP57D1chaPIL6NjG%2FAiBTxR7hB3Vl1z0%2FzQ3jL0nWVtsQPh2jwUD%2BvxZEU0E6uyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMpK37xkLrkHnFtpEWKtwD22XhkpRQQG06MDjPi4%2BOrX1vMLzFPXwf3z6sh4qZ8Wp0mwc47y7VmmWMMnJQfv5e4UfMkpDxyfAj2KaGI3AWBp06gglJrhAQoBLwhdOH1gmYmuN5bfG9BXi4P8EEhNT1sflzzDezYIfWNFIAbksw6LBC%2Fkt5xKyEFLopc9EEs2xab7xmqQFwABkxWxlVGrFGnlmrLUof15xK%2FKyb19ayn99wi2qiFEAgPotVm74mXBu1P7IPW%2BCTBPZOUNH4Rp%2BZ4voiOx3RG7jRfBOmgcRxqkWyjTEOpDRaK0RS7s0A6uAsskHjuM48AK%2Bj8chDmuvS6ln%2FKpqH1LD%2BudNrLrn514YQ%2FyVKuusP%2B7ipOZBLLGMLpA7TgGR3C1S1bjD9fyotMZaLyBxoe%2FsF3VW78jZ0RCD%2FkNC%2FfCmedaKINKZvMCQuf1gDcvcHIFtQXDosC5zpVWjJMGf7z4enXdRAjefGdTLGgP35PYYTcCeDKBNaEcXhYLPHyrZTGpPvt97CtuGEMn20o7dMUuUiUc7ESFZwFIO3ycJ4OZdA0h8H8PMEkvYwO7R1VUMkbwv%2Fd3wLx%2BmD3YPUlsDHq9lo4VPQqyxg%2FWJWMLVdjwyjweY2VRh%2BOZRmiwBstDBFGMct%2Bwww7I6KygY6pgHUJjrOlywuBlv5tmakqGmvQk9YpRsONLqbEuoujVPe3mcjefQqZTGI1Z9PZNpt2M7%2Br%2Fp9hG7GmWm837ExyyU3wMJgIyPM2sq8VOvoqsP2cawYiHP5USLFj6U9bgqcCNCGknlyTVYX53VAjlYUFq7bOi%2FM8sXo59wM1X3A4nb6lDopnoOVWlnkKjL9oG6lcOpUUGM8Rr1rm%2BGuM75semXWl%2BDrEXjy&X-Amz-Signature=f99cdbfc1d23dfe72f55bd5d659a6989a89fce7a1b53ceaea55c60201bda634e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PBSABEB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFGbR4ISRSIeV5m7PdGu%2FaSWwkUP57D1chaPIL6NjG%2FAiBTxR7hB3Vl1z0%2FzQ3jL0nWVtsQPh2jwUD%2BvxZEU0E6uyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMpK37xkLrkHnFtpEWKtwD22XhkpRQQG06MDjPi4%2BOrX1vMLzFPXwf3z6sh4qZ8Wp0mwc47y7VmmWMMnJQfv5e4UfMkpDxyfAj2KaGI3AWBp06gglJrhAQoBLwhdOH1gmYmuN5bfG9BXi4P8EEhNT1sflzzDezYIfWNFIAbksw6LBC%2Fkt5xKyEFLopc9EEs2xab7xmqQFwABkxWxlVGrFGnlmrLUof15xK%2FKyb19ayn99wi2qiFEAgPotVm74mXBu1P7IPW%2BCTBPZOUNH4Rp%2BZ4voiOx3RG7jRfBOmgcRxqkWyjTEOpDRaK0RS7s0A6uAsskHjuM48AK%2Bj8chDmuvS6ln%2FKpqH1LD%2BudNrLrn514YQ%2FyVKuusP%2B7ipOZBLLGMLpA7TgGR3C1S1bjD9fyotMZaLyBxoe%2FsF3VW78jZ0RCD%2FkNC%2FfCmedaKINKZvMCQuf1gDcvcHIFtQXDosC5zpVWjJMGf7z4enXdRAjefGdTLGgP35PYYTcCeDKBNaEcXhYLPHyrZTGpPvt97CtuGEMn20o7dMUuUiUc7ESFZwFIO3ycJ4OZdA0h8H8PMEkvYwO7R1VUMkbwv%2Fd3wLx%2BmD3YPUlsDHq9lo4VPQqyxg%2FWJWMLVdjwyjweY2VRh%2BOZRmiwBstDBFGMct%2Bwww7I6KygY6pgHUJjrOlywuBlv5tmakqGmvQk9YpRsONLqbEuoujVPe3mcjefQqZTGI1Z9PZNpt2M7%2Br%2Fp9hG7GmWm837ExyyU3wMJgIyPM2sq8VOvoqsP2cawYiHP5USLFj6U9bgqcCNCGknlyTVYX53VAjlYUFq7bOi%2FM8sXo59wM1X3A4nb6lDopnoOVWlnkKjL9oG6lcOpUUGM8Rr1rm%2BGuM75semXWl%2BDrEXjy&X-Amz-Signature=923cce8ac0957ee6bd5dc14a1e34977d3e492116b888836476d406b7beb30602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

