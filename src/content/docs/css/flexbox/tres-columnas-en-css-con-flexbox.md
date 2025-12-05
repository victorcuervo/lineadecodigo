---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVKFM7D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSzwLPOZU8V56hAXeT8Ovk2fyMZafJ9z%2Fzk1asKLjO1AIgTLORfLaVDo2TPPT035p8XVyAC64CIjPiq6FsGTPrI1cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIFpV%2FrLr4XQ2fAdUSrcA%2B8P3jkiREIFH1xH8SJquWbr7vgmkVC2QsLE%2BTANY0N3r%2FR%2Fi93oBGBONwDxLaCP%2Beqi320xZxHa0vERI5%2BfXdxiSzJovCGbl03lPxBng%2FCHP30R1LzJ5CHYPmD0D5b7R7j%2BU2P8QVvFfM9MeVXUgOULx9o4hWmuHQhTG9cdP0v5Z%2B9OPYmVgznwl4IL7Vrd92BJMb0Ylq086WthlJeKdFcjr%2Fhw6UB%2FdThk2YOxS5QGwonLXuRSF1ur3oelJFQxT7lwvTOfqNGxyhV4zcjc4dEd1qriUOpxkOW37btuoVx17mOtuDt3RMPmZy%2FC0U5k76XdC4bnO1IxLgnh07CzNuXzhnkRXm9WGf%2B2sGs%2F%2FFbRB%2B%2FRI0Vk2aHSbUkCVLOpbm%2FXLJBjPmTkoUSX6X18njx%2F7FkHcljpZbyhQjsXkjO9%2BWd73OGkW1rCgvyxR3lG945UHt49OZCPCf2xAt2JT%2BrW9A17eaKOMyQ9kBOjrJWKv2ljc9%2FFeYXH%2Fj8UqwN2fFahQCj7bxN0X%2FJ3Uy7AnxegRdmTSwy7bhKgVWS8VMs9MPrsYz%2FL7XitvoeHc2EtdK0GdZIo2o15Sb2a99kXtpgQtW8R0Yq1NCL5%2FOeDtLlm35EtpaLR%2B7WZ8uIDMIuxyckGOqUBvpA8XfNVt1zCq3dOznWZY%2Bp37mzRJKf7VAlyoz%2FmQ3c0OepsA%2FwXhXfMjWWT566wyMlKseqHoneRL4FdXrE1PZUpxGlZSp%2BqIqmrGAt%2BrWdE6celuA8HRmWeHdIP5zWV8yFMYM7f4Eny2vEpJ8vTZUIquauysGHexOxOZTvth8yUbHBCsk8ROAm08kTjKaJifVGUKS1jWgcCuFt2b106YUWIPbEe&X-Amz-Signature=9dea4677c53293c20952b52a9232570e1df2347ddc8000ce2e77f3b3ed37d38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVVKFM7D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSzwLPOZU8V56hAXeT8Ovk2fyMZafJ9z%2Fzk1asKLjO1AIgTLORfLaVDo2TPPT035p8XVyAC64CIjPiq6FsGTPrI1cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIFpV%2FrLr4XQ2fAdUSrcA%2B8P3jkiREIFH1xH8SJquWbr7vgmkVC2QsLE%2BTANY0N3r%2FR%2Fi93oBGBONwDxLaCP%2Beqi320xZxHa0vERI5%2BfXdxiSzJovCGbl03lPxBng%2FCHP30R1LzJ5CHYPmD0D5b7R7j%2BU2P8QVvFfM9MeVXUgOULx9o4hWmuHQhTG9cdP0v5Z%2B9OPYmVgznwl4IL7Vrd92BJMb0Ylq086WthlJeKdFcjr%2Fhw6UB%2FdThk2YOxS5QGwonLXuRSF1ur3oelJFQxT7lwvTOfqNGxyhV4zcjc4dEd1qriUOpxkOW37btuoVx17mOtuDt3RMPmZy%2FC0U5k76XdC4bnO1IxLgnh07CzNuXzhnkRXm9WGf%2B2sGs%2F%2FFbRB%2B%2FRI0Vk2aHSbUkCVLOpbm%2FXLJBjPmTkoUSX6X18njx%2F7FkHcljpZbyhQjsXkjO9%2BWd73OGkW1rCgvyxR3lG945UHt49OZCPCf2xAt2JT%2BrW9A17eaKOMyQ9kBOjrJWKv2ljc9%2FFeYXH%2Fj8UqwN2fFahQCj7bxN0X%2FJ3Uy7AnxegRdmTSwy7bhKgVWS8VMs9MPrsYz%2FL7XitvoeHc2EtdK0GdZIo2o15Sb2a99kXtpgQtW8R0Yq1NCL5%2FOeDtLlm35EtpaLR%2B7WZ8uIDMIuxyckGOqUBvpA8XfNVt1zCq3dOznWZY%2Bp37mzRJKf7VAlyoz%2FmQ3c0OepsA%2FwXhXfMjWWT566wyMlKseqHoneRL4FdXrE1PZUpxGlZSp%2BqIqmrGAt%2BrWdE6celuA8HRmWeHdIP5zWV8yFMYM7f4Eny2vEpJ8vTZUIquauysGHexOxOZTvth8yUbHBCsk8ROAm08kTjKaJifVGUKS1jWgcCuFt2b106YUWIPbEe&X-Amz-Signature=ce537ef8d1dc1576557cac19364a1078239a01a35cb877a1f1a4f23cd62104d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

