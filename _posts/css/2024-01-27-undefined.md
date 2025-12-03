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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5DZVS7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCaTuIdPnkEZfNKD41qSlbvB3QgZG%2BKU28KQWTGZcXajAIhANrSDL%2FOSsX04jzjnhsLTzFVhNIlmS40ZM515sn4i45OKv8DCC8QABoMNjM3NDIzMTgzODA1IgwFKqLjGN4UZHFsDscq3AOtfIzcJRlQZHDeuug8vn3lojf8yvCXcrcycVhALSPqVD%2B%2BHCCMp7mQdQUuhTgsa8QM8ipQ0rJKkW8LcaFi0HFSxXsLTvQi2ZIk8ujBJwSK53EtylgQcOsciJWOC8ysGEBhgMwzzMPekyiCry4FirwBQVcJxRpvHIb%2FU9eD8WTjBbTCh8tiVp%2FwvZLqreLQ9gL4P86wrjP0ci4ULEWk7bbUMUlUlQLfAhJ2JPwMbHkmD3SQposcRxDx2JfH6yikLeN1PzavJbfCM2MZQP6h887eHG%2BzGUsUf0uSZHg53ToiaXklyBM7fLrmrLXOlIQ21Usy0xVj%2Fb1xAsOln%2BnmNdnR08bvtGtuzVKl91ZBhAKGmfN%2F2kuKlTcKX8XRGIaMsEZcJ25fhc5370xqiAClfyIqqH5xF8NudOmcqpWJ%2B1EmzoVgtZF34CAR5DRXnwmJ%2FBVmCVwdICHvMvh69W8XAjS2K%2FL9uFFDaalIzD2ZHuoisBl19%2F2MN0T464hUM61reLarrbZJxks8WQmgdMVFlNnYpiQg%2BLgP%2FzJl2O2xxy%2BknzFMfG7UcMlrgexv5Rx%2BN1FGCLtJUANaMyZukSNxZnVXUKNbKaozkNenPBYnt3YM3n%2B36LtMBn4gkVZANTClicHJBjqkAYt90KauhhqK4FbTomWRZT8NvD3xC8gyr5yEWAS%2BFWJWFFriwz9Ub1mMK6JoIgldlEFI4CVqZVvMMervbplW7%2FQCIiyj2ipsCsKhzg8Ak5j64WX7E1fyaoV7X%2FMIEDrFyKf3N2mCaSscT5aUSZF7%2FfcPUhxHnNLxQD%2FRsIOTm%2B5lrOkU254%2BnVATYVsrcBYi1%2BwWhSrpnrgNP%2B3R3FnRSrYVQw7F&X-Amz-Signature=7eab572d91707c5c96eca64a93c4038b16e50fdc677334d798f70727c08b1cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG5DZVS7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCaTuIdPnkEZfNKD41qSlbvB3QgZG%2BKU28KQWTGZcXajAIhANrSDL%2FOSsX04jzjnhsLTzFVhNIlmS40ZM515sn4i45OKv8DCC8QABoMNjM3NDIzMTgzODA1IgwFKqLjGN4UZHFsDscq3AOtfIzcJRlQZHDeuug8vn3lojf8yvCXcrcycVhALSPqVD%2B%2BHCCMp7mQdQUuhTgsa8QM8ipQ0rJKkW8LcaFi0HFSxXsLTvQi2ZIk8ujBJwSK53EtylgQcOsciJWOC8ysGEBhgMwzzMPekyiCry4FirwBQVcJxRpvHIb%2FU9eD8WTjBbTCh8tiVp%2FwvZLqreLQ9gL4P86wrjP0ci4ULEWk7bbUMUlUlQLfAhJ2JPwMbHkmD3SQposcRxDx2JfH6yikLeN1PzavJbfCM2MZQP6h887eHG%2BzGUsUf0uSZHg53ToiaXklyBM7fLrmrLXOlIQ21Usy0xVj%2Fb1xAsOln%2BnmNdnR08bvtGtuzVKl91ZBhAKGmfN%2F2kuKlTcKX8XRGIaMsEZcJ25fhc5370xqiAClfyIqqH5xF8NudOmcqpWJ%2B1EmzoVgtZF34CAR5DRXnwmJ%2FBVmCVwdICHvMvh69W8XAjS2K%2FL9uFFDaalIzD2ZHuoisBl19%2F2MN0T464hUM61reLarrbZJxks8WQmgdMVFlNnYpiQg%2BLgP%2FzJl2O2xxy%2BknzFMfG7UcMlrgexv5Rx%2BN1FGCLtJUANaMyZukSNxZnVXUKNbKaozkNenPBYnt3YM3n%2B36LtMBn4gkVZANTClicHJBjqkAYt90KauhhqK4FbTomWRZT8NvD3xC8gyr5yEWAS%2BFWJWFFriwz9Ub1mMK6JoIgldlEFI4CVqZVvMMervbplW7%2FQCIiyj2ipsCsKhzg8Ak5j64WX7E1fyaoV7X%2FMIEDrFyKf3N2mCaSscT5aUSZF7%2FfcPUhxHnNLxQD%2FRsIOTm%2B5lrOkU254%2BnVATYVsrcBYi1%2BwWhSrpnrgNP%2B3R3FnRSrYVQw7F&X-Amz-Signature=ba58c1805fdc0ec65f8423fbf40004cf094d8557d0ba5e56b71f5d0de7011b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

