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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KMOA3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDRRVzDSQ6muylZPBBASRdyU6jFJUI%2FOJJ2RvDsA0XrTQIgPEJSUrBYnELQGF8mlKjDxXqrALdyWRBfxK4latvSto4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMBcbNlPXbCnp43llyrcA65yV6vHvEzQyoKF4yCVPcTiSE%2Frp6oJNhh7cIXr5%2FoFjLY20EKtoYSWumkJ587Wr2sGtBvI5yVTL6zk1FEzv93UJHXPJuJok%2B82PyDQhxMoZvryJK45ukkkFEPVVig3sAn53SM8ob5h9mKnsYg1RU7Z4JOEzfoMf1HDlTUmpfbUWXujU6aV%2FtVkwm%2BM2Mo3P7CKQpzIk%2FtWVyWXpKR977VUdzcPT%2F7pspSlu%2BDfdYOM0LEmgW%2BKLRS%2F8jAXsiOpMAtdbw50EnZtxiekVytnSom9D8ttj%2BGNGrWwDT2FlU%2FyvsAfqY%2Bq%2BC7UMlsFsDMqGNUJthTzAu3G4f1iITyRcFQmY8gZP%2FNPPtC57hRMlcXM5BHVB8NUFrYUchFJMwPQ50HP4X1%2FWrREnYDXToiIJvmb2ig8idkzfwvzvZfPPGK7p6iOyuNiaOnjb%2BiDkjE5cl1%2B%2Bls8Ra7Hc9Fpx4Fgi0Mo1%2FhXtuHd2kqmzFhnQutZwyRWXTIXowGqoNrfoED4c22OE2SHpaxRxSOTJRb3Bg6%2Fi8ry8L3MiQST1mnx0BjAdLkUuYDjmiiqN4%2Bl2eqz4xX3SSlLaEWAIYMpBtRmgeBH4yx2Mt9fUNJzBE2vcLxgMOOcb9FSgpBYxH2uMImvwMkGOqUBjQP%2FXw099QjTkkS%2BBrf7yC065%2FdZJS2vWGshx2qmTfq6Objp7Di81Lp2KYDwd%2F3cgkVX0dEfA%2FMTs5dNekoNJ74ZnzvEm3X9c2u4S45sUCc0Qu8GxjyZrpOWiIOkjvsW6ldUbfCrgFVQa9XlU6FAO1j%2FhS2husaTPQxMjh0awBJTMh5xCKfWw9bSaLWoUT0a%2Fqw1MQJ6BKoFbijlps72BBceF0kW&X-Amz-Signature=b0fabbfebdcb61d6ed9409afed8b5c856907627aca4ee74274c689eefd6f9b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2KMOA3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDRRVzDSQ6muylZPBBASRdyU6jFJUI%2FOJJ2RvDsA0XrTQIgPEJSUrBYnELQGF8mlKjDxXqrALdyWRBfxK4latvSto4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMBcbNlPXbCnp43llyrcA65yV6vHvEzQyoKF4yCVPcTiSE%2Frp6oJNhh7cIXr5%2FoFjLY20EKtoYSWumkJ587Wr2sGtBvI5yVTL6zk1FEzv93UJHXPJuJok%2B82PyDQhxMoZvryJK45ukkkFEPVVig3sAn53SM8ob5h9mKnsYg1RU7Z4JOEzfoMf1HDlTUmpfbUWXujU6aV%2FtVkwm%2BM2Mo3P7CKQpzIk%2FtWVyWXpKR977VUdzcPT%2F7pspSlu%2BDfdYOM0LEmgW%2BKLRS%2F8jAXsiOpMAtdbw50EnZtxiekVytnSom9D8ttj%2BGNGrWwDT2FlU%2FyvsAfqY%2Bq%2BC7UMlsFsDMqGNUJthTzAu3G4f1iITyRcFQmY8gZP%2FNPPtC57hRMlcXM5BHVB8NUFrYUchFJMwPQ50HP4X1%2FWrREnYDXToiIJvmb2ig8idkzfwvzvZfPPGK7p6iOyuNiaOnjb%2BiDkjE5cl1%2B%2Bls8Ra7Hc9Fpx4Fgi0Mo1%2FhXtuHd2kqmzFhnQutZwyRWXTIXowGqoNrfoED4c22OE2SHpaxRxSOTJRb3Bg6%2Fi8ry8L3MiQST1mnx0BjAdLkUuYDjmiiqN4%2Bl2eqz4xX3SSlLaEWAIYMpBtRmgeBH4yx2Mt9fUNJzBE2vcLxgMOOcb9FSgpBYxH2uMImvwMkGOqUBjQP%2FXw099QjTkkS%2BBrf7yC065%2FdZJS2vWGshx2qmTfq6Objp7Di81Lp2KYDwd%2F3cgkVX0dEfA%2FMTs5dNekoNJ74ZnzvEm3X9c2u4S45sUCc0Qu8GxjyZrpOWiIOkjvsW6ldUbfCrgFVQa9XlU6FAO1j%2FhS2husaTPQxMjh0awBJTMh5xCKfWw9bSaLWoUT0a%2Fqw1MQJ6BKoFbijlps72BBceF0kW&X-Amz-Signature=d8a0cd564bf1c70bc1ccc9d6826563ef2eeeb74f365aa755a1551ac084940799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

