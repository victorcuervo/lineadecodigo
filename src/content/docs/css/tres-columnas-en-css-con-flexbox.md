---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OO252I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEaaAFoWbIXy%2BcS4OcLJP3Qmc2VUysq26gol8CX%2FGACmAiAlgIRORQWbuJSpmVTNFYrA4iM%2Bygpx7xZM5pB0eycD2yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMoaA%2BGgO%2F6e%2FUgE9VKtwDm6d2fRiZfjkFWTzWA1cVV16MJE3NaQS4y1nL%2F%2F3I%2BB1gOSG4rQoIBJNfIwmUZhqLAX7BDYDQpUzWwNohCpvMUzAtEoF1xjjmKuVOv2Rt6M95dYLZGxCDOsc5EyNKylNzIDBuS9rmXsCLtOQ0FTeyThIfaSRVQsBmbN6UdCT4hwSLq2SuxwmewLoLJlppTxu9nsiZBeUsAgQTU%2F1Pz63Ol4W0agNe0LXEiyqJ1RVJm44IPYGW32q%2BJj4qOpuRgFl0n79LZFhkyI6W5Qh7Y%2B%2FKU%2BcGHj53LCVACwLud0oPFWzQf%2FIKA%2B2U6H1LSyEhUkDHUrXl66jyYIjKWz%2Fo1yFcupt9O%2F7oelli2XPJ3dUqHayoH5dQFLFRoeShRdhD20UanGy0IunLLyNuapYb2ddUzWGRU66x0LyX%2F0m37PhJfi4ku7QbxTxoeUKVko5tBloJVLYpOLZIEiCkKrFh82wbc56zx8CslssvRSz0kxOb%2F%2Bpi8W6r1pUrqB9ouptQFdL9ZaKJDMm0ZYFaug9FLoblvVk2j85DT47po2ghNSvUz3O9H1iKGqrz9D%2BNh8HYyYZ0ZixhRwKlKNYrRRnhYfqzWiAMBVSyw4HJeiOPto9Rl1TVBfQGRFIaiKLwwOEwmdzCyQY6pgEvW%2BvxinbclVVnDaT79YcsDKZJ2usDSOL9m7lkOC1y7JbkdWekNwGgKpTL2kQsuO5FT%2Fkc3m4yUiW02GRicX6D19ETDomjKBpv9LoGBoK9WCcnbTXIIPrjEfy2dW8mqoD5W1SsivjU4wDCWGoF9g0pnXaZKMHm3LkNnX1Gcutu1%2BuXImSFYf2%2Bfi8kxzPNJMDIU35tBGlKLT%2BdjWL8sFu0%2BTF91UxU&X-Amz-Signature=fcbe3a19334b47787a3cb9a490042605f78b4638a89243a999482ac4c1e79975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OO252I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEaaAFoWbIXy%2BcS4OcLJP3Qmc2VUysq26gol8CX%2FGACmAiAlgIRORQWbuJSpmVTNFYrA4iM%2Bygpx7xZM5pB0eycD2yr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMoaA%2BGgO%2F6e%2FUgE9VKtwDm6d2fRiZfjkFWTzWA1cVV16MJE3NaQS4y1nL%2F%2F3I%2BB1gOSG4rQoIBJNfIwmUZhqLAX7BDYDQpUzWwNohCpvMUzAtEoF1xjjmKuVOv2Rt6M95dYLZGxCDOsc5EyNKylNzIDBuS9rmXsCLtOQ0FTeyThIfaSRVQsBmbN6UdCT4hwSLq2SuxwmewLoLJlppTxu9nsiZBeUsAgQTU%2F1Pz63Ol4W0agNe0LXEiyqJ1RVJm44IPYGW32q%2BJj4qOpuRgFl0n79LZFhkyI6W5Qh7Y%2B%2FKU%2BcGHj53LCVACwLud0oPFWzQf%2FIKA%2B2U6H1LSyEhUkDHUrXl66jyYIjKWz%2Fo1yFcupt9O%2F7oelli2XPJ3dUqHayoH5dQFLFRoeShRdhD20UanGy0IunLLyNuapYb2ddUzWGRU66x0LyX%2F0m37PhJfi4ku7QbxTxoeUKVko5tBloJVLYpOLZIEiCkKrFh82wbc56zx8CslssvRSz0kxOb%2F%2Bpi8W6r1pUrqB9ouptQFdL9ZaKJDMm0ZYFaug9FLoblvVk2j85DT47po2ghNSvUz3O9H1iKGqrz9D%2BNh8HYyYZ0ZixhRwKlKNYrRRnhYfqzWiAMBVSyw4HJeiOPto9Rl1TVBfQGRFIaiKLwwOEwmdzCyQY6pgEvW%2BvxinbclVVnDaT79YcsDKZJ2usDSOL9m7lkOC1y7JbkdWekNwGgKpTL2kQsuO5FT%2Fkc3m4yUiW02GRicX6D19ETDomjKBpv9LoGBoK9WCcnbTXIIPrjEfy2dW8mqoD5W1SsivjU4wDCWGoF9g0pnXaZKMHm3LkNnX1Gcutu1%2BuXImSFYf2%2Bfi8kxzPNJMDIU35tBGlKLT%2BdjWL8sFu0%2BTF91UxU&X-Amz-Signature=098335237eac79e1ed46afd7a6cc4ff80b8e695271a62cface29020a5d893050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

