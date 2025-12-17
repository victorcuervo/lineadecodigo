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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ICFXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpdk57IpXka1clZBnBoxc04IorZxQ4N6J%2FfmWKOiyDlgIgTf1G03sOcNdWKX7OHYT4STzwoyoz7XKZdf9wovt57aoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIhKFPH12YL6dz12YircAyCHuLyrjuspHIZAX1Raps2ILb5ZFEtx%2Boq4zaYl9XcNbJus6a4jnsZFe8cCOIIbPFZtB9y1lZ6GwdeiXXObOkprmjrWyFxudYSSZBFKPWz7nWRNZlzKFjl08Sk3RrxPJ0L0WpTmeK2FzrFA3zlmE8Ul%2BIZtqBEDRKKau5IeoUDqOEB%2FCteibdo1iOnN%2BslKAZsV1ZmHs8ZAKpL060DfV%2B6%2BZNc5XU%2Bn2Z3Rtc2rr3wfGDlL24TtnkDrXUL5kBmw7EdlZNi7zkURn0DF2wkZ1XsXO7c%2FBs5NYxjxCQaTM6rWyyJXG8t0Ri3yYZqa3HPkZrNRh3nfhU%2F5XpGD9e%2B%2BVqKllXOPLJ%2BKml6vJ7Y63rM9MDg7KTNM3xatoI1T4%2BlYo1M0KR0yqO7rybfAvsroIjNeOuBvln8HzRT65prs65Z9sninMFQ3bjS1ZYQ7lgQX4rCiFTqHm0PdS92huw%2B6enSW4OD0RHlBsFzezArnq5bv6Pqev8ZHAdszggk20L%2FSde59LuPjCeeCrTLORw6spjB%2FINW5qZWhE9ZGXVRK%2B0GfE9p2WTdtJzVBmqaRECJ4O1ZRy%2Bclkz%2BASSf%2FihnRYq8Lm1%2FXV1SixBd862mWfTRRz3Cj%2FByPyGag5Oo2MMucicoGOqUBJrzq0oODsgNMzaRm0cHDcHB8N8ZKy9cVYUAtsDVEK5pEHjqAZruWPl9D1SOQZEjFrurfOnqKaqfU6xxMkoRRJf9kisn%2Bp4Xm7abzUnT%2FStbpvPAJkBmt8IHwmDRufEbSetCMLPKhaQwmaAVU4AQiDPACHn8K3f1iDFlW%2F12S7RyccC0Nn048R7YR2iEpG9PBB7C%2BcEmxXs8CKe%2Bgf2Ylj9WB%2F0s9&X-Amz-Signature=934d4c0766bbfad16c6e78f1d343d44ec3d0662508ad100c2b224072af4baaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ICFXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpdk57IpXka1clZBnBoxc04IorZxQ4N6J%2FfmWKOiyDlgIgTf1G03sOcNdWKX7OHYT4STzwoyoz7XKZdf9wovt57aoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIhKFPH12YL6dz12YircAyCHuLyrjuspHIZAX1Raps2ILb5ZFEtx%2Boq4zaYl9XcNbJus6a4jnsZFe8cCOIIbPFZtB9y1lZ6GwdeiXXObOkprmjrWyFxudYSSZBFKPWz7nWRNZlzKFjl08Sk3RrxPJ0L0WpTmeK2FzrFA3zlmE8Ul%2BIZtqBEDRKKau5IeoUDqOEB%2FCteibdo1iOnN%2BslKAZsV1ZmHs8ZAKpL060DfV%2B6%2BZNc5XU%2Bn2Z3Rtc2rr3wfGDlL24TtnkDrXUL5kBmw7EdlZNi7zkURn0DF2wkZ1XsXO7c%2FBs5NYxjxCQaTM6rWyyJXG8t0Ri3yYZqa3HPkZrNRh3nfhU%2F5XpGD9e%2B%2BVqKllXOPLJ%2BKml6vJ7Y63rM9MDg7KTNM3xatoI1T4%2BlYo1M0KR0yqO7rybfAvsroIjNeOuBvln8HzRT65prs65Z9sninMFQ3bjS1ZYQ7lgQX4rCiFTqHm0PdS92huw%2B6enSW4OD0RHlBsFzezArnq5bv6Pqev8ZHAdszggk20L%2FSde59LuPjCeeCrTLORw6spjB%2FINW5qZWhE9ZGXVRK%2B0GfE9p2WTdtJzVBmqaRECJ4O1ZRy%2Bclkz%2BASSf%2FihnRYq8Lm1%2FXV1SixBd862mWfTRRz3Cj%2FByPyGag5Oo2MMucicoGOqUBJrzq0oODsgNMzaRm0cHDcHB8N8ZKy9cVYUAtsDVEK5pEHjqAZruWPl9D1SOQZEjFrurfOnqKaqfU6xxMkoRRJf9kisn%2Bp4Xm7abzUnT%2FStbpvPAJkBmt8IHwmDRufEbSetCMLPKhaQwmaAVU4AQiDPACHn8K3f1iDFlW%2F12S7RyccC0Nn048R7YR2iEpG9PBB7C%2BcEmxXs8CKe%2Bgf2Ylj9WB%2F0s9&X-Amz-Signature=b40d715837110a58882a17678fb72a6e41bf9628ad6aadfffd9e50f598ea51e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

