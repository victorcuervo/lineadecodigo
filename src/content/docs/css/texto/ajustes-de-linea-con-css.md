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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AFEDMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX21gMZneB4UbcYtA2Khyj%2FGFZ1dIk4nJTqQqOxjlFHAiAkoyh1gpx88f6enLOsDpr1vP%2BewmY7Omudd4lqK0b98Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7sta4tabqc286EibKtwDZbJEkOfE18D0uEk2dvLmtq2c3TS%2FsvwLvRyqZHtKwI6Mhmh9J7aFxCGtLODSeyGAivzk0m6q2kw9ZyGr4iYF78CGblUgNtuKdY%2FTTxm%2FUuSOnACilIetCIfABl4cF5GcsqWvnd1aIRJO9X6s6d8km%2BQ9jd9QSNe9KBKi%2Bo7%2FpNMZPKUPylXqncILZvJLhV4ibw6sWv3PbSYHZ4QQCE6Vp4sUm%2FHHcC8M6OBPblwPaSwGCpZgQfu6RMpdj7tblvm4N4vK%2Fu1SAzmfVA6EKEPtSuaf8TcPf2NIt0F%2BwlD1kxfrM%2F5361qYWjTw2eiGHkACcEpu0bwQNoLKl5CnNvM%2Fw2O3t6Cv3%2F9399fHfmlw5oUbs2tM6nAdAX3W0Xx7DmFULGisSI672OzpIzge8XBlt9%2FpjdOk0on%2BjE9S7KTYImgmEkJV5pJ8U4qXsE9O6PziT11Cj25KUR8mcTJeLwMPfb3Pgv4WWTm%2FhXEGzKDoSR1jHjij%2FOAQrRyOWlnQeMWtFlQudusRz2E7JnxYkuOakAizG9JSmx3RWDs6OuF5jS2d8x8y%2BF5Rf9cRXF%2BXbDIy9BHDninfFq5evBJuT6TYl2T39flwjoxJ%2BFsm70bF1PJNpObPqtU0I0EfqBUw7s6IygY6pgHQOd%2FwoD3mic4n0EhbzJdiX8tZkZGTjh4Peur8n9JCWLf%2F3TTGWG8Tg2Ic%2FQbNUGFisU8GVrUBbrbspG%2FXxM0COWYPOHFMYpbEqjX1%2FrLox4XHAejbtOwzbVtkYvkzGHA8dG8ku%2FbeKmrbP8wdeLIXrSgDrA6guCB6g9%2FPrb7NcNAVavU%2Bou1cxDhjwX2H2I0K0waghOYiQhuOGiqOTsojio3sKYrV&X-Amz-Signature=805f7291cc53c27ba9259c62122b512fa2a43109710b5306c4304dc5d3d71334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6AFEDMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX21gMZneB4UbcYtA2Khyj%2FGFZ1dIk4nJTqQqOxjlFHAiAkoyh1gpx88f6enLOsDpr1vP%2BewmY7Omudd4lqK0b98Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM7sta4tabqc286EibKtwDZbJEkOfE18D0uEk2dvLmtq2c3TS%2FsvwLvRyqZHtKwI6Mhmh9J7aFxCGtLODSeyGAivzk0m6q2kw9ZyGr4iYF78CGblUgNtuKdY%2FTTxm%2FUuSOnACilIetCIfABl4cF5GcsqWvnd1aIRJO9X6s6d8km%2BQ9jd9QSNe9KBKi%2Bo7%2FpNMZPKUPylXqncILZvJLhV4ibw6sWv3PbSYHZ4QQCE6Vp4sUm%2FHHcC8M6OBPblwPaSwGCpZgQfu6RMpdj7tblvm4N4vK%2Fu1SAzmfVA6EKEPtSuaf8TcPf2NIt0F%2BwlD1kxfrM%2F5361qYWjTw2eiGHkACcEpu0bwQNoLKl5CnNvM%2Fw2O3t6Cv3%2F9399fHfmlw5oUbs2tM6nAdAX3W0Xx7DmFULGisSI672OzpIzge8XBlt9%2FpjdOk0on%2BjE9S7KTYImgmEkJV5pJ8U4qXsE9O6PziT11Cj25KUR8mcTJeLwMPfb3Pgv4WWTm%2FhXEGzKDoSR1jHjij%2FOAQrRyOWlnQeMWtFlQudusRz2E7JnxYkuOakAizG9JSmx3RWDs6OuF5jS2d8x8y%2BF5Rf9cRXF%2BXbDIy9BHDninfFq5evBJuT6TYl2T39flwjoxJ%2BFsm70bF1PJNpObPqtU0I0EfqBUw7s6IygY6pgHQOd%2FwoD3mic4n0EhbzJdiX8tZkZGTjh4Peur8n9JCWLf%2F3TTGWG8Tg2Ic%2FQbNUGFisU8GVrUBbrbspG%2FXxM0COWYPOHFMYpbEqjX1%2FrLox4XHAejbtOwzbVtkYvkzGHA8dG8ku%2FbeKmrbP8wdeLIXrSgDrA6guCB6g9%2FPrb7NcNAVavU%2Bou1cxDhjwX2H2I0K0waghOYiQhuOGiqOTsojio3sKYrV&X-Amz-Signature=ce5808d4fc5d200e64f3dc2bbaafd196b0bcdd1ae6ad3b7868affd6ba6c68e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

