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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2KHLPV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHCpuSkc9yxuMMYB4o48jQsgjyT%2BqjBMSY3nO4rlNmaYAiBUCKQkoomaYyTpIOMUOhjDRWWPTBy1SGOSOJH4orjP5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM0kCWpHkEckOoFPy1KtwDj%2F4glrkophSykWNzItghKALvbRZCdY3moC7MJFVnBID8jeq57H3Al64G7DTwzA1ppwpJpb%2BXzcSye%2FuM6yidTJ%2BtiY2ZxbaAP1YTTXvH6jXQUKuAlZl5LXLW5CglasVN0C4e59JXzTVTUGSm5s2Ew1z%2Fx%2B%2BbCk7AvaCMfY%2F6BNRKYP62hDf1NkR9E%2FWNN5d4fJX5Qg73VhMzuPYIfzPm46OM7gw%2F4x9X%2BXSqGbiXdeKl1st5thjmt7atMiP1dF9Ygnf%2Fm%2BMlRGCC2WhjGZir6h61XHnzVZlr4TJPReTernPro%2Ff%2BcmBu%2Fg5%2BpjjzUYSEuisU85epWBG%2Bod7ldeiort45cxmKkZNPSEUdZpkR4vRPg7SAqTtaXgxHfHU64pW6R%2Bk6a843SHzgoyJDP%2FBTIlbq04UG%2BdoNSHFJfaYBcnIwfi2V4mwRgzpYdr5r76ols7oobjvGgQxpVMusyjFo3wnCXu1NlBY1jDdGiZHuprUttzdR9ARqCPKnnuDGbdlp6bjY%2Fa8gFS0lHRZL3c0a%2BcuXtDidS3eR550Pp3dk0bLewJCU5jGYvYZZXABSRcnmYhuoozTxeWcbqTfCq%2FIaz1LadoLfS8FCEHOTMOyi2eKvrryL29%2FQUFOK%2F4wwjenAyQY6pgFVnUzsf%2FxDnS3mlSU54WDfhxg%2F9Zlheel7eY1puEgilcVpyd3y4CyHrGBZrHhRZyv9sPCApVtHz%2FZcBwKSsTb6bd%2BzWRbRjRWjVA8Ld%2BvmJj2eYBnvGlrcjEf6Ibke0NmJ8nzFX1ngREGNJqEyIjfzoHpDbAhKOtR%2BNWHwZNB%2Bw67cYe%2F%2B8kPtf03DI0gTnVg55xLVyiwybade7wgbBTqWmr5RhYqV&X-Amz-Signature=48e63484335b8f4c9b12ef6e36a956d95a1e2de7bda51cf21f23cf5ef1b172ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2KHLPV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHCpuSkc9yxuMMYB4o48jQsgjyT%2BqjBMSY3nO4rlNmaYAiBUCKQkoomaYyTpIOMUOhjDRWWPTBy1SGOSOJH4orjP5Sr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM0kCWpHkEckOoFPy1KtwDj%2F4glrkophSykWNzItghKALvbRZCdY3moC7MJFVnBID8jeq57H3Al64G7DTwzA1ppwpJpb%2BXzcSye%2FuM6yidTJ%2BtiY2ZxbaAP1YTTXvH6jXQUKuAlZl5LXLW5CglasVN0C4e59JXzTVTUGSm5s2Ew1z%2Fx%2B%2BbCk7AvaCMfY%2F6BNRKYP62hDf1NkR9E%2FWNN5d4fJX5Qg73VhMzuPYIfzPm46OM7gw%2F4x9X%2BXSqGbiXdeKl1st5thjmt7atMiP1dF9Ygnf%2Fm%2BMlRGCC2WhjGZir6h61XHnzVZlr4TJPReTernPro%2Ff%2BcmBu%2Fg5%2BpjjzUYSEuisU85epWBG%2Bod7ldeiort45cxmKkZNPSEUdZpkR4vRPg7SAqTtaXgxHfHU64pW6R%2Bk6a843SHzgoyJDP%2FBTIlbq04UG%2BdoNSHFJfaYBcnIwfi2V4mwRgzpYdr5r76ols7oobjvGgQxpVMusyjFo3wnCXu1NlBY1jDdGiZHuprUttzdR9ARqCPKnnuDGbdlp6bjY%2Fa8gFS0lHRZL3c0a%2BcuXtDidS3eR550Pp3dk0bLewJCU5jGYvYZZXABSRcnmYhuoozTxeWcbqTfCq%2FIaz1LadoLfS8FCEHOTMOyi2eKvrryL29%2FQUFOK%2F4wwjenAyQY6pgFVnUzsf%2FxDnS3mlSU54WDfhxg%2F9Zlheel7eY1puEgilcVpyd3y4CyHrGBZrHhRZyv9sPCApVtHz%2FZcBwKSsTb6bd%2BzWRbRjRWjVA8Ld%2BvmJj2eYBnvGlrcjEf6Ibke0NmJ8nzFX1ngREGNJqEyIjfzoHpDbAhKOtR%2BNWHwZNB%2Bw67cYe%2F%2B8kPtf03DI0gTnVg55xLVyiwybade7wgbBTqWmr5RhYqV&X-Amz-Signature=97a100b0d49b5cfd8975c544e171da3813bbf388dd831ed7d786932c0ab6ca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

