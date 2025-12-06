---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXD7C2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXr2iBkAC0Wxky%2FkJOn3Cy%2Fo%2BKlu1kLEEKADlzWISowIgbYv0C1t07pOjOJYE07%2FdU1p8LpRxFwVMFj5b7%2FaQsk8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIWWJSFOue72Axx6yyrcA%2B5%2FRPb53h5XvUUn5Pk69bkPPg4iTNvFCkyduGLZZT3Be9pRaVrKqGA079KKr1mHbzLPNLEd02w8RJrIvQVgTgvSXnOEVpYCvep8kAKZwMg9ioYVL2G6ZHR8Smi9ApiIGovC9Tv4a%2BXRTU6bADkcQP9IeGyGL7vWDCi%2ByZWzgpikcRrxndMx492B7flxo99tqakmW26ZxPmZT9bs%2FVn8U8%2B30FWZ1l%2Bb0sAFXltYeOlnRwcMUfoyUFYeSim4dVevwebZpjpslxPGhSPWWJ9LfWE98kqqgCE8SsLQcvdB8ms%2B75ICBeR3EOFpQbeHPeWoIxk1PNPjieIBeVRE6CDwgfF819fuZ5aNRsUrITcCOOvVG9pD2Zy36PaLsdmfZk0j3Vz1SrPZ7dUVqfi1eAMrQQnGL%2FDEqYPDmMutRkExkOIkKTxksDYT8WzVyorb3FsPABxVHSTKPjgemPHcTeqK5%2F8yusoUFZM33gyL9%2F%2FEXuZGF9OyH%2By%2BYST2aK3w5EFFls7rZRd%2B3bD3GemOStCMK4RlaGO2efTF4lMk63th3pzG%2BBJWJVsZ4%2FqQGzjvZQWpz%2BpgkkyJPsN781WBZJ%2BGoM4G9wB%2B11biYmIkGh8wBLc9N%2BI%2BFSdq27x63C2AMOqez8kGOqUByN%2Bwy0GxdY1c%2FM%2Bh2Pcz3MQYIIw4b49ZGkNusQxKl%2B0TpM9GfOm5CH8LkhchSqlGN1kOHcrGjqNRIMyrVxm8OxsZYJtWN%2BymjKbll%2BRFLqT%2FCUp3983vugu5ebiRc1%2B6iTmOyfJNsylyZK919rR6G9grdG5H7ySQqlJeTR3SEs7KY9lRxe%2FtSqXuN5FCbhSh3V2BwfeZ7%2FUmH1pxotUWMDiQinzR&X-Amz-Signature=44f0e05cea0189856ed219967d8dc92fdbd404bfe85e1d286b9a60a91168ce62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXD7C2R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMXr2iBkAC0Wxky%2FkJOn3Cy%2Fo%2BKlu1kLEEKADlzWISowIgbYv0C1t07pOjOJYE07%2FdU1p8LpRxFwVMFj5b7%2FaQsk8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIWWJSFOue72Axx6yyrcA%2B5%2FRPb53h5XvUUn5Pk69bkPPg4iTNvFCkyduGLZZT3Be9pRaVrKqGA079KKr1mHbzLPNLEd02w8RJrIvQVgTgvSXnOEVpYCvep8kAKZwMg9ioYVL2G6ZHR8Smi9ApiIGovC9Tv4a%2BXRTU6bADkcQP9IeGyGL7vWDCi%2ByZWzgpikcRrxndMx492B7flxo99tqakmW26ZxPmZT9bs%2FVn8U8%2B30FWZ1l%2Bb0sAFXltYeOlnRwcMUfoyUFYeSim4dVevwebZpjpslxPGhSPWWJ9LfWE98kqqgCE8SsLQcvdB8ms%2B75ICBeR3EOFpQbeHPeWoIxk1PNPjieIBeVRE6CDwgfF819fuZ5aNRsUrITcCOOvVG9pD2Zy36PaLsdmfZk0j3Vz1SrPZ7dUVqfi1eAMrQQnGL%2FDEqYPDmMutRkExkOIkKTxksDYT8WzVyorb3FsPABxVHSTKPjgemPHcTeqK5%2F8yusoUFZM33gyL9%2F%2FEXuZGF9OyH%2By%2BYST2aK3w5EFFls7rZRd%2B3bD3GemOStCMK4RlaGO2efTF4lMk63th3pzG%2BBJWJVsZ4%2FqQGzjvZQWpz%2BpgkkyJPsN781WBZJ%2BGoM4G9wB%2B11biYmIkGh8wBLc9N%2BI%2BFSdq27x63C2AMOqez8kGOqUByN%2Bwy0GxdY1c%2FM%2Bh2Pcz3MQYIIw4b49ZGkNusQxKl%2B0TpM9GfOm5CH8LkhchSqlGN1kOHcrGjqNRIMyrVxm8OxsZYJtWN%2BymjKbll%2BRFLqT%2FCUp3983vugu5ebiRc1%2B6iTmOyfJNsylyZK919rR6G9grdG5H7ySQqlJeTR3SEs7KY9lRxe%2FtSqXuN5FCbhSh3V2BwfeZ7%2FUmH1pxotUWMDiQinzR&X-Amz-Signature=3a6ce95b0244b34173bb2bd498d7d34091d4200a81a7ef24d95d4b2ba8a15cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

