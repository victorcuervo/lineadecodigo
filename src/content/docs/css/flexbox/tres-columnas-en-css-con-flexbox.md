---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLJ4AKR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFavV2Q6234Z8bk2NVOFSqpvDMSfDOVCVuecFpr1LQstAiAc1GuRNSnP99o49sFknt6WmdPZKcNmT0e2556Ps5G%2BYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMYxP0oWdYp2wjth4WKtwDL7xT%2BcCmQk0d%2Fv0tR5PcRv5URSBmT6svNyupqqigXtyTCG2vMGkctHrqOFL50h0eqbp53Tif7EAISDMyOUDXR3LNr82iC6SPwcqzDFVTjH00BuJTf1DlHKnXv0RgqUW4PawjP7PJLUzTuquMR%2BIxAICDCrxGJqs9s6IISXczJr55GHYtmtYqC7ZuJ9f5XwEjqBZHOmoxB2arHrmS%2FDpKtqR4PC0Q1fNDgy%2BiU1wrgelYYMPhaO1wLpxp2jUccmlNibZStj%2BfNd%2BSXYT52HoQbLBT095ZOrUUZYjJViP7cfIL9XoSMQ9GXpwWwoJBzmcugxI8ro%2F1ETmd2jVojchnTj1adkPLkmRIY%2FMmIvtbKV6R3B3ovMXTnFOBjCjsVbnwu5rff2cqUdvEV%2B9yitIVJac6akaZGwI7DYzFZpdq%2BXr7%2BD%2Bv39WbrxU3sYxX4SS43fNnW%2Bo7eVRWA3Ek9D4eJO%2B3TTXq6gJBJhNhL3pC0W18ueM%2BBbDD2NmGgqD3%2FhFuSB1byTSz7WZPwT5EoCzZXFR8OZ2gsX7dPpM6MmCAua29dIaKnw0WniGhZ5teW0jIYp372pq1TWwsLViS3vToE3deGaS4LNLva64dTbwmh2tidy7IAsxW%2F7bQx3swvcnKyQY6pgGiBKC9OgNAUFrl5zNCo9HpvOOP0LM5wRBU1qlPhcBqQUePEEVVAvRdIqXKX1621gXJGEj1it12DQbxirHCMh0D3jhbFDhkm7iQAGxpTgc3LtXYQkWXSr9obOfQutx34eJq0TLZYfpLhjZpcYioOwlB7gmG4pRv%2BF7Z4lmkwrgfcnJdVh6UtLeKdw%2BchvD16PTFjGqcGzRCXkcPtfVgG62s2HkoISnG&X-Amz-Signature=d2f9748d51c756c49614bec71cba5d8a57f2018fe3e66e1044b612ce5aea7bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLJ4AKR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFavV2Q6234Z8bk2NVOFSqpvDMSfDOVCVuecFpr1LQstAiAc1GuRNSnP99o49sFknt6WmdPZKcNmT0e2556Ps5G%2BYCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMYxP0oWdYp2wjth4WKtwDL7xT%2BcCmQk0d%2Fv0tR5PcRv5URSBmT6svNyupqqigXtyTCG2vMGkctHrqOFL50h0eqbp53Tif7EAISDMyOUDXR3LNr82iC6SPwcqzDFVTjH00BuJTf1DlHKnXv0RgqUW4PawjP7PJLUzTuquMR%2BIxAICDCrxGJqs9s6IISXczJr55GHYtmtYqC7ZuJ9f5XwEjqBZHOmoxB2arHrmS%2FDpKtqR4PC0Q1fNDgy%2BiU1wrgelYYMPhaO1wLpxp2jUccmlNibZStj%2BfNd%2BSXYT52HoQbLBT095ZOrUUZYjJViP7cfIL9XoSMQ9GXpwWwoJBzmcugxI8ro%2F1ETmd2jVojchnTj1adkPLkmRIY%2FMmIvtbKV6R3B3ovMXTnFOBjCjsVbnwu5rff2cqUdvEV%2B9yitIVJac6akaZGwI7DYzFZpdq%2BXr7%2BD%2Bv39WbrxU3sYxX4SS43fNnW%2Bo7eVRWA3Ek9D4eJO%2B3TTXq6gJBJhNhL3pC0W18ueM%2BBbDD2NmGgqD3%2FhFuSB1byTSz7WZPwT5EoCzZXFR8OZ2gsX7dPpM6MmCAua29dIaKnw0WniGhZ5teW0jIYp372pq1TWwsLViS3vToE3deGaS4LNLva64dTbwmh2tidy7IAsxW%2F7bQx3swvcnKyQY6pgGiBKC9OgNAUFrl5zNCo9HpvOOP0LM5wRBU1qlPhcBqQUePEEVVAvRdIqXKX1621gXJGEj1it12DQbxirHCMh0D3jhbFDhkm7iQAGxpTgc3LtXYQkWXSr9obOfQutx34eJq0TLZYfpLhjZpcYioOwlB7gmG4pRv%2BF7Z4lmkwrgfcnJdVh6UtLeKdw%2BchvD16PTFjGqcGzRCXkcPtfVgG62s2HkoISnG&X-Amz-Signature=1749843ca133ad0d780161d5ab989d952ccb43443b07ecdccb048f413f9f0580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

