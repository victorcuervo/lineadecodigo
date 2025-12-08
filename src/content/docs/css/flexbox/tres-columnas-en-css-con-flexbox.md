---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYF2MOM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWz1xYEGkDf3CZbdGBeFgD2bNbuy6Ig9yekKKadTKuEQIgOiLsLktrjd45xAJ3K2FZ2HEHzx20OirjG2mGKcxiuMIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX8B4h0EHM%2FEj6F8ircAybIl%2BgX2r2uGZu1MJbQMT3pPDvI3njrT0lGmNgX4pfU75TyNXaJ3ljfAvllQMSD5ZEtvLUhTrrt7T1wFgQKfgSl0CAPTX75t%2FL%2BrcDMLMvky2xl3ykfrnBInY3fXcVovsoFxeDqY6LB%2B6qf%2BMdLZ4chgflfUR0bkZ0vkbDwbZSlfebBmt69vXDlwc1qOxne9cA5ZGc1MALQbQ9EkGRX9CZajA2aZ1YZDMkqvbeboTjnPxKIeYDxmyjyh0UTvoF084%2FuSkFU2oya17IXCIK9ZcsWwhDQhJI3jsZstCmjpu%2FoFjKTCJpZn6R3%2BkVAx92T2hkQzP6w1Nzmgz1sdOAy64uxK6TrrkhyvBHRbvbyy068FcFxxmNjUxZkRHoUsmrr%2B3FxFi720SMRPnAUnktOHLx3LvDkkmipZlt6e800AjPNbLJp1ylmbfOJESCxPlRPrcNDnnjUhEMZ0kvB14D20dlLSFSWyJsiIdukBQyqNSSMqo4fR%2Bzojbnf02Jt%2BGI5iP1%2B45Ac3x3icmV%2B95T8JznC%2FqkIZl2MhFtKVU%2FkVMFOgMHBPjXu9LsUJ1CIGOqgm7PBV9LLPMWecRATsIDXutwJ1nZljx7wkiHXFS3GNRJ%2FItgZa1iNhgF%2F1w7eMOCH3MkGOqUBBfmliJRUuE3KSpNN0m0ypyp611twPm8uS%2F2ypcM3nJks8elm2b2isj237XG%2F6XakxhT%2B2467%2FJP8k5NMdN8Pq%2FwUIYutazqZBDiL%2BvnCKU4KnrCtQ5O6P5ulk1CiiSI0g37uV4PcXMm189XPTQIaq90Tlu9rSTHZJgX30aEb4wKHL0DM%2Bu5%2BO8UfJ0c5YP2%2Fivqg7OpCHF7VGILxq%2BTsmnjUVQH9&X-Amz-Signature=b1ab3792eddf957871cc72cdd222b678a9f809a114ff4cd8c0d42c2e7ab6cbe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYF2MOM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWz1xYEGkDf3CZbdGBeFgD2bNbuy6Ig9yekKKadTKuEQIgOiLsLktrjd45xAJ3K2FZ2HEHzx20OirjG2mGKcxiuMIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX8B4h0EHM%2FEj6F8ircAybIl%2BgX2r2uGZu1MJbQMT3pPDvI3njrT0lGmNgX4pfU75TyNXaJ3ljfAvllQMSD5ZEtvLUhTrrt7T1wFgQKfgSl0CAPTX75t%2FL%2BrcDMLMvky2xl3ykfrnBInY3fXcVovsoFxeDqY6LB%2B6qf%2BMdLZ4chgflfUR0bkZ0vkbDwbZSlfebBmt69vXDlwc1qOxne9cA5ZGc1MALQbQ9EkGRX9CZajA2aZ1YZDMkqvbeboTjnPxKIeYDxmyjyh0UTvoF084%2FuSkFU2oya17IXCIK9ZcsWwhDQhJI3jsZstCmjpu%2FoFjKTCJpZn6R3%2BkVAx92T2hkQzP6w1Nzmgz1sdOAy64uxK6TrrkhyvBHRbvbyy068FcFxxmNjUxZkRHoUsmrr%2B3FxFi720SMRPnAUnktOHLx3LvDkkmipZlt6e800AjPNbLJp1ylmbfOJESCxPlRPrcNDnnjUhEMZ0kvB14D20dlLSFSWyJsiIdukBQyqNSSMqo4fR%2Bzojbnf02Jt%2BGI5iP1%2B45Ac3x3icmV%2B95T8JznC%2FqkIZl2MhFtKVU%2FkVMFOgMHBPjXu9LsUJ1CIGOqgm7PBV9LLPMWecRATsIDXutwJ1nZljx7wkiHXFS3GNRJ%2FItgZa1iNhgF%2F1w7eMOCH3MkGOqUBBfmliJRUuE3KSpNN0m0ypyp611twPm8uS%2F2ypcM3nJks8elm2b2isj237XG%2F6XakxhT%2B2467%2FJP8k5NMdN8Pq%2FwUIYutazqZBDiL%2BvnCKU4KnrCtQ5O6P5ulk1CiiSI0g37uV4PcXMm189XPTQIaq90Tlu9rSTHZJgX30aEb4wKHL0DM%2Bu5%2BO8UfJ0c5YP2%2Fivqg7OpCHF7VGILxq%2BTsmnjUVQH9&X-Amz-Signature=e3e055df8ff80ce2dca3954b02a272a45e21c95b4324c5e162c4568526668135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

