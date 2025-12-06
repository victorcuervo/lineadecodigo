---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNSRBYZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxL5a2CO1fwqQ5qtqQNjohSYYYVypKs6%2B075tldR%2BMDAiEA4znTq1mPPYJ7ahH%2FwTtXnHIn4LaEL4en3IbrlNTj9YEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFBUmTS2vww0woOpWCrcA91tMbs2ezJ2GnEqHp4PsscNpBiD91Z%2FTVsxkxCnB8Q5d33dVR9ZiAgNq2q37kEjTrBxn3p4Nbu9JXQ8eK9KL55oF%2BQUtV%2FXyJQXsYUqFbbQ0b8y8eYpOaK2WN3XONS48WMyNEV1Q0xLtUcrlFxxF1c6LOPP8AApwe1m1LfXIWJyvHE%2F7ssNHmA9YsbBFmiCVPr5iNKkTGV3i00zWYNjPR1y2qCM2m%2BYhwX7tfAlDrLel1qKyADfNWuXAS3sJeFXigUqZ2yrM2YE95CgSyi0887FjHw7HdWOg9hrOQOkug%2FwXddmL%2F80cvWCUxygq3nSRM4A91iIeA12z8UMeev88wym6pG2Lo4tuFQGxPVon%2FHJXUKJoT9qs1W8eOrrd0V%2Btu%2BoYdrzJ%2BNM70DwMp1rhsqsH550RgQJ6q55VTY7FjXgJbrBcJf4jC%2BvqcORIDLbx0AJjrvmFDw4qg9cAI%2FlyfUXkTYX0fo71oQSY0n6wo9ERK4ftTTIEL88B1vJd0vaW%2Fxc8S1H1EvUp%2Bd3VYXxnvBEQicZpohcCu5%2BgllfINDje%2BStL9HSglqqV2c1pMfUmDxVG6%2B86rqYupyXQAlSNEbe%2BEpJxIzftLPxs2uGG00vPD5yjbJwlGvSSAEPMJS8z8kGOqUBcPe4OD5cyWOgtFUlAmJ2RRrhOTuTZhNbPKaIqLFu4sd8j3Q19lqADY66b1%2BZUUKNf9fzJy7VECmXK5Pksyf6nEYxeF603k%2FivOUHvJTn8efUe2iRk9pGQN5I37KT%2BhTgadePy5IO8rHAKyBp%2BH14XnSF3Cwtxf0S1k4dHA9q5xwRo5YrxyHMqbTqb%2FLXDIPSa9AJjSkx5%2FaFk8PEg9ySRB%2BZU8Jl&X-Amz-Signature=89f5b68a90f6c85ae3586ba65a8185e7268b396191b38e55ce92c67b6acffcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNSRBYZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxL5a2CO1fwqQ5qtqQNjohSYYYVypKs6%2B075tldR%2BMDAiEA4znTq1mPPYJ7ahH%2FwTtXnHIn4LaEL4en3IbrlNTj9YEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFBUmTS2vww0woOpWCrcA91tMbs2ezJ2GnEqHp4PsscNpBiD91Z%2FTVsxkxCnB8Q5d33dVR9ZiAgNq2q37kEjTrBxn3p4Nbu9JXQ8eK9KL55oF%2BQUtV%2FXyJQXsYUqFbbQ0b8y8eYpOaK2WN3XONS48WMyNEV1Q0xLtUcrlFxxF1c6LOPP8AApwe1m1LfXIWJyvHE%2F7ssNHmA9YsbBFmiCVPr5iNKkTGV3i00zWYNjPR1y2qCM2m%2BYhwX7tfAlDrLel1qKyADfNWuXAS3sJeFXigUqZ2yrM2YE95CgSyi0887FjHw7HdWOg9hrOQOkug%2FwXddmL%2F80cvWCUxygq3nSRM4A91iIeA12z8UMeev88wym6pG2Lo4tuFQGxPVon%2FHJXUKJoT9qs1W8eOrrd0V%2Btu%2BoYdrzJ%2BNM70DwMp1rhsqsH550RgQJ6q55VTY7FjXgJbrBcJf4jC%2BvqcORIDLbx0AJjrvmFDw4qg9cAI%2FlyfUXkTYX0fo71oQSY0n6wo9ERK4ftTTIEL88B1vJd0vaW%2Fxc8S1H1EvUp%2Bd3VYXxnvBEQicZpohcCu5%2BgllfINDje%2BStL9HSglqqV2c1pMfUmDxVG6%2B86rqYupyXQAlSNEbe%2BEpJxIzftLPxs2uGG00vPD5yjbJwlGvSSAEPMJS8z8kGOqUBcPe4OD5cyWOgtFUlAmJ2RRrhOTuTZhNbPKaIqLFu4sd8j3Q19lqADY66b1%2BZUUKNf9fzJy7VECmXK5Pksyf6nEYxeF603k%2FivOUHvJTn8efUe2iRk9pGQN5I37KT%2BhTgadePy5IO8rHAKyBp%2BH14XnSF3Cwtxf0S1k4dHA9q5xwRo5YrxyHMqbTqb%2FLXDIPSa9AJjSkx5%2FaFk8PEg9ySRB%2BZU8Jl&X-Amz-Signature=7386ddffbb028030621fb76283db6e568216037fead01f4b2ca4cb1bb9731669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

