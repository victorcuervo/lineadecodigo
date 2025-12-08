---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XEZFP3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYw6jv84K1%2F9581Dt2wgG%2BK9B5GgOyYZIC%2FFdVNznUSQIhAITwoZ5d9Gqxf92EfmSHRYpfb2W1FdFv%2BVHTR52WUOFqKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfOOAwIGM4YilMYE8q3AOPBzD58YRWORQtxi10gxSj1WDjkj6nJSJqO2LelpZgy24qzhTC4tuBCkYz3p8xi8Yh%2FegzKCIa7iDu2GnJASbI2KUHI6%2BSBr7afLyCIS0EpvaBLkCSxR6Bl83TdU6yGZN9XHHcVrPWlpPx4AgSIhtmwJspAPbFzzcyWwVhFoMsPFQI3yFjS3QRjBFbaOAo0UNbTA8bxFb7jxa04lYSwJuOvnNHJ9BqIoFV81ZTnyQWxSeRHXV%2BCiub0bQT6iCkC0ajLaci2HyNvMf0OH0KjvbkEZWjoJCR%2Bx6s%2FquyZwpVDXy0oxvMEwwjnkPmmHOqp4bzyEZFHBHyrJz71rJ2PmcphBD6Ppf2jiTgRqEEp0umvoQbvnd2syBI%2Fk6RBaiDVXCfIJ96QuHwoiRsrC5bQJQStFqY0ZYdiG%2FiqAvHrJWu%2FOia0esIch6y%2BVPf8dsQF4o63Gq2yvPw63QAypmO%2FryP5bV87KYFt5X9mQZ3DEzNVTgSi4SpBwyRgW7vJScR%2F9pcc6gIymBSDc80t5UF0ANS6jGcXoy2oB7ERqeSvE3SRBf5lT00wMpR9gjOGlBozEggByiGjJMVg38rKUwcwN9HUZ%2F3xX7EZukNJ0x7rheuT3yDmchm9%2F1m2pF%2BezDtodjJBjqkAT8DkhHGRzVsfaILc68vAXD1rBdqJYahmqr6tfPJiRUmANg3cNsJGPn%2Bp1K65jKN4I85C5apXuXxrmGfoDahKLI3VzYz6P%2F%2BV%2B0voygodjgVCZqlvslntE4l92iI83o%2FeuUIIu8n2a5xe3ngEoK6kfcDvAuyqOCoykdNTiySkP%2BAO0v8uDq5fnVoIcENYxj6FJzfv%2FlxZd9wc8zwQX9W77e6Cwmk&X-Amz-Signature=7361edda4c5fe505a95f193d71d6ed57dd9a799e95f94b15c7d731c7881a52f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4XEZFP3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYw6jv84K1%2F9581Dt2wgG%2BK9B5GgOyYZIC%2FFdVNznUSQIhAITwoZ5d9Gqxf92EfmSHRYpfb2W1FdFv%2BVHTR52WUOFqKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfOOAwIGM4YilMYE8q3AOPBzD58YRWORQtxi10gxSj1WDjkj6nJSJqO2LelpZgy24qzhTC4tuBCkYz3p8xi8Yh%2FegzKCIa7iDu2GnJASbI2KUHI6%2BSBr7afLyCIS0EpvaBLkCSxR6Bl83TdU6yGZN9XHHcVrPWlpPx4AgSIhtmwJspAPbFzzcyWwVhFoMsPFQI3yFjS3QRjBFbaOAo0UNbTA8bxFb7jxa04lYSwJuOvnNHJ9BqIoFV81ZTnyQWxSeRHXV%2BCiub0bQT6iCkC0ajLaci2HyNvMf0OH0KjvbkEZWjoJCR%2Bx6s%2FquyZwpVDXy0oxvMEwwjnkPmmHOqp4bzyEZFHBHyrJz71rJ2PmcphBD6Ppf2jiTgRqEEp0umvoQbvnd2syBI%2Fk6RBaiDVXCfIJ96QuHwoiRsrC5bQJQStFqY0ZYdiG%2FiqAvHrJWu%2FOia0esIch6y%2BVPf8dsQF4o63Gq2yvPw63QAypmO%2FryP5bV87KYFt5X9mQZ3DEzNVTgSi4SpBwyRgW7vJScR%2F9pcc6gIymBSDc80t5UF0ANS6jGcXoy2oB7ERqeSvE3SRBf5lT00wMpR9gjOGlBozEggByiGjJMVg38rKUwcwN9HUZ%2F3xX7EZukNJ0x7rheuT3yDmchm9%2F1m2pF%2BezDtodjJBjqkAT8DkhHGRzVsfaILc68vAXD1rBdqJYahmqr6tfPJiRUmANg3cNsJGPn%2Bp1K65jKN4I85C5apXuXxrmGfoDahKLI3VzYz6P%2F%2BV%2B0voygodjgVCZqlvslntE4l92iI83o%2FeuUIIu8n2a5xe3ngEoK6kfcDvAuyqOCoykdNTiySkP%2BAO0v8uDq5fnVoIcENYxj6FJzfv%2FlxZd9wc8zwQX9W77e6Cwmk&X-Amz-Signature=8288eea096659de4b439d82623e50fc6334b7d5f4592b595aed0f62196c80602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

