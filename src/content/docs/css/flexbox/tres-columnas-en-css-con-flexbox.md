---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQC6ZN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMi%2Fum8TkC3E4G6RHR2ZT4Gv789GiAeZwXksPMLN%2BcRAiBx%2BEfCrEfH2nO7ZXpm8vNSaE%2B7vvvBOMWsdeBJiCRKViqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUNE7nUrY0H1ysR3KtwD2Wce%2FC6tQgib7GMvADqXmWxAuBdptcMewNBxpj8mRBDvyfLZCORFV6ueRM95WpAwW1QaEZsOZjMtrkgyjdUAMapDEkvS6nG4bUSNrx%2BQOZI019GriOl%2FfcnxuvOn2okPReVYR%2FnyVbXBt2Yb%2FTLOCwu%2FemkdRxjjAtbxUrJ%2BaX%2BDEfLsrVNinJjCm7jfA0lQhtom%2FjH%2FuPaj%2FnvHUpMYjRKnLUexrO82vIK3iY90zxg1p8X0WhHsq37FBLkNjOKymvIBUE2euT4MImmlBXma4HqTe37FRCN1WrhvVyurgywEAQecRts382KyJVOBJPLk5mUPrKlQZV1QCUK4EqTgPawaobDkrAJxfQ6TGM6N5Zpee8Z%2ByuxlCGbWUp%2FGg7rLJrENWGRedbKc%2FU%2BMIWzwjlelt3T6AkvBUKZ3ZltB2uS%2FGc%2BxiOQv2htLJwbiZcFqpgHMHb5iI%2FzJqABGA%2BZynsBhmJ2%2F7yMp%2FdI%2ByRQiil7%2Flk4tR7FA08xUJdpruP02iBMRU6e4NznvqME9TBab4HBmagp2Y2lMuLM4%2BkjaqkNvwc6pB%2B9SiCDxYkktLDlVYb7VjKINgRXX1qoM0e1Uwkbdtc7PpaovOl2Z3dW4NKRogVj2qMsOjfexytkwzpnVyQY6pgHmN1%2FS0GqYuGFlc3mJWnn7Nc2r%2FnFkkI0ArovW2fDNv%2By8fmI2rTImMoPsrWg5Bh97T3aseSNxnPejYjd4lkqa1FRDjqTCDFi2h2dD0hRwSaoVtGmtBniUgSOL3Ynp4FDGbvPfrWrQOVl2ICvho48yECoFd%2FfqrvGyiuP3gQrH7aQNYrotWp%2B5FEvZFWdj3Xah8dRQsFMuftRITh9VSbEiAqZ4W%2BIh&X-Amz-Signature=e9915bf5582388860b3885f74e97dc18ad12621f35b59067096eb0905b8a6251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQC6ZN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMi%2Fum8TkC3E4G6RHR2ZT4Gv789GiAeZwXksPMLN%2BcRAiBx%2BEfCrEfH2nO7ZXpm8vNSaE%2B7vvvBOMWsdeBJiCRKViqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUNE7nUrY0H1ysR3KtwD2Wce%2FC6tQgib7GMvADqXmWxAuBdptcMewNBxpj8mRBDvyfLZCORFV6ueRM95WpAwW1QaEZsOZjMtrkgyjdUAMapDEkvS6nG4bUSNrx%2BQOZI019GriOl%2FfcnxuvOn2okPReVYR%2FnyVbXBt2Yb%2FTLOCwu%2FemkdRxjjAtbxUrJ%2BaX%2BDEfLsrVNinJjCm7jfA0lQhtom%2FjH%2FuPaj%2FnvHUpMYjRKnLUexrO82vIK3iY90zxg1p8X0WhHsq37FBLkNjOKymvIBUE2euT4MImmlBXma4HqTe37FRCN1WrhvVyurgywEAQecRts382KyJVOBJPLk5mUPrKlQZV1QCUK4EqTgPawaobDkrAJxfQ6TGM6N5Zpee8Z%2ByuxlCGbWUp%2FGg7rLJrENWGRedbKc%2FU%2BMIWzwjlelt3T6AkvBUKZ3ZltB2uS%2FGc%2BxiOQv2htLJwbiZcFqpgHMHb5iI%2FzJqABGA%2BZynsBhmJ2%2F7yMp%2FdI%2ByRQiil7%2Flk4tR7FA08xUJdpruP02iBMRU6e4NznvqME9TBab4HBmagp2Y2lMuLM4%2BkjaqkNvwc6pB%2B9SiCDxYkktLDlVYb7VjKINgRXX1qoM0e1Uwkbdtc7PpaovOl2Z3dW4NKRogVj2qMsOjfexytkwzpnVyQY6pgHmN1%2FS0GqYuGFlc3mJWnn7Nc2r%2FnFkkI0ArovW2fDNv%2By8fmI2rTImMoPsrWg5Bh97T3aseSNxnPejYjd4lkqa1FRDjqTCDFi2h2dD0hRwSaoVtGmtBniUgSOL3Ynp4FDGbvPfrWrQOVl2ICvho48yECoFd%2FfqrvGyiuP3gQrH7aQNYrotWp%2B5FEvZFWdj3Xah8dRQsFMuftRITh9VSbEiAqZ4W%2BIh&X-Amz-Signature=a7d6de845d61cd1028626699f5e092173e9de9894e92bbf7a1f66f2d8454dda6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

