---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3FEOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzHFWyaVwnYHQuWfhkp8O%2BDMwsJYZ%2BzhjwUoaU0PM7wIhAIWYHTJMGJUUds3pdO8B2FMRGlIK0%2F3OLBrB%2FKEZU4jYKv8DCE8QABoMNjM3NDIzMTgzODA1Igx6Gyqcsortsk3tr6wq3AM6WDNhwmXdNOeljl0kG%2B6yzS2SeiYDZyGkyV72HCtaQb4SiWfr2cghB3BQq4O6ikp1JARRKeRS2Thb0IOT804jfSMLcps4M5Nu%2BZ3NrquepyBUoe46Eg4StqqZvr7xw7d7N1TlBPhwTtJ8AiW%2FwsStRRFvCulH99kE6BToYh40TUjMxUO%2BjXa4XFculr%2F7ho7Ho6w5Gr2wB7J%2B56yNzQERDYLETPCHJK6PytqCkb4GE7A1ndsmnYO05BagJCMeRtY%2FUtDvHMFvcUu25KzhCpkIFwYYG0%2FSVX81nAKM0oPK%2FTcfpPUrdrrSFQNO7kiEiH6o7IMtcaHXCz2cql1hlbZFp7f5bXlAUIP%2Fj%2BfC667rTmt%2FLzmCPmO7MRFrpVF7QOQOrruAwO%2FPNegv6ejJMyeXKwWwDkFvy4%2BxoLKnKzPR5C2w72mZ19VJgsd%2B6Mt2XN864rOSJWAAScGGvno3mKCGC3wVE2l5MhlWTJNY44hyffIcIr4QleNIlvuy2CWPsQ3HkcXEz8SN0Vfo1a3syeGtIktFBPzePRd2qDMmquqe0q7D7qGNAvP%2FQf8UuKctAL1PJjcwEOrmvHFrE9SVoGrkmzv3qnrZv%2BHrrXN3IM9Sd4Nncu4%2BuRbcf%2BdeeDCMjMjJBjqkAV7%2FPB%2FCR3kUNcWJGXfnCvRHskhXcMFYTfSi8eT%2B0AwGg%2BvdZ7%2BjNxUJVluU11KRpv9Uh6NN6LZXFtMhSZbvgghFvFYkt0EuAHFtAwaXcDo6nFGg7gk3vlx1j2aFGo%2FCpoYTEY86ybqqmsk5I0c0q0UxQJTIeqVVFKYlHCsQUoFhkgpOA1km1TezxHFh0eBN23KVhqZKD%2BUIDpGI2JP%2Biw9mRAhx&X-Amz-Signature=a2bc7a5569cf96a4d21301f80a69bc8dbef9868b2a56896b24d268e94284696d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3FEOP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzHFWyaVwnYHQuWfhkp8O%2BDMwsJYZ%2BzhjwUoaU0PM7wIhAIWYHTJMGJUUds3pdO8B2FMRGlIK0%2F3OLBrB%2FKEZU4jYKv8DCE8QABoMNjM3NDIzMTgzODA1Igx6Gyqcsortsk3tr6wq3AM6WDNhwmXdNOeljl0kG%2B6yzS2SeiYDZyGkyV72HCtaQb4SiWfr2cghB3BQq4O6ikp1JARRKeRS2Thb0IOT804jfSMLcps4M5Nu%2BZ3NrquepyBUoe46Eg4StqqZvr7xw7d7N1TlBPhwTtJ8AiW%2FwsStRRFvCulH99kE6BToYh40TUjMxUO%2BjXa4XFculr%2F7ho7Ho6w5Gr2wB7J%2B56yNzQERDYLETPCHJK6PytqCkb4GE7A1ndsmnYO05BagJCMeRtY%2FUtDvHMFvcUu25KzhCpkIFwYYG0%2FSVX81nAKM0oPK%2FTcfpPUrdrrSFQNO7kiEiH6o7IMtcaHXCz2cql1hlbZFp7f5bXlAUIP%2Fj%2BfC667rTmt%2FLzmCPmO7MRFrpVF7QOQOrruAwO%2FPNegv6ejJMyeXKwWwDkFvy4%2BxoLKnKzPR5C2w72mZ19VJgsd%2B6Mt2XN864rOSJWAAScGGvno3mKCGC3wVE2l5MhlWTJNY44hyffIcIr4QleNIlvuy2CWPsQ3HkcXEz8SN0Vfo1a3syeGtIktFBPzePRd2qDMmquqe0q7D7qGNAvP%2FQf8UuKctAL1PJjcwEOrmvHFrE9SVoGrkmzv3qnrZv%2BHrrXN3IM9Sd4Nncu4%2BuRbcf%2BdeeDCMjMjJBjqkAV7%2FPB%2FCR3kUNcWJGXfnCvRHskhXcMFYTfSi8eT%2B0AwGg%2BvdZ7%2BjNxUJVluU11KRpv9Uh6NN6LZXFtMhSZbvgghFvFYkt0EuAHFtAwaXcDo6nFGg7gk3vlx1j2aFGo%2FCpoYTEY86ybqqmsk5I0c0q0UxQJTIeqVVFKYlHCsQUoFhkgpOA1km1TezxHFh0eBN23KVhqZKD%2BUIDpGI2JP%2Biw9mRAhx&X-Amz-Signature=f7294cbde9d165928405ec368e6b6c25126c54d02697f713ce60846ee32dd02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

