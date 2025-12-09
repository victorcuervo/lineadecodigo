---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVCXNYZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW6EKay2gjbEgzPL2qq70rSjJ8cLUFm9ZRX2lvdpup%2FAiEA2iUd69V6FamFZZ3e%2FC80nxeuZ1varfoamY3p3c7pGpcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEhcJM1U2RRIPl3vyrcAwAx3tmQ43jYYXiX%2Fh4Oz7kuBNRu4hMZBK4VhvSMdAVNzC%2BOSJwa0At6wWN1hOo0IDFtXqtFuKZzHkG3yDEWCMGglrle3ZNV%2FHHov%2FLAU5%2Bk6njidaTiKMxSasZK7czy0oiSlU%2FJzocbA00z9bAdsRQ0WGcpEM%2FCOhG%2BsIlW%2BGNSneyT2jIlski2t1phvkvZ6pNhWjvTYGTv1b%2Fw3kwbJOaLJlmLgG%2FvnjtVgmTFVqV7iEipAxqCkx9qwzj%2FpMSWd%2FCqcxSLWV2XHcri0ZwG4seTtcMX9OBWaU8OdpgTCuh2q98lfzGMasnYCtOTHk8u7Fxbf1wQtBCmj3V1Xv%2BHbm0pVYgfp4%2Fq0VPk7BVPEBfI%2F%2FVG5W185Tdm4NQQOaQJ%2F0r5ZmZPIT5bAQrS3MwovgUgLT1mQB69%2BGvm8kAt55jeX%2BhD2Hgb1U1HD1B43qAC7ShDguchQe9nxtYjvRR1DsE45ribmh13jm7XxC97PqVzVjpQ4tj%2FQy3lROBFYKbzPU5JEjDMHG0FILt1D6T%2BWls5%2FhmxTEWGy2RcRb%2BmMSXNhDJ3GqFo8JIJszeGYARZGKLwmEXj2K1sAg3xlUREDQjdemahQxT773ew1sGHy2c9tLwB%2FmL9cOAU6Zh5MK3l3skGOqUB41V%2BNq7kJWD5Z78S%2FZHLAcB%2F5OtAGYpBabucVLcrUZAIU3fprq4tp1MrQPzzqqCago3QWQ3pU%2FxhEf%2FHLFEDPFThVoSG47tNGq2k%2BGMCYyXQKqirYAu28DzlFSQGlP72MiCmGCqNfdSMK%2B530oX2lOm6PbGhxUuzNawHrItiQP2vBTz%2B7LL5uT5P3Vwjl9VyFcjWCssLqJldrwl0Zd4VFGwvQknJ&X-Amz-Signature=4fd548052f5763a87f1f0bedc0f63a49960d9b6e0b9f33b2f2b303fd9602f84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVCXNYZQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW6EKay2gjbEgzPL2qq70rSjJ8cLUFm9ZRX2lvdpup%2FAiEA2iUd69V6FamFZZ3e%2FC80nxeuZ1varfoamY3p3c7pGpcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGEhcJM1U2RRIPl3vyrcAwAx3tmQ43jYYXiX%2Fh4Oz7kuBNRu4hMZBK4VhvSMdAVNzC%2BOSJwa0At6wWN1hOo0IDFtXqtFuKZzHkG3yDEWCMGglrle3ZNV%2FHHov%2FLAU5%2Bk6njidaTiKMxSasZK7czy0oiSlU%2FJzocbA00z9bAdsRQ0WGcpEM%2FCOhG%2BsIlW%2BGNSneyT2jIlski2t1phvkvZ6pNhWjvTYGTv1b%2Fw3kwbJOaLJlmLgG%2FvnjtVgmTFVqV7iEipAxqCkx9qwzj%2FpMSWd%2FCqcxSLWV2XHcri0ZwG4seTtcMX9OBWaU8OdpgTCuh2q98lfzGMasnYCtOTHk8u7Fxbf1wQtBCmj3V1Xv%2BHbm0pVYgfp4%2Fq0VPk7BVPEBfI%2F%2FVG5W185Tdm4NQQOaQJ%2F0r5ZmZPIT5bAQrS3MwovgUgLT1mQB69%2BGvm8kAt55jeX%2BhD2Hgb1U1HD1B43qAC7ShDguchQe9nxtYjvRR1DsE45ribmh13jm7XxC97PqVzVjpQ4tj%2FQy3lROBFYKbzPU5JEjDMHG0FILt1D6T%2BWls5%2FhmxTEWGy2RcRb%2BmMSXNhDJ3GqFo8JIJszeGYARZGKLwmEXj2K1sAg3xlUREDQjdemahQxT773ew1sGHy2c9tLwB%2FmL9cOAU6Zh5MK3l3skGOqUB41V%2BNq7kJWD5Z78S%2FZHLAcB%2F5OtAGYpBabucVLcrUZAIU3fprq4tp1MrQPzzqqCago3QWQ3pU%2FxhEf%2FHLFEDPFThVoSG47tNGq2k%2BGMCYyXQKqirYAu28DzlFSQGlP72MiCmGCqNfdSMK%2B530oX2lOm6PbGhxUuzNawHrItiQP2vBTz%2B7LL5uT5P3Vwjl9VyFcjWCssLqJldrwl0Zd4VFGwvQknJ&X-Amz-Signature=674d90a6f03d60a7db5aaa5ce100d2cc5d9355f40e840f2212ac4d0e66613329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

