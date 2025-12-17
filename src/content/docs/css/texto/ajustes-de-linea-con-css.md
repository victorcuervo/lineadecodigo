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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJ2BIHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwcguKgZKYBCE%2Fk7ywn6PDOJCEaCC6rfHGE3wnoUR0QIgUK1RLI2%2Bm6qHyiEM416b5C4GpVT2Z%2Bv1J8FQHFrYuvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCLjEic6FUO5N6Rr%2FircAxtYCHp%2FXSz%2FBS7I0gcsNFwrfDjR0OegA1pNFSoUI%2FSEaeQDzwOYjmoMkYV%2BdGUadgjqCNa0aQOQvBh6J3JHOOrp9pDOtO03WREU9s%2Fuaht%2BR6o1fpw%2B5eVFrIdoN23Oob62uuE%2FKJwue%2BljdVsywCPYKnF%2F2H5ufA9Z5eVIry5dzfgUNEdY9EkHaqlzqf2cX9Tt3EEYCh2h9vFtc4U7HlEsyL2RqOLAiagsEbwmfVXLF%2FmS227cn%2FZ3PLmKl9kIgzHOxfLopGsYBZ6ZPBXloI%2BlkhSJ%2BPRSg66p2QON6sYijR5xkqwoHlwbc0jLhe7djPf9WMc8eiYpWBayFTW3tItJbwOdxcS5uwwhaPZ8rVtFSOCDt6lWaRNcJBg0IpGncJPpcBiawCKqxtN2pIH16MjNb4ml3LAZpEOUuWkCWvup1TgSK0DN3xZf4gS9cHMPQ67G%2Fiu6GzB3JXTpfmy%2BYwHq7wV2fI88bJrrqy%2BGc4FY6e6gpsxpnBntaDdarY4aq%2F%2BdcXHCEFRTcHbey1RXJfLfe0gZkAzwPlDi7L4nlxnyHZzYeD2ARD5%2BYyhYLcNjv2XBnog6Lt5qLO1Dd1ELUCwXXsYcc2BMDSRvg2wVU04Ielqi80bzmfCqql6eMLfvicoGOqUBxHBq4FcQtJo3s9GGWDoUagFDpAAKpDefK85tpBBX%2FH9N%2BYZXZZB1RX42Lho5k6NLKNth1tsZYf02jd2%2FVG2k6ZYj5ip8WgdszMBpS3uvIO2hierSIIXo5%2Fu%2FPjuBdxrqxoRM56nz0uTrBDbx7Hfnl%2F%2F0pacKqOdnTn8gXJ%2FDXEtrdVnI6sq2JT177pVRXJ1r6FNbDa1ExXn1ikWyPU7pa04qeIPX&X-Amz-Signature=2de04450a42740301a4109c6bbdd6defc852852c6c7de4560914ca765b173181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJ2BIHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEwcguKgZKYBCE%2Fk7ywn6PDOJCEaCC6rfHGE3wnoUR0QIgUK1RLI2%2Bm6qHyiEM416b5C4GpVT2Z%2Bv1J8FQHFrYuvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCLjEic6FUO5N6Rr%2FircAxtYCHp%2FXSz%2FBS7I0gcsNFwrfDjR0OegA1pNFSoUI%2FSEaeQDzwOYjmoMkYV%2BdGUadgjqCNa0aQOQvBh6J3JHOOrp9pDOtO03WREU9s%2Fuaht%2BR6o1fpw%2B5eVFrIdoN23Oob62uuE%2FKJwue%2BljdVsywCPYKnF%2F2H5ufA9Z5eVIry5dzfgUNEdY9EkHaqlzqf2cX9Tt3EEYCh2h9vFtc4U7HlEsyL2RqOLAiagsEbwmfVXLF%2FmS227cn%2FZ3PLmKl9kIgzHOxfLopGsYBZ6ZPBXloI%2BlkhSJ%2BPRSg66p2QON6sYijR5xkqwoHlwbc0jLhe7djPf9WMc8eiYpWBayFTW3tItJbwOdxcS5uwwhaPZ8rVtFSOCDt6lWaRNcJBg0IpGncJPpcBiawCKqxtN2pIH16MjNb4ml3LAZpEOUuWkCWvup1TgSK0DN3xZf4gS9cHMPQ67G%2Fiu6GzB3JXTpfmy%2BYwHq7wV2fI88bJrrqy%2BGc4FY6e6gpsxpnBntaDdarY4aq%2F%2BdcXHCEFRTcHbey1RXJfLfe0gZkAzwPlDi7L4nlxnyHZzYeD2ARD5%2BYyhYLcNjv2XBnog6Lt5qLO1Dd1ELUCwXXsYcc2BMDSRvg2wVU04Ielqi80bzmfCqql6eMLfvicoGOqUBxHBq4FcQtJo3s9GGWDoUagFDpAAKpDefK85tpBBX%2FH9N%2BYZXZZB1RX42Lho5k6NLKNth1tsZYf02jd2%2FVG2k6ZYj5ip8WgdszMBpS3uvIO2hierSIIXo5%2Fu%2FPjuBdxrqxoRM56nz0uTrBDbx7Hfnl%2F%2F0pacKqOdnTn8gXJ%2FDXEtrdVnI6sq2JT177pVRXJ1r6FNbDa1ExXn1ikWyPU7pa04qeIPX&X-Amz-Signature=6af1815762fc8c4c7f79363bf8774364feec0de98212281fec8339c927d63cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

