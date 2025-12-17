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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724WDQ4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BnYPBLURPVlao%2BpLo56o%2BA4gOOh11GSojKrGAW74swIhAJZw92bTXwW%2BR1YQCvxGmjZ0BlGS27qqT7tEbNKcwC8DKv8DCH8QABoMNjM3NDIzMTgzODA1Igz4A6tWUTKOMtaWHgYq3AOGcKQ4n6E%2FGnofELQ0zUTautF9rv%2B4wIgHjS8i4H2trfKDI%2Beg3RUJ7gexeSrG4KpQnN%2FJWe2fDTwf%2B1o094TmXB2b2Z3pbalbgqipLJ%2FJzOpDoSme2Oj1iGOewZdZXwjQMTvSHJOCyJvuCuEcs7dtvMBE10Wnz1WP1clepKxDadtHFxUcJqP2XYeIhGSJ4hg9%2B1I%2BRGBNdRuRKjmTAMGeu5WoBs4gY7sAJQ99ap0NeJJ88%2FHPifWqsllSg54pfXK%2BBWg8ZobES8yVzvHbOwECOGWSh66Z4r4pVbwOOko0Age13Jlr1Idj0RFgjwPrJ077IBSVMgxJYroKBKGGeKZbwbCYU9pXPSkS7tGmbPZ2ntLaQA%2F53oLlSkCL5D4BFPGMorqjzzEOYysnMBSi0H7zmOwd3DsmoDEoEJLBFoYKOlyY%2Be4UtdJ8su0lWyt6ORRZ1I1z99G3HVePDKfpwb7rjy4aZKO4lRqxq1NkSfR8jXJcmQEpyTz0qhHWp0MpiVh8IMq%2FLCP2Jp6liYMx1z8JqcWV0r5OIkesue7krC7d05I2kC6qB5lFImDg2GKAMoPPBYdvJeQ1QULsb3L9WlmWOnmZMkQkvLGEGH3mk1Unxilt84xSINsSJjQAWDDw4IrKBjqkARlrCzokv8LXi2CD6GKJZ9HbmEm5bouRaYNv79ErbfL1PCqqPqdaxojG16QVj5hw5K5gyHyXAi%2Bg5nW54hhbLAiWwn1EQuNS3SMJ7FiSK%2FyTryBfeKJjgnUG%2BLOfeXMp2o0fASgczew0WvtCRBGX5owpDz85aYbOYYiMN60%2FH%2F2149SDlOLhNjHk0c%2B3J1eyZlmCvrnd%2BaYEM%2BbOdL7JuEU%2FarSt&X-Amz-Signature=397fee543a106d215d0ee46f7974d54308b256e356cd06446b3b15062a08c13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724WDQ4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP%2BnYPBLURPVlao%2BpLo56o%2BA4gOOh11GSojKrGAW74swIhAJZw92bTXwW%2BR1YQCvxGmjZ0BlGS27qqT7tEbNKcwC8DKv8DCH8QABoMNjM3NDIzMTgzODA1Igz4A6tWUTKOMtaWHgYq3AOGcKQ4n6E%2FGnofELQ0zUTautF9rv%2B4wIgHjS8i4H2trfKDI%2Beg3RUJ7gexeSrG4KpQnN%2FJWe2fDTwf%2B1o094TmXB2b2Z3pbalbgqipLJ%2FJzOpDoSme2Oj1iGOewZdZXwjQMTvSHJOCyJvuCuEcs7dtvMBE10Wnz1WP1clepKxDadtHFxUcJqP2XYeIhGSJ4hg9%2B1I%2BRGBNdRuRKjmTAMGeu5WoBs4gY7sAJQ99ap0NeJJ88%2FHPifWqsllSg54pfXK%2BBWg8ZobES8yVzvHbOwECOGWSh66Z4r4pVbwOOko0Age13Jlr1Idj0RFgjwPrJ077IBSVMgxJYroKBKGGeKZbwbCYU9pXPSkS7tGmbPZ2ntLaQA%2F53oLlSkCL5D4BFPGMorqjzzEOYysnMBSi0H7zmOwd3DsmoDEoEJLBFoYKOlyY%2Be4UtdJ8su0lWyt6ORRZ1I1z99G3HVePDKfpwb7rjy4aZKO4lRqxq1NkSfR8jXJcmQEpyTz0qhHWp0MpiVh8IMq%2FLCP2Jp6liYMx1z8JqcWV0r5OIkesue7krC7d05I2kC6qB5lFImDg2GKAMoPPBYdvJeQ1QULsb3L9WlmWOnmZMkQkvLGEGH3mk1Unxilt84xSINsSJjQAWDDw4IrKBjqkARlrCzokv8LXi2CD6GKJZ9HbmEm5bouRaYNv79ErbfL1PCqqPqdaxojG16QVj5hw5K5gyHyXAi%2Bg5nW54hhbLAiWwn1EQuNS3SMJ7FiSK%2FyTryBfeKJjgnUG%2BLOfeXMp2o0fASgczew0WvtCRBGX5owpDz85aYbOYYiMN60%2FH%2F2149SDlOLhNjHk0c%2B3J1eyZlmCvrnd%2BaYEM%2BbOdL7JuEU%2FarSt&X-Amz-Signature=3ee36dc71f747acfc3fd838bda46d10ff4349623d91131c56adb9bc670e95988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

