---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKT5CVFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICOfmlFBAAFiGNqv9YMZJovM3mPt%2BjXPwS0L87rLPUcmAiBRn9yDzRAPnwlKBshVG4xqpW1%2FI03bU%2BiTT2dzPghbpCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMtd%2B7hV1loIT4sqwQKtwDP6ZJSdaDWMP2RyvrUJNBlzUd5IH5JV1c5jH5LrwLH4lUy2RrB8%2BnHJZXBN%2BreUHkgfEi7KJ%2B4WKvYgCr6DPpUaJynl2SyWRSkIyAxuIJYvXE8%2F%2B9%2BfN2vtM%2FoEwucauy63This19swQNFAnBL%2BdXG6wa6Fk7HoQQpSgIs6vxjxaweNO%2BHVCipNAikTgBbkSfLyFOX8s4uXsNRLpqGofGD9ynha5Hh7vHXgJ85n1sBkU%2FVbMBrgrLynSBOx3iUoDVtRw%2ByD9ujKqf%2FWRcC6T7jNrLUUCdxufc8%2FytDutPswX1sgqV9YF%2BW7JMQJtMPlm%2FVBXXucpdYF382ohDDfLCpSdDs4FrSRH%2BecJAUIYTRFfuvko9a%2FShx4kRhR2T83pkekDyiEjhAEo5XkAiCf%2FoColl2dZlrLZDHk1rfHjhD4RihErV2gljbbD3Lz7%2Fp0o3LY1EBc%2BMOkH%2BhyESUJZci5eMn4%2BjNWK15buoO7cS9EfLSynGcIeV0V5MiFksIHqznyQ0aBaajOE%2F2dim1pAo5zbDQE7IOSsfai8Y7%2FBpiat%2BZXS4k1eT0D4Eb8XTdrEiTfItHwFkQvc776leUkjsYTaW1d%2BT5HHFZxhP%2FFwUuAcEuWNwZTl%2BoUPbeoQwyJPAyQY6pgGV2b%2Bm%2B%2F5kujlRqvnx2oyqpeblI9ddV%2F5mpaJD2EG0bWCADGRzqVX%2BgC3QM1D2IrukzKrTy7Orvims566XIXG%2BuP4VxZ%2F9QmQyvQRvx4uT%2BiqrekuiUvOBDDotWOcpB7NVfFVy5PYTXia5ZxwMM81YuamyeJyd4ny2%2F0dLNzfB3sH0zGangKn5WI%2Fn60SuXRJ9CXEhQn20TUS0hM32MqTXHY8%2BDNBL&X-Amz-Signature=10015276b7db8818271c75ab162fc29f79cfbb2290f1b3c485942a78b1ac3673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKT5CVFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICOfmlFBAAFiGNqv9YMZJovM3mPt%2BjXPwS0L87rLPUcmAiBRn9yDzRAPnwlKBshVG4xqpW1%2FI03bU%2BiTT2dzPghbpCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMtd%2B7hV1loIT4sqwQKtwDP6ZJSdaDWMP2RyvrUJNBlzUd5IH5JV1c5jH5LrwLH4lUy2RrB8%2BnHJZXBN%2BreUHkgfEi7KJ%2B4WKvYgCr6DPpUaJynl2SyWRSkIyAxuIJYvXE8%2F%2B9%2BfN2vtM%2FoEwucauy63This19swQNFAnBL%2BdXG6wa6Fk7HoQQpSgIs6vxjxaweNO%2BHVCipNAikTgBbkSfLyFOX8s4uXsNRLpqGofGD9ynha5Hh7vHXgJ85n1sBkU%2FVbMBrgrLynSBOx3iUoDVtRw%2ByD9ujKqf%2FWRcC6T7jNrLUUCdxufc8%2FytDutPswX1sgqV9YF%2BW7JMQJtMPlm%2FVBXXucpdYF382ohDDfLCpSdDs4FrSRH%2BecJAUIYTRFfuvko9a%2FShx4kRhR2T83pkekDyiEjhAEo5XkAiCf%2FoColl2dZlrLZDHk1rfHjhD4RihErV2gljbbD3Lz7%2Fp0o3LY1EBc%2BMOkH%2BhyESUJZci5eMn4%2BjNWK15buoO7cS9EfLSynGcIeV0V5MiFksIHqznyQ0aBaajOE%2F2dim1pAo5zbDQE7IOSsfai8Y7%2FBpiat%2BZXS4k1eT0D4Eb8XTdrEiTfItHwFkQvc776leUkjsYTaW1d%2BT5HHFZxhP%2FFwUuAcEuWNwZTl%2BoUPbeoQwyJPAyQY6pgGV2b%2Bm%2B%2F5kujlRqvnx2oyqpeblI9ddV%2F5mpaJD2EG0bWCADGRzqVX%2BgC3QM1D2IrukzKrTy7Orvims566XIXG%2BuP4VxZ%2F9QmQyvQRvx4uT%2BiqrekuiUvOBDDotWOcpB7NVfFVy5PYTXia5ZxwMM81YuamyeJyd4ny2%2F0dLNzfB3sH0zGangKn5WI%2Fn60SuXRJ9CXEhQn20TUS0hM32MqTXHY8%2BDNBL&X-Amz-Signature=b75813f795b4ddfdcd5f577283c951869252dd68dff7a52b60f3bf521023df54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

