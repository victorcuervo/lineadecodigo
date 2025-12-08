---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVP5HKZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGmuFCpApoE6LA%2F4RCU1xmkXtSrH51x%2BEC18aBGl76IAiEAsOZgLfDKa%2FxtjLTAy5056lvRurxFdWrHTvqCBZtZtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Ba7ViL3EdwqpcRUSrcAxMA3au3MPAg57ATkD7vEcX1viNUDBCQRCEIAL%2BP64OLrvnj6adBLFTIarRj%2FmkphbOlOg310dIvEvkX7GKwgCDLEI%2FE3x5dx%2FDgIAYiWNd0iU4boyDEUqGCmCn%2FCpMW%2BrZloJfXBciAQ42VcOGlAA5C31OMrBe9Sr3BeWOAP%2BJgnozDu6Q2eF2uZ7We44whZRcF7HCz4FFMbwsHQFlM9Ya0Yq%2F9ri151WX5nb0SE7dzChxK5LaH0%2FUapUP19EJqVq0Ml9uaDss7XSd7aNMeqHGhnNsa%2FdBmPV9BFInRbMtRVrz2DJQ1GDbVStVo1OS9zh2KG6EUZ58EUxzeIBGGVQFeSA%2FB6yWWmVIudtbYSrLeSk7HNwsbJB7W8DYH1tY0Cx2tftcAULOuYo4vBBf7kkyOEaJ%2BDLYQQl84sdpiysdHmGZIB8Cwi2d%2FUeY9sdDNvjfp%2FV4UXhKIoaj2QhJjDmPJUtnobeme%2B763TcfG9es3PQbahTVo5mCTw9B0v7ceXx5hPHND%2FMA5lbhDqN75hxzm3KnYlHaoRhR95UCJSVTOTDwM%2BnzzKYXZwZcZ5u%2F67IYZ9ikAMWXbHc7bxXf6ZPNukqEbUxaeYHrcCHw21BY12gDQesSMJgMTUGDaMMHt2ckGOqUBWVaBDkGGFwPZ%2F7MU1hSD1wQghSD3fHPYIKYPgvFgoZ1Rsuxa6xtNsXvFhhTfejjxS0MduonZKXgL4TnmR9S3FRIBqSCzIu%2BMCLtktXtYx8ygL6sUHkmw%2F7YE1bEXLfP4AoVMsCaYi9jZPkU%2B6RBEzJRfDU%2FvQnCnNWY9WjZdAXCaiihcsvEZmQaUEL%2Bqo65kibIMns%2BJ8OLcfWh9jtFWeSoSiSLs&X-Amz-Signature=9c9ff5d80e199ec93ca3c4ee2d9f54e8d17f0d24e629ac7b9a1cfb7990db706c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVP5HKZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGmuFCpApoE6LA%2F4RCU1xmkXtSrH51x%2BEC18aBGl76IAiEAsOZgLfDKa%2FxtjLTAy5056lvRurxFdWrHTvqCBZtZtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Ba7ViL3EdwqpcRUSrcAxMA3au3MPAg57ATkD7vEcX1viNUDBCQRCEIAL%2BP64OLrvnj6adBLFTIarRj%2FmkphbOlOg310dIvEvkX7GKwgCDLEI%2FE3x5dx%2FDgIAYiWNd0iU4boyDEUqGCmCn%2FCpMW%2BrZloJfXBciAQ42VcOGlAA5C31OMrBe9Sr3BeWOAP%2BJgnozDu6Q2eF2uZ7We44whZRcF7HCz4FFMbwsHQFlM9Ya0Yq%2F9ri151WX5nb0SE7dzChxK5LaH0%2FUapUP19EJqVq0Ml9uaDss7XSd7aNMeqHGhnNsa%2FdBmPV9BFInRbMtRVrz2DJQ1GDbVStVo1OS9zh2KG6EUZ58EUxzeIBGGVQFeSA%2FB6yWWmVIudtbYSrLeSk7HNwsbJB7W8DYH1tY0Cx2tftcAULOuYo4vBBf7kkyOEaJ%2BDLYQQl84sdpiysdHmGZIB8Cwi2d%2FUeY9sdDNvjfp%2FV4UXhKIoaj2QhJjDmPJUtnobeme%2B763TcfG9es3PQbahTVo5mCTw9B0v7ceXx5hPHND%2FMA5lbhDqN75hxzm3KnYlHaoRhR95UCJSVTOTDwM%2BnzzKYXZwZcZ5u%2F67IYZ9ikAMWXbHc7bxXf6ZPNukqEbUxaeYHrcCHw21BY12gDQesSMJgMTUGDaMMHt2ckGOqUBWVaBDkGGFwPZ%2F7MU1hSD1wQghSD3fHPYIKYPgvFgoZ1Rsuxa6xtNsXvFhhTfejjxS0MduonZKXgL4TnmR9S3FRIBqSCzIu%2BMCLtktXtYx8ygL6sUHkmw%2F7YE1bEXLfP4AoVMsCaYi9jZPkU%2B6RBEzJRfDU%2FvQnCnNWY9WjZdAXCaiihcsvEZmQaUEL%2Bqo65kibIMns%2BJ8OLcfWh9jtFWeSoSiSLs&X-Amz-Signature=78d36af23ab267212e4dfd4f30459ae52feff889edf13cb9fe02be090168301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

