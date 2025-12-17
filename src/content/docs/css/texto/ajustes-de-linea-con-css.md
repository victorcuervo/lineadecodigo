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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDOSRB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEngPoA%2FuVymOA1vo0a9D9E6nm9X131NBMBH7FJDtPmUAiAxJc%2B1oCnFBZTez8wiBmjdUHtQb%2FiBuxh%2BwEWDGVqRUSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BkuhUHeBJSqArXZKtwDP9FEJsz6YGphmxVgwNDWHrdOo9x0DByWO8UivBZvthzC%2FZy7a8broFPTs8fEQl1AO%2FnSCw0lIAXSXv3qAm2Sx6EIQ9rVX9EmRfWo7V4LriLoTES4NbOoiDtYJ1Na7H19dvHBrbtCH%2FQRfKTKQ62CGzkXxkXxy%2FjsVk7U24YqIVMCj%2F8ZBov7rzcNuLymxUVPGCSGviyWdiPT3HmV0X9Yc82tgZghZeL60AogmR1RWk1MDgjOY3kY31SEjKncgMHGBZ7ZEkaaV0EdisqyzWwDh3tHMDH0qaS0POBdvNTMHTJyXE9JaRMpZRDIVzVdyDFgmjWKqyZ%2BZhlvioTMcXsm4iK1szY1XQ7TBOEZZmzg%2BO5mttd71Zddu%2FD5O68U9OE6iLw1xYrNgviv7SuTR%2FsJG3Lxnp89g0UPr3YyBYTCucv25RuWNHy6WULPczjKrq%2FMfayRMgtuLwHWqW6XnTr%2Bo4Fqj4Qt%2BZ44NZHOs%2BTCeKjqBN4V0%2FELxEM0uetZvy2QJFT1T8UUwcvvj0CrPUfAu7DL%2F8YUlPOcky0bwKFXbEx0HvkoRZj9xXEZzNTS8zDeZ%2BZrEzgZkFLTdw6jnXYs1JWZwqcDENXzlKaGXW6h4149tCcJvfoEkOnchCUwl%2BOKygY6pgHCjOh453ekIi9kavVLF18qGyTkJ%2FkJ46qlLeEDaLo9jmcQuD8UjTj7Pko1%2BAzmP%2FZQV7eo3b1BxcfTxWt7XUMcR8UE0UuLDve40s4aIM91kkMTNkwgq9QGxAcznB8DJo0%2FHMAxJJmjTg83to3yRnbj1LiiHxgv3GxFde52TcOkCuORpvYjvN%2BoAs%2BkntX79Pm9H4zN0ciu7PfqSOxceHjztLMjDm%2Fb&X-Amz-Signature=6b5e65eca29da90cd1fe67866f6e547ff796213030913a18afa8987d0c95efed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GDOSRB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEngPoA%2FuVymOA1vo0a9D9E6nm9X131NBMBH7FJDtPmUAiAxJc%2B1oCnFBZTez8wiBmjdUHtQb%2FiBuxh%2BwEWDGVqRUSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B%2BkuhUHeBJSqArXZKtwDP9FEJsz6YGphmxVgwNDWHrdOo9x0DByWO8UivBZvthzC%2FZy7a8broFPTs8fEQl1AO%2FnSCw0lIAXSXv3qAm2Sx6EIQ9rVX9EmRfWo7V4LriLoTES4NbOoiDtYJ1Na7H19dvHBrbtCH%2FQRfKTKQ62CGzkXxkXxy%2FjsVk7U24YqIVMCj%2F8ZBov7rzcNuLymxUVPGCSGviyWdiPT3HmV0X9Yc82tgZghZeL60AogmR1RWk1MDgjOY3kY31SEjKncgMHGBZ7ZEkaaV0EdisqyzWwDh3tHMDH0qaS0POBdvNTMHTJyXE9JaRMpZRDIVzVdyDFgmjWKqyZ%2BZhlvioTMcXsm4iK1szY1XQ7TBOEZZmzg%2BO5mttd71Zddu%2FD5O68U9OE6iLw1xYrNgviv7SuTR%2FsJG3Lxnp89g0UPr3YyBYTCucv25RuWNHy6WULPczjKrq%2FMfayRMgtuLwHWqW6XnTr%2Bo4Fqj4Qt%2BZ44NZHOs%2BTCeKjqBN4V0%2FELxEM0uetZvy2QJFT1T8UUwcvvj0CrPUfAu7DL%2F8YUlPOcky0bwKFXbEx0HvkoRZj9xXEZzNTS8zDeZ%2BZrEzgZkFLTdw6jnXYs1JWZwqcDENXzlKaGXW6h4149tCcJvfoEkOnchCUwl%2BOKygY6pgHCjOh453ekIi9kavVLF18qGyTkJ%2FkJ46qlLeEDaLo9jmcQuD8UjTj7Pko1%2BAzmP%2FZQV7eo3b1BxcfTxWt7XUMcR8UE0UuLDve40s4aIM91kkMTNkwgq9QGxAcznB8DJo0%2FHMAxJJmjTg83to3yRnbj1LiiHxgv3GxFde52TcOkCuORpvYjvN%2BoAs%2BkntX79Pm9H4zN0ciu7PfqSOxceHjztLMjDm%2Fb&X-Amz-Signature=4739ef99576c0edc05be71837b117330d539d8fb0f77a7f8040be4199296b33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

