---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP7XXPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDdJWI3FcDVFXEJMknj05kXRTJRGhV4roSgxKNxHTLb0QIgdEfIQDXLGo9Gw5p9Tm%2FwqceJYvs0bn4s3gMMtM86J5sq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFCn%2BNRtYp0ybf%2FgJSrcA0dxMKnGjIPireQIsWkjUZvF3Zfhzb8ZMkhgZ%2BQU47FHXg9BDzcEKKGhm0vxU0MEYzuPP3SOfeV4wGyUvBB%2FNuUZCufe3rejNYuTKnXkxWgWsaXT49HSKuG6ppH%2BbxckcO24O7PFLzEfNbwavoGJpRY2V1IafMqV2fNuyPCtVgtOpBRpC9kSxTeYx76p%2FJvqt8lVfdSNVUS8Ky00BwPhypdPC%2BIbT%2F%2BZupNnhw5TNilVThgu8kK5F1FSZ4v0vNRnu3KcnT%2FCQMyvTPCzBmpvBUVt0s9GjEhS7%2FMwtT046McNGp2Gm%2BhMSKHmjLFQ4bGBQYYXyMf5GVZ2kbyf21zdw01krFn%2F5YiMfNcGFKv4vjIilA%2F2VlskHLTrQpVPyv2UzLFqCabicQl5XXkrCNC2rSGO%2FP2MVRP573Jev%2Fd4S8ZKxGcC4Zueqa7hHfpkoCQ%2Bo2H1Ep3UotcWulCqO5dJyo%2FVFs5h6B35jl01hVBDQk%2BlkyY4Lx92wnT4CJITlsXxhCJmc0xuSxQpWyw8cIBZz8r%2FXGZxlHYNN%2BOGDmr1d7KirYl%2BKl1tzRAusMbN9XNJt767NA7%2BxRPqMgb6Afk%2Fsbc%2BNLhGVdM8LDHnRBD6FIRmH1iMwEumbKYpJN%2BCMLirxckGOqUB0xM8COYwja6smYzsDQIeV2F4sWRcu3xCNSO9rAj4oa7fg9ohx5no7n8i%2BIU6UzUjEPjTVJnby6tfjpSfqY3dOK%2Br5Zn3J5nftoqIa1LP3Fh5AZq5tJI8N3ORe%2BSSBym3QYT0QVcVoOo7Eng929tHTBWhGHfgEgVcishtsER8Jc2BpllwIRA9eSR14DAqeZWKK9UWtZw5%2BtssDExLsok4Y8uNmA%2FN&X-Amz-Signature=ebae6499c8f1a316aa3b69244c2ff9cdaf38437b93c669aff82639bff4990c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGP7XXPB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDdJWI3FcDVFXEJMknj05kXRTJRGhV4roSgxKNxHTLb0QIgdEfIQDXLGo9Gw5p9Tm%2FwqceJYvs0bn4s3gMMtM86J5sq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFCn%2BNRtYp0ybf%2FgJSrcA0dxMKnGjIPireQIsWkjUZvF3Zfhzb8ZMkhgZ%2BQU47FHXg9BDzcEKKGhm0vxU0MEYzuPP3SOfeV4wGyUvBB%2FNuUZCufe3rejNYuTKnXkxWgWsaXT49HSKuG6ppH%2BbxckcO24O7PFLzEfNbwavoGJpRY2V1IafMqV2fNuyPCtVgtOpBRpC9kSxTeYx76p%2FJvqt8lVfdSNVUS8Ky00BwPhypdPC%2BIbT%2F%2BZupNnhw5TNilVThgu8kK5F1FSZ4v0vNRnu3KcnT%2FCQMyvTPCzBmpvBUVt0s9GjEhS7%2FMwtT046McNGp2Gm%2BhMSKHmjLFQ4bGBQYYXyMf5GVZ2kbyf21zdw01krFn%2F5YiMfNcGFKv4vjIilA%2F2VlskHLTrQpVPyv2UzLFqCabicQl5XXkrCNC2rSGO%2FP2MVRP573Jev%2Fd4S8ZKxGcC4Zueqa7hHfpkoCQ%2Bo2H1Ep3UotcWulCqO5dJyo%2FVFs5h6B35jl01hVBDQk%2BlkyY4Lx92wnT4CJITlsXxhCJmc0xuSxQpWyw8cIBZz8r%2FXGZxlHYNN%2BOGDmr1d7KirYl%2BKl1tzRAusMbN9XNJt767NA7%2BxRPqMgb6Afk%2Fsbc%2BNLhGVdM8LDHnRBD6FIRmH1iMwEumbKYpJN%2BCMLirxckGOqUB0xM8COYwja6smYzsDQIeV2F4sWRcu3xCNSO9rAj4oa7fg9ohx5no7n8i%2BIU6UzUjEPjTVJnby6tfjpSfqY3dOK%2Br5Zn3J5nftoqIa1LP3Fh5AZq5tJI8N3ORe%2BSSBym3QYT0QVcVoOo7Eng929tHTBWhGHfgEgVcishtsER8Jc2BpllwIRA9eSR14DAqeZWKK9UWtZw5%2BtssDExLsok4Y8uNmA%2FN&X-Amz-Signature=b47ee7b875c17844a3d8e5add7dd009811803dd3e7521100da3ab208e34cce13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

