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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3GXHCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGpkNgf2MuMlwC%2BUsNGcUeWy58rcG09TnDlvevUJGvO9AiEAr1SxNZoAdMvV7YhyRmhaxkLRDolHgjsEdD84D8TiJ%2FAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLwD7UuE1now2kXGHyrcA8SeMXfjuMHry9pprz5jC504JzX4pMRQe%2FtPbb%2BXSjFMEwMcsKTGy5tRcJAPY7U0ycwStgFqRHQ%2BrL%2FtiZuQGKAFtbzNHjkdg5jc%2F8SB0vrwLFFVmjM0kRU5UQZ6Q1xvY2WWyoo3jUhapTijec8xEzbM7q7%2BR18ISW70ss%2Bd5Jitw4iI414rwUve8e5yakQa0UFhzlmZqzZ9Nd3xDk9JDprwHkpUzG%2BVnnTbDzXNAbp8XP%2BSDGG%2F1GZmNuR%2FBFHkH3dDdhrCPV91C4B6V3nKkpGNqD5z%2B%2Fc%2BKv2TKNERlgLqWtYCJm3D5UVtiQ9o5RQx2fjeFhWNIvm%2F02kBrUELyDqx9SZd9%2F7re6ny%2B%2Fwcg4gbubOx21cUagxG0%2Fm0%2BDsp4%2F8EM31iso8LuMUU3%2BEjLBPfnCLO21Q6N6m667u2ipJnkk2IVa8i%2FLtzdVg6xRq7lJPiQw52GXKF0spxJNrcHEN65UOKijon0Bht7bdjmq%2F%2FT8oM1LoykaeiSkwGQRNoXSv960yXEaIwu%2B8EMKWAVcEJkXU2e4m4JqIg58Ot%2F6lN5FHfzBr0ko4%2BZntw%2FBHe9oyQ16Pb2CfvK0HBDFxiiEfPmr4%2Fyafn4bDjATt7E49cBaQjAlidWoFbUg%2BFMLXpwMkGOqUBV2bgqZvTgv6osneP6u6IHQbq8qscgmdU0fCSRgKw5YSvuZjFvSLah0PHYOO79OBw0NdUvozAtQIXi9443bm92%2BtmOMbmhNIOwc0BqB3nGzAI7pGhVcBTCaAlEhVWQQrpOetXoRg1unqoWdOhICl6RLkaYw08pZrHB0XZaBlNR7Y28NUJSpfFgRx%2FHDyl%2BP%2FWLgRRYRjybGGD2n8MPdH60XXuqpAM&X-Amz-Signature=e4a0bfa764cc5503c7010bdc51d6e54a61108ee082820205ac18dfd7a0f93c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB3GXHCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGpkNgf2MuMlwC%2BUsNGcUeWy58rcG09TnDlvevUJGvO9AiEAr1SxNZoAdMvV7YhyRmhaxkLRDolHgjsEdD84D8TiJ%2FAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDLwD7UuE1now2kXGHyrcA8SeMXfjuMHry9pprz5jC504JzX4pMRQe%2FtPbb%2BXSjFMEwMcsKTGy5tRcJAPY7U0ycwStgFqRHQ%2BrL%2FtiZuQGKAFtbzNHjkdg5jc%2F8SB0vrwLFFVmjM0kRU5UQZ6Q1xvY2WWyoo3jUhapTijec8xEzbM7q7%2BR18ISW70ss%2Bd5Jitw4iI414rwUve8e5yakQa0UFhzlmZqzZ9Nd3xDk9JDprwHkpUzG%2BVnnTbDzXNAbp8XP%2BSDGG%2F1GZmNuR%2FBFHkH3dDdhrCPV91C4B6V3nKkpGNqD5z%2B%2Fc%2BKv2TKNERlgLqWtYCJm3D5UVtiQ9o5RQx2fjeFhWNIvm%2F02kBrUELyDqx9SZd9%2F7re6ny%2B%2Fwcg4gbubOx21cUagxG0%2Fm0%2BDsp4%2F8EM31iso8LuMUU3%2BEjLBPfnCLO21Q6N6m667u2ipJnkk2IVa8i%2FLtzdVg6xRq7lJPiQw52GXKF0spxJNrcHEN65UOKijon0Bht7bdjmq%2F%2FT8oM1LoykaeiSkwGQRNoXSv960yXEaIwu%2B8EMKWAVcEJkXU2e4m4JqIg58Ot%2F6lN5FHfzBr0ko4%2BZntw%2FBHe9oyQ16Pb2CfvK0HBDFxiiEfPmr4%2Fyafn4bDjATt7E49cBaQjAlidWoFbUg%2BFMLXpwMkGOqUBV2bgqZvTgv6osneP6u6IHQbq8qscgmdU0fCSRgKw5YSvuZjFvSLah0PHYOO79OBw0NdUvozAtQIXi9443bm92%2BtmOMbmhNIOwc0BqB3nGzAI7pGhVcBTCaAlEhVWQQrpOetXoRg1unqoWdOhICl6RLkaYw08pZrHB0XZaBlNR7Y28NUJSpfFgRx%2FHDyl%2BP%2FWLgRRYRjybGGD2n8MPdH60XXuqpAM&X-Amz-Signature=9cb76c6a0baa9901f6e4c74c2f65e0a6135aa4e9334bfd1428722526894499c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

