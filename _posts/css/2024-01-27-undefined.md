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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMMG6XJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIA5Jf8BngAjDz1eyZTh%2BMpfoKS8A3QVnrwY%2BY9fw%2FXg9AiAu3OFwpAZeqot9%2FQJFpVvESi%2Bpp%2Ba5pTLLrEs%2Fz7wh2ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsDxvLvdgMkDshdPYKtwDnMW%2BXD0W6V22iEdS3XvwxEh7AkZKoYyTpnMrRcDrKY3CmxthPpNhyc3m%2B2ZtnlmPH39uUqP7Kh5e8YN84ue9whimRhUnqNYue2jdnZNEfAhIXF66rt7NYUlaYBqnvcYl%2FpYst5%2FOd71QCGR3ClQLvO0R1W53cY%2BC9WnTGjb%2FXt0kenbqMlrnNtMu7IHNfL59TZQoeYspx0vxkNbjoPkpeudunBgdKLoiHQlGtWlKGxVihjql7QCsyt8ChoJlAMVmy7EF9tz4SN3e2fN0koLdp6x1F9sftr6VbdM54OLs8Vo72FkatUMSk5RVCNLBNi1ZXOor0LzwsLUrkXeYVEME5PbXOqQ6s8oOPaxjdfNKi1FibAelwpGgXV%2F2HZQXxleJd6oBMJtFqXs%2BuVORqrdqnimG43vfaKfglhglaeRbqDI73KEYna3yR5l18%2BsfmpASXRfj%2BeUq7iM2VWQlqEvz2xqNLdkepz0BV9IRF6hM%2FKZpEg9i5aqzNW%2F9qQsmF%2Fimeyx1yI429ZRoF%2F0j80E0oqLWenfZMrRfIEnL2qT0aMFnPRSHrjT98guuUE1ULnW8%2B6iYbDRNnHWlXhMCb7SfYlz23ych6EeMUODofpovxkYRhZDTFl1MwUyQLa0w9MDByQY6pgGMAHAJSK6HRM561XBqkLjJq05klSMI5%2FjeG2IAfkbenWg8zZXL6bJJjz8RqKEtJqZpNoWcKwbcXWTPVfCVw8phSyM3qD2Xk%2BTh0UgUuww7867zIdUgJu2pTFbnAnjKVxDiDuV7wAjr0RM%2B0QRiPmt4PICSyOnWj5jo8aBEQunOxfytjfyfTFYVYOSxKSzx%2F1t%2F5eJ8aj1VeXZvmKVcfnradUDTLMhu&X-Amz-Signature=3219e8389e25cc3d0425c74ac4d4f47fd4a1ed04019ac782ee13eba48138f1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMMG6XJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIA5Jf8BngAjDz1eyZTh%2BMpfoKS8A3QVnrwY%2BY9fw%2FXg9AiAu3OFwpAZeqot9%2FQJFpVvESi%2Bpp%2Ba5pTLLrEs%2Fz7wh2ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMsDxvLvdgMkDshdPYKtwDnMW%2BXD0W6V22iEdS3XvwxEh7AkZKoYyTpnMrRcDrKY3CmxthPpNhyc3m%2B2ZtnlmPH39uUqP7Kh5e8YN84ue9whimRhUnqNYue2jdnZNEfAhIXF66rt7NYUlaYBqnvcYl%2FpYst5%2FOd71QCGR3ClQLvO0R1W53cY%2BC9WnTGjb%2FXt0kenbqMlrnNtMu7IHNfL59TZQoeYspx0vxkNbjoPkpeudunBgdKLoiHQlGtWlKGxVihjql7QCsyt8ChoJlAMVmy7EF9tz4SN3e2fN0koLdp6x1F9sftr6VbdM54OLs8Vo72FkatUMSk5RVCNLBNi1ZXOor0LzwsLUrkXeYVEME5PbXOqQ6s8oOPaxjdfNKi1FibAelwpGgXV%2F2HZQXxleJd6oBMJtFqXs%2BuVORqrdqnimG43vfaKfglhglaeRbqDI73KEYna3yR5l18%2BsfmpASXRfj%2BeUq7iM2VWQlqEvz2xqNLdkepz0BV9IRF6hM%2FKZpEg9i5aqzNW%2F9qQsmF%2Fimeyx1yI429ZRoF%2F0j80E0oqLWenfZMrRfIEnL2qT0aMFnPRSHrjT98guuUE1ULnW8%2B6iYbDRNnHWlXhMCb7SfYlz23ych6EeMUODofpovxkYRhZDTFl1MwUyQLa0w9MDByQY6pgGMAHAJSK6HRM561XBqkLjJq05klSMI5%2FjeG2IAfkbenWg8zZXL6bJJjz8RqKEtJqZpNoWcKwbcXWTPVfCVw8phSyM3qD2Xk%2BTh0UgUuww7867zIdUgJu2pTFbnAnjKVxDiDuV7wAjr0RM%2B0QRiPmt4PICSyOnWj5jo8aBEQunOxfytjfyfTFYVYOSxKSzx%2F1t%2F5eJ8aj1VeXZvmKVcfnradUDTLMhu&X-Amz-Signature=f8ab6fc23053d91814b4fa5d0d1a80b788e4bc6d261a3a0ad5b8970fa9544d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

