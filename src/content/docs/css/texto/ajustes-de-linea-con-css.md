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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUDWQGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp4E%2BTCDw8QJ7xcT1qB98s%2F0OQ28TzAvf5cO4myYxLOwIgKzkH6t09rnBlvWeAApuBAp9tcnnCCs5Y%2FZOwO691FFcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLZOHAQLC1KWNugp7ircAy7D%2Fe7QzzsbyBDV0G6Q7%2F5yGV7wY6vqnNe4koN8pe6ibDI9F%2FYFijEsJbgbOvmLIrDdA7ZqBO4aVmB%2FHBY3gItynQEQhX%2BRmNmvLljmsyNuMpn8RuvujqPlpdZijazTc4lwR9z8A9WbtvX10ksc5XoIrwWrb6IEuBk9mxzDBt%2BysS71dgjgCoFUgKn0f5dTM8oALNPnx1Pg3VKSy%2B8f3O13t7KBeQUO9II%2B05u%2FpzpHa7rnq5d8Z77%2F%2FH%2BaM2CrRMk6mWERbfrvEpSK7Cn1%2BEwMmcqUgiC6EIa4H0TEj2MLEmC5atxC6JaFAw8fDTEkOcQdWrH%2Fh0vVIpjAwQoqAb7BUeupDjOWqVwuEt%2FDVB2mtjJ8F1wbRiJrguwu3uinKekOEQTsl1rgDwLvIZ7gluuca09VbRhPqjWHbfVjnYXrMQrXnwyckJfqiWSfjyW9R1aVYJd59QfY8n892ModXC35ObASzcjurgIt%2BGYpVEGldhHAZ5CGJtMLJ93rS37xQjR8pIdhcxVqFZhX4i%2F5lW1N8u45bT%2F71rjyLp1NRJu%2BzoxTGIhgWT6xCZtR58vbPfla4Oe4EDrnQNk%2F82fASAu61Cr6ljqnhQ%2FimNptt0q71tbiTPBv2%2BUF92tvMLj6h8oGOqUB%2FAjerpWUUQH1doaBvCXbCVT7csjNwS2lz%2FHUHHSjpa4uvARMQc292L0jzIGkyQ%2Fa9JeWcSeZoxmplrA12cW1l1yFGaqg%2FJyER6irZ8FFKDPd2fk3crPT2x8Sk4zd0zWWxMx%2F6T4SMpG5L2w%2FlUU9sl%2FTzWcZimGfkaO2ow9xekCFbyT%2FhRf7gxKJYBR0e2wSi5JjF8BAYaZZgFsDDNtIHaRiUqjw&X-Amz-Signature=e1f30b13dd4ed8375e8b42400eeb7e5a90e996c31fc99cdb439b3472ad716036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVUDWQGB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp4E%2BTCDw8QJ7xcT1qB98s%2F0OQ28TzAvf5cO4myYxLOwIgKzkH6t09rnBlvWeAApuBAp9tcnnCCs5Y%2FZOwO691FFcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLZOHAQLC1KWNugp7ircAy7D%2Fe7QzzsbyBDV0G6Q7%2F5yGV7wY6vqnNe4koN8pe6ibDI9F%2FYFijEsJbgbOvmLIrDdA7ZqBO4aVmB%2FHBY3gItynQEQhX%2BRmNmvLljmsyNuMpn8RuvujqPlpdZijazTc4lwR9z8A9WbtvX10ksc5XoIrwWrb6IEuBk9mxzDBt%2BysS71dgjgCoFUgKn0f5dTM8oALNPnx1Pg3VKSy%2B8f3O13t7KBeQUO9II%2B05u%2FpzpHa7rnq5d8Z77%2F%2FH%2BaM2CrRMk6mWERbfrvEpSK7Cn1%2BEwMmcqUgiC6EIa4H0TEj2MLEmC5atxC6JaFAw8fDTEkOcQdWrH%2Fh0vVIpjAwQoqAb7BUeupDjOWqVwuEt%2FDVB2mtjJ8F1wbRiJrguwu3uinKekOEQTsl1rgDwLvIZ7gluuca09VbRhPqjWHbfVjnYXrMQrXnwyckJfqiWSfjyW9R1aVYJd59QfY8n892ModXC35ObASzcjurgIt%2BGYpVEGldhHAZ5CGJtMLJ93rS37xQjR8pIdhcxVqFZhX4i%2F5lW1N8u45bT%2F71rjyLp1NRJu%2BzoxTGIhgWT6xCZtR58vbPfla4Oe4EDrnQNk%2F82fASAu61Cr6ljqnhQ%2FimNptt0q71tbiTPBv2%2BUF92tvMLj6h8oGOqUB%2FAjerpWUUQH1doaBvCXbCVT7csjNwS2lz%2FHUHHSjpa4uvARMQc292L0jzIGkyQ%2Fa9JeWcSeZoxmplrA12cW1l1yFGaqg%2FJyER6irZ8FFKDPd2fk3crPT2x8Sk4zd0zWWxMx%2F6T4SMpG5L2w%2FlUU9sl%2FTzWcZimGfkaO2ow9xekCFbyT%2FhRf7gxKJYBR0e2wSi5JjF8BAYaZZgFsDDNtIHaRiUqjw&X-Amz-Signature=ec1ac584189e792319b3c65fbe91b8edf9275e31045dd20425a1b1593157419c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

