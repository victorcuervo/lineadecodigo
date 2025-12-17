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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UT6PCU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHzZQtXUEj2stuIjl%2BVIGy6zq4Fsirlf5UzL4pnzh6pAiEA4bLzBjbibnqQ1jjkAzwV7HuyRPVT3ixpupnmRAzDfTkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEf5SAkx1TNum%2Bit1SrcA50JBdsNhtfBIic3NLmIozpJ4Ey7w3NXSkRiguPngbfiT6D6gesiaZjRkbyqHhi1eZmAIwApWpaWjd1Mtfrb3nVinlRBxpozbY6Fc98bJEWs6qgFBt7UDiALgXr5hZn1szYV1iaj63bXY40b37HzqTZvhyS1C9hkVFtSODewFdl2zEBmMNbT9KbYGxQ2pAK2AX3UWbzNlYIxkZZcGs%2F92U58mgU0t%2B%2BDc0DdUH8MsgUxhI6PxX%2F4%2Ba6nrGpM1G61ymI0rkxAaqTuMVWNx4D2fulT2d6SRgwF6LMay%2ByJmovNHnmFmKjxnd%2Fpsit3ycchpSHQ%2FzjWBdaPG5%2FniCOau8gSfmcpKQHCn1yPH4dHqsk1ZEpjIEEc6CI8wPfcNaClruYg1E8WhfzVzwdffO2xWNbrSQHYxvVSnX37HC4IqMU4Ut31CoI%2BaeFzyQJiK%2BaVFb5w9s4Ou4wKDcJIxmIjllbDKuRMOUz0TFzzDlbPoORJC92FN%2FHNjhJLr0iY%2Bj4ZuS6qp2vp4di8VC%2BzErk64vlNdzb%2BJaefmcyvQ9ZNqChMEW2c%2BuvPelk3gY6jNsY0zL57Gpsmj6qbRXoWGmA%2FyuoT2U%2FyVmksdhI1si75hDlmSWs6bRWbgV2pMzflMKuDicoGOqUBSd%2BlZkFyRWU2kTr2nJm7VpPUihyS1UKEx5kTPC7LtQTlOoknzcvMXUJ9%2BVHKyMxoXQja8A0w8vATBA5b6N9eVcD2SbQv50Yo0MzB9cxsHZICaIs45VZTvp8mVbAaZOO%2Bt6IOddWK00ncX3K4iuXvKAT90HZxlHmglASf8mWWDZJM5f3ep97p1D%2F%2FDmmR9joR7EYDZzs8qVPzsb108BTChJVu3KrG&X-Amz-Signature=62f93d2648af06f8d4a155effad382b6268a069d78c2d5b3298107ac77b5668d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UT6PCU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHzZQtXUEj2stuIjl%2BVIGy6zq4Fsirlf5UzL4pnzh6pAiEA4bLzBjbibnqQ1jjkAzwV7HuyRPVT3ixpupnmRAzDfTkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEf5SAkx1TNum%2Bit1SrcA50JBdsNhtfBIic3NLmIozpJ4Ey7w3NXSkRiguPngbfiT6D6gesiaZjRkbyqHhi1eZmAIwApWpaWjd1Mtfrb3nVinlRBxpozbY6Fc98bJEWs6qgFBt7UDiALgXr5hZn1szYV1iaj63bXY40b37HzqTZvhyS1C9hkVFtSODewFdl2zEBmMNbT9KbYGxQ2pAK2AX3UWbzNlYIxkZZcGs%2F92U58mgU0t%2B%2BDc0DdUH8MsgUxhI6PxX%2F4%2Ba6nrGpM1G61ymI0rkxAaqTuMVWNx4D2fulT2d6SRgwF6LMay%2ByJmovNHnmFmKjxnd%2Fpsit3ycchpSHQ%2FzjWBdaPG5%2FniCOau8gSfmcpKQHCn1yPH4dHqsk1ZEpjIEEc6CI8wPfcNaClruYg1E8WhfzVzwdffO2xWNbrSQHYxvVSnX37HC4IqMU4Ut31CoI%2BaeFzyQJiK%2BaVFb5w9s4Ou4wKDcJIxmIjllbDKuRMOUz0TFzzDlbPoORJC92FN%2FHNjhJLr0iY%2Bj4ZuS6qp2vp4di8VC%2BzErk64vlNdzb%2BJaefmcyvQ9ZNqChMEW2c%2BuvPelk3gY6jNsY0zL57Gpsmj6qbRXoWGmA%2FyuoT2U%2FyVmksdhI1si75hDlmSWs6bRWbgV2pMzflMKuDicoGOqUBSd%2BlZkFyRWU2kTr2nJm7VpPUihyS1UKEx5kTPC7LtQTlOoknzcvMXUJ9%2BVHKyMxoXQja8A0w8vATBA5b6N9eVcD2SbQv50Yo0MzB9cxsHZICaIs45VZTvp8mVbAaZOO%2Bt6IOddWK00ncX3K4iuXvKAT90HZxlHmglASf8mWWDZJM5f3ep97p1D%2F%2FDmmR9joR7EYDZzs8qVPzsb108BTChJVu3KrG&X-Amz-Signature=1b23f7d7435b683507769acae2d4a005df28ba5cd07aa212458f712ddf815158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

