---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7QDSGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC064wymzZXzq4qEtbmA9XU5ywR0VCO2rSDaPqXQ6auOwIhAN1A%2FR4zfSWJi3m0AH8gNBXSvASAJHOPVwFpbKgwK2iQKv8DCG0QABoMNjM3NDIzMTgzODA1IgyY4e0GNlV84k%2BsJ08q3AMDUrWbQpu6%2FxLCKMmbTjiM9IQi8ZuRSoxrkPDiCcwwCX1HDSd0cGxigQk4V8G%2F7EUGSeUG24YF2KKaQpFuQ5KB8YRJpkgUXuHeAl9NC3ZDMagMFbYdCIIHXrags2SRnUcYNfVYCxLUaJ3kKqd0fCoKtJOEuNwP96177T6gVed0ByOpMfetwUeIzPKX4LjMfbog6vom%2FlXnQ3XMJPSz5LEZrbChEE8juH0Tv8k0QZgJ7FNUlbzcEHrmRttQR3qVvvSZrJa01SlN5E89nzltUDyX3jdpKwFN6%2Bu%2F8rH60dmI7MXT%2F5OWpJiocjBrlN2iaTAJItfo%2FDSWkBk2aSosGwgMmJzoDbYDH3glfXcs1PgMiloh3eJzQ%2Bcp0TwOH2axXR6mBqzsW%2FOBsZvWkTj3ifuOPD3HQQiGCL3z3jz5dw3a376FP5vlg6MFaQl6ucHJEFcte2OBLJkD2flNKE8woxwhV29LdfK1BlOan0NuunIlvnxMl9gVg07YJKEl5NCnbBtc211fMj%2F1ytu5%2FEgWS%2BBEwMQ%2BZv%2FeLx7NEMnMke%2FfVAa8z1XHP6dimCdJDNsJu34FCdCw23%2FISnXsDVdlryTIYj4KzsFZ8UwvObfuqWPLZGx%2FmoEv%2FlFu6IDY0TDJw87JBjqkAcZDOmFn5jagh9zVExEi4v8FSsyYRtFJ4G4ftXU005ZFUkhEjhxoVYW6OK9NX7cZwuA97G3%2BNsJXjJdEys20cLKedvghyoQYk84nAUrSHIwimlEgz1%2F1v0wst8JXjXQGSvXvd6mk7yKeNRigYiFCqCNFlRQMWdbAG3hA25lK%2BJxxOlTBqz1IoIfn2%2BYsQCHgNKox8gAtpuBS5Rpy%2B1%2FH634k%2Bmq1&X-Amz-Signature=86dbb84e93c4d0bb1bb04fed0069dde21e96d88cbe88bd2bf6041e99e49aaac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7QDSGZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC064wymzZXzq4qEtbmA9XU5ywR0VCO2rSDaPqXQ6auOwIhAN1A%2FR4zfSWJi3m0AH8gNBXSvASAJHOPVwFpbKgwK2iQKv8DCG0QABoMNjM3NDIzMTgzODA1IgyY4e0GNlV84k%2BsJ08q3AMDUrWbQpu6%2FxLCKMmbTjiM9IQi8ZuRSoxrkPDiCcwwCX1HDSd0cGxigQk4V8G%2F7EUGSeUG24YF2KKaQpFuQ5KB8YRJpkgUXuHeAl9NC3ZDMagMFbYdCIIHXrags2SRnUcYNfVYCxLUaJ3kKqd0fCoKtJOEuNwP96177T6gVed0ByOpMfetwUeIzPKX4LjMfbog6vom%2FlXnQ3XMJPSz5LEZrbChEE8juH0Tv8k0QZgJ7FNUlbzcEHrmRttQR3qVvvSZrJa01SlN5E89nzltUDyX3jdpKwFN6%2Bu%2F8rH60dmI7MXT%2F5OWpJiocjBrlN2iaTAJItfo%2FDSWkBk2aSosGwgMmJzoDbYDH3glfXcs1PgMiloh3eJzQ%2Bcp0TwOH2axXR6mBqzsW%2FOBsZvWkTj3ifuOPD3HQQiGCL3z3jz5dw3a376FP5vlg6MFaQl6ucHJEFcte2OBLJkD2flNKE8woxwhV29LdfK1BlOan0NuunIlvnxMl9gVg07YJKEl5NCnbBtc211fMj%2F1ytu5%2FEgWS%2BBEwMQ%2BZv%2FeLx7NEMnMke%2FfVAa8z1XHP6dimCdJDNsJu34FCdCw23%2FISnXsDVdlryTIYj4KzsFZ8UwvObfuqWPLZGx%2FmoEv%2FlFu6IDY0TDJw87JBjqkAcZDOmFn5jagh9zVExEi4v8FSsyYRtFJ4G4ftXU005ZFUkhEjhxoVYW6OK9NX7cZwuA97G3%2BNsJXjJdEys20cLKedvghyoQYk84nAUrSHIwimlEgz1%2F1v0wst8JXjXQGSvXvd6mk7yKeNRigYiFCqCNFlRQMWdbAG3hA25lK%2BJxxOlTBqz1IoIfn2%2BYsQCHgNKox8gAtpuBS5Rpy%2B1%2FH634k%2Bmq1&X-Amz-Signature=23dc1615e841ed1fbc3cbd5571f22f10965198ec058eb1156453f7ececcc4cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

