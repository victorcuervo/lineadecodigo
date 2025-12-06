---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYH6HUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKrztB%2FVfxYsdR9RZuxpwppfKzXa0MGrFnh9DecNkPrAiAqEsCR8GqoZtdWh2cYBsqPqyd50IjBcCyg8Zt9d9AzYSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1e5YrAAU5RRzfn%2FTKtwDKGbrUbQ39JtRaqHetzJj5ecPqGEbviMhtDa8cRLOx4eDjf0irfKIOpQensLDPxpLm0YJ66thJJ33magXJ41A1XJ1kTOvABPYLseX7xRKcRc8aZattHCU6hH%2FUoU%2FtzJCoaizSV8pFBDTy%2FJfHh3YiNZr%2B2TSs%2FxFbH9GJJt%2Ff7FYo80OFqZBPxQiB%2BgsIgapYXc%2FcB%2Bz2E1UWqoqLCzaiGP5NRhAu06CuAk0KI%2BpCZJxVvcKuZ5Uzi09udL2J5brdIXVluO0qOlmw8ePkBNk8b1qs6oh6BVp04EuYkyqDoEboYAsDw4hjnsJC6dNR26KS0b%2FH1H0L3zXzJoflQxlNvNWXYn2wq3iy8bExuuQMDPyW%2Fqul1tpmycl%2FIY%2Bc1Yvuo6aTTtQEkxNALsq3ClMvRNIflTIrz0B%2Fgc95c0ItLt3P9qZQFpOFElqSWO5luKHLMz9vkUqORLgJo0uxbQSLtLptHJPeSxjxx6zMJYHiYQ%2BfjwkqUVZXWmiUDtgISNcoTeGB%2BZrma4PoGT8k%2FBIBoZIv%2BHIPFNpxVRMuzKLQDMPDf8FzlO01CN1m4MLrT%2Fu5s1U6D0oR59BwdPhgoDKhGo2jvzfoBtZBIHNPaK%2FEyxmojO9lz358DWBnosws8zRyQY6pgERbvAuSCEPwKq2qxqfc%2FGyFM5uFTjygxiNRxukbsDJmNV4l9%2BlsklYfI%2F5LHs4hzBjO1T3L%2B0tUhAFhxed6QkhXQcajcLfxZ%2FNbh5bAgLNggjKzT7kuYbqTKNja%2FDfiTUu%2BZ2NNHnvy8hr0qOwk%2BjVPMkOZtxhkRUd7vqi9AC3ewu%2Fk7ZBsyRjDnJSIZNbS3okR7pTUhctnHhcELKSj1zM%2FqI2oULB&X-Amz-Signature=a30f30a5bcccc5d2af9c48d50e8d0a92d651addd311f61bafce1faa456ecacd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYH6HUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKrztB%2FVfxYsdR9RZuxpwppfKzXa0MGrFnh9DecNkPrAiAqEsCR8GqoZtdWh2cYBsqPqyd50IjBcCyg8Zt9d9AzYSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1e5YrAAU5RRzfn%2FTKtwDKGbrUbQ39JtRaqHetzJj5ecPqGEbviMhtDa8cRLOx4eDjf0irfKIOpQensLDPxpLm0YJ66thJJ33magXJ41A1XJ1kTOvABPYLseX7xRKcRc8aZattHCU6hH%2FUoU%2FtzJCoaizSV8pFBDTy%2FJfHh3YiNZr%2B2TSs%2FxFbH9GJJt%2Ff7FYo80OFqZBPxQiB%2BgsIgapYXc%2FcB%2Bz2E1UWqoqLCzaiGP5NRhAu06CuAk0KI%2BpCZJxVvcKuZ5Uzi09udL2J5brdIXVluO0qOlmw8ePkBNk8b1qs6oh6BVp04EuYkyqDoEboYAsDw4hjnsJC6dNR26KS0b%2FH1H0L3zXzJoflQxlNvNWXYn2wq3iy8bExuuQMDPyW%2Fqul1tpmycl%2FIY%2Bc1Yvuo6aTTtQEkxNALsq3ClMvRNIflTIrz0B%2Fgc95c0ItLt3P9qZQFpOFElqSWO5luKHLMz9vkUqORLgJo0uxbQSLtLptHJPeSxjxx6zMJYHiYQ%2BfjwkqUVZXWmiUDtgISNcoTeGB%2BZrma4PoGT8k%2FBIBoZIv%2BHIPFNpxVRMuzKLQDMPDf8FzlO01CN1m4MLrT%2Fu5s1U6D0oR59BwdPhgoDKhGo2jvzfoBtZBIHNPaK%2FEyxmojO9lz358DWBnosws8zRyQY6pgERbvAuSCEPwKq2qxqfc%2FGyFM5uFTjygxiNRxukbsDJmNV4l9%2BlsklYfI%2F5LHs4hzBjO1T3L%2B0tUhAFhxed6QkhXQcajcLfxZ%2FNbh5bAgLNggjKzT7kuYbqTKNja%2FDfiTUu%2BZ2NNHnvy8hr0qOwk%2BjVPMkOZtxhkRUd7vqi9AC3ewu%2Fk7ZBsyRjDnJSIZNbS3okR7pTUhctnHhcELKSj1zM%2FqI2oULB&X-Amz-Signature=677a620abb7494ed879b664f4b7ceaf9ef3e46e8bb4697fc32324678195de824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

