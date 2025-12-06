---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDAYV4I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bc7yJfuYKNiIiUgrRQTXvcF%2BvXwOAbIe2xsMIjMc59AIgSiysE5RdOOicV67m8Uf3DqDkhooZ7tddW5I%2FSPJUDToq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBblLIpM%2FaW2F76rLSrcA107bajd%2BlZLDZvMH71glCDD7udS2nBAyfZYEzf%2FUspZKjdtIMzmcZSuv4nLUe6MRcFi0tjJzlEyd8fvhuJ10KTBrYeYF6Zx8Tn4RvHCf93TO6%2FtJebKABlCV5XZo6Y48mF5r%2BgMSdymSixCmeWa2N3BzWgFQV5WwCZnpV5iKMtyOE9I10P2%2Bw96NvGgpCz4C3S%2BMkjGVxzLtva4bQ%2B5Q%2BUEocUZ7uc%2BNO97s7xyLBkh6Ir7SnWCFLFACw%2FYEt2NapbpS%2FggqRFX%2FL%2F%2B%2BGtpWxosNvf4ldlzDQRoI%2BRMLhzsHrzFQ7RbeFTND74TGcTo42dKOhuvfYmTXDwUD6wS7pa4aX3y8LVeoSfqye3llp3%2BNr3EUlES809qJdwOTIFkdG045G%2BkYIa%2BLJuS6E6QddA9G2JYcoO6RHzjtFenjLHRp1liFX8%2BM5HJ7em017j0sN6zgZAEy7gBsDIwsWmqRYc7j140XVnA0uAgP0Rypz2WfhNhiDfi0swmTq98VrwlqIc54rq%2BhU85isFxTBikL6tfplQpFmJxmMYEPrxORbucsXtOc6BlslCJc9NATgd1y7I%2Fi8aNaOxmR4%2FO2J%2By%2B8zYGOtyMq4IKhcHSB0CD3fhB4xtCC7EqrEOdkm8MOnozckGOqUBSqpU0xM2S%2FROIusLYJHiSR1nEEE%2FeeTb89oIXnvMG80MWuC%2B5W3EuOR%2B5BKxynrk8OnGPCf%2BenZDAJzg%2Fz4MsRUn6ewzdNQfYsq%2BgJQFM0UpH05zxNQfQdjpamPP%2F0r7Ya6V%2B%2BlfnN0Oai8xjJTf6WdFuBDtSmQ5yZdQ7Luzgwxu2vTVXYzWdP3gCHnLqLRAv0tkU46V4ZRFLQMkOpk%2FZnvy2O8V&X-Amz-Signature=e906a389c7f6254e2ec2b5a658267a3a1c674e2848c0b9d890429d07ab88e471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDAYV4I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bc7yJfuYKNiIiUgrRQTXvcF%2BvXwOAbIe2xsMIjMc59AIgSiysE5RdOOicV67m8Uf3DqDkhooZ7tddW5I%2FSPJUDToq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBblLIpM%2FaW2F76rLSrcA107bajd%2BlZLDZvMH71glCDD7udS2nBAyfZYEzf%2FUspZKjdtIMzmcZSuv4nLUe6MRcFi0tjJzlEyd8fvhuJ10KTBrYeYF6Zx8Tn4RvHCf93TO6%2FtJebKABlCV5XZo6Y48mF5r%2BgMSdymSixCmeWa2N3BzWgFQV5WwCZnpV5iKMtyOE9I10P2%2Bw96NvGgpCz4C3S%2BMkjGVxzLtva4bQ%2B5Q%2BUEocUZ7uc%2BNO97s7xyLBkh6Ir7SnWCFLFACw%2FYEt2NapbpS%2FggqRFX%2FL%2F%2B%2BGtpWxosNvf4ldlzDQRoI%2BRMLhzsHrzFQ7RbeFTND74TGcTo42dKOhuvfYmTXDwUD6wS7pa4aX3y8LVeoSfqye3llp3%2BNr3EUlES809qJdwOTIFkdG045G%2BkYIa%2BLJuS6E6QddA9G2JYcoO6RHzjtFenjLHRp1liFX8%2BM5HJ7em017j0sN6zgZAEy7gBsDIwsWmqRYc7j140XVnA0uAgP0Rypz2WfhNhiDfi0swmTq98VrwlqIc54rq%2BhU85isFxTBikL6tfplQpFmJxmMYEPrxORbucsXtOc6BlslCJc9NATgd1y7I%2Fi8aNaOxmR4%2FO2J%2By%2B8zYGOtyMq4IKhcHSB0CD3fhB4xtCC7EqrEOdkm8MOnozckGOqUBSqpU0xM2S%2FROIusLYJHiSR1nEEE%2FeeTb89oIXnvMG80MWuC%2B5W3EuOR%2B5BKxynrk8OnGPCf%2BenZDAJzg%2Fz4MsRUn6ewzdNQfYsq%2BgJQFM0UpH05zxNQfQdjpamPP%2F0r7Ya6V%2B%2BlfnN0Oai8xjJTf6WdFuBDtSmQ5yZdQ7Luzgwxu2vTVXYzWdP3gCHnLqLRAv0tkU46V4ZRFLQMkOpk%2FZnvy2O8V&X-Amz-Signature=1fa3823ab2dd5724a2e970ebd2a6f265eaac84f586b012a81a0a218224e34eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

