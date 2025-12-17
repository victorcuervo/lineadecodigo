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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRPYTSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXVWgF4MPvPwK4hYXmDDl3KzFMZ32fXJ8csM1uSTMyAiAKWA5ZhPeCy6cstEKmGpgYHSyA0J58VFtD5TvDDuP%2FTir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM3d%2FufIPk2DLS8zMVKtwDr%2FQSMatqzzi99w6w%2BxhnbDTT73sL%2BsUfFCRZ%2F5cuc5Y7oh%2FhhlSYJzbjzy6NVDUIvX%2Blf4xuFPaPEN%2BXd2nj7TDAI9hQbnSPnUyEVD8N6i%2Fe6i9jm1kPIqM7ynSbq1juRNssyALqcAgrB%2FMhZU%2FXaNRoB37jFO%2B9iTdcEJj6kW3F7uoHhVsocdEwskeKrgC4uwaZzg%2FZViC5SmDjaxsk3YwJthIeH2qKU0rcQ2RMHYAIRiC9MyM5UU8eO%2FioM79iOVU9l7EKTWhDA5OURHF118SoipyQaNrI0RsGUTawiYWi%2F5GJ5X3JA0IuQJHhfw3PsUTnFnGw8nbqnrSrVewppN8Ic8HWTywXTPexbpR27f463XCZZLXMnAo%2BVbJZsX4na27sBZ8t07Qw%2B3JwNbbRJEj6BjcbZpCsQQzFznh8mp9tqhtZE9%2B3C5iG6B%2BTvYkldu%2BgzB0XsycCvb6E12BzpAwn3lXeFq9FVk%2BAOLP34zYe7EAHA2oQL85YIeXafcZbsHQhvSuwZe1tGsLTOuFPjaSIKk3W3FZxVpgrHFZ2p4XiBQw7RzYlv9XF9SIir%2FK1p7SZBdc5Zrz%2F6gWyceHEklWsV8dh3Q2bkrVdAlfa8hkyW9DUdY1XcuzuuZkwiY%2BKygY6pgHik%2FcyfWpCeuLcgTBmxzMrvQEWpRcj2n0BtIc%2FNixEFShzjg92%2BpSyODfa%2FaRNDXQRLtpWErZ0kc9l0zT7DgBabtrUV%2BeHWh6jf4k%2FSGDO%2F%2FMJwe9HwtwSb9OlhxtnxLD5LC5Y1VaYsg7yw4zm6yVRhCggxc2E8SwM4jqCXkFRm38JgMZsO5W6oXRdoIkDpHNrN3zGoAeSVDfGk6BQJ6P7Q6ZGHNyO&X-Amz-Signature=91cf528127c4898f039a85e2149edcc231ddb1cbb32092d563b37eeb7a7e7ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRPYTSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTXVWgF4MPvPwK4hYXmDDl3KzFMZ32fXJ8csM1uSTMyAiAKWA5ZhPeCy6cstEKmGpgYHSyA0J58VFtD5TvDDuP%2FTir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIM3d%2FufIPk2DLS8zMVKtwDr%2FQSMatqzzi99w6w%2BxhnbDTT73sL%2BsUfFCRZ%2F5cuc5Y7oh%2FhhlSYJzbjzy6NVDUIvX%2Blf4xuFPaPEN%2BXd2nj7TDAI9hQbnSPnUyEVD8N6i%2Fe6i9jm1kPIqM7ynSbq1juRNssyALqcAgrB%2FMhZU%2FXaNRoB37jFO%2B9iTdcEJj6kW3F7uoHhVsocdEwskeKrgC4uwaZzg%2FZViC5SmDjaxsk3YwJthIeH2qKU0rcQ2RMHYAIRiC9MyM5UU8eO%2FioM79iOVU9l7EKTWhDA5OURHF118SoipyQaNrI0RsGUTawiYWi%2F5GJ5X3JA0IuQJHhfw3PsUTnFnGw8nbqnrSrVewppN8Ic8HWTywXTPexbpR27f463XCZZLXMnAo%2BVbJZsX4na27sBZ8t07Qw%2B3JwNbbRJEj6BjcbZpCsQQzFznh8mp9tqhtZE9%2B3C5iG6B%2BTvYkldu%2BgzB0XsycCvb6E12BzpAwn3lXeFq9FVk%2BAOLP34zYe7EAHA2oQL85YIeXafcZbsHQhvSuwZe1tGsLTOuFPjaSIKk3W3FZxVpgrHFZ2p4XiBQw7RzYlv9XF9SIir%2FK1p7SZBdc5Zrz%2F6gWyceHEklWsV8dh3Q2bkrVdAlfa8hkyW9DUdY1XcuzuuZkwiY%2BKygY6pgHik%2FcyfWpCeuLcgTBmxzMrvQEWpRcj2n0BtIc%2FNixEFShzjg92%2BpSyODfa%2FaRNDXQRLtpWErZ0kc9l0zT7DgBabtrUV%2BeHWh6jf4k%2FSGDO%2F%2FMJwe9HwtwSb9OlhxtnxLD5LC5Y1VaYsg7yw4zm6yVRhCggxc2E8SwM4jqCXkFRm38JgMZsO5W6oXRdoIkDpHNrN3zGoAeSVDfGk6BQJ6P7Q6ZGHNyO&X-Amz-Signature=9c75ab8fc5d660ded841b7c2c51831d336fc4c6a3138534a886ec6a9681d6827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

