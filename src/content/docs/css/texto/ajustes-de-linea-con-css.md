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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUYTHCM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSPb42XeUtyn6JrT8s2%2F4VHzNRevuK7Xmu9rk3pwy0AIgcICU5Of9O0ZY2GYj5hBnRgyLt%2F2K%2BrB72rkyxXo2t5YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi6uLMMSXpNSrWosyrcA%2BtYh7ac3lFIrej5%2FGHWyc6w39FxT8QnEeIIjAF81H595l3Kp7SKYRo9Lqp4ZdZ0Q7vZkx1p0Q8gZrsktJKbwMefx0ZEVZ%2BdckgcYMAIKlXxTz%2Ff838fDoGqQvAsRTzEHBcfsIWDWU27y09E0lGJrzOWiHuyoh0v%2BQyamZTU30hdFyeJptbuhBfBN05Kfx%2BDaow4w5NmJQ6SsW64jnMV7uAu%2FDsZo0k5SH0C9sR%2FBSzD0H0WjHyHe%2B4Xdg4yeExLGZdYiu5sQplJq%2BZMBLFw0aQvqTECHhawmKBnsCsks77XAP7e9AipVeQaP0gYTCmwR30oaL%2FuxkA1tsACxVkunk6GrHGkUbluSOBbuYX%2FndXey6ng16mHKyJl8CFKViP9L%2Fae17WBSAwd4susckqJDwLmgmzAXMQqLHIOj%2By1uZO0kDvPvB0uyvIiYH2P6VWbrO3XD%2Fy7vQSN6DsZZCYBKNgJKS8jswTWL4YRpefp9D1qEsfRxcu50VPAnkeMK0nFOpotUd0Cyu6tDULnUh4ivacxvVAeUnakrMFirdURqOGRMSpoEastP3EESF%2BH6ndUXgu3FA0japekZo8ZWgNydgxE1XZXuvozQgdf3Q7nfZLUwHjKMGcLO7FPmWxaMNiei8oGOqUBaCVrNOp9W2PylVfXuhvrCDPa796uSxiJ8ZvJUGb2efIvqMooOdDohQuGVcq3J5lPVnrqFtIMjCIw0ZJUo5%2F3T03NiC6Wu0lKSfD9Rh6Dn2tNuvwqIP8l6T1krIH7wcmWM6O%2BRFfYRxBJhjqsE3a%2BnnchH6l6g0dyf4tnxtorfXvZ%2FBOEFtPnUbrNijNr4Mxa7ohaNHEkl4zvmfib4b6q7cl761uC&X-Amz-Signature=6ec6074b414a4fecfa428a202f429dd5785426c71168ccd114bb745fb7c8bc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZUYTHCM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSPb42XeUtyn6JrT8s2%2F4VHzNRevuK7Xmu9rk3pwy0AIgcICU5Of9O0ZY2GYj5hBnRgyLt%2F2K%2BrB72rkyxXo2t5YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAi6uLMMSXpNSrWosyrcA%2BtYh7ac3lFIrej5%2FGHWyc6w39FxT8QnEeIIjAF81H595l3Kp7SKYRo9Lqp4ZdZ0Q7vZkx1p0Q8gZrsktJKbwMefx0ZEVZ%2BdckgcYMAIKlXxTz%2Ff838fDoGqQvAsRTzEHBcfsIWDWU27y09E0lGJrzOWiHuyoh0v%2BQyamZTU30hdFyeJptbuhBfBN05Kfx%2BDaow4w5NmJQ6SsW64jnMV7uAu%2FDsZo0k5SH0C9sR%2FBSzD0H0WjHyHe%2B4Xdg4yeExLGZdYiu5sQplJq%2BZMBLFw0aQvqTECHhawmKBnsCsks77XAP7e9AipVeQaP0gYTCmwR30oaL%2FuxkA1tsACxVkunk6GrHGkUbluSOBbuYX%2FndXey6ng16mHKyJl8CFKViP9L%2Fae17WBSAwd4susckqJDwLmgmzAXMQqLHIOj%2By1uZO0kDvPvB0uyvIiYH2P6VWbrO3XD%2Fy7vQSN6DsZZCYBKNgJKS8jswTWL4YRpefp9D1qEsfRxcu50VPAnkeMK0nFOpotUd0Cyu6tDULnUh4ivacxvVAeUnakrMFirdURqOGRMSpoEastP3EESF%2BH6ndUXgu3FA0japekZo8ZWgNydgxE1XZXuvozQgdf3Q7nfZLUwHjKMGcLO7FPmWxaMNiei8oGOqUBaCVrNOp9W2PylVfXuhvrCDPa796uSxiJ8ZvJUGb2efIvqMooOdDohQuGVcq3J5lPVnrqFtIMjCIw0ZJUo5%2F3T03NiC6Wu0lKSfD9Rh6Dn2tNuvwqIP8l6T1krIH7wcmWM6O%2BRFfYRxBJhjqsE3a%2BnnchH6l6g0dyf4tnxtorfXvZ%2FBOEFtPnUbrNijNr4Mxa7ohaNHEkl4zvmfib4b6q7cl761uC&X-Amz-Signature=6dbacd3fc03eb3ada33bea132489096fae22fa7361e17eaf765c6edfede8e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

