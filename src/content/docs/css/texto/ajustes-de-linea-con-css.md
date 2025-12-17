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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UBYWJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCL23zJpnH68Z69iSwfv9WUalvNwh%2BvvEtcskNdf8lZAiBDxhTaSBvyM%2BwtjQpAdm0U9hCYREQZ23ts3pfozzwS5yr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMaqHwU05zHmdrNUiKKtwDZezdsoqP%2FwceT8XaUVyppkTUVEAVOxXbENMTkqbHOLoqbPGeTou%2FouTkqLB1jId6llwmaz1NtICYQ1MXEGFKse7hIwC%2FzpvONAyDuvfXV3QXpfI1%2BS4ZBqJiYPwUPS5JKV5XPCUf91zzGlUWjt9XczWlSpqTJ7XBRs7Qm59ZA3OavhVYOsZ6QWlc%2FC%2Fsz7LLyuIbSPYGfcxJYD7pa0rZJX5avt7LiXtSLafcKL7GQgsSfDZ87gE9Lw8FhRM9TqQ87Y9ddSReLUo8cgaweW1F9jCNqh%2FjfPrTU4arOej4Ww0ALqQVEBTJKElpuBEqMm2vIHSzxkMEgCNf8v1xIeX87f%2BWS7dJe4s4%2BshqV3fSr2HJw2x%2Frhn9xLf46hD%2FpGqSFIGCj8YrkZ7vRvsNAVWvgv4%2F5KWJZsyFRw8cDX7qdqShPB2zDFUs1c78eQQ8upTatp157K77mqTnMJar%2BneMnekRfrsSQHJ5T%2Fuh9Lo9RbYYfz3it9ZGfn7eKajhsBwCyjW%2BrJSOnlOfoh16IN84HO2R27BUtKMF53uwnKlwa8jLkZsh%2F3bbN0cn%2BfzPEVxEE3vtZYWAXny%2BPxo%2F0ZMUt9k%2FCBRMYMDwHA5qtutuPWctSGn2NeKlg1L6H3QwouqIygY6pgEFCSGMs8A0DP5%2Bz1Yr0j2xUKJb7IGvD8MTeioJcy4woTswt8BK0IXJWxQK1ILTXT%2FvdxOYtta%2F0cmV7dHV7tz0%2FKygIXYV84ktRCnRrdMQpHCU4hnnfiGsBkokFcR2dsOsZOH%2FNKTbC9sR%2FDKVxInXvVqEEr7FODEyvrZa8Adniqu%2BUbCw3GTHNa3Dodt57VAHQ3oh2G%2BHrSMtC63i8UeNTvtNvxMT&X-Amz-Signature=b4a4aaa840bacc71b17b10a494f48af94300599440a9de4be1251daa534f84f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UBYWJJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCL23zJpnH68Z69iSwfv9WUalvNwh%2BvvEtcskNdf8lZAiBDxhTaSBvyM%2BwtjQpAdm0U9hCYREQZ23ts3pfozzwS5yr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMaqHwU05zHmdrNUiKKtwDZezdsoqP%2FwceT8XaUVyppkTUVEAVOxXbENMTkqbHOLoqbPGeTou%2FouTkqLB1jId6llwmaz1NtICYQ1MXEGFKse7hIwC%2FzpvONAyDuvfXV3QXpfI1%2BS4ZBqJiYPwUPS5JKV5XPCUf91zzGlUWjt9XczWlSpqTJ7XBRs7Qm59ZA3OavhVYOsZ6QWlc%2FC%2Fsz7LLyuIbSPYGfcxJYD7pa0rZJX5avt7LiXtSLafcKL7GQgsSfDZ87gE9Lw8FhRM9TqQ87Y9ddSReLUo8cgaweW1F9jCNqh%2FjfPrTU4arOej4Ww0ALqQVEBTJKElpuBEqMm2vIHSzxkMEgCNf8v1xIeX87f%2BWS7dJe4s4%2BshqV3fSr2HJw2x%2Frhn9xLf46hD%2FpGqSFIGCj8YrkZ7vRvsNAVWvgv4%2F5KWJZsyFRw8cDX7qdqShPB2zDFUs1c78eQQ8upTatp157K77mqTnMJar%2BneMnekRfrsSQHJ5T%2Fuh9Lo9RbYYfz3it9ZGfn7eKajhsBwCyjW%2BrJSOnlOfoh16IN84HO2R27BUtKMF53uwnKlwa8jLkZsh%2F3bbN0cn%2BfzPEVxEE3vtZYWAXny%2BPxo%2F0ZMUt9k%2FCBRMYMDwHA5qtutuPWctSGn2NeKlg1L6H3QwouqIygY6pgEFCSGMs8A0DP5%2Bz1Yr0j2xUKJb7IGvD8MTeioJcy4woTswt8BK0IXJWxQK1ILTXT%2FvdxOYtta%2F0cmV7dHV7tz0%2FKygIXYV84ktRCnRrdMQpHCU4hnnfiGsBkokFcR2dsOsZOH%2FNKTbC9sR%2FDKVxInXvVqEEr7FODEyvrZa8Adniqu%2BUbCw3GTHNa3Dodt57VAHQ3oh2G%2BHrSMtC63i8UeNTvtNvxMT&X-Amz-Signature=4a7c8540cce2649ca85a65630701afdd9ee1bc4dc7a0055dc79f63dec5b44e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

