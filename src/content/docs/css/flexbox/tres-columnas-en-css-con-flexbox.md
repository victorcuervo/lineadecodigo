---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347JEOEV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEF%2Ft6W%2BeiRzQC%2B40815tkYONbq4AwzC0smBaPWZFLCAiEA0nB6hZoaMpGz3Wk2PhGxB5E166wsSq5%2Fgut2n3xWxucqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp%2BiD6MCYjuar2N%2BCrcA%2Bfje391xiXRPFGEm9IAAgt5Y%2FSKVf%2Fyc%2BQAGs%2FDC8j7RshUT%2FixcVkWjLAph51N1Tw8s0bBYnnfeMVKaAS4viNORI4hPx2BO9tY%2BwL7yh9psD2tD6LKvNSu7%2BJvUcJrlrmCR31Sd3ooMasb%2BcGDef9VCQRFqnsWg4FOheOWhzuBfhI8AnXzHbAtzfZ4t1rGbvEIsOIFGaKMsMoBl9KUrvZzeXuq3upeu8k2vQDE%2FK9qTeoCN7B98svX5%2BU%2FlcolR1ywrnAVelyYnX6HtszTZYpqHjwU7XFx5aEHSTu%2BLbOsJDQX7vKNmBiG4WZheOZ7C3SftPu9DIhc0TTvzHQhl0GLXWyWNG97wBTQ4Z6RigOwex2CWEBSNLcXcBKoEFkxkG%2BzZlohT3LLkoSyY1%2F9B5bvwAMmZqDOAGjamznQOqmk4s05Pt7QzTxCsuyix5jMDoc994YlUIGwWnIx2EM8Cvbs%2BDFWBHtvxiyRVhy1k17QCwZrjmp8yRlBkgdsXw%2Fne%2Fbk2bs4%2BEW3ac2fVxUKpbGMkFcnIFDbUe91AriWB7EVrHY7Ki%2FV42vnJzrDN9%2FWeCJR4RWUDS5H%2FPcbZTQLU4EFjikdIQw5n4qo7JkskDtXgacCN4HdkTePrNB2MKL90skGOqUBOlroYzkKkglLMxxjheO0%2BpMPEb85CuWx27IAtm8PnVGEQKpaRBopVEasX8eehGCmS2vxv%2FoLdGhvV7mMoVf9Yl4IROTCZ7YjbbXuzjOVOzfw0VW2aXY1PfI8ABGtC3PfmOmtqDJ%2FtWjSXp2PVoEYocVjsrftskVmN%2BISZ%2BKz%2B0xGQjGH%2FFgv8gPd2ChjaoEd4Jzv9xGeBNQN3WEBrlPFPJhLwiJT&X-Amz-Signature=75c69a37f1e2c95987e1af666b7081c40aa992fd5f1f31376e5d0b785c2eb9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466347JEOEV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEF%2Ft6W%2BeiRzQC%2B40815tkYONbq4AwzC0smBaPWZFLCAiEA0nB6hZoaMpGz3Wk2PhGxB5E166wsSq5%2Fgut2n3xWxucqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp%2BiD6MCYjuar2N%2BCrcA%2Bfje391xiXRPFGEm9IAAgt5Y%2FSKVf%2Fyc%2BQAGs%2FDC8j7RshUT%2FixcVkWjLAph51N1Tw8s0bBYnnfeMVKaAS4viNORI4hPx2BO9tY%2BwL7yh9psD2tD6LKvNSu7%2BJvUcJrlrmCR31Sd3ooMasb%2BcGDef9VCQRFqnsWg4FOheOWhzuBfhI8AnXzHbAtzfZ4t1rGbvEIsOIFGaKMsMoBl9KUrvZzeXuq3upeu8k2vQDE%2FK9qTeoCN7B98svX5%2BU%2FlcolR1ywrnAVelyYnX6HtszTZYpqHjwU7XFx5aEHSTu%2BLbOsJDQX7vKNmBiG4WZheOZ7C3SftPu9DIhc0TTvzHQhl0GLXWyWNG97wBTQ4Z6RigOwex2CWEBSNLcXcBKoEFkxkG%2BzZlohT3LLkoSyY1%2F9B5bvwAMmZqDOAGjamznQOqmk4s05Pt7QzTxCsuyix5jMDoc994YlUIGwWnIx2EM8Cvbs%2BDFWBHtvxiyRVhy1k17QCwZrjmp8yRlBkgdsXw%2Fne%2Fbk2bs4%2BEW3ac2fVxUKpbGMkFcnIFDbUe91AriWB7EVrHY7Ki%2FV42vnJzrDN9%2FWeCJR4RWUDS5H%2FPcbZTQLU4EFjikdIQw5n4qo7JkskDtXgacCN4HdkTePrNB2MKL90skGOqUBOlroYzkKkglLMxxjheO0%2BpMPEb85CuWx27IAtm8PnVGEQKpaRBopVEasX8eehGCmS2vxv%2FoLdGhvV7mMoVf9Yl4IROTCZ7YjbbXuzjOVOzfw0VW2aXY1PfI8ABGtC3PfmOmtqDJ%2FtWjSXp2PVoEYocVjsrftskVmN%2BISZ%2BKz%2B0xGQjGH%2FFgv8gPd2ChjaoEd4Jzv9xGeBNQN3WEBrlPFPJhLwiJT&X-Amz-Signature=89251fbe5032cade529edd9c687b6dd84024fd3995936f6c1d365f072f94a796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

