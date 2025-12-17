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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555WE2KQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXodoVYpntGj37UsL8oXK5JSvkG2yf%2BJdU75aJdUFQtwIgZQf46te8T9k1nmYptJeDz7Q61erLA8CeP8bdfO0BTYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFTwNs%2B9ScbGgTbxXCrcA5XxpcSisJm291TSaQNOaBGD%2BwtnOVtM6n19ybOqMflQIkZKQDnwrwb6X7xQba15e%2FruDbcvwWnwYhhrqrRi31xG3BwdHxryuKMcmFVkNWxrGBqhpyL0s2PliZ3O4ssLpLaxN6M07RHEoc57%2BkOj%2BiXE950O3ibYbpyquyU6rjBTDSBl9B8UVHg9hqJWj%2Bo9ssfYGXsERSnVpUSBDuGi%2BWyDy2tc8V3vxkVZU6crND54WQk7I7xkY5N%2BgYVYIh2K86YZp49AyowjkKpnH5cdys4xCsNfic481cVE8R3qSG8njkIL6%2FO%2BMxvQGwQWpQTtPkr0JuG0hv%2BL0EOTJhHTMb0R%2FPXsquERuvuDjYgze2t0wUzW5YUFL2lOOVQaary9Y8VtLOAD1OBvPTJZDfURSn0jE8zAnFwi7A3sj%2B20XcgVykwAIjIjDfvufpxmSAK8FZYQ8UlszOIFlDQ%2B8qYfqcW8MFTUMWZRuCWLbGJJZu5gLm27DtR3PQIcTRkBjGUHYUglwWO3kYqnOW%2B5CZDoydfiV%2Bxkbm2azwSX682TyN%2BaJEV0yhDJJH2xOZOUz37nuuQCYDuhqfO9q7860iq9JBQ9XsVk3GUq8sr8dRRFiYYBYEy5Kgl7Jehj45BUMLuqisoGOqUB13bZdOa0T%2FDv234NYt%2BsRp35WMMkLLTxSY8pEsvyHclSTE2FmboO%2B3tNXOILgMiMHlrLC2fHljC1RdrVEWamj%2Fe98Apm11bNiZ0YHzygOox2qfZ0M5eGTVyOlmw7xCYGEKmj%2FjPffbvp8BWOiCsTdmaXWgSIcv254DZ18MZPFY53EPBdATJl8FRyHvfzSPlMAvEIIl5jMXNbGYMssgOtPLnwkRSS&X-Amz-Signature=6e76d522721f94c87354f2d11c1cb59612d5972402345bb4b42bc193c33ae1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466555WE2KQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXodoVYpntGj37UsL8oXK5JSvkG2yf%2BJdU75aJdUFQtwIgZQf46te8T9k1nmYptJeDz7Q61erLA8CeP8bdfO0BTYcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFTwNs%2B9ScbGgTbxXCrcA5XxpcSisJm291TSaQNOaBGD%2BwtnOVtM6n19ybOqMflQIkZKQDnwrwb6X7xQba15e%2FruDbcvwWnwYhhrqrRi31xG3BwdHxryuKMcmFVkNWxrGBqhpyL0s2PliZ3O4ssLpLaxN6M07RHEoc57%2BkOj%2BiXE950O3ibYbpyquyU6rjBTDSBl9B8UVHg9hqJWj%2Bo9ssfYGXsERSnVpUSBDuGi%2BWyDy2tc8V3vxkVZU6crND54WQk7I7xkY5N%2BgYVYIh2K86YZp49AyowjkKpnH5cdys4xCsNfic481cVE8R3qSG8njkIL6%2FO%2BMxvQGwQWpQTtPkr0JuG0hv%2BL0EOTJhHTMb0R%2FPXsquERuvuDjYgze2t0wUzW5YUFL2lOOVQaary9Y8VtLOAD1OBvPTJZDfURSn0jE8zAnFwi7A3sj%2B20XcgVykwAIjIjDfvufpxmSAK8FZYQ8UlszOIFlDQ%2B8qYfqcW8MFTUMWZRuCWLbGJJZu5gLm27DtR3PQIcTRkBjGUHYUglwWO3kYqnOW%2B5CZDoydfiV%2Bxkbm2azwSX682TyN%2BaJEV0yhDJJH2xOZOUz37nuuQCYDuhqfO9q7860iq9JBQ9XsVk3GUq8sr8dRRFiYYBYEy5Kgl7Jehj45BUMLuqisoGOqUB13bZdOa0T%2FDv234NYt%2BsRp35WMMkLLTxSY8pEsvyHclSTE2FmboO%2B3tNXOILgMiMHlrLC2fHljC1RdrVEWamj%2Fe98Apm11bNiZ0YHzygOox2qfZ0M5eGTVyOlmw7xCYGEKmj%2FjPffbvp8BWOiCsTdmaXWgSIcv254DZ18MZPFY53EPBdATJl8FRyHvfzSPlMAvEIIl5jMXNbGYMssgOtPLnwkRSS&X-Amz-Signature=0deb66dd6367cd93840aa7f8e99137e044b04a69a5fe3533d733c8f0f7154f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

