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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4MFMOOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXjtZPEcXPzxIPioaTNnCVhLbLhzzvWddhLWP8WivW6AiAmQA91rH7hAIF3%2FPOqPLl%2BIcCnuPYYRvNNKHyudYTq1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCjPtyzrPxcQL5hdKtwDKxW3IBN%2BhVd0aJ3WUHpmAgBJgHDBtkArL%2Fzc0bsGeGY2WyhzdIDeWEpM0y7aMTns0JvD89bcrFy%2BeNa2ZLfJ6xmKVMyc%2FUAbhdmi4%2BvG3IalN72y10vPWxOdh2lLZthNwHN9d99vghY0Q7BDoWYmPLO4wnICLbT01y5CH9VKBHets031Frhn4qR8Z7hIzFDlM5Lh7%2BHnp%2Bg9uXAXDvWpJEAZrGKdYf9HipFukKzGvf%2BAKr%2FAumzJH%2FqzZWzsQazt7V4ZsGaufNlSuaofyqbYnwul5cXRmvAh0g75EJQ5yKqugxUBHJ5MJKJD%2B3OIAqGgm2C3BzTN3%2BSnysZMaBhEVMR%2FJqijctsQridBr8ryUTpnoL%2FkXEgNuN7CbRuUVsEkRhUIZ73vIa%2BcXSnUywi3xeOy%2FzjO4%2FCkXE0icWmDrHfGLVvalXaGLC3idebftbzFbZ3uNjZ4jsWlHUIe6rgyQ7kFGdwWcTkzfvyc93tXMEETq7lY5XI2mU%2F2Zu04SVihHl5t%2F0qMMVDlmTbxWxWcfYngMY17Ar7tUlkFVI49fR4hziGItSlTlWFlCGdcadanNrMW%2BXGgePdq2G5Hi8eWlPVRwFVlcVWq86wekEzEHav5ox1%2BoBzsHPMRlIYwuKCLygY6pgHjfyq09O8oD%2FbbbSeailVK3aXruVf685veQHVtPkpxiXkehqQwFnNI01Dfx0aVy%2BpX%2FAgmICiJORTYL32tABuE%2BMo7gYi2YRdDpg64v2QaBOLoHrlCIqAUyj8H6JvXtnBFoORund9wKSxrqfU3QeVlnixCqyM%2FCrGxc7GgKp002P0HMIKCDxp4%2BT8oIWx8Sc4qpU2g6Y2y5CZIgccPasrVojXPW4wO&X-Amz-Signature=938b4dadcc4c7fcac011b6a1543abbf2f29e104a08602d3208bc7f84b39f4293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4MFMOOO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXjtZPEcXPzxIPioaTNnCVhLbLhzzvWddhLWP8WivW6AiAmQA91rH7hAIF3%2FPOqPLl%2BIcCnuPYYRvNNKHyudYTq1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnCjPtyzrPxcQL5hdKtwDKxW3IBN%2BhVd0aJ3WUHpmAgBJgHDBtkArL%2Fzc0bsGeGY2WyhzdIDeWEpM0y7aMTns0JvD89bcrFy%2BeNa2ZLfJ6xmKVMyc%2FUAbhdmi4%2BvG3IalN72y10vPWxOdh2lLZthNwHN9d99vghY0Q7BDoWYmPLO4wnICLbT01y5CH9VKBHets031Frhn4qR8Z7hIzFDlM5Lh7%2BHnp%2Bg9uXAXDvWpJEAZrGKdYf9HipFukKzGvf%2BAKr%2FAumzJH%2FqzZWzsQazt7V4ZsGaufNlSuaofyqbYnwul5cXRmvAh0g75EJQ5yKqugxUBHJ5MJKJD%2B3OIAqGgm2C3BzTN3%2BSnysZMaBhEVMR%2FJqijctsQridBr8ryUTpnoL%2FkXEgNuN7CbRuUVsEkRhUIZ73vIa%2BcXSnUywi3xeOy%2FzjO4%2FCkXE0icWmDrHfGLVvalXaGLC3idebftbzFbZ3uNjZ4jsWlHUIe6rgyQ7kFGdwWcTkzfvyc93tXMEETq7lY5XI2mU%2F2Zu04SVihHl5t%2F0qMMVDlmTbxWxWcfYngMY17Ar7tUlkFVI49fR4hziGItSlTlWFlCGdcadanNrMW%2BXGgePdq2G5Hi8eWlPVRwFVlcVWq86wekEzEHav5ox1%2BoBzsHPMRlIYwuKCLygY6pgHjfyq09O8oD%2FbbbSeailVK3aXruVf685veQHVtPkpxiXkehqQwFnNI01Dfx0aVy%2BpX%2FAgmICiJORTYL32tABuE%2BMo7gYi2YRdDpg64v2QaBOLoHrlCIqAUyj8H6JvXtnBFoORund9wKSxrqfU3QeVlnixCqyM%2FCrGxc7GgKp002P0HMIKCDxp4%2BT8oIWx8Sc4qpU2g6Y2y5CZIgccPasrVojXPW4wO&X-Amz-Signature=05c1287d9c5a50cda4359bc8703d18d5ac51ad9b1d919a0a1795e0f11eaa7d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

