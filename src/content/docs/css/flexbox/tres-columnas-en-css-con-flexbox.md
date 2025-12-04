---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4DWLXE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAhV2dw1b2ifhc6oVHtkvJUZTdUIW11QHu2jPU9kwS65AiEAom%2FCpNtRfWq5pft1o1EP2DT7VPN2u9%2BSiVkRc4n13kAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEKHt7dv%2Bli2oJxP%2FircAz%2FzsHj8OxVlowKUHSoUeC39v%2FR9UIMXveWzVhqYI0LbGK7hZqqLjo4Mcbixf9HFO7qa%2BtQhWrvM15zwJOfbaWq0aopp0zu8Uk9yutahoeQykspusuFHDUK65bJENdu5VBoGqPV%2FwLitcFrW8DpXvWwXb0Mp0TJZnqrc9kbjg%2BXAVNoIz7N1ZN0hiKmqT5%2Bdwd4Za3smGiyVkzu6e%2FCYFBTmZPHtKdoVnN5tA0ueBT4atQ08iUKYFtQXSBJkpJDL4gtIuuH717VBBMWoGSodFUx3Ue8sAscF0Uc5gVL0f583Tr6sDEAZVvOrFG3G5hHAPwd5CtXqs2MFAlPURAJKwJJ2cMFwz%2FL8wAiR5EsKfONf7drMytsQ3E8LJjiMrMcLMa6%2BSqXMHyes7S5jAQ77m91VH62XqF2fzbJXxKrw8gpPdbzbT909UXFE4L%2FinSpVGV3D1eU4Oyl1SJGJNzF1CPX6qyYzfui%2BIZseUw12xQ3WwEspv5nMnDW%2BwVSFuyzsUjrlmlougjSqrRvu51q4pqfYSEPKxx1tCpCSQf8WvoTbrEVO71w21aEXTyDXF8D1r0ipbTBTjcYvCY69myRnDWMS2RmhTskEVSl%2FRkWHHXMgOE3EN9wR2N3K%2BGycMMyUw8kGOqUBxu9snpHSTowacSqEnWPKZY3VlD9v0Fo0aBPPL1PNb4M8pbxp6Q8bs7ODj4sWXlwFnvO%2BPfY%2Bxft83v2U8LkX6yEs1OpllSJeDPXFdaA9zJqIPjitc9yasS6eADGCOPrWToB1s1EOXb2MktNsSoSvmllR7aQ5zxpZl9EnQ9pww3a%2FJNYw360co0bAJ1ilPKPHeamCqcCgolbBuy36gfAjWrH3bckw&X-Amz-Signature=0ad2b825f2569be017191d02f66eca01754a8db2c3ea1c9d9abe580af75048ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP4DWLXE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAhV2dw1b2ifhc6oVHtkvJUZTdUIW11QHu2jPU9kwS65AiEAom%2FCpNtRfWq5pft1o1EP2DT7VPN2u9%2BSiVkRc4n13kAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEKHt7dv%2Bli2oJxP%2FircAz%2FzsHj8OxVlowKUHSoUeC39v%2FR9UIMXveWzVhqYI0LbGK7hZqqLjo4Mcbixf9HFO7qa%2BtQhWrvM15zwJOfbaWq0aopp0zu8Uk9yutahoeQykspusuFHDUK65bJENdu5VBoGqPV%2FwLitcFrW8DpXvWwXb0Mp0TJZnqrc9kbjg%2BXAVNoIz7N1ZN0hiKmqT5%2Bdwd4Za3smGiyVkzu6e%2FCYFBTmZPHtKdoVnN5tA0ueBT4atQ08iUKYFtQXSBJkpJDL4gtIuuH717VBBMWoGSodFUx3Ue8sAscF0Uc5gVL0f583Tr6sDEAZVvOrFG3G5hHAPwd5CtXqs2MFAlPURAJKwJJ2cMFwz%2FL8wAiR5EsKfONf7drMytsQ3E8LJjiMrMcLMa6%2BSqXMHyes7S5jAQ77m91VH62XqF2fzbJXxKrw8gpPdbzbT909UXFE4L%2FinSpVGV3D1eU4Oyl1SJGJNzF1CPX6qyYzfui%2BIZseUw12xQ3WwEspv5nMnDW%2BwVSFuyzsUjrlmlougjSqrRvu51q4pqfYSEPKxx1tCpCSQf8WvoTbrEVO71w21aEXTyDXF8D1r0ipbTBTjcYvCY69myRnDWMS2RmhTskEVSl%2FRkWHHXMgOE3EN9wR2N3K%2BGycMMyUw8kGOqUBxu9snpHSTowacSqEnWPKZY3VlD9v0Fo0aBPPL1PNb4M8pbxp6Q8bs7ODj4sWXlwFnvO%2BPfY%2Bxft83v2U8LkX6yEs1OpllSJeDPXFdaA9zJqIPjitc9yasS6eADGCOPrWToB1s1EOXb2MktNsSoSvmllR7aQ5zxpZl9EnQ9pww3a%2FJNYw360co0bAJ1ilPKPHeamCqcCgolbBuy36gfAjWrH3bckw&X-Amz-Signature=73cb88ecfcc656271615c97253ecdc8080fccdd6a11e15860b4a4f9368f2b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

