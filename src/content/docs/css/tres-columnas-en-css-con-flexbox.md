---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRCDRLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDoq%2BecXmD7%2F7C9%2FU5NW10%2Bh%2FD%2FehOvYKbyBGVvZwFBfQIgYWVkte8lD8%2F4qFpGb8tsF30Em5JmnhKq81RASqbW7SAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHp0TkKAZe5w8WZ3USrcA1gIE01obVA77Wow%2B%2Bxq0eVUs7ZbMVEFauCt8EVOmynHNJNDB0%2F6bFHLgbbOoCXTKJTIpoa1Pn%2FX0Yv%2Blb2WY942Xm%2F09iv3a79Zdv9tJm81pIBdmF%2FDnqhSU%2BgVgm8Fpdr8YENGKjU2YAhKuWe%2Ftg0bIlk54PLbopLcg9k3OyAzGnl2vITjj4ORhq57E6Nvr1nbvY2SQKMF0VIs6vD8qnLrsuJ%2F83%2BrafydaDTf8W1bGHofkRk22pTQ%2Fzt4i%2FR0RWmbawXRwOARxPS9ZdQ1dK5I3LCERzmmieOJR2Q%2BWORcXkBSCSYgerh8G2XTVlB%2Fh%2BmbGYM8wDuizS1%2FQ4MsNE2W0Q%2BUL3LKGd5Lewqi%2FWl%2F%2B0OP3HM4HAHSBI4BkqTM0zRveXqa9%2BO2g53YJBzWzCstXLEGI2bVIOzB86Gxt13ndvntAzvs%2BOyGYXXsWXQ9QIvpFIyFHFk0ppsR7BuDvy5I2QJwbyY0SW978IArLQ6qHAUZE7n5nRuAU%2FN9N2qJTACLd5pZqD1dgraExdd1DLjTwWcUEW6hO%2FBzyWjo2WxKDBMLjDJsv%2FUlQNRk3k2MsLszB55vChizpNDUW3LgjR%2FeRaROECZYpBJYPDbTfwc%2BrfTcH%2BIlInCMF3UAMIS%2BwskGOqUBHzYV48ZrRnu8wujmU3o8CZEygpLjneG9NdnxX%2FdfsHmjxfFT0zfWnuuTSqdLwhXgJBfEPGNEEgYfUM8vs19kCyElDu%2FoARW2eXQRng1JkSHSO4R74kmrV6fPvnWtmh%2B09xtt0KPkdH%2BJ9iRqjnPVVd2B0vwzsjvUnjCsFtrkv3rQ%2BdclXUEvdXVm1UcPgAhKi6gpvcFyLGvlBZqHUc%2B%2Bds8CU9y0&X-Amz-Signature=56acbca69c0acb7ca8cfd7bf7aaf575548a9a3fc7746750f17cc5a505d58426f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRCDRLN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDoq%2BecXmD7%2F7C9%2FU5NW10%2Bh%2FD%2FehOvYKbyBGVvZwFBfQIgYWVkte8lD8%2F4qFpGb8tsF30Em5JmnhKq81RASqbW7SAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHp0TkKAZe5w8WZ3USrcA1gIE01obVA77Wow%2B%2Bxq0eVUs7ZbMVEFauCt8EVOmynHNJNDB0%2F6bFHLgbbOoCXTKJTIpoa1Pn%2FX0Yv%2Blb2WY942Xm%2F09iv3a79Zdv9tJm81pIBdmF%2FDnqhSU%2BgVgm8Fpdr8YENGKjU2YAhKuWe%2Ftg0bIlk54PLbopLcg9k3OyAzGnl2vITjj4ORhq57E6Nvr1nbvY2SQKMF0VIs6vD8qnLrsuJ%2F83%2BrafydaDTf8W1bGHofkRk22pTQ%2Fzt4i%2FR0RWmbawXRwOARxPS9ZdQ1dK5I3LCERzmmieOJR2Q%2BWORcXkBSCSYgerh8G2XTVlB%2Fh%2BmbGYM8wDuizS1%2FQ4MsNE2W0Q%2BUL3LKGd5Lewqi%2FWl%2F%2B0OP3HM4HAHSBI4BkqTM0zRveXqa9%2BO2g53YJBzWzCstXLEGI2bVIOzB86Gxt13ndvntAzvs%2BOyGYXXsWXQ9QIvpFIyFHFk0ppsR7BuDvy5I2QJwbyY0SW978IArLQ6qHAUZE7n5nRuAU%2FN9N2qJTACLd5pZqD1dgraExdd1DLjTwWcUEW6hO%2FBzyWjo2WxKDBMLjDJsv%2FUlQNRk3k2MsLszB55vChizpNDUW3LgjR%2FeRaROECZYpBJYPDbTfwc%2BrfTcH%2BIlInCMF3UAMIS%2BwskGOqUBHzYV48ZrRnu8wujmU3o8CZEygpLjneG9NdnxX%2FdfsHmjxfFT0zfWnuuTSqdLwhXgJBfEPGNEEgYfUM8vs19kCyElDu%2FoARW2eXQRng1JkSHSO4R74kmrV6fPvnWtmh%2B09xtt0KPkdH%2BJ9iRqjnPVVd2B0vwzsjvUnjCsFtrkv3rQ%2BdclXUEvdXVm1UcPgAhKi6gpvcFyLGvlBZqHUc%2B%2Bds8CU9y0&X-Amz-Signature=a60f2ef233ebbb96aec358ec02df9689a583ec7bb9ec149a50bbf0091830a095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

