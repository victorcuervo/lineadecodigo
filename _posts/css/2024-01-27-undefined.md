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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGPRTH5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCXqdDU7Z%2B3AOuOUl8gnUS7%2FR8VnaioIdUMhbsiw5P%2BAgIhAOYitMvKQPgW%2BX%2BD%2B%2FIdvoRvHPo8RA4E1VWm6Qb%2B3ZKwKv8DCCsQABoMNjM3NDIzMTgzODA1IgzgKB8MbdZQSNQKfm0q3APPnZe1mXYRLBmRbnxdVA63DFmMQWu%2FGB%2Bzdw2hXWSB2YHwhhqh2tOfadHWl6p8lUMKw63ieGEpqkTVwmJBbxUBO5PQD%2BbUcfTj6SHZNo9rG1Pjmjn%2FO%2FcWoXayPlofDVPjeoeO8tlW%2B7S6bTYV%2BEdzxm%2FalZWk5jYR%2BSJohutgxu3LY5wWxzHU17BsOy0DY%2BBg6teL9H0Gc3%2F8JMF%2FMS0%2FWeC%2BFVzyTUsUOj%2B%2F0fC9hfisuRXFJS8ChjghEsoVd0x7OhFnD%2FrvYqbhU2sncb6ruu48KHV2PP9iZiIV3fY4JlQpr9AWzzneqmhWL%2FJ68EpdX18DlzwUcBm57mFhjUeIx5VUQQP%2FVDq1szgqEtboB9EBQHRdApRFYMbNclFsPibu1KgChzgNtB3ZlTeMBz%2Bkt5NleMbf2LxC%2FyASV8qSg6%2F8drbt%2BbyEaEilLRgowDQjWM6FQEZ8R0aFRehVtSMgDCubnCndMj1Liooa3S9CYSb1I3Wxf1UHemImK60n1KjSupUaCBRPvXrVw3E54ysTu64xjktvHiA4ZaiDsEsdU3bmIVq75A8spl4hc%2BB1b39YH7jvSUar%2Ffdy90gkekTd1z9wAhfDmpoxVaybHKD4IQHTE5y64D6W1r5xmTDuksDJBjqkAbg6ULhJz0r0W1QXQz4cl%2BmPTKO7wl%2F5PCEWFgMhr6Vhw0F%2FOSUW%2BzdAq4UyxnirwtyMFeox7WisgJ%2BEDzS1o2CpcUUQfhAjB2%2Fq7O5ZW58s8E%2BWsblFwuYJMhGkWHXgTqNdO4AivyhSnvGIpJUWT%2Bk%2B1OzM0zhOyOQZaFwX%2FS8svrrewS%2FbzPEKHlrIRRscO9r3cm%2Bi%2BsGgCu6N91eUOBTnHKdW&X-Amz-Signature=002f395a9cd403003042e2c8032a1c9065095f02978366ae03ba5cd12afab68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGPRTH5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCXqdDU7Z%2B3AOuOUl8gnUS7%2FR8VnaioIdUMhbsiw5P%2BAgIhAOYitMvKQPgW%2BX%2BD%2B%2FIdvoRvHPo8RA4E1VWm6Qb%2B3ZKwKv8DCCsQABoMNjM3NDIzMTgzODA1IgzgKB8MbdZQSNQKfm0q3APPnZe1mXYRLBmRbnxdVA63DFmMQWu%2FGB%2Bzdw2hXWSB2YHwhhqh2tOfadHWl6p8lUMKw63ieGEpqkTVwmJBbxUBO5PQD%2BbUcfTj6SHZNo9rG1Pjmjn%2FO%2FcWoXayPlofDVPjeoeO8tlW%2B7S6bTYV%2BEdzxm%2FalZWk5jYR%2BSJohutgxu3LY5wWxzHU17BsOy0DY%2BBg6teL9H0Gc3%2F8JMF%2FMS0%2FWeC%2BFVzyTUsUOj%2B%2F0fC9hfisuRXFJS8ChjghEsoVd0x7OhFnD%2FrvYqbhU2sncb6ruu48KHV2PP9iZiIV3fY4JlQpr9AWzzneqmhWL%2FJ68EpdX18DlzwUcBm57mFhjUeIx5VUQQP%2FVDq1szgqEtboB9EBQHRdApRFYMbNclFsPibu1KgChzgNtB3ZlTeMBz%2Bkt5NleMbf2LxC%2FyASV8qSg6%2F8drbt%2BbyEaEilLRgowDQjWM6FQEZ8R0aFRehVtSMgDCubnCndMj1Liooa3S9CYSb1I3Wxf1UHemImK60n1KjSupUaCBRPvXrVw3E54ysTu64xjktvHiA4ZaiDsEsdU3bmIVq75A8spl4hc%2BB1b39YH7jvSUar%2Ffdy90gkekTd1z9wAhfDmpoxVaybHKD4IQHTE5y64D6W1r5xmTDuksDJBjqkAbg6ULhJz0r0W1QXQz4cl%2BmPTKO7wl%2F5PCEWFgMhr6Vhw0F%2FOSUW%2BzdAq4UyxnirwtyMFeox7WisgJ%2BEDzS1o2CpcUUQfhAjB2%2Fq7O5ZW58s8E%2BWsblFwuYJMhGkWHXgTqNdO4AivyhSnvGIpJUWT%2Bk%2B1OzM0zhOyOQZaFwX%2FS8svrrewS%2FbzPEKHlrIRRscO9r3cm%2Bi%2BsGgCu6N91eUOBTnHKdW&X-Amz-Signature=c0fd0bd50d10a494f7d0dbcb1fea1d179ec9c216af2bfceed637e1b1f974bb62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

