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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE56YKMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBerag92QtRQ3TmsCu17LdjvLIXO%2B%2BrZb9RBQLHdUyeHAiA05mbhis0cwITjGGeDbiBV63IUwqwo7nwnKDAtVkj%2BqiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0euzuzxRASDWiiyKtwD3uO5ZQ%2FuiVpuXR3Q%2FwUYE4KnjXA3%2BAcU80KyEAcOAHBzndAfJ5tM%2B9xCH%2BCFm19R3mt92yBYKCYFZhslsd41AdWIL39eLx8jrPEp30prlDveNYCWFYkbr241lwY7VmOn2RsKq8I6Og0%2FRu6BijAvfut14EAXJORNDJTplmx8EPGX0x01iQfTnGQM%2BcK6LrlzeB4gr%2FhyiIcwp71Xq0noHv%2FHBLLd7ZR6YPJRBogcOkU3UUj827kL%2FXafzZgqiJe3m%2Feu8qw28dfD6aC5%2F%2FqpMkKzhMgeCRuSeHCwhFgNtUEx7SnyJPo0iSVRXQsFvn1rGYS4VIn3YPFdniwUsasXBESCzJ0wC9I9020JrJKxSisuHoK%2Fg06i%2BVIrGAYfeRGYZyqQQnCTVm%2BO2q1zKgykqEC9LX82YXFI192u%2BaEyVo4fJP53%2BYOJuPZx3WL6JySIxy5nfiwVJdwkYP1HypQZhI792sTj4OdFTS%2BFK3wDV7PcinHmQgw5ZmqLN1G9gSLagCK4pggbBWwDDwV7qWMNlt3MXR0%2FXwnh7eubi7l9mijQWRCtpemYon3K1YXqXNxRFnMCN9vcsyYIB948ClZc4xx67C12S2yyaGjsgIEUemmQ9lhnzDW4uthxDGswup6LygY6pgECg5DDeFehTj55wEbBwFvVmmd%2BCLAMW6i2YaMcxXuuYAfxRdhEpK0PMcOqTWcmzYBUaX51uoNvAaI8Un5%2BxnAGJnKb88X%2FQKjvNkuqszGgfSwWedibdXUQzniBrCoVUmUU8GbtlD%2FH6MoJoQjZgXaWFyQSWSWpuo5lBUGvTX%2FDoADGT2rsWPikCTJ4Fqouo4iA4nWeVBr9kWtcZwofE3kvvgRoDnAe&X-Amz-Signature=0aa910be5a8580e1af9468ead99735d019ce1f31f35aa44fdfa2fe8045e32f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE56YKMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBerag92QtRQ3TmsCu17LdjvLIXO%2B%2BrZb9RBQLHdUyeHAiA05mbhis0cwITjGGeDbiBV63IUwqwo7nwnKDAtVkj%2BqiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0euzuzxRASDWiiyKtwD3uO5ZQ%2FuiVpuXR3Q%2FwUYE4KnjXA3%2BAcU80KyEAcOAHBzndAfJ5tM%2B9xCH%2BCFm19R3mt92yBYKCYFZhslsd41AdWIL39eLx8jrPEp30prlDveNYCWFYkbr241lwY7VmOn2RsKq8I6Og0%2FRu6BijAvfut14EAXJORNDJTplmx8EPGX0x01iQfTnGQM%2BcK6LrlzeB4gr%2FhyiIcwp71Xq0noHv%2FHBLLd7ZR6YPJRBogcOkU3UUj827kL%2FXafzZgqiJe3m%2Feu8qw28dfD6aC5%2F%2FqpMkKzhMgeCRuSeHCwhFgNtUEx7SnyJPo0iSVRXQsFvn1rGYS4VIn3YPFdniwUsasXBESCzJ0wC9I9020JrJKxSisuHoK%2Fg06i%2BVIrGAYfeRGYZyqQQnCTVm%2BO2q1zKgykqEC9LX82YXFI192u%2BaEyVo4fJP53%2BYOJuPZx3WL6JySIxy5nfiwVJdwkYP1HypQZhI792sTj4OdFTS%2BFK3wDV7PcinHmQgw5ZmqLN1G9gSLagCK4pggbBWwDDwV7qWMNlt3MXR0%2FXwnh7eubi7l9mijQWRCtpemYon3K1YXqXNxRFnMCN9vcsyYIB948ClZc4xx67C12S2yyaGjsgIEUemmQ9lhnzDW4uthxDGswup6LygY6pgECg5DDeFehTj55wEbBwFvVmmd%2BCLAMW6i2YaMcxXuuYAfxRdhEpK0PMcOqTWcmzYBUaX51uoNvAaI8Un5%2BxnAGJnKb88X%2FQKjvNkuqszGgfSwWedibdXUQzniBrCoVUmUU8GbtlD%2FH6MoJoQjZgXaWFyQSWSWpuo5lBUGvTX%2FDoADGT2rsWPikCTJ4Fqouo4iA4nWeVBr9kWtcZwofE3kvvgRoDnAe&X-Amz-Signature=f6218e4bd2a6f331509befca593d13fe4a92148dd41119dab43207f90f043084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

