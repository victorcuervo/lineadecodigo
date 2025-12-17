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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVN3KQ2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMa2be8T7ji0vVtWZRgmn7%2BfoqHP5OIK9Jiq%2B%2Fkioe2wIhAKts5rLk8mAM8%2FKH8VvjPR%2BKuGkWpLtzrik69V48sChxKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy8EYPurZH8f2dPyIq3AORRZv8BY0tz2Rd%2FhOqj85jbw4ZBFHBJhuAhajL3xbBrySmNIOPiraQHcBtTe5CSpQBdRfflRk%2FDWmSd%2FhDcZ%2FBZ9daJ1AcTIRDXbQcIsxqMqORr3%2Fi5eG%2Fc7UyOCqQDCkeS4jTdsv6%2FN2NI6IvN31rUmOOCFOq7ibV6Erb7YHCf28ZE4Q8pazRcb8izTQB791HiD3Y3RM7PLfvVZi3Xrj%2Bkzlri0v0TolmchyfA91hSj3h%2Fpq2OemggZ4ZoS3bRu3Rk6oPwWDmdYCSt6JOchU9c4gMX1WmZjwFmbNAMwatlMIUbao856COyTZjSZ6I1WK62bSRVt9xV8pzTESBBQNqeMUxsRNy1oVGnAmXJP1xoIJdShd7PMqaDz3RnC6Lh5t42Fo24PtdonC6QuLmmGhBVbeAPHx68AhHP6ZEhV7xlJP2oZVk4gWGAhco2RydkIHHjg4RH0Pl4TxM88FFYVOV8mI6X9lHwfjZcEA%2BERoenwJeglkzd5slwlDCIUlo7izK9RFfmqOFLQ8k3Y7a4JW0utIpyuQQB9swNZMmwM03U23NXtFojHIZiCaTXFmQPakQREYTeBuf6vCvmQnDl%2BVMkbNE5RogoRnJ5P6mi75wewfmFqfX1iVnf63NETDUnovKBjqkASzGKkzxlxOCz5P0hveJkUEPywBlftnrv9iqy9mnoEsE%2Fg3hr6QIS1487J4CenVKfijgrcRUCg6Uj5anmuXw2y0QJMxM9CesMSuW4tAdC8KJeNB0Azr3OGW04ZTIigkMVCHldyiMtqYq13LZVEkWX5zsCXXoV7TRJmCpZF9jtck0ue5ucElzH4eRE4DBSgOiHBrABKl9gupFAY1gkbgoYLj%2FWtod&X-Amz-Signature=4037e47c61f6007e31345b19842dff40ddce2131863b3dc9bc29ffb984e979f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVN3KQ2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMa2be8T7ji0vVtWZRgmn7%2BfoqHP5OIK9Jiq%2B%2Fkioe2wIhAKts5rLk8mAM8%2FKH8VvjPR%2BKuGkWpLtzrik69V48sChxKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy8EYPurZH8f2dPyIq3AORRZv8BY0tz2Rd%2FhOqj85jbw4ZBFHBJhuAhajL3xbBrySmNIOPiraQHcBtTe5CSpQBdRfflRk%2FDWmSd%2FhDcZ%2FBZ9daJ1AcTIRDXbQcIsxqMqORr3%2Fi5eG%2Fc7UyOCqQDCkeS4jTdsv6%2FN2NI6IvN31rUmOOCFOq7ibV6Erb7YHCf28ZE4Q8pazRcb8izTQB791HiD3Y3RM7PLfvVZi3Xrj%2Bkzlri0v0TolmchyfA91hSj3h%2Fpq2OemggZ4ZoS3bRu3Rk6oPwWDmdYCSt6JOchU9c4gMX1WmZjwFmbNAMwatlMIUbao856COyTZjSZ6I1WK62bSRVt9xV8pzTESBBQNqeMUxsRNy1oVGnAmXJP1xoIJdShd7PMqaDz3RnC6Lh5t42Fo24PtdonC6QuLmmGhBVbeAPHx68AhHP6ZEhV7xlJP2oZVk4gWGAhco2RydkIHHjg4RH0Pl4TxM88FFYVOV8mI6X9lHwfjZcEA%2BERoenwJeglkzd5slwlDCIUlo7izK9RFfmqOFLQ8k3Y7a4JW0utIpyuQQB9swNZMmwM03U23NXtFojHIZiCaTXFmQPakQREYTeBuf6vCvmQnDl%2BVMkbNE5RogoRnJ5P6mi75wewfmFqfX1iVnf63NETDUnovKBjqkASzGKkzxlxOCz5P0hveJkUEPywBlftnrv9iqy9mnoEsE%2Fg3hr6QIS1487J4CenVKfijgrcRUCg6Uj5anmuXw2y0QJMxM9CesMSuW4tAdC8KJeNB0Azr3OGW04ZTIigkMVCHldyiMtqYq13LZVEkWX5zsCXXoV7TRJmCpZF9jtck0ue5ucElzH4eRE4DBSgOiHBrABKl9gupFAY1gkbgoYLj%2FWtod&X-Amz-Signature=10fb5d9add132726b8754a6fe360f0074606f3616010d74c48e3f00b9203592b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

