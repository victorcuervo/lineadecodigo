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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPP2VLC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCOgbyH%2BCL9ynLRo4XNYIy8LaUsW5Gk9kXGw4lG%2F3O2gQIhAPfEkDEgjjdI4FC4WTkkcz5JONBUyGTI%2FXffl9aAyNFXKv8DCCIQABoMNjM3NDIzMTgzODA1IgwVPXxQ7FyDaZ91Q8kq3ANYs6xw5w%2Fr5Cc89a6vIqUvnZ11ZoqUTOceuM0UcLQfy0c3a5WXoc1rx2YbwgKZrvHnpFVV53HOayCsq4ItkJkACD9zrUPOKtx4I%2BtkJ0NpisyFh7xT2IAGi9BKmHcJpclydvNgZU5s2%2B1Nqd2p20Ol8MJK1or7qlIMnFW9cN8i896hT4lEwEJYJIBoy0X9HjuvxPc6Rrk6lSAL%2FDzUl7KZPqtEs6o9FVHwwcESY0AjwxsX2u6UKfo7pjwBqnQSNjdCLcKVFZbtvEqvo9rQgIJiT6EOCu4GnJrWoBCFrEALPkXOAoF4oOhg5ZHF18FYWLI6m6ZFgWxJMShpzBPxEZtGFZB05SjpXxpVsG%2FbhgSKR%2BgoVRBehR3qyT4U9FGIRiJ7m%2BVFEYVFRxeCpdb0UO1azKJiArPckJkr27T4dW2ljMEaxKJxe1HWa9UoW%2B7E4kgllVvcgdMKkF18ENi3c0UQ1MfR3GVip%2FKFmv%2BM0WkHE6OFlw%2FXbhYVYx8edSPjsTeYznecTgForrr66T%2Fo%2Bo8DFyeys0%2BxqIRd6fu3jVFw5ZdxZADpQ%2FD0zXcfCuFrCZuhj3J3ygcu1q8j%2BmCPH70%2F%2F6UX1f5%2BH7lin3CBA8oD2EIDpv7qnAh7ccgBnDCjlr7JBjqkAdKsGTaJTontOE%2B7mEJcpidgHZU%2BdVJCGEe64Swj5fo6PHqkmWC4HWAK17WkqB%2F1Xi6sg60LYtuDw3vyNUVBzBCX3Nfm6ndDjso1INLwaLFV0%2BSnC0UxZ0yMjMyV3n%2FSSj4%2F6TByJGFDJ2KRRgAdPCbT6%2FqHbeIUB44qRWMDYk81%2FJxoX4hkNmmC35v%2BYI145kOAzkJyKC2GGzZXwf0dfCOf3Kr3&X-Amz-Signature=a32563af56474eb6aace79a0d2cbbd157b1624b0aca4c231c3800d9930384f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPP2VLC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCOgbyH%2BCL9ynLRo4XNYIy8LaUsW5Gk9kXGw4lG%2F3O2gQIhAPfEkDEgjjdI4FC4WTkkcz5JONBUyGTI%2FXffl9aAyNFXKv8DCCIQABoMNjM3NDIzMTgzODA1IgwVPXxQ7FyDaZ91Q8kq3ANYs6xw5w%2Fr5Cc89a6vIqUvnZ11ZoqUTOceuM0UcLQfy0c3a5WXoc1rx2YbwgKZrvHnpFVV53HOayCsq4ItkJkACD9zrUPOKtx4I%2BtkJ0NpisyFh7xT2IAGi9BKmHcJpclydvNgZU5s2%2B1Nqd2p20Ol8MJK1or7qlIMnFW9cN8i896hT4lEwEJYJIBoy0X9HjuvxPc6Rrk6lSAL%2FDzUl7KZPqtEs6o9FVHwwcESY0AjwxsX2u6UKfo7pjwBqnQSNjdCLcKVFZbtvEqvo9rQgIJiT6EOCu4GnJrWoBCFrEALPkXOAoF4oOhg5ZHF18FYWLI6m6ZFgWxJMShpzBPxEZtGFZB05SjpXxpVsG%2FbhgSKR%2BgoVRBehR3qyT4U9FGIRiJ7m%2BVFEYVFRxeCpdb0UO1azKJiArPckJkr27T4dW2ljMEaxKJxe1HWa9UoW%2B7E4kgllVvcgdMKkF18ENi3c0UQ1MfR3GVip%2FKFmv%2BM0WkHE6OFlw%2FXbhYVYx8edSPjsTeYznecTgForrr66T%2Fo%2Bo8DFyeys0%2BxqIRd6fu3jVFw5ZdxZADpQ%2FD0zXcfCuFrCZuhj3J3ygcu1q8j%2BmCPH70%2F%2F6UX1f5%2BH7lin3CBA8oD2EIDpv7qnAh7ccgBnDCjlr7JBjqkAdKsGTaJTontOE%2B7mEJcpidgHZU%2BdVJCGEe64Swj5fo6PHqkmWC4HWAK17WkqB%2F1Xi6sg60LYtuDw3vyNUVBzBCX3Nfm6ndDjso1INLwaLFV0%2BSnC0UxZ0yMjMyV3n%2FSSj4%2F6TByJGFDJ2KRRgAdPCbT6%2FqHbeIUB44qRWMDYk81%2FJxoX4hkNmmC35v%2BYI145kOAzkJyKC2GGzZXwf0dfCOf3Kr3&X-Amz-Signature=a5b4421a3594ab6b54c1745640832a9767368562d3b24ebbfc739639e2e14d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

