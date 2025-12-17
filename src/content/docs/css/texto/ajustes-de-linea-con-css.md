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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5WHYFQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOtD2g1bq56M9m0zUi5kCQ1UOdkWDYS7wL16jwIgL0%2BwIhAP3i%2Bt%2FMdlZ4OQeeqcANZFfslYw%2FRwRP2jbMOsFh%2B2hXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHjS4N5xjozUcpPHkq3ANcwW9cGco8ImrDutv%2FqrgYHL0HgkQW8JTO8lKD4HWIOLIs%2BQvPqbjh12hdPo0JcaMuSYCvZmrHu%2BOAlMV7V0S9Ue18QX4ymgipwXMPkGrR%2BUiA%2BZeHClOmMFsvwkkIMfbRPUpFfi8Vn3fwh%2FYjJB85Js1Q6ONGVe83nfcm6peZDL%2BRJDUIjn6xB5GH9etNreI7A9FT%2BvuhGKfH95GW39ZArjsGZ47hwf7Y5NhP3ra2ZI5TGDk6qZ8rLr%2BlW8H2xNDCfpnSOZw7QujWxbvLe5nJrp37eJPJ4c38LQ%2FdFz5THC7nBC5T7jqLPnmp5T%2F1MKy5PIidHvE9w3v3GiiptfJgomJA8MUC7Y0WBoaeafpBEsq0%2BJhwZPpSJbG64NQs0t9kx5xCxdVT7XFE1hmRWOZxXvImWXC%2FWy0oVkToqw2GM5FFW3jHOMMNeQMY4OHjMavPC15%2BjZIET96QRQLp5TdewS9iPU4wBAwUBpeVRuceEMdgYBcfrhqVlcObN65%2BJtbvPpVfLAKkqudo9E2UwahMxBwn2CSt5v7IxAYaIMgYa%2BVv6oz%2F7slTEC7ik5g3IByVcCda6jCQHsmKNEI%2FiZwsx%2BhWIuNWlO4OTtAzUDrKKCCRbW%2Fk9lWG9rA9yjDMnovKBjqkAUeDqxNZFjrlyZUqZFb%2FKFXQ4TdYxc%2Bgjg5FH%2FvQQivfMc11GrqJGly1HdOIjG9YQiaoNa071nz7lEwhxer8az8LNGRx5T2thTxRtcP2T1sCWj4bdbFDS844utJ47MsFacs%2BKOoUIIKrQHrEg2Puf64V8VkB5yyGItrlQWmxL3ChkaYPPtZv7%2FdlG3acG%2BaAyhQopeXYx5t8JJFKw6YIdMtNmnHa&X-Amz-Signature=b7991e89ee0108d0a31b5a761450822aa6968ede8d000098411b7874fe4a1aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X5WHYFQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOtD2g1bq56M9m0zUi5kCQ1UOdkWDYS7wL16jwIgL0%2BwIhAP3i%2Bt%2FMdlZ4OQeeqcANZFfslYw%2FRwRP2jbMOsFh%2B2hXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHjS4N5xjozUcpPHkq3ANcwW9cGco8ImrDutv%2FqrgYHL0HgkQW8JTO8lKD4HWIOLIs%2BQvPqbjh12hdPo0JcaMuSYCvZmrHu%2BOAlMV7V0S9Ue18QX4ymgipwXMPkGrR%2BUiA%2BZeHClOmMFsvwkkIMfbRPUpFfi8Vn3fwh%2FYjJB85Js1Q6ONGVe83nfcm6peZDL%2BRJDUIjn6xB5GH9etNreI7A9FT%2BvuhGKfH95GW39ZArjsGZ47hwf7Y5NhP3ra2ZI5TGDk6qZ8rLr%2BlW8H2xNDCfpnSOZw7QujWxbvLe5nJrp37eJPJ4c38LQ%2FdFz5THC7nBC5T7jqLPnmp5T%2F1MKy5PIidHvE9w3v3GiiptfJgomJA8MUC7Y0WBoaeafpBEsq0%2BJhwZPpSJbG64NQs0t9kx5xCxdVT7XFE1hmRWOZxXvImWXC%2FWy0oVkToqw2GM5FFW3jHOMMNeQMY4OHjMavPC15%2BjZIET96QRQLp5TdewS9iPU4wBAwUBpeVRuceEMdgYBcfrhqVlcObN65%2BJtbvPpVfLAKkqudo9E2UwahMxBwn2CSt5v7IxAYaIMgYa%2BVv6oz%2F7slTEC7ik5g3IByVcCda6jCQHsmKNEI%2FiZwsx%2BhWIuNWlO4OTtAzUDrKKCCRbW%2Fk9lWG9rA9yjDMnovKBjqkAUeDqxNZFjrlyZUqZFb%2FKFXQ4TdYxc%2Bgjg5FH%2FvQQivfMc11GrqJGly1HdOIjG9YQiaoNa071nz7lEwhxer8az8LNGRx5T2thTxRtcP2T1sCWj4bdbFDS844utJ47MsFacs%2BKOoUIIKrQHrEg2Puf64V8VkB5yyGItrlQWmxL3ChkaYPPtZv7%2FdlG3acG%2BaAyhQopeXYx5t8JJFKw6YIdMtNmnHa&X-Amz-Signature=7a53dd30eb8fb1c30f90408faa1a53053549698a09ff04e6f4eb11026b9d4348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

