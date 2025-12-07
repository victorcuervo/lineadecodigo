---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYD3CVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQU36%2FdFueiVolfYpLMTtdsnIGPmVjOAg6ZzvrwQ%2FbEwIhANq4iOpFV1vXxQM86b9CeuOY3AzgfWUVNcU2QwXYLODbKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FvVYwNq0EXs3Gc4q3AOAFGZk8Cz72GOQOxc0BRcaSnt1HuZDP2Yi7FNBaNl%2BIQdiiZcrd67xmXUUAuYpR2MhdiI3pteK7KDBlQuZpuy%2FlivJkEK86FbnYAOqDP%2BcdbSx0LrS66w1pKC7Li%2F2CtDKHEEwLaraEYV0emSfJCyCj%2FK5OcBkEJDYwx9AYUWM%2F8oWzIib4l4lhKqUYg%2FItQ9hIjLiyJuO3ZHOYQ%2Bm23Tyak1QEqPuYt3kZZUnWq0oFr23Mn9ISRt6kr4F%2BHnnjngVQbxlH9DJNs%2FycaWNHpi09CqU66j2VFLXugm9dyn6dbM8KYYt1t2NZMoZt1tiIc4h0pC4SR5lUq6iGLGfpnTurkYBkvjdpPNLe%2Bs1j9ihjeeU5Pwrh5NqZzHtaNOzWUG9UdtpGlN%2FdGDbiKCUQj4ZvnpzpofgyiY2A0K3%2FRMnasA5Owh7d0KqtvDt7JyYRS6aoiKymKPbtvNwNRJx7nKweKhut8CC42tEmYbsnrBNnU1o%2B%2FwqL02Jwoe2gIl3wMFu0qjAI1VeBX%2BgiKaebQOHuO0e4SDe4k%2BBo83qKCGwDNtMjvnpiQQAuN7VS%2BciT4zLBAnu4m50Iw%2FhKn5lFwDPy6a0ZAHWpSn4%2FPOZB8sHYVQsxr2d9VqriQfvTjDovtbJBjqkAZ8%2BwqZDH%2Bu8T%2B%2FKzBM%2FqzTQnmAM26lOnU2m6fDzGIqzzquOyS6LGdzFBFM4gc%2F%2Fkm5CntJDfrQWU93MYoRn%2ByuEcRi9FP1DHNL78LZfRqs0XzttlgyVe9bTCW3lqJizq0Rj9811DmTdF9NhAOJ02fpDxaE6pO%2FF%2BLkbuIi6f%2Fi6pGRLW29LSbJOP%2BqpmrIFQutkZVfAso1a0iQFrxTEmM0r%2Ft1V&X-Amz-Signature=d0e0fac61882011093bca2090846be2de935a09c4520f24a4fc25a59b9506cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAYD3CVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQU36%2FdFueiVolfYpLMTtdsnIGPmVjOAg6ZzvrwQ%2FbEwIhANq4iOpFV1vXxQM86b9CeuOY3AzgfWUVNcU2QwXYLODbKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF%2FvVYwNq0EXs3Gc4q3AOAFGZk8Cz72GOQOxc0BRcaSnt1HuZDP2Yi7FNBaNl%2BIQdiiZcrd67xmXUUAuYpR2MhdiI3pteK7KDBlQuZpuy%2FlivJkEK86FbnYAOqDP%2BcdbSx0LrS66w1pKC7Li%2F2CtDKHEEwLaraEYV0emSfJCyCj%2FK5OcBkEJDYwx9AYUWM%2F8oWzIib4l4lhKqUYg%2FItQ9hIjLiyJuO3ZHOYQ%2Bm23Tyak1QEqPuYt3kZZUnWq0oFr23Mn9ISRt6kr4F%2BHnnjngVQbxlH9DJNs%2FycaWNHpi09CqU66j2VFLXugm9dyn6dbM8KYYt1t2NZMoZt1tiIc4h0pC4SR5lUq6iGLGfpnTurkYBkvjdpPNLe%2Bs1j9ihjeeU5Pwrh5NqZzHtaNOzWUG9UdtpGlN%2FdGDbiKCUQj4ZvnpzpofgyiY2A0K3%2FRMnasA5Owh7d0KqtvDt7JyYRS6aoiKymKPbtvNwNRJx7nKweKhut8CC42tEmYbsnrBNnU1o%2B%2FwqL02Jwoe2gIl3wMFu0qjAI1VeBX%2BgiKaebQOHuO0e4SDe4k%2BBo83qKCGwDNtMjvnpiQQAuN7VS%2BciT4zLBAnu4m50Iw%2FhKn5lFwDPy6a0ZAHWpSn4%2FPOZB8sHYVQsxr2d9VqriQfvTjDovtbJBjqkAZ8%2BwqZDH%2Bu8T%2B%2FKzBM%2FqzTQnmAM26lOnU2m6fDzGIqzzquOyS6LGdzFBFM4gc%2F%2Fkm5CntJDfrQWU93MYoRn%2ByuEcRi9FP1DHNL78LZfRqs0XzttlgyVe9bTCW3lqJizq0Rj9811DmTdF9NhAOJ02fpDxaE6pO%2FF%2BLkbuIi6f%2Fi6pGRLW29LSbJOP%2BqpmrIFQutkZVfAso1a0iQFrxTEmM0r%2Ft1V&X-Amz-Signature=deae3d6a0521c3b4fc19a6f970cca0c4c8b0db690374c94192af68b9a4bf156f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

