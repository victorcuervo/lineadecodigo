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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5R2DF6Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuyDSwyKTb3qi7w%2FXdv%2Bh0Yhk5x0IwgCdmGCDoRM9s0AiEAnRMjcDL9v2N3RHVFLmYl1VV01nm%2BQY0AihDdcpk5Lsgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEndhFfUxjCJgxvUxSrcA8PQyMXLJlnMegeuDOkKFr0B8ax4TRhF6QJxL5U8J0WbJCFHrVD331eVuLyXO6g5krbmWSbE1jNvRjIOId7dnFQ6YQAGsmf2pfc5MDNLGFzvujSur1amwpZ8cSofhWbalD%2FFUc6UqE5LxeMr1oyWyoC7RcOd2thCxTXAv%2FsY%2FQT32xhM8Z%2F3Xckn0wB0tOUBcV%2F6nCJkU%2FsckTrHYtf3pb5gSYLv6xR5j3g%2F6Zo%2BdIXrZfGU37gR0Jwm2n7evPi6SWmw6V2Dn5nfHyryLgdeOYwWwCR3%2F7w9cVMRciJt6dzZVomnj0OQ8YNrj7pf30by5mbdzVeZpPsO%2F2XR7w1m0s%2BO6HLuX%2FPxyDVAda%2BZXKC%2BaI0VHM0AcTYkd0WnpkgzR5Rh7X78pmqOY7w5xmPl9tmbDxZ6NtkmD6CeUg1p%2F7UM3sIu8qPJ%2FnEgRBEjCeM4v8jc%2FUz2%2FCNfQgemidl8tF4BSIMHv%2FtC%2FtD2AvkMl3Ro%2BLqf%2BpLKfNDtoA2hbl0l4KMBYzgIU45sTaMobpuR7nSVujLo9GLiOdl0p%2B0IRRClotCoKVa82iZ2l27XeIk6GJLqOLrMljir3R%2BDXzYfdirs3auN4g8objYaQ8EPMIWxIawckJ9zk5jAwThwMLudicoGOqUBT9OVk4%2Bb6yEPoOg%2BxXsF115uzdrAw7Kl4kUOz02oZQzz%2BUqs0LAkJU0ZT5M5%2FXySikAx2wcCi2WV9domt18oyW3r0My%2B0rVEBmYJrNMpzMkL09r%2BT%2BWb0fTlv7yWaY7QGm3JAt46TaeS6qI4bFVsg%2BlyAlWd4lPnyZv1STSKlsyv%2BRUkcEbe0JPZRoLiFboURDNdVqqr7P3O1i%2BZ0CvRIwoz7dsC&X-Amz-Signature=5d53bacae444f4bcfbdfebebaf9833f0bead61729e596143bb6308b989a45281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5R2DF6Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuyDSwyKTb3qi7w%2FXdv%2Bh0Yhk5x0IwgCdmGCDoRM9s0AiEAnRMjcDL9v2N3RHVFLmYl1VV01nm%2BQY0AihDdcpk5Lsgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEndhFfUxjCJgxvUxSrcA8PQyMXLJlnMegeuDOkKFr0B8ax4TRhF6QJxL5U8J0WbJCFHrVD331eVuLyXO6g5krbmWSbE1jNvRjIOId7dnFQ6YQAGsmf2pfc5MDNLGFzvujSur1amwpZ8cSofhWbalD%2FFUc6UqE5LxeMr1oyWyoC7RcOd2thCxTXAv%2FsY%2FQT32xhM8Z%2F3Xckn0wB0tOUBcV%2F6nCJkU%2FsckTrHYtf3pb5gSYLv6xR5j3g%2F6Zo%2BdIXrZfGU37gR0Jwm2n7evPi6SWmw6V2Dn5nfHyryLgdeOYwWwCR3%2F7w9cVMRciJt6dzZVomnj0OQ8YNrj7pf30by5mbdzVeZpPsO%2F2XR7w1m0s%2BO6HLuX%2FPxyDVAda%2BZXKC%2BaI0VHM0AcTYkd0WnpkgzR5Rh7X78pmqOY7w5xmPl9tmbDxZ6NtkmD6CeUg1p%2F7UM3sIu8qPJ%2FnEgRBEjCeM4v8jc%2FUz2%2FCNfQgemidl8tF4BSIMHv%2FtC%2FtD2AvkMl3Ro%2BLqf%2BpLKfNDtoA2hbl0l4KMBYzgIU45sTaMobpuR7nSVujLo9GLiOdl0p%2B0IRRClotCoKVa82iZ2l27XeIk6GJLqOLrMljir3R%2BDXzYfdirs3auN4g8objYaQ8EPMIWxIawckJ9zk5jAwThwMLudicoGOqUBT9OVk4%2Bb6yEPoOg%2BxXsF115uzdrAw7Kl4kUOz02oZQzz%2BUqs0LAkJU0ZT5M5%2FXySikAx2wcCi2WV9domt18oyW3r0My%2B0rVEBmYJrNMpzMkL09r%2BT%2BWb0fTlv7yWaY7QGm3JAt46TaeS6qI4bFVsg%2BlyAlWd4lPnyZv1STSKlsyv%2BRUkcEbe0JPZRoLiFboURDNdVqqr7P3O1i%2BZ0CvRIwoz7dsC&X-Amz-Signature=aa5d36851b57681c3dfa7cb97d9c4007b89691d23b42bafed16c14894a6c1cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

