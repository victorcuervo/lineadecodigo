---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCNTGC3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoD7ar2jeN3vqLmICmtt89jyA6Aps6tNDXllevYPE5ugIgUpgXYujRAmqwvhdTbLINijhG70e4WykHCGRWrWLtUEMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyLqQt407Fz5LXjUircA%2FGdkYPLZi0M9chZQiuUcfAKaMzIKMKF7Du%2B1hpRNop0MkByBHIBqOf%2BVg3bWoqNxMfNZAmxiPu7mAJ5GmMRGA9%2Fvhjny2ewEmJBlJ1pOQi9x3iusDz5Hy8RD5rdTGjjWGfH1xAm2owWPHiCj0wY1%2FRZMpscPTtL5COFWjQ%2F5aY7%2FItYxBC8EvCm8EaUSHZged%2FQjQRHJ635qNu3SuRwN6%2FcUbqFdaUSVBKoZE%2F34SGq3utVpCi%2Fg73AdFyv2XeNOAlBDXaVRIB1fbW%2Fiq1A8sW6MHS2FGhvCdZwhjRNrn%2FmHLAWafD4m39m7ukzaNE4yhgTmVkQUCJCb%2BBe5knYrfO4oVUHYrVYwq0s%2FWCMWCDJSfhS1CQSqPv0saRbnwAvyYPMiIVz637EAfhFPUoHxTCJfyIRWugGB2ddmNOcyC5PBo02%2BlewWiJmHausza9pEqaU7NabZkVXPWubiaPz6P%2FopFsrsfdk9oo797td8mD%2Fb%2FNQPEGS8HSJAxVIuwU%2F1br0IUEqmyo%2BXeaCRNboL39SxkWbFW%2BUm1k3yALThmIfv52KTbdE5xGsQjGpc2PTb%2BG0YpBGa4sM1S4otfI1mUWQSwWi03f8cuA5CXC9oJ%2FgH%2Fsu5GhuzS%2BgOKaKMMXz2skGOqUBr5CcT2ovNHDZd0a3mVqFx4kta9o8tglsj4BkiwCI%2Fa3ynRtnR%2BS4vpU8V913KTSnmeAA0q0fbYmf0nU5atGVbmKOKlPjiZ0HnrwDppP24NypD7N%2BUpkWMShJxjAvHvmjpYAJoOeUwhtrFCv4%2BPR0UaCOCTrPZO0rSfkiGJXopvyBx%2Bwt4gob8wEuSCBFnMCAuSANiS3MZQ3%2FwDWHZl9w4g2VPEi3&X-Amz-Signature=6aa4be5f5473d0afba739d90d998f291f4af9e3b0d8e39a10d62a7eb5b9bc4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCNTGC3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoD7ar2jeN3vqLmICmtt89jyA6Aps6tNDXllevYPE5ugIgUpgXYujRAmqwvhdTbLINijhG70e4WykHCGRWrWLtUEMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyLqQt407Fz5LXjUircA%2FGdkYPLZi0M9chZQiuUcfAKaMzIKMKF7Du%2B1hpRNop0MkByBHIBqOf%2BVg3bWoqNxMfNZAmxiPu7mAJ5GmMRGA9%2Fvhjny2ewEmJBlJ1pOQi9x3iusDz5Hy8RD5rdTGjjWGfH1xAm2owWPHiCj0wY1%2FRZMpscPTtL5COFWjQ%2F5aY7%2FItYxBC8EvCm8EaUSHZged%2FQjQRHJ635qNu3SuRwN6%2FcUbqFdaUSVBKoZE%2F34SGq3utVpCi%2Fg73AdFyv2XeNOAlBDXaVRIB1fbW%2Fiq1A8sW6MHS2FGhvCdZwhjRNrn%2FmHLAWafD4m39m7ukzaNE4yhgTmVkQUCJCb%2BBe5knYrfO4oVUHYrVYwq0s%2FWCMWCDJSfhS1CQSqPv0saRbnwAvyYPMiIVz637EAfhFPUoHxTCJfyIRWugGB2ddmNOcyC5PBo02%2BlewWiJmHausza9pEqaU7NabZkVXPWubiaPz6P%2FopFsrsfdk9oo797td8mD%2Fb%2FNQPEGS8HSJAxVIuwU%2F1br0IUEqmyo%2BXeaCRNboL39SxkWbFW%2BUm1k3yALThmIfv52KTbdE5xGsQjGpc2PTb%2BG0YpBGa4sM1S4otfI1mUWQSwWi03f8cuA5CXC9oJ%2FgH%2Fsu5GhuzS%2BgOKaKMMXz2skGOqUBr5CcT2ovNHDZd0a3mVqFx4kta9o8tglsj4BkiwCI%2Fa3ynRtnR%2BS4vpU8V913KTSnmeAA0q0fbYmf0nU5atGVbmKOKlPjiZ0HnrwDppP24NypD7N%2BUpkWMShJxjAvHvmjpYAJoOeUwhtrFCv4%2BPR0UaCOCTrPZO0rSfkiGJXopvyBx%2Bwt4gob8wEuSCBFnMCAuSANiS3MZQ3%2FwDWHZl9w4g2VPEi3&X-Amz-Signature=85f0951648241fc550a4770e3a5f104b9a89d39d7aca2693cf25b6661b01232c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

