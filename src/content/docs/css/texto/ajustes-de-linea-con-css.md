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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBFISDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1rfh6HQZDpAZUV8z3NTDu%2BgOelEI2FQ4ubnn8r7HlwAiA%2BZM%2FsbYNUaOah6bLU3B2drxgXE2iTulKx5GsuL7ymkCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOVIMMeYWgBis%2BtxLKtwDsV7o2f%2BVijvjAW6YvdAq3Xt7k2c6gQCy7Q4mDxdXl2VBbMmsYWvR1Pc9TcSQlLwFcaTE2UkhbyTJyQ7ZDVotz4%2FGIf1Dwwvc9JJl6c9opJFoGHULnmsOiyoYDbMT5FmYDG7ZU7b2l5e5Eojc%2FW2ILX%2FGT1UeZaA3aJIJ%2BqkaXGfYs7xf6u9zF8c1gPM9pWkEA0h2xOaeUWOB5XhG7ojEngizVDMknBolGNLfff6xC4ayoolvtHugJ%2B1T6cnIpR7RfxUIzN5kga8lMr%2FmwObkKSrcli1jQtXaexuNFogQAozn4hZeWsWAs7bIW7b6k34yNs2%2B13ZcZ5toDAwCaEhigEPxfpizGV%2FNo7VE1pe7HeR5f5TQXSoJlu1eknCyPjwhJPhfWqtjZXpXKRWlwfrx4B2DQHuFHFYejpFHv49MHNSeKbp0wGOnCl%2BSyK6tX%2BFmiIUvW3kdcusksTSnbg1wJJvObUY9j5SSz6xgePangarqpnnXM56w3j7FzZg4pnjFzrBffjN3OzNmpPApuFvYcvNLMhaQNiBYDOTxoYpstGbNM4%2BAMVSDD9nmpZc9J3mN654hjdvFTCIRoHm8YT%2F1kGKcNJtvQpPLtnEE7E%2FP7x877c8XxCMg2P9a3wYw7aCLygY6pgGAPu4GIvqqHyUA%2B50JyeTWWeQ7tNJKz%2BfMvhiCw672LaEwyfhUgAW2cW%2B%2BbCFC9wHNeU%2F%2FHaR7%2FKLKI7ZGw0qoDLzAwdiZ1Hw18SmENmh3TjMwINchyuAr7TcP7lv%2Fzm8pG18E2sRGIfgwU6kYHlFUjDsViO0jnVNnUtQVWACkPLSMAPQoYeFJJu1omZh0hfsRuPms32TEQlVNBO91L3uzozw38cxo&X-Amz-Signature=d09651fc184c9f92057879aa9efa798cf4751e100d33aad354f7b8061f4a892d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBFISDH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1rfh6HQZDpAZUV8z3NTDu%2BgOelEI2FQ4ubnn8r7HlwAiA%2BZM%2FsbYNUaOah6bLU3B2drxgXE2iTulKx5GsuL7ymkCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOVIMMeYWgBis%2BtxLKtwDsV7o2f%2BVijvjAW6YvdAq3Xt7k2c6gQCy7Q4mDxdXl2VBbMmsYWvR1Pc9TcSQlLwFcaTE2UkhbyTJyQ7ZDVotz4%2FGIf1Dwwvc9JJl6c9opJFoGHULnmsOiyoYDbMT5FmYDG7ZU7b2l5e5Eojc%2FW2ILX%2FGT1UeZaA3aJIJ%2BqkaXGfYs7xf6u9zF8c1gPM9pWkEA0h2xOaeUWOB5XhG7ojEngizVDMknBolGNLfff6xC4ayoolvtHugJ%2B1T6cnIpR7RfxUIzN5kga8lMr%2FmwObkKSrcli1jQtXaexuNFogQAozn4hZeWsWAs7bIW7b6k34yNs2%2B13ZcZ5toDAwCaEhigEPxfpizGV%2FNo7VE1pe7HeR5f5TQXSoJlu1eknCyPjwhJPhfWqtjZXpXKRWlwfrx4B2DQHuFHFYejpFHv49MHNSeKbp0wGOnCl%2BSyK6tX%2BFmiIUvW3kdcusksTSnbg1wJJvObUY9j5SSz6xgePangarqpnnXM56w3j7FzZg4pnjFzrBffjN3OzNmpPApuFvYcvNLMhaQNiBYDOTxoYpstGbNM4%2BAMVSDD9nmpZc9J3mN654hjdvFTCIRoHm8YT%2F1kGKcNJtvQpPLtnEE7E%2FP7x877c8XxCMg2P9a3wYw7aCLygY6pgGAPu4GIvqqHyUA%2B50JyeTWWeQ7tNJKz%2BfMvhiCw672LaEwyfhUgAW2cW%2B%2BbCFC9wHNeU%2F%2FHaR7%2FKLKI7ZGw0qoDLzAwdiZ1Hw18SmENmh3TjMwINchyuAr7TcP7lv%2Fzm8pG18E2sRGIfgwU6kYHlFUjDsViO0jnVNnUtQVWACkPLSMAPQoYeFJJu1omZh0hfsRuPms32TEQlVNBO91L3uzozw38cxo&X-Amz-Signature=6f84f3551fb68166a25814a8b01ff403a5f9d325feead08a0d884d7bb0c04872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

