---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHATOKBZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx3nUiLNTULRStlp14fVQfCt%2FNKCqdr5cO22YLx3te5AiAVOfLAvk3WQ87tPrqVaKO3OKY29jbJE%2FEvr89OEMqkSyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMzRnaLauvxgXJdUOMKtwDjVY5NzbW1nLo00MjmmL6YhV%2FoqbdSf7jKR2GdRDFjX4JPfR90PTNEFXTfJALNEbqRXYd9ZIoolNarkXdfgYmRSlRx2YcwwJli1BStvDA2%2FAh86YdAOy0DzRSI7FKgWaqVCZU3MuuIiGol4wknIYRkENTxCJuAnXnVIlwp5tEekh3j%2FFJJn6gFtCc2QNyIEiYcL2MAJHolAj5F6xjTVrT0IIgvavqq%2F8ZyY5pNxyUs6UHLMRsUWcrg%2BagGtgY%2Fk%2BDvPbKujuaXZRVk9pWqAQuw2TmKOybMoWYe%2B5UnUsdylH0m6DO0wbyTAZfSPUPTEGpGuxAUmatKSpYPTIK0hD2j3gpW2jEH3Yg%2BkzsqQb3T9aIHjObyNm1PjYRvuZCiiKwXWQRmkRqazc1KVoasx7UcosgQkymiVBLluTpNXhJLv8rIBjivOPqnza95inI3DbXYbGrskFzTUonmJf%2B2isZjeA0jns5bsbYhUuEuZJv2ikiPtvXjSSvyrYrzGi8xZ%2BVBmJgMLuXJpc3l8gJqOR%2BdmCAJWxZ5iUNHO3jiBluIrWaQm72yvl69MWb8%2Bdt6gp5zjz1Un%2BmbE1EpyRuxA%2BHNlUeA0wH2RyU%2BO38oCSnHBQFila1%2F%2BeSvhRQLIEwx%2BvPyQY6pgEbbfUh7d19uQ09H4sb0%2Byfiq9lYEH5gduOdGSNDL5b8sV5CAufpfCVd4Uaka9vAED3aGUj3KiZKdMAVwylf98f0tMUgZ%2FA0L4eiiQGUcytgYssBIym%2Bp5zgOWx42mFIU6NSwWbSa2v6dYRdmQO1jGqzReonkkHeKf80ptF5C1eUJV17vaj2L66sH5GIjyh%2BqdELg%2FPPWbsHuiLjw46eI3t%2FCJN6tko&X-Amz-Signature=d5a974e371362e913b1278ed137581699b64132a3eed5d065acd6403a668ad3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHATOKBZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDx3nUiLNTULRStlp14fVQfCt%2FNKCqdr5cO22YLx3te5AiAVOfLAvk3WQ87tPrqVaKO3OKY29jbJE%2FEvr89OEMqkSyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMzRnaLauvxgXJdUOMKtwDjVY5NzbW1nLo00MjmmL6YhV%2FoqbdSf7jKR2GdRDFjX4JPfR90PTNEFXTfJALNEbqRXYd9ZIoolNarkXdfgYmRSlRx2YcwwJli1BStvDA2%2FAh86YdAOy0DzRSI7FKgWaqVCZU3MuuIiGol4wknIYRkENTxCJuAnXnVIlwp5tEekh3j%2FFJJn6gFtCc2QNyIEiYcL2MAJHolAj5F6xjTVrT0IIgvavqq%2F8ZyY5pNxyUs6UHLMRsUWcrg%2BagGtgY%2Fk%2BDvPbKujuaXZRVk9pWqAQuw2TmKOybMoWYe%2B5UnUsdylH0m6DO0wbyTAZfSPUPTEGpGuxAUmatKSpYPTIK0hD2j3gpW2jEH3Yg%2BkzsqQb3T9aIHjObyNm1PjYRvuZCiiKwXWQRmkRqazc1KVoasx7UcosgQkymiVBLluTpNXhJLv8rIBjivOPqnza95inI3DbXYbGrskFzTUonmJf%2B2isZjeA0jns5bsbYhUuEuZJv2ikiPtvXjSSvyrYrzGi8xZ%2BVBmJgMLuXJpc3l8gJqOR%2BdmCAJWxZ5iUNHO3jiBluIrWaQm72yvl69MWb8%2Bdt6gp5zjz1Un%2BmbE1EpyRuxA%2BHNlUeA0wH2RyU%2BO38oCSnHBQFila1%2F%2BeSvhRQLIEwx%2BvPyQY6pgEbbfUh7d19uQ09H4sb0%2Byfiq9lYEH5gduOdGSNDL5b8sV5CAufpfCVd4Uaka9vAED3aGUj3KiZKdMAVwylf98f0tMUgZ%2FA0L4eiiQGUcytgYssBIym%2Bp5zgOWx42mFIU6NSwWbSa2v6dYRdmQO1jGqzReonkkHeKf80ptF5C1eUJV17vaj2L66sH5GIjyh%2BqdELg%2FPPWbsHuiLjw46eI3t%2FCJN6tko&X-Amz-Signature=a8638b99e401148a20e0f271572266f1c2b2509a416142856d035f937a0fc601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

