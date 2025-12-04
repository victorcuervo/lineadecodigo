---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMJTG2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD9uXWEZBU8ONN0uG2n4SLaC3A%2BdY5TANQnGL4JlP%2FYLQIhALEyzOFXH82ouZnjf21E8vN0cyAjQ9Pug8NB9hqRag60Kv8DCEgQABoMNjM3NDIzMTgzODA1Igw7BqxOjOAiQVOXrawq3AO4eTLXBWE4ui96nx3Tv5jSu026HYSB6rirdQ%2FOahCM0J451jUdTdu719XMACz0N7xdU7CQrqryGRqJx79UmFV6srATvsGY0ln6tajnDLIwStBP9fJnMI0K2Admj%2BwzBiTCU0DNsS%2BGXQdQbRbMrIN%2BVwcFMX%2Fq9RYbC1AI4LUpvdgxCMdWf2SxZqtv9h0w1cZBPD%2BxOn4BTWcbIQq658Do6qtQQdPOIsPIB4jn8dt%2F8h6obngWPqHeJvu%2Fns7jPXjM7T0Awm04PfppIdgBwN2wNRGEyX4oPGVyK1y5HwULVafMp4mSK8%2F20DYfeO2td%2FPCvpHrxrhy1wwDoe4xdXdOoI03phflkmBlXRDPS30D%2Fh1IcFmzt4C6X2ZJrhHcdesq2Cfi8mpNK%2B%2Bu0XVoavLT%2B0Y4%2FR5oqxYj0Cw7quxqLsy5CmXyreACzzHbMR3WzRRroXTPX0EzBIe3bzt%2B%2BHnIphx4RQTcK5hg%2Fd9UEwmoZzrQdl4xaOUpUeornfqSSVKPSOvs0uwA5YWIJvWzDeiqlwgLW3vzNDK3m5dZw8PXXJJLUHcwgsci7WWqWxMyIlHU%2Br9veytXgDQdx90PwUXpaca16HMkRgejMZEi9jODIdRwVVWa1NTNx0O4MTDovsbJBjqkAWa42G5zCjPAJ2FwW1QWH2Nke8%2BHGjNPA640qvSdRECqiNmT88gSPqIyp6HjV94Lt73GGqYN2xpwYhKQNn05Zb8WadmG4R3h5rbIQAkf9aZROf7jbTagljH70ynguEyPe0%2BZiH1VGlWbaQynPOlqXRPQKd3rFLRvJxbo9PJj0jABYTaOe2rBSrNF4h9kfvbG%2FNJjS64SQpjdc8bQ9u%2BVxk3QLXV0&X-Amz-Signature=52936f52df32c1da6b61a69828e803a50e131b61a2bef732f4447e71e07b214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMJTG2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD9uXWEZBU8ONN0uG2n4SLaC3A%2BdY5TANQnGL4JlP%2FYLQIhALEyzOFXH82ouZnjf21E8vN0cyAjQ9Pug8NB9hqRag60Kv8DCEgQABoMNjM3NDIzMTgzODA1Igw7BqxOjOAiQVOXrawq3AO4eTLXBWE4ui96nx3Tv5jSu026HYSB6rirdQ%2FOahCM0J451jUdTdu719XMACz0N7xdU7CQrqryGRqJx79UmFV6srATvsGY0ln6tajnDLIwStBP9fJnMI0K2Admj%2BwzBiTCU0DNsS%2BGXQdQbRbMrIN%2BVwcFMX%2Fq9RYbC1AI4LUpvdgxCMdWf2SxZqtv9h0w1cZBPD%2BxOn4BTWcbIQq658Do6qtQQdPOIsPIB4jn8dt%2F8h6obngWPqHeJvu%2Fns7jPXjM7T0Awm04PfppIdgBwN2wNRGEyX4oPGVyK1y5HwULVafMp4mSK8%2F20DYfeO2td%2FPCvpHrxrhy1wwDoe4xdXdOoI03phflkmBlXRDPS30D%2Fh1IcFmzt4C6X2ZJrhHcdesq2Cfi8mpNK%2B%2Bu0XVoavLT%2B0Y4%2FR5oqxYj0Cw7quxqLsy5CmXyreACzzHbMR3WzRRroXTPX0EzBIe3bzt%2B%2BHnIphx4RQTcK5hg%2Fd9UEwmoZzrQdl4xaOUpUeornfqSSVKPSOvs0uwA5YWIJvWzDeiqlwgLW3vzNDK3m5dZw8PXXJJLUHcwgsci7WWqWxMyIlHU%2Br9veytXgDQdx90PwUXpaca16HMkRgejMZEi9jODIdRwVVWa1NTNx0O4MTDovsbJBjqkAWa42G5zCjPAJ2FwW1QWH2Nke8%2BHGjNPA640qvSdRECqiNmT88gSPqIyp6HjV94Lt73GGqYN2xpwYhKQNn05Zb8WadmG4R3h5rbIQAkf9aZROf7jbTagljH70ynguEyPe0%2BZiH1VGlWbaQynPOlqXRPQKd3rFLRvJxbo9PJj0jABYTaOe2rBSrNF4h9kfvbG%2FNJjS64SQpjdc8bQ9u%2BVxk3QLXV0&X-Amz-Signature=12e8c591fcabeac97ab539738df02665cec28cf84b7d38c2dc369bd113ed7435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

