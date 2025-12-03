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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4JT2WG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCdKi3IhE9eh0gWg7vyhLieJSRA%2B8wLJ3hFr46ZNUeb9wIgNbPEzaBUFjGIWLKGfWmr0DVOJsxvtGXMllhf4sd%2FXU8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLYMCJOQNlG7LYtfyircAz31RPz1%2BEfUkpqmqkRSDMGVZ1rG4NyslqCwxkSeLYNDbaoDWc6HzdnLGoLki8pYLne6%2BDIEBa7G5Ma1t7m8weU2DUUcP5KlAatodoilceeKdDRgW05fTPD0Hrk6wCaz1Ypu3gXloTMtKowloQiQ4T7NBtQitDAO9kfVFdh98rid5WUEH2FgTJdX9aFJ8fDvd%2BCmHu%2BNuPbs1iGaB9vx0R%2Bci75q73m7dyxEpLk0zKkwn2MrySXWvWywya0ohWuXTBG3zhNOjIfJBx1rJEFkDyy9rgUZqqq4NkGLjGb2fJa9BNrBPwdMR6xjtHdzmgx0000Yahnr84p8i643kK76%2FVCcyrjqwNUSbybXxT042T2HIdUv4drzCZpDcCL6HRPj6q9vupgPumAZwGQZAneYkHgPw0itq1f5p0HT%2BDDCOrSqombXC4BDEt27MaOho3oKTShVcFjFaKbM8Etra5hzZo6ZLUxoSXMlpl5XxUXqSVjwWCb6UVzYY%2FP%2FFyJYTFq%2B0%2B4Pz1eJtM4zb7QXk5u%2BFNl7llMFvv0U33DDExtiQscW%2Byk35rQyjnZ9x9TNfM6weQJ77pOF4NQbeEzQZ4wOuZiTQ1rQD3NXd0hDmDBupQjrUaRcMVGjDqqpRyxoMOP2v8kGOqUBjlSacj%2BSvHsEZW3F0QwL40Uu220ojjyQ2XNTsbETeUHgP2ZsyzMEtytl%2Bucp%2FfYsdWuT25CUPfuiIBuMk0J7LkmpWUiUiZQ2ITDVUgGAyyomMwtjDuNfiY3fr7Ma2fFanIlZ0wWxaHZuBt5y5PFF5bnULUSpAOok6NyaZ%2BMmqy4fO8Qh9gbzA%2F6Hh0i5LpiqxRrknFwibg6f9koWLvEPZ0uEwXLq&X-Amz-Signature=e012fd47490848e4302b5051ea595b722d29666acaef33f1073f1745e66d4cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4JT2WG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCdKi3IhE9eh0gWg7vyhLieJSRA%2B8wLJ3hFr46ZNUeb9wIgNbPEzaBUFjGIWLKGfWmr0DVOJsxvtGXMllhf4sd%2FXU8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLYMCJOQNlG7LYtfyircAz31RPz1%2BEfUkpqmqkRSDMGVZ1rG4NyslqCwxkSeLYNDbaoDWc6HzdnLGoLki8pYLne6%2BDIEBa7G5Ma1t7m8weU2DUUcP5KlAatodoilceeKdDRgW05fTPD0Hrk6wCaz1Ypu3gXloTMtKowloQiQ4T7NBtQitDAO9kfVFdh98rid5WUEH2FgTJdX9aFJ8fDvd%2BCmHu%2BNuPbs1iGaB9vx0R%2Bci75q73m7dyxEpLk0zKkwn2MrySXWvWywya0ohWuXTBG3zhNOjIfJBx1rJEFkDyy9rgUZqqq4NkGLjGb2fJa9BNrBPwdMR6xjtHdzmgx0000Yahnr84p8i643kK76%2FVCcyrjqwNUSbybXxT042T2HIdUv4drzCZpDcCL6HRPj6q9vupgPumAZwGQZAneYkHgPw0itq1f5p0HT%2BDDCOrSqombXC4BDEt27MaOho3oKTShVcFjFaKbM8Etra5hzZo6ZLUxoSXMlpl5XxUXqSVjwWCb6UVzYY%2FP%2FFyJYTFq%2B0%2B4Pz1eJtM4zb7QXk5u%2BFNl7llMFvv0U33DDExtiQscW%2Byk35rQyjnZ9x9TNfM6weQJ77pOF4NQbeEzQZ4wOuZiTQ1rQD3NXd0hDmDBupQjrUaRcMVGjDqqpRyxoMOP2v8kGOqUBjlSacj%2BSvHsEZW3F0QwL40Uu220ojjyQ2XNTsbETeUHgP2ZsyzMEtytl%2Bucp%2FfYsdWuT25CUPfuiIBuMk0J7LkmpWUiUiZQ2ITDVUgGAyyomMwtjDuNfiY3fr7Ma2fFanIlZ0wWxaHZuBt5y5PFF5bnULUSpAOok6NyaZ%2BMmqy4fO8Qh9gbzA%2F6Hh0i5LpiqxRrknFwibg6f9koWLvEPZ0uEwXLq&X-Amz-Signature=1325768d09b6cd7c299c1c665e477bed19ebf07ef94192b95c1ff7e2f19bcfd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

