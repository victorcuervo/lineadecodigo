---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEQBWOW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwfvILWndjd0mORJYCJyJ4phSYzm6vt2n80UO8kGfthAiEApbvyOZLVIurYexVTUPMEZP7Em5jiAC11fJWY4C8hT5Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FYLsY5gvC0UAm2tircA%2BQkYVOSOy%2FDir5640v2LPSU9LFJ5nuQa3zPy%2BSS5LSdhd%2BGuntyLA7GTanZSUHcOvZTos0AAoGkLYCOQyvrBcciceXNGN1J882M3EW2LYsdg%2FVcsFZ9Ot%2FWECKO0XDtcuBpaHRyg5wSsVsWepz7nKYiiQAvYXCHVYzmcW64w5RpNY3mhuGwoG%2FIRpEE5YkXW4cFHwbkR%2B2wdsRN1Hr6s66WaKAybcqskmLawfsaoi%2FMC1l1YCb6KAkcCuQgaZ22HXt46a2F%2BEI5ELMF83D4tiqjstt9FuFEjF0RP%2BFiiBlYUijRG8Yg1tion9mruVefELAAPreW27xXl95KXzlt3fqKvi4pPDzRJcN7m%2F8jc9C4sKMCOIOaBm4weQrms7w%2F0BWMdoEfF6t4I9FscqkxzfoEPpV%2FgHRhuoSMAeVovpCR2IFJkfvtFQK6W0xtriDJhBXuzTLSLGwpltZzNmIKUOpmQoIIpBJFqu7fh%2Bhjl3DFTLPziBrJE3tUdv3MJhGBvflIF6PrASIQ5yEFuBEmm%2Fviz9ZupF%2F2KzFPt899LbXuuNSEZ37suQYbOIST%2Fq1o8ZgROcMFzglS9s6NP3PEngZL7Ir54f889ROZ5c8tPzueCbmqky0o40%2FeHhzBMJ3C0ckGOqUBlFlF7pk5URqB1J6EJLdvv3NHAYbYGGro%2B4NTQPZ5oawtDy1zHhCs4xapVqmwVn04HXf7Nx9OqTGrjFjucQrvcK9rnuVa1aznSWX9I12qu9TafjT%2BzhyNXvK0JB%2BC3q10tu2vy%2FckaDpEE%2FoqlJlLYpEYrtZGa79Lcz6BWYAFOfY2c6kpxCXgEgI5yxFogq9bvtLUIADtXDwG9CJH%2F6chuIC0NZYM&X-Amz-Signature=81a0f31937dac3d41dbe97d59d21789ffbe729d1bc0cffcf7f3cf768572e5256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HEQBWOW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFwfvILWndjd0mORJYCJyJ4phSYzm6vt2n80UO8kGfthAiEApbvyOZLVIurYexVTUPMEZP7Em5jiAC11fJWY4C8hT5Mq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDH%2FYLsY5gvC0UAm2tircA%2BQkYVOSOy%2FDir5640v2LPSU9LFJ5nuQa3zPy%2BSS5LSdhd%2BGuntyLA7GTanZSUHcOvZTos0AAoGkLYCOQyvrBcciceXNGN1J882M3EW2LYsdg%2FVcsFZ9Ot%2FWECKO0XDtcuBpaHRyg5wSsVsWepz7nKYiiQAvYXCHVYzmcW64w5RpNY3mhuGwoG%2FIRpEE5YkXW4cFHwbkR%2B2wdsRN1Hr6s66WaKAybcqskmLawfsaoi%2FMC1l1YCb6KAkcCuQgaZ22HXt46a2F%2BEI5ELMF83D4tiqjstt9FuFEjF0RP%2BFiiBlYUijRG8Yg1tion9mruVefELAAPreW27xXl95KXzlt3fqKvi4pPDzRJcN7m%2F8jc9C4sKMCOIOaBm4weQrms7w%2F0BWMdoEfF6t4I9FscqkxzfoEPpV%2FgHRhuoSMAeVovpCR2IFJkfvtFQK6W0xtriDJhBXuzTLSLGwpltZzNmIKUOpmQoIIpBJFqu7fh%2Bhjl3DFTLPziBrJE3tUdv3MJhGBvflIF6PrASIQ5yEFuBEmm%2Fviz9ZupF%2F2KzFPt899LbXuuNSEZ37suQYbOIST%2Fq1o8ZgROcMFzglS9s6NP3PEngZL7Ir54f889ROZ5c8tPzueCbmqky0o40%2FeHhzBMJ3C0ckGOqUBlFlF7pk5URqB1J6EJLdvv3NHAYbYGGro%2B4NTQPZ5oawtDy1zHhCs4xapVqmwVn04HXf7Nx9OqTGrjFjucQrvcK9rnuVa1aznSWX9I12qu9TafjT%2BzhyNXvK0JB%2BC3q10tu2vy%2FckaDpEE%2FoqlJlLYpEYrtZGa79Lcz6BWYAFOfY2c6kpxCXgEgI5yxFogq9bvtLUIADtXDwG9CJH%2F6chuIC0NZYM&X-Amz-Signature=583ba84603825c21e3b88188d81511d1f3b6fbb72ab9b4c98880bfe8ed42fd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

