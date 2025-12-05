---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XACXKZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZeEAN2KgUlizEB8MzaNSm6KVfNhVdRll0zHtXC%2FB6FQIhAKzfzhVK9qqP91HfJDmcS3pmMbtcPZVWHPZM%2Fr%2BiEr9uKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYzp6ffvWET4QE61kq3ANyZvjMQVOhCGRmEiQG0f1%2FtVOsLx7xk%2FquHSmCEukO3Io6UHApOxdKCMW6InAv6dmjm0CPxD9R50WdQsa9G41ayQSUe2HK2q7xchV5UIHfpMOMPm68jWriA3PlECuU3iIHf65ThTpB0NL1JwFFSamXFhx0ULXfm%2BFp2LCnJHt%2FOqGFAJ1%2BR5UPKR1INbMsXx3ii%2FGClhDB4cNSb9KzxZgi0J%2BDvU3d4NUOoEdty86QpL0Ni8SVdawtGLwCppdSkHfMc3OM1vH8s4Tw%2FoLAlUcLEbHwUdhuD7YcD8GrLe8Sob2c3y%2BAmpKmdSBzdtfRx61LvzbGpwT%2FpOyDBP%2FBLJ3cnwbi27%2B8XeOyc14xPP%2FzAlkDI1ND8ZJAbrw9YmER2us1O7A15krsi5218OmIjl72c6rULr0PcagwJ7EcfGFJ2rLMabiT37O2ZjwKaF3BK9GxqCr8ljMamTxiiFJ5wbFo7O2xvKDoQKDME97ARehVrcPt4q9M5SJsMyy9V5iFXpirpf7MwV37BuuUNwg2JE8CSUEvDAYweYtOSUeP1sqQjAlK5ieC6dnhnQcK8%2BJT8llsm7jCPVoS5mcSIKUXI%2FTdTqjPsZ1VJdQxWuCYi5xvHJbvm5ZPU0rBJdtENTC5r8nJBjqkAQnYK%2FqjwcODfIAs62Yl9eUlTHl74rDFraJ9sUOngRBNzvh81qF%2BQHPxfpg07JjbZIda1tpHaIlcU5iG5wf2sezXXWcAeQKxt6eGvohGtBnfGPFYy74ZrzYzOuooVDPBxeKknwohrMHwgw83c%2FcJ5mQJh%2BmSnk6HLh8hCNJFbPfJlVNCFgfmL4vxHE5Mk1qQLbT5zLYB6CxLulScFsM8nXLDquH2&X-Amz-Signature=e346f3f563123520acccdc17a78189c43cee365e1537e9a778f5182feea8017e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XACXKZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZeEAN2KgUlizEB8MzaNSm6KVfNhVdRll0zHtXC%2FB6FQIhAKzfzhVK9qqP91HfJDmcS3pmMbtcPZVWHPZM%2Fr%2BiEr9uKv8DCFUQABoMNjM3NDIzMTgzODA1IgzYzp6ffvWET4QE61kq3ANyZvjMQVOhCGRmEiQG0f1%2FtVOsLx7xk%2FquHSmCEukO3Io6UHApOxdKCMW6InAv6dmjm0CPxD9R50WdQsa9G41ayQSUe2HK2q7xchV5UIHfpMOMPm68jWriA3PlECuU3iIHf65ThTpB0NL1JwFFSamXFhx0ULXfm%2BFp2LCnJHt%2FOqGFAJ1%2BR5UPKR1INbMsXx3ii%2FGClhDB4cNSb9KzxZgi0J%2BDvU3d4NUOoEdty86QpL0Ni8SVdawtGLwCppdSkHfMc3OM1vH8s4Tw%2FoLAlUcLEbHwUdhuD7YcD8GrLe8Sob2c3y%2BAmpKmdSBzdtfRx61LvzbGpwT%2FpOyDBP%2FBLJ3cnwbi27%2B8XeOyc14xPP%2FzAlkDI1ND8ZJAbrw9YmER2us1O7A15krsi5218OmIjl72c6rULr0PcagwJ7EcfGFJ2rLMabiT37O2ZjwKaF3BK9GxqCr8ljMamTxiiFJ5wbFo7O2xvKDoQKDME97ARehVrcPt4q9M5SJsMyy9V5iFXpirpf7MwV37BuuUNwg2JE8CSUEvDAYweYtOSUeP1sqQjAlK5ieC6dnhnQcK8%2BJT8llsm7jCPVoS5mcSIKUXI%2FTdTqjPsZ1VJdQxWuCYi5xvHJbvm5ZPU0rBJdtENTC5r8nJBjqkAQnYK%2FqjwcODfIAs62Yl9eUlTHl74rDFraJ9sUOngRBNzvh81qF%2BQHPxfpg07JjbZIda1tpHaIlcU5iG5wf2sezXXWcAeQKxt6eGvohGtBnfGPFYy74ZrzYzOuooVDPBxeKknwohrMHwgw83c%2FcJ5mQJh%2BmSnk6HLh8hCNJFbPfJlVNCFgfmL4vxHE5Mk1qQLbT5zLYB6CxLulScFsM8nXLDquH2&X-Amz-Signature=97c075568005001be1b6703f7730015fe516053f98a271eb7a666dea996be570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

