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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRWJMO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F2oOKfgBIEpi1uoR3%2BXLpI9HU81kaTplC7pLFvNCDYAiB1NN4TgoTbnVaqxirvn7AMKswyh%2FEFpN77cM59KuasGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMcie0BeBKCJF%2FKPPrKtwDz%2BXgtGY7G9je9PH8Lm5QRk6I%2FZKDixN1UXcmZsPTy6Anv7J6pGBKYl87DBLxGfAUYoEgcMjPoxoA5OTmN7PDUw9EMVXrpVIxwjbBv6w2wpvfV4RP1FrxR4wmIFrN6n9YGFht0scdGwvN14yC%2BUuBcMAVBe%2FXYnh5UGef%2F7Q%2B%2FXJquGSybA%2FFL5czPoB%2BCeTkpUbm4oqg8nXIFGkWeiWCfcWPYWsReIWLs658n1ND5mzUQx1qQA0kEuP4uYKv1uDd8QpRMbMaaYZPf3I2nW6LVzHUEOvgYfDVnRuTVPFd%2FGib98tHJ58p4YY3YAcuIR4L2Op9Hv6%2FG5Q%2BVMoTUJss6ObPfuB6ynVz3AbYNwfGAfkOxhKIg%2F16qL1H2inyOeQS6ctX%2Bpt7bgKV9t70Qd5g9e0zSZcfZl9ip4Bc5praYRnigk0Oodioijvt5MgjfbWSfOjTiX0qypwTYtByI%2FldsoJCWh6y5hYGxsOy%2FHdEi%2FiBZMVgZ%2FuEC5VqVvjAH1nYm%2Bk7I%2FcRhs76XGuPU5ILN0Tr3%2FQXGKgKSkQnCg7FjWFupXSrAfZU12U4BBYMRQgq5MbAsLuBzyjLkjKpc6jyOW27D4NPBOTIReHdnfXGPpWsSuL3f71%2FEVh3LwMw7paIygY6pgFxVKAhsI54pW7FgYYsIDW79uRxlRj2KrXA%2B3KoiXY50ES%2FVyNBp5ePwHVktqfkccyZN7JQwvq1uQfcM%2FjGwqG5tZH6W8NlPwbCFUnAJYNPJLcoFjJgWGKjkbRe4HuJsK%2FMYbQKVvau2z177xA72NbkTwW9T35p8yl1pDdaYFHqbz7TJ9gyf%2B2uPg2%2BFeD8yzMUvAjcJIURjD%2FuwhhzgWvrvMbJ5Thf&X-Amz-Signature=d940b418e3ffacb687e80c01f47deca6ffa54cf3fc822faaa5a8a0d89551db87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRWJMO4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F2oOKfgBIEpi1uoR3%2BXLpI9HU81kaTplC7pLFvNCDYAiB1NN4TgoTbnVaqxirvn7AMKswyh%2FEFpN77cM59KuasGir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMcie0BeBKCJF%2FKPPrKtwDz%2BXgtGY7G9je9PH8Lm5QRk6I%2FZKDixN1UXcmZsPTy6Anv7J6pGBKYl87DBLxGfAUYoEgcMjPoxoA5OTmN7PDUw9EMVXrpVIxwjbBv6w2wpvfV4RP1FrxR4wmIFrN6n9YGFht0scdGwvN14yC%2BUuBcMAVBe%2FXYnh5UGef%2F7Q%2B%2FXJquGSybA%2FFL5czPoB%2BCeTkpUbm4oqg8nXIFGkWeiWCfcWPYWsReIWLs658n1ND5mzUQx1qQA0kEuP4uYKv1uDd8QpRMbMaaYZPf3I2nW6LVzHUEOvgYfDVnRuTVPFd%2FGib98tHJ58p4YY3YAcuIR4L2Op9Hv6%2FG5Q%2BVMoTUJss6ObPfuB6ynVz3AbYNwfGAfkOxhKIg%2F16qL1H2inyOeQS6ctX%2Bpt7bgKV9t70Qd5g9e0zSZcfZl9ip4Bc5praYRnigk0Oodioijvt5MgjfbWSfOjTiX0qypwTYtByI%2FldsoJCWh6y5hYGxsOy%2FHdEi%2FiBZMVgZ%2FuEC5VqVvjAH1nYm%2Bk7I%2FcRhs76XGuPU5ILN0Tr3%2FQXGKgKSkQnCg7FjWFupXSrAfZU12U4BBYMRQgq5MbAsLuBzyjLkjKpc6jyOW27D4NPBOTIReHdnfXGPpWsSuL3f71%2FEVh3LwMw7paIygY6pgFxVKAhsI54pW7FgYYsIDW79uRxlRj2KrXA%2B3KoiXY50ES%2FVyNBp5ePwHVktqfkccyZN7JQwvq1uQfcM%2FjGwqG5tZH6W8NlPwbCFUnAJYNPJLcoFjJgWGKjkbRe4HuJsK%2FMYbQKVvau2z177xA72NbkTwW9T35p8yl1pDdaYFHqbz7TJ9gyf%2B2uPg2%2BFeD8yzMUvAjcJIURjD%2FuwhhzgWvrvMbJ5Thf&X-Amz-Signature=c8c8815ac09dd84d8a8e9ed40bc7fd2994e751e1f3660ec1b7fbb6e0d200cbe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

