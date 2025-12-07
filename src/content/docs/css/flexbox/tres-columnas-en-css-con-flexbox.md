---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHXFEWJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9kBq1qtsAlHwjm7SSJjEy5TflW19eZZv1pmPqHOGSZAiAb36xTVB8lJCi65XGKG0npMWE769sPlDokcu%2FdcM12miqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMumcrtGlS52b0l%2B%2FiKtwDa7lC0VSEtBmfsBqdH6nLmYBEf%2FIvB8y%2BF%2FLEo%2BhSmMZ8gUXglzQVY7PXcMMHaN6RYFMVPZrhhgilCewWsJsN5O7kBbeXm9qkiy%2Bzp%2BJXzydp%2Fy%2B8jMGRaqC2jYMBLVVl2QA8lupKy0LRNkaf%2Bt%2BH6sDrN3o80vAMQ6dhkjz7lPrFY8aTDyTtEwtmUL%2FFGpLfLd1ypds0ThttuQBOL5dvB1GX1L1NPmwHNBcjWYU2Sjki8uturufDrlZ8Eum%2F8h67D9hRo%2BYbcBjID12MNMbkthwHqbGNVpNT%2BRLMr1AQ3ke9nkgm9NXoBv%2FziSk0Oh8T5ZbuQDDH9dIt1zDnCeacEbp9KbQB8KXDZ1%2BQVDVEl64M94p4h6aKHo6hC3lomaUQ95ZZU1A4hXtvRqxNGATLueH7FMdTermjztRVyOxEHqfSnpvwSV7VwCJ6JOVXsE7FtNu8T4PnLZ9IBWI0W29KE77r%2BVXolHtahQbqUo04BL8MvufIyPTY6IFwL%2F4KvavU8wXMCpJ9t5DgwK4mdk7%2BgGY%2BjWH2PBt4He%2FvY2FkIiRvViLh4GxbI41CwAQFH8%2Fh%2FX0eHBkLdhGRKfaX0EPRLY7owXziFdCq6rnbyOiVbefHxpIuVfeO5c%2Fse9Mw1L%2FWyQY6pgE4DYc%2B%2F9nPiun6nilqAyvOVZEjA1zjXnrBqIr2O50kZX2hEMWQsKGhifZOnbCK83AZIOtOzLazZucS0r%2FMc%2Bj1zMSjBZEg8WZF9H3nKAsljvZZFZNRV4a9CBnGlG1PlJ5kaBaz0MgfP%2BzgW%2FJtyev%2F20t4zKFx47aljPWEoIzQUCUeYN3G79RSmB%2FeTTDcf0UARl93B2%2BA9YEoPRHjTnmZNPVhNkbd&X-Amz-Signature=27b1a42621f78d09bf85dd51b03dd1c3d187cdbe8197315c968d198240921fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHXFEWJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9kBq1qtsAlHwjm7SSJjEy5TflW19eZZv1pmPqHOGSZAiAb36xTVB8lJCi65XGKG0npMWE769sPlDokcu%2FdcM12miqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMumcrtGlS52b0l%2B%2FiKtwDa7lC0VSEtBmfsBqdH6nLmYBEf%2FIvB8y%2BF%2FLEo%2BhSmMZ8gUXglzQVY7PXcMMHaN6RYFMVPZrhhgilCewWsJsN5O7kBbeXm9qkiy%2Bzp%2BJXzydp%2Fy%2B8jMGRaqC2jYMBLVVl2QA8lupKy0LRNkaf%2Bt%2BH6sDrN3o80vAMQ6dhkjz7lPrFY8aTDyTtEwtmUL%2FFGpLfLd1ypds0ThttuQBOL5dvB1GX1L1NPmwHNBcjWYU2Sjki8uturufDrlZ8Eum%2F8h67D9hRo%2BYbcBjID12MNMbkthwHqbGNVpNT%2BRLMr1AQ3ke9nkgm9NXoBv%2FziSk0Oh8T5ZbuQDDH9dIt1zDnCeacEbp9KbQB8KXDZ1%2BQVDVEl64M94p4h6aKHo6hC3lomaUQ95ZZU1A4hXtvRqxNGATLueH7FMdTermjztRVyOxEHqfSnpvwSV7VwCJ6JOVXsE7FtNu8T4PnLZ9IBWI0W29KE77r%2BVXolHtahQbqUo04BL8MvufIyPTY6IFwL%2F4KvavU8wXMCpJ9t5DgwK4mdk7%2BgGY%2BjWH2PBt4He%2FvY2FkIiRvViLh4GxbI41CwAQFH8%2Fh%2FX0eHBkLdhGRKfaX0EPRLY7owXziFdCq6rnbyOiVbefHxpIuVfeO5c%2Fse9Mw1L%2FWyQY6pgE4DYc%2B%2F9nPiun6nilqAyvOVZEjA1zjXnrBqIr2O50kZX2hEMWQsKGhifZOnbCK83AZIOtOzLazZucS0r%2FMc%2Bj1zMSjBZEg8WZF9H3nKAsljvZZFZNRV4a9CBnGlG1PlJ5kaBaz0MgfP%2BzgW%2FJtyev%2F20t4zKFx47aljPWEoIzQUCUeYN3G79RSmB%2FeTTDcf0UARl93B2%2BA9YEoPRHjTnmZNPVhNkbd&X-Amz-Signature=6b1458371ef3be1d56a90f29a9dffa04e1cdc9332009477db28a1bc52e72e5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

