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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z54Z6HZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXpa2EFjjuqtPPeyo9NKk5Q6WiYtq2aaibIKi4BoolgIhAKRuK5NY1toeoTa07a4WECxxNkY7vSoCBJJZjHiXXDv6Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzHNiVlMKFxSLw165Eq3ANPXiepMvovlOe1SkEdOknlAxFmMZnWO4PSPr5u6IgaeZr8h8HdG%2F0mDu7LLLdNPqrlDU%2FY7TKWvhMWt1xR8Cjy8z8HQvFOdMlXH5L2REUfOhUf5PwtfQu9RXXpu3sjsBSULZs1qfGu66RGfe8PKfL9NMOv84v7kMreF0qkGDsFIeGKHfiGaIa%2FfHISTD2bHTCS4wJJ58CjUVT39BtOIg24vV%2B%2Flnd2s6u9CVOBfPVuP3%2B3rQ9pdViaU0Nn%2BxKgKr51iUXorjs2H06ACjcd4Z%2FaoV878q2U2dlPDEoLUSO98jg32y7NQHB8N1AFcRZQYj4KycHOKJ0%2Freu9XvhDe4aKtWOjMO3TqWPHr3b8YLMil3LQRqC8FhK58gPIMpRE0YyLjpRjFJoFbv7CCycDrqLd4FNhiXCamwH12crlaFyoxDXFNb0MWjXtW5RQc8W3HIaDiAgz6cOhitoshzsunQMneepd17edwd3%2Baka0XTyeBL5d3yfrreBU6ujQbmdyzYNNy4JLqYlCl9c90zl%2B3BRPxCWTmFwJGhYlVG%2B%2BRjycOz1Vt2UOyV9LRzNfBBiB4B5U3GGzEGoTszlChjB5TwO6GA56yjgmu78zMSvkz4cXpddranrQap1NOxBhczCRq4rKBjqkAeY9RhN%2FxLdK8qMIDxsSztuSomKhh4aDGaVCK6NnwTq%2BCGOMUyCCs0En7TVIj7ICf6MEtMiDN90BwP4x83hrG%2BlkZjOYV0PL67rDwRgM%2BKuqoBWRlov04f5PQO%2BHzZkjvc5XLsVyyAFQ72mZfo%2FZH8wiyZug63eGL9orb51JRE6L9XRzgzY9GfrQxBz07xivx39Z8eKsi9m2bXWhy75EofNqpPP%2F&X-Amz-Signature=55e8021fd32c5ce7109df769a61d4b31470af43b41c185a40d7703dd7d840f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z54Z6HZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BXpa2EFjjuqtPPeyo9NKk5Q6WiYtq2aaibIKi4BoolgIhAKRuK5NY1toeoTa07a4WECxxNkY7vSoCBJJZjHiXXDv6Kv8DCH0QABoMNjM3NDIzMTgzODA1IgzHNiVlMKFxSLw165Eq3ANPXiepMvovlOe1SkEdOknlAxFmMZnWO4PSPr5u6IgaeZr8h8HdG%2F0mDu7LLLdNPqrlDU%2FY7TKWvhMWt1xR8Cjy8z8HQvFOdMlXH5L2REUfOhUf5PwtfQu9RXXpu3sjsBSULZs1qfGu66RGfe8PKfL9NMOv84v7kMreF0qkGDsFIeGKHfiGaIa%2FfHISTD2bHTCS4wJJ58CjUVT39BtOIg24vV%2B%2Flnd2s6u9CVOBfPVuP3%2B3rQ9pdViaU0Nn%2BxKgKr51iUXorjs2H06ACjcd4Z%2FaoV878q2U2dlPDEoLUSO98jg32y7NQHB8N1AFcRZQYj4KycHOKJ0%2Freu9XvhDe4aKtWOjMO3TqWPHr3b8YLMil3LQRqC8FhK58gPIMpRE0YyLjpRjFJoFbv7CCycDrqLd4FNhiXCamwH12crlaFyoxDXFNb0MWjXtW5RQc8W3HIaDiAgz6cOhitoshzsunQMneepd17edwd3%2Baka0XTyeBL5d3yfrreBU6ujQbmdyzYNNy4JLqYlCl9c90zl%2B3BRPxCWTmFwJGhYlVG%2B%2BRjycOz1Vt2UOyV9LRzNfBBiB4B5U3GGzEGoTszlChjB5TwO6GA56yjgmu78zMSvkz4cXpddranrQap1NOxBhczCRq4rKBjqkAeY9RhN%2FxLdK8qMIDxsSztuSomKhh4aDGaVCK6NnwTq%2BCGOMUyCCs0En7TVIj7ICf6MEtMiDN90BwP4x83hrG%2BlkZjOYV0PL67rDwRgM%2BKuqoBWRlov04f5PQO%2BHzZkjvc5XLsVyyAFQ72mZfo%2FZH8wiyZug63eGL9orb51JRE6L9XRzgzY9GfrQxBz07xivx39Z8eKsi9m2bXWhy75EofNqpPP%2F&X-Amz-Signature=4ed01b7893838653f9c1a5bbeff5c9d3de38f104953fc6246d95266327c445c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

