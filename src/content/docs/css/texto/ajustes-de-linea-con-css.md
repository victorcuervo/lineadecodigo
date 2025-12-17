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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMPK4NU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDql9m0pldrJSYJCbPaMsgxddW95S80fdfB9F5aSWyiwwIhAO6OeF4iYKn4isCzaFU5ajsGXFZRqNR5khlBaFLKMcnwKv8DCHgQABoMNjM3NDIzMTgzODA1IgwwN%2BBdlwfMaiE9cB0q3ANa9%2BQaS7G%2FoBVw9YHRgBy1grlyKOnMKYZfxTlSW824Xocdw%2FOZ1pyd%2FHApsaSpKL4WEeG6BcpHBqgXW8cLnrqnf9j4CkqMXeJLKKF2Rb47i9qzEaUOERq%2Fh1lRXBss2NiYlAzIE6GJuxA6NU5h42uX5%2FAkUYywxjc%2FVHhwAP0fVwXKcoss7lKRoGBL%2Fkl6yxrbhHp5kNeFzRLWPAECxcFkFwTXK%2BfT9Ewdi6RViPQ7xecu5vSz86gFM1c%2Bn4yRItAwTTy8L%2F50jdQbhbBk58M61m0zwnBgAKbeobrfkaA8cGK6Lk%2Fy0Y3v6JEe3NYFKXlxasKVxzKjbuBsDG0mVB%2FAlj%2FFbjvz5t2%2Bde%2FATFpERP1bGaGtiuaW%2F1UmgeuO0wf4n%2F3ggwsDue%2FtdRAB2HACCMXwYTHoDxX5O3nOyxEfLTWK%2BWwTtPRvlJiMuh9NsOBVZDyvN4WzL5K1FG3BCTKQxgPUjLZ9CsuRMKAlcOX4mXcRoivBKc8FUG%2Bgy0zEYN1ND1haX4XVpofdeseCMs9bZ7VXwZCZHZg7%2B3whJJhaLev%2BMBxIe1UlIRVK%2BBFzOl%2FO7UNtmxEVlSfE6NELhNDuvkwBVFOymEahgdZhCtufR78T4%2Bt8lv4WlCOJbzDCnYnKBjqkAdAtVl%2FAOjyH8xPR7c0VEP3irAcJXQV%2B4UppXp4JKhJ%2FtqXVs02BDJekWiuYGm%2Bm8he2wEUKyrhql4YMctWNDoDd2VzxtWVlGJ5HLohlTMbulu4JLRKOpu4XOexIdu5%2Fq3c7Jmi%2BPhKicZl2Gs0PbLCWf48hs5uCoDR76Mzqs%2BgIr1ZbCMYAuUswID8ffmTshuFooX21uzeQTlYCvglPDBV9EJgs&X-Amz-Signature=b6370cdc0eba4017b452572fbb11d1b6e202f814d3297bd0561e710993b9d789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMPK4NU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDql9m0pldrJSYJCbPaMsgxddW95S80fdfB9F5aSWyiwwIhAO6OeF4iYKn4isCzaFU5ajsGXFZRqNR5khlBaFLKMcnwKv8DCHgQABoMNjM3NDIzMTgzODA1IgwwN%2BBdlwfMaiE9cB0q3ANa9%2BQaS7G%2FoBVw9YHRgBy1grlyKOnMKYZfxTlSW824Xocdw%2FOZ1pyd%2FHApsaSpKL4WEeG6BcpHBqgXW8cLnrqnf9j4CkqMXeJLKKF2Rb47i9qzEaUOERq%2Fh1lRXBss2NiYlAzIE6GJuxA6NU5h42uX5%2FAkUYywxjc%2FVHhwAP0fVwXKcoss7lKRoGBL%2Fkl6yxrbhHp5kNeFzRLWPAECxcFkFwTXK%2BfT9Ewdi6RViPQ7xecu5vSz86gFM1c%2Bn4yRItAwTTy8L%2F50jdQbhbBk58M61m0zwnBgAKbeobrfkaA8cGK6Lk%2Fy0Y3v6JEe3NYFKXlxasKVxzKjbuBsDG0mVB%2FAlj%2FFbjvz5t2%2Bde%2FATFpERP1bGaGtiuaW%2F1UmgeuO0wf4n%2F3ggwsDue%2FtdRAB2HACCMXwYTHoDxX5O3nOyxEfLTWK%2BWwTtPRvlJiMuh9NsOBVZDyvN4WzL5K1FG3BCTKQxgPUjLZ9CsuRMKAlcOX4mXcRoivBKc8FUG%2Bgy0zEYN1ND1haX4XVpofdeseCMs9bZ7VXwZCZHZg7%2B3whJJhaLev%2BMBxIe1UlIRVK%2BBFzOl%2FO7UNtmxEVlSfE6NELhNDuvkwBVFOymEahgdZhCtufR78T4%2Bt8lv4WlCOJbzDCnYnKBjqkAdAtVl%2FAOjyH8xPR7c0VEP3irAcJXQV%2B4UppXp4JKhJ%2FtqXVs02BDJekWiuYGm%2Bm8he2wEUKyrhql4YMctWNDoDd2VzxtWVlGJ5HLohlTMbulu4JLRKOpu4XOexIdu5%2Fq3c7Jmi%2BPhKicZl2Gs0PbLCWf48hs5uCoDR76Mzqs%2BgIr1ZbCMYAuUswID8ffmTshuFooX21uzeQTlYCvglPDBV9EJgs&X-Amz-Signature=3da5c9d685fee0a8fa84b0fed2c0b24697db1a193d1e81b358c98646fc0ff807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

