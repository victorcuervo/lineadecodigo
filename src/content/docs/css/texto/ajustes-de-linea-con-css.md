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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66KBUEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZR4hQi68ilH7B56RodaJ1cHqZGx8YCE%2BnwsXhXk5viAiBoZbmEchP%2F7x30l0NmI2R%2BTyF8J6bE7ZuD9UTXAnlvPSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM9MuEYZ%2FIDnvQ%2FHkQKtwD2kiAHAWq%2BTTZbGbI1sRJ3Gvu0jBevEucWsWeobJ7Cu7DmRBbhnvm15d6xwOuQd0cn8bwXfZwmS8PTMpv3kqCnNitDOBghMJuEAs8FfHWsf2haKz%2BMccaHrRvcHB9NAJo1Nr9a7sIF0Xlk4LAHzRA0YbIaEA9K%2F2l5n2RmMoekWQG77vDFWytewwYN97f%2FSaV0PYDakdI%2BWwme5rqJqhTzxCBqhetyfbex1MiHzN97ai7n71g2m5F447bo5xeL6MfFB6yO%2FPBqC61xDoalgXaCKXz8KsvCJgZJoIeiYoa8JCCCKTkqKnh9VtOvEu8wqycWhls3bcgxjXR1ynvpzRjkkqdCPoCygjRPxICmyh6Obei0H80pOd%2Bqiruhcwo6kOZvvnOi5aomBevIA936puz0808XUDe3S4BpN92LjBYFdB62b3TxqBVKtmDgApUaTEzB7UBekvMf85A25rrY18IiyAaEn32Qn71r%2BgbheddI%2FngmvAt26YxWJP4%2FAEx0PeBS1gOmCAZo0WXS9vYJWvmEEfFi3NMFgFBEx6aJDUpZMR4iunRgDzvykhpXPdpbww9spOopX2G%2B790Uhwx3eRGKoZu%2BMP3BEu11yKhGcJA0gILjB9K7%2BR8RuDLM04wjdKJygY6pgENmdb4ozZKMRQEDBAlWXGEBKQYGn4rY58tlJ7dURjUwEFwtyMse%2FcQrVvLEnxtL4sSARUm1LDWhu8cZAPB6QCDRnbPZmTLQFChTMiV8U1SLNC2F5QbA%2FOu7Ua0VwLwEAWJmpI1gZUs4zX%2BxpxrmEJJHG1IoE03yilnLNRMdUB%2F63by5SoA2J5ixHEu7oWjcG4TXHzx0s60gbdTRXwIHEanmuTIb3H8&X-Amz-Signature=4d0c34455ae152bf20ef64bf42fefcafead42d3f70da217e2ee5f0dc477df781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66KBUEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZR4hQi68ilH7B56RodaJ1cHqZGx8YCE%2BnwsXhXk5viAiBoZbmEchP%2F7x30l0NmI2R%2BTyF8J6bE7ZuD9UTXAnlvPSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM9MuEYZ%2FIDnvQ%2FHkQKtwD2kiAHAWq%2BTTZbGbI1sRJ3Gvu0jBevEucWsWeobJ7Cu7DmRBbhnvm15d6xwOuQd0cn8bwXfZwmS8PTMpv3kqCnNitDOBghMJuEAs8FfHWsf2haKz%2BMccaHrRvcHB9NAJo1Nr9a7sIF0Xlk4LAHzRA0YbIaEA9K%2F2l5n2RmMoekWQG77vDFWytewwYN97f%2FSaV0PYDakdI%2BWwme5rqJqhTzxCBqhetyfbex1MiHzN97ai7n71g2m5F447bo5xeL6MfFB6yO%2FPBqC61xDoalgXaCKXz8KsvCJgZJoIeiYoa8JCCCKTkqKnh9VtOvEu8wqycWhls3bcgxjXR1ynvpzRjkkqdCPoCygjRPxICmyh6Obei0H80pOd%2Bqiruhcwo6kOZvvnOi5aomBevIA936puz0808XUDe3S4BpN92LjBYFdB62b3TxqBVKtmDgApUaTEzB7UBekvMf85A25rrY18IiyAaEn32Qn71r%2BgbheddI%2FngmvAt26YxWJP4%2FAEx0PeBS1gOmCAZo0WXS9vYJWvmEEfFi3NMFgFBEx6aJDUpZMR4iunRgDzvykhpXPdpbww9spOopX2G%2B790Uhwx3eRGKoZu%2BMP3BEu11yKhGcJA0gILjB9K7%2BR8RuDLM04wjdKJygY6pgENmdb4ozZKMRQEDBAlWXGEBKQYGn4rY58tlJ7dURjUwEFwtyMse%2FcQrVvLEnxtL4sSARUm1LDWhu8cZAPB6QCDRnbPZmTLQFChTMiV8U1SLNC2F5QbA%2FOu7Ua0VwLwEAWJmpI1gZUs4zX%2BxpxrmEJJHG1IoE03yilnLNRMdUB%2F63by5SoA2J5ixHEu7oWjcG4TXHzx0s60gbdTRXwIHEanmuTIb3H8&X-Amz-Signature=4f87d804589b090e47d63cfa0a105e7e0b4462d23fe06cb723344d37fbdef7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

