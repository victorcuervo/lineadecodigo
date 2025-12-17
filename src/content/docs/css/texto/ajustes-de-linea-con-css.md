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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQ6JOA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FmK8SGMrC5sCunEJKv5yhgGdkQiJ4tBpk75T8sDofVAiEAw3tPO9Uda%2FUT6HSkFnn7RxMn%2FwlDc1wbqXCbfm1X0sQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyhb4SlG5lywZjCRyrcA8bQ3W4gkUdlC8G014OLnbMVEqNdiwCQCzi0TxuUI5AjC6epwLg0YfUBxjz3qmK2vF%2BnWOavO%2Fqhleh2%2FGty9v5M%2FshfCiBCMriUvI0il8evMmJ%2F86TJ%2FrWPoX%2FjzpO09I9fFtwPSXf7mxl6YALiJhIrv8E9TsezBnXpPpGvJYSMiapQIkRuix2VUFxg7Z%2BCgKSbYLRrGoL9M16H6N8rqSisehwe9jT8K%2Be%2BldcI%2Bn1P5Giy9NWp4eCD8IKD5aN8SxPSvr1jkfY%2B8yQu32EZPLK71GfahMWKlOcT%2FlD%2BaBEdtZqAxs9tG2ZP0IvVA3s1Hi%2F6IKd83%2F51T9L89FuG486qt2WDwHUVsGN7IK%2BPB0DyMQI79zoy7DQWj7biHI1HKKzQV0TLjr8tc34qVpBpzTjLDc73lI0CcFwUzeURfP8hcfjCUXhRDSt%2FcUUK70lXSTMNqw%2B%2BV1s2NaFhfP%2Fl1ghdKd%2BKsbRVbeLtBsu4TBvWujK6iiSBp5WslEnKKBEj4egbKFmx%2BJIy35eKfWHD%2F0pAT6rXA65U%2Bvm8U6z6qgZJzaDhv225NF4JzJczPwigl8nwYC8dz22dSfasD3NJbFemCXK2jQ0ed0LjwyiwH%2BHLPp0KLLRTE9dqRhpKMPufi8oGOqUB%2FRu%2FzrGAeOcijJwCFJnTGZf%2BX%2F%2FSY4vf4nQqJjRaELQh3IPRGgJlRJIXRjRsgnYRpMh7Aid3Ozq0WXAcbkGt4zRq1Fu86ydHwvbR7u62nt0UAmtTlMZbUHvDIpazu4Bq1w%2FcxERwmIbI4M1wUyzL672dfb%2B90A0HUg2xwTPxAi%2Fe7aB90fkEXkYtldSCEZlbor6cWr2ysSyXguzm22ofhLJ3zi2q&X-Amz-Signature=a35c21d84782651cf583eea115583033e69200312b4b6d137bc7e77407c5f087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLQ6JOA6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FmK8SGMrC5sCunEJKv5yhgGdkQiJ4tBpk75T8sDofVAiEAw3tPO9Uda%2FUT6HSkFnn7RxMn%2FwlDc1wbqXCbfm1X0sQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyhb4SlG5lywZjCRyrcA8bQ3W4gkUdlC8G014OLnbMVEqNdiwCQCzi0TxuUI5AjC6epwLg0YfUBxjz3qmK2vF%2BnWOavO%2Fqhleh2%2FGty9v5M%2FshfCiBCMriUvI0il8evMmJ%2F86TJ%2FrWPoX%2FjzpO09I9fFtwPSXf7mxl6YALiJhIrv8E9TsezBnXpPpGvJYSMiapQIkRuix2VUFxg7Z%2BCgKSbYLRrGoL9M16H6N8rqSisehwe9jT8K%2Be%2BldcI%2Bn1P5Giy9NWp4eCD8IKD5aN8SxPSvr1jkfY%2B8yQu32EZPLK71GfahMWKlOcT%2FlD%2BaBEdtZqAxs9tG2ZP0IvVA3s1Hi%2F6IKd83%2F51T9L89FuG486qt2WDwHUVsGN7IK%2BPB0DyMQI79zoy7DQWj7biHI1HKKzQV0TLjr8tc34qVpBpzTjLDc73lI0CcFwUzeURfP8hcfjCUXhRDSt%2FcUUK70lXSTMNqw%2B%2BV1s2NaFhfP%2Fl1ghdKd%2BKsbRVbeLtBsu4TBvWujK6iiSBp5WslEnKKBEj4egbKFmx%2BJIy35eKfWHD%2F0pAT6rXA65U%2Bvm8U6z6qgZJzaDhv225NF4JzJczPwigl8nwYC8dz22dSfasD3NJbFemCXK2jQ0ed0LjwyiwH%2BHLPp0KLLRTE9dqRhpKMPufi8oGOqUB%2FRu%2FzrGAeOcijJwCFJnTGZf%2BX%2F%2FSY4vf4nQqJjRaELQh3IPRGgJlRJIXRjRsgnYRpMh7Aid3Ozq0WXAcbkGt4zRq1Fu86ydHwvbR7u62nt0UAmtTlMZbUHvDIpazu4Bq1w%2FcxERwmIbI4M1wUyzL672dfb%2B90A0HUg2xwTPxAi%2Fe7aB90fkEXkYtldSCEZlbor6cWr2ysSyXguzm22ofhLJ3zi2q&X-Amz-Signature=87b6b5416501e58df95232626844a3d0a1dfcca0deac343b379549ed650300bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

