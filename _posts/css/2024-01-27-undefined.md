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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPUAOWI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCSSf8LOcN19xEkyIVPoGSiT4BXu%2BAHkbsj6TC6i%2BQQDAIhANhxn6yVh2LgZh05KywnCbeccLaXDUzOgsPbgUTIRvObKv8DCCgQABoMNjM3NDIzMTgzODA1Igx1jltUaX47JnNb3Bwq3AOnNabORQ3NR2YhV6om2m0tojYWb%2FUnq%2BtvBoMfWMqqYt4vLt3syBJc6VbW6f%2F2jsS1hrFoKcEKwDplMjW6vqEM8AojLXVZw%2FkJNjJO4pV9Xj02v%2FH6Kx0KmDBAt%2Fj9V5VmzxH5Z7FhBy6D5%2BbL6C866kKjOc20UP5mTSTCIj0p9uWju4mXBVh8mT2%2Ba4sfg1sdtOyBQaI793RZcTo1y1LFP2EBBXRhpBsEcAuUNSIYDr5io4xfg9PQjgIciEsmHVr%2FAu5Nv%2B2r8ER4kcPRwViLsCGKiCSPchvCWO%2FpEONmgJPHY0Hcf9MpSGMj9BN%2By2NidShMIpkljv37WdD5buYZm0YKUf4r2fpWbCEx5UVwOXfs8HbXeYanIw%2BroxdhZqZ2jPTPstHHA0v%2FXqFua%2BpaQZb8teYm%2F6QIpM5YFQY%2FGuRCPBKb%2By9sY9BwdP7ZFnd2QFqlxcBSadL3NQG%2F0uMJTxmdiavJ3a5V%2FvDevNxJIE2Pn63B8bT%2Ffwerw4C1hFY5szRV%2FDuqiPvJvC6Q%2BA%2F6J3Sxc0n6V4KBQV92MQbt0EpgG5XMMC5wtLWpI0NvXCOG0KSYT%2FROEuNFjszOfzbFfF5ZK6%2FiZyjx1XxkZFfSoiiqfCaX0lrqYHR8NTC0uL%2FJBjqkARW9ps4UolFvmqP16BIkrj0b3rgoGY%2BuTsePPyA2prDixbor2P6S4v6eEr9uADQSmwEU9iUIiHYUMn85f5cCvPaQehlWoXfsLh6HnHrXVm79AHrQE1WNa0sBTfvPaP2XyuUm9kNpN%2FWVuqnQwtRsVQ%2Bsx7iqjac8mapi9IRQG7W4RLct7trZ03Y1e%2FJ4wGMVnutgjRt6WrNRomQzSxEWwQLdJuh8&X-Amz-Signature=61a34a1466c11eb371f193738da8ba105ae9350c2db2d84dad34ad8c560b2521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPUAOWI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCSSf8LOcN19xEkyIVPoGSiT4BXu%2BAHkbsj6TC6i%2BQQDAIhANhxn6yVh2LgZh05KywnCbeccLaXDUzOgsPbgUTIRvObKv8DCCgQABoMNjM3NDIzMTgzODA1Igx1jltUaX47JnNb3Bwq3AOnNabORQ3NR2YhV6om2m0tojYWb%2FUnq%2BtvBoMfWMqqYt4vLt3syBJc6VbW6f%2F2jsS1hrFoKcEKwDplMjW6vqEM8AojLXVZw%2FkJNjJO4pV9Xj02v%2FH6Kx0KmDBAt%2Fj9V5VmzxH5Z7FhBy6D5%2BbL6C866kKjOc20UP5mTSTCIj0p9uWju4mXBVh8mT2%2Ba4sfg1sdtOyBQaI793RZcTo1y1LFP2EBBXRhpBsEcAuUNSIYDr5io4xfg9PQjgIciEsmHVr%2FAu5Nv%2B2r8ER4kcPRwViLsCGKiCSPchvCWO%2FpEONmgJPHY0Hcf9MpSGMj9BN%2By2NidShMIpkljv37WdD5buYZm0YKUf4r2fpWbCEx5UVwOXfs8HbXeYanIw%2BroxdhZqZ2jPTPstHHA0v%2FXqFua%2BpaQZb8teYm%2F6QIpM5YFQY%2FGuRCPBKb%2By9sY9BwdP7ZFnd2QFqlxcBSadL3NQG%2F0uMJTxmdiavJ3a5V%2FvDevNxJIE2Pn63B8bT%2Ffwerw4C1hFY5szRV%2FDuqiPvJvC6Q%2BA%2F6J3Sxc0n6V4KBQV92MQbt0EpgG5XMMC5wtLWpI0NvXCOG0KSYT%2FROEuNFjszOfzbFfF5ZK6%2FiZyjx1XxkZFfSoiiqfCaX0lrqYHR8NTC0uL%2FJBjqkARW9ps4UolFvmqP16BIkrj0b3rgoGY%2BuTsePPyA2prDixbor2P6S4v6eEr9uADQSmwEU9iUIiHYUMn85f5cCvPaQehlWoXfsLh6HnHrXVm79AHrQE1WNa0sBTfvPaP2XyuUm9kNpN%2FWVuqnQwtRsVQ%2Bsx7iqjac8mapi9IRQG7W4RLct7trZ03Y1e%2FJ4wGMVnutgjRt6WrNRomQzSxEWwQLdJuh8&X-Amz-Signature=95459f18c44ff0695dbb6ece89464d2a3e5d9eb5a4fc743f6582fafdcc12f369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

