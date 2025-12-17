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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQAZFTN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA85AJIV31v07gNaQyqt8ZAAnBuOjz%2BPaqSbSU8fYs%2FjAiB0E8mnrAwijAZxDo%2FzAqR5wRh7LDj%2BA6UdNlAHJJDoAyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMQOwLjbqf7H7tWqN6KtwDlLuMlu3%2FcIQryFHPfcQk9v%2BoXkfoVtNXZb0PJlgW968iGm%2FpGz5O6RPT3cMxQYljUHe6jEWKiutUmDhBBZ1Ax7Q7OqdYnDP4golEDKBmhQDcOiOdguFmYOB4RUxrYvadv%2FxDfocDgxIHCNHVrwQ%2Bnwz%2BZzzqYrUdvqU%2F%2FsjXp%2Bb4bUyKPAtH%2ByNomIp3xKiRka3pWMSd3GZTquxvtTb4EpL%2F4nOUkSUogG8o%2B3l737kWtHKL%2FnzwMw1H1zpAkt6ZmhDWBegq%2BXDHLpU8cw6aAp90jo9%2BQ2XPTfYhBNXXgCIg1FgbzGK7PeDRQTq95weNBbNEXAiD6678WjEWwzbbIen8UyX2RdFNGfo1Ph%2FuWdLZai3%2FzB13Ql2LIczOIfih2X3pMwpWFmQZG97XQoZ5uOqZ1dfhUv6wy14V1woId4tnSOAudMNnQLtfIa9n1AhOzd%2BMEmhBMxQGyQ1gxklzqjZYz8ujykkzqDJGHP2gcpAbrGvoTU0MZhX9c8KpA7eC4OMNXIzrIOuraAMi9WXusZCAWhFwp1A0g4bKLjvHb4o7LNMtwnyhccgSVFuKhRuqhEAsoUOwhXXNokI9QfMrlV2wxHPjesM%2B7UWkEfr66hKIn0ustgo161UkskcwyI6KygY6pgH%2F4ET5fj7a0I8Bagj8fsArdWGVujJjRdoOJEQvolCNPnnDeYSWksNq6HUbhKHlyCW7R%2B4G0t5CKvOarfKCtGXuAknVcPyeSduptJofh%2FdbDJs3sTz14o9LspdGCVyMahHF55jQPpb4%2F%2BL8InA8StTGZ%2FFuXEN%2Bv0SfviZGOaLLBN%2BonjcM6qRiSQUrnbO8Q%2FeHFUGaPfH8ZEcn0lQG3AOlxosZU%2FCd&X-Amz-Signature=16c03c6d5e8474806413cfd49f753ec51c8b28fbaed4a1aefe3b31c6d6a4e453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQAZFTN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA85AJIV31v07gNaQyqt8ZAAnBuOjz%2BPaqSbSU8fYs%2FjAiB0E8mnrAwijAZxDo%2FzAqR5wRh7LDj%2BA6UdNlAHJJDoAyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMQOwLjbqf7H7tWqN6KtwDlLuMlu3%2FcIQryFHPfcQk9v%2BoXkfoVtNXZb0PJlgW968iGm%2FpGz5O6RPT3cMxQYljUHe6jEWKiutUmDhBBZ1Ax7Q7OqdYnDP4golEDKBmhQDcOiOdguFmYOB4RUxrYvadv%2FxDfocDgxIHCNHVrwQ%2Bnwz%2BZzzqYrUdvqU%2F%2FsjXp%2Bb4bUyKPAtH%2ByNomIp3xKiRka3pWMSd3GZTquxvtTb4EpL%2F4nOUkSUogG8o%2B3l737kWtHKL%2FnzwMw1H1zpAkt6ZmhDWBegq%2BXDHLpU8cw6aAp90jo9%2BQ2XPTfYhBNXXgCIg1FgbzGK7PeDRQTq95weNBbNEXAiD6678WjEWwzbbIen8UyX2RdFNGfo1Ph%2FuWdLZai3%2FzB13Ql2LIczOIfih2X3pMwpWFmQZG97XQoZ5uOqZ1dfhUv6wy14V1woId4tnSOAudMNnQLtfIa9n1AhOzd%2BMEmhBMxQGyQ1gxklzqjZYz8ujykkzqDJGHP2gcpAbrGvoTU0MZhX9c8KpA7eC4OMNXIzrIOuraAMi9WXusZCAWhFwp1A0g4bKLjvHb4o7LNMtwnyhccgSVFuKhRuqhEAsoUOwhXXNokI9QfMrlV2wxHPjesM%2B7UWkEfr66hKIn0ustgo161UkskcwyI6KygY6pgH%2F4ET5fj7a0I8Bagj8fsArdWGVujJjRdoOJEQvolCNPnnDeYSWksNq6HUbhKHlyCW7R%2B4G0t5CKvOarfKCtGXuAknVcPyeSduptJofh%2FdbDJs3sTz14o9LspdGCVyMahHF55jQPpb4%2F%2BL8InA8StTGZ%2FFuXEN%2Bv0SfviZGOaLLBN%2BonjcM6qRiSQUrnbO8Q%2FeHFUGaPfH8ZEcn0lQG3AOlxosZU%2FCd&X-Amz-Signature=b1ab2421878cb53d6d8409ced8b761dab420be21b43f948d9baba256eedfeffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

