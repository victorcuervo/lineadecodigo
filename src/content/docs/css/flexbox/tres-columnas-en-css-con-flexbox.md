---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73TIU25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAExKFQjmDzR0rKu4gQMyftG%2Fo9Xrw7E3KurnKlWoCqEAiEA8NBDCTenBFvz004GjIJ4oYdAFsY8TiQo5KEaaYrqImoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw9yYN9AjrUnTXoESrcA2rg4jFfJVvOwUFpZRLwIy36zTy6fhML2K%2F5dmDio1iz1vh5Xn3AVCTCQbIiVqd2u0kQ8RoGSkEVPEbHBj0Y%2FskPmDuuA77%2FvcbmwG9qs3c50HCHWjS2%2Fg9ZboazMleOUwqWXaH2LVYAbN5mmqimbGkL2SWsbe5uviKTaY0sVzS9qEJ94cK6j6gqY98LIPYFpO3YNOz%2Biqw8K6Xfx62HfQcQT04g3BHH6uK%2BINtHv8ACZJenqCEJTmX8%2FPEzSEMQxVvcB56hsiRB39zjQatxAnLFkEGr3e%2FGaiRtWBxP4FD33JYdGVNAZv%2FjybmeR7912ftPT7M8FIw2zlp9BwdiiudOqM8iSQo8JGAtEUWgynE6PriIK6hY7Ni6e0UfFmmInBoYEf7f8mgPfq3i5WSZfYNjwszFuhSXZDWslzRoSrQn3pkyj4ZTWKbdqVS9e3kE97XPlJ9w7KY1VKMruZVvH4d%2FlKB%2F3RAr2eDvJkc9XRTsrjc2%2BD5B12nhrY6LImVrGSb0xE3OIY5%2Bu04idZGqcUvOvke0uRGSxdBtue%2FKyy3z9vz0FlW8pjrCytPUaSskluBF3pnc%2FJgNdjZsXT1IDw4zz7LnnaO826U%2FwcsBbkBAcApgY%2FGDg8i4k6OzMLKA3ckGOqUBpWwgRRX1nm%2FOHMtlBOXqBSe5vW5ukQWwluPJVgZ%2FtE%2F112qIn2p6BwmJQiJ1CpopVTCDeoAflYRAOXs%2FTEoT21X%2Fzeqi8t5WIcJjdyWGSeEvMYX4S17tMAZXIGKquzw%2BrBN17DY2iNR162ipwqZBBnoWcaAURDkXjokZFoJWWtRuV2%2Ff7Go8qGTC7h9OPI%2FBpyh3%2BAmotrG%2FSpjoSwj0q1PQIs4H&X-Amz-Signature=bf34c770b6bd224e9d23ebc44e9a71b703432a944fd15e84cc0c407a7dd56f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73TIU25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAExKFQjmDzR0rKu4gQMyftG%2Fo9Xrw7E3KurnKlWoCqEAiEA8NBDCTenBFvz004GjIJ4oYdAFsY8TiQo5KEaaYrqImoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOw9yYN9AjrUnTXoESrcA2rg4jFfJVvOwUFpZRLwIy36zTy6fhML2K%2F5dmDio1iz1vh5Xn3AVCTCQbIiVqd2u0kQ8RoGSkEVPEbHBj0Y%2FskPmDuuA77%2FvcbmwG9qs3c50HCHWjS2%2Fg9ZboazMleOUwqWXaH2LVYAbN5mmqimbGkL2SWsbe5uviKTaY0sVzS9qEJ94cK6j6gqY98LIPYFpO3YNOz%2Biqw8K6Xfx62HfQcQT04g3BHH6uK%2BINtHv8ACZJenqCEJTmX8%2FPEzSEMQxVvcB56hsiRB39zjQatxAnLFkEGr3e%2FGaiRtWBxP4FD33JYdGVNAZv%2FjybmeR7912ftPT7M8FIw2zlp9BwdiiudOqM8iSQo8JGAtEUWgynE6PriIK6hY7Ni6e0UfFmmInBoYEf7f8mgPfq3i5WSZfYNjwszFuhSXZDWslzRoSrQn3pkyj4ZTWKbdqVS9e3kE97XPlJ9w7KY1VKMruZVvH4d%2FlKB%2F3RAr2eDvJkc9XRTsrjc2%2BD5B12nhrY6LImVrGSb0xE3OIY5%2Bu04idZGqcUvOvke0uRGSxdBtue%2FKyy3z9vz0FlW8pjrCytPUaSskluBF3pnc%2FJgNdjZsXT1IDw4zz7LnnaO826U%2FwcsBbkBAcApgY%2FGDg8i4k6OzMLKA3ckGOqUBpWwgRRX1nm%2FOHMtlBOXqBSe5vW5ukQWwluPJVgZ%2FtE%2F112qIn2p6BwmJQiJ1CpopVTCDeoAflYRAOXs%2FTEoT21X%2Fzeqi8t5WIcJjdyWGSeEvMYX4S17tMAZXIGKquzw%2BrBN17DY2iNR162ipwqZBBnoWcaAURDkXjokZFoJWWtRuV2%2Ff7Go8qGTC7h9OPI%2FBpyh3%2BAmotrG%2FSpjoSwj0q1PQIs4H&X-Amz-Signature=990069095b6d077206f7be265da11133fe2ce5af60d1fcb960e58145d2521285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

