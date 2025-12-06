---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XUGPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXL139BA6beb89sKV3eHhUKxtIoeL7xwEMMKcwIziAXgIgLc4NOgCB0fvr44s2C%2BXpFnF5pjc1E1qrhQhoP1zmpEsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCA1HZmYy3ZyBBMLSSrcAxRViEPbDzPhuDvbBbGRbqs5%2FDJV962R48UEBJOELSHKAqHMoD2zUud6aQmYOV5CUyZFyvu3NKOMlI%2Fa8iiOShtn%2F%2BNH7RKfK9QpPykt8OQUdvpCJGtXPMctxUQImupjp7nRNALkvfXE3e9xylVK%2BvFA%2FhagMsC%2F4gJJBOyKsjqyVvLMfDJL%2BnEDBliUDMEBEEQQ8EJcVsugCz4ynCQcYrHldgbrVjGGJGDJbNIhLo74S0H0Dip%2BLHBje%2F92lYOx%2FjYakM%2F3kRZe0j32tpQoTln1rq1zzztyJ8GcFXJS8FZ23cIx1Zft17J5dSKidwcJhn7giDFi%2BUx97YuO6xWNmy0TTYaQ9NHUwtiOhI3O84OIYE0xwLKBIdOq7%2BROEA8b97iRq8vXzwwCGd3Fat6QkSmziWaqL1gFb9pRNe6XtG6vSiP4oUZwB2WX7f219HnIIetwjEYg8n4YK1eEbTT6kUY1EGpqFNDwywWPKtT5r2uXtEAasYLKC6Bv9O0YFFTjPVWxso9hkYMj526R58%2BmSJbNBBzp8HilShl4PszbWyhL1IY7rQLhGveU45rqTSpn9bYaMPlcbd9JZX%2FVV%2BnUe%2FkeL9w5YZzjMWdRqcaX3VfemKAoeQ1QXk%2BtDy7nMNvJ0ckGOqUBNIbs1EsUhowge%2BnwAZF8%2FdVX563MkJS%2F8UHyYxP2CDf0u9%2BQVKbJHaahyzT1MeCI2YSycSx8%2B2m6uVS83KuwYd%2Fn9NAQxvxx3wYt4TmZ7XX4xUzIvGgvqUy2WTAQ%2FeZYw9krYX6Iauu8e%2BX2armtOg5p1%2FpEzcq%2BiwwoOFQo7zu1z7SNtq%2FSRfjZabedaieZY8VmDuPMnZe65a7Cq%2Fv84eabSGOs&X-Amz-Signature=41d368f0424f25d218c488baaa092051e0202595a9d12c0cdbf80604d7086f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5XUGPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXL139BA6beb89sKV3eHhUKxtIoeL7xwEMMKcwIziAXgIgLc4NOgCB0fvr44s2C%2BXpFnF5pjc1E1qrhQhoP1zmpEsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCA1HZmYy3ZyBBMLSSrcAxRViEPbDzPhuDvbBbGRbqs5%2FDJV962R48UEBJOELSHKAqHMoD2zUud6aQmYOV5CUyZFyvu3NKOMlI%2Fa8iiOShtn%2F%2BNH7RKfK9QpPykt8OQUdvpCJGtXPMctxUQImupjp7nRNALkvfXE3e9xylVK%2BvFA%2FhagMsC%2F4gJJBOyKsjqyVvLMfDJL%2BnEDBliUDMEBEEQQ8EJcVsugCz4ynCQcYrHldgbrVjGGJGDJbNIhLo74S0H0Dip%2BLHBje%2F92lYOx%2FjYakM%2F3kRZe0j32tpQoTln1rq1zzztyJ8GcFXJS8FZ23cIx1Zft17J5dSKidwcJhn7giDFi%2BUx97YuO6xWNmy0TTYaQ9NHUwtiOhI3O84OIYE0xwLKBIdOq7%2BROEA8b97iRq8vXzwwCGd3Fat6QkSmziWaqL1gFb9pRNe6XtG6vSiP4oUZwB2WX7f219HnIIetwjEYg8n4YK1eEbTT6kUY1EGpqFNDwywWPKtT5r2uXtEAasYLKC6Bv9O0YFFTjPVWxso9hkYMj526R58%2BmSJbNBBzp8HilShl4PszbWyhL1IY7rQLhGveU45rqTSpn9bYaMPlcbd9JZX%2FVV%2BnUe%2FkeL9w5YZzjMWdRqcaX3VfemKAoeQ1QXk%2BtDy7nMNvJ0ckGOqUBNIbs1EsUhowge%2BnwAZF8%2FdVX563MkJS%2F8UHyYxP2CDf0u9%2BQVKbJHaahyzT1MeCI2YSycSx8%2B2m6uVS83KuwYd%2Fn9NAQxvxx3wYt4TmZ7XX4xUzIvGgvqUy2WTAQ%2FeZYw9krYX6Iauu8e%2BX2armtOg5p1%2FpEzcq%2BiwwoOFQo7zu1z7SNtq%2FSRfjZabedaieZY8VmDuPMnZe65a7Cq%2Fv84eabSGOs&X-Amz-Signature=a5902e4d1cb7402e1ab3811d349e7217b060022b6ded36d79e6a1eff4c73252e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

