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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHE7GVN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICp7ghliPenKO%2Bh7iyq6WT8pjdrurzIMiujjxTqkePzhAiEA9vJ4xriyeSLn8WpVUt6syRrcc394yZJ2IV3NDfzuBtAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCF8jpR08MeurkT36ircAyc2Fy2zeysgIdVpkPGX%2Frb4t1RE3srxwPhAhiCxS62TssYtNC1JG4p%2BIGCUNsyYzHOyK%2FkVZLnu%2FZ7DplKSEk8e2AXV4nmLG4D0fgxE6k8tjt7KTp0tmPXOoxnM%2BCEChvVn9JqfaNsQc2MP4lnprUx2zmeLgVCLkRBgCDyhHwi7u0ynSHKSNmCL30TxSBemeQ49CKSdMvYk7xtI64DuR6%2FQGf2SHienkT8AW8guY%2Bzr0l2XkTqDG%2BWMooigtGh%2FMJG8vNud5d0a1ue4jPc%2BSxNA%2BtD%2B41jGgHPUUZ7TjDE5%2BPXgofmau%2Br%2F7Q2AbXIx0JMNpBstCU9gCgVdqFVINnm8XsyCSwnCf%2BnT9fxaKUV3omBbLO%2BzpENfaqsO%2F1yjZlENhaMJQGdHdJt%2BqZy17sHRaCB0aMMM9rAXcCRn3VqX2l9%2BcoSdHJvH%2Fhy8Im0c9%2Fbc2Oi2h7pJV%2BnFfOn1oy2vDi6fDNm5kZagxCm1AQ%2B7moZp8znI2d8n63NkbQg4tTgDXm78pgrFaOq7Gw9iD82RBltaZ6fptaOKq33jQ%2Bdxmy8k3QHxZfRi1u2U70jLAUU6BzgQ6Qg5JnVaZf4%2BbiIhcaDkjTF%2BpZeEolgitM0iwJ0oMnDBkXq88cfXMKf%2FvckGOqUBnYj35zqPZxO1UFfP%2BdNQu70puWGSCbGGm1GRe41lw61Fc1rVsP7Yks00u8kfbwbfKNPkBNOM8VyfNbinaMhpp96ltQ5iBl0NPuXClIR%2FGjSIzKmVGMjgazZA4WQ7xZ3D3jfOrnVJ3uorhKv39OLfmwzQLrp4WoZPA6tyQflOckhb4rBy%2FWV4FgLyqfzu85ydXv5sao%2Bmz8A9Cr1OoJh28H5AAIhC&X-Amz-Signature=c068388ffe2ccd0418e06ebfa5e433a584f3f984ccbd8f81be0bef7e90dc1e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHE7GVN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICp7ghliPenKO%2Bh7iyq6WT8pjdrurzIMiujjxTqkePzhAiEA9vJ4xriyeSLn8WpVUt6syRrcc394yZJ2IV3NDfzuBtAq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCF8jpR08MeurkT36ircAyc2Fy2zeysgIdVpkPGX%2Frb4t1RE3srxwPhAhiCxS62TssYtNC1JG4p%2BIGCUNsyYzHOyK%2FkVZLnu%2FZ7DplKSEk8e2AXV4nmLG4D0fgxE6k8tjt7KTp0tmPXOoxnM%2BCEChvVn9JqfaNsQc2MP4lnprUx2zmeLgVCLkRBgCDyhHwi7u0ynSHKSNmCL30TxSBemeQ49CKSdMvYk7xtI64DuR6%2FQGf2SHienkT8AW8guY%2Bzr0l2XkTqDG%2BWMooigtGh%2FMJG8vNud5d0a1ue4jPc%2BSxNA%2BtD%2B41jGgHPUUZ7TjDE5%2BPXgofmau%2Br%2F7Q2AbXIx0JMNpBstCU9gCgVdqFVINnm8XsyCSwnCf%2BnT9fxaKUV3omBbLO%2BzpENfaqsO%2F1yjZlENhaMJQGdHdJt%2BqZy17sHRaCB0aMMM9rAXcCRn3VqX2l9%2BcoSdHJvH%2Fhy8Im0c9%2Fbc2Oi2h7pJV%2BnFfOn1oy2vDi6fDNm5kZagxCm1AQ%2B7moZp8znI2d8n63NkbQg4tTgDXm78pgrFaOq7Gw9iD82RBltaZ6fptaOKq33jQ%2Bdxmy8k3QHxZfRi1u2U70jLAUU6BzgQ6Qg5JnVaZf4%2BbiIhcaDkjTF%2BpZeEolgitM0iwJ0oMnDBkXq88cfXMKf%2FvckGOqUBnYj35zqPZxO1UFfP%2BdNQu70puWGSCbGGm1GRe41lw61Fc1rVsP7Yks00u8kfbwbfKNPkBNOM8VyfNbinaMhpp96ltQ5iBl0NPuXClIR%2FGjSIzKmVGMjgazZA4WQ7xZ3D3jfOrnVJ3uorhKv39OLfmwzQLrp4WoZPA6tyQflOckhb4rBy%2FWV4FgLyqfzu85ydXv5sao%2Bmz8A9Cr1OoJh28H5AAIhC&X-Amz-Signature=1afc9ee14526c93ff2f5005c9c6b2187ca88df132b13cc5bf1027f0805fd8438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

