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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPC4CTTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW1h2QMKa%2BQami%2B1XZUCmo7VHt7Jmq0Tu1xzh73fKNxAiBZl48fduHm1RNKCWC8VABZAvzgQxjSd%2F6dxa9%2FSicEhSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXJ%2FRSjFaK%2Fv3S43FKtwD2tutY0ICvqJisROuo9%2FfL%2BQbPM5aorbunL1DKqfvYoxM4DcA9A4VpOibHW1xyvZ%2B7Bj6FvL%2FuMrEmMnQ1zL1PVUecXtNv2bf7kVCgFeGWY%2BT0b7B4GKNnrIUR8tHpaF%2FQQ2zoDQ4%2F07WQjVCacBsGrNbE2Z76H%2B2uzB9cDl%2BUUpW6zWDjEv9Hd83asl0tOrMao9Gz%2F%2FC%2BN%2BBU0JKv0T%2BZZK2Pb7V85oAn8ogQuLdyxElXyGRhdyN2jANRkbG9CB9mtz%2FoKpDwElkIOAO9SZgTD8uTNOiLOHjaqd6RU2Kank1IDufQNlwDkTk88GQyjQ1cJFu409buDQ93fravYVQoBEOLqqkeqr9hR1rmsyXHlyAZTcPvwEfxociLXPKGp%2FEWeFb82vOZvqzqwttsQmcFezWZHjasfBqQAEgkkzAiBjO8w6Gd8FzK%2BiaANhZLVbMzmQbe0Ptmabsv4Yn8w%2FrLjs3Agbqe6WVkWL2B7JeVQDmP0TAxOd63dACZphltitHu7d08U8EcKjNwgZa01TOIbJfrQZHKZibYWqmN2ukTNYTW%2Bs9GLXXGFPGz3jqCz0PYYxhmSfZTcJn5utJxaSPgYZbx%2FQ8zQ0WUo63%2FGhlIlWB6NUCOPDgz8XgJ9Ew26qKygY6pgFi5ouJTtIW4eKNbE79sp88mgrbTbrHMSTAwgNa0rD7sZrQCOFSXg2Zc9AWgEcfzppcfVkNRNuyIonmuAMwX2r4mdQxHbVasTV3Wm6C8Y%2FmQVz5Lppp5GhhBhsiRE84eB2xSIPgFxWPXj3ifjuAEVy2X1V%2BNQUKjMyNJ8Z4RK1aj5utktB18JjXYGcUIkiGPf58HNzLQxOoPrTNFX6%2Bs86AlCEAdTXE&X-Amz-Signature=a7958689b7468905a8429e033dfb2ca6fa8b709e3594bc6288a45b34f9c7252f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPC4CTTS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDW1h2QMKa%2BQami%2B1XZUCmo7VHt7Jmq0Tu1xzh73fKNxAiBZl48fduHm1RNKCWC8VABZAvzgQxjSd%2F6dxa9%2FSicEhSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXJ%2FRSjFaK%2Fv3S43FKtwD2tutY0ICvqJisROuo9%2FfL%2BQbPM5aorbunL1DKqfvYoxM4DcA9A4VpOibHW1xyvZ%2B7Bj6FvL%2FuMrEmMnQ1zL1PVUecXtNv2bf7kVCgFeGWY%2BT0b7B4GKNnrIUR8tHpaF%2FQQ2zoDQ4%2F07WQjVCacBsGrNbE2Z76H%2B2uzB9cDl%2BUUpW6zWDjEv9Hd83asl0tOrMao9Gz%2F%2FC%2BN%2BBU0JKv0T%2BZZK2Pb7V85oAn8ogQuLdyxElXyGRhdyN2jANRkbG9CB9mtz%2FoKpDwElkIOAO9SZgTD8uTNOiLOHjaqd6RU2Kank1IDufQNlwDkTk88GQyjQ1cJFu409buDQ93fravYVQoBEOLqqkeqr9hR1rmsyXHlyAZTcPvwEfxociLXPKGp%2FEWeFb82vOZvqzqwttsQmcFezWZHjasfBqQAEgkkzAiBjO8w6Gd8FzK%2BiaANhZLVbMzmQbe0Ptmabsv4Yn8w%2FrLjs3Agbqe6WVkWL2B7JeVQDmP0TAxOd63dACZphltitHu7d08U8EcKjNwgZa01TOIbJfrQZHKZibYWqmN2ukTNYTW%2Bs9GLXXGFPGz3jqCz0PYYxhmSfZTcJn5utJxaSPgYZbx%2FQ8zQ0WUo63%2FGhlIlWB6NUCOPDgz8XgJ9Ew26qKygY6pgFi5ouJTtIW4eKNbE79sp88mgrbTbrHMSTAwgNa0rD7sZrQCOFSXg2Zc9AWgEcfzppcfVkNRNuyIonmuAMwX2r4mdQxHbVasTV3Wm6C8Y%2FmQVz5Lppp5GhhBhsiRE84eB2xSIPgFxWPXj3ifjuAEVy2X1V%2BNQUKjMyNJ8Z4RK1aj5utktB18JjXYGcUIkiGPf58HNzLQxOoPrTNFX6%2Bs86AlCEAdTXE&X-Amz-Signature=d305b18c6624f36abfb4f4831f5e1a1f55dd90dac2d38aedd4b8942c216940e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

