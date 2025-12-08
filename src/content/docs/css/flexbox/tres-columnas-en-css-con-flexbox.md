---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFN4YGU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwqtgfeyY0TBJ05YaazeXM%2BWsTT9qGTfpmz08vMa1XZAiEAo9F4PXp1Bk7lLyIpyMEkuMrClSuzbv1igU5jDVqZAsUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8iPCF3C7RrxMkMfircA%2BLoJNSdGznw7x2lzSJGW5qVl8eECEfj5w%2FCTq%2BpNPy9eIqFat8m26lNim0LaKFt%2FFdDPcOcXi%2BURhKz2fWKt8TJAg3iRa6dnCSAKBY3ZhNfliDlkwDl4KIvNmJ4vZvnHzYWUAcAeMSMemI5x6mRsCU5jzwJuAHyU2CxLSjSmADuP2gEiZHNrhS3DphotcKirfXvQqMpmnhCA5LnHK3VJei3Wnyh%2BDzVx9Y9MpN1%2B8d6P%2FL%2B8gYZNPla5prgibqHCzGCP%2FUG7CzhbSvBMV9dn004zOwNuS27ROTJVozIWaMmE0DQrMuVhmw0u4CprEp6Z9kNeR714dX0TiNg1SE5HCg%2BC6AUG79ihM7S6iBl1c3mKbgaarniosTCg%2FLEtzV4SeNwwCDJ%2FBUm7xS9Nx3A5rvSGhi1LyJPAE5vit6nJJFU5mVkVdcwqlPu1CVE%2Fa8%2FQHBun%2FB%2F4OkM5GqwNyPYhl87BtLDC2n%2BqxR8Kp0dKL7cPrFVZlThR7bv3yyOzBRtSx2R7z8M1NF7I%2FfoaPyLuhwj%2BNmw2%2B%2BWamPCQG%2Bl6lIZjwzD0Ow0PAmUFboL2jPkDpyIx2ofFXTq2LctFqqoOV2yQD4CpTvpXTHpEnY7t%2FbMSF8z9kCPkVG2I3ekMKOh2MkGOqUB9InCtlLOLV9KQx3T%2FmoTeRvUg4v2LkQhDp5NcwWgInKGCq2VuyLmRYlz4rVMwD%2BOSFgd%2FJG%2FrEORJ%2BlNL6iydMAK2SEPhfUtoI0xa0gDtc569NyS1xT%2F4ZWfcPMDB5w75d7sqsAx7UnSlSD8YCrg55%2BpNgB6gnx3Ei7axHKa2C%2FlNlkaEZ9ftG40raLhxrBI92GnLqtoo3kF3JniTyLWGwkmgKwW&X-Amz-Signature=1ae360051db9f1731bf0ca8c2fce17531166f9df722e2dae956da9e75edd085b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFN4YGU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwqtgfeyY0TBJ05YaazeXM%2BWsTT9qGTfpmz08vMa1XZAiEAo9F4PXp1Bk7lLyIpyMEkuMrClSuzbv1igU5jDVqZAsUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8iPCF3C7RrxMkMfircA%2BLoJNSdGznw7x2lzSJGW5qVl8eECEfj5w%2FCTq%2BpNPy9eIqFat8m26lNim0LaKFt%2FFdDPcOcXi%2BURhKz2fWKt8TJAg3iRa6dnCSAKBY3ZhNfliDlkwDl4KIvNmJ4vZvnHzYWUAcAeMSMemI5x6mRsCU5jzwJuAHyU2CxLSjSmADuP2gEiZHNrhS3DphotcKirfXvQqMpmnhCA5LnHK3VJei3Wnyh%2BDzVx9Y9MpN1%2B8d6P%2FL%2B8gYZNPla5prgibqHCzGCP%2FUG7CzhbSvBMV9dn004zOwNuS27ROTJVozIWaMmE0DQrMuVhmw0u4CprEp6Z9kNeR714dX0TiNg1SE5HCg%2BC6AUG79ihM7S6iBl1c3mKbgaarniosTCg%2FLEtzV4SeNwwCDJ%2FBUm7xS9Nx3A5rvSGhi1LyJPAE5vit6nJJFU5mVkVdcwqlPu1CVE%2Fa8%2FQHBun%2FB%2F4OkM5GqwNyPYhl87BtLDC2n%2BqxR8Kp0dKL7cPrFVZlThR7bv3yyOzBRtSx2R7z8M1NF7I%2FfoaPyLuhwj%2BNmw2%2B%2BWamPCQG%2Bl6lIZjwzD0Ow0PAmUFboL2jPkDpyIx2ofFXTq2LctFqqoOV2yQD4CpTvpXTHpEnY7t%2FbMSF8z9kCPkVG2I3ekMKOh2MkGOqUB9InCtlLOLV9KQx3T%2FmoTeRvUg4v2LkQhDp5NcwWgInKGCq2VuyLmRYlz4rVMwD%2BOSFgd%2FJG%2FrEORJ%2BlNL6iydMAK2SEPhfUtoI0xa0gDtc569NyS1xT%2F4ZWfcPMDB5w75d7sqsAx7UnSlSD8YCrg55%2BpNgB6gnx3Ei7axHKa2C%2FlNlkaEZ9ftG40raLhxrBI92GnLqtoo3kF3JniTyLWGwkmgKwW&X-Amz-Signature=0ee83bbf1fb72e4bfd8eb9c7a5f286703fb7f4c59b9e140bd2d75cc43331d7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

