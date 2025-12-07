---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA25CLZG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq6Qfh5k7Jo%2FnRWjja5V1WlA8yT7KTy3vrJNyp%2FMtLlAiEA2vcUG56MN0hSKbYrolE8JNL%2Fg%2BXQV%2BtN9ghAwZ3LjxMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvoani8Ra7NU0w49SrcA21ZFKsQMJ9Ub41bD9Xi3pVcfO0EYn%2Bgd8SarddGmw1%2Fn9vm5yM%2FfaSwBzTCTLJxImOPya%2BbBewPmzZx7kIZndX9VraxnnOKiCYVUmvzEg30hTCpnsJFQK6rrjC%2BJ42u0RCCHpTu5ivfS%2FYve1Rq3dx8UHWRV6nzgucSmvcpZjniulgoG42L6ns3uYnbTWV5xkWJtGdFeRonmaE2l1RmZ3%2FNY%2BmLDkQiBf8FiPVgzz6JCH6PMD7fHFrchN%2BWOqcimCJHv0b7ALyqxwgO5%2BxJeSe31f%2BEbXURacvIBDva1nRQiD%2By2avIL8KoNUgw3Uw4HSLWFvmLEz3LPhaW8SZwpXSCb6DyTOiv6a2GCHh57%2F1B%2BLUTWvyH2lTSR4ks9T%2FHb9jB4PzZaucohxXvTDqfPlvO2EwQHPrYJE5sHkNaLwHZfAIiL%2FEYTpZ7Qa6eRQ4KEH%2FMXT6deOF1qvxnfiu2qvpVHH1cLkg9MSy4NDsLafK%2Fdv9en3JTiSfl%2FFxGW5bA2qtk9ohCN4ASLNURmHNA9S%2FDHRnUPFqiMPuJWgH%2BO5f64jcL2Yt0RtI%2FMw7hVTL2Z%2FTs53GsChVfSQ%2BvcNickgrYG13uQS1EyTWB%2Fuyobmrahx9HvXFbNEIW3JL9MK%2F%2B0skGOqUBYMp9iHobk6NbAdoUvLLlrVHEAtdH2zq%2Fi%2FMIgkO6YfealM8hVKukRJjKKUmJMZk7LA8VOljqS2W8DB%2FLhtOQFhi4w92rlYPxOba1X9h2uwoNumi%2FasSJM0BDgRY1yo8%2FNFb5Ju8KBTA65XKJcqf5KE9U6W32abxMuWx292oX0q4hLrzDroIHCmDNtggRP%2Be7WWMzCry7H0weOt68hE41LUARJFTh&X-Amz-Signature=c621b53c225f571bff3344521edd3b02c6640c54004eb6a7fda6d4c330070a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA25CLZG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq6Qfh5k7Jo%2FnRWjja5V1WlA8yT7KTy3vrJNyp%2FMtLlAiEA2vcUG56MN0hSKbYrolE8JNL%2Fg%2BXQV%2BtN9ghAwZ3LjxMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvoani8Ra7NU0w49SrcA21ZFKsQMJ9Ub41bD9Xi3pVcfO0EYn%2Bgd8SarddGmw1%2Fn9vm5yM%2FfaSwBzTCTLJxImOPya%2BbBewPmzZx7kIZndX9VraxnnOKiCYVUmvzEg30hTCpnsJFQK6rrjC%2BJ42u0RCCHpTu5ivfS%2FYve1Rq3dx8UHWRV6nzgucSmvcpZjniulgoG42L6ns3uYnbTWV5xkWJtGdFeRonmaE2l1RmZ3%2FNY%2BmLDkQiBf8FiPVgzz6JCH6PMD7fHFrchN%2BWOqcimCJHv0b7ALyqxwgO5%2BxJeSe31f%2BEbXURacvIBDva1nRQiD%2By2avIL8KoNUgw3Uw4HSLWFvmLEz3LPhaW8SZwpXSCb6DyTOiv6a2GCHh57%2F1B%2BLUTWvyH2lTSR4ks9T%2FHb9jB4PzZaucohxXvTDqfPlvO2EwQHPrYJE5sHkNaLwHZfAIiL%2FEYTpZ7Qa6eRQ4KEH%2FMXT6deOF1qvxnfiu2qvpVHH1cLkg9MSy4NDsLafK%2Fdv9en3JTiSfl%2FFxGW5bA2qtk9ohCN4ASLNURmHNA9S%2FDHRnUPFqiMPuJWgH%2BO5f64jcL2Yt0RtI%2FMw7hVTL2Z%2FTs53GsChVfSQ%2BvcNickgrYG13uQS1EyTWB%2Fuyobmrahx9HvXFbNEIW3JL9MK%2F%2B0skGOqUBYMp9iHobk6NbAdoUvLLlrVHEAtdH2zq%2Fi%2FMIgkO6YfealM8hVKukRJjKKUmJMZk7LA8VOljqS2W8DB%2FLhtOQFhi4w92rlYPxOba1X9h2uwoNumi%2FasSJM0BDgRY1yo8%2FNFb5Ju8KBTA65XKJcqf5KE9U6W32abxMuWx292oX0q4hLrzDroIHCmDNtggRP%2Be7WWMzCry7H0weOt68hE41LUARJFTh&X-Amz-Signature=24936a37d98a14ff6b38b09b6e4cae513d3442d4ac30db373fcaf3fe8abd61c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

