---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKZEHT6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLX5eH%2BzZ%2B%2FsSAqWslyKM%2BMm6gZY%2Fdo0s6fT2i%2FAk89AiAkplMyTGhRt0pE6n6HNxTXvq%2FrYWnCoa8PzNa9B%2Bp1liqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlXI8pcmGo0pOlLaKtwDJQDMPV%2BbDQfV%2BAZvGh5UsAtvVEILaS%2Fav%2FmjgXO8no9O%2FmgOUUp3%2FvO66GASKlA9LMgUk%2FUij%2FxvsqDy6H89pKGGUPnfXsequm%2BCwDHUAGES7M9HDscttprTHfGBQM0w3%2BHEwsiUW6yBB76ksWlMQgd3qDi76hL6RLi18%2BYX9G47ZYF2pMHabu5t%2BbE73mildxtNg8XiiG2ODaCa5bDtmEr4CuL2o97MTyOCZ6XArGuYi3Aoin%2BgXUr1AenV3do4kkar2p4DxlVB5qEVXu97CFaiNoUCT8tjy9n4wJa3rfbyMLjJPlz%2FFD8Li5qb2BatQZax%2F%2FnJRCC1HZS9hvIuxlqZJbjaKmde6yD6U0pcLJ6m3TOwXvcAdvaBsaIP05S0UsgQHdMELk73r7rUTMwRlJR%2BQpfeXZdc8f5TRiISqL5WTOzhnJZ7gVaI5B9bkfkMP50AIeBq9%2FH2eN609w15zS4JHnvrP5PJUX%2FsWaUURaAZti9Aeh94GwK2zFXDMn6O6bBd%2BWLqfFBLjoE85b1Yo28VVAfYNFIHJkYYmbbgCZNTE1SZO%2FB5qc7iPnh5lyOttPgz2iKesZLAbm3obve5dN0vvmInk36bqQOy2ikqwLS1zDqlWLke91ip3lMwru7ZyQY6pgFEvoHgGe9JzK8rw66NLS4Bm5B2visI0KQZd9IkF26I0e3NC0NuBETz2Sb4jI34t8Wb1xQfX1RDf03W%2BxBR5LCOF93szEkuONiRQ1dc6FJqoYWJ25SRj01HI4Q2PLQaxd2GiZrBCQL0LVnXL3OUEThFGmljsitrPKICA%2BJO3e8%2BcWAhhB4h5BOxBwYXyNejSz7DUdRzRFf1DhC7%2BqrRgkNr%2BsvaXWyj&X-Amz-Signature=0a008dda0f9bc196e5ae04d24d44548f4ce9c3cf4a49d2297a802962618bff53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPKZEHT6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLX5eH%2BzZ%2B%2FsSAqWslyKM%2BMm6gZY%2Fdo0s6fT2i%2FAk89AiAkplMyTGhRt0pE6n6HNxTXvq%2FrYWnCoa8PzNa9B%2Bp1liqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmlXI8pcmGo0pOlLaKtwDJQDMPV%2BbDQfV%2BAZvGh5UsAtvVEILaS%2Fav%2FmjgXO8no9O%2FmgOUUp3%2FvO66GASKlA9LMgUk%2FUij%2FxvsqDy6H89pKGGUPnfXsequm%2BCwDHUAGES7M9HDscttprTHfGBQM0w3%2BHEwsiUW6yBB76ksWlMQgd3qDi76hL6RLi18%2BYX9G47ZYF2pMHabu5t%2BbE73mildxtNg8XiiG2ODaCa5bDtmEr4CuL2o97MTyOCZ6XArGuYi3Aoin%2BgXUr1AenV3do4kkar2p4DxlVB5qEVXu97CFaiNoUCT8tjy9n4wJa3rfbyMLjJPlz%2FFD8Li5qb2BatQZax%2F%2FnJRCC1HZS9hvIuxlqZJbjaKmde6yD6U0pcLJ6m3TOwXvcAdvaBsaIP05S0UsgQHdMELk73r7rUTMwRlJR%2BQpfeXZdc8f5TRiISqL5WTOzhnJZ7gVaI5B9bkfkMP50AIeBq9%2FH2eN609w15zS4JHnvrP5PJUX%2FsWaUURaAZti9Aeh94GwK2zFXDMn6O6bBd%2BWLqfFBLjoE85b1Yo28VVAfYNFIHJkYYmbbgCZNTE1SZO%2FB5qc7iPnh5lyOttPgz2iKesZLAbm3obve5dN0vvmInk36bqQOy2ikqwLS1zDqlWLke91ip3lMwru7ZyQY6pgFEvoHgGe9JzK8rw66NLS4Bm5B2visI0KQZd9IkF26I0e3NC0NuBETz2Sb4jI34t8Wb1xQfX1RDf03W%2BxBR5LCOF93szEkuONiRQ1dc6FJqoYWJ25SRj01HI4Q2PLQaxd2GiZrBCQL0LVnXL3OUEThFGmljsitrPKICA%2BJO3e8%2BcWAhhB4h5BOxBwYXyNejSz7DUdRzRFf1DhC7%2BqrRgkNr%2BsvaXWyj&X-Amz-Signature=7131731563e7d899d26dbf561676826e2a46bc499f3eeb5849ba4310c75cc658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

