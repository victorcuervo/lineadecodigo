---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW4CFB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr7JUi%2F2wQA3f7%2B5p%2BXRCrZLa1%2Bead3RaAtdUf%2BcQIYAIgQMppf4nqEmO%2Bq9J7FaZXx7lIYOAD1zkNO0%2B2OWkVcoEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE55mvW87z%2BggQeCCrcA74sWBsg4SNrsZCe%2Fq71f8ldUpf9f9gqxwDuIWVYQqk6fugw70rHboVifdBlIXL3l%2FQ%2BfXv34xLjuphNWC3ZjfOjsk%2FzRKWWap166fXKfa4nh%2BgsF4kwig749W0ENRECrL6AT26lJhvOWsdwk%2BJiyUI1ns9H7FYx8wHPXu9g939YR4vLzLHLvSAhKtdv999bOuRD2hKE4LJtAeGPGJ%2Fc6jWbw7pr8U8oNxOx83kUtxBl86tJuLjvVP7xeCnHqwAYBYeGFB8IJjhNyf4YJADPjIwX1pjOLHmI8jouhYdU4yjWL8bohSpbWC%2Ffu0%2FUOCeVP7b6VfWpa%2Bqfyst%2Bb3Mm1NfLCzWD0x7svrev3XmmPxdlsuzeq0%2BdBt%2Ff2a4O41MC4HgCMGZsKRuVhP1Q4vy2%2ByNc%2F0WOp9QDqXGwI7zUaEqgSM5dc7MxzmjXiWdd2IuQVCV6St8ZTRSJUkPDy3pQrbUoO4R32AFtfrVJti5FRCl0aPZJzUgPiUIwhRORUoUzZzXNbE%2FriA8bTy6vc1BhiS6UqHjwb16qIHC1%2FloKGCqJYbQ8UupLeYePgPmUvsQhi3U7GviPCNe%2Br0uwE3FeHaLcpIpyXQ6zUd%2F%2Bv%2FWOduGBP0UMNAMNMIpjxYEEMPfc3MkGOqUBZoYBIVsGOma6rvKP2M5hE3wIYKEpdySLViWJ6gVvhpP9RNAYBy54mrWr5yLgvPj%2FHxAZ9ly4PaOG1x9B2fj%2FlR02BDgjhXJGL0YH2WLLxynNOWYnor0HjrleS1kI1TY3T8GqoFYlcm1Dnl2D26jsC4qOUkeXmG%2FSFuHd00C8lJW0CMhkZIH%2FQFEOh3Xy6CM6hFDSWqDj%2FYLFOFXZWa2a3Sf7kX44&X-Amz-Signature=0fc3910eac026eb2d60852564ba24018c0e8cd57d5c24730e1dd91eb18ee0ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW4CFB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr7JUi%2F2wQA3f7%2B5p%2BXRCrZLa1%2Bead3RaAtdUf%2BcQIYAIgQMppf4nqEmO%2Bq9J7FaZXx7lIYOAD1zkNO0%2B2OWkVcoEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE55mvW87z%2BggQeCCrcA74sWBsg4SNrsZCe%2Fq71f8ldUpf9f9gqxwDuIWVYQqk6fugw70rHboVifdBlIXL3l%2FQ%2BfXv34xLjuphNWC3ZjfOjsk%2FzRKWWap166fXKfa4nh%2BgsF4kwig749W0ENRECrL6AT26lJhvOWsdwk%2BJiyUI1ns9H7FYx8wHPXu9g939YR4vLzLHLvSAhKtdv999bOuRD2hKE4LJtAeGPGJ%2Fc6jWbw7pr8U8oNxOx83kUtxBl86tJuLjvVP7xeCnHqwAYBYeGFB8IJjhNyf4YJADPjIwX1pjOLHmI8jouhYdU4yjWL8bohSpbWC%2Ffu0%2FUOCeVP7b6VfWpa%2Bqfyst%2Bb3Mm1NfLCzWD0x7svrev3XmmPxdlsuzeq0%2BdBt%2Ff2a4O41MC4HgCMGZsKRuVhP1Q4vy2%2ByNc%2F0WOp9QDqXGwI7zUaEqgSM5dc7MxzmjXiWdd2IuQVCV6St8ZTRSJUkPDy3pQrbUoO4R32AFtfrVJti5FRCl0aPZJzUgPiUIwhRORUoUzZzXNbE%2FriA8bTy6vc1BhiS6UqHjwb16qIHC1%2FloKGCqJYbQ8UupLeYePgPmUvsQhi3U7GviPCNe%2Br0uwE3FeHaLcpIpyXQ6zUd%2F%2Bv%2FWOduGBP0UMNAMNMIpjxYEEMPfc3MkGOqUBZoYBIVsGOma6rvKP2M5hE3wIYKEpdySLViWJ6gVvhpP9RNAYBy54mrWr5yLgvPj%2FHxAZ9ly4PaOG1x9B2fj%2FlR02BDgjhXJGL0YH2WLLxynNOWYnor0HjrleS1kI1TY3T8GqoFYlcm1Dnl2D26jsC4qOUkeXmG%2FSFuHd00C8lJW0CMhkZIH%2FQFEOh3Xy6CM6hFDSWqDj%2FYLFOFXZWa2a3Sf7kX44&X-Amz-Signature=8b67694462259811bf45bb850753d58dc486a3742778be614d07f52375867acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

