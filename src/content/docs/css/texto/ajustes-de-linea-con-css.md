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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWU4O55M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiP3jZIT%2FaFupOSOKMuVsGZJRteIWVdoNpBBGltWc9FAiArHyH%2FeiCmbWOAjnOW1YiP31DMmSHTTjaUQp4colTRnCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMhjbVnXEebYZaLhxKKtwDSXUGqWau1YJdh5xSXSDA8JSmWT6NdV3p8sBxLanvcqGHjjyrxCgxGaL%2FPkxkzAeiNDONwVIO%2BklSjKAjyIirhbRcr3sim2uqrkVdETEMUNMNji8WL2bFUED%2FEmvJ%2BYqZMlsmATcxaqxTeAEnxEQ8n0mK3nEoQD1XnK1XBaIJOE4Arx1K2KsEYd2%2FEgoNQmAFHNrqCD%2B%2Fq7CZNKW%2BSiRwxhzfMqB4avuZVzMmk6Z9eOWcJ2FzFvRtNgGxLs7cnpwdLwaSNj%2FgTagCu2REfkR3RCvGphDC1sHiZ8%2FFR4ehhyPYzAUN2kF4Rh1r5123kAHzbm7IWEGomSK221bKisnYQkMVQR7YCkGNMXFL0ZhxGF0TET5dwEKZPx%2BOjeemkBCEoK6PA8wvSNfYHZ1HmcpfXhcrTQN8%2BD3mWEPCjwOIh75GGUz5uFfF2u1mfl3fOkZqhDKOGhOun0JnhDEECzM0naxnHO%2F18H1rNvGhP6TLiHuZlT%2BTfHBI3%2FuF4m8O1S7w5GZ2l3pU%2FSvL5%2Bo44RzOgm1B2n7adMJ75XMjE3ciH18XgxUrKWxrUxJ%2Fka0EoJ848%2FPtrYQVdNKWgOtM2%2FNfmxRpnyAyWUaqn7WChUCkt%2Fmv5eNHAnAoaNsyBMAw9OGKygY6pgFHhOBCNVFdHxJmAsGBQw98WZbsEUBRjYPuGIBuye1WKMX3b%2Bt7ayMs028VL%2FsH%2FVkUnmn13%2BlkRKJBiltGfo8r2LptGHU33loDBUbk8tKQ1%2FgcGbdqAkKMfa9oFcaZYdH8L7cVxEioeVRGP4SAImoKiBnVCQjYyyo6Bqm33G3H%2BECTFCj4QaZATIzXkO%2FqPU2EgANR3n86e9An0pfphgUfP9dAE5ck&X-Amz-Signature=a03dbfc7d1773585b072be166b7e1a2666785070ed0d9e63f69e46a7a2f1ddd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWU4O55M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiP3jZIT%2FaFupOSOKMuVsGZJRteIWVdoNpBBGltWc9FAiArHyH%2FeiCmbWOAjnOW1YiP31DMmSHTTjaUQp4colTRnCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMhjbVnXEebYZaLhxKKtwDSXUGqWau1YJdh5xSXSDA8JSmWT6NdV3p8sBxLanvcqGHjjyrxCgxGaL%2FPkxkzAeiNDONwVIO%2BklSjKAjyIirhbRcr3sim2uqrkVdETEMUNMNji8WL2bFUED%2FEmvJ%2BYqZMlsmATcxaqxTeAEnxEQ8n0mK3nEoQD1XnK1XBaIJOE4Arx1K2KsEYd2%2FEgoNQmAFHNrqCD%2B%2Fq7CZNKW%2BSiRwxhzfMqB4avuZVzMmk6Z9eOWcJ2FzFvRtNgGxLs7cnpwdLwaSNj%2FgTagCu2REfkR3RCvGphDC1sHiZ8%2FFR4ehhyPYzAUN2kF4Rh1r5123kAHzbm7IWEGomSK221bKisnYQkMVQR7YCkGNMXFL0ZhxGF0TET5dwEKZPx%2BOjeemkBCEoK6PA8wvSNfYHZ1HmcpfXhcrTQN8%2BD3mWEPCjwOIh75GGUz5uFfF2u1mfl3fOkZqhDKOGhOun0JnhDEECzM0naxnHO%2F18H1rNvGhP6TLiHuZlT%2BTfHBI3%2FuF4m8O1S7w5GZ2l3pU%2FSvL5%2Bo44RzOgm1B2n7adMJ75XMjE3ciH18XgxUrKWxrUxJ%2Fka0EoJ848%2FPtrYQVdNKWgOtM2%2FNfmxRpnyAyWUaqn7WChUCkt%2Fmv5eNHAnAoaNsyBMAw9OGKygY6pgFHhOBCNVFdHxJmAsGBQw98WZbsEUBRjYPuGIBuye1WKMX3b%2Bt7ayMs028VL%2FsH%2FVkUnmn13%2BlkRKJBiltGfo8r2LptGHU33loDBUbk8tKQ1%2FgcGbdqAkKMfa9oFcaZYdH8L7cVxEioeVRGP4SAImoKiBnVCQjYyyo6Bqm33G3H%2BECTFCj4QaZATIzXkO%2FqPU2EgANR3n86e9An0pfphgUfP9dAE5ck&X-Amz-Signature=8f21eaee8ecc4623eacb72e70a2552847083ef97646d0370bf2efcfa36a9829d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

