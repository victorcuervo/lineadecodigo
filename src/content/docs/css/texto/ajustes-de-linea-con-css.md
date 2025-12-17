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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7J66U4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVB4299eAIcFStsrkz67dXI1nLMrgQUEPpXpyzf4cRKAIhAJXS4NAmV%2Br1bUOs%2BUoB4hxhJscrPGDh0f13dh%2FEtfolKv8DCHwQABoMNjM3NDIzMTgzODA1Igzu09zan2%2BiQXg%2Fe4Aq3AP%2F7oI9jqx3GEKBpH1Hnsi%2FLaj8VCf1KqXy1yHcknA0qp%2B8K2I%2FenpA83jietL1odxpzRx%2BD0lju%2Fs0egid6yFMi1o87wWpv5rcY2qJweYNFDBwMZzizriTvSUVn6aYRhtqzhDYDz4T6GxOeKvKUqol%2Bw%2B05VNewCweCV5eOoMZL1eL%2BSaUpRszOhWDHSSdgnytfcbhK9%2F1VW6OSPZxLlDAFMdN5g7HBJ%2ByYne9XVLi2ZUXOhBoJ9aLV14F6yKzANB6u51QlrLxFIiE37MUI9cTY3XbrsS%2F3jvcDoCL5lwaYzXupG4JbyI%2BsiujU8wR%2FPZ2Qej99gaJpJm6a9hmBvq9%2By8i5AsKcNAVW%2FlTnL%2B4POjyK4e0kQX4s8obLesgMkN1PetFY8odXlmAM6tPFLXaCqU2xm%2FGNVQ2tpC6H%2BBhmb5aOi1ZMncbz%2F1Ln60m%2BH15iHxCXsjmkJewEMZ9o%2BMxoXW4pbidplaDiYM8pQGKzjm779hz%2BhygKAhsIW8idcRB9Kn1gmOkrjEGkqznFs%2BLIXOF2xFx6WY9YMNdTXD%2BLnnmC3JJxbLyMbXRt9v3Qcbvphsf4nWPnCEPBf%2FusjkD2ZI4Xf%2BNpFRk2QS2aThcvt5Xo3LrlFsy5mPsNTCDj4rKBjqkAe7Jbsz%2B%2F5IlRt8ar7Xt86kK3axAk4f%2FzHTAhIVHgM3T080kTNJQk59mqc%2F5ddzkzRO6P1rEh0vXNLYSVMDoPDU1%2BR3TCVS%2Ft8ohAC%2FcgU6846sQcWNlgUX3qnTz7KHbsKjXkm6v7g9sBJwuWDClhdElwM%2FrnQp4kzfSOSvk%2BZvRoUFV%2BQxyZp5VhthHTK41GB53ofE3hSlV34KD4jJjRJ0COY3%2F&X-Amz-Signature=2791ae2b4744613e58efd3b23668249e2b33fc035cc949766a2154844bd309e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU7J66U4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVB4299eAIcFStsrkz67dXI1nLMrgQUEPpXpyzf4cRKAIhAJXS4NAmV%2Br1bUOs%2BUoB4hxhJscrPGDh0f13dh%2FEtfolKv8DCHwQABoMNjM3NDIzMTgzODA1Igzu09zan2%2BiQXg%2Fe4Aq3AP%2F7oI9jqx3GEKBpH1Hnsi%2FLaj8VCf1KqXy1yHcknA0qp%2B8K2I%2FenpA83jietL1odxpzRx%2BD0lju%2Fs0egid6yFMi1o87wWpv5rcY2qJweYNFDBwMZzizriTvSUVn6aYRhtqzhDYDz4T6GxOeKvKUqol%2Bw%2B05VNewCweCV5eOoMZL1eL%2BSaUpRszOhWDHSSdgnytfcbhK9%2F1VW6OSPZxLlDAFMdN5g7HBJ%2ByYne9XVLi2ZUXOhBoJ9aLV14F6yKzANB6u51QlrLxFIiE37MUI9cTY3XbrsS%2F3jvcDoCL5lwaYzXupG4JbyI%2BsiujU8wR%2FPZ2Qej99gaJpJm6a9hmBvq9%2By8i5AsKcNAVW%2FlTnL%2B4POjyK4e0kQX4s8obLesgMkN1PetFY8odXlmAM6tPFLXaCqU2xm%2FGNVQ2tpC6H%2BBhmb5aOi1ZMncbz%2F1Ln60m%2BH15iHxCXsjmkJewEMZ9o%2BMxoXW4pbidplaDiYM8pQGKzjm779hz%2BhygKAhsIW8idcRB9Kn1gmOkrjEGkqznFs%2BLIXOF2xFx6WY9YMNdTXD%2BLnnmC3JJxbLyMbXRt9v3Qcbvphsf4nWPnCEPBf%2FusjkD2ZI4Xf%2BNpFRk2QS2aThcvt5Xo3LrlFsy5mPsNTCDj4rKBjqkAe7Jbsz%2B%2F5IlRt8ar7Xt86kK3axAk4f%2FzHTAhIVHgM3T080kTNJQk59mqc%2F5ddzkzRO6P1rEh0vXNLYSVMDoPDU1%2BR3TCVS%2Ft8ohAC%2FcgU6846sQcWNlgUX3qnTz7KHbsKjXkm6v7g9sBJwuWDClhdElwM%2FrnQp4kzfSOSvk%2BZvRoUFV%2BQxyZp5VhthHTK41GB53ofE3hSlV34KD4jJjRJ0COY3%2F&X-Amz-Signature=2e05b7298e9c997afe25c2cd6146364d5341f71b89684d8e27a4777676517de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

