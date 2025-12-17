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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USPZFNMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHGu5IE%2F8kvitDdw1XFay9xENtsagtQTYvUeSGC68ocQIhAIut69IdwkVXrXBgazH1%2BJFDIEi68Iw8qSxfgrtBSjSQKv8DCHcQABoMNjM3NDIzMTgzODA1IgyvWjmIqcbjW63A4%2Bsq3AO1N0bDdUjSqwa7slNm94Hv9XRK8rZs8L18B3M3BEr4%2FDAyZzEFkt5iVTexpG%2Fk%2BvjMnr3c9hQvd2uCAtJzGrE7QXVbaGJLRpWuPOxAngTBKo6BlXPAuZFny5b0P1ccVL%2FZUeVDbkAcDmYdQ9VSM1cMFISkHfSUtn53tJDAJHo%2FAArY0SHhmYsTIDIAcTTMzmimBo0o60zTYUdZNuM4CX8zFILn4Cjprj%2FtSOZRtYvNJp4zna2G5cGgeipczo4Dlz3Qrbkrn83h8lq5A1KFUk%2FheUenCXcdZSI%2BhHrItCmAovMITudj5oTL32Ed45ORz54%2F6lyaaPlocSBTSVHDduh3gtnq%2Fp5aXf8FLSQT%2BE196s0oITb2oGF5ogdf5nEi0x1x4JODVLaNmDUBkn64RkL1wAIXxk%2FiLY4xXpAjfdC3B0JtyJY8ZKNhALRezk73Swj9JxeVYZfMWQIQJL1G8%2FCPgOSrGDh8RJg0JDHrWAo3BRTgcmrDK7U2io7v3tBBFGMLsugt7xDZyvPJkfEISBcwS8oMJSLBhjnF6CQ2iaC3x3fgTqsP8%2BVZCioCgfJmZKmzFk7SeaFBRWzSa4%2F5pns814lbjJmIBbqhDWQmklKVpq3tvu%2F97aqZo3uH6jDKgonKBjqkAR9RfM4k%2FA5klVcUWTNztMQCZBUaBT8CyHh%2FVfeQdM3vys4BO%2FEr5r5%2FJgOeXaB484JCRFiYSuUGVM4BDW5ltL%2BdQO%2BlWAoibTlmAU%2F07yKtjX%2FOoNBZMj4j39Ryupz%2BjFn8gjnbOoUnwzZSitvTjqP6C6Muc3o5YwIYu9x9h8pBEarxpJ8U7i9uy2xI9%2BbXzq1pyZWcmzSBoI16XUFzql1q6IyV&X-Amz-Signature=1fec5ae4ac8bc7e48c3dc2bd1d63e0927d78f9f46ec790c551ffbc3789b858a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USPZFNMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHGu5IE%2F8kvitDdw1XFay9xENtsagtQTYvUeSGC68ocQIhAIut69IdwkVXrXBgazH1%2BJFDIEi68Iw8qSxfgrtBSjSQKv8DCHcQABoMNjM3NDIzMTgzODA1IgyvWjmIqcbjW63A4%2Bsq3AO1N0bDdUjSqwa7slNm94Hv9XRK8rZs8L18B3M3BEr4%2FDAyZzEFkt5iVTexpG%2Fk%2BvjMnr3c9hQvd2uCAtJzGrE7QXVbaGJLRpWuPOxAngTBKo6BlXPAuZFny5b0P1ccVL%2FZUeVDbkAcDmYdQ9VSM1cMFISkHfSUtn53tJDAJHo%2FAArY0SHhmYsTIDIAcTTMzmimBo0o60zTYUdZNuM4CX8zFILn4Cjprj%2FtSOZRtYvNJp4zna2G5cGgeipczo4Dlz3Qrbkrn83h8lq5A1KFUk%2FheUenCXcdZSI%2BhHrItCmAovMITudj5oTL32Ed45ORz54%2F6lyaaPlocSBTSVHDduh3gtnq%2Fp5aXf8FLSQT%2BE196s0oITb2oGF5ogdf5nEi0x1x4JODVLaNmDUBkn64RkL1wAIXxk%2FiLY4xXpAjfdC3B0JtyJY8ZKNhALRezk73Swj9JxeVYZfMWQIQJL1G8%2FCPgOSrGDh8RJg0JDHrWAo3BRTgcmrDK7U2io7v3tBBFGMLsugt7xDZyvPJkfEISBcwS8oMJSLBhjnF6CQ2iaC3x3fgTqsP8%2BVZCioCgfJmZKmzFk7SeaFBRWzSa4%2F5pns814lbjJmIBbqhDWQmklKVpq3tvu%2F97aqZo3uH6jDKgonKBjqkAR9RfM4k%2FA5klVcUWTNztMQCZBUaBT8CyHh%2FVfeQdM3vys4BO%2FEr5r5%2FJgOeXaB484JCRFiYSuUGVM4BDW5ltL%2BdQO%2BlWAoibTlmAU%2F07yKtjX%2FOoNBZMj4j39Ryupz%2BjFn8gjnbOoUnwzZSitvTjqP6C6Muc3o5YwIYu9x9h8pBEarxpJ8U7i9uy2xI9%2BbXzq1pyZWcmzSBoI16XUFzql1q6IyV&X-Amz-Signature=4e0f65e576217f3b906a5796cec03353b962a47e436cffa6929121992ede7ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

