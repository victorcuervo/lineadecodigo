---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA55DV7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDuhVJhotb3P6mGeJddOsNIBqkFaUZCUdALDL1ad0IUhgIhAP3KIh%2F02a5yV7R34az9kGLy2c3ZDgsEG6RCGIcfSOxEKv8DCDAQABoMNjM3NDIzMTgzODA1IgzkgfHutOe2jNoUQuMq3AMdPF2gOulmBewPLp9KQ5BjqPaw5ZSlIFVTKtEe%2Bo4VPVAHaJdTKj5eVrB2VmEUEt5Pja4AXZLv7aSJ8lOK9kfNSfA9%2Fye6k540RVfveK30kb6FkDaES6g8DJZdBipf%2F%2FkuYA58Q3RzrdJnwuuoXLUCG4OK%2FB5g6E2yvZvWEtKK8lIp22YV9ciyMIJd7GZEBMFN3%2FfnwpV0IuzQcvSFbQ%2FqNZpTQEVjpSRFYcqYzGV5FwaGiGW1hBPQB85%2B19DKj8IeZgX5ODU4p1uqP6UnsO%2BrBxdCCnZHY9rLju3Z8jEtKfWAnm%2ByEbP3qQiFByBPypxpPMYk860khiNk7O0JNNLubBi448fs6Tr%2BCt0cysoqgGjtXQ9J8xTjA%2FhTlojiHWYuPWi8aawr3RQfvQcCUrNH%2FJz88C0gJ0oWznOiPusDRSP7teQrV2wFLGvJOtbdTISNe2CudBopPcI8vHDZAK%2Fxc9DtbM3vBePwerv30AZx9Bi0MjvNeoLr1Ct60Auu7Z6xVzeAcqbUwpbsyoK0tYSTpE68a3TCyruDgzXspReGIUss5ZVc%2FNjcJFTA692N482pZX75iCykIS%2BLAOePIp8FHejHrGWwwhFJmp1mngXlQ5WTQqVLTgb8ND4NojDhpsHJBjqkAX%2FisNmzJpbHl9k%2BjudVjvZJYmVAfi44oU8HrUtTSGLorW3Yjp55x4A0gEL77XP%2BWoxQ0RMAv451N1%2B5CaMmaiwPISySV9OHIGj2BBakId%2Bf0T2xD59J%2F%2FG2i2dUD0zLy4A%2BcVAjHU3ri059MeP%2Bcx0WHb9aJw1N2IuO84oYsdRrGSE9Lnkp90bbGqS0xhXiQJNDMuuoK1KPxyRKZlNPZ3FQi2kw&X-Amz-Signature=bf34b250c99805fbdbe82891a4e8acb5e689d7ecb70119d39d5b545cf46c8538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBA55DV7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDuhVJhotb3P6mGeJddOsNIBqkFaUZCUdALDL1ad0IUhgIhAP3KIh%2F02a5yV7R34az9kGLy2c3ZDgsEG6RCGIcfSOxEKv8DCDAQABoMNjM3NDIzMTgzODA1IgzkgfHutOe2jNoUQuMq3AMdPF2gOulmBewPLp9KQ5BjqPaw5ZSlIFVTKtEe%2Bo4VPVAHaJdTKj5eVrB2VmEUEt5Pja4AXZLv7aSJ8lOK9kfNSfA9%2Fye6k540RVfveK30kb6FkDaES6g8DJZdBipf%2F%2FkuYA58Q3RzrdJnwuuoXLUCG4OK%2FB5g6E2yvZvWEtKK8lIp22YV9ciyMIJd7GZEBMFN3%2FfnwpV0IuzQcvSFbQ%2FqNZpTQEVjpSRFYcqYzGV5FwaGiGW1hBPQB85%2B19DKj8IeZgX5ODU4p1uqP6UnsO%2BrBxdCCnZHY9rLju3Z8jEtKfWAnm%2ByEbP3qQiFByBPypxpPMYk860khiNk7O0JNNLubBi448fs6Tr%2BCt0cysoqgGjtXQ9J8xTjA%2FhTlojiHWYuPWi8aawr3RQfvQcCUrNH%2FJz88C0gJ0oWznOiPusDRSP7teQrV2wFLGvJOtbdTISNe2CudBopPcI8vHDZAK%2Fxc9DtbM3vBePwerv30AZx9Bi0MjvNeoLr1Ct60Auu7Z6xVzeAcqbUwpbsyoK0tYSTpE68a3TCyruDgzXspReGIUss5ZVc%2FNjcJFTA692N482pZX75iCykIS%2BLAOePIp8FHejHrGWwwhFJmp1mngXlQ5WTQqVLTgb8ND4NojDhpsHJBjqkAX%2FisNmzJpbHl9k%2BjudVjvZJYmVAfi44oU8HrUtTSGLorW3Yjp55x4A0gEL77XP%2BWoxQ0RMAv451N1%2B5CaMmaiwPISySV9OHIGj2BBakId%2Bf0T2xD59J%2F%2FG2i2dUD0zLy4A%2BcVAjHU3ri059MeP%2Bcx0WHb9aJw1N2IuO84oYsdRrGSE9Lnkp90bbGqS0xhXiQJNDMuuoK1KPxyRKZlNPZ3FQi2kw&X-Amz-Signature=8c251a21a7f94cc4058968e2b52fea5e6b3341e8dd7fa96759a467c9cb08c816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

