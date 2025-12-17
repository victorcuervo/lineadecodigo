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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3OPTNE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7%2FoexuKs9VpUnx%2FQwDcb4XI9D99iBt7yzDhCC6kWKgAiEA6TaV%2FI%2BL61Cdf%2BAVzUYDolBE82wiUSk7qboMSnuif2Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAGzELDR5ttNmAsIaSrcAz6GjtQXLgsngVhv6SPbv75Qzf7e%2BiTTCsJo%2F2DRcwmDpKAyXbaBDiklh1NPFUguKdJAAAtK3cncxICUKy0gsstWGqHt%2Fs1h5ly%2FfLFt5Dq6p5SVGDQLNIln%2BwzdxoKaLeZ04knxLKlI9dXOL9W9zfBdOBTymSDViJPljxHmVPkBNTbbIdNHDrHZtedHcYj9%2FRoHa%2Be6DwzALo%2FfBsSsEsC6jwn6sTQGaWkgvSn4EDmO5hfBusPGyeh%2BK%2FEKnziOfeHvLBaSpH3vJe0Y8PPzbNxckLd9ItTT2o6S2XAuj8uQibwb1R23pWtqaKJhCdycRHYmHcvOOTzALl2MTFv%2BG4NBCvutalFobUHf9mxdaforB2hd8JoOJQi1iuR1AEPZDTe1IxvtMPzAvRqhLaV7quUq%2B6VF8EWllG1GHXD%2FCoUwLtyf8ZfxxUiEnuSzlMAJqZ4tMqNOlSPfWV84YKkuV6PuHyFWvIbN5OPXItOqM6BGboyCxKJIYxV5vRSvKDTuB1TggIUcwwUcVB5aMk738mDMiyVEPqio52WNM0xJECV1f9sXc1QJ1%2FBZ0TbeQ0Ch2YV2XKQPjYFZ6vSlXHnpfWzcMBRKQV8jC5Ct%2Fxy7wnzOikFTm1nFY1odhDWBMObFisoGOqUB0mOZPa4D1nRZZtci%2FcsUT7u3niCmJza0qLkp8Mmgd9n%2B6xXIabmJf4jMdW96Ki33EHoQyceAzLWT%2BlNOUtV9WncvocRUDbKc09AmQ4EG5B8VfRN5kvTo%2Fa3ILqS4mrpex%2F7kPcJFPI8rtnpLfJyS28Uls4P3GjQWNH08b4%2FTcEugBVmPOIVKDCHeMOPARnialL%2FVQZ1IxXAUv3b9Hwnw6In0CiAQ&X-Amz-Signature=584fd247bee16fefdb5e52d2b8d6b95433fa1265a19ce4d850119db2b4906748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY3OPTNE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7%2FoexuKs9VpUnx%2FQwDcb4XI9D99iBt7yzDhCC6kWKgAiEA6TaV%2FI%2BL61Cdf%2BAVzUYDolBE82wiUSk7qboMSnuif2Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAGzELDR5ttNmAsIaSrcAz6GjtQXLgsngVhv6SPbv75Qzf7e%2BiTTCsJo%2F2DRcwmDpKAyXbaBDiklh1NPFUguKdJAAAtK3cncxICUKy0gsstWGqHt%2Fs1h5ly%2FfLFt5Dq6p5SVGDQLNIln%2BwzdxoKaLeZ04knxLKlI9dXOL9W9zfBdOBTymSDViJPljxHmVPkBNTbbIdNHDrHZtedHcYj9%2FRoHa%2Be6DwzALo%2FfBsSsEsC6jwn6sTQGaWkgvSn4EDmO5hfBusPGyeh%2BK%2FEKnziOfeHvLBaSpH3vJe0Y8PPzbNxckLd9ItTT2o6S2XAuj8uQibwb1R23pWtqaKJhCdycRHYmHcvOOTzALl2MTFv%2BG4NBCvutalFobUHf9mxdaforB2hd8JoOJQi1iuR1AEPZDTe1IxvtMPzAvRqhLaV7quUq%2B6VF8EWllG1GHXD%2FCoUwLtyf8ZfxxUiEnuSzlMAJqZ4tMqNOlSPfWV84YKkuV6PuHyFWvIbN5OPXItOqM6BGboyCxKJIYxV5vRSvKDTuB1TggIUcwwUcVB5aMk738mDMiyVEPqio52WNM0xJECV1f9sXc1QJ1%2FBZ0TbeQ0Ch2YV2XKQPjYFZ6vSlXHnpfWzcMBRKQV8jC5Ct%2Fxy7wnzOikFTm1nFY1odhDWBMObFisoGOqUB0mOZPa4D1nRZZtci%2FcsUT7u3niCmJza0qLkp8Mmgd9n%2B6xXIabmJf4jMdW96Ki33EHoQyceAzLWT%2BlNOUtV9WncvocRUDbKc09AmQ4EG5B8VfRN5kvTo%2Fa3ILqS4mrpex%2F7kPcJFPI8rtnpLfJyS28Uls4P3GjQWNH08b4%2FTcEugBVmPOIVKDCHeMOPARnialL%2FVQZ1IxXAUv3b9Hwnw6In0CiAQ&X-Amz-Signature=ae3e1cbad1720e841797f520c63a662963f34252d78246c59d14e9669f9c10df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

