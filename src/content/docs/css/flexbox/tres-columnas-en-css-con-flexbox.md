---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3VARXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzQS%2FCtM2xWRWbsDbtwByb%2FLfndNeBUM0lLOCrHOR4QIgUWo9NJlT05qwTKJ1pOWeXhTQ03I0jfUTn%2F4oHalf9gwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIo6IZHBaxo3T9RHyrcA1Yz6vyYtnAmqzZmLTeKWThjCqq0E8h%2BwdHBP%2FdVO3Map75cfgO1%2FzEnYRzl0ilis349zquHDxzvVVfBFn45oqdGVG9x4MbgANfhzjCrjw61XHR1mAW4CS8KVSUvJHbbaLr6O1wffSAsp7wDIP2aMS53EamSHp7e2v9HyfzpCw9BENJbIMf5Wc0eFTXf50tPijBLrT3Iz6Z9fG1GLLMKC7t4RhPd5VOm8xc%2BK3QAv0yCdFY%2BpRBpUto77rVEpxLZIqJTfxqhUFPBclld9NDkMBaBAF656sKtYucv4XpL5D5bvyP8yNzzHnyW2EJlpyJl0DZBzCS7o43ooqwW%2F4CGDC07Fn0vsGmBG%2BVJAiy7WQ14A1Wbo3ujqsV5Rvi0BVzFK6lo%2BPD25vCjYiuuEMCpVf6pF6DSVJusYbPZeGgqvJg7U0AirPaSh1DIjrh8Lr6gjIUvCuos8bGg28%2B7EiJGSrbbY%2FCf777PA%2FZJtYKB9lcK80J3W3xuqddPw3aKaoGAO1V3qw8NuyB2ngkum3oDyU%2Fmxd7GJSRliLNr4f52GYaEvCe0Lz9kF8z1hjP40w9BceEa06YBsfDyOiHZTUYvvXzc5xqhcJC8%2FynzIk33SutRPPItXJ2FLWOV0MIOMLC02ckGOqUBdutRoIwUsKo62hwgJOrpoM%2FcdEhrgUH1IcwkBILXVnz0LrMObqPF48BBnq7nBvNtBqzgb285akZm%2BZkQIQ2cj9ltskmClguvos3Fmz1oZoR5uXQiEmezn%2B6G7mqQKcGPDNbyRoGME70t6Kh%2FDn74xz%2BqODD%2BOqjOGoF8bJ6R2l2%2FjRjb4Lewh3Psv3Sgyq7%2BdUK0GXNKsWri9seRf6DXGvFJCVjU&X-Amz-Signature=b9fb35b7d11e5cdf90fda0a6dfac4244d5e2228daea7fd78cfdcca897370a150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3VARXD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNzQS%2FCtM2xWRWbsDbtwByb%2FLfndNeBUM0lLOCrHOR4QIgUWo9NJlT05qwTKJ1pOWeXhTQ03I0jfUTn%2F4oHalf9gwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIo6IZHBaxo3T9RHyrcA1Yz6vyYtnAmqzZmLTeKWThjCqq0E8h%2BwdHBP%2FdVO3Map75cfgO1%2FzEnYRzl0ilis349zquHDxzvVVfBFn45oqdGVG9x4MbgANfhzjCrjw61XHR1mAW4CS8KVSUvJHbbaLr6O1wffSAsp7wDIP2aMS53EamSHp7e2v9HyfzpCw9BENJbIMf5Wc0eFTXf50tPijBLrT3Iz6Z9fG1GLLMKC7t4RhPd5VOm8xc%2BK3QAv0yCdFY%2BpRBpUto77rVEpxLZIqJTfxqhUFPBclld9NDkMBaBAF656sKtYucv4XpL5D5bvyP8yNzzHnyW2EJlpyJl0DZBzCS7o43ooqwW%2F4CGDC07Fn0vsGmBG%2BVJAiy7WQ14A1Wbo3ujqsV5Rvi0BVzFK6lo%2BPD25vCjYiuuEMCpVf6pF6DSVJusYbPZeGgqvJg7U0AirPaSh1DIjrh8Lr6gjIUvCuos8bGg28%2B7EiJGSrbbY%2FCf777PA%2FZJtYKB9lcK80J3W3xuqddPw3aKaoGAO1V3qw8NuyB2ngkum3oDyU%2Fmxd7GJSRliLNr4f52GYaEvCe0Lz9kF8z1hjP40w9BceEa06YBsfDyOiHZTUYvvXzc5xqhcJC8%2FynzIk33SutRPPItXJ2FLWOV0MIOMLC02ckGOqUBdutRoIwUsKo62hwgJOrpoM%2FcdEhrgUH1IcwkBILXVnz0LrMObqPF48BBnq7nBvNtBqzgb285akZm%2BZkQIQ2cj9ltskmClguvos3Fmz1oZoR5uXQiEmezn%2B6G7mqQKcGPDNbyRoGME70t6Kh%2FDn74xz%2BqODD%2BOqjOGoF8bJ6R2l2%2FjRjb4Lewh3Psv3Sgyq7%2BdUK0GXNKsWri9seRf6DXGvFJCVjU&X-Amz-Signature=85af348d2148d7fcbc8e47e22b2e03f6aed873a6e8b4f093b622b35ffaead510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

