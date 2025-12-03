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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3GCE2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD%2FdwO5T5X66277yg5Jlp%2FuPCV3A2iWuFkXII%2F20NEaCgIgd%2Brdk4aMtdL8v2B7FDBBbfZkQRuXZ1MD2YP8FOPZcdIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAct5FM0DCpzp8CWcCrcA38KrmRSK1I7OhyTmwqEyKbBIZydt5S%2B2MJY4aQ5vC4iohg3X7ub%2BAC5Y874XvqyJU57zRh9O%2Fntr8oR2vhhaQRyuQ8R%2B%2BwVwc5WcUCnSbFF52QeJguCGvwicVfwuB1sx%2BoPIxnnJFj%2F1kxdjsXUPH1Bi3FUgjFRzcfFCg6YH6ugXLszCSKVSMPEUwt%2FO9BHTn87flYvbZrJ%2FABq%2FyOEqN2xBTGzyY9UNozEunfjPSRRcdYR6IWx6G4UyLjbWPT2EW3FYPKFN8SbnJKQFn0A%2Fm1MOJ8npFDt1JtwEBvw5qoxXdBsDt8oYN1sPhZJT0xy8PmKSSMAWHQGHTqMi4zPoWqALqlPrH5Fh8kamILCgApPjEaXkK0q%2BlOJM%2BM5tkiAxEhK7pSrT%2B%2B%2F8sJFmQnwT14lHiW%2BoF9lOCXhb2vllw8wuhRp1eIcNgxVqzRQvC%2FuFXJB2AAvOALHeaLvymgqk8lu262DhLC8gf%2Fboxy3V5QPbrIxJgNSitT8TcMT2oE7z43XiQUbTRMrlUGU5lNB9KP6IJjFhEnSHVJ9HCv0qd7M%2BG1GZaU9dHjutIyl45YdpUh7mbXJWQDXb3jCcbLkwvN2gOxFK2LIGNiMxVDN%2FIKertPEMuuyOVhSM8B5MPSZv8kGOqUBHHk7cIhUgEEnhdfE83XjDTvZQfNRvKhsU%2Bl8uik2MKFylqk52SQTWhVJ4AqXyLJdcwaunYYmcRziKj57wHTS2ftBH7u%2BNAlosstklpPEJ7spGS018CyOAmn0i3r1MQqr5Q0pGtQypw%2FTSxYW0sHR%2FETnM8JE4bh7LUPCC%2F6rbWSF%2B%2FZy%2BLK7X8PAb7W%2Fq4msNsMQX5KJnz0HTEO3ukK5G43iPXEV&X-Amz-Signature=2b7ad75973f1e5b52aed7e4d906d30ecdeb5cb67baaa841204be9ccb89d4bfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3GCE2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD%2FdwO5T5X66277yg5Jlp%2FuPCV3A2iWuFkXII%2F20NEaCgIgd%2Brdk4aMtdL8v2B7FDBBbfZkQRuXZ1MD2YP8FOPZcdIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAct5FM0DCpzp8CWcCrcA38KrmRSK1I7OhyTmwqEyKbBIZydt5S%2B2MJY4aQ5vC4iohg3X7ub%2BAC5Y874XvqyJU57zRh9O%2Fntr8oR2vhhaQRyuQ8R%2B%2BwVwc5WcUCnSbFF52QeJguCGvwicVfwuB1sx%2BoPIxnnJFj%2F1kxdjsXUPH1Bi3FUgjFRzcfFCg6YH6ugXLszCSKVSMPEUwt%2FO9BHTn87flYvbZrJ%2FABq%2FyOEqN2xBTGzyY9UNozEunfjPSRRcdYR6IWx6G4UyLjbWPT2EW3FYPKFN8SbnJKQFn0A%2Fm1MOJ8npFDt1JtwEBvw5qoxXdBsDt8oYN1sPhZJT0xy8PmKSSMAWHQGHTqMi4zPoWqALqlPrH5Fh8kamILCgApPjEaXkK0q%2BlOJM%2BM5tkiAxEhK7pSrT%2B%2B%2F8sJFmQnwT14lHiW%2BoF9lOCXhb2vllw8wuhRp1eIcNgxVqzRQvC%2FuFXJB2AAvOALHeaLvymgqk8lu262DhLC8gf%2Fboxy3V5QPbrIxJgNSitT8TcMT2oE7z43XiQUbTRMrlUGU5lNB9KP6IJjFhEnSHVJ9HCv0qd7M%2BG1GZaU9dHjutIyl45YdpUh7mbXJWQDXb3jCcbLkwvN2gOxFK2LIGNiMxVDN%2FIKertPEMuuyOVhSM8B5MPSZv8kGOqUBHHk7cIhUgEEnhdfE83XjDTvZQfNRvKhsU%2Bl8uik2MKFylqk52SQTWhVJ4AqXyLJdcwaunYYmcRziKj57wHTS2ftBH7u%2BNAlosstklpPEJ7spGS018CyOAmn0i3r1MQqr5Q0pGtQypw%2FTSxYW0sHR%2FETnM8JE4bh7LUPCC%2F6rbWSF%2B%2FZy%2BLK7X8PAb7W%2Fq4msNsMQX5KJnz0HTEO3ukK5G43iPXEV&X-Amz-Signature=58d155424c943d1a18f60c3528298a4c7993eedc8886d4a1f4342e8753459f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

