---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKP24YI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn%2F4N3RU5tfBjqOdeDgZznIY94m3p6xF8G5ZwrLX1QKAiB%2FSgFwJxjD%2BGlw0VNYBPGmq274iY2z1OqXesoft466gir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiNG3WFmh3Lq7QOaBKtwDGK%2BZmi%2FDC2TOCZWWtvzM1D7ILgAG5fPMIMZVXxb%2Bfb5PgOzVRTlePr%2BEknGPg6TZdage0sq1BVPtuTuL9voI%2Becd8sHgqlNSexs2U9gKq9a1Et0zRuTaD7BWyzZf5LtAfBuZNTN1%2Fy8Y1Dtno4yLR9CSg%2BNgoIZQIcfXHAu9CT2ZwEMMiu%2BwKzIM83EFhfNczdjOchXSlESudxp3YfND9xGrr7%2FO%2F2anVHfB1H9BYueWza45z20WsxvUqUfIv7T%2FT4st%2FFXSXjVQuE04zNMkFHk93601HAa9rA%2FMsIqFuSjD8Sw4OEoxCMN%2F5kwqrtOVkJqUzEIrmowIw2Oqy%2FrQPxUUnzPmYBTd%2BJhKJADfnt3PgF9sna7pi%2Fbdqh8M00K%2FdZADaPaDMknoTtdiY19jWscOkSBXOAtwbKm72ukuHyYK45HGoeLxV1hZMm9srjJTQJjjX2CFBlMkKMTVpiy%2BRYqDwYsqk358bX8tmjs0vxkTXSWyzH5jvq4cOKmAw143QlHG%2BoIBsh4gDsy0UgtTacob7eYGAtLWJ3MP9Emr%2Fo8M4FwgsecrhtqaGei4sI1U0oY7%2Faepq0DhF%2BL4HBLKkWXihFdeDpaZT0HnNaaH%2BLCiooUrNmZxYr8TLy0w9Z7PyQY6pgHQBYJtvGmJYiMxOFJil96lrATG%2BH15iGUvhLikBg3BEi90GSwd6m%2BZng1WdNhCG4Fwln4h3YJkLbJyvaJXGc0rDOABIuAbxj7ZuWznQ6yPmVLqhoeaHmxYL18ycuPUQqJhlQ6wrw7VnW%2BlY5WPt8CE0zBeMWsGA3A%2BimtCShuuun0PnltNLT7EnYsL0BGzE%2BCa6BKgHg5NIrz18oOjX3lk49TmEx9r&X-Amz-Signature=48055a91f40fe5ee48a4b29b6954df0131c264161430c94375d84d2508d65751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDKP24YI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn%2F4N3RU5tfBjqOdeDgZznIY94m3p6xF8G5ZwrLX1QKAiB%2FSgFwJxjD%2BGlw0VNYBPGmq274iY2z1OqXesoft466gir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMiNG3WFmh3Lq7QOaBKtwDGK%2BZmi%2FDC2TOCZWWtvzM1D7ILgAG5fPMIMZVXxb%2Bfb5PgOzVRTlePr%2BEknGPg6TZdage0sq1BVPtuTuL9voI%2Becd8sHgqlNSexs2U9gKq9a1Et0zRuTaD7BWyzZf5LtAfBuZNTN1%2Fy8Y1Dtno4yLR9CSg%2BNgoIZQIcfXHAu9CT2ZwEMMiu%2BwKzIM83EFhfNczdjOchXSlESudxp3YfND9xGrr7%2FO%2F2anVHfB1H9BYueWza45z20WsxvUqUfIv7T%2FT4st%2FFXSXjVQuE04zNMkFHk93601HAa9rA%2FMsIqFuSjD8Sw4OEoxCMN%2F5kwqrtOVkJqUzEIrmowIw2Oqy%2FrQPxUUnzPmYBTd%2BJhKJADfnt3PgF9sna7pi%2Fbdqh8M00K%2FdZADaPaDMknoTtdiY19jWscOkSBXOAtwbKm72ukuHyYK45HGoeLxV1hZMm9srjJTQJjjX2CFBlMkKMTVpiy%2BRYqDwYsqk358bX8tmjs0vxkTXSWyzH5jvq4cOKmAw143QlHG%2BoIBsh4gDsy0UgtTacob7eYGAtLWJ3MP9Emr%2Fo8M4FwgsecrhtqaGei4sI1U0oY7%2Faepq0DhF%2BL4HBLKkWXihFdeDpaZT0HnNaaH%2BLCiooUrNmZxYr8TLy0w9Z7PyQY6pgHQBYJtvGmJYiMxOFJil96lrATG%2BH15iGUvhLikBg3BEi90GSwd6m%2BZng1WdNhCG4Fwln4h3YJkLbJyvaJXGc0rDOABIuAbxj7ZuWznQ6yPmVLqhoeaHmxYL18ycuPUQqJhlQ6wrw7VnW%2BlY5WPt8CE0zBeMWsGA3A%2BimtCShuuun0PnltNLT7EnYsL0BGzE%2BCa6BKgHg5NIrz18oOjX3lk49TmEx9r&X-Amz-Signature=f8d95e683164e6077978f67ec63ffdf742f2dde440e6c99a2fdba39164aa3cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

