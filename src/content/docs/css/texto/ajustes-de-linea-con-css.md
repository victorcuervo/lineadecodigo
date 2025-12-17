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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONAPDII%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMKoxClTLMfjE0mj4AhSkXQ%2BpyzMXMphGjWDfY8MkrmQIgXDMgje7aRX9WhX5DxiDtPYzqZ8k94qJoOdMnsX4DLkMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsw1Qt8K24YDl%2BOJCrcA1qZFvrjaXSOYoJqgzYjB6YvXzN5uBvfV1a5ck4hbePvkx5hOyICeWu44SvQBcymXdIsxCQ8MVlGugXejADk4jHMCnZsFuba2u1Ub5wKvc5zn%2F6nab3TxX9Dyao79yCB%2B%2FadF3rrHjeOumLZnHQCBJywu5cz2jvKTENTHpqMjc5yU9shMldjwiNTbQfc2Gqp4WBBwu3QqWWbj5avYA57mSbUjd%2BoX5NVujohhjDGJ5MAavlsp34VvSDeFux13oDmzaRjyzFXj7oNCe3bSHqfYldrpI5wfBiNIWwCdzv95xSFREQy1xGcph0bXOB5pxsOiL%2BjEBbmg9sb7XpzFSseL0URiGKcpluEUJZDUOe3svl1siPNrlkiIhPZDBdZ8fObiagDQI1q7cTUWQkkdNEdBNYA4pSA%2FkvQbkvL2VhfaaafQKVAlE7DZBAEAwG%2FDEidNsRpxmN1H8htPcb3rFBJIjlEAn%2Fj4kMooddrOeuFBfVhqqoA7OPsRZKLMXltK4Wlj0rFyxUV4lbNiZMwOGxHKz9km%2Btg%2BOYOEC%2Fym%2FWJlidfe3n6Qd6ZrymLHcHhwP%2BdUg%2B2a1wxmQcHvLsy6TLK7X7jTHkYnmeoph7odXBjNdlo%2BIv2mP3pamxbO1lRMIigi8oGOqUB139X6QeBs0M%2BPHnlCdNLWgJYe%2BCBiYDmc1Dee0TbPQOs21dLOO0o3noBUOuz%2B9K7a45fVbtFoAy9%2FcbM7YJaR052BYhs2YcwaHKQyxmFSYFSlhSfYZ0XrpGD5viKvXOjnh8Kyi972kU%2BAZMiS%2FpEqLRKA0jn8sFgAlVdwfcInO3CO1Fiph%2FJnJ6b4%2Ff9%2FveSbLcLuPCX5Cqf98dM3qGptmli7YL3&X-Amz-Signature=454d5af1277f55a390fd60743d4e4d3a993fd8de331d65455b106e624d28ce66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONAPDII%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMKoxClTLMfjE0mj4AhSkXQ%2BpyzMXMphGjWDfY8MkrmQIgXDMgje7aRX9WhX5DxiDtPYzqZ8k94qJoOdMnsX4DLkMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsw1Qt8K24YDl%2BOJCrcA1qZFvrjaXSOYoJqgzYjB6YvXzN5uBvfV1a5ck4hbePvkx5hOyICeWu44SvQBcymXdIsxCQ8MVlGugXejADk4jHMCnZsFuba2u1Ub5wKvc5zn%2F6nab3TxX9Dyao79yCB%2B%2FadF3rrHjeOumLZnHQCBJywu5cz2jvKTENTHpqMjc5yU9shMldjwiNTbQfc2Gqp4WBBwu3QqWWbj5avYA57mSbUjd%2BoX5NVujohhjDGJ5MAavlsp34VvSDeFux13oDmzaRjyzFXj7oNCe3bSHqfYldrpI5wfBiNIWwCdzv95xSFREQy1xGcph0bXOB5pxsOiL%2BjEBbmg9sb7XpzFSseL0URiGKcpluEUJZDUOe3svl1siPNrlkiIhPZDBdZ8fObiagDQI1q7cTUWQkkdNEdBNYA4pSA%2FkvQbkvL2VhfaaafQKVAlE7DZBAEAwG%2FDEidNsRpxmN1H8htPcb3rFBJIjlEAn%2Fj4kMooddrOeuFBfVhqqoA7OPsRZKLMXltK4Wlj0rFyxUV4lbNiZMwOGxHKz9km%2Btg%2BOYOEC%2Fym%2FWJlidfe3n6Qd6ZrymLHcHhwP%2BdUg%2B2a1wxmQcHvLsy6TLK7X7jTHkYnmeoph7odXBjNdlo%2BIv2mP3pamxbO1lRMIigi8oGOqUB139X6QeBs0M%2BPHnlCdNLWgJYe%2BCBiYDmc1Dee0TbPQOs21dLOO0o3noBUOuz%2B9K7a45fVbtFoAy9%2FcbM7YJaR052BYhs2YcwaHKQyxmFSYFSlhSfYZ0XrpGD5viKvXOjnh8Kyi972kU%2BAZMiS%2FpEqLRKA0jn8sFgAlVdwfcInO3CO1Fiph%2FJnJ6b4%2Ff9%2FveSbLcLuPCX5Cqf98dM3qGptmli7YL3&X-Amz-Signature=b66c416eb9416c711ca5c850b4b4db1260712d9c9e26ed1bc5ffc8193d845256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

