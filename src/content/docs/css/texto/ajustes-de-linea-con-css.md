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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABLD7GT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkhxkH9NagafvmdHW0ggmVgomJCi0qIE9%2FBuwGsWiyAiEAtg3aGMfXBaB8aVCGEdj8K%2BYf%2FcN1JJLuh5id%2F29UTHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK0XNflzj3juHCxJdircAzlVhtnnuYKHuTygCdy0RuHUwDyBTWDyZv%2FWypiGAz8wfWErVJnmMOFfnSURQnSv1Bl0Bd3TVOj3qjU74H1yJIamt8Etcs%2FxOkQRh%2BwFWyGAT%2FdiaXMt0IXiHOGrKZwZpmt9mwdYb4dfxSZoFnQxMzqOw3RoTveyBxwFj9nSJ7koMg6VozxP6Qqw7IzZn1BuQoIcw1mtQz286OWtpua1Sy7rbsi3A0lyCfUYpLQdIVVaCNB8rHt6vJeofh0kPfeve%2B7SvYgaAfAKwz94tPcTpTOYnYIlPyNpya0ugnihz7Pgcl2RuL3WkhXks3BpKQJbE4UkZBEKL5d%2B7rySp0HszU8CvKNfV0vCIM4KWXEfcd9qVAA1VJhhQerNCwTqoWa6RlTQbSpA17OHSmgkc%2FKPTxqc5sAows0wOuQacf8yIh4g%2F5s%2BHtpRY9FN8yweCJ06eVV%2FWwXPQiHADeFlHRJMDb85kKEDdtiZSB0PPBpYK%2FKTK%2F7JuRlMYCjgFcatu3hMfS4ft4ethff%2B3YCMBkPNdpVODteESKbSa4o4tHJA8EUp7CrdbHpv%2BPFNWPxoFP4ScQWgXoM2AH4EE4e79roOh8tZQJQOQzvZerBXUDWQFulxpLB1EweZo9P2y1hRMM77h8oGOqUBVkdeMiEF8vjReguRRJf3fMT%2FlvC814tVKs3Hc83ojqYV8EMGb9VCjhMRJ5QaqegGkx7iAALiZvuPpxdwM4Y0N6C4wY6oWHbi9VXQXK88QbQQEjcE6tlsSc40GZvbamE9GTtDFWi1e2NB9DBQmS%2BTOG5CMgspJRi%2Fb7QDUUMAEPhxmQ1XnPfAKh7KOqLXBQTZOuUMTBUdFlbWNmvT4ykDsPxAusdl&X-Amz-Signature=3aa62dc9ef54d3fc8d3f460bbf939f98e7309d10e6030672c3287f53295dd93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABLD7GT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIkhxkH9NagafvmdHW0ggmVgomJCi0qIE9%2FBuwGsWiyAiEAtg3aGMfXBaB8aVCGEdj8K%2BYf%2FcN1JJLuh5id%2F29UTHcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDK0XNflzj3juHCxJdircAzlVhtnnuYKHuTygCdy0RuHUwDyBTWDyZv%2FWypiGAz8wfWErVJnmMOFfnSURQnSv1Bl0Bd3TVOj3qjU74H1yJIamt8Etcs%2FxOkQRh%2BwFWyGAT%2FdiaXMt0IXiHOGrKZwZpmt9mwdYb4dfxSZoFnQxMzqOw3RoTveyBxwFj9nSJ7koMg6VozxP6Qqw7IzZn1BuQoIcw1mtQz286OWtpua1Sy7rbsi3A0lyCfUYpLQdIVVaCNB8rHt6vJeofh0kPfeve%2B7SvYgaAfAKwz94tPcTpTOYnYIlPyNpya0ugnihz7Pgcl2RuL3WkhXks3BpKQJbE4UkZBEKL5d%2B7rySp0HszU8CvKNfV0vCIM4KWXEfcd9qVAA1VJhhQerNCwTqoWa6RlTQbSpA17OHSmgkc%2FKPTxqc5sAows0wOuQacf8yIh4g%2F5s%2BHtpRY9FN8yweCJ06eVV%2FWwXPQiHADeFlHRJMDb85kKEDdtiZSB0PPBpYK%2FKTK%2F7JuRlMYCjgFcatu3hMfS4ft4ethff%2B3YCMBkPNdpVODteESKbSa4o4tHJA8EUp7CrdbHpv%2BPFNWPxoFP4ScQWgXoM2AH4EE4e79roOh8tZQJQOQzvZerBXUDWQFulxpLB1EweZo9P2y1hRMM77h8oGOqUBVkdeMiEF8vjReguRRJf3fMT%2FlvC814tVKs3Hc83ojqYV8EMGb9VCjhMRJ5QaqegGkx7iAALiZvuPpxdwM4Y0N6C4wY6oWHbi9VXQXK88QbQQEjcE6tlsSc40GZvbamE9GTtDFWi1e2NB9DBQmS%2BTOG5CMgspJRi%2Fb7QDUUMAEPhxmQ1XnPfAKh7KOqLXBQTZOuUMTBUdFlbWNmvT4ykDsPxAusdl&X-Amz-Signature=5623ff4e361241eb3c609d54a91af3f0f0bbf73ce64f5afa57b3aa3a3e0ad3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

