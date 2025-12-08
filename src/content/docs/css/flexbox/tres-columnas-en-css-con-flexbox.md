---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2FBQAZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQVXvAfabQeh7TrmoQKQSa2ixcQpcZWFe5nKjDzSCUAIhAOXVDkG67%2FGZCLPpJ7AmcQekO3Lkgk4t%2BRgc6I%2FANrJ%2FKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY47M5BwFvL79Ldosq3AO62uw%2BeK2C3y7PonFIzds4L57GWqhv4eb2RJg6%2FX0q0X6mHItISTBq1KcragmOc3nFiqY%2F8s0uBEE6dzWmlNADUdOqU5lGfxan5OZEu9OYs8CC4%2BAE%2BWqsacbjDv1oq1UsaNtGSttcXwmXbqHiAVQBvRsuaVqxb%2BmT2qXFe8%2FP%2B4UczBSJbN63oUN5Dlm4F7k9I%2BqH0%2BrubMU6k%2FS5ZH6sZw%2FqsK1QBje010O1iTsmAVT9iBe%2B8VfFQ72vPjoym6LEQ9U9M9pBAvJbtK6jskCp5NHQCOL%2FzEazm7g4sBjq3VskRwwsEHfjJJ3W8tkztEdsidHp1783ItFKZcFQZ3V4KKwfU3GyHSTauf5Dubi7VsH0w24waMFwFpLpGGg5ZUp6%2FaKQIUIkstL5QUkA2MldcFZDgKCB%2FBoUTM%2FAi7S0G5eyOOYgYnnVzJWuwnYN9Q6v8PpSsdPFnKWKCJSn5Swd7NKfPb5E%2B5IlXFj%2FAxyR1PPA0ajVDdJ7BVGSO5o9xSOhr%2FNFhkG5%2BQfmykvQx7y%2BIEiGXvRR8MBnfl%2FTJl0VheCXVIvZ1qE1GPsPI2xQBdyljIfoUZFLeRDoPFa0%2B1snJPlfoyH%2BiNr1dk%2Fi1ddMD3XXwgUMMC1s3IP4UTDDs9zJBjqkAY7NHh8tFLOMzNqHeSFyPXICqErRBnjOtLJH7XYMcsyhBEHwaLj6z66JzDHG6Rt0vGLX%2BHN0XWuVEsIegttChW2JVoCaKycYywlXI575re31oj2UFUbMxHg%2FX7hZmhmqeAvGHug1vrO2xwIBpAJeBzJngQVYuJYZMqb9L1aSeVPEPqzJ3IRqRQGjrT7q43B2qWJfVhUdg884NybbWv3SK4VFavRR&X-Amz-Signature=687938b93ad4213caec75be67220aa9704209767e04e9c8ecbbed7ce9e5f8e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2FBQAZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuQVXvAfabQeh7TrmoQKQSa2ixcQpcZWFe5nKjDzSCUAIhAOXVDkG67%2FGZCLPpJ7AmcQekO3Lkgk4t%2BRgc6I%2FANrJ%2FKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY47M5BwFvL79Ldosq3AO62uw%2BeK2C3y7PonFIzds4L57GWqhv4eb2RJg6%2FX0q0X6mHItISTBq1KcragmOc3nFiqY%2F8s0uBEE6dzWmlNADUdOqU5lGfxan5OZEu9OYs8CC4%2BAE%2BWqsacbjDv1oq1UsaNtGSttcXwmXbqHiAVQBvRsuaVqxb%2BmT2qXFe8%2FP%2B4UczBSJbN63oUN5Dlm4F7k9I%2BqH0%2BrubMU6k%2FS5ZH6sZw%2FqsK1QBje010O1iTsmAVT9iBe%2B8VfFQ72vPjoym6LEQ9U9M9pBAvJbtK6jskCp5NHQCOL%2FzEazm7g4sBjq3VskRwwsEHfjJJ3W8tkztEdsidHp1783ItFKZcFQZ3V4KKwfU3GyHSTauf5Dubi7VsH0w24waMFwFpLpGGg5ZUp6%2FaKQIUIkstL5QUkA2MldcFZDgKCB%2FBoUTM%2FAi7S0G5eyOOYgYnnVzJWuwnYN9Q6v8PpSsdPFnKWKCJSn5Swd7NKfPb5E%2B5IlXFj%2FAxyR1PPA0ajVDdJ7BVGSO5o9xSOhr%2FNFhkG5%2BQfmykvQx7y%2BIEiGXvRR8MBnfl%2FTJl0VheCXVIvZ1qE1GPsPI2xQBdyljIfoUZFLeRDoPFa0%2B1snJPlfoyH%2BiNr1dk%2Fi1ddMD3XXwgUMMC1s3IP4UTDDs9zJBjqkAY7NHh8tFLOMzNqHeSFyPXICqErRBnjOtLJH7XYMcsyhBEHwaLj6z66JzDHG6Rt0vGLX%2BHN0XWuVEsIegttChW2JVoCaKycYywlXI575re31oj2UFUbMxHg%2FX7hZmhmqeAvGHug1vrO2xwIBpAJeBzJngQVYuJYZMqb9L1aSeVPEPqzJ3IRqRQGjrT7q43B2qWJfVhUdg884NybbWv3SK4VFavRR&X-Amz-Signature=a1e8d13b5dbad7ee1eadd19be321d1e7a94931830537390b937ee658c762c181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

