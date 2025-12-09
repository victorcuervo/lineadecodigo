---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSGXV3K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGwZUbPJqGtqhzWnS6C%2Fe6Eox3YHh0yduEd%2FIOk%2FlgRAiEA21WKl62NrEFBawD0IPBHa%2F2GXZ%2B9e2kip2sPUh1i%2FJgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlPf%2FVGuX%2FSzTJVXSrcAxT0QK3udYEyIErySD4OIxUFZ8%2FhXdrTSLXEeC%2BtQvOm%2F0wPshxQkQ45Qvybm9LMSbGxNOrYdJrbgjJAw%2BHZQ7sYgz5UETzy7hKtqug9QcsFrX1tYMX4mN1i%2BAbr8akfffn7gmD8PVtjZM1gin4Xwr74wKqKYHJEnsjkWlDI9Grbut0uylzDN4jxWIOmNZJProlxmRudGaZ3lTiQMXh7JNkKU4cM3gitsk%2BxqVrYQ9pXED4%2FiWM0%2BJwlweG6T1jnhFhdp3NSqXERb1XRhNmnmSQDAM%2FureW8v6c3oz1a4NioEIehhj9z9inQ7K3133TtEUwTTDw43ifcnzTeA6FqH7SDwueT0lGnLRTx9AV%2BT0olL2gMJzBQ%2BlaXHlrtxMip7bsJQQSmtlISa4aI7GGoiCPKWsro4crvtPfIFzmz%2BNim5W2rUA2cSIQa%2F8xxIEWcScxt31FcAU6llj6YtFhqXSHr5xI%2BUkOaEl4v0qtgjEwkDccLMvmrd2V4BbC0QO4V6mca%2BcxWvn%2FsdgfvQBQZpvFVQx6494986ZGzaAJLUZqvHxALU3kakDjtLAFecZPxg612pFTf%2F9UHzQJ8P0h4W5p9z08q6IGDqrImwdj8R2CELQTcm9Az0zluY8hiMP%2Bt3skGOqUBYhB4vIzCxrz8v8c65rDr5yYeYhsA1lp3xWWRAdLJgyF349Xg7UHL6flcIoq6rCoe2zvzQdpHBxnBGd%2F1%2FDBDwzvI6D2LCMwn%2BLQrwhatxY9YwyrJVuwJfVCg186NG87KXCk7ucrVkML%2BKwlNThsZK2iwJOy6j2RU%2BAKuN22NDvmTXi3ps1B0Q6CxA513M3M3p5%2FVj58FUxVB4I8x0QOv%2FzSTlxGa&X-Amz-Signature=e077564f5f410341ee75a55e90e65c0b2e349de0f6ef3fc82f3d28aebf1f6ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJSGXV3K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGwZUbPJqGtqhzWnS6C%2Fe6Eox3YHh0yduEd%2FIOk%2FlgRAiEA21WKl62NrEFBawD0IPBHa%2F2GXZ%2B9e2kip2sPUh1i%2FJgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlPf%2FVGuX%2FSzTJVXSrcAxT0QK3udYEyIErySD4OIxUFZ8%2FhXdrTSLXEeC%2BtQvOm%2F0wPshxQkQ45Qvybm9LMSbGxNOrYdJrbgjJAw%2BHZQ7sYgz5UETzy7hKtqug9QcsFrX1tYMX4mN1i%2BAbr8akfffn7gmD8PVtjZM1gin4Xwr74wKqKYHJEnsjkWlDI9Grbut0uylzDN4jxWIOmNZJProlxmRudGaZ3lTiQMXh7JNkKU4cM3gitsk%2BxqVrYQ9pXED4%2FiWM0%2BJwlweG6T1jnhFhdp3NSqXERb1XRhNmnmSQDAM%2FureW8v6c3oz1a4NioEIehhj9z9inQ7K3133TtEUwTTDw43ifcnzTeA6FqH7SDwueT0lGnLRTx9AV%2BT0olL2gMJzBQ%2BlaXHlrtxMip7bsJQQSmtlISa4aI7GGoiCPKWsro4crvtPfIFzmz%2BNim5W2rUA2cSIQa%2F8xxIEWcScxt31FcAU6llj6YtFhqXSHr5xI%2BUkOaEl4v0qtgjEwkDccLMvmrd2V4BbC0QO4V6mca%2BcxWvn%2FsdgfvQBQZpvFVQx6494986ZGzaAJLUZqvHxALU3kakDjtLAFecZPxg612pFTf%2F9UHzQJ8P0h4W5p9z08q6IGDqrImwdj8R2CELQTcm9Az0zluY8hiMP%2Bt3skGOqUBYhB4vIzCxrz8v8c65rDr5yYeYhsA1lp3xWWRAdLJgyF349Xg7UHL6flcIoq6rCoe2zvzQdpHBxnBGd%2F1%2FDBDwzvI6D2LCMwn%2BLQrwhatxY9YwyrJVuwJfVCg186NG87KXCk7ucrVkML%2BKwlNThsZK2iwJOy6j2RU%2BAKuN22NDvmTXi3ps1B0Q6CxA513M3M3p5%2FVj58FUxVB4I8x0QOv%2FzSTlxGa&X-Amz-Signature=2f51171f4856f5a8bd72d9a03998ec7530934b14927dad195c33dde924d364ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

