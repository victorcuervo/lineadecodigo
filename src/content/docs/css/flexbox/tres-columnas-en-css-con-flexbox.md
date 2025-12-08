---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVCHTEW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7DSxiaYDFzEjf6hz1wofOWxhlSw8bBpQ%2BinWZliXk4AiEAtMuOvLPiSzQjoqzr%2BG8BtGEFEPdhwYTHBoBI85AfUIsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCQgMGCt2ogbr4BsSrcA5vKToDjvFiYzlKdn23vAZbxu01ksxKVAfQyb0iZn7phZM1QOkOtF4OLMvVHMcycASV9JaDOiyrsxxcjQEwAvrsaun%2F85vP8w7QreqygO%2BCkcb2R43RW6Lorl09SW16Ki3AlmIcKJNr5Kioe3dg8QRPXzNI3JxCe7Kxhx0gdxxSiSh%2BqrHavc1nGZ29glP0%2Fn0WLODhzy06DEo0GEAzmNAWMuyKJXgpUnc7c7U2P3GdlfZHB%2Ff5RwaKdZpPzyoGUYYe%2FiXTJPj4pzSdVCpOGbd%2BJTvwxSx3onOwk3UlSb%2F3OZat2aPLm6Xh5nPgLjGg1Nhv3tvBJJFqZkdt7ZwrK79m0GkXwPq9o8yYJi0YINGCKyvcKbzXUz0O6OYD9HbGqycgAzYTtQNo5uoycI4BIrVRWoDJIEBC%2FREre1PU2o2hAchFrsSNG7dL%2F1yg24YiZAtq%2FzTt2fcKjkfKUTcEtV0K3M4nmkIM%2B%2Bzh3oEX0sQ6vN87BfkePJPNGX9kcFPwuIogNOlIdVgZvs4xvlgJsqdYv8vdqS5B47jYjz06SwmKq%2FZuA227NilvoAF4qH3GFWKazLGPmzvX%2FmsJVe3jWb5QcJJ9kAJzVZpwxa%2BUb5Nl13cPDDDDGLl%2BqPNASMPL02skGOqUB%2F0aEb0XHKjz3dC%2FRHuBLQKhKZmJarx3wbHZa%2BPkWj821vwUbFWbxJKgm3Zq8LLHFN0NT1mjCDLVshuTJ5qVlDPoPjoeyY4WHAPw7my1LfV8jAVLQDwa2u%2BqqaRLLMaX5TRcuYMb7Scj2Kr8sWxZBlcoKa2B7MJI1beha2u%2BHeZzVaRYixYAqFwfuMx2B51AXJ8wX9q2Xi0%2Bt1MAy%2FmLNxknD5C1f&X-Amz-Signature=04f0aa963e3fed74a73884938e16e10cbc195edb78ea5a045886ae539b5de282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URVCHTEW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7DSxiaYDFzEjf6hz1wofOWxhlSw8bBpQ%2BinWZliXk4AiEAtMuOvLPiSzQjoqzr%2BG8BtGEFEPdhwYTHBoBI85AfUIsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCQgMGCt2ogbr4BsSrcA5vKToDjvFiYzlKdn23vAZbxu01ksxKVAfQyb0iZn7phZM1QOkOtF4OLMvVHMcycASV9JaDOiyrsxxcjQEwAvrsaun%2F85vP8w7QreqygO%2BCkcb2R43RW6Lorl09SW16Ki3AlmIcKJNr5Kioe3dg8QRPXzNI3JxCe7Kxhx0gdxxSiSh%2BqrHavc1nGZ29glP0%2Fn0WLODhzy06DEo0GEAzmNAWMuyKJXgpUnc7c7U2P3GdlfZHB%2Ff5RwaKdZpPzyoGUYYe%2FiXTJPj4pzSdVCpOGbd%2BJTvwxSx3onOwk3UlSb%2F3OZat2aPLm6Xh5nPgLjGg1Nhv3tvBJJFqZkdt7ZwrK79m0GkXwPq9o8yYJi0YINGCKyvcKbzXUz0O6OYD9HbGqycgAzYTtQNo5uoycI4BIrVRWoDJIEBC%2FREre1PU2o2hAchFrsSNG7dL%2F1yg24YiZAtq%2FzTt2fcKjkfKUTcEtV0K3M4nmkIM%2B%2Bzh3oEX0sQ6vN87BfkePJPNGX9kcFPwuIogNOlIdVgZvs4xvlgJsqdYv8vdqS5B47jYjz06SwmKq%2FZuA227NilvoAF4qH3GFWKazLGPmzvX%2FmsJVe3jWb5QcJJ9kAJzVZpwxa%2BUb5Nl13cPDDDDGLl%2BqPNASMPL02skGOqUB%2F0aEb0XHKjz3dC%2FRHuBLQKhKZmJarx3wbHZa%2BPkWj821vwUbFWbxJKgm3Zq8LLHFN0NT1mjCDLVshuTJ5qVlDPoPjoeyY4WHAPw7my1LfV8jAVLQDwa2u%2BqqaRLLMaX5TRcuYMb7Scj2Kr8sWxZBlcoKa2B7MJI1beha2u%2BHeZzVaRYixYAqFwfuMx2B51AXJ8wX9q2Xi0%2Bt1MAy%2FmLNxknD5C1f&X-Amz-Signature=b150094ab09c9697eb874fde6cd50d10a19b9b7aa3fffb353469cf494fb7610e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

