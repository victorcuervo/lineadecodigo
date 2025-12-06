---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OMYKNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkra3QZTtVeVCZfH8GttUEU92fFHIRnrQslrcZ72nR8AiBSLQQHDL3a%2BolR5bcf10Tn2TlMYSxlbgvhg6x0yBjrHir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMzSc66SqQpUCHN0VTKtwDIxYSs%2F8rPH4j%2Fi1zqmOSg38TBRlX33uRVJVJbDT1UIoj1qo0hJ12E973R%2Fpu5xSzQDUO1x5RJ7LcnAMfRetJZKAnB%2FnkgHKPCeiJYWGaLd6KfxNMvzkLk6MeK6S%2ByU%2BjauBDW3KJ6ZZ2Cxmqh4zS5c%2FAH5PcEltPJy%2FS5cJoqUbNooaZ%2Fb3QKPfh9yvcQBi4EP1JYKN2OyOqSufecsxYGgf3T0LhffL1f6qQX4sD1p%2B5bF%2BBbbWGtm27C%2Ftc9XQGlPOWdbJLLkii52cEB8lE2IYg16JkYYm96mgfRFmiGQNSR67ImVEavqm7%2FFCx01O0%2Brld5bB%2BrKJE%2BGTADrRfVpA5cXukwJ9a6wDpocVFaeAv%2FubkQVcyar6%2FqY%2FnUulBRWFCHHlmWgmsmlkeyDGMx1IAgEon%2BDn1NEvfQRGBAKgLm0R8pM4xmgpoCmT6g9S5wy69tPyJnI4UlN7FwJNULTvaFrlLmUZ1qk4r7wq72EBA9AXqawkGBAsYLzNbr%2Foyr0WK7oQmDHGCjGjD7F6lXiPEcfAFO8o2o5iJC%2BgoTajmx6djrvOxYUpvO2Q776erpyuoUyN1yCSyje2qm1VK6U8znlbqTpmw80%2BUvHkFEiP86OUNNs4UaGpl0Kowq7zPyQY6pgFoNq0yMUn7dd%2FjThkuVgnn1UY9V1u%2FvP54TsdIUu22qEgoU9OOiH5fVcn8qZqlFZGQ5GTIgSpeQpt%2FhSf3IDWD9lWCy1rdm5QUTKjuwpIr0cswkTj%2BmjsLa2dRF684gpxev0CyfXsmvlUJwBrSuvmfUdUYnfEjHI21u7TvIDtqoPihqXRHptM9kiow2nwtqlQPd5z%2FC2mxhUyXzvBZhz05yJnspJCF&X-Amz-Signature=7adaa18b0de6b13c8e6bacbac4816221c5896d943d19520b34db91b7878884b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OMYKNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkra3QZTtVeVCZfH8GttUEU92fFHIRnrQslrcZ72nR8AiBSLQQHDL3a%2BolR5bcf10Tn2TlMYSxlbgvhg6x0yBjrHir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMzSc66SqQpUCHN0VTKtwDIxYSs%2F8rPH4j%2Fi1zqmOSg38TBRlX33uRVJVJbDT1UIoj1qo0hJ12E973R%2Fpu5xSzQDUO1x5RJ7LcnAMfRetJZKAnB%2FnkgHKPCeiJYWGaLd6KfxNMvzkLk6MeK6S%2ByU%2BjauBDW3KJ6ZZ2Cxmqh4zS5c%2FAH5PcEltPJy%2FS5cJoqUbNooaZ%2Fb3QKPfh9yvcQBi4EP1JYKN2OyOqSufecsxYGgf3T0LhffL1f6qQX4sD1p%2B5bF%2BBbbWGtm27C%2Ftc9XQGlPOWdbJLLkii52cEB8lE2IYg16JkYYm96mgfRFmiGQNSR67ImVEavqm7%2FFCx01O0%2Brld5bB%2BrKJE%2BGTADrRfVpA5cXukwJ9a6wDpocVFaeAv%2FubkQVcyar6%2FqY%2FnUulBRWFCHHlmWgmsmlkeyDGMx1IAgEon%2BDn1NEvfQRGBAKgLm0R8pM4xmgpoCmT6g9S5wy69tPyJnI4UlN7FwJNULTvaFrlLmUZ1qk4r7wq72EBA9AXqawkGBAsYLzNbr%2Foyr0WK7oQmDHGCjGjD7F6lXiPEcfAFO8o2o5iJC%2BgoTajmx6djrvOxYUpvO2Q776erpyuoUyN1yCSyje2qm1VK6U8znlbqTpmw80%2BUvHkFEiP86OUNNs4UaGpl0Kowq7zPyQY6pgFoNq0yMUn7dd%2FjThkuVgnn1UY9V1u%2FvP54TsdIUu22qEgoU9OOiH5fVcn8qZqlFZGQ5GTIgSpeQpt%2FhSf3IDWD9lWCy1rdm5QUTKjuwpIr0cswkTj%2BmjsLa2dRF684gpxev0CyfXsmvlUJwBrSuvmfUdUYnfEjHI21u7TvIDtqoPihqXRHptM9kiow2nwtqlQPd5z%2FC2mxhUyXzvBZhz05yJnspJCF&X-Amz-Signature=d1dda7573b0b6cf652aaf570760fe77c79739d186c1af2a442d1f955ce2b6580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

