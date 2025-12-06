---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APYZQMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvZTfmXOH%2FPJwVF44mvSzzy1bERVy2z0fX8bFWRhvANgIgYhtSGd6oCOUN4ZKmdsnKaXbR19DjoumePcd9PbMEqxEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLVz6rOe0C6gsz9OZircA7faRKSmJI5Dk51GkwFSb3ptDY349qENJQXvTxXGVahIV1cM%2FZRwyX9KVYuNU8y%2F9PFrj7JQpTNkRVfM7nFCDHb9BO69L2dtJkterQzO%2Fp9%2ByBFVYd6%2BjlbOKol8zIBEYXb6IYqTuWuoUW%2BveTY9z2Z9reTjRb%2B4Y6TgLQ9PrX6QFN9AxcD4wEK8i2r%2Btl%2FnZB4JQJKFVtKuLnqmZVvfTuGxNqm17OdyjCrh8Rmsg8oEfUCufdiNWg2Tb1lrWV5vRwjX7Ewi8pbqFiaQsfu7Jz5emS3gensxDYY6qhh%2FW9oY%2BtoceZ%2FfzeZdvOdWZzU85JPpUozDX%2BkAT%2Bt%2BfV1TAB0WqeRsLSAMlV9w3x2tV5dOAuI3QGTaNriAheNx8Cjnpzo06bNDcZV8QBHVwSXv3weMOXZ5X1usm%2BixB8whvor1u%2BZdH7UzJ2mu2nNRC%2B027VHc6x%2FWjZZitqV3IqZjeuuRz%2BpHkXQhI5sW%2FYGTzLQHTfUasJu3TVKPgjrTX5iEMzBofc0z5J9rhTN8LDwY%2F%2BmGNAeMpLfetS55dQrvBNq1rccIvXd7xvUFwUBrQf%2F0UVPkQ8w8KjxKpL4MtviIFEkuA2U%2BU2G2srreiw1PUhtixx52if1uzHCc5GNzMNvU0skGOqUB6bsPJYDbawYzc8hqRT6l%2B245jc5GlMa6mJzZUMuuzn2U1sFnZepXMsjiW%2FesYDEmNDzKKua%2Fl4Ay2akh9CX5DlMz1CW1UGLNz7kCEesvCbV2edqu2FIUzs%2Be15ZTZ6Agwx1hN3XuSaMx56ng3cH0is%2Fuc4cSE9Qzc8CC%2FP729gCk48UjuigjhBXGzXu4HRpzQ7VeqhaW5UwB009U%2BgFjFYYmZT9D&X-Amz-Signature=ce7a6a00878df2123511b66655a8bcd26d3d49a53495de7dd54da08a215607c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APYZQMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvZTfmXOH%2FPJwVF44mvSzzy1bERVy2z0fX8bFWRhvANgIgYhtSGd6oCOUN4ZKmdsnKaXbR19DjoumePcd9PbMEqxEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLVz6rOe0C6gsz9OZircA7faRKSmJI5Dk51GkwFSb3ptDY349qENJQXvTxXGVahIV1cM%2FZRwyX9KVYuNU8y%2F9PFrj7JQpTNkRVfM7nFCDHb9BO69L2dtJkterQzO%2Fp9%2ByBFVYd6%2BjlbOKol8zIBEYXb6IYqTuWuoUW%2BveTY9z2Z9reTjRb%2B4Y6TgLQ9PrX6QFN9AxcD4wEK8i2r%2Btl%2FnZB4JQJKFVtKuLnqmZVvfTuGxNqm17OdyjCrh8Rmsg8oEfUCufdiNWg2Tb1lrWV5vRwjX7Ewi8pbqFiaQsfu7Jz5emS3gensxDYY6qhh%2FW9oY%2BtoceZ%2FfzeZdvOdWZzU85JPpUozDX%2BkAT%2Bt%2BfV1TAB0WqeRsLSAMlV9w3x2tV5dOAuI3QGTaNriAheNx8Cjnpzo06bNDcZV8QBHVwSXv3weMOXZ5X1usm%2BixB8whvor1u%2BZdH7UzJ2mu2nNRC%2B027VHc6x%2FWjZZitqV3IqZjeuuRz%2BpHkXQhI5sW%2FYGTzLQHTfUasJu3TVKPgjrTX5iEMzBofc0z5J9rhTN8LDwY%2F%2BmGNAeMpLfetS55dQrvBNq1rccIvXd7xvUFwUBrQf%2F0UVPkQ8w8KjxKpL4MtviIFEkuA2U%2BU2G2srreiw1PUhtixx52if1uzHCc5GNzMNvU0skGOqUB6bsPJYDbawYzc8hqRT6l%2B245jc5GlMa6mJzZUMuuzn2U1sFnZepXMsjiW%2FesYDEmNDzKKua%2Fl4Ay2akh9CX5DlMz1CW1UGLNz7kCEesvCbV2edqu2FIUzs%2Be15ZTZ6Agwx1hN3XuSaMx56ng3cH0is%2Fuc4cSE9Qzc8CC%2FP729gCk48UjuigjhBXGzXu4HRpzQ7VeqhaW5UwB009U%2BgFjFYYmZT9D&X-Amz-Signature=b54717b6f9c11010ecf4f7d1ba82ff0a8f7e82af1d377a18d92ecf974fca1817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

