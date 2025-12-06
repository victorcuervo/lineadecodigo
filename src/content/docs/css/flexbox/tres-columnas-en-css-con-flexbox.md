---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLF4MOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjqim2c3Y7yRTcEr0ocMvMwVVT6vvSCzi22eJV89dVYAiAfwc68a4LnqT9wKB8Ecyw7BwXcFO53Z27NlBSaq91wqyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMfh2EPwmMI3nSBabkKtwD0K5fGEjbjVSO8rEnJYP5xyIUtw%2FsKGkflmeKR%2BUS72tQW%2FH5d9ugt%2Bv3OWpvx6GODe9fPKqWrolSJHp%2FPmktxCkRXaeL491cLHvlx2cj%2F7MUjAhjzOmpgr%2BypbJqmOJk0nAF%2BTDWkLGUio7xs%2BAdpI6m25ddo8W53ASi60Ge%2BBgmyomQFIwPv46m3h3xOj92RULqW50HZpsyIojECRdMEF%2FpjV8V0JhiHwSE0A5aIJ8MID1hPgDMCZrf9JpvkvkznQbzzqeUQ2nCZDYwGD94CD6mXSsIfDt8%2FKFyaWX92s%2FFZKGSq9wti%2FNBPmLOecMMNPPzhGLMR9Kxcvwv2wwoH3jQuL7ZWRhnZ%2BE%2FMDGUy93LTWtbbiEyfGE4rNVJpIUnz05tssCfNBZ0Uhe2g5A01qjRa5sQ3Qj4Cnge1T1oLEyI6kYUB0FJAe3Tbdpu370TNqTcQq9vf9jtTeZjc5jwFjpaf8hZGAakOuzO0h2ZDhIyNPTFT8peRdT1iDluJ8%2FHDD%2B3LgDIAeglhv0aumnqd3MqkvKZkHupUItDmm6iKaBbEvY6wznDo64wkez9j%2FjV6ZD5D%2Bsc5cDEaokPudNWDivKAn5yrsAC0wBg%2FbQpGCqXPLonJxZIKQhy8hMwjJ7PyQY6pgERg2fLgvIZExRxwCoDm%2Bpen2NGJhtS8R5A5%2B7BNJoZ5DmJuOBkkWdmTL6Bxj4TpXeVEVgEW22zetRahesNzbgc7Xo8JhQAuFq%2Bw6B8hiyFScSsHuA5927aSODmaCFQlgGOnrv7W%2FAf5sPIT9V3NbeOaS8Zp3Od7bfBH2YwBvb%2B7IF%2F4mArYPhXx3U0na4LZ6l6HDy0W3Ro9vkekCmtzMqvgNgndbZ8&X-Amz-Signature=636521fdd5f1ea898350e0502e590f127982cdef7e99e6e6c8f1b77870469dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLF4MOK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjqim2c3Y7yRTcEr0ocMvMwVVT6vvSCzi22eJV89dVYAiAfwc68a4LnqT9wKB8Ecyw7BwXcFO53Z27NlBSaq91wqyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMfh2EPwmMI3nSBabkKtwD0K5fGEjbjVSO8rEnJYP5xyIUtw%2FsKGkflmeKR%2BUS72tQW%2FH5d9ugt%2Bv3OWpvx6GODe9fPKqWrolSJHp%2FPmktxCkRXaeL491cLHvlx2cj%2F7MUjAhjzOmpgr%2BypbJqmOJk0nAF%2BTDWkLGUio7xs%2BAdpI6m25ddo8W53ASi60Ge%2BBgmyomQFIwPv46m3h3xOj92RULqW50HZpsyIojECRdMEF%2FpjV8V0JhiHwSE0A5aIJ8MID1hPgDMCZrf9JpvkvkznQbzzqeUQ2nCZDYwGD94CD6mXSsIfDt8%2FKFyaWX92s%2FFZKGSq9wti%2FNBPmLOecMMNPPzhGLMR9Kxcvwv2wwoH3jQuL7ZWRhnZ%2BE%2FMDGUy93LTWtbbiEyfGE4rNVJpIUnz05tssCfNBZ0Uhe2g5A01qjRa5sQ3Qj4Cnge1T1oLEyI6kYUB0FJAe3Tbdpu370TNqTcQq9vf9jtTeZjc5jwFjpaf8hZGAakOuzO0h2ZDhIyNPTFT8peRdT1iDluJ8%2FHDD%2B3LgDIAeglhv0aumnqd3MqkvKZkHupUItDmm6iKaBbEvY6wznDo64wkez9j%2FjV6ZD5D%2Bsc5cDEaokPudNWDivKAn5yrsAC0wBg%2FbQpGCqXPLonJxZIKQhy8hMwjJ7PyQY6pgERg2fLgvIZExRxwCoDm%2Bpen2NGJhtS8R5A5%2B7BNJoZ5DmJuOBkkWdmTL6Bxj4TpXeVEVgEW22zetRahesNzbgc7Xo8JhQAuFq%2Bw6B8hiyFScSsHuA5927aSODmaCFQlgGOnrv7W%2FAf5sPIT9V3NbeOaS8Zp3Od7bfBH2YwBvb%2B7IF%2F4mArYPhXx3U0na4LZ6l6HDy0W3Ro9vkekCmtzMqvgNgndbZ8&X-Amz-Signature=ab84ff6c6e7070e6e94390da5179329ced6739f217fc4269c7a62024c34881eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

