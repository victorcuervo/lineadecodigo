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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJBSSRM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw18iIwW3knXpkfWNsq1YHe6c4%2B3u2yoRK%2ByeF0PVl%2BAiEA8X3ijwqyT4DTE%2FKewRdYN5XljXTsnXU5iX%2B%2BDJUAUsEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIx58TV4F%2FbYWxnDyrcAyPkFZxBbnMqP74esqx2a%2B9%2Fq4s8X6X%2BzTfVdxYtY0E75UUkSHVFuziB2mh2rOWsQaTqO%2Bh3nPY%2FiCH8aWXei7CROzjN35oMleQCwG2Kdlk5C4CWze%2FyIRQzLKGEqw4ZVsc76i9qEyf84xvv0L3NIuq9VStgn2%2FPImOURA8t%2BvUEFlGQOd%2BJsERkJKfVk5INKs8WDMffowjJsLGOsuRwOn%2BDhpAVP7Sn41yqrTsHsqo8VsvUqD0DBeMGic6f2LBD1%2FoVkZCtXvS%2FdpkeWiqlzaLtXqGCx4BO0Ec08uT1IllqkvttaHrZmP71%2F1k9aYu4qwQmKXaHNac5u85DDOhMAXCfgxao023OiQZPdjvedzDjrtFku3ApuG%2B0hqwYWOddCRWsRCOP%2FnHKGzthk187wtjyVpVKYeVZKT%2BKVLuxHoocORYjvic6sD0ad%2FcgArtWQ2UJhOujtCVMxt1RhyYQfazqEzBd8SG8Bd6aQcy0JiKrcJmh1CFTIfzBBUojRkKbWxSI0bFMZpSQUZpHjI5fjy%2B1nnx%2B8DH3rD7fdAxoOliiTUA%2Bzb9HP12LcrJBjHn7LTfE77PxFNLkowXsApj7sCT5n4MMM9V5CWc1nGNMBCvGXM0meHJEpgiPT7ivMIGfi8oGOqUB3XfTZhBiOklQdoRSKiC5U%2BpD26X3HcsavZ%2FYEPFVi79bjOJuVAglwiHeFDnr%2F2k5SRZJydCXo2KqLeoRmj%2BGns3VnliOFbNPAfee1LfI%2FK%2Ft4BhGFJYl0iQkxiVSQCVfHfNETU%2Brr%2B247h1NuqxtBYOM8ux%2FFb8lh8hynnEX1xYPvCPqIYpubxHfPGDkbOSx%2ByNpWVtm5L5SGuTqszuIzJGWYmrP&X-Amz-Signature=a86ca34751680f555673b72e8fdfa6e319f1c16476f06b7bcd3df482d43dbd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJBSSRM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw18iIwW3knXpkfWNsq1YHe6c4%2B3u2yoRK%2ByeF0PVl%2BAiEA8X3ijwqyT4DTE%2FKewRdYN5XljXTsnXU5iX%2B%2BDJUAUsEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIx58TV4F%2FbYWxnDyrcAyPkFZxBbnMqP74esqx2a%2B9%2Fq4s8X6X%2BzTfVdxYtY0E75UUkSHVFuziB2mh2rOWsQaTqO%2Bh3nPY%2FiCH8aWXei7CROzjN35oMleQCwG2Kdlk5C4CWze%2FyIRQzLKGEqw4ZVsc76i9qEyf84xvv0L3NIuq9VStgn2%2FPImOURA8t%2BvUEFlGQOd%2BJsERkJKfVk5INKs8WDMffowjJsLGOsuRwOn%2BDhpAVP7Sn41yqrTsHsqo8VsvUqD0DBeMGic6f2LBD1%2FoVkZCtXvS%2FdpkeWiqlzaLtXqGCx4BO0Ec08uT1IllqkvttaHrZmP71%2F1k9aYu4qwQmKXaHNac5u85DDOhMAXCfgxao023OiQZPdjvedzDjrtFku3ApuG%2B0hqwYWOddCRWsRCOP%2FnHKGzthk187wtjyVpVKYeVZKT%2BKVLuxHoocORYjvic6sD0ad%2FcgArtWQ2UJhOujtCVMxt1RhyYQfazqEzBd8SG8Bd6aQcy0JiKrcJmh1CFTIfzBBUojRkKbWxSI0bFMZpSQUZpHjI5fjy%2B1nnx%2B8DH3rD7fdAxoOliiTUA%2Bzb9HP12LcrJBjHn7LTfE77PxFNLkowXsApj7sCT5n4MMM9V5CWc1nGNMBCvGXM0meHJEpgiPT7ivMIGfi8oGOqUB3XfTZhBiOklQdoRSKiC5U%2BpD26X3HcsavZ%2FYEPFVi79bjOJuVAglwiHeFDnr%2F2k5SRZJydCXo2KqLeoRmj%2BGns3VnliOFbNPAfee1LfI%2FK%2Ft4BhGFJYl0iQkxiVSQCVfHfNETU%2Brr%2B247h1NuqxtBYOM8ux%2FFb8lh8hynnEX1xYPvCPqIYpubxHfPGDkbOSx%2ByNpWVtm5L5SGuTqszuIzJGWYmrP&X-Amz-Signature=6b66a798086d24f4acd655079f17e4d3c3a2eaf702276af3fdbdb49624912aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

