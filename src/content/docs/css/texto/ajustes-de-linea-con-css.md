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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYD4N4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrXcg0JaO8HDgjlGGuyJadd3ybvFVEwEWpZOPhAYgrQIhAJzltGjErao%2Ff%2FimTGgRFJMmf%2Bk0bpia35ULmrEIP9vMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfZKMAdKdDYHsAXqcq3AM5UegrG50oN1ItyyOL%2BOl6uhGn8i6CnhCfJs2zaEOy6DBVFY1Ja26jucfNOlSgaVtYw8IMiHOn0JTOrLHcviOqvoE86ORYrGUWWGPuA3no7Oimg%2B89l3NGIjA84mVf7kn3WA0NCZwdPHDGERdWhVOyNVm3vtDq8ACvM3y3kX%2Bll3MZnLmfRQkf1%2FLCJSQtx6gr6vpU7m5YClSKsVrfapLXb6f4X0ptX%2BtZoJKMTRoziqsOom3pivVzRIt8ZMC5LklzMXVN%2BQgc3d7mBEvLG%2F6cMBrD1RQ2%2FU9YQLsK4Qy%2FIfLUnfB6BhvNoe4lEG1LzvTmkw27gfnF3HRehkwkU5MobJElzQh%2Bfyne%2FhK%2FEv1WTuOI5mKUx8xpgEReD9xv3m5%2FskXGGMNAX4rk2CmOm%2FGFhjbeYGgpS2iZAaBKhO77S6ulTZsFtrX9csNylELjuBbS8wlzxlkWlq%2Bp%2FV0ijqOYiQ9Yan7E3GM7sU4jzGEH4A1%2FFxghz2ZcA55Lq5mUGex9MKWTl2z8lRgLGcxxMDSc0a6bTkjVhuyg1D%2F52ev0q6vYciez96ooV%2Bv8Q0VPVk09rXQ9d64wKvrSropxaxYmHiUMZuEkz%2BykspLv625kESeoFTJ4QSmFEVVz0jCtgYvKBjqkAajWtt466AcHO8JMu%2FftTTgWrCTgle9su7OrUNjSa%2BoUpRuYYUuix%2B9diB7yAd1OUSRCObyK1nO6WqVbChSvd1lRm0Ih6rF2IfjZS4bp4B%2B9CmsXiyrwq9tYLxlGOKU6nXWGeAvB2%2FBukMmhvz1q0fpSjgwWUOMljGgsHLDRRHqW2THP7RJNq7FWP8%2BUijwIWkR%2B2EmsykC8BqDW%2FH3W5HFyXY2A&X-Amz-Signature=701ea4729a0a2af7b73122fdae91d4698754d166f29423cef43661d560315341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FYD4N4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrXcg0JaO8HDgjlGGuyJadd3ybvFVEwEWpZOPhAYgrQIhAJzltGjErao%2Ff%2FimTGgRFJMmf%2Bk0bpia35ULmrEIP9vMKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfZKMAdKdDYHsAXqcq3AM5UegrG50oN1ItyyOL%2BOl6uhGn8i6CnhCfJs2zaEOy6DBVFY1Ja26jucfNOlSgaVtYw8IMiHOn0JTOrLHcviOqvoE86ORYrGUWWGPuA3no7Oimg%2B89l3NGIjA84mVf7kn3WA0NCZwdPHDGERdWhVOyNVm3vtDq8ACvM3y3kX%2Bll3MZnLmfRQkf1%2FLCJSQtx6gr6vpU7m5YClSKsVrfapLXb6f4X0ptX%2BtZoJKMTRoziqsOom3pivVzRIt8ZMC5LklzMXVN%2BQgc3d7mBEvLG%2F6cMBrD1RQ2%2FU9YQLsK4Qy%2FIfLUnfB6BhvNoe4lEG1LzvTmkw27gfnF3HRehkwkU5MobJElzQh%2Bfyne%2FhK%2FEv1WTuOI5mKUx8xpgEReD9xv3m5%2FskXGGMNAX4rk2CmOm%2FGFhjbeYGgpS2iZAaBKhO77S6ulTZsFtrX9csNylELjuBbS8wlzxlkWlq%2Bp%2FV0ijqOYiQ9Yan7E3GM7sU4jzGEH4A1%2FFxghz2ZcA55Lq5mUGex9MKWTl2z8lRgLGcxxMDSc0a6bTkjVhuyg1D%2F52ev0q6vYciez96ooV%2Bv8Q0VPVk09rXQ9d64wKvrSropxaxYmHiUMZuEkz%2BykspLv625kESeoFTJ4QSmFEVVz0jCtgYvKBjqkAajWtt466AcHO8JMu%2FftTTgWrCTgle9su7OrUNjSa%2BoUpRuYYUuix%2B9diB7yAd1OUSRCObyK1nO6WqVbChSvd1lRm0Ih6rF2IfjZS4bp4B%2B9CmsXiyrwq9tYLxlGOKU6nXWGeAvB2%2FBukMmhvz1q0fpSjgwWUOMljGgsHLDRRHqW2THP7RJNq7FWP8%2BUijwIWkR%2B2EmsykC8BqDW%2FH3W5HFyXY2A&X-Amz-Signature=e68150ef1478cec5cf7614b1ca12cff0fac858269c4882a9a99d912ef37c50a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

