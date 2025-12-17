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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVB7OPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA18Srm%2BCg0eii4EUzVCEjIU5S%2FYP7Kzws%2FO8uD31ZjxAiEA8ytnX9kreNFEi%2FDl6y6Cmvh1yakRK3g4Wx90ySeX9eEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG86lSfraBZjvDWWdSrcA%2FZ7gRFSE0xQkCYrUpIzMZHWk387uGwePqVHmZFOj4KavAH%2BF4yxKtXFkpYvV5dh60hB%2BwBNZWyQGP342HFBKVE8NYTJS%2BLuoyDLXJr418yr1XMU9mh7g7VM8fCpA39brsPKAOJ5lyJETOsNB4lUBDMEuCkVr7d1rP%2F9u3GbGi%2B3PDcVBq0JGjPpx2ihMm86M6vrr1xhuxQqM0YWnNPQr1Jf%2BLa6pVDv6eksQGg6eBjvOx%2B%2FOKA1AIRrWjrP7dCwjwh5rpi7vHlnFZfVzVWh3thYKvdB4XoMD0DQg9y1%2Fx70qgkqS0OJzpg%2FdUto2gyYcQ5NQLyxe5DOaFuV3CplXGJw8%2FJY1jN1uV1ML2TtbRTYCj%2FTgwV60Gls1F7sVPI6mIB%2BKkFyFw1%2FuoWPxrLkfpmovXI0Jp9UAIzKRcxgGaxij5hqnUmhVoiNRLVQImAHY%2BjI9rh78qxJUci0w5qR1ARHB9%2FuEHK961XY9EeMi8Gz%2B1kFzk4rs%2FaPfhEqpBSn2RfTEvYL65o5GwP8J30pifh2brA0zTCc4P74ZHwoJJo9tKDbra8TobNBLqfOyOpIaXzphrtN3cT4QlFbI8tsj1cOe%2BeV1G%2FeO7ACMvFnATykNB67%2FEu2fidRD7%2BYMJ6PisoGOqUBp5%2Brf1iA1JvL7t8ptAgGBVG6v0usgpVVW0DLaa%2BlQLme%2B%2BzVOWH0W7E4y9hMfC4SWe3CZ3e%2Fsiwt0VZ6GZZhQCDCdJRrKBeriykIOC2feQ6PsxdOUYIyvaVnOxBD%2Fh5qZOl6pRmDPSr%2Bmqu29cKyPeDhsNn1JSBHs8asumO81yuNdi14a%2BURbolKCFVB%2FnPKP07I6EU3KfzTuJZxikv529G5AXR2&X-Amz-Signature=04eb0848a66a977564bbb3c6ed1c3d8e43e3da96a7f6b8f11d3caeb26423e1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LVB7OPT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA18Srm%2BCg0eii4EUzVCEjIU5S%2FYP7Kzws%2FO8uD31ZjxAiEA8ytnX9kreNFEi%2FDl6y6Cmvh1yakRK3g4Wx90ySeX9eEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDG86lSfraBZjvDWWdSrcA%2FZ7gRFSE0xQkCYrUpIzMZHWk387uGwePqVHmZFOj4KavAH%2BF4yxKtXFkpYvV5dh60hB%2BwBNZWyQGP342HFBKVE8NYTJS%2BLuoyDLXJr418yr1XMU9mh7g7VM8fCpA39brsPKAOJ5lyJETOsNB4lUBDMEuCkVr7d1rP%2F9u3GbGi%2B3PDcVBq0JGjPpx2ihMm86M6vrr1xhuxQqM0YWnNPQr1Jf%2BLa6pVDv6eksQGg6eBjvOx%2B%2FOKA1AIRrWjrP7dCwjwh5rpi7vHlnFZfVzVWh3thYKvdB4XoMD0DQg9y1%2Fx70qgkqS0OJzpg%2FdUto2gyYcQ5NQLyxe5DOaFuV3CplXGJw8%2FJY1jN1uV1ML2TtbRTYCj%2FTgwV60Gls1F7sVPI6mIB%2BKkFyFw1%2FuoWPxrLkfpmovXI0Jp9UAIzKRcxgGaxij5hqnUmhVoiNRLVQImAHY%2BjI9rh78qxJUci0w5qR1ARHB9%2FuEHK961XY9EeMi8Gz%2B1kFzk4rs%2FaPfhEqpBSn2RfTEvYL65o5GwP8J30pifh2brA0zTCc4P74ZHwoJJo9tKDbra8TobNBLqfOyOpIaXzphrtN3cT4QlFbI8tsj1cOe%2BeV1G%2FeO7ACMvFnATykNB67%2FEu2fidRD7%2BYMJ6PisoGOqUBp5%2Brf1iA1JvL7t8ptAgGBVG6v0usgpVVW0DLaa%2BlQLme%2B%2BzVOWH0W7E4y9hMfC4SWe3CZ3e%2Fsiwt0VZ6GZZhQCDCdJRrKBeriykIOC2feQ6PsxdOUYIyvaVnOxBD%2Fh5qZOl6pRmDPSr%2Bmqu29cKyPeDhsNn1JSBHs8asumO81yuNdi14a%2BURbolKCFVB%2FnPKP07I6EU3KfzTuJZxikv529G5AXR2&X-Amz-Signature=12ad27bd67cc79612c87dba18a8bce60053afb4065d9db43e0faf7c470159a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

