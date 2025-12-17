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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVP72YF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICadYU3tPDg6pFFw17MRIbb0ZcUJepL5QXTKb6IeM20WAiEAmNB9EvaBNkntC2lcleLiiv3xCot7%2B%2BeKGu%2FUhu7CG%2BEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJrZA3ddDlwZfxGJAyrcAx73vY%2FYjTK1qXXU9OaarYRmQlL30SCL69ar3lk0KjrVAtUP8nJlq8mcuymtFF0rH2yf20ZspHwzP9%2BGnAKy0YWS0DWKntJuhguolf7q%2B%2Ffqpcbyf0fzNrsPvo7SEM2VD0T20J4qvbDN07i58r86Tt9utQw6xgyfkhxam%2BpBtG%2B98iq6nH0R%2Fol4M1SYiIH6VoJ%2FEKJM2g%2FEgaMNkz0S91zNz%2BsOvzx2ammSrhw28iw2LGkd5nbSy77rXAzB6tyAORCYj%2BBewNwJVGn59186WSAhiclVXMbW6grZMCrexioyZhNpORULtmFE5kBLG0n1m8y8%2BMICAbTvlqg%2BJD1b2cBeWEGpeBYHAFtR039e96sB5RI%2F2o%2BeNha4yl0PpVw%2FxM4tzqZqwV1VPRFcon7SLxq8ikcGsz9cFIuWjRkpK3jvS1xwW11lS2jMXiNv2VsH7cTPAbBvr6Is6l2ERIn%2BNlDs5ubwWSpxH9dy51iuMqu1pKzZKg%2FNjsIFHHguPukTFTIfyP8tXrQLr50xWgf76xb0sIr0upypvbSFfoV4HGdMS4eUWTgNdQ8HYug1XV6jHnu%2Fipjhox20uHSkMm9LsLhzarkmda0%2B7%2FIePzlO6Ea6nX4%2F9hOXnmUGRHC6MMv6h8oGOqUBeGJUnxE9Cf2UevSrpqn7LDXoR%2BNpO4L1zmi0pJ%2FW1DRIqpyhSzjddVeKGVLOqmZr%2F0VtJ1OzAPQ8P1lm8YSpnDfCIf%2FO%2Br0cMxJf%2FAgFGfsGCSNaqt1tupgfE2hE797%2B2Iiw6s9vB41VrmBF8Bb8HqtqE7NA%2FL2d5iiKBjNNdjVeaRifOiJeEGTB%2F0pBioHMlhP%2BE8%2Bdkb0WWwrxLD%2FuBcvBpSRF&X-Amz-Signature=8f5db8a6135527678add762f55b22178ba3905830219cc3b9ddc8685c11699ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EVP72YF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICadYU3tPDg6pFFw17MRIbb0ZcUJepL5QXTKb6IeM20WAiEAmNB9EvaBNkntC2lcleLiiv3xCot7%2B%2BeKGu%2FUhu7CG%2BEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJrZA3ddDlwZfxGJAyrcAx73vY%2FYjTK1qXXU9OaarYRmQlL30SCL69ar3lk0KjrVAtUP8nJlq8mcuymtFF0rH2yf20ZspHwzP9%2BGnAKy0YWS0DWKntJuhguolf7q%2B%2Ffqpcbyf0fzNrsPvo7SEM2VD0T20J4qvbDN07i58r86Tt9utQw6xgyfkhxam%2BpBtG%2B98iq6nH0R%2Fol4M1SYiIH6VoJ%2FEKJM2g%2FEgaMNkz0S91zNz%2BsOvzx2ammSrhw28iw2LGkd5nbSy77rXAzB6tyAORCYj%2BBewNwJVGn59186WSAhiclVXMbW6grZMCrexioyZhNpORULtmFE5kBLG0n1m8y8%2BMICAbTvlqg%2BJD1b2cBeWEGpeBYHAFtR039e96sB5RI%2F2o%2BeNha4yl0PpVw%2FxM4tzqZqwV1VPRFcon7SLxq8ikcGsz9cFIuWjRkpK3jvS1xwW11lS2jMXiNv2VsH7cTPAbBvr6Is6l2ERIn%2BNlDs5ubwWSpxH9dy51iuMqu1pKzZKg%2FNjsIFHHguPukTFTIfyP8tXrQLr50xWgf76xb0sIr0upypvbSFfoV4HGdMS4eUWTgNdQ8HYug1XV6jHnu%2Fipjhox20uHSkMm9LsLhzarkmda0%2B7%2FIePzlO6Ea6nX4%2F9hOXnmUGRHC6MMv6h8oGOqUBeGJUnxE9Cf2UevSrpqn7LDXoR%2BNpO4L1zmi0pJ%2FW1DRIqpyhSzjddVeKGVLOqmZr%2F0VtJ1OzAPQ8P1lm8YSpnDfCIf%2FO%2Br0cMxJf%2FAgFGfsGCSNaqt1tupgfE2hE797%2B2Iiw6s9vB41VrmBF8Bb8HqtqE7NA%2FL2d5iiKBjNNdjVeaRifOiJeEGTB%2F0pBioHMlhP%2BE8%2Bdkb0WWwrxLD%2FuBcvBpSRF&X-Amz-Signature=ef550c72f2f1c5ca49cab8dd54a127d8bfd3566b40e2d9b62db228a040b9acef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

