---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BDPN47%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkRw4tgAOMZrpL3oaFlz1CxhJ8wPoWoCLi108CjMlRAiAZw2G7VJgTavfGCLrRaJX3TFOpe8gSqH3HqlefdeDlrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmWS4YJSb6QAB5doKtwDqB3T4PfOgC%2BRvF9fk%2FYLzGuGSJ9tj%2FFxzxp6PzYv7O%2Fwl4ZxteajhBy9mpSaLQZ%2BjlRz9YZOca5lqLwbk1vhQvPo8uATSNbayGCjVpu6dFmszI09lXnDYW8eDaHIt7iOchPHXq56AnZC80rFiFv%2BItGkInkWwHiNHLTpLrqzJzALTYjaa3QxcREAO41EDpX9mQPPuAXQ1E3dxsScn12DjcrEmAAXd1TKaIgO9Z8hRtlelp%2BIkFmzvRgL%2BmNjvLSNfA0TibK%2BuIbMH8mPCByVx%2Bg2%2BcYf%2BV%2FB9M3ui7Q9mKYXX8%2BKjtKwqA1ppO9rNoRTrVJ7yjHC1uaaUO9Wf%2FBWVD4nNWB6jLk9hVD%2F3pKYti%2B715lD1m4sg9xgKLuRaQrP4L%2Fulql%2BGYKL57YYTmkiWYR8AbXMsKnh%2BgB7ij6lycS2aIj3Nj0BRYBxWQZUZGqxX7%2FPOkhmUw%2BEn4K0XE3uEKmzY5uU6qHvJTiltXYISb8Uv3seycWTVFyO149r4CWy0N1YH2Xe7HJVrWWpaOO%2FPQe%2Fq2Cf0jgUyYoeX3zVhVhiIm7HrQT1HU3FfOWOOs0H0jf9H6zlIkulVo7C5GpK8Jm451Gya7fYcK6UJZYIAARWBMLORNWqPqQRO2Aw1sneyQY6pgEHodJTb%2Bt9Gmk5nCJJpahZ8XPizkqXrIdsflOAcf5pjnOqjAB5bSF9N4bTHriu9OSMQyARcTWmciA6bRWR%2BsUIWgWgTlQAuqUNBcY%2BoHk2p%2FFUaR5oeErm2RVwLttBlqEyUgyVHWr8WMjs4DImup7Qhw2%2FexI75fNjr22voqaYLexitYX6MbmaL5CQYWzw9IVEwaTqX34k6mJRNb9H23qmXan3OLlw&X-Amz-Signature=39829554815a3e2554bfa989aaf350339ff7805ad32e713f6a974c87fab0c8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BDPN47%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwkRw4tgAOMZrpL3oaFlz1CxhJ8wPoWoCLi108CjMlRAiAZw2G7VJgTavfGCLrRaJX3TFOpe8gSqH3HqlefdeDlrSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmWS4YJSb6QAB5doKtwDqB3T4PfOgC%2BRvF9fk%2FYLzGuGSJ9tj%2FFxzxp6PzYv7O%2Fwl4ZxteajhBy9mpSaLQZ%2BjlRz9YZOca5lqLwbk1vhQvPo8uATSNbayGCjVpu6dFmszI09lXnDYW8eDaHIt7iOchPHXq56AnZC80rFiFv%2BItGkInkWwHiNHLTpLrqzJzALTYjaa3QxcREAO41EDpX9mQPPuAXQ1E3dxsScn12DjcrEmAAXd1TKaIgO9Z8hRtlelp%2BIkFmzvRgL%2BmNjvLSNfA0TibK%2BuIbMH8mPCByVx%2Bg2%2BcYf%2BV%2FB9M3ui7Q9mKYXX8%2BKjtKwqA1ppO9rNoRTrVJ7yjHC1uaaUO9Wf%2FBWVD4nNWB6jLk9hVD%2F3pKYti%2B715lD1m4sg9xgKLuRaQrP4L%2Fulql%2BGYKL57YYTmkiWYR8AbXMsKnh%2BgB7ij6lycS2aIj3Nj0BRYBxWQZUZGqxX7%2FPOkhmUw%2BEn4K0XE3uEKmzY5uU6qHvJTiltXYISb8Uv3seycWTVFyO149r4CWy0N1YH2Xe7HJVrWWpaOO%2FPQe%2Fq2Cf0jgUyYoeX3zVhVhiIm7HrQT1HU3FfOWOOs0H0jf9H6zlIkulVo7C5GpK8Jm451Gya7fYcK6UJZYIAARWBMLORNWqPqQRO2Aw1sneyQY6pgEHodJTb%2Bt9Gmk5nCJJpahZ8XPizkqXrIdsflOAcf5pjnOqjAB5bSF9N4bTHriu9OSMQyARcTWmciA6bRWR%2BsUIWgWgTlQAuqUNBcY%2BoHk2p%2FFUaR5oeErm2RVwLttBlqEyUgyVHWr8WMjs4DImup7Qhw2%2FexI75fNjr22voqaYLexitYX6MbmaL5CQYWzw9IVEwaTqX34k6mJRNb9H23qmXan3OLlw&X-Amz-Signature=f56184c557fc715523eb4ea60a82b19358bb21cf24f166dad971d3633ad72421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

