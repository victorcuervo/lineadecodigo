---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3UZYTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICxOP9O8W0PAyqYg0Z4z%2BF3KSR7cdqUJqfufsDJieiDvAiEAoTWB9fYzZEO%2BMsccmlLXeqCV%2Fynw56sVmdnoski2ogsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDE7haKrfNefPyaKZfSrcA3mCzSALdPvvR1f7YM82RVO4lV5rJvMjr708S8IvisZUsHOyZ7LW%2FBYIWCGyiuJof6jIG36pDdDWzUPIfIKQCBbQnp9BtNkZ8AA4T1Lzd5R5TtC%2FFFUSviMIES4y7m4h%2Fg8Gb%2F9uII8gQJ5yFGjssyoF%2FYh5t2SwMUdcNli7Sm2TEb7TDUbjvHjtoYQGAaQSiml17ZnuWFHELh%2Bd68H1LRs132a3fFV4%2FFlOoMSbohMQ2HE%2BMRyIVxtCXe9dCDJk73hae3TZQu92HNfCIuQY608MuK9cZqTo0TZnN%2Bioq6xiOoyHkQcl1qLcgm1Lb5x5P5%2FguoQrxzECajdOTeqJzk15b%2BcmoeyuvWeYQwVJ3D2lrFJBYYfYjKrFlpyExwYMMvSCzqZ4N4UQuUBJ4vwQvSII3B%2FZo5kjfBYBBDtfbcLGuzx49VPyNhgeDCOo4xJ%2Fam%2BtblaNcgTnYcXejP1f3hHHbzqEmXuryQmn30R24aI%2FTcrVDiZM7JkHpNI3GLMhyeoSWpgaVxI%2BjDLksGGHh6V%2BkRwTmbrk%2BDkpNDcLku9Se%2Bugfsmn%2FGiicBImMw8855WoCk6r%2F4lbe8dgJoKMoG4zuQ%2BPqzXULS4qjz4g%2BZe95Wqam4bRLlXjFCMtMPPAwckGOqUBwA%2FXh%2FieaE3MP97DjegSIyIM6OBRx3zXPEfHmy9nl9xY%2F8e31WptE07hBdhwFOVNe8YzHcAPINXV6Ra0%2FU7z%2BTO9ZDHmqODLvWTPfv5QiZeB4cJIbJzAbxpjRjqwj0agz%2B9l%2FhHbWlvI6AJ%2F2vEaKIphK8uG5qlybSa9%2FDcKjcsbhv2CJJJQJLpjHyNQxeavUnj4Pg77Zy43suasr08x%2FneiAl%2Fk&X-Amz-Signature=ad3ffbe44d0c9c2b1ecb45ed0bacb5090955fc235949b7398234b652b3fa2d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3UZYTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCICxOP9O8W0PAyqYg0Z4z%2BF3KSR7cdqUJqfufsDJieiDvAiEAoTWB9fYzZEO%2BMsccmlLXeqCV%2Fynw56sVmdnoski2ogsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDE7haKrfNefPyaKZfSrcA3mCzSALdPvvR1f7YM82RVO4lV5rJvMjr708S8IvisZUsHOyZ7LW%2FBYIWCGyiuJof6jIG36pDdDWzUPIfIKQCBbQnp9BtNkZ8AA4T1Lzd5R5TtC%2FFFUSviMIES4y7m4h%2Fg8Gb%2F9uII8gQJ5yFGjssyoF%2FYh5t2SwMUdcNli7Sm2TEb7TDUbjvHjtoYQGAaQSiml17ZnuWFHELh%2Bd68H1LRs132a3fFV4%2FFlOoMSbohMQ2HE%2BMRyIVxtCXe9dCDJk73hae3TZQu92HNfCIuQY608MuK9cZqTo0TZnN%2Bioq6xiOoyHkQcl1qLcgm1Lb5x5P5%2FguoQrxzECajdOTeqJzk15b%2BcmoeyuvWeYQwVJ3D2lrFJBYYfYjKrFlpyExwYMMvSCzqZ4N4UQuUBJ4vwQvSII3B%2FZo5kjfBYBBDtfbcLGuzx49VPyNhgeDCOo4xJ%2Fam%2BtblaNcgTnYcXejP1f3hHHbzqEmXuryQmn30R24aI%2FTcrVDiZM7JkHpNI3GLMhyeoSWpgaVxI%2BjDLksGGHh6V%2BkRwTmbrk%2BDkpNDcLku9Se%2Bugfsmn%2FGiicBImMw8855WoCk6r%2F4lbe8dgJoKMoG4zuQ%2BPqzXULS4qjz4g%2BZe95Wqam4bRLlXjFCMtMPPAwckGOqUBwA%2FXh%2FieaE3MP97DjegSIyIM6OBRx3zXPEfHmy9nl9xY%2F8e31WptE07hBdhwFOVNe8YzHcAPINXV6Ra0%2FU7z%2BTO9ZDHmqODLvWTPfv5QiZeB4cJIbJzAbxpjRjqwj0agz%2B9l%2FhHbWlvI6AJ%2F2vEaKIphK8uG5qlybSa9%2FDcKjcsbhv2CJJJQJLpjHyNQxeavUnj4Pg77Zy43suasr08x%2FneiAl%2Fk&X-Amz-Signature=930aaee78d2877f95867695a109c2b07352347a47bf2977120994dd837f2fa56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

