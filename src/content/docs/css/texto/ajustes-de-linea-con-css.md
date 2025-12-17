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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFNZQOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVNfdIZ6jO8prRQciDSSjWfGWL2Lnj2db9f6%2B0eujC8wIgWF4EMIqwWOxMPBNq0RyJ337FeNP8Yb0A9jdAo3z5KGIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOoBq58%2F3f7GNCtKyCrcAzs3QrPkMlRxk0Lb%2B7lTkPGJNHFUf85uYM7ioNVP0gBBgENe1GJu6m5%2ByoZ%2BxGe7VisvqO%2FLh9we0nFVyPDT62f71xUsnbmiVBtBRflm%2BO0vtTjo%2BMjjRlSh47t759kHdXmK6beHHuJUQgOMnR9dtyXq5JnpKuK7JANxUW3kcV89QJJ9awqRKDZjcK%2Fqvegl2P0lEF1zWRo%2F2I5RC5eFMBXie2QtFjfDmwEN2Lb30Xaf38XQvaU27bZQpnek075tmpX%2BiLElgP0%2FW7bp2S0tqoqhmx0b%2F0T1oNNEXf2Smc0mRXzCoI7W%2BFw89pytefsBoBcOYnBYfYQxZcXhJEqCvcS%2FZ8rs2jQLY7UjjJU%2FmdITJQ7e7Vqa4ekIJkdvLuYcR%2Fu68OTaMIB4u7IsyzCNrSBzyuIVBoGnOY4h9G2D%2FZwwjR%2FA2MMEf6fiMzPkMFcb3nBAGdxL3wKbSeqHVU1C8f8H9HiI86Nlyt7%2Bg820qS%2BuigEDzdnf7RFqnPumc7HyqABKnKIEopTG3BuHviYMZGO2uGAiKblkGG7Xg%2FiggqE7XxHLSsQH8SPsyKAcfXt4LnXpZ6PYrTJ7coH4SPyRBDaof8TLbmJ3dnOKOTzkQbFjPiImKW1%2FUfBnWSCoMJDPiMoGOqUBgWTsFbwjq3pQrF7eDctuNqUyyGIi1h533LGGkz5uoFdRw9mK8P96vzVeVzOPphIBhgMsWxHDYJzfNNQPkYGskMZTx24sL%2FnN6iLhR%2F7N4jqsf6lgyXeWrnkgMTQ9SONSmjTXHNAFz%2FUSn5lwNYJUN%2FFNgjMJ48X8rK7Bv8NqEL%2FbgXLLACNBTEsM8hWHuOgVU9cQtE9EPJU%2BRhfEVl60pantWjfg&X-Amz-Signature=4dd01a1837e40b44b80b3941ba7241efcbe8cd28ef2c2f94cb18be1b4d409fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZFNZQOJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVNfdIZ6jO8prRQciDSSjWfGWL2Lnj2db9f6%2B0eujC8wIgWF4EMIqwWOxMPBNq0RyJ337FeNP8Yb0A9jdAo3z5KGIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOoBq58%2F3f7GNCtKyCrcAzs3QrPkMlRxk0Lb%2B7lTkPGJNHFUf85uYM7ioNVP0gBBgENe1GJu6m5%2ByoZ%2BxGe7VisvqO%2FLh9we0nFVyPDT62f71xUsnbmiVBtBRflm%2BO0vtTjo%2BMjjRlSh47t759kHdXmK6beHHuJUQgOMnR9dtyXq5JnpKuK7JANxUW3kcV89QJJ9awqRKDZjcK%2Fqvegl2P0lEF1zWRo%2F2I5RC5eFMBXie2QtFjfDmwEN2Lb30Xaf38XQvaU27bZQpnek075tmpX%2BiLElgP0%2FW7bp2S0tqoqhmx0b%2F0T1oNNEXf2Smc0mRXzCoI7W%2BFw89pytefsBoBcOYnBYfYQxZcXhJEqCvcS%2FZ8rs2jQLY7UjjJU%2FmdITJQ7e7Vqa4ekIJkdvLuYcR%2Fu68OTaMIB4u7IsyzCNrSBzyuIVBoGnOY4h9G2D%2FZwwjR%2FA2MMEf6fiMzPkMFcb3nBAGdxL3wKbSeqHVU1C8f8H9HiI86Nlyt7%2Bg820qS%2BuigEDzdnf7RFqnPumc7HyqABKnKIEopTG3BuHviYMZGO2uGAiKblkGG7Xg%2FiggqE7XxHLSsQH8SPsyKAcfXt4LnXpZ6PYrTJ7coH4SPyRBDaof8TLbmJ3dnOKOTzkQbFjPiImKW1%2FUfBnWSCoMJDPiMoGOqUBgWTsFbwjq3pQrF7eDctuNqUyyGIi1h533LGGkz5uoFdRw9mK8P96vzVeVzOPphIBhgMsWxHDYJzfNNQPkYGskMZTx24sL%2FnN6iLhR%2F7N4jqsf6lgyXeWrnkgMTQ9SONSmjTXHNAFz%2FUSn5lwNYJUN%2FFNgjMJ48X8rK7Bv8NqEL%2FbgXLLACNBTEsM8hWHuOgVU9cQtE9EPJU%2BRhfEVl60pantWjfg&X-Amz-Signature=fd3feaed2facdcc960186088324646373c018f9431cc07f253e8ed21e72ad411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

