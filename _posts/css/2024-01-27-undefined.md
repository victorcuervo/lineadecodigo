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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37ZQJRX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICm7IS7IAXxAP9GHc8uKdcWROfkxiREXKDe7ZBlzLwTIAiAzSMSuhru0prHdGSVP1gFdsnaP2f%2BpVLQIiwYpR9Qp5Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoeVG%2BaiWUWbbi%2BBDKtwDi3od6m1J0ZCTRVRJ8B7amyryaW%2Ba6WoTqc1t2cGvQfw7b%2Bn7KMuCl12mbJrJEj103AbBI8THzNNZyvu%2BhRLGUakER9pzL7Fie%2BVW1l6NTk3Tm3zgjEnZgN5F2BO%2B0ARrCbu8Aj5rixyAade3ePcM1BJMxxsgt0L9q6W8P3Vis8XvIH%2FJVGjUHRfK7kZgSL1oEEsa0ijjQZcz7Pj7kbWPNbs7Ue4gv8HyYRRe0U1HdWQgBXD3%2BSHX22o1CXEjl%2Bz8PEKuCH2rxDkBXDaqYoHrCC8tlMAR%2Bgs6V6Yrog%2Fd3cpXVvN2emLnVhb7k2ET90t%2FvvkLpuly1vKFFUQD53jgzi3q3kPC92X16xTAa%2B67agu2GLm%2FBO%2BpC0%2BmS1qif0gM8z94rMWYbfhzCGKPy3Rx6fvFjJIS8a9Q6BTuaiVxPX0jzelhVBjSmaLdxrXxZV2ejdYeUXrIqOnrpTJnsE3UpRGuPbcW9wTUHAjowLAQlecWcRDEPCIEoI9JRuAVobB%2FFy%2BNGtoGPTfEFxrzjStJsRLT8EknX37Sygwx053tXrSJxAEKVJM3x90XNzjBL1A%2BYyNJ%2BbwRCK10oVLx4K4Uci8uBHPLkTUN5unG1%2FbN%2BbAeyjMztinABNMkq9YwrczAyQY6pgH7x4rwjRxt9PjptWYN6f8YuBsUfv%2Ft4GAuF8CLSwxKR5%2BLpno1qQ1LRJYR%2BFhzcZJigZeHAqQ6ZouEF8Vxa3QQ5UlEshfry7HLdJjQtrpdg%2Fr91q4Fih9N80hu3J%2BRlrzFervmkIFzXeR8jHBU9NKZNPp%2Fd6YXE8Vv9e0ahnONYi870g5mKMvS2AyMfafMtGrCCc71BCkS%2B%2Bk4Nx0rNa3MNN0sHtU7&X-Amz-Signature=19a554a5c870ec63590dd037e944b4d777301360b9ac328ea4c13643fc903862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S37ZQJRX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCICm7IS7IAXxAP9GHc8uKdcWROfkxiREXKDe7ZBlzLwTIAiAzSMSuhru0prHdGSVP1gFdsnaP2f%2BpVLQIiwYpR9Qp5Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoeVG%2BaiWUWbbi%2BBDKtwDi3od6m1J0ZCTRVRJ8B7amyryaW%2Ba6WoTqc1t2cGvQfw7b%2Bn7KMuCl12mbJrJEj103AbBI8THzNNZyvu%2BhRLGUakER9pzL7Fie%2BVW1l6NTk3Tm3zgjEnZgN5F2BO%2B0ARrCbu8Aj5rixyAade3ePcM1BJMxxsgt0L9q6W8P3Vis8XvIH%2FJVGjUHRfK7kZgSL1oEEsa0ijjQZcz7Pj7kbWPNbs7Ue4gv8HyYRRe0U1HdWQgBXD3%2BSHX22o1CXEjl%2Bz8PEKuCH2rxDkBXDaqYoHrCC8tlMAR%2Bgs6V6Yrog%2Fd3cpXVvN2emLnVhb7k2ET90t%2FvvkLpuly1vKFFUQD53jgzi3q3kPC92X16xTAa%2B67agu2GLm%2FBO%2BpC0%2BmS1qif0gM8z94rMWYbfhzCGKPy3Rx6fvFjJIS8a9Q6BTuaiVxPX0jzelhVBjSmaLdxrXxZV2ejdYeUXrIqOnrpTJnsE3UpRGuPbcW9wTUHAjowLAQlecWcRDEPCIEoI9JRuAVobB%2FFy%2BNGtoGPTfEFxrzjStJsRLT8EknX37Sygwx053tXrSJxAEKVJM3x90XNzjBL1A%2BYyNJ%2BbwRCK10oVLx4K4Uci8uBHPLkTUN5unG1%2FbN%2BbAeyjMztinABNMkq9YwrczAyQY6pgH7x4rwjRxt9PjptWYN6f8YuBsUfv%2Ft4GAuF8CLSwxKR5%2BLpno1qQ1LRJYR%2BFhzcZJigZeHAqQ6ZouEF8Vxa3QQ5UlEshfry7HLdJjQtrpdg%2Fr91q4Fih9N80hu3J%2BRlrzFervmkIFzXeR8jHBU9NKZNPp%2Fd6YXE8Vv9e0ahnONYi870g5mKMvS2AyMfafMtGrCCc71BCkS%2B%2Bk4Nx0rNa3MNN0sHtU7&X-Amz-Signature=99964e63e37102ccb20db0bf4bacfc8f2f19e8f91ba66aea8335578fcdc9eca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

