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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCHJLKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiE%2BD%2B7LXc391i07zSMnTCuAd7xeHnvVETENlY3NCePwIhAIzIrt4p1cU75esMDnszPROxLRrL%2BFuQkjtF9EPhGJk9Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzxxGhEU0jmhwJOno8q3AN3%2Fa4yHgpS1Yher3DrFm%2BPmVcojFDre8zShAQXyuNHaeROCyULr9hD2PdYIkl77YZuwr%2FzvINWRZmUl%2B1rbMK6PTTAea%2B%2FaQFbe60XLn79p%2BMmeEd5%2BS8b8THtdYTw2tPnyr81ujBgQQ6dWPkbwFuULJETV0NcdvXfUZdR54sL7LQPe5ZVSzPmTDUSeZHV2M5PEAHDuj8KorXUIvEi2msIPeDY1pS%2BOtKTM%2FI5Nub43y08VSBBFV9MTviXYzi25owlQbAUfLwWB0V5O%2FixWYpV42t6SwHizpZM0ViAHEMK%2FdyqBK78xYyXkdfClW3vlzZhVhyDyGOT7c6Ts1sROmEahDVFp%2FOhRYSIlsJvyWaA9xHC0ZtuIzYkqEw%2FHrXeJyhcL9Y01lHLlGomZTLECPNk9Ifj24sGKnC2cZ8s%2BX8BJvZxM9geU7JI%2BoXCBrGA5GTJo6hyEvhqxWoBV5krLu5vi0U6UNzskmR05c54pfXhLi%2Bjk9zTTufJs%2B%2FVftuUPiVPaA%2BGvkVrHF8M1GbO%2BYh8lbULkXoMLdUWeSkqxXf73oqbrh2agtryQjDIRk5GdG%2B3L1pISxNKjyRiPNFKhuKtcNZAqncJgU9P39Flk7XkNiupxgQNyBtoBFS3azDBj4rKBjqkAYFDX6n%2BMyL3jT93w8a4kDFozMNU9FN4DbccswjyumqGCBAXXpUuZuKyFu0i%2F2wdcNxv6s%2BzOrQJ0LGXfwz6q96qvkNI1QF4C19uo2HKffQUJkmzAweQqEuEsQgSvmRrUJomRD14tKDSYish27BPyZjoAvzCrE0pumQfJYmuvE7bUEEH%2B%2BbbW%2BV9x2AXRBhz7m1aRJPPhfFltFKbUzfwIw1rQ2W1&X-Amz-Signature=2c999505dd90b55bbf8fd416b0a4db0ae5855304cddba880a54313e2af8eb820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCHJLKQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiE%2BD%2B7LXc391i07zSMnTCuAd7xeHnvVETENlY3NCePwIhAIzIrt4p1cU75esMDnszPROxLRrL%2BFuQkjtF9EPhGJk9Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzxxGhEU0jmhwJOno8q3AN3%2Fa4yHgpS1Yher3DrFm%2BPmVcojFDre8zShAQXyuNHaeROCyULr9hD2PdYIkl77YZuwr%2FzvINWRZmUl%2B1rbMK6PTTAea%2B%2FaQFbe60XLn79p%2BMmeEd5%2BS8b8THtdYTw2tPnyr81ujBgQQ6dWPkbwFuULJETV0NcdvXfUZdR54sL7LQPe5ZVSzPmTDUSeZHV2M5PEAHDuj8KorXUIvEi2msIPeDY1pS%2BOtKTM%2FI5Nub43y08VSBBFV9MTviXYzi25owlQbAUfLwWB0V5O%2FixWYpV42t6SwHizpZM0ViAHEMK%2FdyqBK78xYyXkdfClW3vlzZhVhyDyGOT7c6Ts1sROmEahDVFp%2FOhRYSIlsJvyWaA9xHC0ZtuIzYkqEw%2FHrXeJyhcL9Y01lHLlGomZTLECPNk9Ifj24sGKnC2cZ8s%2BX8BJvZxM9geU7JI%2BoXCBrGA5GTJo6hyEvhqxWoBV5krLu5vi0U6UNzskmR05c54pfXhLi%2Bjk9zTTufJs%2B%2FVftuUPiVPaA%2BGvkVrHF8M1GbO%2BYh8lbULkXoMLdUWeSkqxXf73oqbrh2agtryQjDIRk5GdG%2B3L1pISxNKjyRiPNFKhuKtcNZAqncJgU9P39Flk7XkNiupxgQNyBtoBFS3azDBj4rKBjqkAYFDX6n%2BMyL3jT93w8a4kDFozMNU9FN4DbccswjyumqGCBAXXpUuZuKyFu0i%2F2wdcNxv6s%2BzOrQJ0LGXfwz6q96qvkNI1QF4C19uo2HKffQUJkmzAweQqEuEsQgSvmRrUJomRD14tKDSYish27BPyZjoAvzCrE0pumQfJYmuvE7bUEEH%2B%2BbbW%2BV9x2AXRBhz7m1aRJPPhfFltFKbUzfwIw1rQ2W1&X-Amz-Signature=9b80c4a1a1ed297a13435bcb87eac9f96b8fa32a5cd55fb866f504aa621ed931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

