---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQIANA7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSC1R1YjiENNVnAtvRceJwV8F0fy9y3zaxQ6jXd7waZAiEAidIiH5veQY3dfMWFl1TYZt0PrA5Pj%2FI%2B0JsQJ8Bxu8Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKNtOC%2Fi8qxUDkf3PyrcA%2FH%2FtQJ%2B0oulKGBTUB6Htv1tA9Ti3Mi%2Fwt988tJdCB%2ByZB%2BL30JRsi1tdEr6Uld8STvMcJK%2BeFm%2FiURzOodGI4m1%2F8ef6wrD4IYoQO4htFFpMAeh%2BtRsX7n5tpuTHf1HRZZKNbpwum6ISQcC58iwhqGmbBoN3%2Bd8pDSuHfB4HYKdOm%2Fgub1%2BbrBYzJOwNn9Cpr4GnoTe4BHhv5acevBtd2Kr1Xos9NFQRgq69W02Xvy42fZjjJVZ85NYJUi%2Bj1WhJHjENPnXtT%2BjHyvwOX9kCm80nMyqKCecChLui3bFVGESKQqN%2FPwWvEJagxRkuMFljBZkFpTEVTxKVKVY6LBBy1FBdP8tGqyPWY0jlYTZJKXZMUKHw%2BiqTfQ%2Fxbl1FUfYDS9UIDDAXOtWE9dYDCA%2Fht%2Bjn9iCs5Uwh8qyoqqRb04fl%2BKXarEXe2Hxco81ONDXbbxyooPsrj9wd18gbnYYKVU8AaGt7OPaUp623LNN9fb9LdoYwrJ0fGVGzW7lVlJMeFOQfenbYZ1v6Imz2gk2LnEq%2By%2FVzCnxsY%2FNOXdsdQsypVscNntjf7zplzfjuGVgQQW53bb5JDtSLjbTbOiek3IvmR9TcQLzRdaVfAu39g07ifJHjUc6P6PusSwgMNfhy8kGOqUBt%2BAwACm1EU0YP5LVwRFmTTCZPj4zKgGfQUY3rMXmUDiZQh6nG%2FaoHFQq9qUOvDgi04sPtxcxcBHHiqRMCJ%2FMihM1picLfPDyYvxkt5caX77hNqYCqpWGauEIGqfE%2BsJF9y5CXO2ZYZtov%2FUbZXS8So5SDDpImcOpWmq%2FGPwi79HTV9NIqus4aBIVaKAo3M8w4Cv1T%2BHCckT%2FjaswsB1CBz1mSe2Y&X-Amz-Signature=c56426cd7c67aa16ad23cdf04ada578dd19829f58c3dc07ebff2eb1443c18790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQIANA7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSC1R1YjiENNVnAtvRceJwV8F0fy9y3zaxQ6jXd7waZAiEAidIiH5veQY3dfMWFl1TYZt0PrA5Pj%2FI%2B0JsQJ8Bxu8Eq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKNtOC%2Fi8qxUDkf3PyrcA%2FH%2FtQJ%2B0oulKGBTUB6Htv1tA9Ti3Mi%2Fwt988tJdCB%2ByZB%2BL30JRsi1tdEr6Uld8STvMcJK%2BeFm%2FiURzOodGI4m1%2F8ef6wrD4IYoQO4htFFpMAeh%2BtRsX7n5tpuTHf1HRZZKNbpwum6ISQcC58iwhqGmbBoN3%2Bd8pDSuHfB4HYKdOm%2Fgub1%2BbrBYzJOwNn9Cpr4GnoTe4BHhv5acevBtd2Kr1Xos9NFQRgq69W02Xvy42fZjjJVZ85NYJUi%2Bj1WhJHjENPnXtT%2BjHyvwOX9kCm80nMyqKCecChLui3bFVGESKQqN%2FPwWvEJagxRkuMFljBZkFpTEVTxKVKVY6LBBy1FBdP8tGqyPWY0jlYTZJKXZMUKHw%2BiqTfQ%2Fxbl1FUfYDS9UIDDAXOtWE9dYDCA%2Fht%2Bjn9iCs5Uwh8qyoqqRb04fl%2BKXarEXe2Hxco81ONDXbbxyooPsrj9wd18gbnYYKVU8AaGt7OPaUp623LNN9fb9LdoYwrJ0fGVGzW7lVlJMeFOQfenbYZ1v6Imz2gk2LnEq%2By%2FVzCnxsY%2FNOXdsdQsypVscNntjf7zplzfjuGVgQQW53bb5JDtSLjbTbOiek3IvmR9TcQLzRdaVfAu39g07ifJHjUc6P6PusSwgMNfhy8kGOqUBt%2BAwACm1EU0YP5LVwRFmTTCZPj4zKgGfQUY3rMXmUDiZQh6nG%2FaoHFQq9qUOvDgi04sPtxcxcBHHiqRMCJ%2FMihM1picLfPDyYvxkt5caX77hNqYCqpWGauEIGqfE%2BsJF9y5CXO2ZYZtov%2FUbZXS8So5SDDpImcOpWmq%2FGPwi79HTV9NIqus4aBIVaKAo3M8w4Cv1T%2BHCckT%2FjaswsB1CBz1mSe2Y&X-Amz-Signature=bc5317626ae892de5d4cef37a3b85bb37154d21626015bc7d88035cb7d279d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

