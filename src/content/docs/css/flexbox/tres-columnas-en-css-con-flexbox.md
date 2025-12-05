---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DXAKN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESSQfrCjsczKr9N3Mxr45gLM5R8CFbGS%2FDJ0mO15GyAIgMxyvYDaMgvCjjClpfoh7bvCBjd17x97xuVGu1A%2B6t4kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPKOn4t3cteru4agjircA666knxNhzzJdGfiJYkNIJTn0RsMtsj3ROx8S%2BbN3i3ymKz1Ez3Vj1%2BmkUmyjCGBAACcnhyVxAQ%2FaCxHnnbg%2Bgy9RPUySYZfjHoxlXuZIiK6sgrmLE9Q1%2FKZEd8YKFeYR4OksK1yaxgyuUy66hyeXrqJsKSBrXzUnbkpYOA0ireF5jkj588p0nIf3bxLpFoB8rs6tLAruuC1nrQZMKg2jhmqrGIlOjqB0c8vICUynUJpUwWpXi5G1j8uoiUHVLP5RiPFYq9xhxtNi1NOO4KGFgTVtOgB4simpeJxQtjYxJ80Ers4ndcU6MgWv%2B6MfPwl32M4Dpsk%2Brrv%2BsUVfucnm8dzRqgLyMF3ZcK3ZFPE16a4Sj890tgHLKyhnMq1kHLbhKOL7T%2BYgtrrzOjZXsBYmMq0ttKP9r0CiNP%2B6kzPRphyG34kWL5jlTCR7NuEG1KiQ1lZ%2B9GEDLGsXzLzWvLD9uogEPI8eeSIDThyJCHOh62KpgEGkx%2FU7xmFILRtIEJoSwMiSjLfUG%2FePQsBfCcXAkvkcbV4MOmGmCKgnfyIZcx7tBX2%2BSFXeNw0QprHltw6zb9Rweari8TDbGD4U6s7JtoAscoI8qVm4VdSCejbbsNd6YLrCkLzsWZRw6oYMK%2F2y8kGOqUBK%2B0nF3IFnRnFNh1yO%2B2NDQ64VrE02B5r6A02O6q9a1C9c2dceW48hGGsCmkLHeW%2FvEp3fQEEAhr3flPVTL23Pk2unwJxLq7npnEwcHYUMooRAY8XVB5nttLXqFgvniVOj0LX%2BYA6nM11K0pUev9x4Jh4ELiKdrIxO6x6pNnwUftKVnYNu5O3QL4HBes%2FPfkcJWU95A0idv8pq1W7Z%2BUVS5XXpEQR&X-Amz-Signature=4252ae2861a79a782551d81e6c9c86953efe7e6d5da35c874a61d37ebe23d74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622DXAKN4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDESSQfrCjsczKr9N3Mxr45gLM5R8CFbGS%2FDJ0mO15GyAIgMxyvYDaMgvCjjClpfoh7bvCBjd17x97xuVGu1A%2B6t4kq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPKOn4t3cteru4agjircA666knxNhzzJdGfiJYkNIJTn0RsMtsj3ROx8S%2BbN3i3ymKz1Ez3Vj1%2BmkUmyjCGBAACcnhyVxAQ%2FaCxHnnbg%2Bgy9RPUySYZfjHoxlXuZIiK6sgrmLE9Q1%2FKZEd8YKFeYR4OksK1yaxgyuUy66hyeXrqJsKSBrXzUnbkpYOA0ireF5jkj588p0nIf3bxLpFoB8rs6tLAruuC1nrQZMKg2jhmqrGIlOjqB0c8vICUynUJpUwWpXi5G1j8uoiUHVLP5RiPFYq9xhxtNi1NOO4KGFgTVtOgB4simpeJxQtjYxJ80Ers4ndcU6MgWv%2B6MfPwl32M4Dpsk%2Brrv%2BsUVfucnm8dzRqgLyMF3ZcK3ZFPE16a4Sj890tgHLKyhnMq1kHLbhKOL7T%2BYgtrrzOjZXsBYmMq0ttKP9r0CiNP%2B6kzPRphyG34kWL5jlTCR7NuEG1KiQ1lZ%2B9GEDLGsXzLzWvLD9uogEPI8eeSIDThyJCHOh62KpgEGkx%2FU7xmFILRtIEJoSwMiSjLfUG%2FePQsBfCcXAkvkcbV4MOmGmCKgnfyIZcx7tBX2%2BSFXeNw0QprHltw6zb9Rweari8TDbGD4U6s7JtoAscoI8qVm4VdSCejbbsNd6YLrCkLzsWZRw6oYMK%2F2y8kGOqUBK%2B0nF3IFnRnFNh1yO%2B2NDQ64VrE02B5r6A02O6q9a1C9c2dceW48hGGsCmkLHeW%2FvEp3fQEEAhr3flPVTL23Pk2unwJxLq7npnEwcHYUMooRAY8XVB5nttLXqFgvniVOj0LX%2BYA6nM11K0pUev9x4Jh4ELiKdrIxO6x6pNnwUftKVnYNu5O3QL4HBes%2FPfkcJWU95A0idv8pq1W7Z%2BUVS5XXpEQR&X-Amz-Signature=5e10780b1ff3a6762ee3ed5409c85ca0c40ffbb16659730f9a7a838ad23ce069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

