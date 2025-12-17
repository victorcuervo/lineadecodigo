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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5ZYBIL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfXj6JIWW%2Bifs7eqLM2GbvpCkGQ4FnGpojFUZBudx4HQIhAMzfzJDxyZNA2G0qh7IeVlwAM5jEtMAYvU%2FmTT01NS2pKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGVK9D4wCtCMyZ30q3ANpK%2BC%2FqVUlol0K2GMbGGHdKbyWTc4zLaj5Q0o4wkIYPfKOKgeENB77MQPzEzaqTddxTzfuzWuaTNM3WpaXmCCY0eWk583BYJteR2oy4g8mFFyj30ug5AZhBd1X6DaZcJtWvWa5fEsDOmGhYEonKTuzj9q93J4wUsIcsdZaMuS1eOxt0ZDX6dttP5HXDDyvDTQMhSCLmRgWFoWeNIkzGCaNAum87zQcS%2FLWD8FUILnkNoHDqUxjSG%2FWbHR%2FRljZegJndCID5fl4iF5rncKuQJTNyYupg7Lal%2FNgiHy8MOF0Vs4XPRp2z0vQsANpdM7ZX9YBJW5DwmQ6H4MdeE1DSuOFZCFJlgb9WdNWHTQUNmqclQv%2B8DLFmJY1SVH9utZLfWPIo9%2FZoM4YqDdieXxUI3%2FhCAQIJxZlyLp2nou9uo6ssS9RpJVCL%2Bvz8f9zQfmsFVOySRxVLf4Cfd6F4c5dnukkWW849OjZNmsWwZi6pz6w5qYc6rxk4RwN660MxH0%2BbLLDiZRRsZ40Pkas6yYzFUUrRxms9CgDDZ7nORJm1x2i0s%2BHsW4zdOGmApSQn3FQc57KZRIYaScejolLKu%2BIRBBQqRbC%2B85VKtL%2F9Gvcz47sqPY2gPytpbbhqP6fPzCJjIzKBjqkASq%2B4Z7Qkrrw6RJhertb8FiI%2BdbGKMqdkG1tc5xmYcazVhBH5R2cJaepIq0Skc2ZTa6annJoTPDq0%2F7%2FpfU4zjbOcWBBjQRCiSqC0z6WKxgHQKMmO%2FikZWJA5dsmeKIYQxVl7dRxg51XW%2BM494GvmD1VMew8OePI6lDqGfWLMymVkH25k%2BMP9TCIu9lu3q39wRrqPX7niwXEkAqE2Smys8vog844&X-Amz-Signature=1804ee1829a7fa028eccf2e7bff1cd155a6edb79108658e8b7ca91e3a4bb1432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN5ZYBIL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfXj6JIWW%2Bifs7eqLM2GbvpCkGQ4FnGpojFUZBudx4HQIhAMzfzJDxyZNA2G0qh7IeVlwAM5jEtMAYvU%2FmTT01NS2pKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPGVK9D4wCtCMyZ30q3ANpK%2BC%2FqVUlol0K2GMbGGHdKbyWTc4zLaj5Q0o4wkIYPfKOKgeENB77MQPzEzaqTddxTzfuzWuaTNM3WpaXmCCY0eWk583BYJteR2oy4g8mFFyj30ug5AZhBd1X6DaZcJtWvWa5fEsDOmGhYEonKTuzj9q93J4wUsIcsdZaMuS1eOxt0ZDX6dttP5HXDDyvDTQMhSCLmRgWFoWeNIkzGCaNAum87zQcS%2FLWD8FUILnkNoHDqUxjSG%2FWbHR%2FRljZegJndCID5fl4iF5rncKuQJTNyYupg7Lal%2FNgiHy8MOF0Vs4XPRp2z0vQsANpdM7ZX9YBJW5DwmQ6H4MdeE1DSuOFZCFJlgb9WdNWHTQUNmqclQv%2B8DLFmJY1SVH9utZLfWPIo9%2FZoM4YqDdieXxUI3%2FhCAQIJxZlyLp2nou9uo6ssS9RpJVCL%2Bvz8f9zQfmsFVOySRxVLf4Cfd6F4c5dnukkWW849OjZNmsWwZi6pz6w5qYc6rxk4RwN660MxH0%2BbLLDiZRRsZ40Pkas6yYzFUUrRxms9CgDDZ7nORJm1x2i0s%2BHsW4zdOGmApSQn3FQc57KZRIYaScejolLKu%2BIRBBQqRbC%2B85VKtL%2F9Gvcz47sqPY2gPytpbbhqP6fPzCJjIzKBjqkASq%2B4Z7Qkrrw6RJhertb8FiI%2BdbGKMqdkG1tc5xmYcazVhBH5R2cJaepIq0Skc2ZTa6annJoTPDq0%2F7%2FpfU4zjbOcWBBjQRCiSqC0z6WKxgHQKMmO%2FikZWJA5dsmeKIYQxVl7dRxg51XW%2BM494GvmD1VMew8OePI6lDqGfWLMymVkH25k%2BMP9TCIu9lu3q39wRrqPX7niwXEkAqE2Smys8vog844&X-Amz-Signature=f82c9af3bc93d1c5ceaa69be943a6a685b4a44ed0abf0d400e8dcbf0aeea864e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

