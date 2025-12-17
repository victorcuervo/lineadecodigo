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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRAFMJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcM9qiWsry2K%2FUASx%2BzK5QqokMqKBWynSyiv%2B6IK7wgAiEAz3FZICsFaZPX6ctvwSLqs0pNJOZcRvI1mtMI2uEYSr8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA6eLL3MvhCyeYiEuSrcA6GZNUxM%2Bwi5mUaV8EyoGWego3FD%2BxLX6DAlsu%2BTgn%2F5Fr46KL3XzGgZACldZ6ZYCohVS%2BeuOUxm2fgT6ETPvFd0tqjfY030A%2BGtuh6j48vvA2GHUYEPAeDf7GAd7ze31WN%2FBeE2QBfyl%2Fyms9GeZs5Symb6WUxEo93XT7Otcg6ebsb5jTkxV3b1Wj67roOxSp7q4IlZ9KPAnD4Z%2B50UYJuhi2tre3iY%2B50R84cjNTAM2VfF5CrRmDF6ZlDokANdn5oWvvod0CB5Df6Ovm5tjZ8dRa4GlzdTNtMcpuxmzRIXvCf9tLEmzaF8AaX7BuZQkqsbe5ajLoOC8042IQPqHXr0VDMUO1YYduxGvuPs8wHlmaYAwCO95AGtSABAsuJKgxwCOYNrLsqjxfRNL5wSMhqE3POBomsjdWM%2BIm%2FIGV3y5%2Fm0d1fxZHl7obhfMT6jWGj9ODBS4UgHmhuKFZrEyu1GeuSSVM9xhsOXM%2FdPdR4mzXC24FqQ40c8adHAjFJ%2B7hNwTAvUCyLWiKFRnK576d3mWbvS2xugz7PFRq%2B%2BQfBnn0UDrEFXiXWbMVBfsN9bzTvoEnKB94aqGYlmluMqSso7d5JQVAuC4c%2BmCCWP52nytPPQAl0V1dVBjkF5MJbhisoGOqUBhXPga7V%2F6rnm1yeY3Mv3%2FEjKIqEhukKtz0oCr6VdBZ1sFXvPxsMM1XFJy0C9f%2FuFRFiROQXasNjxRWmS6XgdlUevtnkxocxOdBUxdiKUYjybyCJivVZhXrtoCtp0oAMQAF26AS%2F1TwS7EjF4FL4wUZ6c%2F2ZbzNKyl7%2FJRP%2FgCATzb%2BWETLW%2FmO6jBaXHVccIf0GRs7LrA133SQWWKD5qKjsLSy7D&X-Amz-Signature=23bb8c5ed48889795b2c07a8706f4507b3110b82f1f1b1e8387d6acdf06dc4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRAFMJS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcM9qiWsry2K%2FUASx%2BzK5QqokMqKBWynSyiv%2B6IK7wgAiEAz3FZICsFaZPX6ctvwSLqs0pNJOZcRvI1mtMI2uEYSr8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA6eLL3MvhCyeYiEuSrcA6GZNUxM%2Bwi5mUaV8EyoGWego3FD%2BxLX6DAlsu%2BTgn%2F5Fr46KL3XzGgZACldZ6ZYCohVS%2BeuOUxm2fgT6ETPvFd0tqjfY030A%2BGtuh6j48vvA2GHUYEPAeDf7GAd7ze31WN%2FBeE2QBfyl%2Fyms9GeZs5Symb6WUxEo93XT7Otcg6ebsb5jTkxV3b1Wj67roOxSp7q4IlZ9KPAnD4Z%2B50UYJuhi2tre3iY%2B50R84cjNTAM2VfF5CrRmDF6ZlDokANdn5oWvvod0CB5Df6Ovm5tjZ8dRa4GlzdTNtMcpuxmzRIXvCf9tLEmzaF8AaX7BuZQkqsbe5ajLoOC8042IQPqHXr0VDMUO1YYduxGvuPs8wHlmaYAwCO95AGtSABAsuJKgxwCOYNrLsqjxfRNL5wSMhqE3POBomsjdWM%2BIm%2FIGV3y5%2Fm0d1fxZHl7obhfMT6jWGj9ODBS4UgHmhuKFZrEyu1GeuSSVM9xhsOXM%2FdPdR4mzXC24FqQ40c8adHAjFJ%2B7hNwTAvUCyLWiKFRnK576d3mWbvS2xugz7PFRq%2B%2BQfBnn0UDrEFXiXWbMVBfsN9bzTvoEnKB94aqGYlmluMqSso7d5JQVAuC4c%2BmCCWP52nytPPQAl0V1dVBjkF5MJbhisoGOqUBhXPga7V%2F6rnm1yeY3Mv3%2FEjKIqEhukKtz0oCr6VdBZ1sFXvPxsMM1XFJy0C9f%2FuFRFiROQXasNjxRWmS6XgdlUevtnkxocxOdBUxdiKUYjybyCJivVZhXrtoCtp0oAMQAF26AS%2F1TwS7EjF4FL4wUZ6c%2F2ZbzNKyl7%2FJRP%2FgCATzb%2BWETLW%2FmO6jBaXHVccIf0GRs7LrA133SQWWKD5qKjsLSy7D&X-Amz-Signature=a4f32fa985a80c7353e6c19fc6591ab79fdc61b245c3c223d6f51d483ce04182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

