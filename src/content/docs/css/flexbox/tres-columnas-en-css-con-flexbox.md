---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDYBRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz8eZRIkIrEQCN3av3fBMu5k%2F0D2NiKTbXZeDxMpgtJgIgb5OYNwjo8xDcGXsfASb1P9ooI8BeMaTRtpw5L1d9giAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMML%2F7SdMY7pqLfDnCrcAwPCD01CjF2xO2dh4IJOC54BhROPEcwGDd%2BFPpknNpQPNasDHkqYEDkzLaV88Z6ysK%2BCVZbyMybFXsNKJM9U4uvfhCdBzC%2BfA9eJEHwGlfS0wGgWfEtMNQmlohSlesU1ntQTxYStMhve6syMSWGM6LTbHuhUnam4PKwjNMKO47sI5PLF8NKhSeFKcPwVf0qovvN34lW2J%2FGC4I2EP3SaHPKkMrErl38hmiUKzxQrJJdRxp5r0Z3crjwYpwXRyf4vTc6V8FO4tqq8IcS6ioB1pSMUbuRYsjQFdvOgzZ4aqkn4X7vA8FnEbT1iZKWk8ORfAc%2BIcNRVySQl5JE45y6hCvWfsG%2F8F6oW%2FAZdJWan%2FIG9NrmTKwV7H8Bq%2FjSuClad6sXgNbReNbC2QKWnG4YhXLlfKpYjdIyUD4xUToYnD%2BAcMNHazAvGQQBmTDgVgBh8tt8aUtpD3toxKfizpfyd0URUMMYJ%2BkPtyKeUR%2FKOUqzWKKecBdb3IjH1YK7%2B5D6ucnSaBttO%2F6SnCyJ5GX8w1V89t04vumqHSJ%2Fnw7PQIQz78lK5gOz69aJuWhYFKgv0%2FYk04I%2BXLk9WwBp9UG3DiE67jBRxjfo83Mdh86XaCutX%2FKk6wLzhnXjcAL0lMKnE0ckGOqUByzj2fykWvfnrIhRFR9F%2BwMrm%2BiFmpi2ZVurfH8QqFCsVW3DR9Bnj3tpgpmXnlp317ZCQJ8S6MbM3p4dbWaMjBjZXB5S%2BViWtuTMa82%2Bg%2B0Pq8S8C2OnaBxcUI1Ewm4UQOpKSYwYX14S5g9Y4uHyfd%2BTCyD8hMYsZOB1iz0DmJCYyUGPjdr7kZPn7uR%2FUdJ3zjiUOPNpDWiSjSzXFehrrtB7%2Fsu78&X-Amz-Signature=c610c02143436b5d7f47500f69786271b673174547e0071388ddf5e8efbe46d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDYBRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz8eZRIkIrEQCN3av3fBMu5k%2F0D2NiKTbXZeDxMpgtJgIgb5OYNwjo8xDcGXsfASb1P9ooI8BeMaTRtpw5L1d9giAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMML%2F7SdMY7pqLfDnCrcAwPCD01CjF2xO2dh4IJOC54BhROPEcwGDd%2BFPpknNpQPNasDHkqYEDkzLaV88Z6ysK%2BCVZbyMybFXsNKJM9U4uvfhCdBzC%2BfA9eJEHwGlfS0wGgWfEtMNQmlohSlesU1ntQTxYStMhve6syMSWGM6LTbHuhUnam4PKwjNMKO47sI5PLF8NKhSeFKcPwVf0qovvN34lW2J%2FGC4I2EP3SaHPKkMrErl38hmiUKzxQrJJdRxp5r0Z3crjwYpwXRyf4vTc6V8FO4tqq8IcS6ioB1pSMUbuRYsjQFdvOgzZ4aqkn4X7vA8FnEbT1iZKWk8ORfAc%2BIcNRVySQl5JE45y6hCvWfsG%2F8F6oW%2FAZdJWan%2FIG9NrmTKwV7H8Bq%2FjSuClad6sXgNbReNbC2QKWnG4YhXLlfKpYjdIyUD4xUToYnD%2BAcMNHazAvGQQBmTDgVgBh8tt8aUtpD3toxKfizpfyd0URUMMYJ%2BkPtyKeUR%2FKOUqzWKKecBdb3IjH1YK7%2B5D6ucnSaBttO%2F6SnCyJ5GX8w1V89t04vumqHSJ%2Fnw7PQIQz78lK5gOz69aJuWhYFKgv0%2FYk04I%2BXLk9WwBp9UG3DiE67jBRxjfo83Mdh86XaCutX%2FKk6wLzhnXjcAL0lMKnE0ckGOqUByzj2fykWvfnrIhRFR9F%2BwMrm%2BiFmpi2ZVurfH8QqFCsVW3DR9Bnj3tpgpmXnlp317ZCQJ8S6MbM3p4dbWaMjBjZXB5S%2BViWtuTMa82%2Bg%2B0Pq8S8C2OnaBxcUI1Ewm4UQOpKSYwYX14S5g9Y4uHyfd%2BTCyD8hMYsZOB1iz0DmJCYyUGPjdr7kZPn7uR%2FUdJ3zjiUOPNpDWiSjSzXFehrrtB7%2Fsu78&X-Amz-Signature=80bd01a40b716fcbc6d0b4c54277ddaad1b354374922de6b8804605c3093aa6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

