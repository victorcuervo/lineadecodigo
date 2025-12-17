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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDABWEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEN42YFv3uLuAQdC0joL0%2BgyUfJt1Ra2%2FfUjHOcR12iAiEA4t9tpBxm4CIoVJoCXuO54EOPxS1nFtJyz7XxFqFFyGQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGRE%2FwepShfS7iJCWyrcA3qAI08rT1Qtc4ZVdF4ow8t0DvCaRnm%2BBNUeiJtYtUVSvbMLzmh%2FHwv5kYvvWQp0VuPHP1JXYXdyMqq2EcYASCQc7f%2FrjR9icxKF8kgJb8rlyxuJ0vxnQpwFpe7DIgNXlelHLNLrxAY3LAIBGjDYZXIR5YTxOcVgas72jKPuqEXZJFpEWCMpXQ4ZS%2FH1bfQCv7wimfLUS%2BEimymbixNSlsJ1SVENjaj7RN61a8MCvkDlaw7f3XnXcww23rNGCs2bs94TDPgt%2BipMCspb8Q3Y%2FV9h7LiFewJF5Y9DxQpSoAZQ7sPdVUIFvfZCZgHyzZmbU7zFHju3kJ9DCVbfmpXzxGRboX2xv%2Flb3pSefHTaZcoPzd6iY1%2BvUWasTdvhIUBqp534J%2BeAWBd1q3Rvd6HStNdwqKu34c42B%2FDqGxsX5dStE2k01gevhOYdUVD0c%2BsKKUfXNEVos6eDK5rV3LRkuQcY65tGq8OvHuyKomKEhKXBYOjnZqWYWnzp57PFSOyrnFQiugbcM%2BxP7CJ0yYDLba%2BiaRvNrOXyAeIvncz8EjOaydV%2FGXbI%2FO65r%2B%2F8IquYprCWq%2BzmaTcEJLlGx8l1rmfpXo00xDh0MVXeIIwWYbQzcswNbgI1oFRBiDteMPz7h8oGOqUBJYugHsM%2FS3ymmJjs2QmYQUuCJ66kViXcbmEcg5EgCmtfmUhI9PdKg4qM0flPoP2LThuiMwRiRdF%2Bi%2Bu%2FxIwcPcmdALYOBu7q4EHK%2FNyMSgmOuf5qHaPnYKgh9TN5oxnvoqaSSD3bh44nH44T4%2B3A6GV9vTaBnppYgwg6WmJ5HPweQbbckSzkirz4umshz%2BPjZcXVsTXavEvVzdOtvzwupHyifzfU&X-Amz-Signature=ef10d195674f1fa8ed8658a432c26a3373569cee50eaacf8b74621c5407365d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDABWEM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEN42YFv3uLuAQdC0joL0%2BgyUfJt1Ra2%2FfUjHOcR12iAiEA4t9tpBxm4CIoVJoCXuO54EOPxS1nFtJyz7XxFqFFyGQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGRE%2FwepShfS7iJCWyrcA3qAI08rT1Qtc4ZVdF4ow8t0DvCaRnm%2BBNUeiJtYtUVSvbMLzmh%2FHwv5kYvvWQp0VuPHP1JXYXdyMqq2EcYASCQc7f%2FrjR9icxKF8kgJb8rlyxuJ0vxnQpwFpe7DIgNXlelHLNLrxAY3LAIBGjDYZXIR5YTxOcVgas72jKPuqEXZJFpEWCMpXQ4ZS%2FH1bfQCv7wimfLUS%2BEimymbixNSlsJ1SVENjaj7RN61a8MCvkDlaw7f3XnXcww23rNGCs2bs94TDPgt%2BipMCspb8Q3Y%2FV9h7LiFewJF5Y9DxQpSoAZQ7sPdVUIFvfZCZgHyzZmbU7zFHju3kJ9DCVbfmpXzxGRboX2xv%2Flb3pSefHTaZcoPzd6iY1%2BvUWasTdvhIUBqp534J%2BeAWBd1q3Rvd6HStNdwqKu34c42B%2FDqGxsX5dStE2k01gevhOYdUVD0c%2BsKKUfXNEVos6eDK5rV3LRkuQcY65tGq8OvHuyKomKEhKXBYOjnZqWYWnzp57PFSOyrnFQiugbcM%2BxP7CJ0yYDLba%2BiaRvNrOXyAeIvncz8EjOaydV%2FGXbI%2FO65r%2B%2F8IquYprCWq%2BzmaTcEJLlGx8l1rmfpXo00xDh0MVXeIIwWYbQzcswNbgI1oFRBiDteMPz7h8oGOqUBJYugHsM%2FS3ymmJjs2QmYQUuCJ66kViXcbmEcg5EgCmtfmUhI9PdKg4qM0flPoP2LThuiMwRiRdF%2Bi%2Bu%2FxIwcPcmdALYOBu7q4EHK%2FNyMSgmOuf5qHaPnYKgh9TN5oxnvoqaSSD3bh44nH44T4%2B3A6GV9vTaBnppYgwg6WmJ5HPweQbbckSzkirz4umshz%2BPjZcXVsTXavEvVzdOtvzwupHyifzfU&X-Amz-Signature=ce947d479c7b18c42f5eb79bd4d525e1394c34e725212584342af7583d088c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

