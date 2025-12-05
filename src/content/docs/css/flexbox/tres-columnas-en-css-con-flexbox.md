---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDT62JC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnCPmVHtb71bowrISZ5Q9QWDsCHDHbQkd2lwLSSpJYwIgckMY420jTTyY%2FUHhSZLd8DArEX1nov19GdpNUn56zyQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDI6%2BTO36K6jfILoL%2FyrcA%2BYEyPXXOOqeJ9%2BsOD7CbxeId3aTp2aMlbo1Hdxjj22kdOWYknQN3qwfpf%2FcCv1J%2FHeXcdK6Q%2Bx3lw0HJepluQuxxNxqRgCJq%2BZZnMyAWRRxSzeDuESIy0bjsk%2F2qaBLubRzx7qJdI7BcT%2BRR7m70rMhwgy%2FBv5z7CzWLSGm%2FjE10mI89dJfWlnzwDx%2FyhL0r%2FveYU9yOniUSbCj3z0SA3HkQckj%2B4UHiFKfl1mmCylMZnyI51TFOR%2BfUqV0YW99uR0TZHJeB6bW%2BYdGOa2PhJUA2RW8CE71N%2BzydhjNCCtZUZ1ULLPzcPmTX77zefB%2F%2FA02udVsGqWO3rWP0ZR1tKh1z8szPf7KOTPXqNWbkLGoxMF2SEXV8Hz4juZ1KBC1x0%2FoySaQb8u9bw7q8UOB8LFDC0AquxddYhzDp3jdlvaLd5K%2BI2LTwIMnIDB2aYf%2FsMeR1WuZgL%2Ff0QpatGn4TgYtEjdPIouFz6YvWRhLCInmSpWNjPMLYo6VjzmWVkFaJTXJyYfwUAj77X0mim4scW7fVq8pWGh10%2BJXjfKSye57Ixhint7UO6rnduDfSSD5eMK0NByf%2FYpcwZktAo4ejJF0s1kVw8BAhvmbldZRtmOD2SjGjmEZ%2BVMi1G%2BWMOXqy8kGOqUBPy8U8f7YvEoZX%2FMe4A%2F2aNrunQv9fQe051I7rgCnu534XUCIXJV%2BUsZENwTsMgZWeHy16%2FMK1%2FPY6gzgVjzMLf4X5uKCVOfzwQE%2Fkb1UfW8e5HLUdVuohO5RIHW4ok9Oh79JbpTyxdnql9U341z5kIFwUD1fXfWisHCiIRp5u5hQ7XahQ2luwd47OLJ6M2T8VDL9G%2FkMEUaX827mIQaVH6QQpmwH&X-Amz-Signature=9a64231db1f89215a11168b306fb841105605facec5e9a5ba7ea8bcdc8d7b995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDT62JC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBnCPmVHtb71bowrISZ5Q9QWDsCHDHbQkd2lwLSSpJYwIgckMY420jTTyY%2FUHhSZLd8DArEX1nov19GdpNUn56zyQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDI6%2BTO36K6jfILoL%2FyrcA%2BYEyPXXOOqeJ9%2BsOD7CbxeId3aTp2aMlbo1Hdxjj22kdOWYknQN3qwfpf%2FcCv1J%2FHeXcdK6Q%2Bx3lw0HJepluQuxxNxqRgCJq%2BZZnMyAWRRxSzeDuESIy0bjsk%2F2qaBLubRzx7qJdI7BcT%2BRR7m70rMhwgy%2FBv5z7CzWLSGm%2FjE10mI89dJfWlnzwDx%2FyhL0r%2FveYU9yOniUSbCj3z0SA3HkQckj%2B4UHiFKfl1mmCylMZnyI51TFOR%2BfUqV0YW99uR0TZHJeB6bW%2BYdGOa2PhJUA2RW8CE71N%2BzydhjNCCtZUZ1ULLPzcPmTX77zefB%2F%2FA02udVsGqWO3rWP0ZR1tKh1z8szPf7KOTPXqNWbkLGoxMF2SEXV8Hz4juZ1KBC1x0%2FoySaQb8u9bw7q8UOB8LFDC0AquxddYhzDp3jdlvaLd5K%2BI2LTwIMnIDB2aYf%2FsMeR1WuZgL%2Ff0QpatGn4TgYtEjdPIouFz6YvWRhLCInmSpWNjPMLYo6VjzmWVkFaJTXJyYfwUAj77X0mim4scW7fVq8pWGh10%2BJXjfKSye57Ixhint7UO6rnduDfSSD5eMK0NByf%2FYpcwZktAo4ejJF0s1kVw8BAhvmbldZRtmOD2SjGjmEZ%2BVMi1G%2BWMOXqy8kGOqUBPy8U8f7YvEoZX%2FMe4A%2F2aNrunQv9fQe051I7rgCnu534XUCIXJV%2BUsZENwTsMgZWeHy16%2FMK1%2FPY6gzgVjzMLf4X5uKCVOfzwQE%2Fkb1UfW8e5HLUdVuohO5RIHW4ok9Oh79JbpTyxdnql9U341z5kIFwUD1fXfWisHCiIRp5u5hQ7XahQ2luwd47OLJ6M2T8VDL9G%2FkMEUaX827mIQaVH6QQpmwH&X-Amz-Signature=bfa3bbaf9cad0e43060bcfa562f747e9466444a4979ee6f689fd1723ca1dfa2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

