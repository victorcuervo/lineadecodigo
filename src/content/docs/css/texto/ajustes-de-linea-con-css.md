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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOYT2QK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTGH3ehIpSA2HlgAEoxsixawmGs5gC%2BsApIrpoLc%2BuQAiAf6iICXXOipd%2FtEwmEHAbOFbaa5eYTHNs%2B%2FyjNC%2FcdFir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMoI6vjSrZpXn9AhxfKtwDom%2FlLFucdmd9Vhgc9XKSE3OzfGv4MA%2BYJ5OUfNby8FXquFnJY2lCeFCgsAs9itWdtazg44PSodZXG7t%2BxxAUxj1kx91%2Bn1LpR9BKrkENqy3UGj9mpsdT0gtpFfiIKkBi%2FlY19OtpyunVqH3kfLqnYtyXxuTSCDqv6saT2a4dIcTbs2GNVVZ6ZY401FRdmuDw9EI9zkKKGCFeUpTcZj992e3AqgqvROhWVpkFhMlVsXeQ9iCueDbKmT3Am8MsqDVoFu8BKR9I%2BPtpcffVHxjehxxq3acijXs5%2BaoB%2F24bgecB5XvzLP38c36mDYk7kFvpsEo4SuJchNsLdIMYB8e%2FsBP51MkG3nxGjYCc4KKbVpCkZHlzcuf7kEhHCpyQylsCVSchJy19xGeVJjTtcF2kqwg%2BbxphZeMkZdn%2BA5Typgy%2Fq%2FvC2%2F6NSPz6kJ508iVoOL4F3iPcJq8yEM39wE0edutNt3JK5X5KYCRZOiAl4KFPU6UVJmzoNKjqx5z3M2gMj99chs0YlA4ncesXrh2oZ6vleQMxQtSiQnr6klzZm8C9mrLI5w7UMPQg1dgYGQMXPH4u1aRuyRZHrrtdh9vDCov8nKKHZ%2FEPM%2BMFkFZLg6IbV9qRX%2Fm7vzTiCZww6%2FCJygY6pgETKZFY3wZ49xHntqHEGMVOIMF20sIfuGSqziCF9J0ajEJ%2FdzLQctaP%2FMmRUat5BVfLRdHuXdGKrtJaQhgZw6Qc75TuKGdVTcfQ4EugiQv%2BE8%2Bgb97dxf2q5FeRIX2r5%2Boz4OLCDbdC5Ygah%2Fyz4xFv37W4YrFyw7H6712vDRC%2F7sIUEK16o9%2FvS%2Fh5f9cyqB3i5ijnH%2BDQZUurrOgk0c09i%2BUv3GBW&X-Amz-Signature=35d9ddaf05f92503829d8de9093d6c0ce1af3a9dac9f3438ec4edd3607ca12ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOYT2QK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTGH3ehIpSA2HlgAEoxsixawmGs5gC%2BsApIrpoLc%2BuQAiAf6iICXXOipd%2FtEwmEHAbOFbaa5eYTHNs%2B%2FyjNC%2FcdFir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMoI6vjSrZpXn9AhxfKtwDom%2FlLFucdmd9Vhgc9XKSE3OzfGv4MA%2BYJ5OUfNby8FXquFnJY2lCeFCgsAs9itWdtazg44PSodZXG7t%2BxxAUxj1kx91%2Bn1LpR9BKrkENqy3UGj9mpsdT0gtpFfiIKkBi%2FlY19OtpyunVqH3kfLqnYtyXxuTSCDqv6saT2a4dIcTbs2GNVVZ6ZY401FRdmuDw9EI9zkKKGCFeUpTcZj992e3AqgqvROhWVpkFhMlVsXeQ9iCueDbKmT3Am8MsqDVoFu8BKR9I%2BPtpcffVHxjehxxq3acijXs5%2BaoB%2F24bgecB5XvzLP38c36mDYk7kFvpsEo4SuJchNsLdIMYB8e%2FsBP51MkG3nxGjYCc4KKbVpCkZHlzcuf7kEhHCpyQylsCVSchJy19xGeVJjTtcF2kqwg%2BbxphZeMkZdn%2BA5Typgy%2Fq%2FvC2%2F6NSPz6kJ508iVoOL4F3iPcJq8yEM39wE0edutNt3JK5X5KYCRZOiAl4KFPU6UVJmzoNKjqx5z3M2gMj99chs0YlA4ncesXrh2oZ6vleQMxQtSiQnr6klzZm8C9mrLI5w7UMPQg1dgYGQMXPH4u1aRuyRZHrrtdh9vDCov8nKKHZ%2FEPM%2BMFkFZLg6IbV9qRX%2Fm7vzTiCZww6%2FCJygY6pgETKZFY3wZ49xHntqHEGMVOIMF20sIfuGSqziCF9J0ajEJ%2FdzLQctaP%2FMmRUat5BVfLRdHuXdGKrtJaQhgZw6Qc75TuKGdVTcfQ4EugiQv%2BE8%2Bgb97dxf2q5FeRIX2r5%2Boz4OLCDbdC5Ygah%2Fyz4xFv37W4YrFyw7H6712vDRC%2F7sIUEK16o9%2FvS%2Fh5f9cyqB3i5ijnH%2BDQZUurrOgk0c09i%2BUv3GBW&X-Amz-Signature=6137cc21c229184a149b7fb275c3a029f0c57656909d69768889bb291f0e715c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

