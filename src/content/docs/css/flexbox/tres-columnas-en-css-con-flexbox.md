---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FD3ENEH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKNL8jS4fsIZq5%2FDyLz%2FXzltJ5d9KGnbuQJHbVvObaNAiEAvVh7mZ06Jdb%2BscMsw1cLDBayB8ICjTfSiRjfrlUCkn4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX7vgpOFlUivFB2aCrcA69m05ubhjtuBhr0GvQmBAnlEUGF0s4%2BpyNWquIkZgEEwKuU4RpXlEfhnt3AufNxPXt0SwDOcxEUD4FqE9GACf2JCZJIRD3dWp%2BWlXFpfDiPDeXmg8%2Fua6IVAnHIwuRlt%2B1PjyFMdsy7%2B083crE12m2A8mjjHKFDHz%2Fg4%2Fx3ANkHvhKm%2Bt9oHZxWBnvtvtRXWpTKrUMBkXAqILUscMyx%2BdSrvtRa6VaKKi%2FVXdHHdDiR2zu6SffEHCay1fGrTD%2ByiLlr8m1DbxdyQEOEhARjocNSEpcLCqZnWVQQ4d19r3Jfw2NjiZoPcLGqyBcT7HdnmKJwov3EmYKgO%2FIIMVkxfVDIGRXs8lSpYC6b8IgcScrMtJJae7Mx8Ho5yUx8LdCwJbx1vObfcKWmw6VEdSbf3%2BYzM765yTrjGGJ7%2FcwOfDSpHPiSZwVmXYX9I7Un0WUYtzECnLZU1jngRowEYRs4cI3av4ks7pnL8uRfu%2BYVYdvVjZSN%2F0mxTGW09XZ9tsSEqZGbpoM9NflxdkXV5aADkYMiVr4FvO5rS6H%2BGt40EVsq21Y7qtrbOUIZjBCyL4QDFXb%2F3biBM7f2Jqg7BdS%2B1I8Ic1YEe1rCvCt2jDZnRsSpHmhsD5%2FR0QOKoGLiMO691skGOqUBmqDSfAlhlySC%2FEHm1PYOVW0gJhRC%2FGaPVz7YXNuOXc7AQR6u9xf2AUOcu7AiJX%2B6SOwAbVQlxFJQtxspznhB1Vvs03d6wiogiynWLadFesVX1qUGr7HsEcn5kr3y29IWsVTzX%2FdG7jg9%2FlbnYmm1n44bt6FbROZkgRILc3ejZ5I78ubjkIgabevoBFRLb9289D9bGBN5F1Na2H4iLpLsGi6iY%2FjO&X-Amz-Signature=e79b8e05d3cdf2c2705a481307ff22e1c1d7c5defafd74082299db8af0daee8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FD3ENEH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKNL8jS4fsIZq5%2FDyLz%2FXzltJ5d9KGnbuQJHbVvObaNAiEAvVh7mZ06Jdb%2BscMsw1cLDBayB8ICjTfSiRjfrlUCkn4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX7vgpOFlUivFB2aCrcA69m05ubhjtuBhr0GvQmBAnlEUGF0s4%2BpyNWquIkZgEEwKuU4RpXlEfhnt3AufNxPXt0SwDOcxEUD4FqE9GACf2JCZJIRD3dWp%2BWlXFpfDiPDeXmg8%2Fua6IVAnHIwuRlt%2B1PjyFMdsy7%2B083crE12m2A8mjjHKFDHz%2Fg4%2Fx3ANkHvhKm%2Bt9oHZxWBnvtvtRXWpTKrUMBkXAqILUscMyx%2BdSrvtRa6VaKKi%2FVXdHHdDiR2zu6SffEHCay1fGrTD%2ByiLlr8m1DbxdyQEOEhARjocNSEpcLCqZnWVQQ4d19r3Jfw2NjiZoPcLGqyBcT7HdnmKJwov3EmYKgO%2FIIMVkxfVDIGRXs8lSpYC6b8IgcScrMtJJae7Mx8Ho5yUx8LdCwJbx1vObfcKWmw6VEdSbf3%2BYzM765yTrjGGJ7%2FcwOfDSpHPiSZwVmXYX9I7Un0WUYtzECnLZU1jngRowEYRs4cI3av4ks7pnL8uRfu%2BYVYdvVjZSN%2F0mxTGW09XZ9tsSEqZGbpoM9NflxdkXV5aADkYMiVr4FvO5rS6H%2BGt40EVsq21Y7qtrbOUIZjBCyL4QDFXb%2F3biBM7f2Jqg7BdS%2B1I8Ic1YEe1rCvCt2jDZnRsSpHmhsD5%2FR0QOKoGLiMO691skGOqUBmqDSfAlhlySC%2FEHm1PYOVW0gJhRC%2FGaPVz7YXNuOXc7AQR6u9xf2AUOcu7AiJX%2B6SOwAbVQlxFJQtxspznhB1Vvs03d6wiogiynWLadFesVX1qUGr7HsEcn5kr3y29IWsVTzX%2FdG7jg9%2FlbnYmm1n44bt6FbROZkgRILc3ejZ5I78ubjkIgabevoBFRLb9289D9bGBN5F1Na2H4iLpLsGi6iY%2FjO&X-Amz-Signature=a904f6d819d076d32cc3f3dc54f4afa8ce732e027d78cda3c188c6ee6063288e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

