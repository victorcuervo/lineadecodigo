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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJYZNXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDlIPBIBmoD2XQmUgFgDaLqO2dkTRBBpMqhQNYLHLkQwAiEA0boke0F7xAaADui8%2F0gIrrEmH6NAkpBhJQXOD3O01u4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCDb8HKTW3K97%2BstCyrcA6SExnTHXkb81%2Bze%2BA%2BmNf692DgzAr9MY8g9G0dT4PEB8Yj3ygctNz89tTMWfqdqYNT4%2FoLPnyYJsmStv1JkRtMBxm1kUbdDya%2BxUEMTLWp2bR9r9R2k7yYKU5knSGein6KnGsfbuF31qpFchMBX%2FhIo%2F%2Fy%2Bt8%2FehBJZE5F9kkTTkUIUCK%2B9FQ403nVli7%2Fbh9AlklL7iOYU5xiD9I0gEpraEUNiCJutwx0BAlIHd8PwHGNKD15qSFtkQcj%2Bss8lDpRP8fODqUHhjiLB3AyLehS4N2g1NtRXF%2BGClbM0V0Gt2EhWmIbkPiXSRxDvleeb5NTCH%2BX6D6lq1a2pGHt8%2Fj%2Ba19bfyK%2F%2BjO8%2F%2F%2BmyMIuoHnst9CBtsNX0k%2FiNDEEBRTJ0EnvGzx6s7RxF5LGLfB7YFii%2Fht8QjWzO7lU9j7Dxloa1GeRVMG27flHfcQbSsx0O1U73TTik35V9E6%2Fjb3x5DoA4wj7bRQ7F%2BJ07nSylbrSokglJedbFjzmpkmH57r%2FO2%2F5UVmajrJkHlKcWhCtKEwIubwxrYN1%2FdxmoBwRX32jWbAcrXzJk4gyinziiZ3K7EynbCM%2FBCBRZ3HLwPkSfYsQ7ngA6Z4MmKXxjMLkm10lzSifHceg3myA7MPTVv8kGOqUB9o4Q1dY8HNsoHlwHGE%2F%2FKFPvwsgyi9DZl4CejSZZ8nlrxcNdlINPF7Ei0qDk3zK%2FKa6KmNx9GqZjyV9Qw03w9cGiUGLJsQLR5MsQdtRQolKqgugJjRIaTG98Vrc2t8T2OV3DJ3pPpi0%2FJcf8IbqwxpfWcKkzENa9pYe733nM%2ByEaddQjmccsv5hpOsNLlh2MU3XA1j9L96GR6IgaTSMyYa%2Fp9Fdw&X-Amz-Signature=89c2fad6b490f6e70d8a759ab81f85956a69aabb2decd902dcee18a182425517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJYZNXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDlIPBIBmoD2XQmUgFgDaLqO2dkTRBBpMqhQNYLHLkQwAiEA0boke0F7xAaADui8%2F0gIrrEmH6NAkpBhJQXOD3O01u4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCDb8HKTW3K97%2BstCyrcA6SExnTHXkb81%2Bze%2BA%2BmNf692DgzAr9MY8g9G0dT4PEB8Yj3ygctNz89tTMWfqdqYNT4%2FoLPnyYJsmStv1JkRtMBxm1kUbdDya%2BxUEMTLWp2bR9r9R2k7yYKU5knSGein6KnGsfbuF31qpFchMBX%2FhIo%2F%2Fy%2Bt8%2FehBJZE5F9kkTTkUIUCK%2B9FQ403nVli7%2Fbh9AlklL7iOYU5xiD9I0gEpraEUNiCJutwx0BAlIHd8PwHGNKD15qSFtkQcj%2Bss8lDpRP8fODqUHhjiLB3AyLehS4N2g1NtRXF%2BGClbM0V0Gt2EhWmIbkPiXSRxDvleeb5NTCH%2BX6D6lq1a2pGHt8%2Fj%2Ba19bfyK%2F%2BjO8%2F%2F%2BmyMIuoHnst9CBtsNX0k%2FiNDEEBRTJ0EnvGzx6s7RxF5LGLfB7YFii%2Fht8QjWzO7lU9j7Dxloa1GeRVMG27flHfcQbSsx0O1U73TTik35V9E6%2Fjb3x5DoA4wj7bRQ7F%2BJ07nSylbrSokglJedbFjzmpkmH57r%2FO2%2F5UVmajrJkHlKcWhCtKEwIubwxrYN1%2FdxmoBwRX32jWbAcrXzJk4gyinziiZ3K7EynbCM%2FBCBRZ3HLwPkSfYsQ7ngA6Z4MmKXxjMLkm10lzSifHceg3myA7MPTVv8kGOqUB9o4Q1dY8HNsoHlwHGE%2F%2FKFPvwsgyi9DZl4CejSZZ8nlrxcNdlINPF7Ei0qDk3zK%2FKa6KmNx9GqZjyV9Qw03w9cGiUGLJsQLR5MsQdtRQolKqgugJjRIaTG98Vrc2t8T2OV3DJ3pPpi0%2FJcf8IbqwxpfWcKkzENa9pYe733nM%2ByEaddQjmccsv5hpOsNLlh2MU3XA1j9L96GR6IgaTSMyYa%2Fp9Fdw&X-Amz-Signature=f668b859a67f4183f51362f9338e1e3f45169dbd4ca5fce1216af4427e262801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

