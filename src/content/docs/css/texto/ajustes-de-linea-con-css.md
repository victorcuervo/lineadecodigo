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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMYIP25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8rh0iKmr4M3P7xeEKyXY5n9j0Wi4AQjgXQCWy1HWEkwIhAI1aqyNiGR0q%2BDxQ6NPQecM2DRTOOaT5i%2BxX6p5%2Fu8UpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOZIL2bUYHzj3Le7Iq3AO9LEo1jMMGsVE7LVmTLWL81cRq8V%2BLgdNVzKKIa2fDvr5OWtzxWD3iwpmenHuej7o32PIVg73FfTE%2F0s9nvHBeEnuEmtvSKemwReRjVmN4Wk65NLGzzll%2BiwGPrbZtI6EhYkBewQ4NfAQQvqtvkDIBbISzYmp3epIrNG1dcRw37FxjwsAW2i2299Z6QXsnAH9uZdwZ5%2B55Mxw76GzkTRsNlXMz06x0N1yVjtpoGRwta%2B%2FkwHM1Og9SHlGtv2RoCfEum3KBhVzFrvbWB1JQtBm9%2BkRV%2FJAiIHp%2FMnsRdAB8eJxha3YXjom%2FiNCla7JJ39M0sKMZyWPBiETDY%2FM11L%2BDOrM0%2FAO1v7VHUCxhgrCLydNzIkiaHiUQDT%2F2Y6cF%2B7x1A3Mrrlitmq7fmM1QnEq1RnZ%2B1aZqvfka785gwheemgIQh6DhJ1hRko7ohV3RVTcd%2FiFsWH90csamiLAT9T1Zdtjf6zI2LB2uaFh%2FaH3CiO3UU5kOGmCRFjTXHSi62rOAP%2BiFv5d4hKlby0FLiHx5rdjeuuZu2u0A4FK6H67xGIgZAV7fGhIZtA52m%2FpZFc1lNPrzs8tNZd%2BX6Egg%2FNAG0wRgpanQwLizG3TEtYodVa%2BFOm%2Fn9B5STpfnvjChn4vKBjqkAeR3VYCrzKa2fVISiyieg3rakqlI3XIhKhxNpLLpaiiAr0M3ZR4FxB8uvcHxA0e9%2BB358Cug0Mi9mxXxChLLKICTaBKp4qL8MloguQL5bCGm42CQ0si1vzQ%2Fihpfl1cokoMFucXFGngK91GRXH6gVqbady9ZnnDXHYwIHAWJBe0e6itHHhLKJ43DH4B4xOZeYFOq6wIi2BqvsB3yYlQBlU%2F1Uz%2Fv&X-Amz-Signature=e40f210248e92d1570a1d070b5cb6b98db2978a4cc5dcea577961bb5aed3ccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHMYIP25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8rh0iKmr4M3P7xeEKyXY5n9j0Wi4AQjgXQCWy1HWEkwIhAI1aqyNiGR0q%2BDxQ6NPQecM2DRTOOaT5i%2BxX6p5%2Fu8UpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOZIL2bUYHzj3Le7Iq3AO9LEo1jMMGsVE7LVmTLWL81cRq8V%2BLgdNVzKKIa2fDvr5OWtzxWD3iwpmenHuej7o32PIVg73FfTE%2F0s9nvHBeEnuEmtvSKemwReRjVmN4Wk65NLGzzll%2BiwGPrbZtI6EhYkBewQ4NfAQQvqtvkDIBbISzYmp3epIrNG1dcRw37FxjwsAW2i2299Z6QXsnAH9uZdwZ5%2B55Mxw76GzkTRsNlXMz06x0N1yVjtpoGRwta%2B%2FkwHM1Og9SHlGtv2RoCfEum3KBhVzFrvbWB1JQtBm9%2BkRV%2FJAiIHp%2FMnsRdAB8eJxha3YXjom%2FiNCla7JJ39M0sKMZyWPBiETDY%2FM11L%2BDOrM0%2FAO1v7VHUCxhgrCLydNzIkiaHiUQDT%2F2Y6cF%2B7x1A3Mrrlitmq7fmM1QnEq1RnZ%2B1aZqvfka785gwheemgIQh6DhJ1hRko7ohV3RVTcd%2FiFsWH90csamiLAT9T1Zdtjf6zI2LB2uaFh%2FaH3CiO3UU5kOGmCRFjTXHSi62rOAP%2BiFv5d4hKlby0FLiHx5rdjeuuZu2u0A4FK6H67xGIgZAV7fGhIZtA52m%2FpZFc1lNPrzs8tNZd%2BX6Egg%2FNAG0wRgpanQwLizG3TEtYodVa%2BFOm%2Fn9B5STpfnvjChn4vKBjqkAeR3VYCrzKa2fVISiyieg3rakqlI3XIhKhxNpLLpaiiAr0M3ZR4FxB8uvcHxA0e9%2BB358Cug0Mi9mxXxChLLKICTaBKp4qL8MloguQL5bCGm42CQ0si1vzQ%2Fihpfl1cokoMFucXFGngK91GRXH6gVqbady9ZnnDXHYwIHAWJBe0e6itHHhLKJ43DH4B4xOZeYFOq6wIi2BqvsB3yYlQBlU%2F1Uz%2Fv&X-Amz-Signature=806f5d60bebb65c32c8bb99be2f41f128d4998f020855d27c71c1d52341e4f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

