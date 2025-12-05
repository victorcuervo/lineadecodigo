---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBQR3ID%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2B%2Fb79yXOVDhBeLE3I4nlvqo9Ta3wegtp6vr3sjF95AiBM8gWZThitg9f6a0TnYp0jX3dqrNdIp1AOjJFqPqTTfir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMcKS2LLn1gDVS%2ByTiKtwDK8cW%2Bf4IULXSZFoUPejsGimfQMY1x92MX0haGwKGWSkkDjUfx5wTyzMdqBm7gv3ydvmUimpEL8np9o5QsoLFROH4%2FsZQlqeMamQFmXSB3qdwJhT8VyVWj5h8ht7iUkWYk7SAl%2BjTphfN8l074io3Ka4oJx15LU2KKTa2QLO9e7I9h0wrzKkkFItMPLIcYdc0K%2Bw5GcziKsLZdXzbK2fF5ZpEB6H9zTx%2FqZgjinZMWe1JeB5%2FKmR%2BqwjLRRyMYCZH8q5uUMU1YpE1S1Yb06u0VUPcs85syRCqoGiD6gUJL3s0edXqnJ1aBvUsMOGw0%2BSBdtwv9umCodBvNx0%2FesNeuKflw1PXMKUFKAAWk4iA4M3m48sLV10fu2zzJcN%2BoiilTBuET33eXX5KMzvZ81FXooAUiZzCQnrA3XygwfLbpMnbOTmawmPp8xpNLXx5hQz7kmI0eQlz2ZRZGZkRxZryPtWs4Ea0gMjTawQZSNYqzU%2Bhd%2BnGpcMRtRr%2BpZUbKHKbKXLcRmBBCg%2BlyIHcIaUc3B1NXbJTR7LYzMtOvstna%2BfFfY%2Bj89ur%2FHPHvnvVeE%2BH0x3BLBzsOIg5BQkRIxOUv%2BSFxkVfqDvZZQRDNVB6CheB8IXHPDoIc%2BYLjSkwyuTLyQY6pgFndMMrkNVG0RTt0izx3rxb7OK64h5ZBEcNoixLFn7iF%2BwZsVJ%2Fa9kvoPhwBYT01vlRqoBcAtFGoutKh3%2BJmOKEzasWNsCDm5nNJauslQJ4%2Fb%2B4PJFIKm35gxT2RLMHskA%2F8zv2PaBEin6W18yP0JFHqDBavMpGRrg%2Ffi3yAAj7Jq7moKBiGbFwt2Id4twU56YiL0TrPLj%2FDbyme61CNDoc01cFtTah&X-Amz-Signature=9724d46c40b6771dd158cdfdbacde93ee689029f1b8d5696023f9bf76a25c17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBQR3ID%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE%2B%2Fb79yXOVDhBeLE3I4nlvqo9Ta3wegtp6vr3sjF95AiBM8gWZThitg9f6a0TnYp0jX3dqrNdIp1AOjJFqPqTTfir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMcKS2LLn1gDVS%2ByTiKtwDK8cW%2Bf4IULXSZFoUPejsGimfQMY1x92MX0haGwKGWSkkDjUfx5wTyzMdqBm7gv3ydvmUimpEL8np9o5QsoLFROH4%2FsZQlqeMamQFmXSB3qdwJhT8VyVWj5h8ht7iUkWYk7SAl%2BjTphfN8l074io3Ka4oJx15LU2KKTa2QLO9e7I9h0wrzKkkFItMPLIcYdc0K%2Bw5GcziKsLZdXzbK2fF5ZpEB6H9zTx%2FqZgjinZMWe1JeB5%2FKmR%2BqwjLRRyMYCZH8q5uUMU1YpE1S1Yb06u0VUPcs85syRCqoGiD6gUJL3s0edXqnJ1aBvUsMOGw0%2BSBdtwv9umCodBvNx0%2FesNeuKflw1PXMKUFKAAWk4iA4M3m48sLV10fu2zzJcN%2BoiilTBuET33eXX5KMzvZ81FXooAUiZzCQnrA3XygwfLbpMnbOTmawmPp8xpNLXx5hQz7kmI0eQlz2ZRZGZkRxZryPtWs4Ea0gMjTawQZSNYqzU%2Bhd%2BnGpcMRtRr%2BpZUbKHKbKXLcRmBBCg%2BlyIHcIaUc3B1NXbJTR7LYzMtOvstna%2BfFfY%2Bj89ur%2FHPHvnvVeE%2BH0x3BLBzsOIg5BQkRIxOUv%2BSFxkVfqDvZZQRDNVB6CheB8IXHPDoIc%2BYLjSkwyuTLyQY6pgFndMMrkNVG0RTt0izx3rxb7OK64h5ZBEcNoixLFn7iF%2BwZsVJ%2Fa9kvoPhwBYT01vlRqoBcAtFGoutKh3%2BJmOKEzasWNsCDm5nNJauslQJ4%2Fb%2B4PJFIKm35gxT2RLMHskA%2F8zv2PaBEin6W18yP0JFHqDBavMpGRrg%2Ffi3yAAj7Jq7moKBiGbFwt2Id4twU56YiL0TrPLj%2FDbyme61CNDoc01cFtTah&X-Amz-Signature=2f8bc09bbbddb45b3f59a4c39a5268c4b4415c34232785e6ef2a7c0da2c4dea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

