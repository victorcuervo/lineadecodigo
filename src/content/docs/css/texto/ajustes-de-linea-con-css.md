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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRNT5RQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW6kYJtqIskjAZKzOgHYqHTqWbZ3SLE2jWF1auN5mV9AIgEdNMiK496Cb%2F%2FXrQpNhnJuUNfy1%2B6cZinKUaMzfjblIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZ1vDVfdm4y8t9qMCrcAySdEx9Nuc4UiO2IhubnaVWUmGAQ0EJFNCfBTMPzx0yfuKqddESOGPAVCUOPobWQDakHY9RYdh7e1oOCMPTHGqMvCVU%2FK1RIqVFzYVYRoWJwMFMUN1baEwg9g8ntRH3yQHboPLyBvWga%2BGcsA%2FXq3ARwMMJyYghzHHIfiT%2BJoI8C6vEs8xvyHjQ2EcBV%2FILQsdC11hu3VXEBsbxegt7PSXbRsmCs0vFMNJq33rZmma4%2F%2BeXUIZn5nMcWKsuwQ8K7opnqsGD%2FI5hYofKf4e9X6B6ajAUY%2BLEcCVnvz6GEcpHi65JS3xKv1X4QfwSD5DpD42hPTz0sV6CISfc2rFY8wBG98P37%2BlGZqSE%2FxQ%2FW4RSASsparilVFaCtq17uGISU6%2FJKyDTUn2CLetNo2nFurCofoVy1KjSLYYkjsSGYG0V3RxyJWfBeA3AbrZT2z4THUmcya3NqFc7ncGKyVim2PHBDs5wTU3Nkw3znG3Wz3VSiIOlre0SW7aB26BgDpK0rrZITg99Iy4DYD%2FgGG7KRqkUcUOl9v%2FecpNpzjX6cMNmVcnkWSpyI6uzC4TBYb90eiZCSKskjsbOx9dLeXLmsNuXUkfhaqvndAxqUL%2B%2B3DaEz2JRpPeL%2BT1IkScR4MOSei8oGOqUBFnbW03XppCIpMzQDay7g1v85sdI9lXScPeYOSkSwueKMkPlGrJm%2FMUd7IG0CbNWBjImkJDr8CtHKu6eydH%2FG1%2FsCeIyuscqgMYzG94tCbHBCTYdYRbqsnc15qElf0ETXMoUidVQw7NPiNdFGKsDGZDVZE3zVCgaxMLRscqnCxz3iHR2LyXAoGVMFrM%2BhpgLv37nHnB%2B3rnSnS2fhnUaT%2B7cpFosU&X-Amz-Signature=5e16cc45044d85c04d97643e2eb31bf656865983830c5b4de456c4d81cded87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRNT5RQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW6kYJtqIskjAZKzOgHYqHTqWbZ3SLE2jWF1auN5mV9AIgEdNMiK496Cb%2F%2FXrQpNhnJuUNfy1%2B6cZinKUaMzfjblIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZ1vDVfdm4y8t9qMCrcAySdEx9Nuc4UiO2IhubnaVWUmGAQ0EJFNCfBTMPzx0yfuKqddESOGPAVCUOPobWQDakHY9RYdh7e1oOCMPTHGqMvCVU%2FK1RIqVFzYVYRoWJwMFMUN1baEwg9g8ntRH3yQHboPLyBvWga%2BGcsA%2FXq3ARwMMJyYghzHHIfiT%2BJoI8C6vEs8xvyHjQ2EcBV%2FILQsdC11hu3VXEBsbxegt7PSXbRsmCs0vFMNJq33rZmma4%2F%2BeXUIZn5nMcWKsuwQ8K7opnqsGD%2FI5hYofKf4e9X6B6ajAUY%2BLEcCVnvz6GEcpHi65JS3xKv1X4QfwSD5DpD42hPTz0sV6CISfc2rFY8wBG98P37%2BlGZqSE%2FxQ%2FW4RSASsparilVFaCtq17uGISU6%2FJKyDTUn2CLetNo2nFurCofoVy1KjSLYYkjsSGYG0V3RxyJWfBeA3AbrZT2z4THUmcya3NqFc7ncGKyVim2PHBDs5wTU3Nkw3znG3Wz3VSiIOlre0SW7aB26BgDpK0rrZITg99Iy4DYD%2FgGG7KRqkUcUOl9v%2FecpNpzjX6cMNmVcnkWSpyI6uzC4TBYb90eiZCSKskjsbOx9dLeXLmsNuXUkfhaqvndAxqUL%2B%2B3DaEz2JRpPeL%2BT1IkScR4MOSei8oGOqUBFnbW03XppCIpMzQDay7g1v85sdI9lXScPeYOSkSwueKMkPlGrJm%2FMUd7IG0CbNWBjImkJDr8CtHKu6eydH%2FG1%2FsCeIyuscqgMYzG94tCbHBCTYdYRbqsnc15qElf0ETXMoUidVQw7NPiNdFGKsDGZDVZE3zVCgaxMLRscqnCxz3iHR2LyXAoGVMFrM%2BhpgLv37nHnB%2B3rnSnS2fhnUaT%2B7cpFosU&X-Amz-Signature=d8f49ad028f16740e11f6093c33354ea578f3e8390d9cd6878336c47d7b82fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

