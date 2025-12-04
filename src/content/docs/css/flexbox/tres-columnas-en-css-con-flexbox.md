---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMVKM6O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFRpzY15P4AvtMyghAfo75ptk9X8hjcl%2FbTxwkhvkEPEAiEAwz1ipNMu9c358d5w0znaoF47MegQfOeSZn5pvmerVjMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBEZM5GlvTJKRj0w3yrcAyGZNCmlv7ialheOoDfa92Z4AWRFDtPzB77AIsCAzCkBOMLHOsDuzTWaxOy8yig3xOfi77QeJeNhBL8XmaJiP7WlnFvGlGy6I8phbFXUKuWxapupCg9MTRTy1P5gJkg7i3%2BlQ%2Bf6lNYNS7lZnZ3YR2bzmrfxJdd%2FbZsw%2FZmUZpx9%2B%2FFnVD%2FjBy3toBZ7BfHy%2BmUAUpm3lGr8XPldgwk8pd%2B9pLJMTHSdsDpqEOTwSGJNXStUiwUOMAcFWhRSZIM8cX1GITzEr3kd%2Fl580oqcdO8EJgrmCrEuKt5K8UO70UO3NdfMy4DYbKfoRr%2BWWN0M5FPVAGfX6TPm5M7kh%2FiDau%2BjXyrDOoWa6OF58RPwPFhTZ7y%2FIOWqOQyqwaLJNXPY%2BA3vyz01wICmnLPbu4X1%2BaIJC2hySHms06aFD1eXDeN0YORC7m08r1wEJ0BtNk7WNIpcUtbkXN%2FaQ78BLLfhHYttlWhsDyZL2Fw8sqZSPVKOQXk93LDpL08tKSdI0L36%2BwHtuGBA1T2J60EtE3e%2Fb9RjkMGBiB5EkqUcGASfhaNh5reGQ%2B6wPMUQYLcPW7M63cBNrTlAUVg8msu9GDp229KRAMOegDweNKPE3CQUQRUNs2t%2BaQYI597NiSeDMPPoxMkGOqUBQfEVgO1uBEbuYSK2tP2pQDHwqhmPR9D2lDMbMpuiHV6NOr2IBYZLvTO2wZWB82k3bzVwdE7YcrIdA2cSj1Jbp0eXRbtzLX0IUZGFNVncdA7t8rEQD3hP4Kq0RVDE5F6ZbsOIlMDYkzVqP5We1uzujtXPMC9OSkgQowF%2BbcVZPvI5KhZoBS%2BOZKvm%2Bnd0TYNf2dtKkY%2Bz97EP7AesGAKFYdgDF9j4&X-Amz-Signature=deccc8d3f626ee8c5cea1c8af839c3347df9ba11b2b6cfa1d9a5a4757018c9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMVKM6O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFRpzY15P4AvtMyghAfo75ptk9X8hjcl%2FbTxwkhvkEPEAiEAwz1ipNMu9c358d5w0znaoF47MegQfOeSZn5pvmerVjMq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBEZM5GlvTJKRj0w3yrcAyGZNCmlv7ialheOoDfa92Z4AWRFDtPzB77AIsCAzCkBOMLHOsDuzTWaxOy8yig3xOfi77QeJeNhBL8XmaJiP7WlnFvGlGy6I8phbFXUKuWxapupCg9MTRTy1P5gJkg7i3%2BlQ%2Bf6lNYNS7lZnZ3YR2bzmrfxJdd%2FbZsw%2FZmUZpx9%2B%2FFnVD%2FjBy3toBZ7BfHy%2BmUAUpm3lGr8XPldgwk8pd%2B9pLJMTHSdsDpqEOTwSGJNXStUiwUOMAcFWhRSZIM8cX1GITzEr3kd%2Fl580oqcdO8EJgrmCrEuKt5K8UO70UO3NdfMy4DYbKfoRr%2BWWN0M5FPVAGfX6TPm5M7kh%2FiDau%2BjXyrDOoWa6OF58RPwPFhTZ7y%2FIOWqOQyqwaLJNXPY%2BA3vyz01wICmnLPbu4X1%2BaIJC2hySHms06aFD1eXDeN0YORC7m08r1wEJ0BtNk7WNIpcUtbkXN%2FaQ78BLLfhHYttlWhsDyZL2Fw8sqZSPVKOQXk93LDpL08tKSdI0L36%2BwHtuGBA1T2J60EtE3e%2Fb9RjkMGBiB5EkqUcGASfhaNh5reGQ%2B6wPMUQYLcPW7M63cBNrTlAUVg8msu9GDp229KRAMOegDweNKPE3CQUQRUNs2t%2BaQYI597NiSeDMPPoxMkGOqUBQfEVgO1uBEbuYSK2tP2pQDHwqhmPR9D2lDMbMpuiHV6NOr2IBYZLvTO2wZWB82k3bzVwdE7YcrIdA2cSj1Jbp0eXRbtzLX0IUZGFNVncdA7t8rEQD3hP4Kq0RVDE5F6ZbsOIlMDYkzVqP5We1uzujtXPMC9OSkgQowF%2BbcVZPvI5KhZoBS%2BOZKvm%2Bnd0TYNf2dtKkY%2Bz97EP7AesGAKFYdgDF9j4&X-Amz-Signature=a3862026a6ee882ccece70a649dddf93ba3d793ec00bce85daa024799d66ff9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

