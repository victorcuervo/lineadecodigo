---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCSVK6RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZk6Qt9SGn1gjxOvSwiH2aX0Hyl1Z41c4YH26BJNE1wIhAIjFdf0Kp%2BDsiYa%2BBvdjwuvAmIMJrvOTYfVVohmivp3fKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOlCch77dOdRbJ50q3AN44ZfUlk%2B53Ws%2BkRhRn8Non6grDKNUU0tHY5jyJZ%2FtK%2FRsSnNmYhkAWQ8%2F3p9JlDpYkdJWg5MZ9OjDsQYPF%2Fg5tae7bSgwWKyCmub%2Bkh5NizawbkcBumaCeq0G9dBs9dPpecvrcXhSMD%2FSkmFbe1g38LzuXvoTpMJ%2BYxZHtYMRvNKxcPeybwNzwkXpjsg21XvAU3eAiipOA7d8%2FMtnKm5SVD8W6DsM3fIXNYoKjO3ar0YqKTd04yQ3Yun%2BVFIaDwkmowxnX8Y0GjRItvhbWOGc0824GiIUbhujd7YcEVs%2F0wNnIReqQ%2FyFkdz8lp8ZH3kVQYZ%2F1RLEUcIbMcphaaFVgbM2i%2FG8f9XQ9WHtBvOWLQmDMOGcOba4JEveY2bezKPYi55rMeMRXFpHg25hPMuDM%2BMo8IPtV9hEbkHQHfE86vZ7YODF%2BmP1F0BF2eDw65s%2B6Ppj3GCfXL8ZgUhI%2FTtrIWSWNRKIIVj8G86sMcNi208SOvVK%2BFz6Os71K8szkStqRCqI8FZTWMQ2W5ovAa0Od4KWlJYERk1NUZVUS9Pu2btRHElzZpavQa7kZwHhpAfbMX6stW44vs%2Bd05kz5FUDvKcRJzrDmWK3DFTqG3T9dUHHrERRfCWe07680TCh79jJBjqkAVk8E7AumV1yIbvmJzT%2Fa1ishg43LdM%2BYcdqM0fdAc9BKZGTuFG%2F4ozo1GPxnHp%2BrX5GGKShyrBz6YXehMv9oS2mbggRPflIkCs9OAMtrMOH1W73EKlKZN3kjL%2FZ1WBXBbx6mBbl9kD1DK6x2BGO6z2OyriaetWWRT%2BhvzuA9mFVn%2Fj%2Fk0yWLGgd3sfBdSg%2FB5f%2Fa8VpYGLFmCZb57lHsCRAAEkJ&X-Amz-Signature=1c20a1709eabd9600709d92d9bdece86fbfc4d73d196a42f05b31533fbe80e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCSVK6RT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkZk6Qt9SGn1gjxOvSwiH2aX0Hyl1Z41c4YH26BJNE1wIhAIjFdf0Kp%2BDsiYa%2BBvdjwuvAmIMJrvOTYfVVohmivp3fKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOlCch77dOdRbJ50q3AN44ZfUlk%2B53Ws%2BkRhRn8Non6grDKNUU0tHY5jyJZ%2FtK%2FRsSnNmYhkAWQ8%2F3p9JlDpYkdJWg5MZ9OjDsQYPF%2Fg5tae7bSgwWKyCmub%2Bkh5NizawbkcBumaCeq0G9dBs9dPpecvrcXhSMD%2FSkmFbe1g38LzuXvoTpMJ%2BYxZHtYMRvNKxcPeybwNzwkXpjsg21XvAU3eAiipOA7d8%2FMtnKm5SVD8W6DsM3fIXNYoKjO3ar0YqKTd04yQ3Yun%2BVFIaDwkmowxnX8Y0GjRItvhbWOGc0824GiIUbhujd7YcEVs%2F0wNnIReqQ%2FyFkdz8lp8ZH3kVQYZ%2F1RLEUcIbMcphaaFVgbM2i%2FG8f9XQ9WHtBvOWLQmDMOGcOba4JEveY2bezKPYi55rMeMRXFpHg25hPMuDM%2BMo8IPtV9hEbkHQHfE86vZ7YODF%2BmP1F0BF2eDw65s%2B6Ppj3GCfXL8ZgUhI%2FTtrIWSWNRKIIVj8G86sMcNi208SOvVK%2BFz6Os71K8szkStqRCqI8FZTWMQ2W5ovAa0Od4KWlJYERk1NUZVUS9Pu2btRHElzZpavQa7kZwHhpAfbMX6stW44vs%2Bd05kz5FUDvKcRJzrDmWK3DFTqG3T9dUHHrERRfCWe07680TCh79jJBjqkAVk8E7AumV1yIbvmJzT%2Fa1ishg43LdM%2BYcdqM0fdAc9BKZGTuFG%2F4ozo1GPxnHp%2BrX5GGKShyrBz6YXehMv9oS2mbggRPflIkCs9OAMtrMOH1W73EKlKZN3kjL%2FZ1WBXBbx6mBbl9kD1DK6x2BGO6z2OyriaetWWRT%2BhvzuA9mFVn%2Fj%2Fk0yWLGgd3sfBdSg%2FB5f%2Fa8VpYGLFmCZb57lHsCRAAEkJ&X-Amz-Signature=0f0b6e9ebac9b30d433260b006ebe318d00c60f5d142c1cee5ec3c9c92a2dccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

