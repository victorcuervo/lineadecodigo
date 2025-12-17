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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HTRKGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgpZbUhD%2FrsK3YslL%2B1WELmOpg60L3Q6v5gidSYSwBfAiEA9oGqfmgTfFI7%2FkLsK5zo3QbXMe44pVcEFtKn8U9YPO4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ406G4U7ASSpmMgeCrcA1Iur%2F9Fz7Zg79Zczo52lQUoCZZXwB%2FiGDT0mFsfFSu34bmy0CFE1by%2BRTwmn4sdyuMbS3Fl9J3S51%2BsDpUHkFInmSnSk4ov7srRnMDgn1nWjJH4Ahq3gJ%2BPDspflYP4v%2FKblaNg%2FOWNU%2Fdt0vjJpUbVeN7GIDCOycryfDWkVCAWy77gTe9JyLHVfPQTEiUMAYL3VUP%2FN%2FQpvuF%2BSeKL%2F7w9HWVwESvboQuG7%2F3B8PSFu1kO%2FQOfrKnEkDNvPa5%2B%2Fr3U1V9tOKLS8JKVW6ApzSmWj7JdUko1aWOPz4CWlq35dftWFEZZyevBa6tgFvmwxwGF9Meq3lmM2uxave%2BI2NIz5yehpV41aCdmLnFSiAkjaRav3odTdA0EinYpUbo4LMMyIDNSXxZwXoqFBl0%2FgAOYIWYngZ7d5mIVQx7eRVumm1vPQEKl6iQV1Nv2k1MwMlHgd5gaBSK3gBHLN4ZwieMsIC0rRJn3Ju0PRgtvithOnD6PoPcdXsrbqYHBbPjjHZa0ai8EOVGNPV3iIN41MAbO%2Bezg0uRtxwFJK6k5v%2FSdQbMpIr62VOFM2vPZD%2B7koZ1UjgijVII0mTiZWUAcdmwvJjX0WTXH3piIbNdhJulH5bk9jAFrJc3O965hMKegi8oGOqUBb7OOaYmVWJoWsolRkGYRhdJspmFwU7%2FiXcbF94BsLwmK3p6H5u3twoxvjcV4X7C8aWKpSCd7MydOPxJgEcu0sjjk0bwRENeT%2B03oGZ2SLFVCkDxxku1F4o6qgB28LVsuQev4HNCNMWqjg4y%2F2r%2BHdLK18wX6MQoiV6mO6MMhjXDfK9WhVwm2YFn3mov6VQG1tR%2BvcccdWa3wuAu%2BbIUnO9XrDINx&X-Amz-Signature=12a9d7bf513efbf53e33befc16c206b371027e2f86f006f92dc09bd42881c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HTRKGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgpZbUhD%2FrsK3YslL%2B1WELmOpg60L3Q6v5gidSYSwBfAiEA9oGqfmgTfFI7%2FkLsK5zo3QbXMe44pVcEFtKn8U9YPO4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ406G4U7ASSpmMgeCrcA1Iur%2F9Fz7Zg79Zczo52lQUoCZZXwB%2FiGDT0mFsfFSu34bmy0CFE1by%2BRTwmn4sdyuMbS3Fl9J3S51%2BsDpUHkFInmSnSk4ov7srRnMDgn1nWjJH4Ahq3gJ%2BPDspflYP4v%2FKblaNg%2FOWNU%2Fdt0vjJpUbVeN7GIDCOycryfDWkVCAWy77gTe9JyLHVfPQTEiUMAYL3VUP%2FN%2FQpvuF%2BSeKL%2F7w9HWVwESvboQuG7%2F3B8PSFu1kO%2FQOfrKnEkDNvPa5%2B%2Fr3U1V9tOKLS8JKVW6ApzSmWj7JdUko1aWOPz4CWlq35dftWFEZZyevBa6tgFvmwxwGF9Meq3lmM2uxave%2BI2NIz5yehpV41aCdmLnFSiAkjaRav3odTdA0EinYpUbo4LMMyIDNSXxZwXoqFBl0%2FgAOYIWYngZ7d5mIVQx7eRVumm1vPQEKl6iQV1Nv2k1MwMlHgd5gaBSK3gBHLN4ZwieMsIC0rRJn3Ju0PRgtvithOnD6PoPcdXsrbqYHBbPjjHZa0ai8EOVGNPV3iIN41MAbO%2Bezg0uRtxwFJK6k5v%2FSdQbMpIr62VOFM2vPZD%2B7koZ1UjgijVII0mTiZWUAcdmwvJjX0WTXH3piIbNdhJulH5bk9jAFrJc3O965hMKegi8oGOqUBb7OOaYmVWJoWsolRkGYRhdJspmFwU7%2FiXcbF94BsLwmK3p6H5u3twoxvjcV4X7C8aWKpSCd7MydOPxJgEcu0sjjk0bwRENeT%2B03oGZ2SLFVCkDxxku1F4o6qgB28LVsuQev4HNCNMWqjg4y%2F2r%2BHdLK18wX6MQoiV6mO6MMhjXDfK9WhVwm2YFn3mov6VQG1tR%2BvcccdWa3wuAu%2BbIUnO9XrDINx&X-Amz-Signature=b1928521678047bace82b49b03b85c3306c604818649e82f8d82f6c5ac3a8151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

