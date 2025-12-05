---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRB6MYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJY8klS466sMA5mHqhgNfs5KmA0a2B9Kp69M1tl60dYQIgC5dF6ehp%2FZsNWKwA6yliwZEid%2Fu0hs8tpOOmuyrIVgQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDISOxr%2FujZK04ryXMSrcA9vwDtWmNfCCwbqNKnKSlr86rjmIMYZ7xNTUfMhT0L8SC9DkEeFNZukUeszldAMwJ2h4WiktItJc4QtHruNmrFpRe66S%2FXqCaHzZTm5u1FRIogFbLsv7AXNhnJ8wT2O4C%2B0Lx%2BP6GDv53qnVaM7ogPR32FGnsLKn%2Bx9IbfjliDnB8XurJtr5ErscVVIQKEV9zmOpE8G%2BlTjznrANumE8PIwi03f10CG21HT74yWYIUen9%2F0UBfnnAOG41kGpIGJWuumaz%2BvmLT330E5s%2B%2Bejap7MsTTEzz8U5J6MTjdmmAT19riw8djmBgLQ6NEnwKSfiBych3bhUaLe7W0z9%2FvEoX13efRcNRsX45pDwNOlFgQnU%2FqBb0hX%2FST0mzsY1KNC26ALZSlEELsO0eRHle%2B%2B2s7Gkarc%2FB1jspwPEccau06L44OVl3B8gy1LU8rfoWdLdBZH5wr0kFlBV4cPpyJa%2BKoEYaTCzoV99ssC%2FLxRRvCEbfzX06L9yxTEoM8B8%2BgZv3YtXcECq%2Bw1YIj0%2Fi6jH8BYXjVJGWKClyGznPFZZodllyN0HKGw2VfZdr2K2ciGCfLGR4arujo%2BcIbZrGv5ILfsqVSxHqQmp3OUtnpPb%2Fxxp3IOm3cIJ2GJONVDMNawyckGOqUBjO%2FZLGIKCQAvifb3qBbAyfvKbu5I0ZUF4Dkl09tJ%2FCBgOkfkPmb9tv%2BE1TlnAC5PVIgUJHx17VUF6ozZJWw7tq7v7mWNq2bhZ4jfc2A%2FPApzK8XJq5pc4hhDZrzKcmQyhUUhFNN4YmreJOJGsomtD3k3RqFjq0KwHQma0563voftl52JFhpScb3vniyuJ%2BuUlsTlDdkJAmOMsTQkSaSvzSoRp5Kf&X-Amz-Signature=e0ec9a6cf8d2e5b6aa6536b8a4c028027cfdffaaa0dba33c6545111682423b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRB6MYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJY8klS466sMA5mHqhgNfs5KmA0a2B9Kp69M1tl60dYQIgC5dF6ehp%2FZsNWKwA6yliwZEid%2Fu0hs8tpOOmuyrIVgQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDISOxr%2FujZK04ryXMSrcA9vwDtWmNfCCwbqNKnKSlr86rjmIMYZ7xNTUfMhT0L8SC9DkEeFNZukUeszldAMwJ2h4WiktItJc4QtHruNmrFpRe66S%2FXqCaHzZTm5u1FRIogFbLsv7AXNhnJ8wT2O4C%2B0Lx%2BP6GDv53qnVaM7ogPR32FGnsLKn%2Bx9IbfjliDnB8XurJtr5ErscVVIQKEV9zmOpE8G%2BlTjznrANumE8PIwi03f10CG21HT74yWYIUen9%2F0UBfnnAOG41kGpIGJWuumaz%2BvmLT330E5s%2B%2Bejap7MsTTEzz8U5J6MTjdmmAT19riw8djmBgLQ6NEnwKSfiBych3bhUaLe7W0z9%2FvEoX13efRcNRsX45pDwNOlFgQnU%2FqBb0hX%2FST0mzsY1KNC26ALZSlEELsO0eRHle%2B%2B2s7Gkarc%2FB1jspwPEccau06L44OVl3B8gy1LU8rfoWdLdBZH5wr0kFlBV4cPpyJa%2BKoEYaTCzoV99ssC%2FLxRRvCEbfzX06L9yxTEoM8B8%2BgZv3YtXcECq%2Bw1YIj0%2Fi6jH8BYXjVJGWKClyGznPFZZodllyN0HKGw2VfZdr2K2ciGCfLGR4arujo%2BcIbZrGv5ILfsqVSxHqQmp3OUtnpPb%2Fxxp3IOm3cIJ2GJONVDMNawyckGOqUBjO%2FZLGIKCQAvifb3qBbAyfvKbu5I0ZUF4Dkl09tJ%2FCBgOkfkPmb9tv%2BE1TlnAC5PVIgUJHx17VUF6ozZJWw7tq7v7mWNq2bhZ4jfc2A%2FPApzK8XJq5pc4hhDZrzKcmQyhUUhFNN4YmreJOJGsomtD3k3RqFjq0KwHQma0563voftl52JFhpScb3vniyuJ%2BuUlsTlDdkJAmOMsTQkSaSvzSoRp5Kf&X-Amz-Signature=e8ca3ec8f2a72b5f1e023ccb35e354359ef56e6dc99baecef222ef4ca2f80664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

