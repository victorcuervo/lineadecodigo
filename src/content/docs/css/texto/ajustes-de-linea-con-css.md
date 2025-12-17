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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZSOB3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDST%2FTMB5mMTm6FzhHxHI4XlRYAbh4nYbapFcsY2IKfbAIgYiz1nuNEIRzr80dNW3akyH85VqZbg5op%2Fi06%2F0hg9e0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPtIgK5SYNHtlshgPSrcAyV1NcMSgGE38%2BMLKkJWifMieZmIlSIgsxa1C%2BbbAJ%2BS6XVCoiCnHIWrCDKAUCY5oUx3DboygVSGelxUe2r9r52rOtQLcp6DFlhJ7YNtpeI8SygKt5D7sxSxhVvkawcER%2F%2F7YRdJQcHvrA9OfqPtE28zWjrzNLOxi%2BT%2BD6j3pY6r2vGo8FPTNyUa8na78M8IQ8kbRhSukW3u46XlKE9mSGjMp%2BEAn%2F2Xg4HP4IBg%2BNmwMoMjDUSiQTsamMxnFiV5WwYAl56BXncIxd3sjD5VXVYcvxWPxLHys9YdsBVBadBCOK%2BWtbS6%2Bt16cZlMI41uKgl4Nxh5gW%2Fwt9TSSvw3%2BXpILpNS9ZF%2FBH2ZrplxWJeVwRHSjVyapaFpHeGR3mAbvi6hA9X9jkmQl7uiqM0mAtvp6wuZZdHA6DOil7SWfB1dzXoihbYqJRrFeurRzFKtr%2BTomu7Ecrn7K%2BcZ5SPY3HlbBi3dPbNkIQigDAApwZad%2BNVFuLxztBJZm0vZbYNBW4OVHkIT%2FzrIhAssok7HvIVJ3W5%2FYNDSMpia6SCBWTjaoo%2Bc3mMUBnwduQu7P5xaqWoa%2FRFbMIcVZcJ1JZIz4KKMiWftEvq4CXaQYszb6wdmprsBvUCD84JVlULqMJ2DicoGOqUBXxUtqQ0sNoGVwmW0fMm3eyHNqLfeW%2BQZbNnph%2BVoU1GV65Om3XTVm2ZjsiXB9jMvc%2BzyBLrUM94ruSEKyyzIGkfPkGZiEShJMM%2Bihtxhh4EXcHfCw2Ggkyl3NpZ5Pieg59F3DtI8T7Qdig4NqrKn2FoDq%2FXPw7t9TuNY6lhSswNX6NAGhUlS28GRGAlxWgyDXqN7sG0oTgIu0PKGORFLBi%2BpTjcO&X-Amz-Signature=cf9740ad704f3ce2c2ca5be47cb7e7c23bf5aa4120d9724e2a83c5c0237ac9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZSOB3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDST%2FTMB5mMTm6FzhHxHI4XlRYAbh4nYbapFcsY2IKfbAIgYiz1nuNEIRzr80dNW3akyH85VqZbg5op%2Fi06%2F0hg9e0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPtIgK5SYNHtlshgPSrcAyV1NcMSgGE38%2BMLKkJWifMieZmIlSIgsxa1C%2BbbAJ%2BS6XVCoiCnHIWrCDKAUCY5oUx3DboygVSGelxUe2r9r52rOtQLcp6DFlhJ7YNtpeI8SygKt5D7sxSxhVvkawcER%2F%2F7YRdJQcHvrA9OfqPtE28zWjrzNLOxi%2BT%2BD6j3pY6r2vGo8FPTNyUa8na78M8IQ8kbRhSukW3u46XlKE9mSGjMp%2BEAn%2F2Xg4HP4IBg%2BNmwMoMjDUSiQTsamMxnFiV5WwYAl56BXncIxd3sjD5VXVYcvxWPxLHys9YdsBVBadBCOK%2BWtbS6%2Bt16cZlMI41uKgl4Nxh5gW%2Fwt9TSSvw3%2BXpILpNS9ZF%2FBH2ZrplxWJeVwRHSjVyapaFpHeGR3mAbvi6hA9X9jkmQl7uiqM0mAtvp6wuZZdHA6DOil7SWfB1dzXoihbYqJRrFeurRzFKtr%2BTomu7Ecrn7K%2BcZ5SPY3HlbBi3dPbNkIQigDAApwZad%2BNVFuLxztBJZm0vZbYNBW4OVHkIT%2FzrIhAssok7HvIVJ3W5%2FYNDSMpia6SCBWTjaoo%2Bc3mMUBnwduQu7P5xaqWoa%2FRFbMIcVZcJ1JZIz4KKMiWftEvq4CXaQYszb6wdmprsBvUCD84JVlULqMJ2DicoGOqUBXxUtqQ0sNoGVwmW0fMm3eyHNqLfeW%2BQZbNnph%2BVoU1GV65Om3XTVm2ZjsiXB9jMvc%2BzyBLrUM94ruSEKyyzIGkfPkGZiEShJMM%2Bihtxhh4EXcHfCw2Ggkyl3NpZ5Pieg59F3DtI8T7Qdig4NqrKn2FoDq%2FXPw7t9TuNY6lhSswNX6NAGhUlS28GRGAlxWgyDXqN7sG0oTgIu0PKGORFLBi%2BpTjcO&X-Amz-Signature=d70b82240ba461da4b58429a056f669c5f05605e45d09949d120e88f8c6ad38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

