---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW4ZFY3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjfKzFd1AUaHcvErdW%2BvfIcSdCHyeNff1I1q3AC32HagIhAKCSytgZBc2GSCtrmh42Dve5xKBgzD93IsNH2TzFv%2FVHKv8DCGAQABoMNjM3NDIzMTgzODA1Igx3P76y0%2Bqi%2Be7FrTAq3AMzdbWy%2Bnv1871W10SCjKE2tyA93cbkt2RLjJoS3feZtgzpHrzGf8aLvPLQ%2BRbfrlCrbMZzzcvEyxfUS9xB0GYVnMkeJ2sPiv9Ueu9iUfP1WaFTsXW%2BKsxDvNFwh4A2SWepfbO9o8BEz%2Bs8s55OxY4T0nQWfyNIfaJeBAl0p4LNNBjxArWkDuMZPpOKHQwv1uMnUMt19bRHRK0AWqSxnFIyjWiF3JMyLg4C1jtwgo0WjP%2BpYni0q8ESAiPT4X2hWPwlBqZvpsklMP%2F9Xyb%2B1vDJjak1NFtYz7MX%2BJq0DVsGbb7wZpGJj0FyacnAGAqTlqbuhl3vmETsLCgokEykpB%2BYMgW2aq7HZEnh0SfN9aOlcAKq2WTi72RWxBKTYvpUQOSZ%2F6hS9tOTgkIgVHneO5PVahSNGHidz2ra3VpwV%2B0rj6dZ1cSI1V%2FAog%2F0aSb%2B2Nl7tIEk6XI5eB90YQr76OGgczaj3bz6MyDRvznXWIwNV646GiVKUtQTHfPvn6ZKFiKHn7NqYyvx6xdLfUY6t0Bqw2XMpwoYnL9b%2Bzruzsrf91TtiPx59aLHGVsLOdKXgtcgVsA261cnAzmzzIvY13bSoOD7J2bnoD%2BzRy4v8GzQmvWyDPI%2B8xtLEDfjJjCF5svJBjqkAULGM01aEnYpVC88y8cyQ4e5JaYwh0Qz957skeIwBgLMqb8GPATfZpl4mpcNzz2habeWO8sq5fD9g8S6zti%2FMLDDDGebquRcNWapkgN%2Bj%2FU7powxPpK7ylsLq5Z2B2DPJ13XyqdyKzZH7%2BE6I4Yxlugrp7JDYtoZYLU7Oh6XZannMo3i3QerP1sgAVUHj%2FU3OyZpoQfoZ0sJ%2BgBTeAAzov1cykqb&X-Amz-Signature=6048c6f204fceee9176237e101215e69b51fdf8cd6c42bc419df89db07db9199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBW4ZFY3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjfKzFd1AUaHcvErdW%2BvfIcSdCHyeNff1I1q3AC32HagIhAKCSytgZBc2GSCtrmh42Dve5xKBgzD93IsNH2TzFv%2FVHKv8DCGAQABoMNjM3NDIzMTgzODA1Igx3P76y0%2Bqi%2Be7FrTAq3AMzdbWy%2Bnv1871W10SCjKE2tyA93cbkt2RLjJoS3feZtgzpHrzGf8aLvPLQ%2BRbfrlCrbMZzzcvEyxfUS9xB0GYVnMkeJ2sPiv9Ueu9iUfP1WaFTsXW%2BKsxDvNFwh4A2SWepfbO9o8BEz%2Bs8s55OxY4T0nQWfyNIfaJeBAl0p4LNNBjxArWkDuMZPpOKHQwv1uMnUMt19bRHRK0AWqSxnFIyjWiF3JMyLg4C1jtwgo0WjP%2BpYni0q8ESAiPT4X2hWPwlBqZvpsklMP%2F9Xyb%2B1vDJjak1NFtYz7MX%2BJq0DVsGbb7wZpGJj0FyacnAGAqTlqbuhl3vmETsLCgokEykpB%2BYMgW2aq7HZEnh0SfN9aOlcAKq2WTi72RWxBKTYvpUQOSZ%2F6hS9tOTgkIgVHneO5PVahSNGHidz2ra3VpwV%2B0rj6dZ1cSI1V%2FAog%2F0aSb%2B2Nl7tIEk6XI5eB90YQr76OGgczaj3bz6MyDRvznXWIwNV646GiVKUtQTHfPvn6ZKFiKHn7NqYyvx6xdLfUY6t0Bqw2XMpwoYnL9b%2Bzruzsrf91TtiPx59aLHGVsLOdKXgtcgVsA261cnAzmzzIvY13bSoOD7J2bnoD%2BzRy4v8GzQmvWyDPI%2B8xtLEDfjJjCF5svJBjqkAULGM01aEnYpVC88y8cyQ4e5JaYwh0Qz957skeIwBgLMqb8GPATfZpl4mpcNzz2habeWO8sq5fD9g8S6zti%2FMLDDDGebquRcNWapkgN%2Bj%2FU7powxPpK7ylsLq5Z2B2DPJ13XyqdyKzZH7%2BE6I4Yxlugrp7JDYtoZYLU7Oh6XZannMo3i3QerP1sgAVUHj%2FU3OyZpoQfoZ0sJ%2BgBTeAAzov1cykqb&X-Amz-Signature=60aa8bcb539e3d8bf06c7ede86f0b988faf3d6c9df53f6a412c5530810c3e901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

