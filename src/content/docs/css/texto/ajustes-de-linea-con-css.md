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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLKX3NR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUICV1pC3k%2BQnHR984iNAOmUhz7M7XQMKnHQqOZ%2F2tAIgBuR6IkGYat0YIBHzwqJuSKg0z6MECB9YD0LXLsqejHsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKERnLSr0hdctPKyiyrcA6hiXFaEI7AFzco%2BDowH6fQo5TB6RjZ0O%2BINIegMI0MQvrpUelRAMhAhkOIKptrI3Cx1GmQTk1N%2Bs%2BG%2FKiNtM4sPk7JDLOkZMFP4dNEcTFvLumO6Myiced2L%2BotlUROePwQTRhc7MACejmEs%2FacuPTbhXG2gHYaiW%2FobH%2B%2FhHnFHkUbr%2BolQDsWCKEcYul47PYz7MX3Sh40M9NjN5GmV9ul3WhiFtw4x9O0WL%2FihNrWcCExw94RXztjIDVtvc3mqdcAx9LAQ1M7noP4VYA6OXoBR6mnMgPLzpo24k18D%2BRWFG9%2F%2Bb8WbJdbf8q61V10RU%2BkZtymDRVgETfCj7d2wV4dNz5oluulAf4upF7JOmq%2BiiTc%2FV%2Bxyi9soW%2FBvBJJVIIHwI94DYKvsXVg%2BHJSLsW7QyFodbkMAo8E0NyeAfRz3dUfAbUQaAQN%2Fn1QUewO8SoK1%2BZrjqhl3pYC5qsLBc52LrWScYUj8vvY%2Fd68MYvQG1IN5EUfhvfuOCN%2BooJ9FeA35%2BhlLh58%2B%2Bf2Rr8r9ocN4HgYYF%2FNPn3ND8IReKYKodqe8eEZ9VaOOmli6y%2FJw64LZayMBKbkmkC4Rnq3U1CDNu25itB%2FdI8sZRxb8l5x3ICVt6YdjnOfMHVsyML6qisoGOqUBM7DNcq0KvkOrlsJdNFdYH%2BaGKvdIcJ0ZLhETRMQx9HWT1Nooa%2BceGNRwlE9%2F7xVZpuoWInUCgUaz1nsthSDDU4wxqjD868zt9J7crAxQ2na4pAPWlqwX6y9wCbdf6BkFIwKNSbZEzhnk2nRr0yB7C5XQyyt8ayWv1xSGTcdsv8wMQ43IVFzj8uc%2F%2FPnW354vEQT3EWI6ZLP000Dpcao9i4agctlR&X-Amz-Signature=b64faafd657f449b48f8740a5a488caf295ace1a60a97f41479b43f905167c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLKX3NR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLUICV1pC3k%2BQnHR984iNAOmUhz7M7XQMKnHQqOZ%2F2tAIgBuR6IkGYat0YIBHzwqJuSKg0z6MECB9YD0LXLsqejHsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKERnLSr0hdctPKyiyrcA6hiXFaEI7AFzco%2BDowH6fQo5TB6RjZ0O%2BINIegMI0MQvrpUelRAMhAhkOIKptrI3Cx1GmQTk1N%2Bs%2BG%2FKiNtM4sPk7JDLOkZMFP4dNEcTFvLumO6Myiced2L%2BotlUROePwQTRhc7MACejmEs%2FacuPTbhXG2gHYaiW%2FobH%2B%2FhHnFHkUbr%2BolQDsWCKEcYul47PYz7MX3Sh40M9NjN5GmV9ul3WhiFtw4x9O0WL%2FihNrWcCExw94RXztjIDVtvc3mqdcAx9LAQ1M7noP4VYA6OXoBR6mnMgPLzpo24k18D%2BRWFG9%2F%2Bb8WbJdbf8q61V10RU%2BkZtymDRVgETfCj7d2wV4dNz5oluulAf4upF7JOmq%2BiiTc%2FV%2Bxyi9soW%2FBvBJJVIIHwI94DYKvsXVg%2BHJSLsW7QyFodbkMAo8E0NyeAfRz3dUfAbUQaAQN%2Fn1QUewO8SoK1%2BZrjqhl3pYC5qsLBc52LrWScYUj8vvY%2Fd68MYvQG1IN5EUfhvfuOCN%2BooJ9FeA35%2BhlLh58%2B%2Bf2Rr8r9ocN4HgYYF%2FNPn3ND8IReKYKodqe8eEZ9VaOOmli6y%2FJw64LZayMBKbkmkC4Rnq3U1CDNu25itB%2FdI8sZRxb8l5x3ICVt6YdjnOfMHVsyML6qisoGOqUBM7DNcq0KvkOrlsJdNFdYH%2BaGKvdIcJ0ZLhETRMQx9HWT1Nooa%2BceGNRwlE9%2F7xVZpuoWInUCgUaz1nsthSDDU4wxqjD868zt9J7crAxQ2na4pAPWlqwX6y9wCbdf6BkFIwKNSbZEzhnk2nRr0yB7C5XQyyt8ayWv1xSGTcdsv8wMQ43IVFzj8uc%2F%2FPnW354vEQT3EWI6ZLP000Dpcao9i4agctlR&X-Amz-Signature=7d7796f1547409725cda4059573706ec083420b891ef7e155301b08985543ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

