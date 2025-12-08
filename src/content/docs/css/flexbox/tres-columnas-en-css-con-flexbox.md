---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADLHLOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsVZAYqgyPN9luQ61khdY52PZSfcw0Iuc%2B144gmOwx0gIgfG70FrzkLMMkUWSq0h4XZcFyvzMrHVL0FBvvpBeQT1wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR7Qhqw3A3Nj0M4HSrcA3Ur0EBwmG7x9WXRL%2BP6ZGnGh8xFB4ZMgojbDzQP7U4qi03z1SP5zTgqYC73%2B2W5QKAhR4FbLYl8iqWvLbI6s%2BvPBJsDszCfD27mM41vstPULC%2FmQJH6n5ddEjSq4%2FpWQQivIxsUaW7RPJuE57TyA7ePbSNi1ewVhmCyiTEyQ0RQNbijykmciUMmlNi8k2XiCGiizRee6t19yRgTfx4l8K1gpsykT6JFciSK9Rjb%2BGyCvnOXildfM1WMo%2F2dI02sxQv%2BqxrySnc4He9IKQuzUS99g7iUrBMn7EKr%2FRDNGjzw0ehGMDEuVdHTA4ZA9uJ9WIKWaY8uIQN2AEeHIo3H2Cfj%2BttAPQYj7%2BdEGH3EH%2FvzDuganEmi2U9lAY8PatQ7OSVYjx%2BRWERZewXqd82r%2FD%2FaqGWGjvYTcMNKDDN3Lbs4WMxB2GBbQ3oGtxcTrFZv%2BaWf1PdxcCApC7djAQgpTNPCgMFz9vwk9TDM5Uc%2BU%2Fy13T0VJQESDuDpv4aualr1PnHQYImSyE0GZsHPO2ZEVVUeh%2BF77mVWNEzqI8d0On%2FksL2vMhYQCB8156NLZIS%2Foh63LJN80REnlcwOjlaI9gAdcxCMJMZHcxo7b0UaP2cZ848bt79r%2FYK%2Bv25%2BMJfu2ckGOqUB%2B%2FxPl9zPItIacpfd%2BJqT6Hfe5ErrgBh6lNeUVOgLj3R4K2L2369l2UQ4N2fg1cLSAqCJH6Am4mRo5NQUOZhs5atZCc2CYbVDUGT8Brpw9vfq2JbpWG7R7rHOEFZusl9s95JdKBQIIL6A%2FtV1AeWCbDNGDODDU%2FI9w%2BaNfBqV75QsnaqKA6pwIzZ1a9qPIz%2FjvuzxkiSryVT13v9wNLKpUviRwkfh&X-Amz-Signature=f89627d886c944f0f8e05d74faedcaa21bee364510d72918c309da2982213c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADLHLOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsVZAYqgyPN9luQ61khdY52PZSfcw0Iuc%2B144gmOwx0gIgfG70FrzkLMMkUWSq0h4XZcFyvzMrHVL0FBvvpBeQT1wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKR7Qhqw3A3Nj0M4HSrcA3Ur0EBwmG7x9WXRL%2BP6ZGnGh8xFB4ZMgojbDzQP7U4qi03z1SP5zTgqYC73%2B2W5QKAhR4FbLYl8iqWvLbI6s%2BvPBJsDszCfD27mM41vstPULC%2FmQJH6n5ddEjSq4%2FpWQQivIxsUaW7RPJuE57TyA7ePbSNi1ewVhmCyiTEyQ0RQNbijykmciUMmlNi8k2XiCGiizRee6t19yRgTfx4l8K1gpsykT6JFciSK9Rjb%2BGyCvnOXildfM1WMo%2F2dI02sxQv%2BqxrySnc4He9IKQuzUS99g7iUrBMn7EKr%2FRDNGjzw0ehGMDEuVdHTA4ZA9uJ9WIKWaY8uIQN2AEeHIo3H2Cfj%2BttAPQYj7%2BdEGH3EH%2FvzDuganEmi2U9lAY8PatQ7OSVYjx%2BRWERZewXqd82r%2FD%2FaqGWGjvYTcMNKDDN3Lbs4WMxB2GBbQ3oGtxcTrFZv%2BaWf1PdxcCApC7djAQgpTNPCgMFz9vwk9TDM5Uc%2BU%2Fy13T0VJQESDuDpv4aualr1PnHQYImSyE0GZsHPO2ZEVVUeh%2BF77mVWNEzqI8d0On%2FksL2vMhYQCB8156NLZIS%2Foh63LJN80REnlcwOjlaI9gAdcxCMJMZHcxo7b0UaP2cZ848bt79r%2FYK%2Bv25%2BMJfu2ckGOqUB%2B%2FxPl9zPItIacpfd%2BJqT6Hfe5ErrgBh6lNeUVOgLj3R4K2L2369l2UQ4N2fg1cLSAqCJH6Am4mRo5NQUOZhs5atZCc2CYbVDUGT8Brpw9vfq2JbpWG7R7rHOEFZusl9s95JdKBQIIL6A%2FtV1AeWCbDNGDODDU%2FI9w%2BaNfBqV75QsnaqKA6pwIzZ1a9qPIz%2FjvuzxkiSryVT13v9wNLKpUviRwkfh&X-Amz-Signature=d78d61ab76a4fa6fe5fbf5eebd3703d3dcab052fc8f7faaccfafbf6e0b2f10d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

