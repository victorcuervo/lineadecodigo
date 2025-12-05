---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOQIJFW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALzu1%2FS92QaZ50zLDCYUZ00GHkB%2FsGd%2BjywLBCiviMoAiBK%2FIQXN8kF0PDXGsoWG90VQod1I4S0ptVWpQXoP9QfFir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMN0EsGrTREwm2TdAJKtwDLyBFSYuxoA%2BO50Pz2EZKiIIRdiCTarusAJoYmYgVh5%2Bmyy0Upv6rwslZoEXBCM%2BCCjJGAd6uFEMJQFB7R%2BhWiEzI3vzSGhFL6XKzb8DuKAqOAHXk4j7Wr%2BMPq75dC20cWS%2FHxtx26IKI0SlgWYD%2FVBQattlgFwhqTuU5GQdv3IfKDfI4mbGKK27z4ZzNwNFma7lxfbDFHo9Rf6s9wkNiVKoanX8eKAuhhLtxLQG82Zsl09c7YqxqdOhLnfS%2F7gRsuJnbl9UkVDcQ%2Fq62f5ePR6a39c6GBg%2ByejaZsi9YTkMtoKf5tH4AnhL6IkRSd8s%2BY6wRJMg4nlZjYU%2F6Hbf3hCH3KH2az4RZ%2Bba95xLnxRGWK%2Bm2pNcTI1cmpfFRfL79%2FOinaOEVyUNMW9aWIUqvV%2BB1kyJQR8iPLOrHi08g%2FQs19rtjAMUo75yy3CAhNQuEZYEhC1q44wGoIyGRQI2k5Ia%2BujZVjltUbXKc9nViJLNkXAABE%2BJGRqE%2BEzvb%2BVceGRQUTRBRyT3DjIpRQZlRk%2Fda%2FPi19uXsHOliG22TQZHDCrpJwj8TQZ5RSYLl6H8OkZ5VzCjaJ60MHWLMs8UjaHtHIekY%2Fvs8YdqVlKTcx1bNQBBRrMrtKUDVjw0wzsvKyQY6pgFMjtijO6Li6ZIUQ2emxTxvbNlooLtt3rZFTWhoahZBC8ZuDuXXQE7TuizNhde4e%2F49waqMgg0Fmhfh2Wnh2YthbNnosr8vGbLLC8zG6kbNwgjlK4U4MPSzNbYu7cudsckYKFwji5ZIhAvlqyd7n9gzovnLxipgsPg0Rcx1gM0Ag2zkbwrqG%2BgMDWoSHLkdqe4kZX9FrD6IflkKxaybgANYN8SCJfDB&X-Amz-Signature=166d02f7c9b1c23b525b1dbe784d1f27edea8eab25f98feaf473105a7849837e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOQIJFW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALzu1%2FS92QaZ50zLDCYUZ00GHkB%2FsGd%2BjywLBCiviMoAiBK%2FIQXN8kF0PDXGsoWG90VQod1I4S0ptVWpQXoP9QfFir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMN0EsGrTREwm2TdAJKtwDLyBFSYuxoA%2BO50Pz2EZKiIIRdiCTarusAJoYmYgVh5%2Bmyy0Upv6rwslZoEXBCM%2BCCjJGAd6uFEMJQFB7R%2BhWiEzI3vzSGhFL6XKzb8DuKAqOAHXk4j7Wr%2BMPq75dC20cWS%2FHxtx26IKI0SlgWYD%2FVBQattlgFwhqTuU5GQdv3IfKDfI4mbGKK27z4ZzNwNFma7lxfbDFHo9Rf6s9wkNiVKoanX8eKAuhhLtxLQG82Zsl09c7YqxqdOhLnfS%2F7gRsuJnbl9UkVDcQ%2Fq62f5ePR6a39c6GBg%2ByejaZsi9YTkMtoKf5tH4AnhL6IkRSd8s%2BY6wRJMg4nlZjYU%2F6Hbf3hCH3KH2az4RZ%2Bba95xLnxRGWK%2Bm2pNcTI1cmpfFRfL79%2FOinaOEVyUNMW9aWIUqvV%2BB1kyJQR8iPLOrHi08g%2FQs19rtjAMUo75yy3CAhNQuEZYEhC1q44wGoIyGRQI2k5Ia%2BujZVjltUbXKc9nViJLNkXAABE%2BJGRqE%2BEzvb%2BVceGRQUTRBRyT3DjIpRQZlRk%2Fda%2FPi19uXsHOliG22TQZHDCrpJwj8TQZ5RSYLl6H8OkZ5VzCjaJ60MHWLMs8UjaHtHIekY%2Fvs8YdqVlKTcx1bNQBBRrMrtKUDVjw0wzsvKyQY6pgFMjtijO6Li6ZIUQ2emxTxvbNlooLtt3rZFTWhoahZBC8ZuDuXXQE7TuizNhde4e%2F49waqMgg0Fmhfh2Wnh2YthbNnosr8vGbLLC8zG6kbNwgjlK4U4MPSzNbYu7cudsckYKFwji5ZIhAvlqyd7n9gzovnLxipgsPg0Rcx1gM0Ag2zkbwrqG%2BgMDWoSHLkdqe4kZX9FrD6IflkKxaybgANYN8SCJfDB&X-Amz-Signature=7abdbf031117db4b0a9ca6deeb000238fd2b3385cf9de3257530843f8c60d492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

