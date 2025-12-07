---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CRFWEX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOHYyFvy6dXQHqZu%2Fg%2B0IZjfUUcc6e%2FYb%2BYZP0X039wAiEAqbefFS1S3VB9hZDyWhqi5DPqTcFfAASsw6vzf1L29PYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHTVQ%2FUYntrbHVZPSrcA%2BC9AD9fMttbk4AB43aoI520wA6Yjyj8azO9mc2LjOZ0zWpDKRqGMF5lQlW4ynjHb5rE9s08JlJ4Jm0%2BVvJFlfS9cRGUZRGPeAZz3FK3RAz6o%2B2SmASVIflz2vhpB1QfRshhEE4%2FlF9hn7rdzwqQyIiRP6vrG8zcKVmqy44EsQ60%2B%2FCT%2Fle9HYS7%2BsGGlDGORnmxknZ1vpbQQ4HNxK%2B%2FbXype5xICuDJIYCEu49YAteXG3haqaAO0nrYOPu%2FKB9hz2YLvDShrnGhIYKJoKcKpRHHpyY2Q9Vl%2FmSey37xpYkRtK4On%2Bvd7NZMTozz2ICkWOrDMRagKSmnvP67wGmy8ieDwD18UxMhCCSrC9PYFBAh5nwNW%2Fl%2B1kNQi6QEILWP6adsEsso3H7cf1cjwe%2F8h6M0GDU9BZ%2BGWjXE5nChy5j2vhGrtQeKtVPszlrOwyyXCLRq85BDcrK0kuS6e5u0Pzs0dKRMGZTyATcFLT4KCs%2FK8fy7ULab65T6KRqbxm%2BWIzss8U%2BSI63cElZ15%2FTtc75V0QVhDnEVmMNosk8MYSMIIfmC%2F98jtnYMuh6eOgpdBaVi9EeIsSx3yK9lZtImS4m6A42q%2B9si8rCbZxiN9MCx7K7DpQb3aBXsALfwMOOa1MkGOqUBtTx%2FM75kCwD881TZWiTaWuGjH%2BYb4Jl0M1hPWB6JXT38f60pfJS9d1OYupNEJiKQeTGzqALCDyaeSELjn2X4JDMVpNEtcMdGh3K9JkcyOxLbFgvwljN4dP2q1bh9OLiCWnGDNY0Vbg%2BfrW3WFLCbq3VvihpPRhbuetiS4jy3bNdWSenJW2tUd4XpY221772M3vbBDMgLglEPuXKcyc8M3DMhVi4E&X-Amz-Signature=dbaf70df956e7a67b2ff4ed2e6c82cc8c9832a685cda76a4bd37e17b67763164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4CRFWEX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOHYyFvy6dXQHqZu%2Fg%2B0IZjfUUcc6e%2FYb%2BYZP0X039wAiEAqbefFS1S3VB9hZDyWhqi5DPqTcFfAASsw6vzf1L29PYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHTVQ%2FUYntrbHVZPSrcA%2BC9AD9fMttbk4AB43aoI520wA6Yjyj8azO9mc2LjOZ0zWpDKRqGMF5lQlW4ynjHb5rE9s08JlJ4Jm0%2BVvJFlfS9cRGUZRGPeAZz3FK3RAz6o%2B2SmASVIflz2vhpB1QfRshhEE4%2FlF9hn7rdzwqQyIiRP6vrG8zcKVmqy44EsQ60%2B%2FCT%2Fle9HYS7%2BsGGlDGORnmxknZ1vpbQQ4HNxK%2B%2FbXype5xICuDJIYCEu49YAteXG3haqaAO0nrYOPu%2FKB9hz2YLvDShrnGhIYKJoKcKpRHHpyY2Q9Vl%2FmSey37xpYkRtK4On%2Bvd7NZMTozz2ICkWOrDMRagKSmnvP67wGmy8ieDwD18UxMhCCSrC9PYFBAh5nwNW%2Fl%2B1kNQi6QEILWP6adsEsso3H7cf1cjwe%2F8h6M0GDU9BZ%2BGWjXE5nChy5j2vhGrtQeKtVPszlrOwyyXCLRq85BDcrK0kuS6e5u0Pzs0dKRMGZTyATcFLT4KCs%2FK8fy7ULab65T6KRqbxm%2BWIzss8U%2BSI63cElZ15%2FTtc75V0QVhDnEVmMNosk8MYSMIIfmC%2F98jtnYMuh6eOgpdBaVi9EeIsSx3yK9lZtImS4m6A42q%2B9si8rCbZxiN9MCx7K7DpQb3aBXsALfwMOOa1MkGOqUBtTx%2FM75kCwD881TZWiTaWuGjH%2BYb4Jl0M1hPWB6JXT38f60pfJS9d1OYupNEJiKQeTGzqALCDyaeSELjn2X4JDMVpNEtcMdGh3K9JkcyOxLbFgvwljN4dP2q1bh9OLiCWnGDNY0Vbg%2BfrW3WFLCbq3VvihpPRhbuetiS4jy3bNdWSenJW2tUd4XpY221772M3vbBDMgLglEPuXKcyc8M3DMhVi4E&X-Amz-Signature=453f243dc33d4cf4f245a9f664fee0b2129e8dc1a6e1bce380973cac792581b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

