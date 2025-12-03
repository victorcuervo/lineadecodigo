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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEFCY7L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCGeK%2BW5isjkBJLj7Snpv5eIYp7tRJzdMDLha2ePgDK7AIhAMtcD1%2BWYqfGj9D7cFWu7aInOy44ugi7b8DVWy5xiT%2BFKv8DCCcQABoMNjM3NDIzMTgzODA1Igxs4T%2BTu%2FRa%2FiLoxsAq3ANelFnER%2ByWxxzv%2F6cAS2pC%2B1G71aHrj4pTpQTHKqG4rm9IBOd9grRytfzjhyEvzUiYXlLuxY4rCwjLttaAhK61ZzqNBebDRQyhG8LjBUkqpjmIPNPmD2bDn8D792oPk7wCKzqrrD4theQSU%2BvhtBk0sjJ5HFDv7PrWTEfs1tj5dR9rqB%2B8qjygIRb6I%2FDOS1WGB8nELFSvnaij5hCH45f3SKYYgPKen1ekqK7QVlUMO7KRx%2FOb0he5ko1AYUzNvl1r103IXoZRSVufS6nUAGoCp4U5F0zyfXMiI2bZ0lPANKpIwIz7My%2BIqxxBbnEcVdn4Z7sqBUSCmD%2F29iY3t1fg8SBhd6QxPfjHIcN%2FHujNpE1GeRGF%2FPRtozG9q%2Fh1XBnYgZY%2BTIfUh8ZPsgK4%2FLh3NEvzXZRogZSVoAMkwpt%2F0VL3bHdeF1uR7YNurgWY9c0J4e6yKMzLduckfiJfnEK7jGYid7F90RvExtpsh92JLnbQSq5xfVzeAnMPMQWJdt5iJrFHs%2BCQ3Aqvh4ZhU3bkp02Iq9TsPlD4pz2MYvv0%2Fvm4usM%2BIn1D9WXxcXv2KlMwz%2F2vGh3sRwJGCRSIshmMKrqctEp3A8AWu6sgL42E98uV99m5fcJxL2kNSzCSmr%2FJBjqkAb6slQX%2F7KOuKK2sa42pS2mbsiMensSwj6ZTOJKZbyvAtva9OgnKgLH2ljRFmeikPS6ffYA9j4qWgIfXm1PZLO2%2FMlJPF37FHlwZylyrkgyKlpIjxzCDCrq8gQaq5ja798R6NUVtsr7%2FKIEmvhaxbt31Rx%2BgoNLt2PjMMMNMVq7Z6iKLjf8KvcP2fLm4OLvXa%2BoY8EpfCz%2FsXZVMTynZVloyBkFR&X-Amz-Signature=1f218797f1a6cb35afc5cdf90097fccde8cf4b5b259426d392371c593ffe83a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQEFCY7L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCGeK%2BW5isjkBJLj7Snpv5eIYp7tRJzdMDLha2ePgDK7AIhAMtcD1%2BWYqfGj9D7cFWu7aInOy44ugi7b8DVWy5xiT%2BFKv8DCCcQABoMNjM3NDIzMTgzODA1Igxs4T%2BTu%2FRa%2FiLoxsAq3ANelFnER%2ByWxxzv%2F6cAS2pC%2B1G71aHrj4pTpQTHKqG4rm9IBOd9grRytfzjhyEvzUiYXlLuxY4rCwjLttaAhK61ZzqNBebDRQyhG8LjBUkqpjmIPNPmD2bDn8D792oPk7wCKzqrrD4theQSU%2BvhtBk0sjJ5HFDv7PrWTEfs1tj5dR9rqB%2B8qjygIRb6I%2FDOS1WGB8nELFSvnaij5hCH45f3SKYYgPKen1ekqK7QVlUMO7KRx%2FOb0he5ko1AYUzNvl1r103IXoZRSVufS6nUAGoCp4U5F0zyfXMiI2bZ0lPANKpIwIz7My%2BIqxxBbnEcVdn4Z7sqBUSCmD%2F29iY3t1fg8SBhd6QxPfjHIcN%2FHujNpE1GeRGF%2FPRtozG9q%2Fh1XBnYgZY%2BTIfUh8ZPsgK4%2FLh3NEvzXZRogZSVoAMkwpt%2F0VL3bHdeF1uR7YNurgWY9c0J4e6yKMzLduckfiJfnEK7jGYid7F90RvExtpsh92JLnbQSq5xfVzeAnMPMQWJdt5iJrFHs%2BCQ3Aqvh4ZhU3bkp02Iq9TsPlD4pz2MYvv0%2Fvm4usM%2BIn1D9WXxcXv2KlMwz%2F2vGh3sRwJGCRSIshmMKrqctEp3A8AWu6sgL42E98uV99m5fcJxL2kNSzCSmr%2FJBjqkAb6slQX%2F7KOuKK2sa42pS2mbsiMensSwj6ZTOJKZbyvAtva9OgnKgLH2ljRFmeikPS6ffYA9j4qWgIfXm1PZLO2%2FMlJPF37FHlwZylyrkgyKlpIjxzCDCrq8gQaq5ja798R6NUVtsr7%2FKIEmvhaxbt31Rx%2BgoNLt2PjMMMNMVq7Z6iKLjf8KvcP2fLm4OLvXa%2BoY8EpfCz%2FsXZVMTynZVloyBkFR&X-Amz-Signature=483501eb7db821288885b274aac175c47f6b5366922857159786c2f66dd0701d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

