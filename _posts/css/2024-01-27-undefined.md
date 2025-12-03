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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KPCIMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICbHi2dHbYYLw11%2FN9lMWgmmso%2FK6ExXGT16eLUHVg%2BYAiEA3ZUbOLa5n370uz4UPkXqY0gGzo69hSzopGBseBnUduUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFrjzkN%2FBL2epcdN%2BCrcA9wLv6IQ5Flb3xHDFtRKVVIOF217ZCETWzin4beL0U6dBUdo52XtC4NJAI4Y3CgH%2BcjfIQ2wp0DPGdEr7vAAUmImVsgA4I7APe6FGxBNFjyOAg%2B5t85eLiJK5WHFEH%2FmV0YO9o%2BPuweyDNJDP%2BLEGRgzrZsz9ZdRwrvjkxr32jTCpBzGG6OLlyfp8m5uRYF3gLb9hTC%2BLBcozoC14gu9Shohs9z08xUC48llDa9bySIsLoGIuuwlyEEnQvEcnRNX4D8PsA%2B3W0fpGmK7rPfPLXMgY7qQEGvE49uLBB%2BbOlODJ2Z2zl0gcnaCdoezz6n3nELn2HGkYEuOBfgNRVafU3hrfN8Pi%2B2%2F0fMGUNg%2FQ4qXaoktiq%2BT4wgiJ7jI7vTilxsUV25Y7dHARzTAe9eyfE0I2w%2BQWGqTfwOeb4hj3dqpBrDxJGoCRZt8ECoQ0n7yrIkXxtjj1q78YEhHAHDttdAU6%2F33TwLuAsa1PrYpx4WBUFgpm2%2BZrGbwi%2B0ydgQ3d%2BzdFvvh9O2h%2BF6pRUK92U3jcAnya1A1xTSFBxabv8xXHQyeU2Y0nqFBpdG8R%2F9ycYsTCsgN2gZ5b0kEBp3f9cGVQzhUB1SIyoyWp3md7xVFsF4D7gA82U4m6ysQMKnMwMkGOqUBeIiOz0sUF3rCh7Lp%2Bk1rwZaPkAQoMF%2BBGfzmNoraooCGte0udH10slrzQyw2QHG3yFcME8kZCxAa4yiFoOqS1f3ZkErbtoMAJjdS5%2Fg41b8KToc0btVfT0YpELZ6eHH24fnu1DY9lvzliR6Z%2BUGmF08F1%2Bwq%2Bzg%2BeRym1MgpBv5OYmCKjnLPcz667BQ4zDbDPuK5KWDCDOwyLx1OnGErsY99%2BhTv&X-Amz-Signature=e76c470427a50ef522c2f1f39614622eb85b9b88f8895ae9a4863e3d2bf6cfae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5KPCIMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICbHi2dHbYYLw11%2FN9lMWgmmso%2FK6ExXGT16eLUHVg%2BYAiEA3ZUbOLa5n370uz4UPkXqY0gGzo69hSzopGBseBnUduUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFrjzkN%2FBL2epcdN%2BCrcA9wLv6IQ5Flb3xHDFtRKVVIOF217ZCETWzin4beL0U6dBUdo52XtC4NJAI4Y3CgH%2BcjfIQ2wp0DPGdEr7vAAUmImVsgA4I7APe6FGxBNFjyOAg%2B5t85eLiJK5WHFEH%2FmV0YO9o%2BPuweyDNJDP%2BLEGRgzrZsz9ZdRwrvjkxr32jTCpBzGG6OLlyfp8m5uRYF3gLb9hTC%2BLBcozoC14gu9Shohs9z08xUC48llDa9bySIsLoGIuuwlyEEnQvEcnRNX4D8PsA%2B3W0fpGmK7rPfPLXMgY7qQEGvE49uLBB%2BbOlODJ2Z2zl0gcnaCdoezz6n3nELn2HGkYEuOBfgNRVafU3hrfN8Pi%2B2%2F0fMGUNg%2FQ4qXaoktiq%2BT4wgiJ7jI7vTilxsUV25Y7dHARzTAe9eyfE0I2w%2BQWGqTfwOeb4hj3dqpBrDxJGoCRZt8ECoQ0n7yrIkXxtjj1q78YEhHAHDttdAU6%2F33TwLuAsa1PrYpx4WBUFgpm2%2BZrGbwi%2B0ydgQ3d%2BzdFvvh9O2h%2BF6pRUK92U3jcAnya1A1xTSFBxabv8xXHQyeU2Y0nqFBpdG8R%2F9ycYsTCsgN2gZ5b0kEBp3f9cGVQzhUB1SIyoyWp3md7xVFsF4D7gA82U4m6ysQMKnMwMkGOqUBeIiOz0sUF3rCh7Lp%2Bk1rwZaPkAQoMF%2BBGfzmNoraooCGte0udH10slrzQyw2QHG3yFcME8kZCxAa4yiFoOqS1f3ZkErbtoMAJjdS5%2Fg41b8KToc0btVfT0YpELZ6eHH24fnu1DY9lvzliR6Z%2BUGmF08F1%2Bwq%2Bzg%2BeRym1MgpBv5OYmCKjnLPcz667BQ4zDbDPuK5KWDCDOwyLx1OnGErsY99%2BhTv&X-Amz-Signature=bac9c98c3d7c7f0454ceb171880af080d4cb997df207ad84ac1835ac236f0855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

