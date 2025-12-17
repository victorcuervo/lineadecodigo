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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUIB5B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkd%2F0ih3F5tHjAvMmCpGGY%2BwbJCoIhgWhq5Kn%2F7hdRcAiBGu0WkujITryatrCPO4LGMrk6j2Bo31Dv9eUDnsxutYyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDxwepQI%2B45nZYAlKtwDv%2F1Nb%2F8T%2BIwOdhQs68F6azblFlluFflxWfYS9TSzlNoGu592d%2BxTYcmW5kU%2BPdUgsbsf4euKDlwAwTlwPX%2FWyUYemQOdr7tEphLLbb1PVPaHMIEtyK4EIyhglctZwpc7h7eYtB5uLhlte%2FdGiysCzb6h6%2F0fSeGTB1eIr1f%2BJ6myOUj2T45%2FZo6qJsimaHKb%2Fnoe951jPtI0iPaIXo7tTyBd8JevxXXzuMbmfcDlbVES60FFazX7y944UaCnvXHGHljMiHq56xVf1RqaUdbC0VRMTjj6aQ1wPT%2F%2BJAmRyTNlUAiDQZdT7j2KvsYIyZcJTtfJb3jbcmXPQZ1pKkvzWN0q1I7clXDnuKesctU2uTVqTD6%2Ftkb0HwzAbn8UTawD%2B9l4AfLvpm8Scs7toIDPzVFx%2B0fYronjUdDxsWBtrXQqXEnBW%2FAAJb0DdJwmkE8iMbUZSD%2BsAInogJLGOZYeeL9EAYtE9aqRn6d7Cw%2B7MbJdSAsKxM6PguhPpBY8%2FfsoYaKTaqsIfx6zO3Ec50%2BXvw5Nf6q%2Flgf1MDtz4Bn%2BwP4H3ze6fOOv6dI4b4YxhFHqjCtPj6rbWeEXpJCPSSOeq1U18bpWAhjX8GZU2hqKbrPMm976J%2FWoqCTAbN8w%2BZ%2BLygY6pgEb%2BU9oxlW630%2Br9ZVVI7CBbnq674PG8H3dG867QbOK07YWGxo%2FXquXHq91Y%2FXHdXLOvc1ooTWwws63%2BAlO9Ly7u5rccvtaZqqyHmg%2F67we4EFTLFhNt1RD02gHv%2FvOOT3ohq4GGRW80TvPLN6WPkUf6ZeEj66FV7Ue3G3ygxct%2BPjwIfOiC%2FPT6b16GbqRvtUIoDkbRqe7MIGY%2FZ%2FVSEzjTi7hgN0r&X-Amz-Signature=75a75fda45b5b4268d754d3a44dd8ec549d2fd4973ed4c04ff08379bcae27ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WUIB5B2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkd%2F0ih3F5tHjAvMmCpGGY%2BwbJCoIhgWhq5Kn%2F7hdRcAiBGu0WkujITryatrCPO4LGMrk6j2Bo31Dv9eUDnsxutYyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDxwepQI%2B45nZYAlKtwDv%2F1Nb%2F8T%2BIwOdhQs68F6azblFlluFflxWfYS9TSzlNoGu592d%2BxTYcmW5kU%2BPdUgsbsf4euKDlwAwTlwPX%2FWyUYemQOdr7tEphLLbb1PVPaHMIEtyK4EIyhglctZwpc7h7eYtB5uLhlte%2FdGiysCzb6h6%2F0fSeGTB1eIr1f%2BJ6myOUj2T45%2FZo6qJsimaHKb%2Fnoe951jPtI0iPaIXo7tTyBd8JevxXXzuMbmfcDlbVES60FFazX7y944UaCnvXHGHljMiHq56xVf1RqaUdbC0VRMTjj6aQ1wPT%2F%2BJAmRyTNlUAiDQZdT7j2KvsYIyZcJTtfJb3jbcmXPQZ1pKkvzWN0q1I7clXDnuKesctU2uTVqTD6%2Ftkb0HwzAbn8UTawD%2B9l4AfLvpm8Scs7toIDPzVFx%2B0fYronjUdDxsWBtrXQqXEnBW%2FAAJb0DdJwmkE8iMbUZSD%2BsAInogJLGOZYeeL9EAYtE9aqRn6d7Cw%2B7MbJdSAsKxM6PguhPpBY8%2FfsoYaKTaqsIfx6zO3Ec50%2BXvw5Nf6q%2Flgf1MDtz4Bn%2BwP4H3ze6fOOv6dI4b4YxhFHqjCtPj6rbWeEXpJCPSSOeq1U18bpWAhjX8GZU2hqKbrPMm976J%2FWoqCTAbN8w%2BZ%2BLygY6pgEb%2BU9oxlW630%2Br9ZVVI7CBbnq674PG8H3dG867QbOK07YWGxo%2FXquXHq91Y%2FXHdXLOvc1ooTWwws63%2BAlO9Ly7u5rccvtaZqqyHmg%2F67we4EFTLFhNt1RD02gHv%2FvOOT3ohq4GGRW80TvPLN6WPkUf6ZeEj66FV7Ue3G3ygxct%2BPjwIfOiC%2FPT6b16GbqRvtUIoDkbRqe7MIGY%2FZ%2FVSEzjTi7hgN0r&X-Amz-Signature=aae6a1f30a35183eda242c1d01f41b12d842b611afd5d97a1d82f0a13fd397ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

