---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIHDPXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCAxV%2BenAhdahXCFHj3dSwA65DiPr53OwWh0%2BTRlB6vyAIhAPeJVr5cr1J7IrkFrdta0f1%2Bjz1M0TEHmdWQWZsCkVGSKv8DCDsQABoMNjM3NDIzMTgzODA1IgxkoGIn1txZQ5f2z0oq3AMrYNSt0M1X7ZsCoswsELHkQoZdJmt2KfLNjszmzOsGiGv0lWgtWoO270lM4o4TBNBU9LpjL40rlGbrk%2FKNmgj0%2BK3zqQXIf%2BeyM8Hi8iPPWYe62kkYsOuh3TdjemrFz%2BJxfsXfuMU6oId%2BQexii%2FWOB0L3%2FbHjv9IQMLGYzUiFlkhQcBYDZlob7PVh4CL3YlOZnzp7EOglt27Roa89h9s3MQQ1Alw40RyxWa%2BbyUjvqMP6XpEkLGimT1odUg5s4PMh8kONSnRsOs7yi3b8Uxz7SyKsdr78ePWrJCI2wAtzC0TOwvKGQKi%2Fq7HQmDs%2F0fpNUMu%2BYGhojDZ9mF5LIfB0QVrGv%2Fv3BM20dNLT%2F109%2BVDI3J1g488527lWmQBrStHooums6AhX9uY%2BLs%2FaRM7QrIdupW9CBWZndE1lqCfug9XsZDM7mZPCmB8GQ13HAKfFhAkfymYY0%2BtSFJ%2F4UOTK5vnmbanzzWumc%2Fc3ayRVqdPAZ0dyqgoFFMweZbqouVfe6NJlDbz7Qow9DHpDEYcgZY9fgGFEgTabB%2B6IAiU7MmACyG5v2srEELaIjkeSaF5bzl2Zt9t%2F9MtwbsnGjC71GSvT5mu825l6iy4DhZBq3VmYxZy7w3SLtSSYJzCO1cPJBjqkAcsE5msc99djnMgwHweBvxMnFz8spHytMXIf4FGxj7wjP0HFrz1Ivwl5PH7V%2B2zV1bWWQFKnzLzobjNSZSJ72K8S561zn70FMruIH8Oy1Tdg2H5AW%2Bow%2FQfbONYX4N6dsj1uGHretUbl8A6Fj%2BlZDTe%2F%2B%2FMfRHkE2KANRuaQGyxx1Sqwr77QbRWrP%2FaSocpVZLmRhmW%2BrZOnnj0ODZZ7Cq7LRzeB&X-Amz-Signature=f49ee05efef93dad353a137091ec7cf225a5217ce29795870fc48b80da41f793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIHDPXK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCAxV%2BenAhdahXCFHj3dSwA65DiPr53OwWh0%2BTRlB6vyAIhAPeJVr5cr1J7IrkFrdta0f1%2Bjz1M0TEHmdWQWZsCkVGSKv8DCDsQABoMNjM3NDIzMTgzODA1IgxkoGIn1txZQ5f2z0oq3AMrYNSt0M1X7ZsCoswsELHkQoZdJmt2KfLNjszmzOsGiGv0lWgtWoO270lM4o4TBNBU9LpjL40rlGbrk%2FKNmgj0%2BK3zqQXIf%2BeyM8Hi8iPPWYe62kkYsOuh3TdjemrFz%2BJxfsXfuMU6oId%2BQexii%2FWOB0L3%2FbHjv9IQMLGYzUiFlkhQcBYDZlob7PVh4CL3YlOZnzp7EOglt27Roa89h9s3MQQ1Alw40RyxWa%2BbyUjvqMP6XpEkLGimT1odUg5s4PMh8kONSnRsOs7yi3b8Uxz7SyKsdr78ePWrJCI2wAtzC0TOwvKGQKi%2Fq7HQmDs%2F0fpNUMu%2BYGhojDZ9mF5LIfB0QVrGv%2Fv3BM20dNLT%2F109%2BVDI3J1g488527lWmQBrStHooums6AhX9uY%2BLs%2FaRM7QrIdupW9CBWZndE1lqCfug9XsZDM7mZPCmB8GQ13HAKfFhAkfymYY0%2BtSFJ%2F4UOTK5vnmbanzzWumc%2Fc3ayRVqdPAZ0dyqgoFFMweZbqouVfe6NJlDbz7Qow9DHpDEYcgZY9fgGFEgTabB%2B6IAiU7MmACyG5v2srEELaIjkeSaF5bzl2Zt9t%2F9MtwbsnGjC71GSvT5mu825l6iy4DhZBq3VmYxZy7w3SLtSSYJzCO1cPJBjqkAcsE5msc99djnMgwHweBvxMnFz8spHytMXIf4FGxj7wjP0HFrz1Ivwl5PH7V%2B2zV1bWWQFKnzLzobjNSZSJ72K8S561zn70FMruIH8Oy1Tdg2H5AW%2Bow%2FQfbONYX4N6dsj1uGHretUbl8A6Fj%2BlZDTe%2F%2B%2FMfRHkE2KANRuaQGyxx1Sqwr77QbRWrP%2FaSocpVZLmRhmW%2BrZOnnj0ODZZ7Cq7LRzeB&X-Amz-Signature=425a7029b98744d1d4eb6160e1cc1e4f867a8c70d45a6627b84d33476255e428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

