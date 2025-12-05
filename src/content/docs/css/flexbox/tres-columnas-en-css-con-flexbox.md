---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUSGTG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BF%2FcFqj5Oth6%2BiyACrDN3E%2FJiYFl4kiEllaYcAP1TcAiEAwh3CNaNwB76GUG8wfG%2BxZtMlABcnqN6nuVY4%2FB7xHocq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpisf8AbAIS6YPeFCrcA9rVCXqNDTkobDuAn6o1xQV%2BQtLaGqzVCbsSBURnTw75h68YNWtRCZlO7Wz6bUIx0QGbxRAPOaD8OvMi870FF9%2FKTmzUwaWcctRNIqtBjoXKyadg%2FPzYhkIvWhaTkenfL0YuaSizJJ6B0aIaoZLpfvv3StSkP%2F9tLZnV8p89t4nSueVhDlpF4b9QclgH4FFNsJ76gaGh942L5Vl6CxyLNw9xVC%2Flm4fXnHsbnVnhdpXbW5NL1S8e08xd3SiisRWDf6p6zr3khLbaS8DXl593XrBcanc%2BUviyEp1%2F5D4kxncRe1HLiMKrVOZU5BztdISN9kV1wvJ15nvdAzaBiXaVod%2F6%2BOzvSUou8p6zmrjp22wwqg0YoPvkZJh%2FzROmBFySJQlYo0f4AmVP1qnyG7sGFa1Hy%2BfgU1PvLAhTC4uEAbPvpYyRfT9IduNv4hgNl85AZDfdcGyV6T3eEKLJJWFL3f3A4dRdtpWa8enL1FLBVZjfyND9V%2BFHknn9bQSW0SuMkMa4ENBgdnZQDx4gSXXqqSVQgS36CoKO8YkQnF%2Bgmi7pJx9LPg7td9in3y8wjBPCTynuwwuJDifYLIVyOgAQxQRiEQE093CTqlNbHLADegl1h77w7tUpYJdvEoFzMOPNyskGOqUBKjNW9xRJVrTRNSmaVmYGA7xPddDvJo4%2F2eJsjhUdHTwNnNqZTDGJPtam2uQzFuiOFgxpJ%2BwvBXl8eH4T%2F6Va%2BfdMngzb%2FbmrMvCAmidd%2BfIYMsc72HJzgmqUGmgY2j%2Bv68bxIc4DSJ2W%2FCxBYV1wm5TIaox6qnUSGxIfElXdUwzX%2Bw4yVanYGmBO0%2FbPF922m6gYZ2nlc4Ep6Ki7vJMQbeM07Mw8&X-Amz-Signature=2199de5e03b56c4d0c4d3312bfb794b172ed085b3269c40a0af24bbaafceb350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZUSGTG4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BF%2FcFqj5Oth6%2BiyACrDN3E%2FJiYFl4kiEllaYcAP1TcAiEAwh3CNaNwB76GUG8wfG%2BxZtMlABcnqN6nuVY4%2FB7xHocq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJpisf8AbAIS6YPeFCrcA9rVCXqNDTkobDuAn6o1xQV%2BQtLaGqzVCbsSBURnTw75h68YNWtRCZlO7Wz6bUIx0QGbxRAPOaD8OvMi870FF9%2FKTmzUwaWcctRNIqtBjoXKyadg%2FPzYhkIvWhaTkenfL0YuaSizJJ6B0aIaoZLpfvv3StSkP%2F9tLZnV8p89t4nSueVhDlpF4b9QclgH4FFNsJ76gaGh942L5Vl6CxyLNw9xVC%2Flm4fXnHsbnVnhdpXbW5NL1S8e08xd3SiisRWDf6p6zr3khLbaS8DXl593XrBcanc%2BUviyEp1%2F5D4kxncRe1HLiMKrVOZU5BztdISN9kV1wvJ15nvdAzaBiXaVod%2F6%2BOzvSUou8p6zmrjp22wwqg0YoPvkZJh%2FzROmBFySJQlYo0f4AmVP1qnyG7sGFa1Hy%2BfgU1PvLAhTC4uEAbPvpYyRfT9IduNv4hgNl85AZDfdcGyV6T3eEKLJJWFL3f3A4dRdtpWa8enL1FLBVZjfyND9V%2BFHknn9bQSW0SuMkMa4ENBgdnZQDx4gSXXqqSVQgS36CoKO8YkQnF%2Bgmi7pJx9LPg7td9in3y8wjBPCTynuwwuJDifYLIVyOgAQxQRiEQE093CTqlNbHLADegl1h77w7tUpYJdvEoFzMOPNyskGOqUBKjNW9xRJVrTRNSmaVmYGA7xPddDvJo4%2F2eJsjhUdHTwNnNqZTDGJPtam2uQzFuiOFgxpJ%2BwvBXl8eH4T%2F6Va%2BfdMngzb%2FbmrMvCAmidd%2BfIYMsc72HJzgmqUGmgY2j%2Bv68bxIc4DSJ2W%2FCxBYV1wm5TIaox6qnUSGxIfElXdUwzX%2Bw4yVanYGmBO0%2FbPF922m6gYZ2nlc4Ep6Ki7vJMQbeM07Mw8&X-Amz-Signature=3d4cd2f5ad2be31aa41ab1617b34f466089a630ecbf0cdf93ce034b26106a72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

