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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVVIYZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYTvlGsDW3tHNbHK2vmEGGsgwnctS4r2h85AnilPrd%2FAiEAmhNOr5Di%2FPZy2bPEEKJW9vaPtvgavY6it5ozx0nLL54q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJYcQ1l1SGDIj29ARSrcA4PF1bgtzRKvC5KZ8QXKGstQatx0N7E6X1Qow3kaYwJwNY4VnprOTNigNT0R9eTUBC15JXu%2FKR4MrGSL86Gs4yh%2FOo%2Bb2VDFD%2F%2BRvyYwaOtu2FIGDU6XpQLxqgMPlT3AvNGGI8YcpSIj3ggTXytlBaXIGpiV%2BzNwzcklm4jBtfMq4zBxk1Aw7msAUhhDdsYn8kPKDdBuyo6UHufMIbPiTJ3Vn%2Bb%2F4bpzyYApou38kJ4s1pU7Fmi7KJ34Cq%2BjAI2tWAh8P2oAU0zw47dPBvs%2B%2FVeuCdvR5ue3WGxtQwjc9ZU5qE4MrilGmeU4tWAO3nAV2QhIXB60xYS5Yg96eE5lpaEyOaKwNUosqCjJCV1b5od8fygy3VYPKpDaqMH%2FUZz2gJPsAB%2BhImmdTzF5sfwWptBnhlKFs3nGRIFjr5sV5BF%2B2WbZAd1AKg%2BXz1DrulwovrXvaJzBU%2BJcd7t2o3JMgKfGc961%2BIAwgHnQ8B5UvRbShG6%2FX0oxN3pnMn%2BoX%2BWmuamg5nqLRYD1lfaTr16CE7gbYQ4ITBNe2zs%2BQgKN05Y%2BfAf9YyJxyvnxiDVqm4%2FTTnv0vVQaPPMpbuxSuyXnQvUaFS6SbTMUn7VBY%2Bjnf7ngtdbMti9ioyWGJS6XMITOiMoGOqUBHiu9Gq%2FlfUAQp2vMq594jJz%2Fh93MOreF2RsKuxU4XCPeFHkLfbtVbn4CRi5Upd7rkfBDjGSWeQt2dKaimnqPglo33QOV6P%2B%2BWxF%2B1Mb0QQ8xTiFdcXGQ1hyrJXpMkr%2BlPYSOKMksMyu1mByAtzKkINOv7BEp8iMqj8rxTmw%2FZJfUj7daub6WOprQP5l25mZEi9WhCrk4OiDAHmMD4ehWHW4TB%2BMC&X-Amz-Signature=531079ad1badcf1719b7d3484aca4965be819918ceb53c673444762718bbfdcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VVVIYZE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYTvlGsDW3tHNbHK2vmEGGsgwnctS4r2h85AnilPrd%2FAiEAmhNOr5Di%2FPZy2bPEEKJW9vaPtvgavY6it5ozx0nLL54q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJYcQ1l1SGDIj29ARSrcA4PF1bgtzRKvC5KZ8QXKGstQatx0N7E6X1Qow3kaYwJwNY4VnprOTNigNT0R9eTUBC15JXu%2FKR4MrGSL86Gs4yh%2FOo%2Bb2VDFD%2F%2BRvyYwaOtu2FIGDU6XpQLxqgMPlT3AvNGGI8YcpSIj3ggTXytlBaXIGpiV%2BzNwzcklm4jBtfMq4zBxk1Aw7msAUhhDdsYn8kPKDdBuyo6UHufMIbPiTJ3Vn%2Bb%2F4bpzyYApou38kJ4s1pU7Fmi7KJ34Cq%2BjAI2tWAh8P2oAU0zw47dPBvs%2B%2FVeuCdvR5ue3WGxtQwjc9ZU5qE4MrilGmeU4tWAO3nAV2QhIXB60xYS5Yg96eE5lpaEyOaKwNUosqCjJCV1b5od8fygy3VYPKpDaqMH%2FUZz2gJPsAB%2BhImmdTzF5sfwWptBnhlKFs3nGRIFjr5sV5BF%2B2WbZAd1AKg%2BXz1DrulwovrXvaJzBU%2BJcd7t2o3JMgKfGc961%2BIAwgHnQ8B5UvRbShG6%2FX0oxN3pnMn%2BoX%2BWmuamg5nqLRYD1lfaTr16CE7gbYQ4ITBNe2zs%2BQgKN05Y%2BfAf9YyJxyvnxiDVqm4%2FTTnv0vVQaPPMpbuxSuyXnQvUaFS6SbTMUn7VBY%2Bjnf7ngtdbMti9ioyWGJS6XMITOiMoGOqUBHiu9Gq%2FlfUAQp2vMq594jJz%2Fh93MOreF2RsKuxU4XCPeFHkLfbtVbn4CRi5Upd7rkfBDjGSWeQt2dKaimnqPglo33QOV6P%2B%2BWxF%2B1Mb0QQ8xTiFdcXGQ1hyrJXpMkr%2BlPYSOKMksMyu1mByAtzKkINOv7BEp8iMqj8rxTmw%2FZJfUj7daub6WOprQP5l25mZEi9WhCrk4OiDAHmMD4ehWHW4TB%2BMC&X-Amz-Signature=403b139f8bd74390fadc6cc64afe39b74ff297a7f5ae858c03c400183dc49c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

