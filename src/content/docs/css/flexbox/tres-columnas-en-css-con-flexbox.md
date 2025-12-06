---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEL6GGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNhEdyc3UJLNjm1Tpm69HR5f7cuuHuRUKTIyxnlz6GlAIhAOwVJnTTCsFXwyz8f7y3iAqXs5RZ35Ujd%2BP%2FJfUfSfwkKv8DCHUQABoMNjM3NDIzMTgzODA1IgxHS0JSGbl0zjkvvpIq3ANhtbAtsI%2BCFef66G%2BrW2OFys%2FwGldU8zYSDRu%2FPH2hZr9F4qETSjXLNbvo2PajDMEU26MTDIjX84MTqvVLnCXP9w%2FSj5%2BfudHeSXSbhlV%2FbbgnKD7OeNPuB1giHNMc5wgylyV32TApcscDmZSD9ibT6uXKByD79rtN6rMtPVOGqSzbbl6BLZ9ptN6kVZYh6qPPCIZ6WmAb7qRAEXoMSRtlTMZBQ1NF2Ey8PF8925Q5IeHoWbXwH4%2FvXxb%2BV6m66fMLVdel1jp%2FJsQVl43Do5eNWVS8Qp5IbWQ0buFiUV0uhodexIoMz7diWyW7%2FnT4paDUWVKOD5TNHgP7jbc5oJQYV7Yjfqz7om8bt%2Bj0f1bmNnGhJU5vi9Cs8nMoidFzvm%2BZfDGusMxhtx0enAC%2BUKMlB6%2FwOM%2Bc6XVJGJkHaSydL7AXKc0o%2Bi09pde50ZmcQ4lAgusxDwYnMplyU9GunsiARL8kZEBoXwIBxFok5xz5P4BqCp1o4T7bMT9thKUAtF9LiAc%2BSW88rVqA93i0dD91KJiooj5pdyPAEgHcgetrfgcKsD%2FeNxtQ8CI1vMIASGntXTwpEkUB9s4l%2BrRRG5Z7zFED34wt0LxYCxz43yR5GrWA81xM0JD7z9wwTDDbptDJBjqkAV3cCaG99BcXJLgoNCetEZlnp5%2F55W62GMStNRqMZLfA9z2HH0yUm6v%2BFr%2F0Lib6woTKvaeNz%2BO2xCOwdUqxadauCsvQMzGcyQlKV%2FpONfWdr8zZgvJpCXIDz5CIaURZf0VR3TV7%2FHTWL5qYV6mLui15g5gSL%2FeubRD7E7WdMy3FrKCvJKpwQ1Uo7xlOAG6pclXh8erX3PU7%2FdclY4l7Jz%2BlRL54&X-Amz-Signature=700ff15fa6eebf32632c2b7494fab09c0b2e64621e97c3814c4ecb9bee7308a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYEL6GGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNhEdyc3UJLNjm1Tpm69HR5f7cuuHuRUKTIyxnlz6GlAIhAOwVJnTTCsFXwyz8f7y3iAqXs5RZ35Ujd%2BP%2FJfUfSfwkKv8DCHUQABoMNjM3NDIzMTgzODA1IgxHS0JSGbl0zjkvvpIq3ANhtbAtsI%2BCFef66G%2BrW2OFys%2FwGldU8zYSDRu%2FPH2hZr9F4qETSjXLNbvo2PajDMEU26MTDIjX84MTqvVLnCXP9w%2FSj5%2BfudHeSXSbhlV%2FbbgnKD7OeNPuB1giHNMc5wgylyV32TApcscDmZSD9ibT6uXKByD79rtN6rMtPVOGqSzbbl6BLZ9ptN6kVZYh6qPPCIZ6WmAb7qRAEXoMSRtlTMZBQ1NF2Ey8PF8925Q5IeHoWbXwH4%2FvXxb%2BV6m66fMLVdel1jp%2FJsQVl43Do5eNWVS8Qp5IbWQ0buFiUV0uhodexIoMz7diWyW7%2FnT4paDUWVKOD5TNHgP7jbc5oJQYV7Yjfqz7om8bt%2Bj0f1bmNnGhJU5vi9Cs8nMoidFzvm%2BZfDGusMxhtx0enAC%2BUKMlB6%2FwOM%2Bc6XVJGJkHaSydL7AXKc0o%2Bi09pde50ZmcQ4lAgusxDwYnMplyU9GunsiARL8kZEBoXwIBxFok5xz5P4BqCp1o4T7bMT9thKUAtF9LiAc%2BSW88rVqA93i0dD91KJiooj5pdyPAEgHcgetrfgcKsD%2FeNxtQ8CI1vMIASGntXTwpEkUB9s4l%2BrRRG5Z7zFED34wt0LxYCxz43yR5GrWA81xM0JD7z9wwTDDbptDJBjqkAV3cCaG99BcXJLgoNCetEZlnp5%2F55W62GMStNRqMZLfA9z2HH0yUm6v%2BFr%2F0Lib6woTKvaeNz%2BO2xCOwdUqxadauCsvQMzGcyQlKV%2FpONfWdr8zZgvJpCXIDz5CIaURZf0VR3TV7%2FHTWL5qYV6mLui15g5gSL%2FeubRD7E7WdMy3FrKCvJKpwQ1Uo7xlOAG6pclXh8erX3PU7%2FdclY4l7Jz%2BlRL54&X-Amz-Signature=648978a37ce51f1ab53061fea5240e1d34f2c5ad47382f4633140cf5ff081d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

