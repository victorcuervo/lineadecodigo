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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBWFLBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvDNHA57fuFuev9u5K9TFxw1YsDFnd9kwu%2FJCmb5YeFAiBWLDiD11iadqQ42YJiQ8kuHNdecaODrFg4xD7ZEBSvECr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4cwq8p%2BoO8vD5ILTKtwDEtMp6mKfoALmNWiL%2Fc1oTnse3%2FTzgy6TMR6giwFMSYCPPvwK1tVWa59uM%2BaYd2orrIn2MbY1BqPPuvzgfgQM2IomvrsmUS0r%2FaQHJuBibzwtLhgV1Rr9omG8Z1CWjxyT%2FAnReo%2FCoetCeAgTfx32hipZ%2Bh7XBc2Brl92D95qbqEV0DpZr7XXSmtTdZbxfTn60gQbTneZJIWIax7qF6ZHIkFFrK7%2B0Njqe0jIRG7SHeLkQgazRmyT9F1B0nOUPUB8sMhii7AvRXPHCldiARhh274X0QdlzXXakmp8PT7n2%2Byjd6a69E2oBO765y70UdfgGiImJgtuTjts9fxWvIUIwDYdjzzDDbcpEykJ%2Bgz%2BdjaHe0LcyWVNDT0WOf8yIGFL9H0DS5K3D7F2kXEv%2FUEYjTLYqWy8Ap0HnzOkaVKTb9523hDGRNhYI2pAex8Kwzx7B%2B%2BQQ64td7rJlZLlAmbBuHeq%2BuxmwgXIHiykqLtwoH%2BI%2BZQQvE7dezPrTI2Teg0s9cysp1MGTSx0LBSjX46uoX7Xb55aw9lgQy7ghHCL0rD6vLb5QnlTNzgT8hTVH3AsB6hIgeJ17A%2FUL52cZ4ab1weZSeGY9spd9nWelpCerfLBxzb6SkKUn%2F%2FPzDcw696HygY6pgFfZOY9DmdcNUi2Gg0lFOPaUp3l1klRUrryKLF%2FlcgbcU8TfrnPm5VOKmj7FoHPW3PipvQKW7ELrCa0Iyl79htBzzSPaR9hS2ok%2BumNrZtUrD%2FMnuaQNcJ65YbHi7UqJplvHspN5TJfr%2BFDydq3fM15vyEYBS%2FKpaeSB9icqkHUz9mbMj7fsdw0DAsSIZP8FVsl%2FZ7NvQ97F78YdNjuxiXXq5QKTx%2B8&X-Amz-Signature=99ca5131d44a299d36eab0c6871403789e2f76a3946e3b176d84ae85a293e566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBWFLBM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvDNHA57fuFuev9u5K9TFxw1YsDFnd9kwu%2FJCmb5YeFAiBWLDiD11iadqQ42YJiQ8kuHNdecaODrFg4xD7ZEBSvECr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4cwq8p%2BoO8vD5ILTKtwDEtMp6mKfoALmNWiL%2Fc1oTnse3%2FTzgy6TMR6giwFMSYCPPvwK1tVWa59uM%2BaYd2orrIn2MbY1BqPPuvzgfgQM2IomvrsmUS0r%2FaQHJuBibzwtLhgV1Rr9omG8Z1CWjxyT%2FAnReo%2FCoetCeAgTfx32hipZ%2Bh7XBc2Brl92D95qbqEV0DpZr7XXSmtTdZbxfTn60gQbTneZJIWIax7qF6ZHIkFFrK7%2B0Njqe0jIRG7SHeLkQgazRmyT9F1B0nOUPUB8sMhii7AvRXPHCldiARhh274X0QdlzXXakmp8PT7n2%2Byjd6a69E2oBO765y70UdfgGiImJgtuTjts9fxWvIUIwDYdjzzDDbcpEykJ%2Bgz%2BdjaHe0LcyWVNDT0WOf8yIGFL9H0DS5K3D7F2kXEv%2FUEYjTLYqWy8Ap0HnzOkaVKTb9523hDGRNhYI2pAex8Kwzx7B%2B%2BQQ64td7rJlZLlAmbBuHeq%2BuxmwgXIHiykqLtwoH%2BI%2BZQQvE7dezPrTI2Teg0s9cysp1MGTSx0LBSjX46uoX7Xb55aw9lgQy7ghHCL0rD6vLb5QnlTNzgT8hTVH3AsB6hIgeJ17A%2FUL52cZ4ab1weZSeGY9spd9nWelpCerfLBxzb6SkKUn%2F%2FPzDcw696HygY6pgFfZOY9DmdcNUi2Gg0lFOPaUp3l1klRUrryKLF%2FlcgbcU8TfrnPm5VOKmj7FoHPW3PipvQKW7ELrCa0Iyl79htBzzSPaR9hS2ok%2BumNrZtUrD%2FMnuaQNcJ65YbHi7UqJplvHspN5TJfr%2BFDydq3fM15vyEYBS%2FKpaeSB9icqkHUz9mbMj7fsdw0DAsSIZP8FVsl%2FZ7NvQ97F78YdNjuxiXXq5QKTx%2B8&X-Amz-Signature=60b1b3f43525fd619285fac0af9c9d38dfcb880eb0262448ace70f9ac1e90d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

