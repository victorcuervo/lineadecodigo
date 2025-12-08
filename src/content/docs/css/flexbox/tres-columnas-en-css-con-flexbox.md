---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRVIBA2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmcoHOj0NnvzXJwLUEZ5WhhKq1wIKl65LnDYJ0FIrj%2FAiA48pMnM%2FG3OYL5qXDWeirWVTk8FnR6si1nYSJziTMEDSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLimquHqpiGHB4OkZKtwDfGWcfWTnxDOl1pdllzG%2Be59X5WHxDHXxiyk4AtebgIi%2BJG6LhGzjtdS2o1egp9zFDbM1ilJpjhTaebyS1KtB%2BdJpNlQDOTb84eGoYpUy0eyW6vQdZuIQc3bBtEcWd9sU0hip4l67dUmLntxX46xLbIbx2cwkzilf0KHJJNM2WKte7wMVgEcVDoiu3G%2BJ%2BpicLOo%2F1l0aqmAvNjlnAzRC1K5ka8s8t6o20gXiFG6zDQ7dnClRWOYjJC62T%2BSvuzT61jtKHnNa0%2BZYX8t4DuusUPv4OX3hepnJuLRnEmKi0PZCinO79DuOnfo1%2FHyg1mjrLE1RqGYW493LTqbSqwYJNsGa%2Fm3ugIMULVI7RVvrergM5c0lt8w2VdzI2SvjHtrdBy6t%2Fg01bHBr09HRJPtr%2BfcgwOBTYei2ASiI29C77PjBYKdxRuA8K%2BBdviSVU2iFLZSBB4IOrIWHwbo%2BDOJPFK9e9uNEbCSZ3bqTwtsJIH9ubMxWl2U6xr6hnw1GGOtPb%2B%2BAu1llGbswfQXiHvqUqMf%2B37FxAIZPFnQqE5BKp31tRKy2Jj%2B05o%2F0J1%2BDUqT1E42G4BaeUTPjRo9Tl%2FBN0ON7RBy4KzCv9TxqsywC6nUtg3qfvH4ElQx6M4Iwy6HYyQY6pgE7S7tC%2FotXiaD8BVPOPu3QHt47ht07nemBfQ4HzjbVsle2KkC%2F8J1R6c2hMBFbZyz2E9hFXR0IcM95IphdjW%2F8eRSI0fk5Nahjls4p0Si9LGFnuTozKufoI6ZKgkl8YXDnh6F3zklwGQdk9SA4dwYPD43zdHpSgEeqQBg45JV9bMm%2BYsuDXcWqNYfIh6l2qtMxYHKJdgpPmt5Ke8wqpPK6QJ7KRrn5&X-Amz-Signature=c6d9883f32f3038cce105731fc48e5857442be3b79397277fb95867f38583ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRVIBA2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmcoHOj0NnvzXJwLUEZ5WhhKq1wIKl65LnDYJ0FIrj%2FAiA48pMnM%2FG3OYL5qXDWeirWVTk8FnR6si1nYSJziTMEDSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLimquHqpiGHB4OkZKtwDfGWcfWTnxDOl1pdllzG%2Be59X5WHxDHXxiyk4AtebgIi%2BJG6LhGzjtdS2o1egp9zFDbM1ilJpjhTaebyS1KtB%2BdJpNlQDOTb84eGoYpUy0eyW6vQdZuIQc3bBtEcWd9sU0hip4l67dUmLntxX46xLbIbx2cwkzilf0KHJJNM2WKte7wMVgEcVDoiu3G%2BJ%2BpicLOo%2F1l0aqmAvNjlnAzRC1K5ka8s8t6o20gXiFG6zDQ7dnClRWOYjJC62T%2BSvuzT61jtKHnNa0%2BZYX8t4DuusUPv4OX3hepnJuLRnEmKi0PZCinO79DuOnfo1%2FHyg1mjrLE1RqGYW493LTqbSqwYJNsGa%2Fm3ugIMULVI7RVvrergM5c0lt8w2VdzI2SvjHtrdBy6t%2Fg01bHBr09HRJPtr%2BfcgwOBTYei2ASiI29C77PjBYKdxRuA8K%2BBdviSVU2iFLZSBB4IOrIWHwbo%2BDOJPFK9e9uNEbCSZ3bqTwtsJIH9ubMxWl2U6xr6hnw1GGOtPb%2B%2BAu1llGbswfQXiHvqUqMf%2B37FxAIZPFnQqE5BKp31tRKy2Jj%2B05o%2F0J1%2BDUqT1E42G4BaeUTPjRo9Tl%2FBN0ON7RBy4KzCv9TxqsywC6nUtg3qfvH4ElQx6M4Iwy6HYyQY6pgE7S7tC%2FotXiaD8BVPOPu3QHt47ht07nemBfQ4HzjbVsle2KkC%2F8J1R6c2hMBFbZyz2E9hFXR0IcM95IphdjW%2F8eRSI0fk5Nahjls4p0Si9LGFnuTozKufoI6ZKgkl8YXDnh6F3zklwGQdk9SA4dwYPD43zdHpSgEeqQBg45JV9bMm%2BYsuDXcWqNYfIh6l2qtMxYHKJdgpPmt5Ke8wqpPK6QJ7KRrn5&X-Amz-Signature=5683aa344bb5a3c2fe5257ab2ef3de9d06207dd7844d80d2109e07ccf33bb7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

