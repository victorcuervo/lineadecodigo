---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQ5N3SS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCi6GkFc1ObLlLvV2%2BCfqAmvZYNPsYDsZAl9WrTzVLfxQIhAKmoaGtwxqYRvmgYVTKngsHt%2FTzft9d6aFw4lPDkLGA8Kv8DCEcQABoMNjM3NDIzMTgzODA1Igye25MVondNukP64vMq3ANrDO2Shn%2Fv1QZH4ss1rdRYfW3f2dNmvVcviq8JwDKh9TXEFYxW089lI7ieBZyWgxhiuNdxmVAE4OulLdaL13d2VYlTAQuv8GUUgt0SW13d%2BU5rr14ndHxiur3XMC9fz%2B7%2FlWOUXafpGNLdMU5lV9jZbuMAhMvZyoG7qWN7VWWRKqf%2Bc9SEV6ROTzX4t9ieVIO2ubJubp0%2FNl0b53UVXn9i4gVEtb0%2B2hLm2awhuhlD89UIJgRZCwe7WzQsgQkZ28dRu0NElTgUXC0KS9MhBLKcYkODCwPlO76Pi%2Fmsx780n9e0UiFauB036L2PkvuSz%2FR1xpABiinTcV6ZaKc6AeCwtl5ZKxHOZbF%2FrT6u99ThYQsp4SPYbhikWzVUtJz9xCvDmOfMCVRy72wRg940zz4QEyKMuIFrg06F22BoObkzJg4YV2Jsq3CfV5DDuFTTBzEH0%2FhWvdiHTFaFL6QHtERFalkd3jmDjVqkfbD%2Bn2e9urnhUQmwLryfKJ6PpwT0bWc8B2CV1PHmLkEO5Q%2BM1zEwq7w5WlHPg6pfV5fARbes%2BXjDxYRMFqw0P9blu9G2tJ1OXA%2FKNBhR3jdebu5Vz8bSIPBRBKHBPz0%2FzHqazgRXxK3iiJppVTnFzRLRfjCDosbJBjqkAVUX8wCXsUkd9V9%2BU1G%2FXXF9qIiM9nd84AhsMofkqFl9BfjyZt%2BW6DK3rgH49QZkZkj8do3yBw%2FYR0%2BYcoGaF7waxj2NIIvEGVKZYwBUKkNlEPLqaeWDToAMs16NV60gAGBh88kLUrWXddIx%2FyQjZyzn5hzSbHbZKw9yaiSaob4VreFmZL7JYUyr2DVNPx2Ogxsyq3OAVPuk4rqU3FyJ7MXZp75P&X-Amz-Signature=583bd1610179428e59ac512d4d6ce6e3b5f8228febb1826ba44372d103d31344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQ5N3SS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCi6GkFc1ObLlLvV2%2BCfqAmvZYNPsYDsZAl9WrTzVLfxQIhAKmoaGtwxqYRvmgYVTKngsHt%2FTzft9d6aFw4lPDkLGA8Kv8DCEcQABoMNjM3NDIzMTgzODA1Igye25MVondNukP64vMq3ANrDO2Shn%2Fv1QZH4ss1rdRYfW3f2dNmvVcviq8JwDKh9TXEFYxW089lI7ieBZyWgxhiuNdxmVAE4OulLdaL13d2VYlTAQuv8GUUgt0SW13d%2BU5rr14ndHxiur3XMC9fz%2B7%2FlWOUXafpGNLdMU5lV9jZbuMAhMvZyoG7qWN7VWWRKqf%2Bc9SEV6ROTzX4t9ieVIO2ubJubp0%2FNl0b53UVXn9i4gVEtb0%2B2hLm2awhuhlD89UIJgRZCwe7WzQsgQkZ28dRu0NElTgUXC0KS9MhBLKcYkODCwPlO76Pi%2Fmsx780n9e0UiFauB036L2PkvuSz%2FR1xpABiinTcV6ZaKc6AeCwtl5ZKxHOZbF%2FrT6u99ThYQsp4SPYbhikWzVUtJz9xCvDmOfMCVRy72wRg940zz4QEyKMuIFrg06F22BoObkzJg4YV2Jsq3CfV5DDuFTTBzEH0%2FhWvdiHTFaFL6QHtERFalkd3jmDjVqkfbD%2Bn2e9urnhUQmwLryfKJ6PpwT0bWc8B2CV1PHmLkEO5Q%2BM1zEwq7w5WlHPg6pfV5fARbes%2BXjDxYRMFqw0P9blu9G2tJ1OXA%2FKNBhR3jdebu5Vz8bSIPBRBKHBPz0%2FzHqazgRXxK3iiJppVTnFzRLRfjCDosbJBjqkAVUX8wCXsUkd9V9%2BU1G%2FXXF9qIiM9nd84AhsMofkqFl9BfjyZt%2BW6DK3rgH49QZkZkj8do3yBw%2FYR0%2BYcoGaF7waxj2NIIvEGVKZYwBUKkNlEPLqaeWDToAMs16NV60gAGBh88kLUrWXddIx%2FyQjZyzn5hzSbHbZKw9yaiSaob4VreFmZL7JYUyr2DVNPx2Ogxsyq3OAVPuk4rqU3FyJ7MXZp75P&X-Amz-Signature=f4e17a5ada0eeafb8676724831dcbbb4693d672b28836f08c84fcee784dc3611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

