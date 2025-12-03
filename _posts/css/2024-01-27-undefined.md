---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAYWGPH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFe1jC64%2FmhCc7E5Awr9lRC05cx9o5G4s7l1PMSdEOTeAiEA6m%2FQW4DarBkWeRXzQ59wv3%2Fj8JbHNVATdllqQUVAmq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLVs8uT7kkH1tt7rHyrcA7mk4Nx54e2WqNTE72i4P291O9Dk1rRkTW2T%2Fz6DGKByFlKuOaHdl1FR4UxxpZw5O9qrtXpV2i4vNOkcTVA5y0pek19m5VCjgksnSP%2B07PCk70Hf9zidCEnrRTpdqthL4qB8LVoETeCCZmaZJUNya5q6DiyjtFk8aXGEjp6N4u1gSZbFLGyjWw5G%2BS%2BLza5yl9sPUmXFcLF8ZiN%2B8aU3L4WeH7m5usGGn0TIgmh1DhGElxPWFcpWH%2BiSg9nu8CAL5eXk2PJtikjM2ilc6t7%2F0zbIdz6TVr57u6I9Katf%2BEHK7J55%2B54ImbPF4am%2BltZjTPFL6%2BjneTkNL8lSQyig0ADNLoc1DKm0bdQKj6WMNMnBi4CJH4SFcyh%2Fh8S2VUSJcB2YHBzBkO19hU02xqjyHUbv6hEik6bjJyogD3XjaOza26Zi2Zo%2BeaKawj692iYGXWEVNa9bEXCDA%2BQwKaKtvlOlcc4tMARdentHH5mSyPE2WpmbYhosn5QSKL1ZTgpXo01avSDB%2Fw57NCBtqp0Uux%2B94GktY20T5ILMgD7Ha7lG1PV4M2mb4j5il7yoR1EKbPX7S8lMcbQvAE9b%2B6OxclxjTYzDT7k8%2B3k1pkUFc7SgycMqLA%2BJBayjHxw8MOT2v8kGOqUBEp6OgIS5W9oDY14HodzJtm95ZApSLDj1byMbMG2orvDpOTp6AiYu61TT8TGXGq0%2BalSb453jSM6Je9V0JhLPnXzX5liS591dxvE8GSgpYnfbWhgn%2FAQkgwZI6VcWYMRwSXOyGjkyo6nEtatNTy0A4K%2F%2Fe3UlNtSvW3QaeZyYxKW4xgM22nz5kL9NqoE9zQDr3XelSNEn0%2FdUIIuFJDDmQd%2BzCBRI&X-Amz-Signature=0f1c0867f188b1ff255b5388dcc5659c5c0d0689c411551fcfeba6ff8e06f7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EAYWGPH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFe1jC64%2FmhCc7E5Awr9lRC05cx9o5G4s7l1PMSdEOTeAiEA6m%2FQW4DarBkWeRXzQ59wv3%2Fj8JbHNVATdllqQUVAmq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLVs8uT7kkH1tt7rHyrcA7mk4Nx54e2WqNTE72i4P291O9Dk1rRkTW2T%2Fz6DGKByFlKuOaHdl1FR4UxxpZw5O9qrtXpV2i4vNOkcTVA5y0pek19m5VCjgksnSP%2B07PCk70Hf9zidCEnrRTpdqthL4qB8LVoETeCCZmaZJUNya5q6DiyjtFk8aXGEjp6N4u1gSZbFLGyjWw5G%2BS%2BLza5yl9sPUmXFcLF8ZiN%2B8aU3L4WeH7m5usGGn0TIgmh1DhGElxPWFcpWH%2BiSg9nu8CAL5eXk2PJtikjM2ilc6t7%2F0zbIdz6TVr57u6I9Katf%2BEHK7J55%2B54ImbPF4am%2BltZjTPFL6%2BjneTkNL8lSQyig0ADNLoc1DKm0bdQKj6WMNMnBi4CJH4SFcyh%2Fh8S2VUSJcB2YHBzBkO19hU02xqjyHUbv6hEik6bjJyogD3XjaOza26Zi2Zo%2BeaKawj692iYGXWEVNa9bEXCDA%2BQwKaKtvlOlcc4tMARdentHH5mSyPE2WpmbYhosn5QSKL1ZTgpXo01avSDB%2Fw57NCBtqp0Uux%2B94GktY20T5ILMgD7Ha7lG1PV4M2mb4j5il7yoR1EKbPX7S8lMcbQvAE9b%2B6OxclxjTYzDT7k8%2B3k1pkUFc7SgycMqLA%2BJBayjHxw8MOT2v8kGOqUBEp6OgIS5W9oDY14HodzJtm95ZApSLDj1byMbMG2orvDpOTp6AiYu61TT8TGXGq0%2BalSb453jSM6Je9V0JhLPnXzX5liS591dxvE8GSgpYnfbWhgn%2FAQkgwZI6VcWYMRwSXOyGjkyo6nEtatNTy0A4K%2F%2Fe3UlNtSvW3QaeZyYxKW4xgM22nz5kL9NqoE9zQDr3XelSNEn0%2FdUIIuFJDDmQd%2BzCBRI&X-Amz-Signature=09707338f241afdf4e57c0c9b006f6a72ec291be1d1ec9ca6f21913f35e09daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

