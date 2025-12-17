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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOCC7RS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqKEo%2BIFAu68MMfBzP%2BMvZqQu1dK6%2B863%2BrbewLivGAIhAODFapOhfTsfUubofF38loCNboKlVHSVlR1isBdEB1cQKv8DCH4QABoMNjM3NDIzMTgzODA1Igx4ri%2BXCY5zAFVRw6wq3AM6ayaM9C09XQdT%2F%2Ftkx1LFtGAaChYGwVEIrVb1rjGu6Iwq1MUWKHWtJrZAwYKE0OaIF8vaxK%2FxDmcKISHU%2FMCYkBEQWQmlPGTAxvDKb3MdpBNLaiLPUMNYD3B3QKJgnXaa570mjJ7lxwFLIkQ0zhn1mJ7wVn2%2FRu%2Bo7mgGJDaPlHmqf1hwRFGSftlYKoTFpawUzciqnX6GdbhX5hmTOnjePxnSOQQuHb5QQ1HU%2BTjIThForMikCGX3SZ6dHhNrnphyXE7r99csgjRPFHgQ5Ov5sQca8V5f8dDwKeuLv7rQnNz1y78AQzXA8NBBDf7yTWe3ZRmWjrTbBZLrp3ljwwoBrWfd1NcgTPYCASNKX6h7JC%2FqpXTOAanjAmirS7yM8GSyrwXlhWQv%2BXxtRdkXmLosm9m9wAaeFoS2XZRi%2Bir3vswKki2xbvsST%2F7q1iMjsQD6zF34lIEAjDRqoegi2OzhVB6CKagrru5G3YE3bkD%2BFbTiyH%2Bde4ml0KTaw50jVl7wznR4J%2BUGs9ENt9gQ1b%2BJDIGOnQz6Xbkg4v%2Fzv23fiqQT2iaXaC2lJndC2BdbnYzQRRHo11kGGS5EGixHgvzn9TsxzajC7IPxk%2Fnrl2O2RXsbv7Xr5EwhPi5bEjDPxorKBjqkAdLouB4f1eL0KK2tqo68DF6l6xL6H5WK73buBySKCkOXWHVftJ5wufS0Ve1jpyU%2B%2FSc%2FH4vVQq9Nnol2AZqe9ddw3SOTpUiiaoMgIXZyaT7TqWIUoKLpNaj5aAlfDMq6ShT6kCeeqYxenbUGiZQaBYtcDlPGcUVuRGPYVLl6eJYX0J8%2BLOuKxDyIdyS1h9Q5y%2FPDvpRQBOx%2BLHPdQhY%2FOqL8t9h4&X-Amz-Signature=f16ff893c70e4a00fb458847d7927f83e38e87dd1165d74bf7dc25a606220a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLOCC7RS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJqKEo%2BIFAu68MMfBzP%2BMvZqQu1dK6%2B863%2BrbewLivGAIhAODFapOhfTsfUubofF38loCNboKlVHSVlR1isBdEB1cQKv8DCH4QABoMNjM3NDIzMTgzODA1Igx4ri%2BXCY5zAFVRw6wq3AM6ayaM9C09XQdT%2F%2Ftkx1LFtGAaChYGwVEIrVb1rjGu6Iwq1MUWKHWtJrZAwYKE0OaIF8vaxK%2FxDmcKISHU%2FMCYkBEQWQmlPGTAxvDKb3MdpBNLaiLPUMNYD3B3QKJgnXaa570mjJ7lxwFLIkQ0zhn1mJ7wVn2%2FRu%2Bo7mgGJDaPlHmqf1hwRFGSftlYKoTFpawUzciqnX6GdbhX5hmTOnjePxnSOQQuHb5QQ1HU%2BTjIThForMikCGX3SZ6dHhNrnphyXE7r99csgjRPFHgQ5Ov5sQca8V5f8dDwKeuLv7rQnNz1y78AQzXA8NBBDf7yTWe3ZRmWjrTbBZLrp3ljwwoBrWfd1NcgTPYCASNKX6h7JC%2FqpXTOAanjAmirS7yM8GSyrwXlhWQv%2BXxtRdkXmLosm9m9wAaeFoS2XZRi%2Bir3vswKki2xbvsST%2F7q1iMjsQD6zF34lIEAjDRqoegi2OzhVB6CKagrru5G3YE3bkD%2BFbTiyH%2Bde4ml0KTaw50jVl7wznR4J%2BUGs9ENt9gQ1b%2BJDIGOnQz6Xbkg4v%2Fzv23fiqQT2iaXaC2lJndC2BdbnYzQRRHo11kGGS5EGixHgvzn9TsxzajC7IPxk%2Fnrl2O2RXsbv7Xr5EwhPi5bEjDPxorKBjqkAdLouB4f1eL0KK2tqo68DF6l6xL6H5WK73buBySKCkOXWHVftJ5wufS0Ve1jpyU%2B%2FSc%2FH4vVQq9Nnol2AZqe9ddw3SOTpUiiaoMgIXZyaT7TqWIUoKLpNaj5aAlfDMq6ShT6kCeeqYxenbUGiZQaBYtcDlPGcUVuRGPYVLl6eJYX0J8%2BLOuKxDyIdyS1h9Q5y%2FPDvpRQBOx%2BLHPdQhY%2FOqL8t9h4&X-Amz-Signature=d0c3aa4130a538b22b18ec76a6f9eac482ab2e5e69e1c8e51ce0741d5cee8e48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

