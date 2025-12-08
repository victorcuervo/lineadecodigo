---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF5EKUR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDoMpDIsnNsXzARktfue6y02jA2f1b5qTDhbr680LwOAiEA%2FlJAlhgud8ziqT%2B%2BFyuX1dcuWcHHJxJ20d94BfQKtfoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ20OnC%2FofKt37oXtSrcA3svJu%2B7Ch5FOJ7K0z8U%2FqWkdAkw9JUcieEjEI%2FVFl8N85D5yHD%2FjGOvCms%2FcHkOphcZ5%2FngOVV47giVZCXfz6S%2Fy%2BZhTqRsir%2BxqE3cSCxw8R91Bwu5N8VzcEZnWqwdhbzyb67JrJq0oxrQmCNXYPPx1PEexlOvkZRL2MNtRgNVgnExNfISkqQwT6gWT8kT3uRVP%2FMSqdtCQzMTFZ%2FT%2FT2lE0eE%2BvunEPnXEETY%2Bp37N%2BX%2F1%2BEWkFOZXlnSKPACqxgipaZ%2BiteT6zUHSc6HTL1VR9KSexxUI5XOTIPrv5fZg%2Fmxi1Zz88MdyVnmCLsho9GbNaBXXD8Lfrbmcue7AJzX%2Buhx4Z3i2UJIzJSHAFNXrKiD%2Bc1a5l7LVWgtCX5YU%2Bcmj5gT412ADpDM8EdUQrY2g4OJzWkFtSNeWj7G8fFvj8NSVkGrLWXyzEjiR86N35%2Fw9X7fFlkRC4M6lRXAroAlOS65%2B5mUnvNixrNdgLE%2FUvAChwnVSKHrOu5HklOfW7F%2FQ1R78oUXeDzwXQ2Ihq47HqgQGiJgYOKuvI0CRWVq3ncFtVIclP5c3ORokufuGM46PkukAf4Mxo2xJ5mXCAw3gydpRWqcRmODl5iuZsUQiLbttqem5PnzSfj%2BMIDu2ckGOqUByevk1fRA3%2BMzyoVyGHgzzxNhCV%2BwXMGUdoZkKkxI9mEkDpoP5kvKBo85eV1srcsCw5gRaJik4lY0MXORHHXB4kUmwu0a2U6%2Bp0NEi71lFO8H3W4Fdm9VywpYbNjivcZawC94r2trI%2F0GxPpwdlM3XzrJcvxRsasJnJEVZDCIenPfbub7BOuAO7Q4qBAwjZsCzFERRVUpTkL6J8MqGCr4iZ45JZFy&X-Amz-Signature=a9fd190959b4f1c2cbe22b6ce0d5e3059b82cd20392d88ad1cc94c3f0a72d3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF5EKUR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDoMpDIsnNsXzARktfue6y02jA2f1b5qTDhbr680LwOAiEA%2FlJAlhgud8ziqT%2B%2BFyuX1dcuWcHHJxJ20d94BfQKtfoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ20OnC%2FofKt37oXtSrcA3svJu%2B7Ch5FOJ7K0z8U%2FqWkdAkw9JUcieEjEI%2FVFl8N85D5yHD%2FjGOvCms%2FcHkOphcZ5%2FngOVV47giVZCXfz6S%2Fy%2BZhTqRsir%2BxqE3cSCxw8R91Bwu5N8VzcEZnWqwdhbzyb67JrJq0oxrQmCNXYPPx1PEexlOvkZRL2MNtRgNVgnExNfISkqQwT6gWT8kT3uRVP%2FMSqdtCQzMTFZ%2FT%2FT2lE0eE%2BvunEPnXEETY%2Bp37N%2BX%2F1%2BEWkFOZXlnSKPACqxgipaZ%2BiteT6zUHSc6HTL1VR9KSexxUI5XOTIPrv5fZg%2Fmxi1Zz88MdyVnmCLsho9GbNaBXXD8Lfrbmcue7AJzX%2Buhx4Z3i2UJIzJSHAFNXrKiD%2Bc1a5l7LVWgtCX5YU%2Bcmj5gT412ADpDM8EdUQrY2g4OJzWkFtSNeWj7G8fFvj8NSVkGrLWXyzEjiR86N35%2Fw9X7fFlkRC4M6lRXAroAlOS65%2B5mUnvNixrNdgLE%2FUvAChwnVSKHrOu5HklOfW7F%2FQ1R78oUXeDzwXQ2Ihq47HqgQGiJgYOKuvI0CRWVq3ncFtVIclP5c3ORokufuGM46PkukAf4Mxo2xJ5mXCAw3gydpRWqcRmODl5iuZsUQiLbttqem5PnzSfj%2BMIDu2ckGOqUByevk1fRA3%2BMzyoVyGHgzzxNhCV%2BwXMGUdoZkKkxI9mEkDpoP5kvKBo85eV1srcsCw5gRaJik4lY0MXORHHXB4kUmwu0a2U6%2Bp0NEi71lFO8H3W4Fdm9VywpYbNjivcZawC94r2trI%2F0GxPpwdlM3XzrJcvxRsasJnJEVZDCIenPfbub7BOuAO7Q4qBAwjZsCzFERRVUpTkL6J8MqGCr4iZ45JZFy&X-Amz-Signature=5efd90f9fac844c9fc8b898a7b2c52aaafab906dbf95872ab0b91a2063c4df68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

