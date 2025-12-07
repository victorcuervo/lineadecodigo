---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHHFIFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRqGsa0WBcbwua57bckdU3XAoOYQE3yvetqhcFPZpgYgIhANmVLzmJtjYnLrEv0dfzdmkxYEf76tupO%2BUGcLzyy1%2BUKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgTW9SmXr6NzDeiisq3APqPJ0IofnY16hDza5joJMZ%2F2NNddBnht5aEqVB%2FUHOBNeUEtbvD6cOIkGnUgneNErMQlNns4SLiUcym9ks6GwFhrHyKjFmPJGSfewQ4gdOAZlFU%2BJc5H8HeKWuSP56rChtq3OCyr%2B%2BKhOJ4Y%2F9iUzBVAfSfeC2QLE17ajRy0vHa%2BNLKu2in07RQVPKOE8uInQaOukOfWuQarlblJp6GfiTAHzUskDP6mArpUW5uObfwr%2FWUKKINrApzzc1b6SHRuumKojovGZDAFejT3gaoUuuAtsv3FAZPGMhqofMN48dSawSBeMkt%2FbFS8VpOSQmVcl5oxKsm8Kj4hbuPJ11YjtJTWAoBqVoXStVvemqN5iSmFMYPGFSe%2B7Dkdv7qEcz5LtVwDZIMJH7UjYiELftH7D%2FQfgQsQalTIv5PjYCH7OVAhIA3NJx9J7%2FTEUdJL%2F6XzQxWHTBNwvtHPTBwMedwP9wxDf5K6apusGWcq6C%2BCGAgROze%2B5eg%2B8TaNSBKassTthCsq4gxYmpZiPZVTSXoDnpsp1bLsEVTgiJ7ETq7HYNzoid1GY2gOxZvQPjz1KSN1yywrbicReuq%2FP8jN%2FkPyezThyfDCoyxMTlpQzZ1nuWBFYJ7RavOwaoVF3djzDSndTJBjqkAVBPiCNPv8xLtu2N88Ph%2F6gyS41fRTsms%2BeeDoXC2gde7pSb3AlvbUHJvdqy8cmnR12ilm4cdPxc9rBLe48z1KAOuR0LCjg7S4rx4U0WJSdpokdMYh2oA8R%2BUE3UqnP2NDYRPlUHFef9SUieAM7Y9%2FU7SIoECB8Wo2kkTR%2BliFOuxv4DYnANe54Y%2BMSoLSmIfAc7rcqsnspIBYDlr3BCGXORN%2BAS&X-Amz-Signature=e30c7008624ede42f7cd4c4fae81e556b1a5f5594a98948ccea726e86b9697ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHHFIFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRqGsa0WBcbwua57bckdU3XAoOYQE3yvetqhcFPZpgYgIhANmVLzmJtjYnLrEv0dfzdmkxYEf76tupO%2BUGcLzyy1%2BUKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgTW9SmXr6NzDeiisq3APqPJ0IofnY16hDza5joJMZ%2F2NNddBnht5aEqVB%2FUHOBNeUEtbvD6cOIkGnUgneNErMQlNns4SLiUcym9ks6GwFhrHyKjFmPJGSfewQ4gdOAZlFU%2BJc5H8HeKWuSP56rChtq3OCyr%2B%2BKhOJ4Y%2F9iUzBVAfSfeC2QLE17ajRy0vHa%2BNLKu2in07RQVPKOE8uInQaOukOfWuQarlblJp6GfiTAHzUskDP6mArpUW5uObfwr%2FWUKKINrApzzc1b6SHRuumKojovGZDAFejT3gaoUuuAtsv3FAZPGMhqofMN48dSawSBeMkt%2FbFS8VpOSQmVcl5oxKsm8Kj4hbuPJ11YjtJTWAoBqVoXStVvemqN5iSmFMYPGFSe%2B7Dkdv7qEcz5LtVwDZIMJH7UjYiELftH7D%2FQfgQsQalTIv5PjYCH7OVAhIA3NJx9J7%2FTEUdJL%2F6XzQxWHTBNwvtHPTBwMedwP9wxDf5K6apusGWcq6C%2BCGAgROze%2B5eg%2B8TaNSBKassTthCsq4gxYmpZiPZVTSXoDnpsp1bLsEVTgiJ7ETq7HYNzoid1GY2gOxZvQPjz1KSN1yywrbicReuq%2FP8jN%2FkPyezThyfDCoyxMTlpQzZ1nuWBFYJ7RavOwaoVF3djzDSndTJBjqkAVBPiCNPv8xLtu2N88Ph%2F6gyS41fRTsms%2BeeDoXC2gde7pSb3AlvbUHJvdqy8cmnR12ilm4cdPxc9rBLe48z1KAOuR0LCjg7S4rx4U0WJSdpokdMYh2oA8R%2BUE3UqnP2NDYRPlUHFef9SUieAM7Y9%2FU7SIoECB8Wo2kkTR%2BliFOuxv4DYnANe54Y%2BMSoLSmIfAc7rcqsnspIBYDlr3BCGXORN%2BAS&X-Amz-Signature=413154d5785f404973dc3b3de4b733997e122554c2498ac5dec5edc4c0db77f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

