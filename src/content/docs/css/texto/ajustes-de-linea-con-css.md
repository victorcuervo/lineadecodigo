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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAB6QHOI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMY3DER3P3zVhGa04VOpI5B%2FYqHcpsdR2yHXBp6Gv0kAIhANSH29CCDMZcuIu3%2FNLeCGnAXJw%2Bf4Q1sIX%2F%2FmYi3ov2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8o0l3h0gdCj0zk%2FUq3AOms8GETSJcXRD9%2Bxas5YrxKybfwEFC6XrAch8kUQpgFtX%2BuAYAxPvrAjBkyhHR5EXfS4jyq6ulvkJARHxJDQ6gH%2F31tSTol6d4eKPJ6rJmT9CGLGQ4SHMz9RfgFMVt0aq%2FzHIwcL8sMDZGq87PEIpy3oaSFxd1TvI3GZ%2FvITW5AY5dagj6KpoD8u6YGewCe9tzUtASx3IMqUwgnGxeVBaJHfS9nRijIQUIkr8FnU%2FhT7hmVzfqGqxweJFFPreQlFUJDuj4sNabDtiMtk2oWqZR2mqI%2BZw8koOt0Q%2BowcudA%2F4QIhIvG4Z5EzR4QnVI1mgIq67fdc7i9oHPLMgykLSG6NzvLD2QrADVA%2BUsr1CyMB8ZCUfuZeec%2By36u%2F6BcKUBUO4PY6aiqcI8eOKwfb0lmlLOKFPB1vM77DnY6r7%2F7JK%2FA5jMHoXrXmSzSRtMQCngstyU4bI8bDmz1CEENMzvrGIpOxNcldoJwfQtgP5wFnktXv6%2Blv2FFydrXY9vdwUR%2Bt%2FgebpOfQn3P4mWqjjZNoT9%2BWqfgptlNvqtVr7wAZqI2tMZV79WuD%2BVLSz93seVc676kn7CRBq%2FEJzUUWeUfE9o4dqXwk9Ab9ju3%2B%2B56WAM699nIs9ILu9xWzCPgovKBjqkAaG1CUDfzTfYAz0sB%2FALaoGLqi%2FMztY7dlDG19alh3uGKSm%2BikDXJxXMrT94quTrtrkEElmK%2FIBRlflPru70rnfgQdqqfZON5Bt%2FRxamSvIhaCjHmDHu%2Fh6e8ifbUHpoPPFwoQumwpdqUEzRrgIIoD762IpY0f0bBylv2BEepMqa7W51XsoTB3ZZbckjlsIiqt%2FH%2BjkyOJC72LWamWqMtB8VDn0Y&X-Amz-Signature=4b6ab664063fd2f35a53cc4e75032505aa0f5f5e4d3c02b7440a4b4fe1f4d8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAB6QHOI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMY3DER3P3zVhGa04VOpI5B%2FYqHcpsdR2yHXBp6Gv0kAIhANSH29CCDMZcuIu3%2FNLeCGnAXJw%2Bf4Q1sIX%2F%2FmYi3ov2KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8o0l3h0gdCj0zk%2FUq3AOms8GETSJcXRD9%2Bxas5YrxKybfwEFC6XrAch8kUQpgFtX%2BuAYAxPvrAjBkyhHR5EXfS4jyq6ulvkJARHxJDQ6gH%2F31tSTol6d4eKPJ6rJmT9CGLGQ4SHMz9RfgFMVt0aq%2FzHIwcL8sMDZGq87PEIpy3oaSFxd1TvI3GZ%2FvITW5AY5dagj6KpoD8u6YGewCe9tzUtASx3IMqUwgnGxeVBaJHfS9nRijIQUIkr8FnU%2FhT7hmVzfqGqxweJFFPreQlFUJDuj4sNabDtiMtk2oWqZR2mqI%2BZw8koOt0Q%2BowcudA%2F4QIhIvG4Z5EzR4QnVI1mgIq67fdc7i9oHPLMgykLSG6NzvLD2QrADVA%2BUsr1CyMB8ZCUfuZeec%2By36u%2F6BcKUBUO4PY6aiqcI8eOKwfb0lmlLOKFPB1vM77DnY6r7%2F7JK%2FA5jMHoXrXmSzSRtMQCngstyU4bI8bDmz1CEENMzvrGIpOxNcldoJwfQtgP5wFnktXv6%2Blv2FFydrXY9vdwUR%2Bt%2FgebpOfQn3P4mWqjjZNoT9%2BWqfgptlNvqtVr7wAZqI2tMZV79WuD%2BVLSz93seVc676kn7CRBq%2FEJzUUWeUfE9o4dqXwk9Ab9ju3%2B%2B56WAM699nIs9ILu9xWzCPgovKBjqkAaG1CUDfzTfYAz0sB%2FALaoGLqi%2FMztY7dlDG19alh3uGKSm%2BikDXJxXMrT94quTrtrkEElmK%2FIBRlflPru70rnfgQdqqfZON5Bt%2FRxamSvIhaCjHmDHu%2Fh6e8ifbUHpoPPFwoQumwpdqUEzRrgIIoD762IpY0f0bBylv2BEepMqa7W51XsoTB3ZZbckjlsIiqt%2FH%2BjkyOJC72LWamWqMtB8VDn0Y&X-Amz-Signature=963be44cc5b9452b7fdef4bb818c67411931ef3ca0f7a2e41c3d6501dcdf4652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

