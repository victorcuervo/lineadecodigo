---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIEEW7F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZvQrZznbszd%2BRurIqP6KynOZEcdsJ0b8BnZIAX0vNWAiEAsz1Gd8omjZJHHDOcH8Jj6Tyn%2FCUDBQ9wdpJMhbsDq54q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFn7tQGvJsfOdkaxbyrcA9ZjOlNw14SnC8qlCocRAu3lDV4PW6m6U9crDcUqtQh0kXQjCaZYkaIVQk4NEEoskjc9QAQ5mibzH9jQz9jFJrgG2IBnwLR38cyxzSiHdoocLMyk%2Fs5Fa1Kt66mQ9KLtGsdxTzp4hkG8664RiGYljfym5CQMxSXDxMvbKZRtKX9W%2BZOxS8SJdzmNU2jMguiNF5GBkSAtSo773pDI4Zhfje8yJ2y01G4SAT6ebWR9OizGzZ3MqFGZD2AjUGSoJSVFnm%2B%2Fo1y4KSdmvqHURfbtYtBvM3QlIjddRQeKVFAg9tig1RzM48w6pgqlXv1n3BVoV6i7f5jhmJP82%2BaJJdNvaodD7%2B0iaajHeDr66afoAz55Bt1UT%2FZY%2FUOOETPquql2GDKsj5wU%2FWaUeITqdU58ZKnTGlNm2oNVopNt4rKa9V%2BhR41t%2Bp257ynkLvA5q3kjWL4gSEz3Sx%2B7Nka4CmDiwftp80qLJd7Mi%2BfWZ1hp1Y78a54WUc7%2Fvv7KHhu36IfzOadaT%2B1isZ4Zln2SZ52bTXFfUHNNpw2A824ENpv4lO6LhdZW%2BLoUuGJATYvQa8u%2BjXgssolZWRTr9c6KGC8TnVI2AEXj39SSUJxNWp7i3nihHjhkoxzix25r2Og3MNuIzckGOqUBnsQieIvPHmm%2BOXawBHhg%2F6FhAc%2FnSlChCjdz6fHSQ4jRD4r147dGipvgt0dT2nZN0ZXhCPQefuHQwg3ZWQx0ojekno0Kt0BxW3TFHfK4CHj9rjOVohR7GMwnrG8l%2BQHdf0UU5OXYfB%2FWz77aqU5Za%2BbuKXUJdbLb7h3YmpMVqWURFkCUrpOtSGUqFxptOZo3o%2BxasYLAnJqpDC8ap%2Bbc1GUI6slQ&X-Amz-Signature=05132e3e17affc4c22dbb5ad09e12ae20ea346664d6a42df125191c9569c7903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIEEW7F%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZvQrZznbszd%2BRurIqP6KynOZEcdsJ0b8BnZIAX0vNWAiEAsz1Gd8omjZJHHDOcH8Jj6Tyn%2FCUDBQ9wdpJMhbsDq54q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFn7tQGvJsfOdkaxbyrcA9ZjOlNw14SnC8qlCocRAu3lDV4PW6m6U9crDcUqtQh0kXQjCaZYkaIVQk4NEEoskjc9QAQ5mibzH9jQz9jFJrgG2IBnwLR38cyxzSiHdoocLMyk%2Fs5Fa1Kt66mQ9KLtGsdxTzp4hkG8664RiGYljfym5CQMxSXDxMvbKZRtKX9W%2BZOxS8SJdzmNU2jMguiNF5GBkSAtSo773pDI4Zhfje8yJ2y01G4SAT6ebWR9OizGzZ3MqFGZD2AjUGSoJSVFnm%2B%2Fo1y4KSdmvqHURfbtYtBvM3QlIjddRQeKVFAg9tig1RzM48w6pgqlXv1n3BVoV6i7f5jhmJP82%2BaJJdNvaodD7%2B0iaajHeDr66afoAz55Bt1UT%2FZY%2FUOOETPquql2GDKsj5wU%2FWaUeITqdU58ZKnTGlNm2oNVopNt4rKa9V%2BhR41t%2Bp257ynkLvA5q3kjWL4gSEz3Sx%2B7Nka4CmDiwftp80qLJd7Mi%2BfWZ1hp1Y78a54WUc7%2Fvv7KHhu36IfzOadaT%2B1isZ4Zln2SZ52bTXFfUHNNpw2A824ENpv4lO6LhdZW%2BLoUuGJATYvQa8u%2BjXgssolZWRTr9c6KGC8TnVI2AEXj39SSUJxNWp7i3nihHjhkoxzix25r2Og3MNuIzckGOqUBnsQieIvPHmm%2BOXawBHhg%2F6FhAc%2FnSlChCjdz6fHSQ4jRD4r147dGipvgt0dT2nZN0ZXhCPQefuHQwg3ZWQx0ojekno0Kt0BxW3TFHfK4CHj9rjOVohR7GMwnrG8l%2BQHdf0UU5OXYfB%2FWz77aqU5Za%2BbuKXUJdbLb7h3YmpMVqWURFkCUrpOtSGUqFxptOZo3o%2BxasYLAnJqpDC8ap%2Bbc1GUI6slQ&X-Amz-Signature=ea079f97b960fc2ba21fc39a49fda3d274f5cc2b069c8ec1f924df677cf29952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

