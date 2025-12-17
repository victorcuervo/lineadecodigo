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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NEFTBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2hjUVK9u3haeOInMMTqenGFQuMJ8Z0TgYPl4H529pGgIgBB%2B9VN2253pG6ScIJ0yInjQkja4Mo5ffppgnan6oQDcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF16HemaD7mRIqOLECrcA6IIcSyvutqkuCKC3jkmup8klvg%2BfTVfRAZ5jq1DshPggN04amUfdnMm6ZEW9Qd9fdgBPwc7crfJEENPo4hGxSYzhgaRIuiF6c3l9DJKVYhEUNb%2FWL%2BcLVeGS9PYQCnNvYXuaLmMibHdYcizwUYb2%2FOZfX3AY2Gd8fNc5a1wU7zH85Lhaui99noO8wOMYfnXgSsqtQBfriH09q1Y%2FT5R47BdpiuOc9QRJWjXDOU2DQN0icpW7gKRerVVkEvnFIsFXUo5kjxZmZDlDzp8Y9iXgNJYgw8N5e2Mo8ihhX3N3ZPFhmM5mg5gfdk7X5sVFUkvDS9rRSMgRHdvvc%2BsIxn3qVWD3kZ0KlrG%2B5sD9cS1Sf6fPrQkq97yeLYzvwYlSfw6vMdSQlifg4B2PZwHq1d%2BQCv115IapHNAoOWYDDLzsLhwuaOgXhrRy2TGIA1oMvDFBM532HyTZyFmCCYdq%2FER6TCIdm%2B5GJC7S40Om81KZIHcIFKPnfNwz0tqbrvEwQdbb%2FdKQh8xZ%2BJGvutTJjtXnPbXiCvHKj5kGtfMipH2x%2BEFs%2FjYpNGoYcQBHh8jctDxJagyGFNR5gXan6uGgg%2BUyliDs1UDGJro%2Br1NeFCjHZE3W5%2Bv9NAIuaok94hgMP6ei8oGOqUB%2FOgxegGxlgYEBT1XlC4meGX%2BUgnkMMy2gmzgaC1VH9BYpGkzkPzuTcVJc%2Fkyav7Pt9AmOEggRFt5WXmLTx0J9HhvgVh1NMDDK8r9RT8lDu94FFLYsgXYPBNviv9BCMWM5eNEnp%2F4LnBrW7xhdSnstS4P8BtYesQ8%2BfsWhhX3PIPSwD27yXrEdIJW0%2BFkyxupBJvQ%2FQ2CpxSqYJyCn8F6H7G8SVhc&X-Amz-Signature=60842ebf3e4536a48f64248fdebfb665cfb46901505962d13bd39e4c4654427f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NEFTBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2hjUVK9u3haeOInMMTqenGFQuMJ8Z0TgYPl4H529pGgIgBB%2B9VN2253pG6ScIJ0yInjQkja4Mo5ffppgnan6oQDcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF16HemaD7mRIqOLECrcA6IIcSyvutqkuCKC3jkmup8klvg%2BfTVfRAZ5jq1DshPggN04amUfdnMm6ZEW9Qd9fdgBPwc7crfJEENPo4hGxSYzhgaRIuiF6c3l9DJKVYhEUNb%2FWL%2BcLVeGS9PYQCnNvYXuaLmMibHdYcizwUYb2%2FOZfX3AY2Gd8fNc5a1wU7zH85Lhaui99noO8wOMYfnXgSsqtQBfriH09q1Y%2FT5R47BdpiuOc9QRJWjXDOU2DQN0icpW7gKRerVVkEvnFIsFXUo5kjxZmZDlDzp8Y9iXgNJYgw8N5e2Mo8ihhX3N3ZPFhmM5mg5gfdk7X5sVFUkvDS9rRSMgRHdvvc%2BsIxn3qVWD3kZ0KlrG%2B5sD9cS1Sf6fPrQkq97yeLYzvwYlSfw6vMdSQlifg4B2PZwHq1d%2BQCv115IapHNAoOWYDDLzsLhwuaOgXhrRy2TGIA1oMvDFBM532HyTZyFmCCYdq%2FER6TCIdm%2B5GJC7S40Om81KZIHcIFKPnfNwz0tqbrvEwQdbb%2FdKQh8xZ%2BJGvutTJjtXnPbXiCvHKj5kGtfMipH2x%2BEFs%2FjYpNGoYcQBHh8jctDxJagyGFNR5gXan6uGgg%2BUyliDs1UDGJro%2Br1NeFCjHZE3W5%2Bv9NAIuaok94hgMP6ei8oGOqUB%2FOgxegGxlgYEBT1XlC4meGX%2BUgnkMMy2gmzgaC1VH9BYpGkzkPzuTcVJc%2Fkyav7Pt9AmOEggRFt5WXmLTx0J9HhvgVh1NMDDK8r9RT8lDu94FFLYsgXYPBNviv9BCMWM5eNEnp%2F4LnBrW7xhdSnstS4P8BtYesQ8%2BfsWhhX3PIPSwD27yXrEdIJW0%2BFkyxupBJvQ%2FQ2CpxSqYJyCn8F6H7G8SVhc&X-Amz-Signature=e5a20f5e8a6ec75a45adf32ea7b2fc2621e09a5affad293866aeddc7a45bd152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

