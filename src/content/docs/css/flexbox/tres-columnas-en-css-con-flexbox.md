---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCFYQZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCBAN%2FeDUpfiV2AiyyiVKupE4ybYJ3rrx1Y1OG%2Fn588LAIhAPV6FL2LJuhpPVa2WpD7cE7uy7UokpvOSekriBBr0n20Kv8DCD4QABoMNjM3NDIzMTgzODA1IgyWCK4DZ%2FGTp%2BhteVwq3APNGOZbcyu8WwqIuAhSLslBut7qxiLel5s2HnI8xIgiGlHtEHmb%2BmEkRHXyXq9RiEbPUlyKELU5wwhnezOfxxdgrp5NQbszuaFEafPQnICcFsduWuWuYxd%2B5RFxXp7t2RD718vDo4YJzH14Y1Hx%2Fac%2BkNGdUpU3zR5ZkXbu%2FdeebX0ICAiypVEFWgWQ%2FTIftvoMyLBu8YSr4GDN2MfnOWYodYDnDkJyljNANZntDClQ2Q0fxHpEwLjnVIQ37RtEYcfYXXzZQVSoD7AjPUfGgjDNmyyvUUe%2BrLh9XkqsT3eula%2Bo46GoIOmLbZUmeK%2FLHXNjZeAQOA6T0fq1wEVrtXoJ2pVZrHDJ1S9bzUSm2GzoCbZTZjm9nq9Af6JFf39jpWQzFwGC7DQYhBAqli%2F2SKjUyObLvboR4FoJPjIjCN9JSrku7YqXbFJyO9h1a2%2B0uq5bfd%2B8sfHiDttVk%2F4azErw6y8m2wjVpiZ6dlA%2BjkQ5%2BxFBKbU8t%2BgmLJN%2FKsvaVlU9KH2J2svdwP6Migl2wH3hU7agtMV3A7szu1tRrSWTgnAilgFkQlmDogVt9rQI1v6D9Ax1GndVWFMreBTVtCDd5Ej680qhIj4v9PZlWRNaBxQXAMY5FcOInVuiWTDercTJBjqkAbrYN8S2lOzgm%2FrSCKdErSgJV5XZE%2BM5jqx1KpKorECvndJiBEYlTdvOJz7BdjM%2FwQBx4s8xTsb2MFLDmW6OVR%2Bi4Ze2EfR58laMCGyaX2TjJWLXWMmW8zHkeR4luUsj2aXgal71gjw1G1HBhUD9kng5l4I59hS%2B3MR9ErO7gcnism2BCaP1bSzDbZ3JW2uv327cQzcPntSD5p6M0H653olFRJOp&X-Amz-Signature=8f6a652fb9a70dd380e2403bfa1f2e06aec8671fa2aab7e32d6a27ee68b95a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDCFYQZF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCBAN%2FeDUpfiV2AiyyiVKupE4ybYJ3rrx1Y1OG%2Fn588LAIhAPV6FL2LJuhpPVa2WpD7cE7uy7UokpvOSekriBBr0n20Kv8DCD4QABoMNjM3NDIzMTgzODA1IgyWCK4DZ%2FGTp%2BhteVwq3APNGOZbcyu8WwqIuAhSLslBut7qxiLel5s2HnI8xIgiGlHtEHmb%2BmEkRHXyXq9RiEbPUlyKELU5wwhnezOfxxdgrp5NQbszuaFEafPQnICcFsduWuWuYxd%2B5RFxXp7t2RD718vDo4YJzH14Y1Hx%2Fac%2BkNGdUpU3zR5ZkXbu%2FdeebX0ICAiypVEFWgWQ%2FTIftvoMyLBu8YSr4GDN2MfnOWYodYDnDkJyljNANZntDClQ2Q0fxHpEwLjnVIQ37RtEYcfYXXzZQVSoD7AjPUfGgjDNmyyvUUe%2BrLh9XkqsT3eula%2Bo46GoIOmLbZUmeK%2FLHXNjZeAQOA6T0fq1wEVrtXoJ2pVZrHDJ1S9bzUSm2GzoCbZTZjm9nq9Af6JFf39jpWQzFwGC7DQYhBAqli%2F2SKjUyObLvboR4FoJPjIjCN9JSrku7YqXbFJyO9h1a2%2B0uq5bfd%2B8sfHiDttVk%2F4azErw6y8m2wjVpiZ6dlA%2BjkQ5%2BxFBKbU8t%2BgmLJN%2FKsvaVlU9KH2J2svdwP6Migl2wH3hU7agtMV3A7szu1tRrSWTgnAilgFkQlmDogVt9rQI1v6D9Ax1GndVWFMreBTVtCDd5Ej680qhIj4v9PZlWRNaBxQXAMY5FcOInVuiWTDercTJBjqkAbrYN8S2lOzgm%2FrSCKdErSgJV5XZE%2BM5jqx1KpKorECvndJiBEYlTdvOJz7BdjM%2FwQBx4s8xTsb2MFLDmW6OVR%2Bi4Ze2EfR58laMCGyaX2TjJWLXWMmW8zHkeR4luUsj2aXgal71gjw1G1HBhUD9kng5l4I59hS%2B3MR9ErO7gcnism2BCaP1bSzDbZ3JW2uv327cQzcPntSD5p6M0H653olFRJOp&X-Amz-Signature=0a91e212dc99f6b12fd7be52146e904f1621f26632393ca4b69d9c063041ad85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

