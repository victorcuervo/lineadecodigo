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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHANRVX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDX9CJ5%2FfzskFPX8vFiWaqmn6VQuM4N1Cbbm%2Fda%2Bbk%2FAiEAsW8M1q3Lfv5I20%2BpDV75V2G99RlWj5oofUY3UCzOO5EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVt3dDm4C9cw%2FP%2BdircAz960up7w%2FyLNGEYmW9HmqfI7HniY65a8s1kfIH%2FdpyvoH9C4WU2f24txmQTowo9IJKwmHaXAUgZUtplq7PWWSC1Y4lplLkQ8W5YJxvI7rGcxTUrcBMsywryzxjYdaJOfK9Hkqby4jmL%2FynV8dKzw0n0Lox9WaMkqiHu4j2AkBlOJM09iDsuIwog9VYlNS35vcflqNJypR7wVPXl0%2B%2Fe89FOCtzaPrktC9XMRGhKyUbGOFJc%2FQLA%2BCJEouXdk0g2NFNCAgrhDbx1Nu%2BObbO4wgKkK5siP02cIcP6aQufvX93Di1xSbj0TLNZI4I4ZdoZd0P7W9sa1fomVmgbcbQ3Y1wiESKKgBWgcloMtLooJhoWoQV6koexYhQQlPIvio5cfY9p%2FZ4SAPdNld6PA9StiNb6MtGq94GAVLCtzgQbstakAjFbgT3NVp2yj8h0ETOtN6B0Y5e2tnf2%2BqAPrF581mgOeRsAx5fLLPV%2Fwyp8Be%2Fe9V0jsFZYHDYTIGyCipqovLZLqj7D4j7RyRUatXDWcfYrgDyevQeA3vjkJkGko2UugtUhQWN%2Fcb0tPYshuQqxnMOD2jsaec1bCiVOsg2jYIJmtkWyjWjW81%2FZn512zxcG0efKeYNFvnvlYJ5pMNOfi8oGOqUBFPDUdUGlPLLJkAmetkTsHdld685QAdQVgqPliHkgLnya7GKn%2Fh4ruQs6aPOrudYFuQoJNmy9r9m8k%2FE5uXJxjLMAPWVYUgl1%2BDFCA3KvGT1mHNYANX35QMjZipMYSEHy0iN2Mbpo2EjJ9wkMmdjF9JXQaGi%2FbaWEqUkmOzss9gQIShylIarKod%2FxxeeSDwZy%2FC0gw97TmBbjnpAHm3bEp1THcpvj&X-Amz-Signature=ddbc17eea085fc75a373fc33d7c46151ea3fec9b1848b1723ba210031e73e98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEHANRVX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDX9CJ5%2FfzskFPX8vFiWaqmn6VQuM4N1Cbbm%2Fda%2Bbk%2FAiEAsW8M1q3Lfv5I20%2BpDV75V2G99RlWj5oofUY3UCzOO5EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVt3dDm4C9cw%2FP%2BdircAz960up7w%2FyLNGEYmW9HmqfI7HniY65a8s1kfIH%2FdpyvoH9C4WU2f24txmQTowo9IJKwmHaXAUgZUtplq7PWWSC1Y4lplLkQ8W5YJxvI7rGcxTUrcBMsywryzxjYdaJOfK9Hkqby4jmL%2FynV8dKzw0n0Lox9WaMkqiHu4j2AkBlOJM09iDsuIwog9VYlNS35vcflqNJypR7wVPXl0%2B%2Fe89FOCtzaPrktC9XMRGhKyUbGOFJc%2FQLA%2BCJEouXdk0g2NFNCAgrhDbx1Nu%2BObbO4wgKkK5siP02cIcP6aQufvX93Di1xSbj0TLNZI4I4ZdoZd0P7W9sa1fomVmgbcbQ3Y1wiESKKgBWgcloMtLooJhoWoQV6koexYhQQlPIvio5cfY9p%2FZ4SAPdNld6PA9StiNb6MtGq94GAVLCtzgQbstakAjFbgT3NVp2yj8h0ETOtN6B0Y5e2tnf2%2BqAPrF581mgOeRsAx5fLLPV%2Fwyp8Be%2Fe9V0jsFZYHDYTIGyCipqovLZLqj7D4j7RyRUatXDWcfYrgDyevQeA3vjkJkGko2UugtUhQWN%2Fcb0tPYshuQqxnMOD2jsaec1bCiVOsg2jYIJmtkWyjWjW81%2FZn512zxcG0efKeYNFvnvlYJ5pMNOfi8oGOqUBFPDUdUGlPLLJkAmetkTsHdld685QAdQVgqPliHkgLnya7GKn%2Fh4ruQs6aPOrudYFuQoJNmy9r9m8k%2FE5uXJxjLMAPWVYUgl1%2BDFCA3KvGT1mHNYANX35QMjZipMYSEHy0iN2Mbpo2EjJ9wkMmdjF9JXQaGi%2FbaWEqUkmOzss9gQIShylIarKod%2FxxeeSDwZy%2FC0gw97TmBbjnpAHm3bEp1THcpvj&X-Amz-Signature=396ec9cbc843af2857f6fcb1916570da8ebfb3961b6c83e19c49011c90e0cf45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

