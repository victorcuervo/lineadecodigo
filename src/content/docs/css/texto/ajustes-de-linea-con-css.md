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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK5YAQG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVn7xvsLNyYM863jaPVpfM4rD3lqzc8RT67YL7jQY4eAiBLZV9qvGhuGeUy%2FebjE2zMY09Ii1UmZ29SUJeLKcStcCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMk9RRXo5eT9441zqHKtwDXAl6Gi2fRXbxpxuKALsyk8bmJgZBknYwZev4MyreVsQZPA08Hu9YmP43N30ushWn3K44qkdEW%2F%2Bl4LeZHTYXc%2BJsxl1RHp%2FYFZBu6YYdPbBW5yaK2ex7%2BrCYx034jCAmFL%2FSAOyYGaJCdij6p9br1odXYBS1fS%2FQbOBk0kcZOw4Wfh6k2ZS4lE%2FlJaE1jZNrJoC8H9rBqV23sf93vv%2FTCwzxiSD72AHtf8%2B2gVaLog60VuYU606hdo94hHRJfvwtwss4Q2MTekqHZobYo%2BrmVRkegqmVdJM%2FI2N%2B%2Fx1U9MGzr4o0Qu95pywD1SGRI3msd818D9rpXDxZZ6yRi5InQviexXfsZy25hpEjI%2FSNsZJpv4ClhBnH9%2B3%2BKvh9jtPrQnRnvV0FFF0J4sF8L4TBXkqNbZ9LkmuFYvSREsZZwW%2BUEGOcuU9ddHeqxA1p5667pyNhVxNbIQtFim63VTgISBV39mC0z55XXlnu4PH5e%2F7uimBuKbsqpkYkmr7SFheuqZ0MG8TMOcl4uW%2BYx6leyovx7uGICIsGfRDiY1suMX6%2BYlZEB725E43pShDb%2Bo4H3gNm6X91oMq%2FO26u1q3Mwai1Cwe9S0AKd9WldMgxYF%2BOvR4B7Sv7cJfnwbgw58WKygY6pgHJe%2Fsef%2BTKhXPYaNeXvXuzTEqIsuiTGjb4kdcjQxywNQIyo27eGGgFvNu%2B6ajGwU8f8fpQhrNIRqidk%2Bp%2Bo35AKtOqYF5ceA0uSESdCHrAgAxICmCjD5GmQTmvFLOieJmQqIrhWKnB5psQ5RdZfhv%2FgNXSX%2B7JJdnUhglBA8hcK3S42GGwJl0nN52seISCVcD1e0mIIJ2sH44l%2Bwg6OIOadzjxb3Uf&X-Amz-Signature=aafc880f145994263f0d49d194e939bb65630f7622eca2c1b60d1bd253c54253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK5YAQG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVn7xvsLNyYM863jaPVpfM4rD3lqzc8RT67YL7jQY4eAiBLZV9qvGhuGeUy%2FebjE2zMY09Ii1UmZ29SUJeLKcStcCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMk9RRXo5eT9441zqHKtwDXAl6Gi2fRXbxpxuKALsyk8bmJgZBknYwZev4MyreVsQZPA08Hu9YmP43N30ushWn3K44qkdEW%2F%2Bl4LeZHTYXc%2BJsxl1RHp%2FYFZBu6YYdPbBW5yaK2ex7%2BrCYx034jCAmFL%2FSAOyYGaJCdij6p9br1odXYBS1fS%2FQbOBk0kcZOw4Wfh6k2ZS4lE%2FlJaE1jZNrJoC8H9rBqV23sf93vv%2FTCwzxiSD72AHtf8%2B2gVaLog60VuYU606hdo94hHRJfvwtwss4Q2MTekqHZobYo%2BrmVRkegqmVdJM%2FI2N%2B%2Fx1U9MGzr4o0Qu95pywD1SGRI3msd818D9rpXDxZZ6yRi5InQviexXfsZy25hpEjI%2FSNsZJpv4ClhBnH9%2B3%2BKvh9jtPrQnRnvV0FFF0J4sF8L4TBXkqNbZ9LkmuFYvSREsZZwW%2BUEGOcuU9ddHeqxA1p5667pyNhVxNbIQtFim63VTgISBV39mC0z55XXlnu4PH5e%2F7uimBuKbsqpkYkmr7SFheuqZ0MG8TMOcl4uW%2BYx6leyovx7uGICIsGfRDiY1suMX6%2BYlZEB725E43pShDb%2Bo4H3gNm6X91oMq%2FO26u1q3Mwai1Cwe9S0AKd9WldMgxYF%2BOvR4B7Sv7cJfnwbgw58WKygY6pgHJe%2Fsef%2BTKhXPYaNeXvXuzTEqIsuiTGjb4kdcjQxywNQIyo27eGGgFvNu%2B6ajGwU8f8fpQhrNIRqidk%2Bp%2Bo35AKtOqYF5ceA0uSESdCHrAgAxICmCjD5GmQTmvFLOieJmQqIrhWKnB5psQ5RdZfhv%2FgNXSX%2B7JJdnUhglBA8hcK3S42GGwJl0nN52seISCVcD1e0mIIJ2sH44l%2Bwg6OIOadzjxb3Uf&X-Amz-Signature=343c03fac241976cbab6eb907b9524102549b8d9927bbae569eb22899fa5aca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

