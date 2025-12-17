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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOW3WRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbcll9RKp2tLwRzm1kp1hWIGROiFQdxouMBTnwqqXReAiEArKkYQ02IraoM3C9Mh5AFoQWYbik0IcC%2FXMe0mT5wKS4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDNjILoGvFgnb1rDJCrcA%2BIJFpNeFgxT4BuYQR4RnCsnyUNhL27YQ92caCC8Bkx3yHc6ShU6hAFdZqdQgO1sXRl57lStbgqQ%2BlviAtHB1kCZqCtKiLUBTE0ZC7%2BD4eRuVyA38qf1PumsgSD%2Fp42Je04wFrK5d1uph8UmGrAL718uLyKdVe8YMnoDQUuHhNTyz%2FBogpv5qWUFFbrvSeIdThrvqZ9eliLs5S7gNvAHwGwaAX%2BDRBH8xDNP7CUGaTWOGKQRkUQkogLFl6Avv%2BfZRMlE6G3cjN6SrFKRhh46w%2Bkp69j7Lbm8MWOm6h2Pj2cZl8QkUZ3Sw62AvkK6q3tbNAL2Zn7Z8%2BxpGDbaaLlrgNmpYPUbpSfoiLzJ9ioLsAUHkppZEtozXg8mj2%2F6XiMBzr6G9BjIIzLhLbxm2Y7BeFvoK18%2B3pddSEMxojYoxqCbryJ0HkH6jNGTmt3hSAlPvLqW1%2FZ86l4fbdwk%2F2MAvl%2FNdfwrzeFoQGlTymyTz%2BBo%2BoEeqd8RoXrlHbfsMGjfWDeBVnT2rZCcgJG3OQ7glB1uWEv1Ei3UAsNn0FMvz2ZpUhWZ7COcxNIXrY%2B%2BlOcwtYXsVhyZZi4AolEhMaFOpWpDrp0ODzJccy%2B6wdYNEFzm9qdhrlRfHdLdTqhAMI3hisoGOqUBbF0jATfO72oBqZITUpzwyu6Nn8TmO0dcSXgZ4Noh0U1QFn9AG4A1c8PumuViR2v%2B9S3%2BqpVwtfp5YS1KgFPDDF98pRwYZhIJZo6lYXsBYa7ZB5hEUX5dYENL%2BHDM9Ka3eJdkbRILYqxRijPz7meGLaTCm2gnn95IY7aRgSLy4ku%2BcmmtxOVmV6UGZ2k23fSi9xcs%2Fgx7kCKrJghL9zoAcvuoRu3e&X-Amz-Signature=a858ad901dfdc8132d1c789e87fb3ad2fc6b542913ed904ebc31263600f792d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOW3WRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbcll9RKp2tLwRzm1kp1hWIGROiFQdxouMBTnwqqXReAiEArKkYQ02IraoM3C9Mh5AFoQWYbik0IcC%2FXMe0mT5wKS4q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDNjILoGvFgnb1rDJCrcA%2BIJFpNeFgxT4BuYQR4RnCsnyUNhL27YQ92caCC8Bkx3yHc6ShU6hAFdZqdQgO1sXRl57lStbgqQ%2BlviAtHB1kCZqCtKiLUBTE0ZC7%2BD4eRuVyA38qf1PumsgSD%2Fp42Je04wFrK5d1uph8UmGrAL718uLyKdVe8YMnoDQUuHhNTyz%2FBogpv5qWUFFbrvSeIdThrvqZ9eliLs5S7gNvAHwGwaAX%2BDRBH8xDNP7CUGaTWOGKQRkUQkogLFl6Avv%2BfZRMlE6G3cjN6SrFKRhh46w%2Bkp69j7Lbm8MWOm6h2Pj2cZl8QkUZ3Sw62AvkK6q3tbNAL2Zn7Z8%2BxpGDbaaLlrgNmpYPUbpSfoiLzJ9ioLsAUHkppZEtozXg8mj2%2F6XiMBzr6G9BjIIzLhLbxm2Y7BeFvoK18%2B3pddSEMxojYoxqCbryJ0HkH6jNGTmt3hSAlPvLqW1%2FZ86l4fbdwk%2F2MAvl%2FNdfwrzeFoQGlTymyTz%2BBo%2BoEeqd8RoXrlHbfsMGjfWDeBVnT2rZCcgJG3OQ7glB1uWEv1Ei3UAsNn0FMvz2ZpUhWZ7COcxNIXrY%2B%2BlOcwtYXsVhyZZi4AolEhMaFOpWpDrp0ODzJccy%2B6wdYNEFzm9qdhrlRfHdLdTqhAMI3hisoGOqUBbF0jATfO72oBqZITUpzwyu6Nn8TmO0dcSXgZ4Noh0U1QFn9AG4A1c8PumuViR2v%2B9S3%2BqpVwtfp5YS1KgFPDDF98pRwYZhIJZo6lYXsBYa7ZB5hEUX5dYENL%2BHDM9Ka3eJdkbRILYqxRijPz7meGLaTCm2gnn95IY7aRgSLy4ku%2BcmmtxOVmV6UGZ2k23fSi9xcs%2Fgx7kCKrJghL9zoAcvuoRu3e&X-Amz-Signature=6b53e5a0e2e9f90f66be55f63680bcb002fa0406e8e79ed0c7b7172c6eeeadaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

