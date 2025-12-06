---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRXH2LD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaLbHwiZKyatwj7uT3PVtTxpVb%2Bgt49lT6r3498I69tAiAyS%2FmLylEF3gAJVbSvq4%2B3%2BVRSp0tgK2ocVUlQzQDNZSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4ybHBQIoaa%2FYAkbKKtwDxCdxAoUislMBNbzsS8DQHpNwGYHIzraErbrVlP1ObSdQYZOySJd7rB8oqvn3YD2NP%2BjbekPbvWVWsSXp64u6LXUxOpXO6tJjNtEJSVmeIzBm%2BxN00RL6gQ2Bq4VRqnBhsX%2BcNYojR6sP0jkyDW%2F7O7DgUaDeEP0zihC1Wde2rvqn4xpWijwS%2FYNSRd4Of6g%2FA%2BzexUAn%2BTEH0hAW18stK5u0ZgjoR9fUTeBhi2Rze8EJPENkFu4ss9SNbuQGBEyf3bEY8TRLDmHSZIz2IaXOO8T3P8W2w99ska61TdiG51tEN%2FYsABZghHAnrmlaK1mBKz3YKoMziahnLJ5VEAJnJJG9Iq0xT%2B3Ch2featE1CrIiQDzqoJwRP3xztDdI9ZbQ%2Fmm0lfcceJoSYPgqEtpo9ldqWTb0NZKIRMQD%2FkIkRL3OuEyv7cYAJ%2BZtGXsutP%2Bn7NNkAnAcf%2FfVLRMKBfTKSLv0wQ9ItowS%2FoE%2BkMv6IATS4npreuCxGilzm25suleqft7T%2Bb%2FeRn2HBgC38cjUfwa4n%2BZpuNbWeVK9JkWgOx1s6j%2BvmTQGv%2Bt5UIeY071ZkrRNWLP4DaiBFrAouGkmuKCUOxJ0VCclodn3qMTzyQzpIOCNQXm1L0rkNyUwyrzPyQY6pgGvNhFSEW5iWWC8EXQ3KowrnSAqpgk0huRxJ%2BpT%2FvFPUzgsycb03Ne%2FC1Twj8JGxONovvZ0VHQ1BLoiZjZABk7PobJKBSkk0lggGyw7LOq8cuU8PiHp3%2By%2BXs5%2FPc6rV%2F56bCToedcn0ESAD2X2%2Bz4BXAuXI%2BgQBORb8utSp7RXRtMkaek0UWzUSqbbW7KBLJJIqRrFacmpHcu6NUa0%2BCGqQknhKfXY&X-Amz-Signature=c5ce08f4d5de9ca4d3286ea30edabf8ab1ade14d5a261d0f3c2e8769a492c66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRXH2LD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaLbHwiZKyatwj7uT3PVtTxpVb%2Bgt49lT6r3498I69tAiAyS%2FmLylEF3gAJVbSvq4%2B3%2BVRSp0tgK2ocVUlQzQDNZSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4ybHBQIoaa%2FYAkbKKtwDxCdxAoUislMBNbzsS8DQHpNwGYHIzraErbrVlP1ObSdQYZOySJd7rB8oqvn3YD2NP%2BjbekPbvWVWsSXp64u6LXUxOpXO6tJjNtEJSVmeIzBm%2BxN00RL6gQ2Bq4VRqnBhsX%2BcNYojR6sP0jkyDW%2F7O7DgUaDeEP0zihC1Wde2rvqn4xpWijwS%2FYNSRd4Of6g%2FA%2BzexUAn%2BTEH0hAW18stK5u0ZgjoR9fUTeBhi2Rze8EJPENkFu4ss9SNbuQGBEyf3bEY8TRLDmHSZIz2IaXOO8T3P8W2w99ska61TdiG51tEN%2FYsABZghHAnrmlaK1mBKz3YKoMziahnLJ5VEAJnJJG9Iq0xT%2B3Ch2featE1CrIiQDzqoJwRP3xztDdI9ZbQ%2Fmm0lfcceJoSYPgqEtpo9ldqWTb0NZKIRMQD%2FkIkRL3OuEyv7cYAJ%2BZtGXsutP%2Bn7NNkAnAcf%2FfVLRMKBfTKSLv0wQ9ItowS%2FoE%2BkMv6IATS4npreuCxGilzm25suleqft7T%2Bb%2FeRn2HBgC38cjUfwa4n%2BZpuNbWeVK9JkWgOx1s6j%2BvmTQGv%2Bt5UIeY071ZkrRNWLP4DaiBFrAouGkmuKCUOxJ0VCclodn3qMTzyQzpIOCNQXm1L0rkNyUwyrzPyQY6pgGvNhFSEW5iWWC8EXQ3KowrnSAqpgk0huRxJ%2BpT%2FvFPUzgsycb03Ne%2FC1Twj8JGxONovvZ0VHQ1BLoiZjZABk7PobJKBSkk0lggGyw7LOq8cuU8PiHp3%2By%2BXs5%2FPc6rV%2F56bCToedcn0ESAD2X2%2Bz4BXAuXI%2BgQBORb8utSp7RXRtMkaek0UWzUSqbbW7KBLJJIqRrFacmpHcu6NUa0%2BCGqQknhKfXY&X-Amz-Signature=5605eb5d62b31359bce0e3e04308486edc87d7f43f8abca9c1a21c59a414ac09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

