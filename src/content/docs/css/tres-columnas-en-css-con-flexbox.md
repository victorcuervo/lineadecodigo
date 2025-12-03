---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D2Q43H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDpJsSI1AjqqLpjJhrfSs8oIS1GWuj%2FnOFP%2B%2BbFhTDI6wIhAN9mOrBKSiMWvtYFcgZciVj2KvQ3awtDpQcY8peYQay0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwTfqiOsBXsCu1RqQwq3AOF%2BQOtnSwvPGv33qa6ub4lDf6VA3fQJAHUcFIjnNLgaZHUG6QWvkQWS1wWKJ24fwSWmSDaCMF7HNhD29VZqcTVpnxpcCBRKVOFuCphbEwyp9eGK1GyU1oBwHNryawfRY8NIAim%2BU0tf02fJhoSosoyIxIznL5V%2FLZ8htdRT8W4Jd8xl6D7e%2FwTREuo%2BSAbsY0NaypI8gFyhVspDhDmWZ2NzW6JPfeMfkyCeIVMJrBBIIJohI0Tthp6gpT%2Bdx2US1tOLkSEpz22%2BrFusG%2BJJf5wi9NtIJZwXjmhpRn6M1jNPzsGP0FkVKRXFNFZNRIKJnDgr0GCC8W%2BKFQZNjYXh0qQYB8YevVIU4TOKg5p7P5I0JZkT6dUA8gxtEbqrhWESkmKi6xOp12ykvrb5byewKtDSYhGB9Jw%2BZjd5qocOB1VO8boAMxxVVqnw1z%2BDD%2B5r0uhHQ7Z9Hbq5oZu1EzRqJeKOJCrMgnbnB9zeAgnARPYssFEFQ%2BHgxXcmG%2BX4xeLEBsm4ZTi%2BLNWvgSdwnvzStQOY4Q3Z99ABRROILed%2BfVcy8x2aF8P8eGxgkVu7IS%2B6Gx5%2BzitpGG0NB2ZE8%2BWngRSn1tRF9h9cDDLuLMXWSgsFyU5AWSt%2FbkxjiCQIjCP3cLJBjqkAeyMEgRbGtm3v4LLt4WaJVU3oD9A8kpBIM3V3BZfswwexFp1wjGCpGOmGrWhmGWnt3mA1A0SvoeVeGGRBzZDa9V7ZZR8ZoyOzkuE059%2FBzYxZ3yPPJq7BwjREfJV6qAJeZ30Mu3f3zatRU706n5I0zAzn%2FDhmvraa8uGibamneMqqvUHvfRpO1REE%2FqfDBuKo0Dh2f4XtoPlPd1ye7KAi3CCwk2z&X-Amz-Signature=2575857f71e476d954e27cb0634c7643e82a9bac16fe2b47bf9cc022ebce049d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D2Q43H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDpJsSI1AjqqLpjJhrfSs8oIS1GWuj%2FnOFP%2B%2BbFhTDI6wIhAN9mOrBKSiMWvtYFcgZciVj2KvQ3awtDpQcY8peYQay0Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwTfqiOsBXsCu1RqQwq3AOF%2BQOtnSwvPGv33qa6ub4lDf6VA3fQJAHUcFIjnNLgaZHUG6QWvkQWS1wWKJ24fwSWmSDaCMF7HNhD29VZqcTVpnxpcCBRKVOFuCphbEwyp9eGK1GyU1oBwHNryawfRY8NIAim%2BU0tf02fJhoSosoyIxIznL5V%2FLZ8htdRT8W4Jd8xl6D7e%2FwTREuo%2BSAbsY0NaypI8gFyhVspDhDmWZ2NzW6JPfeMfkyCeIVMJrBBIIJohI0Tthp6gpT%2Bdx2US1tOLkSEpz22%2BrFusG%2BJJf5wi9NtIJZwXjmhpRn6M1jNPzsGP0FkVKRXFNFZNRIKJnDgr0GCC8W%2BKFQZNjYXh0qQYB8YevVIU4TOKg5p7P5I0JZkT6dUA8gxtEbqrhWESkmKi6xOp12ykvrb5byewKtDSYhGB9Jw%2BZjd5qocOB1VO8boAMxxVVqnw1z%2BDD%2B5r0uhHQ7Z9Hbq5oZu1EzRqJeKOJCrMgnbnB9zeAgnARPYssFEFQ%2BHgxXcmG%2BX4xeLEBsm4ZTi%2BLNWvgSdwnvzStQOY4Q3Z99ABRROILed%2BfVcy8x2aF8P8eGxgkVu7IS%2B6Gx5%2BzitpGG0NB2ZE8%2BWngRSn1tRF9h9cDDLuLMXWSgsFyU5AWSt%2FbkxjiCQIjCP3cLJBjqkAeyMEgRbGtm3v4LLt4WaJVU3oD9A8kpBIM3V3BZfswwexFp1wjGCpGOmGrWhmGWnt3mA1A0SvoeVeGGRBzZDa9V7ZZR8ZoyOzkuE059%2FBzYxZ3yPPJq7BwjREfJV6qAJeZ30Mu3f3zatRU706n5I0zAzn%2FDhmvraa8uGibamneMqqvUHvfRpO1REE%2FqfDBuKo0Dh2f4XtoPlPd1ye7KAi3CCwk2z&X-Amz-Signature=b670b9cb55cbffada4b3f6887bd9d762b84cb7b6a52c1f36fc1dbb60638beaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

