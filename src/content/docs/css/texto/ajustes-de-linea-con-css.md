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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKGOOIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRUHJQpIVh3L7aAyhkxGZcCDkw6%2FTlbAWmugIdCNhiPAiAcYz3%2FpOdOEIiTTccnNuZEEJcL6n9awu0o9ouiwyYiDir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdjoxMz9RwjZcYZdpKtwDsAo0kfeEljcIwLvEt3AnDN7EodHAFtFzA2eRBAi2J4vg7RzkMt8kz5aDcjRLBq1cF4wZPp3yU9W9C2oSBY7d%2FK0oFWPYxTIOGRFWe0M7MRLz8WHtzg7GrdQ%2Fd3P7ifkPf5d%2FvSOm2s8aKvBPwyB86ncIIeYiDqqPF2qxGc7R%2F36IqRVRijpHMEAHneUHYJTVw%2Fv0LL21WRwHDVD3JNOjUJIPY1V%2Fg8rKdz3log6BCyqAO%2Buk5bYyR6kT5EWvOx8eiYhbgrzLtSqZVAfbU18Z7mjUeUcsTMRaF83Hc6cHrt6mH4oih4vi5Oxd7GibAtISPvSSpNNl1eomMZUVwxCJhoLS3pGQSSF6%2BA4UALZytQoIq1oecHOhQjG5Zmbd1ZwO2RWaIGe3JSKp1pPd6UWx9u20j6hr65%2BUewA7Ilv%2ByjVXECOjXsYEoOElHsQo9FgX2H1pKaibRnjtTT8XEVLSS8oKytLePNqXQKGho0rDlc35INnt9Sat3wUBo%2Fq6Loc%2BFfUgJOayX6xpPLvHRBKZNgQjEaWBQLtlDoJjDaY55qrXNrwb2dJJV1oRv7G58bbTkjAGqmkiK9%2B0NZuOKUETY%2FLQ1qd64gDVVsm5qCR1OUmTw9TeN7cgw8yA9AYwp4%2BKygY6pgEVUzSVOIZMgaRq03w02vo538i0C0VQSxOkOvpoud3PyoYdGw%2ByHaHkmTmdL7TnCovdVOiTnhGJuH2248pvffavFtt6uADAKTwnhWT5o4jEGwH6CKokndWmOYmGcVCor56Ea7oUmscpoDtsYowwUa9C0VR3arS5Rp90o624srOtnVg2Tth2ZEVaP%2B0iN2UPB5RzrtdagK94CuWGbLQqy34ZcDmQNDkE&X-Amz-Signature=ceaadecf64303b62127f38910c047b96ace321d87b0f88e722fd0e93062726e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKGOOIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRUHJQpIVh3L7aAyhkxGZcCDkw6%2FTlbAWmugIdCNhiPAiAcYz3%2FpOdOEIiTTccnNuZEEJcL6n9awu0o9ouiwyYiDir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdjoxMz9RwjZcYZdpKtwDsAo0kfeEljcIwLvEt3AnDN7EodHAFtFzA2eRBAi2J4vg7RzkMt8kz5aDcjRLBq1cF4wZPp3yU9W9C2oSBY7d%2FK0oFWPYxTIOGRFWe0M7MRLz8WHtzg7GrdQ%2Fd3P7ifkPf5d%2FvSOm2s8aKvBPwyB86ncIIeYiDqqPF2qxGc7R%2F36IqRVRijpHMEAHneUHYJTVw%2Fv0LL21WRwHDVD3JNOjUJIPY1V%2Fg8rKdz3log6BCyqAO%2Buk5bYyR6kT5EWvOx8eiYhbgrzLtSqZVAfbU18Z7mjUeUcsTMRaF83Hc6cHrt6mH4oih4vi5Oxd7GibAtISPvSSpNNl1eomMZUVwxCJhoLS3pGQSSF6%2BA4UALZytQoIq1oecHOhQjG5Zmbd1ZwO2RWaIGe3JSKp1pPd6UWx9u20j6hr65%2BUewA7Ilv%2ByjVXECOjXsYEoOElHsQo9FgX2H1pKaibRnjtTT8XEVLSS8oKytLePNqXQKGho0rDlc35INnt9Sat3wUBo%2Fq6Loc%2BFfUgJOayX6xpPLvHRBKZNgQjEaWBQLtlDoJjDaY55qrXNrwb2dJJV1oRv7G58bbTkjAGqmkiK9%2B0NZuOKUETY%2FLQ1qd64gDVVsm5qCR1OUmTw9TeN7cgw8yA9AYwp4%2BKygY6pgEVUzSVOIZMgaRq03w02vo538i0C0VQSxOkOvpoud3PyoYdGw%2ByHaHkmTmdL7TnCovdVOiTnhGJuH2248pvffavFtt6uADAKTwnhWT5o4jEGwH6CKokndWmOYmGcVCor56Ea7oUmscpoDtsYowwUa9C0VR3arS5Rp90o624srOtnVg2Tth2ZEVaP%2B0iN2UPB5RzrtdagK94CuWGbLQqy34ZcDmQNDkE&X-Amz-Signature=1986e73ddf39fa2607d6c20cf4ebc86e04dee0b57d9f9070e81005ce994e6505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

