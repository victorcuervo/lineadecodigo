---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4OU7D7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLw0YlgdoBsOe0XQU0oCMu1LUre24RbKQHDdjBTmRv0wIgfaGv3W1pUpxCr22xkqG1s%2FH%2FPWSCAA2AgEDjssIbgEoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMaCvyGOtcX7G4%2B%2FQircA%2BDKtFXBEFCw%2FOh6rzyRiqu1dTOSaYOm8P4Ln14%2FwfEH9nfzzNW5vAEmMk4fydTptdeksWk1SB%2FXaVj5%2FEispY%2BpEReI2nJGjdcNB6sLjJmpinZXatkYqCcL5oQPTnx29XjswUdXlJX1aZOqq%2F0YW8dj91KKoBK0IgZlrtgPodUug40z%2BzxgcTVIWuBLx7kw3yjtS%2Bw%2BLqObgd2PI38Nj%2Fkqi6FHhrsaI0DqUJttZ3EUPq3bmSaxfWPSYwrRtQYQ3%2BGkDAsZpXxwLr%2Fd6J4wzB47W5ZSIPbiB3HCquaXr4rERWG5%2BBeIYc0BZE0Y8soBae4jlQ6hymV1HpwnNugn0vt%2FNyEUH9l7pGDEoumuM9xssHbgTB8pCN6lY7QkwilgFTQ%2FXgaNTbgzJUwCdDVm%2FuanT%2BrWvvGsJVo7nDVjtC44p9E11g7HVbUWt2xK5VxN5uFqzXhZDekmzfB7Ps7j%2BeKezP3RaWHrkF4cCHGV%2FWK5ISMKE%2FtgH6XjhA0b%2FVdcvNBmZmrzTLBmv5ebHLax2nh6jKjsMAZ9lLtWwenn2os7r52y68P2Ildua2mczKVYlWur93IDzMokOHBwkI%2FFmkf4aH%2BoSl61vsYEytHnrtew4mOxtehI%2F8rfuirWMJrcwskGOqUBG53CHm83%2B8dXqvGSNT%2BQVFDWpmsjO0gvs42AQKZn%2BxklqXLM4fZm9mtdidtiikCoZ0Ff2Z%2BuxKlRxR3nsW7x9FTeCPs1tFk6DVMw3MzYaTr8SNx79xNCd9cmuzs4LPvMqDP3e4Q3gocRvkREOfxvohvrMKbw9P22gDZ5z30gG0RGBavVSMtYul%2BFV84RznA4021Dika7e1PUMJcAyTpZPGn29C0e&X-Amz-Signature=538336dff2269400a17f01f859e7618bc8cfae4d96754a10e477b867e0ee5731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N4OU7D7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDLw0YlgdoBsOe0XQU0oCMu1LUre24RbKQHDdjBTmRv0wIgfaGv3W1pUpxCr22xkqG1s%2FH%2FPWSCAA2AgEDjssIbgEoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMaCvyGOtcX7G4%2B%2FQircA%2BDKtFXBEFCw%2FOh6rzyRiqu1dTOSaYOm8P4Ln14%2FwfEH9nfzzNW5vAEmMk4fydTptdeksWk1SB%2FXaVj5%2FEispY%2BpEReI2nJGjdcNB6sLjJmpinZXatkYqCcL5oQPTnx29XjswUdXlJX1aZOqq%2F0YW8dj91KKoBK0IgZlrtgPodUug40z%2BzxgcTVIWuBLx7kw3yjtS%2Bw%2BLqObgd2PI38Nj%2Fkqi6FHhrsaI0DqUJttZ3EUPq3bmSaxfWPSYwrRtQYQ3%2BGkDAsZpXxwLr%2Fd6J4wzB47W5ZSIPbiB3HCquaXr4rERWG5%2BBeIYc0BZE0Y8soBae4jlQ6hymV1HpwnNugn0vt%2FNyEUH9l7pGDEoumuM9xssHbgTB8pCN6lY7QkwilgFTQ%2FXgaNTbgzJUwCdDVm%2FuanT%2BrWvvGsJVo7nDVjtC44p9E11g7HVbUWt2xK5VxN5uFqzXhZDekmzfB7Ps7j%2BeKezP3RaWHrkF4cCHGV%2FWK5ISMKE%2FtgH6XjhA0b%2FVdcvNBmZmrzTLBmv5ebHLax2nh6jKjsMAZ9lLtWwenn2os7r52y68P2Ildua2mczKVYlWur93IDzMokOHBwkI%2FFmkf4aH%2BoSl61vsYEytHnrtew4mOxtehI%2F8rfuirWMJrcwskGOqUBG53CHm83%2B8dXqvGSNT%2BQVFDWpmsjO0gvs42AQKZn%2BxklqXLM4fZm9mtdidtiikCoZ0Ff2Z%2BuxKlRxR3nsW7x9FTeCPs1tFk6DVMw3MzYaTr8SNx79xNCd9cmuzs4LPvMqDP3e4Q3gocRvkREOfxvohvrMKbw9P22gDZ5z30gG0RGBavVSMtYul%2BFV84RznA4021Dika7e1PUMJcAyTpZPGn29C0e&X-Amz-Signature=e754c04e03a1bec6183004cf631ca49b025c1904590b7047960f9b6f0ebda510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

