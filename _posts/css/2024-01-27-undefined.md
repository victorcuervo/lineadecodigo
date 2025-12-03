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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIN6XCG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFXidl%2F98nihbg0Nle1iZZJHe9UcPj%2BfCxDxmlqprPgFAiBif4zoCpf9SN60aSFqzzeFa1LImxJIs8EU5nQQOBWtSCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPIplOBF6mz2pAqSkKtwDp2hwCqkjTGtgw6jcnTooMPCSVqWPwRwx6ifvsr%2B6%2FZGPgdsLfoRJfDszjTDonOM05XS66IM5fx1df36UENSclHJ2ggO%2Fksz%2FawsRS00szfy4GdXHu%2FqjNg4rS4QcHbQJ9Ph0CMfh1Z9K1BwjcCKAvA%2FmJuYqlbpvmvE9Re8yDU4%2FRBzHSgWTodFHEyAdLU4zJQXpgbU4AAFFdFLq9jmb9pda4Omt1T3Ke%2B9Ta9YbK%2B8zwl62%2FKaScSHCs527rbqfWZRIIYJLPwvv1d8Eaa17bC%2BQognc8%2Fw%2BkRelMILHOtCqTS%2FD9xxLdaxLP2oIBFBFu%2B48irK7uwySqmC%2B%2FqU2Z0catskzMLh9HCDHHmPBa8rK2ETssUWkCd8uwx55QDv7YwentVYTovZ21z%2F3jXh0Jxt5IF5Hn2BtQLOY6WXu%2FSUnnXEZBi%2FtqixZ3%2FeZgMmvvDz5%2FGvE8JP6WiDwXncBf7jhFwJ8zbKWMo96Z%2FRxIfLUKv7VhV6bep3FJ3bYFDEI6Ldu0JZgmqrYS41WOIF5bgS3sRPA5CQ2z7H5kmt4nMDXaHNyfVabKUDmdpSe55m%2FZ9tBWQ%2Fwl%2FCwRb28guU7oHhdzkaw9%2BP5Kwl6s0Fz7T2P0itUHs8MmZk3O9Iw%2BdW%2FyQY6pgG9BuMAOL9gX5r7wDnYu%2B2iljHWxSXDYm0LypMCtKo7oQGUUPTRndoWp%2FNv8cBPJwX1%2FswWu9eH%2BPQF7d6SxfJKgAAZRTWPV%2FzjW%2BCB01di4VGnHwxgCq7F2IVD4Tx%2Bw%2B%2F5hiSMue%2F4WzruK16J6iqEPhEsFpwq4mLN15UED2yjzAY%2B3GsBH74%2B%2FjnmJU7EJVmAOj5T7UabV%2Fni1aZrr1vPzei8%2B5N5&X-Amz-Signature=d55dc37163aca7926b7b7f87ce10daea951d29abd1129fc143d1847af84fd7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTIN6XCG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFXidl%2F98nihbg0Nle1iZZJHe9UcPj%2BfCxDxmlqprPgFAiBif4zoCpf9SN60aSFqzzeFa1LImxJIs8EU5nQQOBWtSCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMPIplOBF6mz2pAqSkKtwDp2hwCqkjTGtgw6jcnTooMPCSVqWPwRwx6ifvsr%2B6%2FZGPgdsLfoRJfDszjTDonOM05XS66IM5fx1df36UENSclHJ2ggO%2Fksz%2FawsRS00szfy4GdXHu%2FqjNg4rS4QcHbQJ9Ph0CMfh1Z9K1BwjcCKAvA%2FmJuYqlbpvmvE9Re8yDU4%2FRBzHSgWTodFHEyAdLU4zJQXpgbU4AAFFdFLq9jmb9pda4Omt1T3Ke%2B9Ta9YbK%2B8zwl62%2FKaScSHCs527rbqfWZRIIYJLPwvv1d8Eaa17bC%2BQognc8%2Fw%2BkRelMILHOtCqTS%2FD9xxLdaxLP2oIBFBFu%2B48irK7uwySqmC%2B%2FqU2Z0catskzMLh9HCDHHmPBa8rK2ETssUWkCd8uwx55QDv7YwentVYTovZ21z%2F3jXh0Jxt5IF5Hn2BtQLOY6WXu%2FSUnnXEZBi%2FtqixZ3%2FeZgMmvvDz5%2FGvE8JP6WiDwXncBf7jhFwJ8zbKWMo96Z%2FRxIfLUKv7VhV6bep3FJ3bYFDEI6Ldu0JZgmqrYS41WOIF5bgS3sRPA5CQ2z7H5kmt4nMDXaHNyfVabKUDmdpSe55m%2FZ9tBWQ%2Fwl%2FCwRb28guU7oHhdzkaw9%2BP5Kwl6s0Fz7T2P0itUHs8MmZk3O9Iw%2BdW%2FyQY6pgG9BuMAOL9gX5r7wDnYu%2B2iljHWxSXDYm0LypMCtKo7oQGUUPTRndoWp%2FNv8cBPJwX1%2FswWu9eH%2BPQF7d6SxfJKgAAZRTWPV%2FzjW%2BCB01di4VGnHwxgCq7F2IVD4Tx%2Bw%2B%2F5hiSMue%2F4WzruK16J6iqEPhEsFpwq4mLN15UED2yjzAY%2B3GsBH74%2B%2FjnmJU7EJVmAOj5T7UabV%2Fni1aZrr1vPzei8%2B5N5&X-Amz-Signature=8065973f8f14a7968bae4d51efb4c1cc5adceae9f0e3e2c0a747497631ec0565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

