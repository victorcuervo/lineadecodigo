---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWGIKID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcGuRhmbAtywAsg1XW1gWmqURByxWSSP%2Fy87AVnQB60wIhAIMDKRelkYwAcoigP6y4Q7ja5vfDgKF%2Fq3fi85JJdDPqKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FD5c27g6mxn6glsQq3AM4QKFSycMJCnGLLJ%2BHMEFlDnyqfm4zY8ASvJ%2F1GmHB77UUCTpp1jwydGfzvWXY6I6YHDrFwjX5mciuQo32T7e6I%2FRF%2B%2Fywftv8urIRHewc71dhKo%2F1RcwIbiVWr3FMOhAO3NCs3Bd25Ae33HYomP%2B45%2BlaIJT9cfICQJBWWy5bPaRlGwS3m1ki7g3IVeGfkALrPJaKyXUc%2FBtsya9oR9ZLoKAtF7%2FFWhGDzXkeTiFdzaWJ%2Br8ha%2Fhg0fx0I4wQN59Zs1Cap1G4hTjBtkO%2BX86L5y1bLrpl7FPkTejMMdKsZIcY%2B7sxkzc0LPfu8Bn67sbM2fJ6%2Faa2pN%2B4VFodaGWYJWkMWYQ7B5HDCHvyb9WTWuasi%2B9ObfeeKaqDPC4qwAX%2BJmYEwyLA%2FlS%2FWLW1%2FJ9UGytrrxxjsTCFk%2Bse9bU7NnPnqupfLCNBkG3wncyIXBGhjHxaL%2F8GdM2vicrz7Ylx2atEjU7FO5VnR%2B2tkjFvxCCVzJQ483XY3f7xXPGrimNjJwnAa0LntFTYkL99V3dl8iwhzHfHVrI%2Fu%2FRzxgo94ufKobvuaQkWtZKKXS8MUGPU1xgLDJV2ItZpBP7ScxyACNKgs53h1dnF%2FtgbmdGhlvoWrDSrJGnYFXlrgzC00djJBjqkATg0KIN03jMUBLXyMBrv%2BN%2FajmD2ahcEtH%2BX2hX1Dgwn%2Bk4IJ7dzrbkAJMnYk9IPaiJDxj9Hd4d0gs%2FQEnezOIHePblL1Nf58Vw6BDnFhjYC1iNKDM41XqDQADPR%2FOAPMCSlOt%2FedGsBXxCR8KYk%2BHiipFP%2BgOtQkLXqlaKJ%2BGGjLiFijCvJv64cplL7C1GsI0ShNJf5ltcBf7ihK1VZ9i47P1nW&X-Amz-Signature=4b389bce22f26cbdde83d1d9e66e00be55a355e89c9b3e1b8414ba7e1e4e7054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWGIKID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcGuRhmbAtywAsg1XW1gWmqURByxWSSP%2Fy87AVnQB60wIhAIMDKRelkYwAcoigP6y4Q7ja5vfDgKF%2Fq3fi85JJdDPqKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FD5c27g6mxn6glsQq3AM4QKFSycMJCnGLLJ%2BHMEFlDnyqfm4zY8ASvJ%2F1GmHB77UUCTpp1jwydGfzvWXY6I6YHDrFwjX5mciuQo32T7e6I%2FRF%2B%2Fywftv8urIRHewc71dhKo%2F1RcwIbiVWr3FMOhAO3NCs3Bd25Ae33HYomP%2B45%2BlaIJT9cfICQJBWWy5bPaRlGwS3m1ki7g3IVeGfkALrPJaKyXUc%2FBtsya9oR9ZLoKAtF7%2FFWhGDzXkeTiFdzaWJ%2Br8ha%2Fhg0fx0I4wQN59Zs1Cap1G4hTjBtkO%2BX86L5y1bLrpl7FPkTejMMdKsZIcY%2B7sxkzc0LPfu8Bn67sbM2fJ6%2Faa2pN%2B4VFodaGWYJWkMWYQ7B5HDCHvyb9WTWuasi%2B9ObfeeKaqDPC4qwAX%2BJmYEwyLA%2FlS%2FWLW1%2FJ9UGytrrxxjsTCFk%2Bse9bU7NnPnqupfLCNBkG3wncyIXBGhjHxaL%2F8GdM2vicrz7Ylx2atEjU7FO5VnR%2B2tkjFvxCCVzJQ483XY3f7xXPGrimNjJwnAa0LntFTYkL99V3dl8iwhzHfHVrI%2Fu%2FRzxgo94ufKobvuaQkWtZKKXS8MUGPU1xgLDJV2ItZpBP7ScxyACNKgs53h1dnF%2FtgbmdGhlvoWrDSrJGnYFXlrgzC00djJBjqkATg0KIN03jMUBLXyMBrv%2BN%2FajmD2ahcEtH%2BX2hX1Dgwn%2Bk4IJ7dzrbkAJMnYk9IPaiJDxj9Hd4d0gs%2FQEnezOIHePblL1Nf58Vw6BDnFhjYC1iNKDM41XqDQADPR%2FOAPMCSlOt%2FedGsBXxCR8KYk%2BHiipFP%2BgOtQkLXqlaKJ%2BGGjLiFijCvJv64cplL7C1GsI0ShNJf5ltcBf7ihK1VZ9i47P1nW&X-Amz-Signature=6c137834afa94973739252ad53652d089ffdc5aa1c275c2e89381f5ebb875606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

