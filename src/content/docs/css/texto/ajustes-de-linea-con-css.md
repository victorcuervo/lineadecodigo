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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SOAFPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkATiwPWvZcQ%2FpIo9IHjvkLSTQa%2FLgrP9tvrUFY%2FDjWAIgEScp9hpW9PHnO3BnmOaW%2BlzaykOdlABufk0HmO%2FOFI4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP89oE9GdUO1rdISaircAzMi8LsNXZDGnzk1Gd7LdhQ%2F%2BorBZZdXpTiHIyy93kqmIPhemnQPtturux7rowQjHDKVyLE7%2F6FGVYN3fyQJRNexkCemkgTnG5Wn8sEicGsRF17u2ovrjaK7Z1osWMGo0XOENclVc5MvmEn3f5nd8oPiPlnVh1%2B%2BLPYny6EkdCQUBOUh3rc0e0%2FNiz7LLJmpdMrgKoz8UJmoZl2gJMhfIdF18iWJTCBBxeORW%2Fo%2FMy%2FImnYqfGLCSVRJI6OfJPbnF%2Bl39%2FOLXmW1Qu1LWEUFlWfr2UbuXpfRa31dM5kbSKOZfGTmLmAdvq0mfSJjszNF%2BpU6MdVBZLbSm%2FlzHavkOWNTPLRuMNTTVxIvU3041119s4WbXh%2BG90UqxATIcbrXtq0Ia5wLFWlFKAiD9IWM%2Fgx0gy7%2BONVuRyceDtA1pnHf0qqTtYMPG%2F1X0he%2F5l81wtb9dtfTieeslBP2%2BQTxSNt8IR6WytQBjEO7OjR%2FZV%2BTshSciB9rQjKJcyv%2BDQgDh5JvuY%2B5e1iB%2BAVZ2MW6nOJnJA505%2F16pp3Bqo5OpAkGww3DgCpWBKawECaffwOR0bz%2BVdXhAHLHI52Bq72vSQj0ufXKfVTmDHdcjdioCxvapGZ6%2F8Y2AbKcT0eLMLOujMoGOqUBGmlzsyrKUtzZyf9GhjmjHxp1PoNt%2FWvS5LMn0hqh4Igpn56BRt6th3pH11849bYEPURzo83NsxyOGKeo5mueMldhKxQNjIHaj1xzd8cjYHRf19UPb%2FechpFfR4C7yTaNPzTdmTkeVpkn4JUwUzxEZybTeiBOS%2B5ZOMLg6G6vjGWNAmhYuFDPhDFFcJrrhnoG0QMqb8kXMBqmOImZHS0XZwVzvR1t&X-Amz-Signature=4b74c2bddf5c94cc869b6ca472aaa6d84bf9e7bd5dac546737d2762ec14df81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SOAFPH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkATiwPWvZcQ%2FpIo9IHjvkLSTQa%2FLgrP9tvrUFY%2FDjWAIgEScp9hpW9PHnO3BnmOaW%2BlzaykOdlABufk0HmO%2FOFI4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP89oE9GdUO1rdISaircAzMi8LsNXZDGnzk1Gd7LdhQ%2F%2BorBZZdXpTiHIyy93kqmIPhemnQPtturux7rowQjHDKVyLE7%2F6FGVYN3fyQJRNexkCemkgTnG5Wn8sEicGsRF17u2ovrjaK7Z1osWMGo0XOENclVc5MvmEn3f5nd8oPiPlnVh1%2B%2BLPYny6EkdCQUBOUh3rc0e0%2FNiz7LLJmpdMrgKoz8UJmoZl2gJMhfIdF18iWJTCBBxeORW%2Fo%2FMy%2FImnYqfGLCSVRJI6OfJPbnF%2Bl39%2FOLXmW1Qu1LWEUFlWfr2UbuXpfRa31dM5kbSKOZfGTmLmAdvq0mfSJjszNF%2BpU6MdVBZLbSm%2FlzHavkOWNTPLRuMNTTVxIvU3041119s4WbXh%2BG90UqxATIcbrXtq0Ia5wLFWlFKAiD9IWM%2Fgx0gy7%2BONVuRyceDtA1pnHf0qqTtYMPG%2F1X0he%2F5l81wtb9dtfTieeslBP2%2BQTxSNt8IR6WytQBjEO7OjR%2FZV%2BTshSciB9rQjKJcyv%2BDQgDh5JvuY%2B5e1iB%2BAVZ2MW6nOJnJA505%2F16pp3Bqo5OpAkGww3DgCpWBKawECaffwOR0bz%2BVdXhAHLHI52Bq72vSQj0ufXKfVTmDHdcjdioCxvapGZ6%2F8Y2AbKcT0eLMLOujMoGOqUBGmlzsyrKUtzZyf9GhjmjHxp1PoNt%2FWvS5LMn0hqh4Igpn56BRt6th3pH11849bYEPURzo83NsxyOGKeo5mueMldhKxQNjIHaj1xzd8cjYHRf19UPb%2FechpFfR4C7yTaNPzTdmTkeVpkn4JUwUzxEZybTeiBOS%2B5ZOMLg6G6vjGWNAmhYuFDPhDFFcJrrhnoG0QMqb8kXMBqmOImZHS0XZwVzvR1t&X-Amz-Signature=f12b8c4d0f9476c0de7250dad31695873899cf64b13aef0b66812c3df1e86a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

