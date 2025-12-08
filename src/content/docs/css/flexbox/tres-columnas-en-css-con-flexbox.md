---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLLMJ7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfr%2FUzBK2uH8NgxKXEicGlnr%2B39N1sU0SHKhAn384oyAIgfcEuPpZkKRaAgeNB4ti1DN5ugwQuEVvxABn6HvDJvSMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAx1xsPH1NzRWaXQ4yrcAwY6VpYWtlTN0SJYYqS11buFdOw1l1vyVWA78KzXBd456H5u5Jlb6SyNsHLrF9O0J8gVr069%2FYcHUYALxu64mGj%2BLQanYocxgTHbUyBAB41Ted%2B7AJ1j8e39PyxRvX8Z5kCqD0FqhlPhBWZixDPlsd2akIzbSW1gBdX6pHksLcC8XfEyLA5YYuTIfqOiPyCuTpAIGLK8e6GAjO9buOYdxEQaRDrD98NMKgqjGIktNEPlCsxO1sePhR9aICWdrqa3x63BrNy01tZBNSWIV8AvmXYr6kXeBdU7lWWXk6vhfDEf0bxSCyxFQqzAZSWipBka8rvwW2HydqZHu0F9lTkOMi6RJpVoCMFg4a3BCX6%2Bt4AHul%2FIpZqhjhnBqUbYlg%2BMdYJTqNVwsjuoEKrMy2Qwtj0jcz%2FsFWnF0zOWTkHsx%2FoMBTFbwN7Cdp3HPYVm9eP1yal4%2FhD6ZHvoPhU4Y3yKfEAnYalsXjb589l0OvpEkheA%2ByvNPhdqhrmIu6euvDAEGWgYEK0aUhoUQgJTvRUTfTdTQp65DyUAownhHX2TnUC%2BNP68Vz8XVmEWD33wWtgWBRxx%2FBIJLqFGnR3DvZ9KrpB8wx8OV%2Fut269eAEOE6HXtgQEAPnmSVWDDDHpdMKKA3ckGOqUB8NokCeKThFoMqOZU0To7otaZQjtx8JVawUQpuqP1pGzuakjOjUoUxF8zEU4d0t3fatvL1AKO2MRpduQ2agjUEPSuXocbm%2Fsxvxqt3Eoo5R2nzhlm8J8PSWsugFUmuBg0WqZU20yFUwjWv%2FaCXdPRIBp21gp4g2QM429sxaLYTYEBW7lAv0tb9EeXgZzw8nio6YCvPwfWO9tRVtd5D4t6LUEr9sXv&X-Amz-Signature=a95928f8bd2a118d3f1fdbe10925a53af30a047bc46c24632e3192490899d988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLLMJ7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfr%2FUzBK2uH8NgxKXEicGlnr%2B39N1sU0SHKhAn384oyAIgfcEuPpZkKRaAgeNB4ti1DN5ugwQuEVvxABn6HvDJvSMqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAx1xsPH1NzRWaXQ4yrcAwY6VpYWtlTN0SJYYqS11buFdOw1l1vyVWA78KzXBd456H5u5Jlb6SyNsHLrF9O0J8gVr069%2FYcHUYALxu64mGj%2BLQanYocxgTHbUyBAB41Ted%2B7AJ1j8e39PyxRvX8Z5kCqD0FqhlPhBWZixDPlsd2akIzbSW1gBdX6pHksLcC8XfEyLA5YYuTIfqOiPyCuTpAIGLK8e6GAjO9buOYdxEQaRDrD98NMKgqjGIktNEPlCsxO1sePhR9aICWdrqa3x63BrNy01tZBNSWIV8AvmXYr6kXeBdU7lWWXk6vhfDEf0bxSCyxFQqzAZSWipBka8rvwW2HydqZHu0F9lTkOMi6RJpVoCMFg4a3BCX6%2Bt4AHul%2FIpZqhjhnBqUbYlg%2BMdYJTqNVwsjuoEKrMy2Qwtj0jcz%2FsFWnF0zOWTkHsx%2FoMBTFbwN7Cdp3HPYVm9eP1yal4%2FhD6ZHvoPhU4Y3yKfEAnYalsXjb589l0OvpEkheA%2ByvNPhdqhrmIu6euvDAEGWgYEK0aUhoUQgJTvRUTfTdTQp65DyUAownhHX2TnUC%2BNP68Vz8XVmEWD33wWtgWBRxx%2FBIJLqFGnR3DvZ9KrpB8wx8OV%2Fut269eAEOE6HXtgQEAPnmSVWDDDHpdMKKA3ckGOqUB8NokCeKThFoMqOZU0To7otaZQjtx8JVawUQpuqP1pGzuakjOjUoUxF8zEU4d0t3fatvL1AKO2MRpduQ2agjUEPSuXocbm%2Fsxvxqt3Eoo5R2nzhlm8J8PSWsugFUmuBg0WqZU20yFUwjWv%2FaCXdPRIBp21gp4g2QM429sxaLYTYEBW7lAv0tb9EeXgZzw8nio6YCvPwfWO9tRVtd5D4t6LUEr9sXv&X-Amz-Signature=cde9e4f60f763d72822dc8ab3b782e6d494e10dbc1e3494a1c6957e218acddfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

