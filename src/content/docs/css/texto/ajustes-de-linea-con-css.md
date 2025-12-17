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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS4UAQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGG10dH53re%2F9Y2h2gertlC9aFs0V%2B3vejfIvClep6VAiA5VFYgAJ7gFBzRiQsbx4UJziq47H1O1yWX9z7gQZoD0yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxZtCc0YmEw3NPm1IKtwDrXCOhpP2ii8LEDAuf%2FQTucpJGLMXsZHFpL86%2FnXZk69ywZYU7nl6oE1E3cuXguL48mx0%2B2szYQXSITqhkKnD6jhmHw9Pt%2B3njwYf3FtLC5oDsGEc77GgUS%2Fk0uQaHfRAx7l%2FSvn94KKIL2xe%2FQvFYC%2B3%2FDpRIQFWoCoi%2F7WDSWuW5NEtwDke%2BhjOzGZNJwZ1dyAYDKCivAl%2FWG52xWRtsPbluoqdv2ZVOmkspxJxM8jKom2XoaPwv7w%2F5c%2BADuWi8S6V7A74elrRldF8O12UwI9OryClKLOui8FJ3g6peoQxLGnnlTZlLS41aB4%2FhKTeuZYs95C4M4muhBpYEMWenFnOw%2FLhJJmhvb%2Famxm6NOlJ139tTRUk0mhMUENLdzsYoL8B4XFx9HdJr2gctYGakxOaNA2nm2d4Y4szlGuFFca2IeBkLavgyKE%2FcA7wbwDTyCyi3Kf1jelYiEeywHqGh7Rk3m0aMvKOiUXInqo4t2h9oisaLWydD5bZy7CBEVVbFsO9qSB%2BqEPGjpNrQu0a2zbTI57tgqn6yl4NYZxetOnNagkvWgSKc50DBhtZGaxeuSGxu5cH8Ij4y%2FJ9bdR7b%2Fqmuj1Zs8wCQKxLbZ8ca9jxte8FkyZPSWw%2BBKMwv5aIygY6pgE1dOcB2qOuQY0e%2Fw35S31RU1TIX76hj0c7jSGQa2199FC8Rx5pp8NcTn8z7873aPLUp2ulnyuECU%2FB%2Bj%2BiuZjnc63wKDiqCOiK0nKeyqdVBl1NlSAZ1AjRoZoP0eRVkxMxociVRvAfks8j8zqIownx2pdSMRDSx9wgN3Rk%2FcfT%2FqvzaT5RgBhHw%2BluwyoL%2FuF7FDNiYQ943lbKLhCIbZ1oeYOMcHJX&X-Amz-Signature=aa4f57c01dc276db9b1a43ac89eb92e15545382bc4b8ffd8be879f2b19fbc65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS4UAQC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGG10dH53re%2F9Y2h2gertlC9aFs0V%2B3vejfIvClep6VAiA5VFYgAJ7gFBzRiQsbx4UJziq47H1O1yWX9z7gQZoD0yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMxZtCc0YmEw3NPm1IKtwDrXCOhpP2ii8LEDAuf%2FQTucpJGLMXsZHFpL86%2FnXZk69ywZYU7nl6oE1E3cuXguL48mx0%2B2szYQXSITqhkKnD6jhmHw9Pt%2B3njwYf3FtLC5oDsGEc77GgUS%2Fk0uQaHfRAx7l%2FSvn94KKIL2xe%2FQvFYC%2B3%2FDpRIQFWoCoi%2F7WDSWuW5NEtwDke%2BhjOzGZNJwZ1dyAYDKCivAl%2FWG52xWRtsPbluoqdv2ZVOmkspxJxM8jKom2XoaPwv7w%2F5c%2BADuWi8S6V7A74elrRldF8O12UwI9OryClKLOui8FJ3g6peoQxLGnnlTZlLS41aB4%2FhKTeuZYs95C4M4muhBpYEMWenFnOw%2FLhJJmhvb%2Famxm6NOlJ139tTRUk0mhMUENLdzsYoL8B4XFx9HdJr2gctYGakxOaNA2nm2d4Y4szlGuFFca2IeBkLavgyKE%2FcA7wbwDTyCyi3Kf1jelYiEeywHqGh7Rk3m0aMvKOiUXInqo4t2h9oisaLWydD5bZy7CBEVVbFsO9qSB%2BqEPGjpNrQu0a2zbTI57tgqn6yl4NYZxetOnNagkvWgSKc50DBhtZGaxeuSGxu5cH8Ij4y%2FJ9bdR7b%2Fqmuj1Zs8wCQKxLbZ8ca9jxte8FkyZPSWw%2BBKMwv5aIygY6pgE1dOcB2qOuQY0e%2Fw35S31RU1TIX76hj0c7jSGQa2199FC8Rx5pp8NcTn8z7873aPLUp2ulnyuECU%2FB%2Bj%2BiuZjnc63wKDiqCOiK0nKeyqdVBl1NlSAZ1AjRoZoP0eRVkxMxociVRvAfks8j8zqIownx2pdSMRDSx9wgN3Rk%2FcfT%2FqvzaT5RgBhHw%2BluwyoL%2FuF7FDNiYQ943lbKLhCIbZ1oeYOMcHJX&X-Amz-Signature=eaaf57520e20da0f37fc30fa7f294cd40dc46ad3e39e9c6c81a568df4f65907f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

