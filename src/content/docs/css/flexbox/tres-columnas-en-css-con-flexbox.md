---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4HAHFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPFOz2UP56bRaqfhYIklddEcvNk21SbUgxKCM6cpnNVAiBbgB1R8i4DRgmxHtCH8oloGJKeQZXheoJHgeiplYh86yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfWERYkjTL2aTTt1KtwDemnj4MHitzszVqdzyN1ZjNd%2BQgJQ6wU7xpv14V%2BPYb1imDErESgQmL0sW7gbpmST9M9chOALzUsqJrtU3ZeerAtlwzIYPlvVSr2Sk7WtpmdK8T%2B2mTFr0kInVsvz1WGX48buA5xHQjtgSeA7dclfXHhIqEq2aV84RvGs7Sz1FVfGWsXCO0b9sTBzJoMtn3L%2Bgoy%2FdZpFb8bFQeYiPXkSXDJfc6EAUedzIRJwWFArV%2B%2BntNyy0%2FxCXOe0O%2FTNCANkeN1yYY%2FeGaW86SzxS6hVvCS59ZUSQ2sX5kMFE3p3KrKBYpoBsZaoJRsegbGS1x5zabWtccc6oMTzQK10nlookIlz7GJIb5bIWb2S%2B6wr0aznb%2Fu2q2NB7XxZ1KmbUu2CPtAUavIpXSOJPC6F9n0Dv7aewUAN%2FC8i%2BlSr8ufbL7kVn2y%2Bjzfz3EkGtjgovFTRbAsGgk2kuYZlvKpJqWn3SqwYMMv5wgvFcSyiBeuCpQla2aMnVnlNpUp7kOKKKgkBu6Dww5QIOKOZp%2BNEMIe5fTuVkCaclo3KU%2BM9JsKWN7QXF2TWWkfeGN8GIw3wKfIBSF%2FfjQA1cFi4P28Ed1aUQqfs9RTiJzSbTXY%2FQZ9VMkGzINKgKcisEJnmFkMwu%2B3ZyQY6pgGuDDKxkO2nOBs0mkpu1oQgLHSUxFIavE76IRwtOBUPUXlPPvVl0BczXsFyxTRwl9Vot%2FnOQoIKeFp3oDuZST535bq8zA6EBMdoofNvu2e0wnanWl1qQwCPZrqDahy6AAFY0a3IqRtea1HUaOY8%2B9Hu1WUJQNCeQ2%2FSDbv3xLuybHt65X5QaYjd3LZQYDqp0deqOVoaLN0yvxBNoOQuCMFtYFziIC89&X-Amz-Signature=a5372124bdd2b57f1869ac835692abb03ff8f1a58c49aeb8bd29f785b1484cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F4HAHFM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPFOz2UP56bRaqfhYIklddEcvNk21SbUgxKCM6cpnNVAiBbgB1R8i4DRgmxHtCH8oloGJKeQZXheoJHgeiplYh86yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjfWERYkjTL2aTTt1KtwDemnj4MHitzszVqdzyN1ZjNd%2BQgJQ6wU7xpv14V%2BPYb1imDErESgQmL0sW7gbpmST9M9chOALzUsqJrtU3ZeerAtlwzIYPlvVSr2Sk7WtpmdK8T%2B2mTFr0kInVsvz1WGX48buA5xHQjtgSeA7dclfXHhIqEq2aV84RvGs7Sz1FVfGWsXCO0b9sTBzJoMtn3L%2Bgoy%2FdZpFb8bFQeYiPXkSXDJfc6EAUedzIRJwWFArV%2B%2BntNyy0%2FxCXOe0O%2FTNCANkeN1yYY%2FeGaW86SzxS6hVvCS59ZUSQ2sX5kMFE3p3KrKBYpoBsZaoJRsegbGS1x5zabWtccc6oMTzQK10nlookIlz7GJIb5bIWb2S%2B6wr0aznb%2Fu2q2NB7XxZ1KmbUu2CPtAUavIpXSOJPC6F9n0Dv7aewUAN%2FC8i%2BlSr8ufbL7kVn2y%2Bjzfz3EkGtjgovFTRbAsGgk2kuYZlvKpJqWn3SqwYMMv5wgvFcSyiBeuCpQla2aMnVnlNpUp7kOKKKgkBu6Dww5QIOKOZp%2BNEMIe5fTuVkCaclo3KU%2BM9JsKWN7QXF2TWWkfeGN8GIw3wKfIBSF%2FfjQA1cFi4P28Ed1aUQqfs9RTiJzSbTXY%2FQZ9VMkGzINKgKcisEJnmFkMwu%2B3ZyQY6pgGuDDKxkO2nOBs0mkpu1oQgLHSUxFIavE76IRwtOBUPUXlPPvVl0BczXsFyxTRwl9Vot%2FnOQoIKeFp3oDuZST535bq8zA6EBMdoofNvu2e0wnanWl1qQwCPZrqDahy6AAFY0a3IqRtea1HUaOY8%2B9Hu1WUJQNCeQ2%2FSDbv3xLuybHt65X5QaYjd3LZQYDqp0deqOVoaLN0yvxBNoOQuCMFtYFziIC89&X-Amz-Signature=590a669f8fc91570176361ebb9bfe72c063c97940b45263152e872d9dcf9e604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

