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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647C3K7NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC02mP5pft4JubYSg8SwWp97wYH%2FNyHb6A0gkTjwz3kgIgZgKOBH6P3oxmcAzwxY4z%2Bd2xE67%2FQPYn%2B1Rn3XAwciwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ7IfL02JOcEKUjUFCrcA2CTESzUsYrepmrTvyBO%2FyLCu0lTFno%2FonWIwn8ZsJowtfc8Beyozh670D6%2FWF%2Fk7FT13BrFEdkpxismaWAWeCkHiJz4tLbgZTJYW9%2FQKY%2Bz6K%2F%2Fl%2F%2Fs8fzdCI11CvFL0lf0ti9KFpKOPCqSQlfW7J9xFm%2FAzeG7LUqhwMM6LPs8VelLPPU4hFqBYe45NimQd9wEwqguBDIBLc4sI2aGOwZFcTp%2Fkv87DgKVibPecTB9M7ujvdv%2Bz%2B1bHF4%2B5a7g50y5iwGjClBe5UDNcr6NOShYZg1UNqWJE%2FJVM6wwu6felTfBcOn%2FxIGpd9pxdMsTfKW1D9PacJuVFQFq3tAAZQOxvXMnx7MoDocrBRYP2mIo8Xg0kJBSZ2PXDcEH7zeExdpj9e5%2FWdoc0ohwLKw4L6Jf2Cb2w%2Fe1yiDrtciyW%2B1OSyYcq04IyOxKf4P1GpbBqfhHeSBKDhRJrTC3tvHRSxN%2BHdi6rT5J4%2B5j4nwA3sBZoEsa6i5VH%2F0UUEDyxSG5LVpRqXbd2Ct12zeG0ryjdSoxCKsahYPnWChURRuRargHRi84Cy1YULhPYQp2xCoQ7Vq06vTuIC9%2Fx4iLWGeTR4suaf4gmTXM3vPviTjSzhM8dhOPH%2Ftz31GE7AmoMI%2FRicoGOqUBR5gm4FFRirAWQL%2BgnCtr2m7pAEuT0pU%2FfsNuNWLBsnr4SvFR7JJX24yS%2B26RjfPvCpAjQ88wvqq8fsMV4M3Zyhy%2B8t1M11wlkMsHInEJk39lAO59y1dJ8n1vr1bwONkvfPVHQiXV2F7uD6zTbQWLPyAcNchjc%2BAsDUKCKL%2B6ChFOYhqHQYxNvOLZ0HlCHGYUrJltX5v1%2B7WB4mH9vLKcVWMY6M6H&X-Amz-Signature=f995eb6509444bf50e3f5fd3a6b7d08840da07c4918316b7b64f94d6d6ca0c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647C3K7NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC02mP5pft4JubYSg8SwWp97wYH%2FNyHb6A0gkTjwz3kgIgZgKOBH6P3oxmcAzwxY4z%2Bd2xE67%2FQPYn%2B1Rn3XAwciwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJ7IfL02JOcEKUjUFCrcA2CTESzUsYrepmrTvyBO%2FyLCu0lTFno%2FonWIwn8ZsJowtfc8Beyozh670D6%2FWF%2Fk7FT13BrFEdkpxismaWAWeCkHiJz4tLbgZTJYW9%2FQKY%2Bz6K%2F%2Fl%2F%2Fs8fzdCI11CvFL0lf0ti9KFpKOPCqSQlfW7J9xFm%2FAzeG7LUqhwMM6LPs8VelLPPU4hFqBYe45NimQd9wEwqguBDIBLc4sI2aGOwZFcTp%2Fkv87DgKVibPecTB9M7ujvdv%2Bz%2B1bHF4%2B5a7g50y5iwGjClBe5UDNcr6NOShYZg1UNqWJE%2FJVM6wwu6felTfBcOn%2FxIGpd9pxdMsTfKW1D9PacJuVFQFq3tAAZQOxvXMnx7MoDocrBRYP2mIo8Xg0kJBSZ2PXDcEH7zeExdpj9e5%2FWdoc0ohwLKw4L6Jf2Cb2w%2Fe1yiDrtciyW%2B1OSyYcq04IyOxKf4P1GpbBqfhHeSBKDhRJrTC3tvHRSxN%2BHdi6rT5J4%2B5j4nwA3sBZoEsa6i5VH%2F0UUEDyxSG5LVpRqXbd2Ct12zeG0ryjdSoxCKsahYPnWChURRuRargHRi84Cy1YULhPYQp2xCoQ7Vq06vTuIC9%2Fx4iLWGeTR4suaf4gmTXM3vPviTjSzhM8dhOPH%2Ftz31GE7AmoMI%2FRicoGOqUBR5gm4FFRirAWQL%2BgnCtr2m7pAEuT0pU%2FfsNuNWLBsnr4SvFR7JJX24yS%2B26RjfPvCpAjQ88wvqq8fsMV4M3Zyhy%2B8t1M11wlkMsHInEJk39lAO59y1dJ8n1vr1bwONkvfPVHQiXV2F7uD6zTbQWLPyAcNchjc%2BAsDUKCKL%2B6ChFOYhqHQYxNvOLZ0HlCHGYUrJltX5v1%2B7WB4mH9vLKcVWMY6M6H&X-Amz-Signature=7c656c68c96b984d16591c7a66c09ea818a87e42b35a7387dc56368aba8fde6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

