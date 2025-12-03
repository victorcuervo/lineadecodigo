---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCWGEDTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDMQIdV74nKyYCDP0YvhVAaX6DUmVmnQo3rya8YsgBF4QIhALI4R2eXKYy5RR43wZ7xKNk6yH5mxMhk7b6KMCsIY0abKv8DCDkQABoMNjM3NDIzMTgzODA1IgxeHp5nC5YUvvlwThgq3AOdZIzyVa7cFcRyK53fveqoTpce%2FcbpgQANPqarcifsCWHh0KJfgBYXx1K%2F26EUClZQlYjY%2FxIX2UxC%2B4SoYuchFd9L2wq0FBjmTDp2v9BHrF6w%2BEC8kHk0vswLEuT9AHRf%2Fupo5moKcEH8uzHHW6z%2Fo9MUCo%2FOQyryCs9TtKRa5I3x%2B9HmO4FJBg1NbktW86YjcD0VhwVfYPL%2BygZ7T%2BCP62ZzRMt8R8O2XBXojz2MRchSxHf7PlStDWO4kFRuzWEr1yQZ20DD7zj40pLqt8Cs3kuLbXGY5EHOZoPyGA54jZCwNFMW3%2F90htbtGAdsC0GlHrME4mpvXe8aFSF5vbb9IuTviyZwRr1fWhYjVYpBU%2BJ4J5enrpWoaI4Q20Pc5LTJCj9AfN0h9DA9SqOwXrH3fDd0ckgpMb7RdVWDQHibqFJ7D0T2u33gEN7eB8BQZx2gMd%2Bw%2FqUmvKfH7K66lBllyn6sEJXPaKSlcrQjhN3CZystpPBPfKAbk3lcMtDgsJlISi%2FIgGXrDk%2FskcfJoqDLvxwKv0vfu0BvDQ2YxTIUDjh1KYUaG%2Fug%2Fx1MMjzJLWAc0rKAn1s1DJa%2FvVStvRZmuHuX4C5iJ2pOfmddEPRAACwrgNYap2d6YIFMJzD%2FlMPJBjqkAfUvv5CAgB7o%2BMBoLl3g3gQ%2Bbgr20vUseHRGddGAmI1dd8B2QydLLx%2F06DT3tlfDW%2Fyo6iMdVP0CEONbxvtj8HmNsjVT1bwLLjilcBpA1UOvLpqTLfcktNBp65hj8htrouuk%2Bbhzmmoub4l4MFp87Tk6540iuf%2FMgY%2BYcvML0V%2F6jzPhY5uYw0%2F2oRskKqwNp2LMpG3HttMUyvvBINkCL23jLgP%2B&X-Amz-Signature=a43e5247b34b440f0006b759666584a4acf01d3b4714005470579c53353bbda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCWGEDTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDMQIdV74nKyYCDP0YvhVAaX6DUmVmnQo3rya8YsgBF4QIhALI4R2eXKYy5RR43wZ7xKNk6yH5mxMhk7b6KMCsIY0abKv8DCDkQABoMNjM3NDIzMTgzODA1IgxeHp5nC5YUvvlwThgq3AOdZIzyVa7cFcRyK53fveqoTpce%2FcbpgQANPqarcifsCWHh0KJfgBYXx1K%2F26EUClZQlYjY%2FxIX2UxC%2B4SoYuchFd9L2wq0FBjmTDp2v9BHrF6w%2BEC8kHk0vswLEuT9AHRf%2Fupo5moKcEH8uzHHW6z%2Fo9MUCo%2FOQyryCs9TtKRa5I3x%2B9HmO4FJBg1NbktW86YjcD0VhwVfYPL%2BygZ7T%2BCP62ZzRMt8R8O2XBXojz2MRchSxHf7PlStDWO4kFRuzWEr1yQZ20DD7zj40pLqt8Cs3kuLbXGY5EHOZoPyGA54jZCwNFMW3%2F90htbtGAdsC0GlHrME4mpvXe8aFSF5vbb9IuTviyZwRr1fWhYjVYpBU%2BJ4J5enrpWoaI4Q20Pc5LTJCj9AfN0h9DA9SqOwXrH3fDd0ckgpMb7RdVWDQHibqFJ7D0T2u33gEN7eB8BQZx2gMd%2Bw%2FqUmvKfH7K66lBllyn6sEJXPaKSlcrQjhN3CZystpPBPfKAbk3lcMtDgsJlISi%2FIgGXrDk%2FskcfJoqDLvxwKv0vfu0BvDQ2YxTIUDjh1KYUaG%2Fug%2Fx1MMjzJLWAc0rKAn1s1DJa%2FvVStvRZmuHuX4C5iJ2pOfmddEPRAACwrgNYap2d6YIFMJzD%2FlMPJBjqkAfUvv5CAgB7o%2BMBoLl3g3gQ%2Bbgr20vUseHRGddGAmI1dd8B2QydLLx%2F06DT3tlfDW%2Fyo6iMdVP0CEONbxvtj8HmNsjVT1bwLLjilcBpA1UOvLpqTLfcktNBp65hj8htrouuk%2Bbhzmmoub4l4MFp87Tk6540iuf%2FMgY%2BYcvML0V%2F6jzPhY5uYw0%2F2oRskKqwNp2LMpG3HttMUyvvBINkCL23jLgP%2B&X-Amz-Signature=4e8c21af84cbdb5240ca1bbdfd0047148886ae09c4924a04f273a9063dfddc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

