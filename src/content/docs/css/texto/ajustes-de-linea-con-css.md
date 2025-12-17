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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HEIVTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1W6GrAtyAiLGjngaSblPZMp08ZWQ8iU4rtnOto4ZdHAiBrWMxHVmpedCUrWdTZQLfJX%2BaF%2FHRx8hFPf4I%2B6oyR3Cr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIbbHq40ngNrsSFA1KtwD6y9b%2FMzvL%2FxvvLSl8TTqkhS0daK9UiXp9vCP%2FehR2Zb%2BxvdhY2p9ucCUb0ypnVRNR89%2FxupA%2F8TwMNQyl8AaLIBduplnPjIEs7DKDhT2Lz2k4Uo4Ig3dPeenlgCfZQiMuWxSSgt2aE1zZUJ3PMnIWqHk6OQiEbXZtUARuNaJRzmTbfffwb%2FhG3wE%2BmBkN7f8IDu3JE1fyqU960DgRawnlkMtqDtlRRe7CF6icPLx5Vjww%2B4QVD1D113%2F%2Fl1Zxnn8aSmgf6uTtgKrtPzjlvs6B59JBGnKqjLDH6i8au4iCdRRZE70TFJlYC%2FO5Vq1MWFwM8QVD2pVRPlvoLYgFKHkh5ThV9cWE0HCihNk%2BAq78Cq0TUHE0aDbRAgMKcsumMSaTpkf1j7pbdogEpeoQ%2FnAfgu6QRZ6HYfNw%2FTfwPxQP7abLeNo9v7ISHPnuMMkvmxbSNWsjHKJc0qRg38p01jHfVPH%2Bh%2FgeyzaGmsWsLV2txFhjB4kxkAX%2FUZiwnImBS6R5l4hghc%2BbXZa%2BBcyoLzrAjlcI4ncUOsD%2BN%2FDbwu7gNJlNeRO8N3ALU7KVlZDzAfACLqm9cCk%2F5zL7ZlvJghOschLOSGYO2V8Un%2BA%2FcsCTHPBd81svnhJ7uynD5YwhreJygY6pgEx98FdaKwuK9zMse9EHTwNBBG7DL4YtTJ7nV6LdFz2H%2F00F4SXNz7VQzCMKmsmSCdJCM%2FERf1C7kyfNlEaEsj2C9hAaVf8S5fd3UNskwEXt5GcIo%2FwXOlS9VnMTNN3yGXWgNnPdY2hyJHTZsTIw8MH5RSAj1pj%2BgYTynRljos67VHOkgbW1lC3Xt5%2BX8nNL8ixZIpBH2BVI6hovYEyBzM%2F3qiyLHe9&X-Amz-Signature=fa9c647a5e8a00630a2572898b3ddf16cde13cd5d5b66f14299c0ecd9eb8a16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664HEIVTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1W6GrAtyAiLGjngaSblPZMp08ZWQ8iU4rtnOto4ZdHAiBrWMxHVmpedCUrWdTZQLfJX%2BaF%2FHRx8hFPf4I%2B6oyR3Cr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMIbbHq40ngNrsSFA1KtwD6y9b%2FMzvL%2FxvvLSl8TTqkhS0daK9UiXp9vCP%2FehR2Zb%2BxvdhY2p9ucCUb0ypnVRNR89%2FxupA%2F8TwMNQyl8AaLIBduplnPjIEs7DKDhT2Lz2k4Uo4Ig3dPeenlgCfZQiMuWxSSgt2aE1zZUJ3PMnIWqHk6OQiEbXZtUARuNaJRzmTbfffwb%2FhG3wE%2BmBkN7f8IDu3JE1fyqU960DgRawnlkMtqDtlRRe7CF6icPLx5Vjww%2B4QVD1D113%2F%2Fl1Zxnn8aSmgf6uTtgKrtPzjlvs6B59JBGnKqjLDH6i8au4iCdRRZE70TFJlYC%2FO5Vq1MWFwM8QVD2pVRPlvoLYgFKHkh5ThV9cWE0HCihNk%2BAq78Cq0TUHE0aDbRAgMKcsumMSaTpkf1j7pbdogEpeoQ%2FnAfgu6QRZ6HYfNw%2FTfwPxQP7abLeNo9v7ISHPnuMMkvmxbSNWsjHKJc0qRg38p01jHfVPH%2Bh%2FgeyzaGmsWsLV2txFhjB4kxkAX%2FUZiwnImBS6R5l4hghc%2BbXZa%2BBcyoLzrAjlcI4ncUOsD%2BN%2FDbwu7gNJlNeRO8N3ALU7KVlZDzAfACLqm9cCk%2F5zL7ZlvJghOschLOSGYO2V8Un%2BA%2FcsCTHPBd81svnhJ7uynD5YwhreJygY6pgEx98FdaKwuK9zMse9EHTwNBBG7DL4YtTJ7nV6LdFz2H%2F00F4SXNz7VQzCMKmsmSCdJCM%2FERf1C7kyfNlEaEsj2C9hAaVf8S5fd3UNskwEXt5GcIo%2FwXOlS9VnMTNN3yGXWgNnPdY2hyJHTZsTIw8MH5RSAj1pj%2BgYTynRljos67VHOkgbW1lC3Xt5%2BX8nNL8ixZIpBH2BVI6hovYEyBzM%2F3qiyLHe9&X-Amz-Signature=26157d2d230ec10a192603776886a97e536baf82f7e4f447174b14bee0a5408d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

