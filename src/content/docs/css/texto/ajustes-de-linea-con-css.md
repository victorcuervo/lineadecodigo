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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTXWTYV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY%2B29hfg%2BEbaigft0Ix4Rde7fIm2g6FS4WS69PzS%2FxBQIhAJigDBWN%2FXY448gG9AjfiCnIDV5wMhcpC1lt5iTHbcDzKv8DCHMQABoMNjM3NDIzMTgzODA1Igyl9%2FFT5MYHMSewPPgq3APc5%2BithHyZELQL6g%2BXKmoXstaeCX3mMuf9fp2b6CJixw4WqajED8Gsrhb1WZ%2Bc%2BvVV86cFuNyeaOwzR%2B6jSYUhO%2F3zR6oU4z9cxKT6CU1Y8oXtuUOUKoD2zqZuTiwMd2VgsYjMZzTy6trEVYCId27xgj6RW3Eu8VW4DgXkMlkWguR8epiqLZuX2OA6LXjtQIxk3cpnilnJEWnKxo2nzUoz3%2FuBkRTV4L3altSz%2FJEfas5gpsO4my6McT9ouT2Hv%2FAkVZ91Q1MVPMQuVElD6DE9JvTl49ZVG4jYcmBdWILBxhce1vmf2XOTBRoXL4ZcEVaypfvd7%2BRd4a2%2BoGYQrKxcgRyklwIHaiMrYSt6YIMQdRRUrvIbfCc71JuYccVRFjITV%2FVGM8cOxp5Z9tAjSalkS1txzfkLtLpHVNtXNE9lNJSIZT%2Bsaq2WsObBc415Lr%2BoBIwgUnLTQJwdnM9%2BkG%2FxNlxY%2F8AcvoFNYZazh6RJcEs6%2BySoTLu2CDORj4kCjhZKGy7f%2B1Scz4uAxnpCuLMMxmZKqgszg5cqtfzfXB3rXHcWxpHMUkwkgEUGo%2Fj23FCxEsjtkjL0WbBMXmooD%2BOfH2G%2Fa03%2Fkhd5UGUIYWLrgMVdGd0MM70Oi0jGsDDol4jKBjqkAcjMln7kW8jZOJrQQMgQQAOqN3TxuFxdoA9GA9nr01ER1aQcpMKh%2FlF6cnVjmGEIInzgrs%2FMTi9kTVVVFLATJExPoalmsQ3KGHjqSQKHAnJZyB327neNaojKzGrXCKEPmGcoDJyiwLUF39BTTa4aHdSXx8r5A41Vr5reQNDEIBUCCsvyeAo28ch4Ba8aq5TE0s2ryZ9%2FgqkYtOvT%2F%2FoEWUovYLJc&X-Amz-Signature=a1def2c1f6972256b65e928f1d8ab5b6c26e1dead993ba93abe8d1a921a1f6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LTXWTYV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY%2B29hfg%2BEbaigft0Ix4Rde7fIm2g6FS4WS69PzS%2FxBQIhAJigDBWN%2FXY448gG9AjfiCnIDV5wMhcpC1lt5iTHbcDzKv8DCHMQABoMNjM3NDIzMTgzODA1Igyl9%2FFT5MYHMSewPPgq3APc5%2BithHyZELQL6g%2BXKmoXstaeCX3mMuf9fp2b6CJixw4WqajED8Gsrhb1WZ%2Bc%2BvVV86cFuNyeaOwzR%2B6jSYUhO%2F3zR6oU4z9cxKT6CU1Y8oXtuUOUKoD2zqZuTiwMd2VgsYjMZzTy6trEVYCId27xgj6RW3Eu8VW4DgXkMlkWguR8epiqLZuX2OA6LXjtQIxk3cpnilnJEWnKxo2nzUoz3%2FuBkRTV4L3altSz%2FJEfas5gpsO4my6McT9ouT2Hv%2FAkVZ91Q1MVPMQuVElD6DE9JvTl49ZVG4jYcmBdWILBxhce1vmf2XOTBRoXL4ZcEVaypfvd7%2BRd4a2%2BoGYQrKxcgRyklwIHaiMrYSt6YIMQdRRUrvIbfCc71JuYccVRFjITV%2FVGM8cOxp5Z9tAjSalkS1txzfkLtLpHVNtXNE9lNJSIZT%2Bsaq2WsObBc415Lr%2BoBIwgUnLTQJwdnM9%2BkG%2FxNlxY%2F8AcvoFNYZazh6RJcEs6%2BySoTLu2CDORj4kCjhZKGy7f%2B1Scz4uAxnpCuLMMxmZKqgszg5cqtfzfXB3rXHcWxpHMUkwkgEUGo%2Fj23FCxEsjtkjL0WbBMXmooD%2BOfH2G%2Fa03%2Fkhd5UGUIYWLrgMVdGd0MM70Oi0jGsDDol4jKBjqkAcjMln7kW8jZOJrQQMgQQAOqN3TxuFxdoA9GA9nr01ER1aQcpMKh%2FlF6cnVjmGEIInzgrs%2FMTi9kTVVVFLATJExPoalmsQ3KGHjqSQKHAnJZyB327neNaojKzGrXCKEPmGcoDJyiwLUF39BTTa4aHdSXx8r5A41Vr5reQNDEIBUCCsvyeAo28ch4Ba8aq5TE0s2ryZ9%2FgqkYtOvT%2F%2FoEWUovYLJc&X-Amz-Signature=2634aa7bc9fccd7d84c8c880fba8d48faf2de953a4d5f44548b2d48293962696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

