---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQHFV6U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClcrg7IfyPwuXCaYHG4WDk597usjTzHPqYkn5bX2JcCAIhAPbUZWnYIcQU1NOfeLQQFo%2FR4ufp23x8hHofAYCluLu%2BKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdmkC%2FZCVzn9z2E9Uq3ANlNNzd3ARhwpV3Trq2Z3D7NGMa2vB9k46j7qEdJ9pi4bIjfPSd09G1JueeayG5mDIrJP8jr33AwkaP5gKPGCFdlmh%2Fql%2FPwUAqNJO0bHpxT7EeBgzS9eK0XETLHUM1jpM7sh4TzqpWtzvMxZd0twNMGnIpuqXKlyNOrNuJqPFzNJxnuvJlZtdIhyZ0gUETIEgez5JRt85iAABEL5VNVHeWlVOUGG96nHbBo5OGFE6oLZN%2B%2FDJkkjRR4wMtnmjYPvX2Ds170KzDoV%2Fvywc3NlLVjG8vMIyEqK7SiU4cH%2FdFU92fO7StCr6igIpsDUYahWM%2FZvcYuNE%2F2LZmwUxG%2FNlXETkw%2FFySyrYGsEnkVeka8Q9M8XM57%2BitSo4KHqpWcKKXBiQek6tYo7vGT5TywnIL9xxeZqfrvNu7oZdRhrTnd4l4RLeWVOAdS%2Bsc1eLQIbT%2F2J9Zc7kmInV5dU3ZtqwQtaoMPBoztAegjiWHoxOG9jC8hP9gTH6I%2B%2BnuWx1ZR7xCXCP9jXYsegc4Dzy8y3tYv3fXTxBqTOKoyMBHGR3GEkyxOiQOzkjRaBn4ioI6PgUVzHYkU2Tkf5Yk0nrbjQlY%2F86BG6GpJhipsYkJeXywDADECkkB02vIJyuK%2FjDkj9vJBjqkAShmFQDrETCb%2Fx1PQKi2xQ53qoigd%2BBv44yP4RUuGEFjdqL8g8Kwa5oN39eVj05iXJJdUa%2F56xUmmST7C8RvTMQuCxUEfNvYzfrPVS6E9FjxFirsZ1RLJwUxrwbwyLpGODrUsgBfgqW1Vovw5Vuca1y80Se5UkL%2FRULBtqYPdYZE4hzv76AByWWuzyz9yyMyEawaLRBMAciU6Qrz1skwYdDAGbFt&X-Amz-Signature=1221ad5575dcd5967330cb3874f5fd21f67ba3de0beb1559fde6e5686da68507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SQHFV6U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClcrg7IfyPwuXCaYHG4WDk597usjTzHPqYkn5bX2JcCAIhAPbUZWnYIcQU1NOfeLQQFo%2FR4ufp23x8hHofAYCluLu%2BKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdmkC%2FZCVzn9z2E9Uq3ANlNNzd3ARhwpV3Trq2Z3D7NGMa2vB9k46j7qEdJ9pi4bIjfPSd09G1JueeayG5mDIrJP8jr33AwkaP5gKPGCFdlmh%2Fql%2FPwUAqNJO0bHpxT7EeBgzS9eK0XETLHUM1jpM7sh4TzqpWtzvMxZd0twNMGnIpuqXKlyNOrNuJqPFzNJxnuvJlZtdIhyZ0gUETIEgez5JRt85iAABEL5VNVHeWlVOUGG96nHbBo5OGFE6oLZN%2B%2FDJkkjRR4wMtnmjYPvX2Ds170KzDoV%2Fvywc3NlLVjG8vMIyEqK7SiU4cH%2FdFU92fO7StCr6igIpsDUYahWM%2FZvcYuNE%2F2LZmwUxG%2FNlXETkw%2FFySyrYGsEnkVeka8Q9M8XM57%2BitSo4KHqpWcKKXBiQek6tYo7vGT5TywnIL9xxeZqfrvNu7oZdRhrTnd4l4RLeWVOAdS%2Bsc1eLQIbT%2F2J9Zc7kmInV5dU3ZtqwQtaoMPBoztAegjiWHoxOG9jC8hP9gTH6I%2B%2BnuWx1ZR7xCXCP9jXYsegc4Dzy8y3tYv3fXTxBqTOKoyMBHGR3GEkyxOiQOzkjRaBn4ioI6PgUVzHYkU2Tkf5Yk0nrbjQlY%2F86BG6GpJhipsYkJeXywDADECkkB02vIJyuK%2FjDkj9vJBjqkAShmFQDrETCb%2Fx1PQKi2xQ53qoigd%2BBv44yP4RUuGEFjdqL8g8Kwa5oN39eVj05iXJJdUa%2F56xUmmST7C8RvTMQuCxUEfNvYzfrPVS6E9FjxFirsZ1RLJwUxrwbwyLpGODrUsgBfgqW1Vovw5Vuca1y80Se5UkL%2FRULBtqYPdYZE4hzv76AByWWuzyz9yyMyEawaLRBMAciU6Qrz1skwYdDAGbFt&X-Amz-Signature=a1a2c78d263cbbfa2fd4a6ee89600f41441e557f20ce3c1be04aef20fdb3674d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

