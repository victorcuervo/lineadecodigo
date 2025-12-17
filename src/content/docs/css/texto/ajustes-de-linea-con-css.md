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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGZOHQB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwNkG7U%2FUpazqGqLWUp0pAjcH%2FE5QTVT11Ngs051trgIhAJJ5ZK75zeTV1EoH4dORzo8ouCQSd9Acu9DQ8b6Y7xDKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9DJFLXislWPH4D5oq3ANIybPxZK9JIwgPXy%2FhYqrKYN3%2BUBJCAB4Zkiu5MxH9jG5%2BIopT0Bqhsfqw26Dg%2Bu%2BGKxiOqy4hEV6nzqhuES6Eld8iykgsnFXiv5OXSSeH%2BvaMpjtzdCAgR9tesPsS4P4F6F46FjkXkWJLBxsdYxZ26k45lJpgmptHzGH9M5FnBGsWDitWk8aCP7rOh85C80JSsfWacgU9QKUAYv1R9YxP6j1k3ZCSf4xXRXGx6JA0mzrpHmyl%2FUeZY%2BIo7uqnr%2FvHQureQsX850qYzJaltcIA%2By%2B%2BL9Oo4yBfEzOkRDICqWA%2Ft%2FWvsrblhMAtPFQRXlN6fdYdi2vAY8ZBOeDbYG0vFuPvWn5KnWGz97Bg1BzXECNtc9jvOZUjduTykO9GgWSVdZUbalVXBLYdqWT1ukVlYdntihDRUYV%2BXHLmQXqXSzbNpThnWbAtDISKMAhiVYJbB4%2Fbe5yhe2JPK8T6yEzIlKzLt11CpLnQzT5PVaRiJ%2BaFMpn2mOOUwZEJuPxVxt5yxtV5mFKcHIEtGc43kOlntiSrVTA7H5EM7gw%2FgngkxcUTFYaicjzSennhBNtq%2BE9dy2LGbBGloMN2i0OcucDB13aN%2BTK%2BERS6p%2F8AD8xLoVS7htYKzqGXJg3dRzCprozKBjqkAdiPtPKKI9SpyvDlIkjCB4dIJw5dVh7twtXhD1Jj32SFqA5RpwXdpWQ44VqHjACEBHJ6rGfIy3R3ColiLBDKKJXndNNygMx1HxEB22w%2BbRWwuiJb1ZmnoPHzzhHRFqnFIp8yo2OkrJAibqmSQjiakMYSqoamJGQk0HJDlDD29HZspniew3FqL2X5HTkVkKDBX8HxYS0ClvCj%2FtvyE0dFIvNA4OPv&X-Amz-Signature=41deb977bbc66d95c57d831f9aaee40bd65c58de7273716666b51d051e6198ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGZOHQB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxwNkG7U%2FUpazqGqLWUp0pAjcH%2FE5QTVT11Ngs051trgIhAJJ5ZK75zeTV1EoH4dORzo8ouCQSd9Acu9DQ8b6Y7xDKKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9DJFLXislWPH4D5oq3ANIybPxZK9JIwgPXy%2FhYqrKYN3%2BUBJCAB4Zkiu5MxH9jG5%2BIopT0Bqhsfqw26Dg%2Bu%2BGKxiOqy4hEV6nzqhuES6Eld8iykgsnFXiv5OXSSeH%2BvaMpjtzdCAgR9tesPsS4P4F6F46FjkXkWJLBxsdYxZ26k45lJpgmptHzGH9M5FnBGsWDitWk8aCP7rOh85C80JSsfWacgU9QKUAYv1R9YxP6j1k3ZCSf4xXRXGx6JA0mzrpHmyl%2FUeZY%2BIo7uqnr%2FvHQureQsX850qYzJaltcIA%2By%2B%2BL9Oo4yBfEzOkRDICqWA%2Ft%2FWvsrblhMAtPFQRXlN6fdYdi2vAY8ZBOeDbYG0vFuPvWn5KnWGz97Bg1BzXECNtc9jvOZUjduTykO9GgWSVdZUbalVXBLYdqWT1ukVlYdntihDRUYV%2BXHLmQXqXSzbNpThnWbAtDISKMAhiVYJbB4%2Fbe5yhe2JPK8T6yEzIlKzLt11CpLnQzT5PVaRiJ%2BaFMpn2mOOUwZEJuPxVxt5yxtV5mFKcHIEtGc43kOlntiSrVTA7H5EM7gw%2FgngkxcUTFYaicjzSennhBNtq%2BE9dy2LGbBGloMN2i0OcucDB13aN%2BTK%2BERS6p%2F8AD8xLoVS7htYKzqGXJg3dRzCprozKBjqkAdiPtPKKI9SpyvDlIkjCB4dIJw5dVh7twtXhD1Jj32SFqA5RpwXdpWQ44VqHjACEBHJ6rGfIy3R3ColiLBDKKJXndNNygMx1HxEB22w%2BbRWwuiJb1ZmnoPHzzhHRFqnFIp8yo2OkrJAibqmSQjiakMYSqoamJGQk0HJDlDD29HZspniew3FqL2X5HTkVkKDBX8HxYS0ClvCj%2FtvyE0dFIvNA4OPv&X-Amz-Signature=fe06bbe5637da805dc7401f8c0509870cbce016b480959d6dd4feae8b35da0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

