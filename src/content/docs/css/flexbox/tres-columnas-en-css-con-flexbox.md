---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5SDJ3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICm6tnlBD1F5jBD%2BZjU0I%2BGqpzhE08fC%2FGqSbLGFA6NkAiEA636rTz0L74opkaR3W%2FdurM%2FUjY4cVH70QsO9zb72CY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLklD2PlTYnSibSGuircA6a7q8eQEg4CW1NN9ayEpjcslUpMeP%2BieNjOYg6qspNprCmJiUidBEoyyQVmHp%2Fq1vH0%2BmdPp0vgyXDdkEo2vAAwRHsVMAkbC02OMsXkcSDweU34uMEg8gHNW%2Bf4pUbhvp7eDQeloAlUHdZO2EB4XQxw%2BSROrli%2FVohS2pskihk9dvaTSOypyNyfBMGldh9%2BsvftUaXAiDLiY2xv5hX1WhrXkcEPiM6SP%2FneQXBn6usXqaA4Yzsva3pgk5ePEXnuflwdWvKGfy%2BXc00gK0RKhlq9b2b9LZebXAs5%2BpGFGB0WpcyAQkpYTCSVBwusTvAyg5aiKktRJiVetIUFs65UYtG9B1y%2BoWlBNXIv%2Fqg5keRgYgttEH2Rpp1GkUXZKyI5dVDTYZnknb0fRVLsZo6XXXeY3%2FsbjEou6kv9eKhVPs9MLfV26ZMRGgDd2z3%2FMnbgmvR71yQPmXUlVAGbK5roH9vf2%2BMmoE0RFuKHkgoVPiyuChXJTfEXGF7vs5XcRMjyOzf7F6ErAL6r%2FdMTLfbLgxbbNz%2BEMjRgdt0%2FeMlCaY5VK4jbZ7cu4FtBQXy00e6yxH9clvm5zq5FecXSjc2Y%2FV1p9HgQJ%2FAkmSQX5l%2FOFBKLCjnccPFqTQVnYeijMOCFxckGOqUB%2FQ%2FgP4IGOpB86kcx3EEowEgf0JeITNrpgPok9bE%2Fx931uUs%2Fot0VdgICObLp890EktQ4P5RyBDV6%2BbMtGZuNc5mByaM4JyuIO0BtDEzJjzkbVN2tJ8HZqBeu%2Fc9vWDEO%2F8%2FVkmlPR6BJMHNy0MebwCWLuQfP%2BFuiAdPe4bFk%2B8Oczk6GnsWnS2nkyX69qkEekm9e2nVoJsdIoK%2Bds0t2KzLvYyk8&X-Amz-Signature=3297ccdfdcf8d391d056030b64e0a6b51029ac62d29bd124b306e431215f47de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC5SDJ3V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICm6tnlBD1F5jBD%2BZjU0I%2BGqpzhE08fC%2FGqSbLGFA6NkAiEA636rTz0L74opkaR3W%2FdurM%2FUjY4cVH70QsO9zb72CY4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLklD2PlTYnSibSGuircA6a7q8eQEg4CW1NN9ayEpjcslUpMeP%2BieNjOYg6qspNprCmJiUidBEoyyQVmHp%2Fq1vH0%2BmdPp0vgyXDdkEo2vAAwRHsVMAkbC02OMsXkcSDweU34uMEg8gHNW%2Bf4pUbhvp7eDQeloAlUHdZO2EB4XQxw%2BSROrli%2FVohS2pskihk9dvaTSOypyNyfBMGldh9%2BsvftUaXAiDLiY2xv5hX1WhrXkcEPiM6SP%2FneQXBn6usXqaA4Yzsva3pgk5ePEXnuflwdWvKGfy%2BXc00gK0RKhlq9b2b9LZebXAs5%2BpGFGB0WpcyAQkpYTCSVBwusTvAyg5aiKktRJiVetIUFs65UYtG9B1y%2BoWlBNXIv%2Fqg5keRgYgttEH2Rpp1GkUXZKyI5dVDTYZnknb0fRVLsZo6XXXeY3%2FsbjEou6kv9eKhVPs9MLfV26ZMRGgDd2z3%2FMnbgmvR71yQPmXUlVAGbK5roH9vf2%2BMmoE0RFuKHkgoVPiyuChXJTfEXGF7vs5XcRMjyOzf7F6ErAL6r%2FdMTLfbLgxbbNz%2BEMjRgdt0%2FeMlCaY5VK4jbZ7cu4FtBQXy00e6yxH9clvm5zq5FecXSjc2Y%2FV1p9HgQJ%2FAkmSQX5l%2FOFBKLCjnccPFqTQVnYeijMOCFxckGOqUB%2FQ%2FgP4IGOpB86kcx3EEowEgf0JeITNrpgPok9bE%2Fx931uUs%2Fot0VdgICObLp890EktQ4P5RyBDV6%2BbMtGZuNc5mByaM4JyuIO0BtDEzJjzkbVN2tJ8HZqBeu%2Fc9vWDEO%2F8%2FVkmlPR6BJMHNy0MebwCWLuQfP%2BFuiAdPe4bFk%2B8Oczk6GnsWnS2nkyX69qkEekm9e2nVoJsdIoK%2Bds0t2KzLvYyk8&X-Amz-Signature=c8d75b9272aaf84c3e77ee3f925ea5c26766a272318b1a58f57183392c28ed01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

