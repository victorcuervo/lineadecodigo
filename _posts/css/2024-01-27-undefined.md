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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNYL54G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5WzUeqlp%2B5JGSOoDQkf95MlC1gPFaPFEjjC3dSjr%2FUQIgGHIq%2F0z0gUBc99kAtLyQzD3jRAe1ABvcL8iJf2dHq5cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPwyzfSp%2FZTY7ZGc3ircA9zu%2F5q9FtDejmEWbB8XxSyJYrGZoh3NDmKccM%2B8Va%2B2G%2FLKztq%2FF6YY9RfqcpS2BiiVcme9uGajIoO%2FzOZIHtSOpH8E%2FshJivPIhn7X7mwKVgK1eGJH%2FJ0WKYUIkbwnL9dYpaU66iyVlcZeYKoepNRVbWZsFWS1cCPeQphnYLmx0U4rIvTPDEp7aROVIYrvN9q%2BmBg0Z2Nnm2gwn4bHeYkOPrbA4p3yBm9bJTCa1SSQxHIb6irfkCV993PuYccQTkMccPLvNMN4lqWT0e%2FMnFu6lS%2FEL8%2BYdc4jXU8JiuXITQZ1rviTr%2FD0Vej1b7UXFo7%2BTugG3IuV39kj5d9soIbJjFfL41ytQtgrm9rLzZIrcA9Tk0QSONLe5cQMVfPFcdPaMD9czF5cRNi0IIJV%2FZxLvG85ad6Xu%2Fa1nb9oD9KpiPdUD7mBE8FHNET%2FQbl9W4jhkPyveXay9ldFWU6Kz28tCS2O1e%2FKLfCODsnNpmEVQpjlsd6p4cZThDH%2BARGlFsU%2F6O8isA8%2BuyfJ6aIs89gC9v3UZafU23bZPf0p8p10GD3QnZ6tj7pFD6XrIBMByoggvWW1WSF4n%2FmkMSB4t6LCUNPdqh%2F6p7W47I0ywoOv%2F5avlbjLUpFaCdTfMOKav8kGOqUB8H8NHCxOSDVMCgRedVgZ6XaPqCiobsTmuZeXpMdFGa%2FFVuufZ0Y8HmjYyvIG9FiGOmXBvluOtKAu6DBlHjKMZSbk8ws2J8x5m9903naEnD2h3M7vN4uQ55nZe1RtkM%2BdG0PHWkZU6yFqjHOs%2FKFzvm%2FthWL9OifGo9ruolwnLBIjTuuU5zcZ6qurQ%2FQOYc%2FRUc19OdVQpYj1cGOdrN%2BtlFE3YzST&X-Amz-Signature=8e701d2ee015212ef1cc43acd2c2d4d2e2fa9e9ed2eeaba8d977cdff665bddf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNYL54G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC5WzUeqlp%2B5JGSOoDQkf95MlC1gPFaPFEjjC3dSjr%2FUQIgGHIq%2F0z0gUBc99kAtLyQzD3jRAe1ABvcL8iJf2dHq5cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPwyzfSp%2FZTY7ZGc3ircA9zu%2F5q9FtDejmEWbB8XxSyJYrGZoh3NDmKccM%2B8Va%2B2G%2FLKztq%2FF6YY9RfqcpS2BiiVcme9uGajIoO%2FzOZIHtSOpH8E%2FshJivPIhn7X7mwKVgK1eGJH%2FJ0WKYUIkbwnL9dYpaU66iyVlcZeYKoepNRVbWZsFWS1cCPeQphnYLmx0U4rIvTPDEp7aROVIYrvN9q%2BmBg0Z2Nnm2gwn4bHeYkOPrbA4p3yBm9bJTCa1SSQxHIb6irfkCV993PuYccQTkMccPLvNMN4lqWT0e%2FMnFu6lS%2FEL8%2BYdc4jXU8JiuXITQZ1rviTr%2FD0Vej1b7UXFo7%2BTugG3IuV39kj5d9soIbJjFfL41ytQtgrm9rLzZIrcA9Tk0QSONLe5cQMVfPFcdPaMD9czF5cRNi0IIJV%2FZxLvG85ad6Xu%2Fa1nb9oD9KpiPdUD7mBE8FHNET%2FQbl9W4jhkPyveXay9ldFWU6Kz28tCS2O1e%2FKLfCODsnNpmEVQpjlsd6p4cZThDH%2BARGlFsU%2F6O8isA8%2BuyfJ6aIs89gC9v3UZafU23bZPf0p8p10GD3QnZ6tj7pFD6XrIBMByoggvWW1WSF4n%2FmkMSB4t6LCUNPdqh%2F6p7W47I0ywoOv%2F5avlbjLUpFaCdTfMOKav8kGOqUB8H8NHCxOSDVMCgRedVgZ6XaPqCiobsTmuZeXpMdFGa%2FFVuufZ0Y8HmjYyvIG9FiGOmXBvluOtKAu6DBlHjKMZSbk8ws2J8x5m9903naEnD2h3M7vN4uQ55nZe1RtkM%2BdG0PHWkZU6yFqjHOs%2FKFzvm%2FthWL9OifGo9ruolwnLBIjTuuU5zcZ6qurQ%2FQOYc%2FRUc19OdVQpYj1cGOdrN%2BtlFE3YzST&X-Amz-Signature=6172a779a1e43124b1f891a8ab0c096747486c91e8fce0ca164219995e3bb50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

