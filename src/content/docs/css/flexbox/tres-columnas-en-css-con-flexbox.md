---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OCYMBL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5LhGlxnA5HrkgmdjAcUQuj8vNwUmbL2eQjocJk3ioAAiEAvaGdbNw1O57rPrrf1WlSRzeRkTdmnXERz4IL2Ytz1c8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIAj8PyqGmNTjesaPyrcA6%2FL2Nh1bfL3Kf%2BHWif2X96rDwEFxhl1lq5Ov%2BuspT%2BDkVmqpqXrvhS%2Fpt3xON%2FlY8k12s5dnWZz6fwtKt4imC%2B7wXsOyoUkk513HbSOUi9ksfUZTTeEoiymf2rYLH%2BjGiBdCPKLrPMjdCxTPVcchf3ennPFxaFPT4UZe8GWGaxy4ZRWAQb1TCU7yn4ZhOWQZD2t7ixMl%2FgLGS5%2F3bmBKsaCvH77slYOmCGevIZEjGtyqWLgTmxtsGbVQJnegMaN5NbjgaeaUx95%2BhCsAMwqAKKicHayoTeqEiMNrArioFYlkF53mEqVta7mBrsiqWtg7AIzesEEC9rZtYDbM6GhNZ3ORRhLd5NTOGu3uS5%2BjgshF46rPXRf7%2BLcQN1hkZEH8hP1p8haEspMDZFnVHDkvTQr93bzjzaalT5XSumfuXAbWDDM1OLgxEO6CPwa5YNXaHJDHWxXPHVeiicJGUtIein4niTc4qM1Jb4NEKg%2BR2N7Qf2Ykx%2FBt5TeCePFjmJw11sqZWstdIOIb12l6p%2Fx8i342ShsIi8Ewj%2FhmesAZymqHx2MAYI8vtWffHXKDVaoPAxjcRYMSqDv6YkZjyqab8Dlsj3dYtABUzpWnlR4RFkTVq7MyyFDIbFWGdoCMMam0MkGOqUBQU5L6dtSJ6O8uWT%2F4OeCxpHc4Qks4BrRAzgjk9xjEgyFFnwaaO4hw%2F1bjCbK%2FfnMZ6ZqY0na9DvePJbSa%2BDppzpQZqESBJIYuuKrwZi6wJSNqWWGIw3E2sRBYZ6TlK4UaG40PKb22HLNWEFyG8VD6Rc35bekgXtmD2gw2m5%2B0Tzs92vHMaw1gf94nIXTuvJVY7md%2BGtOAnkYviM7eMBtcEnMyU85&X-Amz-Signature=96d546d9ebbe2b740bf2404406202b7f3818f5be209c6a4992333eefb33b03e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642OCYMBL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5LhGlxnA5HrkgmdjAcUQuj8vNwUmbL2eQjocJk3ioAAiEAvaGdbNw1O57rPrrf1WlSRzeRkTdmnXERz4IL2Ytz1c8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIAj8PyqGmNTjesaPyrcA6%2FL2Nh1bfL3Kf%2BHWif2X96rDwEFxhl1lq5Ov%2BuspT%2BDkVmqpqXrvhS%2Fpt3xON%2FlY8k12s5dnWZz6fwtKt4imC%2B7wXsOyoUkk513HbSOUi9ksfUZTTeEoiymf2rYLH%2BjGiBdCPKLrPMjdCxTPVcchf3ennPFxaFPT4UZe8GWGaxy4ZRWAQb1TCU7yn4ZhOWQZD2t7ixMl%2FgLGS5%2F3bmBKsaCvH77slYOmCGevIZEjGtyqWLgTmxtsGbVQJnegMaN5NbjgaeaUx95%2BhCsAMwqAKKicHayoTeqEiMNrArioFYlkF53mEqVta7mBrsiqWtg7AIzesEEC9rZtYDbM6GhNZ3ORRhLd5NTOGu3uS5%2BjgshF46rPXRf7%2BLcQN1hkZEH8hP1p8haEspMDZFnVHDkvTQr93bzjzaalT5XSumfuXAbWDDM1OLgxEO6CPwa5YNXaHJDHWxXPHVeiicJGUtIein4niTc4qM1Jb4NEKg%2BR2N7Qf2Ykx%2FBt5TeCePFjmJw11sqZWstdIOIb12l6p%2Fx8i342ShsIi8Ewj%2FhmesAZymqHx2MAYI8vtWffHXKDVaoPAxjcRYMSqDv6YkZjyqab8Dlsj3dYtABUzpWnlR4RFkTVq7MyyFDIbFWGdoCMMam0MkGOqUBQU5L6dtSJ6O8uWT%2F4OeCxpHc4Qks4BrRAzgjk9xjEgyFFnwaaO4hw%2F1bjCbK%2FfnMZ6ZqY0na9DvePJbSa%2BDppzpQZqESBJIYuuKrwZi6wJSNqWWGIw3E2sRBYZ6TlK4UaG40PKb22HLNWEFyG8VD6Rc35bekgXtmD2gw2m5%2B0Tzs92vHMaw1gf94nIXTuvJVY7md%2BGtOAnkYviM7eMBtcEnMyU85&X-Amz-Signature=08284d7aa20af509eabd9587b845820ead2fff3f68025520649e28823b7ed8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

