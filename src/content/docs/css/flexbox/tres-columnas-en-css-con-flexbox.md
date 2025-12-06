---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDQ5EPE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmwoQN3R61eMEywuaRQV%2BM92vA3NC1cwgPHTG2uJ2GbwIhAOhuiVxpwXbWajc9uZ1eIaJfVfqqtZTQbU9ARFAAtbfbKv8DCG0QABoMNjM3NDIzMTgzODA1Igy4Lo96egnyd%2Bl%2B%2Fukq3AOFi5ZRxLlaIgML4KgGL3s9ReuhxhM%2F2Gog2RwZM6putte6%2BEJf9R3%2BV3UgZ4Vxd33lSOv%2F6YoMCODyLndWJB6saY1yYi53ccYLa%2FD4b0FJf2lZ0E0nIKTgCOHxrbomU8QI3Lg23vYs2sMu07yrkPh3Z8QGG1keITOfgopXsic%2F38rvXJ7zUBiGTauPgPQWHksrP2n1Hs%2BtGwhwQ0EvfH2%2BJIAahmAhy08Xw6dmnv4blJrumtnScw2qfykGxDIHXk1p0UU9YA4dQ2qbDJtgIzXDJG%2BBgSXToF3RAVpj6NylbCBf8dnL5QE656ZulDef7qIXw21HxYiBT11VJSxTCaJ88WeaWDNcG6Me8DMz8ns0S%2BW6f2geeoSWYggieJ1Kr5LIgmC9cKTydsCfbkAxX2RHz%2Faj8XhW2r8WXLplGBL5Q8D4FrpVVDsrZKO6Lce4pnui6lR6XO7dBUbHk5LqUHjOi9jHhCy28DkwISUzTb4xCJU7GLc%2Fx%2Fa3JBJ6IUaTwgIT4Uoboc6sCZOtABc1mwyumtZMRnASMIw87wtsR5yKdCvSyoA%2B2PgKR%2Bz8O6yCMlw4Sk%2Fx%2FoDvdZ%2FHILlVngoFD2plT6f9vJMP6oVqQJBu%2F9CzFtgz9jbYbbgx2DDcw87JBjqkAQTqA3cbxcfhqN0oRGO%2FF2dZLTBqiuvt0NYEuXsRG1Lco9sfi95DuMSUXC33LXTYM15hQeRddAEmWe247goAHtbqQ5307ng2At56p7NjnUh%2FTvHAEdUenLI3MKoAx7oTR%2BnL5q%2FBGZDouYXg3tLBdj43DBEXDneNj8sQ3I9lt%2FB9rwiJGlxGIqrdPwAcNamD0aMF8lEEbGbKPVJNIITHsHP2qz9h&X-Amz-Signature=d0100ff8a068f7648fb6ce56cdc0867b6c7c8890a99098c919435231e398f060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDQ5EPE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmwoQN3R61eMEywuaRQV%2BM92vA3NC1cwgPHTG2uJ2GbwIhAOhuiVxpwXbWajc9uZ1eIaJfVfqqtZTQbU9ARFAAtbfbKv8DCG0QABoMNjM3NDIzMTgzODA1Igy4Lo96egnyd%2Bl%2B%2Fukq3AOFi5ZRxLlaIgML4KgGL3s9ReuhxhM%2F2Gog2RwZM6putte6%2BEJf9R3%2BV3UgZ4Vxd33lSOv%2F6YoMCODyLndWJB6saY1yYi53ccYLa%2FD4b0FJf2lZ0E0nIKTgCOHxrbomU8QI3Lg23vYs2sMu07yrkPh3Z8QGG1keITOfgopXsic%2F38rvXJ7zUBiGTauPgPQWHksrP2n1Hs%2BtGwhwQ0EvfH2%2BJIAahmAhy08Xw6dmnv4blJrumtnScw2qfykGxDIHXk1p0UU9YA4dQ2qbDJtgIzXDJG%2BBgSXToF3RAVpj6NylbCBf8dnL5QE656ZulDef7qIXw21HxYiBT11VJSxTCaJ88WeaWDNcG6Me8DMz8ns0S%2BW6f2geeoSWYggieJ1Kr5LIgmC9cKTydsCfbkAxX2RHz%2Faj8XhW2r8WXLplGBL5Q8D4FrpVVDsrZKO6Lce4pnui6lR6XO7dBUbHk5LqUHjOi9jHhCy28DkwISUzTb4xCJU7GLc%2Fx%2Fa3JBJ6IUaTwgIT4Uoboc6sCZOtABc1mwyumtZMRnASMIw87wtsR5yKdCvSyoA%2B2PgKR%2Bz8O6yCMlw4Sk%2Fx%2FoDvdZ%2FHILlVngoFD2plT6f9vJMP6oVqQJBu%2F9CzFtgz9jbYbbgx2DDcw87JBjqkAQTqA3cbxcfhqN0oRGO%2FF2dZLTBqiuvt0NYEuXsRG1Lco9sfi95DuMSUXC33LXTYM15hQeRddAEmWe247goAHtbqQ5307ng2At56p7NjnUh%2FTvHAEdUenLI3MKoAx7oTR%2BnL5q%2FBGZDouYXg3tLBdj43DBEXDneNj8sQ3I9lt%2FB9rwiJGlxGIqrdPwAcNamD0aMF8lEEbGbKPVJNIITHsHP2qz9h&X-Amz-Signature=4eb42700f2dcd722e4318fa0729f42bfcb5a9a32e74bc951ac4cad30f987ec6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

