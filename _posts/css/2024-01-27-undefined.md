---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCV7GMRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDokJvaC8Gy4IaYmCaWYnIT0wQmHM348RZ5dakVheADbAIhALYcSBxVPk2G%2FIjTtUmF68haAWTwVcReoVVWuzj%2FkISeKv8DCCcQABoMNjM3NDIzMTgzODA1IgyP%2B%2FZ9GVpNalc9aEgq3APbWvZeve1KtubiIOgc56AeGjPlBgXt2ITrEa92kUfHpJxjubzLvkAmE8Q0oJAiQPZIJTeOFya3zlbFhZpX7w%2Fuj%2FXqbWIuL6%2FQISKyA%2F4q5oTNJ2oymJO4b61z7y31O9eFb5pPIlMfEA8Bbe7BcF%2FUGB91BKjEPxA%2BSGHKTJPfw8mZio6yiXjsDaGIbno6GHW4yu4dDPmHBVriOOk2PqXHXal%2F2eDcbjMcq23bbK00nQs1whAbOQRpcqD6OxP9qFyklvPT1IN9z%2FTrUCb83yIqpDLh5DcGuWehg8Rdat7yhRQxHJAyK2mcjj37Ie4Dm52IM0ShcqWDsDRGE8Ts3O2%2Bo58an4Mo5Vql9O3NC6XGgJ9J9xUMHe91fyNZxDot7BifoQFV3KstITJ4Acj%2F9XgRuqef03oc8zLsn%2FCPpTBHf1Cj01JOLV7oOEpz7if7l%2Bi2sWbpfjxY47TznzMBBiVuo52802c4dZ3r77Izuf02lcvT4PI%2B0YQehlNV4FmuAn%2BClKft2OFWQ4VVU%2FcXXiWDi2qFnCZ6Q3dz%2FeWzdEj%2BZr%2FSQoXlglY86BR0W%2FlYqYbF1lu5eF%2FjEKalnhV8VR7xgy7NdUN2zfehXKjObA6A3GLRRpo6Z2%2FOaQj2XjDnmr%2FJBjqkAcVUTD1awwHYmciatfbaa6AqHl3y77bM7ztbzJaHhp4k1IdDJzQeKBgzvl0Cf9yAVLbM5Vu8wX2YUgcuQ70S%2FG5vmaVgMmFG7KjsPHpYaG0QtnaIOnC5Z7CA8Jm5zb8Zzjw%2BCEhS0Hw6o0XbOhq1Wh3BvAx026R%2BcyKuoXp9Wanxzq%2Fu8I1HlLDO9m5H6YJqI9YhrNW7Ctr%2B7%2Fyj34nq2npcIU4Q&X-Amz-Signature=007868443dc2b6e3054186a29aa3dfef4893eef2ce3e8969b690f30da900c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCV7GMRD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDokJvaC8Gy4IaYmCaWYnIT0wQmHM348RZ5dakVheADbAIhALYcSBxVPk2G%2FIjTtUmF68haAWTwVcReoVVWuzj%2FkISeKv8DCCcQABoMNjM3NDIzMTgzODA1IgyP%2B%2FZ9GVpNalc9aEgq3APbWvZeve1KtubiIOgc56AeGjPlBgXt2ITrEa92kUfHpJxjubzLvkAmE8Q0oJAiQPZIJTeOFya3zlbFhZpX7w%2Fuj%2FXqbWIuL6%2FQISKyA%2F4q5oTNJ2oymJO4b61z7y31O9eFb5pPIlMfEA8Bbe7BcF%2FUGB91BKjEPxA%2BSGHKTJPfw8mZio6yiXjsDaGIbno6GHW4yu4dDPmHBVriOOk2PqXHXal%2F2eDcbjMcq23bbK00nQs1whAbOQRpcqD6OxP9qFyklvPT1IN9z%2FTrUCb83yIqpDLh5DcGuWehg8Rdat7yhRQxHJAyK2mcjj37Ie4Dm52IM0ShcqWDsDRGE8Ts3O2%2Bo58an4Mo5Vql9O3NC6XGgJ9J9xUMHe91fyNZxDot7BifoQFV3KstITJ4Acj%2F9XgRuqef03oc8zLsn%2FCPpTBHf1Cj01JOLV7oOEpz7if7l%2Bi2sWbpfjxY47TznzMBBiVuo52802c4dZ3r77Izuf02lcvT4PI%2B0YQehlNV4FmuAn%2BClKft2OFWQ4VVU%2FcXXiWDi2qFnCZ6Q3dz%2FeWzdEj%2BZr%2FSQoXlglY86BR0W%2FlYqYbF1lu5eF%2FjEKalnhV8VR7xgy7NdUN2zfehXKjObA6A3GLRRpo6Z2%2FOaQj2XjDnmr%2FJBjqkAcVUTD1awwHYmciatfbaa6AqHl3y77bM7ztbzJaHhp4k1IdDJzQeKBgzvl0Cf9yAVLbM5Vu8wX2YUgcuQ70S%2FG5vmaVgMmFG7KjsPHpYaG0QtnaIOnC5Z7CA8Jm5zb8Zzjw%2BCEhS0Hw6o0XbOhq1Wh3BvAx026R%2BcyKuoXp9Wanxzq%2Fu8I1HlLDO9m5H6YJqI9YhrNW7Ctr%2B7%2Fyj34nq2npcIU4Q&X-Amz-Signature=996f8f4e286dd29605ce4b408c90a6e0d77d454b2b417cdbb2137a2975de2757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

