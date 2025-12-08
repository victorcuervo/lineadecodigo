---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FI2KH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQx3c0wld4YwXdoRlezu1c2vtYR9492CKq3dUCG2aRuQIgWMWFYiGyVEm2Mc1BsFITzEmkPeVmSudhLzyvRrsUs4gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzjZHlIDVm4tF5pwyrcA0AdTtTW2UYud1Qv7p20PjnyclQe2g7JdRcbym1vTkD7aLTDZbo1%2BJoETqdB7oiaafDKEQv1kRFW6ux5f6ytR01k0GQGS0IVf9XIpB6phE1gupB46CizR6pFKZlEcg8%2FaZg4WN4pWLhaacQ8Lv2YJLZFR0DhF%2BmyM4WMQ5x3v4IRq%2FDx8oqDvmmZp3Hk4yFliS631LhDpQQ%2F069oGx58PbUA6jDgK6KUlC2a94%2BjN%2BTSUXQLb2Fx%2FzxRRajen9d806LUkFlBoz58qUxLvZvUg5EPYP6EWlmdQUbBQ4dJe29cT8i3Z9TkmfognrcGLAcZTst7R7gr4SKs1VWw%2F6POuKFuzZXhdgn3sJfvVJz9GW4hf00It0ZcXuMBnZwXMGmC%2B%2FBEUi%2F54Ng1RXGSdwdHzNdUhi6zBAQFGfp1BSBCLUUAEnY8wVGjfEY0XUKyCY%2BM4Y6MS0ZSD4YOp9%2F%2FjvusL7pzx%2FMjNsabfCB0XJvr5MtP7yeZi%2FRexIOrhhrF0a3EaisRApExUqrh7XibkABhM5evFwZxeshqKmFXL8LPux1T4Zq3AF9QwbfFurvh2He8Hgm1tqR8kemclXuZBdVaamycodLFZR%2FFPFwANOfxrJ2nNBhJ%2FcNGjqzOWDR%2BMNWA3ckGOqUB4zRSmLw5Y6nPqRnNbg2%2Fa2BPmJdEZXtCOF2MQ2bhml4L%2FV6tk4Fa2GWHA0BF2rRXyL5Ea9aGl525UT5aFaYGE%2FE09f1PJ6SjmMTUFno0%2B0RMiNFSP1dEDj7BvRtwYvMX4YCCKbfa39SF7lTPIvpaEdkBi0%2FX61JVw9hzJ634xlxffr40lWQHErP%2Fmz66ZC%2BX9hgjdmjnCQuroMrEBuv5GLM%2F%2BBm%2B&X-Amz-Signature=18dbbed6e4f3b3660d3ac9b621a4debc008e9ed547fdbbb9aa64e9de2c691526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3FI2KH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQx3c0wld4YwXdoRlezu1c2vtYR9492CKq3dUCG2aRuQIgWMWFYiGyVEm2Mc1BsFITzEmkPeVmSudhLzyvRrsUs4gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzjZHlIDVm4tF5pwyrcA0AdTtTW2UYud1Qv7p20PjnyclQe2g7JdRcbym1vTkD7aLTDZbo1%2BJoETqdB7oiaafDKEQv1kRFW6ux5f6ytR01k0GQGS0IVf9XIpB6phE1gupB46CizR6pFKZlEcg8%2FaZg4WN4pWLhaacQ8Lv2YJLZFR0DhF%2BmyM4WMQ5x3v4IRq%2FDx8oqDvmmZp3Hk4yFliS631LhDpQQ%2F069oGx58PbUA6jDgK6KUlC2a94%2BjN%2BTSUXQLb2Fx%2FzxRRajen9d806LUkFlBoz58qUxLvZvUg5EPYP6EWlmdQUbBQ4dJe29cT8i3Z9TkmfognrcGLAcZTst7R7gr4SKs1VWw%2F6POuKFuzZXhdgn3sJfvVJz9GW4hf00It0ZcXuMBnZwXMGmC%2B%2FBEUi%2F54Ng1RXGSdwdHzNdUhi6zBAQFGfp1BSBCLUUAEnY8wVGjfEY0XUKyCY%2BM4Y6MS0ZSD4YOp9%2F%2FjvusL7pzx%2FMjNsabfCB0XJvr5MtP7yeZi%2FRexIOrhhrF0a3EaisRApExUqrh7XibkABhM5evFwZxeshqKmFXL8LPux1T4Zq3AF9QwbfFurvh2He8Hgm1tqR8kemclXuZBdVaamycodLFZR%2FFPFwANOfxrJ2nNBhJ%2FcNGjqzOWDR%2BMNWA3ckGOqUB4zRSmLw5Y6nPqRnNbg2%2Fa2BPmJdEZXtCOF2MQ2bhml4L%2FV6tk4Fa2GWHA0BF2rRXyL5Ea9aGl525UT5aFaYGE%2FE09f1PJ6SjmMTUFno0%2B0RMiNFSP1dEDj7BvRtwYvMX4YCCKbfa39SF7lTPIvpaEdkBi0%2FX61JVw9hzJ634xlxffr40lWQHErP%2Fmz66ZC%2BX9hgjdmjnCQuroMrEBuv5GLM%2F%2BBm%2B&X-Amz-Signature=53da59ef568c708216831ac3ba6257668d6a3df1c739547889180ca09672a38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

