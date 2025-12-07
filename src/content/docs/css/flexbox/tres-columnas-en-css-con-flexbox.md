---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655BBIPAG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0bPW9U1pyP8K88%2BiNampDhYUnfA%2FldvRRioBOxibjCAIhAP6ypfrD8DEGZWj5qYUglefRkJIdO%2FerAY1l5pzZiJpEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjKFo8zIyL%2BJUxyEsq3AML8%2FPadflE%2Bg%2BVJWR9yC9VDxTQDxugCy5F%2FkCVP5ydRU7lMHFJ0D03ilCyp9bD1XpQYUpT6QpeZkZc19UPZREBUM4ujknx3MN781NrFGh8ZQaBlx%2B6H93oUscy9U5T7oyFpt8yBhXd3bu1wSxzDApi5yhUrFX7QMsNvkhtaQWW4%2FQx4uQW54xCti4A0VzefO%2FIgwr4OAsqt5NPPXZJgQIdKMQIcnqezOQfEnhkdYQowcdKjsGsSM8WavIkADx1EuiiT4yY8I5LBewL158ZMgMiDd9AHU9%2BYj%2F9ElgyobKeQE%2BilPQ4Uy2AAhy85rmZP8t0EKIGGs9ErPmrW%2B2Jp%2BAOegQr4v0fF%2FooLoxhupKo9OOQF1R39qi3nyQ62trUhejzwqlTgcJAa1Z7B53uMpJsHdwGywBTc264Apnfg5DYEwaidw7OKsKFHS34OZmTppbYHSz%2B1QnExy%2Bm%2F2GwVtkEvvJd%2BOF3BHpN1rLhyvOxgH43SGS%2FV8oLQhxtVCpCPlXqGodbc4YOQcysPjlsfc%2BfA6WFqpMnahJQXmzh165alEe9SHp7MLfETjE3%2FV5s5mEGKumAbO8tXYZmP%2B5z2NmvlGWNOqM0m5OhR4klthVhMec2M4YwLMZV85qePDCYyNfJBjqkAaWebcXuP%2BCqq1PXJWxgdMZ91hN8u16qXTJZqBbwHMMyqSgeVkuhr%2BCP1IPtDFcVBQfXnq0vG2RrjSwcbZLXGrUaubfQL4FbcXoa6D7%2Bcw7sVo3hjp5h1MDbogPWtlY%2FoV%2FwY2vz8VpnK3e0tUZPvkzwIPlXFiEn7Jeuqv1D90G%2BbRB3FB3fzptHvtdapwF4PYHk6Gfo587YkyLPUddh45iiGudU&X-Amz-Signature=b81dddd35e7ba9918a39db1bc7b17c9c47039abae5bb818b191a9be23abd2c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655BBIPAG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0bPW9U1pyP8K88%2BiNampDhYUnfA%2FldvRRioBOxibjCAIhAP6ypfrD8DEGZWj5qYUglefRkJIdO%2FerAY1l5pzZiJpEKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjKFo8zIyL%2BJUxyEsq3AML8%2FPadflE%2Bg%2BVJWR9yC9VDxTQDxugCy5F%2FkCVP5ydRU7lMHFJ0D03ilCyp9bD1XpQYUpT6QpeZkZc19UPZREBUM4ujknx3MN781NrFGh8ZQaBlx%2B6H93oUscy9U5T7oyFpt8yBhXd3bu1wSxzDApi5yhUrFX7QMsNvkhtaQWW4%2FQx4uQW54xCti4A0VzefO%2FIgwr4OAsqt5NPPXZJgQIdKMQIcnqezOQfEnhkdYQowcdKjsGsSM8WavIkADx1EuiiT4yY8I5LBewL158ZMgMiDd9AHU9%2BYj%2F9ElgyobKeQE%2BilPQ4Uy2AAhy85rmZP8t0EKIGGs9ErPmrW%2B2Jp%2BAOegQr4v0fF%2FooLoxhupKo9OOQF1R39qi3nyQ62trUhejzwqlTgcJAa1Z7B53uMpJsHdwGywBTc264Apnfg5DYEwaidw7OKsKFHS34OZmTppbYHSz%2B1QnExy%2Bm%2F2GwVtkEvvJd%2BOF3BHpN1rLhyvOxgH43SGS%2FV8oLQhxtVCpCPlXqGodbc4YOQcysPjlsfc%2BfA6WFqpMnahJQXmzh165alEe9SHp7MLfETjE3%2FV5s5mEGKumAbO8tXYZmP%2B5z2NmvlGWNOqM0m5OhR4klthVhMec2M4YwLMZV85qePDCYyNfJBjqkAaWebcXuP%2BCqq1PXJWxgdMZ91hN8u16qXTJZqBbwHMMyqSgeVkuhr%2BCP1IPtDFcVBQfXnq0vG2RrjSwcbZLXGrUaubfQL4FbcXoa6D7%2Bcw7sVo3hjp5h1MDbogPWtlY%2FoV%2FwY2vz8VpnK3e0tUZPvkzwIPlXFiEn7Jeuqv1D90G%2BbRB3FB3fzptHvtdapwF4PYHk6Gfo587YkyLPUddh45iiGudU&X-Amz-Signature=5e256bf2773b63d97c860a7e465f78e4f91a555ab0993e24ae692ddbec23812a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

