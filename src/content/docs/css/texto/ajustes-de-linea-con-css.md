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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE37P6KO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUtTNaGYUrpr7yxDghTShesJrEuQMyDyRVEpUAlIe2dAiBrMmv%2BrF9WUOBusqLr%2BOoUo17ZDJagBNWGZUvfsl4eYSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMWf9wb%2BzmtDilY1EsKtwDaq%2FUXlVfsJZOsSd6FFJYXGzOQSPQf9u3k1zFzjbznYeJMa%2BNMFkdLNZjLrnF9VbhWh0Oxrzr9uQpr5laLxvFZsnWkD9F9COFLbjlYUmiu9ymUZllFWmAk7vLKB3yTPWSK5MmNtOW%2Fj%2BLJvVXuxZGGmp7LhhDWYn6vU%2Fx3h5PcyWmhRwKiN2TCLusPhGrUloxlc852kCafwINtxp6JgZu0mlh0OygqKGYC6dqb4z9rwzKgSnhdLtNPZ1NQoonX%2BGtqYhm10NiQwO733Q1moPxJBRIaSdFM2%2BIniupeIoXUI%2FRTG1Nz2KvEJBfNNCdmOkAMARu4tUhnuZTEvZoZDeZu96cTQPTpjavecbiKvTFDVp6jruII3vpajywToIbPkvHraDaqAFOfWdSWacjYUCboMaglmZFF0lR%2BwKN8lM45z7ftTBgkhu8vQ2G6Ey2anYvfAcKOEocn4qIiXdLrCz4oLLPF%2F6Ga0cga1wlMEeywJr3qike8Z2dhkz%2FYlujxapCBYZxmhNvuS0KuYxZttnuY4%2BCNp7lyexfuCKCyD86V0V92nV2FQQr34v8HVPgUpJruQeTOqpkABx%2BjObeBrojkglxIpjhpz4aLyCRZzp0sSUrqfFl3aOOkcx%2FKzMwh9%2BHygY6pgE4TEKwzHw2OAYupuV5dwIyPN%2FrAswtki7r8ZyO8nmnbp4mX231ZF4t8a%2BYxZ94NmPQB74CcDgnuZnaWFpD2jNOY910J7COwVtm08AkjSCmRWYWM7ma5NHYgOXf%2BlUseGVTGr0gO9UgdETpYMOAcinX%2FKREy3nJFd03Y3ho7UT0BwVLa8uFh%2FWGbOb3DSAc9yAyXWoeOk6ramyOs1fY18owy%2FJDQMxP&X-Amz-Signature=8f61a5e4e214a49b04afd0ea57c76f09128b8623c307d595204e68638560a442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE37P6KO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUtTNaGYUrpr7yxDghTShesJrEuQMyDyRVEpUAlIe2dAiBrMmv%2BrF9WUOBusqLr%2BOoUo17ZDJagBNWGZUvfsl4eYSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMWf9wb%2BzmtDilY1EsKtwDaq%2FUXlVfsJZOsSd6FFJYXGzOQSPQf9u3k1zFzjbznYeJMa%2BNMFkdLNZjLrnF9VbhWh0Oxrzr9uQpr5laLxvFZsnWkD9F9COFLbjlYUmiu9ymUZllFWmAk7vLKB3yTPWSK5MmNtOW%2Fj%2BLJvVXuxZGGmp7LhhDWYn6vU%2Fx3h5PcyWmhRwKiN2TCLusPhGrUloxlc852kCafwINtxp6JgZu0mlh0OygqKGYC6dqb4z9rwzKgSnhdLtNPZ1NQoonX%2BGtqYhm10NiQwO733Q1moPxJBRIaSdFM2%2BIniupeIoXUI%2FRTG1Nz2KvEJBfNNCdmOkAMARu4tUhnuZTEvZoZDeZu96cTQPTpjavecbiKvTFDVp6jruII3vpajywToIbPkvHraDaqAFOfWdSWacjYUCboMaglmZFF0lR%2BwKN8lM45z7ftTBgkhu8vQ2G6Ey2anYvfAcKOEocn4qIiXdLrCz4oLLPF%2F6Ga0cga1wlMEeywJr3qike8Z2dhkz%2FYlujxapCBYZxmhNvuS0KuYxZttnuY4%2BCNp7lyexfuCKCyD86V0V92nV2FQQr34v8HVPgUpJruQeTOqpkABx%2BjObeBrojkglxIpjhpz4aLyCRZzp0sSUrqfFl3aOOkcx%2FKzMwh9%2BHygY6pgE4TEKwzHw2OAYupuV5dwIyPN%2FrAswtki7r8ZyO8nmnbp4mX231ZF4t8a%2BYxZ94NmPQB74CcDgnuZnaWFpD2jNOY910J7COwVtm08AkjSCmRWYWM7ma5NHYgOXf%2BlUseGVTGr0gO9UgdETpYMOAcinX%2FKREy3nJFd03Y3ho7UT0BwVLa8uFh%2FWGbOb3DSAc9yAyXWoeOk6ramyOs1fY18owy%2FJDQMxP&X-Amz-Signature=bcd9d43d769d82e3ad4aa87b18c3e16013c13bc05118df6a0223c1be1cb0937d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

