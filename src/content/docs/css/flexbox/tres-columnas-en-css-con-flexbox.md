---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4KJU4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIALtMC7Lx5eBcHtnOVkBSTV5nomBQ3eLH56Wu4GzXih%2BAiEAtw%2F1pbu6c0nqKweIvgKDsNs2JjdBtv4rHSEICMMgF3Iq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDK18ha3NBOYUgGJMyircA89YGka%2FEawZ4FoIYmjvzhMLrj5dOJSi8VNAJxBN8ETsGybGQQSSfnYaRO5XTYsbrdwA%2BO2imxJ80Pyt7GQ4o4xExrAK2qRm1%2B8BYLMWTxeYfhLRI3M%2F90Vgpym6iJJOjIiwrByrUQe1RuAcKu4%2F45NZe%2BHgBlI0IEI92ry6MtSnoxTQhsUU1YPoVsiT0akNLIAQ2KFgUOqGpG0t%2B2mOkTG541QJfSvU3lWrENpawWsxRkFhGofmsmFIbmAzvWuTJOL8400F46vVelyBdY1hYrbvY0ygN6yN5b2finO%2FejbdMEF6bqjryjR7Pq4UGnCVBmFFeO59S%2Ftg2NwYMY%2F3fLHyB2Na2KFBInZ9ATGdoUVOXoaRxMWGI8NFQ7OEYGZs5OHwPis3SrcG1XYcyhPZq8L90UkKhQ9xEWI4Uu7m3rPoBJ7H1etHvK5eukzUJoEFli1wcfNglNSyXXDmZkG4Ee6XAhVjRCkJq0oyf8TPUuemW4KoNyjWyjgm2KbueSItJPLxB6x6BxprBSJkULj%2FNMf8V36axatc7784TKz%2FI4pX7h9yUW63%2BOj44VzXPiALswz8xgmLbfPFDtEWL6m1MdcvO05mkNQctTx6OpmKmD%2F%2BYkCsZ2eHJXehw68LMK7mxckGOqUB3KgPHbyz8tqz6UYC%2FiNky%2B%2B6wiojO8c5w6sI8GufvzFNZTe6VRaMBkQslHIwVENxgXRV3CeVMPFuKX1IhNLt766QfHBn46yXHsZLwrBl4z4gVEKTveDvEPzd5SIhghFTR6U9NbR9DS0pWxsgPclh2Q6iBYbKpD3F2a%2BVckeBeHCzQG2MtUw2AX7FWu%2F6h0j07BzlJiQFaJFsdKINwujaTNM4%2BHZK&X-Amz-Signature=72cf97667a2f0aa92a4b5527feb03c5f4fc2ba693a078b65eb92636c5f437614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4KJU4O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIALtMC7Lx5eBcHtnOVkBSTV5nomBQ3eLH56Wu4GzXih%2BAiEAtw%2F1pbu6c0nqKweIvgKDsNs2JjdBtv4rHSEICMMgF3Iq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDK18ha3NBOYUgGJMyircA89YGka%2FEawZ4FoIYmjvzhMLrj5dOJSi8VNAJxBN8ETsGybGQQSSfnYaRO5XTYsbrdwA%2BO2imxJ80Pyt7GQ4o4xExrAK2qRm1%2B8BYLMWTxeYfhLRI3M%2F90Vgpym6iJJOjIiwrByrUQe1RuAcKu4%2F45NZe%2BHgBlI0IEI92ry6MtSnoxTQhsUU1YPoVsiT0akNLIAQ2KFgUOqGpG0t%2B2mOkTG541QJfSvU3lWrENpawWsxRkFhGofmsmFIbmAzvWuTJOL8400F46vVelyBdY1hYrbvY0ygN6yN5b2finO%2FejbdMEF6bqjryjR7Pq4UGnCVBmFFeO59S%2Ftg2NwYMY%2F3fLHyB2Na2KFBInZ9ATGdoUVOXoaRxMWGI8NFQ7OEYGZs5OHwPis3SrcG1XYcyhPZq8L90UkKhQ9xEWI4Uu7m3rPoBJ7H1etHvK5eukzUJoEFli1wcfNglNSyXXDmZkG4Ee6XAhVjRCkJq0oyf8TPUuemW4KoNyjWyjgm2KbueSItJPLxB6x6BxprBSJkULj%2FNMf8V36axatc7784TKz%2FI4pX7h9yUW63%2BOj44VzXPiALswz8xgmLbfPFDtEWL6m1MdcvO05mkNQctTx6OpmKmD%2F%2BYkCsZ2eHJXehw68LMK7mxckGOqUB3KgPHbyz8tqz6UYC%2FiNky%2B%2B6wiojO8c5w6sI8GufvzFNZTe6VRaMBkQslHIwVENxgXRV3CeVMPFuKX1IhNLt766QfHBn46yXHsZLwrBl4z4gVEKTveDvEPzd5SIhghFTR6U9NbR9DS0pWxsgPclh2Q6iBYbKpD3F2a%2BVckeBeHCzQG2MtUw2AX7FWu%2F6h0j07BzlJiQFaJFsdKINwujaTNM4%2BHZK&X-Amz-Signature=d50ccca6f35a57a1ad28d8dc021aeb5427c36d3ec4776eea439372c9ae817aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

