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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ2MZGR4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKo9rNunoQpuH5n9KSGi5IJPxEERKSdQgqck3D5WoajwIhAKYTuAQzFD91LwveWDOfVMvHe3XryCQJzvVwX4K44NaCKv8DCHkQABoMNjM3NDIzMTgzODA1IgwwrpG1JmxLdmocetMq3AMnG%2Fu2OwbcKhGNejArRB%2Bla%2Fyv5UlJneeWCl0oVH4VLJJbKvWB035u%2BzeKA392WbRolm%2FPRFHsb0AsRDwfrtDVemTPpADsvisbdPddMxCGeiUFz4NGJJJQneUlcs3TCt11DWxMcx8NWI6EScyb2Zi7ZoUD%2FP%2BSba3r0GkASmdpIiwYkoRcuMo1qeNAza5NB4mIDnEJrQ%2FayiqXinq8bqd0bk79Os45PpENcnZ%2FnVP42A0vI1h%2Bm8qM5fjrQZGlGlTYctvbt3kMqCwKxeDvXfSG7jGEDd2r7AFq2uwjDNhZyUCkLa8axWhBREYOHsuNmoE7o5ao2QdUMzQ7KUvpO0DjMBZzYVJPDmw%2FRiTUqKaPWomKi8S99coDZ241QtFr%2Bhy%2FE9QlC2PUJjmGsoRq3RR4WX7ykDD9qOnqLOQaetAF6tGniPAWktk9QCOwL0nuk0bb20hju88IfqmpQUvUUJ0qjgXQ4tRH3AuRgz7DZNNdSS9A24Fp2SFeU4EY9rYSCA7t4iyiQEfuQ0Sjib%2FA%2FrTsxVbxEe8db3Tn9XKbwdFd9EclVEu2vmqpdmc%2FqdTlnMY%2BxLbiTNitHcfVAspUXAgjfF2K9q%2F%2FcYR6u3%2F9KD%2BXzCduBxb7Vuy%2F88aaoDCQt4nKBjqkAZP0MOQgPHweDFAfzbuwurIANO578IK6FKvDXN3AUmRaLI4MP9qd3XwKPtmn8mdSRdZo0Os5U6hRT72wrNAhja47mLXX0sUO9n%2FAZvxEScMt9BWvg03Pf6KvTBWNIRx1E4oJkIQayWj%2FI9vqsgLsHjVfAFeg%2Fwh4P6GwJ1Ijp7aOzttpgz8ZB7zVlorz9jUaFOpFwAmQdiuSa6DFkKKa1ZLIx5UD&X-Amz-Signature=4d90f7d07501326ca4c572dd6800ff57c355426f47ca0a5dff49a62c91468f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ2MZGR4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKo9rNunoQpuH5n9KSGi5IJPxEERKSdQgqck3D5WoajwIhAKYTuAQzFD91LwveWDOfVMvHe3XryCQJzvVwX4K44NaCKv8DCHkQABoMNjM3NDIzMTgzODA1IgwwrpG1JmxLdmocetMq3AMnG%2Fu2OwbcKhGNejArRB%2Bla%2Fyv5UlJneeWCl0oVH4VLJJbKvWB035u%2BzeKA392WbRolm%2FPRFHsb0AsRDwfrtDVemTPpADsvisbdPddMxCGeiUFz4NGJJJQneUlcs3TCt11DWxMcx8NWI6EScyb2Zi7ZoUD%2FP%2BSba3r0GkASmdpIiwYkoRcuMo1qeNAza5NB4mIDnEJrQ%2FayiqXinq8bqd0bk79Os45PpENcnZ%2FnVP42A0vI1h%2Bm8qM5fjrQZGlGlTYctvbt3kMqCwKxeDvXfSG7jGEDd2r7AFq2uwjDNhZyUCkLa8axWhBREYOHsuNmoE7o5ao2QdUMzQ7KUvpO0DjMBZzYVJPDmw%2FRiTUqKaPWomKi8S99coDZ241QtFr%2Bhy%2FE9QlC2PUJjmGsoRq3RR4WX7ykDD9qOnqLOQaetAF6tGniPAWktk9QCOwL0nuk0bb20hju88IfqmpQUvUUJ0qjgXQ4tRH3AuRgz7DZNNdSS9A24Fp2SFeU4EY9rYSCA7t4iyiQEfuQ0Sjib%2FA%2FrTsxVbxEe8db3Tn9XKbwdFd9EclVEu2vmqpdmc%2FqdTlnMY%2BxLbiTNitHcfVAspUXAgjfF2K9q%2F%2FcYR6u3%2F9KD%2BXzCduBxb7Vuy%2F88aaoDCQt4nKBjqkAZP0MOQgPHweDFAfzbuwurIANO578IK6FKvDXN3AUmRaLI4MP9qd3XwKPtmn8mdSRdZo0Os5U6hRT72wrNAhja47mLXX0sUO9n%2FAZvxEScMt9BWvg03Pf6KvTBWNIRx1E4oJkIQayWj%2FI9vqsgLsHjVfAFeg%2Fwh4P6GwJ1Ijp7aOzttpgz8ZB7zVlorz9jUaFOpFwAmQdiuSa6DFkKKa1ZLIx5UD&X-Amz-Signature=b23a1712e29e10b44feb03fe732ec4efcc4f70e6603adeaf27ee852924021e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

