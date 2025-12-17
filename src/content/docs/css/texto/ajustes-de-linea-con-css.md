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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BW3ZEDS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE4aGQSYhwcFfG1UAlqWRditFgbPBReFR9rKMgWCAVnAiEAnEA9aFJRpqKXyXiOy2VGIMopblgmfMbGdzMEA0zMtsUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHQkawjy7kJLX4rfHCrcA3uChe6Dd1L8dpWAW8cUuk%2Bkeh%2B4urrWFLmnYC81Iid5BXlGejYmToz2m3myJ7xi7emG9tJzZW6C27Gx7baUtoje66Zlhsza16LWZ%2BmnCPDDwyA%2B6SDotdejL85hmDPxfNHSJ4EhukEufeoOQT3WS%2FCYqRcnnHht%2BeDBrk2yuNxCnbCHsBR4JWNt6t6gI9W9yPVEQcXPbsNWQ%2FTf0OoO5v%2Byn0GTjNoXmjwwDNu%2FMoRs6jayDxtXG8SWQzWsUVlgLo0XwOqXSQ0r%2BwPJVHjJonBy7A7rAnTHXaWEUGYaa4R%2BrWGzFqDRUNEr8wYCyYxx7Er7uby5hJFb5XfAdNmxTZy3SfiqM0V3QPwFv2veJ1KdpMwRXsn%2Fx69YF0r%2FHufXqd99kTfRAbx3d8f4uk0X2UbyF17vwSr%2BOEmotxegIED66rzDggwYPDqnXytf8EMuXkA%2FdknkQHXEZtFVczH3StVmEgXyLxr9PcTa0Hwv6dtN4mI7%2Bwtz%2FmHdSapQ%2BVf%2FkKgyIUmbNrreshK6Jzn%2FhiaeD6xG9wM2HEqwpletXVBY120CPu%2BRvtnH%2Bv4Hi%2BrNGepSlRrkBE%2BWnujvWhp9ShLzqOupsGYn%2Fodz6RkMQoZ86xKDH8Ik4jRTWsfxMJb7h8oGOqUBNWaoe53PJHoiJF6P8wX0A6e%2Fi7%2B7Fl1J09NWY9HzKoUR06gIO5C1hB9TtERQsDadRLiy4XWWVfk5GWmXf%2BoB0atuDZkDSpDPmAgzDgQZqzndqw01A3dt6QktZpFQ4XgOLSYgaCG82bwTl7%2BPOUrrPsbkR8VTzsiNxId7TCtf0FdIXyZ4oSuwYV8P%2BTPdwiJkyOzphRtLvzAS6nYixo0sW7xjXPEH&X-Amz-Signature=aaa748545a0f7efb7c1aeb9da6cf01366b4974e5d658b1855cec1f19b4572e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BW3ZEDS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE4aGQSYhwcFfG1UAlqWRditFgbPBReFR9rKMgWCAVnAiEAnEA9aFJRpqKXyXiOy2VGIMopblgmfMbGdzMEA0zMtsUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHQkawjy7kJLX4rfHCrcA3uChe6Dd1L8dpWAW8cUuk%2Bkeh%2B4urrWFLmnYC81Iid5BXlGejYmToz2m3myJ7xi7emG9tJzZW6C27Gx7baUtoje66Zlhsza16LWZ%2BmnCPDDwyA%2B6SDotdejL85hmDPxfNHSJ4EhukEufeoOQT3WS%2FCYqRcnnHht%2BeDBrk2yuNxCnbCHsBR4JWNt6t6gI9W9yPVEQcXPbsNWQ%2FTf0OoO5v%2Byn0GTjNoXmjwwDNu%2FMoRs6jayDxtXG8SWQzWsUVlgLo0XwOqXSQ0r%2BwPJVHjJonBy7A7rAnTHXaWEUGYaa4R%2BrWGzFqDRUNEr8wYCyYxx7Er7uby5hJFb5XfAdNmxTZy3SfiqM0V3QPwFv2veJ1KdpMwRXsn%2Fx69YF0r%2FHufXqd99kTfRAbx3d8f4uk0X2UbyF17vwSr%2BOEmotxegIED66rzDggwYPDqnXytf8EMuXkA%2FdknkQHXEZtFVczH3StVmEgXyLxr9PcTa0Hwv6dtN4mI7%2Bwtz%2FmHdSapQ%2BVf%2FkKgyIUmbNrreshK6Jzn%2FhiaeD6xG9wM2HEqwpletXVBY120CPu%2BRvtnH%2Bv4Hi%2BrNGepSlRrkBE%2BWnujvWhp9ShLzqOupsGYn%2Fodz6RkMQoZ86xKDH8Ik4jRTWsfxMJb7h8oGOqUBNWaoe53PJHoiJF6P8wX0A6e%2Fi7%2B7Fl1J09NWY9HzKoUR06gIO5C1hB9TtERQsDadRLiy4XWWVfk5GWmXf%2BoB0atuDZkDSpDPmAgzDgQZqzndqw01A3dt6QktZpFQ4XgOLSYgaCG82bwTl7%2BPOUrrPsbkR8VTzsiNxId7TCtf0FdIXyZ4oSuwYV8P%2BTPdwiJkyOzphRtLvzAS6nYixo0sW7xjXPEH&X-Amz-Signature=878630243a9e945ab2045efad7d49babbf7eb4427c8df13726bffd56e114dc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

