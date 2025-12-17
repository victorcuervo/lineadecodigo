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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXW5TFD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3LcNN%2Fag%2FrmTH1ecZCBkAmntN47NibMJ4URwowz3umAiEAzwTSHtF9%2FbhGehiG6ggAOOhDdMA8enm71VDw19Z8Qtwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHaWphe8AyG2uft%2F5ircA707d2gifxmoPcpodLzSNR0te%2F3%2FFVmChD5Vxct39A6os%2F6FwgxhrWqb%2FdqU9OotLP0tqn4JdGIyEFXZcZrRWX%2BZ6%2B5lT2c7TUX0uyYVVD%2BHi1skYM2nmTx8u6S0NyYOiNmB1xaGGSYVxkQk%2F4ZnmDiS014%2FK2feIGjMUqGzH%2BFXEG5wTSd8YTqv5UDFHETaaEfon05WhnDkOUaN18Z6P8td%2BZ4NIEzMFu6CLL3iC43coqbLp2pU%2FBC11U%2Bu8HEG%2Budlr0mriuC3acY7z3HFco2Avdj19teaLOSHyullh%2BwcDfJ8KJIExjoE7CL3%2BGZlxHqcL2mUms5z77un%2B9toYs%2FhBC%2F4aqicZlfddZRlDW0SdRkxJp6x8M3NYr0nlHx8aossK0hb%2FIbhSqyTUUsCjSclWqYhJyhLd8yg2Kd2RXSW6yGMV5ic9HqEf6y9E8%2BtMwodLa6xppSYQ5quOC0PqffYXXiHWtTGPqWWHlAK93aRBbylIqNvIcwqyHYzbXaCZqR4Pxp%2BeDe6lbO%2FMzUWc4xyfky%2FbJRS%2FNSGwjAHiJxmiOxt03tAZRzFYykH%2Fv0oXqX67BZn0xO4Qok7a3rAdy%2F7MSmmoJmn%2BaZMv5h9tDbgAZlFy730f11AUSCjMKDjisoGOqUBcDzAJ9uN8bstn5h1bZih7HhDltcpn8rAVe86%2Fyx7etEHU3FzAgL1hNSMH66BhpgxWH%2Fmf8w9LnZPh103WIGTXmQUA1LGQMSZIV4F5mIeANlrSvO8fk6Y0SK60fSLvyxPacecMAsbbIYI944sIlKEXsMejrHJnPkRUc1FKMYvrW2QJvn24y5YTxEaHY5BQTEO%2BJvYHde7wEpNpre7aIO8NqMQbFP0&X-Amz-Signature=dc8be07ab771b8d1ac4bdd2f846bad20e4354ab13d54a887d2be88dcde55b149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXW5TFD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3LcNN%2Fag%2FrmTH1ecZCBkAmntN47NibMJ4URwowz3umAiEAzwTSHtF9%2FbhGehiG6ggAOOhDdMA8enm71VDw19Z8Qtwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHaWphe8AyG2uft%2F5ircA707d2gifxmoPcpodLzSNR0te%2F3%2FFVmChD5Vxct39A6os%2F6FwgxhrWqb%2FdqU9OotLP0tqn4JdGIyEFXZcZrRWX%2BZ6%2B5lT2c7TUX0uyYVVD%2BHi1skYM2nmTx8u6S0NyYOiNmB1xaGGSYVxkQk%2F4ZnmDiS014%2FK2feIGjMUqGzH%2BFXEG5wTSd8YTqv5UDFHETaaEfon05WhnDkOUaN18Z6P8td%2BZ4NIEzMFu6CLL3iC43coqbLp2pU%2FBC11U%2Bu8HEG%2Budlr0mriuC3acY7z3HFco2Avdj19teaLOSHyullh%2BwcDfJ8KJIExjoE7CL3%2BGZlxHqcL2mUms5z77un%2B9toYs%2FhBC%2F4aqicZlfddZRlDW0SdRkxJp6x8M3NYr0nlHx8aossK0hb%2FIbhSqyTUUsCjSclWqYhJyhLd8yg2Kd2RXSW6yGMV5ic9HqEf6y9E8%2BtMwodLa6xppSYQ5quOC0PqffYXXiHWtTGPqWWHlAK93aRBbylIqNvIcwqyHYzbXaCZqR4Pxp%2BeDe6lbO%2FMzUWc4xyfky%2FbJRS%2FNSGwjAHiJxmiOxt03tAZRzFYykH%2Fv0oXqX67BZn0xO4Qok7a3rAdy%2F7MSmmoJmn%2BaZMv5h9tDbgAZlFy730f11AUSCjMKDjisoGOqUBcDzAJ9uN8bstn5h1bZih7HhDltcpn8rAVe86%2Fyx7etEHU3FzAgL1hNSMH66BhpgxWH%2Fmf8w9LnZPh103WIGTXmQUA1LGQMSZIV4F5mIeANlrSvO8fk6Y0SK60fSLvyxPacecMAsbbIYI944sIlKEXsMejrHJnPkRUc1FKMYvrW2QJvn24y5YTxEaHY5BQTEO%2BJvYHde7wEpNpre7aIO8NqMQbFP0&X-Amz-Signature=ea410fa5583f12fda11b739e0eda9b70cd04f55da11fe0af04d9f47f56175673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

