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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEO33RU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeIOc%2BRuqyO7iw2g9pWiRraKl1UBq30f2tSoYs8zr2owIhAIlimw%2Bvofm1JJ6%2Fd6zkIWu4M1U2ZrTbKSqeSac%2BoGu%2BKv8DCH0QABoMNjM3NDIzMTgzODA1Igw3Aq0ur4Fhs5dls1Uq3ANj196F%2FQ3eeqP6bliLPdQNIy4Z1rdzT%2FldhYoyPp89C3NqW9CY0iwPZiiAvj%2FVZDWExXixrAFBk358kTCyI%2BPO1cGQyX6GSVHAkvMbmpStYI88RW03xt2tvmdkIGaox1%2Fm8z0SC5YKc4VE01pDM3%2BN5bK1n9q%2Fq%2BfLtqpvoEEsfeqFL3zN6QEBs11X7Tdd5z4MCsq938%2BfAjAxSmLgy%2B0CVBmRbJuLQQOsHNBCAhn9Ce4MLNrqXpx3FwgPQpgItHIFxiPpaE7PEK8INhVk%2Fiio5k8HbxdRbgqytLlf8GupHKikoVZ6wBrcEKervzFvf9WifPWf4gm6AonFSnQtv9gmMPBPseDjlljv8VG6fHsWeyEr7TWVIt%2BK5bnFYfevZfaaIfxL%2BcN8uhW2ywq0%2BMFVnk6Nay603J06VP4xpekEHdsfuqRg7uyS4bCD0DxpDQILa6P4smHRN01k2usaUCcIuBYWmK7ZKELv9ZSO3A3C7D5SmlAxumt4RLuVGUXj1kjdNydpooxC2sTBfm%2BAfJ1zWYzVk6pACHm%2Bsc1cvoUJRj6Z3eqUmQo8HzfBL9qupfocZt%2BYNa15HmvG2Cn7VBvKNAeLq0epJTK4rvkulwILg%2FK8X%2FKjc2d3hN96GjCWqorKBjqkAZkeSlYSoCK15PPKdYxcCMAe7mxhjnzL4kbDWpC4NJ37CaY%2BKX3tuJbhj7Ksvp26ISn4aNrAMpiP7Z06BFDMSfnsZyc%2Fqbgsh4ReCYHo6SgxO02JAByDs7eht1KUiRmYzS%2Bzzp3FY2hiP%2B9EaRi0KbV%2F4lthK57A%2FYLCZRclYzrHLP9cGidoE2knASnyTKs7yKTnUcrPH%2BnZfsQBLZuxAohgJcD0&X-Amz-Signature=644198bcef19f92e2d2b60fb163e66a293145f5cb5a38f21716c65065f03ca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEO33RU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeIOc%2BRuqyO7iw2g9pWiRraKl1UBq30f2tSoYs8zr2owIhAIlimw%2Bvofm1JJ6%2Fd6zkIWu4M1U2ZrTbKSqeSac%2BoGu%2BKv8DCH0QABoMNjM3NDIzMTgzODA1Igw3Aq0ur4Fhs5dls1Uq3ANj196F%2FQ3eeqP6bliLPdQNIy4Z1rdzT%2FldhYoyPp89C3NqW9CY0iwPZiiAvj%2FVZDWExXixrAFBk358kTCyI%2BPO1cGQyX6GSVHAkvMbmpStYI88RW03xt2tvmdkIGaox1%2Fm8z0SC5YKc4VE01pDM3%2BN5bK1n9q%2Fq%2BfLtqpvoEEsfeqFL3zN6QEBs11X7Tdd5z4MCsq938%2BfAjAxSmLgy%2B0CVBmRbJuLQQOsHNBCAhn9Ce4MLNrqXpx3FwgPQpgItHIFxiPpaE7PEK8INhVk%2Fiio5k8HbxdRbgqytLlf8GupHKikoVZ6wBrcEKervzFvf9WifPWf4gm6AonFSnQtv9gmMPBPseDjlljv8VG6fHsWeyEr7TWVIt%2BK5bnFYfevZfaaIfxL%2BcN8uhW2ywq0%2BMFVnk6Nay603J06VP4xpekEHdsfuqRg7uyS4bCD0DxpDQILa6P4smHRN01k2usaUCcIuBYWmK7ZKELv9ZSO3A3C7D5SmlAxumt4RLuVGUXj1kjdNydpooxC2sTBfm%2BAfJ1zWYzVk6pACHm%2Bsc1cvoUJRj6Z3eqUmQo8HzfBL9qupfocZt%2BYNa15HmvG2Cn7VBvKNAeLq0epJTK4rvkulwILg%2FK8X%2FKjc2d3hN96GjCWqorKBjqkAZkeSlYSoCK15PPKdYxcCMAe7mxhjnzL4kbDWpC4NJ37CaY%2BKX3tuJbhj7Ksvp26ISn4aNrAMpiP7Z06BFDMSfnsZyc%2Fqbgsh4ReCYHo6SgxO02JAByDs7eht1KUiRmYzS%2Bzzp3FY2hiP%2B9EaRi0KbV%2F4lthK57A%2FYLCZRclYzrHLP9cGidoE2knASnyTKs7yKTnUcrPH%2BnZfsQBLZuxAohgJcD0&X-Amz-Signature=5044c17dd5c1e81bbcbd4f40bc3fdfae80a086b8c7e99f74116ee644e05a909c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

