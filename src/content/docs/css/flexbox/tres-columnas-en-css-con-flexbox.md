---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHN4HRM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzHqSOEvHa0Zaljin9893Td7iqlBXKKAcAdo3jwvXarAiA%2B4qVPWIGBr3K16o1tQEHhF9vDnn%2FnuT%2FozEDLayLBtCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvlxx4FLp0DT%2BdNgKtwDl7Saag7gnrkhPssoafOmrS3KXQ9B7XEMPv7ePP7%2FnbU9Fc9wcd5Ix8C9TJnnsV8yJSVI%2Bpp9A5BeA8rkRJZYl5hkRKcFVBwdL0luekEegPLEzjw2uk7uS5pllyh62NeRH02v%2FfNtSG42y%2BCx7ebn2KMIyLmyppnYcihiEH%2Fea9a%2BOrk1vmybx1YGxy8k53B6vN6DTNQjDTh2g%2B%2BiQ%2BDz3OPscQr2SIcx2sxua%2Bbzr2OQLtnWqd3vvURW7ZS594imDnFmOFNBz1MDzc14D2V%2BYgiJsKfikHUff0N40H13LnnbJgvAxLR2C2C%2FKXSslq%2FFwKspOYbopo2DntgoGGHOUcd8Uv%2B6mhRzfdKiWeoG31PlFNjO%2BlHdIJkUC7T3Cs4zBe6JLEia7T1H76ZhOdBhprxaNKa4%2BdIaqp4gDiBFbhrQQ8raHswzb80Vds4EtiUOuawLc3gTNq3gFOZJKVkTUzj9lLKNnuakpeWN0IFVhv1jYXEOpvIApOK9Fo574n6RIpuIlMM4cyrBtNFi12ydw7IeQnYQiM8KJvqwAeJIVPPb0rK2JjyPYe4jIxpbrzA%2FC4FY5ZTBKXOKLlc4A11h1VRGQAcBxSjAe9Jh7Ph2%2Bx6rmvyNbaoekdjKnHMwrYffyQY6pgF3k6pyfMxNPeLbCJxDPENfGWXErRUnNW3q8Q1G6CnrGcyYirlh%2FBKWYO2AJECQZYftVK36jzj%2Bq1KKlAFu3QLwNlQPgEHOHz3GVLI52pbRSsm5d9CTw7z9iT2VgN2rXcIE%2B1d3%2FhyQj4IV0Blmci%2FhqjcTa0uHYSrYEgg%2B9vWqxzjKyPPggxb8f2sZcFBVKIIYxfK4nvGT4ZGW3UnVVzRtCyEwC0mV&X-Amz-Signature=b56aa6fbba541ccb4f97940385cfe1d9706015a76c9a3ee00b4790de090d2e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHN4HRM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzHqSOEvHa0Zaljin9893Td7iqlBXKKAcAdo3jwvXarAiA%2B4qVPWIGBr3K16o1tQEHhF9vDnn%2FnuT%2FozEDLayLBtCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvlxx4FLp0DT%2BdNgKtwDl7Saag7gnrkhPssoafOmrS3KXQ9B7XEMPv7ePP7%2FnbU9Fc9wcd5Ix8C9TJnnsV8yJSVI%2Bpp9A5BeA8rkRJZYl5hkRKcFVBwdL0luekEegPLEzjw2uk7uS5pllyh62NeRH02v%2FfNtSG42y%2BCx7ebn2KMIyLmyppnYcihiEH%2Fea9a%2BOrk1vmybx1YGxy8k53B6vN6DTNQjDTh2g%2B%2BiQ%2BDz3OPscQr2SIcx2sxua%2Bbzr2OQLtnWqd3vvURW7ZS594imDnFmOFNBz1MDzc14D2V%2BYgiJsKfikHUff0N40H13LnnbJgvAxLR2C2C%2FKXSslq%2FFwKspOYbopo2DntgoGGHOUcd8Uv%2B6mhRzfdKiWeoG31PlFNjO%2BlHdIJkUC7T3Cs4zBe6JLEia7T1H76ZhOdBhprxaNKa4%2BdIaqp4gDiBFbhrQQ8raHswzb80Vds4EtiUOuawLc3gTNq3gFOZJKVkTUzj9lLKNnuakpeWN0IFVhv1jYXEOpvIApOK9Fo574n6RIpuIlMM4cyrBtNFi12ydw7IeQnYQiM8KJvqwAeJIVPPb0rK2JjyPYe4jIxpbrzA%2FC4FY5ZTBKXOKLlc4A11h1VRGQAcBxSjAe9Jh7Ph2%2Bx6rmvyNbaoekdjKnHMwrYffyQY6pgF3k6pyfMxNPeLbCJxDPENfGWXErRUnNW3q8Q1G6CnrGcyYirlh%2FBKWYO2AJECQZYftVK36jzj%2Bq1KKlAFu3QLwNlQPgEHOHz3GVLI52pbRSsm5d9CTw7z9iT2VgN2rXcIE%2B1d3%2FhyQj4IV0Blmci%2FhqjcTa0uHYSrYEgg%2B9vWqxzjKyPPggxb8f2sZcFBVKIIYxfK4nvGT4ZGW3UnVVzRtCyEwC0mV&X-Amz-Signature=81873e46a65df4ad18262e372b7826095064885daa89477a7a338981319fc942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

