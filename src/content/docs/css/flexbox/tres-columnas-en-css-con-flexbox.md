---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP36BJQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsWRvYbvzwc%2B%2FsOwwdQd%2FUieIP5dZQc1%2B8LjxhdOmgMAIgEHoWKdQZCGlQdfF%2BJjq5O3GsUrDYfDzOqzOu3fz8W0sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN8kZGRUcCsu8wtGHSrcA%2Falnckusb4VbsC801ON2UfkeNUtIDyHuB6BwSWkoRk%2B%2B7txLoGK53JueNLwSSdJ3QuU01JaWojgrxz%2FLIPSSTgefK%2F6DIcel10f1Kw6kebNaiRwlBjuiLcFmIsCOG74pwqC4cB%2Bs2C%2FavyygKhgsWofAozkrO6KcTy7YcjW7n4VccV8s7KjocfzSy82AJjUTuLSjL4CwPTEMM1xgzT5Tqjdm6DiELE%2BCkpT0MrEYO8rWVK8DmZWUGKIryZX2hVfP09s%2Frz5R1RqdMmsvizbyMO5VLMvTWQtxUFoiY4AcKsw%2FQyYkJXdM6b%2FVN74hE6DBeR7DQKcT4h32tU2dfauaK0Ahuv0%2FFK3TolO0K9r9gDlD2sLtelmOWt0y%2BHXrdM8gIeEjC0IKJlyu7KnlR63BpXIr5w%2ByhCakhso1XhESVacmCGzNRQYVr8NHo56sCb7QIUxdfJOFimACm9%2FF0AlunwGoO0LnFq33RolDhmCoYm8eZXvL0jWOchRNwjoB7jdeh9Dw6oW9Rrl04lSW8%2BV75o8oRsHO37J%2FR1hFMpympRN%2FY4Tey1t6klgI1YcP0tHKt0e5t%2FjVNw9f1buDRU6kGarFhJgCbtq8Pbq89f6u%2FCTMbCOivbi2wAX52jJMI6fz8kGOqUBFlhoQ0bvHQ7orPVmU6ZdPt5HNopBm5MpOIEoMbzBJ3wH8vO5oJfG88%2BzZdFBriiPJ6GMdANBT5MsYhFhh4czSUljZklDjLjQRhiL4YstQvoOigYiI%2FzBWORhV4T2RKGY7RhC86vuwewI27O%2BFYrA4lVFHjspaZvN8Eg8GHlyyjaFhtA85GG1xCPaoSXis6K1AAb2sO%2BVnzg6Eqj7RRDGoyn4zr%2F6&X-Amz-Signature=e55486d6f2631ce6cac475c2be23e59811a587b64032033253bf815805d250f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP36BJQG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsWRvYbvzwc%2B%2FsOwwdQd%2FUieIP5dZQc1%2B8LjxhdOmgMAIgEHoWKdQZCGlQdfF%2BJjq5O3GsUrDYfDzOqzOu3fz8W0sq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN8kZGRUcCsu8wtGHSrcA%2Falnckusb4VbsC801ON2UfkeNUtIDyHuB6BwSWkoRk%2B%2B7txLoGK53JueNLwSSdJ3QuU01JaWojgrxz%2FLIPSSTgefK%2F6DIcel10f1Kw6kebNaiRwlBjuiLcFmIsCOG74pwqC4cB%2Bs2C%2FavyygKhgsWofAozkrO6KcTy7YcjW7n4VccV8s7KjocfzSy82AJjUTuLSjL4CwPTEMM1xgzT5Tqjdm6DiELE%2BCkpT0MrEYO8rWVK8DmZWUGKIryZX2hVfP09s%2Frz5R1RqdMmsvizbyMO5VLMvTWQtxUFoiY4AcKsw%2FQyYkJXdM6b%2FVN74hE6DBeR7DQKcT4h32tU2dfauaK0Ahuv0%2FFK3TolO0K9r9gDlD2sLtelmOWt0y%2BHXrdM8gIeEjC0IKJlyu7KnlR63BpXIr5w%2ByhCakhso1XhESVacmCGzNRQYVr8NHo56sCb7QIUxdfJOFimACm9%2FF0AlunwGoO0LnFq33RolDhmCoYm8eZXvL0jWOchRNwjoB7jdeh9Dw6oW9Rrl04lSW8%2BV75o8oRsHO37J%2FR1hFMpympRN%2FY4Tey1t6klgI1YcP0tHKt0e5t%2FjVNw9f1buDRU6kGarFhJgCbtq8Pbq89f6u%2FCTMbCOivbi2wAX52jJMI6fz8kGOqUBFlhoQ0bvHQ7orPVmU6ZdPt5HNopBm5MpOIEoMbzBJ3wH8vO5oJfG88%2BzZdFBriiPJ6GMdANBT5MsYhFhh4czSUljZklDjLjQRhiL4YstQvoOigYiI%2FzBWORhV4T2RKGY7RhC86vuwewI27O%2BFYrA4lVFHjspaZvN8Eg8GHlyyjaFhtA85GG1xCPaoSXis6K1AAb2sO%2BVnzg6Eqj7RRDGoyn4zr%2F6&X-Amz-Signature=a8fe6305e9812aa656e4c75c5f96ac68660d4fa20e1bbc1782d4ae78d1f26c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

