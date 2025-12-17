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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UX476AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9Ds6kFU5SGIEXzSvTQKNsWG3MMPR%2Fo%2BC0DJcGoZYoxgIgSp4BFN9xYONGqz697hQICBMpUcdknznCE38ubWiKlh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNqzR9Iz6yzEuIMLEyrcAwrvrAd559p2qaBfFW8DkKbJPBqJxMkwIfSQjPP6ylHzkGwcLc4hZDlTF8hGyTBLMYC2lOJ92ALuYybXeKbgPAXl4xy98jziveDQ7WufAqDy8I0KDoWah9%2FzGmdjUSZOg%2BwBCG58mS0GafVztHq3ySMoxcvYcsgO%2F13U%2BN0glHWtPBaniwD9GjnxVPhXiBO%2Fvho8NorxtM7cuqEx8yykg%2Borw9NG6tXaPxIAik1B5QL3flNOXWgytKAJhkuRYsf6uXgku1wpCWLnGZcPxvZKPriAHO3wOJu0ZX5M58fs2R0G1T0RCjN6bhlojAW6bTMkr9qLY7vDpKaqlJfR3TtGFq9s182Uq1ADdCO43M4%2BNQexddFaMsX%2BWZyzLgbYT3W9yNHfSXUKvNgBOcplkh4aKwJvOncJS72e6nU2lBbL8Ah5%2Fy9I0N5ewRYkiuGHE1j4irGd8MXOYmJk9TmVRwEaMaxgXzu2a%2FXkIPZaXnsapXS2iTQVq942Pm2WE1HiDl8nQO%2FIDH4I5xZbU3t3MonoxjqB1DQEqUC0w%2Fu2KiuEySAbDuy5X6CXl166AXDh%2Fsgv3ckrmwkVQ00iiUzpstQbywDNAN2%2F1vmeMLCXjmQqeq52f6TWEhR17DBQbTzAMM%2BDicoGOqUB7Lja33a7kMglTd7A4hLzoWxwFy6jjeNhwxj8Zmu9VIzxBWbMP59ksJP5ywimaunTqpWkheDeY0Dx79f%2BiOOytdLRL90IyHxGva5nV2GEH%2FQ9aToeQKaioerTt6hrfFFZVtsCD9gIak0fV0dznLa%2BCcypV4kBf%2F6IVu4oLh7TDwHq9SEaPKagJq4GrZbLs2RPvfII0UIBJ9K2ydDlCnBBB0Y%2FhbCE&X-Amz-Signature=74146c08d15c0ac727c44d790b89992b66e9570783f6dca492bcde7b051672d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UX476AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9Ds6kFU5SGIEXzSvTQKNsWG3MMPR%2Fo%2BC0DJcGoZYoxgIgSp4BFN9xYONGqz697hQICBMpUcdknznCE38ubWiKlh8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNqzR9Iz6yzEuIMLEyrcAwrvrAd559p2qaBfFW8DkKbJPBqJxMkwIfSQjPP6ylHzkGwcLc4hZDlTF8hGyTBLMYC2lOJ92ALuYybXeKbgPAXl4xy98jziveDQ7WufAqDy8I0KDoWah9%2FzGmdjUSZOg%2BwBCG58mS0GafVztHq3ySMoxcvYcsgO%2F13U%2BN0glHWtPBaniwD9GjnxVPhXiBO%2Fvho8NorxtM7cuqEx8yykg%2Borw9NG6tXaPxIAik1B5QL3flNOXWgytKAJhkuRYsf6uXgku1wpCWLnGZcPxvZKPriAHO3wOJu0ZX5M58fs2R0G1T0RCjN6bhlojAW6bTMkr9qLY7vDpKaqlJfR3TtGFq9s182Uq1ADdCO43M4%2BNQexddFaMsX%2BWZyzLgbYT3W9yNHfSXUKvNgBOcplkh4aKwJvOncJS72e6nU2lBbL8Ah5%2Fy9I0N5ewRYkiuGHE1j4irGd8MXOYmJk9TmVRwEaMaxgXzu2a%2FXkIPZaXnsapXS2iTQVq942Pm2WE1HiDl8nQO%2FIDH4I5xZbU3t3MonoxjqB1DQEqUC0w%2Fu2KiuEySAbDuy5X6CXl166AXDh%2Fsgv3ckrmwkVQ00iiUzpstQbywDNAN2%2F1vmeMLCXjmQqeq52f6TWEhR17DBQbTzAMM%2BDicoGOqUB7Lja33a7kMglTd7A4hLzoWxwFy6jjeNhwxj8Zmu9VIzxBWbMP59ksJP5ywimaunTqpWkheDeY0Dx79f%2BiOOytdLRL90IyHxGva5nV2GEH%2FQ9aToeQKaioerTt6hrfFFZVtsCD9gIak0fV0dznLa%2BCcypV4kBf%2F6IVu4oLh7TDwHq9SEaPKagJq4GrZbLs2RPvfII0UIBJ9K2ydDlCnBBB0Y%2FhbCE&X-Amz-Signature=96184497868032e9ec98d954f74d206abab38c2427a785d48dd0fbcc4940338a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

