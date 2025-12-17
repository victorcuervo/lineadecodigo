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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPAMOSPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY3dOB%2BDXwaZHPK9Ii7LICgQQ7U3KR4toa9uiBMJCZewIgPDeEbb0CJ2xWlMgMooqGw2S46Ya5HyCTMQEbBWu8m3gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIhM%2BhFcVjI8cbscJCrcA3N9hGV8qd8X50fIB1eFPkhC%2FAfpg%2Fqh%2B2eUqxYT17xItd3O7V54S4rlE2M8xXCUL60BxJqj80eYobusTognnm2WmkH2D1HKBkifJ7wyZaKUX%2FTzNaNp0yxq%2FYP0j4GvVqya1bEtZvzR21iMWYYWqLyn5jjNy00TFF9AlCOsFMJYfnqRdKs2iI6UhStJgLk%2FKQQcvPTjqRuwU075ekUQaz3YGLKe%2B5cd3wNGztrmEk4ER8UZ2d02TbWIMdstGV1YkL9qgwL3Tg3q%2BSs9moXd42nn3gVlRmWvtCKgCpupsfEqbaxqsbDqaWu%2BjZldwW4MhSnkTCnwRRObHXLwg3dT51b05eDxH8Dycw8MbwJQCmMV5enYRXyM6hH5pePnIRPgQ3lyzdyvJajBCpdFcmqepsk0I531VSImWTkzfggxtktkZtlZUviOooVXsXb5TTBPkwxKshuOblSxWDrAYaE6vgDYcTbnpuFkZCQ6nI9vItWqbI4A8ueb3rIrwesaLjfhe8hqo8Q2Q1ZiM3uBg8wM2lH9IpjT45YMnButKGNJNXzDL0SUvyoaUNyalzlo%2FyjtoDm%2F1Gi1YgiPi%2FtYjrnwOyF3xV2JAzv6N15%2BIBOVRucNpco3uKDJ%2FUd6aYwRML%2BqisoGOqUBx7g1SqCHBJwwDhe4PM3CXfo%2F3VwIA5BoXRPmuo0ATGlsMKrrmTgguwDllQXj4Re8cLBMdrObHkyGfk3MAIXpeFpLfCnbXxIb1A1%2BQduykyxR9X2iEB60Wz2MEqkSn0cN6DS9Uqj2nnmeANYLdHGw2%2Bcsjn6LT8T5j2FD95XsrgAXoHDmM%2By6tclQO2yvrUWYn9oIYLJWdKFlOPkOmF8KVJemX6sv&X-Amz-Signature=2b4e5fa7b6895d24426b836e5b365beb9d9c813234a1780bfce2f8ba0bcd6d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPAMOSPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY3dOB%2BDXwaZHPK9Ii7LICgQQ7U3KR4toa9uiBMJCZewIgPDeEbb0CJ2xWlMgMooqGw2S46Ya5HyCTMQEbBWu8m3gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIhM%2BhFcVjI8cbscJCrcA3N9hGV8qd8X50fIB1eFPkhC%2FAfpg%2Fqh%2B2eUqxYT17xItd3O7V54S4rlE2M8xXCUL60BxJqj80eYobusTognnm2WmkH2D1HKBkifJ7wyZaKUX%2FTzNaNp0yxq%2FYP0j4GvVqya1bEtZvzR21iMWYYWqLyn5jjNy00TFF9AlCOsFMJYfnqRdKs2iI6UhStJgLk%2FKQQcvPTjqRuwU075ekUQaz3YGLKe%2B5cd3wNGztrmEk4ER8UZ2d02TbWIMdstGV1YkL9qgwL3Tg3q%2BSs9moXd42nn3gVlRmWvtCKgCpupsfEqbaxqsbDqaWu%2BjZldwW4MhSnkTCnwRRObHXLwg3dT51b05eDxH8Dycw8MbwJQCmMV5enYRXyM6hH5pePnIRPgQ3lyzdyvJajBCpdFcmqepsk0I531VSImWTkzfggxtktkZtlZUviOooVXsXb5TTBPkwxKshuOblSxWDrAYaE6vgDYcTbnpuFkZCQ6nI9vItWqbI4A8ueb3rIrwesaLjfhe8hqo8Q2Q1ZiM3uBg8wM2lH9IpjT45YMnButKGNJNXzDL0SUvyoaUNyalzlo%2FyjtoDm%2F1Gi1YgiPi%2FtYjrnwOyF3xV2JAzv6N15%2BIBOVRucNpco3uKDJ%2FUd6aYwRML%2BqisoGOqUBx7g1SqCHBJwwDhe4PM3CXfo%2F3VwIA5BoXRPmuo0ATGlsMKrrmTgguwDllQXj4Re8cLBMdrObHkyGfk3MAIXpeFpLfCnbXxIb1A1%2BQduykyxR9X2iEB60Wz2MEqkSn0cN6DS9Uqj2nnmeANYLdHGw2%2Bcsjn6LT8T5j2FD95XsrgAXoHDmM%2By6tclQO2yvrUWYn9oIYLJWdKFlOPkOmF8KVJemX6sv&X-Amz-Signature=4efb4e1d764df49485f9097e47828b4f7b5ff9095edc3d8ba32748d19bb936ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

