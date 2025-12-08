---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWWRZCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfbX0F9MSS4jdP62QJ7AQyDXuKjpVP6sFerGk%2FK0XYbQIhAKoEW1M9Udc9zHKxImi7QuRjGPb1fgFUcr7VuIw0FFDEKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9tlKDvBkncic03Gsq3AMf%2B8C%2ByF%2F33jmGwcBbUPRJeHrjIQWI4og%2BvCdQG2AXI4Xc%2Fux9iCJZRv1EihuITYw%2FOr6oqSQkvsBgCgfaol5Yd3Ht%2Fl29uyTiCzUlxWgG%2BYSOhgzBPmRvVbB8M7y45LNgxiPGYR1iCsBX3BK33jfQ6lETMyNnPp8B4JHjYujPQeKw2Hrpc3%2BzHsRbJPvDZIrdQyUUuja0ApgqsXrMTF%2B4Uu%2F1HMG2PQFdJxw6wT4fxODmVTlDZEW1RnbLmtHszs%2BYWmpbzGHgd7QfaAS6f1xE0UtPBYtVvl%2FfIzaSJBzKTeP73QNikv5%2FKmNBJnkcDeoH488aJOmwPn7eXATAD%2Fwe6Pu7668j6wIovPxk%2FProf8%2BcUvaICm5vid7P1x7KbTMPOl6Tp4SoHfmXRWmgP8h%2F%2BFAAx4%2FPS9qq7qPbtKvZvMn34iulc%2F9mHxHMfVcQIlYmA440YYL9343wtJGX36FsxfjcOQNuAEFDVjLP2lU34DIWj5GXPIxMqu2iP3I51KD8trddLaPIzvIMjoOt%2BDE6SEkmlb6AasPQxo7bE%2FbqifXPkIm7fLRrhs5TIlzhRpF1KIhZ9pWe4DnTFDODz42IocLlfwNkSirjNmrHXuDcILf7Z1%2Fb3LYNhnTZGzDBkNvJBjqkAU7iBR49rSq1Tg62lqQkZ6rsvn9ewyWabuWcSXIGIolxYbbVybKXIK8rQMte2ykpNEv7TYg%2Bg9gbuVL3HCjqgTN%2FTzDSJNfvuPWQFQM%2F0RMq3l%2BBJ82HB6C3TsZ5q0eDw6CzPnx8aNGDVg4lQNM%2F0rBqYPj8oG9ffkWBi1keOxziaNeIHKF12apd8YBdDv2NCW%2BCFfTRQpH7dzccbXAkyO2LWS8a&X-Amz-Signature=add50610f5dc2f3d134a90016e942c4030b9703250c1b3c1ad3b354ace47db7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWWRZCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfbX0F9MSS4jdP62QJ7AQyDXuKjpVP6sFerGk%2FK0XYbQIhAKoEW1M9Udc9zHKxImi7QuRjGPb1fgFUcr7VuIw0FFDEKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9tlKDvBkncic03Gsq3AMf%2B8C%2ByF%2F33jmGwcBbUPRJeHrjIQWI4og%2BvCdQG2AXI4Xc%2Fux9iCJZRv1EihuITYw%2FOr6oqSQkvsBgCgfaol5Yd3Ht%2Fl29uyTiCzUlxWgG%2BYSOhgzBPmRvVbB8M7y45LNgxiPGYR1iCsBX3BK33jfQ6lETMyNnPp8B4JHjYujPQeKw2Hrpc3%2BzHsRbJPvDZIrdQyUUuja0ApgqsXrMTF%2B4Uu%2F1HMG2PQFdJxw6wT4fxODmVTlDZEW1RnbLmtHszs%2BYWmpbzGHgd7QfaAS6f1xE0UtPBYtVvl%2FfIzaSJBzKTeP73QNikv5%2FKmNBJnkcDeoH488aJOmwPn7eXATAD%2Fwe6Pu7668j6wIovPxk%2FProf8%2BcUvaICm5vid7P1x7KbTMPOl6Tp4SoHfmXRWmgP8h%2F%2BFAAx4%2FPS9qq7qPbtKvZvMn34iulc%2F9mHxHMfVcQIlYmA440YYL9343wtJGX36FsxfjcOQNuAEFDVjLP2lU34DIWj5GXPIxMqu2iP3I51KD8trddLaPIzvIMjoOt%2BDE6SEkmlb6AasPQxo7bE%2FbqifXPkIm7fLRrhs5TIlzhRpF1KIhZ9pWe4DnTFDODz42IocLlfwNkSirjNmrHXuDcILf7Z1%2Fb3LYNhnTZGzDBkNvJBjqkAU7iBR49rSq1Tg62lqQkZ6rsvn9ewyWabuWcSXIGIolxYbbVybKXIK8rQMte2ykpNEv7TYg%2Bg9gbuVL3HCjqgTN%2FTzDSJNfvuPWQFQM%2F0RMq3l%2BBJ82HB6C3TsZ5q0eDw6CzPnx8aNGDVg4lQNM%2F0rBqYPj8oG9ffkWBi1keOxziaNeIHKF12apd8YBdDv2NCW%2BCFfTRQpH7dzccbXAkyO2LWS8a&X-Amz-Signature=a4e1c560665665d27f97179ff4dd0220c27564af1cfc6bce479c829ea48fe24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

