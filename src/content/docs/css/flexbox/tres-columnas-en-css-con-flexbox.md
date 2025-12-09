---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZ6U46T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo7j7X9g4ClhLVqw04gEsOilcoitKC8htUPwKS3PWkIAiAuQfSFP6GigfnQQqUILREHRMkobajuJeXSpUEKk%2FyKgyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlq0ZXzJvf6I7dahuKtwDd7VnAZGB3yYRMsd%2BFRz7ZCFPjDrvgtdHHow7asAiKqk1zQSJeyAAen73I1RlZB0tqWCVtfcUegSv9DQl7cn0cRZMjkY2E5%2FBpfDpo86nIp3Y9lJBDpWCRE88hSH8Bu56eSjWYxuGC75FKBizdJ8FBRZnToc0U42JnJaXv9n5uYdH2%2FhyoHohobs8hRoBykdZ7Thd7xE3lTlpk9uf%2FE02MWzfhAnmbKK6LpWhCFi1P%2Fquvz%2FWUIJLbLQC7uxLX85V0YJgOCwXcNQoDLB9W3xUNJi5QHjuiYH%2FLZdtWsKw%2BQ5eZiHpl9K7QoueJqTbp%2BqNq%2F26ncSBYK6Nk0eb15hYhBT8UzpJO6wQn4798yS0uYLbm7wvweeJQh2sbXqvFXhGYBupF0%2BRATvHrT%2FQzj%2BeI%2Bdzsq1DES4Sch13vjgccDdlRBfTS91l9D4K99oykEQ4OmusOnulrlCkV24F%2FIprX6j8w2%2FTOm%2FEfMRvv9txdELqCxnLaGF0uNZ6jGu2Yj7u0ycujDsV91Y%2ByMjCrxkm7g%2B0%2F6Yc9agiV03yzfPSEqvQXRy92SDevyxhq4HykAEZribREY4%2FqX4k8Vvi1%2BxPYCx18tQZje7D%2B7qoi17Th6EE5fwToIekj5c1QoAwv%2BndyQY6pgFUTs7%2FLyByGf7XdRbAmlarh9kRDrtTuo7npMeIW5bXqGXY67LCrgYd7wkK46fGU8MejLfqlsgblLcXB91XYodKbJHL5WFW7tk788qcTwX59LgZC4RQSZe2toJx3%2F18Q69lw7V8xAWLZwru1v7JJnHj4xRbzuR8OgnhyAQFIOA1Z8PtQeLTeAYnkKv3ZsPJnk%2F9QTpV95mIN8gBBJeLQnImOOtQHDMH&X-Amz-Signature=90d6658f184867f45c25e881d14576dc030c3fc0f78496a215786e895abc1eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZ6U46T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo7j7X9g4ClhLVqw04gEsOilcoitKC8htUPwKS3PWkIAiAuQfSFP6GigfnQQqUILREHRMkobajuJeXSpUEKk%2FyKgyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlq0ZXzJvf6I7dahuKtwDd7VnAZGB3yYRMsd%2BFRz7ZCFPjDrvgtdHHow7asAiKqk1zQSJeyAAen73I1RlZB0tqWCVtfcUegSv9DQl7cn0cRZMjkY2E5%2FBpfDpo86nIp3Y9lJBDpWCRE88hSH8Bu56eSjWYxuGC75FKBizdJ8FBRZnToc0U42JnJaXv9n5uYdH2%2FhyoHohobs8hRoBykdZ7Thd7xE3lTlpk9uf%2FE02MWzfhAnmbKK6LpWhCFi1P%2Fquvz%2FWUIJLbLQC7uxLX85V0YJgOCwXcNQoDLB9W3xUNJi5QHjuiYH%2FLZdtWsKw%2BQ5eZiHpl9K7QoueJqTbp%2BqNq%2F26ncSBYK6Nk0eb15hYhBT8UzpJO6wQn4798yS0uYLbm7wvweeJQh2sbXqvFXhGYBupF0%2BRATvHrT%2FQzj%2BeI%2Bdzsq1DES4Sch13vjgccDdlRBfTS91l9D4K99oykEQ4OmusOnulrlCkV24F%2FIprX6j8w2%2FTOm%2FEfMRvv9txdELqCxnLaGF0uNZ6jGu2Yj7u0ycujDsV91Y%2ByMjCrxkm7g%2B0%2F6Yc9agiV03yzfPSEqvQXRy92SDevyxhq4HykAEZribREY4%2FqX4k8Vvi1%2BxPYCx18tQZje7D%2B7qoi17Th6EE5fwToIekj5c1QoAwv%2BndyQY6pgFUTs7%2FLyByGf7XdRbAmlarh9kRDrtTuo7npMeIW5bXqGXY67LCrgYd7wkK46fGU8MejLfqlsgblLcXB91XYodKbJHL5WFW7tk788qcTwX59LgZC4RQSZe2toJx3%2F18Q69lw7V8xAWLZwru1v7JJnHj4xRbzuR8OgnhyAQFIOA1Z8PtQeLTeAYnkKv3ZsPJnk%2F9QTpV95mIN8gBBJeLQnImOOtQHDMH&X-Amz-Signature=2792d6964bb3bcca839c7e29e64857f6918657587e0ba983e4b1c64be81820bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

