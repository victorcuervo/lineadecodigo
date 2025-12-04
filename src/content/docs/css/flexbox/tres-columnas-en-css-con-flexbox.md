---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNSFPJAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz%2FZlhuQw6SzVUqKuzjzUBIwUDfvTAW%2Bs7KT2cZm%2BiDgIgQRk1ufLIS1%2FFj5Ga%2BV5Rdp%2BXgCRxRHnvPk67uFxTJJsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNH86YURrLwlCFdSAircA33ireoxf%2ByDmH1OxopjPbyXBIlZEhHwEz1ZpTsv7Vxuqwm9NeUAu2TeJkTLjeGTZvRbPlpbNN7C2tjwmhPYTNFyP4sr1TwUZ6HKfaxmdZczzKLLvqwFSO1TWcygF%2BAYeGv9rY6RynlT0bpBxfklAUotm8CVy3z000t8OcuEdBJVHQ%2BnY13tbwGeCfmrPHOQuiPyAMeBw22qpa3ioHe9A68vjbGJ5GDoGWy3%2Bqv4yeG7H9dVIPbCzGrnaBkdyBI2SmZNKVnmQvoBfYfn1zBu3a0l4qtdwgghHUxmgXDQ4TyNny1SRywQJ2JnyKj9NHTPZTtIl9B37oSdqvzWMj49LZD6N2JZGK2%2F4d4BgfTsYver6uWLI%2BDB29JDAzmLNjBa%2B5WVlCB0%2FdUtXHJ182705k2wDohearJSCesjuty1uw7VsQAlKO3RRlVV4KdchjB0rQciyo%2Fc8CYtfYgDsNleb5Tu9JAsGMrsfliGVmdRDBH3JwE5T8WnDSV5QijmKgOPvNUBeUPf4OXQeAgt%2BPAmCD5laINho3Rdl3S6Fk4Z88YPemKiNUgR8eBu1Apqy9qPSXZgM5UhXEj4utOef4vgS7ySyYKxXsz%2BAV9KXq01krr9y4YBXhMVDjB3hizHMLPKxckGOqUB1bqg798kTrltr1c0UADS0w5LWORWr4Tfj0fFxgGQVzzl8G1dlz54h35LHqSOAbyv2R8lvHKAkjSFEEKMlai%2F973Zgl1jNd7Q6SciYdFd2hnRKAUzV91S8WIOIeGO%2Fc62OTs2pLtFLTBD3KAwG%2FrWazRP3UJBSXbF7Bhfsluem12ZrjdY7P1XqXfjvhNYoULFYTwZCa5eO%2FDhI4ZzJ9oOw7dQmsT9&X-Amz-Signature=e74feb0352a40631e8cf73a340158a5c028bf013896f6f99a9e73aaa6d20215e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNSFPJAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz%2FZlhuQw6SzVUqKuzjzUBIwUDfvTAW%2Bs7KT2cZm%2BiDgIgQRk1ufLIS1%2FFj5Ga%2BV5Rdp%2BXgCRxRHnvPk67uFxTJJsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNH86YURrLwlCFdSAircA33ireoxf%2ByDmH1OxopjPbyXBIlZEhHwEz1ZpTsv7Vxuqwm9NeUAu2TeJkTLjeGTZvRbPlpbNN7C2tjwmhPYTNFyP4sr1TwUZ6HKfaxmdZczzKLLvqwFSO1TWcygF%2BAYeGv9rY6RynlT0bpBxfklAUotm8CVy3z000t8OcuEdBJVHQ%2BnY13tbwGeCfmrPHOQuiPyAMeBw22qpa3ioHe9A68vjbGJ5GDoGWy3%2Bqv4yeG7H9dVIPbCzGrnaBkdyBI2SmZNKVnmQvoBfYfn1zBu3a0l4qtdwgghHUxmgXDQ4TyNny1SRywQJ2JnyKj9NHTPZTtIl9B37oSdqvzWMj49LZD6N2JZGK2%2F4d4BgfTsYver6uWLI%2BDB29JDAzmLNjBa%2B5WVlCB0%2FdUtXHJ182705k2wDohearJSCesjuty1uw7VsQAlKO3RRlVV4KdchjB0rQciyo%2Fc8CYtfYgDsNleb5Tu9JAsGMrsfliGVmdRDBH3JwE5T8WnDSV5QijmKgOPvNUBeUPf4OXQeAgt%2BPAmCD5laINho3Rdl3S6Fk4Z88YPemKiNUgR8eBu1Apqy9qPSXZgM5UhXEj4utOef4vgS7ySyYKxXsz%2BAV9KXq01krr9y4YBXhMVDjB3hizHMLPKxckGOqUB1bqg798kTrltr1c0UADS0w5LWORWr4Tfj0fFxgGQVzzl8G1dlz54h35LHqSOAbyv2R8lvHKAkjSFEEKMlai%2F973Zgl1jNd7Q6SciYdFd2hnRKAUzV91S8WIOIeGO%2Fc62OTs2pLtFLTBD3KAwG%2FrWazRP3UJBSXbF7Bhfsluem12ZrjdY7P1XqXfjvhNYoULFYTwZCa5eO%2FDhI4ZzJ9oOw7dQmsT9&X-Amz-Signature=8671f8d002f661cc37f11c052628ad7a70b4654c8d8ec3b96b11badd660b909b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

