---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNT2QWWJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeKqEKvVDt3GQoD3pyjIRX6wrnEkZfnwRoyCoP4FMPzAiAM2ncA%2BZMSHddowEeSpgw3QN1IKbCUVKcLieFSNKUqOSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1DYy%2BYM562LUOawaKtwD54p14pi9Kx6vhhADBjPG%2FOgNpuy5vAwkb2j68yztoxu5SSw6EdyT9bB00mu2co562dZQCBQai68a%2FvfqZXRid7PGIqHXtMHq1l%2BTgFVEpK3fZNy8XBpzDMAGCi53LZYW9%2FPAdW5xlSGCoZTVC2M3KdAvGs8GT%2BKoihxECfrE3%2FxwMnT6KZ0aOCH3bl%2FWOVEQvAzQwmzXDtBH4fOC6D3xBZXZRlW9x6UtIhkve1gh04U4RduGfyaLH7BCMDfXq8u3aY6HRNvkuK7BAFFuXZ4fBTLYXhaxuAIsdOnqzuuxSg6bgc9xZtisDJyFdRwAaP36MXFlF4tc4yEpNC53WIDLjAr%2Bnf27iNf7xBqD0geVPVKLgKsBu6ODCYQL819x8dW8je8igTnm4rgHUkMy2v7RGcLrj1ZRgJMHLLohnd2vSNFuNSVnz%2F9nqMjVUQqQLqG%2FMf8%2FydQYpKtb6h%2BYjohoNaVclE2LtXhPP6l4RR1ymUxZk%2BGUd26qJRHOaLdTzN8dLK3EprRmh0bJisClXz0dbLVEpgEs4cuVTbOCUgQF1C1fRh%2B7efkbz2rzSCbg00%2BZC9S26DQoomBhEpo17H%2FCTb5CVARAQftP7c85VmtWduwB51ZRh9GsW56lrwAw5MTfyQY6pgGXCbTye%2B6PYq92uy2EJv0S8%2F0XCuyYuTkL%2BRCmiViRBEnTc%2FRYiXvFdMuEnHCGwP8HCBs90AAgGWRIxnZcrjnyCCeyKRVuD%2BxmTJH3rSvxVZ9xHicocT53vEI1xav%2B7ejLJJeOE08omVOzJMrN6CFpVbVMy46NQH276QKJePCcL9m4JweQkjuq2aB9312n4%2BIxvRDJgRDw%2F1l7as9J3vf19dvUf%2Bzw&X-Amz-Signature=2a5c390a2f9b19f7b95c3ffa1fff2b334ab98cdbf9ae3ab07ff47c1cc5cfcea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNT2QWWJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeKqEKvVDt3GQoD3pyjIRX6wrnEkZfnwRoyCoP4FMPzAiAM2ncA%2BZMSHddowEeSpgw3QN1IKbCUVKcLieFSNKUqOSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1DYy%2BYM562LUOawaKtwD54p14pi9Kx6vhhADBjPG%2FOgNpuy5vAwkb2j68yztoxu5SSw6EdyT9bB00mu2co562dZQCBQai68a%2FvfqZXRid7PGIqHXtMHq1l%2BTgFVEpK3fZNy8XBpzDMAGCi53LZYW9%2FPAdW5xlSGCoZTVC2M3KdAvGs8GT%2BKoihxECfrE3%2FxwMnT6KZ0aOCH3bl%2FWOVEQvAzQwmzXDtBH4fOC6D3xBZXZRlW9x6UtIhkve1gh04U4RduGfyaLH7BCMDfXq8u3aY6HRNvkuK7BAFFuXZ4fBTLYXhaxuAIsdOnqzuuxSg6bgc9xZtisDJyFdRwAaP36MXFlF4tc4yEpNC53WIDLjAr%2Bnf27iNf7xBqD0geVPVKLgKsBu6ODCYQL819x8dW8je8igTnm4rgHUkMy2v7RGcLrj1ZRgJMHLLohnd2vSNFuNSVnz%2F9nqMjVUQqQLqG%2FMf8%2FydQYpKtb6h%2BYjohoNaVclE2LtXhPP6l4RR1ymUxZk%2BGUd26qJRHOaLdTzN8dLK3EprRmh0bJisClXz0dbLVEpgEs4cuVTbOCUgQF1C1fRh%2B7efkbz2rzSCbg00%2BZC9S26DQoomBhEpo17H%2FCTb5CVARAQftP7c85VmtWduwB51ZRh9GsW56lrwAw5MTfyQY6pgGXCbTye%2B6PYq92uy2EJv0S8%2F0XCuyYuTkL%2BRCmiViRBEnTc%2FRYiXvFdMuEnHCGwP8HCBs90AAgGWRIxnZcrjnyCCeyKRVuD%2BxmTJH3rSvxVZ9xHicocT53vEI1xav%2B7ejLJJeOE08omVOzJMrN6CFpVbVMy46NQH276QKJePCcL9m4JweQkjuq2aB9312n4%2BIxvRDJgRDw%2F1l7as9J3vf19dvUf%2Bzw&X-Amz-Signature=fc6a6739d9b1ea5e84cbc864f206b9c523b2d5f56f8fdacd8c51a2a2b3d8694b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

