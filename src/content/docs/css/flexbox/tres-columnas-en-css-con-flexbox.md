---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEQ4XWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HblUVW38XG4tEw4j57rd6rWg2DSQETSWchQbEcig1gIgVhh%2Fbi0A4S9VmPsiHIT3RHXYavu8ovpSGXJ2t045cHQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE0eBlwFJKyrX0vodyrcA69yvaXMd2MHlQ0u%2FzDPXehPXniH%2BH18w%2FZjaPRi%2B8akyphXQbsuCBuJbXbNxB8jro94NWapb8ywVJgrqeNH8rn5%2FaAvS7Cv%2FiG80pyOoMQHlJbebHmDei%2Fc47wxZnLNC%2FRfxScg9hvSkuyyRruiUmpSTVjPJ7KUZcZqppEwRBJJZZ9oeXzZWF5BYJJQnCqkAIMNkP4eqtGI2Z2woA8y3stsiiVFtxQN%2B9kUR76jwxLEsA3sCt6IGF5yIMVXFS3OM6Pwjq2V1b%2FwP1Iww5JkOJLZg3iKvBhx16TFGD2SAmPYTLJSJjcDQW%2FmSYMagr%2FF2rivg4IFkbxYpBZRH3rOYyqFfU7fZbTP1Nm6D2C%2F9QeX4%2FxBMn3QKGwqIKp9Lj8ZRfKTyvh22ym%2BFi2%2FQT2taSsAseAhFj4TGlSDYHu%2BTSgDsMtBoOFL7YuRHOXp9XfFNxHaRhA9IzdGULhlQrtpwRjVmjUXNBxwX9u474kerJWqbl5nwIj4dbsDwYVRFHye3dljbdnNOGMZhOI85h7aezZFZEN5Kn8VWMlG6NAGUpwPNbWH8dyt13902VpcFkRcjUHZB%2BCosyCDTPfOt0qbQkZhDi%2BCeWqAHznEEdaaUovPFDNZrLqxB5FF%2BH1pMMqMyMkGOqUBLJ0EW%2BOSPBqrl%2BGBcLmK39yzY4OCoKp2OqFcgXAZjAFyMMnu7MaxE31iNMAVLjq1yzewlCh9edYRc5TcMPBxpamn8xKtnPbAw8ekQ2vQbcAV8tr5%2BbltQA1egkvfPeteOd4FmIF%2FeYgqm8TdGqJqw%2F9ApD9Uo1j9Dk4JGRCbZ63tccYyu8c0Kvy8rLudBrP5q%2F6TC%2FhU%2BoxMzF9hi6RqfNrjWUM0&X-Amz-Signature=c95ba38cc45091dfadf39ce83c8eb5395471c8e04960d85a596ae3a2d6795874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CEQ4XWI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4HblUVW38XG4tEw4j57rd6rWg2DSQETSWchQbEcig1gIgVhh%2Fbi0A4S9VmPsiHIT3RHXYavu8ovpSGXJ2t045cHQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE0eBlwFJKyrX0vodyrcA69yvaXMd2MHlQ0u%2FzDPXehPXniH%2BH18w%2FZjaPRi%2B8akyphXQbsuCBuJbXbNxB8jro94NWapb8ywVJgrqeNH8rn5%2FaAvS7Cv%2FiG80pyOoMQHlJbebHmDei%2Fc47wxZnLNC%2FRfxScg9hvSkuyyRruiUmpSTVjPJ7KUZcZqppEwRBJJZZ9oeXzZWF5BYJJQnCqkAIMNkP4eqtGI2Z2woA8y3stsiiVFtxQN%2B9kUR76jwxLEsA3sCt6IGF5yIMVXFS3OM6Pwjq2V1b%2FwP1Iww5JkOJLZg3iKvBhx16TFGD2SAmPYTLJSJjcDQW%2FmSYMagr%2FF2rivg4IFkbxYpBZRH3rOYyqFfU7fZbTP1Nm6D2C%2F9QeX4%2FxBMn3QKGwqIKp9Lj8ZRfKTyvh22ym%2BFi2%2FQT2taSsAseAhFj4TGlSDYHu%2BTSgDsMtBoOFL7YuRHOXp9XfFNxHaRhA9IzdGULhlQrtpwRjVmjUXNBxwX9u474kerJWqbl5nwIj4dbsDwYVRFHye3dljbdnNOGMZhOI85h7aezZFZEN5Kn8VWMlG6NAGUpwPNbWH8dyt13902VpcFkRcjUHZB%2BCosyCDTPfOt0qbQkZhDi%2BCeWqAHznEEdaaUovPFDNZrLqxB5FF%2BH1pMMqMyMkGOqUBLJ0EW%2BOSPBqrl%2BGBcLmK39yzY4OCoKp2OqFcgXAZjAFyMMnu7MaxE31iNMAVLjq1yzewlCh9edYRc5TcMPBxpamn8xKtnPbAw8ekQ2vQbcAV8tr5%2BbltQA1egkvfPeteOd4FmIF%2FeYgqm8TdGqJqw%2F9ApD9Uo1j9Dk4JGRCbZ63tccYyu8c0Kvy8rLudBrP5q%2F6TC%2FhU%2BoxMzF9hi6RqfNrjWUM0&X-Amz-Signature=0f3e4f3779406474e819a8ac1a418064946a24e2aaeb5e9405e3094cfa65a31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

