---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKZAKGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Cw96QE6kFD0n451LoULrxUtyT2QITSSro4MgJjUE1QIhAPfKzBUz%2B3p0xbku0WvIT9DfpRONWrg%2FynTYFuwRCpDUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmtHhM9eO7uAkQzUgq3AP3TiPD4XGHQ6pBaDDJ66qdpA1Xy0dzKSjOyqizIpGFZ2fZ5oSeCQMI24iK9HfyV0ivjGbWDkb7xynHWtncY9f1OsGiSl8SEnfY%2B5JS%2F%2BsipBKd%2BVgyk1Si9zpqsqA695cT2qI662FmdKA5%2Fe2huqnEiFzSu7TBx1bGKm2mIGuIOx9Rty6oOUqo9AT3lfVt%2BnDQzOFDKtT%2BRMWDL%2F1DOJ2gz2L9QhSwOX%2F3KnIEBkxhY8aCczsDFontiO491fwSsSqOgabsyGAEdQRl2JQKUZARxz%2FRSHM2NsRmMqCffZnqJTNLpv5%2BhRAcf6MRJpkfzXe57QZ%2BXWBFwBpo8NwsEoH6CjhLzE8A6jp2%2FfmhMCcR4IZZcZMmP5LAXIpo%2FWlb%2FaMXCV83SPcUEsLjb61L8fk7ALs2tmXRAeOlJwbRC9yEfDvh8TdqeENLZU5hVGqexV1FBzFQEQmAN8dqiCMyAuYVnz7BTxJmcW8pTn7lc1TvTK9DNwvvLzzfq8RxpZPBrRUyxYmOX%2FLDGLmHJXfXnsHt3swMzXLL27%2BLzJdD%2BfAK9K2%2Fk%2FLXbO31X5py0c24qCNvZVblglp%2BF3Daz3JJjciFyqkhC4m%2B6c2qeSO%2FwFYfFu%2Fecq0UH9s02n%2BD%2BDCC7tnJBjqkATrdv%2BzZa4ClFGJrgE7jY1KlL60MB377VYAgJhfKhlLazaCnGvkVEegp4udn%2BWZ%2B%2B4mJHNX0IL0vdRHyOT6Gnp9FiHs%2Fln5JRs635nzeiumB3cEdV0yBu3xhpfbsR0XefsG72qWW4jb9t77fp3u3KWuhE1C7t5OdamOeBLpYvRO%2FRCBznucSZtyr28iYcgRBLW3dBzd2CFOs7fyHjmK3EslTzt1i&X-Amz-Signature=23179009c49a2fcf10d794d6a03a21d240242deeb0130988795eadef80b451a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKZAKGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Cw96QE6kFD0n451LoULrxUtyT2QITSSro4MgJjUE1QIhAPfKzBUz%2B3p0xbku0WvIT9DfpRONWrg%2FynTYFuwRCpDUKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmtHhM9eO7uAkQzUgq3AP3TiPD4XGHQ6pBaDDJ66qdpA1Xy0dzKSjOyqizIpGFZ2fZ5oSeCQMI24iK9HfyV0ivjGbWDkb7xynHWtncY9f1OsGiSl8SEnfY%2B5JS%2F%2BsipBKd%2BVgyk1Si9zpqsqA695cT2qI662FmdKA5%2Fe2huqnEiFzSu7TBx1bGKm2mIGuIOx9Rty6oOUqo9AT3lfVt%2BnDQzOFDKtT%2BRMWDL%2F1DOJ2gz2L9QhSwOX%2F3KnIEBkxhY8aCczsDFontiO491fwSsSqOgabsyGAEdQRl2JQKUZARxz%2FRSHM2NsRmMqCffZnqJTNLpv5%2BhRAcf6MRJpkfzXe57QZ%2BXWBFwBpo8NwsEoH6CjhLzE8A6jp2%2FfmhMCcR4IZZcZMmP5LAXIpo%2FWlb%2FaMXCV83SPcUEsLjb61L8fk7ALs2tmXRAeOlJwbRC9yEfDvh8TdqeENLZU5hVGqexV1FBzFQEQmAN8dqiCMyAuYVnz7BTxJmcW8pTn7lc1TvTK9DNwvvLzzfq8RxpZPBrRUyxYmOX%2FLDGLmHJXfXnsHt3swMzXLL27%2BLzJdD%2BfAK9K2%2Fk%2FLXbO31X5py0c24qCNvZVblglp%2BF3Daz3JJjciFyqkhC4m%2B6c2qeSO%2FwFYfFu%2Fecq0UH9s02n%2BD%2BDCC7tnJBjqkATrdv%2BzZa4ClFGJrgE7jY1KlL60MB377VYAgJhfKhlLazaCnGvkVEegp4udn%2BWZ%2B%2B4mJHNX0IL0vdRHyOT6Gnp9FiHs%2Fln5JRs635nzeiumB3cEdV0yBu3xhpfbsR0XefsG72qWW4jb9t77fp3u3KWuhE1C7t5OdamOeBLpYvRO%2FRCBznucSZtyr28iYcgRBLW3dBzd2CFOs7fyHjmK3EslTzt1i&X-Amz-Signature=5857d95462661f0ef5fd90694fb166dae8554f65b13ede2a0272de8f032da76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

