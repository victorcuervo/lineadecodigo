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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJI4Y5S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGYz7%2Bb%2Ft0IbFcT99IHVCPU30nnZr%2FjhpsHz0bDAPhxAIhAM%2FzVzkHAuA9LAAdNAMRcRot4rtcaai3FQ%2BuPLJcH4moKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhIbGOsb3hLg0AbBEq3APwn2VlWd%2BOdXJ2AsdN8%2FAtGE5f0RiHN9ZCLJDOsOjZ1XpW4DPiabsIxpfJWcaE5X9PeOuxvl7XJqgiR8BtBefOBkW44amn1vH8%2FAVvVL3DDMC4Fg0h4VA3QfrzqtTL%2F9l0GonW3VNBWcaYjsTECs%2FXNu%2BWGwFa0Uovzr1J8C7M1PiFRSdsKX8QwuOo3XK2UJOecDZ4yjD0w5U8VQ39o8jOLwtYVAcmxJtl%2BpPKgds9bL7CBay007%2B1Ghw5hOMaaaHeG7oqx8QndQhqJQHDWlBSP9pMAYTcSvHs9oMYwrZ1fmZB%2FXMMDK0HoTek%2FpjM2J%2BQPzJ6NN4O8sNBT6gxjvCGv3ITdI%2Fxp%2B9hhQcm6Y4%2BtZdjBHQkk9gxyVeLgC7UwsOR2aB%2FHcRy47NI1kfMcenAIiKA5dNJM1h3bBTiE8HRDA9vewBXSyPEoqoKi0cmnfXYYz%2F4IiYDniFlO7jQ05JxHR9566qNGeL1BLhju5HTja4cSuoNTADd1fUcD%2FEBPTjylevoG%2FScBw%2F5XWskP3VNUtz89mJrxD7PeuqtfjHneTre9J9r4V1QDih9R7krlBnVvSF9C4uhrwItwK0EOAXcNbJmKmdrtwo%2F6D1aSYLubzKVeM8rSGeMYBBQxDCmoIvKBjqkAbswoF2mcLv5bNrQKKZm0vt8u6%2BK7%2Fir%2FeqJ0fdLTZUxaHQ6zVC1x5SHs0vVrSf2K1ZNIhUR3yqI7VM%2BCuH5cKmuTZvnyV5mTx2w%2F1u1ZAjsYfvtxJd5HE7F4EVSMi09b%2BVylMr8ZZeEtTmBTs13CaarhvUJ%2FvyE1qB1jLoKH81Y1QN5q1s3l%2FbZJl0FdYkofe%2FL%2BEHuj0mu7V0sEhNakS6YWRhB&X-Amz-Signature=6a8392dd5e974446f9118fa0c3b7549c0ab16db27834aaa7993f69efa8c28e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTJI4Y5S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGYz7%2Bb%2Ft0IbFcT99IHVCPU30nnZr%2FjhpsHz0bDAPhxAIhAM%2FzVzkHAuA9LAAdNAMRcRot4rtcaai3FQ%2BuPLJcH4moKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhIbGOsb3hLg0AbBEq3APwn2VlWd%2BOdXJ2AsdN8%2FAtGE5f0RiHN9ZCLJDOsOjZ1XpW4DPiabsIxpfJWcaE5X9PeOuxvl7XJqgiR8BtBefOBkW44amn1vH8%2FAVvVL3DDMC4Fg0h4VA3QfrzqtTL%2F9l0GonW3VNBWcaYjsTECs%2FXNu%2BWGwFa0Uovzr1J8C7M1PiFRSdsKX8QwuOo3XK2UJOecDZ4yjD0w5U8VQ39o8jOLwtYVAcmxJtl%2BpPKgds9bL7CBay007%2B1Ghw5hOMaaaHeG7oqx8QndQhqJQHDWlBSP9pMAYTcSvHs9oMYwrZ1fmZB%2FXMMDK0HoTek%2FpjM2J%2BQPzJ6NN4O8sNBT6gxjvCGv3ITdI%2Fxp%2B9hhQcm6Y4%2BtZdjBHQkk9gxyVeLgC7UwsOR2aB%2FHcRy47NI1kfMcenAIiKA5dNJM1h3bBTiE8HRDA9vewBXSyPEoqoKi0cmnfXYYz%2F4IiYDniFlO7jQ05JxHR9566qNGeL1BLhju5HTja4cSuoNTADd1fUcD%2FEBPTjylevoG%2FScBw%2F5XWskP3VNUtz89mJrxD7PeuqtfjHneTre9J9r4V1QDih9R7krlBnVvSF9C4uhrwItwK0EOAXcNbJmKmdrtwo%2F6D1aSYLubzKVeM8rSGeMYBBQxDCmoIvKBjqkAbswoF2mcLv5bNrQKKZm0vt8u6%2BK7%2Fir%2FeqJ0fdLTZUxaHQ6zVC1x5SHs0vVrSf2K1ZNIhUR3yqI7VM%2BCuH5cKmuTZvnyV5mTx2w%2F1u1ZAjsYfvtxJd5HE7F4EVSMi09b%2BVylMr8ZZeEtTmBTs13CaarhvUJ%2FvyE1qB1jLoKH81Y1QN5q1s3l%2FbZJl0FdYkofe%2FL%2BEHuj0mu7V0sEhNakS6YWRhB&X-Amz-Signature=259e9dfba994fe0bfd7a8b6735317a08ea40260c77928804c06366e20c985668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

