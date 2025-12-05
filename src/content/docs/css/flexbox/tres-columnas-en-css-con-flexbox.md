---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J3TFUK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRIGFQKW%2BUasogm51PMWlWtXLeaeKL9V63XhSrxysZLQIhAMWB22nXjadQJ6ivmMg5vQbkqsNhfKi9e71GUa%2F6r8WlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6mY3tpaX4RLEYx6kq3AN5mmTAIeRuQL7U9E9fjWXwMB6ea%2BU%2FDMJ9lTP8zgd1xSPFEWU3EPgw1D3ouB4OYg2dUkjiRMHPRUEUDsAQKCggWMsv57kBi8Hq4YXGREyNxpTA3K3A4CYkGqDdsZiPvj9IXQrHcfrYIbF7AiTSbg6vgt8MrjEpw3dXdlcPdUNDfsHGbxr5ufhVQv2Wk09KKJ76oGaPFzvK692cx9g26ublfQne1Y9qw0kB3TuJbAXePHaOdHO6ljYmGwPDdik80%2BJc4cTANlUT2rO72bOXGaP%2FJ%2BgzCilGPpjIwldGpoXEB4CzOM6VVxhASRVpQVnYJaj02%2F4%2Fo0tSX%2BOVf5L9UDOtutPB3S4LsUVBC8iSyBYpVnLH6JAUgBjbPqi46yIVG%2FvHTVkyFeMBs7hn1N4HyLpwB0WTWEmHaxpHkzLUKb8heXlbDKjK%2BTgEL0WLtSVrE5OkNwj%2F7zUAB6G7WxtnUxeHp%2F2ZNn5Q3Rkf3B%2BdNfl56ev%2BaUpbTb%2FkAdk4JMfIRykud4k%2BrM23FsTYkOowiR3mycNd7UCAkqMQyBmjfK7lrDjB0lwFGbLrewSZvhifjY2szlzIaRnCVcprY1hGioBmODCVR%2FUf%2F2OHE%2FNsFAAfs3KBXWKpxRlJo%2BJ2jjDG9svJBjqkAeviSWLsj8XM6iFmnsVTyp6bCYUmul82AgXAt4n%2FgTq7VhJ9%2FQ%2BcxeyWfMEYGDLKuvF3bkzMs9nsEC1SfjxP1%2BCE47doS%2BRqHAeWZOeEq0BeTsE9WIlfo%2Ft%2FZ8Ps73S%2BdU53EpgE0ZL046nt7jUCnJ8Fq1D4SkhWKmu8NjPSEVWI1V%2FqsWmRQhu2ThC%2BN8nVY%2F7PeUeYsprQoirZeGp0WOqCByxg&X-Amz-Signature=9ea979bde8cf375f86f3dc1154d5f1220a354ab3a1398024626a55535f4cd55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J3TFUK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRIGFQKW%2BUasogm51PMWlWtXLeaeKL9V63XhSrxysZLQIhAMWB22nXjadQJ6ivmMg5vQbkqsNhfKi9e71GUa%2F6r8WlKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6mY3tpaX4RLEYx6kq3AN5mmTAIeRuQL7U9E9fjWXwMB6ea%2BU%2FDMJ9lTP8zgd1xSPFEWU3EPgw1D3ouB4OYg2dUkjiRMHPRUEUDsAQKCggWMsv57kBi8Hq4YXGREyNxpTA3K3A4CYkGqDdsZiPvj9IXQrHcfrYIbF7AiTSbg6vgt8MrjEpw3dXdlcPdUNDfsHGbxr5ufhVQv2Wk09KKJ76oGaPFzvK692cx9g26ublfQne1Y9qw0kB3TuJbAXePHaOdHO6ljYmGwPDdik80%2BJc4cTANlUT2rO72bOXGaP%2FJ%2BgzCilGPpjIwldGpoXEB4CzOM6VVxhASRVpQVnYJaj02%2F4%2Fo0tSX%2BOVf5L9UDOtutPB3S4LsUVBC8iSyBYpVnLH6JAUgBjbPqi46yIVG%2FvHTVkyFeMBs7hn1N4HyLpwB0WTWEmHaxpHkzLUKb8heXlbDKjK%2BTgEL0WLtSVrE5OkNwj%2F7zUAB6G7WxtnUxeHp%2F2ZNn5Q3Rkf3B%2BdNfl56ev%2BaUpbTb%2FkAdk4JMfIRykud4k%2BrM23FsTYkOowiR3mycNd7UCAkqMQyBmjfK7lrDjB0lwFGbLrewSZvhifjY2szlzIaRnCVcprY1hGioBmODCVR%2FUf%2F2OHE%2FNsFAAfs3KBXWKpxRlJo%2BJ2jjDG9svJBjqkAeviSWLsj8XM6iFmnsVTyp6bCYUmul82AgXAt4n%2FgTq7VhJ9%2FQ%2BcxeyWfMEYGDLKuvF3bkzMs9nsEC1SfjxP1%2BCE47doS%2BRqHAeWZOeEq0BeTsE9WIlfo%2Ft%2FZ8Ps73S%2BdU53EpgE0ZL046nt7jUCnJ8Fq1D4SkhWKmu8NjPSEVWI1V%2FqsWmRQhu2ThC%2BN8nVY%2F7PeUeYsprQoirZeGp0WOqCByxg&X-Amz-Signature=89b688cffe6cb14ecd2443a8e29915cabe95be663279dacb21b6bfaf288acf84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

