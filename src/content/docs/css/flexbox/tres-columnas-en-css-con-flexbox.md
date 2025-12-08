---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIG4NX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjcWrlF5SiogeVOF3edIl2sUKT2gIxHmg9XO3IOem1AIhAMxIlbIofpZoxJvfL7rNo8MBZTCWthJ%2FuiSyy2IT5cDSKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjrWZzZsXfUNVAnKcq3APrSUUYmTmrXbjnMHO6U4XT7ORzhXXk9oYcE7ISitz2pRan5L6U5P%2FSIS8lwI%2B4dIgaQLAq20WGm1ROdRN4TGYYPHq8%2FNu8ukywM%2Fw3c1wp4Fxdoz4N3k9HF0800nLDotiZ5b0MMG%2BVwFmrfJdjRqRDl7gt7uf0qL7ZhR%2BLE5snR%2FUkhYgXOfmO%2FKqgw77OwghV9OenazXUqMSZjIJaCKADQqceFJoSCPrvjQbtHDf01R5NodH1J8LCQfW2V0m1Zwwvj4R3rk7pDRoKdyf28AWHd45%2Bmp1M3XkRR87VLy9yJLvu%2FiNygqBGt0yOzui0hfTqn2KrgYE9DOey6QxbnpuL9qsbl76YbEZ2litT8FDriKJyJua5ZuwLC%2BsJ8BEHX3dXBetVXROIylSv%2BsByCO5tKmv1suZ2rDipIkipU%2BocIovfs%2BnU8V55daHaKP6lNk8T7TB1p2KJhclHDsIXaHHaIGtsJT4t0TYaTPxrXfsTVgTJ3tJvjYbRGNeCUKMEp5qEqSiyKzAyMtNVdx6OjrRRTdFdi71RHg7%2BUgU6tWDOcODn%2FDlKlRlb0HL%2B6O6wdOUjuKc7fPzwy32vLcg2tBV6Ju6%2B%2Fy1Ujv4EbK6pbHRd4vnd9QMhYCtIJNH%2BETCAw93JBjqkAVjYaESBv3HquA0FGLepGU22LidOfd8pZ0Do%2FVOaXOHZfr1o4c46pCuTGmlkaqUMPlvwdCl0UGsY7s9kEgHQpk791c0BFs4rUuQlcO5HQPduNryJ%2F1otExUm%2F6uE3atUUGdsvklet9N3IuBfsAeWMoKrwjLuBy06ILoxg2vn0lcuoSKC%2FWfAkpFPpWSLevibGhiFGmYJXDZxrU7dElgqpFbDU5X8&X-Amz-Signature=4261d5fb7a7898d68db7d6fc379806edcad7569636e5b1930522741c8385d2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBIG4NX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsjcWrlF5SiogeVOF3edIl2sUKT2gIxHmg9XO3IOem1AIhAMxIlbIofpZoxJvfL7rNo8MBZTCWthJ%2FuiSyy2IT5cDSKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjrWZzZsXfUNVAnKcq3APrSUUYmTmrXbjnMHO6U4XT7ORzhXXk9oYcE7ISitz2pRan5L6U5P%2FSIS8lwI%2B4dIgaQLAq20WGm1ROdRN4TGYYPHq8%2FNu8ukywM%2Fw3c1wp4Fxdoz4N3k9HF0800nLDotiZ5b0MMG%2BVwFmrfJdjRqRDl7gt7uf0qL7ZhR%2BLE5snR%2FUkhYgXOfmO%2FKqgw77OwghV9OenazXUqMSZjIJaCKADQqceFJoSCPrvjQbtHDf01R5NodH1J8LCQfW2V0m1Zwwvj4R3rk7pDRoKdyf28AWHd45%2Bmp1M3XkRR87VLy9yJLvu%2FiNygqBGt0yOzui0hfTqn2KrgYE9DOey6QxbnpuL9qsbl76YbEZ2litT8FDriKJyJua5ZuwLC%2BsJ8BEHX3dXBetVXROIylSv%2BsByCO5tKmv1suZ2rDipIkipU%2BocIovfs%2BnU8V55daHaKP6lNk8T7TB1p2KJhclHDsIXaHHaIGtsJT4t0TYaTPxrXfsTVgTJ3tJvjYbRGNeCUKMEp5qEqSiyKzAyMtNVdx6OjrRRTdFdi71RHg7%2BUgU6tWDOcODn%2FDlKlRlb0HL%2B6O6wdOUjuKc7fPzwy32vLcg2tBV6Ju6%2B%2Fy1Ujv4EbK6pbHRd4vnd9QMhYCtIJNH%2BETCAw93JBjqkAVjYaESBv3HquA0FGLepGU22LidOfd8pZ0Do%2FVOaXOHZfr1o4c46pCuTGmlkaqUMPlvwdCl0UGsY7s9kEgHQpk791c0BFs4rUuQlcO5HQPduNryJ%2F1otExUm%2F6uE3atUUGdsvklet9N3IuBfsAeWMoKrwjLuBy06ILoxg2vn0lcuoSKC%2FWfAkpFPpWSLevibGhiFGmYJXDZxrU7dElgqpFbDU5X8&X-Amz-Signature=da218e731e89dc00e4138b367bcbc118b2c29b23f4f47cc45d3dbd984699aea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

