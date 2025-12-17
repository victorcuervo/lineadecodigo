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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MN5BSFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOHTl%2FETzK%2FOiukZOCa8BRJ3RaT1pkpV9uJS68fVMVZAiBCs2p2rmMDuFNbDYR1ywewfCN9XTri6K7ywvvyVrandSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEMo2t3OZW4ncac9KtwD4%2FfFJjWfSeD6uvsE8e%2FaucMah%2F2C8R4JetmFoETfi5PQJV2fVESTxwhO2M7TmFia9%2FZcZWetPUxhRfwdD6LIfawroRbhwf%2F58OARRLTP7SP%2Bu5gXayzugjuuT5fQNWuyGZeAJoQ84kFtPV13A8mc%2BVVuD31XHHxqKchQIqJ%2BzntVPHLUdNznPIRwjEL8wjhxm4ULhDgpGpWTxBTcNnLp3BzJHWJbk%2BpOdCzfQUH8GHlbpj28EZd8CXKnDa6RWNhghlEZzpXUv0LQ2ars8LcKFTMQPR1TFIF6nihj2rk3dAxPAQ8pKifMrVJLTtstG13HJUFzlD056bI3SNPNJghFvKAmph2Mwb%2FR2ig4byPegMgZPeDymjxFNWI9fKJAaEyxFc6MkQguSZBgRYEwhxzT6tOsMU6r9ZHvjgruNpJbPVidPvwu3UxT%2Fw%2Fh3go2RqI8PWJawHBXXDKyM1CaHb8pTBRhYDCc4La%2B3gz6fEJTz2kdvvbYNg%2BpZJ%2B0u1d2Y3RdZ9pCEA7a%2FydI5oIpjM4CsHabzWdLhosuxGjQmWoYLpDiNcTS48f62CiuBDKroa%2Fw9BDkO17pUqO4%2BlwgOefzxw4OpB8h7HkhOBz1Dv%2Bm58FSfZ6c%2Ba%2FnpNHLdRAw1Z%2BLygY6pgGpb6YqHjQNPhVkI7rK45bF0nT%2BUhJx1mBmMR3cSY552LYndnEH7F4gQkCwAgB4h1EGGdryrsSt%2Bwl58e%2FzHzJ5FUB9tgQgvOss2yMwD3yEbQNBBzEevAhjM1KJeRPngbHbnlGImo8NSPPFuXjmxGUTGHn02jBZmNxoQ9%2BHnCqMZ%2FQ1VhPrxfvu6i4xNjvPTEIy1hvjB2CTUWX4Q8KNNo5xMkKjIn1Y&X-Amz-Signature=a087662aeda3187ddc7ddd4f19d7b758826b00f26010e19394da7065d20cfc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MN5BSFY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOHTl%2FETzK%2FOiukZOCa8BRJ3RaT1pkpV9uJS68fVMVZAiBCs2p2rmMDuFNbDYR1ywewfCN9XTri6K7ywvvyVrandSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEMo2t3OZW4ncac9KtwD4%2FfFJjWfSeD6uvsE8e%2FaucMah%2F2C8R4JetmFoETfi5PQJV2fVESTxwhO2M7TmFia9%2FZcZWetPUxhRfwdD6LIfawroRbhwf%2F58OARRLTP7SP%2Bu5gXayzugjuuT5fQNWuyGZeAJoQ84kFtPV13A8mc%2BVVuD31XHHxqKchQIqJ%2BzntVPHLUdNznPIRwjEL8wjhxm4ULhDgpGpWTxBTcNnLp3BzJHWJbk%2BpOdCzfQUH8GHlbpj28EZd8CXKnDa6RWNhghlEZzpXUv0LQ2ars8LcKFTMQPR1TFIF6nihj2rk3dAxPAQ8pKifMrVJLTtstG13HJUFzlD056bI3SNPNJghFvKAmph2Mwb%2FR2ig4byPegMgZPeDymjxFNWI9fKJAaEyxFc6MkQguSZBgRYEwhxzT6tOsMU6r9ZHvjgruNpJbPVidPvwu3UxT%2Fw%2Fh3go2RqI8PWJawHBXXDKyM1CaHb8pTBRhYDCc4La%2B3gz6fEJTz2kdvvbYNg%2BpZJ%2B0u1d2Y3RdZ9pCEA7a%2FydI5oIpjM4CsHabzWdLhosuxGjQmWoYLpDiNcTS48f62CiuBDKroa%2Fw9BDkO17pUqO4%2BlwgOefzxw4OpB8h7HkhOBz1Dv%2Bm58FSfZ6c%2Ba%2FnpNHLdRAw1Z%2BLygY6pgGpb6YqHjQNPhVkI7rK45bF0nT%2BUhJx1mBmMR3cSY552LYndnEH7F4gQkCwAgB4h1EGGdryrsSt%2Bwl58e%2FzHzJ5FUB9tgQgvOss2yMwD3yEbQNBBzEevAhjM1KJeRPngbHbnlGImo8NSPPFuXjmxGUTGHn02jBZmNxoQ9%2BHnCqMZ%2FQ1VhPrxfvu6i4xNjvPTEIy1hvjB2CTUWX4Q8KNNo5xMkKjIn1Y&X-Amz-Signature=a3996ecf482fcf50ebef50d24e6abe0316016a5b7eed9a44b2be2f355c83eb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

