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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMTCA75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO7l925dpcqklh%2FVuK1PRQ0ToqZRN6n1H%2FauyFnlvjBAiAqkBFW9BhjNhDDy1AjTHuDUgA7vZijNuH3W37hwGd5Yir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMIVlnbRLLNxRtFb%2BvKtwD50hDcSCa3tomOw3ad8aNVK%2BIMSP7feCJE2l8bRFl8l8LyB9pActuIHAbTDLwDwzL9VPHvfQq%2FBy1gvo0dhOYY68YjT5vU2UGTyCoZe%2BzvUqZsLcnHwF2pkTz2GZsyxz7KMPfMALlMt809nNqh%2Fkse7h3MhzH%2Bq8hzg9cgJFC2l95qSeiqdThp2WZxtzoPOcryX92aVVsQwpGVWqNY2dJRtv1XiWGNp6IFTIPTmCJ%2BZwSDLiku%2BYodUdK8XApJWj046WYt5RtCoHW3ms6pXcyPB%2FSnq0pJjjh2BdvK1NWnhe%2BKoHlvTMu%2BIGArxkOFD6uxuI%2B08qt2A6jWDD3l7ydvq1pd0qRWnATDbzLHN3CkLTZnx%2FHCPxVYGoBDfR%2BUb9Stj0%2Bk6ijEl%2BvlE47ZEYB%2BVngqWlP9z2imn3kmaalEBKaoY2vid7PF5wr3FpRSzIix9%2BoRrljklD0XFE2v%2FoFrBjnoRO1WYLxkoH0pajo2sw7D99GY88Aop%2BLcLMAxIvBG15BdFzRWhq1bSxg14F7SezCJEHYFW8%2B%2F%2F%2Fph2xitQ3q7QpaFA2TCurPm2FcVazdaHivChUNArEK0m9Q4RvdHLlCAxjbJD1hc0Fu92rfq%2Bb04ASz5AoLeeW1RRgwusaKygY6pgG21dm5wS4BCQGp13JHzVYjoEilLH6phzTe08xaAzjilTh%2BUjxYPKLZO7oQxcRhyQB77iFfEuAaIypZ7y0NrXnS3xcW3kDx9GJgoUgyKJ0HpAVnV5ZVeaj%2ByTpeE2v2nKV3ohxPNOVFrttrQ1l9bttIbUrOVwgyZQR2JWmTDzloEMNptnzEM3xXVxHRBx%2F3XP4xlT%2B4YITQejqXRNTvH%2FMNdL%2BadduH&X-Amz-Signature=6869b5937704c8e17d7c6a04fc2f59eb1841e8569768c957852d81f407b35f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMTCA75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAO7l925dpcqklh%2FVuK1PRQ0ToqZRN6n1H%2FauyFnlvjBAiAqkBFW9BhjNhDDy1AjTHuDUgA7vZijNuH3W37hwGd5Yir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMIVlnbRLLNxRtFb%2BvKtwD50hDcSCa3tomOw3ad8aNVK%2BIMSP7feCJE2l8bRFl8l8LyB9pActuIHAbTDLwDwzL9VPHvfQq%2FBy1gvo0dhOYY68YjT5vU2UGTyCoZe%2BzvUqZsLcnHwF2pkTz2GZsyxz7KMPfMALlMt809nNqh%2Fkse7h3MhzH%2Bq8hzg9cgJFC2l95qSeiqdThp2WZxtzoPOcryX92aVVsQwpGVWqNY2dJRtv1XiWGNp6IFTIPTmCJ%2BZwSDLiku%2BYodUdK8XApJWj046WYt5RtCoHW3ms6pXcyPB%2FSnq0pJjjh2BdvK1NWnhe%2BKoHlvTMu%2BIGArxkOFD6uxuI%2B08qt2A6jWDD3l7ydvq1pd0qRWnATDbzLHN3CkLTZnx%2FHCPxVYGoBDfR%2BUb9Stj0%2Bk6ijEl%2BvlE47ZEYB%2BVngqWlP9z2imn3kmaalEBKaoY2vid7PF5wr3FpRSzIix9%2BoRrljklD0XFE2v%2FoFrBjnoRO1WYLxkoH0pajo2sw7D99GY88Aop%2BLcLMAxIvBG15BdFzRWhq1bSxg14F7SezCJEHYFW8%2B%2F%2F%2Fph2xitQ3q7QpaFA2TCurPm2FcVazdaHivChUNArEK0m9Q4RvdHLlCAxjbJD1hc0Fu92rfq%2Bb04ASz5AoLeeW1RRgwusaKygY6pgG21dm5wS4BCQGp13JHzVYjoEilLH6phzTe08xaAzjilTh%2BUjxYPKLZO7oQxcRhyQB77iFfEuAaIypZ7y0NrXnS3xcW3kDx9GJgoUgyKJ0HpAVnV5ZVeaj%2ByTpeE2v2nKV3ohxPNOVFrttrQ1l9bttIbUrOVwgyZQR2JWmTDzloEMNptnzEM3xXVxHRBx%2F3XP4xlT%2B4YITQejqXRNTvH%2FMNdL%2BadduH&X-Amz-Signature=bfb023cc9124141566cb2baa68a3d0824bc16f460b6097d8f007c25fc966a485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

