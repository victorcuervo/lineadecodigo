---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIWEE3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpkRzXDJ%2BheHvYekQ509IQ6sqghC8%2FxjjqEmkViEb%2FPAiBsyYuLCLsjxoBDY5eCZDUlMO%2Fi%2FogcnfEupEyZHGsaxiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5%2BGBt3BCeMuvd9oKtwD8BvC4pRmM7lkxHIZ%2FBm4ewt6oiOJXvqDVR0l1rbIcpXaUAyzW6q6VWsdLD3gCvm%2BN7jHQxf%2BzetxD7khijkKWzw5HRpnyEIpAyYbYY1fIeQUT4WA3NQPPHbNCudGv0Mo1y6ljetj9CdVzJ0vqyjjYRvjULIfStArrjA7Kl%2FXJR8V7wpOdlBjp65cpAs7%2Fz7fAMSsCdKFCap4nZPapicun8izsmFxe%2FGOTtlq%2BJxOvCYuua6KtLqxHCUsGFwtrKVOKWdoIjdo5YZWcdDP6XDnvlBziQNFrsgtyKit%2FWiK%2BzwKi%2FGEhc%2BwNKlv71OcVszUw9KZbh4EpK8hI5pT%2BR4jaFPlYjj7imMOgkwDGNDT0tyRaJGrhuYPT3%2B%2F0JtYjS3OJyy%2Bp666U3ivU2ltXDL8V3F%2BK3wN%2BnLwmoygxL%2BAukypMzsMR2t2%2FeQG6Ua%2F8rG3p9b%2B3unEy1mIMX95SCMEBs8CrcZACrAVi%2FZeQilVVUYMRc%2Fh9%2FGRQcqhtn0Bi00mKASobl8H3Ddd07qdlEjKdmZKjo%2FKapGS8xzjV9mnRngcT9rTpj0Bl8XuSEfbsuzYfEKF%2FZqMA7i3oJM3dW3fMqmwePGadcxpgT%2BnoSbb99MtGAt3kzyiVL3ROYowqqLYyQY6pgH34tQLQln2o%2BAKdVhV5k9kuEHxbGXhe9G5a5ILnmCdWSN4g8202LBRfxYnTgGZx%2BRudtCWxRhR%2BE4WOURspmAN2hfiNWc%2Fqwf4IH%2FEJdB6pSyBj7wjMUKv1HZnkbP0Dw%2Bc15gIfCRrqQycNaAYYYCX4%2BovHNdulpi58ImzHO0FhEkUQX5LiEDdXK3tk8fkkOEfliagm7kdA0glKwI8os0NpC62YweX&X-Amz-Signature=ee3bbd8aa52c2c937d66037fa25463df0febc836ada56cc77c58cfd2a9a85d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIWEE3H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpkRzXDJ%2BheHvYekQ509IQ6sqghC8%2FxjjqEmkViEb%2FPAiBsyYuLCLsjxoBDY5eCZDUlMO%2Fi%2FogcnfEupEyZHGsaxiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5%2BGBt3BCeMuvd9oKtwD8BvC4pRmM7lkxHIZ%2FBm4ewt6oiOJXvqDVR0l1rbIcpXaUAyzW6q6VWsdLD3gCvm%2BN7jHQxf%2BzetxD7khijkKWzw5HRpnyEIpAyYbYY1fIeQUT4WA3NQPPHbNCudGv0Mo1y6ljetj9CdVzJ0vqyjjYRvjULIfStArrjA7Kl%2FXJR8V7wpOdlBjp65cpAs7%2Fz7fAMSsCdKFCap4nZPapicun8izsmFxe%2FGOTtlq%2BJxOvCYuua6KtLqxHCUsGFwtrKVOKWdoIjdo5YZWcdDP6XDnvlBziQNFrsgtyKit%2FWiK%2BzwKi%2FGEhc%2BwNKlv71OcVszUw9KZbh4EpK8hI5pT%2BR4jaFPlYjj7imMOgkwDGNDT0tyRaJGrhuYPT3%2B%2F0JtYjS3OJyy%2Bp666U3ivU2ltXDL8V3F%2BK3wN%2BnLwmoygxL%2BAukypMzsMR2t2%2FeQG6Ua%2F8rG3p9b%2B3unEy1mIMX95SCMEBs8CrcZACrAVi%2FZeQilVVUYMRc%2Fh9%2FGRQcqhtn0Bi00mKASobl8H3Ddd07qdlEjKdmZKjo%2FKapGS8xzjV9mnRngcT9rTpj0Bl8XuSEfbsuzYfEKF%2FZqMA7i3oJM3dW3fMqmwePGadcxpgT%2BnoSbb99MtGAt3kzyiVL3ROYowqqLYyQY6pgH34tQLQln2o%2BAKdVhV5k9kuEHxbGXhe9G5a5ILnmCdWSN4g8202LBRfxYnTgGZx%2BRudtCWxRhR%2BE4WOURspmAN2hfiNWc%2Fqwf4IH%2FEJdB6pSyBj7wjMUKv1HZnkbP0Dw%2Bc15gIfCRrqQycNaAYYYCX4%2BovHNdulpi58ImzHO0FhEkUQX5LiEDdXK3tk8fkkOEfliagm7kdA0glKwI8os0NpC62YweX&X-Amz-Signature=25c6a21a50f71e8bf6ca94acbfd9bf27cfe75423b2c93098ef289e7a35a46ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

