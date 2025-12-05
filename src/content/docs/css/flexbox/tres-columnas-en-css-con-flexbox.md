---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYOXZHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYJXX96F9Uikw1Zz48SbVyiKqcmiJJ4j%2BOxlsDxtc%2F8AiA0Nuhn1FOB5x10lN4SbsYh%2BsF%2BR6YxHRMU11YXCPpioyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzYwre8p5H69ZJ%2BJjKtwDmsQoyW50IuPLrr722f4Oz3eBKePY5r8ZNZ2dTPCQDPYeMu1nurZw3uBdO6fgcSyc10hNqwRTQgkPhZZKq6ZGutO2lrxe%2FXvxBAB2MtZL5jMOKILpGO1YmLSXcwj3rkSU%2BJ4gRxYqDg9bAtonTsN2PH8tAVSZqDM3DDzu1LYq5U68RrpE4ySrxJDI7Xvu7E7GDErpAOmHx8i6bwDP31Tffc3II5xqMoiyZkfan3vJFYvnKqwAeNO0PbILYbGpEfgXslsF8aRzWY44%2FgChdSBpchT5LiK0dFLUKrAxE3zuHR%2FSx94T2j7teIVCP5Nl0nG6xb%2BPAgUGK2Fog2wSlhNyQYOztCHJcsU8EA3%2BOZnNlatp31I9Q4UD88bjd%2FNYw1vC34zvVnDikOaYDa2Hs%2BUgQdLqC6GXj2Cj%2By3Dp%2BpvLmdcGl%2FmNoFDS6dN0OYfttzLfqLpKWAK1yHR5iGwoZni3oxa4ygA4AKyJ4ASKdBpr2oJnIQjQ1726uzMROVXsBRAYX3Vi0Nq3rAG9n05F71nAP%2Fam%2BCLSfwicX1Arn7SlnGbgdObii11GaBzW3X57M7oIRAlVYUN3uHYWEYOHu2EuYnOwkdysZgYsKj0dXDQj9mMFQphBosy0SvFcZkw69XKyQY6pgHbewW5nZHzSPWUedlkehHQlLaKAjQJo%2FQZCGsM33Grac7L3r4EZh%2FLJdIYxr5Pak9NmZmBPMwNvhGyGlK%2FpFHJVSxnc%2FjZdtEmgtswytkpxJ1kGB0UK836YhcSIdhwoK%2BG371tv9zLuC6zAFM5mwrvtM54vH2M76%2FoIHH2XrXmJLxAEhfZHQ3kDNqwgSXALqTCM3Yle46V6EwlOPpepXxy1fglrv%2F%2F&X-Amz-Signature=146b3389b105383751c5c81d5a7c889ade91a3b93569a8b7009eeb1c98455f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBYOXZHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYJXX96F9Uikw1Zz48SbVyiKqcmiJJ4j%2BOxlsDxtc%2F8AiA0Nuhn1FOB5x10lN4SbsYh%2BsF%2BR6YxHRMU11YXCPpioyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzYwre8p5H69ZJ%2BJjKtwDmsQoyW50IuPLrr722f4Oz3eBKePY5r8ZNZ2dTPCQDPYeMu1nurZw3uBdO6fgcSyc10hNqwRTQgkPhZZKq6ZGutO2lrxe%2FXvxBAB2MtZL5jMOKILpGO1YmLSXcwj3rkSU%2BJ4gRxYqDg9bAtonTsN2PH8tAVSZqDM3DDzu1LYq5U68RrpE4ySrxJDI7Xvu7E7GDErpAOmHx8i6bwDP31Tffc3II5xqMoiyZkfan3vJFYvnKqwAeNO0PbILYbGpEfgXslsF8aRzWY44%2FgChdSBpchT5LiK0dFLUKrAxE3zuHR%2FSx94T2j7teIVCP5Nl0nG6xb%2BPAgUGK2Fog2wSlhNyQYOztCHJcsU8EA3%2BOZnNlatp31I9Q4UD88bjd%2FNYw1vC34zvVnDikOaYDa2Hs%2BUgQdLqC6GXj2Cj%2By3Dp%2BpvLmdcGl%2FmNoFDS6dN0OYfttzLfqLpKWAK1yHR5iGwoZni3oxa4ygA4AKyJ4ASKdBpr2oJnIQjQ1726uzMROVXsBRAYX3Vi0Nq3rAG9n05F71nAP%2Fam%2BCLSfwicX1Arn7SlnGbgdObii11GaBzW3X57M7oIRAlVYUN3uHYWEYOHu2EuYnOwkdysZgYsKj0dXDQj9mMFQphBosy0SvFcZkw69XKyQY6pgHbewW5nZHzSPWUedlkehHQlLaKAjQJo%2FQZCGsM33Grac7L3r4EZh%2FLJdIYxr5Pak9NmZmBPMwNvhGyGlK%2FpFHJVSxnc%2FjZdtEmgtswytkpxJ1kGB0UK836YhcSIdhwoK%2BG371tv9zLuC6zAFM5mwrvtM54vH2M76%2FoIHH2XrXmJLxAEhfZHQ3kDNqwgSXALqTCM3Yle46V6EwlOPpepXxy1fglrv%2F%2F&X-Amz-Signature=fd7295584d1ff22cec4613002fa47b901397c51abf539c362886313c798b3064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

