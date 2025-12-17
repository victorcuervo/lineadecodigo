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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO7NLA4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FP8f1MY1ETNeH%2BK%2FjQnu6Ykz%2FGzaKp5pYRGLDMaPexAiEA6ECKdOB21Q9qDXifvbe01rnMBrtbDrCMiuMmBYxZ%2BKgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA4DFxcrFn8oQPw%2FhCrcAxd2NykRNXoYBF4K1eQl3EqPHQLkXOTbR2FOnxHQs9b0yWKwY9jjdcxBB%2BJ9FTEhmOvQdTNdpeoLZpgr4BzjtM98p36FYckIAPq%2BFEmbKhVhk4NLnWWlL6IdYAdiuLEVjkJt2XRPyWGkpMFm7VEExAHfDkoSOQnJfy9mB5Ctlt3HG4B0lMOKHX0RrEL9uoBE0ZGU0U4WbDuR1hHA6buG8%2BssxEyvxvRoqG2p%2FKJyv9Lgug5zhOZgP1Ldd6qQvyOUCIAlQRgf6lP4SwzXOU%2BxIP0zy6gZvf0BIenCU1mS%2BqYS602%2B6AuDpnak9q%2FxvJ0xegwpAHLqnKSqtKjG%2BHjkgD50KrRyLYwxqo8hP%2FO1Pu3pEiihdSD0bML5ZaIAoVZDT5ZQ2KqM8jg6ceO4QKZOqVbrzKwfdhtJECJfoIDxBgH0zLChaUs7VSGO6YvFqhXJjmpP47ZkthGeYxY7XCzLBXatDPc4BOLzSBwpH7RNW2x9DpuIpzFKwoDdDLatvJf9QpHwgHb9lKjLVHPVAtYBMfF9HyyaR7IS3MniPvED450KaXhXI5W63e%2FjIeQ9HwtymdIMeyogXsKo3xhKzdW%2FRjtn3FnCtivzYOKy8%2FUijmnn3OWtFaDgNnWpO1GxMNPhisoGOqUBGzSFFYi8etcCyQAa8uXUMdUAIWU4XR%2BKCapJ6fTVqfn%2BJOOn01BAd%2BdKLS%2FYe43U5v2djAa7a7Rsmf7H7XsORPWQpXJ5TdzwR2iv2a5SrQL20Eugdd0GIObqa1J4aR5%2FZnijZkVThpasIPGoLIFT3L8f6XSWd%2BSUkcJddPuH61pRvUHGaXbszLMfwl%2BRJ2QE%2BEMfsnIQdh0OTlRWQ0zz%2FD%2BtQXC3&X-Amz-Signature=035ed55dcd50217d6776e7e9cdb081a2e7154cf733807fa4efb14e73d3667c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO7NLA4C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FP8f1MY1ETNeH%2BK%2FjQnu6Ykz%2FGzaKp5pYRGLDMaPexAiEA6ECKdOB21Q9qDXifvbe01rnMBrtbDrCMiuMmBYxZ%2BKgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA4DFxcrFn8oQPw%2FhCrcAxd2NykRNXoYBF4K1eQl3EqPHQLkXOTbR2FOnxHQs9b0yWKwY9jjdcxBB%2BJ9FTEhmOvQdTNdpeoLZpgr4BzjtM98p36FYckIAPq%2BFEmbKhVhk4NLnWWlL6IdYAdiuLEVjkJt2XRPyWGkpMFm7VEExAHfDkoSOQnJfy9mB5Ctlt3HG4B0lMOKHX0RrEL9uoBE0ZGU0U4WbDuR1hHA6buG8%2BssxEyvxvRoqG2p%2FKJyv9Lgug5zhOZgP1Ldd6qQvyOUCIAlQRgf6lP4SwzXOU%2BxIP0zy6gZvf0BIenCU1mS%2BqYS602%2B6AuDpnak9q%2FxvJ0xegwpAHLqnKSqtKjG%2BHjkgD50KrRyLYwxqo8hP%2FO1Pu3pEiihdSD0bML5ZaIAoVZDT5ZQ2KqM8jg6ceO4QKZOqVbrzKwfdhtJECJfoIDxBgH0zLChaUs7VSGO6YvFqhXJjmpP47ZkthGeYxY7XCzLBXatDPc4BOLzSBwpH7RNW2x9DpuIpzFKwoDdDLatvJf9QpHwgHb9lKjLVHPVAtYBMfF9HyyaR7IS3MniPvED450KaXhXI5W63e%2FjIeQ9HwtymdIMeyogXsKo3xhKzdW%2FRjtn3FnCtivzYOKy8%2FUijmnn3OWtFaDgNnWpO1GxMNPhisoGOqUBGzSFFYi8etcCyQAa8uXUMdUAIWU4XR%2BKCapJ6fTVqfn%2BJOOn01BAd%2BdKLS%2FYe43U5v2djAa7a7Rsmf7H7XsORPWQpXJ5TdzwR2iv2a5SrQL20Eugdd0GIObqa1J4aR5%2FZnijZkVThpasIPGoLIFT3L8f6XSWd%2BSUkcJddPuH61pRvUHGaXbszLMfwl%2BRJ2QE%2BEMfsnIQdh0OTlRWQ0zz%2FD%2BtQXC3&X-Amz-Signature=966027b6b04313962ad1322b103093e0930927493e506170eb0105f6e5970205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

