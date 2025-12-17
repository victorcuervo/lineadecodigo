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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNUPXVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqlSn%2F1BxweyifSosjkCbig5fgG4ktFA%2Btb3KCB%2BxVwIhAOCEcxmlyLDg0uSzjPjkVeNycUxHpH7IgG1iIGl2qRabKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTS3h4FxFz7Xkp%2F8q3AMCU6FoE%2BtXrkDUYqNgIUGILKBAJjVPSf%2BorXc60hYYtqu%2FvPRip1tqjf0HKONo8pyvU53D%2BfJWcvROiV7iQE6vDpyfKIDqYLw6R30MU%2Bex1t1d2b3uLCTNw8KECAc4nIY0yDgqVplJUWGLUMKyctiwKn7is%2Bya7wnO9%2Fs7pFHWD4gXeUZEFP3QltvMQy0lPrAso4NyI%2FqRX4ovhXomKAMpXCGybdvfRIiFaQXHJz71har0tr%2FASCOP6eauebcK9Oa1l7MmdPQSL6gAHyMe5y1Vex72VCitN2KVEw0luwyOYCCfdNDXTXKwPk7HEQkmrIFfEfX6IV118SiR1oQP6wKCI0XgiaRwz19wS8WIrzv4zWxfanpNc%2BtPJBAhz%2By1IbstQkj3uA9UYmHUKRexno8tRULOjYAFCsFPOQLK8AJ8NFGDn357GajBjY3cL15Hc62fuGJ60jOvqKVhGJ9vnEYFmn6ANHzsCfLqwqc0yBh8LwN7WpG6EYMSKCI29241W%2BsFwxxmkna6q2MRGFsaFbb6bQLFmwQrXhoXmr48j1OiLZI1rpWz8uRFgOQZQi7N8jOdqN43ffck3vIdkiMqjAq7PM5vs06ucoXrIATTcvegwrcXobldrVLsnEEgjDDbgYvKBjqkAf3noHlL4FFLp%2B7bw%2B1MS4a8ju92ePzW23m1iInNPfjj7Q9yH4qmRqi2raLXF%2FnnZkyvN3eNnvGie2I%2FKgVrwoB%2BqOXOy1zb1kfVl%2Bu3N88Qun3gg8ZzpiR%2BI%2FVDTuueODcQWNl%2FogHd4PQ%2Bqab3qNdP846TOaqcGeBmLky70u%2FrAKYcLo2i%2FW18Nirvajz6fsd%2FXjd0im2mbq5yU1QODnpj295U&X-Amz-Signature=a25014fffe6678d45bdc6a999c5aa3fd377d0b3f8f5f9c6788ede6f5915f97d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNUPXVA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJqlSn%2F1BxweyifSosjkCbig5fgG4ktFA%2Btb3KCB%2BxVwIhAOCEcxmlyLDg0uSzjPjkVeNycUxHpH7IgG1iIGl2qRabKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTS3h4FxFz7Xkp%2F8q3AMCU6FoE%2BtXrkDUYqNgIUGILKBAJjVPSf%2BorXc60hYYtqu%2FvPRip1tqjf0HKONo8pyvU53D%2BfJWcvROiV7iQE6vDpyfKIDqYLw6R30MU%2Bex1t1d2b3uLCTNw8KECAc4nIY0yDgqVplJUWGLUMKyctiwKn7is%2Bya7wnO9%2Fs7pFHWD4gXeUZEFP3QltvMQy0lPrAso4NyI%2FqRX4ovhXomKAMpXCGybdvfRIiFaQXHJz71har0tr%2FASCOP6eauebcK9Oa1l7MmdPQSL6gAHyMe5y1Vex72VCitN2KVEw0luwyOYCCfdNDXTXKwPk7HEQkmrIFfEfX6IV118SiR1oQP6wKCI0XgiaRwz19wS8WIrzv4zWxfanpNc%2BtPJBAhz%2By1IbstQkj3uA9UYmHUKRexno8tRULOjYAFCsFPOQLK8AJ8NFGDn357GajBjY3cL15Hc62fuGJ60jOvqKVhGJ9vnEYFmn6ANHzsCfLqwqc0yBh8LwN7WpG6EYMSKCI29241W%2BsFwxxmkna6q2MRGFsaFbb6bQLFmwQrXhoXmr48j1OiLZI1rpWz8uRFgOQZQi7N8jOdqN43ffck3vIdkiMqjAq7PM5vs06ucoXrIATTcvegwrcXobldrVLsnEEgjDDbgYvKBjqkAf3noHlL4FFLp%2B7bw%2B1MS4a8ju92ePzW23m1iInNPfjj7Q9yH4qmRqi2raLXF%2FnnZkyvN3eNnvGie2I%2FKgVrwoB%2BqOXOy1zb1kfVl%2Bu3N88Qun3gg8ZzpiR%2BI%2FVDTuueODcQWNl%2FogHd4PQ%2Bqab3qNdP846TOaqcGeBmLky70u%2FrAKYcLo2i%2FW18Nirvajz6fsd%2FXjd0im2mbq5yU1QODnpj295U&X-Amz-Signature=fc4c457981f990b33d609e10f71bfd379810bc260a25652ca4137b47c580c09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

