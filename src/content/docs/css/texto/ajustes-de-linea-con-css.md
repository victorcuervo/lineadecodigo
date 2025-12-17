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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3CIING%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHjm1fyGjkPjLwCYxF%2FdDpcndymeVcZ1Y0LJPcXIecWAiEA8duGWF%2Frhr1Ov%2F5ZHydmBPSIxHXbUnFYAQFhh3bFxfsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIY9ijd98UPz7rW7sircA%2B1vJOoSfc9Bt4%2BQI1R1Gzaw%2FIO9tbots38fju3SZTYuIfMNS%2Bv0sKHd%2FmRoyKFcPpxJx9ax1wAhAbPtzVgIgiT7OC4oo21LT6WLV9bLpFEoFdO1IeOhNtNt%2BhUY5HHN6Qwhl3YMRrSkdk7cXgGjvV0K1ILtjJHHQDhp3iU63ebU2dNHdwnW18khvM6ImcAt9cpftOyquZqCypnbeCVIfgvJ7c%2FZDQmmHz56r3ymmTTR57J3watZDXzv0BwLoig30muTF2pNd%2F8xg%2BxYGNSVxVYksAvPpNQtumLAb06K0GhL7U3suLjyrdn6JVIxc2OX0HpQ%2B%2FLUeLOf%2FgsW48jlKFJrm%2B%2BR5QRLLZm5KwzM4xTKFzjpfyr5OmVAQmEqvkb9KbqnWvooMSjoP5v%2FlvpW8xYSzWMdXjelk8lyH8ipZ%2BaYz33whX%2FNoKPX588GiXOQXwYEbnnDQmsKdKoivjYZB6xRUjPz0COmcE6ADS3DEZCIniQkOd22rCoVvkE7I9flt9Vd6nqa0N1NgelOj05vHxsCFrQiwSUXz6MFDEKMPxKKXn4lZuXafZErDen2oCQz076t2c5uLy8tysjDA9gazxprf%2B05UVM1HUtcIMfRXBaaW4vNWc9pw%2BjRfCJ1MITqiMoGOqUBEKsTE84VX7n2aPOzEYI5Z%2FK6TUpIHP7EFB%2Beuj31gS0%2F9OPMKysdHFjZyQ4E3O%2FDDYjv57VZRfhMVhXXKYbjMXRxnHJcazi8ItX2IdJ8cv2dNSz75qlrryQCw%2Btvd6xYqHGU7MhIV8uL4GuUgvMLznuSkwfyfr0XYMSdtI17MGLwG1ss7JYhT9Mh007aosSG4hx64aY%2FGq28P0lCK410Id1WR3LF&X-Amz-Signature=8d74685db23cff257cc2cf8b73e493b18fcf292bebc4cd4b92dff15f225956cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3CIING%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHjm1fyGjkPjLwCYxF%2FdDpcndymeVcZ1Y0LJPcXIecWAiEA8duGWF%2Frhr1Ov%2F5ZHydmBPSIxHXbUnFYAQFhh3bFxfsq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIY9ijd98UPz7rW7sircA%2B1vJOoSfc9Bt4%2BQI1R1Gzaw%2FIO9tbots38fju3SZTYuIfMNS%2Bv0sKHd%2FmRoyKFcPpxJx9ax1wAhAbPtzVgIgiT7OC4oo21LT6WLV9bLpFEoFdO1IeOhNtNt%2BhUY5HHN6Qwhl3YMRrSkdk7cXgGjvV0K1ILtjJHHQDhp3iU63ebU2dNHdwnW18khvM6ImcAt9cpftOyquZqCypnbeCVIfgvJ7c%2FZDQmmHz56r3ymmTTR57J3watZDXzv0BwLoig30muTF2pNd%2F8xg%2BxYGNSVxVYksAvPpNQtumLAb06K0GhL7U3suLjyrdn6JVIxc2OX0HpQ%2B%2FLUeLOf%2FgsW48jlKFJrm%2B%2BR5QRLLZm5KwzM4xTKFzjpfyr5OmVAQmEqvkb9KbqnWvooMSjoP5v%2FlvpW8xYSzWMdXjelk8lyH8ipZ%2BaYz33whX%2FNoKPX588GiXOQXwYEbnnDQmsKdKoivjYZB6xRUjPz0COmcE6ADS3DEZCIniQkOd22rCoVvkE7I9flt9Vd6nqa0N1NgelOj05vHxsCFrQiwSUXz6MFDEKMPxKKXn4lZuXafZErDen2oCQz076t2c5uLy8tysjDA9gazxprf%2B05UVM1HUtcIMfRXBaaW4vNWc9pw%2BjRfCJ1MITqiMoGOqUBEKsTE84VX7n2aPOzEYI5Z%2FK6TUpIHP7EFB%2Beuj31gS0%2F9OPMKysdHFjZyQ4E3O%2FDDYjv57VZRfhMVhXXKYbjMXRxnHJcazi8ItX2IdJ8cv2dNSz75qlrryQCw%2Btvd6xYqHGU7MhIV8uL4GuUgvMLznuSkwfyfr0XYMSdtI17MGLwG1ss7JYhT9Mh007aosSG4hx64aY%2FGq28P0lCK410Id1WR3LF&X-Amz-Signature=d0824c6fbf161e6c2f39cfe30751d4ac988eadb934ad44eff8349587fa9c6fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

