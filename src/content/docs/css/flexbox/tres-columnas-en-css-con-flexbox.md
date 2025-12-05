---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLTWOAF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4sd0qdfIuUCDJsEqPgAhk4KvveY7%2FjQIJgWhrIRIpnQIgHn6fdW1cwg1Sq9%2F5txqGGVz58BBE%2Ft7%2FaYXiegMX1sUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN%2FZqGcysZcUSEIwnyrcA3V9%2FDrtkXS3jUTYUzU2%2BxvuUGYq7MDz0wk6d7xcudT84stF6Beh6vKWYpaAG4O4rsjQC0idonnebryEIQOOomkLQjWJlTYGmdHpeRhQwHmweXvZin%2BDS7mKS1xwOp80iFVW8l9MmrjM0I7Y4f4pSwxqpMIL3NJAtvgTazEp7XSlRQL%2FOJDu5UJ0Ur9nfDsfQvpaJmiK815zDF2lPQhm4C0rB4qY11TtFD5PmZx5AStjBIX3BTte4APacWxXXn3EqTrchmIJxEe3O0N5QmVf3HyMkBnnCbANezWBplnKczlf3Vi03%2BnUM49xUaJA6q6SYxGGtXzVNCSsyQGRXw8%2BjlzyJHncLzBwEkDZwlNoCqHVywhz9OaIGT535wsQ%2BtVVpmmrZ3MFihxDomxz6PkENw1NcNOFX68JEftYrrPVvnvBrX44ob494oLBG%2B0VW1FJadAt1GpD5BbkRE%2BwvHAryy2907nlSPouNnp3HoqyanMnWneSRS%2FW0bpj185%2BO%2BFGjBBm6rtAstIBczPLseoAQ0vlvGvGxPO5teGeDFc%2BI5%2Fx0gygleVmNelobKR2yAG4Z0qwkS6F2OpZC1M9fkUJg7NQDwChmsmpeV%2F3AG%2F1xmfZ%2B8%2BdO%2BvecVpfxU9VMM%2BuyckGOqUBEOEo9%2BQ7dc0zepKn6VnonByK3XG4BkrGGQpxZazYpN02dfPfUIejbj%2FhpIJ80LLoS1xStCPJRUNZJ%2F4B4m%2FvBXbFK72v2h4JwQiKfczgPlB0LCRlfYM%2B1xqf3O24H%2BO2PlGEpTjtybKlFc0N7JZwCzUFJv20QFj4jQjKF8VaNuIhJBJPSOKfCtieo%2BkdTeOBT1H84oHMlhyYAG6S7P1uhCmVeNc8&X-Amz-Signature=49484bbcddd96dee61a653bebe03a1eb9f4269c0753cae9b402c65e3ed461b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WLTWOAF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4sd0qdfIuUCDJsEqPgAhk4KvveY7%2FjQIJgWhrIRIpnQIgHn6fdW1cwg1Sq9%2F5txqGGVz58BBE%2Ft7%2FaYXiegMX1sUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDN%2FZqGcysZcUSEIwnyrcA3V9%2FDrtkXS3jUTYUzU2%2BxvuUGYq7MDz0wk6d7xcudT84stF6Beh6vKWYpaAG4O4rsjQC0idonnebryEIQOOomkLQjWJlTYGmdHpeRhQwHmweXvZin%2BDS7mKS1xwOp80iFVW8l9MmrjM0I7Y4f4pSwxqpMIL3NJAtvgTazEp7XSlRQL%2FOJDu5UJ0Ur9nfDsfQvpaJmiK815zDF2lPQhm4C0rB4qY11TtFD5PmZx5AStjBIX3BTte4APacWxXXn3EqTrchmIJxEe3O0N5QmVf3HyMkBnnCbANezWBplnKczlf3Vi03%2BnUM49xUaJA6q6SYxGGtXzVNCSsyQGRXw8%2BjlzyJHncLzBwEkDZwlNoCqHVywhz9OaIGT535wsQ%2BtVVpmmrZ3MFihxDomxz6PkENw1NcNOFX68JEftYrrPVvnvBrX44ob494oLBG%2B0VW1FJadAt1GpD5BbkRE%2BwvHAryy2907nlSPouNnp3HoqyanMnWneSRS%2FW0bpj185%2BO%2BFGjBBm6rtAstIBczPLseoAQ0vlvGvGxPO5teGeDFc%2BI5%2Fx0gygleVmNelobKR2yAG4Z0qwkS6F2OpZC1M9fkUJg7NQDwChmsmpeV%2F3AG%2F1xmfZ%2B8%2BdO%2BvecVpfxU9VMM%2BuyckGOqUBEOEo9%2BQ7dc0zepKn6VnonByK3XG4BkrGGQpxZazYpN02dfPfUIejbj%2FhpIJ80LLoS1xStCPJRUNZJ%2F4B4m%2FvBXbFK72v2h4JwQiKfczgPlB0LCRlfYM%2B1xqf3O24H%2BO2PlGEpTjtybKlFc0N7JZwCzUFJv20QFj4jQjKF8VaNuIhJBJPSOKfCtieo%2BkdTeOBT1H84oHMlhyYAG6S7P1uhCmVeNc8&X-Amz-Signature=586aa2d629522ec5b75d55e489e6cc4eda92069308d56fdfc5e77a88f4050004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

