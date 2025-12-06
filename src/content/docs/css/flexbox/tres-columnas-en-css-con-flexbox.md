---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKYFFU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7VBbkzMq6eaboMg64NUIIG%2Fcoa0eCJyk%2BNadhh6cNgIgGY2LGvfCW5ZMXC%2B93DrATxkhD3I7gaS%2FBHGyDKuVy9kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN6CSYSHYvGb9iTBaCrcAxsvGY4GVc8PEyeReqPc90QP4UJTq6tXhMm3jiea18%2F26Vd2xN8ibZQUSvV%2FM8%2F%2Bxw8PkpOIFb63eKlBOaDarNqePkSAvk7c4P0XuBwD37XAuX9i19uQaTfUD0sv8agEkyC0wyv6dJuA%2B4731sXjYzMjKYNwdJ%2BERTBhc5Qq%2F2IftJ%2B2Pv3YWn78wG%2FlgMsi0Mv4Dd4MMSQhVq9Drhw8QuJwbNWiILcKoHHCSIX61CszR4lELoHrBJhRENLlsKci4yTRa4Ko9BRU8wYIKu%2F9bm1jJ%2FpcWC8VMy9yImKKJL%2B6HYHHqEaXV0OZnxe5DKkHPCpcxYwlAQA7bAwPacdPA3sX8gLB0NQoOpnZP6jhv6eT1Ny7HuA2otWB3%2BvG5HPf2RsAYHNwB%2BxG015cUUfL5vu4gKDQRsYacAfFphHNjuvcZwtj30pIwf9lwH6DH57lG1DvcA%2F9oqn%2Fv%2BbTSKAKEjbkZQqEU2cRDW8cFVpoNngHR9SnKWj9v2pXf6FsFe3Wwmqk2YGFbmd1etj6iy%2FfFulcxRFD66KUNLL5znVHBR27V9f8w%2FPWEKwOW5A4UI26i6al7SBTaq%2BPGYWno5%2BD%2FZoiMLWsXqWsRxBeOqQf4Yxv5YE%2BNYJaF8jf15gJMPHM0ckGOqUBILIvMD9EkODONT12PL5umWYKgfeIQPqSHZua79fG9PcRZ%2FIL6KuuhD1x8d068APyTaX%2BP6mC6bCRwcbWLaIRAn9iJIFFCYE2kgBAFPi0X3dYXdDcKfHj8PUxROFD7rYp3s6JSJoHhlw1z1jZlbWSRHqKI0hyLbem0eJRu56%2Fq1pWD2gXZZ6krewtfGoI7NmTCeveSS6E%2FThA4%2BbCDYUyngy2dwzu&X-Amz-Signature=f32b15d64d65264afb4070d7b3f42a01f56a069357ec83045f27ea9fc19f0d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKYFFU3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7VBbkzMq6eaboMg64NUIIG%2Fcoa0eCJyk%2BNadhh6cNgIgGY2LGvfCW5ZMXC%2B93DrATxkhD3I7gaS%2FBHGyDKuVy9kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDN6CSYSHYvGb9iTBaCrcAxsvGY4GVc8PEyeReqPc90QP4UJTq6tXhMm3jiea18%2F26Vd2xN8ibZQUSvV%2FM8%2F%2Bxw8PkpOIFb63eKlBOaDarNqePkSAvk7c4P0XuBwD37XAuX9i19uQaTfUD0sv8agEkyC0wyv6dJuA%2B4731sXjYzMjKYNwdJ%2BERTBhc5Qq%2F2IftJ%2B2Pv3YWn78wG%2FlgMsi0Mv4Dd4MMSQhVq9Drhw8QuJwbNWiILcKoHHCSIX61CszR4lELoHrBJhRENLlsKci4yTRa4Ko9BRU8wYIKu%2F9bm1jJ%2FpcWC8VMy9yImKKJL%2B6HYHHqEaXV0OZnxe5DKkHPCpcxYwlAQA7bAwPacdPA3sX8gLB0NQoOpnZP6jhv6eT1Ny7HuA2otWB3%2BvG5HPf2RsAYHNwB%2BxG015cUUfL5vu4gKDQRsYacAfFphHNjuvcZwtj30pIwf9lwH6DH57lG1DvcA%2F9oqn%2Fv%2BbTSKAKEjbkZQqEU2cRDW8cFVpoNngHR9SnKWj9v2pXf6FsFe3Wwmqk2YGFbmd1etj6iy%2FfFulcxRFD66KUNLL5znVHBR27V9f8w%2FPWEKwOW5A4UI26i6al7SBTaq%2BPGYWno5%2BD%2FZoiMLWsXqWsRxBeOqQf4Yxv5YE%2BNYJaF8jf15gJMPHM0ckGOqUBILIvMD9EkODONT12PL5umWYKgfeIQPqSHZua79fG9PcRZ%2FIL6KuuhD1x8d068APyTaX%2BP6mC6bCRwcbWLaIRAn9iJIFFCYE2kgBAFPi0X3dYXdDcKfHj8PUxROFD7rYp3s6JSJoHhlw1z1jZlbWSRHqKI0hyLbem0eJRu56%2Fq1pWD2gXZZ6krewtfGoI7NmTCeveSS6E%2FThA4%2BbCDYUyngy2dwzu&X-Amz-Signature=b78c1eb3b7d478320eba5cb085b1f994878ae75a0ec6fadc96d89810defe44f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

