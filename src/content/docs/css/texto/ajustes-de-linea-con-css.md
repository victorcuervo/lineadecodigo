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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPHRB6MR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzoRB4vNfePYnzEc9ejl1cRO8uul3JScp%2FBPB6h0%2BEKAIgNcF%2Fa1NPGAhqHm%2FWJjHEj3jXtEjbSVDJ1322bu1xDDUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDseDFT4GmHIeonwSCrcAwsWZq3zJ8RKC6WQzpOizOhepgAm12vuhSfmbzHNH3Z02NloTfyUvH7qhWjG%2FnH4dLpgRPVbwdN%2BQy5mvo%2B5b3nNdaofyU8WG2CsTtAvMIh8%2F2GmknOPUbA4O%2BvRF7Y%2F2wTvuDFHgZ04HoFJnT1IGyxZFfECAXrOe1XTXYmJSorqgvq3mZhIltn4uknJCKq1ehjkFHuBkRAG%2FXAkhXcvDxbkFAWJYpO0GDjlVS9JQM3zmGBocc1FjSJyTFciWLZvX42scKBSpn1pHss8j0N0FVsXut%2FNxG5s3Uhdi6BC5xzep1TTcyFsl3a8aRRv7mrs0NPaIP4LAmZsT2hKREvtEEIIk4T%2BaSSPZaOBGDfICjZu42GpG6k7MaMFHO9zTE0HS9ML%2BDeTax0StBUTq4SAZJfGbRr2IUkZKttIHFwjKOxoKx1NZHCaWalBX0xgFEQ9qrVH8%2BYiAdHwOZaVVRpM1zw3aGxLO6RwdNBGDS6p4NwoWtWbMKNVHHbI9NDHTDBhEfE6Tu8QvTIJQmk6%2BYrmgdqHP1X0BXp5jjqtIGmg1aoXSq6zCCXbixPq0fAy%2FwJJCoteMu%2FBGfjIW9Kz49PCvp33XxTohYAPOdlbpyol0L6S4T95C6AnkkWkqlcVMOHvicoGOqUBjDA0RuCkNfOhPvX23zBCo41UBAeZU1DVPSoVrLe0nE799ZVHpuaVKQ2ryrG%2FnarHVybsAv93JaTKXIhoT55ODDYqV75%2Bp%2FnKqabldGtKJSa3tBtqp6%2BbDFwaR5GmlgsBRnUWv1ntr1SYPEg4ssB%2BnutBtedDw62LBAK3vNB2qk5TtZNqPj2qNkCoKyEqq%2FXYBwKVJfiASVG6UqM%2Fq%2BkauL244rdU&X-Amz-Signature=414e54c6f4c49f163a0bba5e1d59171ac82e47b132854bfffb5b7c241190f446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPHRB6MR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzoRB4vNfePYnzEc9ejl1cRO8uul3JScp%2FBPB6h0%2BEKAIgNcF%2Fa1NPGAhqHm%2FWJjHEj3jXtEjbSVDJ1322bu1xDDUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDseDFT4GmHIeonwSCrcAwsWZq3zJ8RKC6WQzpOizOhepgAm12vuhSfmbzHNH3Z02NloTfyUvH7qhWjG%2FnH4dLpgRPVbwdN%2BQy5mvo%2B5b3nNdaofyU8WG2CsTtAvMIh8%2F2GmknOPUbA4O%2BvRF7Y%2F2wTvuDFHgZ04HoFJnT1IGyxZFfECAXrOe1XTXYmJSorqgvq3mZhIltn4uknJCKq1ehjkFHuBkRAG%2FXAkhXcvDxbkFAWJYpO0GDjlVS9JQM3zmGBocc1FjSJyTFciWLZvX42scKBSpn1pHss8j0N0FVsXut%2FNxG5s3Uhdi6BC5xzep1TTcyFsl3a8aRRv7mrs0NPaIP4LAmZsT2hKREvtEEIIk4T%2BaSSPZaOBGDfICjZu42GpG6k7MaMFHO9zTE0HS9ML%2BDeTax0StBUTq4SAZJfGbRr2IUkZKttIHFwjKOxoKx1NZHCaWalBX0xgFEQ9qrVH8%2BYiAdHwOZaVVRpM1zw3aGxLO6RwdNBGDS6p4NwoWtWbMKNVHHbI9NDHTDBhEfE6Tu8QvTIJQmk6%2BYrmgdqHP1X0BXp5jjqtIGmg1aoXSq6zCCXbixPq0fAy%2FwJJCoteMu%2FBGfjIW9Kz49PCvp33XxTohYAPOdlbpyol0L6S4T95C6AnkkWkqlcVMOHvicoGOqUBjDA0RuCkNfOhPvX23zBCo41UBAeZU1DVPSoVrLe0nE799ZVHpuaVKQ2ryrG%2FnarHVybsAv93JaTKXIhoT55ODDYqV75%2Bp%2FnKqabldGtKJSa3tBtqp6%2BbDFwaR5GmlgsBRnUWv1ntr1SYPEg4ssB%2BnutBtedDw62LBAK3vNB2qk5TtZNqPj2qNkCoKyEqq%2FXYBwKVJfiASVG6UqM%2Fq%2BkauL244rdU&X-Amz-Signature=998c6a0943fd3fae448a180c5dfeee35ee4594b1207500e3649c126414d232c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

