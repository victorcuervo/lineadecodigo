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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGB4KGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ZYA892EbU1WX%2FB1CDRTa5%2FA7Ni0G8EXfEFljlbbzJwIhANqAO%2FuARQ5K%2Bk3BIj%2B0VmoVVwLMbzM0Xyl16%2Fu3d7PDKv8DCHQQABoMNjM3NDIzMTgzODA1Igw7H%2BI4wQDupfbstAYq3AMy0gLtA6Czb%2FNbqGHQwgcl6RJW5fUEJtQ5lYXK2MntCU93vVA0F1biraZr3JBqI4u%2Fm%2BTjIrjHicAlTJ7u2mG0cSjwnUEmkY4U68jxn2AJCo3JQLZQe3bG7nJV6YxUZ2YfwA8VbsmsB8hOYNG8OfOrvbF0IVY5ql%2B6qOWB00hTQySwM0Z8n8rK04PoH2%2BbD2HfxPrZ1vw21jd1ryfD52CICWiiWz0QmOXeWyMheRG8KiUANu6u2WQXHjjFK7HDvgAVQo3IR75sJi1he1HHVAGzrP7BohzQz%2BrTCtzVnCetRNYbINrcllpYF0eyJC37w3qGzDTHJBvW4Jx9DONrjwRE0tPbbfk2baapleeiTgT5TjEwsB2NTKGGj8Kybs8%2BWumbGQ7NbMHCGPpFqB2IT9AZtrGDn5aR6YbFQGcnoy%2FcXtaAy1PDjuc5wisgf%2FM%2BFGJU4zjiJxXSx4JkjLIlvndK57lwF3GBe51SLTaYQbt52gN7HzxBaC4rNqe2WgTerYIVwczrPFBojvacPM%2FH6yMPPgGF%2BJJoIgD6GK2txRirD9nNy84b7oY5ydkkzVUhOA53T063gD28khk907PwI%2Bp3v7415QQctgzx2mySL2JnRupVUAFF4mcgqxyU5DCDs4jKBjqkAW87cRq2s4bN5%2Fyg0FtY3HJR1zdCtpi1LYD1H5%2BVH8SL0qEn%2FEVpXFI8Omce3hi4tgfmbmbCv7JbC6d9Nv6NCzAlrRq1%2FWyXCtHI1ShGbVBKXr985kLR2tUPGmHLLIkypoS7gzFkakN9yYOZ9IspKjrdeoL8rdGT%2BZlej71dRzvdvgORgVfASgfdKnOEn3Uzyr5yq8x2nUm1B37HvfoM4iUHVTAa&X-Amz-Signature=0242db385ec8bc7e398d7d21f5649b13b9eb8ffef05775316ea650a37ede0b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WGB4KGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ZYA892EbU1WX%2FB1CDRTa5%2FA7Ni0G8EXfEFljlbbzJwIhANqAO%2FuARQ5K%2Bk3BIj%2B0VmoVVwLMbzM0Xyl16%2Fu3d7PDKv8DCHQQABoMNjM3NDIzMTgzODA1Igw7H%2BI4wQDupfbstAYq3AMy0gLtA6Czb%2FNbqGHQwgcl6RJW5fUEJtQ5lYXK2MntCU93vVA0F1biraZr3JBqI4u%2Fm%2BTjIrjHicAlTJ7u2mG0cSjwnUEmkY4U68jxn2AJCo3JQLZQe3bG7nJV6YxUZ2YfwA8VbsmsB8hOYNG8OfOrvbF0IVY5ql%2B6qOWB00hTQySwM0Z8n8rK04PoH2%2BbD2HfxPrZ1vw21jd1ryfD52CICWiiWz0QmOXeWyMheRG8KiUANu6u2WQXHjjFK7HDvgAVQo3IR75sJi1he1HHVAGzrP7BohzQz%2BrTCtzVnCetRNYbINrcllpYF0eyJC37w3qGzDTHJBvW4Jx9DONrjwRE0tPbbfk2baapleeiTgT5TjEwsB2NTKGGj8Kybs8%2BWumbGQ7NbMHCGPpFqB2IT9AZtrGDn5aR6YbFQGcnoy%2FcXtaAy1PDjuc5wisgf%2FM%2BFGJU4zjiJxXSx4JkjLIlvndK57lwF3GBe51SLTaYQbt52gN7HzxBaC4rNqe2WgTerYIVwczrPFBojvacPM%2FH6yMPPgGF%2BJJoIgD6GK2txRirD9nNy84b7oY5ydkkzVUhOA53T063gD28khk907PwI%2Bp3v7415QQctgzx2mySL2JnRupVUAFF4mcgqxyU5DCDs4jKBjqkAW87cRq2s4bN5%2Fyg0FtY3HJR1zdCtpi1LYD1H5%2BVH8SL0qEn%2FEVpXFI8Omce3hi4tgfmbmbCv7JbC6d9Nv6NCzAlrRq1%2FWyXCtHI1ShGbVBKXr985kLR2tUPGmHLLIkypoS7gzFkakN9yYOZ9IspKjrdeoL8rdGT%2BZlej71dRzvdvgORgVfASgfdKnOEn3Uzyr5yq8x2nUm1B37HvfoM4iUHVTAa&X-Amz-Signature=563cb305a18d821c695e89711661c83b657a3d79b38521042b2423e025c6dcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

