---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BKTPAM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzQ9QlpVgObf7khufwT%2FHe0tVSZiRqGSt7qMDoLbhkxAiEAuhVIzmpk8h69A9FuTcc5GFN%2BsLvPK0fr12X5WgbOtrkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFdlOjuXhHBZcJXwmSrcA1kDftmOdKvmnwn0j1UIiCszIyBM2V1hKlpfgd7tSYiwvANGggqi4aQSRfhfFMnCorA9K1DRGEM02KxZTWKeecO%2BpET7AHn9yJgbu5kjX5qgn19T0RkM%2BfAcCS0VP0cYUmUnIafbJyUl1IFX2nd480kXg7jVSBucznna5WA%2F4ySdHGN4xBOpdXEfme358YeYXjY1Nw5mkSNikkTyMdapT29CdrCZHMsnA6XEYXzKBXH9UXyA7SD2y8JEEpVOso44424r0mceLZUS4uU%2B8mfM%2B04e9j4Yx50KWy%2BagVCqvqJqK3wymaX7DsZAgGqj3T6V2BSazwhWTplTB%2F3H8mIiW6dtdTFtmy1%2FK4FnFFXwj0e1KnxyqnFk0K8VCQKZXOE4vEZfOeQ8GsYP58H8SrG4%2BDJyfDKs2k7zS0WjwqvFFiB0oD4z9PhYY4iTAUtBp%2FcWj6Vy64mXa1NGZCltflF9hhK5E%2F8Tv%2BPlec5SsV45JYspzRcoYUPVQtY4HKuJzMp%2FutRDA1dcuYPA3mduVk8u3Nzhff%2BtDOOz%2BqWBNe3a68vn8o8cfl%2B3IAMlisrj0eeEoiRRWneAWD9KgwHdbvmgCt%2BGJn8g7xkJL7cl8qlHD15VFplptUYYLqkJcTOqMIvT0skGOqUBYtIB8vdTMRGK1fdT%2FXFQpX6sngEW47FbZfXyPjizpkJIwCtC7AZ6zTBO0AD79USuW9BfITFXbUUBMD0LQX6TXLh01iLLERcPFo5W%2BnOVFSi8vYKbCV0BARMQu%2BWTg9oukOB1T34Yja6bmHWgjJySSidDomhFGTQk4loC1lLM2Q4SfmhrtlHP4RNZgcBUoOBduwRlilPv27%2B2vayXKkQftQiCooje&X-Amz-Signature=31bbd4a06bd7e43e69d3f3a5eeb7344b53741bfcdc28d64da35c935f62372685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BKTPAM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzQ9QlpVgObf7khufwT%2FHe0tVSZiRqGSt7qMDoLbhkxAiEAuhVIzmpk8h69A9FuTcc5GFN%2BsLvPK0fr12X5WgbOtrkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFdlOjuXhHBZcJXwmSrcA1kDftmOdKvmnwn0j1UIiCszIyBM2V1hKlpfgd7tSYiwvANGggqi4aQSRfhfFMnCorA9K1DRGEM02KxZTWKeecO%2BpET7AHn9yJgbu5kjX5qgn19T0RkM%2BfAcCS0VP0cYUmUnIafbJyUl1IFX2nd480kXg7jVSBucznna5WA%2F4ySdHGN4xBOpdXEfme358YeYXjY1Nw5mkSNikkTyMdapT29CdrCZHMsnA6XEYXzKBXH9UXyA7SD2y8JEEpVOso44424r0mceLZUS4uU%2B8mfM%2B04e9j4Yx50KWy%2BagVCqvqJqK3wymaX7DsZAgGqj3T6V2BSazwhWTplTB%2F3H8mIiW6dtdTFtmy1%2FK4FnFFXwj0e1KnxyqnFk0K8VCQKZXOE4vEZfOeQ8GsYP58H8SrG4%2BDJyfDKs2k7zS0WjwqvFFiB0oD4z9PhYY4iTAUtBp%2FcWj6Vy64mXa1NGZCltflF9hhK5E%2F8Tv%2BPlec5SsV45JYspzRcoYUPVQtY4HKuJzMp%2FutRDA1dcuYPA3mduVk8u3Nzhff%2BtDOOz%2BqWBNe3a68vn8o8cfl%2B3IAMlisrj0eeEoiRRWneAWD9KgwHdbvmgCt%2BGJn8g7xkJL7cl8qlHD15VFplptUYYLqkJcTOqMIvT0skGOqUBYtIB8vdTMRGK1fdT%2FXFQpX6sngEW47FbZfXyPjizpkJIwCtC7AZ6zTBO0AD79USuW9BfITFXbUUBMD0LQX6TXLh01iLLERcPFo5W%2BnOVFSi8vYKbCV0BARMQu%2BWTg9oukOB1T34Yja6bmHWgjJySSidDomhFGTQk4loC1lLM2Q4SfmhrtlHP4RNZgcBUoOBduwRlilPv27%2B2vayXKkQftQiCooje&X-Amz-Signature=ec8c9fdfef8e9acd38e26c52cd341edd917188a95adfa2347f38cfe727aa4140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

