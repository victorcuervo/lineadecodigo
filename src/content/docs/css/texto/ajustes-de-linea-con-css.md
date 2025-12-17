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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVSP6I5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICudrqU6zRTnVrnoSMT12QO2xzXHYIgTXY%2FL1PWoHURiAiEAiELRSYktBfCF6VXEVQSURjz8vtJK69%2B9R3a4ikB%2BdzYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGPhTK3JeqhuJ%2BzAdircA4yqaBkF%2BNBOqeQRg6rjVw%2F2z28tU1LPDm0DV9tJp%2FFqxsyPGTXL4LBGvbOyJP6eCLMWZtqDYxB4%2BmAiF%2BBLclc1MllmaIMAfHXyNz6q9pt3Bs15801rVkMgVWDuEBUPU8Pf528ZJKYSgrLAQxYZLNi8DkfUn%2BhyOE2OoiCR2fmPWZwxzscqaIit4VwMyzmaA98cK19E%2FdkBnh0TwucO9xoVnRUU1Gb67ZmwA%2F9Y0sGp%2BlbiddWsDYYlF4NCcypKno7063pD50l9HLKVyyRpXZYpMxaRYHgABJPY81Q1Pz97FM1OITp8a7wD0sAWNPT%2BzD5nDM9rj2v0o4v%2FLG91rMnGQqcO9%2FmMF1JFAYdx4SjgfGa2CBtOLJb25nZIvlQjwaEyA9in1HZ0lKF%2BXcBx98C%2FhjprCeRqWx5PGI7CVBWaQEV9AmRorFCRHGi9bwkPXsO4AFrg%2BtbTP77iu2jaNakUUDfzM2UtV1q%2FSrAo9%2BGo0tNszOGIb6QPgqh0P5RVI6jAHSzFj58sAY4%2BubzVZAwV%2BPlcmPgDGHd4mrq2MNEmkMz49ZEb%2FL1UxY68EWdQDdeIiCW2szwPhAy2fPW4wVeESxvglipjYwm5sRfLfniTykxFW%2FcWCRv24EqZMKGcicoGOqUBaoKGuUj6Jm3oNcSu3Nukdn%2Be07bC9xd74O9AYldo0Tnny5RuUOIP6VPQVpqwcud3ITjVY%2FsWZKeN9MYZmFHBF3xU%2BZtOWRP12ceYJ8FTB5xuoQ%2FSpF2qHKyev%2BnHPgJWrhZdJ%2FRo4eylUwO56Pj7jKENrttS4K4R8LuExR%2F38Q2kDThn74Q6ysahM6WD5kB0Ne2%2FvOqw8vNdtN2lb3We1SXFGWC4&X-Amz-Signature=9b9937360f87560e7bf24cd7b4d6806685175bf0529b7f9d4af99331ff585151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVSP6I5L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICudrqU6zRTnVrnoSMT12QO2xzXHYIgTXY%2FL1PWoHURiAiEAiELRSYktBfCF6VXEVQSURjz8vtJK69%2B9R3a4ikB%2BdzYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGPhTK3JeqhuJ%2BzAdircA4yqaBkF%2BNBOqeQRg6rjVw%2F2z28tU1LPDm0DV9tJp%2FFqxsyPGTXL4LBGvbOyJP6eCLMWZtqDYxB4%2BmAiF%2BBLclc1MllmaIMAfHXyNz6q9pt3Bs15801rVkMgVWDuEBUPU8Pf528ZJKYSgrLAQxYZLNi8DkfUn%2BhyOE2OoiCR2fmPWZwxzscqaIit4VwMyzmaA98cK19E%2FdkBnh0TwucO9xoVnRUU1Gb67ZmwA%2F9Y0sGp%2BlbiddWsDYYlF4NCcypKno7063pD50l9HLKVyyRpXZYpMxaRYHgABJPY81Q1Pz97FM1OITp8a7wD0sAWNPT%2BzD5nDM9rj2v0o4v%2FLG91rMnGQqcO9%2FmMF1JFAYdx4SjgfGa2CBtOLJb25nZIvlQjwaEyA9in1HZ0lKF%2BXcBx98C%2FhjprCeRqWx5PGI7CVBWaQEV9AmRorFCRHGi9bwkPXsO4AFrg%2BtbTP77iu2jaNakUUDfzM2UtV1q%2FSrAo9%2BGo0tNszOGIb6QPgqh0P5RVI6jAHSzFj58sAY4%2BubzVZAwV%2BPlcmPgDGHd4mrq2MNEmkMz49ZEb%2FL1UxY68EWdQDdeIiCW2szwPhAy2fPW4wVeESxvglipjYwm5sRfLfniTykxFW%2FcWCRv24EqZMKGcicoGOqUBaoKGuUj6Jm3oNcSu3Nukdn%2Be07bC9xd74O9AYldo0Tnny5RuUOIP6VPQVpqwcud3ITjVY%2FsWZKeN9MYZmFHBF3xU%2BZtOWRP12ceYJ8FTB5xuoQ%2FSpF2qHKyev%2BnHPgJWrhZdJ%2FRo4eylUwO56Pj7jKENrttS4K4R8LuExR%2F38Q2kDThn74Q6ysahM6WD5kB0Ne2%2FvOqw8vNdtN2lb3We1SXFGWC4&X-Amz-Signature=4d8ebbdd6186993aa0f1da1f63651c1387efc8b59ecc975cc3c5bdb4166b1625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

