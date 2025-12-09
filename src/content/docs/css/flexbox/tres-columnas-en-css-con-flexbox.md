---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GK4UUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfGjshCvy2%2FVCObxIlKEd1FyZ3zoorBdHWeS0Km4j3wIgaZgMMv5Di56FXK4NweKNw%2B6vrUdskVhAth%2BPPfertpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw5XYSQLCXrumov%2ByrcAzaaVRPlH2ukGaDErvDD9Jwop9adYq3qzcS5JCy6Mys1J46kQNEttOyFKk6CvNe9MzlKRXT4BrF7RnjJ2Euvm4WO3YTzxXpHLYvPlSKlBLXXIMgp7RW4jvR%2BhppbLp9ZrFcacv272UE%2BnQqMe82eVTdrh8MEc17HZHJTLDdxtL6U32E%2F0M5VLOha8T6ldVDUQ1MCyuU7qfexcDZ9gMXYQ3cAHjYXHLMl2OkA%2FlSLhQdZJEWCs4%2BOszzlgj0LQh0miIbkz5l1d2n40hrhM5Z6ALE2qzNou49Em2hRe01aBBp570lbE2%2FcbvW0q0AxharDG7AAPNxW10ZCIbzVKbxwOaJXNZSayKU8xRAOoAOGaUp%2BGiWx4NVwGLOSqL%2FHb7ZLhCL%2BtQWINekxKKMnrLhy3Acr6KelMbMSPZeJ0H0cj%2BrWiY2EWXFHb5jUZUoJnp%2F5S0KVQE%2BqoGi4rmCngo9W6KAT3ev1s2F5Kc56RiGeNnMldYisrfUjJ8PU8XUG%2FfovCkopNGkUDGWtJ2zlcGbIOtgncCyMQ5WLCHc4RB%2BlZrqym9FvokBn8a9lYgf7q6npu0W7Ynu01TdYKAYr6BdYwHZ54lhGA%2F1NDB74aN%2F5dQ90%2FxX9mw58HMrQGK5FMPrp3ckGOqUB2omZcCyaUXNVjdp5%2FD1Dsz%2F3iS%2BDDdRCJQE54MnfBa7SzpZyHCrytDYTnh9s0WqKA%2BISV1S9RnwwpdcldvGJhgq25KeI8kuzoIvECkCBPpor%2F8PIivJkXxgwZNIPxRw0idU6p525Fwu8bs09DZL2ywHVFkfwo%2FBnSOx7qteSm4UejGDK5zUPzCdor0O4HS6eDepNSIAloNWWHtNGoHkMk7%2Bh35uM&X-Amz-Signature=07fa6104a152cea7976a632966e088a24f2dc049879050077502723fadf8e0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627GK4UUO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfGjshCvy2%2FVCObxIlKEd1FyZ3zoorBdHWeS0Km4j3wIgaZgMMv5Di56FXK4NweKNw%2B6vrUdskVhAth%2BPPfertpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKw5XYSQLCXrumov%2ByrcAzaaVRPlH2ukGaDErvDD9Jwop9adYq3qzcS5JCy6Mys1J46kQNEttOyFKk6CvNe9MzlKRXT4BrF7RnjJ2Euvm4WO3YTzxXpHLYvPlSKlBLXXIMgp7RW4jvR%2BhppbLp9ZrFcacv272UE%2BnQqMe82eVTdrh8MEc17HZHJTLDdxtL6U32E%2F0M5VLOha8T6ldVDUQ1MCyuU7qfexcDZ9gMXYQ3cAHjYXHLMl2OkA%2FlSLhQdZJEWCs4%2BOszzlgj0LQh0miIbkz5l1d2n40hrhM5Z6ALE2qzNou49Em2hRe01aBBp570lbE2%2FcbvW0q0AxharDG7AAPNxW10ZCIbzVKbxwOaJXNZSayKU8xRAOoAOGaUp%2BGiWx4NVwGLOSqL%2FHb7ZLhCL%2BtQWINekxKKMnrLhy3Acr6KelMbMSPZeJ0H0cj%2BrWiY2EWXFHb5jUZUoJnp%2F5S0KVQE%2BqoGi4rmCngo9W6KAT3ev1s2F5Kc56RiGeNnMldYisrfUjJ8PU8XUG%2FfovCkopNGkUDGWtJ2zlcGbIOtgncCyMQ5WLCHc4RB%2BlZrqym9FvokBn8a9lYgf7q6npu0W7Ynu01TdYKAYr6BdYwHZ54lhGA%2F1NDB74aN%2F5dQ90%2FxX9mw58HMrQGK5FMPrp3ckGOqUB2omZcCyaUXNVjdp5%2FD1Dsz%2F3iS%2BDDdRCJQE54MnfBa7SzpZyHCrytDYTnh9s0WqKA%2BISV1S9RnwwpdcldvGJhgq25KeI8kuzoIvECkCBPpor%2F8PIivJkXxgwZNIPxRw0idU6p525Fwu8bs09DZL2ywHVFkfwo%2FBnSOx7qteSm4UejGDK5zUPzCdor0O4HS6eDepNSIAloNWWHtNGoHkMk7%2Bh35uM&X-Amz-Signature=0a73815bea20b563364bd67ee00d5c7bdd1317bd7f7658472408c465b8613554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

