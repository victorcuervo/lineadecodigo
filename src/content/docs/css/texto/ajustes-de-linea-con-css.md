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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62F37Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRZ%2FMqKA4xBX06VW1qhhsDetrOZRFF03VNsUaSHH7ORAiB0zIbK%2FxUSqJ9xj4wu9ICJAcpIKPHJ%2BI8O5gz%2BdEFVRSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxPBCI1c08yBeOjUaKtwDdAGzMOMa0Tx7gq6yu151YovhbCQCxWy9kSGA5hCS9%2B1xlk9XxD5oJz9Of5ww%2B5BO5PN7YAqfYypfSrWc4AFj3GDnfUj41ONltqy13ErE6HpBwX%2BsmSPplIVlbZxZ4uECXc5yRvC9ChZuWZ63VA9HTaR546OpQ558Z2P9gPifjFniTryxKXqBGJPmLh2befWCfs3og%2FnvVkmdLLTSef9EbBAFX%2B97BWsFFxgmGq%2BJupOfVjdpJTQS8jmK9SCuCNWDoojAcQr7iIUWvZyU5hAAlKUlfwuJK02uQgLPwXVwkg9jRejTQgJjn9pXnygd%2FYMGP4Di9%2FwN050IgPG3zxN0tUpe5ArfnoSRw7gnDOyoLO2njAzxM6BRfKJ0Tg534jTzSmoUvXbUkTMzDXVwDoQgeSrVTSu4Cmk1BrQcQKdMAkl%2FLe6IltvlU61%2F2saoFoGbtZnsNXNIL8iCbdHvY68udMp0oes%2Fn%2BImofRQf4We3P5vVZbzqTaHNLoxD0wFuU1fk4ZAETBEXHEsQXEhgr5yq8jdSsvW%2B9gglb1W5t40beVkOYqL05%2BiHMxq1iBt%2BkSGc%2Bx8O6yry%2FmMNjb9iJ5LFn4kS6Hy4%2By0ViWgBDsswfHIXSULXn2PVvD3MZUw1vuHygY6pgEXmesdOGESRi4OyWqaIq%2BRtYaJju74L34i0WTSumknLSRLza6JMtAn1NMhIdDqXSL%2BVorKl%2BXJVn%2FVAUl4XBCUvyLI4Ybh0exZdMpMbPSjQ%2FZ7l4gzWyZYuB286EAIkT4SGHxVCTIKlDDSOQbqkPFdH09qvxG4VFRhqNZxxhVHx%2FuC9vy%2B4SflMksPkXc9bc089iac3Sq1F3KsmpUvvmtxpzEmErk3&X-Amz-Signature=296108a6bcd4dcfd559bb4e87a30e47875f86a51a18c2ec94c1b9f51296e56df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62F37Z2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRZ%2FMqKA4xBX06VW1qhhsDetrOZRFF03VNsUaSHH7ORAiB0zIbK%2FxUSqJ9xj4wu9ICJAcpIKPHJ%2BI8O5gz%2BdEFVRSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMxPBCI1c08yBeOjUaKtwDdAGzMOMa0Tx7gq6yu151YovhbCQCxWy9kSGA5hCS9%2B1xlk9XxD5oJz9Of5ww%2B5BO5PN7YAqfYypfSrWc4AFj3GDnfUj41ONltqy13ErE6HpBwX%2BsmSPplIVlbZxZ4uECXc5yRvC9ChZuWZ63VA9HTaR546OpQ558Z2P9gPifjFniTryxKXqBGJPmLh2befWCfs3og%2FnvVkmdLLTSef9EbBAFX%2B97BWsFFxgmGq%2BJupOfVjdpJTQS8jmK9SCuCNWDoojAcQr7iIUWvZyU5hAAlKUlfwuJK02uQgLPwXVwkg9jRejTQgJjn9pXnygd%2FYMGP4Di9%2FwN050IgPG3zxN0tUpe5ArfnoSRw7gnDOyoLO2njAzxM6BRfKJ0Tg534jTzSmoUvXbUkTMzDXVwDoQgeSrVTSu4Cmk1BrQcQKdMAkl%2FLe6IltvlU61%2F2saoFoGbtZnsNXNIL8iCbdHvY68udMp0oes%2Fn%2BImofRQf4We3P5vVZbzqTaHNLoxD0wFuU1fk4ZAETBEXHEsQXEhgr5yq8jdSsvW%2B9gglb1W5t40beVkOYqL05%2BiHMxq1iBt%2BkSGc%2Bx8O6yry%2FmMNjb9iJ5LFn4kS6Hy4%2By0ViWgBDsswfHIXSULXn2PVvD3MZUw1vuHygY6pgEXmesdOGESRi4OyWqaIq%2BRtYaJju74L34i0WTSumknLSRLza6JMtAn1NMhIdDqXSL%2BVorKl%2BXJVn%2FVAUl4XBCUvyLI4Ybh0exZdMpMbPSjQ%2FZ7l4gzWyZYuB286EAIkT4SGHxVCTIKlDDSOQbqkPFdH09qvxG4VFRhqNZxxhVHx%2FuC9vy%2B4SflMksPkXc9bc089iac3Sq1F3KsmpUvvmtxpzEmErk3&X-Amz-Signature=e426bcb1c6db76f707e5c5046b7a9a0ac7ebbc6ff814276cd03d09f9cac37eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

