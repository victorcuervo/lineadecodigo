---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSD4SNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdFRbjUqtU%2FUqKhv0XmhIvswjkyC08Cbryk5q1ApqWOQIhANai%2FImwpC9SnypMRIEx8Vx%2Bs0oR5bkDbEDcBTntndcpKv8DCHUQABoMNjM3NDIzMTgzODA1Igw4tAl9lv92KwN1IVgq3ANkUNPIoT9DPMOz8ZpXVnrTGMw7K%2BqLz3Y%2BU1zLabnh2ZPLZXbcXoKT4DwN7JsqQ5i%2BlCGH7WhUjP%2Faz7stWYlNNyFQb8ma0sLj9bFd2w5paTSO%2Fo10em34JR9GuaGlZZLkJ%2FWCbk7T14m5snUTIbq0DQNGpcNW5dcpvBo3CAP0%2F0nn9vJ4q7EkIOV50lucUVflhPfra2zhE7g6aL7sdgxgsEC4xSeUBjz4DOfVFCF1B0dnNgW3o0AC9EexCISflCdkIxET8JungpUUMBFSeC2y%2FKhBrPCWX2fCqJNw6MaJm2OpggeOvwIqV%2Fa264BgogyxMG4Rk7Q5ibEq06pRZsXbfcVvlxsiq1KTAUxoRPpYZiidEPr5rydLEr2TTCZf9UM%2Ba2%2BvQGslWDLyJ7XEx4bjc8Sf68DQpnICqa4jpQAIO0jL35xxPZ8fYzhU1PLAOLsRkUs8HCS24aItpzh9wKCZPTnPIILhfHNG7IwocPOwhpn%2BnWO15qrrHw7zmJE4r1IfbHMlYACPKKyhIzQYpNuh%2Fda6UDFa83TLXa4GYFg7sGJugIx8LBtBGT3hLGNp791EPojh1U1amhIyjFSrNMtyRrO1Nd3yRYUbTlV6U4pxnq6Hq1%2FglIW9ytxFkzD3ptDJBjqkAefAuZSDnUIS%2F7x6UTAclpUc1kG2mqjSzv1gDzBSq%2FzhP4fiJnyoEei%2BmgyFeGUKTE62hmj7%2BrwvYlnEXhG7LMDI0Z%2BKRAxCElmH%2FurVwbi%2F1w9i3YVHSKLbD2h0ayKsEn27N%2FfOoETeGXoK7HeiMwmiYuM%2FwZj%2FbtViD3GJlSFNKZx%2BvVvj8XG35k3QBbn6xqAGuyUNvEH%2FP2bpwtuYLZlSfu1G&X-Amz-Signature=d52200ab645449f398a5f580c5fff49b2242d5087faaafa4a48056b513f39ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSD4SNP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdFRbjUqtU%2FUqKhv0XmhIvswjkyC08Cbryk5q1ApqWOQIhANai%2FImwpC9SnypMRIEx8Vx%2Bs0oR5bkDbEDcBTntndcpKv8DCHUQABoMNjM3NDIzMTgzODA1Igw4tAl9lv92KwN1IVgq3ANkUNPIoT9DPMOz8ZpXVnrTGMw7K%2BqLz3Y%2BU1zLabnh2ZPLZXbcXoKT4DwN7JsqQ5i%2BlCGH7WhUjP%2Faz7stWYlNNyFQb8ma0sLj9bFd2w5paTSO%2Fo10em34JR9GuaGlZZLkJ%2FWCbk7T14m5snUTIbq0DQNGpcNW5dcpvBo3CAP0%2F0nn9vJ4q7EkIOV50lucUVflhPfra2zhE7g6aL7sdgxgsEC4xSeUBjz4DOfVFCF1B0dnNgW3o0AC9EexCISflCdkIxET8JungpUUMBFSeC2y%2FKhBrPCWX2fCqJNw6MaJm2OpggeOvwIqV%2Fa264BgogyxMG4Rk7Q5ibEq06pRZsXbfcVvlxsiq1KTAUxoRPpYZiidEPr5rydLEr2TTCZf9UM%2Ba2%2BvQGslWDLyJ7XEx4bjc8Sf68DQpnICqa4jpQAIO0jL35xxPZ8fYzhU1PLAOLsRkUs8HCS24aItpzh9wKCZPTnPIILhfHNG7IwocPOwhpn%2BnWO15qrrHw7zmJE4r1IfbHMlYACPKKyhIzQYpNuh%2Fda6UDFa83TLXa4GYFg7sGJugIx8LBtBGT3hLGNp791EPojh1U1amhIyjFSrNMtyRrO1Nd3yRYUbTlV6U4pxnq6Hq1%2FglIW9ytxFkzD3ptDJBjqkAefAuZSDnUIS%2F7x6UTAclpUc1kG2mqjSzv1gDzBSq%2FzhP4fiJnyoEei%2BmgyFeGUKTE62hmj7%2BrwvYlnEXhG7LMDI0Z%2BKRAxCElmH%2FurVwbi%2F1w9i3YVHSKLbD2h0ayKsEn27N%2FfOoETeGXoK7HeiMwmiYuM%2FwZj%2FbtViD3GJlSFNKZx%2BvVvj8XG35k3QBbn6xqAGuyUNvEH%2FP2bpwtuYLZlSfu1G&X-Amz-Signature=052419d661bc8356518ded5401ff2ab3731cb1cd0286531aff60650ca7775781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

