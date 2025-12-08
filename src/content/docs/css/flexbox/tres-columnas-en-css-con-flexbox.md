---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PFOYR2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2VBfs6v4LXb1UCf4NOliIGz1mdG4YJJVwpnHsBXCM8AiBDuEXRK8AUmRtpBnYXbYm%2BdIeAaDWpchHsd2csbLBw6SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOru1g8FRYRIZwzXfKtwDAWKrQSHfXRGU915%2BeGPvP%2BTFD1VTQG9vS%2BRvTjRpbYLT%2BWeqlmLkDK%2F6XcYBEqWMK2jxOIoZjeHQ9e4P8psn2Fk3tnD5%2BLF9ouE2lzrcoqCZ%2FgsAGGj%2Bo3b1ksBFt7zdCHm0YnNMbWwU8S%2BEy2EVlXcyxtOiFyHnLZ4m2CuvwMz66DAyBqlB89BChYoxLMjxUkHu%2FbxIUcnkWR4qYIiXJ%2FmuX%2FqI4pNDfGAHxe2BbaHXvNULb4T%2B3%2B81Hg5vvc%2B8fjcL%2B%2BrwEAiaFa6CF8AhnKRdgN8UI5tJ%2FRUTN2doo1y4D0quF6CRXaiNlmvg0NmMy48ACLAeTWJ52OH4OEcs53l%2B2OEyXWF0MXc7VI1FIy7MhgntF8%2F%2BYhu0lsciiSkIwvn4tbNhAjokxNNCGDTVX5pYiyOyCmLjx7DWiegwrdr5VhKiphLxDCDH2j8St0a3zzRAgpJYgEaHPsxHnCTEITRMsjwkuKSw20yKMX1GonX7M1K%2Fsl3Ttt3tKLtpIfZHjA%2BmCHakrF4yqG6Ao5SULKetn%2Bcnuaer2sZSmRwCQWbm3oxbbklJR4iAh2%2BQa0qT7UQAhCkwdULpSbXx968Hls0W%2FfnWFSc6Xzz4I8BRv4kmx5FcNFubqSauUAkwutDZyQY6pgFtYIMsJVypGFmeY1KfZvQG3Zaz%2BqXyfRB656S1%2Fglci%2BifGNAJHSfuAhK%2BZDDN4dqcOvYvRueTSMizhhRbxj5wgAMwDtuus1gghv52VwLdWUy%2BPmqNlXaxhoLVOI1X7o44meh6jj4Qp9iTDlJ4vaI%2B%2B3NxLtukVzeWBkanAisjTtD7WGAuhL6K%2Bcxc3QZZPUA0ASCAoXXuBSwIVECKSRc2n9u3KHI3&X-Amz-Signature=007695dc393ad9aa95f0012487a7623375c54a3302fc1ecee8ccf25308e21743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PFOYR2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2VBfs6v4LXb1UCf4NOliIGz1mdG4YJJVwpnHsBXCM8AiBDuEXRK8AUmRtpBnYXbYm%2BdIeAaDWpchHsd2csbLBw6SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOru1g8FRYRIZwzXfKtwDAWKrQSHfXRGU915%2BeGPvP%2BTFD1VTQG9vS%2BRvTjRpbYLT%2BWeqlmLkDK%2F6XcYBEqWMK2jxOIoZjeHQ9e4P8psn2Fk3tnD5%2BLF9ouE2lzrcoqCZ%2FgsAGGj%2Bo3b1ksBFt7zdCHm0YnNMbWwU8S%2BEy2EVlXcyxtOiFyHnLZ4m2CuvwMz66DAyBqlB89BChYoxLMjxUkHu%2FbxIUcnkWR4qYIiXJ%2FmuX%2FqI4pNDfGAHxe2BbaHXvNULb4T%2B3%2B81Hg5vvc%2B8fjcL%2B%2BrwEAiaFa6CF8AhnKRdgN8UI5tJ%2FRUTN2doo1y4D0quF6CRXaiNlmvg0NmMy48ACLAeTWJ52OH4OEcs53l%2B2OEyXWF0MXc7VI1FIy7MhgntF8%2F%2BYhu0lsciiSkIwvn4tbNhAjokxNNCGDTVX5pYiyOyCmLjx7DWiegwrdr5VhKiphLxDCDH2j8St0a3zzRAgpJYgEaHPsxHnCTEITRMsjwkuKSw20yKMX1GonX7M1K%2Fsl3Ttt3tKLtpIfZHjA%2BmCHakrF4yqG6Ao5SULKetn%2Bcnuaer2sZSmRwCQWbm3oxbbklJR4iAh2%2BQa0qT7UQAhCkwdULpSbXx968Hls0W%2FfnWFSc6Xzz4I8BRv4kmx5FcNFubqSauUAkwutDZyQY6pgFtYIMsJVypGFmeY1KfZvQG3Zaz%2BqXyfRB656S1%2Fglci%2BifGNAJHSfuAhK%2BZDDN4dqcOvYvRueTSMizhhRbxj5wgAMwDtuus1gghv52VwLdWUy%2BPmqNlXaxhoLVOI1X7o44meh6jj4Qp9iTDlJ4vaI%2B%2B3NxLtukVzeWBkanAisjTtD7WGAuhL6K%2Bcxc3QZZPUA0ASCAoXXuBSwIVECKSRc2n9u3KHI3&X-Amz-Signature=a766a6ff86b359cb348ab6a52127f83f1b9da726b9a2cc5d7ddf3be99909e57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

