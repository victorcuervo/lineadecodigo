---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTB42EH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHuwb9SMj0o7NQ%2FQBirOR7YPd6vyAgNssgmezX6zNPAIhAMpN6VBdNjVWPv0r1sIBEoWYtMS2D0osNJ9rMiKSnfL9KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtIOFt5lftYgVNNnYq3ANvQ%2BJVjv3I8JMyZsgV0ZCbEmWftIn2p65flnTiPqTSFKZ27eYgHjEr5rR4sy7S5OlDACTPpAaJ6gXOyCyiTr%2FOBG7ekPOpr88e6jHhwxq2tEnySAebtvj9uP6f%2FvBt2MajzWLFg3GyvDzhv2Oawrx5QwDNWZG1Pqh17IJ38%2FT7L2Yit8xdE%2BOO4WrxmbZXLNgMarpFOm1PqOK0IKWe0jFRAv2Nt6Z5psGmRIbhIP%2FS3ylxVV1k0ZKGH0sARVNEEn0bW2HVDOWBdgoD5QBqTKIO3hvu7Jr3KjE7YODZPn6pSsznsQ3a1TMz6k9qmZF8c0icqU2JF9it%2FX3r1s4htoQrK7AGoqDN8yUUJicFzTSWlFT5RvUA4FUUAffVmYvaSgZ0I2FkydOJxIa6g0sGe0MNZXC218VMDabUZ6kpExKHYUxh%2BfqH3e7l%2FgE2KTYoEZQE1tbs%2B9bT1cizYURh0jwi2xn%2FPJg60KumTXALHdMFy3L7WyYMjDyAg8h78cl1tgkwskNckaFp10Xr9HqYcqxuSjWLHJ3njKpPDp1FBQX4r85vMTezLrWPaSrmhC5cONwmJbqxrYGSh26VzYljosZdyVHuyK8szzfBoMHB3NBTP%2BsRAjjfoYOjLR7jNjDniN%2FJBjqkAb5C0Be3j6hh7rdZi0XezTEjlVd4QNYIDKWJdjGocNx2q7emPt9pYDlZ1fWWpPICBevkyrlgsPEga7z4sgc%2FbTdXEDcBQC%2Bznm%2BLrMYKkckjCpvwgLl%2FqTf3Yt0qINIK2RbVhy8ggtW263%2BI4RzhP1ZxEIJbBAf9ncT%2BcP%2F7ZSbQ1EssVXC29wcDxIllh%2BFe4Cm8nOvCI%2BFikYvjR2cKLSi%2B4PQQ&X-Amz-Signature=6146515c77993e87011a352509a122d8219a0859258f39bc75a64f0326a3e220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOTB42EH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHuwb9SMj0o7NQ%2FQBirOR7YPd6vyAgNssgmezX6zNPAIhAMpN6VBdNjVWPv0r1sIBEoWYtMS2D0osNJ9rMiKSnfL9KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtIOFt5lftYgVNNnYq3ANvQ%2BJVjv3I8JMyZsgV0ZCbEmWftIn2p65flnTiPqTSFKZ27eYgHjEr5rR4sy7S5OlDACTPpAaJ6gXOyCyiTr%2FOBG7ekPOpr88e6jHhwxq2tEnySAebtvj9uP6f%2FvBt2MajzWLFg3GyvDzhv2Oawrx5QwDNWZG1Pqh17IJ38%2FT7L2Yit8xdE%2BOO4WrxmbZXLNgMarpFOm1PqOK0IKWe0jFRAv2Nt6Z5psGmRIbhIP%2FS3ylxVV1k0ZKGH0sARVNEEn0bW2HVDOWBdgoD5QBqTKIO3hvu7Jr3KjE7YODZPn6pSsznsQ3a1TMz6k9qmZF8c0icqU2JF9it%2FX3r1s4htoQrK7AGoqDN8yUUJicFzTSWlFT5RvUA4FUUAffVmYvaSgZ0I2FkydOJxIa6g0sGe0MNZXC218VMDabUZ6kpExKHYUxh%2BfqH3e7l%2FgE2KTYoEZQE1tbs%2B9bT1cizYURh0jwi2xn%2FPJg60KumTXALHdMFy3L7WyYMjDyAg8h78cl1tgkwskNckaFp10Xr9HqYcqxuSjWLHJ3njKpPDp1FBQX4r85vMTezLrWPaSrmhC5cONwmJbqxrYGSh26VzYljosZdyVHuyK8szzfBoMHB3NBTP%2BsRAjjfoYOjLR7jNjDniN%2FJBjqkAb5C0Be3j6hh7rdZi0XezTEjlVd4QNYIDKWJdjGocNx2q7emPt9pYDlZ1fWWpPICBevkyrlgsPEga7z4sgc%2FbTdXEDcBQC%2Bznm%2BLrMYKkckjCpvwgLl%2FqTf3Yt0qINIK2RbVhy8ggtW263%2BI4RzhP1ZxEIJbBAf9ncT%2BcP%2F7ZSbQ1EssVXC29wcDxIllh%2BFe4Cm8nOvCI%2BFikYvjR2cKLSi%2B4PQQ&X-Amz-Signature=e0bc42a16f1cf0465b19c2959543cb4cbfe16a6ba6237066f25a77e6dc56df1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

