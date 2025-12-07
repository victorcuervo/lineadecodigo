---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD7JPHYG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqF4RUOMjT%2Fjwqi68aXe%2B%2Fj0fWEZYxXxWmykjohvb3dQIhALwgpRIiXqgHRi8%2BhKj3asvwzzVXhf%2FhHY14INe1MN9TKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIRxMSs8avEaIaF8q3APO2h49EW0KKgVVsnlFuQKMD0KpCClGw5cn1LetHwxnpXT9n84Xqdh07%2BDiDtbuK1NcC9uQl%2B4zykAufFOxdL8yrxfsr%2FfI8nYoIMH0Vw9do1HiAnY%2BjSYHHurjbnj2nD%2FzBARtAA2ahZ%2Fm798pSqgmP3FSQzIH9p9H6Suyvglp64PCDd3HKSwiZcXKj4H%2FhK5tFoy0aNb9n7jDPgtZcfGtsE8zDd6fH5d1E1PcoG%2BJ2oxUGiAtwm777EK41sg5cLK%2BwlpSClea1Pn9sEp%2BddjBT%2Br0tn3YN7qO41mX73lj%2Bl%2FfOba2TJWQ0xO7nPbn9%2FJawf9kv1ym4lgqHc8kKwBu1ijrKpGPKKj8cpEx4HOpQYHkJwwtsEWirx8JlDYNX882SP%2Fr0LF12LyeXeOpZHWj%2FP1mmApQmcTvDld5hBIa%2BhJjTyZukzgVsWRvveBAQ%2BHwdkaarGvXgMv6dv6ZWlRLCkgekAEa9E1bWhZP6tcU4QAeTBKJBo6DsDT0AWVCtib8GbIWKI8OBl5RH7K%2BBFe1r4ol5g9aw7hhR1lgnAWxupQMXIStyRLgIjmMUiuzDoHG1PRB8b7XbqOSxyhnuRd3adgAbgAa7cayNdLWU86yQBwh7qNowlSQa3HWHzDbqNfJBjqkAZnMWy6rOj02WHkFm%2FEjvvePNusgfsBzzhy5bC1of6dAvvCQHbY9tO6JdsibOlWxCWW8MssTpKwgWDaFj%2FWVtVN581w9udQveXat5OngW6Yz8qCxIJ%2FbKxxS5jvv8I3IDaajCBP%2FxA%2Bzbpa2e0gKLqoY3cI1W1s6i%2FAAq9s47KcuME45qoog%2FER%2Fh62iywoJF6c2nEI8hevV5%2BCTqx8Nn0V5khPw&X-Amz-Signature=5146094bc11963fb24ea3622bc97cd5f2cee6668a1acd4cbbee4a49f2315ac8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD7JPHYG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqF4RUOMjT%2Fjwqi68aXe%2B%2Fj0fWEZYxXxWmykjohvb3dQIhALwgpRIiXqgHRi8%2BhKj3asvwzzVXhf%2FhHY14INe1MN9TKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsIRxMSs8avEaIaF8q3APO2h49EW0KKgVVsnlFuQKMD0KpCClGw5cn1LetHwxnpXT9n84Xqdh07%2BDiDtbuK1NcC9uQl%2B4zykAufFOxdL8yrxfsr%2FfI8nYoIMH0Vw9do1HiAnY%2BjSYHHurjbnj2nD%2FzBARtAA2ahZ%2Fm798pSqgmP3FSQzIH9p9H6Suyvglp64PCDd3HKSwiZcXKj4H%2FhK5tFoy0aNb9n7jDPgtZcfGtsE8zDd6fH5d1E1PcoG%2BJ2oxUGiAtwm777EK41sg5cLK%2BwlpSClea1Pn9sEp%2BddjBT%2Br0tn3YN7qO41mX73lj%2Bl%2FfOba2TJWQ0xO7nPbn9%2FJawf9kv1ym4lgqHc8kKwBu1ijrKpGPKKj8cpEx4HOpQYHkJwwtsEWirx8JlDYNX882SP%2Fr0LF12LyeXeOpZHWj%2FP1mmApQmcTvDld5hBIa%2BhJjTyZukzgVsWRvveBAQ%2BHwdkaarGvXgMv6dv6ZWlRLCkgekAEa9E1bWhZP6tcU4QAeTBKJBo6DsDT0AWVCtib8GbIWKI8OBl5RH7K%2BBFe1r4ol5g9aw7hhR1lgnAWxupQMXIStyRLgIjmMUiuzDoHG1PRB8b7XbqOSxyhnuRd3adgAbgAa7cayNdLWU86yQBwh7qNowlSQa3HWHzDbqNfJBjqkAZnMWy6rOj02WHkFm%2FEjvvePNusgfsBzzhy5bC1of6dAvvCQHbY9tO6JdsibOlWxCWW8MssTpKwgWDaFj%2FWVtVN581w9udQveXat5OngW6Yz8qCxIJ%2FbKxxS5jvv8I3IDaajCBP%2FxA%2Bzbpa2e0gKLqoY3cI1W1s6i%2FAAq9s47KcuME45qoog%2FER%2Fh62iywoJF6c2nEI8hevV5%2BCTqx8Nn0V5khPw&X-Amz-Signature=fa950e6e04cb8454f5081d69f30558985264a16f9335fc64605688c0f03b08d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

