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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK4XH33C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKwIz5m8PE0VvTkaMpx5tfN7xkzLVl9sfA6hWJ8R7NmAiEAoZJ8d8m0v7ydxXseZoszCNrP%2FHc8%2BYclYqvyj53bjf0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDImHTCe5EI%2F89tRWUCrcA1ouSxD0wMO5%2FTA7344wvz8QQuTPVE2%2BWWwCLlNwBEPQhMytY62eDpBHasm5fb5oHzqN1sf46mfx4tW81kZXF%2BexA6AQhSyNPzxrkC93wDkUwEmqMvQXUm%2BedN55BjjgQSoT8aL84eYGgqmMEiBndz3UTykPx%2BXQcuQrG6zdkZeQyjCzlpPCTIOoQ3XIg8K5Jsc8ETHRefaTMeqQJ23V4MfLHQ42unZ3zSPJt1psGJDGAVtt7IS%2FRkhM7qqQhnGBiqaDe053gtAd7HAa%2F2aReOhYX3CSQYBUUvyJly402sXAsyCVC%2FE374KuZ7CSkUUXaXyykPVFPIelODSMcxPcNyKLHA2tWULq3J56NxeBgq%2FZDAe5zXt9SUxPwHsbnr287nVCWA3Nbdz8fAq9%2FPbOga8NjCBTnY6s1r38oBmDz3HKlj7lvGyzIo1VzdnfFXcPV0W6AnVIkUOw9eBEMl0QsCER4%2FE8PEWQYgJwbf6%2Fas41UrL%2FzVkxm6xSwdJMpK1Og7wbfjhmWNXuZMo9P3mSY6VT4h40Ij67fzHfDA6bTYHnaX8xeHN0gq9D%2BMf194k1At%2FSrlrzNBEzWaKJcjkNZKn5zMWsHgLohABSR36JbwUth3pK%2BR2GHp0sMJFKMMOxiMoGOqUBrpkzBV21QBxLhkBAvj2VrjOhqq%2FAYZMFGpQfE%2FUxzfctcritkJTQxcgkgm9%2BtJgBYRmDYPkbYzQjvo%2FYmsgYOcMkTy6sJxEe3XZRHCf93Zl6XCoDPxechiuke5bU3%2FZlMNgeLw%2BardNYnWA3yTslG2toiV%2BTzaPNEt00Ht6z6Z%2Fk1FMCeG3KXLlXfeyu%2FuriTueUGQcp9qOKZwOM9KPb0Wgvr8ct&X-Amz-Signature=187fa83c2cfc7c60090fca3426d910094fe20e4b58f113ff1886f6f08eb0ea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK4XH33C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKwIz5m8PE0VvTkaMpx5tfN7xkzLVl9sfA6hWJ8R7NmAiEAoZJ8d8m0v7ydxXseZoszCNrP%2FHc8%2BYclYqvyj53bjf0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDImHTCe5EI%2F89tRWUCrcA1ouSxD0wMO5%2FTA7344wvz8QQuTPVE2%2BWWwCLlNwBEPQhMytY62eDpBHasm5fb5oHzqN1sf46mfx4tW81kZXF%2BexA6AQhSyNPzxrkC93wDkUwEmqMvQXUm%2BedN55BjjgQSoT8aL84eYGgqmMEiBndz3UTykPx%2BXQcuQrG6zdkZeQyjCzlpPCTIOoQ3XIg8K5Jsc8ETHRefaTMeqQJ23V4MfLHQ42unZ3zSPJt1psGJDGAVtt7IS%2FRkhM7qqQhnGBiqaDe053gtAd7HAa%2F2aReOhYX3CSQYBUUvyJly402sXAsyCVC%2FE374KuZ7CSkUUXaXyykPVFPIelODSMcxPcNyKLHA2tWULq3J56NxeBgq%2FZDAe5zXt9SUxPwHsbnr287nVCWA3Nbdz8fAq9%2FPbOga8NjCBTnY6s1r38oBmDz3HKlj7lvGyzIo1VzdnfFXcPV0W6AnVIkUOw9eBEMl0QsCER4%2FE8PEWQYgJwbf6%2Fas41UrL%2FzVkxm6xSwdJMpK1Og7wbfjhmWNXuZMo9P3mSY6VT4h40Ij67fzHfDA6bTYHnaX8xeHN0gq9D%2BMf194k1At%2FSrlrzNBEzWaKJcjkNZKn5zMWsHgLohABSR36JbwUth3pK%2BR2GHp0sMJFKMMOxiMoGOqUBrpkzBV21QBxLhkBAvj2VrjOhqq%2FAYZMFGpQfE%2FUxzfctcritkJTQxcgkgm9%2BtJgBYRmDYPkbYzQjvo%2FYmsgYOcMkTy6sJxEe3XZRHCf93Zl6XCoDPxechiuke5bU3%2FZlMNgeLw%2BardNYnWA3yTslG2toiV%2BTzaPNEt00Ht6z6Z%2Fk1FMCeG3KXLlXfeyu%2FuriTueUGQcp9qOKZwOM9KPb0Wgvr8ct&X-Amz-Signature=d2dcb87185998791fd9451badbbf57887f33470ce983d3ae68bec3155b027867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

