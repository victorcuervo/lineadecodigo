---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUQM4V7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLcVEsl4pJ3U6qxM4HFzofI2yxXhQ0uRKswLBeWkVoOAIhAL%2BK8kqFHbBYKZwzvWpCoSC1luu8wvEyp%2FlqStkKi38rKv8DCFsQABoMNjM3NDIzMTgzODA1IgywfVRQSKJl1BKH3%2BAq3ANniQrjS5LS6YQFFWPDhtj6BMUx2nu6lnUH1mI9AoYcqSmSTXoKRFA7MJj9mWlzgoZ7wJxkWD%2Fp4%2BGk2J4fRXSxE0mVO%2BtUuTkUk%2BQugySwcvnWkCyVg8wdWLISoxpo7sboXeEcPWAEwwwnxk5LMEYPN6MTjkeINCK7zjVAkkO9zE3TFWfdz8dkT5vxoXwkOPv%2BVz6ZDz8yoyh9eL0r5DvZRkgdjMp1p7gtQ%2BdwTB6wNeEJSIwMgwEaU7It3XDy3Hq4kmyXLcetENYV1rSAyC8ob5SY33Zk2E1mGUfbm%2B6M6Up8qUCqPN4%2BwWKlaWKAS%2F4NozpmkOxr9t3mntYGxE2nM6Blyb4uvJS7HacLPNtf4wDvyUoc1eUxb8NOG5j%2B1hJnd6RLupm%2BjGYWqxUMFCH8Q59hL%2BOdr3hTiWrE35t%2Fava4nLkCQbyshyOVC4taQ0iK45I05Mr85MTIE5CedLqJU7vbAv9yxKp%2BXUBet86D5LszEjeL7CHl8BdzrzzFmPp4m4FAe07sslbd3T%2FildvKTH1thuP%2FmQCB4kTzla8ZcCyN%2BV5sBP9zT2LEj1yPiUVPCqP1PEX4woX3cXjG8hJ7GeFtHBuFHGOhs4uLv4qbuV9fNfwRjsp77%2FwnLzDo0MrJBjqkAUWevA%2BC3xjSY9Ym7wyS3e6dtvEufjcqUbZEEx4q3ILn2e2IvC72mjyi%2F0S7e3e%2BoBKGTRDRW19qbDcKukZb6iLi7Ak4KIQpK2fGQddZbNvvnDNtZkcsmID8bEy%2B0euaggdYk%2FVVTOkvKBtOs%2BkdmhNL%2F4QzLDs3P1nW5A2Nj2sVAdNkNPSVXQA0YiYgKL1w5teyCBopE4X16D%2BXHX6KE%2F0jhP%2BH&X-Amz-Signature=0e04ebf07db9707414726a47c4985e722b9a8379f4928a5322a2cbb3b11b4094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUQM4V7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLcVEsl4pJ3U6qxM4HFzofI2yxXhQ0uRKswLBeWkVoOAIhAL%2BK8kqFHbBYKZwzvWpCoSC1luu8wvEyp%2FlqStkKi38rKv8DCFsQABoMNjM3NDIzMTgzODA1IgywfVRQSKJl1BKH3%2BAq3ANniQrjS5LS6YQFFWPDhtj6BMUx2nu6lnUH1mI9AoYcqSmSTXoKRFA7MJj9mWlzgoZ7wJxkWD%2Fp4%2BGk2J4fRXSxE0mVO%2BtUuTkUk%2BQugySwcvnWkCyVg8wdWLISoxpo7sboXeEcPWAEwwwnxk5LMEYPN6MTjkeINCK7zjVAkkO9zE3TFWfdz8dkT5vxoXwkOPv%2BVz6ZDz8yoyh9eL0r5DvZRkgdjMp1p7gtQ%2BdwTB6wNeEJSIwMgwEaU7It3XDy3Hq4kmyXLcetENYV1rSAyC8ob5SY33Zk2E1mGUfbm%2B6M6Up8qUCqPN4%2BwWKlaWKAS%2F4NozpmkOxr9t3mntYGxE2nM6Blyb4uvJS7HacLPNtf4wDvyUoc1eUxb8NOG5j%2B1hJnd6RLupm%2BjGYWqxUMFCH8Q59hL%2BOdr3hTiWrE35t%2Fava4nLkCQbyshyOVC4taQ0iK45I05Mr85MTIE5CedLqJU7vbAv9yxKp%2BXUBet86D5LszEjeL7CHl8BdzrzzFmPp4m4FAe07sslbd3T%2FildvKTH1thuP%2FmQCB4kTzla8ZcCyN%2BV5sBP9zT2LEj1yPiUVPCqP1PEX4woX3cXjG8hJ7GeFtHBuFHGOhs4uLv4qbuV9fNfwRjsp77%2FwnLzDo0MrJBjqkAUWevA%2BC3xjSY9Ym7wyS3e6dtvEufjcqUbZEEx4q3ILn2e2IvC72mjyi%2F0S7e3e%2BoBKGTRDRW19qbDcKukZb6iLi7Ak4KIQpK2fGQddZbNvvnDNtZkcsmID8bEy%2B0euaggdYk%2FVVTOkvKBtOs%2BkdmhNL%2F4QzLDs3P1nW5A2Nj2sVAdNkNPSVXQA0YiYgKL1w5teyCBopE4X16D%2BXHX6KE%2F0jhP%2BH&X-Amz-Signature=d39c774226c9fc3cc82eaeda9a355053c1c31003b8cfed0ea07f69c5856c0259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

