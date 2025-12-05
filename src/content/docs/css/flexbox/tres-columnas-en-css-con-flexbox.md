---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IYHWD4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFgo1tMaG8%2FZL4tAXM2AvnEe2%2BZV8mVRcpnnyrnZtO5AIgBi%2FzOGaHB2qnCHcHMYFVO9VgMbZyDVVLjQ%2BqNuJfR9sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHgwIdwBms8Jr1GLzircAyjVL%2FwRYwsGOaJwgglUwEpjuAKEAkYy6%2F01znemVEp3TbzJXltFxrUE6gHwAj5r1Hom7w6ialU9%2FLGMBvdFe8d%2BpC%2Bj%2F2eVFA126jy%2BUejD%2F4o7kHPdAsq5w9X%2Bb4e1HVERSkKz%2BnIBmAVk5GI6yura2hWhTzH7tQCmV9gSk5xkjHbXRVprubaQArRkoT6pHG0dPQVx1oQJHDRn6gdXDIyhNIR%2BExPFQgmAVlrATzdLdGFrhM28oM75T6l2PpbornIpFrdMCV6hptLurax4rQ5MOIeHAR7SBp107W2%2FaDYARiuWMTDSu7ma6aJa7iQ3EamiAuzlBfaFSY3m1V6WumirXOTfnrKi5IBx23ea%2BV8781GRT6W9UTCsajRN3oUEbwbxIkPQDXThJkICMII7EtGuAj22QFQh8oyJB5LfN3qrODAkA8rDSdthV8GWAiIoEnP4OVgi%2BnvpZGB0VgHY6jL9rXZ1z4jQygm%2BGKwGb22kIBL8KU6Tj5CV9qxqYTwbxcENP6JhD3QvmZEcoTZ85Y6mWexnGMHIYd2QD0KuMVTvehw0LasoUyh9sbe5%2B5Jz8oG30vRbGEdsl%2BhMKoMg1aTjMNHPRowJjRlKh%2BchPgy6zUvEd%2BnHyvgZPwzgMMTIyskGOqUBNbi5ItciHSrOIfSlv0Ly4iAsZi%2BIYVVrw9NdOqt3Lk1zJX458wFh88Ip620aQBSf%2BgZmzMad%2BlxB%2BNNMQTgm7jsH5X7gXTp%2Bhy3WywVYOsG%2B3ikZ3%2B5kHPCF3ohBw8IPmyEdTEdrQWK86dbigeWagUSGTd4jrSQmJdQUsrPISwAGQJ4gq1f0Ai7kjns6FPzsg2kG2YxM9FrI2UGwOZAPFHq3V2IP&X-Amz-Signature=968133c22b19ba6ae33fe338ddecc56d8423b70a88d6d50ef0039d01efe726ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7IYHWD4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFgo1tMaG8%2FZL4tAXM2AvnEe2%2BZV8mVRcpnnyrnZtO5AIgBi%2FzOGaHB2qnCHcHMYFVO9VgMbZyDVVLjQ%2BqNuJfR9sq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHgwIdwBms8Jr1GLzircAyjVL%2FwRYwsGOaJwgglUwEpjuAKEAkYy6%2F01znemVEp3TbzJXltFxrUE6gHwAj5r1Hom7w6ialU9%2FLGMBvdFe8d%2BpC%2Bj%2F2eVFA126jy%2BUejD%2F4o7kHPdAsq5w9X%2Bb4e1HVERSkKz%2BnIBmAVk5GI6yura2hWhTzH7tQCmV9gSk5xkjHbXRVprubaQArRkoT6pHG0dPQVx1oQJHDRn6gdXDIyhNIR%2BExPFQgmAVlrATzdLdGFrhM28oM75T6l2PpbornIpFrdMCV6hptLurax4rQ5MOIeHAR7SBp107W2%2FaDYARiuWMTDSu7ma6aJa7iQ3EamiAuzlBfaFSY3m1V6WumirXOTfnrKi5IBx23ea%2BV8781GRT6W9UTCsajRN3oUEbwbxIkPQDXThJkICMII7EtGuAj22QFQh8oyJB5LfN3qrODAkA8rDSdthV8GWAiIoEnP4OVgi%2BnvpZGB0VgHY6jL9rXZ1z4jQygm%2BGKwGb22kIBL8KU6Tj5CV9qxqYTwbxcENP6JhD3QvmZEcoTZ85Y6mWexnGMHIYd2QD0KuMVTvehw0LasoUyh9sbe5%2B5Jz8oG30vRbGEdsl%2BhMKoMg1aTjMNHPRowJjRlKh%2BchPgy6zUvEd%2BnHyvgZPwzgMMTIyskGOqUBNbi5ItciHSrOIfSlv0Ly4iAsZi%2BIYVVrw9NdOqt3Lk1zJX458wFh88Ip620aQBSf%2BgZmzMad%2BlxB%2BNNMQTgm7jsH5X7gXTp%2Bhy3WywVYOsG%2B3ikZ3%2B5kHPCF3ohBw8IPmyEdTEdrQWK86dbigeWagUSGTd4jrSQmJdQUsrPISwAGQJ4gq1f0Ai7kjns6FPzsg2kG2YxM9FrI2UGwOZAPFHq3V2IP&X-Amz-Signature=a1547661d67240f551d36e9282f6dab28cf905c76f643bc8055fcd1c6eab3b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

