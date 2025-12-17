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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMRARBF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82Y66%2FLRRYfT7fopEt2Sneul7KhdbyhfTnNtBnb3PwAiEA%2FSm2jO997HblrTbufUriW7dgIncMuYwmfq42U6ukvccq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI2hMp1bRaZ%2FV5nLeyrcAydd10VUEQpdB%2FrL6jirohaZ9pDf%2B%2FzBfPqquhZ%2B%2FeaOJDs8M7cJkfHpAVuE8RRtaUzZDaJuaQnnJ1HRQ%2BMfYT93AHjqTohCZ%2FK17GN2urx8PlALHsfl5yez5XYKW75TjbRgyAs4omukhrOw%2F7sqjGKiGZdO6csImmjXqrOE9foysiL6%2B6DctafVomk9LZ0PMHhQ4brxQ4B5wmG%2FTBjEtmj68TxhFuVANWO8t6CRlDN%2BT0JpQJOPHOG0x863K%2FYIgdRguLV5BkGSJO07GYVm2W4gfmbb04i6McllYJaWSYxuhscbIGCcQFJrO3Jl%2Bryn64uqCEQZWP2MUScF5ubHoaijORXAw6eRR4Hn7YOF7%2BPDrT6YQrtyCl6vQqALZbDkKVa3Sr6JQE5oa4YhiCpkiJsbmSLc7kfh%2F3GEkjhzwVEm%2FrzEEv8dtO25cYvxUlvu77hZetbHiMjWNQSoUR07Y0JcA37utDt1yTwx1mrwAZJsW5q6g5nZ4cTTVagTOuWl%2BK9Pr0fFhFYB5Qtvdxq7Jhl7S4i2%2B49uThtOZ1hkaqfaBH%2BZgQfnF5Rag3IGMVXLvik43aWp%2BOdk3aq3rPkWKXV7W7UDz6dDadXJ52OL542BPRonxEzcCDs87zvlMJuqisoGOqUB1vmdcNQX3dS2j38Z8UQ0zBpaFM%2BO8RFPXkkmnzILmr0hFVgaVsj0vKMG07WjE7TVK74rzPJUf4Zcvua1KApxI9DXcRoywUVL%2FhSWwgn7Q0SVioCMZSjSPJ7KwY3q5yU3hHs6uc%2Bpq5sIQPkKhMs3Xl41Vx8A0PZt53h24itLsCLkqutp4UN%2FhdxzpeYJlEx7ZHRhGmwAc5IAfqMpMt9cGJyhCKtD&X-Amz-Signature=feeb8ede8ed58b462c867cb53898fb5a19ea0dd9a90ed7a9e3f3b5baed6d57eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMRARBF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH82Y66%2FLRRYfT7fopEt2Sneul7KhdbyhfTnNtBnb3PwAiEA%2FSm2jO997HblrTbufUriW7dgIncMuYwmfq42U6ukvccq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI2hMp1bRaZ%2FV5nLeyrcAydd10VUEQpdB%2FrL6jirohaZ9pDf%2B%2FzBfPqquhZ%2B%2FeaOJDs8M7cJkfHpAVuE8RRtaUzZDaJuaQnnJ1HRQ%2BMfYT93AHjqTohCZ%2FK17GN2urx8PlALHsfl5yez5XYKW75TjbRgyAs4omukhrOw%2F7sqjGKiGZdO6csImmjXqrOE9foysiL6%2B6DctafVomk9LZ0PMHhQ4brxQ4B5wmG%2FTBjEtmj68TxhFuVANWO8t6CRlDN%2BT0JpQJOPHOG0x863K%2FYIgdRguLV5BkGSJO07GYVm2W4gfmbb04i6McllYJaWSYxuhscbIGCcQFJrO3Jl%2Bryn64uqCEQZWP2MUScF5ubHoaijORXAw6eRR4Hn7YOF7%2BPDrT6YQrtyCl6vQqALZbDkKVa3Sr6JQE5oa4YhiCpkiJsbmSLc7kfh%2F3GEkjhzwVEm%2FrzEEv8dtO25cYvxUlvu77hZetbHiMjWNQSoUR07Y0JcA37utDt1yTwx1mrwAZJsW5q6g5nZ4cTTVagTOuWl%2BK9Pr0fFhFYB5Qtvdxq7Jhl7S4i2%2B49uThtOZ1hkaqfaBH%2BZgQfnF5Rag3IGMVXLvik43aWp%2BOdk3aq3rPkWKXV7W7UDz6dDadXJ52OL542BPRonxEzcCDs87zvlMJuqisoGOqUB1vmdcNQX3dS2j38Z8UQ0zBpaFM%2BO8RFPXkkmnzILmr0hFVgaVsj0vKMG07WjE7TVK74rzPJUf4Zcvua1KApxI9DXcRoywUVL%2FhSWwgn7Q0SVioCMZSjSPJ7KwY3q5yU3hHs6uc%2Bpq5sIQPkKhMs3Xl41Vx8A0PZt53h24itLsCLkqutp4UN%2FhdxzpeYJlEx7ZHRhGmwAc5IAfqMpMt9cGJyhCKtD&X-Amz-Signature=4850905b9f652283aba990983802433607f266a40968046cfdaa7d76580ac8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

