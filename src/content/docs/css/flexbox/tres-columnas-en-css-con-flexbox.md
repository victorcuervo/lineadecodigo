---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSEKO4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjhuvVmAUfOdZ%2FDL%2FHDSS%2FJim%2BxFRPS0e%2FMmoX5WfEgQIhAKDpn7t1%2FNFV77z86aWqgZJOq9jchtWzCaOJyH4Hzt%2BiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0%2BE8pyjDJt3Xucrkq3AO2EYdRdzZ73BDPmbhDKsjZp4oYxBMPuDgIT7aFDaFM86x8%2BtMgPR4ga1BrGdNQHjzebFmIafKTH62KN02L%2B8EUac1Bn8d7Rx4I3G6Krd6Z94C7HxXYL2LHaa0Sj2O7r2G0Z9Um2ZZ4Q34%2Fe4CXcqG5YLr8e8H5rwPj0qkTDvusMNLTyiEA0yhGX%2By1iRvodA6WU06Zztbvflnw2vdQHPll4pH%2Bad8jtF%2BOsNt5vXhQTTil9g4TsAl774XsgE1ZDH2JxWzVQOKwRwYupkny7dOVowvQ89QyKXKo6W8svHXzJPR8bTDLNl1VhQML0On81VDwTVrwlKtuCdARFz%2BsGrZK37FVhJSuEW5LGrqBlCt9N%2BlB7YPCrdzIDtXtnmtRFI3kl00OxHyfAhWVJ3CE4um8LvIzS04lobGEn0IwRXB0DqjiNOn6P5QDQ0hccdali7LgqyXJZm%2BTbGCYtgNCNUf%2FS60wyMDUP5ZS6un01XlXT%2FIgZnJ9AZDUk%2BkWI5XlSMLXoz0OHzB8esEpVIAiUkj6WKIhsghp4ImJdxsytjEsO3uxztxrlDWM9fHdLPuszTSVk0MelTyXSCF42jsiWTjpPKtfdzj1UBQPEQAOBzqyMDonVhLPK4zESLLnxTDMrd7JBjqkATaq27OZVWvk3%2B0%2FB9DMNceoMZJzHvdefq%2BSu9Vw1Z%2FeaRWkI1Y4AdjtECSannFMItRIb6RhPVqus1DP7ucRV%2F6D117biWoWz50uOJTSEpWedNSk%2F59sVnZ2TGMm6VWBz7zRPE4TxNWtUC4cvXPeVteudLnZHs9qlWZynX%2Bw%2B9uY7g3c8%2BlbaJQmR1jrVV0gpbkIKZyA6qLr5ND7gzDA%2BKyJdx6d&X-Amz-Signature=cdbc5d686d9bd8a8ff1e9bce660bccb303c814e142e76085a1fa1777c13b8b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSEKO4S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjhuvVmAUfOdZ%2FDL%2FHDSS%2FJim%2BxFRPS0e%2FMmoX5WfEgQIhAKDpn7t1%2FNFV77z86aWqgZJOq9jchtWzCaOJyH4Hzt%2BiKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0%2BE8pyjDJt3Xucrkq3AO2EYdRdzZ73BDPmbhDKsjZp4oYxBMPuDgIT7aFDaFM86x8%2BtMgPR4ga1BrGdNQHjzebFmIafKTH62KN02L%2B8EUac1Bn8d7Rx4I3G6Krd6Z94C7HxXYL2LHaa0Sj2O7r2G0Z9Um2ZZ4Q34%2Fe4CXcqG5YLr8e8H5rwPj0qkTDvusMNLTyiEA0yhGX%2By1iRvodA6WU06Zztbvflnw2vdQHPll4pH%2Bad8jtF%2BOsNt5vXhQTTil9g4TsAl774XsgE1ZDH2JxWzVQOKwRwYupkny7dOVowvQ89QyKXKo6W8svHXzJPR8bTDLNl1VhQML0On81VDwTVrwlKtuCdARFz%2BsGrZK37FVhJSuEW5LGrqBlCt9N%2BlB7YPCrdzIDtXtnmtRFI3kl00OxHyfAhWVJ3CE4um8LvIzS04lobGEn0IwRXB0DqjiNOn6P5QDQ0hccdali7LgqyXJZm%2BTbGCYtgNCNUf%2FS60wyMDUP5ZS6un01XlXT%2FIgZnJ9AZDUk%2BkWI5XlSMLXoz0OHzB8esEpVIAiUkj6WKIhsghp4ImJdxsytjEsO3uxztxrlDWM9fHdLPuszTSVk0MelTyXSCF42jsiWTjpPKtfdzj1UBQPEQAOBzqyMDonVhLPK4zESLLnxTDMrd7JBjqkATaq27OZVWvk3%2B0%2FB9DMNceoMZJzHvdefq%2BSu9Vw1Z%2FeaRWkI1Y4AdjtECSannFMItRIb6RhPVqus1DP7ucRV%2F6D117biWoWz50uOJTSEpWedNSk%2F59sVnZ2TGMm6VWBz7zRPE4TxNWtUC4cvXPeVteudLnZHs9qlWZynX%2Bw%2B9uY7g3c8%2BlbaJQmR1jrVV0gpbkIKZyA6qLr5ND7gzDA%2BKyJdx6d&X-Amz-Signature=2543701fda34b39899fa559c338d38ee878eb09830b72fc64686ea7fddeecd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

