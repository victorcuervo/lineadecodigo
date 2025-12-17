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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDD5YMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXakQHSvNk9ZHpBhl77qvfY0AoiVhNV5IIWiWapDsCrgIhAOLZXpBcX4OI%2FhMdjWYaX0TFSSti32qPx9YF0Lsl5LoDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPcn3YlbJghn3Ydkq3AMpVQp7RXqfJdlyXd8AHPintW4fVWCPZA0KYVq1Ki%2BC7F73pwSKl3bV3X3pWaEhchWND8pVxitEBr9p3z0h%2FzVZaEByltgjhkGcohr%2BLY843mZrONr2LaZ04d7%2Fg6LwyZtoUvbHfGM32Q4bIz%2F6TR3H3A%2BelowOPI4UNBkQJKxq9qnVMqlEZxRA6r92sYJ0Moaqeu7g06UJO4fbCsbeYO5XRy9jMGOXVA0CdY%2Ft9utU9ZdmFiHrCjt0punMUebEBriRfdNySraW9441rcaInXFbyVcCmpuwMjYTMhwf0f2fxszOLtNYn3l8aw%2FKYJIaYX6kJuBPOjwwRzUdCsZjIQvHZtrVpRUdmGsX5Hxr3YZKFsHSS%2B519JueTXQ5vepdwx8ADNgMgDTTQDHb02nTeZZVr1DNHmIwHG2RVUoBJXu0Xlzadfin2vf3b1E9QlTRLtsCRwbUvaGEfX3j7IEIlcPXV2ZNvt5uCWLoXR7edq9EnTxunQtfLM6RezJyRNU1ZdjxzNmSe2Hoy6PTxX1aLFWGvzywXUM37cGGOwqlf0wvcTiqpAgqyA7adR%2B875Y4JJ1VxAF8Q8BrInmfM%2FP16B1h5GRbwJ4Ya18nxW8FFLlYbCHTLHfJsC9ziLUGRjCpoIvKBjqkASmX77P7nFqVRn58LvWiahfJOB8sVFgZKV01CJ3YssxYU9GAVhjCytTlYhDBYmblKGozP0su88K5h2wIEljUEhUeiiArEOV6JrVKrra%2FkbEIRd4Z6FpxUOqgcV13wru8zea3q4SlfYwsQtrT73fgVQtwTD6Kcm5HCQqeJxiVX8%2B2r3uQNTKHEv1LgmbaKBMqIFwq2fJBFzxLHFRYr1bQT6%2FuCGun&X-Amz-Signature=df763b1612fcea1a6166846df0837bba5066696fe5cb1eefff0e4189525905ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDD5YMN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXakQHSvNk9ZHpBhl77qvfY0AoiVhNV5IIWiWapDsCrgIhAOLZXpBcX4OI%2FhMdjWYaX0TFSSti32qPx9YF0Lsl5LoDKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPcn3YlbJghn3Ydkq3AMpVQp7RXqfJdlyXd8AHPintW4fVWCPZA0KYVq1Ki%2BC7F73pwSKl3bV3X3pWaEhchWND8pVxitEBr9p3z0h%2FzVZaEByltgjhkGcohr%2BLY843mZrONr2LaZ04d7%2Fg6LwyZtoUvbHfGM32Q4bIz%2F6TR3H3A%2BelowOPI4UNBkQJKxq9qnVMqlEZxRA6r92sYJ0Moaqeu7g06UJO4fbCsbeYO5XRy9jMGOXVA0CdY%2Ft9utU9ZdmFiHrCjt0punMUebEBriRfdNySraW9441rcaInXFbyVcCmpuwMjYTMhwf0f2fxszOLtNYn3l8aw%2FKYJIaYX6kJuBPOjwwRzUdCsZjIQvHZtrVpRUdmGsX5Hxr3YZKFsHSS%2B519JueTXQ5vepdwx8ADNgMgDTTQDHb02nTeZZVr1DNHmIwHG2RVUoBJXu0Xlzadfin2vf3b1E9QlTRLtsCRwbUvaGEfX3j7IEIlcPXV2ZNvt5uCWLoXR7edq9EnTxunQtfLM6RezJyRNU1ZdjxzNmSe2Hoy6PTxX1aLFWGvzywXUM37cGGOwqlf0wvcTiqpAgqyA7adR%2B875Y4JJ1VxAF8Q8BrInmfM%2FP16B1h5GRbwJ4Ya18nxW8FFLlYbCHTLHfJsC9ziLUGRjCpoIvKBjqkASmX77P7nFqVRn58LvWiahfJOB8sVFgZKV01CJ3YssxYU9GAVhjCytTlYhDBYmblKGozP0su88K5h2wIEljUEhUeiiArEOV6JrVKrra%2FkbEIRd4Z6FpxUOqgcV13wru8zea3q4SlfYwsQtrT73fgVQtwTD6Kcm5HCQqeJxiVX8%2B2r3uQNTKHEv1LgmbaKBMqIFwq2fJBFzxLHFRYr1bQT6%2FuCGun&X-Amz-Signature=0664c2eb231f21e55599bc72280afe63b184c1eed2e57276d8710ae00e622e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

