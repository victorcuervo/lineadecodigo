---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3FVVRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2Tard5IWyxyPdjubhImCePBPgXbL325JYL1rlZw808AiBH%2FIf%2Bhu0efxlFFX%2BhzbVJI9Vce4z8qFMG1D6QKe4vXiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtYXLHGvhePpp9kTKtwDC2ohBE69KddHRo8kTHUcFqjM9ZTd4hdLIDNb5s8Hrx73J9o8VkSaZoRfEGPjKq94925hjNha9OGE8tMQF4r%2BIEQiRue0zPRs23ywCaT9o4NxHbgArV64LmBSi2FDSu6RpyBwQMUl5IpszFt2QkhstC6i5Ay%2FiX5jpbIpXFAnqBe7va464gHztAuQdQDrDO%2FTGZSaGY7M%2FeUozKY3ccP06SJRBsEIGIlmjHKEwEd6Nm%2BSmXyJ8Y4OJiIgpTy1HEvyS4MPgvHTMx9ZpF1E%2FtdtdmrvfTmcVWAQ5jXjiOybUV%2FWNhxsDxdyp8gGBSF%2FBcRDFKc1EIgO8nOCMOhLCSfkmm%2FjDgc1mpL6kbZ9fyA83aKDLDMRoMn6zQUN4vXp8%2FWBe87TN369pJhl8eYvCIaVmGoAYEbJ845CY4abBgWMkEDmRvRn8Q0NhBkm9B1H9%2FdYwxOuTD6Fj%2FgKxt6ZCLibX75UTu%2BVfJFAFLWvfCvX1G62I2tmnXoJ%2FOOB5M03R3KK3t6q7nVCPCn9tuDobDy8wjDOUHHaPJp%2B5SJ11d8zN5X%2BbeXt3R%2F1ZZLfFzUbzsQqiyrcR7dxtmytDlxtBdXW9CnRcGrvR7w9WRbw7DDF7xEbpBJoPdikLUpBs7cwvc%2FZyQY6pgF7XRftD2sKKgSxB1vC5939HaOrWs3Ipsxr2lWcTcd%2FDpky5w7b%2FDzvnADITCeYRQ1uweAKoaeH%2BdECENCGNPBHCEwlLjA8f40mV%2BTv1CBqyRn9p2GxsZgTykoUKTNaYQrsaLJsfKgTpPK2YZux6itxqemThFtrrthYjD%2BZTMO0kHmMKHYBT6DOKo0djbU%2B9QlqqirX9uyskcxEpbCxd4Zc7GP%2BVCV5&X-Amz-Signature=5fbdb52135418816b078b2a88fb8285e799fd711795a91a7ad0549bf2512f590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3FVVRZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2Tard5IWyxyPdjubhImCePBPgXbL325JYL1rlZw808AiBH%2FIf%2Bhu0efxlFFX%2BhzbVJI9Vce4z8qFMG1D6QKe4vXiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtYXLHGvhePpp9kTKtwDC2ohBE69KddHRo8kTHUcFqjM9ZTd4hdLIDNb5s8Hrx73J9o8VkSaZoRfEGPjKq94925hjNha9OGE8tMQF4r%2BIEQiRue0zPRs23ywCaT9o4NxHbgArV64LmBSi2FDSu6RpyBwQMUl5IpszFt2QkhstC6i5Ay%2FiX5jpbIpXFAnqBe7va464gHztAuQdQDrDO%2FTGZSaGY7M%2FeUozKY3ccP06SJRBsEIGIlmjHKEwEd6Nm%2BSmXyJ8Y4OJiIgpTy1HEvyS4MPgvHTMx9ZpF1E%2FtdtdmrvfTmcVWAQ5jXjiOybUV%2FWNhxsDxdyp8gGBSF%2FBcRDFKc1EIgO8nOCMOhLCSfkmm%2FjDgc1mpL6kbZ9fyA83aKDLDMRoMn6zQUN4vXp8%2FWBe87TN369pJhl8eYvCIaVmGoAYEbJ845CY4abBgWMkEDmRvRn8Q0NhBkm9B1H9%2FdYwxOuTD6Fj%2FgKxt6ZCLibX75UTu%2BVfJFAFLWvfCvX1G62I2tmnXoJ%2FOOB5M03R3KK3t6q7nVCPCn9tuDobDy8wjDOUHHaPJp%2B5SJ11d8zN5X%2BbeXt3R%2F1ZZLfFzUbzsQqiyrcR7dxtmytDlxtBdXW9CnRcGrvR7w9WRbw7DDF7xEbpBJoPdikLUpBs7cwvc%2FZyQY6pgF7XRftD2sKKgSxB1vC5939HaOrWs3Ipsxr2lWcTcd%2FDpky5w7b%2FDzvnADITCeYRQ1uweAKoaeH%2BdECENCGNPBHCEwlLjA8f40mV%2BTv1CBqyRn9p2GxsZgTykoUKTNaYQrsaLJsfKgTpPK2YZux6itxqemThFtrrthYjD%2BZTMO0kHmMKHYBT6DOKo0djbU%2B9QlqqirX9uyskcxEpbCxd4Zc7GP%2BVCV5&X-Amz-Signature=5d4aa1e6c8664841c2cbd4ed338a865477b6099efe2aee8ed6bf84c246b3e57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

