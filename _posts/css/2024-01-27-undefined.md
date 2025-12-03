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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KDX5QL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICQiqXhHy6R8CkN65MuOVKI%2B23%2Fje5FaA%2BH8WG2EDpMLAiEAqy%2F2TQVw8apAuC4ZNEQ8HI20rxsLU0Tb%2Bw5rPOKWvRkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNopr8V0E784K35UzircA8vJ9xQuSR5Ru9DMy6AHR8u4V8URLH7ASpEBuVJ3n3sDUs7Zj%2FqBkbpTAM9Ewyr57VWStFNet6veFWILdRRmBDYXpe5ZJfSsGXHKBXsM3tJOkAAIcxCF7kVi1U1E9HeSB%2Beop85gvq4UaG9qDOt%2Bs%2BOXRHtGZ%2FDtasx0zclLkqday6jPcZeNf2W5jqqVWuqfzGeqr%2F9fzzfF%2FSTP%2FeFjt5rBHM8gy51LSImwZSz4yKKAUQfyi%2BupyqdyPjro%2FjdOvexqACmSpLaamT7TKau14VsnG9qs%2BeJ2SlrDs86DXT7uvGbBOuliEM6Q8%2FN%2FE%2FwjpqGqNzBEZZs5N9sqfQX3C3NsR%2BrTW548gXi0mi2f0FNCJ5pB8%2Fz3SlvOuY%2Fqd4fqYJwRnGlc6hc%2BU9nc%2B0rJKisXks6TaJDWFMs9P6EKxPyW%2FMyoLUPu2lsL0rjJA3exNo%2FDFWffZG3uCm4Hm5dSWLqlAk1qFSHjZDhKAXKsWifKEXuoq6UXUBrk4UDcw4PCPgAwId9DXVxL%2BuDBisl5bnYNmUJo94VJI33eH5gf3IgxhvW4DxTMNYNVRbsFFyWcGbPnsuFQzksgUKxh1Sd2FUw5BWRsna6MtM8VrIqz8PRkpnQMDyUuZjO8Mp8tMKTNwMkGOqUBMcTBfiV024M2etPdI6iZk%2FvDc7p9CqotkELdgzNqVt9RTw9E0N4EnbVCNQ3QiA6Hn%2Bl0edAAXJKrh%2BxzNu%2B1QlyHimPzZ%2Bk8uNW3c9NX6%2B6zfrnhodTs3AdGtVdGlKX7RftTYsl%2BZAQPRT%2F7prhIlfyYL0CLvpHPZbU7bv9X%2Fcn5EzIM38sXzG93wFA862yvjf%2FR03ritXoGYGt5mQ%2FAuE%2FNrQ%2Be&X-Amz-Signature=118c62a302d6d137faf6e27e1ac0c498c620e5c9b06996fad86169d8000f483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KDX5QL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICQiqXhHy6R8CkN65MuOVKI%2B23%2Fje5FaA%2BH8WG2EDpMLAiEAqy%2F2TQVw8apAuC4ZNEQ8HI20rxsLU0Tb%2Bw5rPOKWvRkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNopr8V0E784K35UzircA8vJ9xQuSR5Ru9DMy6AHR8u4V8URLH7ASpEBuVJ3n3sDUs7Zj%2FqBkbpTAM9Ewyr57VWStFNet6veFWILdRRmBDYXpe5ZJfSsGXHKBXsM3tJOkAAIcxCF7kVi1U1E9HeSB%2Beop85gvq4UaG9qDOt%2Bs%2BOXRHtGZ%2FDtasx0zclLkqday6jPcZeNf2W5jqqVWuqfzGeqr%2F9fzzfF%2FSTP%2FeFjt5rBHM8gy51LSImwZSz4yKKAUQfyi%2BupyqdyPjro%2FjdOvexqACmSpLaamT7TKau14VsnG9qs%2BeJ2SlrDs86DXT7uvGbBOuliEM6Q8%2FN%2FE%2FwjpqGqNzBEZZs5N9sqfQX3C3NsR%2BrTW548gXi0mi2f0FNCJ5pB8%2Fz3SlvOuY%2Fqd4fqYJwRnGlc6hc%2BU9nc%2B0rJKisXks6TaJDWFMs9P6EKxPyW%2FMyoLUPu2lsL0rjJA3exNo%2FDFWffZG3uCm4Hm5dSWLqlAk1qFSHjZDhKAXKsWifKEXuoq6UXUBrk4UDcw4PCPgAwId9DXVxL%2BuDBisl5bnYNmUJo94VJI33eH5gf3IgxhvW4DxTMNYNVRbsFFyWcGbPnsuFQzksgUKxh1Sd2FUw5BWRsna6MtM8VrIqz8PRkpnQMDyUuZjO8Mp8tMKTNwMkGOqUBMcTBfiV024M2etPdI6iZk%2FvDc7p9CqotkELdgzNqVt9RTw9E0N4EnbVCNQ3QiA6Hn%2Bl0edAAXJKrh%2BxzNu%2B1QlyHimPzZ%2Bk8uNW3c9NX6%2B6zfrnhodTs3AdGtVdGlKX7RftTYsl%2BZAQPRT%2F7prhIlfyYL0CLvpHPZbU7bv9X%2Fcn5EzIM38sXzG93wFA862yvjf%2FR03ritXoGYGt5mQ%2FAuE%2FNrQ%2Be&X-Amz-Signature=496998a23e1600260e1514bab3d6574afd9e38521289cedbad6e2c88858f405c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

