---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRTLGXS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0D%2B8OtqNFwSP4qeAn670fyQboK0eHt9Og8dC2u6gUwIhAJ2d2Mi2bvBLeYXQYVIlXfrh3Ye0FXd%2Bo1j7ABSomd81KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jcqf%2BN9jdUiShD0q3AM0p7e1MUE77h2NtG9%2FdPUYUDwPjOkG%2FYqqELSIfJgEvOPjU8UG%2FmyssedHGKsyShvvLBQfnFRmiVBCKHhMIvvAycUv5h3Eqs3wCpMv0c2RSV8yaBTGOsiDAF8dpvZTrjXBNkdaZJyzWYlzJVYA08bAZX5jdqqjhqLEr8G%2F4zCI9z8V%2F3YGDF0IsDLm7kk9BC3CkKGe6fUoukIoyZC4o%2F%2BfCBu1SltU4BKSTX72oYMd3WluzyVvNBm5IqpzF6sqwwp4GgUa1SBlH9vUCEi4la%2FCFFVvxihjCAOi263Q%2Bs4DYe4ilEdgfByAcqfHbXpEmrT6qlgyENFLL7Xnq21bJ9mR8839%2Fly7OZgX55PoKT3dGzE%2FGCrInlmq5cC0izYaoUOuENWhI70ZI0hmjQSdARsXRk%2B38ZHey7OIja9HvB%2Fym2fsvc963a0cVx97wV9fXgg00Nh3%2F65JYrb4kcNynYmFeUp00JZII3YOeMwfyNCO7xewP9o10mhIEo9LOY3wxXraCd%2Fq3mQiN0TPkb4eWktE2CgIEmBLEkgPoAUbbhbaqAPA8e6tciugXnlzuEI6%2BDaW%2F10Pe7ciikr2eX9sHqFUNX9EIDhTONVLf5%2FSvsam66xm5hwrdj%2Fzj7BfbzCsrt7JBjqkASjrIlZ1TMZ1DiS2AnBrwzLJESPiUiJd9KybPJkzoWQn9072PO5p2sv06rkm7RY%2BOonOhk6sC7C8QMyCBkwu7utWqLzpV1mnvBgj681O%2FRGKB7HcChcxhM7Svj%2F0MgD6FNG9qpNLCKX64LFn8HGcTYpKmTpeQSoVsL5SoQg4MhcK41u1eOVu%2F4gJ6tXj3ZLA4IzG8VAmST5smK9t4QzcPdoNKG5V&X-Amz-Signature=0fc72a9c350bf42181442af5d631771328fd6ea36fb2a7ed54ba43336426de1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRTLGXS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM0D%2B8OtqNFwSP4qeAn670fyQboK0eHt9Og8dC2u6gUwIhAJ2d2Mi2bvBLeYXQYVIlXfrh3Ye0FXd%2Bo1j7ABSomd81KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5jcqf%2BN9jdUiShD0q3AM0p7e1MUE77h2NtG9%2FdPUYUDwPjOkG%2FYqqELSIfJgEvOPjU8UG%2FmyssedHGKsyShvvLBQfnFRmiVBCKHhMIvvAycUv5h3Eqs3wCpMv0c2RSV8yaBTGOsiDAF8dpvZTrjXBNkdaZJyzWYlzJVYA08bAZX5jdqqjhqLEr8G%2F4zCI9z8V%2F3YGDF0IsDLm7kk9BC3CkKGe6fUoukIoyZC4o%2F%2BfCBu1SltU4BKSTX72oYMd3WluzyVvNBm5IqpzF6sqwwp4GgUa1SBlH9vUCEi4la%2FCFFVvxihjCAOi263Q%2Bs4DYe4ilEdgfByAcqfHbXpEmrT6qlgyENFLL7Xnq21bJ9mR8839%2Fly7OZgX55PoKT3dGzE%2FGCrInlmq5cC0izYaoUOuENWhI70ZI0hmjQSdARsXRk%2B38ZHey7OIja9HvB%2Fym2fsvc963a0cVx97wV9fXgg00Nh3%2F65JYrb4kcNynYmFeUp00JZII3YOeMwfyNCO7xewP9o10mhIEo9LOY3wxXraCd%2Fq3mQiN0TPkb4eWktE2CgIEmBLEkgPoAUbbhbaqAPA8e6tciugXnlzuEI6%2BDaW%2F10Pe7ciikr2eX9sHqFUNX9EIDhTONVLf5%2FSvsam66xm5hwrdj%2Fzj7BfbzCsrt7JBjqkASjrIlZ1TMZ1DiS2AnBrwzLJESPiUiJd9KybPJkzoWQn9072PO5p2sv06rkm7RY%2BOonOhk6sC7C8QMyCBkwu7utWqLzpV1mnvBgj681O%2FRGKB7HcChcxhM7Svj%2F0MgD6FNG9qpNLCKX64LFn8HGcTYpKmTpeQSoVsL5SoQg4MhcK41u1eOVu%2F4gJ6tXj3ZLA4IzG8VAmST5smK9t4QzcPdoNKG5V&X-Amz-Signature=e6a0b8aea1a1f422f7c1bc898d985133154d40dbebaf1def74ae1b9ee5c7cbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

