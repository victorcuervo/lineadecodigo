---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3EI5RF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKXeF4fTG3fvXk8Qlt0lrYjS5nJaCZwfCPaAlXEng5qAIhAIMZbREbupDPI6dPAhKKOlTOjkCy%2F8i09HEZ3mN4GlNAKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3rrBmwY3PnjBPUgq3ANSmsD8HXKOmx4EY%2FQZWz5Ap2HSGMEPdNgpmiKosHlougVN3fAxANzagWRrh8DG3IQg6rNtnw6OsgYyeahZA%2FBxeGe%2FZakKqAk0jSqgLWhKJ4iBWv5Eeod%2Bd%2FzVr5u%2BPTt6QWLnG0iRunvMMHCdY1jOSoDZxQ8cV4SOF2SryW%2B2KwJPkb%2FlWzohHwAWHUqfeAJWJIcqD56fdHTC8G3FVS69ywbEeU5o7FAGBU7Vt%2B0gQlcqb9JqzenP4J7Gj9ctFiTeYPiKytKUXpUk3Dq7Q2tji8kE%2BPpmhr1R6jkQuhmDaQ%2BI2rdtOCVsK%2Bb%2Bf3%2BTw3T0crHY74g4EmFGI2aQmE1q4cFOcg42K2RS7PIODvJHdDuzYxK6Hq9kLmRgXjm%2BXyI0CrG7CMcuWY8cANXWxsL8vmncPAuiBOEGA%2BpwySyens8xRhIwNEJLr4rPyfd5rqMg5bKX4QjrJ2ifxn%2FisG0aG%2Bs5xaGWbINN%2BaT8IJdwRuUL%2BIBXIN08KTpg06P0H0wY847pucmrdMj%2FWPYFWK107Fs2Z6Jq5DvDMQSsyCxfmIwf%2FIp22T7R44Y7PWimZ84pI1h6iHqtH6z5nefJP7zkSvopv7mMnh%2B5hND8ROG39OhXmWmp%2FAxzBINJJzCNpN%2FJBjqkAbUihz%2Bmz4ZuPX05oUS%2BH9v871YWLZ7CvpQNpDzdbXmTABU34qhmzlPrGRwwJJemYtTShd%2BGenmwbPnvlFOKFnHaTkdCdoSAcyuk3%2FAYvpTLCHQEfFqBJf7vZWEPms7BULpA1zq%2Fbl5uUTCNvEMMfMkYLUZkL%2FCg4byQFuujCr0DO4wN0ENcQ6RrgqaMqCh3NRqYlfjA5vpBGmPRgRC%2FsGa75b%2Bo&X-Amz-Signature=5b3c3ce19e1493611a57d230a133f2098c6b8c7f8ff2b0df260312d98649cdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3EI5RF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKXeF4fTG3fvXk8Qlt0lrYjS5nJaCZwfCPaAlXEng5qAIhAIMZbREbupDPI6dPAhKKOlTOjkCy%2F8i09HEZ3mN4GlNAKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo3rrBmwY3PnjBPUgq3ANSmsD8HXKOmx4EY%2FQZWz5Ap2HSGMEPdNgpmiKosHlougVN3fAxANzagWRrh8DG3IQg6rNtnw6OsgYyeahZA%2FBxeGe%2FZakKqAk0jSqgLWhKJ4iBWv5Eeod%2Bd%2FzVr5u%2BPTt6QWLnG0iRunvMMHCdY1jOSoDZxQ8cV4SOF2SryW%2B2KwJPkb%2FlWzohHwAWHUqfeAJWJIcqD56fdHTC8G3FVS69ywbEeU5o7FAGBU7Vt%2B0gQlcqb9JqzenP4J7Gj9ctFiTeYPiKytKUXpUk3Dq7Q2tji8kE%2BPpmhr1R6jkQuhmDaQ%2BI2rdtOCVsK%2Bb%2Bf3%2BTw3T0crHY74g4EmFGI2aQmE1q4cFOcg42K2RS7PIODvJHdDuzYxK6Hq9kLmRgXjm%2BXyI0CrG7CMcuWY8cANXWxsL8vmncPAuiBOEGA%2BpwySyens8xRhIwNEJLr4rPyfd5rqMg5bKX4QjrJ2ifxn%2FisG0aG%2Bs5xaGWbINN%2BaT8IJdwRuUL%2BIBXIN08KTpg06P0H0wY847pucmrdMj%2FWPYFWK107Fs2Z6Jq5DvDMQSsyCxfmIwf%2FIp22T7R44Y7PWimZ84pI1h6iHqtH6z5nefJP7zkSvopv7mMnh%2B5hND8ROG39OhXmWmp%2FAxzBINJJzCNpN%2FJBjqkAbUihz%2Bmz4ZuPX05oUS%2BH9v871YWLZ7CvpQNpDzdbXmTABU34qhmzlPrGRwwJJemYtTShd%2BGenmwbPnvlFOKFnHaTkdCdoSAcyuk3%2FAYvpTLCHQEfFqBJf7vZWEPms7BULpA1zq%2Fbl5uUTCNvEMMfMkYLUZkL%2FCg4byQFuujCr0DO4wN0ENcQ6RrgqaMqCh3NRqYlfjA5vpBGmPRgRC%2FsGa75b%2Bo&X-Amz-Signature=a8b0b62752a456c43d234cfc3ab402aee4c484f416b7bd5577cd8adb829480cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

