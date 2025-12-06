---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3FUHVV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFN9uCxHrgjwRXDc07oOeRaXe14jncPk0Dh%2BJZBSE31gIhAO0%2F%2FxJpBaWdTs5k4CKVFi59YWLpwlc53bI08KZl%2BhBPKv8DCHUQABoMNjM3NDIzMTgzODA1Igxx1cEVxEhQRvY8tooq3AO839OAhjOsWpqRimiaMHNI0NeocgfSiq6d0sOzo0XFXhl2hlbO0PRi8Elcb3XcEjfggsEoH%2FH4w2CX1XB5t1OL9g1tiv6LPdNlJw22uGkcGMz%2Bc4mjrQd7IajFMiNf98wAi%2BlOgEW%2BUb6Kz0oYb8G4RRzBW2Ho7hjLt%2FKU5hN3NXq77JfSvGEV8wwFXMC23e57rpbF8f8bVHFn55TA6b6WPlLsvK2L6BWDm4pxKDktrHz5NPs8uT9XthlTzoa9PWrxTJWiImuHAvzZskh%2FGCf%2FELj2C32DC5Yz4ltzzJJNRNiOSCgFim1JH6dYiwAHXmeWYKhkYNkIuvj3VE3uPSuYqovKLH4HMtKCvfLP1uQ0E%2B%2Bg%2Ff4FzgKLDUUBj8WKUKOdyuluQW1rcnJ6oR3E%2BJmarA6BhyGjAkVrE7Eb345DAyKFp04RGzffuO%2Bk8Z7wW9SHRb36rka%2F2Ep4ym7lFbJoBZLHT5V0Muh66HQRD7U5GzWgrcMZ0u3IMlX0PBneagZQzb3T%2BuAU9urj8dY4ZbjDdU7XrEYf%2BT%2FRwoBGGv2l%2B2kOnjxXXz7Q9mgfeHrmW1lgXLlaaT5PK%2B4dAhG97855gMrN08EqOqyHf8pVBj42LSTGtUSIvns%2BRYYSKTD%2FptDJBjqkAVySzdMdUvWNI2DmXCbA%2B3seMy36WGvoCo62JU1XkhEtaSecilonBYXGauJMhoRQEa3Qazf5UtSfkG5IGQzDN9hdiEwRxVF77hoP1Wnj2s0Grrm0238SPh561TPW2kodONd%2Bldr2ZNUeiDpq8Y0LeSep%2FcL2wtPVdkhOsoT6FvlLnjpSNMQWT0w6G3ITvavVsAyTGB9Acx3wMzVVaIZ%2BJDRvEJ2R&X-Amz-Signature=72797b1bf2688b6dd42c2e36bd4d5e42b7d987024a18f5802e6849a0d77d83f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3FUHVV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFN9uCxHrgjwRXDc07oOeRaXe14jncPk0Dh%2BJZBSE31gIhAO0%2F%2FxJpBaWdTs5k4CKVFi59YWLpwlc53bI08KZl%2BhBPKv8DCHUQABoMNjM3NDIzMTgzODA1Igxx1cEVxEhQRvY8tooq3AO839OAhjOsWpqRimiaMHNI0NeocgfSiq6d0sOzo0XFXhl2hlbO0PRi8Elcb3XcEjfggsEoH%2FH4w2CX1XB5t1OL9g1tiv6LPdNlJw22uGkcGMz%2Bc4mjrQd7IajFMiNf98wAi%2BlOgEW%2BUb6Kz0oYb8G4RRzBW2Ho7hjLt%2FKU5hN3NXq77JfSvGEV8wwFXMC23e57rpbF8f8bVHFn55TA6b6WPlLsvK2L6BWDm4pxKDktrHz5NPs8uT9XthlTzoa9PWrxTJWiImuHAvzZskh%2FGCf%2FELj2C32DC5Yz4ltzzJJNRNiOSCgFim1JH6dYiwAHXmeWYKhkYNkIuvj3VE3uPSuYqovKLH4HMtKCvfLP1uQ0E%2B%2Bg%2Ff4FzgKLDUUBj8WKUKOdyuluQW1rcnJ6oR3E%2BJmarA6BhyGjAkVrE7Eb345DAyKFp04RGzffuO%2Bk8Z7wW9SHRb36rka%2F2Ep4ym7lFbJoBZLHT5V0Muh66HQRD7U5GzWgrcMZ0u3IMlX0PBneagZQzb3T%2BuAU9urj8dY4ZbjDdU7XrEYf%2BT%2FRwoBGGv2l%2B2kOnjxXXz7Q9mgfeHrmW1lgXLlaaT5PK%2B4dAhG97855gMrN08EqOqyHf8pVBj42LSTGtUSIvns%2BRYYSKTD%2FptDJBjqkAVySzdMdUvWNI2DmXCbA%2B3seMy36WGvoCo62JU1XkhEtaSecilonBYXGauJMhoRQEa3Qazf5UtSfkG5IGQzDN9hdiEwRxVF77hoP1Wnj2s0Grrm0238SPh561TPW2kodONd%2Bldr2ZNUeiDpq8Y0LeSep%2FcL2wtPVdkhOsoT6FvlLnjpSNMQWT0w6G3ITvavVsAyTGB9Acx3wMzVVaIZ%2BJDRvEJ2R&X-Amz-Signature=f8c218e9e4647ff5f1b9a0ceef905c64ee200b93fd7d59061dba5b0f24e8da5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

