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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7V4EVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUznKQw43bqpu3IZImX3lS9c3dX%2FCPPzI8f%2F27TWZm1gIhAMamOa%2Fsc7U8rOHbRmb6CX2rBXJ%2BXDrfdl3%2BW1Nrdc%2BeKv8DCHMQABoMNjM3NDIzMTgzODA1IgzJA6X85CYL6jRN1IMq3AMqCzjwmix1S6HhEk82mBgG%2BHxaJyK7cQHwludRwEaPtPlh8mQElokXBtsIVpInun4D9WB1VOFpXETFnTBB9wHYfwJr%2Fnf31hdtWQV39114L4XWfpVMYmU4eakvHOmEp1hSmfW0I%2BHs8vxm3uIa0lJIqWWzYewlbt4dALmeK%2FF8Rhlzgdl6YL6CS4hzd3qgEt1qo6f1xjPQSgwyDatUeYTNLFFN8ANPJRWtrRgt0BZcr8mQIQYym%2FKrNpZ%2BnKdmjCX4DuE19IE5zG1NqpwHPsH0jFhaxymlLsPnsQo5DVwnLAzL%2BlOWN9elYEMm12JFEdIqMJMt7afJVaCrQzD7B%2FUishIAI7a1SumMjWpENF%2Fhn7EViSI3eMrCA%2Bu8Jc5WenbhOGMBGe2Cuv%2BedDqOE3bJT%2BwaWcojRYHmQy4gXPt1iCHTirhdM81%2FU8l8i2Kl6p6Sei6kHHETdsGngjcPqlf5KE2k6%2BDW6i3%2FBZ07tgPds4znPZoYmjhuyvTl1XWFS3KdvcDEHVbAeRMLNfkjduip6P9yp5q8wKSmQz%2BKB6CMTwDC%2Bmyk5Cm%2F4%2BLqjyBerwvtkjTKTGtpqxv1nB9hEzU8HVMHj0xBJsyTvoFs7jQw2vsZGbVj4Ci%2FkADhOjC0l4jKBjqkAfFVpOZJYzufLcwsddE%2F9%2Fq3gyS%2B2o9xbFmb%2Bi3d%2BdHGA9Nq62p36FHObnXvzafQTg9kdrjEI5rMO7%2BbRDLMCcErBjsb22DFWWvtLEw1K13YbFWCU6YEIIyh%2F2KTioZeNRqxpYhk%2Fgm4hKTwphiUhE1lfTAKl8f5Fpx%2Bf3r4oI%2BuGTyzWMyeZ6FvtuuX0dtZ00SJ0muczJnUTsE6kmutEqsvPcRU&X-Amz-Signature=98bccff98bcafe033571e2e47318c5e252db2e34533c5371f02eec6414ba2e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7V4EVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUznKQw43bqpu3IZImX3lS9c3dX%2FCPPzI8f%2F27TWZm1gIhAMamOa%2Fsc7U8rOHbRmb6CX2rBXJ%2BXDrfdl3%2BW1Nrdc%2BeKv8DCHMQABoMNjM3NDIzMTgzODA1IgzJA6X85CYL6jRN1IMq3AMqCzjwmix1S6HhEk82mBgG%2BHxaJyK7cQHwludRwEaPtPlh8mQElokXBtsIVpInun4D9WB1VOFpXETFnTBB9wHYfwJr%2Fnf31hdtWQV39114L4XWfpVMYmU4eakvHOmEp1hSmfW0I%2BHs8vxm3uIa0lJIqWWzYewlbt4dALmeK%2FF8Rhlzgdl6YL6CS4hzd3qgEt1qo6f1xjPQSgwyDatUeYTNLFFN8ANPJRWtrRgt0BZcr8mQIQYym%2FKrNpZ%2BnKdmjCX4DuE19IE5zG1NqpwHPsH0jFhaxymlLsPnsQo5DVwnLAzL%2BlOWN9elYEMm12JFEdIqMJMt7afJVaCrQzD7B%2FUishIAI7a1SumMjWpENF%2Fhn7EViSI3eMrCA%2Bu8Jc5WenbhOGMBGe2Cuv%2BedDqOE3bJT%2BwaWcojRYHmQy4gXPt1iCHTirhdM81%2FU8l8i2Kl6p6Sei6kHHETdsGngjcPqlf5KE2k6%2BDW6i3%2FBZ07tgPds4znPZoYmjhuyvTl1XWFS3KdvcDEHVbAeRMLNfkjduip6P9yp5q8wKSmQz%2BKB6CMTwDC%2Bmyk5Cm%2F4%2BLqjyBerwvtkjTKTGtpqxv1nB9hEzU8HVMHj0xBJsyTvoFs7jQw2vsZGbVj4Ci%2FkADhOjC0l4jKBjqkAfFVpOZJYzufLcwsddE%2F9%2Fq3gyS%2B2o9xbFmb%2Bi3d%2BdHGA9Nq62p36FHObnXvzafQTg9kdrjEI5rMO7%2BbRDLMCcErBjsb22DFWWvtLEw1K13YbFWCU6YEIIyh%2F2KTioZeNRqxpYhk%2Fgm4hKTwphiUhE1lfTAKl8f5Fpx%2Bf3r4oI%2BuGTyzWMyeZ6FvtuuX0dtZ00SJ0muczJnUTsE6kmutEqsvPcRU&X-Amz-Signature=ca823843752cd31b97d25df1cf6fae8daa1c1969507f65dc60391da9042ea187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

