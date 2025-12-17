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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATNZLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0pMPx%2Fn7Z%2F2tHKvA2SmnYhc1j7AgjT0BZNkQNWlHDxAiAMZj1qVTCS2P7%2Fadpq5bWNhAjNwZXyhUo%2BaPxKGe%2BI0Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMf2OUOVOESik1J6UAKtwDmOkPN%2F%2BTpuBpTkQUku7ZevQT6kGQ%2Fsq%2B%2BDhAvFI3Ai%2B1wnwC0CHDV5HW66gK5s7E3UbnXq0t05ItVsyYK14MzagZXVgLN%2BvOvNXQyRVHvdKfMhVb8gcRz8ygOHko59Vb63UwkL8h7IsQ5ZetVM6Kuz%2F%2F3Y8isNZqS9gNAUTVkVWtGR%2B3eoUAYytGZ6%2B0GiiQdLYhmtxdEB4divTE1GmMjiu3DSbw49WzFxaaadlQZHg1DaNocBiYo0V6zwm2KJ7owlpnYP6IcfClTP1D8rv4%2Bh%2BqqRnWN%2BWSrCCdbu05aGMskqJNQdkEDEbi9SvAAvX1WhGx6ME7EUJ9CaYSqCayVjd3Af3btD%2BsobYAFF9gd9pqCsZWgJ%2Bcaf9QAHpYY6KVoFNdD3SL2EG8SA%2B%2F1PhHo8jN%2BgMq8iHQ%2F9ru0TTPzolNkCdtB3U%2FJTfSEWfbypM%2FEQHT5OqtEdA6t4gjt8a7dIGXlInmqsMOk%2BVV40dkqo1cBLomRIc3vef7PhOuR0bLjL4JR5cDReIxrPQcNgz51J3zPv92ldcXE1HnJuq9OCnQJYW7PO9bFGJwG%2Fb2gtkPF2B1mn6H6CPv4fdE3lAq8m%2B%2FEAkINMCVOUgvBvC4jIClYz2yefHYpTWG4pAwjfuHygY6pgHMYkK5zIp1Z72P2W75znr1%2FuvJntS8EuJj%2BZEQtHU86eiJ64893xsUP0c1fuzPxgpCGiNt1UTFbkJxk3pdGD8Zng6FTP8E8CswJjU%2B%2BzzG%2FMK8MZNpfa22CIg4ZxmwGvsa7C03CCqqZPWebMBWqhfhhFwPEBJNeE9EpBZY2g5tixtJSMNpv1%2BME2ll55XYjhYzxKVlwVK9XcynznMlg836o9sN%2BtYE&X-Amz-Signature=dc80a252696c7cae8300b5f40b3f28b12c4c3aaa68896bf460bef373c0fd11a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ATNZLV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0pMPx%2Fn7Z%2F2tHKvA2SmnYhc1j7AgjT0BZNkQNWlHDxAiAMZj1qVTCS2P7%2Fadpq5bWNhAjNwZXyhUo%2BaPxKGe%2BI0Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMf2OUOVOESik1J6UAKtwDmOkPN%2F%2BTpuBpTkQUku7ZevQT6kGQ%2Fsq%2B%2BDhAvFI3Ai%2B1wnwC0CHDV5HW66gK5s7E3UbnXq0t05ItVsyYK14MzagZXVgLN%2BvOvNXQyRVHvdKfMhVb8gcRz8ygOHko59Vb63UwkL8h7IsQ5ZetVM6Kuz%2F%2F3Y8isNZqS9gNAUTVkVWtGR%2B3eoUAYytGZ6%2B0GiiQdLYhmtxdEB4divTE1GmMjiu3DSbw49WzFxaaadlQZHg1DaNocBiYo0V6zwm2KJ7owlpnYP6IcfClTP1D8rv4%2Bh%2BqqRnWN%2BWSrCCdbu05aGMskqJNQdkEDEbi9SvAAvX1WhGx6ME7EUJ9CaYSqCayVjd3Af3btD%2BsobYAFF9gd9pqCsZWgJ%2Bcaf9QAHpYY6KVoFNdD3SL2EG8SA%2B%2F1PhHo8jN%2BgMq8iHQ%2F9ru0TTPzolNkCdtB3U%2FJTfSEWfbypM%2FEQHT5OqtEdA6t4gjt8a7dIGXlInmqsMOk%2BVV40dkqo1cBLomRIc3vef7PhOuR0bLjL4JR5cDReIxrPQcNgz51J3zPv92ldcXE1HnJuq9OCnQJYW7PO9bFGJwG%2Fb2gtkPF2B1mn6H6CPv4fdE3lAq8m%2B%2FEAkINMCVOUgvBvC4jIClYz2yefHYpTWG4pAwjfuHygY6pgHMYkK5zIp1Z72P2W75znr1%2FuvJntS8EuJj%2BZEQtHU86eiJ64893xsUP0c1fuzPxgpCGiNt1UTFbkJxk3pdGD8Zng6FTP8E8CswJjU%2B%2BzzG%2FMK8MZNpfa22CIg4ZxmwGvsa7C03CCqqZPWebMBWqhfhhFwPEBJNeE9EpBZY2g5tixtJSMNpv1%2BME2ll55XYjhYzxKVlwVK9XcynznMlg836o9sN%2BtYE&X-Amz-Signature=a1bc8fac25d1a781050d75157050b0fc649cfd52011b05a1981ed1843ab2cf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

