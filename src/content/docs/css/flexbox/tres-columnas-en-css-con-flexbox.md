---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AHPX5N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNO5GA4MOh7770W67EBYbgrtQMDHVi06iiMcrxU5hrUAiBxRckutw2fooaH3GSMB4bA38Ryc3MthfBEeTBxlpRs6CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtBscYWj2p1%2FdZWoBKtwDLt4hGTC8NQ4CDD2s6AKbafeRLvpVMWTtpS%2BrArWBrP1ScQUydOb6xpORKCpArfbooPGiAtGN1RMzCemyd7s4rYRso%2Bw1t1uHZ6%2FUvVhZn5IXjzLhziNFR15tWaIbziuc%2FSQ54D53nObiIyYbLgVajuLJ77WwZTkx8MGTyuhbjdZJ4l8%2BGGVyOrY9nCG8uBRGmwmHU2EUOnatwkoR9uVQs%2BmiNXNIBOa12%2FIC8R0e%2BNfInz%2Fn54C8DAfzuM2QY%2BE7jz6wcJqHIbwB5JxyPSYffH6fypK0hwmaYWM4PNSxl%2BwsXXEuT5OllweNPdpANbc%2BJtFRexajpx7ltMGwCHDP64ohTCb7fTZDxLNsuR0Oyzm2GWuLmXIr9FldJQGU2kpbfXniMrcO6u7VLjO3ZvzPns06PKaR%2F4oaN4SW53R%2FlXVqroRp%2F4PedQf4RkniUt8uC3pCzzUX7XQkopaqks7GCCm6Z%2F9xiKQZyXv17yT2oDfuwt8kaArerGBgT9RdOdT%2FPSOX6Rsj4uKNlQfIALJ8TPgnbvl1yK%2BUIHKzLIEA5qB0QHWUvcpMYpDm2IJoNGhd6pn5zvHmr%2BtUFRPjS7Crytg7%2FB3ENR5e83NrSsQnjYIqEFDy5Cx%2BmHPgvHAw5O3ZyQY6pgFfqCyEpMUj07W%2BVs%2BJbG07CWBTZs9Z3vNVH3zdIbfSj%2FxQ%2BUt4iQ05s6Q9JHxlb%2FvR4K1JiZN6xA0Y0tGzxhHaryLNdJWFYk1zG1ipBdnS7dKgBPO80J2oZhBdxxkfBpTd8cRkpWRj4jb1YMj3QHNspN0bvmblKfInOyev7No%2FoNNxfheytG9ZCY75FW228u6hQj%2FnIxlfKtlDitTIpp8GxGDkDQEh&X-Amz-Signature=1c375da418097841ce6e80ce02428344db7f8fba70760c609521da7ef3140abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AHPX5N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNO5GA4MOh7770W67EBYbgrtQMDHVi06iiMcrxU5hrUAiBxRckutw2fooaH3GSMB4bA38Ryc3MthfBEeTBxlpRs6CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtBscYWj2p1%2FdZWoBKtwDLt4hGTC8NQ4CDD2s6AKbafeRLvpVMWTtpS%2BrArWBrP1ScQUydOb6xpORKCpArfbooPGiAtGN1RMzCemyd7s4rYRso%2Bw1t1uHZ6%2FUvVhZn5IXjzLhziNFR15tWaIbziuc%2FSQ54D53nObiIyYbLgVajuLJ77WwZTkx8MGTyuhbjdZJ4l8%2BGGVyOrY9nCG8uBRGmwmHU2EUOnatwkoR9uVQs%2BmiNXNIBOa12%2FIC8R0e%2BNfInz%2Fn54C8DAfzuM2QY%2BE7jz6wcJqHIbwB5JxyPSYffH6fypK0hwmaYWM4PNSxl%2BwsXXEuT5OllweNPdpANbc%2BJtFRexajpx7ltMGwCHDP64ohTCb7fTZDxLNsuR0Oyzm2GWuLmXIr9FldJQGU2kpbfXniMrcO6u7VLjO3ZvzPns06PKaR%2F4oaN4SW53R%2FlXVqroRp%2F4PedQf4RkniUt8uC3pCzzUX7XQkopaqks7GCCm6Z%2F9xiKQZyXv17yT2oDfuwt8kaArerGBgT9RdOdT%2FPSOX6Rsj4uKNlQfIALJ8TPgnbvl1yK%2BUIHKzLIEA5qB0QHWUvcpMYpDm2IJoNGhd6pn5zvHmr%2BtUFRPjS7Crytg7%2FB3ENR5e83NrSsQnjYIqEFDy5Cx%2BmHPgvHAw5O3ZyQY6pgFfqCyEpMUj07W%2BVs%2BJbG07CWBTZs9Z3vNVH3zdIbfSj%2FxQ%2BUt4iQ05s6Q9JHxlb%2FvR4K1JiZN6xA0Y0tGzxhHaryLNdJWFYk1zG1ipBdnS7dKgBPO80J2oZhBdxxkfBpTd8cRkpWRj4jb1YMj3QHNspN0bvmblKfInOyev7No%2FoNNxfheytG9ZCY75FW228u6hQj%2FnIxlfKtlDitTIpp8GxGDkDQEh&X-Amz-Signature=c9e7e610734caa47909518e1aaaaf7b0085e32179ba7ea0769b3e17490032c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

