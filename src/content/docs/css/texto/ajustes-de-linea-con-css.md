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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCVJSJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKreJBp1kxZSQRYlynPmgOoPCYkmR3DRXdwCzZ2JYPAiBZv%2FkUjsFuS2IG47Re6PH2mAR1j9MkVHrp62L5pjXkEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeK0g5KuejQIzlPeKtwDF8AIeJlvbWmAyxKSGsqCcjaZrt98jj8aby9GNRGct%2BRjvj4V1cjzMzJu6FPDVuToa0BLsv%2FiD%2BHC6q5yAxc3SibmeHi8xKUdWXEknEkG8Qw1miQ0OfZMcHL%2BGW%2FsoEfVZQyGMUfcSa%2FFY13I3SkwZrDqQily6aaE7A8tMX4tSPRH88X%2F5oSIotn5TauN2TkYe7w4Jq5HDH1kUvdabzPG9ucJUBhMlJ5MWDwsPCpAX7w5l1ak0vJ4YsHpc8oNgs9C5%2BQ3tJEg3YrlQnKhw8UmRWtauC%2BKW7phE%2FKmbu7N%2Fn9s0i5%2FKC9yR7lSZyGZtIhFDSSh5058Lhkhix5JJP%2Fo3maoNDU22FAtuxJvfRIy1dYa4whw%2FtWuRK866b7kcg7PLQfTw3jsaM%2BORBSSLpCEnguDdlgUOpRKzn%2BqL1AZTkeOESs86JCiQYdNvzqCJ6vMjwttswRG2wkfWDFeYqLM6QcoTbKH53buSFghv%2FN3UCOoPNRqpVb1ybzfivsI98CtWQNaYPQWxylxWeihtdRPBIukmIpKMLxlL%2FYzMEqTyCEiGR%2F%2F3n3W4bl%2F77AiBtNqt4DVpHkjJ9ds3YKYEiYqDPtihh21vL81eKODYdOgpTXgjDIPcRjT19avTRYwvp%2BLygY6pgEiaEAq4Xh1uNF3BFO1EN7hwUZT5M%2B88VufCB3eM32lVKu5oz%2FPlde5UQl4UOEtWVKA2keD0DIrVdoJzr05k4KsF%2FksW0CYr5yP%2FiWJpGEsOIn8bxezSzxFJc9EpfbfHmcD1I54uYg%2BhLPVE0emfKtDuzgzQOSYyBjNR%2F1csrfS6Ee5PkHgPhkLWvzzmSgCFpIjf4ePhDTjYdjpuIlj%2B%2FV3c8eJnvCT&X-Amz-Signature=960cd1369fcd69e79d3cbfd2dada4f4b9adff4290346a628416af6fb71f7f772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCVJSJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZKreJBp1kxZSQRYlynPmgOoPCYkmR3DRXdwCzZ2JYPAiBZv%2FkUjsFuS2IG47Re6PH2mAR1j9MkVHrp62L5pjXkEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeK0g5KuejQIzlPeKtwDF8AIeJlvbWmAyxKSGsqCcjaZrt98jj8aby9GNRGct%2BRjvj4V1cjzMzJu6FPDVuToa0BLsv%2FiD%2BHC6q5yAxc3SibmeHi8xKUdWXEknEkG8Qw1miQ0OfZMcHL%2BGW%2FsoEfVZQyGMUfcSa%2FFY13I3SkwZrDqQily6aaE7A8tMX4tSPRH88X%2F5oSIotn5TauN2TkYe7w4Jq5HDH1kUvdabzPG9ucJUBhMlJ5MWDwsPCpAX7w5l1ak0vJ4YsHpc8oNgs9C5%2BQ3tJEg3YrlQnKhw8UmRWtauC%2BKW7phE%2FKmbu7N%2Fn9s0i5%2FKC9yR7lSZyGZtIhFDSSh5058Lhkhix5JJP%2Fo3maoNDU22FAtuxJvfRIy1dYa4whw%2FtWuRK866b7kcg7PLQfTw3jsaM%2BORBSSLpCEnguDdlgUOpRKzn%2BqL1AZTkeOESs86JCiQYdNvzqCJ6vMjwttswRG2wkfWDFeYqLM6QcoTbKH53buSFghv%2FN3UCOoPNRqpVb1ybzfivsI98CtWQNaYPQWxylxWeihtdRPBIukmIpKMLxlL%2FYzMEqTyCEiGR%2F%2F3n3W4bl%2F77AiBtNqt4DVpHkjJ9ds3YKYEiYqDPtihh21vL81eKODYdOgpTXgjDIPcRjT19avTRYwvp%2BLygY6pgEiaEAq4Xh1uNF3BFO1EN7hwUZT5M%2B88VufCB3eM32lVKu5oz%2FPlde5UQl4UOEtWVKA2keD0DIrVdoJzr05k4KsF%2FksW0CYr5yP%2FiWJpGEsOIn8bxezSzxFJc9EpfbfHmcD1I54uYg%2BhLPVE0emfKtDuzgzQOSYyBjNR%2F1csrfS6Ee5PkHgPhkLWvzzmSgCFpIjf4ePhDTjYdjpuIlj%2B%2FV3c8eJnvCT&X-Amz-Signature=161d81b76038e8371788ca9a4b984dbe3ac647495366af8cbb9a99500c28b848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

