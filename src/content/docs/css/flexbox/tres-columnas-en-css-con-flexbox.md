---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IBQDS5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiMExsDaPNxWm3qUyMcMoejBiYikJzN1cqSlS1jeuNtwIhAO3mpb2lYHcI0BT6BaEe6eSYDI5vUpKOOqkXawTl%2BeWJKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7L3HOFHFYFxBkC0Uq3AOi1IMUEP4XWNAUcac3GKxpbW18HwXyL82%2FEgF%2Bg9Vj%2BiAuXD1GIW2Yum4PfOqqKPVKxhpjtfeoZNwczrC8MJp0o2beygCH6Zvnza6mXMkrgZmXq500QWGwMGHReDnJCkMKFtEWNkpgnbtY15M21YlrEAaebUcEaTLt5rqraxp29vco2LzJbMqbfPJItMEVcNf1%2B8F1sfhsXn%2FvwVP1Rr7uz6fX1Awd6uPvc%2Bhjrp8jdr9nKGLsBol6KD5xUP7MWFSPD2JJ%2BK2qzUSBB5NtikIg5yGvee4eJrtmL1S%2BUsC0AmCw6QYoSQc%2Br%2FKAP3OuFaGMyQV6lZMNhMhjhNfv%2BIOEzbu%2BBOSc7noKwn2pZ8Pur6hxfVrTl6VnDPAmGLv0OLYE1geCBtdMFvGG%2Bk2ReuBQdWWIPeIED4oFjV7mRGtyc31bsDqS1vX%2Fl7Is8Gc%2B7XUmzk92Dc%2F2hwkC%2FnJoaXjO2g%2Bz5hh3BK5UqHoa0DHMpmVspFb0Kl2kqnL4n7SJ35ZV5LrUchHplSVUJzuHa4dFbGf9KN%2BU5R%2F4oOHCvRjLNzD1usQPMyEDvjMhSUPnAOKc1%2BmN7%2BithEjkDaANWDT2l2HRRaLg%2FHlav0f8Yo38%2FpgQ%2BH00p0oKe9pqnTDzx9fJBjqkAabmQuXFaqzxd8Sph61LaI45VzOifQvlF2j68%2FAz7nuPF7%2F7kE8GNWAnWLhLAEk2ukHmONKx%2B6r%2FzIeB%2BQEWzTHEBOEcQvgkrhXxwUZC6NKFR08kcHjmtqUzfUQi8M2UgUUJC0MIK5LeDev74x9SQDapPEezgKre%2Bzio0K%2BvWI1mHYOPJPOtOneIUc8VTrKxLaXWHMveEbpJurvchjJ%2BFYp3%2Fdn8&X-Amz-Signature=890652aa1052deb578350c9fb967d8c093adc3336b453d100bfd29dd2120819d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3IBQDS5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiMExsDaPNxWm3qUyMcMoejBiYikJzN1cqSlS1jeuNtwIhAO3mpb2lYHcI0BT6BaEe6eSYDI5vUpKOOqkXawTl%2BeWJKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7L3HOFHFYFxBkC0Uq3AOi1IMUEP4XWNAUcac3GKxpbW18HwXyL82%2FEgF%2Bg9Vj%2BiAuXD1GIW2Yum4PfOqqKPVKxhpjtfeoZNwczrC8MJp0o2beygCH6Zvnza6mXMkrgZmXq500QWGwMGHReDnJCkMKFtEWNkpgnbtY15M21YlrEAaebUcEaTLt5rqraxp29vco2LzJbMqbfPJItMEVcNf1%2B8F1sfhsXn%2FvwVP1Rr7uz6fX1Awd6uPvc%2Bhjrp8jdr9nKGLsBol6KD5xUP7MWFSPD2JJ%2BK2qzUSBB5NtikIg5yGvee4eJrtmL1S%2BUsC0AmCw6QYoSQc%2Br%2FKAP3OuFaGMyQV6lZMNhMhjhNfv%2BIOEzbu%2BBOSc7noKwn2pZ8Pur6hxfVrTl6VnDPAmGLv0OLYE1geCBtdMFvGG%2Bk2ReuBQdWWIPeIED4oFjV7mRGtyc31bsDqS1vX%2Fl7Is8Gc%2B7XUmzk92Dc%2F2hwkC%2FnJoaXjO2g%2Bz5hh3BK5UqHoa0DHMpmVspFb0Kl2kqnL4n7SJ35ZV5LrUchHplSVUJzuHa4dFbGf9KN%2BU5R%2F4oOHCvRjLNzD1usQPMyEDvjMhSUPnAOKc1%2BmN7%2BithEjkDaANWDT2l2HRRaLg%2FHlav0f8Yo38%2FpgQ%2BH00p0oKe9pqnTDzx9fJBjqkAabmQuXFaqzxd8Sph61LaI45VzOifQvlF2j68%2FAz7nuPF7%2F7kE8GNWAnWLhLAEk2ukHmONKx%2B6r%2FzIeB%2BQEWzTHEBOEcQvgkrhXxwUZC6NKFR08kcHjmtqUzfUQi8M2UgUUJC0MIK5LeDev74x9SQDapPEezgKre%2Bzio0K%2BvWI1mHYOPJPOtOneIUc8VTrKxLaXWHMveEbpJurvchjJ%2BFYp3%2Fdn8&X-Amz-Signature=a2b00d2848d361a5b329d792ae39ef6ca4d91d6e9bfdb4eb1ed2e6dbdacf9a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

