---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJRTGGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCaKDUtlk3gGuWquVhN7IUGbdpghe4oxapGAdfeuwKXgIgc81osnCt9ub7AOJBKYRlVxRcSJXl21xdweNldwxQw%2FwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt6lHo9j2Tbd8UYCCrcA0xlOP4p%2BJM2Y6aGMCo4kgockJxXJUyLPkcT3E9MHIQmdiMU%2Bb8OveKbiWyiZsF40k9bv%2F%2FSBd8SSVPjgLN57ulvsQDb8AZGk1dU1NTHbf2Ykz5anBws8wW1hO%2FYkjWpD%2F%2FyAhCpamXSA7zQQ0BOSOxbXr%2BeTdbbdvOn5svOSII0LKh9BUhBF0fcWLAJnuxlm9ncD1kxA20kNR0%2F%2F6IaiqmEiHr2SKSzEjnVUVwfmIU4HOzw9AL95ZdqZjbazW3jqIx47dJD4Um4E0NkhRhAClqG%2F4ODj3VnQGrsJPlxYkYl9Qk1TwAL0TdrXfM2o1RtqJ3hejV%2FLNX3f7yoFU8Gbi2%2BugoRTvFubDraOm6dXjpsl4IJJEILLlWAIHatQ2I0gJ5Xi8H5acg3tu%2BUiRnXscqqg%2FRghRrtO4MqHcnMYtFlXnxBjjyNSmDopHb5Iq6l6wMyDb18dIAkMkiNSAJMVMEmY5VRytNCnRtzvGqnzuzxHrCKewATrEhZxF0yd0ec45UV7T06FSqon0RPAxY0fG3m28JCfoZIzBL4Ru6Wqq4dFN1cU3iIwlF92oYeQUwal5YnFw%2BN5HA67Osz8eiAzuUKqIx3o0I0N%2B5S4gYUf%2FedmFeXdDQc8r7SWkFbMNTt2ckGOqUBdYw99%2F9C1In%2BqtXI8RzdMkClgJMgcUgCTjq34So7MpFAZZUgNEEiG%2BJLvvsJrbtCGrJiYU0CAhbGH9yHN3WU4St7Wc5O%2FMWrvbl9M6la0XlBkPM8hz6Mn%2FkyVHc7Bl6VtnpqIgdsK0x463gZiYZtO0iyO1NUgOGE4o0X6PEfdkGYllvERLyD2lys3UUvi86MgE%2BY64VrBKfg6Lv54nucW8qc4wZr&X-Amz-Signature=f2fdc1e5ccfbb78ebe550fae28feaa6aaaeb7bc27268ecdafed17ededa5295e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJRTGGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCaKDUtlk3gGuWquVhN7IUGbdpghe4oxapGAdfeuwKXgIgc81osnCt9ub7AOJBKYRlVxRcSJXl21xdweNldwxQw%2FwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt6lHo9j2Tbd8UYCCrcA0xlOP4p%2BJM2Y6aGMCo4kgockJxXJUyLPkcT3E9MHIQmdiMU%2Bb8OveKbiWyiZsF40k9bv%2F%2FSBd8SSVPjgLN57ulvsQDb8AZGk1dU1NTHbf2Ykz5anBws8wW1hO%2FYkjWpD%2F%2FyAhCpamXSA7zQQ0BOSOxbXr%2BeTdbbdvOn5svOSII0LKh9BUhBF0fcWLAJnuxlm9ncD1kxA20kNR0%2F%2F6IaiqmEiHr2SKSzEjnVUVwfmIU4HOzw9AL95ZdqZjbazW3jqIx47dJD4Um4E0NkhRhAClqG%2F4ODj3VnQGrsJPlxYkYl9Qk1TwAL0TdrXfM2o1RtqJ3hejV%2FLNX3f7yoFU8Gbi2%2BugoRTvFubDraOm6dXjpsl4IJJEILLlWAIHatQ2I0gJ5Xi8H5acg3tu%2BUiRnXscqqg%2FRghRrtO4MqHcnMYtFlXnxBjjyNSmDopHb5Iq6l6wMyDb18dIAkMkiNSAJMVMEmY5VRytNCnRtzvGqnzuzxHrCKewATrEhZxF0yd0ec45UV7T06FSqon0RPAxY0fG3m28JCfoZIzBL4Ru6Wqq4dFN1cU3iIwlF92oYeQUwal5YnFw%2BN5HA67Osz8eiAzuUKqIx3o0I0N%2B5S4gYUf%2FedmFeXdDQc8r7SWkFbMNTt2ckGOqUBdYw99%2F9C1In%2BqtXI8RzdMkClgJMgcUgCTjq34So7MpFAZZUgNEEiG%2BJLvvsJrbtCGrJiYU0CAhbGH9yHN3WU4St7Wc5O%2FMWrvbl9M6la0XlBkPM8hz6Mn%2FkyVHc7Bl6VtnpqIgdsK0x463gZiYZtO0iyO1NUgOGE4o0X6PEfdkGYllvERLyD2lys3UUvi86MgE%2BY64VrBKfg6Lv54nucW8qc4wZr&X-Amz-Signature=b3a594fe4662d582f3e72f49749abf2421e80ce2c558322454799a76b48a4c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

