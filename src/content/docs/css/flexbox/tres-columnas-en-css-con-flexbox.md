---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5CTMNI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7g19aFS%2B0LZEi7RYcKQzRXM1RgBXNFNQoEIQ%2BfCssogIgNUgDCDaDov42IedQwEKBH2lJQxbNDGzigKbed2uSVhIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgVu%2F1vekBjD0DyEyrcA8ZtMVuTL2Lg%2B4wfHF353WcVrPsJI36JVdIVeMeRCaoh%2FQPOLPh1LEODJWKeouH4UuMIlKO91SvibeK8WllNwL6bS5EBCmDu1FSlfihjvqshM0uR0eVr1ho8xzYtH3qqQYhOv820VmAtsztBCV7Z8oe5UIuk%2FdT7tSkOmF3C57NcI3VfSt1hYfmu%2Bmqwze19oj1DW%2Fh2iBDe3rbXMWOIElrYu2HXVRSvnnIk6rA43QQPqsQSmeMJQWvvBZjxw%2F8nHm3lz7xlGOVhCIg7y%2FeAsPS7CO5f8r%2Bq8IhVFgOBQNklH8YNHpl9gEV9OWmPXQRdSAgCeVrCsotFlOerfyBH6mCURna6x9t40%2BooekWv01lrHw21BC%2Bx9yCDh42PsYFerE7ivYLiHRcx0yTzgHi7Kj%2FJH%2FRdRVD3wXwEa9Fnwqwfvk3%2BN0vg5Oqr%2BBU1ntVXCLww7bfrPryV62gycFmMQtWz14SQts2whTq9EVwl40aG5hzHsugzvLG4FXaCurJU2wGm%2BWQtGeSl74gHTMojK9jUVDv29%2BQagGO6CcbP%2FJuR6yAHVWE%2B%2FZ1LS12mWNDnbYuBiC719Nx9jKt26GFIPEOhk9b6sURwLl%2BK3g8uoMkwsZr%2BgcOCWetivuqSMJ%2Ft2ckGOqUBvB9YmsdsRViXGY59o3GNe%2BqolKfOG561dOA%2B0GRMRtGQwmbaxoLLPLf%2Bk9Rc5Wb0TRK23XNpWQXwNMDp82LWIM69%2B0jWrJeSe3VFrIjf1EXihkw7MNaWHkWYUbldrhYRkIzC2DkgKj%2BNoQhhm0S3TkeLBYf44cQG46iG3%2BgxcADXBdJCKozTqCkpo0%2BxouUCXBZiosRTubhR3p1%2BuoJKIxokfN8k&X-Amz-Signature=c083a82795fbecc4f244dd2e3a6e54a141b2920eadea546862b80433707faad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5CTMNI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7g19aFS%2B0LZEi7RYcKQzRXM1RgBXNFNQoEIQ%2BfCssogIgNUgDCDaDov42IedQwEKBH2lJQxbNDGzigKbed2uSVhIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgVu%2F1vekBjD0DyEyrcA8ZtMVuTL2Lg%2B4wfHF353WcVrPsJI36JVdIVeMeRCaoh%2FQPOLPh1LEODJWKeouH4UuMIlKO91SvibeK8WllNwL6bS5EBCmDu1FSlfihjvqshM0uR0eVr1ho8xzYtH3qqQYhOv820VmAtsztBCV7Z8oe5UIuk%2FdT7tSkOmF3C57NcI3VfSt1hYfmu%2Bmqwze19oj1DW%2Fh2iBDe3rbXMWOIElrYu2HXVRSvnnIk6rA43QQPqsQSmeMJQWvvBZjxw%2F8nHm3lz7xlGOVhCIg7y%2FeAsPS7CO5f8r%2Bq8IhVFgOBQNklH8YNHpl9gEV9OWmPXQRdSAgCeVrCsotFlOerfyBH6mCURna6x9t40%2BooekWv01lrHw21BC%2Bx9yCDh42PsYFerE7ivYLiHRcx0yTzgHi7Kj%2FJH%2FRdRVD3wXwEa9Fnwqwfvk3%2BN0vg5Oqr%2BBU1ntVXCLww7bfrPryV62gycFmMQtWz14SQts2whTq9EVwl40aG5hzHsugzvLG4FXaCurJU2wGm%2BWQtGeSl74gHTMojK9jUVDv29%2BQagGO6CcbP%2FJuR6yAHVWE%2B%2FZ1LS12mWNDnbYuBiC719Nx9jKt26GFIPEOhk9b6sURwLl%2BK3g8uoMkwsZr%2BgcOCWetivuqSMJ%2Ft2ckGOqUBvB9YmsdsRViXGY59o3GNe%2BqolKfOG561dOA%2B0GRMRtGQwmbaxoLLPLf%2Bk9Rc5Wb0TRK23XNpWQXwNMDp82LWIM69%2B0jWrJeSe3VFrIjf1EXihkw7MNaWHkWYUbldrhYRkIzC2DkgKj%2BNoQhhm0S3TkeLBYf44cQG46iG3%2BgxcADXBdJCKozTqCkpo0%2BxouUCXBZiosRTubhR3p1%2BuoJKIxokfN8k&X-Amz-Signature=10c02f66558fc2ac767851efe36791b7e79a989c1f43d61c6b9302106d6f4fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

