---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQOTV23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIgiJ%2FZ18ZyRUs36LjfExAe8FpjxVq8ssqc21RjhVLcAiEApBko1pJgpA1UhTs1wPiRE7eT%2FfG3KfK4iFppED3qhbQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5XYkfsz11rRSDnwyrcA28IG2xZdKYNCkGEnla8uezZAqQ2cPG%2BmmmcQGNCOWZkNwTBPhbQJrF41bZoXjO0FT2xvTWBk%2FmrRVVimAAjmtRePH1T7D67xZAI2GbqRBPhS07hN0pdjvN1RoDKYRGTrHpMhLxFUpU8lWTCfP1B9bc0lucRXT%2FRxpUuoUb551T%2FkdoBvdafPnKpXOtkTqJswTLaypsW4tnj%2BZvFpheIrQLKcz8n3Gz3vBZ9VbGk%2BpIZR3h8xEWYilKXmMawreW8ndAUVSzrWdbAcRwSOFEleDQVjHgU8bFPAC60Sk1zhtX20%2Fslz3ZTnCohnuMRWm8ah5yMeqbufbKNGoK7vpYllmAlKhoxhV2CK51bapx9LDx0ztOEajGdQiqRCJHq%2B%2FSB7PqAoElnGg1rZkDLlonVqY%2BOUf3bFQNGu9v1dsavRiXbXS4CKSkApBWnP7C9ulFWr0ByGL7IC%2BNHZLhQsLZ0gE7U08D%2Bxed46FPuQp8FjZu6BjrJcDf5KFFYN0MPKgPoc2PmDnFtpeof6w9ojmLVLvR%2Bt%2FGru%2FxcfWN%2BOSZvrwwMpebd5SC7cBg5OvXYWOLY4WgAcl%2F2N%2FCNdqRRJQ8DR8ofpjJnSIiMGAHP1ZEOq04HMdpnCdKGjZ0UYvWBMKDd3MkGOqUB%2BG9SO2WQBJcMRpt2DRdmrwRGGIWQqSOESd73ZNnxJIuISrwgG444F4ESk7GBeHSZWQDPJ7nJ9kf%2BPY4HUF2wuEEShRuFblXtEJJFLAmf%2BUt33vcIIRsrTe3FyFK9s7zJrLdOE4GG5cRG%2BtDV7n3lTgYdYBK8yUvC5jX1cRXOVLPEOWuajnmWvNyw6Is7L8lbM2oHIDmUTNUgLcJ2u3Jen%2FL7i2gT&X-Amz-Signature=13a3744e4e9304e2d9224067f67528402c735349e77b0d5b7aaf019e5cce0cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQOTV23%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T203126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIgiJ%2FZ18ZyRUs36LjfExAe8FpjxVq8ssqc21RjhVLcAiEApBko1pJgpA1UhTs1wPiRE7eT%2FfG3KfK4iFppED3qhbQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5XYkfsz11rRSDnwyrcA28IG2xZdKYNCkGEnla8uezZAqQ2cPG%2BmmmcQGNCOWZkNwTBPhbQJrF41bZoXjO0FT2xvTWBk%2FmrRVVimAAjmtRePH1T7D67xZAI2GbqRBPhS07hN0pdjvN1RoDKYRGTrHpMhLxFUpU8lWTCfP1B9bc0lucRXT%2FRxpUuoUb551T%2FkdoBvdafPnKpXOtkTqJswTLaypsW4tnj%2BZvFpheIrQLKcz8n3Gz3vBZ9VbGk%2BpIZR3h8xEWYilKXmMawreW8ndAUVSzrWdbAcRwSOFEleDQVjHgU8bFPAC60Sk1zhtX20%2Fslz3ZTnCohnuMRWm8ah5yMeqbufbKNGoK7vpYllmAlKhoxhV2CK51bapx9LDx0ztOEajGdQiqRCJHq%2B%2FSB7PqAoElnGg1rZkDLlonVqY%2BOUf3bFQNGu9v1dsavRiXbXS4CKSkApBWnP7C9ulFWr0ByGL7IC%2BNHZLhQsLZ0gE7U08D%2Bxed46FPuQp8FjZu6BjrJcDf5KFFYN0MPKgPoc2PmDnFtpeof6w9ojmLVLvR%2Bt%2FGru%2FxcfWN%2BOSZvrwwMpebd5SC7cBg5OvXYWOLY4WgAcl%2F2N%2FCNdqRRJQ8DR8ofpjJnSIiMGAHP1ZEOq04HMdpnCdKGjZ0UYvWBMKDd3MkGOqUB%2BG9SO2WQBJcMRpt2DRdmrwRGGIWQqSOESd73ZNnxJIuISrwgG444F4ESk7GBeHSZWQDPJ7nJ9kf%2BPY4HUF2wuEEShRuFblXtEJJFLAmf%2BUt33vcIIRsrTe3FyFK9s7zJrLdOE4GG5cRG%2BtDV7n3lTgYdYBK8yUvC5jX1cRXOVLPEOWuajnmWvNyw6Is7L8lbM2oHIDmUTNUgLcJ2u3Jen%2FL7i2gT&X-Amz-Signature=c6a8b7d76a07fe84f894c7d51cd6d8579ca2fbb25fdf1cfb208c8638b7477cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

