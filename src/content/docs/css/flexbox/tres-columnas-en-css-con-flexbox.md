---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLE5MCO7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNyG54avyHfyI392AV1rMfKTxSkq3z3xom9ZFUt1FUYAiAwNh%2BBT5k%2BgmpYLTj91BGzDSSyDcGXjaWdglKMQUg5iSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1qZj6AvxcyneB3hKtwDvoLRmc6zz1fPr5q%2BKwcpJIr7Nx24WG59cEKzaucCfiSvBl29So%2BJS1PqdormdK0qZ0BkjNiPTNNc6H4%2Bc5w24I6jnfHEBeFgkM1vFvZmD4A9wwWezDhf4MpJaRrFL7M8%2FwYZoVZDE%2F2Vm8PReFENo2XkjgIUC5OS82xW3uOkDqbHPZ7kdluac0y%2Bafz0hW9KEKvf4MZWv0iObKN%2FyX1wa5ELyncI21HDhAdwNH9DW6ZzCJvL4eA%2BedNWH4BYAHG%2Fo7TV6rMd82EH8gGVq8ajDm585mPAOZiOtRuYk3a2I0xsDnlRrZNNmEIURumVGkgSk6JD6RdFU6ckVBfpHChnaYJMCl2ksVrxjsnRMkyRboumCespHCWRTSQbcIxO0h6XnNXeSPKusib2J4PPeFYYLfgCWvvIvQC%2F7bPl7aR5n0%2BE0hbkZbe8rYLKCE3adJNKi%2F2q3Qo%2BBLJnZbdhyxWOPH0uSQf%2Bwas%2F0E8C84AmAuMoJbKGM6Rt3M371v%2FwkkfXsgJ3NH7gJCX%2Bj2aa%2FdX3Sgaw%2Fy4bwrODUolwP9vkK3iVTOf1GJsy%2FtM1b4Q%2BErviJljVFqW7iiHIho%2FHpsIrDE%2B3bjvvMvFHk%2FBW9bCy0ajqf9Q0p2Jt2LtTBAwwzundyQY6pgEjl2J4jFdW%2BRtqj2jydPHfScZauMlPh9lDQakdDM8Axi0UU5JZkg8km1Df1nrAz2Fc24hd0fJCLuslpxinJMJMrf9dmu0Ao3PJn3ykhQfDDOsgukQxXLvMUY8WiU%2FDj1lIXKCEkHtrCygkBncQHmOqhU0Kvd%2BHSMjJ2U%2FSxA4F%2BSvhnJNdcWNMkNrJVWCFveKMEVJsGt8BTyd3fqPoM3LIBnKUmc6M&X-Amz-Signature=a30f8829d513fbad27147c1125ca8ef08149f4ab3bcf78127c1433ec93032c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLE5MCO7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNyG54avyHfyI392AV1rMfKTxSkq3z3xom9ZFUt1FUYAiAwNh%2BBT5k%2BgmpYLTj91BGzDSSyDcGXjaWdglKMQUg5iSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb1qZj6AvxcyneB3hKtwDvoLRmc6zz1fPr5q%2BKwcpJIr7Nx24WG59cEKzaucCfiSvBl29So%2BJS1PqdormdK0qZ0BkjNiPTNNc6H4%2Bc5w24I6jnfHEBeFgkM1vFvZmD4A9wwWezDhf4MpJaRrFL7M8%2FwYZoVZDE%2F2Vm8PReFENo2XkjgIUC5OS82xW3uOkDqbHPZ7kdluac0y%2Bafz0hW9KEKvf4MZWv0iObKN%2FyX1wa5ELyncI21HDhAdwNH9DW6ZzCJvL4eA%2BedNWH4BYAHG%2Fo7TV6rMd82EH8gGVq8ajDm585mPAOZiOtRuYk3a2I0xsDnlRrZNNmEIURumVGkgSk6JD6RdFU6ckVBfpHChnaYJMCl2ksVrxjsnRMkyRboumCespHCWRTSQbcIxO0h6XnNXeSPKusib2J4PPeFYYLfgCWvvIvQC%2F7bPl7aR5n0%2BE0hbkZbe8rYLKCE3adJNKi%2F2q3Qo%2BBLJnZbdhyxWOPH0uSQf%2Bwas%2F0E8C84AmAuMoJbKGM6Rt3M371v%2FwkkfXsgJ3NH7gJCX%2Bj2aa%2FdX3Sgaw%2Fy4bwrODUolwP9vkK3iVTOf1GJsy%2FtM1b4Q%2BErviJljVFqW7iiHIho%2FHpsIrDE%2B3bjvvMvFHk%2FBW9bCy0ajqf9Q0p2Jt2LtTBAwwzundyQY6pgEjl2J4jFdW%2BRtqj2jydPHfScZauMlPh9lDQakdDM8Axi0UU5JZkg8km1Df1nrAz2Fc24hd0fJCLuslpxinJMJMrf9dmu0Ao3PJn3ykhQfDDOsgukQxXLvMUY8WiU%2FDj1lIXKCEkHtrCygkBncQHmOqhU0Kvd%2BHSMjJ2U%2FSxA4F%2BSvhnJNdcWNMkNrJVWCFveKMEVJsGt8BTyd3fqPoM3LIBnKUmc6M&X-Amz-Signature=3f0453270d1f02a377a1b901e835fec216698bf36e4e2be3b48116aab2c88456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

