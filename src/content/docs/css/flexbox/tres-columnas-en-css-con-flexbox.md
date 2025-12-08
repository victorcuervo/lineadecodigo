---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WN4MSSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxskxRGGRaNXUGGt0g9VOxJrdeOjMLYAQho3rp0qT6gIhALYtwm%2FLb2kL9ExsgmoPbcGKCpsfsm93uZgXZsUdw%2BBIKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnEMPBIxagXf%2FyHAMq3AOFLcEYVUoIdcwTJ1GLx4i%2BliXnG2ssB%2FyDYO60MXoIrIrNtCRwL0Dy3Lwiw39PP92dG4KqBEDC5ZzvEPBhQFP4lQ%2FrNJGavY5zlcNezw2UmnnxiYOZhWy6YD4zY5Wd7elTAGya1weyGtZVqd6YFuaecyX%2FD%2BQxPEeuge%2Bvft2Q%2FK4AqCIwFcM1mQOA8RzR5Uu2094KJKkkdHyJHqB%2BUh1o%2B6Jl7Yr7Uy%2BpYj6WAyF4qiCHu6twdy4WK7K3JtCjuVunpBOjdnm%2FSRhWzpICAGlA8%2BFohWz9JPoQBjBt8KiwS664fbNG1ZR2spZxqPniXvaRgFwofOm6oizeL%2Fop80XFg3QUkqsgSN5hEs%2BlYL8KXIQqhm5KRlT1w5oY08i84ZkI0vcJBpQ9%2Fnaf%2B0NRnWSDe3sq6LAJ5RaGL4QkLAZCRthpkHc7dyRSI6fZqgAD2t5bRpJiltBmy9LO3LGgKTRp1kni%2FikhrMxIS%2F9eWmPr3U1dLIRkpO07SsaAJax3btae5Zn9g1PVicWulzF6HSygD2x6%2BDrEN9m74a%2BJmhI9J5OUa7X60cJ3SmLKyHwdzcW2lP6jftXm0gcoWNdF60RzZVXgDdqUxDN%2BMbaNIFqDghWfRHsD%2BqE6ZRlNLzCH0NnJBjqkAVctvgW%2BU1uddXDa0FCnRO2BYeF45TUIp7qpvg1cYv2IkVfo9ThKIPg5qT68Ef5eXXPDaUURXhZKh0m4sFED5HDiy2X0ssCm6ZKHq6kRfdIXcRjJNUmAmiEA8DWHj0aEhwgKeFShckMXYODUFc0qqRCbD%2Bz58ZL63kTqTG59c7co2%2FWukMXoxBU7Ix6F6KXCpXYNhWyP7%2B0IMuKtSdi73GtHF%2FMc&X-Amz-Signature=35c35f2ce79f0fbc219138842d6524841fe249e4d5a70161a47595fee0a3035b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WN4MSSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxskxRGGRaNXUGGt0g9VOxJrdeOjMLYAQho3rp0qT6gIhALYtwm%2FLb2kL9ExsgmoPbcGKCpsfsm93uZgXZsUdw%2BBIKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnEMPBIxagXf%2FyHAMq3AOFLcEYVUoIdcwTJ1GLx4i%2BliXnG2ssB%2FyDYO60MXoIrIrNtCRwL0Dy3Lwiw39PP92dG4KqBEDC5ZzvEPBhQFP4lQ%2FrNJGavY5zlcNezw2UmnnxiYOZhWy6YD4zY5Wd7elTAGya1weyGtZVqd6YFuaecyX%2FD%2BQxPEeuge%2Bvft2Q%2FK4AqCIwFcM1mQOA8RzR5Uu2094KJKkkdHyJHqB%2BUh1o%2B6Jl7Yr7Uy%2BpYj6WAyF4qiCHu6twdy4WK7K3JtCjuVunpBOjdnm%2FSRhWzpICAGlA8%2BFohWz9JPoQBjBt8KiwS664fbNG1ZR2spZxqPniXvaRgFwofOm6oizeL%2Fop80XFg3QUkqsgSN5hEs%2BlYL8KXIQqhm5KRlT1w5oY08i84ZkI0vcJBpQ9%2Fnaf%2B0NRnWSDe3sq6LAJ5RaGL4QkLAZCRthpkHc7dyRSI6fZqgAD2t5bRpJiltBmy9LO3LGgKTRp1kni%2FikhrMxIS%2F9eWmPr3U1dLIRkpO07SsaAJax3btae5Zn9g1PVicWulzF6HSygD2x6%2BDrEN9m74a%2BJmhI9J5OUa7X60cJ3SmLKyHwdzcW2lP6jftXm0gcoWNdF60RzZVXgDdqUxDN%2BMbaNIFqDghWfRHsD%2BqE6ZRlNLzCH0NnJBjqkAVctvgW%2BU1uddXDa0FCnRO2BYeF45TUIp7qpvg1cYv2IkVfo9ThKIPg5qT68Ef5eXXPDaUURXhZKh0m4sFED5HDiy2X0ssCm6ZKHq6kRfdIXcRjJNUmAmiEA8DWHj0aEhwgKeFShckMXYODUFc0qqRCbD%2Bz58ZL63kTqTG59c7co2%2FWukMXoxBU7Ix6F6KXCpXYNhWyP7%2B0IMuKtSdi73GtHF%2FMc&X-Amz-Signature=0f26a64156b66f44f1460f8499fbf44e58b00bf1ad4067950d9a379b91df5ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

